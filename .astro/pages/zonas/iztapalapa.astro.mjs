import { c as createComponent, b as renderComponent, r as renderTemplate, m as maybeRenderHead, F as Fragment } from '../../chunks/astro/server_D8pMnQBn.mjs';
import 'piccolore';
import { $ as $$BaseLayout, a as $$Breadcrumbs } from '../../chunks/Breadcrumbs_BkFbHGbf.mjs';
import { $ as $$Hero } from '../../chunks/Hero_3Is3fruG.mjs';
import { $ as $$CtaBar } from '../../chunks/CtaBar_CdFZlCZU.mjs';
import { $ as $$SectionHeader } from '../../chunks/SectionHeader_mLKzHzNX.mjs';
import { $ as $$ServiceCard } from '../../chunks/ServiceCard_Bli7ALj4.mjs';
import { $ as $$FaqSection } from '../../chunks/FaqSection_CzcP3CIi.mjs';
export { renderers } from '../../renderers.mjs';

const $$Iztapalapa = createComponent(($$result, $$props, $$slots) => {
  const title = "Renta de Iluminaci\xF3n en Iztapalapa | Bodas y XV A\xF1os | REDEIL";
  const description = "Renta de iluminaci\xF3n para bodas y XV a\xF1os en Iztapalapa. Guirnaldas, luces y sonido. Especializaci\xF3n en salones populares y quintas. Cotiza: 55 3068 2988";
  const canonical = "https://rentadeiluminacion.com/zonas/iztapalapa/";
  const schemaMarkup = JSON.stringify([
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Renta de Iluminaci\xF3n en Iztapalapa",
      "serviceType": "Iluminaci\xF3n para Eventos",
      "areaServed": {
        "@type": "City",
        "name": "Iztapalapa",
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
          "name": "Iztapalapa",
          "geo": { "@type": "GeoCoordinates", "latitude": 19.3526, "longitude": -99.0721 }
        },
        {
          "@type": "Place",
          "name": "Pe\xF1aloza",
          "geo": { "@type": "GeoCoordinates", "latitude": 19.3452, "longitude": -99.0631 }
        },
        {
          "@type": "Place",
          "name": "Presidentes",
          "geo": { "@type": "GeoCoordinates", "latitude": 19.3384, "longitude": -99.0703 }
        }
      ],
      "description": "Renta de iluminaci\xF3n profesional para bodas, XV a\xF1os y eventos en Iztapalapa. Especializaci\xF3n en salones populares, gardenias y quintas. Transporte e instalaci\xF3n incluidos.",
      "priceRange": "$$"
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "\xBFCu\xE1l es la cobertura de REDEIL en Iztapalapa?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Cubrimos todo Iztapalapa, Pe\xF1aloza, Presidentes y alrededores. Salones, quintas, gardenias, patios. Transporte incluido en toda la zona."
          }
        },
        {
          "@type": "Question",
          "name": "\xBFCu\xE1nto cuesta iluminar una boda en Iztapalapa?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Una boda b\xE1sica con guirnaldas arranca desde $6,500. Bodas amplias con m\xFAltiples servicios, $15,000+. Cotiza por WhatsApp con detalles de tu evento."
          }
        },
        {
          "@type": "Question",
          "name": "\xBFCu\xE1l es el tiempo de instalaci\xF3n?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Nuestro equipo en Iztapalapa tarda 2-3 horas en montar un evento est\xE1ndar. Llegamos 4 horas antes, con tiempo de sobra."
          }
        },
        {
          "@type": "Question",
          "name": "\xBFTienen cobertura en las quintas y gardenias de Iztapalapa?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "S\xED. Conocemos la mayor\xEDa de quintas y gardenias de la zona. Hemos iluminado XV a\xF1os y bodas en todos los salones principales. Consulta por tu venue espec\xEDfico."
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
      description: "Focos LED o vintage, cableado IP65, resistentes a lluvia. La base del ambiente en cualquier boda Iztapalapa.",
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
    { label: "Iztapalapa" }
  ] })} ` })}`, "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, { "title": "Renta de Iluminaci\xF3n en Iztapalapa", "subtitle": "Especializaci\xF3n en XV a\xF1os, bodas y eventos familiares. Quintas, salones populares, gardenias. Transporte e instalaci\xF3n incluidos.", "whatsappText": "Hola,%20quiero%20cotizar%20iluminacion%20para%20mi%20evento%20en%20Iztapalapa", "introParagraph1": "Iztapalapa es el coraz\xF3n de las fiestas familiares en la zona oriente. XV a\xF1os monumentales, bodas amplias, despedidas de soltero con estilo \u2014 eventos que requieren iluminaci\xF3n profesional en salones populares y quintas. <strong>REDEIL lleva 30 a\xF1os transformando espacios en Iztapalapa</strong>. Quintas del Pedregal, salones de la Nueva Santa Mar\xEDa, gardenias de Presidentes \u2014 sabemos qu\xE9 tipo de iluminaci\xF3n funciona en cada tipo de evento. Luces que no afecten el presupuesto pero que hagan impacto visual. 300+ eventos al a\xF1o en Iztapalapa.", "introParagraph2": "Los XV a\xF1os de Iztapalapa son legendarios. Guirnaldas envolviendo el techo, luces ne\xF3n personalizadas con el nombre, uplighting en colores coordinados con el tema del evento, DJ lighting sincronizado. Eso es lo que montamos. Las familias conf\xEDan en nosotros porque conocemos el valor que representa cada evento. Bodas amplias con 200+ invitados en salones de fiesta \u2014 equipo profesional que monta en tiempo r\xE9cord y dejamos el espacio perfecto. Precio transparente: no cobramos cargos ocultos. Llegamos 4 horas antes, montamos en 2-3 horas, todo probado." })}  ${maybeRenderHead()}<section class="stats-section-enhanced"> <div class="container"> <div class="stats-grid-enhanced"> <div class="stat-card-enhanced"> <span class="stat-number-enhanced">30+</span> <span class="stat-label-enhanced">Años en Iztapalapa</span> </div> <div class="stat-card-enhanced"> <span class="stat-number-enhanced">300+</span> <span class="stat-label-enhanced">Eventos/Año</span> </div> <div class="stat-card-enhanced"> <span class="stat-number-enhanced">2h</span> <span class="stat-label-enhanced">Instalación Rápida</span> </div> <div class="stat-card-enhanced"> <span class="stat-number-enhanced">100%</span> <span class="stat-label-enhanced">Cobertura Zona</span> </div> </div> </div> </section> ${renderComponent($$result2, "CtaBar", $$CtaBar, { "headline": "\xBFPara qu\xE9 tipo de evento necesitas iluminaci\xF3n?", "items": [
    { label: "Bodas", href: "/eventos/bodas/", icon: "iluminacion" },
    { label: "XV A\xF1os", href: "/eventos/xv-anos/", icon: "iluminacion" },
    { label: "Corporativos", href: "/eventos/corporativos/", icon: "iluminacion" },
    { label: "Cotiza Ahora", href: "/contacto/", icon: "cotizar" }
  ] })}  <section class="services-section"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Por qu\xE9 Nosotros en Iztapalapa", "subtitle": "4 razones por las que REDEIL es el proveedor de iluminaci\xF3n en Iztapalapa.", "paragraph1": "El 70% de nuestros eventos en Iztapalapa son XV a\xF1os. Sabemos exactamente qu\xE9 iluminaci\xF3n hace que un sal\xF3n de fiestas se vea de otro nivel. Guirnaldas colgadas en el techo, luces ne\xF3n con el nombre de la quincea\xF1era, uplighting en colores del tema, efectos especiales en la pista. Cada detalle cuenta.", "paragraph2": "Log\xEDstica propia, equipo entrenado. Colocamos guirnaldas, uplighting, efectos especiales en tiempo r\xE9cord. Eso te deja tranquilo \u2014 no hay estr\xE9s de \xFAltima hora. Salones populares, quintas, gardenias. Sabemos d\xF3nde van los postes, c\xF3mo distribuir el equipo sin causar problemas estructurales." })} <div class="features-grid-4"> <div class="feature-card"> <h3>Especialización en XV Años</h3> <p>70% de nuestros montajes son XV años. Sabemos qué iluminación transforma un salón en fiesta de lujo.</p> </div> <div class="feature-card"> <h3>Instalación en 2 Horas</h3> <p>Logística propia, equipo entrenado. Montaje ágil que te deja tranquilo. No hay estrés de última hora.</p> </div> <div class="feature-card"> <h3>Conocimiento de Salones</h3> <p>Conocemos quintas, gardenias y salones populares. Sabemos cómo iluminar cada tipo de espacio.</p> </div> <div class="feature-card"> <h3>Bodas Amplias</h3> <p>Eventos de 200+ invitados. Guirnaldas, uplighting, DJ lighting. Sistema completo de iluminación.</p> </div> </div> </div> </section>  <section class="services-section services-alt"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Servicios Principales", "subtitle": "Las 4 soluciones de iluminaci\xF3n m\xE1s solicitadas en Iztapalapa.", "paragraph1": "Cada servicio se adapta a tu evento. Si necesitas combinar varios servicios, el precio baja porque compartimos traslado y operador.", "paragraph2": "Cotiza por WhatsApp con fotos de tu venue. Respuesta en minutos." })} <div class="services-grid"> ${serviciosRelacionados.map((s) => renderTemplate`${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "title": s.title, "image": s.image, "alt": s.alt, "description": s.description, "link": s.link })}`)} </div> </div> </section>  <section class="faq-section"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Preguntas sobre Iluminaci\xF3n en Iztapalapa", "subtitle": "Lo que todos preguntan antes de cotizar.", "paragraph1": "Si tienes otra duda, escr\xEDbenos por WhatsApp. Respuesta en minutos.", "paragraph2": "Cada espacio es diferente \u2014 por eso hacemos propuestas a la medida." })} </div> ${renderComponent($$result2, "FaqSection", $$FaqSection, { "items": [
    {
      question: "\xBFCu\xE1l es la cobertura de REDEIL en Iztapalapa?",
      answer: "Cubrimos todo Iztapalapa, Pe\xF1aloza, Presidentes y alrededores. Salones, quintas, gardenias, patios. Transporte incluido en toda la zona."
    },
    {
      question: "\xBFCu\xE1nto cuesta iluminar una boda en Iztapalapa?",
      answer: "Una boda b\xE1sica con guirnaldas arranca desde $6,500. Bodas amplias con m\xFAltiples servicios, $15,000+. Cotiza por WhatsApp con detalles de tu evento."
    },
    {
      question: "\xBFCu\xE1l es el tiempo de instalaci\xF3n?",
      answer: "Nuestro equipo en Iztapalapa tarda 2-3 horas en montar un evento est\xE1ndar. Llegamos 4 horas antes, con tiempo de sobra."
    },
    {
      question: "\xBFTienen cobertura en las quintas y gardenias de Iztapalapa?",
      answer: "S\xED. Conocemos la mayor\xEDa de quintas y gardenias de la zona. Hemos iluminado XV a\xF1os y bodas en todos los salones principales. Consulta por tu venue espec\xEDfico."
    },
    {
      question: "\xBFC\xF3mo funcionan las guirnaldas bajo lluvia?",
      answer: "IP65 certificado. Lluvia directa, humedad, cambios de temperatura. Todo resistido. Junio a agosto, los meses de lluvia, siguen siendo nuestros meses activos en Iztapalapa."
    },
    {
      question: "\xBFPuedo solicitar iluminaci\xF3n espec\xEDfica para mi XV a\xF1os?",
      answer: "S\xED. Personalizaci\xF3n total. Luces ne\xF3n con el nombre, colores coordinados con el tema, efectos sincronizados. M\xE1ndanos una foto del sal\xF3n y te hacemos propuesta en 24 horas."
    },
    {
      question: "\xBFQu\xE9 incluye el servicio de transporte e instalaci\xF3n?",
      answer: "Todo. Traslado de equipo desde CDMX, montaje profesional, pruebas, operaci\xF3n durante el evento, desmontaje al finalizar. Cero cargos ocultos."
    },
    {
      question: "\xBFCon cu\xE1nta anticipaci\xF3n debo reservar?",
      answer: "Idealmente 2-3 semanas. Iztapalapa en temporada alta (noviembre-enero, mayo-julio) se llena r\xE1pido. Entre antes reserves, mejor."
    }
  ] })} </section>  <section class="cta-section"> <div class="container"> <div class="cta-content"> <h2>¿Listo para iluminar tu evento en Iztapalapa?</h2> <p>Mándanos fotos de tu venue por WhatsApp y te cotizamos en minutos. Transporte, instalación y montaje incluidos.</p> <div class="cta-buttons"> <a href="https://wa.me/525530682988?text=Hola,%20quiero%20cotizar%20iluminacion%20para%20mi%20evento%20en%20Iztapalapa" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp btn-lg">Cotiza por WhatsApp</a> <a href="tel:+525530682988" class="btn btn-primary btn-lg">Llámanos — 55 3068 2988</a> </div> </div> </div> </section> ` })}`;
}, "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/pages/zonas/iztapalapa.astro", void 0);

const $$file = "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/pages/zonas/iztapalapa.astro";
const $$url = "/zonas/iztapalapa";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Iztapalapa,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
