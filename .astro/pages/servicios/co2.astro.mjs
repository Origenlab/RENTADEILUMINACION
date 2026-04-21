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

const $$Co2 = createComponent(($$result, $$props, $$slots) => {
  const title = "Renta de M\xE1quina CO2 CDMX | REDEIL \u2014 Efectos Especiales para Eventos";
  const description = "Renta de m\xE1quinas de CO2 en CDMX. Chorros de vapor fr\xEDo para pistas de baile en bodas, XV a\xF1os y fiestas. Instalaci\xF3n incluida. Cotiza gratis.";
  const canonical = "https://rentadeiluminacion.com/servicios/co2/";
  const schemaMarkup = JSON.stringify([
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Renta de M\xE1quina CO2 para Eventos CDMX",
      "provider": {
        "@type": "LocalBusiness",
        "name": "REDEIL",
        "url": "https://rentadeiluminacion.com",
        "telephone": "+525530682988",
        "address": { "@type": "PostalAddress", "addressLocality": "Ciudad de M\xE9xico", "addressRegion": "CDMX", "addressCountry": "MX" }
      },
      "description": "Renta de m\xE1quinas de CO2 en CDMX. Chorros de vapor fr\xEDo para efectos especiales en pistas de baile de bodas, XV a\xF1os y fiestas.",
      "areaServed": [
        { "@type": "City", "name": "Ciudad de M\xE9xico" },
        { "@type": "State", "name": "Estado de M\xE9xico" }
      ],
      "serviceType": "Renta de M\xE1quina CO2",
      "priceRange": "$$"
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "\xBFLa m\xE1quina de CO2 es segura en interiores?", "acceptedAnswer": { "@type": "Answer", "text": "S\xED. El CO2 que utilizamos se dispersa r\xE1pidamente y no es t\xF3xico a las concentraciones que manejamos. Las m\xE1quinas son de uso profesional certificadas para eventos en salones, hoteles y haciendas cerradas. No generan humo real, solo vapor fr\xEDo que desaparece en segundos." } },
        { "@type": "Question", "name": "\xBFCu\xE1nto dura el efecto del CO2?", "acceptedAnswer": { "@type": "Answer", "text": "Cada r\xE1faga dura entre 10 y 30 segundos dependiendo de la presi\xF3n y el cilindro utilizado. Un cilindro est\xE1ndar permite 15\u201320 disparos de 20 segundos, suficiente para el primer baile, la entrada de novios y momentos especiales adicionales." } },
        { "@type": "Question", "name": "\xBFEl CO2 activa alarmas de incendio?", "acceptedAnswer": { "@type": "Answer", "text": "No. A diferencia del humo esc\xE9nico, el CO2 no activa detectores de humo. Por eso es ideal para salones con sistemas de alarma activos donde el humo convencional est\xE1 prohibido." } },
        { "@type": "Question", "name": "\xBFCu\xE1ndo se activa el efecto durante el evento?", "acceptedAnswer": { "@type": "Answer", "text": "Nuestro t\xE9cnico opera la m\xE1quina a control remoto y la activa exactamente en el momento que defines: la entrada de los novios, el inicio del vals, el brindis o cualquier momento especial. Coordinamos con el DJ y el fot\xF3grafo para el timing perfecto." } },
        { "@type": "Question", "name": "\xBFEl CO2 se puede combinar con otros efectos?", "acceptedAnswer": { "@type": "Answer", "text": "S\xED, es el efecto que mejor se combina con otros. Con humo bajo crea una niebla densa a nivel de piso. Con confeti en el mismo momento produce una explosi\xF3n visual espectacular. Con seguidor de luz el efecto es cinematogr\xE1fico. Armamos paquetes combinados con descuento." } },
        { "@type": "Question", "name": "\xBFCu\xE1nto cuesta la renta de m\xE1quina CO2 en CDMX?", "acceptedAnswer": { "@type": "Answer", "text": "Los paquetes de CO2 comienzan desde $3,500 + IVA para 2 ca\xF1ones con CO2 ilimitado durante el evento. El precio var\xEDa seg\xFAn la cantidad de ca\xF1ones, la duraci\xF3n del evento y si se combina con otros efectos. Cotiza por WhatsApp y te respondemos en minutos." } }
      ]
    }
  ]);
  const serviciosRelacionados = [
    { title: "Humo Bajo", image: "/img/humo-bajo/efecto-nubes-piso-boda-jardin-400w.avif", alt: "Humo bajo creando nube a nivel de piso en vals de boda", description: "La nube m\xE1gica a nivel de piso que todo mundo quiere para el vals. Se combina perfectamente con CO2 para un efecto de doble impacto.", link: "/servicios/humo-bajo/" },
    { title: "Confeti", image: "/img/confeti/confeti-dorado-boda-novios-fiesta.avif", alt: "Ca\xF1\xF3n de confeti dorado en celebraci\xF3n de boda", description: "Combinado con CO2 en el mismo instante, el resultado es espectacular. Confeti que sale disparado en una nube de vapor fr\xEDo.", link: "/servicios/confeti/" },
    { title: "Bengalas Fr\xEDas", image: "/img/galeria/confeti-01.avif", alt: "Bengalas fr\xEDas sparklers en evento", description: "Chispas fr\xEDas que duran m\xE1s que el CO2. Los dos efectos juntos para la entrada de novios m\xE1s impactante del a\xF1o.", link: "/servicios/sparklers/" },
    { title: "Cabezas M\xF3viles", image: "/img/cabezas-moviles/renta-cabezas-moviles-boda-beams-blancos-elegante-300w.avif", alt: "Cabezas m\xF3viles LED en boda elegante", description: "Show de luces que se sincroniza con el CO2. Cuando el vapor sube, las cabezas crean columnas de luz que lo atraviesan.", link: "/servicios/cabezas-moviles/" }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "canonical": canonical, "schemaMarkup": schemaMarkup }, { "breadcrumbs": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "breadcrumbs" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Breadcrumbs", $$Breadcrumbs, { "items": [
    { label: "Inicio", href: "/" },
    { label: "Efectos Especiales", href: "/servicios/efectos-especiales/" },
    { label: "M\xE1quina CO2" }
  ] })} ` })}`, "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, { "title": "Renta de M\xE1quina CO2 en CDMX", "subtitle": "Chorros de vapor fr\xEDo para pistas de baile. Sin humo real, sin calor, sin residuos. Operaci\xF3n profesional incluida.", "whatsappText": "Hola,%20quiero%20cotizar%20m%C3%A1quina%20CO2%20para%20mi%20evento", "introParagraph1": "Los ca\xF1ones de CO2 son el efecto especial que transforma la entrada de novios en un momento de pel\xEDcula. En <strong>REDEIL</strong> rentamos m\xE1quinas de CO2 profesionales que proyectan columnas de vapor fr\xEDo a presi\xF3n, creando una niebla espectacular que se dispersa r\xE1pidamente sin dejar residuo, sin mojar el piso y sin activar alarmas de incendio. Perfectas para cualquier espacio cerrado o abierto.", "introParagraph2": "Con m\xE1s de 30 a\xF1os de experiencia y m\xE1s de 3,000 eventos en CDMX y Estado de M\xE9xico, nuestro equipo t\xE9cnico opera las m\xE1quinas a control remoto en el momento exacto que defines: entrada de novios, primer vals, brindis o cualquier instante especial. El servicio incluye transporte, instalaci\xF3n, CO2 ilimitado durante el evento y retiro del equipo." })} ${renderComponent($$result2, "CtaBar", $$CtaBar, { "headline": "\xBFPara qu\xE9 momento de tu evento?", "items": [
    { label: "Humo Bajo", href: "/servicios/humo-bajo/", icon: "efectos" },
    { label: "Confeti", href: "/servicios/confeti/", icon: "efectos" },
    { label: "Efectos Especiales", href: "/servicios/efectos-especiales/", icon: "efectos" },
    { label: "Cotiza Gratis", href: "/contacto/", icon: "cotizar" }
  ] })} ${maybeRenderHead()}<section class="services-section"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "CO2 profesional para el momento m\xE1s impactante de tu evento", "subtitle": "Control remoto, operador incluido, CO2 ilimitado durante el evento.", "paragraph1": "A diferencia del humo esc\xE9nico convencional, el CO2 crea una columna de vapor fr\xEDo y limpio que sube verticalmente y se disipa en segundos. El efecto visual es impactante: un chorro blanco que ilumina perfectamente con cualquier luz de colores. Por eso es el favorito de fot\xF3grafos y vide\xF3grafos.", "paragraph2": "Rentamos desde 2 hasta 8 ca\xF1ones simult\xE1neos para crear una cortina completa detr\xE1s de los novios o en ambos lados del pasillo de entrada. El n\xFAmero de ca\xF1ones depende del ancho del espacio y la intensidad del efecto que quieras lograr. Te asesoramos sin costo." })} ${renderComponent($$result2, "Gallery4x4", $$Gallery4X4, { "images": [
    { src: "/img/galeria/humo-bajo-01.avif", alt: "Efecto de vapor CO2 en pista de baile de boda" },
    { src: "/img/galeria/humo-bajo-02.avif", alt: "Ca\xF1\xF3n de CO2 en entrada de novios con vapor fr\xEDo" },
    { src: "/img/galeria/humo-bajo-03.avif", alt: "M\xE1quina CO2 creando efecto espectacular en sal\xF3n" },
    { src: "/img/galeria/humo-bajo-04.avif", alt: "Vapor CO2 iluminado con luces de color en fiesta" },
    { src: "/img/galeria/humo-bajo-05.avif", alt: "Efecto CO2 en primer vals de boda en hacienda" },
    { src: "/img/galeria/humo-bajo-06.avif", alt: "Columna de CO2 en XV a\xF1os entrada de quincea\xF1era" },
    { src: "/img/galeria/humo-bajo-07.avif", alt: "Ca\xF1ones CO2 en ambos lados del pasillo nupcial" },
    { src: "/img/galeria/humo-bajo-08.avif", alt: "Efecto vapor fr\xEDo CO2 con iluminaci\xF3n de colores" },
    { src: "/img/galeria/humo-01.avif", alt: "Show de efectos especiales con CO2 en evento" },
    { src: "/img/galeria/humo-02.avif", alt: "CO2 profesional operado a control remoto en boda" },
    { src: "/img/galeria/humo-03.avif", alt: "Efecto especial CO2 en sal\xF3n de eventos CDMX" },
    { src: "/img/galeria/humo-04.avif", alt: "Vapor CO2 en pista de baile de fiesta de XV a\xF1os" },
    { src: "/img/galeria/humo-05.avif", alt: "Columna de CO2 captada por fot\xF3grafo de boda" },
    { src: "/img/galeria/humo-06.avif", alt: "CO2 combinado con luces LED en evento especial" },
    { src: "/img/galeria/humo-07.avif", alt: "Efecto CO2 en brindis de aniversario en CDMX" },
    { src: "/img/galeria/humo-08.avif", alt: "M\xE1quina CO2 profesional en hacienda de evento" }
  ] })} </div> </section> <section class="services-section services-alt"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Paquetes de CO2 para Eventos", "subtitle": "4 configuraciones desde 2 hasta 8 ca\xF1ones. CO2 ilimitado en todos.", "paragraph1": "Todos los paquetes incluyen el equipo, CO2 ilimitado durante el evento, t\xE9cnico operador a control remoto, transporte, instalaci\xF3n y retiro. Sin costos ocultos.", "paragraph2": "\xBFQuieres combinarlo con humo bajo, confeti o bengalas fr\xEDas? Te armamos un paquete de efectos especiales con precio especial." })} ${renderComponent($$result2, "PricingCards", $$PricingCards, { "packages": [
    {
      name: "B\xE1sico \u2014 2 Ca\xF1ones",
      price: "$3,500",
      priceNote: "+ IVA",
      description: "2 ca\xF1ones CO2 para momentos espec\xEDficos: entrada de novios o primer vals. Ideal para salones de hasta 150 personas.",
      features: [
        { text: "2 ca\xF1ones de CO2 profesionales", included: true },
        { text: "CO2 ilimitado durante el evento", included: true },
        { text: "T\xE9cnico operador incluido", included: true },
        { text: "Control remoto inal\xE1mbrico", included: true },
        { text: "Transporte + instalaci\xF3n + retiro", included: true },
        { text: "3\u20135 disparos disponibles", included: true },
        { text: "4+ ca\xF1ones simult\xE1neos", included: false },
        { text: "Cortina completa 360\xB0", included: false }
      ],
      ctaLabel: "Cotizar paquete b\xE1sico",
      ctaHref: "/contacto/"
    },
    {
      name: "Est\xE1ndar \u2014 4 Ca\xF1ones",
      price: "$5,500",
      priceNote: "+ IVA",
      badge: "M\xE1s popular",
      highlight: true,
      description: "4 ca\xF1ones para el efecto completo en el primer baile y la entrada. Cubre el ancho est\xE1ndar de la pista de baile.",
      features: [
        { text: "4 ca\xF1ones de CO2 profesionales", included: true },
        { text: "CO2 ilimitado durante el evento", included: true },
        { text: "T\xE9cnico operador + asistente", included: true },
        { text: "Control remoto inal\xE1mbrico", included: true },
        { text: "Transporte + instalaci\xF3n + retiro", included: true },
        { text: "8\u201310 disparos disponibles", included: true },
        { text: "Ideal: bodas, XV a\xF1os, haciendas", included: true },
        { text: "Cortina completa 360\xB0", included: false }
      ],
      ctaLabel: "Cotizar paquete est\xE1ndar",
      ctaHref: "/contacto/"
    },
    {
      name: "Premium \u2014 6 Ca\xF1ones",
      price: "$7,500",
      priceNote: "+ IVA",
      description: "6 ca\xF1ones para venues grandes y efectos m\xFAltiples. Cobertura total de la pista de baile con impacto visual m\xE1ximo.",
      features: [
        { text: "6 ca\xF1ones de CO2 profesionales", included: true },
        { text: "CO2 ilimitado durante el evento", included: true },
        { text: "2 t\xE9cnicos operadores", included: true },
        { text: "Control remoto inal\xE1mbrico doble", included: true },
        { text: "Transporte + instalaci\xF3n + retiro", included: true },
        { text: "15+ disparos disponibles", included: true },
        { text: "Ideal: jardines y salones grandes", included: true },
        { text: "Coordinaci\xF3n con DJ incluida", included: true }
      ],
      ctaLabel: "Cotizar paquete premium",
      ctaHref: "/contacto/"
    },
    {
      name: "Total \u2014 8 Ca\xF1ones",
      price: "$10,000",
      priceNote: "+ IVA",
      description: "8 ca\xF1ones para efectos de producci\xF3n completa. La opci\xF3n m\xE1s espectacular para eventos de alto impacto.",
      features: [
        { text: "8 ca\xF1ones de CO2 profesionales", included: true },
        { text: "CO2 ilimitado durante el evento", included: true },
        { text: "Equipo t\xE9cnico completo", included: true },
        { text: "Control remoto inal\xE1mbrico", included: true },
        { text: "Transporte + instalaci\xF3n + retiro", included: true },
        { text: "Disparos ilimitados coordinados", included: true },
        { text: "Sincronizaci\xF3n con m\xFAsica en vivo", included: true },
        { text: "Ideal: bodas de lujo, galas, TV", included: true }
      ],
      ctaLabel: "Cotizar paquete total",
      ctaHref: "/contacto/"
    }
  ] })} </div> </section> <section class="faq-section"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Preguntas sobre Renta de M\xE1quina CO2", "subtitle": "Todo lo que necesitas saber antes de contratar.", "paragraph1": "Si tu duda no est\xE1 aqu\xED, escr\xEDbenos por WhatsApp y te respondemos en minutos.", "paragraph2": "M\xE1s de 3,000 eventos nos avalan. El CO2 es uno de los efectos m\xE1s solicitados para bodas y XV a\xF1os en CDMX." })} </div> ${renderComponent($$result2, "FaqSection", $$FaqSection, { "items": [
    { question: "\xBFLa m\xE1quina de CO2 es segura en interiores?", answer: "S\xED. El CO2 que utilizamos se dispersa r\xE1pidamente y no es t\xF3xico a las concentraciones que manejamos. Las m\xE1quinas son de uso profesional certificadas para eventos en salones, hoteles y haciendas cerradas. No generan humo real, solo vapor fr\xEDo que desaparece en segundos." },
    { question: "\xBFCu\xE1nto dura el efecto del CO2?", answer: "Cada r\xE1faga dura entre 10 y 30 segundos dependiendo de la presi\xF3n y el cilindro utilizado. Un cilindro est\xE1ndar permite 15\u201320 disparos de 20 segundos, suficiente para el primer baile, la entrada de novios y momentos especiales adicionales." },
    { question: "\xBFEl CO2 activa alarmas de incendio?", answer: "No. A diferencia del humo esc\xE9nico, el CO2 no activa detectores de humo. Por eso es ideal para salones con sistemas de alarma activos donde el humo convencional est\xE1 prohibido." },
    { question: "\xBFCu\xE1ndo se activa el efecto durante el evento?", answer: "Nuestro t\xE9cnico opera la m\xE1quina a control remoto y la activa exactamente en el momento que defines: la entrada de los novios, el inicio del vals, el brindis o cualquier momento especial. Coordinamos con el DJ y el fot\xF3grafo para el timing perfecto." },
    { question: "\xBFEl CO2 se puede combinar con otros efectos?", answer: "S\xED, es el efecto que mejor se combina con otros. Con humo bajo crea una niebla densa a nivel de piso. Con confeti en el mismo momento produce una explosi\xF3n visual espectacular. Con seguidor de luz el efecto es cinematogr\xE1fico. Armamos paquetes combinados con descuento." },
    { question: "\xBFCu\xE1nto cuesta la renta de m\xE1quina CO2 en CDMX?", answer: "Los paquetes de CO2 comienzan desde $3,500 + IVA para 2 ca\xF1ones con CO2 ilimitado durante el evento. El precio var\xEDa seg\xFAn la cantidad de ca\xF1ones, la duraci\xF3n del evento y si se combina con otros efectos. Cotiza por WhatsApp y te respondemos en minutos." }
  ] })} </section> <section class="services-section services-alt"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Combina CO2 con Otros Efectos", "subtitle": "El CO2 solo es impresionante. Combinado es memorable.", "paragraph1": "El CO2 funciona mejor cuando forma parte de un paquete de efectos coordinados. Humo bajo + CO2 para el vals, confeti + CO2 para el brindis, bengalas + CO2 para la entrada. Armamos la combinaci\xF3n perfecta para cada momento de tu evento.", "paragraph2": "Todos nuestros efectos especiales se operan de forma coordinada por un equipo t\xE9cnico que trabaja en sincron\xEDa con el DJ." })} <div class="services-grid"> ${serviciosRelacionados.map((s) => renderTemplate`${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "title": s.title, "image": s.image, "alt": s.alt, "description": s.description, "link": s.link })}`)} </div> </div> </section> <section class="cta-section"> <div class="container"> <div class="cta-content"> <h2>¿Listo para el efecto más impactante de tu evento?</h2> <p>Cuéntanos la fecha, el venue y qué momentos quieres destacar con CO2. Te cotizamos en minutos.</p> <div class="cta-buttons"> <a href="/contacto/" class="btn btn-whatsapp btn-lg">Cotiza por WhatsApp</a> <a href="tel:+525530682988" class="btn btn-primary btn-lg">Llámanos — 55 3068 2988</a> </div> </div> </div> </section> ` })}`;
}, "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/pages/servicios/co2.astro", void 0);

const $$file = "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/pages/servicios/co2.astro";
const $$url = "/servicios/co2";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Co2,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
