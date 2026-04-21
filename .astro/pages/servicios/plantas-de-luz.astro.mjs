import { c as createComponent, b as renderComponent, r as renderTemplate, m as maybeRenderHead, F as Fragment } from '../../chunks/astro/server_D8pMnQBn.mjs';
import 'piccolore';
import { $ as $$BaseLayout, a as $$Breadcrumbs } from '../../chunks/Breadcrumbs_BkFbHGbf.mjs';
import { $ as $$Hero } from '../../chunks/Hero_3Is3fruG.mjs';
import { $ as $$CtaBar } from '../../chunks/CtaBar_CdFZlCZU.mjs';
import { $ as $$SectionHeader } from '../../chunks/SectionHeader_mLKzHzNX.mjs';
import { $ as $$ServiceCard } from '../../chunks/ServiceCard_Bli7ALj4.mjs';
import { $ as $$Gallery4X4 } from '../../chunks/Gallery4x4_Bx6Jz45E.mjs';
import { $ as $$PricingCards } from '../../chunks/PricingCards_CLGxK1tp.mjs';
import { $ as $$FaqSection } from '../../chunks/FaqSection_CzcP3CIi.mjs';
export { renderers } from '../../renderers.mjs';

const $$PlantasDeLuz = createComponent(($$result, $$props, $$slots) => {
  const title = "Renta de Plantas de Luz CDMX | REDEIL \u2014 Generadores para Eventos";
  const description = "Renta de plantas de luz y generadores el\xE9ctricos en CDMX. Energ\xEDa garantizada para eventos en jardines, haciendas y exteriores. Instalaci\xF3n incluida. Cotiza.";
  const canonical = "https://rentadeiluminacion.com/servicios/plantas-de-luz/";
  const schemaMarkup = JSON.stringify([
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Renta de Plantas de Luz para Eventos CDMX",
      "provider": {
        "@type": "LocalBusiness",
        "name": "REDEIL",
        "url": "https://rentadeiluminacion.com",
        "telephone": "+525530682988",
        "address": { "@type": "PostalAddress", "addressLocality": "Ciudad de M\xE9xico", "addressRegion": "CDMX", "addressCountry": "MX" }
      },
      "description": "Renta de plantas de luz y generadores el\xE9ctricos en CDMX. Energ\xEDa garantizada para cualquier evento en exteriores sin toma de corriente disponible.",
      "areaServed": [
        { "@type": "City", "name": "Ciudad de M\xE9xico" },
        { "@type": "State", "name": "Estado de M\xE9xico" }
      ],
      "serviceType": "Renta de Plantas de Luz",
      "priceRange": "$$"
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "\xBFCu\xE1ntos kVA necesito para mi evento?", "acceptedAnswer": { "@type": "Answer", "text": "Depende del equipo que vayas a conectar. Un sistema b\xE1sico de iluminaci\xF3n + audio para 100 personas requiere unos 10-15 kVA. Para un evento completo con iluminaci\xF3n profesional, audio, efectos especiales y pantallas para 300 personas, se necesitan entre 30 y 50 kVA. Te hacemos el c\xE1lculo de carga exacto cuando nos dices qu\xE9 equipos vas a usar." } },
        { "@type": "Question", "name": "\xBFEl generador hace mucho ruido?", "acceptedAnswer": { "@type": "Answer", "text": "Nuestros generadores son insonorizados con niveles de ruido de 60-70 dB a 7 metros de distancia, equivalente a una conversaci\xF3n normal. Se colocan a distancia del \xE1rea de eventos para minimizar el ruido. Para eventos donde el silencio es cr\xEDtico (ceremonias, conferencias), usamos generadores de ultra-bajo ruido a 52 dB." } },
        { "@type": "Question", "name": "\xBFEl servicio incluye al operador del generador?", "acceptedAnswer": { "@type": "Answer", "text": "S\xED. Un t\xE9cnico especializado acompa\xF1a el generador durante todo el evento. Se encarga de monitorear los niveles de carga, el combustible y la temperatura del equipo para garantizar que nunca haya un corte de energ\xEDa durante la noche." } },
        { "@type": "Question", "name": "\xBFLas plantas de luz funcionan para eventos al aire libre?", "acceptedAnswer": { "@type": "Answer", "text": "S\xED, exactamente para eso est\xE1n dise\xF1adas. Jardines privados, haciendas sin corriente suficiente, carpas en campos de golf, quintas rurales, eventos en la playa \u2014 cualquier espacio donde la corriente municipal sea insuficiente o inexistente. Tambi\xE9n para respaldo el\xE9ctrico en venues donde la corriente del inmueble no es suficiente para el equipo profesional." } },
        { "@type": "Question", "name": "\xBFEl generador lleva combustible incluido?", "acceptedAnswer": { "@type": "Answer", "text": "S\xED. El combustible para un evento est\xE1ndar de 8 horas est\xE1 incluido en el precio del paquete. Para eventos de m\xE1s larga duraci\xF3n, hacemos el c\xE1lculo del consumo y lo incluimos en la cotizaci\xF3n. El t\xE9cnico monitorea el nivel durante el evento." } },
        { "@type": "Question", "name": "\xBFCu\xE1nto cuesta rentar una planta de luz en CDMX?", "acceptedAnswer": { "@type": "Answer", "text": "Los paquetes comienzan desde $4,500 + IVA para generadores de 10 kVA con t\xE9cnico incluido. El precio depende de la capacidad del generador (kVA), la duraci\xF3n del evento y el consumo de combustible estimado. Te cotizamos con exactitud cuando nos dices el equipo que necesitas alimentar." } }
      ]
    }
  ]);
  const serviciosRelacionados = [
    { title: "Audio para Eventos", image: "/img/bocinas/renta-bocinas-line-array-concierto-400w.avif", alt: "Sistema de bocinas para evento profesional", description: "El audio profesional es uno de los equipos que m\xE1s energ\xEDa consume. Con la planta de luz adecuada, sin preocupaciones de voltaje.", link: "/servicios/bocinas/" },
    { title: "Sky Tracker", image: "/img/sky-tracker/renta-skytracker-cielo-nocturno-potente-300w.avif", alt: "Sky tracker en cielo nocturno", description: "Los sky trackers consumen 7,000W cada uno. Para eventos con varios sky trackers al aire libre, la planta de luz es indispensable.", link: "/servicios/sky-tracker/" },
    { title: "Iluminaci\xF3n para Eventos", image: "/img/city-color/renta-luces-hacienda-boda-fuente-300w.avif", alt: "Iluminaci\xF3n profesional para boda en hacienda", description: "La iluminaci\xF3n arquitect\xF3nica y profesional requiere potencia estable. La planta de luz garantiza voltaje constante durante toda la noche.", link: "/servicios/iluminacion/" },
    { title: "Pantallas LED", image: "/img/galeria/pantalla-01.avif", alt: "Pantalla LED en evento corporativo", description: "Videowalls y pantallas LED requieren corriente estable. Para eventos en exteriores, siempre recomendamos generador propio.", link: "/servicios/pantallas-led/" }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "canonical": canonical, "schemaMarkup": schemaMarkup }, { "breadcrumbs": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "breadcrumbs" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Breadcrumbs", $$Breadcrumbs, { "items": [
    { label: "Inicio", href: "/" },
    { label: "Servicios", href: "/servicios/" },
    { label: "Plantas de Luz" }
  ] })} ` })}`, "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, { "title": "Renta de Plantas de Luz en CDMX", "subtitle": "Generadores el\xE9ctricos silenciosos para eventos en jardines, haciendas y espacios sin corriente suficiente. T\xE9cnico incluido.", "whatsappText": "Hola,%20quiero%20cotizar%20planta%20de%20luz%20para%20mi%20evento", "introParagraph1": "Nada arruina un evento m\xE1s r\xE1pido que un corte de luz. En <strong>REDEIL</strong> rentamos plantas de luz industriales e insonorizadas \u2014 desde 5 kVA para instalaciones peque\xF1as hasta 100 kVA para producciones masivas \u2014 que garantizan energ\xEDa el\xE9ctrica estable durante todo tu evento, sin importar d\xF3nde sea. Jardines privados, haciendas coloniales, carpas en campos de golf, quintas rurales, playas \u2014 si no hay corriente, llevamos la corriente.", "introParagraph2": "Todos nuestros generadores son insonorizados con niveles de ruido de 60-70 dB a 7 metros, equivalente a una conversaci\xF3n. Se colocan estrat\xE9gicamente lejos del \xE1rea de eventos para minimizar la molestia auditiva. El servicio incluye transporte, instalaci\xF3n, combustible para el evento, t\xE9cnico de planta durante toda la noche y retiro. M\xE1s de 30 a\xF1os y 3,000 eventos en CDMX nos respaldan." })} ${renderComponent($$result2, "CtaBar", $$CtaBar, { "headline": "\xBFQu\xE9 equipo necesitas alimentar?", "items": [
    { label: "Audio Profesional", href: "/servicios/bocinas/", icon: "sonido" },
    { label: "Iluminaci\xF3n", href: "/servicios/iluminacion/", icon: "iluminacion" },
    { label: "Sky Tracker", href: "/servicios/sky-tracker/", icon: "iluminacion" },
    { label: "Cotiza Gratis", href: "/contacto/", icon: "cotizar" }
  ] })} ${maybeRenderHead()}<section class="services-section"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Generadores industriales para cualquier escala de evento", "subtitle": "Desde 5 kVA hasta 100 kVA. Insonorizados. Combustible incluido.", "paragraph1": "Un generador mal dimensionado puede causar fluctuaciones de voltaje que da\xF1en el equipo de audio o iluminaci\xF3n. Por eso hacemos el c\xE1lculo de carga exacto: sumamos el consumo de cada equipo que vas a conectar y dimensionamos el generador al 70-80% de su capacidad m\xE1xima para operar con margen de seguridad.", "paragraph2": "Para eventos donde el venue tiene corriente pero es insuficiente para el equipo profesional (muchas haciendas y casas antiguas tienen instalaciones de 60 o 100 amperes que no soportan un sistema de audio + iluminaci\xF3n profesional), el generador funciona como respaldo o complemento de la red existente." })} ${renderComponent($$result2, "Gallery4x4", $$Gallery4X4, { "images": [
    { src: "/img/general/placeholder-cobertura.avif", alt: "Generador el\xE9ctrico industrial para evento al aire libre" },
    { src: "/img/general/placeholder-equipo.avif", alt: "Planta de luz insonorizada para boda en jard\xEDn" },
    { src: "/img/general/placeholder-eventos.avif", alt: "Generador 50 kVA para evento masivo en CDMX" },
    { src: "/img/general/placeholder-instalacion.avif", alt: "Instalaci\xF3n de planta de luz en hacienda para boda" },
    { src: "/img/galeria/arquitectonica-01.avif", alt: "Iluminaci\xF3n arquitect\xF3nica alimentada por generador" },
    { src: "/img/galeria/arquitectonica-02.avif", alt: "Evento exterior en jard\xEDn con generador REDEIL" },
    { src: "/img/galeria/arquitectonica-03.avif", alt: "Sistema de audio y luces en hacienda con planta de luz" },
    { src: "/img/galeria/arquitectonica-04.avif", alt: "Bodas en hacienda colonial con generador el\xE9ctrico" },
    { src: "/img/galeria/arquitectonica-05.avif", alt: "Planta de luz para evento corporativo en exterior" },
    { src: "/img/galeria/arquitectonica-06.avif", alt: "Generador insonorizado para cena de gala" },
    { src: "/img/galeria/arquitectonica-07.avif", alt: "Suministro el\xE9ctrico garantizado boda jard\xEDn CDMX" },
    { src: "/img/galeria/arquitectonica-08.avif", alt: "T\xE9cnico operando planta de luz en evento" },
    { src: "/img/general/renta-iluminacion-profesional-eventos-cdmx.avif", alt: "Evento nocturno en exterior con planta de luz REDEIL" },
    { src: "/img/general/sky-tracker-eventos.avif", alt: "Sky trackers y planta de luz en evento masivo" },
    { src: "/img/general/iluminacion-bodas-cdmx.avif", alt: "Iluminaci\xF3n de boda en jard\xEDn con generador" },
    { src: "/img/general/servicios-iluminacion-eventos-collage.avif", alt: "M\xFAltiples eventos al exterior con generadores REDEIL" }
  ] })} </div> </section> <section class="services-section services-alt"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Paquetes de Plantas de Luz para Eventos", "subtitle": "4 capacidades desde 10 kVA hasta 100 kVA. T\xE9cnico y combustible incluidos.", "paragraph1": "Todos los paquetes incluyen el generador, t\xE9cnico de planta durante el evento, combustible estimado para la duraci\xF3n est\xE1ndar, transporte, instalaci\xF3n y retiro.", "paragraph2": "\xBFNo sabes cu\xE1ntos kVA necesitas? Dinos qu\xE9 equipos vas a conectar (bocinas, luces, pantallas, aire acondicionado) y te hacemos el c\xE1lculo exacto." })} ${renderComponent($$result2, "PricingCards", $$PricingCards, { "packages": [
    {
      name: "10 kVA \u2014 Eventos Peque\xF1os",
      price: "$4,500",
      priceNote: "+ IVA",
      description: "Para iluminaci\xF3n b\xE1sica + audio de hasta 100 personas. Ideal para bodas \xEDntimas en jardines o eventos peque\xF1os en exterior.",
      features: [
        { text: "Generador 10 kVA insonorizado", included: true },
        { text: "Combustible incluido (8 horas)", included: true },
        { text: "T\xE9cnico de planta durante el evento", included: true },
        { text: "Transporte + instalaci\xF3n + retiro", included: true },
        { text: "Ideal para audio + iluminaci\xF3n b\xE1sica", included: true },
        { text: "Monitoreo de carga incluido", included: true },
        { text: "Para 300+ personas", included: false },
        { text: "Sky trackers (requiere m\xE1s kVA)", included: false }
      ],
      ctaLabel: "Cotizar 10 kVA",
      ctaHref: "/contacto/"
    },
    {
      name: "25 kVA \u2014 Eventos Medianos",
      price: "$7,500",
      priceNote: "+ IVA",
      badge: "M\xE1s popular",
      highlight: true,
      description: "Para audio profesional + iluminaci\xF3n completa de 150\u2013300 personas. El paquete m\xE1s solicitado para bodas en hacienda.",
      features: [
        { text: "Generador 25 kVA insonorizado", included: true },
        { text: "Combustible incluido (8 horas)", included: true },
        { text: "T\xE9cnico de planta durante el evento", included: true },
        { text: "Transporte + instalaci\xF3n + retiro", included: true },
        { text: "Audio + iluminaci\xF3n + efectos", included: true },
        { text: "Sistema anti-corte activo", included: true },
        { text: "Ideal: bodas en hacienda, jardines", included: true },
        { text: "Monitoreo de carga y temperatura", included: true }
      ],
      ctaLabel: "Cotizar 25 kVA",
      ctaHref: "/contacto/"
    },
    {
      name: "50 kVA \u2014 Eventos Grandes",
      price: "$12,000",
      priceNote: "+ IVA",
      description: "Para producciones grandes con audio line array, iluminaci\xF3n profesional completa, pantallas y efectos especiales.",
      features: [
        { text: "Generador 50 kVA insonorizado", included: true },
        { text: "Combustible incluido (10 horas)", included: true },
        { text: "T\xE9cnico de planta + asistente", included: true },
        { text: "Transporte + instalaci\xF3n + retiro", included: true },
        { text: "Audio + luces + pantallas + efectos", included: true },
        { text: "Sistema de protecci\xF3n el\xE9ctrica", included: true },
        { text: "Ideal: bodas de lujo, corporativos", included: true },
        { text: "Sky trackers compatibles", included: true }
      ],
      ctaLabel: "Cotizar 50 kVA",
      ctaHref: "/contacto/"
    },
    {
      name: "100 kVA \u2014 Producciones Masivas",
      price: "Consultar",
      priceNote: "+ IVA",
      description: "Para conciertos, festivales y eventos masivos de 500+ personas con producci\xF3n completa.",
      features: [
        { text: "Generador 100 kVA insonorizado", included: true },
        { text: "Combustible estimado incluido", included: true },
        { text: "Equipo t\xE9cnico dedicado", included: true },
        { text: "Visita previa de c\xE1lculo de carga", included: true },
        { text: "Sistema de respaldo incluido", included: true },
        { text: "Distribuci\xF3n el\xE9ctrica profesional", included: true },
        { text: "Ideal: festivales, conciertos", included: true },
        { text: "Certificaci\xF3n el\xE9ctrica disponible", included: true }
      ],
      ctaLabel: "Cotizar producci\xF3n masiva",
      ctaHref: "/contacto/"
    }
  ] })} </div> </section> <section class="faq-section"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Preguntas sobre Renta de Plantas de Luz", "subtitle": "Todo lo que necesitas saber antes de contratar un generador para tu evento.", "paragraph1": "Si tu duda no est\xE1 aqu\xED, escr\xEDbenos por WhatsApp y te respondemos en minutos.", "paragraph2": "La planta de luz es el seguro de tu evento. M\xE1s de 1,000 eventos alimentados con generadores REDEIL sin un solo corte." })} </div> ${renderComponent($$result2, "FaqSection", $$FaqSection, { "items": [
    { question: "\xBFCu\xE1ntos kVA necesito para mi evento?", answer: "Depende del equipo que vayas a conectar. Un sistema b\xE1sico de iluminaci\xF3n + audio para 100 personas requiere unos 10-15 kVA. Para un evento completo con iluminaci\xF3n profesional, audio, efectos especiales y pantallas para 300 personas, se necesitan entre 30 y 50 kVA. Te hacemos el c\xE1lculo de carga exacto cuando nos dices qu\xE9 equipos vas a usar." },
    { question: "\xBFEl generador hace mucho ruido?", answer: "Nuestros generadores son insonorizados con niveles de ruido de 60-70 dB a 7 metros de distancia, equivalente a una conversaci\xF3n normal. Se colocan a distancia del \xE1rea de eventos para minimizar el ruido. Para eventos donde el silencio es cr\xEDtico (ceremonias, conferencias), usamos generadores de ultra-bajo ruido a 52 dB." },
    { question: "\xBFEl servicio incluye al operador del generador?", answer: "S\xED. Un t\xE9cnico especializado acompa\xF1a el generador durante todo el evento. Se encarga de monitorear los niveles de carga, el combustible y la temperatura del equipo para garantizar que nunca haya un corte de energ\xEDa durante la noche." },
    { question: "\xBFLas plantas de luz funcionan para eventos al aire libre?", answer: "S\xED, exactamente para eso est\xE1n dise\xF1adas. Jardines privados, haciendas sin corriente suficiente, carpas en campos de golf, quintas rurales, eventos en la playa \u2014 cualquier espacio donde la corriente municipal sea insuficiente o inexistente. Tambi\xE9n para respaldo el\xE9ctrico en venues donde la corriente del inmueble no es suficiente para el equipo profesional." },
    { question: "\xBFEl generador lleva combustible incluido?", answer: "S\xED. El combustible para un evento est\xE1ndar de 8 horas est\xE1 incluido en el precio del paquete. Para eventos de m\xE1s larga duraci\xF3n, hacemos el c\xE1lculo del consumo y lo incluimos en la cotizaci\xF3n. El t\xE9cnico monitorea el nivel durante el evento." },
    { question: "\xBFCu\xE1nto cuesta rentar una planta de luz en CDMX?", answer: "Los paquetes comienzan desde $4,500 + IVA para generadores de 10 kVA con t\xE9cnico incluido. El precio depende de la capacidad del generador (kVA), la duraci\xF3n del evento y el consumo de combustible estimado. Te cotizamos con exactitud cuando nos dices el equipo que necesitas alimentar." }
  ] })} </section> <section class="services-section services-alt"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "La planta de luz es el respaldo de todo tu equipo", "subtitle": "Sin corriente, ning\xFAn servicio funciona. La planta lo garantiza todo.", "paragraph1": "Audio, iluminaci\xF3n, efectos, pantallas \u2014 todo requiere corriente el\xE9ctrica estable. En venues sin toma de corriente suficiente, la planta de luz no es un opcional, es la base del evento.", "paragraph2": "Cotiza la planta de luz junto con el equipo que vas a conectar y te armamos un paquete completo." })} <div class="services-grid"> ${serviciosRelacionados.map((s) => renderTemplate`${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "title": s.title, "image": s.image, "alt": s.alt, "description": s.description, "link": s.link })}`)} </div> </div> </section> <section class="cta-section"> <div class="container"> <div class="cta-content"> <h2>¿Evento en exterior o hacienda sin corriente suficiente?</h2> <p>Cuéntanos el venue, el equipo que vas a usar y la duración del evento. Te calculamos los kVA exactos y te cotizamos en minutos.</p> <div class="cta-buttons"> <a href="/contacto/" class="btn btn-whatsapp btn-lg">Cotiza por WhatsApp</a> <a href="tel:+525530682988" class="btn btn-primary btn-lg">Llámanos — 55 3068 2988</a> </div> </div> </div> </section> ` })}`;
}, "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/pages/servicios/plantas-de-luz.astro", void 0);

const $$file = "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/pages/servicios/plantas-de-luz.astro";
const $$url = "/servicios/plantas-de-luz";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$PlantasDeLuz,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
