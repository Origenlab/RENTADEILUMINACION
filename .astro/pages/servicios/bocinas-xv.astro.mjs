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

const $$BocinasXv = createComponent(($$result, $$props, $$slots) => {
  const title = "DJ y Bocinas para XV A\xF1os en CDMX | REDEIL";
  const description = "DJ profesional + audio JBL para XV a\xF1os en CDMX. Vals, coreograf\xEDa y hora loca con repertorio adaptado. Desde $4,500 + IVA.";
  const canonical = "https://rentadeiluminacion.com/servicios/bocinas-xv/";
  const schemaMarkup = JSON.stringify([
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "DJ y Audio Profesional para XV A\xF1os",
      "provider": {
        "@type": "LocalBusiness",
        "name": "REDEIL",
        "url": "https://rentadeiluminacion.com",
        "telephone": "+525530682988",
        "address": { "@type": "PostalAddress", "addressLocality": "Ciudad de M\xE9xico", "addressRegion": "CDMX", "addressCountry": "MX" }
      },
      "description": "DJ profesional y audio JBL para XV a\xF1os en CDMX. Vals con pap\xE1, coreograf\xEDa con chambelanes, hora loca. Repertorio adaptado a quincea\xF1eras.",
      "areaServed": [{ "@type": "City", "name": "Ciudad de M\xE9xico" }, { "@type": "State", "name": "Estado de M\xE9xico" }],
      "serviceType": "DJ y Audio para XV A\xF1os",
      "priceRange": "$$"
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "\xBFEl DJ conoce el protocolo de XV a\xF1os?", "acceptedAnswer": { "@type": "Answer", "text": "S\xED. Nuestros DJs llevan a\xF1os en XV a\xF1os y conocen la secuencia completa: entrada, vals con pap\xE1, cambio de zapatillas, vals con chambelanes, hora loca, brindis. Coordinan con el MC y el core\xF3grafo para que cada momento tenga su canci\xF3n exacta." } },
        { "@type": "Question", "name": "\xBFEl DJ coordina con el core\xF3grafo de los chambelanes?", "acceptedAnswer": { "@type": "Answer", "text": "S\xED, siempre. El DJ necesita las canciones exactas de la coreograf\xEDa, los tiempos de entrada y las se\xF1ales de cambio. Se re\xFAne con el core\xF3grafo antes del evento para ensayar la secuencia." } },
        { "@type": "Question", "name": "\xBFCu\xE1nto dura el servicio de DJ para XV a\xF1os?", "acceptedAnswer": { "@type": "Answer", "text": "El paquete est\xE1ndar cubre 6 horas \u2014 desde el inicio de la recepci\xF3n hasta la fiesta. Para eventos m\xE1s largos o con ceremonia religiosa antes, ajustamos las horas y el precio." } },
        { "@type": "Question", "name": "\xBFQu\xE9 g\xE9neros musicales maneja para XV a\xF1os?", "acceptedAnswer": { "@type": "Answer", "text": "De todo: desde valses cl\xE1sicos y boleros para el momento con pap\xE1, hasta reggaet\xF3n, electr\xF3nica, cumbia y pop para la hora loca. El DJ adapta el repertorio a lo que le gusta a la quincea\xF1era y a lo que bailan los invitados." } },
        { "@type": "Question", "name": "\xBFIncluye micr\xF3fonos para el brindis?", "acceptedAnswer": { "@type": "Answer", "text": "S\xED. Todos los paquetes incluyen micr\xF3fonos Shure inal\xE1mbricos para brindis, discursos y el MC. El t\xE9cnico se asegura de que cada persona que hable se escuche claro." } },
        { "@type": "Question", "name": "\xBFSe puede combinar con luces ne\xF3n o UV?", "acceptedAnswer": { "@type": "Answer", "text": "S\xED, es la tendencia m\xE1s fuerte en XV a\xF1os. DJ + luces UV para glow party. Armamos paquetes combinados de audio + iluminaci\xF3n ne\xF3n con precio especial." } }
      ]
    }
  ]);
  const serviciosRelacionados = [
    { title: "Luces Ne\xF3n y UV", image: "/img/luces-neon/renta-luces-neon-glow-party-celebracion-neon-300w.avif", alt: "Glow party con luces ne\xF3n UV para XV a\xF1os", description: "La tendencia en XV a\xF1os: glow party con UV. DJ + luces ne\xF3n = la fiesta que todos van a recordar.", link: "/servicios/luces-neon/" },
    { title: "Seguidor de Luz", image: "/img/seguidor/renta-luz-seguidor-boda-primer-baile-hmi-1200w-300w.avif", alt: "Spotlight para vals de quincea\xF1era", description: "Spotlight siguiendo a la quincea\xF1era en el vals con pap\xE1 y en la coreograf\xEDa. El momento m\xE1s emotivo.", link: "/servicios/seguidor/" },
    { title: "Humo Bajo", image: "/img/humo-bajo/efecto-nubes-piso-boda-jardin-400w.avif", alt: "Humo bajo para vals de XV a\xF1os", description: "La quincea\xF1era bailando sobre nubes con sus chambelanes. El efecto que hace llorar a las mam\xE1s.", link: "/servicios/humo-bajo/" },
    { title: "Confeti", image: "/img/maquina-de-papelitos/confeti-dorado-primer-baile-novios-romantico-400w.avif", alt: "Confeti en fiesta de XV a\xF1os", description: "Explosi\xF3n de confeti en el momento de la hora loca. El momento m\xE1s fotografiado despu\xE9s del vals.", link: "/servicios/confeti/" }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "canonical": canonical, "schemaMarkup": schemaMarkup }, { "breadcrumbs": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "breadcrumbs" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Breadcrumbs", $$Breadcrumbs, { "items": [
    { label: "Inicio", href: "/" },
    { label: "Sonido y DJ", href: "/servicios/sonido/" },
    { label: "XV A\xF1os" }
  ] })} ` })}`, "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, { "title": "DJ y Audio Profesional para XV A\xF1os en CDMX", "subtitle": "DJ + bocinas JBL + coordinaci\xF3n completa para vals, coreograf\xEDa y hora loca. Desde $4,500 + IVA.", "introParagraph1": "El audio de XV a\xF1os no es como el de una fiesta normal. Tiene momentos donde el timing es al segundo: la coreograf\xEDa de chambelanes tiene cambios de canci\xF3n que si el DJ los da 2 segundos tarde, la formaci\xF3n se descuadra. El vals con pap\xE1 arranca suave y si el volumen est\xE1 muy fuerte o muy bajo, se pierde el momento. La hora loca sube de golpe y necesita potencia que no distorsione. Nuestros DJs llevan a\xF1os en XV a\xF1os de CDMX \u2014 conocen la secuencia completa de memoria.", "introParagraph2": "Lo que hace la diferencia es la coordinaci\xF3n previa con el core\xF3grafo. El DJ necesita las canciones exactas de la coreograf\xEDa, los tiempos de cada cambio y las se\xF1ales de entrada. Si el core\xF3grafo ensay\xF3 con una versi\xF3n de la canci\xF3n y el DJ pone otra, el tempo no coincide y la coreograf\xEDa se ve mal. Por eso se re\xFAnen antes del evento \u2014 idealmente en un ensayo \u2014 para practicar la secuencia musical completa. Consola <strong>Pioneer</strong>, bocinas <strong>JBL</strong>, subwoofers, micr\xF3fonos <strong>Shure</strong> para brindis y MC." })} ${renderComponent($$result2, "CtaBar", $$CtaBar, { "headline": "\xBFQu\xE9 necesitas para los XV a\xF1os?", "items": [
    { label: "DJ Profesional", href: "/servicios/bocinas-djs/", icon: "sonido" },
    { label: "Glow Party UV", href: "/servicios/luces-neon/", icon: "iluminacion" },
    { label: "Todo el sonido", href: "/servicios/sonido/", icon: "sonido" },
    { label: "Cotiza Gratis", href: "/contacto/", icon: "cotizar" }
  ] })} ${maybeRenderHead()}<section class="services-section"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "XV a\xF1os reales con audio profesional", "subtitle": "Vals, chambelanes, hora loca \u2014 cada momento suena como debe.", "paragraph1": "El vals con pap\xE1 es el momento m\xE1s delicado en audio. Si el volumen est\xE1 muy alto, la canci\xF3n se impone sobre el momento. Si est\xE1 muy bajo, la gente habla encima y se pierde. El t\xE9cnico tiene el fader listo para ajustar en tiempo real seg\xFAn la reacci\xF3n del sal\xF3n.", "paragraph2": "La coreograf\xEDa de chambelanes es lo opuesto: necesita potencia constante y cambios de canci\xF3n al segundo. El DJ tiene la secuencia pre-cargada y solo da play en el momento exacto que el core\xF3grafo levanta la mano." })} ${renderComponent($$result2, "Gallery4x4", $$Gallery4X4, { "images": [
    { src: "/img/bocinas-xv/renta-bocinas-xv-anos-baile-chambelanes-dorados-jbl.avif", alt: "Chambelanes bailando con bocinas JBL en XV a\xF1os" },
    { src: "/img/bocinas-xv/renta-bocinas-xv-anos-baile-chambelanes-vestido-rosa.avif", alt: "Quincea\xF1era con vestido rosa bailando con chambelanes" },
    { src: "/img/bocinas-xv/renta-bocinas-xv-anos-coreografia-chambelanes-escenario.avif", alt: "Coreograf\xEDa de chambelanes en escenario de XV a\xF1os" },
    { src: "/img/bocinas-xv/renta-bocinas-xv-anos-coronacion-tiara-flores-bocinas.avif", alt: "Coronaci\xF3n con tiara y flores en XV a\xF1os" },
    { src: "/img/bocinas-xv/renta-bocinas-xv-anos-baile-sorpresa-chambelanes-dj.avif", alt: "Baile sorpresa de chambelanes con DJ" },
    { src: "/img/bocinas-xv/renta-bocinas-xv-anos-baile-sorpresa-escenario-monitores.avif", alt: "Baile sorpresa en escenario con monitores" },
    { src: "/img/bocinas-xv/renta-bocinas-xv-anos-coreografia-vestido-magenta-jbl.avif", alt: "Coreograf\xEDa con vestido magenta y bocinas JBL" },
    { src: "/img/bocinas-xv/renta-bocinas-xv-anos-baile-madre-hija-dj-flores.avif", alt: "Baile madre e hija con DJ y flores" },
    { src: "/img/bocinas-xv/renta-bocinas-xv-anos-baile-madre-hija-dj-rosa.avif", alt: "Baile emotivo madre e hija con iluminaci\xF3n rosa" },
    { src: "/img/bocinas-xv/renta-bocinas-xv-anos-vals-padre-hija-dj-salon-300w.avif", alt: "Vals padre e hija con DJ en sal\xF3n" },
    { src: "/img/bocinas-xv/renta-bocinas-xv-anos-fiesta-line-array-qsc-dj.avif", alt: "Fiesta de XV a\xF1os con line array QSC y DJ" },
    { src: "/img/bocinas-xv/renta-bocinas-xv-anos-entrada-escalera-humo-bajo.avif", alt: "Entrada de quincea\xF1era por escalera con humo bajo" },
    { src: "/img/bocinas-xv/renta-bocinas-xv-anos-fiesta-pista-baile-line-array.avif", alt: "Pista de baile con line array en XV a\xF1os" },
    { src: "/img/bocinas-xv/renta-bocinas-xv-anos-vals-padre-hija-qsc-salon.avif", alt: "Vals padre e hija con bocinas QSC en sal\xF3n" },
    { src: "/img/bocinas-xv/renta-bocinas-xv-anos-show-baile-teatro-monitores.avif", alt: "Show de baile con monitores de escenario" },
    { src: "/img/bocinas-xv/renta-bocinas-xv-anos-fiesta-invitados-qsc-luces.avif", alt: "Fiesta con invitados bailando y bocinas QSC con luces" }
  ] })} </div> </section> <section class="services-section services-alt"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Paquetes de Audio y DJ para XV A\xF1os", "subtitle": "Desde audio solo hasta producci\xF3n completa con DJ, luces y efectos.", "paragraph1": "Cada paquete incluye equipo de audio dimensionado al sal\xF3n, micr\xF3fonos Shure inal\xE1mbricos, t\xE9cnico de audio, transporte, montaje y desmontaje. Los paquetes con DJ incluyen consola Pioneer y coordinaci\xF3n con MC y core\xF3grafo.", "paragraph2": "\xBFQuieres agregar luces ne\xF3n, humo bajo o confeti? Armamos el paquete completo para XV a\xF1os con precio especial." })} ${renderComponent($$result2, "PricingCards", $$PricingCards, { "packages": [
    {
      name: "Solo Audio \u2014 sin DJ",
      price: "$4,500",
      priceNote: "+ IVA",
      description: "Audio profesional con t\xE9cnico. Conectas tu playlist o la del MC. Ideal si ya tienes DJ o m\xFAsico externo.",
      features: [
        { text: "4 bocinas JBL PRX", included: true },
        { text: "2 subwoofers", included: true },
        { text: "4 micr\xF3fonos Shure inal\xE1mbricos", included: true },
        { text: "Mezcladora + conexi\xF3n BT/AUX", included: true },
        { text: "T\xE9cnico de audio incluido", included: true },
        { text: "Transporte + montaje + desmontaje", included: true },
        { text: "DJ profesional", included: false },
        { text: "Coordinaci\xF3n core\xF3grafo", included: false }
      ],
      ctaLabel: "Cotizar solo audio",
      ctaHref: "/servicios/bocinas-xv/paquete-xv-basico/"
    },
    {
      name: "XV con DJ \u2014 6 horas",
      price: "$8,000",
      priceNote: "+ IVA",
      badge: "M\xE1s popular",
      highlight: true,
      description: "El m\xE1s pedido. DJ + audio completo + coordinaci\xF3n con MC y core\xF3grafo. Cubre vals, chambelanes y hora loca.",
      features: [
        { text: "DJ con consola Pioneer DDJ", included: true },
        { text: "4-6 bocinas + 2 subwoofers", included: true },
        { text: "4 micr\xF3fonos Shure inal\xE1mbricos", included: true },
        { text: "Coordinaci\xF3n con MC y core\xF3grafo", included: true },
        { text: "Repertorio personalizado", included: true },
        { text: "6 horas de operaci\xF3n", included: true },
        { text: "Ideal para: XV a\xF1os completos", included: true },
        { text: "Iluminaci\xF3n incluida", included: false }
      ],
      ctaLabel: "Cotizar XV con DJ",
      ctaHref: "/servicios/bocinas-xv/paquete-xv-completo/"
    },
    {
      name: "XV Premium \u2014 DJ + cabina + luces",
      price: "$14,000",
      priceNote: "+ IVA",
      description: "DJ + cabina decorativa + PAR LED de colores en la pista. La quincea\xF1era tiene su propia discoteca.",
      features: [
        { text: "DJ con consola + cabina decorativa", included: true },
        { text: "Equipo completo para 200+ personas", included: true },
        { text: "8 PAR LED de color en la pista", included: true },
        { text: "Coordinaci\xF3n completa con MC", included: true },
        { text: "8 horas de operaci\xF3n", included: true },
        { text: "Ideal para: XV a\xF1os premium", included: true },
        { text: "Humo bajo para vals", included: false },
        { text: "Cabezas m\xF3viles", included: false }
      ],
      ctaLabel: "Cotizar XV premium",
      ctaHref: "/servicios/bocinas-xv/paquete-xv-dj-luces/"
    },
    {
      name: "XV Producci\xF3n Total",
      price: "$22,000",
      priceNote: "+ IVA",
      description: "DJ + line array + cabezas m\xF3viles + humo bajo + luces UV. La producci\xF3n completa que hace historia.",
      features: [
        { text: "DJ profesional toda la noche", included: true },
        { text: "Line array para salones grandes", included: true },
        { text: "8 cabezas m\xF3viles con operador DMX", included: true },
        { text: "Humo bajo para el vals", included: true },
        { text: "Barras UV para glow party", included: true },
        { text: "Seguidor de luz para la quincea\xF1era", included: true },
        { text: "Coordinaci\xF3n total producci\xF3n", included: true },
        { text: "Visita previa al venue", included: true }
      ],
      ctaLabel: "Cotizar producci\xF3n total",
      ctaHref: "/servicios/bocinas-xv/paquete-xv-produccion/"
    }
  ] })} </div> </section> <section class="faq-section"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Preguntas sobre Audio para XV A\xF1os", "subtitle": "Lo que las familias preguntan antes de contratar.", "paragraph1": "Si tu duda no est\xE1 aqu\xED, m\xE1ndanos un mensaje por WhatsApp.", "paragraph2": "Cada XV a\xF1os son diferentes \u2014 te asesoramos seg\xFAn el sal\xF3n, los invitados y lo que quiere la festejada." })} </div> ${renderComponent($$result2, "FaqSection", $$FaqSection, { "items": [
    { question: "\xBFEl DJ se coordina con el core\xF3grafo?", answer: "Siempre. Es lo primero que hacemos. El DJ necesita las canciones exactas de la coreograf\xEDa, la versi\xF3n espec\xEDfica (no sirve cualquier versi\xF3n porque cambia el tempo), los tiempos de entrada y las se\xF1ales de cambio. Si el core\xF3grafo puede hacer un ensayo con el DJ presente, mejor. Si no, se coordinan por WhatsApp con las canciones y los tiempos." },
    { question: "\xBFQu\xE9 pasa si la quincea\xF1era quiere K-pop y los adultos quieren cumbia?", answer: "Es lo normal en XV a\xF1os. La coreograf\xEDa y la hora loca son de la quincea\xF1era \u2014 ah\xED va lo que ella quiera. Cuando se abre la pista para todos, el DJ mezcla: cumbia, salsa, reggaet\xF3n, lo que la pista pida. La playlist se arma antes con los gustos de la festejada y del p\xFAblico que va a estar." },
    { question: "\xBFCu\xE1nto dura el servicio?", answer: "El paquete est\xE1ndar cubre 6 horas. Para XV a\xF1os con misa o ceremonia antes, ajustamos las horas. La mayor\xEDa duran 5-7 horas desde que llegan los invitados. Si la fiesta se extiende, cobramos la hora extra por separado." },
    { question: "\xBFIncluye micr\xF3fonos para los brindis?", answer: "S\xED. Micr\xF3fonos Shure inal\xE1mbricos para el MC, el brindis del pap\xE1, el de la mam\xE1 y cualquier discurso. El t\xE9cnico ajusta nivel para cada persona \u2014 el pap\xE1 nervioso que habla bajito necesita m\xE1s ganancia que el MC que grita." },
    { question: "\xBFSe puede hacer glow party?", answer: "S\xED. Es lo que m\xE1s piden para XV a\xF1os. DJ + barras UV + accesorios fluorescentes (pulseras, pintura facial). La transici\xF3n es: vals emotivo con luces c\xE1lidas \u2192 se apagan las luces \u2192 se encienden las UV \u2192 glow party. El cambio genera una reacci\xF3n fuerte." },
    { question: "\xBFQu\xE9 pasa si la canci\xF3n del vals no est\xE1 en buena calidad?", answer: "Lo revisamos antes. Si la quincea\xF1era quiere una canci\xF3n que solo existe en YouTube a baja calidad, se escucha mal en bocinas profesionales. El DJ busca la versi\xF3n en alta calidad o sugiere una alternativa similar. Eso se resuelve en la reuni\xF3n previa, no el d\xEDa del evento." }
  ] })} </section> <section class="services-section services-alt"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Humo bajo para el vals + UV para la hora loca", "subtitle": "Dos momentos, dos ambientes, misma producci\xF3n.", "paragraph1": "La combinaci\xF3n m\xE1s pedida para XV a\xF1os: humo bajo durante el vals con pap\xE1 (la quincea\xF1era bailando sobre nubes con spotlight encima) y despu\xE9s barras UV para la glow party de la hora loca. El cambio de ambiente es total y la transici\xF3n es limpia porque todo lo controla el mismo equipo.", "paragraph2": "Si el presupuesto da para cabezas m\xF3viles, los beams programados para la coreograf\xEDa de chambelanes suben el nivel a producci\xF3n de concierto." })} <div class="services-grid"> ${serviciosRelacionados.map((s) => renderTemplate`${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "title": s.title, "image": s.image, "alt": s.alt, "description": s.description, "link": s.link })}`)} </div> </div> </section> <section class="cta-section"> <div class="container"> <div class="cta-content"> <h2>¿Lista para los XV años que tu hija merece?</h2> <p>Cuéntanos la fecha, el salón, el número de invitados y qué quiere la festejada. Le armamos la producción perfecta.</p> <div class="cta-buttons"> <a href="/contacto/" class="btn btn-whatsapp btn-lg">Cotiza por WhatsApp</a> <a href="tel:+525530682988" class="btn btn-primary btn-lg">Llámanos — 55 3068 2988</a> </div> </div> </div> </section> ` })}`;
}, "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/pages/servicios/bocinas-xv.astro", void 0);

const $$file = "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/pages/servicios/bocinas-xv.astro";
const $$url = "/servicios/bocinas-xv";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$BocinasXv,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
