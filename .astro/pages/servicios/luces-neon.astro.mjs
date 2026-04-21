import { c as createComponent, b as renderComponent, r as renderTemplate, m as maybeRenderHead, F as Fragment } from '../../chunks/astro/server_D8pMnQBn.mjs';
import 'piccolore';
import { $ as $$BaseLayout, a as $$Breadcrumbs } from '../../chunks/Breadcrumbs_BkFbHGbf.mjs';
import { $ as $$Hero } from '../../chunks/Hero_3Is3fruG.mjs';
import { $ as $$CtaBar } from '../../chunks/CtaBar_CdFZlCZU.mjs';
import { $ as $$SectionHeader } from '../../chunks/SectionHeader_mLKzHzNX.mjs';
import { $ as $$ServiceCard } from '../../chunks/ServiceCard_Bli7ALj4.mjs';
import { $ as $$Gallery4X4 } from '../../chunks/Gallery4x4_Bx6Jz45E.mjs';
import { $ as $$PricingCards } from '../../chunks/PricingCards_CLGxK1tp.mjs';
import { $ as $$FaqSection } from '../../chunks/FaqSection_CzcP3CIi.mjs';
export { renderers } from '../../renderers.mjs';

const $$LucesNeon = createComponent(($$result, $$props, $$slots) => {
  const title = "Renta de Luces Ne\xF3n y UV para Eventos CDMX | REDEIL";
  const description = "Luces ne\xF3n LED, UV blacklight y glow party para XV a\xF1os, fiestas y eventos tem\xE1ticos en CDMX. Accesorios fluorescentes incluidos. Desde $4,500 + IVA.";
  const canonical = "https://rentadeiluminacion.com/servicios/luces-neon/";
  const schemaMarkup = JSON.stringify([
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Renta de Luces Ne\xF3n y UV para Fiestas",
      "provider": {
        "@type": "LocalBusiness",
        "name": "REDEIL",
        "url": "https://rentadeiluminacion.com",
        "telephone": "+525530682988",
        "address": { "@type": "PostalAddress", "addressLocality": "Ciudad de M\xE9xico", "addressRegion": "CDMX", "addressCountry": "MX" }
      },
      "description": "Servicio profesional de iluminaci\xF3n ne\xF3n, UV y glow para XV a\xF1os, fiestas tem\xE1ticas y eventos nocturnos en CDMX. Incluye accesorios fluorescentes e instalaci\xF3n.",
      "areaServed": [{ "@type": "City", "name": "Ciudad de M\xE9xico" }, { "@type": "State", "name": "Estado de M\xE9xico" }],
      "serviceType": "Renta de Luces Ne\xF3n y UV",
      "priceRange": "$$"
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "\xBFQu\xE9 es una glow party?", "acceptedAnswer": { "@type": "Answer", "text": "Una glow party es una fiesta tem\xE1tica donde se usa iluminaci\xF3n UV (luz negra) para que todo lo blanco y fluorescente brille en la oscuridad. Incluye pintura corporal ne\xF3n, accesorios luminosos y decoraci\xF3n fluorescente." } },
        { "@type": "Question", "name": "\xBFLas luces UV son seguras?", "acceptedAnswer": { "@type": "Answer", "text": "S\xED. Usamos luces UV LED de baja intensidad, seguras para la piel y los ojos. No son las mismas que las l\xE1mparas UV industriales. Son las mismas que se usan en parques de diversiones y discotecas." } },
        { "@type": "Question", "name": "\xBFLos accesorios fluorescentes est\xE1n incluidos?", "acceptedAnswer": { "@type": "Answer", "text": "En los paquetes Glow Party y superiores, s\xED. Incluimos pulseras, collares, pintura facial ne\xF3n y accesorios luminosos seg\xFAn el tama\xF1o del evento." } },
        { "@type": "Question", "name": "\xBFQu\xE9 es una glow party y c\xF3mo funciona?", "acceptedAnswer": { "@type": "Answer", "text": "Una glow party es una fiesta tem\xE1tica donde se usa iluminaci\xF3n UV para que todo lo blanco y fluorescente brille en la oscuridad. Se complementa con pintura corporal ne\xF3n, pulseras, collares y decoraci\xF3n fluorescente." } },
        { "@type": "Question", "name": "\xBFLas luces UV son seguras para los invitados?", "acceptedAnswer": { "@type": "Answer", "text": "S\xED. Usamos luces UV LED de baja intensidad, seguras para la piel y los ojos. La pintura facial incluida tambi\xE9n es dermatol\xF3gicamente segura y no t\xF3xica." } },
        { "@type": "Question", "name": "\xBFLos letreros ne\xF3n personalizados est\xE1n incluidos?", "acceptedAnswer": { "@type": "Answer", "text": "En los paquetes Ne\xF3n Premium y Producci\xF3n, s\xED. Incluyen letreros LED ne\xF3n con el mensaje que quieras \u2014 nombres, frases, hashtags, logos. Se fabrican a medida y los montamos el d\xEDa del evento." } }
      ]
    }
  ]);
  const serviciosRelacionados = [
    { title: "Luz Negra UV", image: "/img/luz-negra/luz-negra-fiesta-neon-300w.avif", alt: "Luz negra UV para fiesta ne\xF3n", description: "Complemento esencial. La luz negra UV hace brillar todo lo fluorescente \u2014 el motor de cualquier glow party.", link: "/servicios/luz-negra/" },
    { title: "Gobos", image: "/img/gobos/renta-gobo-monograma-pista-baile-300w.avif", alt: "Gobo proyectando monograma", description: "Letreros ne\xF3n personalizados + nombres proyectados con gobo. Personalizaci\xF3n total del evento.", link: "/servicios/gobos/" },
    { title: "Cabezas M\xF3viles", image: "/img/cabezas-moviles/renta-cabezas-moviles-show-luces-beams-colores-300w.avif", alt: "Show de beams de colores", description: "Luces ne\xF3n decorativas + cabezas m\xF3viles en modo show. El combo que convierte la pista en un concierto.", link: "/servicios/cabezas-moviles/" },
    { title: "City Light", image: "/img/city-light/iluminacion-para-fiestas-cdmx.avif", alt: "Iluminaci\xF3n para fiestas CDMX", description: "PAR LED de color para ambientar el sal\xF3n + luces ne\xF3n como decoraci\xF3n focal. Capas de iluminaci\xF3n perfectas.", link: "/servicios/city-light/" }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "canonical": canonical, "schemaMarkup": schemaMarkup }, { "breadcrumbs": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "breadcrumbs" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Breadcrumbs", $$Breadcrumbs, { "items": [
    { label: "Inicio", href: "/" },
    { label: "Iluminaci\xF3n", href: "/servicios/iluminacion/" },
    { label: "Luces Ne\xF3n y UV" }
  ] })} ` })}`, "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, { "title": "Renta de Luces Ne\xF3n y UV para Fiestas en CDMX", "subtitle": "Glow parties, XV a\xF1os tem\xE1ticos, eventos nocturnos. Accesorios fluorescentes incluidos. Desde $4,500 + IVA.", "introParagraph1": "Hay que aclarar algo: luz UV y ne\xF3n LED son dos cosas diferentes, aunque se usan juntas. La luz UV (blacklight) es invisible al ojo pero hace que todo lo blanco y fluorescente brille en la oscuridad: ropa blanca, pintura facial, pulseras ne\xF3n. El ne\xF3n LED son los letreros decorativos con frases, nombres o figuras. En <strong>REDEIL</strong> trabajamos con ambos. Para una glow party real necesitas las barras UV <strong>Chauvet</strong> o <strong>Elation</strong> cubriendo la pista, m\xE1s los accesorios fluorescentes para que los invitados brillen.", "introParagraph2": "Lo que hace funcionar una fiesta UV es la oscuridad. Si el sal\xF3n tiene ventanales sin cortinas o luces que no se pueden apagar, el efecto se pierde. Antes de confirmar, verificamos que tu venue se pueda oscurecer lo suficiente. En fiestas al aire libre, solo funciona bien despu\xE9s del atardecer. Los paquetes Glow Party incluyen pulseras, collares ne\xF3n y pintura facial fluorescente dermatol\xF3gicamente segura. Los paquetes Premium agregan letreros LED ne\xF3n personalizados con tu mensaje o nombre." })} ${renderComponent($$result2, "CtaBar", $$CtaBar, { "headline": "\xBFQu\xE9 tipo de fiesta ne\xF3n buscas?", "items": [
    { label: "Glow Party", href: "#paquetes", icon: "iluminacion" },
    { label: "Toda la iluminaci\xF3n", href: "/servicios/iluminacion/", icon: "iluminacion" },
    { label: "XV A\xF1os Ne\xF3n", href: "/eventos/xv-anos/", icon: "iluminacion" },
    { label: "Cotiza Gratis", href: "/contacto/", icon: "cotizar" }
  ] })}  ${maybeRenderHead()}<section class="services-section"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "\xBFC\xF3mo se ven las luces ne\xF3n en un evento real?", "subtitle": "Lo que brilla: ropa blanca, pintura facial, pulseras y cualquier cosa fluorescente.", "paragraph1": "Las fotos de una fiesta UV se ven bien, pero en persona el efecto es otro nivel. Las camisas blancas brillan azul el\xE9ctrico, la pintura facial parece que tiene luz propia, las pulseras ne\xF3n dejan estelas cuando la gente baila. Los invitados se toman fotos toda la noche porque se ven diferentes a como se ven normalmente.", "paragraph2": "Para XV a\xF1os, la quincea\xF1era y sus chambelanes con maquillaje fluorescente es tendencia. Para corporativos, funciona como din\xE1mica de team building con body paint UV." })} ${renderComponent($$result2, "Gallery4x4", $$Gallery4X4, { "images": [
    { src: "/img/luces-neon/renta-luces-neon-glow-party-celebracion-neon-300w.avif", alt: "Glow party con luces ne\xF3n UV en celebraci\xF3n" },
    { src: "/img/luces-neon/renta-luces-neon-fiesta-uv-maquillaje-neon-300w.avif", alt: "Fiesta UV con maquillaje ne\xF3n fluorescente" },
    { src: "/img/luces-neon/renta-luces-neon-glow-party-invitados-baile-300w.avif", alt: "Invitados bailando en glow party con luces UV" },
    { src: "/img/luces-neon/letrero-led-neon-fiestas.avif", alt: "Letrero LED ne\xF3n personalizado para fiesta" },
    { src: "/img/luces-neon/letrero-led-personalizado-fiestas.avif", alt: "Letrero ne\xF3n con mensaje personalizado para evento" },
    { src: "/img/luces-neon/letrero-luminoso-boda-romantica.avif", alt: "Letrero luminoso ne\xF3n para boda rom\xE1ntica" },
    { src: "/img/luces-neon/letrero-luminoso-xv-anos.avif", alt: "Letrero ne\xF3n para XV a\xF1os" },
    { src: "/img/luces-neon/letrero-neon-better-together-boda.avif", alt: "Letrero ne\xF3n Better Together para boda" },
    { src: "/img/luces-neon/letrero-neon-bienvenidos.avif", alt: "Letrero ne\xF3n de bienvenida para evento" },
    { src: "/img/luces-neon/letrero-neon-love-bodas.avif", alt: "Letrero ne\xF3n Love para decoraci\xF3n de boda" },
    { src: "/img/luces-neon/letrero-neon-hashtag-boda.avif", alt: "Letrero ne\xF3n con hashtag personalizado para boda" },
    { src: "/img/luces-neon/luces-neon-decoracion-fiestas.avif", alt: "Decoraci\xF3n ne\xF3n para fiestas tem\xE1ticas" },
    { src: "/img/luces-neon/luces-neon-para-bodas.avif", alt: "Luces ne\xF3n decorativas para bodas" },
    { src: "/img/luces-neon/neon-decorativo-bodas-cdmx.avif", alt: "Ne\xF3n decorativo para bodas en CDMX" },
    { src: "/img/luces-neon/neon-frases-personalizadas.avif", alt: "Frases personalizadas en ne\xF3n LED" },
    { src: "/img/luces-neon/letrero-neon-celebracion-cdmx.avif", alt: "Letrero ne\xF3n para celebraci\xF3n en CDMX" }
  ] })} </div> </section>  <section class="services-section services-alt" id="paquetes"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "\xBFCu\xE1nto cuesta rentar luces ne\xF3n en CDMX?", "subtitle": "4 experiencias seg\xFAn el tipo de fiesta. Instalaci\xF3n incluida en todos.", "paragraph1": "A diferencia de otros servicios, los paquetes de luces ne\xF3n se arman por tipo de experiencia \u2014 no por metros. Cada paquete incluye los equipos, accesorios y el montaje necesario para crear el efecto que buscas.", "paragraph2": "\xBFTu evento necesita algo \xFAnico? Armamos propuestas a la medida. Cotiza por WhatsApp y te dise\xF1amos la experiencia ne\xF3n perfecta." })} ${renderComponent($$result2, "PricingCards", $$PricingCards, { "packages": [
    {
      name: "UV B\xE1sico",
      price: "$4,500",
      priceNote: "+ IVA",
      description: "Kit de luz ultravioleta para la pista de baile. Transforma cualquier espacio oscuro en una experiencia fluorescente.",
      features: [
        { text: "4-6 barras UV LED profesionales", included: true },
        { text: "Cobertura pista de hasta 80m\xB2", included: true },
        { text: "Certificaci\xF3n DMX", included: true },
        { text: "Transporte + montaje + desmontaje", included: true },
        { text: "Ideal para: pista de baile, XV a\xF1os", included: true },
        { text: "Accesorios fluorescentes", included: false },
        { text: "Letreros ne\xF3n personalizados", included: false },
        { text: "Decoraci\xF3n tem\xE1tica UV", included: false }
      ],
      ctaLabel: "Ver paquete UV B\xE1sico",
      ctaHref: "/servicios/luces-neon/paquete-uv-basico/"
    },
    {
      name: "Glow Party",
      price: "$8,000",
      priceNote: "+ IVA",
      badge: "M\xE1s popular",
      highlight: true,
      description: "La experiencia glow completa. UV + accesorios fluorescentes para que todos brillen. El m\xE1s pedido para XV a\xF1os.",
      features: [
        { text: "8-12 barras UV LED profesionales", included: true },
        { text: "Cobertura hasta 150m\xB2", included: true },
        { text: "50 pulseras + 50 collares ne\xF3n", included: true },
        { text: "Pintura facial fluorescente (10 kits)", included: true },
        { text: "Transporte + montaje + desmontaje", included: true },
        { text: "Ideal para: glow party, XV a\xF1os, cumplea\xF1os", included: true },
        { text: "Letreros ne\xF3n personalizados", included: false },
        { text: "DJ incluido", included: false }
      ],
      ctaLabel: "Ver paquete Glow Party",
      ctaHref: "/servicios/luces-neon/paquete-glow-party/"
    },
    {
      name: "Ne\xF3n Premium",
      price: "$12,000",
      priceNote: "+ IVA",
      description: "UV completo + letreros LED ne\xF3n personalizados con tu mensaje. Para eventos que quieren ser \xFAnicos e irrepetibles.",
      features: [
        { text: "12+ barras UV LED profesionales", included: true },
        { text: "Cobertura hasta 200m\xB2", included: true },
        { text: "100 accesorios fluorescentes", included: true },
        { text: "2 letreros LED ne\xF3n personalizados", included: true },
        { text: "Pintura facial + body paint UV", included: true },
        { text: "Transporte + montaje + desmontaje", included: true },
        { text: "Ideal para: fiestas premium, corporativos tem\xE1ticos", included: true },
        { text: "DJ incluido", included: false }
      ],
      ctaLabel: "Ver paquete Ne\xF3n Premium",
      ctaHref: "/servicios/luces-neon/paquete-neon-premium/"
    },
    {
      name: "Producci\xF3n Ne\xF3n",
      price: "$18,000",
      priceNote: "+ IVA",
      description: "Producci\xF3n completa tem\xE1tica UV/ne\xF3n para eventos masivos. Todo incluido: luces, decoraci\xF3n, accesorios, DJ y efectos.",
      features: [
        { text: "20+ barras UV + ca\xF1ones de luz", included: true },
        { text: "Cobertura 300m\xB2+", included: true },
        { text: "200+ accesorios fluorescentes", included: true },
        { text: "3 letreros LED ne\xF3n personalizados", included: true },
        { text: "Decoraci\xF3n tem\xE1tica completa", included: true },
        { text: "L\xE1sers + humo esc\xE9nico", included: true },
        { text: "DJ para fiestas incluido", included: true },
        { text: "Ideal para: eventos masivos, festivales, corporativos", included: true }
      ],
      ctaLabel: "Ver producci\xF3n Ne\xF3n",
      ctaHref: "/servicios/luces-neon/paquete-produccion-neon/"
    }
  ] })} </div> </section>  <section class="faq-section"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Preguntas frecuentes sobre luces ne\xF3n y UV", "subtitle": "Todo lo que necesitas saber antes de tu fiesta ne\xF3n.", "paragraph1": "Si tienes otra duda, escr\xEDbenos por WhatsApp y te respondemos en minutos.", "paragraph2": "Cada fiesta ne\xF3n es diferente \u2014 te asesoramos sobre qu\xE9 paquete va mejor con tu evento." })} </div> ${renderComponent($$result2, "FaqSection", $$FaqSection, { "items": [
    { question: "\xBFQu\xE9 es una glow party y c\xF3mo funciona?", answer: "Una glow party es una fiesta tem\xE1tica donde se usa iluminaci\xF3n UV (luz negra) para que todo lo blanco y fluorescente brille en la oscuridad. Se complementa con pintura corporal ne\xF3n, pulseras luminosas, collares y decoraci\xF3n fluorescente. El efecto visual es espectacular y muy fotog\xE9nico." },
    { question: "\xBFLas luces UV son seguras para los invitados?", answer: "S\xED. Usamos luces UV LED de baja intensidad, seguras para la piel y los ojos. No son l\xE1mparas UV industriales. Son las mismas que se usan en parques de diversiones, discotecas y eventos tem\xE1ticos. La pintura facial que incluimos tambi\xE9n es dermatol\xF3gicamente segura." },
    { question: "\xBFQu\xE9 accesorios fluorescentes incluyen?", answer: "Depende del paquete. El Glow Party incluye 50 pulseras + 50 collares ne\xF3n + 10 kits de pintura facial. El Ne\xF3n Premium sube a 100 accesorios + body paint UV. La Producci\xF3n incluye 200+ accesorios + decoraci\xF3n tem\xE1tica completa." },
    { question: "\xBFSirve para XV a\xF1os?", answer: "Es uno de los usos m\xE1s populares. Los XV a\xF1os con tem\xE1tica ne\xF3n son tendencia \u2014 la festejada y sus chambelanes con maquillaje fluorescente, pista iluminada con UV, fotos espectaculares. El paquete Glow Party es el m\xE1s pedido para XV a\xF1os." },
    { question: "\xBFPuedo personalizar los letreros ne\xF3n?", answer: "S\xED. Los paquetes Ne\xF3n Premium y Producci\xF3n incluyen letreros LED ne\xF3n personalizados con el mensaje que quieras \u2014 nombres, frases, hashtags, logos. Se fabrican a medida y los montamos el d\xEDa del evento." },
    { question: "\xBFFunciona en espacios abiertos?", answer: "Las luces ne\xF3n y UV funcionan mejor en espacios con poca luz natural. En eventos al aire libre, recomendamos usarlas despu\xE9s del atardecer. Para eventos nocturnos de noche completa, el efecto es espectacular en cualquier espacio." }
  ] })} </section>  <section class="services-section services-alt"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "\xBFQu\xE9 otros servicios combinan con luces ne\xF3n?", "subtitle": "UV + DJ + humo es la combinaci\xF3n completa para glow parties.", "paragraph1": "La luz UV sola no hace la fiesta. Necesitas un DJ que maneje la energ\xEDa, y si agregas humo esc\xE9nico, la neblina brilla bajo la UV creando un efecto que se ve en persona mucho mejor que en fotos. Los clientes que mejor resultado obtienen combinan UV, DJ y al menos un efecto especial.", "paragraph2": "Precio especial cuando combinas luces UV/ne\xF3n con otros servicios." })} <div class="services-grid"> ${serviciosRelacionados.map((s) => renderTemplate`${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "title": s.title, "image": s.image, "alt": s.alt, "description": s.description, "link": s.link })}`)} </div> </div> </section>  <section class="cta-section"> <div class="container"> <div class="cta-content"> <h2>¿Listo para que tu fiesta brille en la oscuridad?</h2> <p>Cuéntanos el tipo de evento, cuántos invitados esperas y si quieres temática glow completa. Te diseñamos la experiencia neón perfecta.</p> <div class="cta-buttons"> <a href="/contacto/" class="btn btn-whatsapp btn-lg">Diseña tu Fiesta Neón</a> <a href="tel:+525530682988" class="btn btn-primary btn-lg">Llámanos — 55 3068 2988</a> </div> </div> </div> </section> ` })}`;
}, "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/pages/servicios/luces-neon.astro", void 0);

const $$file = "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/pages/servicios/luces-neon.astro";
const $$url = "/servicios/luces-neon";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$LucesNeon,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
