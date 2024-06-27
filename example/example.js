const createAudioService = require('..');

const audioService = createAudioService();
// Get the transcription service configured with the default noopLogger


// Example usage of the transcribe function
async function runExample() {
  const audioFilePath = '../audio/a.mp3';
  const outputFilePath = './outs/redacted_audio.wav';
  const credentials = {'vendor': 'deepgram', 'apiKey': process.env.DEEPGRAM_API_KEY};

  try {

    const transcriptionResults = await audioService.transcribe(credentials, audioFilePath);
    console.log('Transcription Results:', transcriptionResults);
    const timestampsToRedact = transcriptionResults.redactionTimestamps;

    // eslint-disable-next-line max-len
    await audioService.redact({credentials:credentials, transcriptionData:timestampsToRedact, audioPath:audioFilePath, audioOutputPath:outputFilePath });
  } catch (error) {
    console.error('Failed to redact audio:', error);
  }
}
runExample();
