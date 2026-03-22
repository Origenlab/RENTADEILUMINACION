import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { readdirSync, statSync } from 'fs';

const imgDir = './public/img';

function getAllFiles(dir) {
  let files = [];
  try {
    const items = readdirSync(dir, { withFileTypes: true });
    for (const item of items) {
      const fullPath = path.join(dir, item.name);
      if (item.isDirectory()) {
        files = files.concat(getAllFiles(fullPath));
      } else if (item.name.endsWith('.avif')) {
        files.push(fullPath);
      }
    }
  } catch (e) {
    // ignore
  }
  return files;
}

async function optimizeImages() {
  const files = getAllFiles(imgDir);
  console.log(`📊 Found ${files.length} AVIF files\n`);
  
  let optimized = 0;
  let totalBefore = 0;
  let totalAfter = 0;
  let skipped = 0;
  
  for (const file of files) {
    try {
      const stats = statSync(file);
      const before = stats.size;
      totalBefore += before;
      
      // Recompress with quality 45
      await sharp(file)
        .avif({ quality: 45 })
        .toFile(file + '.tmp');
      
      const after = statSync(file + '.tmp').size;
      
      if (after < before) {
        fs.renameSync(file + '.tmp', file);
        const reduction = Math.round((before - after) * 100 / before);
        console.log(`✅ ${path.basename(file)} | ${before}B → ${after}B | -${reduction}%`);
        optimized++;
        totalAfter += after;
      } else {
        fs.unlinkSync(file + '.tmp');
        console.log(`⏭️  ${path.basename(file)} | Optimal already`);
        skipped++;
        totalAfter += before;
      }
    } catch (e) {
      console.error(`❌ ${path.basename(file)}: ${e.message}`);
    }
  }
  
  console.log(`\n${'='.repeat(60)}`);
  console.log(`📈 OPTIMIZATION SUMMARY`);
  console.log(`${'='.repeat(60)}`);
  console.log(`✅ Optimized: ${optimized}/${files.length}`);
  console.log(`⏭️  Skipped (already optimal): ${skipped}`);
  console.log(`📊 Total before: ${(totalBefore/1024/1024).toFixed(2)} MB`);
  console.log(`📊 Total after:  ${(totalAfter/1024/1024).toFixed(2)} MB`);
  if (totalBefore > 0) {
    const reduction = Math.round((totalBefore - totalAfter)*100/totalBefore);
    const saved = (totalBefore - totalAfter) / 1024 / 1024;
    console.log(`📉 Reduction: ${reduction}% (${saved.toFixed(2)} MB saved)`);
  }
  console.log(`${'='.repeat(60)}\n`);
}

optimizeImages().catch(console.error);
