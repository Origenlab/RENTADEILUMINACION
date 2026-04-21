import { c as createComponent, b as renderComponent, r as renderTemplate, m as maybeRenderHead, F as Fragment } from '../../chunks/astro/server_D8pMnQBn.mjs';
import 'piccolore';
import { $ as $$BaseLayout, a as $$Breadcrumbs } from '../../chunks/Breadcrumbs_BkFbHGbf.mjs';
import { $ as $$Hero } from '../../chunks/Hero_3Is3fruG.mjs';
import { $ as $$CtaBar } from '../../chunks/CtaBar_CdFZlCZU.mjs';
import { $ as $$SectionHeader } from '../../chunks/SectionHeader_mLKzHzNX.mjs';
import { $ as $$ServiceCard } from '../../chunks/ServiceCard_Bli7ALj4.mjs';
import { $ as $$FaqSection } from '../../chunks/FaqSection_CzcP3CIi.mjs';
export { renderers } from '../../renderers.mjs';

const $$Atizapan = createComponent(($$result, $$props, $$slots) => {
  const title = "Renta de Iluminaci\xF3n en Atizap\xE1n de Zaragoza | Bodas en Zona Esmeralda | REDEIL";
  const description = "Renta de iluminaci\xF3n para bodas al aire libre en Atizap\xE1n, Zona Esmeralda y Ciudad Sat\xE9lite. Guirnaldas, luces y sonido. Instalaci\xF3n en 2h. Cotiza: 55 3068 2988";
  const canonical = "https://rentadeiluminacion.com/zonas/atizapan/";
  const schemaMarkup = JSON.stringify([
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Renta de Iluminaci\xF3n en Atizap\xE1n de Zaragoza",
      "serviceType": "Iluminaci\xF3n para Eventos",
      "areaServed": {
        "@type": "City",
        "name": "Atizap\xE1n de Zaragoza",
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
          "name": "Atizap\xE1n de Zaragoza",
          "geo": { "@type": "GeoCoordinates", "latitude": 19.5587, "longitude": -99.2543 }
        },
        {
          "@type": "Place",
          "name": "Zona Esmeralda",
          "geo": { "@type": "GeoCoordinates", "latitude": 19.532, "longitude": -99.268 }
        },
        {
          "@type": "Place",
          "name": "Ciudad Sat\xE9lite",
          "geo": { "@type": "GeoCoordinates", "latitude": 19.5098, "longitude": -99.234 }
        }
      ],
      "description": "Renta de iluminaci\xF3n profesional para bodas al aire libre, XV a\xF1os y eventos en Atizap\xE1n de Zaragoza, Zona Esmeralda, Ciudad Sat\xE9lite y Lomas de Atizap\xE1n. Especializaci\xF3n en jardines y terrazas. Transporte e instalaci\xF3n incluidos.",
      "priceRange": "$$"
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "\xBFCu\xE1l es la cobertura de REDEIL en Atizap\xE1n?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Cubrimos todo Atizap\xE1n de Zaragoza, Zona Esmeralda, Ciudad Sat\xE9lite, Lomas de Atizap\xE1n y alrededores. Jardines, terrazas, salones, clubes de golf. Transporte incluido en toda la zona."
          }
        },
        {
          "@type": "Question",
          "name": "\xBFCu\xE1nto cuesta iluminar una boda en Zona Esmeralda?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Una boda b\xE1sica con guirnaldas arranca desde $7,000. Bodas completas con m\xFAltiples servicios en jardines de Zona Esmeralda, $20,000+. Cotiza por WhatsApp con detalles de tu evento."
          }
        },
        {
          "@type": "Question",
          "name": "\xBFCu\xE1l es el tiempo de instalaci\xF3n?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Nuestro equipo en Atizap\xE1n tarda 2-3 horas en montar un evento est\xE1ndar. Llegamos 4 horas antes, con tiempo de sobra."
          }
        },
        {
          "@type": "Question",
          "name": "\xBFTrabajan con los jardines y salones de Zona Esmeralda?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "S\xED. Jardines y salones de Zona Esmeralda, Club de Golf Bellavista, terrazas en zona boscosa \u2014 los conocemos todos. Tenemos experiencia con cada tipo de espacio en la zona."
          }
        }
      ]
    }
  ]);
  const serviciosRelacionados = [
    {
      title: "Guirnaldas de Focos Edison",
      image: "/img/guirnaldas/guirnaldas-edison-hacienda-boda.avif",
      alt: "Guirnaldas Edison iluminando jard\xEDn para boda",
      description: "Focos LED o vintage, cableado IP65, resistentes a lluvia. La base del ambiente en cualquier boda al aire libre en Atizap\xE1n.",
      link: "/servicios/guirnaldas/"
    },
    {
      title: "Luces Neon Personalizadas",
      image: "/img/luces-neon/luces-neon-nombres-boda.avif",
      alt: "Luces neon personalizadas para boda",
      description: "Nombres de los novios, iniciales, frases. Luces ne\xF3n de colores \xE1mbar, rosa, azul, blanco. Perfecto para bodas en jardines.",
      link: "/servicios/luces-neon/"
    },
    {
      title: "Cabezas M\xF3viles \u2014 Sky Tracker",
      image: "/img/cabezas-moviles/cabezas-moviles-boda.avif",
      alt: "Cabezas m\xF3viles iluminando pista de baile",
      description: "Proyecciones animadas, colores sincronizados, efectos especiales. El efecto de escenario profesional para tu evento.",
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
    { label: "Atizap\xE1n de Zaragoza" }
  ] })} ` })}`, "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, { "title": "Renta de Iluminaci\xF3n en Atizap\xE1n de Zaragoza", "subtitle": "Bodas al aire libre en jardines y terrazas de Zona Esmeralda. M\xE1s de 120 eventos iluminados en la zona. Transporte e instalaci\xF3n incluidos.", "whatsappText": "Hola,%20quiero%20cotizar%20iluminacion%20para%20mi%20evento%20en%20Atizapan", "introParagraph1": "Atizap\xE1n es la capital de las bodas al aire libre en el norte del Valle de M\xE9xico. Jardines amplios en Zona Esmeralda, terrazas rodeadas de bosque, el Club de Golf Bellavista \u2014 los espacios naturales aqu\xED son espectaculares. <strong>REDEIL lleva m\xE1s de 15 a\xF1os iluminando eventos en Atizap\xE1n y Zona Esmeralda</strong>. Bodas en jardines con vista a las monta\xF1as, XV a\xF1os en salones de Ciudad Sat\xE9lite, recepciones en terrazas boscosas de Lomas de Atizap\xE1n. Conocemos cada venue, cada jard\xEDn, cada terraza. 120+ eventos al a\xF1o en la zona. Es experiencia + equipo propio + conocimiento del terreno.", "introParagraph2": "Somos los que montamos las guirnaldas entre los \xE1rboles de los jardines de Zona Esmeralda. Los que iluminan la primera danza bajo las estrellas en terrazas con vista al bosque. Los que transforman un jard\xEDn com\xFAn en un escenario m\xE1gico. \xBFVenues frecuentes? Jardines y salones de Zona Esmeralda, Club de Golf Bellavista, terrazas en zona boscosa, salones en Ciudad Sat\xE9lite, Lomas de Atizap\xE1n. Cada espacio requiere estrategia diferente. El equipo llega 4 horas antes. Monta en 2-3 horas. Todo probado antes de que lleguen los invitados. Precio transparente: sin cargos ocultos." })}  ${maybeRenderHead()}<section class="stats-section-enhanced"> <div class="container"> <div class="stats-grid-enhanced"> <div class="stat-card-enhanced"> <span class="stat-number-enhanced">15+</span> <span class="stat-label-enhanced">Años en Atizapán</span> </div> <div class="stat-card-enhanced"> <span class="stat-number-enhanced">120+</span> <span class="stat-label-enhanced">Eventos/Año</span> </div> <div class="stat-card-enhanced"> <span class="stat-number-enhanced">2h</span> <span class="stat-label-enhanced">Instalación Rápida</span> </div> <div class="stat-card-enhanced"> <span class="stat-number-enhanced">100%</span> <span class="stat-label-enhanced">Cobertura Zona</span> </div> </div> </div> </section> ${renderComponent($$result2, "CtaBar", $$CtaBar, { "headline": "\xBFPara qu\xE9 tipo de evento necesitas iluminaci\xF3n?", "items": [
    { label: "Bodas", href: "/eventos/bodas/", icon: "iluminacion" },
    { label: "XV A\xF1os", href: "/eventos/xv-anos/", icon: "iluminacion" },
    { label: "Corporativos", href: "/eventos/corporativos/", icon: "iluminacion" },
    { label: "Cotiza Ahora", href: "/contacto/", icon: "cotizar" }
  ] })}  <section class="services-section"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Por qu\xE9 Nosotros en Atizap\xE1n", "subtitle": "4 razones por las que REDEIL es el proveedor de iluminaci\xF3n en Atizap\xE1n y Zona Esmeralda.", "paragraph1": "Zona Esmeralda es el epicentro de las bodas al aire libre. Jardines enormes, terrazas con vista al bosque, clima fresco. La iluminaci\xF3n con guirnaldas entre los \xE1rboles crea un ambiente que ning\xFAn sal\xF3n cerrado puede igualar.", "paragraph2": "Log\xEDstica propia para llegar a cualquier venue en Atizap\xE1n. Equipo resistente a condiciones de bosque \u2014 humedad, viento, cambios de temperatura. Todo IP65 certificado." })} <div class="features-grid-4"> <div class="feature-card"> <h3>Especialistas en Jardines</h3> <p>Bodas al aire libre son nuestra especialidad en Atizapán. Guirnaldas entre árboles, uplighting en jardines, iluminación que respeta el entorno natural.</p> </div> <div class="feature-card"> <h3>Instalación en 2 Horas</h3> <p>Logística propia, equipo entrenado. Montaje ágil en jardines amplios y terrazas de difícil acceso.</p> </div> <div class="feature-card"> <h3>Conocimiento de Venues</h3> <p>Zona Esmeralda, Club de Golf Bellavista, terrazas boscosas, salones en Satélite. Conocemos cada espacio y sus necesidades.</p> </div> <div class="feature-card"> <h3>Equipo para Exteriores</h3> <p>IP65 certificado. Lluvia, humedad, viento nocturno — nuestro equipo resiste todo. Perfecto para eventos al aire libre en zona boscosa.</p> </div> </div> </div> </section>  <section class="services-section services-alt"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Servicios Principales", "subtitle": "Las 4 soluciones de iluminaci\xF3n m\xE1s solicitadas en Atizap\xE1n y Zona Esmeralda.", "paragraph1": "Cada servicio se adapta a tu evento. Si necesitas combinar varios servicios, el precio baja porque compartimos traslado y operador.", "paragraph2": "Cotiza por WhatsApp con fotos de tu venue. Respuesta en minutos." })} <div class="services-grid"> ${serviciosRelacionados.map((s) => renderTemplate`${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "title": s.title, "image": s.image, "alt": s.alt, "description": s.description, "link": s.link })}`)} </div> </div> </section>  <section class="faq-section"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Preguntas sobre Iluminaci\xF3n en Atizap\xE1n", "subtitle": "Lo que todos preguntan antes de cotizar.", "paragraph1": "Si tienes otra duda, escr\xEDbenos por WhatsApp. Respuesta en minutos.", "paragraph2": "Cada espacio es diferente \u2014 por eso hacemos propuestas a la medida." })} </div> ${renderComponent($$result2, "FaqSection", $$FaqSection, { "items": [
    {
      question: "\xBFCu\xE1l es la cobertura de REDEIL en Atizap\xE1n?",
      answer: "Cubrimos todo Atizap\xE1n de Zaragoza, Zona Esmeralda, Ciudad Sat\xE9lite, Lomas de Atizap\xE1n y alrededores. Jardines, terrazas, salones, clubes de golf. Transporte incluido en toda la zona."
    },
    {
      question: "\xBFCu\xE1nto cuesta iluminar una boda en Zona Esmeralda?",
      answer: "Una boda b\xE1sica con guirnaldas arranca desde $7,000. Bodas completas con m\xFAltiples servicios en jardines de Zona Esmeralda, $20,000+. Cotiza por WhatsApp con detalles de tu evento."
    },
    {
      question: "\xBFCu\xE1l es el tiempo de instalaci\xF3n?",
      answer: "Nuestro equipo en Atizap\xE1n tarda 2-3 horas en montar un evento est\xE1ndar. Llegamos 4 horas antes, con tiempo de sobra."
    },
    {
      question: "\xBFTrabajan con los jardines y salones de Zona Esmeralda?",
      answer: "S\xED. Jardines y salones de Zona Esmeralda, Club de Golf Bellavista, terrazas en zona boscosa \u2014 los conocemos todos. Tenemos experiencia con cada tipo de espacio al aire libre en la zona."
    },
    {
      question: "\xBFLas guirnaldas funcionan bien en jardines al aire libre?",
      answer: "Perfecto. Certificaci\xF3n IP65 en todo el equipo. Lluvia, roc\xEDo, humedad nocturna, viento \u2014 todo resistido. Los jardines de Zona Esmeralda son nuestro terreno favorito para guirnaldas Edison."
    },
    {
      question: "\xBFPueden iluminar un evento en el Club de Golf Bellavista?",
      answer: "S\xED. Hemos montado m\xFAltiples eventos en Bellavista. Conocemos sus instalaciones, accesos y requerimientos t\xE9cnicos. Coordinamos directamente con el equipo del club."
    },
    {
      question: "\xBFQu\xE9 incluye el servicio de transporte e instalaci\xF3n?",
      answer: "Todo. Traslado de equipo desde CDMX, montaje profesional, pruebas, operaci\xF3n durante el evento, desmontaje al finalizar. Sin importar la ubicaci\xF3n en Atizap\xE1n, cero cargos ocultos."
    },
    {
      question: "\xBFCon cu\xE1nta anticipaci\xF3n debo reservar?",
      answer: "Idealmente 3-4 semanas. Zona Esmeralda en temporada de bodas (octubre-enero, abril-junio) se llena r\xE1pido. Los jardines m\xE1s populares se reservan con meses de anticipaci\xF3n."
    }
  ] })} </section>  <section class="cta-section"> <div class="container"> <div class="cta-content"> <h2>¿Listo para iluminar tu evento en Atizapán?</h2> <p>Mándanos fotos de tu venue por WhatsApp y te cotizamos en minutos. Transporte, instalación y montaje incluidos.</p> <div class="cta-buttons"> <a href="https://wa.me/525530682988?text=Hola,%20quiero%20cotizar%20iluminacion%20para%20mi%20evento%20en%20Atizapan" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp btn-lg">Cotiza por WhatsApp</a> <a href="tel:+525530682988" class="btn btn-primary btn-lg">Llámanos — 55 3068 2988</a> </div> </div> </div> </section> ` })}`;
}, "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/pages/zonas/atizapan.astro", void 0);

const $$file = "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/pages/zonas/atizapan.astro";
const $$url = "/zonas/atizapan";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Atizapan,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
