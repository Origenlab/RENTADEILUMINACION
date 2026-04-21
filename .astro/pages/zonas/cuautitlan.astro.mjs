import { c as createComponent, b as renderComponent, r as renderTemplate, m as maybeRenderHead, F as Fragment } from '../../chunks/astro/server_D8pMnQBn.mjs';
import 'piccolore';
import { $ as $$BaseLayout, a as $$Breadcrumbs } from '../../chunks/Breadcrumbs_BkFbHGbf.mjs';
import { $ as $$Hero } from '../../chunks/Hero_3Is3fruG.mjs';
import { $ as $$CtaBar } from '../../chunks/CtaBar_CdFZlCZU.mjs';
import { $ as $$SectionHeader } from '../../chunks/SectionHeader_mLKzHzNX.mjs';
import { $ as $$ServiceCard } from '../../chunks/ServiceCard_Bli7ALj4.mjs';
import { $ as $$FaqSection } from '../../chunks/FaqSection_CzcP3CIi.mjs';
export { renderers } from '../../renderers.mjs';

const $$Cuautitlan = createComponent(($$result, $$props, $$slots) => {
  const title = "Renta de Iluminaci\xF3n en Cuautitl\xE1n Izcalli | XV A\xF1os y Fiestas | REDEIL";
  const description = "Renta de iluminaci\xF3n para XV a\xF1os y fiestas familiares en Cuautitl\xE1n Izcalli. Guirnaldas, luces ne\xF3n y sonido. Instalaci\xF3n en 2h. 200+ eventos/a\xF1o. Cotiza: 55 3068 2988";
  const canonical = "https://rentadeiluminacion.com/zonas/cuautitlan/";
  const schemaMarkup = JSON.stringify([
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Renta de Iluminaci\xF3n en Cuautitl\xE1n Izcalli",
      "serviceType": "Iluminaci\xF3n para Eventos",
      "areaServed": {
        "@type": "City",
        "name": "Cuautitl\xE1n Izcalli",
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
          "name": "Cuautitl\xE1n Izcalli",
          "geo": { "@type": "GeoCoordinates", "latitude": 19.6477, "longitude": -99.2117 }
        },
        {
          "@type": "Place",
          "name": "Centro Cuautitl\xE1n",
          "geo": { "@type": "GeoCoordinates", "latitude": 19.6725, "longitude": -99.1775 }
        },
        {
          "@type": "Place",
          "name": "Arboledas",
          "geo": { "@type": "GeoCoordinates", "latitude": 19.639, "longitude": -99.225 }
        }
      ],
      "description": "Renta de iluminaci\xF3n profesional para XV a\xF1os, bodas y fiestas familiares en Cuautitl\xE1n Izcalli, Centro Cuautitl\xE1n, Arboledas y Los Reyes Izcalli. Especializaci\xF3n en salones y jardines de zona metropolitana norte. Transporte e instalaci\xF3n incluidos.",
      "priceRange": "$$"
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "\xBFCu\xE1l es la cobertura de REDEIL en Cuautitl\xE1n Izcalli?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Cubrimos todo Cuautitl\xE1n Izcalli, Centro Cuautitl\xE1n, Arboledas, Los Reyes Izcalli y alrededores. Salones, jardines, terrazas. Transporte incluido en toda la zona."
          }
        },
        {
          "@type": "Question",
          "name": "\xBFCu\xE1nto cuesta iluminar unos XV a\xF1os en Cuautitl\xE1n Izcalli?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Unos XV a\xF1os b\xE1sicos con guirnaldas arrancan desde $5,500. Paquetes completos con luces ne\xF3n, bocinas y DJ lighting, $15,000+. Cotiza por WhatsApp con detalles de tu evento."
          }
        },
        {
          "@type": "Question",
          "name": "\xBFCu\xE1l es el tiempo de instalaci\xF3n?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Nuestro equipo en Cuautitl\xE1n Izcalli tarda 2-3 horas en montar un evento est\xE1ndar. Llegamos 4 horas antes, con tiempo de sobra."
          }
        },
        {
          "@type": "Question",
          "name": "\xBFCubren salones en zona industrial de Cuautitl\xE1n Izcalli?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "S\xED. Conocemos los jardines y salones de la zona industrial reconvertida, Multiplaza, terrazas residenciales en Arboledas y Los Reyes. Tenemos experiencia en cada tipo de espacio."
          }
        }
      ]
    }
  ]);
  const serviciosRelacionados = [
    {
      title: "Guirnaldas de Focos Edison",
      image: "/img/guirnaldas/guirnaldas-edison-hacienda-boda.avif",
      alt: "Guirnaldas Edison iluminando jard\xEDn para fiesta",
      description: "Focos LED o vintage, cableado IP65, resistentes a lluvia. La base del ambiente en cualquier fiesta en Cuautitl\xE1n Izcalli.",
      link: "/servicios/guirnaldas/"
    },
    {
      title: "Luces Neon Personalizadas",
      image: "/img/luces-neon/luces-neon-nombres-boda.avif",
      alt: "Luces neon personalizadas para XV a\xF1os",
      description: "Nombres, iniciales, frases. Luces ne\xF3n de colores \xE1mbar, rosa, azul, blanco. Perfecto para XV a\xF1os y cumplea\xF1os.",
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
    { label: "Cuautitl\xE1n Izcalli" }
  ] })} ` })}`, "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, { "title": "Renta de Iluminaci\xF3n en Cuautitl\xE1n Izcalli", "subtitle": "Especializaci\xF3n en XV a\xF1os y fiestas familiares. M\xE1s de 200 eventos iluminados en la zona. Transporte e instalaci\xF3n incluidos.", "whatsappText": "Hola,%20quiero%20cotizar%20iluminacion%20para%20mi%20evento%20en%20Cuautitlan%20Izcalli", "introParagraph1": "Cuautitl\xE1n Izcalli es la zona de fiestas familiares y XV a\xF1os del norte metropolitano. Salones amplios, jardines reconvertidos de zona industrial, terrazas residenciales con vistas \u2014 los espacios que necesitan iluminaci\xF3n profesional para transformarse. <strong>REDEIL lleva m\xE1s de 20 a\xF1os iluminando eventos en Cuautitl\xE1n Izcalli</strong>. XV a\xF1os en salones de Centro Cuautitl\xE1n, fiestas familiares en jardines de Arboledas, recepciones en terrazas de Los Reyes Izcalli. Conocemos cada venue, cada sal\xF3n, cada espacio. 200+ eventos al a\xF1o en la zona norte. No es suerte \u2014 es conocimiento del terreno + equipo propio + experiencia.", "introParagraph2": "Somos los que montamos las guirnaldas sobre las columnas de los salones. Los que iluminan el vals de XV a\xF1os con luces ne\xF3n personalizadas. Los que transforman un jard\xEDn com\xFAn en un espacio m\xE1gico con DJ lighting. \xBFCu\xE1les son los venues que m\xE1s montamos? Jardines y salones en zona industrial reconvertida, Centro Comercial Multiplaza, terrazas residenciales en Arboledas y Los Reyes Izcalli. Cada uno requiere estrategia diferente. El equipo llega 4 horas antes. Monta en 2-3 horas. Todo probado antes de que lleguen los invitados. Precio transparente: no cobramos cargos ocultos." })}  ${maybeRenderHead()}<section class="stats-section-enhanced"> <div class="container"> <div class="stats-grid-enhanced"> <div class="stat-card-enhanced"> <span class="stat-number-enhanced">20+</span> <span class="stat-label-enhanced">Años en Cuautitlán</span> </div> <div class="stat-card-enhanced"> <span class="stat-number-enhanced">200+</span> <span class="stat-label-enhanced">Eventos/Año</span> </div> <div class="stat-card-enhanced"> <span class="stat-number-enhanced">2h</span> <span class="stat-label-enhanced">Instalación Rápida</span> </div> <div class="stat-card-enhanced"> <span class="stat-number-enhanced">100%</span> <span class="stat-label-enhanced">Cobertura Zona</span> </div> </div> </div> </section> ${renderComponent($$result2, "CtaBar", $$CtaBar, { "headline": "\xBFPara qu\xE9 tipo de evento necesitas iluminaci\xF3n?", "items": [
    { label: "Bodas", href: "/eventos/bodas/", icon: "iluminacion" },
    { label: "XV A\xF1os", href: "/eventos/xv-anos/", icon: "iluminacion" },
    { label: "Corporativos", href: "/eventos/corporativos/", icon: "iluminacion" },
    { label: "Cotiza Ahora", href: "/contacto/", icon: "cotizar" }
  ] })}  <section class="services-section"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Por qu\xE9 Nosotros en Cuautitl\xE1n Izcalli", "subtitle": "4 razones por las que REDEIL es el proveedor de iluminaci\xF3n en Cuautitl\xE1n Izcalli.", "paragraph1": "M\xE1s del 50% de nuestros montajes en Cuautitl\xE1n Izcalli son XV a\xF1os y fiestas familiares. Sabemos qu\xE9 iluminaci\xF3n transforma un sal\xF3n est\xE1ndar en un espacio de celebraci\xF3n inolvidable. Guirnaldas en el techo, luces ne\xF3n con el nombre de la quincea\xF1era, DJ lighting en la pista. Cada detalle cuenta.", "paragraph2": "Log\xEDstica propia con ruta directa desde CDMX. Colocamos guirnaldas, uplighting, efectos especiales en tiempo r\xE9cord. Eso te deja tranquilo \u2014 no hay estr\xE9s de \xFAltima hora. Salones amplios, jardines reconvertidos, terrazas residenciales. Sabemos c\xF3mo distribuir la iluminaci\xF3n en cada tipo de espacio." })} <div class="features-grid-4"> <div class="feature-card"> <h3>Especialización en XV Años</h3> <p>Más del 50% de nuestros montajes son XV años. Sabemos qué iluminación hace que el vals y la fiesta sean memorables.</p> </div> <div class="feature-card"> <h3>Instalación en 2 Horas</h3> <p>Logística propia, equipo entrenado. Montaje ágil que te deja tranquilo. No hay estrés de última hora.</p> </div> <div class="feature-card"> <h3>Cobertura Zona Norte</h3> <p>Cubrimos Cuautitlán Izcalli, Centro Cuautitlán, Arboledas, Los Reyes. Ruta directa, sin cargos extra por traslado.</p> </div> <div class="feature-card"> <h3>Fiestas Familiares Completas</h3> <p>Guirnaldas + bocinas + luces neón + DJ lighting. Transformamos cualquier salón o jardín en espacio de fiesta.</p> </div> </div> </div> </section>  <section class="services-section services-alt"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Servicios Principales", "subtitle": "Las 4 soluciones de iluminaci\xF3n m\xE1s solicitadas en Cuautitl\xE1n Izcalli.", "paragraph1": "Cada servicio se adapta a tu evento. Si necesitas combinar varios servicios, el precio baja porque compartimos traslado y operador.", "paragraph2": "Cotiza por WhatsApp con fotos de tu venue. Respuesta en minutos." })} <div class="services-grid"> ${serviciosRelacionados.map((s) => renderTemplate`${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "title": s.title, "image": s.image, "alt": s.alt, "description": s.description, "link": s.link })}`)} </div> </div> </section>  <section class="faq-section"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Preguntas sobre Iluminaci\xF3n en Cuautitl\xE1n Izcalli", "subtitle": "Lo que todos preguntan antes de cotizar.", "paragraph1": "Si tienes otra duda, escr\xEDbenos por WhatsApp. Respuesta en minutos.", "paragraph2": "Cada espacio es diferente \u2014 por eso hacemos propuestas a la medida." })} </div> ${renderComponent($$result2, "FaqSection", $$FaqSection, { "items": [
    {
      question: "\xBFCu\xE1l es la cobertura de REDEIL en Cuautitl\xE1n Izcalli?",
      answer: "Cubrimos todo Cuautitl\xE1n Izcalli, Centro Cuautitl\xE1n, Arboledas, Los Reyes Izcalli y alrededores. Salones, jardines, terrazas. Transporte incluido en toda la zona."
    },
    {
      question: "\xBFCu\xE1nto cuesta iluminar unos XV a\xF1os en Cuautitl\xE1n Izcalli?",
      answer: "Unos XV a\xF1os b\xE1sicos con guirnaldas arrancan desde $5,500. Paquetes completos con luces ne\xF3n, bocinas y DJ lighting, $15,000+. Cotiza por WhatsApp con detalles de tu evento."
    },
    {
      question: "\xBFCu\xE1l es el tiempo de instalaci\xF3n?",
      answer: "Nuestro equipo en Cuautitl\xE1n Izcalli tarda 2-3 horas en montar un evento est\xE1ndar. Llegamos 4 horas antes, con tiempo de sobra."
    },
    {
      question: "\xBFCubren salones y jardines en zona industrial reconvertida?",
      answer: "S\xED. Conocemos los jardines y salones de la zona industrial reconvertida, los espacios cerca de Multiplaza, y las terrazas residenciales. Tenemos experiencia en cada tipo de espacio de Cuautitl\xE1n Izcalli."
    },
    {
      question: "\xBFC\xF3mo funcionan las guirnaldas en jardines al aire libre?",
      answer: "IP65 certificado. Lluvia directa, humedad, cambios de temperatura. Todo resistido. Nuestras guirnaldas est\xE1n dise\xF1adas para funcionar perfectamente en los jardines al aire libre de la zona norte."
    },
    {
      question: "\xBFPueden personalizar la iluminaci\xF3n para mis XV a\xF1os?",
      answer: "S\xED. Personalizaci\xF3n total. Luces ne\xF3n con el nombre de la quincea\xF1era, colores coordinados con el tema de la fiesta, efectos sincronizados para el vals. M\xE1ndanos una foto del sal\xF3n y te hacemos propuesta en 24 horas."
    },
    {
      question: "\xBFQu\xE9 incluye el servicio de transporte e instalaci\xF3n?",
      answer: "Todo. Traslado de equipo desde CDMX por autopista directo a Cuautitl\xE1n Izcalli, montaje profesional, pruebas, operaci\xF3n durante el evento, desmontaje al finalizar. Cero cargos ocultos."
    },
    {
      question: "\xBFCon cu\xE1nta anticipaci\xF3n debo reservar?",
      answer: "Idealmente 2-3 semanas. Cuautitl\xE1n Izcalli en temporada alta (noviembre-enero, mayo-junio) se llena r\xE1pido. Entre antes reserves, mejor precio y disponibilidad garantizada."
    }
  ] })} </section>  <section class="cta-section"> <div class="container"> <div class="cta-content"> <h2>¿Listo para iluminar tu evento en Cuautitlán Izcalli?</h2> <p>Mándanos fotos de tu venue por WhatsApp y te cotizamos en minutos. Transporte, instalación y montaje incluidos.</p> <div class="cta-buttons"> <a href="https://wa.me/525530682988?text=Hola,%20quiero%20cotizar%20iluminacion%20para%20mi%20evento%20en%20Cuautitlan%20Izcalli" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp btn-lg">Cotiza por WhatsApp</a> <a href="tel:+525530682988" class="btn btn-primary btn-lg">Llámanos — 55 3068 2988</a> </div> </div> </div> </section> ` })}`;
}, "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/pages/zonas/cuautitlan.astro", void 0);

const $$file = "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/pages/zonas/cuautitlan.astro";
const $$url = "/zonas/cuautitlan";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Cuautitlan,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
