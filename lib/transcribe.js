const assert = require('assert');
const {transcribe:dgTranscribe} = require('./deepgram');


const transcribe = async(logger, credentials, filePath) => {
  const { vendor } = credentials;

  switch (credentials.vendor) {
    case 'deepgram':
      assert.ok(credentials.apiKey, 'Deepgram API key is required');
      return await dgTranscribe(logger, credentials.apiKey, filePath);
    default:
      throw new Error(`Unsupported vendor: ${vendor}`);
  }
};

module.exports = transcribe;
