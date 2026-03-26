const Jimp = require('jimp');

async function run() {
  try {
    console.log("Loading image using Jimp 0.22...");
    const image = await Jimp.read('./public/logo.png');
    
    // Grab the background color from top-left pixel (1,1)
    const bgPixel = image.getPixelColor(1, 1);
    const bgType = Jimp.intToRGBA(bgPixel); 
    console.log(`Detected Background RGB: ${bgType.r}, ${bgType.g}, ${bgType.b}`);

    const tolerance = 45; 
    
    image.scan(0, 0, image.bitmap.width, image.bitmap.height, function (x, y, idx) {
      const r = this.bitmap.data[idx + 0];
      const g = this.bitmap.data[idx + 1];
      const b = this.bitmap.data[idx + 2];
      const a = this.bitmap.data[idx + 3];

      if (a === 0) return; // already transparent

      const rDiff = Math.abs(r - bgType.r);
      const gDiff = Math.abs(g - bgType.g);
      const bDiff = Math.abs(b - bgType.b);
      
      const maxDiff = Math.max(rDiff, gDiff, bDiff);
      
      if (maxDiff <= tolerance) {
        if (maxDiff < tolerance / 2.5) {
            this.bitmap.data[idx + 3] = 0; // Completely transparent
        } else {
            // Anti-aliasing edge fade
            const newAlpha = Math.floor(255 * (maxDiff / tolerance));
            this.bitmap.data[idx + 3] = newAlpha;
        }
      }
    });

    console.log("Saving transparent image...");
    await image.writeAsync('./public/logo-transparent.png');
    console.log("Success! Saved to logo-transparent.png");

  } catch (err) {
    console.error("Failed to process image error:", err);
  }
}

run();
