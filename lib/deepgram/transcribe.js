const fs = require('fs');
const { createClient } = require('@deepgram/sdk');
const { transcriptionOptions, redactionOptions, analysisOptions } = require('./config');

function extractTranscript(data) {
  // eslint-disable-next-line max-len
  const paragraphs = data.results.channels.flatMap((channel) => channel.alternatives.flatMap((alt) => alt.paragraphs.paragraphs));
  let ctr = 0;
  // Use reduce to process each paragraph and sentence, consolidating transcripts by speaker
  return  paragraphs.reduce((acc, paragraph) => {
    paragraph.sentences.forEach((sentence) => {
      const wordsDetails = data.results.channels
        .find((channel) => channel.alternatives.some((alt) => alt.paragraphs.paragraphs.includes(paragraph)))
        .alternatives[0].words
        .filter((word) => word.start >= sentence.start && word.end <= sentence.end)
        .map((word) => ({
          word: word.word,
          start: word.start,
          end: word.end,
          confidence: word.confidence
        }));

      acc.push({
        timestamp: sentence.start,
        duration: Math.round(1000 * (sentence.end - sentence.start)),
        startTime: sentence.start,
        endTime: sentence.end,
        speaker: ctr++ % 2,
        transcript: sentence.text,
        words: wordsDetails
      });
    });
    return acc;
  }, []);
}


const transcribe = async(logger, apiKey, filePath) => {
  logger.info(`Transcribing audio file: ${filePath}`);
  //creating a deepgram client
  const client = createClient(apiKey);
  //audio file buffer
  const fileBuffer = fs.readFileSync(filePath);
  //transcription
  // const { result:transcriptResult } = await client.listen.prerecorded.transcribeFile(fileBuffer, transcriptionOptions);
  //redaction
  const { result:redactionResult } = await client.listen.prerecorded.transcribeFile(fileBuffer, redactionOptions);
  const data = {
    'vendor' : 'deepgram',
    'model' : redactionResult.metadata.model_info[redactionResult.metadata.models[0]].arch,
    'channels' : redactionResult.metadata.channels,
    'createdAt': redactionResult.metadata.created
  };
  data.speechEvents = extractTranscript(redactionResult);
  const combinedTranscript = data.speechEvents.map(event => event.transcript).join(" ");
  data.redactionTimestamps = data.speechEvents.flatMap(event => event.words);
  //analysis and sentiment
  const { result:analysisResult } = await client.read.analyzeText({ text:combinedTranscript }, analysisOptions);
  const sentimentSegment = analysisResult.results.sentiments.segments[0];
  data.sentiment = sentimentSegment.sentiment;
  data.sentimentScore = sentimentSegment.sentiment_score;
  data.totalDuration = Math.round(1000 * redactionResult.metadata.duration);
  return data;
};

module.exports = transcribe;
