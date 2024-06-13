const { getTranscription, getRedactedAudio } = require('..'); // Assuming your index.js is in the parent directory

async function runExample() {
  const audioFilePath = '../audio/a.mp3';
  const outputFilePath = './outs/redacted_audio.wav';

  try {
    // Create a transcriber and a redactor from the factory
    const transcription = await getTranscription('deepgram',
      process.env.DEEPGRAM_API_KEY,
      audioFilePath);
    console.log('Transcription completed:', transcription);

    // Perform redaction
    await getRedactedAudio('deepgram', transcription.redactionTimestamps, audioFilePath, outputFilePath);
  } catch (error) {
    console.error('Error processing audio:', error);
  }
}

runExample();
