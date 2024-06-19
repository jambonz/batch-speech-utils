const { request } = require('undici');
const { pipeline } = require('stream');
const fs = require('fs');
const path = require('path');

const os = require('os');
const createAudioService = require('..');

const audioService = createAudioService();

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

// Function to process and redact the file
async function processAndRedactFile(audioFilePath, outputFilePath) {
  const credentials = { 'vendor': 'deepgram', 'apiKey': process.env.DEEPGRAM_API_KEY };

  try {
    const transcriptionResults = await audioService.transcribe(credentials, audioFilePath);
    console.log('Transcription Results:', transcriptionResults);
    const timestampsToRedact = transcriptionResults.redactionTimestamps;

    await audioService.redact({
      credentials: credentials,
      transcriptionData: timestampsToRedact,
      audioPath: audioFilePath,
      audioOutputPath: outputFilePath
    });
    console.log('File redacted and saved successfully.');
  } catch (error) {
    console.error('Failed to redact audio:', error);
  }
}

const [,, callId, date, format] = process.argv;

// Construct the URL
const url = `https://jambonz.one/api/v1/Accounts/${process.env.ACCOUNT_SID}/RecentCalls/${callId}/record/${date}/${format}`;

// Define the path where the file will be saved
const finalFilePath = path.resolve(__dirname, path.join(process.env.OUTPUT_PATH, 'redacted_audio.wav'));

// Get the temporary folder from environment variable or use OS temp folder
const tempFolder = process.env.TEMP_FOLDER || os.tmpdir();
const tempFilePath = path.join(tempFolder, 'tempDownloadedFile.mp3');

// Call the function to download and process the file
downloadFile(url, tempFilePath, finalFilePath, process.env.JAMBONZ_API_TOKEN);
