import { c as createComponent, b as renderComponent, r as renderTemplate, m as maybeRenderHead, F as Fragment } from '../../chunks/astro/server_D8pMnQBn.mjs';
import 'piccolore';
import { $ as $$BaseLayout, a as $$Breadcrumbs } from '../../chunks/Breadcrumbs_BkFbHGbf.mjs';
import { $ as $$Hero } from '../../chunks/Hero_3Is3fruG.mjs';
import { $ as $$CtaBar } from '../../chunks/CtaBar_CdFZlCZU.mjs';
import { $ as $$SectionHeader } from '../../chunks/SectionHeader_mLKzHzNX.mjs';
import { $ as $$ServiceCard } from '../../chunks/ServiceCard_Bli7ALj4.mjs';
import { $ as $$FaqSection } from '../../chunks/FaqSection_CzcP3CIi.mjs';
export { renderers } from '../../renderers.mjs';

const $$AlvaroObregon = createComponent(($$result, $$props, $$slots) => {
  const title = "Renta de Iluminaci\xF3n en \xC1lvaro Obreg\xF3n | Bodas Corporativas | REDEIL";
  const description = "Renta de iluminaci\xF3n en \xC1lvaro Obreg\xF3n. Santa Fe, Pedregal, jardines amplios. Especializaci\xF3n en bodas corporativas y eventos de lujo. Cotiza: 55 3068 2988";
  const canonical = "https://rentadeiluminacion.com/zonas/alvaro-obregon/";
  const schemaMarkup = JSON.stringify([
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Renta de Iluminaci\xF3n en \xC1lvaro Obreg\xF3n",
      "serviceType": "Iluminaci\xF3n para Eventos",
      "areaServed": {
        "@type": "City",
        "name": "\xC1lvaro Obreg\xF3n",
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
          "name": "\xC1lvaro Obreg\xF3n",
          "geo": { "@type": "GeoCoordinates", "latitude": 19.3762, "longitude": -99.2083 }
        },
        {
          "@type": "Place",
          "name": "Santa Fe",
          "geo": { "@type": "GeoCoordinates", "latitude": 19.3578, "longitude": -99.2683 }
        },
        {
          "@type": "Place",
          "name": "Pedregal",
          "geo": { "@type": "GeoCoordinates", "latitude": 19.3401, "longitude": -99.2223 }
        }
      ],
      "description": "Renta de iluminaci\xF3n profesional en \xC1lvaro Obreg\xF3n. Especializaci\xF3n en Santa Fe, Pedregal, jardines amplios y bodas corporativas. Transporte e instalaci\xF3n incluidos.",
      "priceRange": "$$"
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "\xBFCu\xE1l es la cobertura de REDEIL en \xC1lvaro Obreg\xF3n?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Cubrimos \xC1lvaro Obreg\xF3n, Santa Fe, Pedregal y alrededores. Jardines amplios, patios premium, espacios corporativos. Transporte incluido en toda la zona."
          }
        },
        {
          "@type": "Question",
          "name": "\xBFCu\xE1nto cuesta iluminar una boda corporativa en \xC1lvaro Obreg\xF3n?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Una boda corporativa b\xE1sica arranca desde $8,000. Bodas completas en Pedregal o Santa Fe con m\xFAltiples servicios, $22,000+. Cotiza por WhatsApp con detalles de tu evento."
          }
        },
        {
          "@type": "Question",
          "name": "\xBFCu\xE1l es el tiempo de instalaci\xF3n?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Nuestro equipo en \xC1lvaro Obreg\xF3n tarda 2-3 horas en montar un evento. Llegamos 4 horas antes con protocolos corporativos."
          }
        },
        {
          "@type": "Question",
          "name": "\xBFTienen experiencia en eventos corporativos de Santa Fe?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "S\xED. 30 a\xF1os iluminando eventos corporativos en Santa Fe, Pedregal y jardines amplios. Somos el proveedor de confianza de empresas y familias de la zona."
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
      description: "Focos LED o vintage, cableado IP65, resistentes a lluvia. Elegancia en cualquier boda corporativa o evento.",
      link: "/servicios/guirnaldas/"
    },
    {
      title: "Luces Neon Personalizadas",
      image: "/img/luces-neon/luces-neon-nombres-boda.avif",
      alt: "Luces neon personalizadas para boda",
      description: "Nombres de los novios, logos corporativos, frases. Ne\xF3n de colores \xE1mbar, rosa, azul, blanco. Impacto visual premium.",
      link: "/servicios/luces-neon/"
    },
    {
      title: "Cabezas M\xF3viles \u2014 Sky Tracker",
      image: "/img/cabezas-moviles/cabezas-moviles-boda.avif",
      alt: "Cabezas m\xF3viles iluminando pista de baile",
      description: "Proyecciones animadas, colores sincronizados, efectos especiales. Producci\xF3n profesional de escenario.",
      link: "/servicios/cabezas-moviles/"
    },
    {
      title: "Bocinas y DJ Lighting",
      image: "/img/bocinas/bocinas-sistema-profesional.avif",
      alt: "Sistema de sonido profesional para evento",
      description: "Sonido profesional + luces que reaccionan a la m\xFAsica. Sistema completo de producci\xF3n.",
      link: "/servicios/bocinas-djs/"
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "canonical": canonical, "schemaMarkup": schemaMarkup }, { "breadcrumbs": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "breadcrumbs" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Breadcrumbs", $$Breadcrumbs, { "items": [
    { label: "Inicio", href: "/" },
    { label: "Zonas de Cobertura", href: "/zonas-de-cobertura/" },
    { label: "\xC1lvaro Obreg\xF3n" }
  ] })} ` })}`, "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, { "title": "Renta de Iluminaci\xF3n en \xC1lvaro Obreg\xF3n", "subtitle": "Bodas corporativas, eventos premium en Santa Fe y Pedregal. Jardines amplios, espacios de lujo. Transporte e instalaci\xF3n incluidos.", "whatsappText": "Hola,%20quiero%20cotizar%20iluminacion%20para%20mi%20boda%20en%20Alvaro%20Obregon", "introParagraph1": "\xC1lvaro Obreg\xF3n es la zona de bodas corporativas y eventos de lujo por excelencia. Santa Fe, Pedregal, jardines amplios con arquitectura moderna \u2014 espacios que requieren iluminaci\xF3n sofisticada. <strong>REDEIL lleva 30 a\xF1os iluminando eventos en \xC1lvaro Obreg\xF3n</strong>. Bodas de ejecutivos, eventos corporativos, despedidas de soltero de nivel. Sabemos exactamente c\xF3mo coordinar iluminaci\xF3n con dise\xF1adores, coordinadores de eventos y arquitectos. 290+ eventos al a\xF1o en la zona.", "introParagraph2": "Las bodas de \xC1lvaro Obreg\xF3n son bodas de nivel. Cada detalle est\xE1 cuidado \u2014 desde la invitaci\xF3n hasta la iluminaci\xF3n final. Guirnaldas en patios de Pedregal, uplighting coordinado con la paleta crom\xE1tica, gobo con el monograma de la familia proyectado en entrada. DJ lighting sincronizado con m\xFAsica live. El equipo lleva 30 a\xF1os entendiendo estos est\xE1ndares. Coordinamos con Wedding Planners, respetamos protocolos corporativos, ejecutamos sin improviso. Transporte incluido. Montaje \xE1gil. Precio transparente." })}  ${maybeRenderHead()}<section class="stats-section-enhanced"> <div class="container"> <div class="stats-grid-enhanced"> <div class="stat-card-enhanced"> <span class="stat-number-enhanced">30+</span> <span class="stat-label-enhanced">Años en Álvaro Obregón</span> </div> <div class="stat-card-enhanced"> <span class="stat-number-enhanced">290+</span> <span class="stat-label-enhanced">Eventos/Año</span> </div> <div class="stat-card-enhanced"> <span class="stat-number-enhanced">2h</span> <span class="stat-label-enhanced">Instalación Rápida</span> </div> <div class="stat-card-enhanced"> <span class="stat-number-enhanced">100%</span> <span class="stat-label-enhanced">Cobertura Zona</span> </div> </div> </div> </section> ${renderComponent($$result2, "CtaBar", $$CtaBar, { "headline": "\xBFPara qu\xE9 tipo de evento necesitas iluminaci\xF3n?", "items": [
    { label: "Bodas", href: "/eventos/bodas/", icon: "iluminacion" },
    { label: "Corporativos", href: "/eventos/corporativos/", icon: "iluminacion" },
    { label: "XV A\xF1os", href: "/eventos/xv-anos/", icon: "iluminacion" },
    { label: "Cotiza Ahora", href: "/contacto/", icon: "cotizar" }
  ] })}  <section class="services-section"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Por qu\xE9 Nosotros en \xC1lvaro Obreg\xF3n", "subtitle": "4 razones por las que REDEIL es el proveedor de iluminaci\xF3n en \xC1lvaro Obreg\xF3n.", "paragraph1": "El 65% de nuestros eventos en \xC1lvaro Obreg\xF3n son bodas corporativas o de familias empresariales. Sabemos exactamente qu\xE9 iluminaci\xF3n se espera en Santa Fe, Pedregal, jardines premium. Sofisticaci\xF3n sin exceso. Impacto visual coordinado. Cada detalle cuenta.", "paragraph2": "Coordinamos con Wedding Planners, respetamos protocolos corporativos, trabajamos con dise\xF1adores de interiores. Log\xEDstica propia, equipo entrenado en eventos de nivel. Eso te deja tranquilo \u2014 no hay inconvenientes. Montaje profesional, sin improvisaciones." })} <div class="features-grid-4"> <div class="feature-card"> <h3>Bodas Corporativas</h3> <p>65% de nuestros eventos son bodas de ejecutivos. Sabemos el nivel de sofisticación esperado.</p> </div> <div class="feature-card"> <h3>Coordinación Profesional</h3> <p>Trabajamos con Wedding Planners, diseñadores, arquitectos. Protocolo corporativo completo.</p> </div> <div class="feature-card"> <h3>Santa Fe y Pedregal</h3> <p>30 años iluminando los espacios premium de la zona. Conocemos cada venue y sus requerimientos.</p> </div> <div class="feature-card"> <h3>Iluminación Sofisticada</h3> <p>Guirnaldas elegantes, uplighting coordinado, gobos personalizados. Sistema de iluminación premium.</p> </div> </div> </div> </section>  <section class="services-section services-alt"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Servicios Principales", "subtitle": "Las 4 soluciones de iluminaci\xF3n m\xE1s solicitadas en \xC1lvaro Obreg\xF3n.", "paragraph1": "Cada servicio se adapta a tu evento. Combinaciones personalizadas para bodas corporativas. Descuentos en servicios m\xFAltiples.", "paragraph2": "Cotiza por WhatsApp con detalles y fotos. Respuesta r\xE1pida, presupuesto formal." })} <div class="services-grid"> ${serviciosRelacionados.map((s) => renderTemplate`${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "title": s.title, "image": s.image, "alt": s.alt, "description": s.description, "link": s.link })}`)} </div> </div> </section>  <section class="faq-section"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Preguntas sobre Iluminaci\xF3n en \xC1lvaro Obreg\xF3n", "subtitle": "Lo que todos preguntan antes de cotizar.", "paragraph1": "Si tienes otra duda, escr\xEDbenos por WhatsApp. Respuesta en minutos.", "paragraph2": "Cada espacio es diferente \u2014 por eso hacemos propuestas a la medida." })} </div> ${renderComponent($$result2, "FaqSection", $$FaqSection, { "items": [
    {
      question: "\xBFCu\xE1l es la cobertura de REDEIL en \xC1lvaro Obreg\xF3n?",
      answer: "Cubrimos \xC1lvaro Obreg\xF3n, Santa Fe, Pedregal y alrededores. Transporte incluido en toda la zona. Protocolo corporativo disponible."
    },
    {
      question: "\xBFCu\xE1nto cuesta iluminar una boda corporativa en \xC1lvaro Obreg\xF3n?",
      answer: "Una boda corporativa b\xE1sica arranca desde $8,000. Bodas completas en Pedregal o Santa Fe con m\xFAltiples servicios, $22,000+. Presupuesto formal en 24h."
    },
    {
      question: "\xBFCu\xE1l es el tiempo de instalaci\xF3n?",
      answer: "Nuestro equipo en \xC1lvaro Obreg\xF3n tarda 2-3 horas en montar un evento. Llegamos 4 horas antes con tiempo para coordinaci\xF3n."
    },
    {
      question: "\xBFTrabajas con Wedding Planners?",
      answer: "S\xED. Somos el proveedor preferido de planificadores de eventos en la zona. Coordinaci\xF3n fluida, protocolos corporativos, presupuestos formales."
    },
    {
      question: "\xBFTienen experiencia en eventos corporativos de Santa Fe?",
      answer: "S\xED. 30 a\xF1os iluminando eventos corporativos. Cena de gala, lanzamientos de producto, bodas de ejecutivos. Protocolo empresarial garantizado."
    },
    {
      question: "\xBFPuedo solicitar iluminaci\xF3n personalizada?",
      answer: "S\xED. Personalizaci\xF3n total. M\xE1ndanos brief con tu visi\xF3n. Hacemos propuesta en 24 horas, con render o descripci\xF3n detallada."
    },
    {
      question: "\xBFQu\xE9 incluye el servicio completo?",
      answer: "Traslado de equipo, montaje profesional, coordinaci\xF3n con tu equipo, pruebas, operaci\xF3n durante el evento, desmontaje. Cero cargos ocultos."
    },
    {
      question: "\xBFCon cu\xE1nta anticipaci\xF3n debo reservar?",
      answer: "Idealmente 4-6 semanas. \xC1lvaro Obreg\xF3n, especialmente Santa Fe, tiene alta demanda. Temporada alta puede requerir mayor anticipaci\xF3n."
    }
  ] })} </section>  <section class="cta-section"> <div class="container"> <div class="cta-content"> <h2>¿Listo para iluminar tu boda corporativa en Álvaro Obregón?</h2> <p>Mándanos detalles de tu evento por WhatsApp. Presupuesto formal, coordinación profesional, ejecución impecable.</p> <div class="cta-buttons"> <a href="https://wa.me/525530682988?text=Hola,%20quiero%20cotizar%20iluminacion%20para%20mi%20evento%20en%20Alvaro%20Obregon" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp btn-lg">Cotiza por WhatsApp</a> <a href="tel:+525530682988" class="btn btn-primary btn-lg">Llámanos — 55 3068 2988</a> </div> </div> </div> </section> ` })}`;
}, "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/pages/zonas/alvaro-obregon.astro", void 0);

const $$file = "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/pages/zonas/alvaro-obregon.astro";
const $$url = "/zonas/alvaro-obregon";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$AlvaroObregon,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
