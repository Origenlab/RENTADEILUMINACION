import { c as createComponent, b as renderComponent, r as renderTemplate, m as maybeRenderHead, F as Fragment } from '../../chunks/astro/server_D8pMnQBn.mjs';
import 'piccolore';
import { $ as $$BaseLayout, a as $$Breadcrumbs } from '../../chunks/Breadcrumbs_BkFbHGbf.mjs';
import { $ as $$Hero } from '../../chunks/Hero_3Is3fruG.mjs';
import { $ as $$CtaBar } from '../../chunks/CtaBar_CdFZlCZU.mjs';
import { $ as $$SectionHeader } from '../../chunks/SectionHeader_mLKzHzNX.mjs';
import { $ as $$ServiceCard } from '../../chunks/ServiceCard_Bli7ALj4.mjs';
import { $ as $$FaqSection } from '../../chunks/FaqSection_CzcP3CIi.mjs';
export { renderers } from '../../renderers.mjs';

const $$Huixquilucan = createComponent(($$result, $$props, $$slots) => {
  const title = "Renta de Iluminaci\xF3n en Huixquilucan | Bodas Premium e Interlomas | REDEIL";
  const description = "Renta de iluminaci\xF3n para bodas y eventos premium en Huixquilucan, Interlomas, La Herradura y Bosque Real. Guirnaldas, luces y sonido. Cotiza: 55 3068 2988";
  const canonical = "https://rentadeiluminacion.com/zonas/huixquilucan/";
  const schemaMarkup = JSON.stringify([
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Renta de Iluminaci\xF3n en Huixquilucan",
      "serviceType": "Iluminaci\xF3n para Eventos",
      "areaServed": {
        "@type": "City",
        "name": "Huixquilucan",
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
          "name": "Huixquilucan",
          "geo": { "@type": "GeoCoordinates", "latitude": 19.3625, "longitude": -99.3481 }
        },
        {
          "@type": "Place",
          "name": "Interlomas",
          "geo": { "@type": "GeoCoordinates", "latitude": 19.3945, "longitude": -99.2876 }
        },
        {
          "@type": "Place",
          "name": "La Herradura",
          "geo": { "@type": "GeoCoordinates", "latitude": 19.389, "longitude": -99.2654 }
        }
      ],
      "description": "Renta de iluminaci\xF3n profesional para bodas, eventos premium y celebraciones en Huixquilucan, Interlomas, La Herradura y Bosque Real. Especializaci\xF3n en residencias y salones de alto nivel. Transporte e instalaci\xF3n incluidos.",
      "priceRange": "$$"
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "\xBFCu\xE1l es la cobertura de REDEIL en Huixquilucan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Cubrimos todo Huixquilucan, Interlomas, La Herradura, Bosque Real y alrededores. Residencias privadas, salones de eventos, jardines exclusivos. Transporte incluido en toda la zona."
          }
        },
        {
          "@type": "Question",
          "name": "\xBFCu\xE1nto cuesta iluminar una boda en Huixquilucan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Una boda b\xE1sica con guirnaldas arranca desde $7,500. Bodas premium completas con m\xFAltiples servicios, $25,000+. Cotiza por WhatsApp con detalles de tu evento."
          }
        },
        {
          "@type": "Question",
          "name": "\xBFCu\xE1l es el tiempo de instalaci\xF3n?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Nuestro equipo en Huixquilucan tarda 2-3 horas en montar un evento est\xE1ndar. Llegamos 4 horas antes, con tiempo de sobra."
          }
        },
        {
          "@type": "Question",
          "name": "\xBFPueden montar iluminaci\xF3n en residencias privadas de Bosque Real?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "S\xED. Tenemos amplia experiencia en residencias privadas de Bosque Real, Interlomas y La Herradura. Conocemos los protocolos de acceso de cada fraccionamiento y coordinamos con seguridad."
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
      description: "Focos LED o vintage, cableado IP65, resistentes a lluvia. La base del ambiente en cualquier boda en Huixquilucan.",
      link: "/servicios/guirnaldas/"
    },
    {
      title: "Luces Neon Personalizadas",
      image: "/img/luces-neon/luces-neon-nombres-boda.avif",
      alt: "Luces neon personalizadas para boda",
      description: "Nombres de los novios, iniciales, frases. Luces ne\xF3n de colores \xE1mbar, rosa, azul, blanco. Perfecto para bodas premium.",
      link: "/servicios/luces-neon/"
    },
    {
      title: "Cabezas M\xF3viles \u2014 Sky Tracker",
      image: "/img/cabezas-moviles/cabezas-moviles-boda.avif",
      alt: "Cabezas m\xF3viles iluminando pista de baile",
      description: "Proyecciones animadas, colores sincronizados, efectos especiales. El efecto de escenario profesional para bodas de alto nivel.",
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
    { label: "Huixquilucan" }
  ] })} ` })}`, "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, { "title": "Renta de Iluminaci\xF3n en Huixquilucan", "subtitle": "Bodas y eventos premium en Interlomas, La Herradura y Bosque Real. M\xE1s de 150 eventos iluminados en la zona. Transporte e instalaci\xF3n incluidos.", "whatsappText": "Hola,%20quiero%20cotizar%20iluminacion%20para%20mi%20evento%20en%20Huixquilucan", "introParagraph1": "Huixquilucan es sin\xF3nimo de exclusividad. Residencias en Bosque Real, jardines privados en La Herradura, salones premium en Interlomas \u2014 los eventos aqu\xED exigen iluminaci\xF3n a la altura. <strong>REDEIL lleva m\xE1s de 20 a\xF1os iluminando eventos en Huixquilucan</strong>. Bodas en jardines con vista panor\xE1mica, recepciones en residencias de Bosque Real, celebraciones en los mejores salones de Interlomas. Conocemos cada fraccionamiento, cada sal\xF3n, cada jard\xEDn exclusivo. 150+ eventos al a\xF1o en la zona. Es experiencia + equipo premium + conocimiento del terreno.", "introParagraph2": "Somos los que montamos las guirnaldas en los jardines de las residencias m\xE1s exclusivas. Los que iluminan bodas de revista en La Herradura. Los que transforman terrazas de Interlomas en escenarios de ensue\xF1o. \xBFVenues frecuentes? Salones en Interlomas, residencias en Bosque Real, jardines en La Herradura, terrazas panor\xE1micas en zona residencial. Cada espacio requiere estrategia diferente. El equipo llega 4 horas antes. Monta en 2-3 horas. Todo probado antes de que lleguen los invitados. Precio transparente: sin cargos ocultos." })}  ${maybeRenderHead()}<section class="stats-section-enhanced"> <div class="container"> <div class="stats-grid-enhanced"> <div class="stat-card-enhanced"> <span class="stat-number-enhanced">20+</span> <span class="stat-label-enhanced">Años en Huixquilucan</span> </div> <div class="stat-card-enhanced"> <span class="stat-number-enhanced">150+</span> <span class="stat-label-enhanced">Eventos/Año</span> </div> <div class="stat-card-enhanced"> <span class="stat-number-enhanced">2h</span> <span class="stat-label-enhanced">Instalación Rápida</span> </div> <div class="stat-card-enhanced"> <span class="stat-number-enhanced">100%</span> <span class="stat-label-enhanced">Cobertura Zona</span> </div> </div> </div> </section> ${renderComponent($$result2, "CtaBar", $$CtaBar, { "headline": "\xBFPara qu\xE9 tipo de evento necesitas iluminaci\xF3n?", "items": [
    { label: "Bodas", href: "/eventos/bodas/", icon: "iluminacion" },
    { label: "XV A\xF1os", href: "/eventos/xv-anos/", icon: "iluminacion" },
    { label: "Corporativos", href: "/eventos/corporativos/", icon: "iluminacion" },
    { label: "Cotiza Ahora", href: "/contacto/", icon: "cotizar" }
  ] })}  <section class="services-section"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Por qu\xE9 Nosotros en Huixquilucan", "subtitle": "4 razones por las que REDEIL es el proveedor de iluminaci\xF3n premium en Huixquilucan.", "paragraph1": "Los eventos en Huixquilucan exigen un nivel superior. Residencias con jardines amplios, techos altos, acabados de lujo. La iluminaci\xF3n tiene que estar a la altura \u2014 y eso es exactamente lo que hacemos. Guirnaldas perfectamente distribuidas, uplighting en tonos c\xE1lidos, ne\xF3n con los nombres de los novios.", "paragraph2": "Conocemos los protocolos de acceso de cada fraccionamiento. Coordinamos con seguridad, administraci\xF3n y personal de las residencias. Cero complicaciones log\xEDsticas para ti." })} <div class="features-grid-4"> <div class="feature-card"> <h3>Nivel Premium</h3> <p>Iluminación de alta gama para eventos que exigen excelencia. Equipo profesional, acabados impecables, atención al detalle.</p> </div> <div class="feature-card"> <h3>Instalación en 2 Horas</h3> <p>Logística propia, equipo entrenado. Montaje discreto y eficiente en residencias privadas y salones exclusivos.</p> </div> <div class="feature-card"> <h3>Experiencia en Residencias</h3> <p>Bosque Real, La Herradura, Interlomas. Conocemos los protocolos de acceso y los espacios de cada fraccionamiento.</p> </div> <div class="feature-card"> <h3>Bodas de Ensueño</h3> <p>Guirnaldas + uplighting + neón + cabezas móviles. Transformamos cualquier jardín o terraza en un escenario de revista.</p> </div> </div> </div> </section>  <section class="services-section services-alt"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Servicios Principales", "subtitle": "Las 4 soluciones de iluminaci\xF3n m\xE1s solicitadas en Huixquilucan.", "paragraph1": "Cada servicio se adapta a tu evento. Si necesitas combinar varios servicios, el precio baja porque compartimos traslado y operador.", "paragraph2": "Cotiza por WhatsApp con fotos de tu venue. Respuesta en minutos." })} <div class="services-grid"> ${serviciosRelacionados.map((s) => renderTemplate`${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "title": s.title, "image": s.image, "alt": s.alt, "description": s.description, "link": s.link })}`)} </div> </div> </section>  <section class="faq-section"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Preguntas sobre Iluminaci\xF3n en Huixquilucan", "subtitle": "Lo que todos preguntan antes de cotizar.", "paragraph1": "Si tienes otra duda, escr\xEDbenos por WhatsApp. Respuesta en minutos.", "paragraph2": "Cada espacio es diferente \u2014 por eso hacemos propuestas a la medida." })} </div> ${renderComponent($$result2, "FaqSection", $$FaqSection, { "items": [
    {
      question: "\xBFCu\xE1l es la cobertura de REDEIL en Huixquilucan?",
      answer: "Cubrimos todo Huixquilucan, Interlomas, La Herradura, Bosque Real y alrededores. Residencias privadas, salones de eventos, jardines exclusivos. Transporte incluido en toda la zona."
    },
    {
      question: "\xBFCu\xE1nto cuesta iluminar una boda en Huixquilucan?",
      answer: "Una boda b\xE1sica con guirnaldas arranca desde $7,500. Bodas premium completas con m\xFAltiples servicios, $25,000+. Cotiza por WhatsApp con detalles de tu evento."
    },
    {
      question: "\xBFCu\xE1l es el tiempo de instalaci\xF3n?",
      answer: "Nuestro equipo en Huixquilucan tarda 2-3 horas en montar un evento est\xE1ndar. Llegamos 4 horas antes, con tiempo de sobra."
    },
    {
      question: "\xBFPueden montar iluminaci\xF3n en residencias privadas de Bosque Real?",
      answer: "S\xED. Tenemos amplia experiencia en residencias privadas de Bosque Real, Interlomas y La Herradura. Conocemos los protocolos de acceso de cada fraccionamiento y coordinamos con seguridad previamente."
    },
    {
      question: "\xBFManejan iluminaci\xF3n para bodas al aire libre en jardines?",
      answer: "Es nuestra especialidad en Huixquilucan. Jardines amplios con guirnaldas Edison cruzadas, uplighting en \xE1rboles, ne\xF3n personalizado. Todo IP65, resistente a lluvia y humedad."
    },
    {
      question: "\xBFOfrecen paquetes para bodas completas?",
      answer: "S\xED. Guirnaldas + luces ne\xF3n + cabezas m\xF3viles + bocinas. Paquetes integrados con descuento por combinar servicios. M\xE1ndanos fotos de tu venue y te hacemos propuesta personalizada."
    },
    {
      question: "\xBFQu\xE9 incluye el servicio de transporte e instalaci\xF3n?",
      answer: "Todo. Traslado de equipo, montaje profesional, pruebas, operaci\xF3n durante el evento, desmontaje al finalizar. Coordinaci\xF3n con seguridad del fraccionamiento incluida. Cero cargos ocultos."
    },
    {
      question: "\xBFCon cu\xE1nta anticipaci\xF3n debo reservar?",
      answer: "Idealmente 4-6 semanas. Huixquilucan es zona de bodas premium y los fines de semana se llenan r\xE1pido, especialmente en temporada alta (octubre-enero, mayo-junio)."
    }
  ] })} </section>  <section class="cta-section"> <div class="container"> <div class="cta-content"> <h2>¿Listo para iluminar tu evento en Huixquilucan?</h2> <p>Mándanos fotos de tu venue por WhatsApp y te cotizamos en minutos. Transporte, instalación y montaje incluidos.</p> <div class="cta-buttons"> <a href="https://wa.me/525530682988?text=Hola,%20quiero%20cotizar%20iluminacion%20para%20mi%20evento%20en%20Huixquilucan" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp btn-lg">Cotiza por WhatsApp</a> <a href="tel:+525530682988" class="btn btn-primary btn-lg">Llámanos — 55 3068 2988</a> </div> </div> </div> </section> ` })}`;
}, "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/pages/zonas/huixquilucan.astro", void 0);

const $$file = "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/pages/zonas/huixquilucan.astro";
const $$url = "/zonas/huixquilucan";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Huixquilucan,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
