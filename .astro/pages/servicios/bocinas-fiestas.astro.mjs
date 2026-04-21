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

const $$BocinasFiestas = createComponent(($$result, $$props, $$slots) => {
  const title = "Renta de Bocinas para Fiestas en CDMX | REDEIL";
  const description = "Bocinas JBL y QSC para cumplea\xF1os, graduaciones, posadas y fiestas privadas en CDMX. T\xE9cnico incluido. Desde $3,000 + IVA.";
  const canonical = "https://rentadeiluminacion.com/servicios/bocinas-fiestas/";
  const schemaMarkup = JSON.stringify([
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Renta de Bocinas para Fiestas Privadas",
      "provider": {
        "@type": "LocalBusiness",
        "name": "REDEIL",
        "url": "https://rentadeiluminacion.com",
        "telephone": "+525530682988",
        "address": { "@type": "PostalAddress", "addressLocality": "Ciudad de M\xE9xico", "addressRegion": "CDMX", "addressCountry": "MX" }
      },
      "description": "Renta de bocinas y audio profesional para cumplea\xF1os, graduaciones, posadas y fiestas privadas en CDMX. Equipos JBL y QSC con t\xE9cnico incluido.",
      "areaServed": [{ "@type": "City", "name": "Ciudad de M\xE9xico" }, { "@type": "State", "name": "Estado de M\xE9xico" }],
      "serviceType": "Renta de Bocinas para Fiestas",
      "priceRange": "$$"
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "\xBFPuedo conectar mi celular por Bluetooth?", "acceptedAnswer": { "@type": "Answer", "text": "S\xED. Conectamos tu celular v\xEDa Bluetooth, AUX o USB. Funciona con Spotify, Apple Music, YouTube Music o cualquier app. El t\xE9cnico se asegura de que el volumen y la ecualizaci\xF3n sean correctos." } },
        { "@type": "Question", "name": "\xBFLas bocinas funcionan al aire libre?", "acceptedAnswer": { "@type": "Answer", "text": "S\xED. Nuestras bocinas JBL y QSC funcionan en jardines, terrazas, rooftops y cualquier espacio exterior. Usamos m\xE1s potencia para compensar la dispersi\xF3n del sonido al aire libre." } },
        { "@type": "Question", "name": "\xBFIncluyen micr\xF3fono para karaoke?", "acceptedAnswer": { "@type": "Answer", "text": "S\xED, si lo solicitas. Todos los paquetes incluyen micr\xF3fonos inal\xE1mbricos que puedes usar para karaoke, discursos o din\xE1micas. Tambi\xE9n tenemos equipo de karaoke con pantalla y cat\xE1logo de canciones." } },
        { "@type": "Question", "name": "\xBFCu\xE1ntas bocinas necesito para mi fiesta?", "acceptedAnswer": { "@type": "Answer", "text": "Para fiestas de hasta 50 personas, 2 bocinas son suficientes. Para 150 personas, 4 bocinas + subwoofer. Para 300+, usamos 6 bocinas o line array. Te asesoramos seg\xFAn tu espacio." } },
        { "@type": "Question", "name": "\xBFSirve para posadas y fiestas de oficina?", "acceptedAnswer": { "@type": "Answer", "text": "S\xED \u2014 hacemos muchas posadas navide\xF1as y fiestas de fin de a\xF1o para empresas. Desde la m\xFAsica ambiental durante la cena hasta la hora loca con karaoke y DJ." } },
        { "@type": "Question", "name": "\xBFEl t\xE9cnico se queda durante toda la fiesta?", "acceptedAnswer": { "@type": "Answer", "text": "S\xED. El t\xE9cnico de audio est\xE1 presente desde el montaje hasta el desmontaje. Ajusta el volumen, resuelve cualquier problema t\xE9cnico y se asegura de que el sonido est\xE9 perfecto toda la noche." } }
      ]
    }
  ]);
  const serviciosRelacionados = [
    { title: "DJ para Fiestas", image: "/img/bocinas-djs/dj-para-eventos-cdmx-cabina-profesional-300w.avif", alt: "DJ profesional para fiestas", description: "Si quieres que alguien controle la m\xFAsica y lea al p\xFAblico, agrega DJ al paquete de audio.", link: "/servicios/bocinas-djs/" },
    { title: "Bola Disco", image: "/img/bola-disco/bola-disco-dj-pista-baile-evento.avif", alt: "Bola disco para fiesta", description: "Audio + bola disco = fiesta retro instant\xE1nea. Funciona para cualquier cumplea\xF1os o posada.", link: "/servicios/bola-disco/" },
    { title: "M\xE1quina de Humo", image: "/img/humo-bajo/efecto-nubes-piso-boda-jardin-400w.avif", alt: "Humo para fiesta", description: "El humo convierte la pista en un escenario de concierto. Combo perfecto con audio y luces.", link: "/servicios/maquina-humo/" },
    { title: "Confeti", image: "/img/maquina-de-papelitos/confeti-dorado-primer-baile-novios-romantico-400w.avif", alt: "Confeti para fiesta", description: "Explosi\xF3n de confeti para el momento cumbre. Cumplea\xF1os, graduaciones y posadas.", link: "/servicios/confeti/" }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "canonical": canonical, "schemaMarkup": schemaMarkup }, { "breadcrumbs": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "breadcrumbs" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Breadcrumbs", $$Breadcrumbs, { "items": [
    { label: "Inicio", href: "/" },
    { label: "Sonido y DJ", href: "/servicios/sonido/" },
    { label: "Bocinas para Fiestas" }
  ] })} ` })}`, "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, { "title": "Renta de Bocinas para Fiestas Privadas en CDMX", "subtitle": "Audio JBL y QSC para cumplea\xF1os, graduaciones, posadas y cualquier celebraci\xF3n. T\xE9cnico incluido. Desde $3,000 + IVA.", "introParagraph1": "El error m\xE1s com\xFAn en fiestas: rentar bocinas demasiado grandes para el espacio o demasiado chicas para la gente. 30 personas en una terraza no necesitan un line array \u2014 con 2 bocinas <strong>JBL</strong> compactas se oye perfecto y sin quejas de los vecinos. 200 personas en un jard\xEDn abierto necesitan 4-6 bocinas con subwoofer porque el sonido se dispersa al aire libre. En <strong>REDEIL</strong> dimensionamos al espacio y a la cantidad de gente, no al presupuesto.", "introParagraph2": "El t\xE9cnico que va con el equipo hace dos cosas que la gente no pide pero agradece: ecualiza al espacio (un sal\xF3n con techo bajo y m\xE1rmol suena diferente que un jard\xEDn con pasto) y ajusta el volumen seg\xFAn el momento. A las 8pm suave para la cena, a las 10pm sube para la fiesta, y si hay vecinos sensibles, calibra la direcci\xF3n de las bocinas para minimizar el sonido hacia afuera. Bocinas JBL y QSC, micr\xF3fonos Shure inal\xE1mbricos, conexi\xF3n Bluetooth para Spotify." })} ${renderComponent($$result2, "CtaBar", $$CtaBar, { "headline": "\xBFQu\xE9 tipo de fiesta est\xE1s organizando?", "items": [
    { label: "DJ para Fiesta", href: "/servicios/bocinas-djs/", icon: "sonido" },
    { label: "Audio Eventos", href: "/servicios/bocinas/", icon: "sonido" },
    { label: "Todo el sonido", href: "/servicios/sonido/", icon: "sonido" },
    { label: "Cotiza Gratis", href: "/contacto/", icon: "cotizar" }
  ] })} ${maybeRenderHead()}<section class="services-section"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Audio para fiestas de todos los tama\xF1os", "subtitle": "Desde una reuni\xF3n en terraza hasta una graduaci\xF3n de 400 personas.", "paragraph1": "La diferencia que la gente nota pero no sabe nombrar: con bocinas profesionales se escucha la m\xFAsica sin distorsi\xF3n a cualquier volumen. Una bocina Bluetooth distorsiona cuando subes el volumen al 80%. Una JBL PRX a volumen alto suena limpia porque tiene headroom de sobra.", "paragraph2": "En jardines y terrazas, la otra diferencia es el bajo. Al aire libre, las frecuencias graves se pierden porque no hay paredes que las reflejen. El subwoofer compensa eso. Sin sub en un jard\xEDn, la m\xFAsica se oye flaca." })} ${renderComponent($$result2, "Gallery4x4", $$Gallery4X4, { "images": [
    { src: "/img/bocinas-fiestas/bocinas-amplificadas-fiestas-jardines.avif", alt: "Bocinas amplificadas para fiesta en jard\xEDn" },
    { src: "/img/bocinas-fiestas/alquiler-altavoces-fiestas-piscina.avif", alt: "Altavoces para fiesta en piscina" },
    { src: "/img/bocinas-fiestas/bocinas-fiestas-ano-nuevo-celebracion.avif", alt: "Bocinas para fiesta de a\xF1o nuevo" },
    { src: "/img/bocinas-fiestas/bocinas-karaoke-fiestas-familiares.avif", alt: "Bocinas para karaoke en fiesta familiar" },
    { src: "/img/bocinas-fiestas/alquiler-altavoces-eventos-terraza.avif", alt: "Altavoces para evento en terraza" },
    { src: "/img/bocinas-fiestas/alquiler-bocinas-fiestas-navidad.avif", alt: "Bocinas para fiesta navide\xF1a" },
    { src: "/img/bocinas-fiestas/bocinas-eventos-cocktail-recepcion.avif", alt: "Bocinas para coctel y recepci\xF3n" },
    { src: "/img/bocinas-fiestas/bocinas-eventos-neon-glow.avif", alt: "Bocinas para evento ne\xF3n glow" },
    { src: "/img/bocinas-fiestas/equipo-audio-cumpleanos-reuniones.avif", alt: "Equipo de audio para cumplea\xF1os" },
    { src: "/img/bocinas-fiestas/bocinas-grandes-eventos-masivos.avif", alt: "Bocinas para eventos masivos" },
    { src: "/img/bocinas-fiestas/alquiler-parlantes-fiestas-roof-top.avif", alt: "Parlantes para fiesta en rooftop" },
    { src: "/img/bocinas-fiestas/alquiler-bocinas-eventos-rusticos.avif", alt: "Bocinas para evento r\xFAstico" },
    { src: "/img/bocinas-fiestas/bocinas-inalambricas-fiestas-casa.avif", alt: "Bocinas inal\xE1mbricas para fiesta en casa" },
    { src: "/img/bocinas-fiestas/bocinas-profesionales-fiestas-noche.avif", alt: "Bocinas profesionales para fiesta nocturna" },
    { src: "/img/bocinas-fiestas/equipo-audio-celebraciones-especiales.avif", alt: "Equipo de audio para celebraciones especiales" },
    { src: "/img/bocinas-fiestas/alquiler-sonido-aniversarios-celebraciones.avif", alt: "Sonido para aniversarios y celebraciones" }
  ] })} </div> </section> <section class="services-section services-alt"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Paquetes de Audio para Fiestas", "subtitle": "4 niveles seg\xFAn cu\xE1nta gente va a tu fiesta. T\xE9cnico incluido.", "paragraph1": "Cada paquete incluye bocinas, conexi\xF3n Bluetooth/AUX, micr\xF3fonos inal\xE1mbricos si los necesitas, t\xE9cnico de audio, transporte, montaje y desmontaje. El t\xE9cnico ajusta el volumen seg\xFAn los vecinos y el momento de la noche.", "paragraph2": "\xBFTu fiesta es diferente? M\xE1ndanos cu\xE1ntas personas esperan y el tipo de espacio \u2014 te armamos la propuesta exacta." })} ${renderComponent($$result2, "PricingCards", $$PricingCards, { "packages": [
    {
      name: "Fiesta Peque\xF1a \u2014 hasta 50",
      price: "$3,000",
      priceNote: "+ IVA",
      description: "Para reuniones en casa, terraza o rooftop. Sonido limpio sin exceso. Perfecto para cumplea\xF1os \xEDntimos.",
      features: [
        { text: "2 bocinas JBL compactas", included: true },
        { text: "Conexi\xF3n Bluetooth + AUX", included: true },
        { text: "1 micr\xF3fono inal\xE1mbrico", included: true },
        { text: "T\xE9cnico de audio incluido", included: true },
        { text: "Transporte + montaje + desmontaje", included: true },
        { text: "Ideal para: cumplea\xF1os, reuniones, cenas", included: true },
        { text: "Subwoofer", included: false },
        { text: "DJ incluido", included: false }
      ],
      ctaLabel: "Cotizar fiesta peque\xF1a",
      ctaHref: "/servicios/bocinas-fiestas/paquete-fiesta-casa/"
    },
    {
      name: "Fiesta Est\xE1ndar \u2014 hasta 150",
      price: "$5,500",
      priceNote: "+ IVA",
      badge: "M\xE1s popular",
      highlight: true,
      description: "El m\xE1s pedido para graduaciones, posadas y fiestas de cumplea\xF1os grandes. Audio con potencia para la pista.",
      features: [
        { text: "4 bocinas JBL PRX / QSC", included: true },
        { text: "1 subwoofer para bajo", included: true },
        { text: "2 micr\xF3fonos Shure inal\xE1mbricos", included: true },
        { text: "Conexi\xF3n Bluetooth + AUX + USB", included: true },
        { text: "T\xE9cnico de audio incluido", included: true },
        { text: "Transporte + montaje + desmontaje", included: true },
        { text: "Ideal para: graduaciones, posadas, cumplea\xF1os", included: true },
        { text: "DJ incluido", included: false }
      ],
      ctaLabel: "Cotizar fiesta est\xE1ndar",
      ctaHref: "/servicios/bocinas-fiestas/paquete-fiesta-salon/"
    },
    {
      name: "Fiesta Grande \u2014 hasta 300",
      price: "$8,500",
      priceNote: "+ IVA",
      description: "Para jardines, salones y fiestas con pista de baile seria. 6 bocinas con potencia de sobra.",
      features: [
        { text: "6 bocinas JBL / QSC", included: true },
        { text: "2 subwoofers de alta potencia", included: true },
        { text: "4 micr\xF3fonos Shure inal\xE1mbricos", included: true },
        { text: "Mezcladora Yamaha + Bluetooth", included: true },
        { text: "T\xE9cnico de audio incluido", included: true },
        { text: "Transporte + montaje + desmontaje", included: true },
        { text: "Ideal para: fiestas grandes, jardines", included: true },
        { text: "Karaoke con pantalla disponible", included: true }
      ],
      ctaLabel: "Cotizar fiesta grande",
      ctaHref: "/servicios/bocinas-fiestas/paquete-fiesta-jardin/"
    },
    {
      name: "Mega Fiesta \u2014 300+",
      price: "$14,000",
      priceNote: "+ IVA",
      description: "Producci\xF3n completa con line array para fiestas masivas, festivales privados y eventos de empresa.",
      features: [
        { text: "Sistema line array JBL/QSC", included: true },
        { text: "Subwoofers de producci\xF3n", included: true },
        { text: "6 micr\xF3fonos inal\xE1mbricos", included: true },
        { text: "Mezcladora Yamaha TF + procesador", included: true },
        { text: "T\xE9cnico + asistente de audio", included: true },
        { text: "Planta de luz disponible", included: true },
        { text: "Ideal para: festivales, empresas, mega fiestas", included: true },
        { text: "DJ y cabezas m\xF3viles combinables", included: true }
      ],
      ctaLabel: "Cotizar mega fiesta",
      ctaHref: "/servicios/bocinas-fiestas/paquete-fiesta-masiva/"
    }
  ] })} </div> </section> <section class="faq-section"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Preguntas sobre Bocinas para Fiestas", "subtitle": "Lo que nuestros clientes preguntan antes de contratar.", "paragraph1": "Si tu duda no est\xE1 aqu\xED, escr\xEDbenos por WhatsApp.", "paragraph2": "Cada fiesta es diferente \u2014 te asesoramos seg\xFAn tu espacio y presupuesto." })} </div> ${renderComponent($$result2, "FaqSection", $$FaqSection, { "items": [
    { question: "\xBFPuedo conectar mi celular por Bluetooth?", answer: "S\xED. Bluetooth, cable AUX o USB a la mezcladora. Funciona con Spotify, Apple Music, YouTube Music. El t\xE9cnico ecualiza la se\xF1al del celular para que no suene plana \u2014 el celular manda audio comprimido y la mezcladora le da cuerpo." },
    { question: "\xBFEn jard\xEDn se oye igual que en sal\xF3n?", answer: "No. En un jard\xEDn el sonido se dispersa porque no hay paredes que lo contengan. Por eso al aire libre usamos m\xE1s bocinas y subwoofer. Adentro, el sal\xF3n ayuda a que el sonido rebote y se distribuya. El t\xE9cnico ajusta seg\xFAn el espacio." },
    { question: "\xBFLos vecinos se van a quejar?", answer: "El t\xE9cnico calibra la direcci\xF3n y el volumen para minimizar el sonido que sale del espacio de la fiesta. No podemos eliminarlo, pero s\xED reducirlo mucho. En terrazas de departamento, subimos gradualmente y ajustamos si hay queja. En jardines, las bocinas apuntan hacia adentro del predio, no hacia la calle." },
    { question: "\xBFSirve para posadas de oficina?", answer: "Hacemos muchas posadas y fiestas de fin de a\xF1o para empresas. El formato t\xEDpico: m\xFAsica ambiental durante la cena, sube para el intercambio de regalos, y si hay karaoke, el t\xE9cnico lo maneja con los micr\xF3fonos Shure." },
    { question: "\xBFCu\xE1ntas bocinas necesito?", answer: "Hasta 50 personas: 2 bocinas. 100-150: 4 bocinas + sub. 200-300: 6 bocinas + 2 subs. 300+: line array. Esto es en interior \u2014 en exterior, se sube un nivel porque el sonido se pierde. M\xE1ndanos el n\xFAmero de gente y fotos del espacio." },
    { question: "\xBFEl t\xE9cnico se queda toda la noche?", answer: "S\xED. Monta, ecualiza, opera el audio toda la noche y desmonta. Ajusta volumen seg\xFAn el momento, resuelve cualquier problema t\xE9cnico y controla que las bocinas no distorsionen ni que el Bluetooth se desconecte (que pasa m\xE1s seguido de lo que la gente piensa)." }
  ] })} </section> <section class="services-section services-alt"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Audio + DJ: cuando quieres que alguien controle la m\xFAsica", "subtitle": "La diferencia entre playlist en Spotify y un DJ leyendo al p\xFAblico.", "paragraph1": "Si tu plan es conectar el celular y dejar que Spotify haga lo suyo, el paquete de solo audio funciona bien. Si quieres que alguien lea la pista y cambie el g\xE9nero seg\xFAn la energ\xEDa de la gente, agrega DJ. La diferencia se nota cuando la abuela quiere Sonora Santanera y los primos quieren reggaet\xF3n \u2014 el DJ navega eso, el Spotify no.", "paragraph2": "Para cumplea\xF1os grandes y graduaciones, la combinaci\xF3n de audio + bola disco + humo convierte cualquier patio en pista de baile." })} <div class="services-grid"> ${serviciosRelacionados.map((s) => renderTemplate`${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "title": s.title, "image": s.image, "alt": s.alt, "description": s.description, "link": s.link })}`)} </div> </div> </section> <section class="cta-section"> <div class="container"> <div class="cta-content"> <h2>¿Lista la música para tu fiesta?</h2> <p>Dinos cuántas personas esperan, el tipo de espacio y qué tienes en mente. Te cotizamos en minutos.</p> <div class="cta-buttons"> <a href="/contacto/" class="btn btn-whatsapp btn-lg">Cotiza por WhatsApp</a> <a href="tel:+525530682988" class="btn btn-primary btn-lg">Llámanos — 55 3068 2988</a> </div> </div> </div> </section> ` })}`;
}, "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/pages/servicios/bocinas-fiestas.astro", void 0);

const $$file = "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/pages/servicios/bocinas-fiestas.astro";
const $$url = "/servicios/bocinas-fiestas";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$BocinasFiestas,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
