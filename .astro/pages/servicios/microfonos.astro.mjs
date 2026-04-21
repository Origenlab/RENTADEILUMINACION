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

const $$Microfonos = createComponent(($$result, $$props, $$slots) => {
  const title = "Renta de Micr\xF3fonos Inal\xE1mbricos CDMX | REDEIL \u2014 Bodas y Eventos";
  const description = "Renta de micr\xF3fonos inal\xE1mbricos en CDMX para bodas, XV a\xF1os, conferencias y presentaciones. Lavalier, de mano y diadema. Instalaci\xF3n incluida. Cotiza gratis.";
  const canonical = "https://rentadeiluminacion.com/servicios/microfonos/";
  const schemaMarkup = JSON.stringify([
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Renta de Micr\xF3fonos para Eventos CDMX",
      "provider": {
        "@type": "LocalBusiness",
        "name": "REDEIL",
        "url": "https://rentadeiluminacion.com",
        "telephone": "+525530682988",
        "address": { "@type": "PostalAddress", "addressLocality": "Ciudad de M\xE9xico", "addressRegion": "CDMX", "addressCountry": "MX" }
      },
      "description": "Renta de micr\xF3fonos inal\xE1mbricos en CDMX para bodas, XV a\xF1os, conferencias y presentaciones. Sonido profesional garantizado.",
      "areaServed": [
        { "@type": "City", "name": "Ciudad de M\xE9xico" },
        { "@type": "State", "name": "Estado de M\xE9xico" }
      ],
      "serviceType": "Renta de Micr\xF3fonos",
      "priceRange": "$$"
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "\xBFQu\xE9 tipo de micr\xF3fonos incluyen en la renta?", "acceptedAnswer": { "@type": "Answer", "text": "Contamos con tres tipos: micr\xF3fonos de mano inal\xE1mbricos Shure para brindis, discursos y cantos; micr\xF3fonos lavalier (de solapa) para celebrantes, sacerdotes y presentadores; y diademas para animadores, actores y oradores que necesitan manos libres. Todos son de marca Shure o Sennheiser." } },
        { "@type": "Question", "name": "\xBFLos micr\xF3fonos tienen riesgo de interferencias?", "acceptedAnswer": { "@type": "Answer", "text": "No. Usamos micr\xF3fonos de sistemas de frecuencia profesional UHF y Digital que operan en frecuencias libres de interferencia. El t\xE9cnico de REDEIL hace un escaneo del espectro antes del evento para garantizar se\xF1al limpia sin ruido durante toda la celebraci\xF3n." } },
        { "@type": "Question", "name": "\xBFCu\xE1ntos micr\xF3fonos necesito para mi boda?", "acceptedAnswer": { "@type": "Answer", "text": "Para una boda est\xE1ndar recomendamos m\xEDnimo 2 micr\xF3fonos de mano (uno para los votos, uno para el DJ/animador) y un lavalier para el sacerdote o juez en la ceremonia. Para bodas con brindis m\xFAltiples, presentaciones de padrinos y colocaci\xF3n de arras, 4 micr\xF3fonos son m\xE1s c\xF3modos." } },
        { "@type": "Question", "name": "\xBFEl t\xE9cnico de audio viene incluido con la renta de micr\xF3fonos?", "acceptedAnswer": { "@type": "Answer", "text": "S\xED. La renta de micr\xF3fonos siempre incluye un t\xE9cnico de audio que configura el sistema, realiza pruebas de sonido previas al evento y opera los niveles durante la ceremonia o presentaci\xF3n. No se renta el micr\xF3fono solo sin soporte t\xE9cnico." } },
        { "@type": "Question", "name": "\xBFLos micr\xF3fonos funcionan con cualquier sistema de bocinas?", "acceptedAnswer": { "@type": "Answer", "text": "S\xED. Los micr\xF3fonos inal\xE1mbricos se conectan a la mezcladora, que a su vez va a cualquier sistema de bocinas. Funcionan con nuestro equipo REDEIL o con el sistema de audio que ya tenga el venue. Si tienes bocinas propias o del venue, llevamos solo el sistema inal\xE1mbrico." } },
        { "@type": "Question", "name": "\xBFPuedo rentar micr\xF3fonos sin contratar el sistema de bocinas completo?", "acceptedAnswer": { "@type": "Answer", "text": "S\xED. Rentamos micr\xF3fonos como servicio independiente o como complemento al sistema de audio del venue. Llevamos el sistema inal\xE1mbrico completo (transmisor + receptor + mezcladora) para conectar a cualquier bocina existente. El t\xE9cnico se encarga de la integraci\xF3n." } }
      ]
    }
  ]);
  const serviciosRelacionados = [
    { title: "Audio para Eventos", image: "/img/bocinas/renta-bocinas-line-array-concierto-400w.avif", alt: "Sistema de bocinas para evento profesional", description: "Completa el sistema de micr\xF3fonos con bocinas profesionales JBL y QSC. Sonido completo para toda la sala.", link: "/servicios/bocinas/" },
    { title: "Bocinas para Bodas", image: "/img/bocinas-bodas/renta-bocinas-boda-primer-baile-novios-truss-300w.avif", alt: "Audio profesional para primer baile de boda", description: "El paquete completo de audio para boda: bocinas, micr\xF3fonos, mezcladora y t\xE9cnico. Todo coordinado para cada momento.", link: "/servicios/bocinas-bodas/" },
    { title: "DJ Profesional", image: "/img/bocinas-djs/dj-para-eventos-cdmx-cabina-profesional-300w.avif", alt: "DJ con consola profesional en evento CDMX", description: "El DJ maneja los micr\xF3fonos durante la fiesta. Combinado con DJ profesional tienes audio completo de ceremonia y fiesta.", link: "/servicios/bocinas-djs/" },
    { title: "Audio para Conferencias", image: "/img/bocinas-conferencias/renta-de-bocinas-para-conferencias-salon-ejecutivo-300w.avif", alt: "Audio para conferencia en sal\xF3n ejecutivo", description: "Para presentaciones corporativas, micr\xF3fonos inal\xE1mbricos + bocinas de l\xEDnea + procesador de audio para conferencias.", link: "/servicios/bocinas-conferencias/" }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "canonical": canonical, "schemaMarkup": schemaMarkup }, { "breadcrumbs": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "breadcrumbs" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Breadcrumbs", $$Breadcrumbs, { "items": [
    { label: "Inicio", href: "/" },
    { label: "Sonido y DJ", href: "/servicios/sonido/" },
    { label: "Micr\xF3fonos" }
  ] })} ` })}`, "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, { "title": "Renta de Micr\xF3fonos Inal\xE1mbricos en CDMX", "subtitle": "Micr\xF3fonos de mano, lavalier y diadema para bodas, XV a\xF1os, conferencias y presentaciones. T\xE9cnico de audio incluido.", "whatsappText": "Hola,%20quiero%20cotizar%20micr%C3%B3fonos%20para%20mi%20evento", "introParagraph1": "Un buen micr\xF3fono puede hacer que los votos de boda lleguen con claridad hasta el \xFAltimo invitado, o que la presentaci\xF3n corporativa de un director general se escuche con autoridad en todo el sal\xF3n. En <strong>REDEIL</strong> rentamos micr\xF3fonos inal\xE1mbricos profesionales <strong>Shure</strong> y <strong>Sennheiser</strong> \u2014 los mismos que se usan en conciertos y producciones televisivas \u2014 para eventos de todos los tama\xF1os en CDMX y Estado de M\xE9xico.", "introParagraph2": "Contamos con micr\xF3fonos de mano para brindis y discursos, lavaliers para sacerdotes y presentadores que necesitan manos libres, y diademas para animadores y actores. Todos operan en frecuencias UHF profesionales sin interferencias, con alcance de hasta 100 metros. El servicio incluye configuraci\xF3n previa, prueba de sonido, t\xE9cnico de audio durante el evento y retiro del equipo." })} ${renderComponent($$result2, "CtaBar", $$CtaBar, { "headline": "\xBFPara qu\xE9 tipo de evento necesitas micr\xF3fonos?", "items": [
    { label: "Bodas", href: "/servicios/bocinas-bodas/", icon: "sonido" },
    { label: "Conferencias", href: "/servicios/bocinas-conferencias/", icon: "sonido" },
    { label: "Todo el Sonido", href: "/servicios/sonido/", icon: "sonido" },
    { label: "Cotiza Gratis", href: "/contacto/", icon: "cotizar" }
  ] })} ${maybeRenderHead()}<section class="services-section"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Micr\xF3fonos profesionales para cada rol en tu evento", "subtitle": "Shure, Sennheiser y sistemas UHF sin interferencias. Rango de hasta 100 metros.", "paragraph1": "No todos los micr\xF3fonos son para lo mismo. Un micr\xF3fono de mano cardioide es ideal para el brindis porque rechaza el ruido ambiente y captura solo la voz de quien habla. Un lavalier omnidireccional es perfecto para el sacerdote porque captura su voz sin importar c\xF3mo mueva la cabeza. Una diadema es la elecci\xF3n del animador que necesita manos libres para gesticular.", "paragraph2": "En REDEIL llevamos el sistema completo: transmisor de cinturo, receptor, antena remota y mezcladora. El t\xE9cnico configura el sistema al espacio, prueba la se\xF1al en cada rinc\xF3n del venue y ajusta los niveles para que el sonido sea cristalino sin importar d\xF3nde est\xE9n los invitados." })} ${renderComponent($$result2, "Gallery4x4", $$Gallery4X4, { "images": [
    { src: "/img/galeria/conferencia-audio-01.avif", alt: "Micr\xF3fono inal\xE1mbrico de mano en brindis de boda CDMX" },
    { src: "/img/galeria/conferencia-audio-02.avif", alt: "Lavalier en sacerdote durante ceremonia de boda" },
    { src: "/img/galeria/conferencia-audio-03.avif", alt: "T\xE9cnico de audio revisando micr\xF3fonos antes del evento" },
    { src: "/img/galeria/conferencia-audio-04.avif", alt: "Micr\xF3fonos inal\xE1mbricos Shure para conferencia ejecutiva" },
    { src: "/img/galeria/conferencia-audio-05.avif", alt: "Diadema inal\xE1mbrica para animador de fiesta XV a\xF1os" },
    { src: "/img/galeria/conferencia-audio-06.avif", alt: "Sistema de micr\xF3fonos profesionales en sal\xF3n de eventos" },
    { src: "/img/galeria/conferencia-audio-07.avif", alt: "Micr\xF3fonos de mano y lavalier para boda en hacienda" },
    { src: "/img/galeria/conferencia-audio-08.avif", alt: "Configuraci\xF3n de micr\xF3fonos inal\xE1mbricos con mezcladora" },
    { src: "/img/galeria/boda-audio-01.avif", alt: "Audio para boda con micr\xF3fonos y bocinas profesionales" },
    { src: "/img/galeria/boda-audio-02.avif", alt: "Micr\xF3fono inal\xE1mbrico en votos de matrimonio CDMX" },
    { src: "/img/galeria/boda-audio-03.avif", alt: "Brindis con micr\xF3fono de mano profesional en boda" },
    { src: "/img/galeria/boda-audio-04.avif", alt: "T\xE9cnico de audio operando micr\xF3fonos en ceremonia" },
    { src: "/img/galeria/conferencias-01.avif", alt: "Ponente con micr\xF3fono de mano en presentaci\xF3n corporativa" },
    { src: "/img/galeria/conferencias-02.avif", alt: "Diadema inal\xE1mbrica Shure para presentaci\xF3n en escenario" },
    { src: "/img/galeria/conferencias-03.avif", alt: "Micr\xF3fono lavalier en director general durante conferencia" },
    { src: "/img/galeria/conferencias-04.avif", alt: "Sistema inal\xE1mbrico multi-micr\xF3fono para panel de expertos" }
  ] })} </div> </section> <section class="services-section services-alt"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Paquetes de Micr\xF3fonos Inal\xE1mbricos", "subtitle": "4 configuraciones desde 1 hasta 6 micr\xF3fonos. T\xE9cnico de audio incluido en todos.", "paragraph1": "Todos los paquetes incluyen el sistema inal\xE1mbrico completo, t\xE9cnico de audio, prueba de sonido previa, operaci\xF3n durante el evento y retiro. Sin costos ocultos.", "paragraph2": "\xBFNecesitas micr\xF3fonos + bocinas + DJ? Armamos el paquete completo de audio con precio especial." })} ${renderComponent($$result2, "PricingCards", $$PricingCards, { "packages": [
    {
      name: "B\xE1sico \u2014 2 Micr\xF3fonos",
      price: "$2,500",
      priceNote: "+ IVA",
      description: "2 micr\xF3fonos de mano inal\xE1mbricos. Para brindis, discursos o celebrante + novios en la ceremonia.",
      features: [
        { text: "2 micr\xF3fonos Shure inal\xE1mbricos", included: true },
        { text: "Sistema UHF sin interferencias", included: true },
        { text: "T\xE9cnico de audio incluido", included: true },
        { text: "Prueba de sonido previa", included: true },
        { text: "Transporte + instalaci\xF3n + retiro", included: true },
        { text: "Alcance hasta 50 metros", included: true },
        { text: "Lavalier o diadema incluida", included: false },
        { text: "6 micr\xF3fonos simult\xE1neos", included: false }
      ],
      ctaLabel: "Cotizar paquete b\xE1sico",
      ctaHref: "/contacto/"
    },
    {
      name: "Est\xE1ndar \u2014 4 Micr\xF3fonos",
      price: "$4,000",
      priceNote: "+ IVA",
      badge: "M\xE1s popular",
      highlight: true,
      description: "4 micr\xF3fonos con combinaci\xF3n de tipos. Ideal para bodas con ceremonia + recepci\xF3n o presentaciones con panel.",
      features: [
        { text: "2 micr\xF3fonos de mano Shure", included: true },
        { text: "1 lavalier (solapa) Shure", included: true },
        { text: "1 diadema inal\xE1mbrica", included: true },
        { text: "Sistema UHF sin interferencias", included: true },
        { text: "T\xE9cnico de audio incluido", included: true },
        { text: "Prueba de sonido + ajuste al venue", included: true },
        { text: "Alcance hasta 80 metros", included: true },
        { text: "Ideal: bodas, XV a\xF1os, corporativos", included: true }
      ],
      ctaLabel: "Cotizar paquete est\xE1ndar",
      ctaHref: "/contacto/"
    },
    {
      name: "Premium \u2014 6 Micr\xF3fonos",
      price: "$6,500",
      priceNote: "+ IVA",
      description: "6 micr\xF3fonos para eventos con m\xFAltiples ponentes, paneles, obras o ceremonias completas.",
      features: [
        { text: "4 micr\xF3fonos de mano Shure", included: true },
        { text: "2 lavalier Shure profesionales", included: true },
        { text: "Sistema UHF multi-canal", included: true },
        { text: "T\xE9cnico de audio + asistente", included: true },
        { text: "Mezcladora dedicada", included: true },
        { text: "Alcance hasta 100 metros", included: true },
        { text: "Ideal: conferencias, bodas grandes", included: true },
        { text: "Integraci\xF3n con sistema de bocinas", included: true }
      ],
      ctaLabel: "Cotizar paquete premium",
      ctaHref: "/contacto/"
    },
    {
      name: "Producci\xF3n \u2014 8+ Micr\xF3fonos",
      price: "Consultar",
      priceNote: "+ IVA",
      description: "Para producciones con m\xFAltiples canales simult\xE1neos: conciertos, obras de teatro, ceremonias masivas.",
      features: [
        { text: "8+ micr\xF3fonos multicanal", included: true },
        { text: "Tipos seg\xFAn necesidad del evento", included: true },
        { text: "Rack de sistemas inal\xE1mbricos pro", included: true },
        { text: "Ingeniero de audio FOH dedicado", included: true },
        { text: "Visita t\xE9cnica previa incluida", included: true },
        { text: "Mezcla en vivo multicanal", included: true },
        { text: "Ideal: conciertos, producciones TV", included: true },
        { text: "Transmisi\xF3n en vivo compatible", included: true }
      ],
      ctaLabel: "Cotizar producci\xF3n",
      ctaHref: "/contacto/"
    }
  ] })} </div> </section> <section class="faq-section"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Preguntas sobre Renta de Micr\xF3fonos", "subtitle": "Todo lo que necesitas saber antes de contratar micr\xF3fonos para tu evento.", "paragraph1": "Si tu duda no est\xE1 aqu\xED, escr\xEDbenos por WhatsApp y te respondemos en minutos.", "paragraph2": "M\xE1s de 3,000 eventos y +30 a\xF1os de experiencia en audio profesional nos respaldan." })} </div> ${renderComponent($$result2, "FaqSection", $$FaqSection, { "items": [
    { question: "\xBFQu\xE9 tipo de micr\xF3fonos incluyen en la renta?", answer: "Contamos con tres tipos: micr\xF3fonos de mano inal\xE1mbricos Shure para brindis, discursos y cantos; micr\xF3fonos lavalier (de solapa) para celebrantes, sacerdotes y presentadores; y diademas para animadores, actores y oradores que necesitan manos libres. Todos son de marca Shure o Sennheiser." },
    { question: "\xBFLos micr\xF3fonos tienen riesgo de interferencias?", answer: "No. Usamos micr\xF3fonos de sistemas de frecuencia profesional UHF y Digital que operan en frecuencias libres de interferencia. El t\xE9cnico de REDEIL hace un escaneo del espectro antes del evento para garantizar se\xF1al limpia sin ruido durante toda la celebraci\xF3n." },
    { question: "\xBFCu\xE1ntos micr\xF3fonos necesito para mi boda?", answer: "Para una boda est\xE1ndar recomendamos m\xEDnimo 2 micr\xF3fonos de mano (uno para los votos, uno para el DJ/animador) y un lavalier para el sacerdote o juez en la ceremonia. Para bodas con brindis m\xFAltiples, presentaciones de padrinos y colocaci\xF3n de arras, 4 micr\xF3fonos son m\xE1s c\xF3modos." },
    { question: "\xBFEl t\xE9cnico de audio viene incluido con la renta de micr\xF3fonos?", answer: "S\xED. La renta de micr\xF3fonos siempre incluye un t\xE9cnico de audio que configura el sistema, realiza pruebas de sonido previas al evento y opera los niveles durante la ceremonia o presentaci\xF3n. No se renta el micr\xF3fono solo sin soporte t\xE9cnico." },
    { question: "\xBFLos micr\xF3fonos funcionan con cualquier sistema de bocinas?", answer: "S\xED. Los micr\xF3fonos inal\xE1mbricos se conectan a la mezcladora, que a su vez va a cualquier sistema de bocinas. Funcionan con nuestro equipo REDEIL o con el sistema de audio que ya tenga el venue. Si tienes bocinas propias o del venue, llevamos solo el sistema inal\xE1mbrico." },
    { question: "\xBFPuedo rentar micr\xF3fonos sin contratar el sistema de bocinas completo?", answer: "S\xED. Rentamos micr\xF3fonos como servicio independiente o como complemento al sistema de audio del venue. Llevamos el sistema inal\xE1mbrico completo (transmisor + receptor + mezcladora) para conectar a cualquier bocina existente. El t\xE9cnico se encarga de la integraci\xF3n." }
  ] })} </section> <section class="services-section services-alt"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Completa tu Sistema de Audio", "subtitle": "Los micr\xF3fonos son parte del sistema. El audio completo lo hace perfecto.", "paragraph1": "Un micr\xF3fono profesional sin bocinas profesionales no da el resultado esperado. Y al rev\xE9s tambi\xE9n. En REDEIL rentamos el sistema de audio completo o cada componente por separado seg\xFAn lo que necesites.", "paragraph2": "Cu\xE9ntanos tu evento completo y te cotizamos todo el audio de una vez, con precio especial por paquete." })} <div class="services-grid"> ${serviciosRelacionados.map((s) => renderTemplate`${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "title": s.title, "image": s.image, "alt": s.alt, "description": s.description, "link": s.link })}`)} </div> </div> </section> <section class="cta-section"> <div class="container"> <div class="cta-content"> <h2>¿Listo para que tu evento se escuche como debe?</h2> <p>Cuéntanos el tipo de evento, el número de micrófonos que necesitas y el venue. Te cotizamos en minutos.</p> <div class="cta-buttons"> <a href="/contacto/" class="btn btn-whatsapp btn-lg">Cotiza por WhatsApp</a> <a href="tel:+525530682988" class="btn btn-primary btn-lg">Llámanos — 55 3068 2988</a> </div> </div> </div> </section> ` })}`;
}, "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/pages/servicios/microfonos.astro", void 0);

const $$file = "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/pages/servicios/microfonos.astro";
const $$url = "/servicios/microfonos";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Microfonos,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
