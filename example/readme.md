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
This will generate a redacted version of the original recording.
