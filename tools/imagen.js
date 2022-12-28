const readline = require('readline');
const fs = require('fs');
const sharp = require('sharp');

const OUTPUT_DIR = './output';

// Create output directory
const setupOutputDirectory = ()=> {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR);
  }
}

const getAvailableImages = ()=> {
  const image_extensions = ['.png', '.jpg', '.jpeg', '.gif', '.webp'];
  const images = fs.readdirSync('.').filter((file)=> image_extensions.some((ext)=> file.endsWith(ext)));
  return images;
}

const getInputFile = async ()=> {
  const images = getAvailableImages();
  return new Promise((resolve)=> {
    const reader = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
      completer: (line) => {
        const hits = images.filter((e) => e.startsWith(line));
        // Show all completions if none found
        return [hits.length ? hits : images, line];
      }
    });
    reader.question("What file are you transforming? ", (answer)=> {
      resolve(answer);
      reader.close();
    });
  });
}

const getOutputFile = async ()=> {
  return new Promise((resolve)=> {
    const reader = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    reader.question("How are you naming this image? ", (answer)=> {
      const filename = answer.replace(/ /g, '-').toLowerCase();
      resolve(filename);
      reader.close();
    });
  });
}

const transformImage = (input, filename)=> {
  const file = sharp(input)
  
  // Save the original
  file.toFile(`output/${filename}-original.png`)
  
  // Change extension to WebP
  file
    .webp({ lossless: true })
    .toFile(`output/${filename}.webp`)
  
  // Generate a small version of the image (512x512)
  file
    .resize(512)
    .webp({ lossless: true })
    .toFile(`output/${filename}-small.webp`)
  
  // Generate a smaller version of the image (256x256)
  file
    .resize(256)
    .webp({ lossless: true })
    .toFile(`output/${filename}-cover.webp`)
}

const main = async ({ input='', filename=''})=> {
  // Create the output directory
  setupOutputDirectory()
  // Get input & output files if not provided
  if (!input) input = await getInputFile();
  if (!filename) filename = await getOutputFile();
  // Make the transformation
  transformImage(input, filename);
}

const args = process.argv.slice(2);

if (args.length === 2) {
  const input = args[0];
  const output = args[1];
  const filename = output.replace(/ /g, '-').toLowerCase();
  main({ input, filename });
}

else {
  main({});
}
