import { c as createComponent, b as renderComponent, r as renderTemplate, m as maybeRenderHead, F as Fragment } from '../../chunks/astro/server_D8pMnQBn.mjs';
import 'piccolore';
import { $ as $$BaseLayout, a as $$Breadcrumbs } from '../../chunks/Breadcrumbs_BkFbHGbf.mjs';
import { $ as $$Hero } from '../../chunks/Hero_3Is3fruG.mjs';
import { $ as $$CtaBar } from '../../chunks/CtaBar_CdFZlCZU.mjs';
import { $ as $$SectionHeader } from '../../chunks/SectionHeader_mLKzHzNX.mjs';
import { $ as $$ServiceCard } from '../../chunks/ServiceCard_Bli7ALj4.mjs';
import { $ as $$FaqSection } from '../../chunks/FaqSection_CzcP3CIi.mjs';
export { renderers } from '../../renderers.mjs';

const $$Tlalnepantla = createComponent(($$result, $$props, $$slots) => {
  const title = "Renta de Iluminaci\xF3n en Tlalnepantla | Bodas Populares | REDEIL";
  const description = "Renta de iluminaci\xF3n para bodas y XV a\xF1os en Tlalnepantla, Estado de M\xE9xico. Acceso f\xE1cil, zona industrial y residencial. 350+ eventos/a\xF1o. Cotiza: 55 3068 2988";
  const canonical = "https://rentadeiluminacion.com/zonas/tlalnepantla/";
  const schemaMarkup = JSON.stringify([
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Renta de Iluminaci\xF3n en Tlalnepantla",
      "serviceType": "Iluminaci\xF3n para Eventos",
      "areaServed": {
        "@type": "City",
        "name": "Tlalnepantla",
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
          "name": "Tlalnepantla",
          "geo": { "@type": "GeoCoordinates", "latitude": 19.5407, "longitude": -99.1963 }
        },
        {
          "@type": "Place",
          "name": "Atizap\xE1n",
          "geo": { "@type": "GeoCoordinates", "latitude": 19.5505, "longitude": -99.2237 }
        },
        {
          "@type": "Place",
          "name": "Tultitl\xE1n",
          "geo": { "@type": "GeoCoordinates", "latitude": 19.6278, "longitude": -99.1792 }
        }
      ],
      "description": "Renta de iluminaci\xF3n profesional para bodas y XV a\xF1os en Tlalnepantla. Especializaci\xF3n en eventos populares, zona industrial y residencial del norte de Edomex. Acceso f\xE1cil, log\xEDstica r\xE1pida. Transporte e instalaci\xF3n incluidos.",
      "priceRange": "$$"
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "\xBFCu\xE1l es la cobertura de REDEIL en Tlalnepantla?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Cubrimos Tlalnepantla, Atizap\xE1n, Tultitl\xE1n y toda la zona norte del Estado de M\xE9xico. Salones populares, patios, espacios comunitarios."
          }
        },
        {
          "@type": "Question",
          "name": "\xBFQu\xE9 tipo de eventos son m\xE1s comunes en Tlalnepantla?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "XV a\xF1os populares, bodas masivas, eventos familiares. Tlalnepantla es zona de eventos accesibles y bien comunicada."
          }
        },
        {
          "@type": "Question",
          "name": "\xBFCu\xE1nto cuesta iluminar un evento en Tlalnepantla?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "XV a\xF1os con iluminaci\xF3n b\xE1sica arrancan desde $6,500. Bodas con servicios completos $12,000+. Acceso f\xE1cil = costos menores."
          }
        },
        {
          "@type": "Question",
          "name": "\xBFCu\xE1l es el tiempo de instalaci\xF3n en Tlalnepantla?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Nuestro equipo en Tlalnepantla tarda 2-3 horas en montar un evento est\xE1ndar. Acceso f\xE1cil = montaje r\xE1pido."
          }
        },
        {
          "@type": "Question",
          "name": "\xBFTienen salones conocidos en Tlalnepantla?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "S\xED. Conocemos los salones populares de Tlalnepantla. Espacios modulares, patios amplios, instalaciones que funcionan."
          }
        },
        {
          "@type": "Question",
          "name": "\xBFEs f\xE1cil el acceso para transporte?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "S\xED. Tlalnepantla est\xE1 bien comunicada, acceso f\xE1cil desde CDMX. Transporte r\xE1pido, log\xEDstica \xE1gil = costos menores."
          }
        },
        {
          "@type": "Question",
          "name": "\xBFCon cu\xE1nta anticipaci\xF3n debo reservar?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Idealmente 2-3 semanas. Tlalnepantla tiene buena disponibilidad porque est\xE1 bien comunicada. Acceso f\xE1cil = m\xE1s opciones."
          }
        }
      ]
    }
  ]);
  const serviciosRelacionados = [
    {
      title: "Guirnaldas Econ\xF3micas",
      image: "/img/guirnaldas/guirnaldas-edison-hacienda-boda.avif",
      alt: "Guirnaldas Edison en sal\xF3n de Tlalnepantla",
      description: "Focos LED o vintage IP65. La base del ambiente. Econ\xF3micas, duraderas, perfectas para eventos populares.",
      link: "/servicios/guirnaldas/"
    },
    {
      title: "Luces Neon Populares",
      image: "/img/luces-neon/luces-neon-nombres-boda.avif",
      alt: "Luces neon en XV a\xF1os",
      description: "Nombres, edades, frases. Luces ne\xF3n de colores. El protagonista visual de la fiesta. Muy solicitado.",
      link: "/servicios/luces-neon/"
    },
    {
      title: "Cabezas M\xF3viles B\xE1sicas",
      image: "/img/cabezas-moviles/cabezas-moviles-boda.avif",
      alt: "Cabezas m\xF3viles en sal\xF3n",
      description: "Proyecciones din\xE1micas, colores que cambian, efectos que transforman la pista de baile.",
      link: "/servicios/cabezas-moviles/"
    },
    {
      title: "Bocinas y DJ Lighting",
      image: "/img/bocinas/bocinas-sistema-profesional.avif",
      alt: "Sistema de sonido profesional",
      description: "Sonido profesional + luces sincronizadas. Paquete completo a precio accesible.",
      link: "/servicios/bocinas-djs/"
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "canonical": canonical, "schemaMarkup": schemaMarkup }, { "breadcrumbs": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "breadcrumbs" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Breadcrumbs", $$Breadcrumbs, { "items": [
    { label: "Inicio", href: "/" },
    { label: "Zonas de Cobertura", href: "/zonas-de-cobertura/" },
    { label: "Tlalnepantla" }
  ] })} ` })}`, "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, { "title": "Renta de Iluminaci\xF3n en Tlalnepantla", "subtitle": "Especializaci\xF3n en bodas y XV a\xF1os populares. Acceso f\xE1cil, zona bien comunicada. M\xE1s de 350 eventos iluminados en la zona.", "whatsappText": "Hola,%20quiero%20cotizar%20iluminacion%20para%20mi%20evento%20en%20Tlalnepantla", "introParagraph1": "Tlalnepantla es la zona de eventos accesibles y bien comunicada del norte del Estado de M\xE9xico. Salones populares, patios amplios, espacios que funcionan. <strong>REDEIL lleva 30 a\xF1os iluminando eventos en Tlalnepantla y Edomex norte</strong>. XV a\xF1os masivos, bodas populares, eventos familiares grandes. Acceso f\xE1cil = log\xEDstica r\xE1pida = costos menores. 350+ eventos al a\xF1o en la zona norte.", "introParagraph2": "Somos los que montamos iluminaci\xF3n r\xE1pida pero profesional en Tlalnepantla. Los que conocemos cada sal\xF3n popular de la zona. Los que adaptamos paquetes a presupuestos accesibles sin perder calidad. Equipo entrenado en montajes \xE1giles. Transporte desde CDMX es r\xE1pido porque Tlalnepantla est\xE1 bien comunicada. El equipo llega 4 horas antes. Monta en 2-3 horas. Todo probado y funcionando. Precio transparente: no cobramos cargos ocultos." })}  ${maybeRenderHead()}<section class="stats-section-enhanced"> <div class="container"> <div class="stats-grid-enhanced"> <div class="stat-card-enhanced"> <span class="stat-number-enhanced">30+</span> <span class="stat-label-enhanced">Años en Edomex</span> </div> <div class="stat-card-enhanced"> <span class="stat-number-enhanced">350+</span> <span class="stat-label-enhanced">Eventos/Año</span> </div> <div class="stat-card-enhanced"> <span class="stat-number-enhanced">2h</span> <span class="stat-label-enhanced">Acceso Rápido</span> </div> <div class="stat-card-enhanced"> <span class="stat-number-enhanced">100%</span> <span class="stat-label-enhanced">Cobertura Zona</span> </div> </div> </div> </section> ${renderComponent($$result2, "CtaBar", $$CtaBar, { "headline": "\xBFPara qu\xE9 tipo de evento necesitas iluminaci\xF3n?", "items": [
    { label: "XV A\xF1os", href: "/eventos/xv-anos/", icon: "iluminacion" },
    { label: "Bodas", href: "/eventos/bodas/", icon: "iluminacion" },
    { label: "Eventos Familiares", href: "/eventos/corporativos/", icon: "iluminacion" },
    { label: "Cotiza Ahora", href: "/contacto/", icon: "cotizar" }
  ] })}  <section class="services-section"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Por qu\xE9 Nosotros en Tlalnepantla", "subtitle": "4 razones por las que REDEIL es el proveedor de iluminaci\xF3n en Tlalnepantla.", "paragraph1": "Tlalnepantla es zona de eventos populares y bien comunicada. Sabemos adaptar iluminaci\xF3n a presupuestos accesibles sin perder calidad. Montaje \xE1gil, servicios coordinados, paquetes que funcionan.", "paragraph2": "Acceso f\xE1cil desde CDMX. Log\xEDstica \xE1gil. Conocemos cada sal\xF3n popular de Tlalnepantla. Equipo entrenado en montajes r\xE1pidos. Eso se traduce en costos menores para ti." })} <div class="features-grid-4"> <div class="feature-card"> <h3>Especialización en Eventos Populares</h3> <p>XV años masivos, bodas populares. Sabemos transformar salones a presupuestos accesibles.</p> </div> <div class="feature-card"> <h3>Acceso Fácil y Rápido</h3> <p>Tlalnepantla está bien comunicada. Logística ágil = transporte rápido = costos menores.</p> </div> <div class="feature-card"> <h3>Montaje Ágil Profesional</h3> <p>2-3 horas en salones estándar. Equipo entrenado. Sin complicaciones, sin estrés.</p> </div> <div class="feature-card"> <h3>Paquetes Accesibles</h3> <p>Opciones desde $6,500. Combina servicios y baja el costo. Sin calidad comprometida.</p> </div> </div> </div> </section>  <section class="services-section services-alt"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Servicios Principales", "subtitle": "Las 4 soluciones de iluminaci\xF3n m\xE1s solicitadas en Tlalnepantla.", "paragraph1": "Cada servicio adaptado a presupuestos accesibles. Combinaciones de servicios generan paquetes m\xE1s econ\xF3micos.", "paragraph2": "Cotiza por WhatsApp con fotos de tu venue. Respuesta en minutos." })} <div class="services-grid"> ${serviciosRelacionados.map((s) => renderTemplate`${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "title": s.title, "image": s.image, "alt": s.alt, "description": s.description, "link": s.link })}`)} </div> </div> </section>  <section class="faq-section"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Preguntas sobre Iluminaci\xF3n en Tlalnepantla", "subtitle": "Lo que todos preguntan antes de cotizar.", "paragraph1": "Si tienes otra duda, escr\xEDbenos por WhatsApp. Respuesta en minutos.", "paragraph2": "Cada evento es diferente \u2014 por eso hacemos propuestas adaptadas." })} </div> ${renderComponent($$result2, "FaqSection", $$FaqSection, { "items": [
    {
      question: "\xBFCu\xE1l es la cobertura de REDEIL en Tlalnepantla?",
      answer: "Cubrimos Tlalnepantla, Atizap\xE1n, Tultitl\xE1n y toda la zona norte del Estado de M\xE9xico. Salones populares, patios, espacios comunitarios."
    },
    {
      question: "\xBFQu\xE9 tipo de eventos son m\xE1s comunes en Tlalnepantla?",
      answer: "XV a\xF1os populares, bodas masivas, eventos familiares. Tlalnepantla es zona de eventos accesibles y bien comunicada."
    },
    {
      question: "\xBFCu\xE1nto cuesta iluminar un evento en Tlalnepantla?",
      answer: "XV a\xF1os con iluminaci\xF3n b\xE1sica arrancan desde $6,500. Bodas con servicios completos $12,000+. Acceso f\xE1cil = costos menores."
    },
    {
      question: "\xBFCu\xE1l es el tiempo de instalaci\xF3n en Tlalnepantla?",
      answer: "Nuestro equipo en Tlalnepantla tarda 2-3 horas en montar un evento est\xE1ndar. Acceso f\xE1cil = montaje r\xE1pido."
    },
    {
      question: "\xBFTienen salones conocidos en Tlalnepantla?",
      answer: "S\xED. Conocemos los salones populares de Tlalnepantla. Espacios modulares, patios amplios, instalaciones que funcionan."
    },
    {
      question: "\xBFEs f\xE1cil el acceso para transporte?",
      answer: "S\xED. Tlalnepantla est\xE1 bien comunicada, acceso f\xE1cil desde CDMX. Transporte r\xE1pido, log\xEDstica \xE1gil = costos menores."
    },
    {
      question: "\xBFQu\xE9 incluye el servicio de transporte e instalaci\xF3n?",
      answer: "Todo. Traslado desde CDMX (acceso r\xE1pido), montaje profesional, pruebas, operaci\xF3n, desmontaje. Cero cargos ocultos."
    },
    {
      question: "\xBFCon cu\xE1nta anticipaci\xF3n debo reservar?",
      answer: "Idealmente 2-3 semanas. Tlalnepantla tiene buena disponibilidad porque est\xE1 bien comunicada. Acceso f\xE1cil = m\xE1s opciones."
    }
  ] })} </section>  <section class="cta-section"> <div class="container"> <div class="cta-content"> <h2>¿Listo para iluminar tu evento en Tlalnepantla?</h2> <p>Mándanos fotos de tu venue por WhatsApp y te cotizamos en minutos. Transporte, instalación y montaje incluidos.</p> <div class="cta-buttons"> <a href="https://wa.me/525530682988?text=Hola,%20quiero%20cotizar%20iluminacion%20para%20mi%20evento%20en%20Tlalnepantla" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp btn-lg">Cotiza por WhatsApp</a> <a href="tel:+525530682988" class="btn btn-primary btn-lg">Llámanos — 55 3068 2988</a> </div> </div> </div> </section> ` })}`;
}, "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/pages/zonas/tlalnepantla.astro", void 0);

const $$file = "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/pages/zonas/tlalnepantla.astro";
const $$url = "/zonas/tlalnepantla";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Tlalnepantla,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
