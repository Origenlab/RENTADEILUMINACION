# AUDIT REDEIL — 2026-04-20

Astro 5.7.10 · 253 páginas · build ok · TS strictest · Lighthouse último reportado 63/100

Calificación actual: **68/100**. Target post-fix: 88-92.

---

## TL;DR — ORDEN DE ATAQUE

1. Quitar ExactDN rewrite client-side → build-time
2. Borrar `public/img.backup/` (73 MB muertos)
3. Generar `srcset` responsive + `loading="lazy"` en TODAS las imágenes
4. Mover TruConversion + DMChamp a Partytown
5. Consolidar `/servicios/bodas` vs `/eventos/bodas` (canibalización)
6. Decidir qué hacer con `robots.txt` que bloquea IA (AEO)
7. Backend real para formulario `/contacto` (hoy solo abre chat)

---

## 🔴 CRÍTICO (1-3 días)

### C1. ExactDN rewrite en runtime = doble request
**Archivo:** `src/layouts/BaseLayout.astro:209-229`
```js
document.addEventListener('DOMContentLoaded', function(){
  var imgs = document.querySelectorAll('img[src^="/img/"]');
  ...imgs[i].src = cdn + imgs[i].getAttribute('src');
```
Browser ya empezó a pedir `/img/...avif` del origin antes de que corra el script. Despues lo cambias y pide de nuevo al CDN. Cada imagen above-the-fold = 2 requests + LCP destruido.

**Fix:** Reescribir en build-time. Crear componente `<Img>` o variable global en layouts:
```astro
---
const CDN = import.meta.env.PROD ? 'https://ek8wn5x6rqg.exactdn.com' : '';
---
<img src={`${CDN}/img/hero.avif`} ... />
```
Y borrar el script inline de rewriting.

### C2. Imágenes sin `srcset` + sin `<picture>` + AVIF-only
Verificado: `srcset` sólo aparece 2 veces (BaseLayout), `<picture>` sólo 4 veces (zonas-de-cobertura). **El resto del sitio sirve el mismo AVIF a móvil 360px y a desktop 1920px.**

Móvil = carga 1200px = desperdicio → LCP alto.

**Fix:**
- Generar 3 tamaños por imagen (400/800/1200) + formato WebP además de AVIF (Safari viejos, WhatsApp shares)
- Envolver en `<picture>` con `<source type="image/avif">` + `<source type="image/webp">` + `<img>` jpg fallback
- Script: extender `optimize_avif.mjs` para emitir srcset + fallbacks

### C3. `public/img.backup/` — 73 MB de peso muerto
41 archivos que nunca se referencian, se incluyen en `dist/` = 175 MB dist (vs ~102 MB real).
```bash
rm -rf public/img.backup/
```
Y agregar a `.gitignore` patrón `*.backup/`.

### C4. Third-party render-blocking (TruConversion + DMChamp)
`BaseLayout.astro:231-242` y `:296`. Dos widgets de chat/encuesta cargados en `<head>` y body sin strategy. Ambos ejecutan scripts y **MutationObservers sobre `document.body`** (i18n custom) → main thread quemado.

**Fix corto:** agregar `async defer` y delegar carga a post-interaction (e.g. `requestIdleCallback`).
**Fix correcto:** `@astrojs/partytown` → off-main-thread:
```bash
npm i @astrojs/partytown
```
```js
// astro.config.mjs
import partytown from '@astrojs/partytown';
integrations: [sitemap({...}), partytown({ config: { forward: ['_tip'] } })]
```
Y cambiar scripts a `type="text/partytown"`.

### C5. Contacto: formulario sin backend
`src/pages/contacto.astro` (23 KB, wizard 3 pasos). El submit real **no envía a ningún endpoint** — dispara `openDmchampChat()`. Si el usuario no tiene JS o bloquea el widget, el lead se pierde.

