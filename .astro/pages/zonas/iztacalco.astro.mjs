import { c as createComponent, b as renderComponent, r as renderTemplate, m as maybeRenderHead, F as Fragment } from '../../chunks/astro/server_D8pMnQBn.mjs';
import 'piccolore';
import { $ as $$BaseLayout, a as $$Breadcrumbs } from '../../chunks/Breadcrumbs_BkFbHGbf.mjs';
import { $ as $$Hero } from '../../chunks/Hero_3Is3fruG.mjs';
import { $ as $$CtaBar } from '../../chunks/CtaBar_CdFZlCZU.mjs';
import { $ as $$SectionHeader } from '../../chunks/SectionHeader_mLKzHzNX.mjs';
import { $ as $$ServiceCard } from '../../chunks/ServiceCard_Bli7ALj4.mjs';
import { $ as $$FaqSection } from '../../chunks/FaqSection_CzcP3CIi.mjs';
export { renderers } from '../../renderers.mjs';

const $$Iztacalco = createComponent(($$result, $$props, $$slots) => {
  const title = "Renta de Iluminaci\xF3n en Iztacalco | XV A\xF1os y Bodas | REDEIL";
  const description = "Renta de iluminaci\xF3n en Iztacalco. Salones de fiestas, XV a\xF1os, bodas en zona oriente. Transporte e instalaci\xF3n incluidos. Cotiza: 55 3068 2988";
  const canonical = "https://rentadeiluminacion.com/zonas/iztacalco/";
  const schemaMarkup = JSON.stringify([
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Renta de Iluminaci\xF3n en Iztacalco",
      "serviceType": "Iluminaci\xF3n para Eventos",
      "areaServed": {
        "@type": "City",
        "name": "Iztacalco",
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
          "name": "Iztacalco",
          "geo": { "@type": "GeoCoordinates", "latitude": 19.3673, "longitude": -99.0867 }
        },
        {
          "@type": "Place",
          "name": "Pantitl\xE1n",
          "geo": { "@type": "GeoCoordinates", "latitude": 19.4149, "longitude": -99.0707 }
        },
        {
          "@type": "Place",
          "name": "Tl\xE1huac",
          "geo": { "@type": "GeoCoordinates", "latitude": 19.2854, "longitude": -99.0704 }
        }
      ],
      "description": "Renta de iluminaci\xF3n profesional en Iztacalco. Especializaci\xF3n en salones de fiestas, XV a\xF1os y bodas en zona oriente CDMX. Transporte e instalaci\xF3n incluidos.",
      "priceRange": "$$"
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "\xBFCu\xE1l es la cobertura de REDEIL en Iztacalco?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Cubrimos Iztacalco, Pantitl\xE1n, Tl\xE1huac y alrededores. Salones de fiestas, patios, espacios de zona oriente. Transporte incluido."
          }
        },
        {
          "@type": "Question",
          "name": "\xBFCu\xE1nto cuesta iluminar una boda en Iztacalco?",
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
            "text": "Nuestro equipo en Iztacalco tarda 2-3 horas en montar un evento est\xE1ndar. Llegamos 4 horas antes, con tiempo de sobra."
          }
        },
        {
          "@type": "Question",
          "name": "\xBFConocen los salones de fiestas de Iztacalco?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "S\xED. Conocemos los principales salones y espacios de la zona. Hemos iluminado XV a\xF1os y bodas en todos los venues."
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
      description: "Focos LED o vintage, cableado IP65, resistentes a lluvia. La base del ambiente en cualquier boda Iztacalco.",
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
    { label: "Iztacalco" }
  ] })} ` })}`, "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, { "title": "Renta de Iluminaci\xF3n en Iztacalco", "subtitle": "XV a\xF1os, bodas y eventos familiares en zona oriente. Salones de fiestas, espacios populares. Transporte e instalaci\xF3n incluidos.", "whatsappText": "Hola,%20quiero%20cotizar%20iluminacion%20para%20mi%20evento%20en%20Iztacalco", "introParagraph1": "Iztacalco es la zona de celebraciones familiares por excelencia \u2014 XV a\xF1os memorables, bodas con familias extendidas, eventos que requieren iluminaci\xF3n profesional pero accesible. <strong>REDEIL lleva 30 a\xF1os iluminando eventos en Iztacalco</strong>. Salones de fiestas, patios, espacios populares \u2014 sabemos exactamente qu\xE9 iluminaci\xF3n transforma un sal\xF3n en fiesta. Luces que hacen impacto visual sin romper presupuesto. 310+ eventos al a\xF1o en zona oriente.", "introParagraph2": "Los XV a\xF1os de Iztacalco son XV a\xF1os legendarios. Guirnaldas, luces ne\xF3n con el nombre, uplighting coordinado, DJ lighting sincronizado \u2014 eso es lo que esperan. Bodas amplias con 180+ invitados. El equipo llega 4 horas antes, monta en 2-3 horas, todo probado antes de que empiece la fiesta. Precio transparente: no cobramos cargos ocultos. Transporte incluido. Montaje \xE1gil. Equipo profesional que respeta tu evento." })}  ${maybeRenderHead()}<section class="stats-section-enhanced"> <div class="container"> <div class="stats-grid-enhanced"> <div class="stat-card-enhanced"> <span class="stat-number-enhanced">30+</span> <span class="stat-label-enhanced">Años en Iztacalco</span> </div> <div class="stat-card-enhanced"> <span class="stat-number-enhanced">310+</span> <span class="stat-label-enhanced">Eventos/Año</span> </div> <div class="stat-card-enhanced"> <span class="stat-number-enhanced">2h</span> <span class="stat-label-enhanced">Instalación Rápida</span> </div> <div class="stat-card-enhanced"> <span class="stat-number-enhanced">100%</span> <span class="stat-label-enhanced">Cobertura Zona</span> </div> </div> </div> </section> ${renderComponent($$result2, "CtaBar", $$CtaBar, { "headline": "\xBFPara qu\xE9 tipo de evento necesitas iluminaci\xF3n?", "items": [
    { label: "Bodas", href: "/eventos/bodas/", icon: "iluminacion" },
    { label: "XV A\xF1os", href: "/eventos/xv-anos/", icon: "iluminacion" },
    { label: "Corporativos", href: "/eventos/corporativos/", icon: "iluminacion" },
    { label: "Cotiza Ahora", href: "/contacto/", icon: "cotizar" }
  ] })}  <section class="services-section"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Por qu\xE9 Nosotros en Iztacalco", "subtitle": "4 razones por las que REDEIL es el proveedor de iluminaci\xF3n en Iztacalco.", "paragraph1": "El 72% de nuestros eventos en Iztacalco son XV a\xF1os. Sabemos exactamente qu\xE9 iluminaci\xF3n hace que un sal\xF3n de fiestas sea memorableintroduction \u2014 guirnaldas colgadas, luces ne\xF3n personalizadas, uplighting en colores del tema, efectos sincronizados. Cada detalle cuenta.", "paragraph2": "Log\xEDstica propia, equipo entrenado. Colocamos equipos en tiempo r\xE9cord. Eso te deja tranquilo \u2014 no hay estr\xE9s de \xFAltima hora. Salones conocidos, espacios familiares. Sabemos d\xF3nde van los postes, c\xF3mo distribuir el equipo sin problemas." })} <div class="features-grid-4"> <div class="feature-card"> <h3>XV Años Especial</h3> <p>72% de nuestros eventos son XV años. Sabemos exactamente qué iluminación es memorableantroduction.</p> </div> <div class="feature-card"> <h3>Instalación en 2 Horas</h3> <p>Logística propia, equipo entrenado. Montaje ágil que te deja tranquilo. Sin drama.</p> </div> <div class="feature-card"> <h3>Salones Conocidos</h3> <p>Conocemos los principales salones de Iztacalco. Hemos iluminado XV años en todos los espacios.</p> </div> <div class="feature-card"> <h3>Precio Accesible</h3> <p>Iluminación profesional sin romper presupuesto. Descuentos en servicios múltiples.</p> </div> </div> </div> </section>  <section class="services-section services-alt"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Servicios Principales", "subtitle": "Las 4 soluciones de iluminaci\xF3n m\xE1s solicitadas en Iztacalco.", "paragraph1": "Cada servicio se adapta a tu evento. Si necesitas combinar varios servicios, el precio baja porque compartimos traslado y operador.", "paragraph2": "Cotiza por WhatsApp con fotos de tu venue. Respuesta en minutos." })} <div class="services-grid"> ${serviciosRelacionados.map((s) => renderTemplate`${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "title": s.title, "image": s.image, "alt": s.alt, "description": s.description, "link": s.link })}`)} </div> </div> </section>  <section class="faq-section"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Preguntas sobre Iluminaci\xF3n en Iztacalco", "subtitle": "Lo que todos preguntan antes de cotizar.", "paragraph1": "Si tienes otra duda, escr\xEDbenos por WhatsApp. Respuesta en minutos.", "paragraph2": "Cada espacio es diferente \u2014 por eso hacemos propuestas a la medida." })} </div> ${renderComponent($$result2, "FaqSection", $$FaqSection, { "items": [
    {
      question: "\xBFCu\xE1l es la cobertura de REDEIL en Iztacalco?",
      answer: "Cubrimos Iztacalco, Pantitl\xE1n, Tl\xE1huac y alrededores. Salones, patios, espacios populares. Transporte incluido."
    },
    {
      question: "\xBFCu\xE1nto cuesta iluminar una boda en Iztacalco?",
      answer: "Una boda b\xE1sica con guirnaldas arranca desde $6,500. Bodas amplias con m\xFAltiples servicios, $15,000+. Cotiza por WhatsApp."
    },
    {
      question: "\xBFCu\xE1l es el tiempo de instalaci\xF3n?",
      answer: "Nuestro equipo en Iztacalco tarda 2-3 horas en montar un evento est\xE1ndar. Llegamos 4 horas antes, con tiempo de sobra."
    },
    {
      question: "\xBFConocen los salones de fiestas de Iztacalco?",
      answer: "S\xED. Conocemos los principales salones y espacios. Hemos iluminado XV a\xF1os y bodas en todos los venues de la zona."
    },
    {
      question: "\xBFC\xF3mo funcionan las guirnaldas bajo lluvia?",
      answer: "IP65 certificado. Lluvia directa, humedad, cambios de temperatura. Todo resistido. Seguimos operativos en junio-agosto."
    },
    {
      question: "\xBFPuedo solicitar iluminaci\xF3n espec\xEDfica para mi XV a\xF1os?",
      answer: "S\xED. Personalizaci\xF3n total. Luces ne\xF3n con el nombre, colores coordinados, efectos sincronizados. M\xE1ndanos foto del sal\xF3n y te hacemos propuesta en 24 horas."
    },
    {
      question: "\xBFQu\xE9 incluye el servicio de transporte e instalaci\xF3n?",
      answer: "Todo. Traslado de equipo desde CDMX, montaje profesional, pruebas, operaci\xF3n durante el evento, desmontaje. Cero cargos ocultos."
    },
    {
      question: "\xBFCon cu\xE1nta anticipaci\xF3n debo reservar?",
      answer: "Idealmente 2-3 semanas. Iztacalco en temporada alta (mayo-julio, noviembre-enero) se llena r\xE1pido. Entre antes reserves, mejor."
    }
  ] })} </section>  <section class="cta-section"> <div class="container"> <div class="cta-content"> <h2>¿Listo para iluminar tu evento en Iztacalco?</h2> <p>Mándanos fotos de tu venue por WhatsApp y te cotizamos en minutos. Transporte, instalación y montaje incluidos.</p> <div class="cta-buttons"> <a href="https://wa.me/525530682988?text=Hola,%20quiero%20cotizar%20iluminacion%20para%20mi%20evento%20en%20Iztacalco" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp btn-lg">Cotiza por WhatsApp</a> <a href="tel:+525530682988" class="btn btn-primary btn-lg">Llámanos — 55 3068 2988</a> </div> </div> </div> </section> ` })}`;
}, "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/pages/zonas/iztacalco.astro", void 0);

const $$file = "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/pages/zonas/iztacalco.astro";
const $$url = "/zonas/iztacalco";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Iztacalco,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
