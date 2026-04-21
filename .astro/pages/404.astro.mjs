import { c as createComponent, r as renderTemplate, a as renderHead } from '../chunks/astro/server_D8pMnQBn.mjs';
import 'piccolore';
import 'clsx';
/* empty css                               */
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(['<html lang="es-MX" data-astro-cid-zetdm5md> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>P\xE1gina no encontrada | REDEIL</title><meta name="robots" content="noindex, follow"><link rel="canonical" href="https://rentadeiluminacion.com/"><meta http-equiv="refresh" content="5;url=https://rentadeiluminacion.com/">', `</head> <body data-astro-cid-zetdm5md> <div class="c" data-astro-cid-zetdm5md> <h1 data-astro-cid-zetdm5md>404</h1> <h2 data-astro-cid-zetdm5md>Esta p\xE1gina ya no existe</h2> <p data-astro-cid-zetdm5md>Parece que llegaste a una p\xE1gina antigua. Hemos redise\xF1ado nuestro sitio y algunas URLs cambiaron. Te redirigimos al inicio en <strong id="count" data-astro-cid-zetdm5md>5</strong> segundos.</p> <div class="links" data-astro-cid-zetdm5md> <a href="/" data-astro-cid-zetdm5md>Ir al Inicio</a> <a href="/servicios/" class="sec" data-astro-cid-zetdm5md>Ver Servicios</a> <a href="/eventos/bodas/" class="sec" data-astro-cid-zetdm5md>Bodas</a> <a href="/eventos/xv-anos/" class="sec" data-astro-cid-zetdm5md>XV A\xF1os</a> <a href="/contacto/" class="sec" data-astro-cid-zetdm5md>Contacto</a> <a href="https://wa.me/5530682988?text=Hola%20REDEIL" class="sec" data-astro-cid-zetdm5md>WhatsApp</a> </div> <p class="timer" data-astro-cid-zetdm5md>Si no se redirige autom\xE1ticamente, haz clic en "Ir al Inicio".</p> </div> <script>
    // Countdown
    var c = 5;
    var el = document.getElementById('count');
    setInterval(function() { if (c > 0) { c--; el.textContent = c; } }, 1000);

    // Smart redirects for old WordPress/WooCommerce URLs
    var path = window.location.pathname.toLowerCase();
    var map = {
      '/producto/': '/servicios/',
      '/productos/': '/servicios/',
      '/categoria-producto/': '/servicios/',
      '/etiqueta-producto/': '/servicios/',
      '/product/': '/servicios/',
      '/product-category/': '/servicios/',
      '/product-tag/': '/servicios/',
      '/shop/': '/servicios/',
      '/tienda/': '/servicios/',
      '/cart/': '/',
      '/carrito/': '/',
      '/checkout/': '/contacto/',
      '/mi-cuenta/': '/',
      '/my-account/': '/',
    };

    // Check keyword-based redirects
    var kwMap = [
      { kw: ['guirnalda'], to: '/servicios/guirnaldas/' },
      { kw: ['iluminacion', 'luces', 'luz', 'led'], to: '/servicios/luces-led/' },
      { kw: ['bocina', 'sonido', 'audio', 'speaker'], to: '/servicios/bocinas/' },
      { kw: ['dj', 'disc'], to: '/servicios/dj/' },
      { kw: ['humo', 'smoke', 'niebla'], to: '/servicios/humo-bajo/' },
      { kw: ['confeti', 'confetti', 'papelito'], to: '/servicios/confeti/' },
      { kw: ['burbuja', 'bubble'], to: '/servicios/burbujas/' },
      { kw: ['disco', 'bola'], to: '/servicios/bola-disco/' },
      { kw: ['pantalla', 'inflable', 'screen'], to: '/servicios/pantalla-inflable/' },
      { kw: ['sky', 'tracker', 'antiaere'], to: '/servicios/sky-tracker/' },
      { kw: ['cabeza', 'movil', 'moving', 'beam'], to: '/servicios/cabezas-moviles/' },
      { kw: ['cascada'], to: '/servicios/cascadas-led/' },
      { kw: ['gobo', 'proyecc'], to: '/servicios/gobos/' },
      { kw: ['neon', 'ne\xF3n', 'uv', 'ultravioleta'], to: '/servicios/luces-neon/' },
      { kw: ['negra', 'black'], to: '/servicios/luz-negra/' },
      { kw: ['city', 'arquitect', 'fachada'], to: '/servicios/iluminacion-arquitectonica/' },
      { kw: ['seguidor', 'spotlight', 'follow'], to: '/servicios/seguidor/' },
      { kw: ['podium', 'tarima'], to: '/servicios/podiums/' },
      { kw: ['boda', 'wedding', 'novia', 'novio'], to: '/eventos/bodas/' },
      { kw: ['xv', 'quince', 'quincea\xF1era'], to: '/eventos/xv-anos/' },
      { kw: ['contact', 'cotiz'], to: '/contacto/' },
      { kw: ['blog', 'articulo', 'nota'], to: '/blog/' },
      { kw: ['zona', 'cobertura', 'ubicacion'], to: '/zonas-de-cobertura/' },
    ];

    // Try path-prefix match first
    var redirectTo = null;
    for (var prefix in map) {
      if (path.indexOf(prefix) === 0) { redirectTo = map[prefix]; break; }
    }

    // If no prefix match, try keyword match
    if (!redirectTo) {
      for (var i = 0; i < kwMap.length; i++) {
        for (var j = 0; j < kwMap[i].kw.length; j++) {
          if (path.indexOf(kwMap[i].kw[j]) !== -1) { redirectTo = kwMap[i].to; break; }
        }
        if (redirectTo) break;
      }
    }

    // If we found a smart redirect, go there instead of homepage
    if (redirectTo) {
      window.location.replace(redirectTo);
    }
  <\/script> </body> </html>`])), renderHead());
}, "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/pages/404.astro", void 0);

const $$file = "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
