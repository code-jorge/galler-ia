const readline = require('readline');
const fs = require('fs');
const sharp = require('sharp');

const OUTPUT_DIR = 'output';

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

const codegen = (filename)=> {
  const caption = filename
    .replace(/-/g, ' ')
    .split(' ')
    .map(word=> word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  return `
    <div class="photo">
      <a href="https://cdn.jorgeaguirre.es/DALL-E/${filename}-original.png" download class="photo-container">
        <img 
          srcset="https://cdn.jorgeaguirre.es/DALL-E/${filename}-cover.webp 256w,
                  https://cdn.jorgeaguirre.es/DALL-E/${filename}-small.webp 512w,
                  https://cdn.jorgeaguirre.es/DALL-E/${filename}.webp 1024w
          "
          sizes="250px"
          src="https://cdn.jorgeaguirre.es/DALL-E/${filename}.webp" 
          alt="${caption}" 
          class="image"
        >
        <div class="caption">${caption}</div>
      </a>
    </div>
 `
}

const main = async ()=> {
  // Create the output directory
  setupOutputDirectory()
  const input = await getInputFile();
  const filename = await getOutputFile();
  transformImage(input, filename);
  console.log(codegen(filename));
}

const args = process.argv.slice(2);

if (args.length === 2) {
  const input = args[0];
  const output = args[1];
  const filename = output.replace(/ /g, '-').toLowerCase();
  transformImage(input, filename);
  console.log(codegen(filename));
}

else {
  main();
}