**Fix:** endpoint real. Opciones:
- Astro endpoint `src/pages/api/lead.ts` → reenvía a email / Slack / CRM
- Web3Forms / Formspree / Netlify Forms (más rápido)
- reCAPTCHA v3 o honeypot para anti-spam
- Guardar copia (Cloudflare D1, Google Sheets, Airtable)

### C6. Duplicate content `/servicios/bodas/` ↔ `/eventos/bodas/`
Contenido casi idéntico → canibalización keyword "iluminación bodas CDMX".

**Fix:** elegir URL canónica (sugiero `/servicios/bodas/`, está más cerca del funnel) y:
- opción A: `<link rel="canonical">` cruzado + reducir copy en la otra
- opción B: `<meta name="robots" content="noindex,follow">` en `/eventos/bodas/`
- opción C: colapsar en una sola, redirect 301

Esto también explica el filter raro en `astro.config.mjs` (excluye sitemap a `bodas`, `xv-anos`, `confeti-papelitos` — indicio de que el equipo ya sabía del problema pero no terminó).

### C7. `robots.txt` bloquea toda IA (AEO/GEO penalty)
```
User-agent: GPTBot / ClaudeBot / Google-Extended / CCBot / Bytespider → Disallow: /
```
Decisión de producto, no bug. Pero implica:
- ❌ No apareces en respuestas de ChatGPT / Claude / Perplexity / Google AI Overviews (Google-Extended)
- En un rubro de búsqueda local ("renta de iluminación CDMX"), AI Overviews ya está robando clicks

**Fix:** decidir. Si quieres visibilidad AEO, permitir al menos `Google-Extended` y `ClaudeBot`/`GPTBot`. Si fue decisión consciente de no entrenar modelos con tu copy, mantener pero **entender el costo**.

---

## 🟠 ALTO (1 semana)

### A1. Integraciones Astro faltantes
`astro.config.mjs` sólo tiene sitemap. Agregar:
- `astro-compress` o `@playform/compress` → minifica HTML/CSS/JS/SVG, mejora TBT
- `@astrojs/check` en CI → type-check en build
- (opcional) `astro-robots-txt` para generar robots desde config

### A2. Lazy loading incompleto
11/12 archivos con `<img>` usan `loading="lazy"` en al menos un caso — pero muchos hero/LCP images NO deben ser lazy (debe ser `loading="eager" fetchpriority="high"`). Auditar imagen por imagen:
- Hero de index, zona, servicio → `eager` + `fetchpriority="high"` + **preload**
- Gallery / blog grid / below-fold → `lazy` + `decoding="async"`

### A3. OG images en AVIF
`BaseLayout.astro:16` default es `/img/og/og-image-redeil.avif`. Todas las og- están en AVIF. Meta/WhatsApp/Slack/iMessage no renderizan AVIF → share sin preview = pérdida de clicks sociales.

**Fix:** generar versión `.jpg` 1200×630 de cada OG. Cambiar default a `.jpg`.

### A4. CLS: topbar altura calculada por JS
`BaseLayout.astro:193-207`. El hero depende de `--topbar-height` seteado en JS → reflow.

**Fix:** media queries + altura fija:
```css
.topbar { height: 36px; }
@media (max-width: 640px) { .topbar { height: 44px; } }
:root { --topbar-height: 36px; }
@media (max-width: 640px) { :root { --topbar-height: 44px; } }
```

### A5. `schema-redeil.json` huérfano
`public/schema-redeil.json` (14 KB) no está referenciado por ningún HTML. Schema real se inyecta vía `BaseLayout`. **Borrar** o integrarlo si es el master.

### A6. `.DS_Store` versionado
Hay `.DS_Store` en root (14 KB). Agregar:
```gitignore
.DS_Store
._*
Thumbs.db
```
Y borrar del repo: `git rm --cached **/.DS_Store`.

### A7. Dos `optimize_avif` (.js + .mjs)
Son el mismo script, uno CJS otro ESM. Dejar sólo `.mjs` (package.json ya tiene `"type": "module"`).

