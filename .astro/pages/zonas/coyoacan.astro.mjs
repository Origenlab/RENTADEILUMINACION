import { c as createComponent, b as renderComponent, r as renderTemplate, m as maybeRenderHead, F as Fragment } from '../../chunks/astro/server_D8pMnQBn.mjs';
import 'piccolore';
import { $ as $$BaseLayout, a as $$Breadcrumbs } from '../../chunks/Breadcrumbs_BkFbHGbf.mjs';
import { $ as $$Hero } from '../../chunks/Hero_3Is3fruG.mjs';
import { $ as $$CtaBar } from '../../chunks/CtaBar_CdFZlCZU.mjs';
import { $ as $$SectionHeader } from '../../chunks/SectionHeader_mLKzHzNX.mjs';
import { $ as $$ServiceCard } from '../../chunks/ServiceCard_Bli7ALj4.mjs';
import { $ as $$FaqSection } from '../../chunks/FaqSection_CzcP3CIi.mjs';
export { renderers } from '../../renderers.mjs';

const $$Coyoacan = createComponent(($$result, $$props, $$slots) => {
  const title = "Renta de Iluminaci\xF3n en Coyoac\xE1n | Bodas y XV A\xF1os | REDEIL";
  const description = "Renta de iluminaci\xF3n para bodas y XV a\xF1os en Coyoac\xE1n. Guirnaldas, luces y sonido. Instalaci\xF3n en 2h. 350+ eventos/a\xF1o. Cotiza: 55 3068 2988";
  const canonical = "https://rentadeiluminacion.com/zonas/coyoacan/";
  const schemaMarkup = JSON.stringify([
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Renta de Iluminaci\xF3n en Coyoac\xE1n",
      "serviceType": "Iluminaci\xF3n para Eventos",
      "areaServed": {
        "@type": "City",
        "name": "Coyoac\xE1n",
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
          "name": "Coyoac\xE1n",
          "geo": { "@type": "GeoCoordinates", "latitude": 19.3438, "longitude": -99.1637 }
        },
        {
          "@type": "Place",
          "name": "San \xC1ngel",
          "geo": { "@type": "GeoCoordinates", "latitude": 19.3616, "longitude": -99.1897 }
        },
        {
          "@type": "Place",
          "name": "Tlalpan",
          "geo": { "@type": "GeoCoordinates", "latitude": 19.2908, "longitude": -99.1726 }
        }
      ],
      "description": "Renta de iluminaci\xF3n profesional para bodas, XV a\xF1os y eventos en Coyoac\xE1n, San \xC1ngel y Tlalpan. Especializaci\xF3n en haciendas y jardines. Transporte e instalaci\xF3n incluidos.",
      "priceRange": "$$"
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "\xBFCu\xE1l es la cobertura de REDEIL en Coyoac\xE1n?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Cubrimos todo Coyoac\xE1n, San \xC1ngel, Tlalpan y alrededores. Haciendas, jardines, salones, patios. Transporte incluido en toda la zona."
          }
        },
        {
          "@type": "Question",
          "name": "\xBFCu\xE1nto cuesta iluminar una boda en Coyoac\xE1n?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Una boda b\xE1sica con guirnaldas arranca desde $6,500. Bodas completas con m\xFAltiples servicios, $18,000+. Cotiza por WhatsApp con detalles de tu evento."
          }
        },
        {
          "@type": "Question",
          "name": "\xBFCu\xE1l es el tiempo de instalaci\xF3n?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Nuestro equipo en Coyoac\xE1n tarda 2-3 horas en montar un evento est\xE1ndar. Llegamos 4 horas antes, con tiempo de sobra."
          }
        },
        {
          "@type": "Question",
          "name": "\xBFTienen cobertura garantizada en los venues de Coyoac\xE1n?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "S\xED. Hacienda San \xC1ngel, Museo de Arte Moderno, Biblioteca Vasconcelos, Aldea de Coapa, Hogar Sacromonte \u2014 los conocemos todos."
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
      description: "Focos LED o vintage, cableado IP65, resistentes a lluvia. La base del ambiente en cualquier boda Coyoac\xE1n.",
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
    { label: "Coyoac\xE1n" }
  ] })} ` })}`, "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, { "title": "Renta de Iluminaci\xF3n en Coyoac\xE1n", "subtitle": "Especializaci\xF3n en bodas y XV a\xF1os. M\xE1s de 350 eventos iluminados en la zona. Transporte e instalaci\xF3n incluidos.", "whatsappText": "Hola,%20quiero%20cotizar%20iluminacion%20para%20mi%20evento%20en%20Coyoacan", "introParagraph1": "Coyoac\xE1n es la zona de bodas y XV a\xF1os por excelencia. Haciendas coloniales, jardines rom\xE1nticos, patios bohemios \u2014 los espacios que cuelga la iluminaci\xF3n hacen la diferencia. <strong>REDEIL lleva 30 a\xF1os iluminando eventos en Coyoac\xE1n</strong>. Bodas en la Hacienda San \xC1ngel, XV a\xF1os en el Jard\xEDn Bot\xE1nico, recepciones en casas coloniales de San \xC1ngel, Plaza Hidalgo. Conocemos cada venue, cada patio, cada fachada. 350+ eventos al a\xF1o en Coyoac\xE1n. No es suerte \u2014 es conocimiento del terreno + equipo propio + experiencia.", "introParagraph2": "Somos los que montamos las guirnaldas sobre las columnas de las haciendas. Los que iluminan la primera danza en el jard\xEDn. Los que proyectan el monograma de los novios en la pista. \xBFCu\xE1les son los venues que m\xE1s montamos? Hacienda San \xC1ngel, Museo de Arte Moderno, Biblioteca Vasconcelos, Museo Anahuacalli, Aldea de Coapa, Hogar Sacromonte. Cada uno requiere estrategia diferente. El equipo llega 4 horas antes. Monta en 2-3 horas. Todo probado antes de que lleguen los invitados. Precio transparente: no cobramos cargos ocultos." })}  ${maybeRenderHead()}<section class="stats-section-enhanced"> <div class="container"> <div class="stats-grid-enhanced"> <div class="stat-card-enhanced"> <span class="stat-number-enhanced">30+</span> <span class="stat-label-enhanced">Años en Coyoacán</span> </div> <div class="stat-card-enhanced"> <span class="stat-number-enhanced">350+</span> <span class="stat-label-enhanced">Eventos/Año</span> </div> <div class="stat-card-enhanced"> <span class="stat-number-enhanced">2h</span> <span class="stat-label-enhanced">Instalación Rápida</span> </div> <div class="stat-card-enhanced"> <span class="stat-number-enhanced">100%</span> <span class="stat-label-enhanced">Cobertura Zona</span> </div> </div> </div> </section> ${renderComponent($$result2, "CtaBar", $$CtaBar, { "headline": "\xBFPara qu\xE9 tipo de evento necesitas iluminaci\xF3n?", "items": [
    { label: "Bodas", href: "/eventos/bodas/", icon: "iluminacion" },
    { label: "XV A\xF1os", href: "/eventos/xv-anos/", icon: "iluminacion" },
    { label: "Corporativos", href: "/eventos/corporativos/", icon: "iluminacion" },
    { label: "Cotiza Ahora", href: "/contacto/", icon: "cotizar" }
  ] })}  <section class="services-section"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Por qu\xE9 Nosotros en Coyoac\xE1n", "subtitle": "4 razones por las que REDEIL es el proveedor de iluminaci\xF3n en Coyoac\xE1n.", "paragraph1": "M\xE1s del 60% de nuestros montajes en Coyoac\xE1n son bodas. Sabemos qu\xE9 iluminaci\xF3n hace que una ceremonia al aire libre sea memorable. Guirnaldas en el techo, gobo con monograma en la pista, cascadas LED detr\xE1s de los novios. Cada detalle cuenta.", "paragraph2": "Log\xEDstica propia, equipo entrenado. Colocamos guirnaldas, uplighting, efectos especiales en tiempo r\xE9cord. Eso te deja tranquilo \u2014 no hay estr\xE9s de \xFAltima hora. Haciendas, jardines, patios coloniales. Sabemos d\xF3nde van los postes, c\xF3mo distribuir guirnaldas sin da\xF1ar fachadas hist\xF3ricas." })} <div class="features-grid-4"> <div class="feature-card"> <h3>Especialización en Bodas</h3> <p>Más del 60% de nuestros montajes son bodas. Sabemos qué iluminación hace que una ceremonia al aire libre sea memorable.</p> </div> <div class="feature-card"> <h3>Instalación en 2 Horas</h3> <p>Logística propia, equipo entrenado. Montaje ágil que te deja tranquilo. No hay estrés de última hora.</p> </div> <div class="feature-card"> <h3>Conocimiento de Venues</h3> <p>Conocemos cada hacienda, jardín y patio colonial. Sabemos cómo iluminar sin dañar arquitectura histórica.</p> </div> <div class="feature-card"> <h3>XV Años Full Iluminación</h3> <p>Guirnaldas + bocinas + luces neón + DJ lighting. Transformamos cualquier salón en espacio de fiesta.</p> </div> </div> </div> </section>  <section class="services-section services-alt"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Servicios Principales", "subtitle": "Las 4 soluciones de iluminaci\xF3n m\xE1s solicitadas en Coyoac\xE1n.", "paragraph1": "Cada servicio se adapta a tu evento. Si necesitas combinar varios servicios, el precio baja porque compartimos traslado y operador.", "paragraph2": "Cotiza por WhatsApp con fotos de tu venue. Respuesta en minutos." })} <div class="services-grid"> ${serviciosRelacionados.map((s) => renderTemplate`${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "title": s.title, "image": s.image, "alt": s.alt, "description": s.description, "link": s.link })}`)} </div> </div> </section>  <section class="faq-section"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Preguntas sobre Iluminaci\xF3n en Coyoac\xE1n", "subtitle": "Lo que todos preguntan antes de cotizar.", "paragraph1": "Si tienes otra duda, escr\xEDbenos por WhatsApp. Respuesta en minutos.", "paragraph2": "Cada espacio es diferente \u2014 por eso hacemos propuestas a la medida." })} </div> ${renderComponent($$result2, "FaqSection", $$FaqSection, { "items": [
    {
      question: "\xBFCu\xE1l es la cobertura de REDEIL en Coyoac\xE1n?",
      answer: "Cubrimos todo Coyoac\xE1n, San \xC1ngel, Tlalpan y alrededores. Haciendas, jardines, salones, patios. Transporte incluido en toda la zona."
    },
    {
      question: "\xBFCu\xE1nto cuesta iluminar una boda en Coyoac\xE1n?",
      answer: "Una boda b\xE1sica con guirnaldas arranca desde $6,500. Bodas completas con m\xFAltiples servicios, $18,000+. Cotiza por WhatsApp con detalles de tu evento."
    },
    {
      question: "\xBFCu\xE1l es el tiempo de instalaci\xF3n?",
      answer: "Nuestro equipo en Coyoac\xE1n tarda 2-3 horas en montar un evento est\xE1ndar. Llegamos 4 horas antes, con tiempo de sobra."
    },
    {
      question: "\xBFTienen cobertura garantizada en todos los venues de Coyoac\xE1n?",
      answer: "S\xED. Hacienda San \xC1ngel, Museo de Arte Moderno, Biblioteca Vasconcelos, Aldea de Coapa, Hogar Sacromonte \u2014 los conocemos todos. Tenemos permisos y coordinaci\xF3n previa con cada venue."
    },
    {
      question: "\xBFC\xF3mo funcionan las guirnaldas bajo lluvia?",
      answer: "IP65 certificado. Lluvia directa, humedad, cambios de temperatura. Todo resistido. Julio y agosto, los meses m\xE1s lluviosos, nuestros meses m\xE1s activos en Coyoac\xE1n."
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
      answer: "Idealmente 3-4 semanas. Coyoac\xE1n en temporada alta (noviembre-enero, mayo-junio) se llena r\xE1pido. Entre antes reserves, mejor."
    }
  ] })} </section>  <section class="cta-section"> <div class="container"> <div class="cta-content"> <h2>¿Listo para iluminar tu evento en Coyoacán?</h2> <p>Mándanos fotos de tu venue por WhatsApp y te cotizamos en minutos. Transporte, instalación y montaje incluidos.</p> <div class="cta-buttons"> <a href="https://wa.me/525530682988?text=Hola,%20quiero%20cotizar%20iluminacion%20para%20mi%20evento%20en%20Coyoacan" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp btn-lg">Cotiza por WhatsApp</a> <a href="tel:+525530682988" class="btn btn-primary btn-lg">Llámanos — 55 3068 2988</a> </div> </div> </div> </section> ` })}`;
}, "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/pages/zonas/coyoacan.astro", void 0);

const $$file = "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/pages/zonas/coyoacan.astro";
const $$url = "/zonas/coyoacan";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Coyoacan,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
