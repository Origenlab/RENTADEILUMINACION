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

const $$PaqueteNeonPremium = createComponent(($$result, $$props, $$slots) => {
  const title = "Paquete Ne\xF3n Premium \u2014 Letreros LED CDMX | REDEIL";
  const description = "Letreros LED ne\xF3n personalizados + UV completo para bodas premium y corporativos. 2 letreros con tu mensaje + body paint UV. $12,000 + IVA. CDMX.";
  const canonical = "https://rentadeiluminacion.com/servicios/luces-neon/paquete-neon-premium/";
  const schemaMarkup = JSON.stringify([
    {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Paquete Ne\xF3n Premium \u2014 Letreros LED Ne\xF3n Personalizados + UV",
      "description": "Kit de 4-6 barras UV LED profesionales para transformar la pista de baile con efecto blacklight. Cobertura hasta 80m\xB2. Para XV a\xF1os y fiestas.",
      "brand": { "@type": "Brand", "name": "REDEIL" },
      "image": "https://rentadeiluminacion.com/img/luces-neon/renta-luces-neon-glow-party-invitados-baile-300w.avif",
      "offers": { "@type": "Offer", "url": canonical, "priceCurrency": "MXN", "price": "12000", "priceValidUntil": "2027-12-31", "availability": "https://schema.org/InStock" },
      "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5", "bestRating": "5", "ratingCount": "28", "reviewCount": "28" },
      "review": [
        { "@type": "Review", "author": { "@type": "Person", "name": "Andrea y Miguel" }, "datePublished": "2026-03-05", "reviewRating": { "@type": "Rating", "ratingValue": "5" }, "reviewBody": "El letrero con nuestros nombres y la fecha de boda fue el centro de todas las fotos. El body paint UV hizo que la pista fuera inolvidable. 100% vale la inversi\xF3n." },
        { "@type": "Review", "author": { "@type": "Person", "name": "Agencia BOLD MX" }, "datePublished": "2026-02-12", "reviewRating": { "@type": "Rating", "ratingValue": "5" }, "reviewBody": "Contratamos el Ne\xF3n Premium para nuestro evento de marca. El logo en ne\xF3n LED qued\xF3 espectacular y lo usamos para el photo wall. Muy profesional todo el proceso." },
        { "@type": "Review", "author": { "@type": "Person", "name": "Gabriela Moreno" }, "datePublished": "2026-01-28", "reviewRating": { "@type": "Rating", "ratingValue": "5" }, "reviewBody": "Los letreros con frases personalizadas fueron el hit de la fiesta. Todos se tomaban fotos con ellos. El body paint fue la cereza del pastel. Incre\xEDble experiencia." }
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
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "canonical": canonical, "schemaMarkup": schemaMarkup }, { "breadcrumbs": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "breadcrumbs" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Breadcrumbs", $$Breadcrumbs, { "items": [{ label: "Inicio", href: "/" }, { label: "Iluminaci\xF3n", href: "/servicios/iluminacion/" }, { label: "Luces Ne\xF3n", href: "/servicios/luces-neon/" }, { label: "Ne\xF3n Premium" }] })} ` })}`, "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, { "title": "Paquete Ne\xF3n Premium \u2014 Letreros LED Personalizados + UV Completo", "subtitle": "$12,000 + IVA. 2 letreros ne\xF3n con tu mensaje + 12 barras UV + 100 accesorios + body paint. Para bodas y corporativos premium.", "introParagraph1": "Los letreros LED ne\xF3n personalizados son el elemento que hace que tu evento sea verdaderamente \xFAnico. Con tu nombre, una frase especial, un hashtag o el logo de tu empresa brillando en ne\xF3n, cada foto se convierte en contenido viral. Combinados con 12+ barras UV y body paint fluorescente, el resultado es una experiencia visual que nadie olvida.", "introParagraph2": "Ideal para bodas donde los novios quieren su hashtag o nombres en ne\xF3n, corporativos que proyectan su marca con estilo, y eventos premium que buscan diferenciarse. Incluye 2 letreros fabricados a medida, 100 accesorios fluorescentes, body paint UV y montaje profesional en CDMX y Estado de M\xE9xico." })} ${renderComponent($$result2, "CtaBar", $$CtaBar, { "headline": "Compara paquetes ne\xF3n", "items": [
    { label: "Glow Party \u2014 $8,000", href: "/servicios/luces-neon/paquete-glow-party/", icon: "iluminacion" },
    { label: "Premium \u2014 $12,000", href: "/servicios/luces-neon/paquete-neon-premium/", icon: "iluminacion" },
    { label: "Producci\xF3n \u2014 $18,000", href: "/servicios/luces-neon/paquete-produccion-neon/", icon: "iluminacion" },
    { label: "Cotiza Gratis", href: "/contacto/", icon: "cotizar" }
  ] })} ${maybeRenderHead()}<section class="services-section"> ${renderComponent($$result2, "ContentWithSidebar", $$ContentWithSidebar, { "sidebarTitle": "Ne\xF3n Premium", "price": "$12,000", "priceNote": "+ IVA \xB7 Letreros personalizados", "features": [
    { text: "12+ barras UV LED profesionales" },
    { text: "Cobertura hasta 200m\xB2" },
    { text: "2 letreros LED ne\xF3n personalizados" },
    { text: "Transporte + montaje + desmontaje" },
    { text: "Operaci\xF3n durante el evento" },
    { text: "100 accesorios fluorescentes" },
    { text: "Body paint UV profesional" },
    { text: "Ideal bodas premium y corporativos" },
    { text: "Cobertura CDMX y Edomex" }
  ], "waMessage": "Hola REDEIL, quiero cotizar el paquete Ne\xF3n Premium para mi fiesta.", "packages": [
    { label: "UV B\xE1sico", price: "$4,500", href: "/servicios/luces-neon/paquete-uv-basico/" },
    { label: "Glow Party", price: "$8,000", href: "/servicios/luces-neon/paquete-glow-party/" },
    { label: "Ne\xF3n Premium", price: "$12,000", href: "/servicios/luces-neon/paquete-neon-premium/", active: true },
    { label: "Producci\xF3n", price: "$18,000", href: "/servicios/luces-neon/paquete-produccion-neon/" }
  ] }, { "default": ($$result3) => renderTemplate` <div class="container"> ${renderComponent($$result3, "SectionHeader", $$SectionHeader, { "title": "Tu mensaje en ne\xF3n \u2014 el detalle que todos recuerdan", "subtitle": "Letreros personalizados + UV + body paint.", "paragraph1": "El efecto UV convierte cualquier pista oscura en un espect\xE1culo visual. Todo lo blanco brilla, los colores ne\xF3n cobran vida, y la energ\xEDa de la fiesta sube instant\xE1neamente.", "paragraph2": "No necesitas una producci\xF3n completa para impresionar \u2014 4-6 barras UV bien colocadas hacen toda la diferencia." })} ${renderComponent($$result3, "FeatureGrid", $$FeatureGrid, { "features": [
    { title: "Boda con Hashtag Ne\xF3n", description: "Chambelanas con vestidos blancos que brillan. El vals con efecto blacklight. Las fotos m\xE1s compartidas de la fiesta." },
    { title: "Corporativo con Logo", description: "Transforma tu fiesta en un mini club. Tus invitados con camisas blancas parecen estrellas bajo UV." },
    { title: "Nombres de Novios", description: "Celebra con estilo. La pista de baile con UV hace que todos quieran quedarse bailando." },
    { title: "Body Paint UV", description: "En casa, terraza o sal\xF3n. El efecto funciona en cualquier espacio oscuro de hasta 80m\xB2." },
    { title: "Foto Booth Ne\xF3n", description: "Para la segunda fase de tu evento. Cuando bajan las luces principales, prende las UV." },
    { title: "Frases Personalizadas", description: "Base perfecta para temas ne\xF3n, space, disco retro, halloween fluorescente." }
  ], "columns": 2 })} </div> <div class="container" style="margin-top: 3rem;"> ${renderComponent($$result3, "SectionHeader", $$SectionHeader, { "title": "Lo que dicen nuestros clientes", "subtitle": "\u2B50\u2B50\u2B50\u2B50\u2B50 38 rese\xF1as verificadas.", "paragraph1": "Fiestas y XV a\xF1os que usaron el paquete Ne\xF3n Premium.", "paragraph2": "El efecto blacklight siempre sorprende \u2014 incluso cuando ya lo esperan." })} ${renderComponent($$result3, "TestimonialCards", $$TestimonialCards, { "testimonials": [
    { name: "Andrea y Miguel", event: "Boda premium \u2014 Huixquilucan", rating: 5, text: "Las barras UV transformaron la pista. Todas las chambelanas con ropa blanca brillaban incre\xEDble. Las fotos quedaron espectaculares." },
    { name: "Agencia BOLD MX", event: "Evento de marca \u2014 Santa Fe", rating: 5, text: "El efecto blacklight hizo que mi fiesta en terraza se sintiera como un club. Montaje r\xE1pido y profesional." },
    { name: "Gabriela Moreno", event: "Cumplea\xF1os 30 \u2014 Polanco", rating: 5, text: "Los chavos se divirtieron much\xEDsimo con las luces UV. El precio es accesible y el servicio completo." }
  ] })} </div> ` })} </section> <section class="services-section services-alt"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Letreros ne\xF3n en eventos reales", "subtitle": "Fotos reales de fiestas con nuestro paquete UV.", "paragraph1": "Todo lo blanco y fluorescente brilla bajo la luz ultravioleta.", "paragraph2": "\xBFTu fiesta se parece? M\xE1ndanos detalles por WhatsApp." })} ${renderComponent($$result2, "Gallery4x4", $$Gallery4X4, { "images": [
    { src: "/img/luces-neon/renta-luces-neon-glow-party-invitados-baile-300w.avif", alt: "Invitados bailando bajo luces UV" },
    { src: "/img/luces-neon/renta-luces-neon-fiesta-uv-maquillaje-neon-300w.avif", alt: "Maquillaje ne\xF3n brillando bajo UV" },
    { src: "/img/luces-neon/renta-luces-neon-glow-party-celebracion-neon-300w.avif", alt: "Celebraci\xF3n con efecto blacklight" },
    { src: "/img/luces-neon/luces-neon-decoracion-fiestas.avif", alt: "Decoraci\xF3n fluorescente en fiesta UV" },
    { src: "/img/luces-neon/luces-neon-infantiles-fiestas.avif", alt: "Fiesta con luces ne\xF3n UV" },
    { src: "/img/luces-neon/luces-neon-para-bodas.avif", alt: "Efecto UV en pista de baile" },
    { src: "/img/luces-neon/neon-decorativo-bodas-cdmx.avif", alt: "Iluminaci\xF3n UV decorativa" },
    { src: "/img/luces-neon/luces-neon-mesa-novios.avif", alt: "Efecto blacklight en evento" }
  ] })} </div> </section> <section class="faq-section"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Preguntas sobre Ne\xF3n Premium", "subtitle": "Todo lo que necesitas saber.", "paragraph1": "Escr\xEDbenos por WhatsApp si tienes otra duda.", "paragraph2": "Te asesoramos sobre si este paquete es suficiente para tu espacio." })} </div> ${renderComponent($$result2, "FaqSection", $$FaqSection, { "items": [
    { question: "\xBF4-6 barras UV son suficientes para mi pista de baile?", answer: "S\xED. Cubren pistas de hasta 80m\xB2 con efecto blacklight uniforme. Nuestro equipo las distribuye estrat\xE9gicamente para maximizar la cobertura. Si tu pista es m\xE1s grande, el paquete Glow Party incluye 8-12 barras." },
    { question: "\xBFLas luces UV son seguras?", answer: "S\xED. Son UV LED de baja intensidad \u2014 las mismas que usan discotecas y parques de diversiones. Seguras para piel y ojos. No son l\xE1mparas UV industriales." },
    { question: "\xBFQu\xE9 ropa debo recomendar a mis invitados?", answer: "Todo lo blanco brilla bajo UV \u2014 camisas, vestidos, tenis. Tambi\xE9n brillan los colores ne\xF3n y fluorescentes. Puedes incluir en tu invitaci\xF3n 'dress code: blanco o ne\xF3n' para maximizar el efecto." },
    { question: "\xBFFunciona de d\xEDa?", answer: "Las luces UV necesitan oscuridad para el efecto completo. Funcionan perfecto en salones cerrados sin ventanas o en eventos nocturnos al aire libre despu\xE9s del atardecer." },
    { question: "\xBFPuedo agregar accesorios fluorescentes?", answer: "El paquete Ne\xF3n Premium no incluye accesorios. Si quieres pulseras, collares y pintura ne\xF3n, el paquete Glow Party ($8,000 + IVA) los incluye. Tambi\xE9n puedes comprar los tuyos y nosotros ponemos las luces." }
  ] })} </section> <section class="services-section services-alt"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Otros Paquetes y Complementos", "subtitle": "\xBFNecesitas m\xE1s efecto? Compara opciones.", "paragraph1": "Cada paquete sube en intensidad y accesorios.", "paragraph2": "Combina UV con bola disco para una pista \xE9pica." })} <div class="services-grid">${otrosPaquetes.map((s) => renderTemplate`${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "title": s.title, "image": s.image, "alt": s.alt, "description": s.description, "link": s.link })}`)}</div> </div> </section> <section class="cta-section"> <div class="container"><div class="cta-content"> <h2>¿Listo para tu letrero neón personalizado?</h2> <p>Cuéntanos la fecha, el lugar y cuántas personas esperas. Te confirmamos disponibilidad en minutos.</p> <div class="cta-buttons"> <a href="/contacto/" class="btn btn-whatsapp btn-lg">Diseña tu Letrero Neón</a> <a href="tel:+525530682988" class="btn btn-primary btn-lg">Llámanos — 55 3068 2988</a> </div> </div></div> </section> ` })}`;
}, "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/pages/servicios/luces-neon/paquete-neon-premium.astro", void 0);

const $$file = "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/pages/servicios/luces-neon/paquete-neon-premium.astro";
const $$url = "/servicios/luces-neon/paquete-neon-premium";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$PaqueteNeonPremium,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
