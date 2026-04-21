import { c as createComponent, b as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_D8pMnQBn.mjs';
import 'piccolore';
import { g as getCollection } from '../../chunks/_astro_content_DoEh7u_S.mjs';
import { $ as $$BaseLayout, a as $$Breadcrumbs } from '../../chunks/Breadcrumbs_BkFbHGbf.mjs';
import { $ as $$Hero } from '../../chunks/Hero_3Is3fruG.mjs';
import { $ as $$CtaBar } from '../../chunks/CtaBar_CdFZlCZU.mjs';
import { $ as $$DirectoryCard } from '../../chunks/DirectoryCard_DykBwQs9.mjs';
import { $ as $$SectionHeader } from '../../chunks/SectionHeader_mLKzHzNX.mjs';
import { $ as $$FaqSection } from '../../chunks/FaqSection_CzcP3CIi.mjs';
/* empty css                                   */
export { renderers } from '../../renderers.mjs';

const $$Cdmx = createComponent(async ($$result, $$props, $$slots) => {
  const empresas = await getCollection(
    "directorio",
    ({ data }) => data.activo !== false && data.zona === "cdmx"
  );
  empresas.sort((a, b) => (b.data.resenas ?? 0) - (a.data.resenas ?? 0));
  const conteo = {};
  for (const e of empresas) {
    conteo[e.data.categoria] = (conteo[e.data.categoria] ?? 0) + 1;
  }
  const categoriaLabel = {
    audio: "Audio Profesional",
    iluminacion: "Iluminaci\xF3n",
    "audio-video": "Audio & Video",
    dj: "DJ",
    efectos: "Efectos"
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Tiendas de Audio e Iluminaci\xF3n en CDMX | Directorio de Proveedores", "description": "Directorio de las mejores tiendas de audio, iluminaci\xF3n y equipo para eventos en Ciudad de M\xE9xico. Calificaciones verificadas en Google Maps, datos de contacto y ubicaciones.", "canonical": "https://rentadeiluminacion.com/directorio/cdmx/", "data-astro-cid-xniunhwn": true }, { "breadcrumbs": async ($$result2) => renderTemplate`${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "slot": "breadcrumbs", "items": [
    { label: "Inicio", href: "/" },
    { label: "Directorio", href: "/directorio/" },
    { label: "Ciudad de M\xE9xico" }
  ], "data-astro-cid-xniunhwn": true })}`, "default": async ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, { "title": "Tiendas de Audio e Iluminaci\xF3n en Ciudad de M\xE9xico", "subtitle": `Directorio de ${empresas.length} proveedores verificados en CDMX`, "introParagraph1": `Gu\xEDa completa de las tiendas mejor calificadas en <strong>Ciudad de M\xE9xico</strong> para comprar equipo de audio, iluminaci\xF3n, sonido y efectos especiales para eventos. Calificaciones y datos verificados en Google Maps.`, "introParagraph2": `Si prefieres no comprar y rentar el equipo para tu evento, <strong>REDEIL</strong> te lo lleva e instala en toda la CDMX. Iluminaci\xF3n profesional, sonido, efectos especiales \u2014 con instalaci\xF3n incluida. Cont\xE1ctanos para cotizar.`, "cotizarHref": "/contacto/", "whatsappText": "Hola%20REDEIL%2C%20quiero%20cotizar%20iluminaci%C3%B3n%20para%20mi%20evento%20en%20CDMX", "data-astro-cid-xniunhwn": true })}  ${renderComponent($$result2, "CtaBar", $$CtaBar, { "headline": "Explora por categor\xEDa de equipo", "items": [
    { label: `Audio (${conteo.audio ?? 0})`, href: "#dir-grid", icon: "sonido" },
    { label: `Iluminaci\xF3n (${conteo.iluminacion ?? 0})`, href: "#dir-grid", icon: "iluminacion" },
    { label: `Audio & Video (${conteo["audio-video"] ?? 0})`, href: "#dir-grid", icon: "iluminacion" },
    { label: "Cotizar Renta", href: "/contacto/", icon: "cotizar" }
  ], "data-astro-cid-xniunhwn": true })}  ${maybeRenderHead()}<section class="dir-section" id="dir-grid" data-astro-cid-xniunhwn> <div class="container" data-astro-cid-xniunhwn> <div class="dir-layout" data-astro-cid-xniunhwn> <!-- Grid principal --> <div class="dir-grid-wrap" data-astro-cid-xniunhwn> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": `${empresas.length} Proveedores en Ciudad de M\xE9xico`, "paragraph1": "Tiendas especializadas en venta de equipo de audio, iluminaci\xF3n y sonido para eventos en CDMX.", "paragraph2": "Calificaciones basadas en rese\xF1as reales de Google Maps. Actualizadas regularmente.", "data-astro-cid-xniunhwn": true })} <div class="dir-grid" data-astro-cid-xniunhwn> ${empresas.map((empresa) => renderTemplate`${renderComponent($$result2, "DirectoryCard", $$DirectoryCard, { "nombre": empresa.data.nombre, "categoria": empresa.data.categoria, "zona": empresa.data.zona, "alcaldia_municipio": empresa.data.alcaldia_municipio, "telefono": empresa.data.telefono, "rating": empresa.data.rating, "resenas": empresa.data.resenas, "slug": empresa.slug, "data-astro-cid-xniunhwn": true })}`)} </div> </div> <!-- Sidebar sticky --> <aside class="dir-sidebar" data-astro-cid-xniunhwn> <!-- Categorías con conteo --> <div class="dir-sidebar__card" data-astro-cid-xniunhwn> <h3 class="dir-sidebar__title" data-astro-cid-xniunhwn>Categorías disponibles</h3> <ul class="dir-sidebar__cats" data-astro-cid-xniunhwn> ${Object.entries(conteo).map(([cat, count]) => renderTemplate`<li class="dir-sidebar__cat" data-astro-cid-xniunhwn> <span class="dir-sidebar__cat-name" data-astro-cid-xniunhwn>${categoriaLabel[cat] ?? cat}</span> <span class="dir-sidebar__cat-count" data-astro-cid-xniunhwn>${count}</span> </li>`)} <li class="dir-sidebar__cat dir-sidebar__cat--total" data-astro-cid-xniunhwn> <span class="dir-sidebar__cat-name" data-astro-cid-xniunhwn>Total</span> <span class="dir-sidebar__cat-count" data-astro-cid-xniunhwn>${empresas.length}</span> </li> </ul> </div> <!-- CTA REDEIL --> <div class="dir-sidebar__cta" data-astro-cid-xniunhwn> <p class="dir-sidebar__cta-label" data-astro-cid-xniunhwn>¿Prefieres rentar?</p> <h4 class="dir-sidebar__cta-title" data-astro-cid-xniunhwn>Renta con instalación incluida</h4> <p class="dir-sidebar__cta-desc" data-astro-cid-xniunhwn>REDEIL lleva, instala y opera el equipo en tu evento en CDMX. Sin inversión inicial.</p> <a href="https://wa.me/525530682988?text=Hola%20REDEIL%2C%20quiero%20cotizar%20para%20mi%20evento%20en%20CDMX" target="_blank" rel="noopener noreferrer" class="dir-sidebar__wa-btn" data-astro-cid-xniunhwn> <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-astro-cid-xniunhwn><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" data-astro-cid-xniunhwn></path></svg>
55 3068 2988
</a> <a href="/servicios/" class="dir-sidebar__servicios-link" data-astro-cid-xniunhwn>Ver servicios de renta →</a> </div> <!-- Link a Edomex --> <div class="dir-sidebar__zona" data-astro-cid-xniunhwn> <p class="dir-sidebar__zona-label" data-astro-cid-xniunhwn>¿Buscas proveedores en Estado de México?</p> <a href="/directorio/estado-de-mexico/" class="dir-sidebar__zona-link" data-astro-cid-xniunhwn>Ver directorio Edomex →</a> </div> </aside> </div> </div> </section>  <section class="dir-faq" data-astro-cid-xniunhwn> <div class="container" data-astro-cid-xniunhwn> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Preguntas frecuentes sobre proveedores de audio e iluminaci\xF3n en CDMX", "paragraph1": "Todo lo que necesitas saber antes de comprar equipo de audio, iluminaci\xF3n o efectos para tu evento en la Ciudad de M\xE9xico.", "data-astro-cid-xniunhwn": true })} </div> ${renderComponent($$result2, "FaqSection", $$FaqSection, { "items": [
    {
      question: "\xBFCu\xE1les son las mejores tiendas de audio en el Centro Hist\xF3rico de CDMX?",
      answer: "La zona del Centro Hist\xF3rico \u2014especialmente las calles Uruguay, Mesones y Salvador El Seco\u2014 concentra varias tiendas especializadas en audio profesional. Esquema Musical, Audio Mundo Salvador 30 y otras opciones del directorio se ubican en esta zona, con f\xE1cil acceso en Metro o Metrob\xFAs."
    },
    {
      question: "\xBFEs mejor comprar o rentar equipo de iluminaci\xF3n para un evento?",
      answer: "Para eventos \xFAnicos como bodas o XV a\xF1os, la renta es casi siempre la mejor opci\xF3n: evitas la inversi\xF3n inicial, el transporte, el almacenamiento y el mantenimiento. Para organizadores con m\xE1s de 8-10 eventos por a\xF1o, la compra puede comenzar a convenir. REDEIL ofrece renta de equipo profesional con instalaci\xF3n incluida para cualquier tipo de evento en CDMX."
    },
    {
      question: "\xBFQu\xE9 tipo de equipo puedo encontrar en las tiendas del directorio?",
      answer: "El directorio cubre cuatro categor\xEDas principales: audio profesional (bocinas, micr\xF3fonos, consolas, amplificadores), iluminaci\xF3n para eventos (LEDs, cabezas m\xF3viles, l\xE1seres, guirnaldas), sistemas de audio y video integrado, y equipo espec\xEDfico para DJs. La mayor\xEDa de tiendas se ubica en CDMX, con cobertura en toda la zona metropolitana."
    },
    {
      question: "\xBFREDEIL puede complementar el equipo que compr\xE9 en una tienda del directorio?",
      answer: "S\xED, perfectamente. Si ya cuentas con parte del equipo t\xE9cnico pero necesitas iluminaci\xF3n profesional o efectos especiales para tu evento, REDEIL puede proveer exactamente lo que te falta: cabezas m\xF3viles, l\xE1seres, humo bajo, confeti, pantallas LED y m\xE1s. Cont\xE1ctanos al 55 3068 2988 para coordinar."
    }
  ], "waMessage": "Hola REDEIL, encontr\xE9 el directorio y quiero cotizar equipo para mi evento en CDMX.", "data-astro-cid-xniunhwn": true })} </section>  <section class="dir-cta" data-astro-cid-xniunhwn> <div class="container" data-astro-cid-xniunhwn> <div class="dir-cta__box" data-astro-cid-xniunhwn> <div data-astro-cid-xniunhwn> <h2 class="dir-cta__title" data-astro-cid-xniunhwn>¿Prefieres rentar equipo para tu evento en CDMX?</h2> <p class="dir-cta__desc" data-astro-cid-xniunhwn>REDEIL renta iluminación profesional con instalación incluida. Cabezas móviles, láseres, pantallas LED, efectos especiales y sonido. Cubrimos toda la Ciudad de México y Estado de México.</p> </div> <div class="dir-cta__btns" data-astro-cid-xniunhwn> <a href="/contacto/" class="dir-cta__btn" data-astro-cid-xniunhwn>Cotizar mi evento →</a> <a href="/directorio/estado-de-mexico/" class="dir-cta__btn dir-cta__btn--outline" data-astro-cid-xniunhwn>Ver Edomex →</a> </div> </div> </div> </section> ` })} `;
}, "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/pages/directorio/cdmx.astro", void 0);

const $$file = "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/pages/directorio/cdmx.astro";
const $$url = "/directorio/cdmx";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Cdmx,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
