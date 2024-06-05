const { audioProcess } = require('./lib/transcription');
const { redactSensitiveInfo } = require("./lib/audioRedaction");
const path = require('path');
const fs = require('fs-extra');
require('dotenv').config();

const audioDir = process.env.AUDIO_DIR;
const inputFile = 'sampleop.wav';

const audioPath = path.join(audioDir, inputFile);
const outputDir = path.join(__dirname, 'redacts');
const dG = new audioProcess(process.env.DEEPGRAM_API_KEY, audioPath);
const outputPathAudio = path.join(outputDir, `${inputFile.split('.')[0]}-redacted.wav`);
const outputPathJson = path.join(__dirname, 'redacts', `${inputFile.split('.')[0]}-redacts.json`);

async function processAndRedactAudio() {
  try {
    const results = await dG.processAudio();
    const jsonContent = JSON.stringify(results, null, 2);
    await fs.ensureDir(path.dirname(outputPathJson));

    await fs.writeFile(outputPathJson, jsonContent, 'utf-8');
    console.dir({ analysis: [results] }, { depth: null });
    if (results && results.redactionTimestamps) {
      redactSensitiveInfo(results.redactionTimestamps,audioPath, outputPathAudio);
    }
  } catch (error) {
    console.error('Error in main execution:', error);
  }
}
processAndRedactAudio();
