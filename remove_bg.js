const fs = require('fs');
const path = require('path');

async function removeBackground() {
  try {
    const sharp = require('sharp');
    const imagePath = path.join(__dirname, 'public', 'hero-brain.png');
    const image = sharp(imagePath);
    
    // Convert to raw pixel data
    const { data, info } = await image.raw().ensureAlpha().toBuffer({ resolveWithObject: true });
    
    for (let i = 0; i < data.length; i += info.channels) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      
      const brightness = Math.max(r, g, b);
      const alpha = brightness;
      
      if (alpha > 0) {
        const aNorm = alpha / 255.0;
        data[i] = Math.min(255, Math.floor(r / aNorm));
        data[i + 1] = Math.min(255, Math.floor(g / aNorm));
        data[i + 2] = Math.min(255, Math.floor(b / aNorm));
        data[i + 3] = alpha;
      } else {
        data[i + 3] = 0; // Fully transparent map
      }
    }
    
    await sharp(data, {
      raw: {
        width: info.width,
        height: info.height,
        channels: info.channels
      }
    })
    .png()
    .toFile(imagePath);
    
    console.log("Successfully processed the image with sharp!");
  } catch(e) {
    console.error("Error with sharp:", e.message);
  }
}

removeBackground();
