const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Imágenes a optimizar según Lighthouse
const images = [
  'img/city-color/renta-luces-hacienda-boda-fuente-600w.avif',
  'img/cascadas-led/cascadas-led-novios-mesa-romantica-boda-600w.avif',
  'img/luces-neon/renta-luces-neon-glow-party-celebracion-neon-600w.avif',
  'img/city-color/iluminacion-salon-boda-rosa-600w.avif'
];

async function optimizeImage(imagePath) {
  const fullPath = path.join(__dirname, '..', imagePath);
  const backupPath = fullPath.replace('.avif', '-backup.avif');

  // Get original size
  const originalSize = fs.statSync(fullPath).size;

  // Create backup
  fs.copyFileSync(fullPath, backupPath);

  try {
    // Read and recompress with higher compression (quality 50-60 is good balance)
    const buffer = await sharp(fullPath)
      .avif({ quality: 45, effort: 9 }) // effort 9 = max compression, quality 45 for more savings
      .toBuffer();

    // Write optimized image
    fs.writeFileSync(fullPath, buffer);

    const newSize = fs.statSync(fullPath).size;
    const savings = originalSize - newSize;
    const savingsKB = (savings / 1024).toFixed(1);
    const percent = ((savings / originalSize) * 100).toFixed(1);

    console.log(`✅ ${path.basename(imagePath)}`);
    console.log(`   ${(originalSize/1024).toFixed(1)} KiB → ${(newSize/1024).toFixed(1)} KiB (ahorro: ${savingsKB} KiB, ${percent}%)`);

    // Remove backup
    fs.unlinkSync(backupPath);

    return { original: originalSize, new: newSize, savings };
  } catch (error) {
    // Restore backup on error
    if (fs.existsSync(backupPath)) {
      fs.copyFileSync(backupPath, fullPath);
      fs.unlinkSync(backupPath);
    }
    console.error(`❌ Error con ${imagePath}: ${error.message}`);
    return { original: originalSize, new: originalSize, savings: 0 };
  }
}

async function main() {
  console.log('🖼️  Optimizando imágenes AVIF...\n');

  let totalOriginal = 0;
  let totalNew = 0;

  for (const img of images) {
    const result = await optimizeImage(img);
    totalOriginal += result.original;
    totalNew += result.new;
  }

  const totalSavings = totalOriginal - totalNew;
  console.log('\n📊 RESUMEN:');
  console.log(`   Total original: ${(totalOriginal/1024).toFixed(1)} KiB`);
  console.log(`   Total nuevo: ${(totalNew/1024).toFixed(1)} KiB`);
  console.log(`   Ahorro total: ${(totalSavings/1024).toFixed(1)} KiB (${((totalSavings/totalOriginal)*100).toFixed(1)}%)`);
}

main().catch(console.error);
