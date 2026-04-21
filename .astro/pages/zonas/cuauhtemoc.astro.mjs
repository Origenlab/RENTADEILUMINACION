import { c as createComponent, b as renderComponent, r as renderTemplate, m as maybeRenderHead, F as Fragment } from '../../chunks/astro/server_D8pMnQBn.mjs';
import 'piccolore';
import { $ as $$BaseLayout, a as $$Breadcrumbs } from '../../chunks/Breadcrumbs_BkFbHGbf.mjs';
import { $ as $$Hero } from '../../chunks/Hero_3Is3fruG.mjs';
import { $ as $$CtaBar } from '../../chunks/CtaBar_CdFZlCZU.mjs';
import { $ as $$SectionHeader } from '../../chunks/SectionHeader_mLKzHzNX.mjs';
import { $ as $$ServiceCard } from '../../chunks/ServiceCard_Bli7ALj4.mjs';
import { $ as $$FaqSection } from '../../chunks/FaqSection_CzcP3CIi.mjs';
export { renderers } from '../../renderers.mjs';

const $$Cuauhtemoc = createComponent(($$result, $$props, $$slots) => {
  const title = "Renta de Iluminaci\xF3n en Cuauht\xE9moc | Bodas Corporativas | REDEIL";
  const description = "Renta de iluminaci\xF3n en Cuauht\xE9moc. Centro hist\xF3rico, salones art deco, hoteles. Especializaci\xF3n en eventos corporativos. Cotiza: 55 3068 2988";
  const canonical = "https://rentadeiluminacion.com/zonas/cuauhtemoc/";
  const schemaMarkup = JSON.stringify([
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Renta de Iluminaci\xF3n en Cuauht\xE9moc",
      "serviceType": "Iluminaci\xF3n para Eventos",
      "areaServed": {
        "@type": "City",
        "name": "Cuauht\xE9moc",
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
          "name": "Cuauht\xE9moc",
          "geo": { "@type": "GeoCoordinates", "latitude": 19.4326, "longitude": -99.1343 }
        },
        {
          "@type": "Place",
          "name": "Roma",
          "geo": { "@type": "GeoCoordinates", "latitude": 19.424, "longitude": -99.1663 }
        },
        {
          "@type": "Place",
          "name": "Centro Hist\xF3rico",
          "geo": { "@type": "GeoCoordinates", "latitude": 19.4326, "longitude": -99.1343 }
        }
      ],
      "description": "Renta de iluminaci\xF3n profesional en Cuauht\xE9moc. Especializaci\xF3n en centro hist\xF3rico, salones art deco, hoteles y eventos corporativos. Transporte e instalaci\xF3n incluidos.",
      "priceRange": "$$"
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "\xBFCu\xE1l es la cobertura de REDEIL en Cuauht\xE9moc?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Cubrimos Cuauht\xE9moc, Centro Hist\xF3rico, Roma y alrededores. Hoteles, salones art deco, espacios corporativos. Transporte incluido."
          }
        },
        {
          "@type": "Question",
          "name": "\xBFCu\xE1nto cuesta iluminar un evento corporativo en Cuauht\xE9moc?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Un evento corporativo b\xE1sico arranca desde $7,500. Bodas y eventos completos en hoteles, $18,000+. Cotiza por WhatsApp con detalles."
          }
        },
        {
          "@type": "Question",
          "name": "\xBFCu\xE1l es el tiempo de instalaci\xF3n?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Nuestro equipo en Cuauht\xE9moc tarda 2-3 horas en montar un evento. Llegamos 4 horas antes para coordinaci\xF3n con el hotel o sal\xF3n."
          }
        },
        {
          "@type": "Question",
          "name": "\xBFTienen experiencia en hoteles de Cuauht\xE9moc?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "S\xED. 30 a\xF1os iluminando hoteles, salones art deco y espacios corporativos del centro. Coordinaci\xF3n perfecta con gerentes de eventos hoteleros."
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
      description: "Focos LED o vintage, cableado IP65, resistentes. Perfectas para eventos corporativos en salones art deco.",
      link: "/servicios/guirnaldas/"
    },
    {
      title: "Luces Neon Personalizadas",
      image: "/img/luces-neon/luces-neon-nombres-boda.avif",
      alt: "Luces neon personalizadas para boda",
      description: "Logos corporativos, nombres, frases. Ne\xF3n personalizado para cena de gala, lanzamientos de producto.",
      link: "/servicios/luces-neon/"
    },
    {
      title: "Cabezas M\xF3viles \u2014 Sky Tracker",
      image: "/img/cabezas-moviles/cabezas-moviles-boda.avif",
      alt: "Cabezas m\xF3viles iluminando pista de baile",
      description: "Proyecciones, colores sincronizados, efectos especiales. Producci\xF3n profesional de show.",
      link: "/servicios/cabezas-moviles/"
    },
    {
      title: "Bocinas y DJ Lighting",
      image: "/img/bocinas/bocinas-sistema-profesional.avif",
      alt: "Sistema de sonido profesional para evento",
      description: "Sonido profesional + luces reactivas. Sistema completo para eventos corporativos.",
      link: "/servicios/bocinas-djs/"
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "canonical": canonical, "schemaMarkup": schemaMarkup }, { "breadcrumbs": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "breadcrumbs" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Breadcrumbs", $$Breadcrumbs, { "items": [
    { label: "Inicio", href: "/" },
    { label: "Zonas de Cobertura", href: "/zonas-de-cobertura/" },
    { label: "Cuauht\xE9moc" }
  ] })} ` })}`, "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, { "title": "Renta de Iluminaci\xF3n en Cuauht\xE9moc", "subtitle": "Centro hist\xF3rico, salones art deco, hoteles corporativos. Eventos de nivel, bodas en espacios emblem\xE1ticos. Transporte e instalaci\xF3n incluidos.", "whatsappText": "Hola,%20quiero%20cotizar%20iluminacion%20para%20mi%20evento%20en%20Cuauhtemoc", "introParagraph1": "Cuauht\xE9moc es sin\xF3nimo de eventos corporativos de alto nivel. Centro hist\xF3rico, salones art deco, hoteles con carisma \u2014 espacios que requieren iluminaci\xF3n sofisticada. <strong>REDEIL lleva 30 a\xF1os iluminando eventos en Cuauht\xE9moc</strong>. Cenas de gala en hoteles 5 estrellas, bodas en salones hist\xF3ricos, lanzamientos de producto, eventos corporativos de empresas Fortune 500. Sabemos c\xF3mo coordinar con gerentes de eventos hoteleros, respetar protocolos, ejecutar sin improvisaciones. 310+ eventos al a\xF1o en Cuauht\xE9moc.", "introParagraph2": "Los eventos de Cuauht\xE9moc son eventos de protocolo. Cada luz tiene significado \u2014 marca la entrada del novio, destaca la mesa de honor, ilumina el escenario. Art deco requiere respeto \u2014 guirnaldas que no rompan la est\xE9tica, uplighting que remarque sin competir, proyecciones que complementen. El equipo lleva 30 a\xF1os entendiendo estos lenguajes. Coordinamos con coordinadores de eventos, respetamos regulaciones de hoteles, ejecutamos con perfeccionismo. Transporte incluido. Montaje \xE1gil. Precio transparente." })}  ${maybeRenderHead()}<section class="stats-section-enhanced"> <div class="container"> <div class="stats-grid-enhanced"> <div class="stat-card-enhanced"> <span class="stat-number-enhanced">30+</span> <span class="stat-label-enhanced">Años en Cuauhtémoc</span> </div> <div class="stat-card-enhanced"> <span class="stat-number-enhanced">310+</span> <span class="stat-label-enhanced">Eventos/Año</span> </div> <div class="stat-card-enhanced"> <span class="stat-number-enhanced">2h</span> <span class="stat-label-enhanced">Instalación Rápida</span> </div> <div class="stat-card-enhanced"> <span class="stat-number-enhanced">100%</span> <span class="stat-label-enhanced">Cobertura Zona</span> </div> </div> </div> </section> ${renderComponent($$result2, "CtaBar", $$CtaBar, { "headline": "\xBFPara qu\xE9 tipo de evento necesitas iluminaci\xF3n?", "items": [
    { label: "Bodas", href: "/eventos/bodas/", icon: "iluminacion" },
    { label: "Corporativos", href: "/eventos/corporativos/", icon: "iluminacion" },
    { label: "XV A\xF1os", href: "/eventos/xv-anos/", icon: "iluminacion" },
    { label: "Cotiza Ahora", href: "/contacto/", icon: "cotizar" }
  ] })}  <section class="services-section"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Por qu\xE9 Nosotros en Cuauht\xE9moc", "subtitle": "4 razones por las que REDEIL es el proveedor de iluminaci\xF3n en Cuauht\xE9moc.", "paragraph1": "El 80% de nuestros eventos en Cuauht\xE9moc son corporativos \u2014 cenas de gala, bodas de nivel, lanzamientos de producto. Sabemos qu\xE9 iluminaci\xF3n corresponde a cada tipo de evento. Art deco requiere respeto. Hotel requiere coordinaci\xF3n. Eso es lo que hacemos.", "paragraph2": "Somos el proveedor preferido de hoteles y coordinadores de eventos. Protocolos claros, comunicaci\xF3n fluida, montaje sin drama. Log\xEDstica propia, equipo entrenado en eventos de nivel. Eso te deja tranquilo \u2014 tu evento funciona como est\xE1 planeado." })} <div class="features-grid-4"> <div class="feature-card"> <h3>Eventos Corporativos</h3> <p>80% de nuestros eventos son corporativos. Sabemos protocolo, confidencialidad y profundidad técnica.</p> </div> <div class="feature-card"> <h3>Hoteles y Salones</h3> <p>Proveedor preferido de hoteles 5 estrellas. Coordinación perfecta con gerentes de eventos.</p> </div> <div class="feature-card"> <h3>Respeto por Art Deco</h3> <p>Especialización en iluminación para espacios históricos. Zero daños. Estética respetada.</p> </div> <div class="feature-card"> <h3>Iluminación de Protocolo</h3> <p>Guirnaldas elegantes, uplighting estratégico, proyecciones coordinadas. Profundidad técnica.</p> </div> </div> </div> </section>  <section class="services-section services-alt"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Servicios Principales", "subtitle": "Las 4 soluciones de iluminaci\xF3n m\xE1s solicitadas en Cuauht\xE9moc.", "paragraph1": "Cada servicio se adapta a tu evento corporativo. Servicios m\xFAltiples con descuento. Presupuesto formal para eventos de nivel.", "paragraph2": "Cotiza por WhatsApp con brief del evento. Respuesta r\xE1pida, profesional." })} <div class="services-grid"> ${serviciosRelacionados.map((s) => renderTemplate`${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "title": s.title, "image": s.image, "alt": s.alt, "description": s.description, "link": s.link })}`)} </div> </div> </section>  <section class="faq-section"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Preguntas sobre Iluminaci\xF3n en Cuauht\xE9moc", "subtitle": "Lo que todos preguntan antes de cotizar.", "paragraph1": "Si tienes otra duda, escr\xEDbenos por WhatsApp. Respuesta en minutos.", "paragraph2": "Cada espacio es diferente \u2014 por eso hacemos propuestas a la medida." })} </div> ${renderComponent($$result2, "FaqSection", $$FaqSection, { "items": [
    {
      question: "\xBFCu\xE1l es la cobertura de REDEIL en Cuauht\xE9moc?",
      answer: "Cubrimos Cuauht\xE9moc, Centro Hist\xF3rico, Roma y alrededores. Hoteles, salones, espacios corporativos. Transporte incluido."
    },
    {
      question: "\xBFCu\xE1nto cuesta iluminar un evento corporativo en Cuauht\xE9moc?",
      answer: "Un evento corporativo b\xE1sico arranca desde $7,500. Bodas y eventos completos en hoteles, $18,000+. Presupuesto formal en 24h."
    },
    {
      question: "\xBFCu\xE1l es el tiempo de instalaci\xF3n?",
      answer: "Nuestro equipo en Cuauht\xE9moc tarda 2-3 horas. Llegamos 4 horas antes para coordinaci\xF3n con gerente de eventos del hotel."
    },
    {
      question: "\xBFSon el proveedor oficial de alg\xFAn hotel?",
      answer: "Trabajamos con la mayor\xEDa de hoteles 5 estrellas de Cuauht\xE9moc como proveedor preferido. Coordinaci\xF3n fluida, facturaci\xF3n, protocolos establecidos."
    },
    {
      question: "\xBFRespetan la arquitectura art deco?",
      answer: "S\xED. 30 a\xF1os de experiencia en espacios hist\xF3ricos. Zero da\xF1os garantizado. Iluminaci\xF3n que complementa, no compite."
    },
    {
      question: "\xBFPuedo solicitar propuestas personalizadas?",
      answer: "S\xED. Brief detallado \u2192 propuesta formal en 24h. Renders disponibles para eventos de nivel."
    },
    {
      question: "\xBFQu\xE9 incluye el servicio completo?",
      answer: "Traslado de equipo, montaje profesional, coordinaci\xF3n con hotel, pruebas, operaci\xF3n durante evento, desmontaje. Cero cargos ocultos."
    },
    {
      question: "\xBFCon cu\xE1nta anticipaci\xF3n debo reservar?",
      answer: "Idealmente 4-6 semanas. Cuauht\xE9moc tiene alta demanda en temporada alta. Hoteles pueden tener restricciones previas."
    }
  ] })} </section>  <section class="cta-section"> <div class="container"> <div class="cta-content"> <h2>¿Listo para iluminar tu evento corporativo en Cuauhtémoc?</h2> <p>Mándanos detalles y fotos por WhatsApp. Presupuesto formal, coordinación hotelera, ejecución impecable.</p> <div class="cta-buttons"> <a href="https://wa.me/525530682988?text=Hola,%20quiero%20cotizar%20iluminacion%20para%20mi%20evento%20en%20Cuauhtemoc" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp btn-lg">Cotiza por WhatsApp</a> <a href="tel:+525530682988" class="btn btn-primary btn-lg">Llámanos — 55 3068 2988</a> </div> </div> </div> </section> ` })}`;
}, "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/pages/zonas/cuauhtemoc.astro", void 0);

const $$file = "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/pages/zonas/cuauhtemoc.astro";
const $$url = "/zonas/cuauhtemoc";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Cuauhtemoc,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
