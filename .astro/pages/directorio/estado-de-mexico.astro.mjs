import { c as createComponent, b as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_D8pMnQBn.mjs';
import 'piccolore';
import { g as getCollection } from '../../chunks/_astro_content_DoEh7u_S.mjs';
import { $ as $$BaseLayout, a as $$Breadcrumbs } from '../../chunks/Breadcrumbs_BkFbHGbf.mjs';
import { $ as $$Hero } from '../../chunks/Hero_3Is3fruG.mjs';
import { $ as $$CtaBar } from '../../chunks/CtaBar_CdFZlCZU.mjs';
import { $ as $$DirectoryCard } from '../../chunks/DirectoryCard_DykBwQs9.mjs';
import { $ as $$SectionHeader } from '../../chunks/SectionHeader_mLKzHzNX.mjs';
import { $ as $$FaqSection } from '../../chunks/FaqSection_CzcP3CIi.mjs';
/* empty css                                               */
export { renderers } from '../../renderers.mjs';

const $$EstadoDeMexico = createComponent(async ($$result, $$props, $$slots) => {
  const empresas = await getCollection(
    "directorio",
    ({ data }) => data.activo !== false && data.zona === "estado-de-mexico"
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
  const municipios = [...new Set(empresas.map((e) => e.data.alcaldia_municipio))];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Tiendas de Audio e Iluminaci\xF3n en Estado de M\xE9xico | Directorio de Proveedores", "description": "Directorio de tiendas de audio, iluminaci\xF3n y equipo para eventos en Estado de M\xE9xico. Encuentra los mejores proveedores en Ecatepec, Nezahualc\xF3yotl y zona metropolitana.", "canonical": "https://rentadeiluminacion.com/directorio/estado-de-mexico/", "data-astro-cid-t3nmtakr": true }, { "breadcrumbs": async ($$result2) => renderTemplate`${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "slot": "breadcrumbs", "items": [
    { label: "Inicio", href: "/" },
    { label: "Directorio", href: "/directorio/" },
    { label: "Estado de M\xE9xico" }
  ], "data-astro-cid-t3nmtakr": true })}`, "default": async ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, { "title": "Tiendas de Audio e Iluminaci\xF3n en Estado de M\xE9xico", "subtitle": `Directorio de proveedores de equipo para eventos en Edomex`, "introParagraph1": `Directorio de tiendas y proveedores de <strong>equipo de audio e iluminaci\xF3n para eventos</strong> en el Estado de M\xE9xico. Ecatepec, Nezahualc\xF3yotl y zona metropolitana \u2014 con calificaciones verificadas en Google Maps.`, "introParagraph2": `\xBFPrefieres rentar en lugar de comprar? <strong>REDEIL</strong> cubre todo el Estado de M\xE9xico con servicio de renta de iluminaci\xF3n e instalaci\xF3n incluida. Sin inversi\xF3n inicial, nosotros llevamos y montamos todo.`, "cotizarHref": "/contacto/", "whatsappText": "Hola%20REDEIL%2C%20quiero%20cotizar%20iluminaci%C3%B3n%20para%20mi%20evento%20en%20Estado%20de%20M%C3%A9xico", "data-astro-cid-t3nmtakr": true })}  ${renderComponent($$result2, "CtaBar", $$CtaBar, { "headline": "Explora por tipo de equipo disponible en Edomex", "items": [
    { label: `Audio (${conteo.audio ?? 0})`, href: "#dir-grid", icon: "sonido" },
    { label: `Iluminaci\xF3n (${conteo.iluminacion ?? 0})`, href: "#dir-grid", icon: "iluminacion" },
    { label: "Renta en Edomex", href: "/contacto/", icon: "cotizar" },
    { label: "Ver CDMX", href: "/directorio/cdmx/", icon: "iluminacion" }
  ], "data-astro-cid-t3nmtakr": true })}  ${maybeRenderHead()}<section class="dir-section" id="dir-grid" data-astro-cid-t3nmtakr> <div class="container" data-astro-cid-t3nmtakr> <div class="dir-layout" data-astro-cid-t3nmtakr> <!-- Grid principal --> <div class="dir-grid-wrap" data-astro-cid-t3nmtakr> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": `${empresas.length} Proveedores en Estado de M\xE9xico`, "paragraph1": `Tiendas de audio y equipo para eventos en ${municipios.slice(0, 3).join(", ")} y la zona metropolitana del Estado de M\xE9xico.`, "paragraph2": "Calificaciones y datos de contacto verificados en Google Maps.", "data-astro-cid-t3nmtakr": true })} ${empresas.length > 0 ? renderTemplate`<div class="dir-grid" data-astro-cid-t3nmtakr> ${empresas.map((empresa) => renderTemplate`${renderComponent($$result2, "DirectoryCard", $$DirectoryCard, { "nombre": empresa.data.nombre, "categoria": empresa.data.categoria, "zona": empresa.data.zona, "alcaldia_municipio": empresa.data.alcaldia_municipio, "telefono": empresa.data.telefono, "rating": empresa.data.rating, "resenas": empresa.data.resenas, "slug": empresa.slug, "data-astro-cid-t3nmtakr": true })}`)} </div>` : renderTemplate`<p class="dir-empty" data-astro-cid-t3nmtakr>Próximamente más proveedores en Estado de México.</p>`} </div> <!-- Sidebar sticky --> <aside class="dir-sidebar" data-astro-cid-t3nmtakr> <!-- Categorías con conteo --> <div class="dir-sidebar__card" data-astro-cid-t3nmtakr> <h3 class="dir-sidebar__title" data-astro-cid-t3nmtakr>Categorías disponibles</h3> ${Object.keys(conteo).length > 0 ? renderTemplate`<ul class="dir-sidebar__cats" data-astro-cid-t3nmtakr> ${Object.entries(conteo).map(([cat, count]) => renderTemplate`<li class="dir-sidebar__cat" data-astro-cid-t3nmtakr> <span class="dir-sidebar__cat-name" data-astro-cid-t3nmtakr>${categoriaLabel[cat] ?? cat}</span> <span class="dir-sidebar__cat-count" data-astro-cid-t3nmtakr>${count}</span> </li>`)} <li class="dir-sidebar__cat dir-sidebar__cat--total" data-astro-cid-t3nmtakr> <span class="dir-sidebar__cat-name" data-astro-cid-t3nmtakr>Total</span> <span class="dir-sidebar__cat-count" data-astro-cid-t3nmtakr>${empresas.length}</span> </li> </ul>` : renderTemplate`<p class="dir-sidebar__empty" data-astro-cid-t3nmtakr>Próximamente</p>`} </div> <!-- CTA REDEIL --> <div class="dir-sidebar__cta" data-astro-cid-t3nmtakr> <p class="dir-sidebar__cta-label" data-astro-cid-t3nmtakr>¿Prefieres rentar?</p> <h4 class="dir-sidebar__cta-title" data-astro-cid-t3nmtakr>REDEIL cubre todo el Estado de México</h4> <p class="dir-sidebar__cta-desc" data-astro-cid-t3nmtakr>Renta de iluminación, sonido y efectos especiales con instalación incluida para bodas, XV años y eventos en Edomex.</p> <a href="https://wa.me/525530682988?text=Hola%20REDEIL%2C%20quiero%20cotizar%20para%20mi%20evento%20en%20Estado%20de%20M%C3%A9xico" target="_blank" rel="noopener noreferrer" class="dir-sidebar__wa-btn" data-astro-cid-t3nmtakr> <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-astro-cid-t3nmtakr><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" data-astro-cid-t3nmtakr></path></svg>
55 3068 2988
</a> <a href="/servicios/" class="dir-sidebar__servicios-link" data-astro-cid-t3nmtakr>Ver servicios de renta →</a> </div> <!-- Link a CDMX --> <div class="dir-sidebar__zona" data-astro-cid-t3nmtakr> <p class="dir-sidebar__zona-label" data-astro-cid-t3nmtakr>¿Buscas proveedores en Ciudad de México?</p> <a href="/directorio/cdmx/" class="dir-sidebar__zona-link" data-astro-cid-t3nmtakr>Ver directorio CDMX →</a> </div> </aside> </div> </div> </section>  <section class="dir-faq" data-astro-cid-t3nmtakr> <div class="container" data-astro-cid-t3nmtakr> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Preguntas frecuentes: audio e iluminaci\xF3n para eventos en Estado de M\xE9xico", "paragraph1": "Lo que necesitas saber antes de comprar o rentar equipo para tu evento en Ecatepec, Nezahualc\xF3yotl y la zona metropolitana de Edomex.", "data-astro-cid-t3nmtakr": true })} </div> ${renderComponent($$result2, "FaqSection", $$FaqSection, { "items": [
    {
      question: "\xBFD\xF3nde puedo comprar equipo de audio para eventos en Estado de M\xE9xico?",
      answer: "El directorio incluye tiendas en Ecatepec y Nezahualc\xF3yotl, que son los municipios con mayor concentraci\xF3n de proveedores de audio e iluminaci\xF3n en Edomex. Tambi\xE9n puedes encontrar opciones en la zona metropolitana con acceso desde m\xFAltiples puntos del Estado de M\xE9xico."
    },
    {
      question: "\xBFREDEIL hace renta de iluminaci\xF3n en municipios del Estado de M\xE9xico?",
      answer: "S\xED, REDEIL cubre todo el Estado de M\xE9xico: Ecatepec, Nezahualc\xF3yotl, Naucalpan, Tlalnepantla, Texcoco, Toluca, Metepec y m\xE1s. Llevamos, instalamos y operamos el equipo en tu evento. Cont\xE1ctanos al 55 3068 2988 para cotizar."
    },
    {
      question: "\xBFCu\xE1l es la diferencia entre comprar y rentar equipo para una boda en Edomex?",
      answer: "Comprar implica una inversi\xF3n inicial alta, m\xE1s los costos de transporte, almacenamiento y mantenimiento. Rentar con REDEIL significa que pagas solo por el evento: nosotros llevamos el equipo, lo instalamos y lo retiramos. Para una boda o XV a\xF1os, la renta siempre resulta m\xE1s econ\xF3mica y pr\xE1ctica."
    },
    {
      question: "\xBFPuedo encontrar equipo de iluminaci\xF3n profesional (cabezas m\xF3viles, l\xE1seres) en Edomex?",
      answer: "El equipo de iluminaci\xF3n esc\xE9nica profesional \u2014cabezas m\xF3viles, l\xE1seres RGB, efectos especiales\u2014 es dif\xEDcil de encontrar en tiendas locales de Edomex. La mayor\xEDa de los t\xE9cnicos y organizadores de eventos optan por rentarlo a empresas especializadas como REDEIL, que cuentan con inventario completo y personal t\xE9cnico capacitado."
    }
  ], "waMessage": "Hola REDEIL, quiero cotizar equipo para mi evento en Estado de M\xE9xico.", "data-astro-cid-t3nmtakr": true })} </section>  <section class="dir-cta" data-astro-cid-t3nmtakr> <div class="container" data-astro-cid-t3nmtakr> <div class="dir-cta__box" data-astro-cid-t3nmtakr> <div data-astro-cid-t3nmtakr> <h2 class="dir-cta__title" data-astro-cid-t3nmtakr>¿Buscas renta de iluminación en Estado de México?</h2> <p class="dir-cta__desc" data-astro-cid-t3nmtakr>REDEIL cubre todo el Estado de México. Renta de iluminación profesional con instalación incluida para bodas, quinceañeras, eventos corporativos y más. Nosotros llevamos, instalamos y operamos el equipo.</p> </div> <div class="dir-cta__btns" data-astro-cid-t3nmtakr> <a href="/contacto/" class="dir-cta__btn" data-astro-cid-t3nmtakr>Cotizar en Edomex →</a> <a href="/directorio/cdmx/" class="dir-cta__btn dir-cta__btn--outline" data-astro-cid-t3nmtakr>Ver directorio CDMX →</a> </div> </div> </div> </section> ` })} `;
}, "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/pages/directorio/estado-de-mexico.astro", void 0);

const $$file = "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/pages/directorio/estado-de-mexico.astro";
const $$url = "/directorio/estado-de-mexico";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$EstadoDeMexico,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
