const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const { exec } = require('child_process');

const execAsync = promisify(exec);

const QUALITY = 45;
const EFFORT = 9;
const CONCURRENCY = 8; // Process 8 images at a time

async function getAllAvifImages() {
  const { stdout } = await execAsync('find img -name "*.avif" -type f');
  return stdout.trim().split('\n').filter(Boolean);
}

async function optimizeImage(imagePath) {
  const fullPath = path.join(__dirname, '..', imagePath);

  try {
    const originalSize = fs.statSync(fullPath).size;

    // Skip if already small (less than 5KB)
    if (originalSize < 5 * 1024) {
      return { path: imagePath, original: originalSize, new: originalSize, savings: 0, skipped: true };
    }

    const buffer = await sharp(fullPath)
      .avif({ quality: QUALITY, effort: EFFORT })
      .toBuffer();

    // Only save if new size is smaller
    if (buffer.length < originalSize) {
      fs.writeFileSync(fullPath, buffer);
      return {
        path: imagePath,
        original: originalSize,
        new: buffer.length,
        savings: originalSize - buffer.length,
        skipped: false
      };
    } else {
      return { path: imagePath, original: originalSize, new: originalSize, savings: 0, skipped: true };
    }
  } catch (error) {
    console.error(`❌ Error: ${imagePath} - ${error.message}`);
    return { path: imagePath, original: 0, new: 0, savings: 0, error: true };
  }
}

async function processInBatches(images, batchSize) {
  const results = [];
  let processed = 0;

  for (let i = 0; i < images.length; i += batchSize) {
    const batch = images.slice(i, i + batchSize);
    const batchResults = await Promise.all(batch.map(optimizeImage));
    results.push(...batchResults);

    processed += batch.length;
    const percent = ((processed / images.length) * 100).toFixed(1);
    const totalSavings = results.reduce((sum, r) => sum + r.savings, 0);
    process.stdout.write(`\r📊 Progreso: ${processed}/${images.length} (${percent}%) - Ahorro: ${(totalSavings / 1024 / 1024).toFixed(2)} MB`);
  }

  return results;
}

async function main() {
  console.log('🖼️  Optimizando TODAS las imágenes AVIF del sitio...\n');
  console.log(`   Calidad: ${QUALITY}, Esfuerzo: ${EFFORT}`);
  console.log(`   Procesando ${CONCURRENCY} imágenes en paralelo\n`);

  const images = await getAllAvifImages();
  console.log(`📁 Encontradas ${images.length} imágenes AVIF\n`);

  const startTime = Date.now();
  const results = await processInBatches(images, CONCURRENCY);
  const duration = ((Date.now() - startTime) / 1000 / 60).toFixed(1);

  const optimized = results.filter(r => !r.skipped && !r.error && r.savings > 0);
  const skipped = results.filter(r => r.skipped);
  const errors = results.filter(r => r.error);

  const totalOriginal = results.reduce((sum, r) => sum + r.original, 0);
  const totalNew = results.reduce((sum, r) => sum + r.new, 0);
  const totalSavings = totalOriginal - totalNew;

  console.log('\n\n' + '='.repeat(50));
  console.log('📊 RESUMEN FINAL:');
  console.log('='.repeat(50));
  console.log(`   Imágenes procesadas: ${images.length}`);
  console.log(`   Imágenes optimizadas: ${optimized.length}`);
  console.log(`   Imágenes saltadas (ya pequeñas): ${skipped.length}`);
  console.log(`   Errores: ${errors.length}`);
  console.log('');
  console.log(`   Tamaño original total: ${(totalOriginal / 1024 / 1024).toFixed(2)} MB`);
  console.log(`   Tamaño nuevo total: ${(totalNew / 1024 / 1024).toFixed(2)} MB`);
  console.log(`   💾 AHORRO TOTAL: ${(totalSavings / 1024 / 1024).toFixed(2)} MB (${((totalSavings / totalOriginal) * 100).toFixed(1)}%)`);
  console.log('');
  console.log(`   ⏱️  Tiempo: ${duration} minutos`);

  // Top 10 biggest savings
  const topSavings = results
    .filter(r => r.savings > 0)
    .sort((a, b) => b.savings - a.savings)
    .slice(0, 10);

  if (topSavings.length > 0) {
    console.log('\n🏆 Top 10 mayores ahorros:');
    topSavings.forEach((r, i) => {
      console.log(`   ${i + 1}. ${path.basename(r.path)}: ${(r.savings / 1024).toFixed(1)} KiB`);
    });
  }
}

main().catch(console.error);
