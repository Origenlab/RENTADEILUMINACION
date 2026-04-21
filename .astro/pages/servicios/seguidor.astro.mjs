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

const $$Seguidor = createComponent(($$result, $$props, $$slots) => {
  const title = "Renta de Seguidor de Luz para Bodas y Eventos CDMX | REDEIL";
  const description = "Follow spot profesional para el vals, brindis y entrada de novios. Operador t\xE9cnico incluido. Bodas, XV a\xF1os y galas en CDMX. Desde $3,000 + IVA.";
  const canonical = "https://rentadeiluminacion.com/servicios/seguidor/";
  const schemaMarkup = JSON.stringify([
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Renta de Seguidor de Luz para Eventos",
      "provider": {
        "@type": "LocalBusiness",
        "name": "REDEIL",
        "url": "https://rentadeiluminacion.com",
        "telephone": "+525530682988",
        "address": { "@type": "PostalAddress", "addressLocality": "Ciudad de M\xE9xico", "addressRegion": "CDMX", "addressCountry": "MX" }
      },
      "description": "Servicio profesional de renta de seguidor de luz (follow spot) para bodas, XV a\xF1os y eventos en CDMX. Spotlight que sigue al protagonista del momento.",
      "areaServed": [
        { "@type": "City", "name": "Ciudad de M\xE9xico" },
        { "@type": "State", "name": "Estado de M\xE9xico" }
      ],
      "serviceType": "Renta de Seguidor de Luz",
      "priceRange": "$$"
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "\xBFPara qu\xE9 momentos se usa el seguidor?", "acceptedAnswer": { "@type": "Answer", "text": "Los momentos m\xE1s comunes: el vals de los novios, la entrada triunfal, el brindis, el corte de pastel, el baile de la quincea\xF1era con sus chambelanes, y discursos en galas corporativas. Cualquier momento donde quieras que una persona sea el centro de atenci\xF3n." } },
        { "@type": "Question", "name": "\xBFViene con operador?", "acceptedAnswer": { "@type": "Answer", "text": "S\xED, siempre. El seguidor requiere un operador profesional que lo maneje en tiempo real \u2014 siguiendo los movimientos de la persona focal con precisi\xF3n. Todos nuestros paquetes incluyen operador t\xE9cnico." } },
        { "@type": "Question", "name": "\xBFSe puede cambiar el color de la luz?", "acceptedAnswer": { "@type": "Answer", "text": "S\xED. Nuestros seguidores tienen geles de color intercambiables e iris para ajustar el tama\xF1o del haz. El operador puede cambiar de blanco c\xE1lido a rosa, azul o cualquier color seg\xFAn el momento." } },
        { "@type": "Question", "name": "\xBFCu\xE1nto cuesta la renta del seguidor?", "acceptedAnswer": { "@type": "Answer", "text": "Un seguidor con operador para un momento espec\xEDfico (vals, brindis) arranca desde $3,000 + IVA. Para cobertura de toda la recepci\xF3n (4 horas), desde $5,000 + IVA." } },
        { "@type": "Question", "name": "\xBFEl seguidor sirve para teatro y conferencias?", "acceptedAnswer": { "@type": "Answer", "text": "S\xED. El follow spot es el equipo est\xE1ndar para teatro, conferencias de gala, presentaciones ejecutivas y graduaciones. Ilumina al orador o conferencista manteni\xE9ndolo siempre visible para toda la audiencia." } },
        { "@type": "Question", "name": "\xBFCu\xE1nto tiempo antes llega el operador?", "acceptedAnswer": { "@type": "Answer", "text": "El operador llega 1-2 horas antes del evento para montar el equipo, hacer la prueba de enfoque y coordinar con el DJ y el maestro de ceremonias. Necesita saber exactamente qu\xE9 canci\xF3n es el vals y recibir una se\xF1al 30 segundos antes para activar el efecto en el momento perfecto." } }
      ]
    }
  ]);
  const serviciosRelacionados = [
    { title: "Guirnaldas Edison", image: "/img/guirnaldas/renta-guirnaldas-edison-terraza-recepcion-02-300w.avif", alt: "Guirnaldas Edison en terraza", description: "Guirnaldas c\xE1lidas ambientando el jard\xEDn + spotlight siguiendo a los novios en el vals. La boda so\xF1ada.", link: "/servicios/guirnaldas/" },
    { title: "Gobos", image: "/img/gobos/renta-gobo-monograma-pista-baile-300w.avif", alt: "Gobo con monograma en pista", description: "Los nombres proyectados en la pista + el spotlight que sigue a los novios bailando sobre su monograma. \xC9pico.", link: "/servicios/gobos/" },
    { title: "Cascadas LED", image: "/img/cascadas-led/cascadas-led-novios-mesa-romantica-boda-300w.avif", alt: "Cascadas LED mesa de novios", description: "El seguidor ilumina a los novios mientras bailan con las cascadas LED de fondo. La foto de boda perfecta.", link: "/servicios/cascadas-led/" },
    { title: "Iluminaci\xF3n Arquitect\xF3nica", image: "/img/iluminacion-arquitectonica/iluminacion-arquitectonica-arcos-coloniales-luz-violeta-fachada-300w.avif", alt: "Uplighting en hacienda", description: "Columnas iluminadas como escenario + spotlight siguiendo a los protagonistas. Teatro en tu boda.", link: "/servicios/iluminacion-arquitectonica/" }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "canonical": canonical, "schemaMarkup": schemaMarkup }, { "breadcrumbs": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "breadcrumbs" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Breadcrumbs", $$Breadcrumbs, { "items": [
    { label: "Inicio", href: "/" },
    { label: "Iluminaci\xF3n", href: "/servicios/iluminacion/" },
    { label: "Seguidor" }
  ] })} ` })}`, "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, { "title": "Renta de Seguidor de Luz para Bodas y Eventos en CDMX", "subtitle": "Spotlight profesional que sigue a los novios en el vals, a la quincea\xF1era en su baile, al orador en su discurso. Operador incluido. Desde $3,000 + IVA.", "introParagraph1": "El seguidor de luz \u2014 o follow spot \u2014 es el servicio que convierte un momento en EL momento. Cuando las luces del sal\xF3n bajan y un c\xEDrculo de luz blanca sigue a los novios mientras caminan hacia la pista de baile, el efecto es cinematogr\xE1fico. En <strong>REDEIL</strong> operamos follow spots profesionales <strong>Robert Juliat</strong> y <strong>Strong Super Trouper</strong> de 575W a 2500W \u2014 los mismos que se usan en teatro, conciertos y programas de televisi\xF3n.", "introParagraph2": "Cada seguidor viene con un operador profesional que controla la intensidad, el color (con geles intercambiables), el tama\xF1o del haz (con iris) y el movimiento \u2014 siguiendo al protagonista del momento con precisi\xF3n milim\xE9trica. Es el servicio que m\xE1s emociona en las bodas: el vals iluminado con un spotlight, la entrada de los novios al sal\xF3n, el brindis del padre de la novia, el baile de la quincea\xF1era con sus chambelanes. Atendemos bodas, XV a\xF1os, galas y conferencias en toda la CDMX y Estado de M\xE9xico." })} ${renderComponent($$result2, "CtaBar", $$CtaBar, { "headline": "\xBFPara qu\xE9 momento necesitas el seguidor?", "items": [
    { label: "Vals de Novios", href: "#paquetes", icon: "iluminacion" },
    { label: "Toda la iluminaci\xF3n", href: "/servicios/iluminacion/", icon: "iluminacion" },
    { label: "XV A\xF1os", href: "/eventos/xv-anos/", icon: "iluminacion" },
    { label: "Cotiza Gratis", href: "/contacto/", icon: "cotizar" }
  ] })}  ${maybeRenderHead()}<section class="services-section"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "\xBFC\xF3mo se ve el seguidor de luz en un evento real?", "subtitle": "Vals, brindis, entrada triunfal \u2014 el seguidor crea protagonistas.", "paragraph1": "Hay algo que pasa cuando un spotlight te encuentra en la oscuridad: el mundo se detiene y todo el sal\xF3n mira hacia ti. Los novios lo sienten en el vals, la quincea\xF1era lo siente en su baile, el CEO lo siente en su discurso. El seguidor no es solo luz \u2014 es atenci\xF3n concentrada, emoci\xF3n amplificada.", "paragraph2": "Nuestros operadores son t\xE9cnicos con experiencia en teatro y televisi\xF3n. Siguen cada paso, cada giro, cada movimiento con precisi\xF3n. El resultado: un momento iluminado que se graba en la memoria de todos los invitados." })} ${renderComponent($$result2, "Gallery4x4", $$Gallery4X4, { "images": [
    { src: "/img/seguidor/luz-seguidor-boda-baile-novios-salon-candil.avif", alt: "Seguidor iluminando baile de novios en sal\xF3n con candil" },
    { src: "/img/seguidor/luz-seguidor-boda-novios-baile-vestido-rosa.avif", alt: "Novios bailando vals con spotlight de seguidor" },
    { src: "/img/seguidor/luz-seguidor-boda-entrada-novios-confeti-puerta.avif", alt: "Entrada de novios con confeti y seguidor de luz" },
    { src: "/img/seguidor/luz-seguidor-boda-pastel-novios-salon-azul.avif", alt: "Corte de pastel iluminado con seguidor en sal\xF3n azul" },
    { src: "/img/seguidor/luz-seguidor-quincea\xF1era-vals-chambelan-vestido-rosa.avif", alt: "Quincea\xF1era bailando vals con chambel\xE1n iluminada con seguidor" },
    { src: "/img/seguidor/luz-seguidor-quincea\xF1era-vestido-azul-salon-candelabros.avif", alt: "Quincea\xF1era con vestido azul en sal\xF3n con candelabros" },
    { src: "/img/seguidor/luz-seguidor-boda-salon-candelabros-baile-novios.avif", alt: "Baile de novios en sal\xF3n elegante con candelabros" },
    { src: "/img/seguidor/luz-seguidor-concierto-cantante-microfono-vintage.avif", alt: "Cantante en concierto iluminado con seguidor" },
    { src: "/img/seguidor/luz-seguidor-conferencia-ponente-escenario-gala.avif", alt: "Ponente en escenario de gala con spotlight seguidor" },
    { src: "/img/seguidor/luz-seguidor-gala-brindis-operador-candil.avif", alt: "Brindis en gala iluminado con seguidor" },
    { src: "/img/seguidor/luz-seguidor-graduacion-diploma-universidad.avif", alt: "Graduaci\xF3n universitaria con seguidor en entrega de diploma" },
    { src: "/img/seguidor/luz-seguidor-teatro-actor-escenario-monologo.avif", alt: "Actor en mon\xF3logo de teatro iluminado con seguidor" },
    { src: "/img/seguidor/seguidor-primer-baile-boda-vestido-rosa-luz-morada.avif", alt: "Primer baile con vestido rosa y luz morada del seguidor" },
    { src: "/img/seguidor/seguidor-vals-xv-anos-quincea\xF1era.avif", alt: "Vals de XV a\xF1os con quincea\xF1era iluminada" },
    { src: "/img/seguidor/equipo-seguidor-boda-tecnicos-filtros-color.avif", alt: "Equipo de seguidor con t\xE9cnicos y filtros de color" },
    { src: "/img/seguidor/luz-seguidor-quincea\xF1era-vestido-azul-tiara-salon.avif", alt: "Quincea\xF1era con tiara y vestido azul iluminada con seguidor" }
  ] })} </div> </section>  <section class="services-section services-alt" id="paquetes"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "\xBFCu\xE1nto cuesta rentar un seguidor de luz en CDMX?", "subtitle": "4 opciones seg\xFAn los momentos que quieras iluminar. Operador incluido.", "paragraph1": "Cada paquete incluye el follow spot profesional, operador t\xE9cnico, geles de color, tripie de altura profesional, montaje y desmontaje. El operador se coordina con el DJ o maestro de ceremonias para saber exactamente cu\xE1ndo encender y a qui\xE9n seguir.", "paragraph2": "\xBFTu evento tiene momentos especiales que quieres destacar? Cu\xE9ntanos y te armamos la cobertura perfecta." })} ${renderComponent($$result2, "PricingCards", $$PricingCards, { "packages": [
    {
      name: "B\xE1sico \u2014 1 Momento",
      price: "$3,000",
      priceNote: "+ IVA",
      description: "Un follow spot para el momento estelar: el vals, la entrada o el brindis. Una hora de operaci\xF3n.",
      features: [
        { text: "1 seguidor profesional 575W", included: true },
        { text: "Operador t\xE9cnico incluido", included: true },
        { text: "Geles de color intercambiables", included: true },
        { text: "Transporte + montaje + desmontaje", included: true },
        { text: "1 hora de operaci\xF3n", included: true },
        { text: "Ideal para: vals, entrada, brindis", included: true },
        { text: "Cobertura de toda la recepci\xF3n", included: false },
        { text: "Iris para ajuste de tama\xF1o", included: false }
      ],
      ctaLabel: "Cotizar 1 momento",
      ctaHref: "/servicios/seguidor/paquete-momento-estelar/"
    },
    {
      name: "Est\xE1ndar \u2014 Recepci\xF3n Completa",
      price: "$5,000",
      priceNote: "+ IVA",
      badge: "M\xE1s popular",
      highlight: true,
      description: "Follow spot durante toda la recepci\xF3n (4 horas). Vals, brindis, pastel, ramo, liga \u2014 todos los momentos cubiertos.",
      features: [
        { text: "1 seguidor profesional 1200W", included: true },
        { text: "Operador t\xE9cnico incluido", included: true },
        { text: "Geles de color + iris ajustable", included: true },
        { text: "Transporte + montaje + desmontaje", included: true },
        { text: "4 horas de operaci\xF3n continua", included: true },
        { text: "Coordinaci\xF3n con DJ/MC", included: true },
        { text: "Ideal para: bodas completas, XV a\xF1os", included: true },
        { text: "Segundo seguidor", included: false }
      ],
      ctaLabel: "Cotizar recepci\xF3n completa",
      ctaHref: "/servicios/seguidor/paquete-recepcion-completa/"
    },
    {
      name: "Premium \u2014 2 Seguidores",
      price: "$8,500",
      priceNote: "+ IVA",
      description: "Dos \xE1ngulos de luz simult\xE1neos. El efecto de teatro y televisi\xF3n \u2014 dos spotlights cruzados sobre el protagonista.",
      features: [
        { text: "2 seguidores profesionales", included: true },
        { text: "2 operadores t\xE9cnicos", included: true },
        { text: "Geles de color + iris en ambos", included: true },
        { text: "Transporte + montaje + desmontaje", included: true },
        { text: "Iluminaci\xF3n cruzada de 2 \xE1ngulos", included: true },
        { text: "Coordinaci\xF3n con DJ/MC", included: true },
        { text: "Ideal para: galas, teatro, shows", included: true },
        { text: "4 horas de operaci\xF3n continua", included: true }
      ],
      ctaLabel: "Cotizar 2 seguidores",
      ctaHref: "/servicios/seguidor/paquete-2-seguidores/"
    },
    {
      name: "Producci\xF3n \u2014 4+ Seguidores",
      price: "$15,000",
      priceNote: "+ IVA",
      description: "Producci\xF3n completa para conciertos, festivales y eventos con m\xFAltiples protagonistas simult\xE1neos.",
      features: [
        { text: "4+ seguidores de alta potencia", included: true },
        { text: "Equipo de operadores", included: true },
        { text: "Cobertura de m\xFAltiples artistas", included: true },
        { text: "Geles, iris y efectos especiales", included: true },
        { text: "Coordinaci\xF3n con direcci\xF3n de escena", included: true },
        { text: "Plataformas de operaci\xF3n elevadas", included: true },
        { text: "Log\xEDstica completa", included: true },
        { text: "Ideal para: conciertos, TV, producciones", included: true }
      ],
      ctaLabel: "Cotizar producci\xF3n",
      ctaHref: "/servicios/seguidor/paquete-produccion/"
    }
  ] })} </div> </section>  <section class="faq-section"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Preguntas frecuentes sobre seguidor de luz", "subtitle": "Todo lo que necesitas saber sobre el spotlight profesional.", "paragraph1": "Si tienes otra duda, escr\xEDbenos por WhatsApp y te respondemos en minutos.", "paragraph2": "Cada evento tiene sus momentos especiales \u2014 te ayudamos a elegir cu\xE1les iluminar." })} </div> ${renderComponent($$result2, "FaqSection", $$FaqSection, { "items": [
    { question: "\xBFEn qu\xE9 momentos se usa el seguidor en una boda?", answer: "Los momentos m\xE1s comunes: la entrada de los novios al sal\xF3n, el primer vals, el brindis del padre de la novia, el corte de pastel, el lanzamiento del ramo y la liga. El paquete Est\xE1ndar cubre todos estos momentos durante 4 horas \u2014 el operador se coordina con el DJ para saber cu\xE1ndo encender." },
    { question: "\xBFEl operador viene incluido?", answer: "S\xED, siempre. El seguidor es un equipo que se opera manualmente \u2014 requiere un t\xE9cnico profesional que siga los movimientos de la persona con precisi\xF3n. Nuestros operadores tienen experiencia en teatro, televisi\xF3n y eventos de gala. Todos los paquetes incluyen operador." },
    { question: "\xBFSe puede cambiar el color de la luz?", answer: "S\xED. Nuestros seguidores tienen geles de color intercambiables (blanco, rosa, azul, \xE1mbar, etc.) e iris para ajustar el tama\xF1o del haz. El operador puede cambiar de blanco c\xE1lido en la ceremonia a rosa durante el vals o azul para el baile \u2014 seg\xFAn lo que quieras." },
    { question: "\xBFSe ve bien en salones grandes?", answer: "Absolutamente. Nuestros seguidores tienen potencia de 575W a 2500W \u2014 suficiente para iluminar a una persona en un sal\xF3n de cualquier tama\xF1o. En venues muy grandes o al aire libre, usamos equipos de mayor potencia para que el c\xEDrculo de luz se vea definido y brillante." },
    { question: "\xBFSirve para XV a\xF1os?", answer: "Es uno de los servicios m\xE1s emotivos en XV a\xF1os. El seguidor ilumina a la quincea\xF1era en su cambio de zapatillas, su vals con el pap\xE1, el baile con los chambelanes y la fiesta sorpresa. El paquete Est\xE1ndar es perfecto para cubrir toda la celebraci\xF3n." },
    { question: "\xBFD\xF3nde se coloca el operador?", answer: "El operador se ubica en un punto elevado con vista directa a la pista \u2014 generalmente al fondo del sal\xF3n o en un mezanine. El equipo incluye tripie de altura profesional que permite operar por encima de los invitados sin obstruir la vista. Todo se monta discretamente." }
  ] })} </section>  <section class="services-section services-alt"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "\xBFQu\xE9 otros servicios combinan con el seguidor de luz?", "subtitle": "El seguidor crea el momento \u2014 agr\xE9gale el escenario perfecto.", "paragraph1": "Un spotlight sobre los novios en el vals es espectacular por s\xED solo. Pero cuando le agregas humo bajo en el piso, guirnaldas c\xE1lidas arriba y los nombres proyectados en la pista con un gobo \u2014 el resultado es un momento que parece sacado de una pel\xEDcula.", "paragraph2": "Armamos paquetes combinados con precio especial. Cu\xE9ntanos tu evento y te dise\xF1amos la producci\xF3n completa." })} <div class="services-grid"> ${serviciosRelacionados.map((s) => renderTemplate`${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "title": s.title, "image": s.image, "alt": s.alt, "description": s.description, "link": s.link })}`)} </div> </div> </section>  <section class="cta-section"> <div class="container"> <div class="cta-content"> <h2>¿Listo para iluminar tus momentos más especiales?</h2> <p>Cuéntanos qué momentos de tu evento quieres destacar. Te armamos la cobertura perfecta con seguidor profesional.</p> <div class="cta-buttons"> <a href="/contacto/" class="btn btn-whatsapp btn-lg">Cotiza por WhatsApp</a> <a href="tel:+525530682988" class="btn btn-primary btn-lg">Llámanos — 55 3068 2988</a> </div> </div> </div> </section> ` })}`;
}, "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/pages/servicios/seguidor.astro", void 0);

const $$file = "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/pages/servicios/seguidor.astro";
const $$url = "/servicios/seguidor";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Seguidor,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