### A8. Formulario sin labels accesibles
`src/pages/contacto.astro` wizard usa placeholders en vez de `<label>` → falla WCAG 1.3.1 + usuarios de screen reader. Agregar `<label for="…">` y mantener placeholders sólo como hint.

---

## 🟡 MEDIO (2-3 semanas)

### M1. CTAs intermedios en artículos de blog
CTA sólo al final. En articles largos (1500+ palabras), insertar CTA flotante o sticky móvil + CTA mid-article. BlogLayout ya tiene sidebar sticky — aprovechar.

### M2. Falta lead magnet
Ningún PDF / checklist / guía descargable. Rubro "bodas" ama esto. Ideas:
- "Checklist de iluminación para tu boda" (PDF 2 páginas)
- "Guía: cuánto iluminar según tus m² y tipo de venue"
- Email-gate → nutre lista para remarketing

### M3. Servicios sin filtros/faceting
`src/pages/servicios.astro` tira 37 servicios en grid. Sin categoría (iluminación / sonido / efectos / DJ / pantallas) ni buscador. En móvil es scroll infinito doloroso.

**Fix:** pestañas o tabs por categoría (HTML puro con `<details>` o un `<select>` JS mínimo).

### M4. Testimonios sin schema `Review` ni foto real
`TestimonialCards.astro` muestra testimonios pero sin `@type: Review` + `aggregateRating` en el mismo schema que `LocalBusiness`. Perdida de stars en SERP.

### M5. Blog sólo 10 artículos, sin paginación
A 20 artículos va a romper visualmente. Agregar paginación Astro nativa (`getStaticPaths` + `paginate`).

### M6. Sitemap filter confuso en `astro.config.mjs`
```js
filter: (page) => !page.includes('/servicios/bodas/') && ...
```
No comentario. No claro si funciona (el sitemap generado posiblemente ignora este filter si se usa `sitemap-index.xml`). Auditar sitemap real y dejar comentario `// excluidas porque duplican /eventos/...`

### M7. Índex gigante (39 KB)
`src/pages/index.astro` tiene 127 FAQs + toda la copy inline. Rompible en componentes por sección. Mejora mantenibilidad.

### M8. Hardcoded URLs
CDN URL, Google Analytics (si agregas), TruConversion ID, DMChamp ID todos hardcodeados. Mover a `.env`:
```
PUBLIC_CDN_URL=https://ek8wn5x6rqg.exactdn.com
PUBLIC_TRUCONVERSION_ID=62671/e4e92
PUBLIC_DMCHAMP_ID=T1ascJwdozIT8qo0YtQh
```

### M9. DMChamp i18n observer sobre `document.body`
`BaseLayout.astro:334-356` recorre TODOS los elementos del body cada mutación. Para un chat widget de 200 nodos es OK, para un site con 2500+ elementos es penalty de performance.

**Fix:** limitar el observer al contenedor del widget (`#wai-widget-container` o similar). Mucho menos trabajo por tick.

---

## 🟢 BAJO

- B1. Focus outlines en `.btn` no verificados — agregar `outline: 2px solid var(--color-accent); outline-offset: 2px` en `:focus-visible`.
- B2. Skip-link funcional pero sin estilos destacados — revisar que sea visible al focus.
- B3. `meta name="robots" content="index, follow"` es default de Google, puede omitirse.
- B4. Fuentes: 9 archivos en `/public/fonts/` — verificar que son todos `woff2` y subsetted a `latin-ext` (montserrat tiene cirílico que no se usa).
- B5. `.github/` existe — revisar si hay workflow de build preview / lighthouse-ci. Si no, agregar uno que corra Lighthouse en PRs.

---

## 📈 SEO / MARKETING — EVALUACIÓN ESTRATÉGICA

