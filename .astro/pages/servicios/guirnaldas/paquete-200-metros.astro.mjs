import { c as createComponent, b as renderComponent, r as renderTemplate, m as maybeRenderHead, F as Fragment } from '../../../chunks/astro/server_D8pMnQBn.mjs';
import 'piccolore';
import { $ as $$BaseLayout, a as $$Breadcrumbs } from '../../../chunks/Breadcrumbs_BkFbHGbf.mjs';
import { $ as $$Hero } from '../../../chunks/Hero_3Is3fruG.mjs';
import { $ as $$CtaBar } from '../../../chunks/CtaBar_CdFZlCZU.mjs';
import { $ as $$SectionHeader } from '../../../chunks/SectionHeader_mLKzHzNX.mjs';
import { $ as $$FeatureGrid } from '../../../chunks/FeatureGrid_BlZakCJc.mjs';
import { $ as $$TestimonialCards } from '../../../chunks/TestimonialCards_-EeuFf1C.mjs';
import { $ as $$ContentWithSidebar } from '../../../chunks/ContentWithSidebar_HmYQt5AF.mjs';
import { $ as $$Gallery4X4 } from '../../../chunks/Gallery4x4_Bx6Jz45E.mjs';
import { $ as $$FaqSection } from '../../../chunks/FaqSection_CzcP3CIi.mjs';
import { $ as $$ServiceCard } from '../../../chunks/ServiceCard_Bli7ALj4.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Paquete200Metros = createComponent(($$result, $$props, $$slots) => {
  const title = "Paquete 200m Guirnaldas Edison \u2014 $11,500 + IVA | REDEIL";
  const description = "200 metros de guirnaldas Edison para bodas grandes, corporativos y haciendas amplias. Dimmer incluido. Asesor\xEDa en sitio. Instalaci\xF3n profesional IP65.";
  const canonical = "https://rentadeiluminacion.com/servicios/guirnaldas/paquete-200-metros/";
  const schemaMarkup = JSON.stringify([
    {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Paquete 200 Metros \u2014 Guirnaldas Edison Premium",
      "description": "200 metros lineales de guirnaldas Edison con dimmer para control de intensidad. Para bodas grandes, corporativos y haciendas amplias en CDMX.",
      "brand": { "@type": "Brand", "name": "REDEIL" },
      "image": "https://rentadeiluminacion.com/img/guirnaldas/renta-guirnaldas-boda-patio-colonial-guirnaldas-21.avif",
      "offers": { "@type": "Offer", "url": canonical, "priceCurrency": "MXN", "price": "11500", "priceValidUntil": "2027-12-31", "availability": "https://schema.org/InStock" },
      "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5", "bestRating": "5", "ratingCount": "34", "reviewCount": "34" },
      "review": [
        { "@type": "Review", "author": { "@type": "Person", "name": "Grupo Financiero Banorte" }, "datePublished": "2026-03-01", "reviewRating": { "@type": "Rating", "ratingValue": "5" }, "reviewBody": "REDEIL ilumin\xF3 nuestra cena de fin de a\xF1o corporativa en una hacienda de Metepec. 200 metros cubrieron toda la finca. La posibilidad de controlar la intensidad con dimmer fue clave para las distintas etapas del evento." },
        { "@type": "Review", "author": { "@type": "Person", "name": "Alejandra Ruiz" }, "datePublished": "2026-01-10", "reviewRating": { "@type": "Rating", "ratingValue": "5" }, "reviewBody": "Nuestra boda tuvo 250 invitados en una finca en Huixquilucan. Los 200 metros cubrieron ceremonia, cocktail, cena y pista de baile. La visita previa fue esencial para el dise\xF1o. Resultado espectacular." }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "\xBF200 metros cubren todo el venue?", "acceptedAnswer": { "@type": "Answer", "text": "200 metros cubren fincas y haciendas de hasta 300m\xB2 con m\xFAltiples zonas: ceremonia, cocktail, cena y pista. Para venues m\xE1s grandes, el paquete de 500 metros es la opci\xF3n." } },
        { "@type": "Question", "name": "\xBFQu\xE9 es el dimmer y para qu\xE9 sirve?", "acceptedAnswer": { "@type": "Answer", "text": "El dimmer permite ajustar la intensidad de las guirnaldas. \xDAtil para bajar la luz durante el vals, subirla para la cena, y crear transiciones suaves entre momentos del evento." } }
      ]
    }
  ]);
  const otrosPaquetes = [
    { title: "Est\xE1ndar \u2014 100m", image: "/img/guirnaldas/renta-guirnaldas-boda-hacienda-mexicana-guirnaldas-18.avif", alt: "100 metros para bodas", description: "El m\xE1s pedido para bodas. Ceremonia + recepci\xF3n hasta 120 invitados. $6,500 + IVA.", link: "/servicios/guirnaldas/paquete-100-metros/" },
    { title: "Producci\xF3n \u2014 500m", image: "/img/guirnaldas/renta-guirnaldas-baile-novios-hacienda-guirnaldas-41.avif", alt: "500 metros para festival", description: "Festivales, ferias y venues masivos. Producci\xF3n completa con plantas de luz. $24,000 + IVA.", link: "/servicios/guirnaldas/paquete-500-metros/" },
    { title: "Seguidor", image: "/img/seguidor/renta-luz-seguidor-boda-primer-baile-hmi-1200w-300w.avif", alt: "Seguidor para vals", description: "Spotlight para el vals y momentos importantes. El complemento que eleva cualquier producci\xF3n.", link: "/servicios/seguidor/" },
    { title: "Gobos", image: "/img/gobos/renta-gobo-monograma-pista-baile-300w.avif", alt: "Gobo con logo", description: "Proyecta el logo de tu empresa o los nombres de los novios. Ideal para corporativos y bodas premium.", link: "/servicios/gobos/" }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "canonical": canonical, "schemaMarkup": schemaMarkup }, { "breadcrumbs": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "breadcrumbs" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Breadcrumbs", $$Breadcrumbs, { "items": [
    { label: "Inicio", href: "/" },
    { label: "Iluminaci\xF3n", href: "/servicios/iluminacion/" },
    { label: "Guirnaldas", href: "/servicios/guirnaldas/" },
    { label: "Paquete 200 metros" }
  ] })} ` })}`, "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, { "title": "Paquete 200 Metros \u2014 Guirnaldas Premium para Eventos Grandes", "subtitle": "$11,500 + IVA. Dimmer incluido. Asesor\xEDa en sitio. Para 200+ invitados en haciendas, fincas y venues amplios.", "introParagraph1": "Cuando tu evento necesita cobertura completa de iluminaci\xF3n decorativa, 200 metros de guirnaldas Edison transforman haciendas, fincas y venues amplios en espacios espectaculares. Este paquete incluye <strong>dimmer para control de intensidad</strong> \u2014 baja la luz para el vals, s\xFAbela para la cena, crea transiciones suaves entre cada momento.", "introParagraph2": "Ideal para bodas de 200+ invitados, cenas corporativas de fin de a\xF1o, lanzamientos de producto en hacienda y eventos de gala. Incluye asesor\xEDa en sitio antes del evento \u2014 nuestro equipo visita tu venue para dise\xF1ar la distribuci\xF3n \xF3ptima seg\xFAn las estructuras del espacio. Atendemos Metepec, Toluca, Huixquilucan, Naucalpan y toda la zona metropolitana." })} ${renderComponent($$result2, "CtaBar", $$CtaBar, { "headline": "Compara paquetes", "items": [
    { label: "50m \u2014 $3,500", href: "/servicios/guirnaldas/paquete-50-metros/", icon: "iluminacion" },
    { label: "100m \u2014 $6,500", href: "/servicios/guirnaldas/paquete-100-metros/", icon: "iluminacion" },
    { label: "500m \u2014 $24,000", href: "/servicios/guirnaldas/paquete-500-metros/", icon: "iluminacion" },
    { label: "Cotiza Gratis", href: "/contacto/", icon: "cotizar" }
  ] })} ${maybeRenderHead()}<section class="services-section"> ${renderComponent($$result2, "ContentWithSidebar", $$ContentWithSidebar, { "sidebarTitle": "Paquete Premium", "price": "$11,500", "priceNote": "+ IVA \xB7 Dimmer incluido", "features": [
    { text: "200 metros lineales" },
    { text: "Focos Edison LED o vintage" },
    { text: "Dimmer control de intensidad" },
    { text: "Certificaci\xF3n IP65 lluvia" },
    { text: "Transporte + montaje + desmontaje" },
    { text: "Dise\xF1o personalizado" },
    { text: "Asesor\xEDa en sitio (visita previa)" },
    { text: "Coordinaci\xF3n con planner/decorador" },
    { text: "Cobertura: 200+ invitados" },
    { text: "Zonas m\xFAltiples incluidas" }
  ], "waMessage": "Hola REDEIL, quiero cotizar el paquete de 200 metros de guirnaldas para mi evento.", "packages": [
    { label: "50 metros", price: "$3,500", href: "/servicios/guirnaldas/paquete-50-metros/" },
    { label: "100 metros", price: "$6,500", href: "/servicios/guirnaldas/paquete-100-metros/" },
    { label: "200 metros", price: "$11,500", href: "/servicios/guirnaldas/paquete-200-metros/", active: true },
    { label: "500 metros", price: "$24,000", href: "/servicios/guirnaldas/paquete-500-metros/" }
  ] }, { "default": ($$result3) => renderTemplate` <div class="container"> ${renderComponent($$result3, "SectionHeader", $$SectionHeader, { "title": "Para venues que necesitan cobertura total", "subtitle": "Haciendas, fincas, venues corporativos y bodas de escala.", "paragraph1": "200 metros permiten iluminar m\xFAltiples zonas de un mismo venue sin interrupciones visuales. Ceremonia, cocktail, cena, pista de baile, pasillos \u2014 todo conectado por un hilo de luz c\xE1lida.", "paragraph2": "El dimmer incluido te permite crear atm\xF3sferas diferentes durante la noche: luz tenue durante el vals, m\xE1s brillo para la cena, y un ambiente festivo para la fiesta." })} ${renderComponent($$result3, "FeatureGrid", $$FeatureGrid, { "features": [
    { title: "Haciendas completas", description: "Corredores, patios, capilla, \xE1rea de recepci\xF3n y jardines. La arquitectura colonial se ve espectacular con guirnaldas." },
    { title: "Fincas y jardines amplios", description: "Cobertura de \xE1reas de 200-300m\xB2. M\xFAltiples zonas con dise\xF1o integrado y continuo." },
    { title: "Corporativos y galas", description: "Cenas de fin de a\xF1o, lanzamientos de producto, galas empresariales. Ambiente premium con dimmer." },
    { title: "Bodas de 200+ invitados", description: "Ceremonia + cocktail + cena + pista. Cuatro zonas iluminadas con un solo paquete." },
    { title: "Dimmer de intensidad", description: "Control total del brillo. Transiciones suaves entre momentos: vals tenue, cena brillante, fiesta vibrante." },
    { title: "Visita previa al venue", description: "Nuestro equipo va a tu espacio antes del evento para medir, dise\xF1ar y planificar cada detalle del montaje." }
  ], "columns": 2 })} </div> <div class="container" style="margin-top: 3rem;"> ${renderComponent($$result3, "SectionHeader", $$SectionHeader, { "title": "Rese\xF1as de eventos con 200 metros", "subtitle": "\u2B50\u2B50\u2B50\u2B50\u2B50 34 rese\xF1as verificadas.", "paragraph1": "Corporativos y bodas grandes que eligieron el paquete premium.", "paragraph2": "El dimmer y la asesor\xEDa en sitio hacen la diferencia en eventos de esta escala." })} ${renderComponent($$result3, "TestimonialCards", $$TestimonialCards, { "testimonials": [
    { name: "Grupo Financiero Banorte", event: "Cena corporativa \u2014 Metepec", rating: 5, text: "Iluminaron toda la hacienda para nuestra cena de fin de a\xF1o. La posibilidad de controlar la intensidad con dimmer fue clave para las distintas etapas del evento. Muy profesionales." },
    { name: "Alejandra Ruiz", event: "Boda 250 inv. \u2014 Huixquilucan", rating: 5, text: "Los 200 metros cubrieron ceremonia, cocktail, cena y pista. La visita previa al venue fue esencial para el dise\xF1o. Resultado espectacular que super\xF3 lo que imaginamos." },
    { name: "EventTech MX", event: "Lanzamiento de producto \u2014 Santa Fe", rating: 5, text: "Ambientaron toda la terraza del hotel para nuestro lanzamiento. Las guirnaldas dieron ese toque premium que busc\xE1bamos para la marca. Excelente coordinaci\xF3n con nuestro equipo." }
  ] })} </div> ` })} </section> <section class="services-section services-alt"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Eventos iluminados con 200 metros", "subtitle": "Haciendas, fincas y venues corporativos en CDMX.", "paragraph1": "Cada foto es de un evento real donde montamos el paquete premium de 200 metros.", "paragraph2": "M\xE1ndanos fotos de tu venue y te mostramos c\xF3mo quedar\xEDa la distribuci\xF3n." })} ${renderComponent($$result2, "Gallery4x4", $$Gallery4X4, { "images": [
    { src: "/img/guirnaldas/renta-guirnaldas-boda-patio-colonial-guirnaldas-21.avif", alt: "Patio colonial de hacienda con 200 metros de guirnaldas" },
    { src: "/img/guirnaldas/renta-guirnaldas-boda-hacienda-mexicana-guirnaldas-18.avif", alt: "Hacienda mexicana iluminada con guirnaldas premium" },
    { src: "/img/guirnaldas/renta-guirnaldas-baile-novios-hacienda-guirnaldas-41.avif", alt: "Baile de novios en hacienda con guirnaldas Edison" },
    { src: "/img/guirnaldas/renta-guirnaldas-brindis-boda-guirnaldas-hacienda-43.avif", alt: "Brindis en hacienda bajo guirnaldas vintage" },
    { src: "/img/guirnaldas/guirnaldas-edison-hacienda-boda.avif", alt: "Guirnaldas Edison en hacienda para evento premium" },
    { src: "/img/guirnaldas/renta-guirnaldas-guirnaldas-vintage-rooftop-ciudad-07.avif", alt: "Venue corporativo con guirnaldas premium" },
    { src: "/img/guirnaldas/renta-guirnaldas-renta-luces-decorativas-eventos-43.avif", alt: "Evento grande iluminado con guirnaldas vintage" },
    { src: "/img/guirnaldas/renta-guirnaldas-brindis-boda-novios-guirnaldas-emocion-42.avif", alt: "Momento emotivo en evento premium con guirnaldas" }
  ] })} </div> </section> <section class="faq-section"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Preguntas sobre el Paquete 200 Metros", "subtitle": "Para eventos grandes y producci\xF3n premium.", "paragraph1": "Escr\xEDbenos por WhatsApp si tienes otra duda.", "paragraph2": "Armamos propuestas a la medida seg\xFAn tu venue y presupuesto." })} </div> ${renderComponent($$result2, "FaqSection", $$FaqSection, { "items": [
    { question: "\xBF200 metros cubren todo mi venue?", answer: "200 metros cubren fincas y haciendas de hasta 300m\xB2 con m\xFAltiples zonas. Para venues m\xE1s grandes, el paquete de 500 metros es la opci\xF3n. Te asesoramos gratis seg\xFAn las dimensiones de tu espacio." },
    { question: "\xBFQu\xE9 es el dimmer y para qu\xE9 sirve?", answer: "El dimmer permite ajustar la intensidad de las guirnaldas en tiempo real. Baja la luz para el vals, s\xFAbela para la cena, crea transiciones suaves. Lo operamos nosotros durante tu evento." },
    { question: "\xBFLa visita previa tiene costo adicional?", answer: "No. La asesor\xEDa en sitio est\xE1 incluida en el paquete de 200 metros. Visitamos tu venue, medimos, tomamos fotos y dise\xF1amos la distribuci\xF3n \xF3ptima sin costo extra." },
    { question: "\xBFSirve para eventos corporativos?", answer: "S\xED. Hemos iluminado cenas de fin de a\xF1o, lanzamientos de producto, galas empresariales y conferencias. Las guirnaldas crean un ambiente premium que eleva cualquier evento corporativo." },
    { question: "\xBFPuedo combinar con gobos y seguidor?", answer: "Claro. Para eventos de esta escala, la combinaci\xF3n m\xE1s popular es guirnaldas + gobos con logo/nombres + seguidor. Armamos paquetes integrales con precio especial." }
  ] })} </section> <section class="services-section services-alt"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Otros Paquetes y Complementos", "subtitle": "Compara opciones o agrega servicios premium.", "paragraph1": "Cada evento tiene su escala. Encuentra el paquete correcto.", "paragraph2": "Cotiza sin compromiso." })} <div class="services-grid"> ${otrosPaquetes.map((s) => renderTemplate`${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "title": s.title, "image": s.image, "alt": s.alt, "description": s.description, "link": s.link })}`)} </div> </div> </section> <section class="cta-section"> <div class="container"> <div class="cta-content"> <h2>¿Listo para iluminar tu evento con 200 metros?</h2> <p>Mándanos fotos de tu venue y te diseñamos la distribución ideal. Propuesta personalizada sin compromiso.</p> <div class="cta-buttons"> <a href="/contacto/" class="btn btn-whatsapp btn-lg">Solicitar Asesoría Gratis</a> <a href="tel:+525530682988" class="btn btn-primary btn-lg">Llámanos — 55 3068 2988</a> </div> </div> </div> </section> ` })}`;
}, "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/pages/servicios/guirnaldas/paquete-200-metros.astro", void 0);

const $$file = "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/pages/servicios/guirnaldas/paquete-200-metros.astro";
const $$url = "/servicios/guirnaldas/paquete-200-metros";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Paquete200Metros,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
