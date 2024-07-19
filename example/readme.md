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
        "phone": "Suraj63"
      }
    },
    {
      "type": "machine",
      "initiatedConversation": false,
      "id": {
        "name": "jambonz.one",
        "phone": "app-9ea8bd83-eaef-4f22-a1a2-150a10a5483a"
      }
    }
  ],
  "duration": 161000,
  "call_start": "2024-07-19T03:01:23.644Z",
  "transcript": {
    "vendor": "deepgram",
    "model": "nova-2",
    "channels": 2,
    "createdAt": "2024-07-19T06:30:26.456Z",
    "speechEvents": [
      {
        "spokenAt": "2024-07-19T03:01:44.704Z",
        "start": 21.060001,
        "end": 25.08,
        "duration": 4.0199989999999985,
        "speaker": 0,
        "sentence": "Hello, and thank you for calling [ORGANIZATION_1]. My name is [NAME_GIVEN_1]. How can I assist you today?",
        "words": [
          {
            "word": "hello",
            "start": 21.060001,
            "end": 21.54
          },
          {
            "word": "and",
            "start": 21.54,
            "end": 21.7
          },
          {
            "word": "thank",
            "start": 21.7,
            "end": 21.94
          },
          {
            "word": "you",
            "start": 21.94,
            "end": 22.1
          },
          {
            "word": "for",
            "start": 22.1,
            "end": 22.18
          },
          {
            "word": "calling",
            "start": 22.18,
            "end": 22.58
          },
          {
            "word": "[ORGANIZATION_1]",
            "start": 22.58,
            "end": 23.060001
          },
          {
            "word": "my",
            "start": 23.060001,
            "end": 23.14
          },
          {
            "word": "name",
            "start": 23.14,
            "end": 23.3
          },
          {
            "word": "is",
            "start": 23.3,
            "end": 23.46
          },
          {
            "word": "[NAME_GIVEN_1]",
            "start": 23.46,
            "end": 23.7
          },
          {
            "word": "how",
            "start": 23.7,
            "end": 23.86
          },
          {
            "word": "can",
            "start": 23.86,
            "end": 24.02
          },
          {
            "word": "i",
            "start": 24.02,
            "end": 24.18
          },
          {
            "word": "assist",
            "start": 24.18,
            "end": 24.5
          },
          {
            "word": "you",
            "start": 24.5,
            "end": 24.58
          },
          {
            "word": "today",
            "start": 24.58,
            "end": 25.08
          }
        ]
      },
      {
        "spokenAt": "2024-07-19T03:01:50.369Z",
        "start": 26.725,
        "end": 29.225,
        "duration": 2.5,
        "speaker": 1,
        "sentence": "Hi. I have a question about my recent order.",
        "words": [
          {
            "word": "hi",
            "start": 26.725,
            "end": 27.045
          },
          {
            "word": "i",
            "start": 27.045,
            "end": 27.205
          },
          {
            "word": "have",
            "start": 27.205,
            "end": 27.445
          },
          {
            "word": "a",
            "start": 27.445,
            "end": 27.525
          },
          {
            "word": "question",
            "start": 27.525,
            "end": 27.925
          },
          {
            "word": "about",
            "start": 27.925,
            "end": 28.165
          },
          {
            "word": "my",
            "start": 28.165,
            "end": 28.325
          },
          {
            "word": "recent",
            "start": 28.325,
            "end": 28.725
          },
          {
            "word": "order",
            "start": 28.725,
            "end": 29.225
          }
        ]
      },
      {
        "spokenAt": "2024-07-19T03:01:53.039Z",
        "start": 29.395,
        "end": 32.775,
        "duration": 3.379999999999999,
        "speaker": 0,
        "sentence": "I'd be happy to help you. Can I please have your full name and order number?",
        "words": [
          {
            "word": "i'd",
            "start": 29.395,
            "end": 29.635
          },
          {
            "word": "be",
            "start": 29.635,
            "end": 29.795
          },
          {
            "word": "happy",
            "start": 29.795,
            "end": 30.035
          },
          {
            "word": "to",
            "start": 30.035,
            "end": 30.115
          },
          {
            "word": "help",
            "start": 30.115,
            "end": 30.275
          },
          {
            "word": "you",
            "start": 30.275,
            "end": 30.515
          },
          {
            "word": "can",
            "start": 30.515,
            "end": 30.675
          },
          {
            "word": "i",
            "start": 30.675,
            "end": 30.835
          },
          {
            "word": "please",
            "start": 30.835,
            "end": 31.075
          },
          {
            "word": "have",
            "start": 31.075,
            "end": 31.235
          },
          {
            "word": "your",
            "start": 31.235,
            "end": 31.395
          },
          {
            "word": "full",
            "start": 31.395,
            "end": 31.635
          },
          {
            "word": "name",
            "start": 31.635,
            "end": 31.795
          },
          {
            "word": "and",
            "start": 31.795,
            "end": 32.035
          },
          {
            "word": "order",
            "start": 32.035,
            "end": 32.275
          },
          {
            "word": "number",
            "start": 32.275,
            "end": 32.775
          }
        ]
      },
      {
        "spokenAt": "2024-07-19T03:01:59.294Z",
        "start": 35.65,
        "end": 42.055,
        "duration": 6.405000000000001,
        "speaker": 1,
        "sentence": "Sure. My name is [NAME_1], and my order number is [NUMERICAL_PII_1].",
        "words": [
          {
            "word": "sure",
            "start": 35.65,
            "end": 36.15
          },
          {
            "word": "my",
            "start": 36.690002,
            "end": 36.93
          },
          {
            "word": "name",
            "start": 36.93,
            "end": 37.09
          },
          {
            "word": "is",
            "start": 37.09,
            "end": 37.33
          },
          {
            "word": "[NAME_1]",
            "start": 37.33,
            "end": 37.97
          },
          {
            "word": "and",
            "start": 37.97,
            "end": 38.21
          },
          {
            "word": "my",
            "start": 38.21,
            "end": 38.370003
          },
          {
            "word": "order",
            "start": 38.370003,
            "end": 38.61
          },
          {
            "word": "number",
            "start": 38.61,
            "end": 38.850002
          },
          {
            "word": "is",
            "start": 38.850002,
            "end": 39.010002
          },
          {
            "word": "[NUMERICAL_PII_1]",
            "start": 39.010002,
            "end": 42.055
          }
        ]
      },
      {
        "spokenAt": "2024-07-19T03:02:06.799Z",
        "start": 43.155,
        "end": 50.454998,
        "duration": 7.299998000000002,
        "speaker": 0,
        "sentence": "Thank you. For verification purposes, could you also provide me with the last four digits of your credit card used for the purchase?",
        "words": [
          {
            "word": "thank",
            "start": 43.155,
            "end": 43.395
          },
          {
            "word": "you",
            "start": 43.395,
            "end": 43.895
          },
          {
            "word": "for",
            "start": 44.035,
            "end": 44.434998
          },
          {
            "word": "verification",
            "start": 44.434998,
            "end": 44.934998
          },
          {
            "word": "purposes",
            "start": 45.074997,
            "end": 45.574997
          },
          {
            "word": "could",
            "start": 45.635,
            "end": 45.875
          },
          {
            "word": "you",
            "start": 45.875,
            "end": 46.035
          },
          {
            "word": "also",
            "start": 46.035,
            "end": 46.274998
          },
          {
            "word": "provide",
            "start": 46.274998,
            "end": 46.594997
          },
          {
            "word": "me",
            "start": 46.594997,
            "end": 46.754997
          },
          {
            "word": "with",
            "start": 46.754997,
            "end": 46.995
          },
          {
            "word": "the",
            "start": 46.995,
            "end": 47.074997
          },
          {
            "word": "last",
            "start": 47.074997,
            "end": 47.395
          },
          {
            "word": "four",
            "start": 47.395,
            "end": 47.635
          },
          {
            "word": "digits",
            "start": 47.635,
            "end": 48.135
          },
          {
            "word": "of",
            "start": 48.355,
            "end": 48.515
          },
          {
            "word": "your",
            "start": 48.515,
            "end": 48.675
          },
          {
            "word": "credit",
            "start": 48.675,
            "end": 49.074997
          },
          {
            "word": "card",
            "start": 49.074997,
            "end": 49.394997
          },
          {
            "word": "used",
            "start": 49.394997,
            "end": 49.635
          },
          {
            "word": "for",
            "start": 49.635,
            "end": 49.795
          },
          {
            "word": "the",
            "start": 49.795,
            "end": 49.954998
          },
          {
            "word": "purchase",
            "start": 49.954998,
            "end": 50.454998
          }
        ]
      },
      {
        "spokenAt": "2024-07-19T03:02:15.113Z",
        "start": 51.469997,
        "end": 53.25,
        "duration": 1.7800030000000007,
        "speaker": 1,
        "sentence": "Of course. It's 9876.",
        "words": [
          {
            "word": "of",
            "start": 51.469997,
            "end": 51.71
          },
          {
            "word": "course",
            "start": 51.71,
            "end": 52.03
          },
          {
            "word": "it's",
            "start": 52.03,
            "end": 52.53
          },
          {
            "word": "9876",
            "start": 52.75,
            "end": 53.25
          }
        ]
      },
      {
        "spokenAt": "2024-07-19T03:02:19.344Z",
        "start": 55.7,
        "end": 66.285,
        "duration": 10.584999999999994,
        "speaker": 0,
        "sentence": "Thank you. Please give me a moment to pull up your details. Okay. I see your order here. It looks like you purchased the smartwatch on [DATE_1]. How can I assist you with that?",
        "words": [
          {
            "word": "thank",
            "start": 55.7,
            "end": 55.94
          },
          {
            "word": "you",
            "start": 55.94,
            "end": 56.34
          },
          {
            "word": "please",
            "start": 56.34,
            "end": 56.66
          },
          {
            "word": "give",
            "start": 56.66,
            "end": 56.82
          },
          {
            "word": "me",
            "start": 56.82,
            "end": 56.94
          },
          {
            "word": "a",
            "start": 56.94,
            "end": 57.059998
          },
          {
            "word": "moment",
            "start": 57.059998,
            "end": 57.46
          },
          {
            "word": "to",
            "start": 57.46,
            "end": 57.7
          },
          {
            "word": "pull",
            "start": 57.7,
            "end": 57.86
          },
          {
            "word": "up",
            "start": 57.86,
            "end": 58.02
          },
          {
            "word": "your",
            "start": 58.02,
            "end": 58.18
          },
          {
            "word": "details",
            "start": 58.18,
            "end": 58.68
          },
          {
            "word": "okay",
            "start": 60.105003,
            "end": 60.345
          },
          {
            "word": "i",
            "start": 60.345,
            "end": 60.505
          },
          {
            "word": "see",
            "start": 60.505,
            "end": 60.745003
          },
          {
            "word": "your",
            "start": 60.745003,
            "end": 60.905003
          },
          {
            "word": "order",
            "start": 60.905003,
            "end": 61.145
          },
          {
            "word": "here",
            "start": 61.145,
            "end": 61.305
          },
          {
            "word": "it",
            "start": 61.305,
            "end": 61.465
          },
          {
            "word": "looks",
            "start": 61.465,
            "end": 61.705
          },
          {
            "word": "like",
            "start": 61.705,
            "end": 61.785
          },
          {
            "word": "you",
            "start": 61.785,
            "end": 62.025
          },
          {
            "word": "purchased",
            "start": 62.025,
            "end": 62.505
          },
          {
            "word": "the",
            "start": 62.505,
            "end": 62.665
          },
          {
            "word": "smartwatch",
            "start": 62.665,
            "end": 63.165
          },
          {
            "word": "on",
            "start": 63.305,
            "end": 63.545002
          },
          {
            "word": "[DATE_1]",
            "start": 63.545002,
            "end": 64.365005
          },
          {
            "word": "how",
            "start": 64.665,
            "end": 64.825005
          },
          {
            "word": "can",
            "start": 64.825005,
            "end": 65.065
          },
          {
            "word": "i",
            "start": 65.065,
            "end": 65.145004
          },
          {
            "word": "assist",
            "start": 65.145004,
            "end": 65.465004
          },
          {
            "word": "you",
            "start": 65.465004,
            "end": 65.625
          },
          {
            "word": "with",
            "start": 65.625,
            "end": 65.785
          },
          {
            "word": "that",
            "start": 65.785,
            "end": 66.285
          }
        ]
      },
      {
        "spokenAt": "2024-07-19T03:02:30.934Z",
        "start": 67.29,
        "end": 71.229996,
        "duration": 3.9399959999999936,
        "speaker": 1,
        "sentence": "Yeah. I received the product, but it's not functioning properly. It seems to be defective.",
        "words": [
          {
            "word": "yeah",
            "start": 67.29,
            "end": 67.53
          },
          {
            "word": "i",
            "start": 67.53,
            "end": 67.689995
          },
          {
            "word": "received",
            "start": 67.689995,
            "end": 68.09
          },
          {
            "word": "the",
            "start": 68.09,
            "end": 68.329994
          },
          {
            "word": "product",
            "start": 68.329994,
            "end": 68.649994
          },
          {
            "word": "but",
            "start": 68.649994,
            "end": 68.81
          },
          {
            "word": "it's",
            "start": 68.81,
            "end": 68.96999
          },
          {
            "word": "not",
            "start": 68.96999,
            "end": 69.28999
          },
          {
            "word": "functioning",
            "start": 69.28999,
            "end": 69.61
          },
          {
            "word": "properly",
            "start": 69.61,
            "end": 70.009995
          },
          {
            "word": "it",
            "start": 70.009995,
            "end": 70.17
          },
          {
            "word": "seems",
            "start": 70.17,
            "end": 70.409996
          },
          {
            "word": "to",
            "start": 70.409996,
            "end": 70.49
          },
          {
            "word": "be",
            "start": 70.49,
            "end": 70.729996
          },
          {
            "word": "defective",
            "start": 70.729996,
            "end": 71.229996
          }
        ]
      },
      {
        "spokenAt": "2024-07-19T03:02:36.964Z",
        "start": 73.32,
        "end": 78.46,
        "duration": 5.140000000000001,
        "speaker": 0,
        "sentence": "I'm sorry to hear that. We can definitely get this sorted for you. Can you describe the issue we are facing?",
        "words": [
          {
            "word": "i'm",
            "start": 73.32,
            "end": 73.56
          },
          {
            "word": "sorry",
            "start": 73.56,
            "end": 73.88
          },
          {
            "word": "to",
            "start": 73.88,
            "end": 73.96
          },
          {
            "word": "hear",
            "start": 73.96,
            "end": 74.2
          },
          {
            "word": "that",
            "start": 74.2,
            "end": 74.52
          },
          {
            "word": "we",
            "start": 74.759995,
            "end": 74.84
          },
          {
            "word": "can",
            "start": 74.84,
            "end": 75
          },
          {
            "word": "definitely",
            "start": 75,
            "end": 75.5
          },
          {
            "word": "get",
            "start": 75.56,
            "end": 75.71999
          },
          {
            "word": "this",
            "start": 75.71999,
            "end": 75.96
          },
          {
            "word": "sorted",
            "start": 75.96,
            "end": 76.35999
          },
          {
            "word": "for",
            "start": 76.35999,
            "end": 76.439995
          },
          {
            "word": "you",
            "start": 76.439995,
            "end": 76.6
          },
          {
            "word": "can",
            "start": 76.6,
            "end": 76.84
          },
          {
            "word": "you",
            "start": 76.84,
            "end": 77
          },
          {
            "word": "describe",
            "start": 77,
            "end": 77.31999
          },
          {
            "word": "the",
            "start": 77.31999,
            "end": 77.479996
          },
          {
            "word": "issue",
            "start": 77.479996,
            "end": 77.71999
          },
          {
            "word": "we",
            "start": 77.71999,
            "end": 77.799995
          },
          {
            "word": "are",
            "start": 77.799995,
            "end": 77.96
          },
          {
            "word": "facing",
            "start": 77.96,
            "end": 78.46
          }
        ]
      },
      {
        "spokenAt": "2024-07-19T03:02:42.589Z",
        "start": 78.945,
        "end": 82.805,
        "duration": 3.8600000000000136,
        "speaker": 1,
        "sentence": "Yes. The screen keeps flickering, and sometimes I won't turn on at all.",
        "words": [
          {
            "word": "yes",
            "start": 78.945,
            "end": 79.34499
          },
          {
            "word": "the",
            "start": 79.34499,
            "end": 79.585
          },
          {
            "word": "screen",
            "start": 79.585,
            "end": 79.825
          },
          {
            "word": "keeps",
            "start": 79.825,
            "end": 80.145
          },
          {
            "word": "flickering",
            "start": 80.145,
            "end": 80.625
          },
          {
            "word": "and",
            "start": 80.625,
            "end": 80.865
          },
          {
            "word": "sometimes",
            "start": 80.865,
            "end": 81.34499
          },
          {
            "word": "i",
            "start": 81.34499,
            "end": 81.424995
          },
          {
            "word": "won't",
            "start": 81.424995,
            "end": 81.66499
          },
          {
            "word": "turn",
            "start": 81.66499,
            "end": 81.905
          },
          {
            "word": "on",
            "start": 81.905,
            "end": 82.145
          },
          {
            "word": "at",
            "start": 82.145,
            "end": 82.305
          },
          {
            "word": "all",
            "start": 82.305,
            "end": 82.805
          }
        ]
      },
      {
        "spokenAt": "2024-07-19T03:02:48.799Z",
        "start": 85.15501,
        "end": 91.009995,
        "duration": 5.854984999999999,
        "speaker": 0,
        "sentence": "That sounds frustrating. Let's, proceed with the return and replacement. Could you confirm shipping address?",
        "words": [
          {
            "word": "that",
            "start": 85.15501,
            "end": 85.395004
          },
          {
            "word": "sounds",
            "start": 85.395004,
            "end": 85.795006
          },
          {
            "word": "frustrating",
            "start": 85.795006,
            "end": 86.295006
          },
          {
            "word": "let's",
            "start": 86.67,
            "end": 87.07
          },
          {
            "word": "proceed",
            "start": 87.31,
            "end": 87.63
          },
          {
            "word": "with",
            "start": 87.63,
            "end": 87.869995
          },
          {
            "word": "the",
            "start": 87.869995,
            "end": 88.03
          },
          {
            "word": "return",
            "start": 88.03,
            "end": 88.42999
          },
          {
            "word": "and",
            "start": 88.42999,
            "end": 88.59
          },
          {
            "word": "replacement",
            "start": 88.59,
            "end": 89.09
          },
          {
            "word": "could",
            "start": 89.229996,
            "end": 89.39
          },
          {
            "word": "you",
            "start": 89.39,
            "end": 89.63
          },
          {
            "word": "confirm",
            "start": 89.63,
            "end": 90.03
          },
          {
            "word": "shipping",
            "start": 90.03,
            "end": 90.509995
          },
          {
            "word": "address",
            "start": 90.509995,
            "end": 91.009995
          }
        ]
      },
      {
        "spokenAt": "2024-07-19T03:02:54.464Z",
        "start": 90.82,
        "end": 96.744995,
        "duration": 5.92499500000001,
        "speaker": 1,
        "sentence": "Sure. It's [LOCATION_ADDRESS_1].",
        "words": [
          {
            "word": "sure",
            "start": 90.82,
            "end": 91.21999
          },
          {
            "word": "it's",
            "start": 91.21999,
            "end": 91.53999
          },
          {
            "word": "[LOCATION_ADDRESS_1]",
            "start": 91.53999,
            "end": 96.744995
          }
        ]
      },
      {
        "spokenAt": "2024-07-19T03:03:03.958Z",
        "start": 100.314995,
        "end": 107.88,
        "duration": 7.565004999999999,
        "speaker": 0,
        "sentence": "Thank you, [NAME_GIVEN_2]. We will send a prepaid return label to your email address on file, which is [EMAIL_ADDRESS_1]. Is",
        "words": [
          {
            "word": "thank",
            "start": 100.314995,
            "end": 100.55499
          },
          {
            "word": "you",
            "start": 100.55499,
            "end": 100.795
          },
          {
            "word": "[NAME_GIVEN_2]",
            "start": 100.795,
            "end": 101.195
          },
          {
            "word": "we",
            "start": 101.195,
            "end": 101.435
          },
          {
            "word": "will",
            "start": 101.435,
            "end": 101.59499
          },
          {
            "word": "send",
            "start": 101.59499,
            "end": 101.755
          },
          {
            "word": "a",
            "start": 101.755,
            "end": 101.835
          },
          {
            "word": "prepaid",
            "start": 101.835,
            "end": 102.335
          },
          {
            "word": "return",
            "start": 102.55499,
            "end": 102.875
          },
          {
            "word": "label",
            "start": 102.875,
            "end": 103.19499
          },
          {
            "word": "to",
            "start": 103.19499,
            "end": 103.274994
          },
          {
            "word": "your",
            "start": 103.274994,
            "end": 103.515
          },
          {
            "word": "email",
            "start": 103.515,
            "end": 103.835
          },
          {
            "word": "address",
            "start": 103.835,
            "end": 104.075
          },
          {
            "word": "on",
            "start": 104.075,
            "end": 104.28
          },
          {
            "word": "file",
            "start": 104.28,
            "end": 104.52
          },
          {
            "word": "which",
            "start": 104.52,
            "end": 104.76
          },
          {
            "word": "is",
            "start": 104.76,
            "end": 104.92
          },
          {
            "word": "[EMAIL_ADDRESS_1]",
            "start": 104.92,
            "end": 105.42
          },
          {
            "word": "is",
            "start": 107.72,
            "end": 107.88
          }
        ]
      },
      {
        "spokenAt": "2024-07-19T03:03:11.443Z",
        "start": 107.799995,
        "end": 108.119995,
        "duration": 0.3200000000000074,
        "speaker": 1,
        "sentence": "Yes.",
        "words": [
          {
            "word": "yes",
            "start": 107.799995,
            "end": 108.119995
          }
        ]
      },
      {
        "spokenAt": "2024-07-19T03:03:11.524Z",
        "start": 107.88,
        "end": 108.54,
        "duration": 0.6600000000000108,
        "speaker": 0,
        "sentence": "that correct?",
        "words": [
          {
            "word": "that",
            "start": 107.88,
            "end": 108.04
          },
          {
            "word": "correct",
            "start": 108.04,
            "end": 108.54
          }
        ]
      },
      {
        "spokenAt": "2024-07-19T03:03:11.763Z",
        "start": 108.119995,
        "end": 108.85999,
        "duration": 0.7399949999999933,
        "speaker": 1,
        "sentence": "That's correct.",
        "words": [
          {
            "word": "that's",
            "start": 108.119995,
            "end": 108.35999
          },
          {
            "word": "correct",
            "start": 108.35999,
            "end": 108.85999
          }
        ]
      },
      {
        "spokenAt": "2024-07-19T03:03:15.189Z",
        "start": 111.545006,
        "end": 127.06,
        "duration": 15.514994000000002,
        "speaker": 0,
        "sentence": "Great. Once you receive the return label, please send the defective product back to us. As soon as we receive it, we will ship out a replacement to your address, which I'm reconfirming as [LOCATION_ADDRESS_1].",
        "words": [
          {
            "word": "great",
            "start": 111.545006,
            "end": 111.865005
          },
          {
            "word": "once",
            "start": 111.865005,
            "end": 112.105
          },
          {
            "word": "you",
            "start": 112.105,
            "end": 112.265
          },
          {
            "word": "receive",
            "start": 112.265,
            "end": 112.585
          },
          {
            "word": "the",
            "start": 112.585,
            "end": 112.745
          },
          {
            "word": "return",
            "start": 112.745,
            "end": 113.065
          },
          {
            "word": "label",
            "start": 113.065,
            "end": 113.465004
          },
          {
            "word": "please",
            "start": 113.705,
            "end": 113.945
          },
          {
            "word": "send",
            "start": 113.945,
            "end": 114.265
          },
          {
            "word": "the",
            "start": 114.265,
            "end": 114.505005
          },
          {
            "word": "defective",
            "start": 114.505005,
            "end": 114.985
          },
          {
            "word": "product",
            "start": 114.985,
            "end": 115.385
          },
          {
            "word": "back",
            "start": 115.385,
            "end": 115.545
          },
          {
            "word": "to",
            "start": 115.545,
            "end": 115.705
          },
          {
            "word": "us",
            "start": 115.705,
            "end": 116.105
          },
          {
            "word": "as",
            "start": 116.105,
            "end": 116.265
          },
          {
            "word": "soon",
            "start": 116.265,
            "end": 116.425
          },
          {
            "word": "as",
            "start": 116.425,
            "end": 116.505005
          },
          {
            "word": "we",
            "start": 116.505005,
            "end": 116.665
          },
          {
            "word": "receive",
            "start": 116.665,
            "end": 116.985
          },
          {
            "word": "it",
            "start": 116.985,
            "end": 117.145004
          },
          {
            "word": "we",
            "start": 117.145004,
            "end": 117.305
          },
          {
            "word": "will",
            "start": 117.305,
            "end": 117.465004
          },
          {
            "word": "ship",
            "start": 117.465004,
            "end": 117.705
          },
          {
            "word": "out",
            "start": 117.705,
            "end": 117.865005
          },
          {
            "word": "a",
            "start": 117.865005,
            "end": 118.025
          },
          {
            "word": "replacement",
            "start": 118.025,
            "end": 118.525
          },
          {
            "word": "to",
            "start": 118.585,
            "end": 118.905
          },
          {
            "word": "your",
            "start": 118.905,
            "end": 119.225
          },
          {
            "word": "address",
            "start": 119.225,
            "end": 119.725
          },
          {
            "word": "which",
            "start": 120,
            "end": 120.24
          },
          {
            "word": "i'm",
            "start": 120.24,
            "end": 120.32
          },
          {
            "word": "reconfirming",
            "start": 120.32,
            "end": 120.82
          },
          {
            "word": "as",
            "start": 121.439995,
            "end": 121.939995
          },
          {
            "word": "[LOCATION_ADDRESS_1]",
            "start": 122,
            "end": 127.06
          }
        ]
      },
      {
        "spokenAt": "2024-07-19T03:03:31.989Z",
        "start": 128.345,
        "end": 133.965,
        "duration": 5.6200000000000045,
        "speaker": 1,
        "sentence": "Yes. Thank you very much. How long will it, how long will the entire process take?",
        "words": [
          {
            "word": "yes",
            "start": 128.345,
            "end": 128.845
          },
          {
            "word": "thank",
            "start": 129.225,
            "end": 129.465
          },
          {
            "word": "you",
            "start": 129.465,
            "end": 129.625
          },
          {
            "word": "very",
            "start": 129.625,
            "end": 129.865
          },
          {
            "word": "much",
            "start": 129.865,
            "end": 130.265
          },
          {
            "word": "how",
            "start": 130.905,
            "end": 131.065
          },
          {
            "word": "long",
            "start": 131.065,
            "end": 131.225
          },
          {
            "word": "will",
            "start": 131.225,
            "end": 131.38501
          },
          {
            "word": "it",
            "start": 131.38501,
            "end": 131.705
          },
          {
            "word": "how",
            "start": 131.945,
            "end": 132.185
          },
          {
            "word": "long",
            "start": 132.185,
            "end": 132.345
          },
          {
            "word": "will",
            "start": 132.345,
            "end": 132.585
          },
          {
            "word": "the",
            "start": 132.585,
            "end": 132.745
          },
          {
            "word": "entire",
            "start": 132.745,
            "end": 133.065
          },
          {
            "word": "process",
            "start": 133.065,
            "end": 133.465
          },
          {
            "word": "take",
            "start": 133.465,
            "end": 133.965
          }
        ]
      },
      {
        "spokenAt": "2024-07-19T03:03:39.944Z",
        "start": 136.3,
        "end": 141.84001,
        "duration": 5.540009999999995,
        "speaker": 0,
        "sentence": "Once we receive the defective product, the replacement should arrive within [DURATION_1].",
        "words": [
          {
            "word": "once",
            "start": 136.3,
            "end": 136.54001
          },
          {
            "word": "we",
            "start": 136.54001,
            "end": 136.78001
          },
          {
            "word": "receive",
            "start": 136.78001,
            "end": 137.1
          },
          {
            "word": "the",
            "start": 137.1,
            "end": 137.26001
          },
          {
            "word": "defective",
            "start": 137.26001,
            "end": 137.74
          },
          {
            "word": "product",
            "start": 137.74,
            "end": 138.14001
          },
          {
            "word": "the",
            "start": 138.14001,
            "end": 138.3
          },
          {
            "word": "replacement",
            "start": 138.3,
            "end": 138.8
          },
          {
            "word": "should",
            "start": 138.86,
            "end": 139.18001
          },
          {
            "word": "arrive",
            "start": 139.18001,
            "end": 139.68001
          },
          {
            "word": "within",
            "start": 139.82,
            "end": 140.3
          },
          {
            "word": "[DURATION_1]",
            "start": 140.3,
            "end": 141.84001
          }
        ]
      },
      {
        "spokenAt": "2024-07-19T03:03:47.089Z",
        "start": 143.445,
        "end": 145.145,
        "duration": 1.700000000000017,
        "speaker": 1,
        "sentence": "Perfect. Thank you for your help.",
        "words": [
          {
            "word": "perfect",
            "start": 143.445,
            "end": 143.925
          },
          {
            "word": "thank",
            "start": 143.925,
            "end": 144.24501
          },
          {
            "word": "you",
            "start": 144.24501,
            "end": 144.325
          },
          {
            "word": "for",
            "start": 144.325,
            "end": 144.485
          },
          {
            "word": "your",
            "start": 144.485,
            "end": 144.645
          },
          {
            "word": "help",
            "start": 144.645,
            "end": 145.145
          }
        ]
      },
      {
        "spokenAt": "2024-07-19T03:03:51.999Z",
        "start": 148.355,
        "end": 151.315,
        "duration": 2.960000000000008,
        "speaker": 0,
        "sentence": "You're welcome, [NAME_GIVEN_2]. If you have any other questions, please",
        "words": [
          {
            "word": "you're",
            "start": 148.355,
            "end": 148.595
          },
          {
            "word": "welcome",
            "start": 148.595,
            "end": 149.095
          },
          {
            "word": "[NAME_GIVEN_2]",
            "start": 149.155,
            "end": 149.47499
          },
          {
            "word": "if",
            "start": 149.47499,
            "end": 149.715
          },
          {
            "word": "you",
            "start": 149.715,
            "end": 149.795
          },
          {
            "word": "have",
            "start": 149.795,
            "end": 150.035
          },
          {
            "word": "any",
            "start": 150.035,
            "end": 150.275
          },
          {
            "word": "other",
            "start": 150.275,
            "end": 150.515
          },
          {
            "word": "questions",
            "start": 150.515,
            "end": 150.995
          },
          {
            "word": "please",
            "start": 150.995,
            "end": 151.315
          }
        ]
      },
      {
        "spokenAt": "2024-07-19T03:03:54.929Z",
        "start": 151.285,
        "end": 151.765,
        "duration": 0.47999999999998977,
        "speaker": 1,
        "sentence": "Sure.",
        "words": [
          {
            "word": "sure",
            "start": 151.285,
            "end": 151.765
          }
        ]
      },
      {
        "spokenAt": "2024-07-19T03:03:54.959Z",
        "start": 151.315,
        "end": 152.055,
        "duration": 0.7400000000000091,
        "speaker": 0,
        "sentence": "reach out.",
        "words": [
          {
            "word": "reach",
            "start": 151.315,
            "end": 151.555
          },
          {
            "word": "out",
            "start": 151.555,
            "end": 152.055
          }
        ]
      },
      {
        "spokenAt": "2024-07-19T03:03:55.409Z",
        "start": 151.765,
        "end": 152.905,
        "duration": 1.1400000000000148,
        "speaker": 1,
        "sentence": "Thank you. Goodbye.",
        "words": [
          {
            "word": "thank",
            "start": 151.765,
            "end": 152.085
          },
          {
            "word": "you",
            "start": 152.085,
            "end": 152.405
          },
          {
            "word": "goodbye",
            "start": 152.405,
            "end": 152.905
          }
        ]
      },
      {
        "spokenAt": "2024-07-19T03:03:59.984Z",
        "start": 156.34,
        "end": 156.84,
        "duration": 0.5,
        "speaker": 0,
        "sentence": "Goodbye.",
        "words": [
          {
            "word": "goodbye",
            "start": 156.34,
            "end": 156.84
          }
        ]
      }
    ],
    "sentiment": "positive",
    "sentimentScore": 0.38134765625,
    "totalDuration": 161136
  }
}
json```
