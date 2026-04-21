import { c as createComponent, b as renderComponent, r as renderTemplate, m as maybeRenderHead, F as Fragment } from '../../chunks/astro/server_D8pMnQBn.mjs';
import 'piccolore';
import { $ as $$BaseLayout, a as $$Breadcrumbs } from '../../chunks/Breadcrumbs_BkFbHGbf.mjs';
import { $ as $$Hero } from '../../chunks/Hero_3Is3fruG.mjs';
import { $ as $$CtaBar } from '../../chunks/CtaBar_CdFZlCZU.mjs';
import { $ as $$SectionHeader } from '../../chunks/SectionHeader_mLKzHzNX.mjs';
import { $ as $$ServiceCard } from '../../chunks/ServiceCard_Bli7ALj4.mjs';
import { $ as $$FaqSection } from '../../chunks/FaqSection_CzcP3CIi.mjs';
export { renderers } from '../../renderers.mjs';

const $$Polanco = createComponent(($$result, $$props, $$slots) => {
  const title = "Renta de Iluminaci\xF3n en Polanco | Eventos Corporativos | REDEIL";
  const description = "Renta de iluminaci\xF3n para eventos corporativos en Polanco CDMX. Equipamiento premium. Dise\xF1o profesional. 200+ eventos/a\xF1o. Cotiza: 55 3068 2988";
  const canonical = "https://rentadeiluminacion.com/zonas/polanco/";
  const schemaMarkup = JSON.stringify([
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Renta de Iluminaci\xF3n en Polanco",
      "serviceType": "Iluminaci\xF3n Corporativa Profesional",
      "areaServed": {
        "@type": "City",
        "name": "Polanco",
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
          "name": "Polanco",
          "geo": { "@type": "GeoCoordinates", "latitude": 19.4327, "longitude": -99.1842 }
        },
        {
          "@type": "Place",
          "name": "Lomas de Chapultepec",
          "geo": { "@type": "GeoCoordinates", "latitude": 19.4427, "longitude": -99.2042 }
        },
        {
          "@type": "Place",
          "name": "Bosques de las Lomas",
          "geo": { "@type": "GeoCoordinates", "latitude": 19.4527, "longitude": -99.2142 }
        }
      ],
      "description": "Renta de iluminaci\xF3n profesional para eventos corporativos, lanzamientos de marca y galas en Polanco, Lomas de Chapultepec y Bosques de las Lomas.",
      "priceRange": "$$$"
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "\xBFQu\xE9 tipo de eventos corporativos cubre REDEIL en Polanco?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Todo: lanzamientos de producto, convenciones, galas empresariales, cenas de ejecutivos, premios anuales. Si es corporativo y requiere iluminaci\xF3n, lo hacemos."
          }
        },
        {
          "@type": "Question",
          "name": "\xBFCu\xE1l es el presupuesto para iluminar un evento corporativo?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Evento b\xE1sico (uplighting + escenario): $8,000+. Evento con gobos personalizados y seguidor: $18,000+. Grandes producciones, cotizamos a la medida."
          }
        },
        {
          "@type": "Question",
          "name": "\xBFRealizan visitas previas al venue?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "S\xED, obligatorio para eventos corporativos. Visitamos el sal\xF3n, medimos, analizamos tomas de corriente. Te mandamos propuesta visual con diagrama."
          }
        },
        {
          "@type": "Question",
          "name": "\xBFPueden incorporar la identidad visual de mi empresa?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Totalmente. Gobos con logo, colores corporativos en uplighting, dise\xF1o coherente con tu identidad. M\xE1ndanos el logo y los colores."
          }
        }
      ]
    }
  ]);
  const serviciosRelacionados = [
    {
      title: "Proyectores HMI \u2014 Spotlight Ejecutivo",
      image: "/img/seguidor/renta-luz-seguidor-boda-primer-baile-hmi-1200w-300w.avif",
      alt: "Seguidor de luz HMI profesional",
      description: "Seguidor de luz de alta potencia (1200W). Ilumina al CEO, genera dramatismo, comunica importancia.",
      link: "/servicios/seguidor/"
    },
    {
      title: "Gobos Corporativos \u2014 Logo Proyectado",
      image: "/img/gobos/renta-gobo-monograma-pista-baile-300w.avif",
      alt: "Gobo proyectando logo corporativo",
      description: "Tu logo proyectado en el escenario, fotocall, paredes. Personalizaci\xF3n total, dise\xF1o previo incluido.",
      link: "/servicios/gobos/"
    },
    {
      title: "Uplighting Arquitect\xF3nico",
      image: "/img/iluminacion/uplighting-corporativo-sal\xF3n.avif",
      alt: "Uplighting iluminando columnas de sal\xF3n",
      description: "Iluminaci\xF3n de columnas, paredes, escenario. Colores corporativos, coordinado, profesional.",
      link: "/servicios/iluminacion/"
    },
    {
      title: "Bocinas Profesionales \u2014 Sistema Audio",
      image: "/img/bocinas/bocinas-sistema-profesional.avif",
      alt: "Sistema de sonido profesional para evento",
      description: "Sonido de conferencia, presentaciones, m\xFAsica ambiente. Equipamiento de grado profesional.",
      link: "/servicios/bocinas-djs/"
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "canonical": canonical, "schemaMarkup": schemaMarkup }, { "breadcrumbs": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "breadcrumbs" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Breadcrumbs", $$Breadcrumbs, { "items": [
    { label: "Inicio", href: "/" },
    { label: "Zonas de Cobertura", href: "/zonas-de-cobertura/" },
    { label: "Polanco" }
  ] })} ` })}`, "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, { "title": "Renta de Iluminaci\xF3n en Polanco", "subtitle": "Eventos corporativos, galas, lanzamientos de marca. Iluminaci\xF3n de lujo con equipamiento premium. Instalaci\xF3n profesional.", "whatsappText": "Hola,%20quiero%20cotizar%20iluminacion%20para%20mi%20evento%20corporativo%20en%20Polanco", "introParagraph1": "Polanco es donde ocurren los eventos que importan. Lanzamientos de marca, galas corporativas, convenciones de ejecutivos, recepciones VIP. La iluminaci\xF3n aqu\xED no es solo decoraci\xF3n \u2014 es estrategia. Un reflector en el logo de la empresa. Luz especial en el podio. Dise\xF1o de escena arquitect\xF3nico que comunica profesionalismo. <strong>REDEIL es el proveedor de iluminaci\xF3n en Polanco</strong>. Hoteles Intercontinental, Four Seasons, Presidente. Salones JW Marriott, Reforma 222, Hilton.", "introParagraph2": "No porque seamos los m\xE1s baratos \u2014 sino porque somos los m\xE1s confiables. Un evento corporativo no se repite. Tienes una oportunidad. Nosotros la hacemos perfecta. 200+ eventos corporativos al a\xF1o. Cada uno con su propio dise\xF1o de iluminaci\xF3n. Un reflector HMI de 1200W siguiendo al CEO. Gobo con el logotipo. Uplighting coordinado con los colores corporativos. Equipamiento premium, t\xE9cnicos certificados, retraso cero. El evento comienza a la hora exacta." })}  ${maybeRenderHead()}<section class="stats-section-enhanced"> <div class="container"> <div class="stats-grid-enhanced"> <div class="stat-card-enhanced"> <span class="stat-number-enhanced">200+</span> <span class="stat-label-enhanced">Eventos Corporativos/Año</span> </div> <div class="stat-card-enhanced"> <span class="stat-number-enhanced">Fortune 500</span> <span class="stat-label-enhanced">Clientes Premium</span> </div> <div class="stat-card-enhanced"> <span class="stat-number-enhanced">100%</span> <span class="stat-label-enhanced">Cobertura Polanco</span> </div> <div class="stat-card-enhanced"> <span class="stat-number-enhanced">0</span> <span class="stat-label-enhanced">Retrasos</span> </div> </div> </div> </section> ${renderComponent($$result2, "CtaBar", $$CtaBar, { "headline": "\xBFQu\xE9 tipo de evento corporativo tienes?", "items": [
    { label: "Lanzamiento de Marca", href: "/eventos/corporativos/", icon: "iluminacion" },
    { label: "Gala Empresarial", href: "/eventos/corporativos/", icon: "iluminacion" },
    { label: "Convenci\xF3n", href: "/eventos/corporativos/", icon: "iluminacion" },
    { label: "Solicita Presupuesto", href: "/contacto/", icon: "cotizar" }
  ] })}  <section class="services-section"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Por qu\xE9 Nosotros en Polanco", "subtitle": "4 razones por las que REDEIL es tu proveedor de iluminaci\xF3n corporativa.", "paragraph1": "Proyectores HMI, cabezas m\xF3viles profesionales, gobos personalizados con tu logo, cableado de alta potencia. Nada improvisado. 200+ eventos corporativos al a\xF1o. Sabemos qu\xE9 espera un ejecutivo de una presentaci\xF3n.", "paragraph2": "Timing perfecto, iluminaci\xF3n que refuerza el mensaje, cero fallos t\xE9cnicos. Entrega a tiempo, pruebas previas, respaldo t\xE9cnico durante el evento. Iluminaci\xF3n que no es bonita sino estrat\xE9gica. Reflejas el logo, subrayas mensajes clave, creas atm\xF3sfera de profesionalismo." })} <div class="features-grid-4"> <div class="feature-card"> <h3>Equipamiento Premium</h3> <p>Proyectores HMI, gobos personalizados, cableado de alta potencia. Nada improvisado.</p> </div> <div class="feature-card"> <h3>Experiencia Corporativa</h3> <p>200+ eventos corporativos al año. Sabemos qué espera un ejecutivo de una presentación.</p> </div> <div class="feature-card"> <h3>Logística Impecable</h3> <p>Entrega a tiempo, pruebas previas, respaldo técnico durante el evento. Sin sorpresas.</p> </div> <div class="feature-card"> <h3>Diseño Arquitectónico</h3> <p>Iluminación estratégica que comunica. Reflejas el logo, subrayas mensajes clave.</p> </div> </div> </div> </section>  <section class="services-section services-alt"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Servicios Corporativos", "subtitle": "Las 4 soluciones de iluminaci\xF3n m\xE1s solicitadas para eventos en Polanco.", "paragraph1": "Cada servicio se personaliza seg\xFAn tu evento. Combina varios servicios y el precio baja por compartir traslado y operador.", "paragraph2": "Cotiza por WhatsApp. Respuesta en minutos." })} <div class="services-grid"> ${serviciosRelacionados.map((s) => renderTemplate`${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "title": s.title, "image": s.image, "alt": s.alt, "description": s.description, "link": s.link })}`)} </div> </div> </section>  <section class="faq-section"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Preguntas sobre Iluminaci\xF3n Corporativa en Polanco", "subtitle": "Lo que todos preguntan antes de contratar.", "paragraph1": "Si tienes otra duda espec\xEDfica, escr\xEDbenos por WhatsApp. Respuesta en minutos.", "paragraph2": "Cada evento corporativo es \xFAnico \u2014 por eso hacemos propuestas personalizadas." })} </div> ${renderComponent($$result2, "FaqSection", $$FaqSection, { "items": [
    {
      question: "\xBFQu\xE9 tipo de eventos corporativos cubren?",
      answer: "Todo: lanzamientos de producto, convenciones, galas empresariales, cenas de ejecutivos, premios anuales, convenciones m\xE9dicas. Si es corporativo y requiere iluminaci\xF3n, lo hacemos."
    },
    {
      question: "\xBFCu\xE1l es el presupuesto para un evento corporativo en Polanco?",
      answer: "Evento b\xE1sico (uplighting + iluminaci\xF3n de escenario): $8,000+. Evento con gobos personalizados, seguidor y dise\xF1o completo: $18,000+. Grandes producciones, cotizamos a la medida."
    },
    {
      question: "\xBFRealizan visitas previas al venue?",
      answer: "S\xED, obligatorio para eventos corporativos. Visitamos el sal\xF3n, medimos, analizamos tomas de corriente, puntos de anclaje. Te mandamos propuesta visual con diagrama de iluminaci\xF3n."
    },
    {
      question: "\xBFQu\xE9 garant\xEDa tienen en eventos cr\xEDticos?",
      answer: "Respaldo t\xE9cnico en sitio durante toda la duraci\xF3n. Si falla algo, nuestro t\xE9cnico lo repara en minutos. Equipo de reemplazo disponible siempre."
    },
    {
      question: "\xBFPueden incorporar la identidad visual de mi empresa?",
      answer: "Totalmente. Gobos con logo, colores corporativos en uplighting, dise\xF1o coherente con tu identidad. M\xE1ndanos el logo y los colores."
    },
    {
      question: "\xBFCu\xE1l es el tiempo de montaje?",
      answer: "3-5 horas seg\xFAn complejidad. Llegamos con suficiente tiempo de anticipaci\xF3n. Pruebas incluidas. Todo funcionando 30 minutos antes de que lleguen los invitados."
    },
    {
      question: "\xBFOfrecen asesor\xEDa de dise\xF1o de iluminaci\xF3n?",
      answer: "S\xED. Nuestros t\xE9cnicos son dise\xF1adores de iluminaci\xF3n. Te asesoran sobre qu\xE9 funciona para tu evento, qu\xE9 comunica profesionalismo, qu\xE9 destaca tus momentos clave."
    },
    {
      question: "\xBFTrabajan con agencias de eventos y productoras?",
      answer: "S\xED, el 50% de nuestro negocio. Tenemos convenios con agencias top. Respuesta r\xE1pida, presupuestos competitivos, disponibilidad garantizada."
    }
  ] })} </section>  <section class="cta-section"> <div class="container"> <div class="cta-content"> <h2>¿Listo para iluminar tu evento corporativo en Polanco?</h2> <p>Solicita un presupuesto. Mándanos detalles del evento y te respondemos en 24 horas con propuesta visual.</p> <div class="cta-buttons"> <a href="https://wa.me/525530682988?text=Hola,%20quiero%20cotizar%20iluminacion%20para%20mi%20evento%20corporativo%20en%20Polanco" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp btn-lg">Solicita Presupuesto</a> <a href="tel:+525530682988" class="btn btn-primary btn-lg">Llámanos — 55 3068 2988</a> </div> </div> </div> </section> ` })}`;
}, "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/pages/zonas/polanco.astro", void 0);

const $$file = "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/pages/zonas/polanco.astro";
const $$url = "/zonas/polanco";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Polanco,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
