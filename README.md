# batch-speech-utils
Non-realtime speech-to-text utilities for transcribing calls after they have completed



## Audio Processing Library

This library provides tools for audio transcription, redaction, and analysis, utilizing the Deepgram API. It's designed to handle sensitive information in audio files by redacting it appropriately before any further processing or analysis.

### Prerequisites

- **Node.js**: Ensure Node.js is installed on your machine.
- **Deepgram API Key**: You need a valid API key from Deepgram.

### Installation

Clone the repository and install the dependencies:

```bash
git clone [your-repo-url]
cd [your-repo-directory]
npm install
```
### Configuration
Create a .env file in the project root and define the following variables:

```bash
DEEPGRAM_API_KEY=your_deepgram_api_key_here
AUDIO_DIR=path_to_your_audio_files
```


