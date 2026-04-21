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

const $$Paquete500Metros = createComponent(($$result, $$props, $$slots) => {
  const title = "Paquete 500m Guirnaldas Edison \u2014 $24,000 + IVA | REDEIL";
  const description = "500 metros de guirnaldas Edison para festivales, ferias, venues de gran escala. Dimmer + plantas de luz + prueba de iluminaci\xF3n. $24,000 + IVA. CDMX.";
  const canonical = "https://rentadeiluminacion.com/servicios/guirnaldas/paquete-500-metros/";
  const schemaMarkup = JSON.stringify([
    {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Paquete 500 Metros \u2014 Producci\xF3n Guirnaldas Edison",
      "description": "Producci\xF3n completa de 500 metros de guirnaldas Edison para festivales, ferias, bazares y venues de gran escala en CDMX. Incluye dimmer, plantas de luz y prueba previa.",
      "brand": { "@type": "Brand", "name": "REDEIL" },
      "image": "https://rentadeiluminacion.com/img/guirnaldas/renta-guirnaldas-renta-luces-decorativas-eventos-43.avif",
      "offers": { "@type": "Offer", "url": canonical, "priceCurrency": "MXN", "price": "24000", "priceValidUntil": "2027-12-31", "availability": "https://schema.org/InStock" },
      "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5", "bestRating": "5", "ratingCount": "12", "reviewCount": "12" },
      "review": [
        { "@type": "Review", "author": { "@type": "Person", "name": "Bazar S\xE1bado San \xC1ngel" }, "datePublished": "2025-12-15", "reviewRating": { "@type": "Rating", "ratingValue": "5" }, "reviewBody": "REDEIL ilumin\xF3 todo nuestro bazar navide\xF1o con 500 metros de guirnaldas. El efecto fue espectacular \u2014 los visitantes no dejaban de tomar fotos. Las plantas de luz resolvieron el tema el\xE9ctrico sin problema." },
        { "@type": "Review", "author": { "@type": "Person", "name": "Festival Gastron\xF3mico CDMX" }, "datePublished": "2026-02-08", "reviewRating": { "@type": "Rating", "ratingValue": "5" }, "reviewBody": "Contratamos la producci\xF3n completa para nuestro festival en Coyoac\xE1n. 500 metros cubrieron 40 stands y las \xE1reas comunes. La prueba previa de iluminaci\xF3n fue clave para el resultado final." }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "\xBF500 metros necesitan instalaci\xF3n el\xE9ctrica especial?", "acceptedAnswer": { "@type": "Answer", "text": "No necesariamente. El paquete incluye plantas de luz si tu venue no tiene suficiente capacidad el\xE9ctrica. Evaluamos la infraestructura en la visita previa y traemos lo necesario." } },
        { "@type": "Question", "name": "\xBFCu\xE1nto tiempo toma el montaje?", "acceptedAnswer": { "@type": "Answer", "text": "Para 500 metros, el montaje toma 6-8 horas con nuestro equipo completo. Por eso hacemos visita previa y, cuando es posible, montamos el d\xEDa anterior al evento." } }
      ]
    }
  ]);
  const otrosPaquetes = [
    { title: "B\xE1sico \u2014 50m", image: "/img/guirnaldas/renta-guirnaldas-ceremonia-boda-pergola-focos-edison-15.avif", alt: "50 metros para ceremonias", description: "Terrazas y ceremonias \xEDntimas. $3,500 + IVA.", link: "/servicios/guirnaldas/paquete-50-metros/" },
    { title: "Est\xE1ndar \u2014 100m", image: "/img/guirnaldas/renta-guirnaldas-boda-hacienda-mexicana-guirnaldas-18.avif", alt: "100 metros para bodas", description: "El m\xE1s pedido para bodas. Ceremonia + recepci\xF3n. $6,500 + IVA.", link: "/servicios/guirnaldas/paquete-100-metros/" },
    { title: "Premium \u2014 200m", image: "/img/guirnaldas/renta-guirnaldas-boda-patio-colonial-guirnaldas-21.avif", alt: "200 metros para eventos grandes", description: "Haciendas y corporativos. Dimmer incluido. $11,500 + IVA.", link: "/servicios/guirnaldas/paquete-200-metros/" },
    { title: "Sky Tracker", image: "/img/sky-tracker/renta-skytracker-cielo-nocturno-potente-300w.avif", alt: "Sky tracker para festivales", description: "Haces de luz al cielo visibles a kil\xF3metros. El complemento perfecto para festivales y eventos masivos.", link: "/servicios/sky-tracker/" }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "canonical": canonical, "schemaMarkup": schemaMarkup }, { "breadcrumbs": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "breadcrumbs" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Breadcrumbs", $$Breadcrumbs, { "items": [
    { label: "Inicio", href: "/" },
    { label: "Iluminaci\xF3n", href: "/servicios/iluminacion/" },
    { label: "Guirnaldas", href: "/servicios/guirnaldas/" },
    { label: "Paquete 500 metros" }
  ] })} ` })}`, "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, { "title": "Paquete 500 Metros \u2014 Producci\xF3n de Guirnaldas para Festivales", "subtitle": "$24,000 + IVA. Dimmer + plantas de luz + visita previa + prueba de iluminaci\xF3n. Para eventos masivos.", "introParagraph1": "500 metros de guirnaldas Edison es una producci\xF3n a gran escala. Este paquete est\xE1 dise\xF1ado para festivales, ferias gastron\xF3micas, bazares navide\xF1os, venues de gran formato y eventos masivos donde la iluminaci\xF3n decorativa cubre \xE1reas extensas y m\xFAltiples zonas simult\xE1neamente.", "introParagraph2": "Incluye todo lo de los paquetes menores m\xE1s: <strong>dimmer para control de intensidad</strong>, <strong>plantas de luz</strong> si el venue no tiene suficiente capacidad el\xE9ctrica, <strong>visita previa</strong> para dise\xF1ar la distribuci\xF3n, y <strong>prueba de iluminaci\xF3n</strong> antes del evento. Nuestro equipo de producci\xF3n se encarga de cada detalle log\xEDstico." })} ${renderComponent($$result2, "CtaBar", $$CtaBar, { "headline": "Compara paquetes", "items": [
    { label: "50m \u2014 $3,500", href: "/servicios/guirnaldas/paquete-50-metros/", icon: "iluminacion" },
    { label: "100m \u2014 $6,500", href: "/servicios/guirnaldas/paquete-100-metros/", icon: "iluminacion" },
    { label: "200m \u2014 $11,500", href: "/servicios/guirnaldas/paquete-200-metros/", icon: "iluminacion" },
    { label: "Cotiza Gratis", href: "/contacto/", icon: "cotizar" }
  ] })} ${maybeRenderHead()}<section class="services-section"> ${renderComponent($$result2, "ContentWithSidebar", $$ContentWithSidebar, { "sidebarTitle": "Paquete Producci\xF3n", "price": "$24,000", "priceNote": "+ IVA \xB7 Producci\xF3n completa", "features": [
    { text: "500 metros lineales" },
    { text: "Focos Edison LED o vintage" },
    { text: "Dimmer control de intensidad" },
    { text: "Plantas de luz incluidas" },
    { text: "Visita previa al venue" },
    { text: "Prueba de iluminaci\xF3n" },
    { text: "Transporte + montaje + desmontaje" },
    { text: "Equipo de producci\xF3n completo" },
    { text: "Certificaci\xF3n IP65 exteriores" },
    { text: "500+ invitados / m\xFAltiples zonas" }
  ], "waMessage": "Hola REDEIL, quiero cotizar el paquete de 500 metros de guirnaldas para mi evento/festival.", "packages": [
    { label: "50 metros", price: "$3,500", href: "/servicios/guirnaldas/paquete-50-metros/" },
    { label: "100 metros", price: "$6,500", href: "/servicios/guirnaldas/paquete-100-metros/" },
    { label: "200 metros", price: "$11,500", href: "/servicios/guirnaldas/paquete-200-metros/" },
    { label: "500 metros", price: "$24,000", href: "/servicios/guirnaldas/paquete-500-metros/", active: true }
  ] }, { "default": ($$result3) => renderTemplate` <div class="container"> ${renderComponent($$result3, "SectionHeader", $$SectionHeader, { "title": "Producci\xF3n a gran escala", "subtitle": "Festivales, ferias, bazares y venues de formato masivo.", "paragraph1": "500 metros permiten cubrir espacios de 500m\xB2+ con m\xFAltiples zonas iluminadas. Nuestro equipo de producci\xF3n planifica cada metro para maximizar el impacto visual y resolver la log\xEDstica el\xE9ctrica.", "paragraph2": "A diferencia de montajes peque\xF1os, una producci\xF3n de esta escala requiere planificaci\xF3n previa, pruebas y equipo adicional. Todo est\xE1 incluido en el precio." })} ${renderComponent($$result3, "FeatureGrid", $$FeatureGrid, { "features": [
    { title: "Festivales y ferias", description: "Cobertura de 30-50+ stands con \xE1reas comunes iluminadas. Montaje el d\xEDa anterior con prueba completa." },
    { title: "Bazares navide\xF1os", description: "La est\xE9tica vintage de las guirnaldas Edison es perfecta para mercados navide\xF1os. Ambiente m\xE1gico garantizado." },
    { title: "Venues de gran formato", description: "Explanadas, jardines extensos, haciendas con m\xFAltiples edificios. Dise\xF1o personalizado por zona." },
    { title: "Plantas de luz", description: "Si tu venue no tiene suficiente capacidad el\xE9ctrica, traemos generadores silenciosos. Sin costo adicional." },
    { title: "Prueba de iluminaci\xF3n", description: "Montamos, probamos y ajustamos antes del evento. T\xFA apruebas el resultado y hacemos cambios si es necesario." },
    { title: "Equipo de producci\xF3n", description: "Equipo ampliado de t\xE9cnicos para montaje de 6-8 horas. Supervisi\xF3n continua durante el evento." }
  ], "columns": 2 })} </div> <div class="container" style="margin-top: 3rem;"> ${renderComponent($$result3, "SectionHeader", $$SectionHeader, { "title": "Rese\xF1as de producciones", "subtitle": "\u2B50\u2B50\u2B50\u2B50\u2B50 12 producciones a gran escala.", "paragraph1": "Festivales, ferias y eventos masivos que confiaron en REDEIL.", "paragraph2": "Cada producci\xF3n nos ense\xF1a algo nuevo que aplicamos en la siguiente." })} ${renderComponent($$result3, "TestimonialCards", $$TestimonialCards, { "testimonials": [
    { name: "Bazar S\xE1bado San \xC1ngel", event: "Bazar navide\xF1o \u2014 San \xC1ngel", rating: 5, text: "500 metros cubrieron todo nuestro bazar. El efecto fue espectacular \u2014 los visitantes no dejaban de tomar fotos. Las plantas de luz resolvieron el tema el\xE9ctrico sin problema." },
    { name: "Festival Gastron\xF3mico CDMX", event: "Festival \u2014 Coyoac\xE1n", rating: 5, text: "Producci\xF3n completa para nuestro festival. 500 metros cubrieron 40 stands y \xE1reas comunes. La prueba previa fue clave para el resultado. Volveremos a contratarlos." },
    { name: "Corporativo Televisa", event: "Gala de fin de a\xF1o \u2014 Sta. Fe", rating: 5, text: "Iluminaron toda la explanada del corporativo. El dimmer permiti\xF3 crear momentos diferentes durante la noche. Producci\xF3n impecable de principio a fin." }
  ] })} </div> ` })} </section> <section class="services-section services-alt"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Producciones con 500 metros", "subtitle": "Festivales, ferias y eventos masivos.", "paragraph1": "Cada foto es de una producci\xF3n real a gran escala.", "paragraph2": "\xBFOrganizas un festival o feria? Plat\xEDcanos tu proyecto." })} ${renderComponent($$result2, "Gallery4x4", $$Gallery4X4, { "images": [
    { src: "/img/guirnaldas/renta-guirnaldas-renta-luces-decorativas-eventos-43.avif", alt: "Producci\xF3n de 500 metros de guirnaldas en evento masivo" },
    { src: "/img/guirnaldas/guirnaldas-edison-hacienda-boda.avif", alt: "Venue grande iluminado con guirnaldas vintage" },
    { src: "/img/guirnaldas/guirnaldas-led-fiestas-cdmx.avif", alt: "Festival iluminado con guirnaldas LED en CDMX" },
    { src: "/img/guirnaldas/renta-guirnaldas-guirnaldas-vintage-rooftop-ciudad-07.avif", alt: "Producci\xF3n de guirnaldas en venue de gran formato" },
    { src: "/img/guirnaldas/luces-decorativas-eventos-cdmx.avif", alt: "Feria gastron\xF3mica iluminada con guirnaldas Edison" },
    { src: "/img/guirnaldas/guirnaldas-focos-edison-eventos.avif", alt: "Guirnaldas Edison en evento de producci\xF3n masiva" },
    { src: "/img/guirnaldas/guirnaldas-exterior-jardin-boda.avif", alt: "Venue extenso con producci\xF3n completa de guirnaldas" },
    { src: "/img/guirnaldas/guirnaldas-luz-calida-fiestas.avif", alt: "Ambiente c\xE1lido en producci\xF3n de gran escala" }
  ] })} </div> </section> <section class="faq-section"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Preguntas sobre Producci\xF3n 500 Metros", "subtitle": "Log\xEDstica y planificaci\xF3n de gran escala.", "paragraph1": "Cada producci\xF3n es \xFAnica \u2014 plat\xEDcanos tu proyecto.", "paragraph2": "Respondemos en minutos por WhatsApp." })} </div> ${renderComponent($$result2, "FaqSection", $$FaqSection, { "items": [
    { question: "\xBF500 metros necesitan instalaci\xF3n el\xE9ctrica especial?", answer: "No necesariamente. El paquete incluye plantas de luz si tu venue no tiene suficiente capacidad. Evaluamos la infraestructura en la visita previa y traemos lo necesario \u2014 sin costo adicional." },
    { question: "\xBFCu\xE1nto tiempo toma el montaje?", answer: "Para 500 metros, el montaje toma 6-8 horas con nuestro equipo completo de producci\xF3n. Por eso hacemos visita previa y, cuando es posible, montamos el d\xEDa anterior al evento." },
    { question: "\xBFPuedo rentar m\xE1s de 500 metros?", answer: "S\xED. Tenemos capacidad hasta 1,000 metros lineales. Para producciones de esa escala, cotiza directamente y armamos una propuesta personalizada." },
    { question: "\xBFEl precio incluye las plantas de luz?", answer: "S\xED. Las plantas de luz (generadores silenciosos) est\xE1n incluidas si tu venue las necesita. Sin sorpresas ni costos adicionales." },
    { question: "\xBFCu\xE1ntas personas trae el equipo de producci\xF3n?", answer: "Para 500 metros, nuestro equipo incluye 4-6 t\xE9cnicos especializados m\xE1s un supervisor de producci\xF3n. Durante el evento, al menos 2 t\xE9cnicos permanecen de guardia." }
  ] })} </section> <section class="services-section services-alt"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Otros Paquetes y Servicios", "subtitle": "Compara o complementa tu producci\xF3n.", "paragraph1": "Cada escala tiene su paquete.", "paragraph2": "Combina guirnaldas con sky tracker para un efecto masivo." })} <div class="services-grid"> ${otrosPaquetes.map((s) => renderTemplate`${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "title": s.title, "image": s.image, "alt": s.alt, "description": s.description, "link": s.link })}`)} </div> </div> </section> <section class="cta-section"> <div class="container"> <div class="cta-content"> <h2>¿Organizas un festival, feria o evento masivo?</h2> <p>Platícanos tu proyecto. Hacemos visita al venue, diseñamos la producción y te entregamos una propuesta integral.</p> <div class="cta-buttons"> <a href="/contacto/" class="btn btn-whatsapp btn-lg">Solicitar Propuesta</a> <a href="tel:+525530682988" class="btn btn-primary btn-lg">Llámanos — 55 3068 2988</a> </div> </div> </div> </section> ` })}`;
}, "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/pages/servicios/guirnaldas/paquete-500-metros.astro", void 0);

const $$file = "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/pages/servicios/guirnaldas/paquete-500-metros.astro";
const $$url = "/servicios/guirnaldas/paquete-500-metros";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Paquete500Metros,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
