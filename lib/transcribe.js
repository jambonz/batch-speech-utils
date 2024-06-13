const { createDeepGramClient } = require('./utils');
const fs = require('fs');
const { processAudio } = require('./get-transcription-deepgram');
const assert = require('assert');

function getTranscription(vendor, apiKey, filePath) {
  assert.ok(['deepgram'].includes(vendor), 'vendor not supported');
  if (vendor === 'deepgram') {
    const deepgramClient = createDeepGramClient(apiKey);
    assert.ok(deepgramClient, 'Invalid Deepgram API key');
    return processAudio(deepgramClient, filePath);
  }
  else {
    throw new Error(`Unsupported vendor: ${vendor}`);
  }

}

module.exports = {getTranscription};
