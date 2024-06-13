const { redactAudioDeepgram } = require('./make-redact-audio-deepgram');

const assert = require('assert');

function getRedactedAudio(vendor, transcriptionData, audioPath, audioOutputPath) {
  assert.ok(['deepgram', 'otherVendor'].includes(vendor), 'vendor not supported');

  if (vendor === 'deepgram') {
    return redactAudioDeepgram(transcriptionData, audioPath, audioOutputPath);
  }
  else {
    throw new Error(`Unsupported vendor: ${vendor}`);
  }
}

module.exports = { getRedactedAudio };
