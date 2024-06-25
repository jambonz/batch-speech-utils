## Usage
#### Requires node js 20+

Run the script with the following command-line arguments:

- callId: The ID of the call to download.
- date: The date of the call recording. 
- format: The format of the recording file (e.g., mp3).

``` bash
node example-jambones-api.js <callId> <date> <format>

#example
node example-jambones-api.js 8e9####b-f##8-4bdf-85a6-####### 2024/06/06 mp3

```
### Environment Variables Setup
```bash 
export ACCOUNT_SID=your_account_sid
export JAMBONZ_API_TOKEN=your_jambonz_api_token
export DEEPGRAM_API_KEY=your_deepgram_api_key
export TEMP_FOLDER=optional_temp_folder_path
export TRACE_ID=call_trace_id
```

### Output:
#### Sample response :
```json
{
  "parties": {
    "N": 2,
    "from": "+18137978145",
    "to": "+15086908019"
  },
  "conversation": {
    "as heard": {
      "full transcript": "testing the trace id",
      "confidence": 0.98625356,
      "transcription vendor": "deepgram",
      "timestamps": [
        {
          "word": "testing",
          "start": 6.17,
          "end": 6.67,
          "confidence": 0.98625356
        },
        {
          "word": "the",
          "start": 6.73,
          "end": 7.13,
          "confidence": 0.99873596
        },
        {
          "word": "trace",
          "start": 7.13,
          "end": 7.45,
          "confidence": 0.8694936
        },
        {
          "word": "id",
          "start": 7.45,
          "end": 7.73,
          "confidence": 0.97171736
        }
      ]
    },
    "after the fact": {
      "full transcript": "Please say something, and we will echo it back to you. Testing the trace ID. You said testing the trace ID. The",
      "confidence": 0.9998342,
      "transcription vendor": "deepgram",
      "timestamps": [
        {
          "word": "please",
          "start": 1.28,
          "end": 1.78,
          "confidence": 0.72381705,
          "punctuated_word": "Please"
        },
        {
          "word": "say",
          "start": 1.8399999,
          "end": 2.08,
          "confidence": 0.99993443,
          "punctuated_word": "say"
        },
        {
          "word": "something",
          "start": 2.08,
          "end": 2.58,
          "confidence": 0.9418999,
          "punctuated_word": "something,"
        },
        {
          "word": "and",
          "start": 2.8,
          "end": 2.96,
          "confidence": 0.9998994,
          "punctuated_word": "and"
        },
        {
          "word": "we",
          "start": 2.96,
          "end": 3.1999998,
          "confidence": 0.9999466,
          "punctuated_word": "we"
        },
        {
          "word": "will",
          "start": 3.1999998,
          "end": 3.36,
          "confidence": 0.9999703,
          "punctuated_word": "will"
        },
        {
          "word": "echo",
          "start": 3.36,
          "end": 3.6799998,
          "confidence": 0.9999869,
          "punctuated_word": "echo"
        },
        {
          "word": "it",
          "start": 3.6799998,
          "end": 3.84,
          "confidence": 0.9998846,
          "punctuated_word": "it"
        },
        {
          "word": "back",
          "start": 3.84,
          "end": 4,
          "confidence": 0.9999819,
          "punctuated_word": "back"
        },
        {
          "word": "to",
          "start": 4,
          "end": 4.16,
          "confidence": 0.9998343,
          "punctuated_word": "to"
        },
        {
          "word": "you",
          "start": 4.16,
          "end": 4.66,
          "confidence": 0.9999392,
          "punctuated_word": "you."
        },
        {
          "word": "testing",
          "start": 7.314937,
          "end": 7.794937,
          "confidence": 0.9992229,
          "punctuated_word": "Testing"
        },
        {
          "word": "the",
          "start": 7.794937,
          "end": 7.9549375,
          "confidence": 0.9970893,
          "punctuated_word": "the"
        },
        {
          "word": "trace",
          "start": 7.9549375,
          "end": 8.274938,
          "confidence": 0.99184144,
          "punctuated_word": "trace"
        },
        {
          "word": "id",
          "start": 8.274938,
          "end": 8.774938,
          "confidence": 0.9883225,
          "punctuated_word": "ID."
        },
        {
          "word": "you",
          "start": 9.794937,
          "end": 10.034937,
          "confidence": 0.99948525,
          "punctuated_word": "You"
        },
        {
          "word": "said",
          "start": 10.034937,
          "end": 10.534937,
          "confidence": 0.99984527,
          "punctuated_word": "said"
        },
        {
          "word": "testing",
          "start": 10.754937,
          "end": 11.234938,
          "confidence": 0.7150886,
          "punctuated_word": "testing"
        },
        {
          "word": "the",
          "start": 11.234938,
          "end": 11.3949375,
          "confidence": 0.99970514,
          "punctuated_word": "the"
        },
        {
          "word": "trace",
          "start": 11.3949375,
          "end": 11.714937,
          "confidence": 0.99983966,
          "punctuated_word": "trace"
        },
        {
          "word": "id",
          "start": 11.714937,
          "end": 12.214937,
          "confidence": 0.9862746,
          "punctuated_word": "ID."
        },
        {
          "word": "the",
          "start": 12.434937,
          "end": 12.934937,
          "confidence": 0.8898546,
          "punctuated_word": "The"
        }
      ]
    }
  }
}
```
