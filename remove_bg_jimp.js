const { Jimp } = require("jimp");
const path = require("path");

async function removeBackground() {
  try {
    const imagePath = path.join(__dirname, 'public', 'hero-brain.png');
    const image = await Jimp.read(imagePath);
    
    // In jimp v1, image.bitmap.data is a buffer
    image.scan(0, 0, image.bitmap.width, image.bitmap.height, function(x, y, idx) {
      const r = this.bitmap.data[idx + 0];
      const g = this.bitmap.data[idx + 1];
      const b = this.bitmap.data[idx + 2];
      
      const brightness = Math.max(r, g, b);
      const alpha = brightness;
      
      if (alpha > 0) {
        const aNorm = alpha / 255.0;
        this.bitmap.data[idx + 0] = Math.min(255, Math.floor(r / aNorm));
        this.bitmap.data[idx + 1] = Math.min(255, Math.floor(g / aNorm));
        this.bitmap.data[idx + 2] = Math.min(255, Math.floor(b / aNorm));
        this.bitmap.data[idx + 3] = alpha;
      } else {
        this.bitmap.data[idx + 3] = 0;
      }
    });
    
    await image.write(imagePath);
    console.log("Successfully removed background using Jimp!");
  } catch (error) {
    console.error("Error processing image:", error);
  }
}

removeBackground();
