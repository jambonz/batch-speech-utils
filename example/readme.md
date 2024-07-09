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
        "name": Suraj63,
        "phone": "+1813765333"
      }
    },
    {
      "type": "machine",
      "initiatedConversation": false,
      "id": {
        "name": "jambonz.one",
        "phone": "+15139999999"
      }
    }
  ],
  "transcript": {
    "vendor": "deepgram",
    "model": "nova-2",
    "channels": 2,
    "createdAt": "2024-07-08T19:18:28.905Z",
    "speechEvents": [
      {
        "start": 11.815,
        "end": 12.315,
        "duration": 0.5,
        "speaker": 1,
        "sentence": "Hello?",
        "words": [
          {
            "word": "hello",
            "start": 11.815,
            "end": 12.315
          }
        ]
      },
      {
        "start": 14.125,
        "end": 18.44,
        "duration": 4.315000000000001,
        "speaker": 0,
        "sentence": "Hello, and thank you for calling [ORGANIZATION_1]. My name is [NAME_GIVEN_1]. How can I assist you today?",
        "words": [
          {
            "word": "hello",
            "start": 14.125,
            "end": 14.365
          },
          {
            "word": "and",
            "start": 14.365,
            "end": 14.684999
          },
          {
            "word": "thank",
            "start": 14.684999,
            "end": 14.845
          },
          {
            "word": "you",
            "start": 14.845,
            "end": 15.005
          },
          {
            "word": "for",
            "start": 15.005,
            "end": 15.165
          },
          {
            "word": "calling",
            "start": 15.165,
            "end": 15.565001
          },
          {
            "word": "[ORGANIZATION_1]",
            "start": 15.565001,
            "end": 16.065
          },
          {
            "word": "my",
            "start": 16.125,
            "end": 16.285
          },
          {
            "word": "name",
            "start": 16.285,
            "end": 16.445
          },
          {
            "word": "is",
            "start": 16.445,
            "end": 16.685
          },
          {
            "word": "[NAME_GIVEN_1]",
            "start": 16.685,
            "end": 17.005001
          },
          {
            "word": "how",
            "start": 17.005001,
            "end": 17.244999
          },
          {
            "word": "can",
            "start": 17.244999,
            "end": 17.404999
          },
          {
            "word": "i",
            "start": 17.404999,
            "end": 17.485
          },
          {
            "word": "assist",
            "start": 17.485,
            "end": 17.805
          },
          {
            "word": "you",
            "start": 17.805,
            "end": 18.045
          },
          {
            "word": "today",
            "start": 18.045,
            "end": 18.44
          }
        ]
      },
      {
        "start": 18.93,
        "end": 21.43,
        "duration": 2.5,
        "speaker": 1,
        "sentence": "Hi. I have a question about my recent order.",
        "words": [
          {
            "word": "hi",
            "start": 18.93,
            "end": 19.25
          },
          {
            "word": "i",
            "start": 19.25,
            "end": 19.330002
          },
          {
            "word": "have",
            "start": 19.330002,
            "end": 19.57
          },
          {
            "word": "a",
            "start": 19.57,
            "end": 19.650002
          },
          {
            "word": "question",
            "start": 19.650002,
            "end": 20.130001
          },
          {
            "word": "about",
            "start": 20.130001,
            "end": 20.37
          },
          {
            "word": "my",
            "start": 20.37,
            "end": 20.53
          },
          {
            "word": "recent",
            "start": 20.53,
            "end": 20.93
          },
          {
            "word": "order",
            "start": 20.93,
            "end": 21.43
          }
        ]
      },
      {
        "start": 22.04,
        "end": 28.055,
        "duration": 6.015000000000001,
        "speaker": 0,
        "sentence": "I'd be I'd be happy to help you with that. Can you please tell me your full name and order number so that I can look up",
        "words": [
          {
            "word": "i'd",
            "start": 22.04,
            "end": 22.28
          },
          {
            "word": "be",
            "start": 22.28,
            "end": 22.52
          },
          {
            "word": "i'd",
            "start": 22.52,
            "end": 22.92
          },
          {
            "word": "be",
            "start": 22.92,
            "end": 23.08
          },
          {
            "word": "happy",
            "start": 23.08,
            "end": 23.32
          },
          {
            "word": "to",
            "start": 23.32,
            "end": 23.400002
          },
          {
            "word": "help",
            "start": 23.400002,
            "end": 23.64
          },
          {
            "word": "you",
            "start": 23.64,
            "end": 23.8
          },
          {
            "word": "with",
            "start": 23.8,
            "end": 23.880001
          },
          {
            "word": "that",
            "start": 23.880001,
            "end": 24.12
          },
          {
            "word": "can",
            "start": 24.12,
            "end": 24.28
          },
          {
            "word": "you",
            "start": 24.28,
            "end": 24.44
          },
          {
            "word": "please",
            "start": 24.44,
            "end": 24.76
          },
          {
            "word": "tell",
            "start": 24.76,
            "end": 24.92
          },
          {
            "word": "me",
            "start": 24.92,
            "end": 25.08
          },
          {
            "word": "your",
            "start": 25.08,
            "end": 25.24
          },
          {
            "word": "full",
            "start": 25.24,
            "end": 25.48
          },
          {
            "word": "name",
            "start": 25.48,
            "end": 25.720001
          },
          {
            "word": "and",
            "start": 25.720001,
            "end": 25.960001
          },
          {
            "word": "order",
            "start": 25.960001,
            "end": 26.28
          },
          {
            "word": "number",
            "start": 26.28,
            "end": 26.6
          },
          {
            "word": "so",
            "start": 26.6,
            "end": 26.84
          },
          {
            "word": "that",
            "start": 26.84,
            "end": 27
          },
          {
            "word": "i",
            "start": 27,
            "end": 27.08
          },
          {
            "word": "can",
            "start": 27.08,
            "end": 27.240002
          },
          {
            "word": "look",
            "start": 27.240002,
            "end": 27.555
          },
          {
            "word": "up",
            "start": 27.555,
            "end": 28.055
          }
        ]
      },
      {
        "start": 29.205,
        "end": 31.445,
        "duration": 2.240000000000002,
        "speaker": 1,
        "sentence": "Sure. My name is [NAME_1], and",
        "words": [
          {
            "word": "sure",
            "start": 29.205,
            "end": 29.705
          },
          {
            "word": "my",
            "start": 29.845001,
            "end": 30.005001
          },
          {
            "word": "name",
            "start": 30.005001,
            "end": 30.245
          },
          {
            "word": "is",
            "start": 30.245,
            "end": 30.485
          },
          {
            "word": "[NAME_1]",
            "start": 30.485,
            "end": 31.205
          },
          {
            "word": "and",
            "start": 31.205,
            "end": 31.445
          }
        ]
      },
      {
        "start": 31.315,
        "end": 31.565,
        "duration": 0.25,
        "speaker": 0,
        "sentence": "some",
        "words": [
          {
            "word": "some",
            "start": 31.315,
            "end": 31.565
          }
        ]
      },
      {
        "start": 31.445,
        "end": 31.605,
        "duration": 0.16000000000000014,
        "speaker": 1,
        "sentence": "my",
        "words": [
          {
            "word": "my",
            "start": 31.445,
            "end": 31.605
          }
        ]
      },
      {
        "start": 31.565,
        "end": 32.065002,
        "duration": 0.5000019999999985,
        "speaker": 0,
        "sentence": "information?",
        "words": [
          {
            "word": "information",
            "start": 31.565,
            "end": 32.065002
          }
        ]
      },
      {
        "start": 31.605,
        "end": 35.42,
        "duration": 3.8150000000000013,
        "speaker": 1,
        "sentence": "order number is [NUMERICAL_PII_1].",
        "words": [
          {
            "word": "order",
            "start": 31.605,
            "end": 31.845001
          },
          {
            "word": "number",
            "start": 31.845001,
            "end": 32.085
          },
          {
            "word": "is",
            "start": 32.085,
            "end": 32.325
          },
          {
            "word": "[NUMERICAL_PII_1]",
            "start": 32.325,
            "end": 35.42
          }
        ]
      },
      {
        "start": 36.25,
        "end": 44.35,
        "duration": 8.100000000000001,
        "speaker": 0,
        "sentence": "Thank you, [NAME_GIVEN_2]. For verification purposes, could you also provide me with the last 4 digits of your credit card used for the purchase?",
        "words": [
          {
            "word": "thank",
            "start": 36.25,
            "end": 36.489998
          },
          {
            "word": "you",
            "start": 36.489998,
            "end": 36.81
          },
          {
            "word": "[NAME_GIVEN_2]",
            "start": 36.81,
            "end": 37.21
          },
          {
            "word": "for",
            "start": 37.45,
            "end": 37.77
          },
          {
            "word": "verification",
            "start": 37.77,
            "end": 38.27
          },
          {
            "word": "purposes",
            "start": 38.329998,
            "end": 38.809998
          },
          {
            "word": "could",
            "start": 38.809998,
            "end": 39.05
          },
          {
            "word": "you",
            "start": 39.05,
            "end": 39.29
          },
          {
            "word": "also",
            "start": 39.29,
            "end": 39.69
          },
          {
            "word": "provide",
            "start": 39.69,
            "end": 40.17
          },
          {
            "word": "me",
            "start": 40.17,
            "end": 40.65
          },
          {
            "word": "with",
            "start": 40.65,
            "end": 40.809998
          },
          {
            "word": "the",
            "start": 40.809998,
            "end": 41.05
          },
          {
            "word": "last",
            "start": 41.05,
            "end": 41.29
          },
          {
            "word": "4",
            "start": 41.29,
            "end": 41.61
          },
          {
            "word": "digits",
            "start": 41.61,
            "end": 42.11
          },
          {
            "word": "of",
            "start": 42.25,
            "end": 42.489998
          },
          {
            "word": "your",
            "start": 42.489998,
            "end": 42.73
          },
          {
            "word": "credit",
            "start": 42.73,
            "end": 43.05
          },
          {
            "word": "card",
            "start": 43.05,
            "end": 43.29
          },
          {
            "word": "used",
            "start": 43.29,
            "end": 43.53
          },
          {
            "word": "for",
            "start": 43.53,
            "end": 43.69
          },
          {
            "word": "the",
            "start": 43.69,
            "end": 43.85
          },
          {
            "word": "purchase",
            "start": 43.85,
            "end": 44.35
          }
        ]
      },
      {
        "start": 44.955,
        "end": 47.295,
        "duration": 2.3400000000000034,
        "speaker": 1,
        "sentence": "For sure. It's 9876.",
        "words": [
          {
            "word": "for",
            "start": 44.955,
            "end": 45.275
          },
          {
            "word": "sure",
            "start": 45.275,
            "end": 45.775
          },
          {
            "word": "it's",
            "start": 45.915,
            "end": 46.415
          },
          {
            "word": "9876",
            "start": 46.795,
            "end": 47.295
          }
        ]
      },
      {
        "start": 49.515,
        "end": 60.88,
        "duration": 11.365000000000002,
        "speaker": 0,
        "sentence": "Thank you. Please give me a moment to pull up your details. Okay. I see your order here. It looks like you purchased a smartwatch on [DATE_1]. How can I assist you with this order?",
        "words": [
          {
            "word": "thank",
            "start": 49.515,
            "end": 49.755
          },
          {
            "word": "you",
            "start": 49.755,
            "end": 50.155
          },
          {
            "word": "please",
            "start": 50.155,
            "end": 50.555
          },
          {
            "word": "give",
            "start": 50.555,
            "end": 50.795
          },
          {
            "word": "me",
            "start": 50.795,
            "end": 51.035
          },
          {
            "word": "a",
            "start": 51.035,
            "end": 51.115
          },
          {
            "word": "moment",
            "start": 51.115,
            "end": 51.435
          },
          {
            "word": "to",
            "start": 51.435,
            "end": 51.675
          },
          {
            "word": "pull",
            "start": 51.675,
            "end": 51.835
          },
          {
            "word": "up",
            "start": 51.835,
            "end": 51.995
          },
          {
            "word": "your",
            "start": 51.995,
            "end": 52.155
          },
          {
            "word": "details",
            "start": 52.155,
            "end": 52.655
          },
          {
            "word": "okay",
            "start": 54.54,
            "end": 54.780003
          },
          {
            "word": "i",
            "start": 54.780003,
            "end": 54.940002
          },
          {
            "word": "see",
            "start": 54.940002,
            "end": 55.02
          },
          {
            "word": "your",
            "start": 55.02,
            "end": 55.260002
          },
          {
            "word": "order",
            "start": 55.260002,
            "end": 55.5
          },
          {
            "word": "here",
            "start": 55.5,
            "end": 55.9
          },
          {
            "word": "it",
            "start": 55.9,
            "end": 56.06
          },
          {
            "word": "looks",
            "start": 56.06,
            "end": 56.22
          },
          {
            "word": "like",
            "start": 56.22,
            "end": 56.46
          },
          {
            "word": "you",
            "start": 56.46,
            "end": 56.620003
          },
          {
            "word": "purchased",
            "start": 56.620003,
            "end": 57.100002
          },
          {
            "word": "a",
            "start": 57.100002,
            "end": 57.420002
          },
          {
            "word": "smartwatch",
            "start": 57.420002,
            "end": 57.920002
          },
          {
            "word": "on",
            "start": 58.06,
            "end": 58.3
          },
          {
            "word": "[DATE_1]",
            "start": 58.3,
            "end": 59.120003
          },
          {
            "word": "how",
            "start": 59.18,
            "end": 59.34
          },
          {
            "word": "can",
            "start": 59.34,
            "end": 59.5
          },
          {
            "word": "i",
            "start": 59.5,
            "end": 59.66
          },
          {
            "word": "assist",
            "start": 59.66,
            "end": 59.9
          },
          {
            "word": "you",
            "start": 59.9,
            "end": 60.06
          },
          {
            "word": "with",
            "start": 60.06,
            "end": 60.22
          },
          {
            "word": "this",
            "start": 60.22,
            "end": 60.38
          },
          {
            "word": "order",
            "start": 60.38,
            "end": 60.88
          }
        ]
      },
      {
        "start": 61.524998,
        "end": 68.56,
        "duration": 7.035002000000006,
        "speaker": 1,
        "sentence": "Yeah. I've recently, I I have received the product, but, it's not functioning properly. It seems to be defective.",
        "words": [
          {
            "word": "yeah",
            "start": 61.524998,
            "end": 61.844997
          },
          {
            "word": "i've",
            "start": 61.844997,
            "end": 62.085
          },
          {
            "word": "recently",
            "start": 62.085,
            "end": 62.585
          },
          {
            "word": "i",
            "start": 62.965,
            "end": 63.26
          },
          {
            "word": "i",
            "start": 63.34,
            "end": 63.5
          },
          {
            "word": "have",
            "start": 63.5,
            "end": 63.66
          },
          {
            "word": "received",
            "start": 63.66,
            "end": 64.06
          },
          {
            "word": "the",
            "start": 64.06,
            "end": 64.14
          },
          {
            "word": "product",
            "start": 64.14,
            "end": 64.54
          },
          {
            "word": "but",
            "start": 64.54,
            "end": 65.04
          },
          {
            "word": "it's",
            "start": 65.659996,
            "end": 66.06
          },
          {
            "word": "not",
            "start": 66.06,
            "end": 66.38
          },
          {
            "word": "functioning",
            "start": 66.38,
            "end": 66.86
          },
          {
            "word": "properly",
            "start": 66.86,
            "end": 67.259995
          },
          {
            "word": "it",
            "start": 67.259995,
            "end": 67.42
          },
          {
            "word": "seems",
            "start": 67.42,
            "end": 67.659996
          },
          {
            "word": "to",
            "start": 67.659996,
            "end": 67.82
          },
          {
            "word": "be",
            "start": 67.82,
            "end": 68.06
          },
          {
            "word": "defective",
            "start": 68.06,
            "end": 68.56
          }
        ]
      },
      {
        "start": 69.645004,
        "end": 77.13,
        "duration": 7.484995999999995,
        "speaker": 0,
        "sentence": "Oh, I'm sorry to hear about that. We can definitely get this sorted out for you. Could you please describe the issue you're experiencing with the product?",
        "words": [
          {
            "word": "oh",
            "start": 69.645004,
            "end": 69.885
          },
          {
            "word": "i'm",
            "start": 69.885,
            "end": 70.045
          },
          {
            "word": "sorry",
            "start": 70.045,
            "end": 70.365
          },
          {
            "word": "to",
            "start": 70.365,
            "end": 70.525
          },
          {
            "word": "hear",
            "start": 70.525,
            "end": 70.685
          },
          {
            "word": "about",
            "start": 70.685,
            "end": 70.925
          },
          {
            "word": "that",
            "start": 70.925,
            "end": 71.245
          },
          {
            "word": "we",
            "start": 71.245,
            "end": 71.405
          },
          {
            "word": "can",
            "start": 71.405,
            "end": 71.565
          },
          {
            "word": "definitely",
            "start": 71.565,
            "end": 72.045
          },
          {
            "word": "get",
            "start": 72.045,
            "end": 72.205
          },
          {
            "word": "this",
            "start": 72.205,
            "end": 72.445
          },
          {
            "word": "sorted",
            "start": 72.445,
            "end": 72.845
          },
          {
            "word": "out",
            "start": 72.845,
            "end": 73.085
          },
          {
            "word": "for",
            "start": 73.085,
            "end": 73.245
          },
          {
            "word": "you",
            "start": 73.245,
            "end": 73.67
          },
          {
            "word": "could",
            "start": 73.67,
            "end": 73.83
          },
          {
            "word": "you",
            "start": 73.83,
            "end": 74.07
          },
          {
            "word": "please",
            "start": 74.07,
            "end": 74.31
          },
          {
            "word": "describe",
            "start": 74.31,
            "end": 74.79
          },
          {
            "word": "the",
            "start": 74.79,
            "end": 74.869995
          },
          {
            "word": "issue",
            "start": 74.869995,
            "end": 75.189995
          },
          {
            "word": "you're",
            "start": 75.189995,
            "end": 75.59
          },
          {
            "word": "experiencing",
            "start": 75.59,
            "end": 76.09
          },
          {
            "word": "with",
            "start": 76.31,
            "end": 76.47
          },
          {
            "word": "the",
            "start": 76.47,
            "end": 76.63
          },
          {
            "word": "product",
            "start": 76.63,
            "end": 77.13
          }
        ]
      },
      {
        "start": 77.795,
        "end": 83.770004,
        "duration": 5.975003999999998,
        "speaker": 1,
        "sentence": "Yes. The the screen keeps flickering, and sometimes it won't turn on at at all.",
        "words": [
          {
            "word": "yes",
            "start": 77.795,
            "end": 78.195
          },
          {
            "word": "the",
            "start": 78.195,
            "end": 78.515
          },
          {
            "word": "the",
            "start": 78.515,
            "end": 78.835
          },
          {
            "word": "screen",
            "start": 78.835,
            "end": 79.335
          },
          {
            "word": "keeps",
            "start": 79.75,
            "end": 79.990005
          },
          {
            "word": "flickering",
            "start": 79.990005,
            "end": 80.490005
          },
          {
            "word": "and",
            "start": 80.55,
            "end": 80.87
          },
          {
            "word": "sometimes",
            "start": 80.87,
            "end": 81.270004
          },
          {
            "word": "it",
            "start": 81.270004,
            "end": 81.51
          },
          {
            "word": "won't",
            "start": 81.51,
            "end": 81.75
          },
          {
            "word": "turn",
            "start": 81.75,
            "end": 82.07
          },
          {
            "word": "on",
            "start": 82.07,
            "end": 82.47
          },
          {
            "word": "at",
            "start": 82.47,
            "end": 82.950005
          },
          {
            "word": "at",
            "start": 82.950005,
            "end": 83.270004
          },
          {
            "word": "all",
            "start": 83.270004,
            "end": 83.770004
          }
        ]
      },
      {
        "start": 84.655,
        "end": 92.115,
        "duration": 7.459999999999994,
        "speaker": 0,
        "sentence": "That sounds frustrating. Let's proceed with the return and replacement. Could you confirm your shipping address for me to arrange the return?",
        "words": [
          {
            "word": "that",
            "start": 84.655,
            "end": 84.975
          },
          {
            "word": "sounds",
            "start": 84.975,
            "end": 85.295
          },
          {
            "word": "frustrating",
            "start": 85.295,
            "end": 85.795
          },
          {
            "word": "let's",
            "start": 86.174995,
            "end": 86.494995
          },
          {
            "word": "proceed",
            "start": 86.494995,
            "end": 86.814995
          },
          {
            "word": "with",
            "start": 86.814995,
            "end": 87.055
          },
          {
            "word": "the",
            "start": 87.055,
            "end": 87.215
          },
          {
            "word": "return",
            "start": 87.215,
            "end": 87.615
          },
          {
            "word": "and",
            "start": 87.615,
            "end": 87.774994
          },
          {
            "word": "replacement",
            "start": 87.774994,
            "end": 88.274994
          },
          {
            "word": "could",
            "start": 88.41499,
            "end": 88.655
          },
          {
            "word": "you",
            "start": 88.655,
            "end": 88.975
          },
          {
            "word": "confirm",
            "start": 88.975,
            "end": 89.375
          },
          {
            "word": "your",
            "start": 89.375,
            "end": 89.615
          },
          {
            "word": "shipping",
            "start": 89.615,
            "end": 89.935
          },
          {
            "word": "address",
            "start": 89.935,
            "end": 90.335
          },
          {
            "word": "for",
            "start": 90.335,
            "end": 90.494995
          },
          {
            "word": "me",
            "start": 90.494995,
            "end": 90.655
          },
          {
            "word": "to",
            "start": 90.655,
            "end": 90.975
          },
          {
            "word": "arrange",
            "start": 90.975,
            "end": 91.454994
          },
          {
            "word": "the",
            "start": 91.454994,
            "end": 91.615
          },
          {
            "word": "return",
            "start": 91.615,
            "end": 92.115
          }
        ]
      },
      {
        "start": 92.595,
        "end": 99.46,
        "duration": 6.864999999999995,
        "speaker": 1,
        "sentence": "Sure. It's [LOCATION_ADDRESS_1]. ZIP code, [LOCATION_ZIP_1].",
        "words": [
          {
            "word": "sure",
            "start": 92.595,
            "end": 93.095
          },
          {
            "word": "it's",
            "start": 93.15501,
            "end": 93.555
          },
          {
            "word": "[LOCATION_ADDRESS_1]",
            "start": 93.555,
            "end": 97.175
          },
          {
            "word": "zip",
            "start": 98.4,
            "end": 98.64
          },
          {
            "word": "code",
            "start": 98.64,
            "end": 98.96
          },
          {
            "word": "[LOCATION_ZIP_1]",
            "start": 98.96,
            "end": 99.46
          }
        ]
      },
      {
        "start": 101.785,
        "end": 115.07,
        "duration": 13.284999999999997,
        "speaker": 0,
        "sentence": "Okay. Thank you, [NAME_GIVEN_2]. We will send you a prepaid return label to your email address on the file, which is [EMAIL_ADDRESS_1]. Is that correct?",
        "words": [
          {
            "word": "okay",
            "start": 101.785,
            "end": 102.285
          },
          {
            "word": "thank",
            "start": 102.585,
            "end": 102.905
          },
          {
            "word": "you",
            "start": 102.905,
            "end": 103.145004
          },
          {
            "word": "[NAME_GIVEN_2]",
            "start": 103.145004,
            "end": 103.645004
          },
          {
            "word": "we",
            "start": 104.585,
            "end": 104.825005
          },
          {
            "word": "will",
            "start": 104.825005,
            "end": 105.065
          },
          {
            "word": "send",
            "start": 105.065,
            "end": 105.305
          },
          {
            "word": "you",
            "start": 105.305,
            "end": 105.625
          },
          {
            "word": "a",
            "start": 105.625,
            "end": 105.785
          },
          {
            "word": "prepaid",
            "start": 105.785,
            "end": 106.285
          },
          {
            "word": "return",
            "start": 107.145004,
            "end": 107.545
          },
          {
            "word": "label",
            "start": 107.545,
            "end": 107.865
          },
          {
            "word": "to",
            "start": 107.865,
            "end": 108.025
          },
          {
            "word": "your",
            "start": 108.025,
            "end": 108.265
          },
          {
            "word": "email",
            "start": 108.265,
            "end": 108.665
          },
          {
            "word": "address",
            "start": 108.665,
            "end": 108.985
          },
          {
            "word": "on",
            "start": 108.985,
            "end": 109.145004
          },
          {
            "word": "the",
            "start": 109.145004,
            "end": 109.305
          },
          {
            "word": "file",
            "start": 109.305,
            "end": 109.77
          },
          {
            "word": "which",
            "start": 110.009995,
            "end": 110.17
          },
          {
            "word": "is",
            "start": 110.17,
            "end": 110.67
          },
          {
            "word": "[EMAIL_ADDRESS_1]",
            "start": 110.89,
            "end": 111.39
          },
          {
            "word": "is",
            "start": 114.25,
            "end": 114.409996
          },
          {
            "word": "that",
            "start": 114.409996,
            "end": 114.57
          },
          {
            "word": "correct",
            "start": 114.57,
            "end": 115.07
          }
        ]
      },
      {
        "start": 115.625,
        "end": 116.57,
        "duration": 0.9449999999999932,
        "speaker": 1,
        "sentence": "Yes. That's correct.",
        "words": [
          {
            "word": "yes",
            "start": 115.625,
            "end": 115.945
          },
          {
            "word": "that's",
            "start": 115.945,
            "end": 116.185
          },
          {
            "word": "correct",
            "start": 116.185,
            "end": 116.57
          }
        ]
      },
      {
        "start": 118.075,
        "end": 136.785,
        "duration": 18.709999999999994,
        "speaker": 0,
        "sentence": "Great. Once you receive the return label, please send the defective product back to us. As soon as we receive it, we will ship out a replacement to your address at [LOCATION_ADDRESS_2]. You'll receive an email address with the tracking information.",
        "words": [
          {
            "word": "great",
            "start": 118.075,
            "end": 118.395
          },
          {
            "word": "once",
            "start": 118.395,
            "end": 118.795
          },
          {
            "word": "you",
            "start": 118.795,
            "end": 119.295
          },
          {
            "word": "receive",
            "start": 120.235,
            "end": 120.555
          },
          {
            "word": "the",
            "start": 120.555,
            "end": 120.715
          },
          {
            "word": "return",
            "start": 120.715,
            "end": 121.034996
          },
          {
            "word": "label",
            "start": 121.034996,
            "end": 121.534996
          },
          {
            "word": "please",
            "start": 121.835,
            "end": 122.075
          },
          {
            "word": "send",
            "start": 122.075,
            "end": 122.315
          },
          {
            "word": "the",
            "start": 122.315,
            "end": 122.475
          },
          {
            "word": "defective",
            "start": 122.475,
            "end": 122.975
          },
          {
            "word": "product",
            "start": 123.034996,
            "end": 123.354996
          },
          {
            "word": "back",
            "start": 123.354996,
            "end": 123.595
          },
          {
            "word": "to",
            "start": 123.595,
            "end": 123.674995
          },
          {
            "word": "us",
            "start": 123.674995,
            "end": 124.075
          },
          {
            "word": "as",
            "start": 124.075,
            "end": 124.235
          },
          {
            "word": "soon",
            "start": 124.235,
            "end": 124.395
          },
          {
            "word": "as",
            "start": 124.395,
            "end": 124.555
          },
          {
            "word": "we",
            "start": 124.555,
            "end": 124.715
          },
          {
            "word": "receive",
            "start": 124.715,
            "end": 125.034996
          },
          {
            "word": "it",
            "start": 125.034996,
            "end": 125.275
          },
          {
            "word": "we",
            "start": 125.275,
            "end": 125.354996
          },
          {
            "word": "will",
            "start": 125.354996,
            "end": 125.66
          },
          {
            "word": "ship",
            "start": 125.66,
            "end": 125.82001
          },
          {
            "word": "out",
            "start": 125.82001,
            "end": 125.98
          },
          {
            "word": "a",
            "start": 125.98,
            "end": 126.14001
          },
          {
            "word": "replacement",
            "start": 126.14001,
            "end": 126.64001
          },
          {
            "word": "to",
            "start": 126.78001,
            "end": 127.020004
          },
          {
            "word": "your",
            "start": 127.020004,
            "end": 127.26
          },
          {
            "word": "address",
            "start": 127.26,
            "end": 127.66
          },
          {
            "word": "at",
            "start": 127.66,
            "end": 128.16
          },
          {
            "word": "[LOCATION_ADDRESS_2]",
            "start": 128.38,
            "end": 133.2
          },
          {
            "word": "you'll",
            "start": 134.045,
            "end": 134.36499
          },
          {
            "word": "receive",
            "start": 134.36499,
            "end": 134.605
          },
          {
            "word": "an",
            "start": 134.605,
            "end": 134.845
          },
          {
            "word": "email",
            "start": 134.845,
            "end": 135.165
          },
          {
            "word": "address",
            "start": 135.165,
            "end": 135.565
          },
          {
            "word": "with",
            "start": 135.565,
            "end": 135.805
          },
          {
            "word": "the",
            "start": 135.805,
            "end": 135.885
          },
          {
            "word": "tracking",
            "start": 135.885,
            "end": 136.285
          },
          {
            "word": "information",
            "start": 136.285,
            "end": 136.785
          }
        ]
      },
      {
        "start": 137.48,
        "end": 141.26,
        "duration": 3.780000000000001,
        "speaker": 1,
        "sentence": "Thank you very much. How long, will the entire process take?",
        "words": [
          {
            "word": "thank",
            "start": 137.48,
            "end": 137.8
          },
          {
            "word": "you",
            "start": 137.8,
            "end": 137.95999
          },
          {
            "word": "very",
            "start": 137.95999,
            "end": 138.12
          },
          {
            "word": "much",
            "start": 138.12,
            "end": 138.51999
          },
          {
            "word": "how",
            "start": 138.51999,
            "end": 138.84
          },
          {
            "word": "long",
            "start": 138.84,
            "end": 139.23999
          },
          {
            "word": "will",
            "start": 139.64,
            "end": 139.87999
          },
          {
            "word": "the",
            "start": 139.87999,
            "end": 140.04
          },
          {
            "word": "entire",
            "start": 140.04,
            "end": 140.36
          },
          {
            "word": "process",
            "start": 140.36,
            "end": 140.76
          },
          {
            "word": "take",
            "start": 140.76,
            "end": 141.26
          }
        ]
      },
      {
        "start": 142.37,
        "end": 150.79,
        "duration": 8.419999999999987,
        "speaker": 0,
        "sentence": "Once we receive the, defective product, the replacement should arrive within [DURATION_1]. You'll be notified via email throughout the process.",
        "words": [
          {
            "word": "once",
            "start": 142.37,
            "end": 142.61
          },
          {
            "word": "we",
            "start": 142.61,
            "end": 142.76999
          },
          {
            "word": "receive",
            "start": 142.76999,
            "end": 143.09
          },
          {
            "word": "the",
            "start": 143.09,
            "end": 143.40999
          },
          {
            "word": "defective",
            "start": 143.73,
            "end": 144.20999
          },
          {
            "word": "product",
            "start": 144.20999,
            "end": 144.61
          },
          {
            "word": "the",
            "start": 144.61,
            "end": 144.76999
          },
          {
            "word": "replacement",
            "start": 144.76999,
            "end": 145.26999
          },
          {
            "word": "should",
            "start": 145.40999,
            "end": 145.65
          },
          {
            "word": "arrive",
            "start": 145.65,
            "end": 145.89
          },
          {
            "word": "within",
            "start": 145.89,
            "end": 146.29
          },
          {
            "word": "[DURATION_1]",
            "start": 146.29,
            "end": 147.90999
          },
          {
            "word": "you'll",
            "start": 147.97,
            "end": 148.29
          },
          {
            "word": "be",
            "start": 148.29,
            "end": 148.45
          },
          {
            "word": "notified",
            "start": 148.45,
            "end": 148.95
          },
          {
            "word": "via",
            "start": 149.01,
            "end": 149.40999
          },
          {
            "word": "email",
            "start": 149.40999,
            "end": 149.73
          },
          {
            "word": "throughout",
            "start": 149.73,
            "end": 150.12999
          },
          {
            "word": "the",
            "start": 150.12999,
            "end": 150.29
          },
          {
            "word": "process",
            "start": 150.29,
            "end": 150.79
          }
        ]
      },
      {
        "start": 151.36,
        "end": 153.54001,
        "duration": 2.1800099999999816,
        "speaker": 1,
        "sentence": "Oh, perfect. Thank you for your help.",
        "words": [
          {
            "word": "oh",
            "start": 151.36,
            "end": 151.68001
          },
          {
            "word": "perfect",
            "start": 151.68001,
            "end": 152.18001
          },
          {
            "word": "thank",
            "start": 152.40001,
            "end": 152.64
          },
          {
            "word": "you",
            "start": 152.64,
            "end": 152.72
          },
          {
            "word": "for",
            "start": 152.72,
            "end": 152.88
          },
          {
            "word": "your",
            "start": 152.88,
            "end": 153.04001
          },
          {
            "word": "help",
            "start": 153.04001,
            "end": 153.54001
          }
        ]
      },
      {
        "start": 153.995,
        "end": 160.655,
        "duration": 6.659999999999997,
        "speaker": 0,
        "sentence": "You're welcome, [NAME_GIVEN_2]. If you have any other questions or need further assistance, please don't hesitate to call us back. Have a great day.",
        "words": [
          {
            "word": "you're",
            "start": 153.995,
            "end": 154.235
          },
          {
            "word": "welcome",
            "start": 154.235,
            "end": 154.715
          },
          {
            "word": "[NAME_GIVEN_2]",
            "start": 154.715,
            "end": 155.115
          },
          {
            "word": "if",
            "start": 155.115,
            "end": 155.275
          },
          {
            "word": "you",
            "start": 155.275,
            "end": 155.435
          },
          {
            "word": "have",
            "start": 155.435,
            "end": 155.675
          },
          {
            "word": "any",
            "start": 155.675,
            "end": 155.915
          },
          {
            "word": "other",
            "start": 155.915,
            "end": 156.075
          },
          {
            "word": "questions",
            "start": 156.075,
            "end": 156.395
          },
          {
            "word": "or",
            "start": 156.395,
            "end": 156.635
          },
          {
            "word": "need",
            "start": 156.635,
            "end": 156.955
          },
          {
            "word": "further",
            "start": 156.955,
            "end": 157.275
          },
          {
            "word": "assistance",
            "start": 157.275,
            "end": 157.755
          },
          {
            "word": "please",
            "start": 157.755,
            "end": 157.995
          },
          {
            "word": "don't",
            "start": 157.995,
            "end": 158.235
          },
          {
            "word": "hesitate",
            "start": 158.235,
            "end": 158.635
          },
          {
            "word": "to",
            "start": 158.635,
            "end": 158.795
          },
          {
            "word": "call",
            "start": 158.795,
            "end": 159.035
          },
          {
            "word": "us",
            "start": 159.035,
            "end": 159.195
          },
          {
            "word": "back",
            "start": 159.195,
            "end": 159.595
          },
          {
            "word": "have",
            "start": 159.595,
            "end": 159.755
          },
          {
            "word": "a",
            "start": 159.755,
            "end": 159.915
          },
          {
            "word": "great",
            "start": 159.915,
            "end": 160.155
          },
          {
            "word": "day",
            "start": 160.155,
            "end": 160.655
          }
        ]
      },
      {
        "start": 160.815,
        "end": 162.035,
        "duration": 1.2199999999999989,
        "speaker": 1,
        "sentence": "You too. Goodbye.",
        "words": [
          {
            "word": "you",
            "start": 160.815,
            "end": 161.215
          },
          {
            "word": "too",
            "start": 161.215,
            "end": 161.535
          },
          {
            "word": "goodbye",
            "start": 161.535,
            "end": 162.035
          }
        ]
      },
      {
        "start": 162.78,
        "end": 163.28,
        "duration": 0.5,
        "speaker": 0,
        "sentence": "Goodbye.",
        "words": [
          {
            "word": "goodbye",
            "start": 162.78,
            "end": 163.28
          }
        ]
      }
    ],
    "sentiment": "neutral",
    "sentimentScore": 0.08050537109375,
    "totalDuration": 167544
  }
}
```
