const transcriptionOptions = {
  model: 'nova-2',
  smart_format: true,
  detect_entities: true
};

const redactionOptions = {
  model: 'nova-2',
  smart_format: true,
  redact: 'pii'
};

const analysisOptions = {
  language: 'en',
  sentiment: true,
  intents: true,
  summarize: true
};

module.exports = {
  transcriptionOptions,
  redactionOptions,
  analysisOptions
};
