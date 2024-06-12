const DeepgramTranscriber = require('./deepgramTranscriber');
const DeepgramRedactor = require('./deepgramRedactor');

class AudioProcessing {
  static getTranscriber(serviceType,DEEPGRAM_API_KEY, audioFilePath) {
    switch (serviceType) {
      case 'deepgram':
        return new DeepgramTranscriber(DEEPGRAM_API_KEY, audioFilePath);

      default:
        throw new Error('Unknown transcription service');
    }
  }

  static getRedactor(serviceType, audioFilePath) {
    switch (serviceType) {
      case 'deepgram':
        return new DeepgramRedactor(audioFilePath);

      default:
        throw new Error('Unknown redaction service');
    }
  }
}

module.exports = AudioProcessing;