### Lo que está muy bien
- **Schema.org de primer nivel:** LocalBusiness + Service + FAQPage + BreadcrumbList + Article autogenerados. Mejor que 90% de sitios en el rubro.
- **Local SEO geo-específico:** páginas de zona nombran venues reales (Four Seasons, Hacienda San Ángel, Intercontinental). Oro puro para rankings locales.
- **Cobertura keyword:** 28 páginas zona + 37 servicios + 10 blog = long tail sólido.
- **Trust signals:** 30 años, 127 reseñas, pricing visible.
- **WhatsApp prefills por zona/servicio:** fricción mínima, UX excelente.

### Lo que sangra conversión
- **Sin hero con foto real del equipo/montaje** (validar; si son stock o AI-generated claro, se nota).
- **Sin video** — "iluminación" es un producto 100% visual, un reel de 30s en hero multiplicaría conversión.
- **Sin calculadora de cotización** — "ingresa m² + tipo de evento → rango $$". Estaría perfecto para el rubro.
- **Sin casos de estudio con antes/después.**
- **Pixel de Meta / Google Ads conversion tracking** — no veo ningún pixel (ni GA4, ni Meta). Si corren ads, no están midiendo conversiones.
- **Email capture cero** — no hay newsletter, popup exit-intent, ni lead magnet.

### Contenido / Blog
10 artículos bien escritos, copy humano, FAQs al final. Gaps temáticos evidentes:
- "cuánto cuesta iluminación para XV años" (ya tienes el de bodas)
- "iluminación eventos corporativos CDMX" (para el funnel B2B de Polanco/Santa Fe)
- "renta de planta de luz para eventos" (planta de luz aparece en servicios pero sin blog)
- comparativas locales: "bodas en jardín vs salón — qué iluminación"
- guías por venue (nombres propios): "iluminación para Hacienda de los Morales"

### AEO / GEO
Bloqueado por robots.txt. Si rompes el bloqueo de `GPTBot`/`ClaudeBot`/`Google-Extended`, el schema FAQ + venue-specific que tienes te mete directo en respuestas de IA. **Alto ROI, cero trabajo de contenido.**

---

## 📊 ESTADO vs AUDIT DE 2026-03-21

| Gap detectado en marzo | Status abril |
|---|---|
| SESSION-LOG.md / BRIEF.md / KEYWORDS.md / CONTENT-MAP.md | Documentación del proyecto sí existe (STATUS.md, PLAN-, REPORTE-) pero el contrato v2 no. No crítico. |
| Schema no validado | Inline en BaseLayout, sintácticamente válido. Falta correr `schema.org/validator` |
| LocalBusiness sin serviceArea / openingHours | Según STATUS marzo 22 — resuelto ✅ |
| Imágenes peso crítico (LCP 6.6s) | **No resuelto**. Sigue siendo el bloqueante. |
| Responsive srcset | **No resuelto**. 0 páginas con srcset real. |
| Cross-linking entre zonas | No verificado; revisar `ZoneCards.astro` |

---

## 📋 PLAN DE 3 SPRINTS

**Sprint 1 (esta semana) — Performance**
1. Build-time ExactDN rewrite (C1)
2. `rm -rf public/img.backup` + `.gitignore` (C3)
3. Script para generar srcset + WebP fallbacks (C2)
4. Partytown para scripts (C4)
5. Re-Lighthouse objetivo ≥ 85

**Sprint 2 (semana 2) — SEO/Contenido**
1. Backend real en /contacto (C5)
2. Consolidar bodas/xv-anos servicios vs eventos (C6)
3. Decisión robots.txt (C7)
4. OG images a JPG (A3)
5. Labels accesibles en formularios (A8)
6. Integraciones Astro (A1)

**Sprint 3 (semana 3) — Conversión**
1. Lead magnet + email capture (M2)
2. Pixel GA4 + Meta Pixel
3. Faceting en /servicios/ (M3)
4. Review schema en testimonios (M4)
5. CTAs intermedios en blog (M1)
6. Video hero en homepage

---

**Generado:** 2026-04-20
