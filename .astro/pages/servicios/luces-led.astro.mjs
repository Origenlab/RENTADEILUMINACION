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

const $$LucesLed = createComponent(($$result, $$props, $$slots) => {
  const title = "Renta de Luces LED para Eventos | REDEIL CDMX";
  const description = "Renta de luces LED para bodas, fiestas y eventos en CDMX. Iluminaci\xF3n LED profesional en colores personalizados. Instalaci\xF3n y operaci\xF3n incluidas. Cotiza.";
  const canonical = "https://rentadeiluminacion.com/servicios/luces-led/";
  const schemaMarkup = JSON.stringify([
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Renta de Luces LED para Eventos",
      "provider": {
        "@type": "LocalBusiness",
        "name": "REDEIL",
        "url": "https://rentadeiluminacion.com",
        "telephone": "+525530682988",
        "address": { "@type": "PostalAddress", "addressLocality": "Ciudad de M\xE9xico", "addressRegion": "CDMX", "addressCountry": "MX" }
      },
      "description": "Servicio profesional de renta de luces LED para eventos en Ciudad de M\xE9xico. Iluminaci\xF3n LED en colores personalizados para bodas, fiestas y corporativos.",
      "areaServed": [
        { "@type": "City", "name": "Ciudad de M\xE9xico" },
        { "@type": "State", "name": "Estado de M\xE9xico" }
      ],
      "serviceType": "Renta de Luces LED",
      "priceRange": "$$"
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "\xBFCu\xE1ntas luces LED necesito para mi evento?", "acceptedAnswer": { "@type": "Answer", "text": "Depende del espacio. Para uplighting en un sal\xF3n est\xE1ndar de 300 m\xB2, se necesitan entre 16 y 24 par LED (uno cada 2 metros de pared). Para un jard\xEDn o hacienda, el c\xE1lculo se hace por \xE1rea cubierta. Te asesoramos gratis con fotos o medidas del venue." } },
        { "@type": "Question", "name": "\xBFPuedo elegir los colores para mi boda o evento?", "acceptedAnswer": { "@type": "Answer", "text": "S\xED. Los par LED RGBW permiten programar cualquier color con precisi\xF3n. Puedes darnos el c\xF3digo HEX de tu paleta de colores o los colores de tus flores y los replicamos exactamente. Para bodas, lo m\xE1s com\xFAn es tonos dorados, blancos c\xE1lidos o el color de la decoraci\xF3n." } },
        { "@type": "Question", "name": "\xBFLas luces LED se pueden cambiar de color durante el evento?", "acceptedAnswer": { "@type": "Answer", "text": "S\xED. Programamos cambios de color para diferentes momentos del evento: blanco c\xE1lido para la ceremonia, dorado para la recepci\xF3n, colores din\xE1micos para la pista de baile. Nuestro t\xE9cnico opera el sistema DMX y hace los cambios en el momento exacto." } },
        { "@type": "Question", "name": "\xBFLas luces LED funcionan en interiores y exteriores?", "acceptedAnswer": { "@type": "Answer", "text": "Tenemos equipos para ambos ambientes. Las luminarias de interior son par LED RGBW est\xE1ndar para salones, haciendas y carpas. Para exteriores usamos equipos con certificaci\xF3n IP65 o IP67 resistentes a humedad y polvo. Los colores son igual de intensos en ambos casos." } },
        { "@type": "Question", "name": "\xBFEl servicio incluye instalaci\xF3n y retiro?", "acceptedAnswer": { "@type": "Answer", "text": "S\xED. Todos los paquetes de luces LED incluyen transporte del equipo, instalaci\xF3n profesional (cableado, colocaci\xF3n y configuraci\xF3n), operaci\xF3n durante el evento y desmontaje al finalizar. Llegamos al menos 2 horas antes para tener todo listo y probado." } },
        { "@type": "Question", "name": "\xBFCu\xE1nto cuesta rentar luces LED en CDMX?", "acceptedAnswer": { "@type": "Answer", "text": "Los paquetes de luces LED comienzan desde $4,500 + IVA para 12 par LED con uplighting b\xE1sico. El precio var\xEDa seg\xFAn el n\xFAmero de luminarias, el tipo de efecto y la duraci\xF3n del evento. Cotiza por WhatsApp con fotos del venue y te damos una propuesta en minutos." } }
      ]
    }
  ]);
  const serviciosRelacionados = [
    { title: "City Color", image: "/img/city-color/renta-luces-hacienda-boda-fuente-300w.avif", alt: "City Color iluminando hacienda para boda", description: "City Color: ca\xF1ones LED de alta potencia para ba\xF1ar de color fachadas, \xE1rboles y espacios grandes. El complemento perfecto de los par LED.", link: "/servicios/city-color/" },
    { title: "Cabezas M\xF3viles", image: "/img/cabezas-moviles/renta-cabezas-moviles-boda-beams-blancos-elegante-300w.avif", alt: "Cabezas m\xF3viles LED en boda elegante", description: "Mientras las luces LED crean el ambiente, las cabezas m\xF3viles animan la pista. La combinaci\xF3n m\xE1s solicitada para bodas.", link: "/servicios/cabezas-moviles/" },
    { title: "Iluminaci\xF3n Arquitect\xF3nica", image: "/img/iluminacion-arquitectonica/boda-patio-hacienda-iluminacion-fachada-ambar-string-lights-baile-400w.avif", alt: "Uplighting en hacienda para boda", description: "Uplighting especializado para fachadas, columnas y elementos arquitect\xF3nicos. LED posicionado para realzar la belleza del espacio.", link: "/servicios/iluminacion-arquitectonica/" },
    { title: "Cascadas LED", image: "/img/cascadas-led/cascadas-led-arco-ceremonia-luces-moradas-400w.avif", alt: "Cascadas LED en arco de ceremonia", description: "Las cascadas LED son otro tipo de iluminaci\xF3n LED: cortinas de luces que caen en cascada para fondos espectaculares.", link: "/servicios/cascadas-led/" }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "canonical": canonical, "schemaMarkup": schemaMarkup }, { "breadcrumbs": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "breadcrumbs" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Breadcrumbs", $$Breadcrumbs, { "items": [
    { label: "Inicio", href: "/" },
    { label: "Iluminaci\xF3n", href: "/servicios/iluminacion/" },
    { label: "Luces LED" }
  ] })} ` })}`, "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, { "title": "Renta de Luces LED para Eventos en CDMX", "subtitle": "Iluminaci\xF3n LED profesional que transforma espacios con color. Millones de combinaciones. T\xE9cnico de iluminaci\xF3n incluido.", "whatsappText": "Hola,%20quiero%20cotizar%20luces%20LED%20para%20mi%20evento", "introParagraph1": "Las luces LED son el tipo de iluminaci\xF3n m\xE1s vers\xE1til del cat\xE1logo \u2014 y el que m\xE1s diferencia visual hace en un sal\xF3n. En <strong>REDEIL</strong> usamos par LED <strong>Chauvet SlimPAR</strong>, <strong>Elation SixPar</strong> y <strong>ADJ Mega Par Profile</strong> con mezcla RGBW de alta fidelidad. \xBFTu boda tiene flores en tono dusty rose? Programamos ese c\xF3digo HEX exacto en cada luminaria para que el color sea id\xE9ntico. \xBFTu evento corporativo usa azul el\xE9ctrico? Mismo proceso. Precio de paquetes desde $4,500 + IVA.", "introParagraph2": "Dise\xF1amos el esquema de iluminaci\xF3n LED seg\xFAn el espacio: uplighting perimetral para transformar las paredes del sal\xF3n, iluminaci\xF3n de mesas principales, zonas de color diferenciadas (cena c\xE1lida, pista de baile vibrante), y cambios programados en tiempo real para cada momento del evento. El t\xE9cnico opera el sistema DMX durante toda la noche \u2014 blanco c\xE1lido en la ceremonia, dorado en la cena, colores din\xE1micos en la fiesta. Sin que nadie lo perciba, todo cambia exactamente cuando debe. Bodas, XV a\xF1os, galas corporativas y eventos en toda la CDMX y Estado de M\xE9xico." })} ${renderComponent($$result2, "CtaBar", $$CtaBar, { "headline": "\xBFQu\xE9 tipo de iluminaci\xF3n LED necesitas?", "items": [
    { label: "City Color", href: "/servicios/city-color/", icon: "iluminacion" },
    { label: "Cabezas M\xF3viles", href: "/servicios/cabezas-moviles/", icon: "iluminacion" },
    { label: "Toda la Iluminaci\xF3n", href: "/servicios/iluminacion/", icon: "iluminacion" },
    { label: "Cotiza Gratis", href: "/contacto/", icon: "cotizar" }
  ] })} ${maybeRenderHead()}<section class="services-section"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Iluminaci\xF3n LED profesional para cada tipo de evento", "subtitle": "Par LED RGBW, barras LED y wash para ambientes de color en cualquier espacio.", "paragraph1": "Las luces LED son la soluci\xF3n m\xE1s vers\xE1til para iluminar eventos. Ofrecen una gama infinita de colores, consumen poca energ\xEDa, no generan calor y permiten crear desde ambientes rom\xE1nticos hasta pistas de baile vibrantes. En REDEIL utilizamos equipos LED de grado profesional que garantizan brillo uniforme y colores intensos en cualquier espacio.", "paragraph2": "El servicio incluye visita previa al venue cuando se requiere, dise\xF1o del plan de iluminaci\xF3n, traslado de equipo, montaje, operaci\xF3n t\xE9cnica durante el evento y desmontaje. Cubrimos toda la CDMX y zona metropolitana con la garant\xEDa y profesionalismo de m\xE1s de 30 a\xF1os en el sector." })} ${renderComponent($$result2, "Gallery4x4", $$Gallery4X4, { "images": [
    { src: "/img/city-color/city-color-fachada-hacienda-boda.avif", alt: "Fachada de hacienda iluminada con luces LED de color para boda" },
    { src: "/img/city-color/city-color-fachadas-monumentos.avif", alt: "Fachada monumental iluminada con luces LED profesionales" },
    { src: "/img/city-color/city-color-hacienda-evento-especial.avif", alt: "Hacienda iluminada con luces LED para evento especial" },
    { src: "/img/city-light/iluminacion-bodas-hacienda.avif", alt: "Iluminaci\xF3n LED para boda en hacienda con tonos c\xE1lidos" },
    { src: "/img/city-light/iluminacion-eventos-corporativos.avif", alt: "Luces LED para evento corporativo con colores de marca" },
    { src: "/img/city-light/iluminacion-ambientar-entrada-novios-magenta.avif", alt: "Entrada de novios iluminada con luces LED magenta" },
    { src: "/img/galeria/arquitectonica-01.avif", alt: "Uplighting LED en columnas de hacienda para boda" },
    { src: "/img/galeria/arquitectonica-02.avif", alt: "Par LED RGBW iluminando pared de sal\xF3n en azul" },
    { src: "/img/galeria/arquitectonica-03.avif", alt: "Barras LED de color en escenario de evento corporativo" },
    { src: "/img/galeria/arquitectonica-04.avif", alt: "Wash LED iluminando jard\xEDn para boda al aire libre" },
    { src: "/img/galeria/arquitectonica-05.avif", alt: "Luces LED doradas en recepci\xF3n de boda CDMX" },
    { src: "/img/galeria/arquitectonica-06.avif", alt: "Par LED en pista de baile con colores din\xE1micos" },
    { src: "/img/galeria/arquitectonica-07.avif", alt: "Iluminaci\xF3n LED morada en XV a\xF1os sal\xF3n" },
    { src: "/img/galeria/arquitectonica-08.avif", alt: "Luces LED blancas c\xE1lidas para ceremonia \xEDntima" },
    { src: "/img/galeria/cascadas-01.avif", alt: "Luces LED y cascadas LED en sal\xF3n de bodas CDMX" },
    { src: "/img/galeria/cascadas-02.avif", alt: "Combinaci\xF3n de LED de color y cascadas para boda" }
  ] })} </div> </section> <section class="services-section services-alt"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Paquetes de Luces LED para Eventos", "subtitle": "4 configuraciones desde uplighting b\xE1sico hasta producci\xF3n completa. T\xE9cnico incluido.", "paragraph1": "Todos los paquetes incluyen las luminarias LED, t\xE9cnico de iluminaci\xF3n, programaci\xF3n de colores, transporte, instalaci\xF3n y retiro. Sin costos ocultos.", "paragraph2": "\xBFQuieres colores espec\xEDficos de tu paleta de bodas o marca? Programamos el color exacto que necesitas \u2014 danos el c\xF3digo HEX o las referencias." })} ${renderComponent($$result2, "PricingCards", $$PricingCards, { "packages": [
    {
      name: "B\xE1sico \u2014 Uplighting",
      price: "$4,500",
      priceNote: "+ IVA",
      description: "12 par LED RGBW para uplighting perimetral en salones de hasta 200 m\xB2. Un color base fijo durante el evento.",
      features: [
        { text: "12 par LED RGBW profesionales", included: true },
        { text: "1 color programado para el evento", included: true },
        { text: "T\xE9cnico de iluminaci\xF3n incluido", included: true },
        { text: "Transporte + instalaci\xF3n + retiro", included: true },
        { text: "Ideal: salones hasta 200 m\xB2", included: true },
        { text: "Colores cambiantes durante evento", included: false },
        { text: "City Color / wash de alta potencia", included: false },
        { text: "Show de luces programado", included: false }
      ],
      ctaLabel: "Cotizar uplighting b\xE1sico",
      ctaHref: "/contacto/"
    },
    {
      name: "Est\xE1ndar \u2014 Color Din\xE1mico",
      price: "$7,000",
      priceNote: "+ IVA",
      badge: "M\xE1s popular",
      highlight: true,
      description: "20 par LED con cambios de color programados para momentos clave: ceremonia, cena, baile. Cobertura completa.",
      features: [
        { text: "20 par LED RGBW profesionales", included: true },
        { text: "Cambios de color por momentos", included: true },
        { text: "Control DMX para el t\xE9cnico", included: true },
        { text: "T\xE9cnico de iluminaci\xF3n incluido", included: true },
        { text: "Transporte + instalaci\xF3n + retiro", included: true },
        { text: "Ideal: bodas, XV a\xF1os, galas", included: true },
        { text: "Coordinaci\xF3n con DJ incluida", included: true },
        { text: "Programaci\xF3n de color personalizada", included: true }
      ],
      ctaLabel: "Cotizar color din\xE1mico",
      ctaHref: "/contacto/"
    },
    {
      name: "Premium \u2014 Ambiente Completo",
      price: "$10,000",
      priceNote: "+ IVA",
      description: "30 par LED + barras LED + wash para cobertura total del espacio. M\xFAltiples zonas de color con transiciones suaves.",
      features: [
        { text: "30+ luminarias LED profesionales", included: true },
        { text: "Par LED + barras + wash", included: true },
        { text: "Control DMX multizona", included: true },
        { text: "T\xE9cnico de iluminaci\xF3n + asistente", included: true },
        { text: "Dise\xF1o de iluminaci\xF3n personalizado", included: true },
        { text: "Transporte + instalaci\xF3n + retiro", included: true },
        { text: "Ideal: haciendas, salones grandes", included: true },
        { text: "Visita previa al venue incluida", included: true }
      ],
      ctaLabel: "Cotizar ambiente completo",
      ctaHref: "/contacto/"
    },
    {
      name: "Producci\xF3n \u2014 Show Completo",
      price: "Consultar",
      priceNote: "+ IVA",
      description: "Producci\xF3n de iluminaci\xF3n completa con dise\xF1o de lighting, show programado y equipo profesional para eventos de gran formato.",
      features: [
        { text: "50+ luminarias LED profesionales", included: true },
        { text: "Consola DMX dedicada", included: true },
        { text: "Dise\xF1ador de iluminaci\xF3n profesional", included: true },
        { text: "Show de luces completamente programado", included: true },
        { text: "Visita t\xE9cnica previa incluida", included: true },
        { text: "Integraci\xF3n con audio y efectos", included: true },
        { text: "Ideal: bodas de lujo, galas, festivales", included: true },
        { text: "Render 3D previo disponible", included: true }
      ],
      ctaLabel: "Cotizar producci\xF3n de luces",
      ctaHref: "/contacto/"
    }
  ] })} </div> </section> <section class="faq-section"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Preguntas sobre Renta de Luces LED", "subtitle": "Todo lo que necesitas saber antes de contratar iluminaci\xF3n LED para tu evento.", "paragraph1": "Si tu duda no est\xE1 aqu\xED, escr\xEDbenos por WhatsApp y te respondemos en minutos.", "paragraph2": "Las luces LED son el tipo de iluminaci\xF3n m\xE1s solicitado para bodas y eventos corporativos en CDMX." })} </div> ${renderComponent($$result2, "FaqSection", $$FaqSection, { "items": [
    { question: "\xBFCu\xE1ntas luces LED necesito para mi evento?", answer: "Depende del espacio. Para uplighting en un sal\xF3n est\xE1ndar de 300 m\xB2, se necesitan entre 16 y 24 par LED (uno cada 2 metros de pared). Para un jard\xEDn o hacienda, el c\xE1lculo se hace por \xE1rea cubierta. Te asesoramos gratis con fotos o medidas del venue." },
    { question: "\xBFPuedo elegir los colores para mi boda o evento?", answer: "S\xED. Los par LED RGBW permiten programar cualquier color con precisi\xF3n. Puedes darnos el c\xF3digo HEX de tu paleta de colores o los colores de tus flores y los replicamos exactamente. Para bodas, lo m\xE1s com\xFAn es tonos dorados, blancos c\xE1lidos o el color de la decoraci\xF3n." },
    { question: "\xBFLas luces LED se pueden cambiar de color durante el evento?", answer: "S\xED. Programamos cambios de color para diferentes momentos del evento: blanco c\xE1lido para la ceremonia, dorado para la recepci\xF3n, colores din\xE1micos para la pista de baile. Nuestro t\xE9cnico opera el sistema DMX y hace los cambios en el momento exacto." },
    { question: "\xBFLas luces LED funcionan en interiores y exteriores?", answer: "Tenemos equipos para ambos ambientes. Las luminarias de interior son par LED RGBW est\xE1ndar para salones, haciendas y carpas. Para exteriores usamos equipos con certificaci\xF3n IP65 o IP67 resistentes a humedad y polvo. Los colores son igual de intensos en ambos casos." },
    { question: "\xBFEl servicio incluye instalaci\xF3n y retiro?", answer: "S\xED. Todos los paquetes de luces LED incluyen transporte del equipo, instalaci\xF3n profesional (cableado, colocaci\xF3n y configuraci\xF3n), operaci\xF3n durante el evento y desmontaje al finalizar. Llegamos al menos 2 horas antes para tener todo listo y probado." },
    { question: "\xBFCu\xE1nto cuesta rentar luces LED en CDMX?", answer: "Los paquetes de luces LED comienzan desde $4,500 + IVA para 12 par LED con uplighting b\xE1sico. El precio var\xEDa seg\xFAn el n\xFAmero de luminarias, el tipo de efecto y la duraci\xF3n del evento. Cotiza por WhatsApp con fotos del venue y te damos una propuesta en minutos." }
  ] })} </section> <section class="services-section services-alt"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Tipos de Iluminaci\xF3n LED de REDEIL", "subtitle": "Las luces LED b\xE1sicas son el punto de partida. Hay opciones m\xE1s especializadas.", "paragraph1": "Par LED gen\xE9rico es la base. Pero para efectos m\xE1s impactantes, REDEIL ofrece city color para grandes superficies, iluminaci\xF3n arquitect\xF3nica para venues hist\xF3ricos, cascadas LED para fondos de escenario y cabezas m\xF3viles para shows din\xE1micos.", "paragraph2": "Cu\xE9ntanos tu venue y tu visi\xF3n. Te recomendamos la combinaci\xF3n exacta de equipos LED." })} <div class="services-grid"> ${serviciosRelacionados.map((s) => renderTemplate`${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "title": s.title, "image": s.image, "alt": s.alt, "description": s.description, "link": s.link })}`)} </div> </div> </section> <section class="cta-section"> <div class="container"> <div class="cta-content"> <h2>¿Listo para transformar tu espacio con iluminación LED?</h2> <p>Mándanos fotos del venue, el color de tu paleta y el tipo de evento. Te cotizamos la iluminación perfecta en minutos.</p> <div class="cta-buttons"> <a href="/contacto/" class="btn btn-whatsapp btn-lg">Cotiza por WhatsApp</a> <a href="tel:+525530682988" class="btn btn-primary btn-lg">Llámanos — 55 3068 2988</a> </div> </div> </div> </section> ` })}`;
}, "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/pages/servicios/luces-led.astro", void 0);

const $$file = "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/pages/servicios/luces-led.astro";
const $$url = "/servicios/luces-led";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$LucesLed,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
