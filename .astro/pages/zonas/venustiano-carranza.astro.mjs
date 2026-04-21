import { c as createComponent, b as renderComponent, r as renderTemplate, m as maybeRenderHead, F as Fragment } from '../../chunks/astro/server_D8pMnQBn.mjs';
import 'piccolore';
import { $ as $$BaseLayout, a as $$Breadcrumbs } from '../../chunks/Breadcrumbs_BkFbHGbf.mjs';
import { $ as $$Hero } from '../../chunks/Hero_3Is3fruG.mjs';
import { $ as $$CtaBar } from '../../chunks/CtaBar_CdFZlCZU.mjs';
import { $ as $$SectionHeader } from '../../chunks/SectionHeader_mLKzHzNX.mjs';
import { $ as $$ServiceCard } from '../../chunks/ServiceCard_Bli7ALj4.mjs';
import { $ as $$FaqSection } from '../../chunks/FaqSection_CzcP3CIi.mjs';
export { renderers } from '../../renderers.mjs';

const $$VenustianoCarranza = createComponent(($$result, $$props, $$slots) => {
  const title = "Renta de Iluminaci\xF3n en Venustiano Carranza | Bodas y XV A\xF1os | REDEIL";
  const description = "Renta de iluminaci\xF3n en Venustiano Carranza. Zona oriente CDMX, aeropuerto, salones tradicionales. Transporte e instalaci\xF3n. Cotiza: 55 3068 2988";
  const canonical = "https://rentadeiluminacion.com/zonas/venustiano-carranza/";
  const schemaMarkup = JSON.stringify([
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Renta de Iluminaci\xF3n en Venustiano Carranza",
      "serviceType": "Iluminaci\xF3n para Eventos",
      "areaServed": {
        "@type": "City",
        "name": "Venustiano Carranza",
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
          "name": "Venustiano Carranza",
          "geo": { "@type": "GeoCoordinates", "latitude": 19.4372, "longitude": -99.0631 }
        },
        {
          "@type": "Place",
          "name": "Aeropuerto",
          "geo": { "@type": "GeoCoordinates", "latitude": 19.4361, "longitude": -99.072 }
        },
        {
          "@type": "Place",
          "name": "Terminal A\xE9rea",
          "geo": { "@type": "GeoCoordinates", "latitude": 19.4361, "longitude": -99.072 }
        }
      ],
      "description": "Renta de iluminaci\xF3n profesional en Venustiano Carranza. Especializaci\xF3n en zona oriente, aeropuerto y salones tradicionales. Transporte e instalaci\xF3n incluidos.",
      "priceRange": "$$"
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "\xBFCu\xE1l es la cobertura de REDEIL en Venustiano Carranza?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Cubrimos Venustiano Carranza, zona aeropuerto y alrededores. Salones, patios, espacios tradicionales. Transporte incluido."
          }
        },
        {
          "@type": "Question",
          "name": "\xBFCu\xE1nto cuesta iluminar una boda en Venustiano Carranza?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Una boda b\xE1sica con guirnaldas arranca desde $6,500. Bodas amplias con m\xFAltiples servicios, $15,000+. Cotiza por WhatsApp."
          }
        },
        {
          "@type": "Question",
          "name": "\xBFCu\xE1l es el tiempo de instalaci\xF3n?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Nuestro equipo en Venustiano Carranza tarda 2-3 horas. Llegamos 4 horas antes, con tiempo de sobra."
          }
        },
        {
          "@type": "Question",
          "name": "\xBFConocen los salones de la zona aeropuerto?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "S\xED. Conocemos los principales salones cercanos al aeropuerto. Experiencia en eventos con log\xEDstica diferente."
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
      description: "Focos LED o vintage, cableado IP65, resistentes a lluvia. La base del ambiente en cualquier boda.",
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
    { label: "Venustiano Carranza" }
  ] })} ` })}`, "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, { "title": "Renta de Iluminaci\xF3n en Venustiano Carranza", "subtitle": "Zona oriente CDMX, aeropuerto, salones tradicionales. XV a\xF1os y bodas. Transporte e instalaci\xF3n incluidos.", "whatsappText": "Hola,%20quiero%20cotizar%20iluminacion%20para%20mi%20evento%20en%20Venustiano%20Carranza", "introParagraph1": "Venustiano Carranza es la zona oriente estrat\xE9gica \u2014 cerca del aeropuerto, salones tradicionales, eventos familiares de amplitud. <strong>REDEIL lleva 30 a\xF1os iluminando eventos en Venustiano Carranza</strong>. Sabemos c\xF3mo coordinar log\xEDstica en zona aeropuerto, c\xF3mo iluminar salones populares con presencia. Luces que funcionan a cualquier hora, en cualquier tipo de espacio. 300+ eventos al a\xF1o en zona oriente.", "introParagraph2": "Los eventos de Venustiano Carranza son eventos de log\xEDstica \u2014 muchos invitados viajando, horarios ajustados, espacios que requieren flexibilidad. El equipo llega 4 horas antes, monta en 2-3 horas, se adapta a cambios de \xFAltima hora. Precio transparente: no cobramos cargos ocultos. Transporte incluido. Montaje \xE1gil. Equipo profesional que entiende la zona oriente." })}  ${maybeRenderHead()}<section class="stats-section-enhanced"> <div class="container"> <div class="stats-grid-enhanced"> <div class="stat-card-enhanced"> <span class="stat-number-enhanced">30+</span> <span class="stat-label-enhanced">Años en Zona Oriente</span> </div> <div class="stat-card-enhanced"> <span class="stat-number-enhanced">300+</span> <span class="stat-label-enhanced">Eventos/Año</span> </div> <div class="stat-card-enhanced"> <span class="stat-number-enhanced">2h</span> <span class="stat-label-enhanced">Instalación Rápida</span> </div> <div class="stat-card-enhanced"> <span class="stat-number-enhanced">100%</span> <span class="stat-label-enhanced">Cobertura Zona</span> </div> </div> </div> </section> ${renderComponent($$result2, "CtaBar", $$CtaBar, { "headline": "\xBFPara qu\xE9 tipo de evento necesitas iluminaci\xF3n?", "items": [
    { label: "Bodas", href: "/eventos/bodas/", icon: "iluminacion" },
    { label: "XV A\xF1os", href: "/eventos/xv-anos/", icon: "iluminacion" },
    { label: "Corporativos", href: "/eventos/corporativos/", icon: "iluminacion" },
    { label: "Cotiza Ahora", href: "/contacto/", icon: "cotizar" }
  ] })}  <section class="services-section"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Por qu\xE9 Nosotros en Venustiano Carranza", "subtitle": "4 razones por las que REDEIL es el proveedor de iluminaci\xF3n en Venustiano Carranza.", "paragraph1": "30 a\xF1os iluminando eventos en zona oriente. Salones tradicionales, espacios con log\xEDstica diferente, invitados viajando. Sabemos exactamente qu\xE9 iluminaci\xF3n funciona en cada tipo de evento. Guirnaldas, luces ne\xF3n, uplighting coordinado. Cada detalle cuenta.", "paragraph2": "Log\xEDstica propia, equipo flexible. Nos adaptamos a cambios de \xFAltima hora, respetamos horarios ajustados, ejecutamos sin drama. Eso te deja tranquilo \u2014 tu evento funciona como est\xE1 planeado." })} <div class="features-grid-4"> <div class="feature-card"> <h3>Experiencia en Zona Oriente</h3> <p>30 años iluminando eventos en Venustiano Carranza. Conocemos cada salón y espacio de la zona.</p> </div> <div class="feature-card"> <h3>Instalación en 2 Horas</h3> <p>Logística propia, equipo entrenado. Montaje ágil que te deja tranquilo. Sin drama.</p> </div> <div class="feature-card"> <h3>Salones Tradicionales</h3> <p>Especialización en espacios convencionales. Sabemos cómo iluminar sin complicaciones.</p> </div> <div class="feature-card"> <h3>Flexibilidad y Adaptación</h3> <p>Nos ajustamos a cambios de última hora. Logística oriente, horarios variables, evento garantizado.</p> </div> </div> </div> </section>  <section class="services-section services-alt"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Servicios Principales", "subtitle": "Las 4 soluciones de iluminaci\xF3n m\xE1s solicitadas en Venustiano Carranza.", "paragraph1": "Cada servicio se adapta a tu evento. Si necesitas combinar varios servicios, el precio baja porque compartimos traslado y operador.", "paragraph2": "Cotiza por WhatsApp con fotos de tu venue. Respuesta en minutos." })} <div class="services-grid"> ${serviciosRelacionados.map((s) => renderTemplate`${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "title": s.title, "image": s.image, "alt": s.alt, "description": s.description, "link": s.link })}`)} </div> </div> </section>  <section class="faq-section"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Preguntas sobre Iluminaci\xF3n en Venustiano Carranza", "subtitle": "Lo que todos preguntan antes de cotizar.", "paragraph1": "Si tienes otra duda, escr\xEDbenos por WhatsApp. Respuesta en minutos.", "paragraph2": "Cada espacio es diferente \u2014 por eso hacemos propuestas a la medida." })} </div> ${renderComponent($$result2, "FaqSection", $$FaqSection, { "items": [
    {
      question: "\xBFCu\xE1l es la cobertura de REDEIL en Venustiano Carranza?",
      answer: "Cubrimos Venustiano Carranza, zona aeropuerto y alrededores. Salones, patios, espacios tradicionales. Transporte incluido."
    },
    {
      question: "\xBFCu\xE1nto cuesta iluminar una boda en Venustiano Carranza?",
      answer: "Una boda b\xE1sica con guirnaldas arranca desde $6,500. Bodas amplias con m\xFAltiples servicios, $15,000+. Cotiza por WhatsApp."
    },
    {
      question: "\xBFCu\xE1l es el tiempo de instalaci\xF3n?",
      answer: "Nuestro equipo en Venustiano Carranza tarda 2-3 horas. Llegamos 4 horas antes, con tiempo de sobra."
    },
    {
      question: "\xBFConocen los salones de la zona aeropuerto?",
      answer: "S\xED. Conocemos los principales salones cercanos al aeropuerto. Experiencia en eventos con log\xEDstica diferente y horarios variables."
    },
    {
      question: "\xBFSe adaptan a cambios de \xFAltima hora?",
      answer: "S\xED. Equipo flexible, log\xEDstica \xE1gil. Nos adaptamos a cambios de horarios y detalles sin problemas."
    },
    {
      question: "\xBFPuedo solicitar iluminaci\xF3n espec\xEDfica para mi XV a\xF1os?",
      answer: "S\xED. Personalizaci\xF3n total. M\xE1ndanos foto del sal\xF3n y te hacemos propuesta en 24 horas."
    },
    {
      question: "\xBFQu\xE9 incluye el servicio de transporte e instalaci\xF3n?",
      answer: "Todo. Traslado de equipo desde CDMX, montaje profesional, pruebas, operaci\xF3n durante el evento, desmontaje. Cero cargos ocultos."
    },
    {
      question: "\xBFCon cu\xE1nta anticipaci\xF3n debo reservar?",
      answer: "Idealmente 2-3 semanas. En temporada alta (mayo-julio, noviembre-enero) la demanda es alta. Entre antes reserves, mejor disponibilidad."
    }
  ] })} </section>  <section class="cta-section"> <div class="container"> <div class="cta-content"> <h2>¿Listo para iluminar tu evento en Venustiano Carranza?</h2> <p>Mándanos fotos de tu venue por WhatsApp y te cotizamos en minutos. Transporte, instalación y montaje incluidos.</p> <div class="cta-buttons"> <a href="https://wa.me/525530682988?text=Hola,%20quiero%20cotizar%20iluminacion%20para%20mi%20evento%20en%20Venustiano%20Carranza" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp btn-lg">Cotiza por WhatsApp</a> <a href="tel:+525530682988" class="btn btn-primary btn-lg">Llámanos — 55 3068 2988</a> </div> </div> </div> </section> ` })}`;
}, "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/pages/zonas/venustiano-carranza.astro", void 0);

const $$file = "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/pages/zonas/venustiano-carranza.astro";
const $$url = "/zonas/venustiano-carranza";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$VenustianoCarranza,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
