const {audioProcess} = require('./lib/transcription');
const axios = require('axios');
const {redactSensitiveInfo} = require('./lib/audioRedaction');
const path = require('path');
const fs = require('fs-extra');
require('dotenv').config();

const audioDir = process.env.AUDIO_DIR;
const accountSid = process.env.ACCOUNT_SID;
const callSid = process.env.CALL_SID;
const jambonzApiToken = process.env.JAMBONZ_API_TOKEN;
const recordingDate = '2024/06/06';

const audioURL = `https://jambonz.one/api/v1/Accounts/${accountSid}/RecentCalls/${callSid}/record/${recordingDate}/mp3`;
console.log(audioURL);

const config = {
  responseType: 'stream',
  headers: {
    Authorization: `Bearer ${jambonzApiToken}`
  }
};

// Function to download and process audio
async function downloadAndProcessAudio() {
  try {
    const response = await axios.get(audioURL, config);
    const audioFilePath = path.join(audioDir, 'recording.mp3');
    const writer = fs.createWriteStream(audioFilePath);

    response.data.pipe(writer);

    await new Promise((resolve, reject) => {
      writer.on('finish', resolve);
      writer.on('error', reject);
    });

    console.log('File downloaded successfully');
    await processAndRedactAudio(audioFilePath);
  } catch (error) {
    console.error('Error downloading the file:', error);
  }
}

// Function to process and redact audio
async function processAndRedactAudio(audioFilePath) {
  try {
    const dG = new audioProcess(process.env.DEEPGRAM_API_KEY, audioFilePath);
    const results = await dG.processAudio();
    const jsonContent = JSON.stringify(results, null, 2);
    const outputPathJson = path.join(__dirname, 'redacts', `${path.basename(audioFilePath, '.mp3')}-redacts.json`);
    const outputPathAudio = path.join(__dirname, 'redacts', `${path.basename(audioFilePath, '.mp3')}-redacted.wav`);

    await fs.ensureDir(path.dirname(outputPathJson));
    await fs.writeFile(outputPathJson, jsonContent, 'utf-8');
    console.dir({analysis: [results]}, {depth: null});

    if (results && results.redactionTimestamps) {
      await redactSensitiveInfo(results.redactionTimestamps, audioFilePath, outputPathAudio);
    }
  } catch (error) {
    console.error('Error in processing audio:', error);
  }
}

// Start the process
downloadAndProcessAudio();
