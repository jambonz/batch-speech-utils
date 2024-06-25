const { request } = require('undici');
const { pipeline } = require('stream');
const fs = require('fs');
const path = require('path');
const os = require('os');
const fsP = require('fs').promises;
const createAudioService = require('..');
const audioService = createAudioService();

// Constants
const JAMBONZ_API_BASE_URL = 'https://jambonz.one/api/v1';

// Utility functions


async function readJSONFile(filePath) {
  try {
    const data = await fsP.readFile(filePath, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    throw new Error(`Error reading JSON file: ${err.message}`);
  }
}

async function writeJSONFile(filePath, data) {
  try {
    await fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  } catch (err) {
    throw new Error(`Error writing JSON file: ${err.message}`);
  }
}

function extractJambonzTrace(data, audioService) {
  const transcriptJson = {
    parties: { N: 2 },
    conversation: { 'as heard': {} }
  };

  data.resourceSpans.forEach((resourceSpan) => {
    resourceSpan.instrumentationLibrarySpans.forEach((librarySpan) => {
      librarySpan.spans.forEach((span) => {
        span.attributes.forEach((attribute) => {
          switch (attribute.key) {
            case 'from':
              if (attribute.value) transcriptJson.parties.from = attribute.value.stringValue;
              break;
            case 'duration':
              if (attribute.value) transcriptJson.duration = attribute.value.stringValue;
              break;
            case 'to':
              if (attribute.value) transcriptJson.parties.to = attribute.value.stringValue;
              break;
            case 'http.body':
              if (attribute.value) {
                const httpBody = JSON.parse(attribute.value.stringValue);
                if (httpBody.speech && httpBody.speech.alternatives && httpBody.speech.alternatives.length > 0) {
                  const alternative = httpBody.speech.alternatives[0];
                  transcriptJson.conversation['as heard']['full transcript'] = alternative.transcript;
                  transcriptJson.conversation['as heard']['confidence'] = alternative.confidence;
                  transcriptJson.conversation['as heard']['transcription vendor'] = httpBody.speech.vendor.name;
                  // eslint-disable-next-line max-len
                  transcriptJson.conversation['as heard'].timestamps = httpBody.speech.vendor.evt.channel.alternatives[0].words;
                }
              }
              break;
          }
        });
      });
    });
  });

  return transcriptJson;
}

async function fetchJambonzTrace() {
  const url = `${JAMBONZ_API_BASE_URL}/Accounts/${process.env.ACCOUNT_SID}/RecentCalls/trace/${process.env.TRACE_ID}`;
  const headers = {
    'Authorization': `Bearer ${process.env.JAMBONZ_API_TOKEN}`,
    'Accept': '*/*',
  };

  try {
    const { statusCode, body } = await request(url, { headers });
    if (statusCode !== 200) {
      throw new Error(`Request failed with status code: ${statusCode}`);
    }
    const data = await body.json();
    await writeJSONFile('response.json', data);
    console.log('Data has been received');
    const jsonData = await readJSONFile('./response.json');
    return extractJambonzTrace(jsonData, audioService);
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

async function downloadFile(url, tempFilePath, finalFilePath, token) {
  try {
    const { statusCode, body } = await request(url, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': '*/*'
      }
    });

    if (statusCode !== 200) {
      throw new Error(`Failed to download file: ${statusCode}`);
    }

    const tempWriteStream = fs.createWriteStream(tempFilePath);

    pipeline(
      body,
      tempWriteStream,
      async(err) => {
        if (err) {
          console.error('Pipeline failed:', err);
        } else {
          try {
            await processAndRedactFile(tempFilePath, finalFilePath);
          } catch (processingError) {
            console.error('Error processing file:', processingError);
          } finally {
            // Clean up the temporary file
            fs.unlink(tempFilePath, (err) => {
              if (err) {
                console.error('Error deleting temp file:', err);
              } else {
                console.log('Temporary file deleted.');
              }
            });
          }
        }
      }
    );
  } catch (error) {
    console.error('Error fetching file:', error);
  }
}


async function processAndRedactFile(audioFilePath, outputFilePath) {
  const credentials = { 'vendor': 'deepgram', 'apiKey': process.env.DEEPGRAM_API_KEY };

  try {
    const transcriptionResults = await audioService.transcribe(credentials, audioFilePath);
    const timestampsToRedact = transcriptionResults.redactionTimestamps;

    await audioService.redact({
      credentials: credentials,
      transcriptionData: timestampsToRedact,
      audioPath: audioFilePath,
      audioOutputPath: outputFilePath
    });

    const jambonzTrace = await fetchJambonzTrace();
    jambonzTrace.conversation['after the fact'] = {
      'full transcript': transcriptionResults.transcript,
      'confidence': transcriptionResults.confidence,
      'transcription vendor': transcriptionResults.vendor,
      'timestamps': timestampsToRedact
    };

    await writeJSONFile(`${process.env.OUTPUT_PATH}/transcription.json`, jambonzTrace);

    console.log('File redacted and saved successfully.');
  } catch (error) {
    console.error('Failed to redact audio:', error);
    throw error;
  }
}

// Main execution
async function main() {
  try {
    const [,, callId, date, format] = process.argv;
    if (!callId || !date || !format) {
      throw new Error('Missing required command line arguments. Usage: node app.js <callId> <date> <format>');
    }
    const url = `${JAMBONZ_API_BASE_URL}/Accounts/${process.env.ACCOUNT_SID}/RecentCalls/${callId}/record/${date}/${format}`;
    const finalFilePath = path.resolve(__dirname, path.join(process.env.OUTPUT_PATH, 'redacted_audio.wav'));
    const tempFolder = process.env.TEMP_FOLDER || os.tmpdir();
    const tempFilePath = path.join(tempFolder, 'tempDownloadedFile.mp3');


    await downloadFile(url, tempFilePath, finalFilePath, process.env.JAMBONZ_API_TOKEN);
  } catch (error) {
    console.error('Error in main process:', error);
    process.exit(1);
  }
}

main();
