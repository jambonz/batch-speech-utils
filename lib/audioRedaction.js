const ffmpeg = require('fluent-ffmpeg');
const fs = require('fs').promises;


function redactSensitiveInfo(transcriptionData, audioPath, audioOutputPath, delta = 0.15) {
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

            // Apply the volume filter to silence from the start of the current word to the start of the next non-redacted word
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

module.exports = {redactSensitiveInfo};