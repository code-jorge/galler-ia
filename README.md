## Galler-ia

Comes from the wordplay `gallery` and `ia` (which stands for **inteligencia artificial** in Spanish).

Showcases a collection of images I generated using [DALL-E](https://openai.com/dall-e-2/).

## Contents

### The `web` folder

Contains a `create-react-app` project that creates a small website for the gallery of images!

### The `tools` folder

Contains a `nodejs` script that transforms a **DALL-E** file into multiple formats. 

You can run the script with:

- `npm run transform` (Interactive version)
- `npm run transform -- "<input-file>" "<output-name>"` (Automatic version)

Input files must be placed relative to the tools folder!

Images **must** be uploaded to `S3` and added to `images.json` for this to work!