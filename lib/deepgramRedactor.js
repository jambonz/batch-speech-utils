const Redactor = require('./redactor');
const ffmpeg = require('fluent-ffmpeg');

class DeepGramRedactor extends Redactor {
  async redactAudio(transcriptionData, audioPath, audioOutputPath, { delta = 0.05 } = {}) {
    const command = ffmpeg(audioPath)
      .outputFormat('wav'); // Ensure output format is WAV

    // Iterate over transcription data to apply audio filters
    for (let i = 0; i < transcriptionData.length; i++) {
      const {word, start} = transcriptionData[i];
      let end = transcriptionData[i].end;  // Default end time

      // Check if the word needs redaction
      if (word.startsWith('[') && word.endsWith(']')) {
        // Find the start of the next non-redacted word
        for (let j = i + 1; j < transcriptionData.length; j++) {
          if (!(transcriptionData[j].word.startsWith('[') && transcriptionData[j].word.endsWith(']'))) {
            end = transcriptionData[j].start;
            break;
          }
        }
        command.audioFilters({
          filter: 'volume',
          options: `volume=0:enable='between(t,${start - delta},${end})'`  // Applying silence
        });

        // Log the redacted segments
        console.log(`Redacting from ${start}s to ${end}s: "${word}"`);
      }
    }
    // Handlers for command execution
    command.on('end', () => {
      console.log(`Redacted audio saved at ${audioOutputPath}`);
    }).on('error', (err, stdout, stderr) => {
      console.error('Error processing audio file:', err.message);
      console.error('ffmpeg stdout:', stdout);
      console.error('ffmpeg stderr:', stderr);
    }).saveToFile(audioOutputPath);
  }
}
module.exports = DeepGramRedactor;
