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

const $$PaqueteProduccionNeon = createComponent(($$result, $$props, $$slots) => {
  const title = "Producci\xF3n Ne\xF3n Completa para Eventos CDMX | REDEIL";
  const description = "Producci\xF3n tem\xE1tica ne\xF3n completa: UV + letreros + DJ + l\xE1sers + humo + decoraci\xF3n. Para eventos masivos y festivales. $18,000 + IVA. CDMX.";
  const canonical = "https://rentadeiluminacion.com/servicios/luces-neon/paquete-produccion-neon/";
  const schemaMarkup = JSON.stringify([
    {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Producci\xF3n Ne\xF3n \u2014 Evento Tem\xE1tico UV Completo",
      "description": "Kit de 4-6 barras UV LED profesionales para transformar la pista de baile con efecto blacklight. Cobertura hasta 80m\xB2. Para XV a\xF1os y fiestas.",
      "brand": { "@type": "Brand", "name": "REDEIL" },
      "image": "https://rentadeiluminacion.com/img/luces-neon/renta-luces-neon-glow-party-invitados-baile-300w.avif",
      "offers": { "@type": "Offer", "url": canonical, "priceCurrency": "MXN", "price": "18000", "priceValidUntil": "2027-12-31", "availability": "https://schema.org/InStock" },
      "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5", "bestRating": "5", "ratingCount": "15", "reviewCount": "15" },
      "review": [
        { "@type": "Review", "author": { "@type": "Person", "name": "Festival Noche Ne\xF3n" }, "datePublished": "2026-02-20", "reviewRating": { "@type": "Rating", "ratingValue": "5" }, "reviewBody": "REDEIL produjo toda la iluminaci\xF3n de nuestro festival en Coyoac\xE1n. 300+ asistentes, zona de DJ, \xE1rea lounge y photo booth \u2014 todo con tem\xE1tica ne\xF3n. Producci\xF3n impecable." },
        { "@type": "Review", "author": { "@type": "Person", "name": "Corporativo Samsung MX" }, "datePublished": "2026-01-15", "reviewRating": { "@type": "Rating", "ratingValue": "5" }, "reviewBody": "La fiesta de fin de a\xF1o de Samsung con tem\xE1tica ne\xF3n fue espectacular. Los letreros con el logo, el DJ, los l\xE1sers \u2014 todo coordinado perfectamente. El equipo de producci\xF3n es muy profesional." },
        { "@type": "Review", "author": { "@type": "Person", "name": "Ricardo Fuentes" }, "datePublished": "2025-12-28", "reviewRating": { "@type": "Rating", "ratingValue": "5" }, "reviewBody": "Organizamos una discoteca privada para 200 personas con producci\xF3n completa de REDEIL. Fue la mejor fiesta que hemos tenido. Los l\xE1sers con el humo y las luces UV crearon un ambiente de club internacional." }
      ]
    },
    { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
      { "@type": "Question", "name": "\xBF4-6 barras UV son suficientes para mi pista?", "acceptedAnswer": { "@type": "Answer", "text": "S\xED. 4-6 barras UV LED cubren pistas de hasta 80m\xB2 con efecto blacklight uniforme. Para eventos m\xE1s grandes, el paquete Glow Party incluye 8-12 barras." } },
      { "@type": "Question", "name": "\xBFLas luces UV son seguras?", "acceptedAnswer": { "@type": "Answer", "text": "S\xED. Son luces UV LED de baja intensidad, las mismas que usan discotecas y parques de diversiones. Seguras para piel y ojos." } }
    ] }
  ]);
  const otrosPaquetes = [
    { title: "Glow Party \u2014 $8,000", image: "/img/luces-neon/renta-luces-neon-glow-party-celebracion-neon-300w.avif", alt: "Glow party completa", description: "UV + 100 accesorios fluorescentes + pintura ne\xF3n. El m\xE1s pedido para XV a\xF1os.", link: "/servicios/luces-neon/paquete-glow-party/" },
    { title: "Ne\xF3n Premium \u2014 $12,000", image: "/img/luces-neon/letrero-neon-better-together-boda.avif", alt: "Ne\xF3n premium con letreros", description: "UV completo + 2 letreros LED ne\xF3n personalizados + body paint.", link: "/servicios/luces-neon/paquete-neon-premium/" },
    { title: "Producci\xF3n \u2014 $18,000", image: "/img/luces-neon/letrero-neon-celebracion-cdmx.avif", alt: "Producci\xF3n ne\xF3n completa", description: "Producci\xF3n tem\xE1tica completa. UV + letreros + DJ + l\xE1sers + humo.", link: "/servicios/luces-neon/paquete-produccion-neon/" },
    { title: "Bola Disco", image: "/img/bola-disco/bola-disco-dj-pista-baile-evento.avif", alt: "Bola disco complemento UV", description: "Combina bola disco con UV para una pista de baile \xE9pica.", link: "/servicios/bola-disco/" }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "canonical": canonical, "schemaMarkup": schemaMarkup }, { "breadcrumbs": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "breadcrumbs" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Breadcrumbs", $$Breadcrumbs, { "items": [{ label: "Inicio", href: "/" }, { label: "Iluminaci\xF3n", href: "/servicios/iluminacion/" }, { label: "Luces Ne\xF3n", href: "/servicios/luces-neon/" }, { label: "Producci\xF3n Ne\xF3n" }] })} ` })}`, "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, { "title": "Producci\xF3n Ne\xF3n \u2014 Evento Tem\xE1tico UV Completo", "subtitle": "$18,000 + IVA. Producci\xF3n completa: 20+ barras UV + l\xE1sers + DJ + humo + 3 letreros + 200 accesorios. Para eventos masivos.", "introParagraph1": "La Producci\xF3n Ne\xF3n es una experiencia completa de gran formato. 20+ barras UV, ca\xF1ones de luz, l\xE1sers, humo esc\xE9nico, 3 letreros LED ne\xF3n personalizados, 200+ accesorios fluorescentes, decoraci\xF3n tem\xE1tica completa y DJ profesional incluido. Todo lo que necesitas para un evento masivo que nadie va a olvidar.", "introParagraph2": "Dise\xF1ada para festivales, fiestas corporativas de gran formato, discotecas privadas, eventos de marca y celebraciones de 300+ invitados. Nuestro equipo de producci\xF3n se encarga de la log\xEDstica completa \u2014 visita previa al venue, dise\xF1o del montaje, prueba de iluminaci\xF3n y equipo de t\xE9cnicos durante todo el evento en CDMX y Estado de M\xE9xico." })} ${renderComponent($$result2, "CtaBar", $$CtaBar, { "headline": "Compara paquetes ne\xF3n", "items": [
    { label: "Glow Party \u2014 $8,000", href: "/servicios/luces-neon/paquete-glow-party/", icon: "iluminacion" },
    { label: "Premium \u2014 $12,000", href: "/servicios/luces-neon/paquete-neon-premium/", icon: "iluminacion" },
    { label: "Producci\xF3n \u2014 $18,000", href: "/servicios/luces-neon/paquete-produccion-neon/", icon: "iluminacion" },
    { label: "Cotiza Gratis", href: "/contacto/", icon: "cotizar" }
  ] })} ${maybeRenderHead()}<section class="services-section"> ${renderComponent($$result2, "ContentWithSidebar", $$ContentWithSidebar, { "sidebarTitle": "Producci\xF3n Ne\xF3n", "price": "$18,000", "priceNote": "+ IVA \xB7 Producci\xF3n completa", "features": [
    { text: "20+ barras UV + ca\xF1ones de luz" },
    { text: "Cobertura 300m\xB2+" },
    { text: "3 letreros LED ne\xF3n personalizados" },
    { text: "Transporte + montaje + desmontaje" },
    { text: "Operaci\xF3n durante el evento" },
    { text: "200+ accesorios fluorescentes" },
    { text: "L\xE1sers + humo esc\xE9nico" },
    { text: "DJ profesional incluido" },
    { text: "Cobertura CDMX y Edomex" }
  ], "waMessage": "Hola REDEIL, quiero cotizar el producci\xF3n Ne\xF3n para mi fiesta.", "packages": [
    { label: "UV B\xE1sico", price: "$4,500", href: "/servicios/luces-neon/paquete-uv-basico/" },
    { label: "Glow Party", price: "$8,000", href: "/servicios/luces-neon/paquete-glow-party/" },
    { label: "Ne\xF3n Premium", price: "$12,000", href: "/servicios/luces-neon/paquete-neon-premium/" },
    { label: "Producci\xF3n", price: "$18,000", href: "/servicios/luces-neon/paquete-produccion-neon/", active: true }
  ] }, { "default": ($$result3) => renderTemplate` <div class="container"> ${renderComponent($$result3, "SectionHeader", $$SectionHeader, { "title": "Producci\xF3n a gran escala", "subtitle": "Festivales, corporativos masivos, discotecas privadas.", "paragraph1": "El efecto UV convierte cualquier pista oscura en un espect\xE1culo visual. Todo lo blanco brilla, los colores ne\xF3n cobran vida, y la energ\xEDa de la fiesta sube instant\xE1neamente.", "paragraph2": "No necesitas una producci\xF3n completa para impresionar \u2014 4-6 barras UV bien colocadas hacen toda la diferencia." })} ${renderComponent($$result3, "FeatureGrid", $$FeatureGrid, { "features": [
    { title: "Festival Ne\xF3n", description: "Chambelanas con vestidos blancos que brillan. El vals con efecto blacklight. Las fotos m\xE1s compartidas de la fiesta." },
    { title: "Corporativo Masivo", description: "Transforma tu fiesta en un mini club. Tus invitados con camisas blancas parecen estrellas bajo UV." },
    { title: "Fiesta 500+", description: "Celebra con estilo. La pista de baile con UV hace que todos quieran quedarse bailando." },
    { title: "Discoteca Privada", description: "En casa, terraza o sal\xF3n. El efecto funciona en cualquier espacio oscuro de hasta 80m\xB2." },
    { title: "Evento de Marca", description: "Para la segunda fase de tu evento. Cuando bajan las luces principales, prende las UV." },
    { title: "After Party Premium", description: "Base perfecta para temas ne\xF3n, space, disco retro, halloween fluorescente." }
  ], "columns": 2 })} </div> <div class="container" style="margin-top: 3rem;"> ${renderComponent($$result3, "SectionHeader", $$SectionHeader, { "title": "Lo que dicen nuestros clientes", "subtitle": "\u2B50\u2B50\u2B50\u2B50\u2B50 38 rese\xF1as verificadas.", "paragraph1": "Fiestas y XV a\xF1os que usaron el producci\xF3n Ne\xF3n.", "paragraph2": "El efecto blacklight siempre sorprende \u2014 incluso cuando ya lo esperan." })} ${renderComponent($$result3, "TestimonialCards", $$TestimonialCards, { "testimonials": [
    { name: "Festival Noche Ne\xF3n", event: "Festival \u2014 Coyoac\xE1n", rating: 5, text: "Las barras UV transformaron la pista. Todas las chambelanas con ropa blanca brillaban incre\xEDble. Las fotos quedaron espectaculares." },
    { name: "Corporativo Samsung MX", event: "Fin de a\xF1o \u2014 Santa Fe", rating: 5, text: "El efecto blacklight hizo que mi fiesta en terraza se sintiera como un club. Montaje r\xE1pido y profesional." },
    { name: "Ricardo Fuentes", event: "Discoteca privada \u2014 Polanco", rating: 5, text: "Los chavos se divirtieron much\xEDsimo con las luces UV. El precio es accesible y el servicio completo." }
  ] })} </div> ` })} </section> <section class="services-section services-alt"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Producciones ne\xF3n a gran escala", "subtitle": "Fotos reales de fiestas con nuestro paquete UV.", "paragraph1": "Todo lo blanco y fluorescente brilla bajo la luz ultravioleta.", "paragraph2": "\xBFTu fiesta se parece? M\xE1ndanos detalles por WhatsApp." })} ${renderComponent($$result2, "Gallery4x4", $$Gallery4X4, { "images": [
    { src: "/img/luces-neon/renta-luces-neon-glow-party-invitados-baile-300w.avif", alt: "Invitados bailando bajo luces UV" },
    { src: "/img/luces-neon/renta-luces-neon-fiesta-uv-maquillaje-neon-300w.avif", alt: "Maquillaje ne\xF3n brillando bajo UV" },
    { src: "/img/luces-neon/renta-luces-neon-glow-party-celebracion-neon-300w.avif", alt: "Celebraci\xF3n con efecto blacklight" },
    { src: "/img/luces-neon/luces-neon-decoracion-fiestas.avif", alt: "Decoraci\xF3n fluorescente en fiesta UV" },
    { src: "/img/luces-neon/luces-neon-infantiles-fiestas.avif", alt: "Fiesta con luces ne\xF3n UV" },
    { src: "/img/luces-neon/luces-neon-para-bodas.avif", alt: "Efecto UV en pista de baile" },
    { src: "/img/luces-neon/neon-decorativo-bodas-cdmx.avif", alt: "Iluminaci\xF3n UV decorativa" },
    { src: "/img/luces-neon/luces-neon-mesa-novios.avif", alt: "Efecto blacklight en evento" }
  ] })} </div> </section> <section class="faq-section"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Preguntas sobre Producci\xF3n Ne\xF3n", "subtitle": "Todo lo que necesitas saber.", "paragraph1": "Escr\xEDbenos por WhatsApp si tienes otra duda.", "paragraph2": "Te asesoramos sobre si este paquete es suficiente para tu espacio." })} </div> ${renderComponent($$result2, "FaqSection", $$FaqSection, { "items": [
    { question: "\xBF4-6 barras UV son suficientes para mi pista de baile?", answer: "S\xED. Cubren pistas de hasta 80m\xB2 con efecto blacklight uniforme. Nuestro equipo las distribuye estrat\xE9gicamente para maximizar la cobertura. Si tu pista es m\xE1s grande, el paquete Glow Party incluye 8-12 barras." },
    { question: "\xBFLas luces UV son seguras?", answer: "S\xED. Son UV LED de baja intensidad \u2014 las mismas que usan discotecas y parques de diversiones. Seguras para piel y ojos. No son l\xE1mparas UV industriales." },
    { question: "\xBFQu\xE9 ropa debo recomendar a mis invitados?", answer: "Todo lo blanco brilla bajo UV \u2014 camisas, vestidos, tenis. Tambi\xE9n brillan los colores ne\xF3n y fluorescentes. Puedes incluir en tu invitaci\xF3n 'dress code: blanco o ne\xF3n' para maximizar el efecto." },
    { question: "\xBFFunciona de d\xEDa?", answer: "Las luces UV necesitan oscuridad para el efecto completo. Funcionan perfecto en salones cerrados sin ventanas o en eventos nocturnos al aire libre despu\xE9s del atardecer." },
    { question: "\xBFPuedo agregar accesorios fluorescentes?", answer: "El producci\xF3n Ne\xF3n no incluye accesorios. Si quieres pulseras, collares y pintura ne\xF3n, el paquete Glow Party ($8,000 + IVA) los incluye. Tambi\xE9n puedes comprar los tuyos y nosotros ponemos las luces." }
  ] })} </section> <section class="services-section services-alt"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Otros Paquetes y Complementos", "subtitle": "\xBFNecesitas m\xE1s efecto? Compara opciones.", "paragraph1": "Cada paquete sube en intensidad y accesorios.", "paragraph2": "Combina UV con bola disco para una pista \xE9pica." })} <div class="services-grid">${otrosPaquetes.map((s) => renderTemplate`${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "title": s.title, "image": s.image, "alt": s.alt, "description": s.description, "link": s.link })}`)}</div> </div> </section> <section class="cta-section"> <div class="container"><div class="cta-content"> <h2>¿Organizas un evento masivo?</h2> <p>Cuéntanos la fecha, el lugar y cuántas personas esperas. Te confirmamos disponibilidad en minutos.</p> <div class="cta-buttons"> <a href="/contacto/" class="btn btn-whatsapp btn-lg">Solicitar Propuesta de Producción</a> <a href="tel:+525530682988" class="btn btn-primary btn-lg">Llámanos — 55 3068 2988</a> </div> </div></div> </section> ` })}`;
}, "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/pages/servicios/luces-neon/paquete-produccion-neon.astro", void 0);

const $$file = "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/pages/servicios/luces-neon/paquete-produccion-neon.astro";
const $$url = "/servicios/luces-neon/paquete-produccion-neon";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$PaqueteProduccionNeon,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
