import { c as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead, d as addAttribute, F as Fragment } from '../chunks/astro/server_D8pMnQBn.mjs';
import 'piccolore';
import { g as getCollection } from '../chunks/_astro_content_DoEh7u_S.mjs';
import { $ as $$BaseLayout, a as $$Breadcrumbs } from '../chunks/Breadcrumbs_BkFbHGbf.mjs';
import { $ as $$Hero } from '../chunks/Hero_3Is3fruG.mjs';
import { $ as $$CtaBar } from '../chunks/CtaBar_CdFZlCZU.mjs';
import { $ as $$DirectoryCard } from '../chunks/DirectoryCard_DykBwQs9.mjs';
import { $ as $$FaqSection } from '../chunks/FaqSection_CzcP3CIi.mjs';
import { $ as $$SectionHeader } from '../chunks/SectionHeader_mLKzHzNX.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const empresas = await getCollection("directorio", ({ data }) => data.activo !== false);
  empresas.sort((a, b) => (b.data.resenas ?? 0) - (a.data.resenas ?? 0));
  const cdmxEmpresas = empresas.filter((e) => e.data.zona === "cdmx");
  const edomexEmpresas = empresas.filter((e) => e.data.zona === "estado-de-mexico");
  const categorias = [
    { key: "all", label: "Todos", count: empresas.length },
    { key: "audio", label: "Audio", count: empresas.filter((e) => e.data.categoria === "audio").length },
    { key: "iluminacion", label: "Iluminaci\xF3n", count: empresas.filter((e) => e.data.categoria === "iluminacion").length },
    { key: "dj", label: "DJ", count: empresas.filter((e) => e.data.categoria === "dj").length },
    { key: "audio-video", label: "Audio & Video", count: empresas.filter((e) => e.data.categoria === "audio-video").length },
    { key: "efectos", label: "Efectos", count: empresas.filter((e) => e.data.categoria === "efectos").length }
  ];
  const topEmpresas = empresas.slice(0, 5);
  const title = "Directorio de Proveedores de Audio e Iluminaci\xF3n para Eventos en CDMX | REDEIL";
  const description = "Encuentra las mejores tiendas de audio, iluminaci\xF3n y equipo profesional para eventos en Ciudad de M\xE9xico y Estado de M\xE9xico. 25 empresas verificadas con ratings reales.";
  const canonical = "https://rentadeiluminacion.com/directorio/";
  const schemaMarkup = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Directorio de Proveedores de Equipo de Audio e Iluminaci\xF3n CDMX",
    "description": description,
    "numberOfItems": empresas.length,
    "itemListElement": empresas.map((e, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "name": e.data.nombre,
      "url": `https://rentadeiluminacion.com/directorio/${e.slug}/`
    }))
  });
  const faqItems = [
    { question: "\xBFEstas empresas son de REDEIL?", answer: "No. Este directorio lista tiendas independientes que venden equipo de audio e iluminaci\xF3n en CDMX y Estado de M\xE9xico. REDEIL es un servicio de renta \u2014 si prefieres rentar equipo con instalaci\xF3n incluida, cotiza con nosotros." },
    { question: "\xBFC\xF3mo seleccionan las empresas del directorio?", answer: "Buscamos tiendas verificadas en Google Maps con buenas calificaciones y rese\xF1as reales de compradores. Todas est\xE1n ubicadas en CDMX o Estado de M\xE9xico y se dedican a la venta de equipo profesional." },
    { question: "\xBFCu\xE1l es la diferencia entre comprar y rentar equipo?", answer: "Comprar es para quien usa equipo frecuentemente (DJs, productores, iglesias). Rentar es ideal para eventos \xFAnicos como bodas, XV a\xF1os o corporativos \u2014 incluye transporte, instalaci\xF3n y operaci\xF3n t\xE9cnica." },
    { question: "\xBFPuedo rentar equipo con REDEIL en vez de comprar?", answer: "S\xED. REDEIL renta iluminaci\xF3n, sonido, DJ y efectos especiales para eventos en toda la zona metropolitana. El servicio incluye transporte, montaje, operaci\xF3n durante el evento y desmontaje. Cotiza gratis por WhatsApp." },
    { question: "\xBFCada cu\xE1nto actualizan el directorio?", answer: "Verificamos la informaci\xF3n peri\xF3dicamente. Si una empresa cerr\xF3, cambi\xF3 de direcci\xF3n o tiene datos incorrectos, cont\xE1ctanos para actualizarla." },
    { question: "\xBFC\xF3mo puedo agregar mi negocio al directorio?", answer: "Si vendes equipo de audio, iluminaci\xF3n o efectos especiales en CDMX o Estado de M\xE9xico, escr\xEDbenos por WhatsApp con los datos de tu negocio y lo revisamos para incluirlo." }
  ];
  return renderTemplate(_a || (_a = __template(["", ` <script>
document.addEventListener('DOMContentLoaded', function() {
  var pills = document.querySelectorAll('.dir-pill, .dir-sidebar__cat-btn');
  var items = document.querySelectorAll('#dirGrid .dir-item');
  
  pills.forEach(function(pill) {
    pill.addEventListener('click', function() {
      var cat = this.dataset.cat || this.dataset.filter;
      
      // Update active pill
      document.querySelectorAll('.dir-pill').forEach(function(p) { p.classList.remove('dir-pill--active'); });
      var mainPill = document.querySelector('.dir-pill[data-cat="' + cat + '"]');
      if (mainPill) mainPill.classList.add('dir-pill--active');
      
      // Filter items
      items.forEach(function(item) {
        if (cat === 'all' || item.dataset.categoria === cat) {
          item.style.display = '';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
});
<\/script> `])), renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "canonical": canonical, "schemaMarkup": schemaMarkup, "data-astro-cid-7xm65fjf": true }, { "breadcrumbs": async ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "breadcrumbs" }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "Breadcrumbs", $$Breadcrumbs, { "items": [{ label: "Inicio", href: "/" }, { label: "Directorio" }], "data-astro-cid-7xm65fjf": true })} ` })}`, "default": async ($$result2) => renderTemplate`   ${renderComponent($$result2, "Hero", $$Hero, { "title": "Directorio de Proveedores de Audio e Iluminaci\xF3n", "subtitle": "Las mejores tiendas de equipo profesional para eventos en CDMX y Estado de M\xE9xico", "introParagraph1": "Hemos seleccionado las <strong>25 tiendas mejor calificadas</strong> en Google Maps que venden equipo de sonido, iluminaci\xF3n LED, consolas para DJ y efectos especiales en la Ciudad de M\xE9xico y zona metropolitana. Todas verificadas, con ratings y rese\xF1as reales de compradores.", "introParagraph2": "Si lo que buscas es <strong>comprar tu propio equipo</strong>, aqu\xED encontrar\xE1s las opciones m\xE1s confiables. Si prefieres <strong>rentar equipo para un evento</strong> con transporte, instalaci\xF3n y operaci\xF3n incluida, <a href='/contacto/' style='color:#ff8a65;text-decoration:underline'>cotiza con REDEIL</a> \u2014 es lo que hacemos mejor.", "data-astro-cid-7xm65fjf": true })}  ${renderComponent($$result2, "CtaBar", $$CtaBar, { "headline": "\xBFQu\xE9 tipo de equipo buscas?", "items": [
    { label: "Audio", href: "#empresas", icon: "sonido" },
    { label: "Iluminaci\xF3n", href: "#empresas", icon: "iluminacion" },
    { label: "DJ", href: "#empresas", icon: "efectos" },
    { label: "\xBFPrefieres Rentar?", href: "/contacto/", icon: "cotizar" }
  ], "data-astro-cid-7xm65fjf": true })}  ${maybeRenderHead()}<section class="dir-zonas" data-astro-cid-7xm65fjf> <div class="container" data-astro-cid-7xm65fjf> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Explora por Zona", "subtitle": "CDMX y Estado de M\xE9xico", "paragraph1": "Nuestro directorio cubre las dos zonas con mayor concentraci\xF3n de tiendas de equipo profesional para eventos: la Ciudad de M\xE9xico con su hist\xF3rico corredor de audio en el Centro y las tiendas especializadas del Estado de M\xE9xico.", "paragraph2": "Selecciona tu zona para ver las tiendas m\xE1s cercanas a ti, con direcci\xF3n exacta, tel\xE9fono y calificaci\xF3n de Google Maps.", "data-astro-cid-7xm65fjf": true })} <div class="dir-zonas__grid" data-astro-cid-7xm65fjf> <a href="/directorio/cdmx/" class="dir-zona-card" data-astro-cid-7xm65fjf> <img src="/img/directorio/directorio-fachada-tienda-01.avif" alt="Tiendas de audio e iluminación en CDMX" loading="lazy" width="600" height="340" data-astro-cid-7xm65fjf> <div class="dir-zona-card__overlay" data-astro-cid-7xm65fjf> <h3 data-astro-cid-7xm65fjf>Ciudad de México</h3> <p class="dir-zona-card__count" data-astro-cid-7xm65fjf>${cdmxEmpresas.length} tiendas verificadas</p> <p class="dir-zona-card__desc" data-astro-cid-7xm65fjf>Centro Histórico, Cuauhtémoc, Benito Juárez, Iztapalapa y más</p> <span class="dir-zona-card__cta" data-astro-cid-7xm65fjf>Explorar CDMX →</span> </div> </a> <a href="/directorio/estado-de-mexico/" class="dir-zona-card" data-astro-cid-7xm65fjf> <img src="/img/directorio/directorio-almacen-luces-01.avif" alt="Tiendas de audio e iluminación en Estado de México" loading="lazy" width="600" height="340" data-astro-cid-7xm65fjf> <div class="dir-zona-card__overlay" data-astro-cid-7xm65fjf> <h3 data-astro-cid-7xm65fjf>Estado de México</h3> <p class="dir-zona-card__count" data-astro-cid-7xm65fjf>${edomexEmpresas.length} tiendas verificadas</p> <p class="dir-zona-card__desc" data-astro-cid-7xm65fjf>Naucalpan, Tlalnepantla, Ecatepec y zona metropolitana</p> <span class="dir-zona-card__cta" data-astro-cid-7xm65fjf>Explorar Edomex →</span> </div> </a> </div> </div> </section>  <section class="dir-main" id="empresas" data-astro-cid-7xm65fjf> <div class="container dir-main__layout" data-astro-cid-7xm65fjf> <!-- CONTENIDO PRINCIPAL --> <div class="dir-main__content" data-astro-cid-7xm65fjf> <div class="dir-main__header" data-astro-cid-7xm65fjf> <h2 class="dir-main__title" data-astro-cid-7xm65fjf>${empresas.length} Proveedores Verificados</h2> <!-- Category pills --> <div class="dir-pills" id="dirPills" data-astro-cid-7xm65fjf> ${categorias.map((cat) => renderTemplate`<button${addAttribute(`dir-pill ${cat.key === "all" ? "dir-pill--active" : ""}`, "class")}${addAttribute(cat.key, "data-cat")} data-astro-cid-7xm65fjf> ${cat.label} <span class="dir-pill__count" data-astro-cid-7xm65fjf>${cat.count}</span> </button>`)} </div> </div> <div class="services-grid" id="dirGrid" data-astro-cid-7xm65fjf> ${empresas.map((empresa) => renderTemplate`<div class="dir-item"${addAttribute(empresa.data.categoria, "data-categoria")}${addAttribute(empresa.data.zona, "data-zona")} data-astro-cid-7xm65fjf> ${renderComponent($$result2, "DirectoryCard", $$DirectoryCard, { "nombre": empresa.data.nombre, "categoria": empresa.data.categoria, "zona": empresa.data.zona, "alcaldia_municipio": empresa.data.alcaldia_municipio, "telefono": empresa.data.telefono, "rating": empresa.data.rating, "resenas": empresa.data.resenas, "slug": empresa.slug, "data-astro-cid-7xm65fjf": true })} </div>`)} </div> </div> <!-- SIDEBAR --> <aside class="dir-sidebar" data-astro-cid-7xm65fjf> <!-- Top 5 --> <div class="dir-sidebar__box" data-astro-cid-7xm65fjf> <h3 class="dir-sidebar__title" data-astro-cid-7xm65fjf>⭐ Mejor Calificadas</h3> <ul class="dir-sidebar__list" data-astro-cid-7xm65fjf> ${topEmpresas.map((e) => renderTemplate`<li class="dir-sidebar__item" data-astro-cid-7xm65fjf> <a${addAttribute(`/directorio/${e.slug}/`, "href")} data-astro-cid-7xm65fjf> <span class="dir-sidebar__name" data-astro-cid-7xm65fjf>${e.data.nombre}</span> <span class="dir-sidebar__meta" data-astro-cid-7xm65fjf>⭐ ${e.data.rating} (${e.data.resenas})</span> </a> </li>`)} </ul> </div> <!-- Categorías --> <div class="dir-sidebar__box" data-astro-cid-7xm65fjf> <h3 class="dir-sidebar__title" data-astro-cid-7xm65fjf>📂 Categorías</h3> <ul class="dir-sidebar__list" data-astro-cid-7xm65fjf> ${categorias.filter((c) => c.key !== "all").map((cat) => renderTemplate`<li class="dir-sidebar__item" data-astro-cid-7xm65fjf> <button class="dir-sidebar__cat-btn"${addAttribute(cat.key, "data-filter")} data-astro-cid-7xm65fjf> ${cat.label} <span data-astro-cid-7xm65fjf>(${cat.count})</span> </button> </li>`)} </ul> </div> <!-- CTA REDEIL --> <div class="dir-sidebar__cta" data-astro-cid-7xm65fjf> <h3 data-astro-cid-7xm65fjf>¿Prefieres Rentar?</h3> <p data-astro-cid-7xm65fjf>No necesitas comprar equipo para tu evento. REDEIL te lo lleva, instala y opera.</p> <a href="/contacto/" class="btn btn-primary btn-lg" data-astro-cid-7xm65fjf>Cotiza Gratis →</a> <a href="https://wa.me/525530682988?text=Hola,%20quiero%20cotizar%20equipo%20para%20mi%20evento" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp" data-astro-cid-7xm65fjf>
WhatsApp — 55 3068 2988
</a> </div> <!-- Zonas --> <div class="dir-sidebar__box" data-astro-cid-7xm65fjf> <h3 class="dir-sidebar__title" data-astro-cid-7xm65fjf>📍 Por Zona</h3> <ul class="dir-sidebar__list" data-astro-cid-7xm65fjf> <li class="dir-sidebar__item" data-astro-cid-7xm65fjf> <a href="/directorio/cdmx/" data-astro-cid-7xm65fjf>CDMX <span data-astro-cid-7xm65fjf>(${cdmxEmpresas.length})</span></a> </li> <li class="dir-sidebar__item" data-astro-cid-7xm65fjf> <a href="/directorio/estado-de-mexico/" data-astro-cid-7xm65fjf>Estado de México <span data-astro-cid-7xm65fjf>(${edomexEmpresas.length})</span></a> </li> </ul> </div> </aside> </div> </section>  ${renderComponent($$result2, "FaqSection", $$FaqSection, { "items": faqItems, "data-astro-cid-7xm65fjf": true })}  <section class="cta-section" data-astro-cid-7xm65fjf> <div class="container" data-astro-cid-7xm65fjf> <div class="cta-content" style="text-align:center; max-width:640px; margin:0 auto;" data-astro-cid-7xm65fjf> <h2 data-astro-cid-7xm65fjf>¿Prefieres que nos encarguemos de todo?</h2> <p data-astro-cid-7xm65fjf>En REDEIL rentamos equipo de iluminación, sonido, DJ y efectos especiales para tu evento. Transporte, montaje y operación incluidos.</p> <div style="display:flex; gap:1rem; justify-content:center; flex-wrap:wrap; margin-top:1.5rem;" data-astro-cid-7xm65fjf> <a href="/contacto/" class="btn btn-primary btn-lg" data-astro-cid-7xm65fjf>Cotizar Evento →</a> <a href="/servicios/" class="btn btn-outline btn-lg" data-astro-cid-7xm65fjf>Ver Servicios</a> </div> </div> </div> </section> ` }));
}, "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/pages/directorio/index.astro", void 0);

const $$file = "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/pages/directorio/index.astro";
const $$url = "/directorio";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
