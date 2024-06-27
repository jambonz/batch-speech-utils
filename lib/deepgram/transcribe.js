const fs = require('fs');
const { createClient } = require('@deepgram/sdk');
const { redactionOptions, analysisOptions } = require('./config');

function extractTranscript(data) {
  var words = [];
  data.results.channels.forEach((d, idx) => {
    d.alternatives.forEach((f) => {
      f.words.forEach((w) => {w.channel = idx % 2; words.push(w); });
    });
  });
  words = words.sort((a, b) => a.start - b.start);
  const aggregatedSentences = [];
  let currentChannel = null;
  let currentSentence = null;

  words.forEach((word) => {
    if (currentChannel === null) {
      currentChannel = word.channel;
      currentSentence = {
        start: word.start,
        end: word.end,
        duration: word.end - word.start,
        speaker: word.channel,
        sentence: word.punctuated_word,
        words: [{ word: word.word, start: word.start, end: word.end }]
      };
    } else if (word.channel === currentChannel) {
      if (currentSentence.sentence) {
        currentSentence.sentence += ' ' + (word.punctuated_word);
      } else {
        currentSentence.sentence = word.punctuated_word || word.word;
      }
      currentSentence.words.push({ word: word.word, start: word.start, end: word.end });
      currentSentence.end = word.end; // Update end time of the current sentence
      currentSentence.duration = currentSentence.end - currentSentence.start; // Calculate duration correctly
    } else {
      aggregatedSentences.push(currentSentence);
      currentChannel = word.channel;
      currentSentence = {
        start: word.start,
        end: word.end,
        duration: word.end - word.start,
        speaker: word.channel,
        sentence: word.punctuated_word,
        words: [{ word: word.word, start: word.start, end: word.end }]
      };
    }
  });

  // Push the last sentence
  if (currentSentence !== null) {
    aggregatedSentences.push(currentSentence);
  }

  return aggregatedSentences;
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
  const combinedTranscript = data.speechEvents.map((event) => event.sentence).join(' ');
  data.redactionTimestamps = data.speechEvents.flatMap((event) => event.words);
  //analysis and sentiment
  const { result:analysisResult } = await client.read.analyzeText({ text:combinedTranscript }, analysisOptions);
  const sentimentSegment = analysisResult.results.sentiments.segments[0];
  data.sentiment = sentimentSegment.sentiment;
  data.sentimentScore = sentimentSegment.sentiment_score;
  data.totalDuration = Math.round(1000 * redactionResult.metadata.duration);

  return data;
};

module.exports = transcribe;
