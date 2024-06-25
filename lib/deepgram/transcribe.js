const fs = require('fs');
const { createClient } = require('@deepgram/sdk');
const { transcriptionOptions, redactionOptions, analysisOptions } = require('./config');

const transcribe = async(logger, apiKey, filePath) => {
  logger.info(`Transcribing audio file: ${filePath}`);
  //creating a deepgram client
  const client = createClient(apiKey);
  //audio file buffer
  const fileBuffer = fs.readFileSync(filePath);
  //transcription
  const { result:transcriptResult } = await client.listen.prerecorded.transcribeFile(fileBuffer, transcriptionOptions);
  const transcript = transcriptResult.results.channels[0].alternatives[0].transcript;
  const timestamps = transcriptResult.results.channels[0].alternatives[0].words;
  const entities = transcriptResult.results.channels[0].alternatives[0].entities;
  const confidence = transcriptResult.results.channels[0].alternatives[0].confidence;
  //redaction
  const { result:redactionResult } = await client.listen.prerecorded.transcribeFile(fileBuffer, redactionOptions);
  const redactionTimestamps = redactionResult.results.channels[0].alternatives[0].words;
  const redacted = redactionResult.results.channels[0].alternatives[0].transcript;
  //analysis and sentiment
  const { result:analysisResult } = await client.read.analyzeText({ text:transcript }, analysisOptions);
  const sentimentSegment = analysisResult.results.sentiments.segments[0];
  const sentiment = sentimentSegment.sentiment;
  const sentimentScore = sentimentSegment.sentiment_score;
  const vendor = 'deepgram';
  return {
    vendor,
    transcript,
    timestamps,
    redactionTimestamps,
    redacted,
    sentiment,
    sentimentScore,
    entities,
    confidence
  };
};

module.exports = transcribe;
