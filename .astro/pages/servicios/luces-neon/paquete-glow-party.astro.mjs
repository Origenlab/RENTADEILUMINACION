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

const $$PaqueteGlowParty = createComponent(($$result, $$props, $$slots) => {
  const title = "Paquete Glow Party \u2014 Luces Ne\xF3n UV CDMX | REDEIL";
  const description = "Glow party completa con UV + accesorios fluorescentes para XV a\xF1os y fiestas tem\xE1ticas en CDMX. Pulseras, pintura ne\xF3n, collares luminosos. Desde $8,000 + IVA.";
  const canonical = "https://rentadeiluminacion.com/servicios/luces-neon/paquete-glow-party/";
  const schemaMarkup = JSON.stringify([
    {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Paquete Glow Party \u2014 Fiesta UV Completa con Accesorios Fluorescentes",
      "description": "Glow party completa: 8-12 barras UV LED + 100 accesorios fluorescentes (pulseras, collares, pintura facial ne\xF3n). Para XV a\xF1os y fiestas tem\xE1ticas en CDMX.",
      "brand": { "@type": "Brand", "name": "REDEIL" },
      "image": "https://rentadeiluminacion.com/img/luces-neon/renta-luces-neon-glow-party-celebracion-neon-300w.avif",
      "offers": { "@type": "Offer", "url": canonical, "priceCurrency": "MXN", "price": "8000", "priceValidUntil": "2027-12-31", "availability": "https://schema.org/InStock" },
      "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5", "bestRating": "5", "ratingCount": "56", "reviewCount": "56" },
      "review": [
        { "@type": "Review", "author": { "@type": "Person", "name": "Valentina Ortiz" }, "datePublished": "2026-02-15", "reviewRating": { "@type": "Rating", "ratingValue": "5" }, "reviewBody": "La glow party para los XV de mi hija fue INCRE\xCDBLE. Los accesorios fluorescentes, la pintura ne\xF3n, las pulseras \u2014 todos los invitados estaban brillando. Las fotos son de otro mundo." },
        { "@type": "Review", "author": { "@type": "Person", "name": "Diego Hern\xE1ndez" }, "datePublished": "2026-01-20", "reviewRating": { "@type": "Rating", "ratingValue": "5" }, "reviewBody": "Organizamos una fiesta glow para el cumplea\xF1os de mi hermana. REDEIL lleg\xF3 temprano, mont\xF3 todo y nos dio los kits de pintura. La experiencia fue brutal \u2014 todos quieren repetir." },
        { "@type": "Review", "author": { "@type": "Person", "name": "Camila Reyes" }, "datePublished": "2025-12-08", "reviewRating": { "@type": "Rating", "ratingValue": "5" }, "reviewBody": "Contratamos el Glow Party para una fiesta tem\xE1tica en el sal\xF3n. Los 100 accesorios fluorescentes alcanzaron perfecto para 80 invitados. El montaje fue profesional y r\xE1pido." }
      ]
    },
    { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
      { "@type": "Question", "name": "\xBF4-6 barras UV son suficientes para mi pista?", "acceptedAnswer": { "@type": "Answer", "text": "S\xED. 4-6 barras UV LED cubren pistas de hasta 80m\xB2 con efecto blacklight uniforme. Para eventos m\xE1s grandes, el paquete Glow Party incluye 8-12 barras." } },
      { "@type": "Question", "name": "\xBFLas luces UV son seguras?", "acceptedAnswer": { "@type": "Answer", "text": "S\xED. Son luces UV LED de baja intensidad, las mismas que usan discotecas y parques de diversiones. Seguras para piel y ojos." } }
    ] }
  ]);
  const otrosPaquetes = [
    { title: "UV B\xE1sico \u2014 $4,500", image: "/img/luces-neon/renta-luces-neon-glow-party-celebracion-neon-300w.avif", alt: "Glow party completa", description: "Kit UV para pista de baile. Perfecto para empezar. $4,500 + IVA.", link: "/servicios/luces-neon/paquete-uv-basico/" },
    { title: "Ne\xF3n Premium \u2014 $12,000", image: "/img/luces-neon/letrero-neon-better-together-boda.avif", alt: "Ne\xF3n premium con letreros", description: "UV completo + 2 letreros LED ne\xF3n personalizados + body paint.", link: "/servicios/luces-neon/paquete-neon-premium/" },
    { title: "Producci\xF3n \u2014 $18,000", image: "/img/luces-neon/letrero-neon-celebracion-cdmx.avif", alt: "Producci\xF3n ne\xF3n completa", description: "Producci\xF3n tem\xE1tica completa. UV + letreros + DJ + l\xE1sers + humo.", link: "/servicios/luces-neon/paquete-produccion-neon/" },
    { title: "Bola Disco", image: "/img/bola-disco/bola-disco-dj-pista-baile-evento.avif", alt: "Bola disco complemento UV", description: "Combina bola disco con UV para una pista de baile \xE9pica.", link: "/servicios/bola-disco/" }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "canonical": canonical, "schemaMarkup": schemaMarkup }, { "breadcrumbs": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "breadcrumbs" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Breadcrumbs", $$Breadcrumbs, { "items": [{ label: "Inicio", href: "/" }, { label: "Iluminaci\xF3n", href: "/servicios/iluminacion/" }, { label: "Luces Ne\xF3n", href: "/servicios/luces-neon/" }, { label: "Glow Party" }] })} ` })}`, "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, { "title": "Paquete Glow Party \u2014 La Experiencia UV Completa para tu Fiesta", "subtitle": "$8,000 + IVA. UV + pulseras + pintura ne\xF3n + collares. El m\xE1s pedido para XV a\xF1os. Hasta 150 invitados.", "introParagraph1": "Una glow party no es solo luces UV \u2014 es una experiencia completa donde tus invitados se convierten en parte del espect\xE1culo. Con 8 a 12 barras UV LED profesionales, 50 pulseras luminosas, 50 collares ne\xF3n y 10 kits de pintura facial fluorescente, todos brillan en la oscuridad. Es la fiesta m\xE1s fotografiada e instagrameada que puedes organizar.", "introParagraph2": "El paquete m\xE1s pedido para XV a\xF1os tem\xE1ticos \u2014 la festejada y sus chambelanes con maquillaje fluorescente, pulseras brillantes y la pista iluminada con UV crean un espect\xE1culo visual que ning\xFAn invitado olvida. Tambi\xE9n perfecto para cumplea\xF1os, fiestas tem\xE1ticas y pool parties nocturnas en CDMX y Estado de M\xE9xico." })} ${renderComponent($$result2, "CtaBar", $$CtaBar, { "headline": "Compara paquetes ne\xF3n", "items": [
    { label: "UV B\xE1sico \u2014 $4,500", href: "/servicios/luces-neon/paquete-uv-basico/", icon: "iluminacion" },
    { label: "Premium \u2014 $12,000", href: "/servicios/luces-neon/paquete-neon-premium/", icon: "iluminacion" },
    { label: "Producci\xF3n \u2014 $18,000", href: "/servicios/luces-neon/paquete-produccion-neon/", icon: "iluminacion" },
    { label: "Cotiza Gratis", href: "/contacto/", icon: "cotizar" }
  ] })} ${maybeRenderHead()}<section class="services-section"> ${renderComponent($$result2, "ContentWithSidebar", $$ContentWithSidebar, { "sidebarTitle": "Glow Party", "price": "$8,000", "priceNote": "+ IVA \xB7 El m\xE1s popular", "features": [
    { text: "8-12 barras UV LED profesionales" },
    { text: "Cobertura hasta 150m\xB2" },
    { text: "50 pulseras + 50 collares ne\xF3n" },
    { text: "Transporte + montaje + desmontaje" },
    { text: "Operaci\xF3n durante el evento" },
    { text: "10 kits pintura facial fluorescente" },
    { text: "Ideal para XV a\xF1os y glow parties" },
    { text: "Pintura dermatol\xF3gicamente segura" },
    { text: "Cobertura CDMX y Edomex" }
  ], "waMessage": "Hola REDEIL, quiero cotizar el paquete Glow Party para mi fiesta.", "packages": [
    { label: "UV B\xE1sico", price: "$4,500", href: "/servicios/luces-neon/paquete-uv-basico/" },
    { label: "Glow Party", price: "$8,000", href: "/servicios/luces-neon/paquete-glow-party/", active: true },
    { label: "Ne\xF3n Premium", price: "$12,000", href: "/servicios/luces-neon/paquete-neon-premium/" },
    { label: "Producci\xF3n", price: "$18,000", href: "/servicios/luces-neon/paquete-produccion-neon/" }
  ] }, { "default": ($$result3) => renderTemplate` <div class="container"> ${renderComponent($$result3, "SectionHeader", $$SectionHeader, { "title": "La experiencia glow para cada tipo de fiesta", "subtitle": "No solo luces \u2014 accesorios, pintura y decoraci\xF3n fluorescente.", "paragraph1": "Una glow party transforma a tus invitados en parte del show. Todo lo blanco brilla, los colores ne\xF3n cobran vida, y la energ\xEDa de la fiesta sube instant\xE1neamente.", "paragraph2": "Las pulseras brillan, la pintura ne\xF3n cobra vida, y la pista se llena de color \u2014 4-6 barras UV bien colocadas hacen toda la diferencia." })} ${renderComponent($$result3, "FeatureGrid", $$FeatureGrid, { "features": [
    { title: "XV A\xF1os Glow", description: "Festejada y chambelanes con maquillaje ne\xF3n. Pulseras para todos los invitados. La fiesta de XV a\xF1os m\xE1s fotografiada." },
    { title: "Cumplea\xF1os Tem\xE1ticos", description: "Kit completo de accesorios para cada invitado. Pintura facial ne\xF3n que todos se ponen entre risas." },
    { title: "Fiestas Tem\xE1ticas", description: "Glow in the dark, fiesta ne\xF3n, disco UV, halloween fluorescente. El tema que imagines, lo iluminamos." },
    { title: "Pool Party Nocturna", description: "UV + alberca = magia. El agua refleja las luces y los accesorios fluorescentes brillan a\xFAn m\xE1s." },
    { title: "School Party", description: "Fiestas de colegio, kerm\xE9s, bailes de generaci\xF3n. Los kits de accesorios alcanzan para grupos grandes." },
    { title: "Disco UV", description: "La pista completa con efecto disco y UV. Combina con bola disco y DJ para la experiencia total." }
  ], "columns": 2 })} </div> <div class="container" style="margin-top: 3rem;"> ${renderComponent($$result3, "SectionHeader", $$SectionHeader, { "title": "Lo que dicen nuestros clientes", "subtitle": "\u2B50\u2B50\u2B50\u2B50\u2B50 38 rese\xF1as verificadas.", "paragraph1": "Fiestas y XV a\xF1os que usaron el paquete Glow Party.", "paragraph2": "El efecto blacklight siempre sorprende \u2014 incluso cuando ya lo esperan." })} ${renderComponent($$result3, "TestimonialCards", $$TestimonialCards, { "testimonials": [
    { name: "Valentina Ortiz", event: "XV a\xF1os glow \u2014 Naucalpan", rating: 5, text: "La glow party para los XV de mi hija fue INCRE\xCDBLE. Los accesorios, la pintura ne\xF3n, las pulseras \u2014 todos brillaban. Las fotos son de otro mundo." },
    { name: "Diego Hern\xE1ndez", event: "Cumplea\xF1os tem\xE1tico \u2014 Roma", rating: 5, text: "Organizamos una fiesta glow para mi hermana. REDEIL lleg\xF3 temprano, mont\xF3 todo y nos dio los kits de pintura. La experiencia fue brutal." },
    { name: "Camila Reyes", event: "Fiesta tem\xE1tica \u2014 Polanco", rating: 5, text: "Los 100 accesorios fluorescentes alcanzaron perfecto para 80 invitados. El montaje fue profesional y r\xE1pido. Todos quieren repetir." }
  ] })} </div> ` })} </section> <section class="services-section services-alt"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "La experiencia glow en acci\xF3n", "subtitle": "XV a\xF1os, cumplea\xF1os y fiestas tem\xE1ticas con glow party.", "paragraph1": "Todo lo blanco y fluorescente brilla bajo la luz ultravioleta.", "paragraph2": "\xBFTu fiesta se parece? M\xE1ndanos detalles por WhatsApp." })} ${renderComponent($$result2, "Gallery4x4", $$Gallery4X4, { "images": [
    { src: "/img/luces-neon/renta-luces-neon-glow-party-celebracion-neon-300w.avif", alt: "Invitados bailando bajo luces UV" },
    { src: "/img/luces-neon/renta-luces-neon-fiesta-uv-maquillaje-neon-300w.avif", alt: "Maquillaje ne\xF3n brillando bajo UV" },
    { src: "/img/luces-neon/renta-luces-neon-glow-party-celebracion-neon-300w.avif", alt: "Celebraci\xF3n con efecto blacklight" },
    { src: "/img/luces-neon/luces-neon-decoracion-fiestas.avif", alt: "Decoraci\xF3n fluorescente en fiesta UV" },
    { src: "/img/luces-neon/luces-neon-infantiles-fiestas.avif", alt: "Fiesta con luces ne\xF3n UV" },
    { src: "/img/luces-neon/luces-neon-para-bodas.avif", alt: "Efecto UV en pista de baile" },
    { src: "/img/luces-neon/neon-decorativo-bodas-cdmx.avif", alt: "Iluminaci\xF3n UV decorativa" },
    { src: "/img/luces-neon/luces-neon-mesa-novios.avif", alt: "Efecto blacklight en evento" }
  ] })} </div> </section> <section class="faq-section"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Preguntas sobre Glow Party", "subtitle": "Todo lo que necesitas saber.", "paragraph1": "Escr\xEDbenos por WhatsApp si tienes otra duda.", "paragraph2": "Te asesoramos sobre si este paquete es suficiente para tu espacio." })} </div> ${renderComponent($$result2, "FaqSection", $$FaqSection, { "items": [
    { question: "\xBF4-6 barras UV son suficientes para mi pista de baile?", answer: "S\xED. Cubren pistas de hasta 80m\xB2 con efecto blacklight uniforme. Nuestro equipo las distribuye estrat\xE9gicamente para maximizar la cobertura. Si tu pista es m\xE1s grande, el paquete Glow Party incluye 8-12 barras." },
    { question: "\xBFLas luces UV son seguras?", answer: "S\xED. Son UV LED de baja intensidad \u2014 las mismas que usan discotecas y parques de diversiones. Seguras para piel y ojos. No son l\xE1mparas UV industriales." },
    { question: "\xBFQu\xE9 ropa debo recomendar a mis invitados?", answer: "Todo lo blanco brilla bajo UV \u2014 camisas, vestidos, tenis. Tambi\xE9n brillan los colores ne\xF3n y fluorescentes. Puedes incluir en tu invitaci\xF3n 'dress code: blanco o ne\xF3n' para maximizar el efecto." },
    { question: "\xBFFunciona de d\xEDa?", answer: "Las luces UV necesitan oscuridad para el efecto completo. Funcionan perfecto en salones cerrados sin ventanas o en eventos nocturnos al aire libre despu\xE9s del atardecer." },
    { question: "\xBFPuedo agregar accesorios fluorescentes?", answer: "El paquete Glow Party no incluye accesorios. Si quieres pulseras, collares y pintura ne\xF3n, el paquete Glow Party ($8,000 + IVA) los incluye. Tambi\xE9n puedes comprar los tuyos y nosotros ponemos las luces." }
  ] })} </section> <section class="services-section services-alt"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Otros Paquetes y Complementos", "subtitle": "\xBFNecesitas m\xE1s efecto? Compara opciones.", "paragraph1": "Cada paquete sube en intensidad y accesorios.", "paragraph2": "Combina UV con bola disco para una pista \xE9pica." })} <div class="services-grid">${otrosPaquetes.map((s) => renderTemplate`${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "title": s.title, "image": s.image, "alt": s.alt, "description": s.description, "link": s.link })}`)}</div> </div> </section> <section class="cta-section"> <div class="container"><div class="cta-content"> <h2>¿Listo para la glow party más épica?</h2> <p>Cuéntanos la fecha, el lugar y cuántas personas esperas. Te confirmamos disponibilidad en minutos.</p> <div class="cta-buttons"> <a href="/contacto/" class="btn btn-whatsapp btn-lg">Cotiza tu Glow Party</a> <a href="tel:+525530682988" class="btn btn-primary btn-lg">Llámanos — 55 3068 2988</a> </div> </div></div> </section> ` })}`;
}, "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/pages/servicios/luces-neon/paquete-glow-party.astro", void 0);

const $$file = "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/pages/servicios/luces-neon/paquete-glow-party.astro";
const $$url = "/servicios/luces-neon/paquete-glow-party";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$PaqueteGlowParty,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
