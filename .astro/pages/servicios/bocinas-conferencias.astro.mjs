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

const $$BocinasConferencias = createComponent(($$result, $$props, $$slots) => {
  const title = "Renta de Audio para Conferencias en CDMX | REDEIL";
  const description = "Bocinas, micr\xF3fonos Shure y mezcladoras Yamaha para conferencias y presentaciones en CDMX. Sonido cristalino. Desde $3,500 + IVA.";
  const canonical = "https://rentadeiluminacion.com/servicios/bocinas-conferencias/";
  const schemaMarkup = JSON.stringify([
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Renta de Audio para Conferencias y Presentaciones",
      "provider": {
        "@type": "LocalBusiness",
        "name": "REDEIL",
        "url": "https://rentadeiluminacion.com",
        "telephone": "+525530682988",
        "address": { "@type": "PostalAddress", "addressLocality": "Ciudad de M\xE9xico", "addressRegion": "CDMX", "addressCountry": "MX" }
      },
      "description": "Audio profesional para conferencias, seminarios y presentaciones corporativas en CDMX. Micr\xF3fonos Shure, bocinas Bose/JBL y mezcladoras Yamaha.",
      "areaServed": [{ "@type": "City", "name": "Ciudad de M\xE9xico" }, { "@type": "State", "name": "Estado de M\xE9xico" }],
      "serviceType": "Audio para Conferencias",
      "priceRange": "$$"
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "\xBFEl audio funciona con la presentaci\xF3n de PowerPoint?", "acceptedAnswer": { "@type": "Answer", "text": "S\xED. Conectamos la laptop del ponente a la mezcladora para que el audio de videos y presentaciones salga por las bocinas con calidad profesional. Tambi\xE9n conectamos el proyector si lo necesitas." } },
        { "@type": "Question", "name": "\xBFQu\xE9 tipo de micr\xF3fonos usan para conferencias?", "acceptedAnswer": { "@type": "Answer", "text": "Micr\xF3fonos Shure profesionales. Para ponentes: solapa (lavalier) o diadema. Para paneles: micr\xF3fonos de cuello de ganso en la mesa. Para preguntas del p\xFAblico: micr\xF3fono de mano inal\xE1mbrico. Todo seg\xFAn el formato del evento." } },
        { "@type": "Question", "name": "\xBFSe puede grabar el audio de la conferencia?", "acceptedAnswer": { "@type": "Answer", "text": "S\xED. Sacamos una l\xEDnea de audio directo de la mezcladora para grabaci\xF3n. Tambi\xE9n podemos enviar audio limpio al streaming si la conferencia es h\xEDbrida (presencial + online)." } },
        { "@type": "Question", "name": "\xBFFunciona en salones de hotel?", "acceptedAnswer": { "@type": "Answer", "text": "S\xED. Trabajamos frecuentemente en hoteles de CDMX \u2014 Camino Real, Hilton, Marriott, Fiesta Americana. Conocemos las restricciones de montaje de cada cadena hotelera y nos adaptamos a sus tiempos." } },
        { "@type": "Question", "name": "\xBFCu\xE1nto antes deben llegar al venue?", "acceptedAnswer": { "@type": "Answer", "text": "2-3 horas antes. Montaje, ecualizaci\xF3n al sal\xF3n, prueba de cada micr\xF3fono con el ponente y coordinaci\xF3n con el equipo de producci\xF3n. Todo probado antes de que llegue la audiencia." } },
        { "@type": "Question", "name": "\xBFCubren conferencias h\xEDbridas (presencial + streaming)?", "acceptedAnswer": { "@type": "Answer", "text": "S\xED. Sacamos audio limpio de la mezcladora para la plataforma de streaming (Zoom, Teams, YouTube Live). El audio llega n\xEDtido tanto a los presentes como a los conectados remotamente." } }
      ]
    }
  ]);
  const serviciosRelacionados = [
    { title: "Audio para Eventos", image: "/img/bocinas/renta-bocinas-line-array-concierto-400w.avif", alt: "Audio profesional para eventos", description: "Si tu conferencia incluye una cena de gala o coctel, combinamos audio de conferencia + audio de evento.", link: "/servicios/bocinas/" },
    { title: "Gobos con Logo", image: "/img/gobos/renta-gobo-monograma-pista-baile-300w.avif", alt: "Proyecci\xF3n de logo corporativo", description: "Proyecta el logo de tu empresa en la pared del escenario. Branding visual que complementa el audio.", link: "/servicios/gobos/" },
    { title: "Seguidor de Luz", image: "/img/seguidor/renta-luz-seguidor-boda-primer-baile-hmi-1200w-300w.avif", alt: "Spotlight para ponente", description: "Spotlight profesional siguiendo al ponente en el escenario. El complemento visual para conferencias de gala.", link: "/servicios/seguidor/" },
    { title: "City Light", image: "/img/city-light/iluminacion-profesional-bodas-cdmx-400w.avif", alt: "Iluminaci\xF3n para sal\xF3n", description: "PAR LED para ambientar el sal\xF3n de la conferencia. Colores corporativos en las paredes.", link: "/servicios/city-light/" }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "canonical": canonical, "schemaMarkup": schemaMarkup }, { "breadcrumbs": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "breadcrumbs" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Breadcrumbs", $$Breadcrumbs, { "items": [
    { label: "Inicio", href: "/" },
    { label: "Sonido y DJ", href: "/servicios/sonido/" },
    { label: "Audio para Conferencias" }
  ] })} ` })}`, "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, { "title": "Renta de Audio para Conferencias y Presentaciones en CDMX", "subtitle": "Sonido cristalino para que cada palabra se escuche. Micr\xF3fonos Shure, bocinas Bose/JBL, mezcladoras Yamaha. Desde $3,500 + IVA.", "introParagraph1": "El audio de conferencia se ecualiza para voz, no para m\xFAsica. Las frecuencias de la voz humana est\xE1n entre 300Hz y 3kHz \u2014 el t\xE9cnico corta todo lo que est\xE1 fuera de ese rango y aplica compresi\xF3n para que el ponente que habla suave y el que habla fuerte se escuchen al mismo volumen. Con audio gen\xE9rico de fiesta, el ponente suave se pierde y el fuerte distorsiona. Usamos <strong>Bose</strong>, <strong>JBL</strong> de l\xEDnea y micr\xF3fonos <strong>Shure</strong> profesionales \u2014 el mismo nivel que los congresos de CDMX.", "introParagraph2": "El t\xE9cnico llega 2-3 horas antes, monta, ecualiza al sal\xF3n espec\xEDfico (un sal\xF3n de hotel con alfombra absorbe diferente que un auditorio con piso de m\xE1rmol) y hace prueba de micr\xF3fono con cada ponente. Durante la conferencia opera la <strong>Yamaha TF</strong> en vivo: ajusta niveles seg\xFAn qui\xE9n habla, silencia micr\xF3fonos cuando no se usan y env\xEDa audio limpio para grabaci\xF3n o streaming. El problema m\xE1s com\xFAn en conferencias: feedback (el chirrido). Pasa cuando el micr\xF3fono capta el audio de las bocinas. El t\xE9cnico posiciona las bocinas y ajusta ganancia para que eso no pase." })} ${renderComponent($$result2, "CtaBar", $$CtaBar, { "headline": "\xBFQu\xE9 formato tiene tu conferencia?", "items": [
    { label: "Audio Eventos", href: "/servicios/bocinas/", icon: "sonido" },
    { label: "Gobos con Logo", href: "/servicios/gobos/", icon: "iluminacion" },
    { label: "Todo el sonido", href: "/servicios/sonido/", icon: "sonido" },
    { label: "Cotiza Gratis", href: "/contacto/", icon: "cotizar" }
  ] })} ${maybeRenderHead()}<section class="services-section"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Audio para conferencias y eventos corporativos", "subtitle": "Cada palabra del ponente se escucha clara hasta la \xFAltima fila.", "paragraph1": "El formato importa para elegir los micr\xF3fonos. Ponente solo en escenario: solapa o diadema (manos libres para la presentaci\xF3n). Panel de 4 personas en mesa: cuello de ganso, uno por persona. Preguntas del p\xFAblico: micr\xF3fono de mano inal\xE1mbrico que pasa entre las filas. Cada formato tiene su configuraci\xF3n.", "paragraph2": "Para conferencias h\xEDbridas (presencial + streaming), sacamos una l\xEDnea de audio limpio de la mezcladora directo a la plataforma. El audio que llega a Zoom o Teams es el de la mezcladora, no el que capta un micr\xF3fono de laptop al fondo del sal\xF3n." })} ${renderComponent($$result2, "Gallery4x4", $$Gallery4X4, { "images": [
    { src: "/img/bocinas-conferencias/alquiler-equipo-sonido-conferencias-empresas.avif", alt: "Equipo de sonido para conferencia empresarial" },
    { src: "/img/bocinas-conferencias/alquiler-sonido-profesional-conferencias-cdmx.avif", alt: "Sonido profesional para conferencia en CDMX" },
    { src: "/img/bocinas-conferencias/renta-bocinas-conferencias-empresariales-profesional.avif", alt: "Bocinas profesionales para conferencia empresarial" },
    { src: "/img/bocinas-conferencias/alquiler-bocinas-para-conferencias-y-seminarios.avif", alt: "Bocinas para conferencias y seminarios" },
    { src: "/img/bocinas-conferencias/bocinas-en-renta-para-foros-y-paneles.avif", alt: "Bocinas para foros y paneles de discusi\xF3n" },
    { src: "/img/bocinas-conferencias/renta-bocinas-conferencias-hoteles-salones.avif", alt: "Bocinas para conferencia en hotel" },
    { src: "/img/bocinas-conferencias/alquiler-bocinas-conferencias-sala-juntas.avif", alt: "Bocinas para sala de juntas" },
    { src: "/img/bocinas-conferencias/bocinas-en-renta-para-cursos-y-diplomados.avif", alt: "Bocinas para cursos y diplomados" },
    { src: "/img/bocinas-conferencias/alquiler-bocinas-eventos-corporativos-premium.avif", alt: "Audio para evento corporativo premium" },
    { src: "/img/bocinas-conferencias/renta-bocinas-conferencias-lanzamientos-productos.avif", alt: "Audio para lanzamiento de productos" },
    { src: "/img/bocinas-conferencias/alquiler-bocinas-para-ruedas-de-prensa.avif", alt: "Audio para rueda de prensa" },
    { src: "/img/bocinas-conferencias/alquiler-bocinas-para-eventos-institucionales.avif", alt: "Audio para evento institucional" },
    { src: "/img/bocinas-conferencias/bocinas-en-renta-seminarios-y-talleres.avif", alt: "Bocinas para seminarios y talleres" },
    { src: "/img/bocinas-conferencias/alquiler-de-bocinas-exposiciones-ferias.avif", alt: "Audio para exposiciones y ferias" },
    { src: "/img/bocinas-conferencias/renta-bocinas-eventos-corporativos-networking.avif", alt: "Audio para networking corporativo" },
    { src: "/img/bocinas-conferencias/bocinas-en-renta-para-conferencias-ejecutivas.avif", alt: "Bocinas para conferencia ejecutiva" }
  ] })} </div> </section> <section class="services-section services-alt"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Paquetes de Audio para Conferencias", "subtitle": "Desde una sala de juntas hasta un congreso de 1,000 personas.", "paragraph1": "Cada paquete incluye bocinas, micr\xF3fonos Shure profesionales (solapa, diadema o de mano seg\xFAn necesites), mezcladora, t\xE9cnico de audio, transporte, montaje y desmontaje. El t\xE9cnico hace pruebas con cada ponente antes del evento.", "paragraph2": "\xBFTu conferencia es h\xEDbrida con streaming? Incluimos salida de audio limpio para la plataforma online." })} ${renderComponent($$result2, "PricingCards", $$PricingCards, { "packages": [
    {
      name: "Sala de Juntas \u2014 hasta 30",
      price: "$3,500",
      priceNote: "+ IVA",
      description: "Audio para reuniones ejecutivas, capacitaciones y juntas de consejo. Sonido claro y discreto.",
      features: [
        { text: "2 bocinas Bose/JBL compactas", included: true },
        { text: "2 micr\xF3fonos Shure inal\xE1mbricos", included: true },
        { text: "Mezcladora con entrada para laptop", included: true },
        { text: "T\xE9cnico de audio incluido", included: true },
        { text: "Transporte + montaje + desmontaje", included: true },
        { text: "Ideal para: juntas, capacitaciones, salas", included: true },
        { text: "Salida para streaming", included: false },
        { text: "Grabaci\xF3n de audio", included: false }
      ],
      ctaLabel: "Cotizar sala de juntas",
      ctaHref: "/servicios/bocinas-conferencias/paquete-sala-juntas/"
    },
    {
      name: "Conferencia \u2014 hasta 100",
      price: "$6,000",
      priceNote: "+ IVA",
      badge: "M\xE1s popular",
      highlight: true,
      description: "El est\xE1ndar para conferencias empresariales. 4 micr\xF3fonos, salida para streaming y t\xE9cnico dedicado.",
      features: [
        { text: "4 bocinas JBL de l\xEDnea", included: true },
        { text: "4 micr\xF3fonos Shure (solapa + mano)", included: true },
        { text: "Mezcladora Yamaha TF", included: true },
        { text: "Salida de audio para streaming", included: true },
        { text: "T\xE9cnico de audio dedicado", included: true },
        { text: "Transporte + montaje + desmontaje", included: true },
        { text: "Ideal para: conferencias, paneles, seminarios", included: true },
        { text: "Grabaci\xF3n multipista", included: false }
      ],
      ctaLabel: "Cotizar conferencia",
      ctaHref: "/servicios/bocinas-conferencias/paquete-conferencia-salon/"
    },
    {
      name: "Auditorio \u2014 hasta 300",
      price: "$10,000",
      priceNote: "+ IVA",
      description: "Sistema de audio para auditorios y salones grandes. Line array + m\xFAltiples micr\xF3fonos + grabaci\xF3n.",
      features: [
        { text: "Sistema line array JBL/QSC", included: true },
        { text: "6 micr\xF3fonos Shure ULXD", included: true },
        { text: "Mezcladora Yamaha TF + procesador", included: true },
        { text: "Salida streaming + grabaci\xF3n", included: true },
        { text: "T\xE9cnico de audio + asistente", included: true },
        { text: "Monitors de escenario para ponentes", included: true },
        { text: "Ideal para: auditorios, foros, galas", included: true },
        { text: "Ecualizaci\xF3n profesional al espacio", included: true }
      ],
      ctaLabel: "Cotizar auditorio",
      ctaHref: "/servicios/bocinas-conferencias/paquete-auditorio/"
    },
    {
      name: "Congreso \u2014 300+",
      price: "$16,000",
      priceNote: "+ IVA",
      description: "Producci\xF3n de audio completa para congresos, convenciones y eventos de gran escala con grabaci\xF3n multipista.",
      features: [
        { text: "Line array completo + delays", included: true },
        { text: "8+ micr\xF3fonos profesionales", included: true },
        { text: "Sistema de grabaci\xF3n multipista", included: true },
        { text: "Audio para streaming HD", included: true },
        { text: "Ingenier\xEDa de sonido FOH", included: true },
        { text: "Equipo completo de t\xE9cnicos", included: true },
        { text: "Visita t\xE9cnica previa al venue", included: true },
        { text: "Ideal para: congresos, convenciones, expo", included: true }
      ],
      ctaLabel: "Cotizar congreso",
      ctaHref: "/servicios/bocinas-conferencias/paquete-produccion-congreso/"
    }
  ] })} </div> </section> <section class="faq-section"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Preguntas sobre Audio para Conferencias", "subtitle": "Lo que los organizadores preguntan antes de contratar.", "paragraph1": "Si tu duda no est\xE1 aqu\xED, escr\xEDbenos por WhatsApp.", "paragraph2": "Cada conferencia tiene su formato \u2014 te asesoramos seg\xFAn el venue y las necesidades t\xE9cnicas." })} </div> ${renderComponent($$result2, "FaqSection", $$FaqSection, { "items": [
    { question: "\xBFEl audio de mi PowerPoint sale por las bocinas?", answer: "S\xED. Conectamos la laptop a la mezcladora con un splitter HDMI \u2014 la imagen va al proyector y el audio a las bocinas. El volumen de los videos se controla desde la mezcladora, no desde la laptop. As\xED no pasa que un video arranca a todo volumen y asusta a medio sal\xF3n." },
    { question: "\xBFQu\xE9 micr\xF3fonos usan?", answer: "Shure profesionales. Para ponentes: solapa (lavalier) o diadema \u2014 manos libres. Para paneles: cuello de ganso en mesa, uno por persona. Para Q&A: inal\xE1mbrico de mano. El tipo de micr\xF3fono se define seg\xFAn el formato de tu evento." },
    { question: "\xBFSe puede grabar la conferencia?", answer: "S\xED. Sacamos una l\xEDnea de audio directo de la mezcladora en WAV. Para producciones que necesitan editar despu\xE9s, grabaci\xF3n multipista \u2014 cada micr\xF3fono se graba por separado. La calidad es de estudio, no de celular al fondo del sal\xF3n." },
    { question: "\xBFFuncionan para streaming en Zoom o Teams?", answer: "S\xED. Audio limpio de la mezcladora directo a la plataforma. El t\xE9cnico monitorea la se\xF1al que sale al streaming y la que va a las bocinas. Si el audio del streaming se corta (que pasa por problemas de internet del venue), el presencial sigue funcionando." },
    { question: "\xBFTrabajan en hoteles de CDMX?", answer: "Seguido. Camino Real, Hilton, Marriott, Fiesta Americana, W, St. Regis. Cada cadena tiene restricciones diferentes de montaje \u2014 horarios de acceso, zonas de carga, tiempos de desmontaje. Ya conocemos los procedimientos de cada uno." },
    { question: "\xBFHacen prueba de sonido con los ponentes?", answer: "Siempre. 30 minutos antes del inicio probamos cada micr\xF3fono con el ponente asignado. Ajustamos nivel a su tono de voz (no es lo mismo una voz grave que una aguda), le explicamos c\xF3mo usar el micr\xF3fono y verificamos que no haya feedback." }
  ] })} </section> <section class="services-section services-alt"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Audio + gobo del logo + iluminaci\xF3n de escenario", "subtitle": "El combo para conferencias de prensa y lanzamientos.", "paragraph1": "Para conferencias de prensa, el combo es: audio con micr\xF3fonos Shure + gobo del logo proyectado en la pared detr\xE1s del podium + PAR LED en colores corporativos ba\xF1ando el escenario. Los camar\xF3grafos agradecen el fondo porque el logo sale en cada encuadre sin necesidad de un banner f\xEDsico.", "paragraph2": "Para congresos de varios d\xEDas, mantenemos el equipo montado y el t\xE9cnico disponible en cada sesi\xF3n. No hay que montar y desmontar cada d\xEDa." })} <div class="services-grid"> ${serviciosRelacionados.map((s) => renderTemplate`${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "title": s.title, "image": s.image, "alt": s.alt, "description": s.description, "link": s.link })}`)} </div> </div> </section> <section class="cta-section"> <div class="container"> <div class="cta-content"> <h2>¿Tu conferencia necesita sonido profesional?</h2> <p>Mándanos la fecha, el venue, el formato y el número de asistentes. Te cotizamos el equipo exacto en minutos.</p> <div class="cta-buttons"> <a href="/contacto/" class="btn btn-whatsapp btn-lg">Cotiza por WhatsApp</a> <a href="tel:+525530682988" class="btn btn-primary btn-lg">Llámanos — 55 3068 2988</a> </div> </div> </div> </section> ` })}`;
}, "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/pages/servicios/bocinas-conferencias.astro", void 0);

const $$file = "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/pages/servicios/bocinas-conferencias.astro";
const $$url = "/servicios/bocinas-conferencias";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$BocinasConferencias,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
