import { c as createComponent, b as renderComponent, r as renderTemplate, m as maybeRenderHead, F as Fragment } from '../../chunks/astro/server_D8pMnQBn.mjs';
import 'piccolore';
import { $ as $$BaseLayout, a as $$Breadcrumbs } from '../../chunks/Breadcrumbs_BkFbHGbf.mjs';
import { $ as $$Hero } from '../../chunks/Hero_3Is3fruG.mjs';
import { $ as $$CtaBar } from '../../chunks/CtaBar_CdFZlCZU.mjs';
import { $ as $$SectionHeader } from '../../chunks/SectionHeader_mLKzHzNX.mjs';
import { $ as $$ServiceCard } from '../../chunks/ServiceCard_Bli7ALj4.mjs';
import { $ as $$FaqSection } from '../../chunks/FaqSection_CzcP3CIi.mjs';
export { renderers } from '../../renderers.mjs';

const $$Tlalpan = createComponent(($$result, $$props, $$slots) => {
  const title = "Renta de Iluminaci\xF3n en Tlalpan | Bodas y Eventos | REDEIL";
  const description = "Renta de iluminaci\xF3n para bodas y eventos en Tlalpan. Especializaci\xF3n en haciendas, jardines y espacios premium. Cotiza: 55 3068 2988";
  const canonical = "https://rentadeiluminacion.com/zonas/tlalpan/";
  const schemaMarkup = JSON.stringify([
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Renta de Iluminaci\xF3n en Tlalpan",
      "serviceType": "Iluminaci\xF3n para Eventos",
      "areaServed": {
        "@type": "City",
        "name": "Tlalpan",
        "addressRegion": "CDMX"
      },
      "provider": {
        "@type": "LocalBusiness",
        "name": "REDEIL",
        "url": "https://rentadeiluminacion.com",
        "telephone": "+525530682988",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Ciudad de M\xE9xico",
          "addressRegion": "CDMX",
          "addressCountry": "MX"
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "09:00",
            "closes": "18:00"
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": "Saturday",
            "opens": "10:00",
            "closes": "14:00"
          }
        ]
      },
      "serviceArea": [
        {
          "@type": "Place",
          "name": "Tlalpan",
          "geo": { "@type": "GeoCoordinates", "latitude": 19.2908, "longitude": -99.1726 }
        },
        {
          "@type": "Place",
          "name": "Fuentes de Pedregal",
          "geo": { "@type": "GeoCoordinates", "latitude": 19.3616, "longitude": -99.1897 }
        },
        {
          "@type": "Place",
          "name": "Ajusco",
          "geo": { "@type": "GeoCoordinates", "latitude": 19.24, "longitude": -99.185 }
        }
      ],
      "description": "Renta de iluminaci\xF3n profesional para bodas y eventos en Tlalpan. Especializaci\xF3n en haciendas, jardines premium y espacios de lujo. Transporte e instalaci\xF3n incluidos.",
      "priceRange": "$$"
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "\xBFCu\xE1l es la cobertura de REDEIL en Tlalpan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Cubrimos todo Tlalpan, Fuentes de Pedregal, Ajusco y alrededores. Haciendas, jardines, patios. Transporte incluido en toda la zona."
          }
        },
        {
          "@type": "Question",
          "name": "\xBFCu\xE1nto cuesta iluminar una boda en Tlalpan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Una boda b\xE1sica con guirnaldas arranca desde $6,500. Bodas en haciendas con m\xFAltiples servicios, $18,000+. Cotiza por WhatsApp con detalles de tu evento."
          }
        },
        {
          "@type": "Question",
          "name": "\xBFCu\xE1l es el tiempo de instalaci\xF3n?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Nuestro equipo en Tlalpan tarda 2-3 horas en montar un evento est\xE1ndar. Llegamos 4 horas antes, con tiempo de sobra para preparaci\xF3n."
          }
        },
        {
          "@type": "Question",
          "name": "\xBFTienen cobertura garantizada en haciendas de Tlalpan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "S\xED. Conocemos las principales haciendas y espacios premium de Tlalpan. Experiencia instalando en arquitectura hist\xF3rica y moderna."
          }
        }
      ]
    }
  ]);
  const serviciosRelacionados = [
    {
      title: "Guirnaldas de Focos Edison",
      image: "/img/guirnaldas/guirnaldas-edison-hacienda-boda.avif",
      alt: "Guirnaldas Edison iluminando hacienda para boda",
      description: "Focos LED o vintage, cableado IP65, resistentes a lluvia. La base del ambiente en cualquier boda Tlalpan.",
      link: "/servicios/guirnaldas/"
    },
    {
      title: "Luces Neon Personalizadas",
      image: "/img/luces-neon/luces-neon-nombres-boda.avif",
      alt: "Luces neon personalizadas para boda",
      description: "Nombres de los novios, iniciales, frases. Luces ne\xF3n de colores \xE1mbar, rosa, azul, blanco. Perfecto para XV a\xF1os.",
      link: "/servicios/luces-neon/"
    },
    {
      title: "Cabezas M\xF3viles \u2014 Sky Tracker",
      image: "/img/cabezas-moviles/cabezas-moviles-boda.avif",
      alt: "Cabezas m\xF3viles iluminando pista de baile",
      description: "Proyecciones animadas, colores sincronizados, efectos especiales. El efecto de escenario profesional.",
      link: "/servicios/cabezas-moviles/"
    },
    {
      title: "Bocinas y DJ Lighting",
      image: "/img/bocinas/bocinas-sistema-profesional.avif",
      alt: "Sistema de sonido profesional para evento",
      description: "Sonido profesional + luces que reaccionan a la m\xFAsica. Sistema completo de sonido e iluminaci\xF3n.",
      link: "/servicios/bocinas-djs/"
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "canonical": canonical, "schemaMarkup": schemaMarkup }, { "breadcrumbs": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "breadcrumbs" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Breadcrumbs", $$Breadcrumbs, { "items": [
    { label: "Inicio", href: "/" },
    { label: "Zonas de Cobertura", href: "/zonas-de-cobertura/" },
    { label: "Tlalpan" }
  ] })} ` })}`, "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, { "title": "Renta de Iluminaci\xF3n en Tlalpan", "subtitle": "Especializaci\xF3n en haciendas, jardines premium y eventos de lujo. Iluminaci\xF3n profesional para bodas memorables. Transporte e instalaci\xF3n incluidos.", "whatsappText": "Hola,%20quiero%20cotizar%20iluminacion%20para%20mi%20evento%20en%20Tlalpan", "introParagraph1": "Tlalpan es sin\xF3nimo de bodas de lujo. Haciendas centenarias, jardines frondosos, arquitectura de ensue\xF1o \u2014 los espacios requieren iluminaci\xF3n que honre la belleza del lugar. <strong>REDEIL lleva 30 a\xF1os iluminando eventos en Tlalpan</strong>. Haciendas hist\xF3ricas, jardines premium, patios de casas coloniales \u2014 sabemos exactamente c\xF3mo iluminar sin da\xF1ar fachadas, sin competir con la arquitectura. 280+ eventos al a\xF1o en Tlalpan.", "introParagraph2": "Las bodas de Tlalpan son bodas cuidadosas. Cada detalle importa porque la competencia est\xE9tica es alta. Guirnaldas que envuelven las columnas sin da\xF1arlas, luces que se integran con la vegetaci\xF3n, uplighting que resalta arquitectura sin ser invasivo, gobo con monograma proyectado discretamente. El equipo lleva 30 a\xF1os entendiendo estos matices. Llegamos 4 horas antes, coordinamos con arquitectos del evento si es necesario, montamos en 2-3 horas sin prisa. Precio transparente: no cobramos cargos ocultos." })}  ${maybeRenderHead()}<section class="stats-section-enhanced"> <div class="container"> <div class="stats-grid-enhanced"> <div class="stat-card-enhanced"> <span class="stat-number-enhanced">30+</span> <span class="stat-label-enhanced">Años en Tlalpan</span> </div> <div class="stat-card-enhanced"> <span class="stat-number-enhanced">280+</span> <span class="stat-label-enhanced">Eventos/Año</span> </div> <div class="stat-card-enhanced"> <span class="stat-number-enhanced">2h</span> <span class="stat-label-enhanced">Instalación Rápida</span> </div> <div class="stat-card-enhanced"> <span class="stat-number-enhanced">100%</span> <span class="stat-label-enhanced">Cobertura Zona</span> </div> </div> </div> </section> ${renderComponent($$result2, "CtaBar", $$CtaBar, { "headline": "\xBFPara qu\xE9 tipo de evento necesitas iluminaci\xF3n?", "items": [
    { label: "Bodas", href: "/eventos/bodas/", icon: "iluminacion" },
    { label: "XV A\xF1os", href: "/eventos/xv-anos/", icon: "iluminacion" },
    { label: "Corporativos", href: "/eventos/corporativos/", icon: "iluminacion" },
    { label: "Cotiza Ahora", href: "/contacto/", icon: "cotizar" }
  ] })}  <section class="services-section"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Por qu\xE9 Nosotros en Tlalpan", "subtitle": "4 razones por las que REDEIL es el proveedor de iluminaci\xF3n en Tlalpan.", "paragraph1": "El 75% de nuestros eventos en Tlalpan son bodas de lujo. Sabemos c\xF3mo iluminar sin competir \u2014 guirnaldas elegantes, luces sutiles, efectos que respetan la arquitectura. Haciendas centenarias, jardines premium, patios coloniales. Cada venue es sagrado. Respetamos eso.", "paragraph2": "Log\xEDstica propia, equipo entrenado en espacios delicados. No tocamos nada sin permiso, coordinamos con los arquitectos del evento, instalamos con cuidado. Eso te deja tranquilo \u2014 no hay riesgo de da\xF1os. Somos los expertos en Tlalpan de hace 30 a\xF1os." })} <div class="features-grid-4"> <div class="feature-card"> <h3>Bodas de Lujo</h3> <p>75% de nuestros eventos son bodas premium. Sabemos iluminar sin competir con la arquitectura.</p> </div> <div class="feature-card"> <h3>Instalación Cuidadosa</h3> <p>Coordinamos con arquitectos del evento. Zero daños a espacios históricos. Montaje profesional y respetuoso.</p> </div> <div class="feature-card"> <h3>Conocimiento de Haciendas</h3> <p>30 años en Tlalpan. Conocemos cada hacienda, cada jardín, cada patio colonial por nombre.</p> </div> <div class="feature-card"> <h3>Iluminación Premium</h3> <p>Guirnaldas elegantes, uplighting discreto, efectos especiales. Sistema de iluminación de lujo.</p> </div> </div> </div> </section>  <section class="services-section services-alt"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Servicios Principales", "subtitle": "Las 4 soluciones de iluminaci\xF3n m\xE1s solicitadas en Tlalpan.", "paragraph1": "Cada servicio se adapta a tu evento. Si necesitas combinar varios servicios, el precio baja porque compartimos traslado y operador.", "paragraph2": "Cotiza por WhatsApp con fotos de tu venue. Respuesta en minutos." })} <div class="services-grid"> ${serviciosRelacionados.map((s) => renderTemplate`${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "title": s.title, "image": s.image, "alt": s.alt, "description": s.description, "link": s.link })}`)} </div> </div> </section>  <section class="faq-section"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Preguntas sobre Iluminaci\xF3n en Tlalpan", "subtitle": "Lo que todos preguntan antes de cotizar.", "paragraph1": "Si tienes otra duda, escr\xEDbenos por WhatsApp. Respuesta en minutos.", "paragraph2": "Cada espacio es diferente \u2014 por eso hacemos propuestas a la medida." })} </div> ${renderComponent($$result2, "FaqSection", $$FaqSection, { "items": [
    {
      question: "\xBFCu\xE1l es la cobertura de REDEIL en Tlalpan?",
      answer: "Cubrimos todo Tlalpan, Fuentes de Pedregal, Ajusco y alrededores. Haciendas, jardines, patios. Transporte incluido en toda la zona."
    },
    {
      question: "\xBFCu\xE1nto cuesta iluminar una boda en Tlalpan?",
      answer: "Una boda b\xE1sica con guirnaldas arranca desde $6,500. Bodas en haciendas con m\xFAltiples servicios, $18,000+. Cotiza por WhatsApp con detalles de tu evento."
    },
    {
      question: "\xBFCu\xE1l es el tiempo de instalaci\xF3n?",
      answer: "Nuestro equipo en Tlalpan tarda 2-3 horas en montar un evento est\xE1ndar. Llegamos 4 horas antes, con tiempo para coordinaci\xF3n y pruebas."
    },
    {
      question: "\xBFTienen cobertura garantizada en haciendas de Tlalpan?",
      answer: "S\xED. Conocemos las principales haciendas y espacios premium de Tlalpan. Experiencia instalando en arquitectura hist\xF3rica. Cero da\xF1os garantizado."
    },
    {
      question: "\xBFC\xF3mo manejan la iluminaci\xF3n sin da\xF1ar fachadas hist\xF3ricas?",
      answer: "Coordinamos con arquitectos del evento, usamos sistemas no invasivos, estudiamos cada fachada. 30 a\xF1os de experiencia respetuosa en Tlalpan."
    },
    {
      question: "\xBFPuedo solicitar iluminaci\xF3n espec\xEDfica para mi boda?",
      answer: "S\xED. Personalizaci\xF3n total. M\xE1ndanos fotos de tu venue y tu visi\xF3n. Te hacemos propuesta adaptada en 24 horas."
    },
    {
      question: "\xBFQu\xE9 incluye el servicio de transporte e instalaci\xF3n?",
      answer: "Todo. Traslado de equipo desde CDMX, montaje profesional, coordinaci\xF3n con el venue, pruebas, operaci\xF3n durante el evento, desmontaje al finalizar. Cero cargos ocultos."
    },
    {
      question: "\xBFCon cu\xE1nta anticipaci\xF3n debo reservar?",
      answer: "Idealmente 4-6 semanas. Tlalpan en temporada alta (noviembre-enero, mayo-junio) se llena r\xE1pido. Haciendas populares pueden requerir m\xE1s anticipaci\xF3n."
    }
  ] })} </section>  <section class="cta-section"> <div class="container"> <div class="cta-content"> <h2>¿Listo para iluminar tu boda en Tlalpan?</h2> <p>Mándanos fotos de tu venue por WhatsApp y te cotizamos en minutos. Iluminación de lujo, cuidado profesional, cero daños.</p> <div class="cta-buttons"> <a href="https://wa.me/525530682988?text=Hola,%20quiero%20cotizar%20iluminacion%20para%20mi%20boda%20en%20Tlalpan" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp btn-lg">Cotiza por WhatsApp</a> <a href="tel:+525530682988" class="btn btn-primary btn-lg">Llámanos — 55 3068 2988</a> </div> </div> </div> </section> ` })}`;
}, "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/pages/zonas/tlalpan.astro", void 0);

const $$file = "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/pages/zonas/tlalpan.astro";
const $$url = "/zonas/tlalpan";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Tlalpan,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
