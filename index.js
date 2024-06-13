const { getTranscription } = require('./lib/transcribe');
const { getRedactedAudio } = require('./lib/redact');

module.exports = {
  getTranscription,
  getRedactedAudio
};
