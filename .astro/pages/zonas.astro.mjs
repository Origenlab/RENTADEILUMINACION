import { c as createComponent, b as renderComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, F as Fragment } from '../chunks/astro/server_D8pMnQBn.mjs';
import 'piccolore';
import { $ as $$BaseLayout, a as $$Breadcrumbs } from '../chunks/Breadcrumbs_BkFbHGbf.mjs';
import { $ as $$Hero } from '../chunks/Hero_3Is3fruG.mjs';
import { $ as $$CtaBar } from '../chunks/CtaBar_CdFZlCZU.mjs';
import { $ as $$SectionHeader } from '../chunks/SectionHeader_mLKzHzNX.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const title = "Zonas de Cobertura REDEIL | CDMX y Estado de M\xE9xico";
  const description = "REDEIL cubre todas las alcald\xEDas de CDMX y municipios Edomex. 30 a\xF1os iluminando eventos en la zona metropolitana. Cobertura completa: bodas, XV a\xF1os, corporativos.";
  const canonical = "https://rentadeiluminacion.com/zonas/";
  const schemaMarkup = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Zonas de Cobertura REDEIL",
    "description": "REDEIL cubre todas las alcald\xEDas de CDMX y municipios Edomex. 30 a\xF1os iluminando eventos en la zona metropolitana.",
    "url": "https://rentadeiluminacion.com/zonas/",
    "provider": {
      "@type": "LocalBusiness",
      "name": "REDEIL",
      "url": "https://rentadeiluminacion.com",
      "telephone": "+525530682988",
      "areaServed": [
        {
          "@type": "City",
          "name": "Ciudad de M\xE9xico",
          "areaServed": [
            { "@type": "AdministrativeArea", "name": "Coyoac\xE1n" },
            { "@type": "AdministrativeArea", "name": "Benito Ju\xE1rez" },
            { "@type": "AdministrativeArea", "name": "Cuauht\xE9moc" },
            { "@type": "AdministrativeArea", "name": "Miguel Hidalgo" },
            { "@type": "AdministrativeArea", "name": "Polanco" },
            { "@type": "AdministrativeArea", "name": "\xC1lvaro Obreg\xF3n" },
            { "@type": "AdministrativeArea", "name": "Tlalpan" },
            { "@type": "AdministrativeArea", "name": "Azcapotzalco" },
            { "@type": "AdministrativeArea", "name": "Gustavo A. Madero" },
            { "@type": "AdministrativeArea", "name": "Iztacalco" },
            { "@type": "AdministrativeArea", "name": "Iztapalapa" },
            { "@type": "AdministrativeArea", "name": "Magdalena Contreras" },
            { "@type": "AdministrativeArea", "name": "Milpa Alta" },
            { "@type": "AdministrativeArea", "name": "Tl\xE1huac" },
            { "@type": "AdministrativeArea", "name": "Xochimilco" },
            { "@type": "AdministrativeArea", "name": "Venustiano Carranza" }
          ]
        },
        {
          "@type": "City",
          "name": "Estado de M\xE9xico",
          "areaServed": [
            { "@type": "AdministrativeArea", "name": "Naucalpan" },
            { "@type": "AdministrativeArea", "name": "Tlalnepantla" },
            { "@type": "AdministrativeArea", "name": "Ecatepec" },
            { "@type": "AdministrativeArea", "name": "Nezahualc\xF3yotl" }
          ]
        }
      ]
    }
  });
  const zonas = [
    // CDMX
    {
      name: "Coyoac\xE1n",
      href: "/zonas/coyoacan/",
      region: "CDMX Sur",
      description: "Haciendas coloniales, jardines rom\xE1nticos, bodas elegantes.",
      keyword: "Renta iluminaci\xF3n Coyoac\xE1n"
    },
    {
      name: "Benito Ju\xE1rez",
      href: "/zonas/benito-juarez/",
      region: "CDMX Centro",
      description: "Zona financiera, salones corporativos, eventos premium.",
      keyword: "Renta iluminaci\xF3n Benito Ju\xE1rez"
    },
    {
      name: "Cuauht\xE9moc",
      href: "/zonas/cuauhtemoc/",
      region: "CDMX Centro",
      description: "Centro hist\xF3rico, eventos corporativos, salones modernos.",
      keyword: "Renta iluminaci\xF3n Cuauht\xE9moc"
    },
    {
      name: "Miguel Hidalgo",
      href: "/zonas/miguel-hidalgo/",
      region: "CDMX Centro-Poniente",
      description: "Polanco, Lomas, bodas de lujo, eventos premium.",
      keyword: "Renta iluminaci\xF3n Miguel Hidalgo"
    },
    {
      name: "Polanco",
      href: "/zonas/polanco/",
      region: "CDMX Poniente",
      description: "Zona residencial premium, bodas de lujo absoluto.",
      keyword: "Renta iluminaci\xF3n Polanco"
    },
    {
      name: "\xC1lvaro Obreg\xF3n",
      href: "/zonas/alvaro-obregon/",
      region: "CDMX Poniente",
      description: "San \xC1ngel, La Paz, bodas en haciendas, eventos elegantes.",
      keyword: "Renta iluminaci\xF3n \xC1lvaro Obreg\xF3n"
    },
    {
      name: "Tlalpan",
      href: "/zonas/tlalpan/",
      region: "CDMX Sur",
      description: "Zona residencial, haciendas, bodas campestres.",
      keyword: "Renta iluminaci\xF3n Tlalpan"
    },
    {
      name: "Azcapotzalco",
      href: "/zonas/azcapotzalco/",
      region: "CDMX Norte",
      description: "Zona industrial, XV a\xF1os populares, salones tradicionales.",
      keyword: "Renta iluminaci\xF3n Azcapotzalco"
    },
    {
      name: "Gustavo A. Madero",
      href: "/zonas/gustavo-a-madero/",
      region: "CDMX Norte",
      description: "Zona residencial popular, XV a\xF1os, eventos familiares.",
      keyword: "Renta iluminaci\xF3n Gustavo A. Madero"
    },
    {
      name: "Iztacalco",
      href: "/zonas/iztacalco/",
      region: "CDMX Centro-Este",
      description: "Zona popular, salones de fiestas, XV a\xF1os masivos.",
      keyword: "Renta iluminaci\xF3n Iztacalco"
    },
    {
      name: "Iztapalapa",
      href: "/zonas/iztapalapa/",
      region: "CDMX Este",
      description: "Zona m\xE1s poblada, XV a\xF1os, bodas populares.",
      keyword: "Renta iluminaci\xF3n Iztapalapa"
    },
    {
      name: "Magdalena Contreras",
      href: "/zonas/magdalena-contreras/",
      region: "CDMX Sur",
      description: "Jardines con vista, \xE1reas boscosas, bodas \xEDntimas elegantes.",
      keyword: "Renta iluminaci\xF3n Magdalena Contreras"
    },
    {
      name: "Milpa Alta",
      href: "/zonas/milpa-alta/",
      region: "CDMX Sur Rural",
      description: "Zona rural, haciendas, eventos campestres amplios.",
      keyword: "Renta iluminaci\xF3n Milpa Alta"
    },
    {
      name: "Tl\xE1huac",
      href: "/zonas/tlahuac/",
      region: "CDMX Oriente-Sur",
      description: "Salones de fiestas, XV a\xF1os masivos, bodas tradicionales.",
      keyword: "Renta iluminaci\xF3n Tl\xE1huac"
    },
    {
      name: "Xochimilco",
      href: "/zonas/xochimilco/",
      region: "CDMX Sur",
      description: "Chinampas, trajineras, bodas \xFAnicas al agua.",
      keyword: "Renta iluminaci\xF3n Xochimilco"
    },
    {
      name: "Venustiano Carranza",
      href: "/zonas/venustiano-carranza/",
      region: "CDMX Este",
      description: "Zona industrial-residencial, eventos populares.",
      keyword: "Renta iluminaci\xF3n Venustiano Carranza"
    },
    // Estado de México
    {
      name: "Naucalpan",
      href: "/zonas/naucalpan/",
      region: "Edomex Poniente",
      description: "Salones corporativos, country clubs, bodas premium.",
      keyword: "Renta iluminaci\xF3n Naucalpan"
    },
    {
      name: "Tlalnepantla",
      href: "/zonas/tlalnepantla/",
      region: "Edomex Norte",
      description: "Zona industrial-residencial, acceso f\xE1cil, eventos populares.",
      keyword: "Renta iluminaci\xF3n Tlalnepantla"
    },
    {
      name: "Ecatepec",
      href: "/zonas/ecatepec/",
      region: "Edomex Norte",
      description: "Zona residencial poblada, XV a\xF1os, bodas populares.",
      keyword: "Renta iluminaci\xF3n Ecatepec"
    },
    {
      name: "Nezahualc\xF3yotl",
      href: "/zonas/nezahualcoyotl/",
      region: "Edomex Este",
      description: "Zona residencial, eventos populares, salones de fiestas.",
      keyword: "Renta iluminaci\xF3n Nezahualc\xF3yotl"
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "canonical": canonical, "schemaMarkup": schemaMarkup, "data-astro-cid-jzzmlzno": true }, { "breadcrumbs": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "breadcrumbs" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Breadcrumbs", $$Breadcrumbs, { "items": [
    { label: "Inicio", href: "/" },
    { label: "Zonas de Cobertura" }
  ], "data-astro-cid-jzzmlzno": true })} ` })}`, "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, { "title": "Renta de Iluminaci\xF3n: Cobertura Completa CDMX y Estado de M\xE9xico", "subtitle": "30 a\xF1os iluminando eventos en la zona metropolitana. Cobertura garantizada en todas las alcald\xEDas de CDMX y municipios principales del Edomex.", "whatsappText": "Hola,%20necesito%20cotizar%20iluminacion%20para%20mi%20evento", "introParagraph1": "<strong>REDEIL cubre toda la zona metropolitana.</strong> No importa d\xF3nde est\xE9 tu evento \u2014 Coyoac\xE1n, Polanco, Azcapotzalco, Xochimilco, Naucalpan, o cualquier otra alcald\xEDa de CDMX y municipios del Estado de M\xE9xico. Tenemos equipo especializado para cada zona. 30 a\xF1os, 350+ eventos al a\xF1o, log\xEDstica propia.", "introParagraph2": "Cada zona tiene caracter\xEDsticas diferentes. Bodas rurales en Milpa Alta, eventos al agua en Xochimilco, XV a\xF1os masivos en Tl\xE1huac, bodas premium en Polanco. Sabemos adaptar iluminaci\xF3n a cada lugar. Eso es lo que pag\xE1s \u2014 experiencia espec\xEDfica de 30 a\xF1os.", "data-astro-cid-jzzmlzno": true })} ${renderComponent($$result2, "CtaBar", $$CtaBar, { "headline": "\xBFNecesitas iluminaci\xF3n en tu zona?", "items": [
    { label: "Ver todas las zonas", href: "#zonas", icon: "iluminacion" },
    { label: "Cotiza por WhatsApp", href: "https://wa.me/525530682988", icon: "cotizar" }
  ], "data-astro-cid-jzzmlzno": true })}  ${maybeRenderHead()}<section id="zonas" class="zonas-section" data-astro-cid-jzzmlzno> <div class="container" data-astro-cid-jzzmlzno> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Zonas de Cobertura", "subtitle": "20 zonas en CDMX y Estado de M\xE9xico. Selecciona tu zona para conocer detalles espec\xEDficos, precios y especialidades.", "paragraph1": "Cada zona tiene caracter\xEDsticas \xFAnicas. Haz clic en tu zona para ver qu\xE9 tipo de eventos montamos, precios, y c\xF3mo nos adaptamos a tu espacio espec\xEDfico.", "paragraph2": "\xBFNo ves tu zona? Escr\xEDbenos por WhatsApp \u2014 probablemente tambi\xE9n cubrimos tu \xE1rea. Tenemos log\xEDstica en toda la zona metropolitana.", "data-astro-cid-jzzmlzno": true })} <!-- CDMX --> <div class="zona-category" data-astro-cid-jzzmlzno> <h2 class="zona-category-title" data-astro-cid-jzzmlzno>Ciudad de México (CDMX)</h2> <div class="zonas-grid" data-astro-cid-jzzmlzno> ${zonas.filter((z) => z.region.includes("CDMX")).map((zona) => renderTemplate`<a${addAttribute(zona.href, "href")} class="zona-card" data-astro-cid-jzzmlzno> <div class="zona-card-content" data-astro-cid-jzzmlzno> <h3 data-astro-cid-jzzmlzno>${zona.name}</h3> <p class="zona-region" data-astro-cid-jzzmlzno>${zona.region}</p> <p class="zona-description" data-astro-cid-jzzmlzno>${zona.description}</p> <p class="zona-keyword" data-astro-cid-jzzmlzno>${zona.keyword}</p> </div> <div class="zona-arrow" data-astro-cid-jzzmlzno>→</div> </a>`)} </div> </div> <!-- Estado de México --> <div class="zona-category" data-astro-cid-jzzmlzno> <h2 class="zona-category-title" data-astro-cid-jzzmlzno>Estado de México (Edomex)</h2> <div class="zonas-grid" data-astro-cid-jzzmlzno> ${zonas.filter((z) => z.region.includes("Edomex")).map((zona) => renderTemplate`<a${addAttribute(zona.href, "href")} class="zona-card" data-astro-cid-jzzmlzno> <div class="zona-card-content" data-astro-cid-jzzmlzno> <h3 data-astro-cid-jzzmlzno>${zona.name}</h3> <p class="zona-region" data-astro-cid-jzzmlzno>${zona.region}</p> <p class="zona-description" data-astro-cid-jzzmlzno>${zona.description}</p> <p class="zona-keyword" data-astro-cid-jzzmlzno>${zona.keyword}</p> </div> <div class="zona-arrow" data-astro-cid-jzzmlzno>→</div> </a>`)} </div> </div> </div> </section>  <section class="stats-section-enhanced" data-astro-cid-jzzmlzno> <div class="container" data-astro-cid-jzzmlzno> <div class="stats-grid-enhanced" data-astro-cid-jzzmlzno> <div class="stat-card-enhanced" data-astro-cid-jzzmlzno> <span class="stat-number-enhanced" data-astro-cid-jzzmlzno>30+</span> <span class="stat-label-enhanced" data-astro-cid-jzzmlzno>Años de Experiencia</span> </div> <div class="stat-card-enhanced" data-astro-cid-jzzmlzno> <span class="stat-number-enhanced" data-astro-cid-jzzmlzno>350+</span> <span class="stat-label-enhanced" data-astro-cid-jzzmlzno>Eventos/Año</span> </div> <div class="stat-card-enhanced" data-astro-cid-jzzmlzno> <span class="stat-number-enhanced" data-astro-cid-jzzmlzno>20</span> <span class="stat-label-enhanced" data-astro-cid-jzzmlzno>Zonas de Cobertura</span> </div> <div class="stat-card-enhanced" data-astro-cid-jzzmlzno> <span class="stat-number-enhanced" data-astro-cid-jzzmlzno>100%</span> <span class="stat-label-enhanced" data-astro-cid-jzzmlzno>Cobertura Metropolitana</span> </div> </div> </div> </section>  <section class="services-section" data-astro-cid-jzzmlzno> <div class="container" data-astro-cid-jzzmlzno> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "\xBFQu\xE9 Ofrecemos en Cada Zona?", "subtitle": "Sin importar d\xF3nde est\xE9 tu evento, ofrecemos los mismos servicios de calidad.", "paragraph1": "Iluminaci\xF3n completa: guirnaldas, luces ne\xF3n, cabezas m\xF3viles, sonido, DJ lighting. Todo coordinado, todo funciona.", "paragraph2": "Cada zona tiene especialidades \u2014 bodas rurales en Milpa Alta, eventos premium en Polanco, XV a\xF1os masivos en Tl\xE1huac. Cotiza con nosotros y te mostramos opciones espec\xEDficas para tu zona.", "data-astro-cid-jzzmlzno": true })} <div class="features-grid-4" data-astro-cid-jzzmlzno> <div class="feature-card" data-astro-cid-jzzmlzno> <h3 data-astro-cid-jzzmlzno>Guirnaldas Edison</h3> <p data-astro-cid-jzzmlzno>Focos LED o vintage, IP65, resistentes a lluvia. La base del ambiente en cualquier evento.</p> </div> <div class="feature-card" data-astro-cid-jzzmlzno> <h3 data-astro-cid-jzzmlzno>Luces Neón Personalizadas</h3> <p data-astro-cid-jzzmlzno>Nombres, frases, colores. El protagonista visual de bodas y XV años.</p> </div> <div class="feature-card" data-astro-cid-jzzmlzno> <h3 data-astro-cid-jzzmlzno>Cabezas Móviles y Sky Tracker</h3> <p data-astro-cid-jzzmlzno>Proyecciones dinámicas, efectos especiales, colores sincronizados con música.</p> </div> <div class="feature-card" data-astro-cid-jzzmlzno> <h3 data-astro-cid-jzzmlzno>Sonido e Iluminación DJ</h3> <p data-astro-cid-jzzmlzno>Sistema profesional de sonido + luces que reaccionan a la música.</p> </div> </div> </div> </section>  <section class="cta-section" data-astro-cid-jzzmlzno> <div class="container" data-astro-cid-jzzmlzno> <div class="cta-content" data-astro-cid-jzzmlzno> <h2 data-astro-cid-jzzmlzno>¿Listo para iluminar tu evento?</h2> <p data-astro-cid-jzzmlzno>Selecciona tu zona arriba, o escríbenos por WhatsApp. Te cotizamos en minutos. Transporte, instalación y montaje incluidos.</p> <div class="cta-buttons" data-astro-cid-jzzmlzno> <a href="https://wa.me/525530682988?text=Hola,%20necesito%20cotizar%20iluminacion%20para%20mi%20evento" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp btn-lg" data-astro-cid-jzzmlzno>Cotiza por WhatsApp</a> <a href="tel:+525530682988" class="btn btn-primary btn-lg" data-astro-cid-jzzmlzno>Llámanos — 55 3068 2988</a> </div> </div> </div> </section> ` })} `;
}, "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/pages/zonas/index.astro", void 0);

const $$file = "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/pages/zonas/index.astro";
const $$url = "/zonas";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
