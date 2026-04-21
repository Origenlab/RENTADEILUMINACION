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

const $$Bocinas = createComponent(($$result, $$props, $$slots) => {
  const title = "Renta de Bocinas y Audio para Eventos CDMX | REDEIL";
  const description = "Bocinas JBL, QSC y sistemas line array para bodas, fiestas y corporativos en CDMX. T\xE9cnico de audio incluido. Desde $4,000 + IVA.";
  const canonical = "https://rentadeiluminacion.com/servicios/bocinas/";
  const schemaMarkup = JSON.stringify([
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Renta de Bocinas y Audio Profesional para Eventos",
      "provider": {
        "@type": "LocalBusiness",
        "name": "REDEIL",
        "url": "https://rentadeiluminacion.com",
        "telephone": "+525530682988",
        "address": { "@type": "PostalAddress", "addressLocality": "Ciudad de M\xE9xico", "addressRegion": "CDMX", "addressCountry": "MX" }
      },
      "description": "Servicio profesional de renta de bocinas JBL, QSC y sistemas line array para bodas, fiestas y eventos corporativos en CDMX y Estado de M\xE9xico.",
      "areaServed": [
        { "@type": "City", "name": "Ciudad de M\xE9xico" },
        { "@type": "State", "name": "Estado de M\xE9xico" }
      ],
      "serviceType": "Renta de Bocinas y Audio Profesional",
      "priceRange": "$$"
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "\xBFCu\xE1ntas bocinas necesito para mi evento?", "acceptedAnswer": { "@type": "Answer", "text": "Para eventos de hasta 80 personas en sal\xF3n cerrado, 2 bocinas JBL PRX + 1 subwoofer son suficientes. Para 200 personas, 4 bocinas + 2 subs. Para 500+, usamos sistemas line array. Te asesoramos seg\xFAn las dimensiones de tu venue." } },
        { "@type": "Question", "name": "\xBFEl t\xE9cnico de audio est\xE1 incluido?", "acceptedAnswer": { "@type": "Answer", "text": "S\xED, siempre. Todos nuestros paquetes incluyen un t\xE9cnico de audio que llega horas antes para montar, ecualizar el equipo al espacio y operar el sonido durante todo el evento." } },
        { "@type": "Question", "name": "\xBFPuedo conectar mi playlist de Spotify?", "acceptedAnswer": { "@type": "Answer", "text": "S\xED. Conectamos tu celular o laptop v\xEDa Bluetooth, AUX o USB a la mezcladora. Tambi\xE9n aceptamos playlists compartidas antes del evento para tenerlas listas." } },
        { "@type": "Question", "name": "\xBFIncluyen micr\xF3fonos inal\xE1mbricos?", "acceptedAnswer": { "@type": "Answer", "text": "S\xED. Los paquetes incluyen micr\xF3fonos Shure inal\xE1mbricos \u2014 de mano para brindis, de solapa para conferencias. Pedimos 2 en el paquete b\xE1sico y hasta 4 en los premium." } },
        { "@type": "Question", "name": "\xBFSirve para eventos al aire libre?", "acceptedAnswer": { "@type": "Answer", "text": "S\xED. Nuestros equipos funcionan en jardines, terrazas, haciendas y cualquier espacio exterior. Si el venue no tiene corriente suficiente, llevamos planta de luz." } },
        { "@type": "Question", "name": "\xBFSe puede combinar audio con DJ?", "acceptedAnswer": { "@type": "Answer", "text": "Claro. Si contratas el equipo de audio y despu\xE9s decides agregar DJ, combinamos con precio especial. O puedes contratar el paquete DJ que ya incluye todo el equipo." } }
      ]
    }
  ]);
  const serviciosRelacionados = [
    { title: "DJ para Fiestas y Bodas", image: "/img/bocinas-djs/dj-para-eventos-cdmx-cabina-profesional-300w.avif", alt: "DJ profesional en cabina para eventos CDMX", description: "DJ con consola Pioneer y repertorio adaptado. El complemento perfecto para el equipo de audio.", link: "/servicios/bocinas-djs/" },
    { title: "Bocinas para Bodas", image: "/img/bocinas-bodas/renta-bocinas-boda-primer-baile-novios-truss-300w.avif", alt: "Audio profesional para primer baile de boda", description: "Equipo dimensionado para ceremonia + recepci\xF3n + fiesta. Los tres momentos de tu boda cubiertos.", link: "/servicios/bocinas-bodas/" },
    { title: "Audio para Conferencias", image: "/img/bocinas-conferencias/renta-de-bocinas-para-conferencias-salon-ejecutivo-300w.avif", alt: "Audio cristalino para conferencia ejecutiva", description: "Sonido cristalino para presentaciones. Micr\xF3fonos Shure, bocinas de l\xEDnea y mezcladoras Yamaha.", link: "/servicios/bocinas-conferencias/" },
    { title: "Cabezas M\xF3viles", image: "/img/cabezas-moviles/renta-cabezas-moviles-boda-beams-blancos-elegante-300w.avif", alt: "Show de luces para complementar audio", description: "Combina audio profesional + show de luces DMX. El paquete completo que transforma cualquier evento.", link: "/servicios/cabezas-moviles/" }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "canonical": canonical, "schemaMarkup": schemaMarkup }, { "breadcrumbs": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "breadcrumbs" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Breadcrumbs", $$Breadcrumbs, { "items": [
    { label: "Inicio", href: "/" },
    { label: "Sonido y DJ", href: "/servicios/sonido/" },
    { label: "Audio para Eventos" }
  ] })} ` })}`, "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, { "title": "Renta de Bocinas y Audio Profesional para Eventos en CDMX", "subtitle": "Bocinas JBL y QSC con t\xE9cnico de audio incluido. Desde 50 hasta 2,000 personas. Desde $4,000 + IVA.", "introParagraph1": 'El error m\xE1s com\xFAn que vemos: alguien renta "un par de bocinas" sin saber los metros cuadrados del sal\xF3n ni cu\xE1nta gente va a tener. 50 personas en un sal\xF3n cerrado de 80m\xB2 no necesitan lo mismo que 200 en un jard\xEDn abierto. En el sal\xF3n, dos <strong>JBL PRX315</strong> con un sub bastan. En el jard\xEDn, necesitas el doble porque el sonido se dispersa sin paredes que lo contengan. En <strong>REDEIL</strong> llevamos 30 a\xF1os dimensionando audio para eventos: <strong>JBL</strong> (PRX, VTX, EON), <strong>QSC</strong> (K12.2, KLA12) y <strong>Electro-Voice</strong>. De 50 personas a 2,000+.', "introParagraph2": "Todos los paquetes incluyen t\xE9cnico de audio. No rentamos equipo sin operador, porque hemos visto demasiados eventos donde el audio profesional suena mal solo porque nadie lo ecualiz\xF3 al espacio. El t\xE9cnico llega 2-3 horas antes, monta, ecualiza las bocinas a la ac\xFAstica espec\xEDfica de tu venue (un sal\xF3n con piso de m\xE1rmol rebota el sonido muy diferente a uno con alfombra), y opera la mezcladora <strong>Yamaha TF</strong> durante todo el evento. Micr\xF3fonos <strong>Shure</strong> inal\xE1mbricos, subwoofers, cableado profesional y planta de luz si tu venue la necesita." })} ${renderComponent($$result2, "CtaBar", $$CtaBar, { "headline": "\xBFPara qu\xE9 tipo de evento necesitas audio?", "items": [
    { label: "Bodas", href: "/servicios/bocinas-bodas/", icon: "sonido" },
    { label: "DJ Profesional", href: "/servicios/bocinas-djs/", icon: "sonido" },
    { label: "Todo el sonido", href: "/servicios/sonido/", icon: "sonido" },
    { label: "Cotiza Gratis", href: "/contacto/", icon: "cotizar" }
  ] })} ${maybeRenderHead()}<section class="services-section"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "\xBFQu\xE9 incluye la renta de audio profesional?", "subtitle": "Calculamos la potencia seg\xFAn metros cuadrados, altura de techo y tipo de superficie.", "paragraph1": "Un sal\xF3n con techo de 3 metros y piso de m\xE1rmol rebota el sonido y genera eco. Un jard\xEDn abierto de hacienda absorbe todo y necesitas el doble de potencia. Un auditorio de conferencias necesita claridad de voz, no bajo. El t\xE9cnico configura el equipo seg\xFAn estas variables, no seg\xFAn lo que 'se ve bien' en el escenario.", "paragraph2": "La ecualizaci\xF3n al venue es lo que la mayor\xEDa de los proveedores no hacen. Llegan, montan y se van. Nuestro t\xE9cnico se queda todo el evento ajustando niveles, atendiendo micr\xF3fonos y resolviendo cualquier problema de audio en tiempo real." })} ${renderComponent($$result2, "Gallery4x4", $$Gallery4X4, { "images": [
    { src: "/img/bocinas/bocinas-profesionales-evento-masivo.avif", alt: "Bocinas profesionales para evento masivo" },
    { src: "/img/bocinas/renta-bocinas-line-array-concierto.avif", alt: "Sistema line array JBL para concierto" },
    { src: "/img/bocinas/sonido-profesional-concierto-estadio.avif", alt: "Sonido profesional en concierto de estadio" },
    { src: "/img/bocinas-bodas/renta-bocinas-boda-banda-cantante-mezcladora-jbl.avif", alt: "Banda con cantante y mezcladora JBL en boda" },
    { src: "/img/bocinas-bodas/renta-bocinas-boda-salon-line-array-pioneer-dj.avif", alt: "Line array y consola Pioneer DJ en sal\xF3n de boda" },
    { src: "/img/bocinas-bodas/renta-bocinas-boda-descarga-equipo-salon-qsc-k12.avif", alt: "Descarga de equipo QSC K12 en sal\xF3n de boda" },
    { src: "/img/bocinas-bodas/renta-bocinas-boda-brindis-microfono-salon.avif", alt: "Brindis con micr\xF3fono en sal\xF3n de boda" },
    { src: "/img/bocinas-bodas/renta-bocinas-boda-instalacion-equipo-cases.avif", alt: "Instalaci\xF3n de equipo de audio con cases profesionales" },
    { src: "/img/bocinas-fiestas/bocinas-amplificadas-fiestas-jardines.avif", alt: "Bocinas amplificadas para fiesta en jard\xEDn" },
    { src: "/img/bocinas-fiestas/bocinas-grandes-eventos-masivos.avif", alt: "Bocinas grandes para eventos masivos" },
    { src: "/img/bocinas-fiestas/audio-eventos-corporativos-conferencias.avif", alt: "Audio para eventos corporativos y conferencias" },
    { src: "/img/bocinas-conferencias/alquiler-equipo-sonido-conferencias-empresas.avif", alt: "Equipo de sonido para conferencias empresariales" },
    { src: "/img/bocinas-djs/dj-para-eventos-equipo-sonido-luces.avif", alt: "DJ para eventos con equipo de sonido y luces" },
    { src: "/img/bocinas-djs/dj-para-eventos-cdmx-cabina-profesional.avif", alt: "DJ con cabina profesional en evento CDMX" },
    { src: "/img/bocinas-bodas/renta-bocinas-boda-dj-consola-pioneer-salon.avif", alt: "Consola Pioneer DJ en sal\xF3n de boda" },
    { src: "/img/bocinas-bodas/renta-bocinas-boda-playa-instalacion-jbl-blancas.avif", alt: "Instalaci\xF3n de bocinas JBL blancas en boda de playa" }
  ] })} </div> </section> <section class="services-section services-alt"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "\xBFCu\xE1nto cuesta rentar bocinas en CDMX?", "subtitle": "Dimensionados por cantidad de personas y tipo de espacio. T\xE9cnico incluido siempre.", "paragraph1": "Cada paquete incluye bocinas, subwoofers, micr\xF3fonos Shure inal\xE1mbricos, mezcladora Yamaha, cableado, transporte, montaje, ecualizaci\xF3n al venue, operaci\xF3n durante todo el evento y desmontaje. El precio ya incluye todo.", "paragraph2": "Si tu evento no encaja en estos rangos, m\xE1ndanos las dimensiones del venue y la cantidad de invitados. Armamos configuraciones a la medida." })} ${renderComponent($$result2, "PricingCards", $$PricingCards, { "packages": [
    {
      name: "B\xE1sico \u2014 hasta 80 personas",
      price: "$4,000",
      priceNote: "+ IVA",
      description: "Audio para salones peque\xF1os, reuniones y fiestas \xEDntimas. Sonido limpio y claro sin sobredimensionar.",
      features: [
        { text: "2 bocinas JBL PRX activas", included: true },
        { text: "1 subwoofer QSC", included: true },
        { text: "2 micr\xF3fonos Shure inal\xE1mbricos", included: true },
        { text: "Mezcladora + conexi\xF3n BT/AUX", included: true },
        { text: "T\xE9cnico de audio incluido", included: true },
        { text: "Transporte + montaje + desmontaje", included: true },
        { text: "Line array", included: false },
        { text: "DJ incluido", included: false }
      ],
      ctaLabel: "Cotizar audio b\xE1sico",
      ctaHref: "/servicios/bocinas/paquete-audio-basico/"
    },
    {
      name: "Est\xE1ndar \u2014 hasta 200 personas",
      price: "$7,000",
      priceNote: "+ IVA",
      badge: "M\xE1s popular",
      highlight: true,
      description: "El m\xE1s pedido para bodas y XV a\xF1os. Cubre ceremonia + recepci\xF3n + fiesta con potencia de sobra.",
      features: [
        { text: "4 bocinas JBL PRX/QSC K.2", included: true },
        { text: "2 subwoofers", included: true },
        { text: "4 micr\xF3fonos Shure inal\xE1mbricos", included: true },
        { text: "Mezcladora Yamaha TF", included: true },
        { text: "T\xE9cnico de audio incluido", included: true },
        { text: "Transporte + montaje + desmontaje", included: true },
        { text: "Ideal para: bodas, XV a\xF1os, galas", included: true },
        { text: "DJ incluido", included: false }
      ],
      ctaLabel: "Cotizar audio est\xE1ndar",
      ctaHref: "/servicios/bocinas/paquete-audio-estandar/"
    },
    {
      name: "Premium \u2014 hasta 500 personas",
      price: "$12,000",
      priceNote: "+ IVA",
      description: "Sistema line array para venues grandes. Cobertura uniforme en todo el espacio sin puntos muertos.",
      features: [
        { text: "Sistema line array JBL VTX/QSC KLA", included: true },
        { text: "4 subwoofers de alta potencia", included: true },
        { text: "6 micr\xF3fonos Shure ULXD", included: true },
        { text: "Mezcladora Yamaha TF + procesador", included: true },
        { text: "T\xE9cnico de audio + asistente", included: true },
        { text: "Ecualizaci\xF3n profesional al venue", included: true },
        { text: "Ideal para: haciendas, salones grandes", included: true },
        { text: "Monitors de escenario incluidos", included: true }
      ],
      ctaLabel: "Cotizar audio premium",
      ctaHref: "/servicios/bocinas/paquete-audio-premium/"
    },
    {
      name: "Producci\xF3n \u2014 500+ personas",
      price: "$20,000",
      priceNote: "+ IVA",
      description: "Producci\xF3n de audio completa para conciertos, festivales y eventos masivos con ingenier\xEDa de sonido.",
      features: [
        { text: "Line array completo + delays", included: true },
        { text: "Subwoofers cardioide de alta potencia", included: true },
        { text: "Sistema de monitors de escenario", included: true },
        { text: "Ingenier\xEDa de sonido FOH + monitors", included: true },
        { text: "Visita t\xE9cnica previa al venue", included: true },
        { text: "Planta de luz si requerida", included: true },
        { text: "Ideal para: conciertos, festivales, TV", included: true },
        { text: "Grabaci\xF3n multipista disponible", included: true }
      ],
      ctaLabel: "Cotizar producci\xF3n",
      ctaHref: "/servicios/bocinas/paquete-produccion-audio/"
    }
  ] })} </div> </section> <section class="faq-section"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Preguntas frecuentes sobre audio para eventos", "subtitle": "Lo que nuestros clientes preguntan antes de contratar.", "paragraph1": "Si tu duda no est\xE1 aqu\xED, escr\xEDbenos por WhatsApp y respondemos en minutos.", "paragraph2": "Cada venue tiene sus particularidades ac\xFAsticas \u2014 te asesoramos para que el sonido sea perfecto en tu espacio." })} </div> ${renderComponent($$result2, "FaqSection", $$FaqSection, { "items": [
    { question: "\xBFCu\xE1ntas bocinas necesito?", answer: "La regla r\xE1pida: hasta 80 personas en sal\xF3n cerrado, 2 bocinas JBL PRX + 1 sub. Hasta 200, 4 bocinas + 2 subs. Para 500+, sistema line array. Pero importa m\xE1s el espacio que la cantidad de personas. 100 personas apretadas en un sal\xF3n chico necesitan menos que 100 personas repartidas en un jard\xEDn abierto. M\xE1ndanos fotos del venue y te decimos exactamente qu\xE9 necesitas." },
    { question: "\xBFEl t\xE9cnico viene incluido?", answer: "Siempre. No rentamos equipo sin operador. Hemos visto demasiados eventos donde rentaron bocinas profesionales que sonaban mal porque nadie las ecualiz\xF3 al espacio. El t\xE9cnico llega 2-3 horas antes, monta, ecualiza y se queda operando toda la noche." },
    { question: "\xBFPuedo conectar mi playlist de Spotify?", answer: "S\xED. Bluetooth, cable AUX o USB a la mezcladora. Si compartes la playlist antes del evento, la tenemos lista en un dispositivo de respaldo por si el Bluetooth falla. El Bluetooth a veces se desconecta en eventos con mucha gente y muchos celulares cerca, as\xED que el respaldo por cable siempre est\xE1 listo." },
    { question: "\xBFLos micr\xF3fonos inal\xE1mbricos est\xE1n incluidos?", answer: "S\xED. Usamos Shure profesionales: de mano para brindis y discursos, de solapa o diadema para conferencias y presentaciones. El paquete b\xE1sico trae 2, los premium hasta 6. Si necesitas m\xE1s, se agregan al presupuesto. Los probamos con anticipaci\xF3n para evitar feedback." },
    { question: "\xBFQu\xE9 pasa si el venue no tiene suficiente corriente?", answer: "Llevamos planta de luz. Muchas haciendas y jardines en Edo. M\xE9x. tienen instalaci\xF3n el\xE9ctrica limitada que no aguanta un sistema de audio grande m\xE1s iluminaci\xF3n. Lo verificamos antes del evento y si hace falta planta, la incluimos sin costo adicional en paquetes Premium y Producci\xF3n." },
    { question: "\xBFPuedo agregar DJ despu\xE9s?", answer: "S\xED. Si contratas solo equipo de audio y despu\xE9s decides agregar DJ, combinamos con precio especial porque el equipo ya est\xE1 contratado. Tambi\xE9n puedes contratar directamente el paquete DJ que ya incluye todo." }
  ] })} </section> <section class="services-section services-alt"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "\xBFQu\xE9 otros servicios combinan con audio profesional?", "subtitle": "DJ, luces y efectos. El precio baja cuando todo sale del mismo proveedor.", "paragraph1": "Cuando audio y luces son del mismo equipo, el t\xE9cnico de sonido y el operador de luces se coordinan directo. El DJ da la se\xF1al del vals, el operador de humo bajo activa la niebla, el seguidor enciende el spotlight. Sin radios cruzados ni malentendidos.", "paragraph2": "Paquetes combinados de audio + iluminaci\xF3n con precio especial. Cu\xE9ntanos todo tu evento." })} <div class="services-grid"> ${serviciosRelacionados.map((s) => renderTemplate`${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "title": s.title, "image": s.image, "alt": s.alt, "description": s.description, "link": s.link })}`)} </div> </div> </section> <section class="cta-section"> <div class="container"> <div class="cta-content"> <h2>¿Listo para que tu evento suene como debe?</h2> <p>Mándanos la fecha, el venue y cuántas personas esperas. Te cotizamos el equipo exacto que necesitas en minutos.</p> <div class="cta-buttons"> <a href="/contacto/" class="btn btn-whatsapp btn-lg">Cotiza por WhatsApp</a> <a href="tel:+525530682988" class="btn btn-primary btn-lg">Llámanos — 55 3068 2988</a> </div> </div> </div> </section> ` })}`;
}, "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/pages/servicios/bocinas.astro", void 0);

const $$file = "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/pages/servicios/bocinas.astro";
const $$url = "/servicios/bocinas";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Bocinas,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
