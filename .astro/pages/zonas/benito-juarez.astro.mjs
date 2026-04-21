import { c as createComponent, b as renderComponent, r as renderTemplate, m as maybeRenderHead, F as Fragment } from '../../chunks/astro/server_D8pMnQBn.mjs';
import 'piccolore';
import { $ as $$BaseLayout, a as $$Breadcrumbs } from '../../chunks/Breadcrumbs_BkFbHGbf.mjs';
import { $ as $$Hero } from '../../chunks/Hero_3Is3fruG.mjs';
import { $ as $$CtaBar } from '../../chunks/CtaBar_CdFZlCZU.mjs';
import { $ as $$SectionHeader } from '../../chunks/SectionHeader_mLKzHzNX.mjs';
import { $ as $$ServiceCard } from '../../chunks/ServiceCard_Bli7ALj4.mjs';
import { $ as $$FaqSection } from '../../chunks/FaqSection_CzcP3CIi.mjs';
export { renderers } from '../../renderers.mjs';

const $$BenitoJuarez = createComponent(($$result, $$props, $$slots) => {
  const title = "Renta de Iluminaci\xF3n en Benito Ju\xE1rez | Centro CDMX | REDEIL";
  const description = "Renta iluminaci\xF3n Benito Ju\xE1rez, Centro CDMX. R\xE1pido, accesible, profesional. 400+ eventos/a\xF1o. Montaje 2 horas. Cotiza: 55 3068 2988";
  const canonical = "https://rentadeiluminacion.com/zonas/benito-juarez/";
  const schemaMarkup = JSON.stringify([
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Renta de Iluminaci\xF3n en Benito Ju\xE1rez",
      "serviceType": "Iluminaci\xF3n para Eventos",
      "areaServed": {
        "@type": "City",
        "name": "Benito Ju\xE1rez",
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
          "name": "Centro Hist\xF3rico CDMX",
          "geo": { "@type": "GeoCoordinates", "latitude": 19.4326, "longitude": -99.1332 }
        },
        {
          "@type": "Place",
          "name": "Paseo de la Reforma",
          "geo": { "@type": "GeoCoordinates", "latitude": 19.4269, "longitude": -99.1631 }
        },
        {
          "@type": "Place",
          "name": "Zona Rosa",
          "geo": { "@type": "GeoCoordinates", "latitude": 19.4233, "longitude": -99.1662 }
        }
      ],
      "description": "Renta de iluminaci\xF3n profesional para eventos en Benito Ju\xE1rez, Centro CDMX, Reforma, Roma, Condesa. Respuesta r\xE1pida. Transporte e instalaci\xF3n incluidos.",
      "priceRange": "$$"
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "\xBFCu\xE1l es la cobertura en Benito Ju\xE1rez?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Centro hist\xF3rico, Paseo de la Reforma, Zona Rosa, Ju\xE1rez, Roma, Condesa, Escand\xF3n, Doctores, Hip\xF3dromo. Todo accesible en m\xE1ximo 20 minutos."
          }
        },
        {
          "@type": "Question",
          "name": "\xBFCu\xE1nto cuesta iluminar un evento en Benito Ju\xE1rez?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Desde $3,500 (guirnaldas b\xE1sicas). Boda completa: $9,000-15,000. XV a\xF1os con luces y sonido: $7,000-12,000. Cotiza por WhatsApp."
          }
        },
        {
          "@type": "Question",
          "name": "\xBFPueden montar en azoteas y departamentos?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "S\xED. Azoteas, patios, departamentos. Adaptamos el montaje. Cuidado m\xE1ximo con estructuras, sin da\xF1ar pisos ni paredes."
          }
        },
        {
          "@type": "Question",
          "name": "\xBFCu\xE1l es el tiempo de respuesta?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "30 minutos. Escribes por WhatsApp, te llamamos en 30. Visitamos el lugar ese mismo d\xEDa si es posible."
          }
        }
      ]
    }
  ]);
  const serviciosRelacionados = [
    {
      title: "Iluminaci\xF3n B\xE1sica \u2014 Guirnaldas",
      image: "/img/guirnaldas/guirnaldas-led-fiestas-cdmx.avif",
      alt: "Guirnaldas LED para fiestas en CDMX",
      description: "Focos Edison, cableado IP65. Ideal para XV a\xF1os, bodas \xEDntimas. Desde $3,500.",
      link: "/servicios/guirnaldas/"
    },
    {
      title: "Luces Neon Personalizadas",
      image: "/img/luces-neon/luces-neon-nombres-boda.avif",
      alt: "Luces neon personalizadas para evento",
      description: "Nombres, iniciales, frases. Luces ne\xF3n de colores. Opci\xF3n premium asequible.",
      link: "/servicios/luces-neon/"
    },
    {
      title: "Bocinas y Sonido",
      image: "/img/bocinas/bocinas-sistema-profesional.avif",
      alt: "Sistema de sonido profesional",
      description: "Sistema de audio profesional para salones, departamentos, patios. Calidad de concierto.",
      link: "/servicios/bocinas-djs/"
    },
    {
      title: "Efectos Especiales \u2014 Cabezas M\xF3viles",
      image: "/img/cabezas-moviles/cabezas-moviles-boda.avif",
      alt: "Cabezas m\xF3viles para evento",
      description: "Luces animadas, colores sincronizados. Transforma cualquier sal\xF3n en espacio de fiesta.",
      link: "/servicios/cabezas-moviles/"
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "canonical": canonical, "schemaMarkup": schemaMarkup }, { "breadcrumbs": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "breadcrumbs" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Breadcrumbs", $$Breadcrumbs, { "items": [
    { label: "Inicio", href: "/" },
    { label: "Zonas de Cobertura", href: "/zonas-de-cobertura/" },
    { label: "Benito Ju\xE1rez" }
  ] })} ` })}`, "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, { "title": "Renta de Iluminaci\xF3n en Benito Ju\xE1rez", "subtitle": "Centro de CDMX. Cobertura r\xE1pida, presupuesto accesible, montaje en 2 horas. Cotiza al instante.", "whatsappText": "Hola,%20quiero%20cotizar%20iluminacion%20para%20mi%20evento%20en%20Benito%20Ju\xE1rez", "introParagraph1": "Benito Ju\xE1rez es el coraz\xF3n de CDMX. Centro hist\xF3rico, Paseo de la Reforma, zonas residenciales densas, salones accesibles. Aqu\xED acontecen 400+ eventos al a\xF1o \u2014 y <strong>REDEIL ilumina la mayor\xEDa</strong>. No porque seamos m\xE1gicos, sino porque estamos a la vuelta. Equipo base en zona c\xE9ntrica. Respuesta r\xE1pida. Presupuesto realista. Montaje en 2 horas m\xE1ximo.", "introParagraph2": "Bodas en salones de Ju\xE1rez, XV a\xF1os en la Roma, corporativos en Reforma, fiestas en departamentos del Paseo. Cada evento es diferente pero el patr\xF3n es el mismo: llamas, nosotros respondemos en 30 minutos, visitamos el lugar, cotizamos, confirmamos, montamos. Sin tr\xE1mites, sin demoras. \xBFPor qu\xE9 elegirnos en Benito Ju\xE1rez? Proximidad. Nuestro equipo est\xE1 aqu\xED. Cobertura garantizada sin traslado de 2+ horas. Presupuesto sincero. Montaje \xE1gil en promedio 2-3 horas." })}  ${maybeRenderHead()}<section class="stats-section-enhanced"> <div class="container"> <div class="stats-grid-enhanced"> <div class="stat-card-enhanced"> <span class="stat-number-enhanced">400+</span> <span class="stat-label-enhanced">Eventos/Año en Zona</span> </div> <div class="stat-card-enhanced"> <span class="stat-number-enhanced">30min</span> <span class="stat-label-enhanced">Tiempo de Respuesta</span> </div> <div class="stat-card-enhanced"> <span class="stat-number-enhanced">2h</span> <span class="stat-label-enhanced">Montaje Ágil</span> </div> <div class="stat-card-enhanced"> <span class="stat-number-enhanced">$$$</span> <span class="stat-label-enhanced">Presupuesto Accesible</span> </div> </div> </div> </section> ${renderComponent($$result2, "CtaBar", $$CtaBar, { "headline": "\xBFQu\xE9 tipo de evento tienes en Benito Ju\xE1rez?", "items": [
    { label: "Bodas", href: "/eventos/bodas/", icon: "iluminacion" },
    { label: "XV A\xF1os", href: "/eventos/xv-anos/", icon: "iluminacion" },
    { label: "Corporativos", href: "/eventos/corporativos/", icon: "iluminacion" },
    { label: "Cotiza al Instante", href: "/contacto/", icon: "cotizar" }
  ] })}  <section class="services-section"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Por qu\xE9 Nosotros en Benito Ju\xE1rez", "subtitle": "4 razones por las que REDEIL es la mejor opci\xF3n para tu evento en el centro.", "paragraph1": "Equipo base en zona c\xE9ntrica. Respuesta en 30 minutos. Montaje en 2 horas. Cobertura garantizada sin demoras. Costos honestos. No cobramos caro por estar en centro. Paquetes b\xE1sicos desde $3,500.", "paragraph2": "Salones, azoteas, departamentos, patios. Cualquier tipo de espacio en el centro, adaptamos el montaje. Hablas con el mismo equipo que va a montar. Sin intermediarios. Preguntas t\xE9cnicas, respuestas directas. Cambios en el \xFAltimo minuto, resolvemos." })} <div class="features-grid-4"> <div class="feature-card"> <h3>Proximidad y Velocidad</h3> <p>Equipo base en zona céntrica. Respuesta en 30 minutos. Montaje en 2 horas. Cobertura garantizada.</p> </div> <div class="feature-card"> <h3>Presupuesto Accesible</h3> <p>Costos honestos. No inflamos precios por zona céntrica. Desde $3,500.</p> </div> <div class="feature-card"> <h3>Flexibilidad de Espacios</h3> <p>Salones, azoteas, departamentos, patios. Adaptamos a cualquier tipo de espacio.</p> </div> <div class="feature-card"> <h3>Atención Directa</h3> <p>Hablas con el equipo que va a montar. Sin intermediarios. Preguntas directas, respuestas directas.</p> </div> </div> </div> </section>  <section class="services-section services-alt"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Servicios Disponibles", "subtitle": "Las 4 soluciones de iluminaci\xF3n m\xE1s populares en Benito Ju\xE1rez.", "paragraph1": "Cada paquete se ajusta a tu evento y presupuesto. Combina servicios y el precio baja.", "paragraph2": "Cotiza por WhatsApp con fotos de tu espacio. Respuesta en minutos." })} <div class="services-grid"> ${serviciosRelacionados.map((s) => renderTemplate`${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "title": s.title, "image": s.image, "alt": s.alt, "description": s.description, "link": s.link })}`)} </div> </div> </section>  <section class="faq-section"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Preguntas Frecuentes \u2014 Benito Ju\xE1rez", "subtitle": "Lo que todos preguntan cuando cotizan en el centro.", "paragraph1": "Si tienes otra duda, escr\xEDbenos por WhatsApp. Respuesta en minutos.", "paragraph2": "Cada espacio es diferente \u2014 hacemos propuestas a la medida." })} </div> ${renderComponent($$result2, "FaqSection", $$FaqSection, { "items": [
    {
      question: "\xBFCu\xE1l es exactamente la cobertura en Benito Ju\xE1rez?",
      answer: "Centro hist\xF3rico, Paseo de la Reforma, Zona Rosa, Ju\xE1rez, Roma, Condesa, Escand\xF3n, Doctores, Hip\xF3dromo. Todo accesible en m\xE1ximo 20 minutos desde nuestra base."
    },
    {
      question: "\xBFCu\xE1nto cuesta iluminar un evento en Benito Ju\xE1rez?",
      answer: "Desde $3,500 (guirnaldas b\xE1sicas para 30 personas). Boda completa con iluminaci\xF3n m\xFAltiple: $9,000-15,000. XV a\xF1os con luces y sonido: $7,000-12,000."
    },
    {
      question: "\xBFPueden montar en azoteas y departamentos?",
      answer: "S\xED. Azoteas, patios, departamentos. Adaptamos el montaje al espacio. Cuidado m\xE1ximo con estructuras, sin da\xF1ar pisos ni paredes."
    },
    {
      question: "\xBFCu\xE1l es el tiempo de respuesta?",
      answer: "30 minutos. Escribes por WhatsApp, te llamamos en 30. Visitamos el lugar ese mismo d\xEDa si es posible, cotizamos en 2 horas."
    },
    {
      question: "\xBFQu\xE9 sucede si llueve?",
      answer: "Todo nuestro cableado es IP65. Lluvia, humedad, nada es problema. Julio y agosto (meses lluviosos), nuestros meses m\xE1s ocupados en Benito Ju\xE1rez."
    },
    {
      question: "\xBFPueden hacer cambios el d\xEDa del evento?",
      answer: "S\xED. El equipo llega 4 horas antes. Si quieres ajustar colores, mover luces, agregar un efecto, lo hacemos. Flexibilidad total."
    },
    {
      question: "\xBFOfrecen planes de pago?",
      answer: "S\xED. 50% anticipo, 50% al confirmar todo. O pago completo el d\xEDa del evento, seg\xFAn prefieras. Sin sorpresas."
    },
    {
      question: "\xBFA qui\xE9n le hablo si tengo urgencia?",
      answer: "Llama directo al 55 3068 2988. No contestadora. Habl\xE1s con el equipo. Urgencias, eventos de \xFAltima hora, nos encanta."
    }
  ] })} </section>  <section class="cta-section"> <div class="container"> <div class="cta-content"> <h2>¿Listo para cotizar tu evento en Benito Juárez?</h2> <p>Escríbenos por WhatsApp. Respuesta en minutos. Sin demoras, sin sorpresas.</p> <div class="cta-buttons"> <a href="https://wa.me/525530682988?text=Hola,%20quiero%20cotizar%20iluminacion%20para%20mi%20evento%20en%20Benito%20Juárez" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp btn-lg">Cotiza por WhatsApp</a> <a href="tel:+525530682988" class="btn btn-primary btn-lg">Llámanos — 55 3068 2988</a> </div> </div> </div> </section> ` })}`;
}, "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/pages/zonas/benito-juarez.astro", void 0);

const $$file = "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/pages/zonas/benito-juarez.astro";
const $$url = "/zonas/benito-juarez";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$BenitoJuarez,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
