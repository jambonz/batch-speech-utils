const audioRecordingTemplate = {
  'participants': [
    {
      'type': '',
      'initiatedConversation': false,
      'id': {
        'name': null,
        'phone': ''
      }
    }
  ],
  'duration': 0,
  'transcript': {
    'vendor': '',
    'model': '',
    'channels': 0,
    'createdAt': '',
    'speechEvents': [
      {
        'timestamp': 0,
        'duration': 0,
        'startTime': 0,
        'endTime': 0,
        'speaker': 0,
        'transcript': '',
        'words': [
          {
            'word': '',
            'start': 0,
            'end': 0,
            'confidence': 0
          }
        ]
      }
    ],
    'sentiment': '',
    'sentimentScore': 0,
    'totalDuration': 0
  }
};

module.exports = audioRecordingTemplate;
