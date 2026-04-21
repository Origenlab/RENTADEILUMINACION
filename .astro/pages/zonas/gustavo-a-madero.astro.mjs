import { c as createComponent, b as renderComponent, r as renderTemplate, m as maybeRenderHead, F as Fragment } from '../../chunks/astro/server_D8pMnQBn.mjs';
import 'piccolore';
import { $ as $$BaseLayout, a as $$Breadcrumbs } from '../../chunks/Breadcrumbs_BkFbHGbf.mjs';
import { $ as $$Hero } from '../../chunks/Hero_3Is3fruG.mjs';
import { $ as $$CtaBar } from '../../chunks/CtaBar_CdFZlCZU.mjs';
import { $ as $$SectionHeader } from '../../chunks/SectionHeader_mLKzHzNX.mjs';
import { $ as $$ServiceCard } from '../../chunks/ServiceCard_Bli7ALj4.mjs';
import { $ as $$FaqSection } from '../../chunks/FaqSection_CzcP3CIi.mjs';
export { renderers } from '../../renderers.mjs';

const $$GustavoAMadero = createComponent(($$result, $$props, $$slots) => {
  const title = "Renta de Iluminaci\xF3n en Gustavo A. Madero | Bodas y XV A\xF1os | REDEIL";
  const description = "Renta de iluminaci\xF3n para bodas y XV a\xF1os en Gustavo A. Madero. Salones tradicionales, eventos populares. Especializaci\xF3n en zona norte CDMX. Cotiza: 55 3068 2988";
  const canonical = "https://rentadeiluminacion.com/zonas/gustavo-a-madero/";
  const schemaMarkup = JSON.stringify([
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Renta de Iluminaci\xF3n en Gustavo A. Madero",
      "serviceType": "Iluminaci\xF3n para Eventos",
      "areaServed": {
        "@type": "City",
        "name": "Gustavo A. Madero",
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
          "name": "Gustavo A. Madero",
          "geo": { "@type": "GeoCoordinates", "latitude": 19.4826, "longitude": -99.1247 }
        },
        {
          "@type": "Place",
          "name": "La Raza",
          "geo": { "@type": "GeoCoordinates", "latitude": 19.4847, "longitude": -99.1245 }
        },
        {
          "@type": "Place",
          "name": "Vallejo",
          "geo": { "@type": "GeoCoordinates", "latitude": 19.4694, "longitude": -99.1366 }
        }
      ],
      "description": "Renta de iluminaci\xF3n profesional para bodas, XV a\xF1os y eventos en Gustavo A. Madero. Especializaci\xF3n en salones tradicionales y eventos populares. Transporte e instalaci\xF3n incluidos.",
      "priceRange": "$$"
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "\xBFCu\xE1l es la cobertura de REDEIL en Gustavo A. Madero?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Cubrimos todo Gustavo A. Madero, La Raza, Vallejo y alrededores. Salones, patios, espacios tradicionales. Transporte incluido en toda la zona."
          }
        },
        {
          "@type": "Question",
          "name": "\xBFCu\xE1nto cuesta iluminar una boda en Gustavo A. Madero?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Una boda b\xE1sica con guirnaldas arranca desde $6,500. Bodas completas con m\xFAltiples servicios, $16,000+. Cotiza por WhatsApp con detalles de tu evento."
          }
        },
        {
          "@type": "Question",
          "name": "\xBFCu\xE1l es el tiempo de instalaci\xF3n?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Nuestro equipo en Gustavo A. Madero tarda 2-3 horas en montar un evento est\xE1ndar. Llegamos 4 horas antes, con tiempo de sobra."
          }
        },
        {
          "@type": "Question",
          "name": "\xBFTienen cobertura en los salones populares de la zona norte?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "S\xED. Conocemos los principales salones de Gustavo A. Madero y alrededores. Hemos iluminado bodas y XV a\xF1os en todos los espacios tradicionales de la zona."
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
      description: "Focos LED o vintage, cableado IP65, resistentes a lluvia. La base del ambiente en cualquier boda en zona norte.",
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
    { label: "Gustavo A. Madero" }
  ] })} ` })}`, "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, { "title": "Renta de Iluminaci\xF3n en Gustavo A. Madero", "subtitle": "Salones tradicionales, fiestas populares y bodas familiares. Zona norte de la CDMX. Transporte e instalaci\xF3n incluidos.", "whatsappText": "Hola,%20quiero%20cotizar%20iluminacion%20para%20mi%20evento%20en%20Gustavo%20A%20Madero", "introParagraph1": "Gustavo A. Madero es la zona norte cl\xE1sica de CDMX \u2014 salones tradicionales, fiestas populares, bodas familiares con presencia. <strong>REDEIL lleva 30 a\xF1os iluminando eventos en Gustavo A. Madero</strong>. Salones de La Raza, espacios de Vallejo, patios de casas particulares \u2014 sabemos c\xF3mo adaptar iluminaci\xF3n profesional a cada tipo de evento. Luces que no afecten el presupuesto pero que hagan la diferencia visual. 320+ eventos al a\xF1o en zona norte.", "introParagraph2": "Los eventos de Gustavo A. Madero son eventos de familia. XV a\xF1os con 150+ invitados, bodas amplias, despedidas de soltero con ritmo \u2014 todos requieren iluminaci\xF3n que se vea bien sin romper el presupuesto. Guirnaldas colgadas, luces ne\xF3n personalizadas, uplighting en colores del tema. El equipo llega 4 horas antes, monta en 2-3 horas, todo probado. Precio transparente: no cobramos cargos ocultos. Transporte desde CDMX incluido en el servicio." })}  ${maybeRenderHead()}<section class="stats-section-enhanced"> <div class="container"> <div class="stats-grid-enhanced"> <div class="stat-card-enhanced"> <span class="stat-number-enhanced">30+</span> <span class="stat-label-enhanced">Años en Zona Norte</span> </div> <div class="stat-card-enhanced"> <span class="stat-number-enhanced">320+</span> <span class="stat-label-enhanced">Eventos/Año</span> </div> <div class="stat-card-enhanced"> <span class="stat-number-enhanced">2h</span> <span class="stat-label-enhanced">Instalación Rápida</span> </div> <div class="stat-card-enhanced"> <span class="stat-number-enhanced">100%</span> <span class="stat-label-enhanced">Cobertura Zona</span> </div> </div> </div> </section> ${renderComponent($$result2, "CtaBar", $$CtaBar, { "headline": "\xBFPara qu\xE9 tipo de evento necesitas iluminaci\xF3n?", "items": [
    { label: "Bodas", href: "/eventos/bodas/", icon: "iluminacion" },
    { label: "XV A\xF1os", href: "/eventos/xv-anos/", icon: "iluminacion" },
    { label: "Corporativos", href: "/eventos/corporativos/", icon: "iluminacion" },
    { label: "Cotiza Ahora", href: "/contacto/", icon: "cotizar" }
  ] })}  <section class="services-section"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Por qu\xE9 Nosotros en Gustavo A. Madero", "subtitle": "4 razones por las que REDEIL es el proveedor de iluminaci\xF3n en la zona norte.", "paragraph1": "Conocemos la zona norte desde hace 30 a\xF1os. Salones de La Raza, espacios de Vallejo, patios de casas familiares \u2014 sabemos exactamente qu\xE9 iluminaci\xF3n funciona en cada tipo de evento. Guirnaldas, luces ne\xF3n personalizadas, uplighting coordinado. Cada detalle cuenta.", "paragraph2": "Log\xEDstica propia, equipo entrenado en zona norte. Colocamos guirnaldas, uplighting, efectos especiales en tiempo r\xE9cord. Eso te deja tranquilo \u2014 no hay estr\xE9s de \xFAltima hora. Salones tradicionales, espacios populares. Sabemos d\xF3nde van los postes, c\xF3mo distribuir el equipo sin problemas." })} <div class="features-grid-4"> <div class="feature-card"> <h3>Experiencia en Zona Norte</h3> <p>30 años iluminando eventos en Gustavo A. Madero y alrededores. Conocemos cada salón y espacio.</p> </div> <div class="feature-card"> <h3>Instalación en 2 Horas</h3> <p>Logística propia, equipo entrenado. Montaje ágil que te deja tranquilo. No hay estrés de última hora.</p> </div> <div class="feature-card"> <h3>Salones Populares y Tradicionales</h3> <p>Especialización en espacios convencionales. Sabemos cómo iluminar sin complicaciones.</p> </div> <div class="feature-card"> <h3>XV Años y Bodas</h3> <p>Guirnaldas + uplighting + efectos. Sistema de iluminación profesional a precio accesible.</p> </div> </div> </div> </section>  <section class="services-section services-alt"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Servicios Principales", "subtitle": "Las 4 soluciones de iluminaci\xF3n m\xE1s solicitadas en Gustavo A. Madero.", "paragraph1": "Cada servicio se adapta a tu evento. Si necesitas combinar varios servicios, el precio baja porque compartimos traslado y operador.", "paragraph2": "Cotiza por WhatsApp con fotos de tu venue. Respuesta en minutos." })} <div class="services-grid"> ${serviciosRelacionados.map((s) => renderTemplate`${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "title": s.title, "image": s.image, "alt": s.alt, "description": s.description, "link": s.link })}`)} </div> </div> </section>  <section class="faq-section"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Preguntas sobre Iluminaci\xF3n en Gustavo A. Madero", "subtitle": "Lo que todos preguntan antes de cotizar.", "paragraph1": "Si tienes otra duda, escr\xEDbenos por WhatsApp. Respuesta en minutos.", "paragraph2": "Cada espacio es diferente \u2014 por eso hacemos propuestas a la medida." })} </div> ${renderComponent($$result2, "FaqSection", $$FaqSection, { "items": [
    {
      question: "\xBFCu\xE1l es la cobertura de REDEIL en Gustavo A. Madero?",
      answer: "Cubrimos todo Gustavo A. Madero, La Raza, Vallejo y alrededores. Salones, patios, espacios tradicionales. Transporte incluido en toda la zona."
    },
    {
      question: "\xBFCu\xE1nto cuesta iluminar una boda en zona norte?",
      answer: "Una boda b\xE1sica con guirnaldas arranca desde $6,500. Bodas completas con m\xFAltiples servicios, $16,000+. Cotiza por WhatsApp con detalles de tu evento."
    },
    {
      question: "\xBFCu\xE1l es el tiempo de instalaci\xF3n?",
      answer: "Nuestro equipo en Gustavo A. Madero tarda 2-3 horas en montar un evento est\xE1ndar. Llegamos 4 horas antes, con tiempo de sobra."
    },
    {
      question: "\xBFTienen cobertura en los salones populares de la zona?",
      answer: "S\xED. Conocemos los principales salones de Gustavo A. Madero y alrededores. Hemos iluminado bodas y XV a\xF1os en todos los espacios tradicionales de la zona."
    },
    {
      question: "\xBFC\xF3mo funcionan las guirnaldas bajo lluvia?",
      answer: "IP65 certificado. Lluvia directa, humedad, cambios de temperatura. Todo resistido. Somos expertos en adaptabilidad clim\xE1tica."
    },
    {
      question: "\xBFPuedo solicitar iluminaci\xF3n espec\xEDfica para mi XV a\xF1os?",
      answer: "S\xED. Personalizaci\xF3n total. Luces ne\xF3n con el nombre, colores coordinados, efectos sincronizados. M\xE1ndanos una foto del sal\xF3n y te hacemos propuesta en 24 horas."
    },
    {
      question: "\xBFQu\xE9 incluye el servicio de transporte e instalaci\xF3n?",
      answer: "Todo. Traslado de equipo desde CDMX, montaje profesional, pruebas, operaci\xF3n durante el evento, desmontaje al finalizar. Cero cargos ocultos."
    },
    {
      question: "\xBFCon cu\xE1nta anticipaci\xF3n debo reservar?",
      answer: "Idealmente 2-3 semanas. En temporada alta (noviembre-enero, mayo-junio) la demanda es alta. Entre antes reserves, mejor disponibilidad."
    }
  ] })} </section>  <section class="cta-section"> <div class="container"> <div class="cta-content"> <h2>¿Listo para iluminar tu evento en Gustavo A. Madero?</h2> <p>Mándanos fotos de tu venue por WhatsApp y te cotizamos en minutos. Transporte, instalación y montaje incluidos.</p> <div class="cta-buttons"> <a href="https://wa.me/525530682988?text=Hola,%20quiero%20cotizar%20iluminacion%20para%20mi%20evento%20en%20Gustavo%20A%20Madero" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp btn-lg">Cotiza por WhatsApp</a> <a href="tel:+525530682988" class="btn btn-primary btn-lg">Llámanos — 55 3068 2988</a> </div> </div> </div> </section> ` })}`;
}, "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/pages/zonas/gustavo-a-madero.astro", void 0);

const $$file = "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/pages/zonas/gustavo-a-madero.astro";
const $$url = "/zonas/gustavo-a-madero";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$GustavoAMadero,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
