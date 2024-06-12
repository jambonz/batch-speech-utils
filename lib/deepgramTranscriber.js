// deepgramTranscriber.js
const Transcriber = require('./transcriber');
const { createClient } = require('@deepgram/sdk');
const fs = require('fs');

class DeepgramTranscriber extends Transcriber {
  constructor(apiKey, audioFilePath) {
    super(audioFilePath);
    this.deepgram = createClient(apiKey);
  }

  async transcribeFile(filePath) {
    const { result } = await this.deepgram.listen.prerecorded.transcribeFile(
      fs.readFileSync(filePath),
      { model: 'nova-2', smart_format: true, detect_entities: true }
    );
    return result;
  }

  async redactFile(filePath) {
    const { result } = await this.deepgram.listen.prerecorded.transcribeFile(
      fs.readFileSync(filePath),
      { model: 'nova-2', smart_format: true, redact: 'pii' }
    );
    return result;
  }

  async analyzeText(text) {
    const { result } = await this.deepgram.read.analyzeText(
      { text },
      { language: 'en', sentiment: true, intents: true, summarize: true }
    );
    return result;
  }

  async processAudio(filePath = this.audioDir) {
    try {
      const transcription = await this.transcribeFile(filePath);
      const redaction = await this.redactFile(filePath);
      const transcript = transcription.results.channels[0].alternatives[0].transcript;
      const timestamps = transcription.results.channels[0].alternatives[0].words;
      const redactionTimestamps = redaction.results.channels[0].alternatives[0].words;
      const redacted = redaction.results.channels[0].alternatives[0].transcript;
      const entities = transcription.results.channels[0].alternatives[0].entities;

      const analysisResult = await this.analyzeText(transcript);
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
      throw error;
    }
  }
}

module.exports = DeepgramTranscriber;
