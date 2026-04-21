#!/usr/bin/env node
/**
 * Post-build CDN rewrite.
 *
 * Reemplaza referencias a /img/... por la URL del CDN (ExactDN) en los
 * archivos HTML del directorio dist/. Sustituye la reescritura que se
 * hacía en runtime desde BaseLayout.astro (la cual causaba doble
 * request por imagen y destruía LCP).
 *
 * Patrones cubiertos:
 *   - src="/img/..."
 *   - src='/img/...'
 *   - srcset="... /img/... ..."
 *   - href="/img/..." (preload/prefetch para imágenes)
 *   - content="/img/..." (og:image / twitter:image)
 *   - style="...url(/img/...)..."
 *   - url(/img/...) dentro de <style>
 *
 * No toca:
 *   - /fonts/ (se mantienen en origen para evitar CORS con fonts)
 *   - /_astro/ (Astro bundler, ya con hash y cacheable)
 *   - URLs que ya contienen el CDN
 *
 * Uso:
 *   node scripts/rewrite-cdn.mjs
 *   CDN_URL=https://otro-cdn.com node scripts/rewrite-cdn.mjs
 */

import { readdir, readFile, writeFile, stat } from 'node:fs/promises';
import { join, extname } from 'node:path';
import { fileURLToPath } from 'node:url';

const CDN = process.env.CDN_URL || 'https://ek8wn5x6rqg.exactdn.com';
const DIST = fileURLToPath(new URL('../dist', import.meta.url));

// Sólo HTML. CSS/JS no suelen contener /img/ en este proyecto.
const EXTENSIONS = new Set(['.html', '.htm']);

async function* walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      yield* walk(fullPath);
    } else if (EXTENSIONS.has(extname(entry.name))) {
      yield fullPath;
    }
  }
}

/**
 * Reescribe un string HTML reemplazando /img/ por CDN/img/ en los
 * atributos y contextos que cargan recursos (no en texto arbitrario).
 */
function rewriteHtml(html, cdn) {
  let out = html;
  let replacements = 0;

  // src="/img/..." | src='/img/...'
  out = out.replace(/(\s(?:src|href|content)\s*=\s*["'])\/img\//g, (_m, p1) => {
    replacements++;
    return `${p1}${cdn}/img/`;
  });

  // srcset="foo /img/a 1x, bar /img/b 2x"
  // El valor del srcset puede tener múltiples URLs; reemplazamos cada /img/ suelto.
  out = out.replace(/(\ssrcset\s*=\s*["'])([^"']+)(["'])/g, (_m, open, value, close) => {
    const newValue = value.replace(/(^|,|\s)\/img\//g, (_, prefix) => {
      replacements++;
      return `${prefix}${cdn}/img/`;
    });
    return `${open}${newValue}${close}`;
  });

  // style="...url(/img/...)..."  y  style='...url(/img/...)...'
  // y <style>... url(/img/...) ...</style>
  out = out.replace(/url\((['"]?)\/img\//g, (_m, q) => {
    replacements++;
    return `url(${q}${cdn}/img/`;
  });

  return { out, replacements };
}

async function main() {
  const start = Date.now();
  let stats;
  try {
    stats = await stat(DIST);
  } catch {
    console.error(`[rewrite-cdn] dist/ no existe en ${DIST}. Corre "astro build" primero.`);
    process.exit(1);
  }
  if (!stats.isDirectory()) {
    console.error(`[rewrite-cdn] ${DIST} no es un directorio.`);
    process.exit(1);
  }

  let filesTouched = 0;
  let filesScanned = 0;
  let totalReplacements = 0;

  for await (const file of walk(DIST)) {
    filesScanned++;
    const original = await readFile(file, 'utf8');
    const { out, replacements } = rewriteHtml(original, CDN);
    if (replacements > 0 && out !== original) {
      await writeFile(file, out, 'utf8');
      filesTouched++;
      totalReplacements += replacements;
    }
  }

  const ms = Date.now() - start;
  console.log(
    `[rewrite-cdn] ${totalReplacements} reemplazos en ${filesTouched}/${filesScanned} HTML (${ms}ms) → ${CDN}`
  );
}

main().catch((err) => {
  console.error('[rewrite-cdn] error:', err);
  process.exit(1);
});
