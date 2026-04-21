import { c as createComponent, b as renderComponent, r as renderTemplate, m as maybeRenderHead, F as Fragment } from '../../chunks/astro/server_D8pMnQBn.mjs';
import 'piccolore';
import { $ as $$BaseLayout, a as $$Breadcrumbs } from '../../chunks/Breadcrumbs_BkFbHGbf.mjs';
import { $ as $$Hero } from '../../chunks/Hero_3Is3fruG.mjs';
import { $ as $$CtaBar } from '../../chunks/CtaBar_CdFZlCZU.mjs';
import { $ as $$SectionHeader } from '../../chunks/SectionHeader_mLKzHzNX.mjs';
import { $ as $$ServiceCard } from '../../chunks/ServiceCard_Bli7ALj4.mjs';
import { $ as $$FaqSection } from '../../chunks/FaqSection_CzcP3CIi.mjs';
export { renderers } from '../../renderers.mjs';

const $$Nezahualcoyotl = createComponent(($$result, $$props, $$slots) => {
  const title = "Renta de Iluminaci\xF3n en Nezahualc\xF3yotl | XV A\xF1os y Bodas | REDEIL";
  const description = "Renta de iluminaci\xF3n en Nezahualc\xF3yotl, Ciudad Neza. Salones amplios, XV a\xF1os, bodas. Estado de M\xE9xico. Cotiza: 55 3068 2988";
  const canonical = "https://rentadeiluminacion.com/zonas/nezahualcoyotl/";
  const schemaMarkup = JSON.stringify([
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Renta de Iluminaci\xF3n en Nezahualc\xF3yotl",
      "serviceType": "Iluminaci\xF3n para Eventos",
      "areaServed": {
        "@type": "City",
        "name": "Nezahualc\xF3yotl",
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
          "name": "Nezahualc\xF3yotl",
          "geo": { "@type": "GeoCoordinates", "latitude": 19.4014, "longitude": -98.9979 }
        },
        {
          "@type": "Place",
          "name": "Ciudad Neza",
          "geo": { "@type": "GeoCoordinates", "latitude": 19.4014, "longitude": -98.9979 }
        },
        {
          "@type": "Place",
          "name": "\xC1rea Metropolitana",
          "geo": { "@type": "GeoCoordinates", "latitude": 19.4014, "longitude": -98.9979 }
        }
      ],
      "description": "Renta de iluminaci\xF3n profesional en Nezahualc\xF3yotl, Edomex. Especializaci\xF3n en salones amplios, XV a\xF1os y bodas masivas. Transporte e instalaci\xF3n incluidos.",
      "priceRange": "$$"
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "\xBFCu\xE1l es la cobertura de REDEIL en Nezahualc\xF3yotl?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Cubrimos Nezahualc\xF3yotl, Ciudad Neza y alrededores. Salones amplios, patios, espacios de zona oriente Edomex. Transporte incluido."
          }
        },
        {
          "@type": "Question",
          "name": "\xBFCu\xE1nto cuesta iluminar una boda en Nezahualc\xF3yotl?",
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
            "text": "Nuestro equipo en Nezahualc\xF3yotl tarda 2-3 horas. Llegamos 4 horas antes, con tiempo de sobra para preparaci\xF3n."
          }
        },
        {
          "@type": "Question",
          "name": "\xBFConocen los salones de Nezahualc\xF3yotl?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "S\xED. Conocemos los principales salones de Ciudad Neza. Experiencia en eventos de 200+ invitados con log\xEDstica completa."
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
    { label: "Nezahualc\xF3yotl" }
  ] })} ` })}`, "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, { "title": "Renta de Iluminaci\xF3n en Nezahualc\xF3yotl", "subtitle": "XV a\xF1os, bodas y eventos amplios en Ciudad Neza. Salones de escala, eventos masivos. Transporte e instalaci\xF3n incluidos.", "whatsappText": "Hola,%20quiero%20cotizar%20iluminacion%20para%20mi%20evento%20en%20Nezahualcoyotl", "introParagraph1": "Nezahualc\xF3yotl es Ciudad Neza \u2014 eventos de escala, XV a\xF1os legendarios, bodas masivas que requieren log\xEDstica profesional. <strong>REDEIL lleva 30 a\xF1os iluminando eventos en Nezahualc\xF3yotl</strong>. Sabemos c\xF3mo coordinar log\xEDstica en eventos de 200+ invitados, c\xF3mo iluminar salones amplios con impacto. Luces que funcionan en espacios grandes, en cualquier tipo de instalaci\xF3n. 340+ eventos al a\xF1o en Neza.", "introParagraph2": "Los XV a\xF1os de Nezahualc\xF3yotl son XV a\xF1os de presencia \u2014 150+ invitados, familias extendidas, eventos que requieren iluminaci\xF3n de categor\xEDa. Guirnaldas en techo alto, luces ne\xF3n personalizadas, uplighting coordinado, DJ lighting sincronizado. Bodas amplias, despedidas de soltero masivas \u2014 equipo que lleva 30 a\xF1os en la zona. Llegamos 4 horas antes, montamos en 2-3 horas, se adapta a cambios. Precio transparente: no cobramos cargos ocultos." })}  ${maybeRenderHead()}<section class="stats-section-enhanced"> <div class="container"> <div class="stats-grid-enhanced"> <div class="stat-card-enhanced"> <span class="stat-number-enhanced">30+</span> <span class="stat-label-enhanced">Años en Nezahualcóyotl</span> </div> <div class="stat-card-enhanced"> <span class="stat-number-enhanced">340+</span> <span class="stat-label-enhanced">Eventos/Año</span> </div> <div class="stat-card-enhanced"> <span class="stat-number-enhanced">2h</span> <span class="stat-label-enhanced">Instalación Rápida</span> </div> <div class="stat-card-enhanced"> <span class="stat-number-enhanced">100%</span> <span class="stat-label-enhanced">Cobertura Zona</span> </div> </div> </div> </section> ${renderComponent($$result2, "CtaBar", $$CtaBar, { "headline": "\xBFPara qu\xE9 tipo de evento necesitas iluminaci\xF3n?", "items": [
    { label: "Bodas", href: "/eventos/bodas/", icon: "iluminacion" },
    { label: "XV A\xF1os", href: "/eventos/xv-anos/", icon: "iluminacion" },
    { label: "Corporativos", href: "/eventos/corporativos/", icon: "iluminacion" },
    { label: "Cotiza Ahora", href: "/contacto/", icon: "cotizar" }
  ] })}  <section class="services-section"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Por qu\xE9 Nosotros en Nezahualc\xF3yotl", "subtitle": "4 razones por las que REDEIL es el proveedor de iluminaci\xF3n en Nezahualc\xF3yotl.", "paragraph1": "El 75% de nuestros eventos en Neza son XV a\xF1os masivos. Sabemos exactamente qu\xE9 iluminaci\xF3n transforma un sal\xF3n en fiesta legendaria. Guirnaldas en techo alto, luces ne\xF3n visibles a distancia, uplighting en colores coordinados. Cada detalle cuenta en eventos de escala.", "paragraph2": "Log\xEDstica propia, equipo para eventos grandes. Colocamos guirnaldas en techos altos, coordinamos sistemas amplios, trabajamos sin drama. Eso te deja tranquilo \u2014 tu evento funciona como est\xE1 planeado." })} <div class="features-grid-4"> <div class="feature-card"> <h3>XV Años Legendarios</h3> <p>75% de nuestros eventos son XV años de escala. Sabemos la logística de eventos grandes.</p> </div> <div class="feature-card"> <h3>Logística Amplia</h3> <p>Equipo para eventos de 200+ invitados. Montaje en espacios grandes, coordinación profesional.</p> </div> <div class="feature-card"> <h3>Salones Conocidos</h3> <p>30 años en Nezahualcóyotl. Conocemos los principales salones de Ciudad Neza.</p> </div> <div class="feature-card"> <h3>Escalabilidad Garantizada</h3> <p>Iluminación que funciona en cualquier tamaño de espacio. Sistema flexible, profesional.</p> </div> </div> </div> </section>  <section class="services-section services-alt"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Servicios Principales", "subtitle": "Las 4 soluciones de iluminaci\xF3n m\xE1s solicitadas en Nezahualc\xF3yotl.", "paragraph1": "Cada servicio se adapta a tu evento. Si necesitas combinar varios servicios, el precio baja porque compartimos traslado y operador.", "paragraph2": "Cotiza por WhatsApp con fotos de tu venue. Respuesta en minutos." })} <div class="services-grid"> ${serviciosRelacionados.map((s) => renderTemplate`${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "title": s.title, "image": s.image, "alt": s.alt, "description": s.description, "link": s.link })}`)} </div> </div> </section>  <section class="faq-section"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Preguntas sobre Iluminaci\xF3n en Nezahualc\xF3yotl", "subtitle": "Lo que todos preguntan antes de cotizar.", "paragraph1": "Si tienes otra duda, escr\xEDbenos por WhatsApp. Respuesta en minutos.", "paragraph2": "Cada espacio es diferente \u2014 por eso hacemos propuestas a la medida." })} </div> ${renderComponent($$result2, "FaqSection", $$FaqSection, { "items": [
    {
      question: "\xBFCu\xE1l es la cobertura de REDEIL en Nezahualc\xF3yotl?",
      answer: "Cubrimos Nezahualc\xF3yotl, Ciudad Neza y alrededores. Salones, patios, espacios de zona oriente Edomex. Transporte incluido."
    },
    {
      question: "\xBFCu\xE1nto cuesta iluminar una boda en Nezahualc\xF3yotl?",
      answer: "Una boda b\xE1sica con guirnaldas arranca desde $6,500. Bodas amplias con m\xFAltiples servicios, $15,000+. Cotiza por WhatsApp."
    },
    {
      question: "\xBFCu\xE1l es el tiempo de instalaci\xF3n?",
      answer: "Nuestro equipo en Nezahualc\xF3yotl tarda 2-3 horas. Llegamos 4 horas antes, con tiempo de sobra para preparaci\xF3n."
    },
    {
      question: "\xBFConocen los salones de Nezahualc\xF3yotl?",
      answer: "S\xED. Conocemos los principales salones de Ciudad Neza. Experiencia en eventos de 200+ invitados con log\xEDstica completa."
    },
    {
      question: "\xBFC\xF3mo funcionan las guirnaldas en techos altos?",
      answer: "Especializaci\xF3n en techos altos. Sistemas de cableado seguro, instalaci\xF3n profesional, efectos visibles a distancia."
    },
    {
      question: "\xBFPuedo solicitar iluminaci\xF3n espec\xEDfica para mi XV a\xF1os?",
      answer: "S\xED. Personalizaci\xF3n total. M\xE1ndanos foto del sal\xF3n y te hacemos propuesta en 24 horas."
    },
    {
      question: "\xBFQu\xE9 incluye el servicio de transporte e instalaci\xF3n?",
      answer: "Todo. Traslado de equipo, montaje profesional, pruebas, operaci\xF3n durante el evento, desmontaje. Cero cargos ocultos."
    },
    {
      question: "\xBFCon cu\xE1nta anticipaci\xF3n debo reservar?",
      answer: "Idealmente 2-3 semanas. Neza en temporada alta (mayo-julio, noviembre-enero) se llena r\xE1pido. Entre antes reserves, mejor."
    }
  ] })} </section>  <section class="cta-section"> <div class="container"> <div class="cta-content"> <h2>¿Listo para iluminar tu evento en Nezahualcóyotl?</h2> <p>Mándanos fotos de tu venue por WhatsApp y te cotizamos en minutos. Transporte, instalación y montaje incluidos.</p> <div class="cta-buttons"> <a href="https://wa.me/525530682988?text=Hola,%20quiero%20cotizar%20iluminacion%20para%20mi%20evento%20en%20Nezahualcoyotl" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp btn-lg">Cotiza por WhatsApp</a> <a href="tel:+525530682988" class="btn btn-primary btn-lg">Llámanos — 55 3068 2988</a> </div> </div> </div> </section> ` })}`;
}, "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/pages/zonas/nezahualcoyotl.astro", void 0);

const $$file = "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/pages/zonas/nezahualcoyotl.astro";
const $$url = "/zonas/nezahualcoyotl";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Nezahualcoyotl,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
