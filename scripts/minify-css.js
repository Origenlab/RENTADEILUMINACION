const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, '../css/style.css');
const outputPath = path.join(__dirname, '../css/style.min.css');

// Leer CSS
let css = fs.readFileSync(cssPath, 'utf8');
const originalSize = css.length;

// Minificar
css = css
  // Remover comentarios
  .replace(/\/\*[\s\S]*?\*\//g, '')
  // Remover espacios en blanco excesivos
  .replace(/\s+/g, ' ')
  // Remover espacios alrededor de caracteres especiales
  .replace(/\s*([{};:,>+~])\s*/g, '$1')
  // Remover punto y coma antes de llave
  .replace(/;}/g, '}')
  // Trim
  .trim();

// Guardar
fs.writeFileSync(outputPath, css);

const newSize = css.length;
const saved = originalSize - newSize;

console.log(`\n✅ CSS Minificado:`);
console.log(`   Original: ${(originalSize / 1024).toFixed(1)} KB`);
console.log(`   Minificado: ${(newSize / 1024).toFixed(1)} KB`);
console.log(`   Ahorro: ${(saved / 1024).toFixed(1)} KB (${((saved / originalSize) * 100).toFixed(1)}%)\n`);
