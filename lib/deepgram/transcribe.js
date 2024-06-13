const fs = require('fs');
const { createClient } = require('@deepgram/sdk');

const transcribe = async(logger, apiKey, filePath) => {
  logger.info(`Transcribing audio file: ${filePath}`);
  const client = createClient(apiKey);
  const fileBuffer = fs.readFileSync(filePath);
  const options = { model: 'nova-2', smart_format: true, detect_entities: true };
  const { result } = await client.listen.prerecorded.transcribeFile(fileBuffer, options);
  return result;
};

module.exports = transcribe;
