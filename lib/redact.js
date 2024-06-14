const ffmpeg = require('fluent-ffmpeg');

const redact = async(logger, { transcriptionData, audioPath, audioOutputPath, delta = 0.05 }) => {
  logger.info(`Redacting audio file: ${audioPath}`);
  console.log(transcriptionData);
  return new Promise((resolve, reject) => {
    const command = ffmpeg(audioPath)
      .outputFormat('wav'); // Ensure output format is WAV

    // Iterate over transcription data to apply audio filters
    transcriptionData.forEach((data, i) => {
      const { word, start } = data;
      let end = data.end; // Default end time

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
    });

    // Handlers for command execution
    command.on('end', () => {
      console.log(`Redacted audio saved at ${audioOutputPath}`);
      resolve();  // Resolve the promise on successful completion
    }).on('error', (err, stdout, stderr) => {
      console.log(`Current working directory: ${process.cwd()}`);
      console.log(typeof (audioOutputPath));
      console.error('Error processing audio file:', err.message);
      console.error('ffmpeg stdout:', stdout);
      console.error('ffmpeg stderr:', stderr);
      reject(err);  // Reject the promise on error
    }).saveToFile(audioOutputPath);
  });
};

module.exports =  redact ;
