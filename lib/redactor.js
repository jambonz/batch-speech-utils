class Redactor {
  constructor() {
    if (new.target === Redactor) {
      throw new TypeError('Cannot construct Redactor instances directly');
    }
  }

  async redactAudio(transcriptionData, audioPath, audioOutputPath, options) {
    throw new Error("Method 'redactAudio' must be implemented.");
  }
}

module.exports = Redactor;
