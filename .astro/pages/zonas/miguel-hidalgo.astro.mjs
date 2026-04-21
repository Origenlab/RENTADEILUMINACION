import { c as createComponent, b as renderComponent, r as renderTemplate, m as maybeRenderHead, F as Fragment } from '../../chunks/astro/server_D8pMnQBn.mjs';
import 'piccolore';
import { $ as $$BaseLayout, a as $$Breadcrumbs } from '../../chunks/Breadcrumbs_BkFbHGbf.mjs';
import { $ as $$Hero } from '../../chunks/Hero_3Is3fruG.mjs';
import { $ as $$CtaBar } from '../../chunks/CtaBar_CdFZlCZU.mjs';
import { $ as $$SectionHeader } from '../../chunks/SectionHeader_mLKzHzNX.mjs';
import { $ as $$ServiceCard } from '../../chunks/ServiceCard_Bli7ALj4.mjs';
import { $ as $$FaqSection } from '../../chunks/FaqSection_CzcP3CIi.mjs';
export { renderers } from '../../renderers.mjs';

const $$MiguelHidalgo = createComponent(($$result, $$props, $$slots) => {
  const title = "Renta de Iluminaci\xF3n en Miguel Hidalgo | Bodas de Lujo | REDEIL";
  const description = "Renta de iluminaci\xF3n en Miguel Hidalgo. Lomas, Polanco, jardines premium. Especializaci\xF3n en bodas de lujo. Cotiza: 55 3068 2988";
  const canonical = "https://rentadeiluminacion.com/zonas/miguel-hidalgo/";
  const schemaMarkup = JSON.stringify([
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Renta de Iluminaci\xF3n en Miguel Hidalgo",
      "serviceType": "Iluminaci\xF3n para Eventos",
      "areaServed": {
        "@type": "City",
        "name": "Miguel Hidalgo",
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
          "name": "Miguel Hidalgo",
          "geo": { "@type": "GeoCoordinates", "latitude": 19.4, "longitude": -99.1864 }
        },
        {
          "@type": "Place",
          "name": "Lomas",
          "geo": { "@type": "GeoCoordinates", "latitude": 19.406, "longitude": -99.2238 }
        },
        {
          "@type": "Place",
          "name": "Polanco",
          "geo": { "@type": "GeoCoordinates", "latitude": 19.4327, "longitude": -99.1966 }
        }
      ],
      "description": "Renta de iluminaci\xF3n profesional en Miguel Hidalgo. Especializaci\xF3n en Lomas, Polanco, jardines premium y bodas de lujo. Transporte e instalaci\xF3n incluidos.",
      "priceRange": "$$$"
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "\xBFCu\xE1l es la cobertura de REDEIL en Miguel Hidalgo?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Cubrimos Miguel Hidalgo, Lomas, Polanco y alrededores. Jardines premium, patios de lujo, espacios exclusivos. Transporte incluido."
          }
        },
        {
          "@type": "Question",
          "name": "\xBFCu\xE1nto cuesta iluminar una boda en Lomas o Polanco?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Una boda premium arranca desde $12,000. Bodas de lujo con m\xFAltiples servicios, $25,000+. Presupuesto formal a medida de tu evento."
          }
        },
        {
          "@type": "Question",
          "name": "\xBFCu\xE1l es el tiempo de instalaci\xF3n?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Nuestro equipo en Miguel Hidalgo tarda 2-3 horas. Llegamos 4-5 horas antes para coordinaci\xF3n y ajustes detallados."
          }
        },
        {
          "@type": "Question",
          "name": "\xBFTienen experiencia en jardines premium de Lomas y Polanco?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "S\xED. 30 a\xF1os iluminando bodas de lujo en los jardines m\xE1s exclusivos. Experiencia en arquitectura premium, iluminaci\xF3n sofisticada."
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
      description: "Focos LED o vintage premium, cableado IP65. Elegancia en bodas de lujo de Lomas y Polanco.",
      link: "/servicios/guirnaldas/"
    },
    {
      title: "Luces Neon Personalizadas",
      image: "/img/luces-neon/luces-neon-nombres-boda.avif",
      alt: "Luces neon personalizadas para boda",
      description: "Ne\xF3n de dise\xF1o personalizado, colores sofisticados. Impacto visual premium para bodas de lujo.",
      link: "/servicios/luces-neon/"
    },
    {
      title: "Cabezas M\xF3viles \u2014 Sky Tracker",
      image: "/img/cabezas-moviles/cabezas-moviles-boda.avif",
      alt: "Cabezas m\xF3viles iluminando pista de baile",
      description: "Proyecciones de precisi\xF3n, colores coordinados, efectos cinematogr\xE1ficos. Producci\xF3n de nivel.",
      link: "/servicios/cabezas-moviles/"
    },
    {
      title: "Bocinas y DJ Lighting",
      image: "/img/bocinas/bocinas-sistema-profesional.avif",
      alt: "Sistema de sonido profesional para evento",
      description: "Sonido premium + luces reactivas de precisi\xF3n. Sistema de producci\xF3n de nivel internacional.",
      link: "/servicios/bocinas-djs/"
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "canonical": canonical, "schemaMarkup": schemaMarkup }, { "breadcrumbs": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "breadcrumbs" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Breadcrumbs", $$Breadcrumbs, { "items": [
    { label: "Inicio", href: "/" },
    { label: "Zonas de Cobertura", href: "/zonas-de-cobertura/" },
    { label: "Miguel Hidalgo" }
  ] })} ` })}`, "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, { "title": "Renta de Iluminaci\xF3n en Miguel Hidalgo", "subtitle": "Bodas de lujo en Lomas y Polanco. Jardines premium, espacios exclusivos. Iluminaci\xF3n sofisticada. Transporte e instalaci\xF3n incluidos.", "whatsappText": "Hola,%20quiero%20cotizar%20iluminacion%20para%20mi%20boda%20en%20Miguel%20Hidalgo", "introParagraph1": "Miguel Hidalgo es la zona de bodas de lujo. Lomas, Polanco, jardines con vista a la ciudad \u2014 espacios que requieren iluminaci\xF3n de nivel internacional. <strong>REDEIL lleva 30 a\xF1os iluminando bodas premium en Miguel Hidalgo</strong>. Sabemos iluminar arquitectura moderna y cl\xE1sica. Conocemos cada jard\xEDn, cada terraza, cada patio exclusivo. Coordinamos con Wedding Planners internacionales, respetamos est\xE1ndares de lujo, ejecutamos con perfeccionismo. 270+ eventos al a\xF1o en zona premium.", "introParagraph2": "Las bodas de Miguel Hidalgo son bodas de clase mundial. Cada detalle importa porque todo est\xE1 bajo escrutinio. Guirnaldas sofisticadas, uplighting coordinado con arquitectura, gobos personalizados con el monograma, proyecciones cinematogr\xE1ficas. DJ lighting sincronizado con m\xFAsica live. El equipo lleva 30 a\xF1os entendiendo estos est\xE1ndares de lujo. Coordinamos con arquitectos, respetamos regulaciones, ejecutamos sin improvisaciones. Transporte incluido. Montaje impecable. Precio premium, justificado." })}  ${maybeRenderHead()}<section class="stats-section-enhanced"> <div class="container"> <div class="stats-grid-enhanced"> <div class="stat-card-enhanced"> <span class="stat-number-enhanced">30+</span> <span class="stat-label-enhanced">Años en Miguel Hidalgo</span> </div> <div class="stat-card-enhanced"> <span class="stat-number-enhanced">270+</span> <span class="stat-label-enhanced">Eventos/Año</span> </div> <div class="stat-card-enhanced"> <span class="stat-number-enhanced">2h</span> <span class="stat-label-enhanced">Instalación Rápida</span> </div> <div class="stat-card-enhanced"> <span class="stat-number-enhanced">100%</span> <span class="stat-label-enhanced">Cobertura Zona</span> </div> </div> </div> </section> ${renderComponent($$result2, "CtaBar", $$CtaBar, { "headline": "\xBFPara qu\xE9 tipo de evento necesitas iluminaci\xF3n?", "items": [
    { label: "Bodas", href: "/eventos/bodas/", icon: "iluminacion" },
    { label: "Corporativos", href: "/eventos/corporativos/", icon: "iluminacion" },
    { label: "XV A\xF1os", href: "/eventos/xv-anos/", icon: "iluminacion" },
    { label: "Cotiza Ahora", href: "/contacto/", icon: "cotizar" }
  ] })}  <section class="services-section"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Por qu\xE9 Nosotros en Miguel Hidalgo", "subtitle": "4 razones por las que REDEIL es el proveedor de iluminaci\xF3n en Miguel Hidalgo.", "paragraph1": "El 85% de nuestros eventos en Miguel Hidalgo son bodas premium. Sabemos iluminar sin competir con la arquitectura \u2014 guirnaldas sofisticadas, uplighting estrat\xE9gico, proyecciones cinematogr\xE1ficas. Cada detalle cuenta porque el est\xE1ndar es alto.", "paragraph2": "Somos el proveedor preferido de Wedding Planners internacionales. Coordinaci\xF3n fluida, ejecuci\xF3n impecable, referencias de nivel. Equipo entrenado en eventos de clase mundial. Eso te deja tranquilo \u2014 tu boda es producci\xF3n, no evento." })} <div class="features-grid-4"> <div class="feature-card"> <h3>Bodas de Lujo</h3> <p>85% de nuestros eventos son bodas premium. Sabemos el estándar de Lomas y Polanco.</p> </div> <div class="feature-card"> <h3>Wedding Planners Internacionales</h3> <p>Proveedor preferido de coordinadores de nivel. Presupuestos formales, referencias, coordinación fluida.</p> </div> <div class="feature-card"> <h3>Jardines Premium</h3> <p>30 años iluminando los espacios más exclusivos. Conocemos cada detalle de arquitectura.</p> </div> <div class="feature-card"> <h3>Producción de Clase Mundial</h3> <p>Guirnaldas sofisticadas, uplighting de precisión, proyecciones cinematográficas. Sistema de producción premium.</p> </div> </div> </div> </section>  <section class="services-section services-alt"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Servicios Principales", "subtitle": "Las 4 soluciones de iluminaci\xF3n m\xE1s solicitadas en Miguel Hidalgo.", "paragraph1": "Cada servicio est\xE1 calibrado para bodas premium. Servicios m\xFAltiples con coordinaci\xF3n perfecta.", "paragraph2": "Cotiza por WhatsApp con brief de tu boda. Presupuesto formal, propuesta en 24h." })} <div class="services-grid"> ${serviciosRelacionados.map((s) => renderTemplate`${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "title": s.title, "image": s.image, "alt": s.alt, "description": s.description, "link": s.link })}`)} </div> </div> </section>  <section class="faq-section"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Preguntas sobre Iluminaci\xF3n en Miguel Hidalgo", "subtitle": "Lo que todos preguntan antes de cotizar.", "paragraph1": "Si tienes otra duda, escr\xEDbenos por WhatsApp. Respuesta inmediata.", "paragraph2": "Cada boda es \xFAnica \u2014 por eso hacemos propuestas personalizadas." })} </div> ${renderComponent($$result2, "FaqSection", $$FaqSection, { "items": [
    {
      question: "\xBFCu\xE1l es la cobertura de REDEIL en Miguel Hidalgo?",
      answer: "Cubrimos Miguel Hidalgo, Lomas, Polanco y alrededores. Transporte incluido en toda la zona de cobertura."
    },
    {
      question: "\xBFCu\xE1nto cuesta iluminar una boda en Lomas o Polanco?",
      answer: "Una boda premium arranca desde $12,000. Bodas de lujo con m\xFAltiples servicios, $25,000+. Presupuesto formal a medida."
    },
    {
      question: "\xBFCu\xE1l es el tiempo de instalaci\xF3n?",
      answer: "Nuestro equipo en Miguel Hidalgo tarda 2-3 horas. Llegamos 4-5 horas antes para coordinaci\xF3n y ajustes detallados."
    },
    {
      question: "\xBFTrabajan con Wedding Planners internacionales?",
      answer: "S\xED. Somos proveedor preferido de coordinadores de nivel internacional. Coordinaci\xF3n fluida, referencias, presupuestos formales."
    },
    {
      question: "\xBFTienen experiencia en espacios arquitect\xF3nicos exclusivos?",
      answer: "S\xED. 30 a\xF1os iluminando los jardines y espacios m\xE1s exclusivos. Experiencia en arquitectura moderna y cl\xE1sica de nivel."
    },
    {
      question: "\xBFPuedo solicitar propuestas personalizadas?",
      answer: "S\xED. Brief detallado \u2192 propuesta formal con renders en 24 horas. Dise\xF1o personalizado para cada boda."
    },
    {
      question: "\xBFQu\xE9 incluye el servicio completo?",
      answer: "Traslado de equipo premium, montaje profesional, coordinaci\xF3n detallada, pruebas exhaustivas, operaci\xF3n durante el evento, desmontaje cuidadoso. Cero cargos ocultos."
    },
    {
      question: "\xBFCon cu\xE1nta anticipaci\xF3n debo reservar?",
      answer: "Idealmente 8-12 semanas. Bodas en Lomas y Polanco requieren coordinaci\xF3n extensa. Planificaci\xF3n temprana = mejor resultado."
    }
  ] })} </section>  <section class="cta-section"> <div class="container"> <div class="cta-content"> <h2>¿Listo para crear una boda extraordinaria en Miguel Hidalgo?</h2> <p>Mándanos brief de tu boda por WhatsApp. Propuesta personalizada, coordinación profesional, producción de clase mundial.</p> <div class="cta-buttons"> <a href="https://wa.me/525530682988?text=Hola,%20quiero%20cotizar%20iluminacion%20para%20mi%20boda%20en%20Miguel%20Hidalgo" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp btn-lg">Cotiza por WhatsApp</a> <a href="tel:+525530682988" class="btn btn-primary btn-lg">Llámanos — 55 3068 2988</a> </div> </div> </div> </section> ` })}`;
}, "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/pages/zonas/miguel-hidalgo.astro", void 0);

const $$file = "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/pages/zonas/miguel-hidalgo.astro";
const $$url = "/zonas/miguel-hidalgo";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$MiguelHidalgo,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
