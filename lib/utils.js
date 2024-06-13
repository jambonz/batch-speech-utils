
const { createClient } = require('@deepgram/sdk');

function createDeepGramClient(DEEPGRAM_API_KEY) {
  return createClient(DEEPGRAM_API_KEY);
}


module.exports = {createDeepGramClient};
