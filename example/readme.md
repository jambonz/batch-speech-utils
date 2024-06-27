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
  "participants": [
    {
      "type": "human",
      "initiatedConversation": true,
      "id": {
        "name": null,
        "phone": "+18137978145"
      }
    },
    {
      "type": "machine",
      "initiatedConversation": false,
      "id": {
        "name": "jambonz.one",
        "phone": "+15086908019"
      }
    }
  ],
  "duration": 0,
  "transcript": {
    "vendor": "deepgram",
    "model": "nova-2",
    "channels": 2,
    "createdAt": "2024-06-27T07:02:04.985Z",
    "speechEvents": [
      {
        "start": 1.36,
        "end": 4.66,
        "duration": 3.3,
        "speaker": 1,
        "sentence": "Please say something, and we will echo it back to you.",
        "words": [
          {
            "word": "please",
            "start": 1.36,
            "end": 1.8399999
          },
          {
            "word": "say",
            "start": 1.8399999,
            "end": 2
          },
          {
            "word": "something",
            "start": 2,
            "end": 2.5
          },
          {
            "word": "and",
            "start": 2.72,
            "end": 3.04
          },
          {
            "word": "we",
            "start": 3.04,
            "end": 3.1999998
          },
          {
            "word": "will",
            "start": 3.1999998,
            "end": 3.36
          },
          {
            "word": "echo",
            "start": 3.36,
            "end": 3.6799998
          },
          {
            "word": "it",
            "start": 3.6799998,
            "end": 3.84
          },
          {
            "word": "back",
            "start": 3.84,
            "end": 4
          },
          {
            "word": "to",
            "start": 4,
            "end": 4.16
          },
          {
            "word": "you",
            "start": 4.16,
            "end": 4.66
          }
        ]
      },
      {
        "start": 6.24,
        "end": 7.8599997,
        "duration": 1.6199997000000002,
        "speaker": 0,
        "sentence": "Hey. My name is [NAME_GIVEN_1].",
        "words": [
          {
            "word": "hey",
            "start": 6.24,
            "end": 6.72
          },
          {
            "word": "my",
            "start": 6.72,
            "end": 6.8799996
          },
          {
            "word": "name",
            "start": 6.8799996,
            "end": 7.12
          },
          {
            "word": "is",
            "start": 7.12,
            "end": 7.3599997
          },
          {
            "word": "[NAME_GIVEN_1]",
            "start": 7.3599997,
            "end": 7.8599997
          }
        ]
      },
      {
        "start": 8.934999,
        "end": 18.158937,
        "duration": 9.223938000000002,
        "speaker": 1,
        "sentence": "You said, hey. My name is [NAME_GIVEN_1]. The confidence score was 1.00. The speech service was provided by [ORGANIZATION_1].",
        "words": [
          {
            "word": "you",
            "start": 8.934999,
            "end": 9.255
          },
          {
            "word": "said",
            "start": 9.255,
            "end": 9.755
          },
          {
            "word": "hey",
            "start": 10.055,
            "end": 10.295
          },
          {
            "word": "my",
            "start": 10.295,
            "end": 10.375
          },
          {
            "word": "name",
            "start": 10.375,
            "end": 10.695
          },
          {
            "word": "is",
            "start": 10.695,
            "end": 10.855
          },
          {
            "word": "[NAME_GIVEN_1]",
            "start": 10.855,
            "end": 11.355
          },
          {
            "word": "the",
            "start": 11.735,
            "end": 11.895
          },
          {
            "word": "confidence",
            "start": 11.895,
            "end": 12.395
          },
          {
            "word": "score",
            "start": 12.535,
            "end": 12.855
          },
          {
            "word": "was",
            "start": 12.855,
            "end": 13.254999
          },
          {
            "word": "1.00",
            "start": 13.254999,
            "end": 13.754999
          },
          {
            "word": "the",
            "start": 15.498938,
            "end": 15.738937
          },
          {
            "word": "speech",
            "start": 15.738937,
            "end": 16.138937
          },
          {
            "word": "service",
            "start": 16.138937,
            "end": 16.618937
          },
          {
            "word": "was",
            "start": 16.618937,
            "end": 16.938938
          },
          {
            "word": "provided",
            "start": 16.938938,
            "end": 17.418938
          },
          {
            "word": "by",
            "start": 17.418938,
            "end": 17.658937
          },
          {
            "word": "[ORGANIZATION_1]",
            "start": 17.658937,
            "end": 18.158937
          }
        ]
      }
    ],
    "sentiment": "neutral",
    "sentimentScore": 0.110107421875,
    "totalDuration": 19224
  }
}
```
