const fs = require('fs');

async function transcribeFile(deepgram, filePath) {
  const fileBuffer = fs.readFileSync(filePath);
  const options = { model: 'nova-2', smart_format: true, detect_entities: true };
  const { result } = await deepgram.listen.prerecorded.transcribeFile(fileBuffer, options);
  return result;
}

async function redactFile(deepgram, filePath) {
  const fileBuffer = fs.readFileSync(filePath);
  const options = { model: 'nova-2', smart_format: true, redact: 'pii' };
  const { result } = await deepgram.listen.prerecorded.transcribeFile(fileBuffer, options);
  return result;
}

async function analyzeText(deepgram, text) {
  const options = { language: 'en', sentiment: true, intents: true, summarize: true };
  const { result } = await deepgram.read.analyzeText({ text }, options);
  return result;
}


async function processAudio(deepgram, filePath) {
  try {
    const transcription = await transcribeFile(deepgram, filePath);
    const redaction = await redactFile(deepgram, filePath);
    const transcript = transcription.results.channels[0].alternatives[0].transcript;
    const timestamps = transcription.results.channels[0].alternatives[0].words;
    const redactionTimestamps = redaction.results.channels[0].alternatives[0].words;
    const redacted = redaction.results.channels[0].alternatives[0].transcript;
    const entities = transcription.results.channels[0].alternatives[0].entities;

    const analysisResult = await analyzeText(deepgram, transcript);
    const sentimentSegment = analysisResult.results.sentiments.segments[0];
    const sentiment = sentimentSegment.sentiment;
    const sentimentScore = sentimentSegment.sentiment_score;

    return {
      transcript,
      timestamps,
      redactionTimestamps,
      redacted,
      sentiment,
      sentimentScore,
      entities
    };
  } catch (error) {
    console.error('Error processing audio:', error);
    throw error;
  }
}

module.exports = {
  transcribeFile,
  analyzeText,
  processAudio,
  redactFile
};
