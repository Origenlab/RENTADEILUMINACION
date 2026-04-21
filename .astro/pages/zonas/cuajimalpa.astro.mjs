import { c as createComponent, b as renderComponent, r as renderTemplate, m as maybeRenderHead, F as Fragment } from '../../chunks/astro/server_D8pMnQBn.mjs';
import 'piccolore';
import { $ as $$BaseLayout, a as $$Breadcrumbs } from '../../chunks/Breadcrumbs_BkFbHGbf.mjs';
import { $ as $$Hero } from '../../chunks/Hero_3Is3fruG.mjs';
import { $ as $$CtaBar } from '../../chunks/CtaBar_CdFZlCZU.mjs';
import { $ as $$SectionHeader } from '../../chunks/SectionHeader_mLKzHzNX.mjs';
import { $ as $$ServiceCard } from '../../chunks/ServiceCard_Bli7ALj4.mjs';
import { $ as $$FaqSection } from '../../chunks/FaqSection_CzcP3CIi.mjs';
export { renderers } from '../../renderers.mjs';

const $$Cuajimalpa = createComponent(($$result, $$props, $$slots) => {
  const title = "Renta de Iluminaci\xF3n en Cuajimalpa | Eventos Corporativos y Bodas | REDEIL";
  const description = "Renta de iluminaci\xF3n para eventos corporativos y bodas en Cuajimalpa, Santa Fe y Bosques de las Lomas. Guirnaldas, luces y sonido. Instalaci\xF3n en 2h. Cotiza: 55 3068 2988";
  const canonical = "https://rentadeiluminacion.com/zonas/cuajimalpa/";
  const schemaMarkup = JSON.stringify([
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Renta de Iluminaci\xF3n en Cuajimalpa de Morelos",
      "serviceType": "Iluminaci\xF3n para Eventos",
      "areaServed": {
        "@type": "City",
        "name": "Cuajimalpa de Morelos",
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
          "name": "Cuajimalpa de Morelos",
          "geo": { "@type": "GeoCoordinates", "latitude": 19.3587, "longitude": -99.2913 }
        },
        {
          "@type": "Place",
          "name": "Santa Fe",
          "geo": { "@type": "GeoCoordinates", "latitude": 19.3659, "longitude": -99.2616 }
        },
        {
          "@type": "Place",
          "name": "Bosques de las Lomas",
          "geo": { "@type": "GeoCoordinates", "latitude": 19.3852, "longitude": -99.2748 }
        }
      ],
      "description": "Renta de iluminaci\xF3n profesional para eventos corporativos, bodas y celebraciones en Cuajimalpa, Santa Fe, Bosques de las Lomas y Contadero. Especializaci\xF3n en salones corporativos y haciendas de monta\xF1a. Transporte e instalaci\xF3n incluidos.",
      "priceRange": "$$"
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "\xBFCu\xE1l es la cobertura de REDEIL en Cuajimalpa?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Cubrimos toda Cuajimalpa, Santa Fe, Bosques de las Lomas, Contadero y alrededores hasta La Marquesa. Salones corporativos, haciendas, jardines de monta\xF1a. Transporte incluido en toda la zona."
          }
        },
        {
          "@type": "Question",
          "name": "\xBFCu\xE1nto cuesta iluminar un evento corporativo en Santa Fe?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Un evento corporativo b\xE1sico con iluminaci\xF3n ambiental arranca desde $8,500. Eventos completos con m\xFAltiples servicios, $22,000+. Cotiza por WhatsApp con detalles de tu evento."
          }
        },
        {
          "@type": "Question",
          "name": "\xBFCu\xE1l es el tiempo de instalaci\xF3n?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Nuestro equipo en Cuajimalpa tarda 2-3 horas en montar un evento est\xE1ndar. Llegamos 4 horas antes, con tiempo de sobra para pruebas."
          }
        },
        {
          "@type": "Question",
          "name": "\xBFTrabajan con los salones corporativos de Santa Fe?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "S\xED. Centro Santa Fe, salones en corporativos de Avenida Santa Fe, terrazas en torres de oficinas \u2014 los conocemos todos. Tenemos experiencia con los requerimientos t\xE9cnicos de cada venue."
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
      description: "Focos LED o vintage, cableado IP65, resistentes a lluvia. La base del ambiente en cualquier evento en Cuajimalpa.",
      link: "/servicios/guirnaldas/"
    },
    {
      title: "Luces Neon Personalizadas",
      image: "/img/luces-neon/luces-neon-nombres-boda.avif",
      alt: "Luces neon personalizadas para boda",
      description: "Logos corporativos, nombres de los novios, frases. Luces ne\xF3n en colores \xE1mbar, rosa, azul, blanco. Ideales para branding de eventos.",
      link: "/servicios/luces-neon/"
    },
    {
      title: "Cabezas M\xF3viles \u2014 Sky Tracker",
      image: "/img/cabezas-moviles/cabezas-moviles-boda.avif",
      alt: "Cabezas m\xF3viles iluminando pista de baile",
      description: "Proyecciones animadas, colores sincronizados, efectos especiales. El efecto de escenario profesional para galas y cenas.",
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
    { label: "Cuajimalpa de Morelos" }
  ] })} ` })}`, "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, { "title": "Renta de Iluminaci\xF3n en Cuajimalpa", "subtitle": "Eventos corporativos en Santa Fe + bodas en haciendas de monta\xF1a. M\xE1s de 180 eventos iluminados en la zona. Transporte e instalaci\xF3n incluidos.", "whatsappText": "Hola,%20quiero%20cotizar%20iluminacion%20para%20mi%20evento%20en%20Cuajimalpa", "introParagraph1": "Cuajimalpa es donde convergen los eventos corporativos de Santa Fe con las bodas m\xE1s exclusivas en haciendas de monta\xF1a. <strong>REDEIL lleva m\xE1s de 25 a\xF1os iluminando eventos en Cuajimalpa y Santa Fe</strong>. Galas corporativas en las torres de Santa Fe, cenas de fin de a\xF1o en terrazas con vista al bosque, bodas rom\xE1nticas en haciendas rodeadas de pinos. Conocemos cada sal\xF3n, cada terraza, cada jard\xEDn de monta\xF1a. 180+ eventos al a\xF1o en la zona. No es casualidad \u2014 es experiencia + equipo propio + conocimiento del terreno.", "introParagraph2": "Somos los que montamos las guirnaldas en las terrazas de los corporativos de Santa Fe. Los que iluminan galas de premiaci\xF3n en Centro Santa Fe. Los que transforman haciendas en Contadero en escenarios de cuento. \xBFVenues frecuentes? Centro Santa Fe, Bosques de las Lomas, terrazas corporativas en Av. Santa Fe, salones en Contadero, jardines camino a La Marquesa. Cada espacio requiere estrategia diferente. El equipo llega 4 horas antes. Monta en 2-3 horas. Todo probado antes de que lleguen los invitados. Precio transparente: sin cargos ocultos." })}  ${maybeRenderHead()}<section class="stats-section-enhanced"> <div class="container"> <div class="stats-grid-enhanced"> <div class="stat-card-enhanced"> <span class="stat-number-enhanced">25+</span> <span class="stat-label-enhanced">Años en Cuajimalpa</span> </div> <div class="stat-card-enhanced"> <span class="stat-number-enhanced">180+</span> <span class="stat-label-enhanced">Eventos/Año</span> </div> <div class="stat-card-enhanced"> <span class="stat-number-enhanced">2h</span> <span class="stat-label-enhanced">Instalación Rápida</span> </div> <div class="stat-card-enhanced"> <span class="stat-number-enhanced">100%</span> <span class="stat-label-enhanced">Cobertura Zona</span> </div> </div> </div> </section> ${renderComponent($$result2, "CtaBar", $$CtaBar, { "headline": "\xBFPara qu\xE9 tipo de evento necesitas iluminaci\xF3n?", "items": [
    { label: "Bodas", href: "/eventos/bodas/", icon: "iluminacion" },
    { label: "XV A\xF1os", href: "/eventos/xv-anos/", icon: "iluminacion" },
    { label: "Corporativos", href: "/eventos/corporativos/", icon: "iluminacion" },
    { label: "Cotiza Ahora", href: "/contacto/", icon: "cotizar" }
  ] })}  <section class="services-section"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Por qu\xE9 Nosotros en Cuajimalpa", "subtitle": "4 razones por las que REDEIL es el proveedor de iluminaci\xF3n en Cuajimalpa y Santa Fe.", "paragraph1": "Cuajimalpa combina dos mundos: el corporativo de Santa Fe y el rom\xE1ntico de las haciendas de monta\xF1a. Dominamos ambos. Iluminaci\xF3n elegante para galas de empresa, guirnaldas c\xE1lidas para bodas al aire libre entre pinos. Cada detalle importa.", "paragraph2": "Log\xEDstica propia, equipo entrenado para zonas de monta\xF1a. Subimos equipo a haciendas sin acceso f\xE1cil. Conocemos las condiciones clim\xE1ticas de la zona \u2014 niebla, lluvia, viento. Todo nuestro equipo es IP65, resistente a intemperie." })} <div class="features-grid-4"> <div class="feature-card"> <h3>Expertos en Corporativos</h3> <p>Galas, cenas de fin de año, lanzamientos de producto en Santa Fe. Iluminación profesional que eleva cualquier evento de empresa.</p> </div> <div class="feature-card"> <h3>Instalación en 2 Horas</h3> <p>Logística propia, equipo entrenado. Montaje ágil incluso en venues de difícil acceso en zona de montaña.</p> </div> <div class="feature-card"> <h3>Bodas en Haciendas</h3> <p>Haciendas rodeadas de bosque, jardines con vista panorámica. Sabemos cómo iluminar espacios abiertos en altura.</p> </div> <div class="feature-card"> <h3>Equipo Resistente</h3> <p>IP65 certificado. Niebla, lluvia, viento de montaña — nuestro equipo resiste todo. Cero riesgos para tu evento.</p> </div> </div> </div> </section>  <section class="services-section services-alt"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Servicios Principales", "subtitle": "Las 4 soluciones de iluminaci\xF3n m\xE1s solicitadas en Cuajimalpa y Santa Fe.", "paragraph1": "Cada servicio se adapta a tu evento. Si necesitas combinar varios servicios, el precio baja porque compartimos traslado y operador.", "paragraph2": "Cotiza por WhatsApp con fotos de tu venue. Respuesta en minutos." })} <div class="services-grid"> ${serviciosRelacionados.map((s) => renderTemplate`${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "title": s.title, "image": s.image, "alt": s.alt, "description": s.description, "link": s.link })}`)} </div> </div> </section>  <section class="faq-section"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Preguntas sobre Iluminaci\xF3n en Cuajimalpa", "subtitle": "Lo que todos preguntan antes de cotizar.", "paragraph1": "Si tienes otra duda, escr\xEDbenos por WhatsApp. Respuesta en minutos.", "paragraph2": "Cada espacio es diferente \u2014 por eso hacemos propuestas a la medida." })} </div> ${renderComponent($$result2, "FaqSection", $$FaqSection, { "items": [
    {
      question: "\xBFCu\xE1l es la cobertura de REDEIL en Cuajimalpa?",
      answer: "Cubrimos toda Cuajimalpa, Santa Fe, Bosques de las Lomas, Contadero y alrededores hasta La Marquesa. Salones corporativos, haciendas, jardines de monta\xF1a. Transporte incluido en toda la zona."
    },
    {
      question: "\xBFCu\xE1nto cuesta iluminar un evento corporativo en Santa Fe?",
      answer: "Un evento corporativo b\xE1sico con iluminaci\xF3n ambiental arranca desde $8,500. Eventos completos con m\xFAltiples servicios, $22,000+. Cotiza por WhatsApp con detalles de tu evento."
    },
    {
      question: "\xBFCu\xE1l es el tiempo de instalaci\xF3n?",
      answer: "Nuestro equipo en Cuajimalpa tarda 2-3 horas en montar un evento est\xE1ndar. Llegamos 4 horas antes, con tiempo de sobra para pruebas."
    },
    {
      question: "\xBFTrabajan con los salones corporativos de Santa Fe?",
      answer: "S\xED. Centro Santa Fe, salones en corporativos de Avenida Santa Fe, terrazas en torres de oficinas, Bosques de las Lomas \u2014 los conocemos todos. Tenemos experiencia con los requerimientos t\xE9cnicos de cada venue."
    },
    {
      question: "\xBFPueden montar iluminaci\xF3n en haciendas de monta\xF1a?",
      answer: "Absolutamente. Subimos equipo a haciendas sin acceso vehicular f\xE1cil. Contamos con generadores de respaldo para zonas sin conexi\xF3n el\xE9ctrica estable. Experiencia en Contadero, La Marquesa y alrededores."
    },
    {
      question: "\xBFEl equipo resiste las condiciones clim\xE1ticas de Cuajimalpa?",
      answer: "S\xED. Certificaci\xF3n IP65 en todo el equipo. Niebla, lluvia, viento de monta\xF1a \u2014 todo resistido. Cuajimalpa es zona de lluvia frecuente y nuestro equipo est\xE1 dise\xF1ado para esas condiciones."
    },
    {
      question: "\xBFQu\xE9 incluye el servicio de transporte e instalaci\xF3n?",
      answer: "Todo. Traslado de equipo desde CDMX, montaje profesional, pruebas, operaci\xF3n durante el evento, desmontaje al finalizar. Cero cargos ocultos, incluso en zonas de dif\xEDcil acceso."
    },
    {
      question: "\xBFCon cu\xE1nta anticipaci\xF3n debo reservar?",
      answer: "Idealmente 3-4 semanas. Santa Fe en temporada de fin de a\xF1o (noviembre-enero) se llena r\xE1pido con eventos corporativos. Entre antes reserves, mejor disponibilidad tendr\xE1s."
    }
  ] })} </section>  <section class="cta-section"> <div class="container"> <div class="cta-content"> <h2>¿Listo para iluminar tu evento en Cuajimalpa?</h2> <p>Mándanos fotos de tu venue por WhatsApp y te cotizamos en minutos. Transporte, instalación y montaje incluidos.</p> <div class="cta-buttons"> <a href="https://wa.me/525530682988?text=Hola,%20quiero%20cotizar%20iluminacion%20para%20mi%20evento%20en%20Cuajimalpa" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp btn-lg">Cotiza por WhatsApp</a> <a href="tel:+525530682988" class="btn btn-primary btn-lg">Llámanos — 55 3068 2988</a> </div> </div> </div> </section> ` })}`;
}, "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/pages/zonas/cuajimalpa.astro", void 0);

const $$file = "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/pages/zonas/cuajimalpa.astro";
const $$url = "/zonas/cuajimalpa";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Cuajimalpa,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
