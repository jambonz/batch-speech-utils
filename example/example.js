const { AudioProcessor } = require('../index'); // Assuming your index.js is in the parent directory

async function runExample() {
  const audioFilePath = '../audio/a.mp3';
  const outputFilePath = './redacted_audio.wav';

  try {
    // Create a transcriber and a redactor from the factory
    const transcriber = AudioProcessor.getTranscriber('deepgram',process.env.DEEPGRAM_API_KEY, audioFilePath);
    const redactor = AudioProcessor.getRedactor('deepgram', audioFilePath);

    // Perform transcription
    const transcription = await transcriber.processAudio(audioFilePath);
    console.log('Transcription completed:', transcription);

    // Perform redaction
    await redactor.redactAudio(transcription.redactionTimestamps, audioFilePath, outputFilePath);
  } catch (error) {
    console.error('Error processing audio:', error);
  }
}

runExample();
