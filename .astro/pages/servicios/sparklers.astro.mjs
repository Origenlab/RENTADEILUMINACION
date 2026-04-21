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

const $$Sparklers = createComponent(($$result, $$props, $$slots) => {
  const title = "Renta de Bengalas Fr\xEDas CDMX | REDEIL \u2014 Sparklers para Eventos";
  const description = "Renta de bengalas fr\xEDas y sparklers en CDMX. Chispas sin calor, sin humo, sin riesgo. Para entrada de novios, XV a\xF1os y momentos especiales. Cotiza gratis.";
  const canonical = "https://rentadeiluminacion.com/servicios/sparklers/";
  const schemaMarkup = JSON.stringify([
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Renta de Bengalas Fr\xEDas y Sparklers CDMX",
      "provider": {
        "@type": "LocalBusiness",
        "name": "REDEIL",
        "url": "https://rentadeiluminacion.com",
        "telephone": "+525530682988",
        "address": { "@type": "PostalAddress", "addressLocality": "Ciudad de M\xE9xico", "addressRegion": "CDMX", "addressCountry": "MX" }
      },
      "description": "Renta de bengalas fr\xEDas y sparklers en CDMX. Efectos de chispas sin humo ni calor para entradas de novios, XV a\xF1os y lanzamientos de marca.",
      "areaServed": [
        { "@type": "City", "name": "Ciudad de M\xE9xico" },
        { "@type": "State", "name": "Estado de M\xE9xico" }
      ],
      "serviceType": "Renta de Bengalas Fr\xEDas",
      "priceRange": "$$"
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "\xBFLas bengalas fr\xEDas son seguras en interiores?", "acceptedAnswer": { "@type": "Answer", "text": "S\xED. Las bengalas fr\xEDas producen chispas a temperatura ambiente que no queman ni dejan residuo caliente. Son el \xFAnico efecto de chispas aprobado para interiores. No generan humo, no activan alarmas y no da\xF1an pisos, telas ni decoraci\xF3n." } },
        { "@type": "Question", "name": "\xBFCu\xE1nto duran las bengalas fr\xEDas?", "acceptedAnswer": { "@type": "Answer", "text": "El tiempo est\xE1ndar es 30 segundos por bengala. Hay versiones de 60 y 90 segundos seg\xFAn el paquete. Nuestro t\xE9cnico sincroniza la duraci\xF3n con la entrada de los novios o el momento que elijas para que el efecto ocurra exactamente durante el paso." } },
        { "@type": "Question", "name": "\xBFLas chispas de las bengalas fr\xEDas queman?", "acceptedAnswer": { "@type": "Answer", "text": "No. Las bengalas fr\xEDas (cold sparks) utilizan titanio granulado que produce chispas a temperatura ambiente. Son seguras al tacto y no queman piel, tela ni madera. Son el \xFAnico efecto pirot\xE9cnico aprobado para uso en interiores sin ventilaci\xF3n especial." } },
        { "@type": "Question", "name": "\xBFCu\xE1ntas bengalas necesito para mi evento?", "acceptedAnswer": { "@type": "Answer", "text": "Para un pasillo nupcial est\xE1ndar, 4 bengalas (2 por lado) crean el efecto cl\xE1sico. Para una entrada m\xE1s dram\xE1tica, 6 u 8 bengalas cubren un arco completo. Para escenarios en presentaciones de marca, desde 2 hasta 20 unidades seg\xFAn el tama\xF1o." } },
        { "@type": "Question", "name": "\xBFLas bengalas fr\xEDas necesitan permiso especial?", "acceptedAnswer": { "@type": "Answer", "text": "No requieren permiso de pirotecnia al ser un efecto fr\xEDo no explosivo. Sin embargo, recomendamos avisar al venue con anticipaci\xF3n ya que algunos salones tienen pol\xEDticas propias. Nosotros podemos acompa\xF1arlos con una nota t\xE9cnica del equipo si el venue lo requiere." } },
        { "@type": "Question", "name": "\xBFSe pueden combinar con CO2 o confeti?", "acceptedAnswer": { "@type": "Answer", "text": "S\xED, es la combinaci\xF3n m\xE1s solicitada para bodas de alto impacto. Bengalas fr\xEDas + CO2 en la entrada de novios, o bengalas + confeti durante el brindis. Nuestro equipo t\xE9cnico coordina todos los efectos de forma simult\xE1nea." } }
      ]
    }
  ]);
  const serviciosRelacionados = [
    { title: "M\xE1quina CO2", image: "/img/galeria/humo-bajo-01.avif", alt: "M\xE1quina de CO2 con vapor fr\xEDo en evento", description: "Combinados con bengalas fr\xEDas, los ca\xF1ones de CO2 crean el efecto de entrada m\xE1s impactante. Vapor y chispas al mismo tiempo.", link: "/servicios/co2/" },
    { title: "Confeti", image: "/img/confeti/confeti-dorado-boda-novios-fiesta.avif", alt: "Ca\xF1\xF3n de confeti dorado en boda", description: "Confeti + bengalas para el brindis. La lluvia de papel y chispas fr\xEDas es uno de los momentos m\xE1s fotografiados.", link: "/servicios/confeti/" },
    { title: "Humo Bajo", image: "/img/humo-bajo/efecto-nubes-piso-boda-jardin-400w.avif", alt: "Nubes de humo bajo en pista de baile", description: "Para el vals, bengalas fr\xEDas en el pasillo y humo bajo en la pista. La combinaci\xF3n perfecta para el primer baile.", link: "/servicios/humo-bajo/" },
    { title: "Seguidor de Luz", image: "/img/seguidor/renta-luz-seguidor-boda-primer-baile-hmi-1200w-300w.avif", alt: "Seguidor de luz en primer baile de novios", description: "Ilumina a los novios mientras caminan entre las bengalas. El spotlight que hace que la entrada luzca como producci\xF3n de TV.", link: "/servicios/seguidor/" }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "canonical": canonical, "schemaMarkup": schemaMarkup }, { "breadcrumbs": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "breadcrumbs" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Breadcrumbs", $$Breadcrumbs, { "items": [
    { label: "Inicio", href: "/" },
    { label: "Efectos Especiales", href: "/servicios/efectos-especiales/" },
    { label: "Bengalas Fr\xEDas" }
  ] })} ` })}`, "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, { "title": "Renta de Bengalas Fr\xEDas en CDMX", "subtitle": "Sparklers que producen lluvia de chispas fr\xEDas \u2014 sin calor, sin humo \u2014 para los momentos m\xE1s ic\xF3nicos de tu evento.", "whatsappText": "Hola,%20quiero%20cotizar%20bengalas%20fr%C3%ADas%20para%20mi%20evento", "introParagraph1": "Las bengalas fr\xEDas (cold sparks) son el efecto que hace que la entrada de novios o de quincea\xF1era se vea como una producci\xF3n de Hollywood. En <strong>REDEIL</strong> rentamos sparklers profesionales que producen columnas de chispas de 1 a 3 metros de altura sin calor real, sin humo t\xF3xico y sin activar alarmas de incendio. Por eso son el \xFAnico efecto de chispas aprobado para interiores \u2014 salones, hoteles, haciendas y cualquier espacio sin ventilaci\xF3n especial.", "introParagraph2": "Nuestro t\xE9cnico instala las bengalas en el pasillo o escenario y las detona de forma remota y sincronizada exactamente en el momento que defines. El efecto dura entre 30 y 90 segundos, tiempo perfecto para que los novios o la quincea\xF1era caminen entre las chispas mientras el fot\xF3grafo captura las im\xE1genes m\xE1s memorables de la noche. Disponible en CDMX y Estado de M\xE9xico con transporte e instalaci\xF3n incluidos." })} ${renderComponent($$result2, "CtaBar", $$CtaBar, { "headline": "\xBFPara qu\xE9 momento de tu evento?", "items": [
    { label: "CO2", href: "/servicios/co2/", icon: "efectos" },
    { label: "Confeti", href: "/servicios/confeti/", icon: "efectos" },
    { label: "Efectos Especiales", href: "/servicios/efectos-especiales/", icon: "efectos" },
    { label: "Cotiza Gratis", href: "/contacto/", icon: "cotizar" }
  ] })} ${maybeRenderHead()}<section class="services-section"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Bengalas fr\xEDas profesionales para el momento m\xE1s fotografiado", "subtitle": "Detonaci\xF3n remota, chispas seguras, coordinaci\xF3n con DJ y fot\xF3grafo.", "paragraph1": "La diferencia entre una bengala de mano y un sparkler profesional es enorme. Los equipos que usamos en REDEIL producen columnas de chispas uniformes de 1.5 a 3 metros de altura, con control de intensidad y duraci\xF3n. El t\xE9cnico las opera desde una consola inal\xE1mbrica para que el timing sea milim\xE9trico.", "paragraph2": "Usamos sparklers Showven y Sparkular \u2014 los mismos equipos que se ven en conciertos internacionales y producciones de TV. La diferencia entre lo que ves en Instagram y lo que obtienes con equipo de segunda mano es visible en cada foto." })} ${renderComponent($$result2, "Gallery4x4", $$Gallery4X4, { "images": [
    { src: "/img/galeria/confeti-01.avif", alt: "Bengalas fr\xEDas en pasillo de entrada de novios boda CDMX" },
    { src: "/img/galeria/confeti-02.avif", alt: "Sparklers profesionales en ceremonia de boda" },
    { src: "/img/galeria/confeti-03.avif", alt: "Cold sparks en entrada de quincea\xF1era sal\xF3n" },
    { src: "/img/galeria/confeti-04.avif", alt: "Bengalas fr\xEDas columnas de chispas boda hacienda" },
    { src: "/img/galeria/confeti-05.avif", alt: "Sparklers en evento corporativo lanzamiento de marca" },
    { src: "/img/galeria/confeti-06.avif", alt: "Bengalas fr\xEDas en XV a\xF1os vals con chambelanes" },
    { src: "/img/galeria/confeti-07.avif", alt: "Cold sparks efecto en pista de baile evento CDMX" },
    { src: "/img/galeria/confeti-08.avif", alt: "Sparklers profesionales en sal\xF3n de bodas CDMX" },
    { src: "/img/galeria/humo-bajo-01.avif", alt: "Bengalas fr\xEDas con CO2 entrada de novios combinada" },
    { src: "/img/galeria/humo-bajo-02.avif", alt: "Efecto cold sparks con vapor fr\xEDo en boda" },
    { src: "/img/galeria/humo-bajo-03.avif", alt: "Sparklers y humo bajo en primer baile boda" },
    { src: "/img/galeria/humo-bajo-04.avif", alt: "Bengalas fr\xEDas iluminadas con seguidor de luz" },
    { src: "/img/galeria/seguidor-01.avif", alt: "Entrada de novios entre bengalas fr\xEDas con spotlight" },
    { src: "/img/galeria/seguidor-02.avif", alt: "Quincea\xF1era entre sparklers con luz seguidor" },
    { src: "/img/galeria/seguidor-03.avif", alt: "Bengalas cold sparks con cabezas m\xF3viles en boda" },
    { src: "/img/galeria/seguidor-04.avif", alt: "Show de efectos especiales con sparklers CDMX" }
  ] })} </div> </section> <section class="services-section services-alt"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Paquetes de Bengalas Fr\xEDas para Eventos", "subtitle": "4 configuraciones desde 4 hasta 12 sparklers. Detonaci\xF3n remota en todos.", "paragraph1": "Todos los paquetes incluyen el equipo Sparkular o Showven, t\xE9cnico operador, detonador remoto inal\xE1mbrico, transporte, instalaci\xF3n y retiro. Sin costos adicionales.", "paragraph2": "\xBFQuieres combinarlo con CO2, confeti o seguidor de luz? Armamos un paquete de efectos con precio especial para el evento completo." })} ${renderComponent($$result2, "PricingCards", $$PricingCards, { "packages": [
    {
      name: "B\xE1sico \u2014 4 Sparklers",
      price: "$4,500",
      priceNote: "+ IVA",
      description: "4 bengalas fr\xEDas para el pasillo de entrada. Ideal para salones peque\xF1os y entradas est\xE1ndar de novios o quincea\xF1era.",
      features: [
        { text: "4 sparklers fr\xEDos profesionales", included: true },
        { text: "2 disparos de 30 seg. cada uno", included: true },
        { text: "T\xE9cnico operador incluido", included: true },
        { text: "Detonador remoto inal\xE1mbrico", included: true },
        { text: "Transporte + instalaci\xF3n + retiro", included: true },
        { text: "Coordinaci\xF3n con DJ/fot\xF3grafo", included: true },
        { text: "Chispas 1.5 m de altura", included: true },
        { text: "8+ sparklers simult\xE1neos", included: false }
      ],
      ctaLabel: "Cotizar paquete b\xE1sico",
      ctaHref: "/contacto/"
    },
    {
      name: "Est\xE1ndar \u2014 6 Sparklers",
      price: "$6,500",
      priceNote: "+ IVA",
      badge: "M\xE1s popular",
      highlight: true,
      description: "6 bengalas para pasillo completo. Cobertura total del ancho est\xE1ndar de entrada con chispas de 2 m de altura.",
      features: [
        { text: "6 sparklers fr\xEDos profesionales", included: true },
        { text: "3 disparos de 30 seg. cada uno", included: true },
        { text: "T\xE9cnico operador incluido", included: true },
        { text: "Detonador remoto inal\xE1mbrico", included: true },
        { text: "Transporte + instalaci\xF3n + retiro", included: true },
        { text: "Coordinaci\xF3n con DJ/fot\xF3grafo", included: true },
        { text: "Chispas 2 m de altura", included: true },
        { text: "Ideal: bodas y XV a\xF1os en salones", included: true }
      ],
      ctaLabel: "Cotizar paquete est\xE1ndar",
      ctaHref: "/contacto/"
    },
    {
      name: "Premium \u2014 8 Sparklers",
      price: "$8,500",
      priceNote: "+ IVA",
      description: "8 bengalas para venues grandes o escenarios. Cobertura completa con hasta 3 m de altura de chispas.",
      features: [
        { text: "8 sparklers fr\xEDos profesionales", included: true },
        { text: "4 disparos de 45 seg. cada uno", included: true },
        { text: "T\xE9cnico operador + asistente", included: true },
        { text: "Detonador remoto inal\xE1mbrico doble", included: true },
        { text: "Transporte + instalaci\xF3n + retiro", included: true },
        { text: "Chispas 2.5 m de altura", included: true },
        { text: "Ideal: haciendas, jardines grandes", included: true },
        { text: "Disparo simult\xE1neo o secuencial", included: true }
      ],
      ctaLabel: "Cotizar paquete premium",
      ctaHref: "/contacto/"
    },
    {
      name: "Total \u2014 12 Sparklers",
      price: "$12,000",
      priceNote: "+ IVA",
      description: "12 bengalas para el m\xE1ximo impacto. Arco completo, escenario o pasillo de doble fila con chispas de 3 m.",
      features: [
        { text: "12 sparklers fr\xEDos profesionales", included: true },
        { text: "Disparos m\xFAltiples sin l\xEDmite", included: true },
        { text: "Equipo t\xE9cnico completo", included: true },
        { text: "Detonador remoto profesional", included: true },
        { text: "Transporte + instalaci\xF3n + retiro", included: true },
        { text: "Chispas 3 m de altura", included: true },
        { text: "Ideal: bodas de lujo, producciones", included: true },
        { text: "Sincronizaci\xF3n beat-sync disponible", included: true }
      ],
      ctaLabel: "Cotizar paquete total",
      ctaHref: "/contacto/"
    }
  ] })} </div> </section> <section class="faq-section"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Preguntas sobre Bengalas Fr\xEDas", "subtitle": "Todo lo que necesitas saber antes de contratar sparklers para tu evento.", "paragraph1": "Si tu duda no est\xE1 aqu\xED, escr\xEDbenos por WhatsApp y te respondemos en minutos.", "paragraph2": "Las bengalas fr\xEDas son uno de nuestros efectos m\xE1s solicitados en CDMX. M\xE1s de 500 eventos con sparklers en los \xFAltimos a\xF1os." })} </div> ${renderComponent($$result2, "FaqSection", $$FaqSection, { "items": [
    { question: "\xBFLas bengalas fr\xEDas son seguras en interiores?", answer: "S\xED. Las bengalas fr\xEDas producen chispas a temperatura ambiente que no queman ni dejan residuo caliente. Son el \xFAnico efecto de chispas aprobado para interiores. No generan humo, no activan alarmas y no da\xF1an pisos, telas ni decoraci\xF3n." },
    { question: "\xBFCu\xE1nto duran las bengalas fr\xEDas?", answer: "El tiempo est\xE1ndar es 30 segundos por bengala. Hay versiones de 60 y 90 segundos seg\xFAn el paquete. Nuestro t\xE9cnico sincroniza la duraci\xF3n con la entrada de los novios o el momento que elijas para que el efecto ocurra exactamente durante el paso." },
    { question: "\xBFLas chispas de las bengalas fr\xEDas queman?", answer: "No. Las bengalas fr\xEDas (cold sparks) utilizan titanio granulado que produce chispas a temperatura ambiente. Son seguras al tacto y no queman piel, tela ni madera. Son el \xFAnico efecto pirot\xE9cnico aprobado para uso en interiores sin ventilaci\xF3n especial." },
    { question: "\xBFCu\xE1ntas bengalas necesito para mi evento?", answer: "Para un pasillo nupcial est\xE1ndar, 4 bengalas (2 por lado) crean el efecto cl\xE1sico. Para una entrada m\xE1s dram\xE1tica, 6 u 8 bengalas cubren un arco completo. Para escenarios en presentaciones de marca, desde 2 hasta 20 unidades seg\xFAn el tama\xF1o." },
    { question: "\xBFLas bengalas fr\xEDas necesitan permiso especial?", answer: "No requieren permiso de pirotecnia al ser un efecto fr\xEDo no explosivo. Sin embargo, recomendamos avisar al venue con anticipaci\xF3n ya que algunos salones tienen pol\xEDticas propias. Nosotros podemos acompa\xF1arlos con una nota t\xE9cnica del equipo si el venue lo requiere." },
    { question: "\xBFSe pueden combinar con CO2 o confeti?", answer: "S\xED, es la combinaci\xF3n m\xE1s solicitada para bodas de alto impacto. Bengalas fr\xEDas + CO2 en la entrada de novios, o bengalas + confeti durante el brindis. Nuestro equipo t\xE9cnico coordina todos los efectos de forma simult\xE1nea." }
  ] })} </section> <section class="services-section services-alt"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Combina con Otros Efectos", "subtitle": "Las bengalas fr\xEDas son m\xE1s impactantes en combinaci\xF3n.", "paragraph1": "El efecto m\xE1ximo se logra cuando las bengalas fr\xEDas forman parte de un paquete coordinado. CO2 + sparklers para la entrada, confeti + sparklers para el brindis. Nuestro equipo maneja todos los efectos en sincron\xEDa con el DJ.", "paragraph2": "Armamos propuestas de efectos completas para el evento entero con precio especial por paquete." })} <div class="services-grid"> ${serviciosRelacionados.map((s) => renderTemplate`${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "title": s.title, "image": s.image, "alt": s.alt, "description": s.description, "link": s.link })}`)} </div> </div> </section> <section class="cta-section"> <div class="container"> <div class="cta-content"> <h2>¿Listo para la entrada más impactante de tu evento?</h2> <p>Cuéntanos la fecha, el venue y cuántos metros tiene el pasillo. Te cotizamos el número exacto de sparklers que necesitas.</p> <div class="cta-buttons"> <a href="/contacto/" class="btn btn-whatsapp btn-lg">Cotiza por WhatsApp</a> <a href="tel:+525530682988" class="btn btn-primary btn-lg">Llámanos — 55 3068 2988</a> </div> </div> </div> </section> ` })}`;
}, "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/pages/servicios/sparklers.astro", void 0);

const $$file = "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/pages/servicios/sparklers.astro";
const $$url = "/servicios/sparklers";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Sparklers,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
