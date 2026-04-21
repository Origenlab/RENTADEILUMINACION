import { c as createComponent, b as renderComponent, r as renderTemplate, m as maybeRenderHead, F as Fragment } from '../../chunks/astro/server_D8pMnQBn.mjs';
import 'piccolore';
import { $ as $$BaseLayout, a as $$Breadcrumbs } from '../../chunks/Breadcrumbs_BkFbHGbf.mjs';
import { $ as $$Hero } from '../../chunks/Hero_3Is3fruG.mjs';
import { $ as $$CtaBar } from '../../chunks/CtaBar_CdFZlCZU.mjs';
import { $ as $$SectionHeader } from '../../chunks/SectionHeader_mLKzHzNX.mjs';
import { $ as $$ServiceCard } from '../../chunks/ServiceCard_Bli7ALj4.mjs';
import { $ as $$FaqSection } from '../../chunks/FaqSection_CzcP3CIi.mjs';
export { renderers } from '../../renderers.mjs';

const $$Texcoco = createComponent(($$result, $$props, $$slots) => {
  const title = "Renta de Iluminaci\xF3n en Texcoco | Bodas R\xFAsticas y Haciendas | REDEIL";
  const description = "Renta de iluminaci\xF3n para bodas r\xFAsticas en haciendas y jardines de Texcoco. Guirnaldas, luces y sonido. Instalaci\xF3n en 2h. 150+ eventos/a\xF1o. Cotiza: 55 3068 2988";
  const canonical = "https://rentadeiluminacion.com/zonas/texcoco/";
  const schemaMarkup = JSON.stringify([
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Renta de Iluminaci\xF3n en Texcoco",
      "serviceType": "Iluminaci\xF3n para Eventos",
      "areaServed": {
        "@type": "City",
        "name": "Texcoco",
        "addressRegion": "Estado de M\xE9xico"
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
          "name": "Texcoco",
          "geo": { "@type": "GeoCoordinates", "latitude": 19.5097, "longitude": -98.8825 }
        },
        {
          "@type": "Place",
          "name": "San Miguel Chapultepec",
          "geo": { "@type": "GeoCoordinates", "latitude": 19.515, "longitude": -98.89 }
        },
        {
          "@type": "Place",
          "name": "Molino de Flores",
          "geo": { "@type": "GeoCoordinates", "latitude": 19.487, "longitude": -98.849 }
        }
      ],
      "description": "Renta de iluminaci\xF3n profesional para bodas r\xFAsticas, XV a\xF1os y eventos en Texcoco, San Miguel Chapultepec, Molino de Flores y zona universitaria UACh. Especializaci\xF3n en haciendas y jardines campestres. Transporte e instalaci\xF3n incluidos.",
      "priceRange": "$$"
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "\xBFCu\xE1l es la cobertura de REDEIL en Texcoco?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Cubrimos todo Texcoco, San Miguel Chapultepec, Molino de Flores, zona universitaria UACh y alrededores. Haciendas, jardines campestres, salones. Transporte incluido en toda la zona."
          }
        },
        {
          "@type": "Question",
          "name": "\xBFCu\xE1nto cuesta iluminar una boda r\xFAstica en Texcoco?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Una boda r\xFAstica con guirnaldas arranca desde $6,000. Bodas completas en hacienda con m\xFAltiples servicios, $16,000+. Cotiza por WhatsApp con detalles de tu evento."
          }
        },
        {
          "@type": "Question",
          "name": "\xBFCu\xE1l es el tiempo de instalaci\xF3n?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Nuestro equipo en Texcoco tarda 2-3 horas en montar un evento est\xE1ndar. Llegamos 4 horas antes, con tiempo de sobra para haciendas y jardines grandes."
          }
        },
        {
          "@type": "Question",
          "name": "\xBFIluminan la Ex Hacienda Molino de Flores?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "S\xED. La Ex Hacienda Molino de Flores es uno de nuestros venues favoritos. Conocemos cada rinc\xF3n, cada arco, cada patio. Sabemos exactamente d\xF3nde colocar guirnaldas para lograr el efecto r\xFAstico perfecto."
          }
        }
      ]
    }
  ]);
  const serviciosRelacionados = [
    {
      title: "Guirnaldas de Focos Edison",
      image: "/img/guirnaldas/guirnaldas-edison-hacienda-boda.avif",
      alt: "Guirnaldas Edison iluminando hacienda r\xFAstica para boda",
      description: "Focos LED o vintage, cableado IP65, resistentes a lluvia. El complemento perfecto para bodas r\xFAsticas en haciendas de Texcoco.",
      link: "/servicios/guirnaldas/"
    },
    {
      title: "Luces Neon Personalizadas",
      image: "/img/luces-neon/luces-neon-nombres-boda.avif",
      alt: "Luces neon personalizadas para boda r\xFAstica",
      description: "Nombres de los novios, iniciales, frases. Luces ne\xF3n que contrastan perfecto con la arquitectura colonial de las haciendas.",
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
    { label: "Texcoco" }
  ] })} ` })}`, "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, { "title": "Renta de Iluminaci\xF3n en Texcoco", "subtitle": "Especializaci\xF3n en bodas r\xFAsticas en haciendas y jardines campestres. M\xE1s de 150 eventos iluminados en la zona. Transporte e instalaci\xF3n incluidos.", "whatsappText": "Hola,%20quiero%20cotizar%20iluminacion%20para%20mi%20evento%20en%20Texcoco", "introParagraph1": "Texcoco es el destino de bodas r\xFAsticas por excelencia en el oriente del Estado de M\xE9xico. Haciendas coloniales con arcos de piedra, jardines campestres con vistas a la sierra, ex haciendas reconvertidas en venues de ensue\xF1o \u2014 los espacios que merecen iluminaci\xF3n profesional. <strong>REDEIL lleva m\xE1s de 15 a\xF1os iluminando eventos en Texcoco</strong>. Bodas en la Ex Hacienda Molino de Flores, recepciones en jardines de San Miguel Chapultepec, fiestas en salones camino a Texcoco, eventos en zona universitaria UACh. Conocemos cada venue, cada hacienda, cada jard\xEDn. 150+ eventos al a\xF1o en la zona. No es suerte \u2014 es conocimiento del terreno + equipo propio + experiencia.", "introParagraph2": "Somos los que montamos las guirnaldas sobre los arcos de piedra de las haciendas. Los que iluminan la primera danza en el jard\xEDn campestre. Los que proyectan el monograma de los novios sobre los muros coloniales. \xBFCu\xE1les son los venues que m\xE1s montamos? Ex Hacienda Molino de Flores, jardines en zona rural, salones camino a Texcoco, espacios cerca de la UACh. Cada uno requiere estrategia diferente. El equipo llega 4 horas antes. Monta en 2-3 horas. Todo probado antes de que lleguen los invitados. Precio transparente: no cobramos cargos ocultos." })}  ${maybeRenderHead()}<section class="stats-section-enhanced"> <div class="container"> <div class="stats-grid-enhanced"> <div class="stat-card-enhanced"> <span class="stat-number-enhanced">15+</span> <span class="stat-label-enhanced">Años en Texcoco</span> </div> <div class="stat-card-enhanced"> <span class="stat-number-enhanced">150+</span> <span class="stat-label-enhanced">Eventos/Año</span> </div> <div class="stat-card-enhanced"> <span class="stat-number-enhanced">2h</span> <span class="stat-label-enhanced">Instalación Rápida</span> </div> <div class="stat-card-enhanced"> <span class="stat-number-enhanced">100%</span> <span class="stat-label-enhanced">Cobertura Zona</span> </div> </div> </div> </section> ${renderComponent($$result2, "CtaBar", $$CtaBar, { "headline": "\xBFPara qu\xE9 tipo de evento necesitas iluminaci\xF3n?", "items": [
    { label: "Bodas", href: "/eventos/bodas/", icon: "iluminacion" },
    { label: "XV A\xF1os", href: "/eventos/xv-anos/", icon: "iluminacion" },
    { label: "Corporativos", href: "/eventos/corporativos/", icon: "iluminacion" },
    { label: "Cotiza Ahora", href: "/contacto/", icon: "cotizar" }
  ] })}  <section class="services-section"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Por qu\xE9 Nosotros en Texcoco", "subtitle": "4 razones por las que REDEIL es el proveedor de iluminaci\xF3n en Texcoco.", "paragraph1": "M\xE1s del 70% de nuestros montajes en Texcoco son bodas r\xFAsticas en haciendas y jardines campestres. Sabemos qu\xE9 iluminaci\xF3n potencia la arquitectura colonial y el ambiente natural. Guirnaldas entre arcos de piedra, gobo con monograma en muros coloniales, uplighting que resalta la vegetaci\xF3n. Cada detalle cuenta.", "paragraph2": "Log\xEDstica propia con ruta directa desde CDMX. Colocamos guirnaldas, uplighting, efectos especiales en tiempo r\xE9cord. Eso te deja tranquilo \u2014 no hay estr\xE9s de \xFAltima hora. Haciendas, jardines rurales, salones campestres. Sabemos d\xF3nde van los postes, c\xF3mo distribuir guirnaldas sin da\xF1ar estructuras hist\xF3ricas." })} <div class="features-grid-4"> <div class="feature-card"> <h3>Especialización en Bodas Rústicas</h3> <p>Más del 70% de nuestros montajes son bodas rústicas. Sabemos cómo la iluminación potencia haciendas y jardines campestres.</p> </div> <div class="feature-card"> <h3>Instalación en 2 Horas</h3> <p>Logística propia, equipo entrenado. Montaje ágil que te deja tranquilo. No hay estrés de última hora.</p> </div> <div class="feature-card"> <h3>Conocimiento de Haciendas</h3> <p>Conocemos cada hacienda, cada arco de piedra, cada jardín campestre. Sabemos cómo iluminar sin dañar arquitectura histórica.</p> </div> <div class="feature-card"> <h3>Ambiente Campestre Completo</h3> <p>Guirnaldas cálidas + uplighting + luces neón. Creamos la atmósfera rústica perfecta que complementa el entorno natural de Texcoco.</p> </div> </div> </div> </section>  <section class="services-section services-alt"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Servicios Principales", "subtitle": "Las 4 soluciones de iluminaci\xF3n m\xE1s solicitadas en Texcoco.", "paragraph1": "Cada servicio se adapta a tu evento. Si necesitas combinar varios servicios, el precio baja porque compartimos traslado y operador.", "paragraph2": "Cotiza por WhatsApp con fotos de tu venue. Respuesta en minutos." })} <div class="services-grid"> ${serviciosRelacionados.map((s) => renderTemplate`${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "title": s.title, "image": s.image, "alt": s.alt, "description": s.description, "link": s.link })}`)} </div> </div> </section>  <section class="faq-section"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Preguntas sobre Iluminaci\xF3n en Texcoco", "subtitle": "Lo que todos preguntan antes de cotizar.", "paragraph1": "Si tienes otra duda, escr\xEDbenos por WhatsApp. Respuesta en minutos.", "paragraph2": "Cada espacio es diferente \u2014 por eso hacemos propuestas a la medida." })} </div> ${renderComponent($$result2, "FaqSection", $$FaqSection, { "items": [
    {
      question: "\xBFCu\xE1l es la cobertura de REDEIL en Texcoco?",
      answer: "Cubrimos todo Texcoco, San Miguel Chapultepec, Molino de Flores, zona universitaria UACh y alrededores. Haciendas, jardines campestres, salones. Transporte incluido en toda la zona."
    },
    {
      question: "\xBFCu\xE1nto cuesta iluminar una boda r\xFAstica en Texcoco?",
      answer: "Una boda r\xFAstica con guirnaldas arranca desde $6,000. Bodas completas en hacienda con m\xFAltiples servicios, $16,000+. Cotiza por WhatsApp con detalles de tu evento."
    },
    {
      question: "\xBFCu\xE1l es el tiempo de instalaci\xF3n?",
      answer: "Nuestro equipo en Texcoco tarda 2-3 horas en montar un evento est\xE1ndar. Llegamos 4 horas antes, con tiempo de sobra para haciendas y jardines grandes."
    },
    {
      question: "\xBFIluminan la Ex Hacienda Molino de Flores?",
      answer: "S\xED. La Ex Hacienda Molino de Flores es uno de nuestros venues favoritos. Conocemos cada rinc\xF3n, cada arco, cada patio. Sabemos exactamente d\xF3nde colocar guirnaldas para lograr el efecto r\xFAstico perfecto."
    },
    {
      question: "\xBFC\xF3mo funcionan las guirnaldas en jardines al aire libre?",
      answer: "IP65 certificado. Lluvia directa, humedad, cambios de temperatura. Todo resistido. Nuestras guirnaldas est\xE1n dise\xF1adas para funcionar en los jardines campestres de Texcoco, incluso en temporada de lluvias."
    },
    {
      question: "\xBFPueden iluminar eventos en la zona universitaria UACh?",
      answer: "S\xED. Cubrimos la zona universitaria de Chapingo y alrededores. Salones, jardines, espacios al aire libre. Tenemos experiencia en eventos acad\xE9micos, graduaciones y celebraciones en la zona."
    },
    {
      question: "\xBFQu\xE9 incluye el servicio de transporte e instalaci\xF3n?",
      answer: "Todo. Traslado de equipo desde CDMX por la autopista M\xE9xico-Texcoco, montaje profesional, pruebas, operaci\xF3n durante el evento, desmontaje al finalizar. Cero cargos ocultos."
    },
    {
      question: "\xBFCon cu\xE1nta anticipaci\xF3n debo reservar?",
      answer: "Idealmente 3-4 semanas. Texcoco en temporada de bodas (octubre-diciembre, marzo-mayo) se llena r\xE1pido. Las haciendas m\xE1s populares requieren reserva anticipada. Entre antes reserves, mejor."
    }
  ] })} </section>  <section class="cta-section"> <div class="container"> <div class="cta-content"> <h2>¿Listo para iluminar tu evento en Texcoco?</h2> <p>Mándanos fotos de tu hacienda o jardín por WhatsApp y te cotizamos en minutos. Transporte, instalación y montaje incluidos.</p> <div class="cta-buttons"> <a href="https://wa.me/525530682988?text=Hola,%20quiero%20cotizar%20iluminacion%20para%20mi%20evento%20en%20Texcoco" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp btn-lg">Cotiza por WhatsApp</a> <a href="tel:+525530682988" class="btn btn-primary btn-lg">Llámanos — 55 3068 2988</a> </div> </div> </div> </section> ` })}`;
}, "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/pages/zonas/texcoco.astro", void 0);

const $$file = "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/pages/zonas/texcoco.astro";
const $$url = "/zonas/texcoco";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Texcoco,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
