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

const $$BocinasDjs = createComponent(($$result, $$props, $$slots) => {
  const title = "DJ para Fiestas, Bodas y Eventos en CDMX | REDEIL";
  const description = "DJ profesional con consola Pioneer y repertorio adaptado para bodas, XV a\xF1os y fiestas en CDMX. Equipo de sonido incluido. Desde $5,000 + IVA.";
  const canonical = "https://rentadeiluminacion.com/servicios/bocinas-djs/";
  const schemaMarkup = JSON.stringify([
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "DJ Profesional para Fiestas y Bodas",
      "provider": {
        "@type": "LocalBusiness",
        "name": "REDEIL",
        "url": "https://rentadeiluminacion.com",
        "telephone": "+525530682988",
        "address": { "@type": "PostalAddress", "addressLocality": "Ciudad de M\xE9xico", "addressRegion": "CDMX", "addressCountry": "MX" }
      },
      "description": "Servicio profesional de DJ para bodas, XV a\xF1os y fiestas en CDMX. Consola Pioneer, equipo de sonido JBL y repertorio adaptado a cada evento.",
      "areaServed": [{ "@type": "City", "name": "Ciudad de M\xE9xico" }, { "@type": "State", "name": "Estado de M\xE9xico" }],
      "serviceType": "DJ para Eventos",
      "priceRange": "$$"
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "\xBFEl DJ trae su propio equipo de sonido?", "acceptedAnswer": { "@type": "Answer", "text": "S\xED. Nuestro DJ llega con consola Pioneer DDJ, bocinas JBL/QSC, subwoofer, micr\xF3fonos inal\xE1mbricos y todo lo necesario. Si ya tienes equipo contratado, tambi\xE9n se adapta." } },
        { "@type": "Question", "name": "\xBFPuedo pedir canciones espec\xEDficas?", "acceptedAnswer": { "@type": "Answer", "text": "S\xED. Antes del evento te pedimos una lista de canciones imprescindibles y otra de canciones prohibidas. El DJ arma la playlist alrededor de tus gustos y lee al p\xFAblico en vivo." } },
        { "@type": "Question", "name": "\xBFEl DJ coordina con el maestro de ceremonias?", "acceptedAnswer": { "@type": "Answer", "text": "Siempre. El DJ se re\xFAne con el MC antes del evento para coordinar los momentos clave: entrada, vals, brindis, hora loca, ramo. Cada momento tiene su canci\xF3n y su se\xF1al." } },
        { "@type": "Question", "name": "\xBFQu\xE9 g\xE9neros musicales maneja?", "acceptedAnswer": { "@type": "Answer", "text": "Todos. Desde boleros y cumbias para bodas tradicionales, hasta reggaet\xF3n, electr\xF3nica y pop para la hora loca. Tambi\xE9n manejan rock cl\xE1sico, salsa, bachata y sets lounge para coctel." } },
        { "@type": "Question", "name": "\xBFPuedo contratar DJ sin equipo de sonido extra?", "acceptedAnswer": { "@type": "Answer", "text": "Todos nuestros paquetes de DJ incluyen equipo de sonido. Pero si el venue ya tiene audio, nuestro DJ llega solo con consola y se conecta al sistema existente." } },
        { "@type": "Question", "name": "\xBFCon cu\xE1nta anticipaci\xF3n debo reservar al DJ?", "acceptedAnswer": { "@type": "Answer", "text": "Idealmente 2-4 semanas antes. En temporada alta (noviembre-enero, mayo-junio) los DJs se agotan r\xE1pido. Para fechas en s\xE1bado, reservar con un mes de anticipaci\xF3n." } }
      ]
    }
  ]);
  const serviciosRelacionados = [
    { title: "Audio para Eventos", image: "/img/bocinas/renta-bocinas-line-array-concierto-400w.avif", alt: "Sistema de audio profesional para eventos", description: "Si necesitas solo el equipo de audio sin DJ. Bocinas JBL, QSC y t\xE9cnico de audio incluido.", link: "/servicios/bocinas/" },
    { title: "Bocinas para Bodas", image: "/img/bocinas-bodas/renta-bocinas-boda-primer-baile-novios-truss-300w.avif", alt: "Audio para primer baile de boda", description: "Paquete completo para bodas: ceremonia + recepci\xF3n + fiesta. DJ incluido en el paquete Boda con DJ.", link: "/servicios/bocinas-bodas/" },
    { title: "Cabezas M\xF3viles", image: "/img/cabezas-moviles/renta-cabezas-moviles-boda-beams-blancos-elegante-300w.avif", alt: "Show de luces sincronizado con DJ", description: "Show de luces DMX que se sincroniza con el DJ. Los beams se mueven al ritmo de la m\xFAsica.", link: "/servicios/cabezas-moviles/" },
    { title: "Humo Bajo", image: "/img/humo-bajo/efecto-nubes-piso-boda-jardin-400w.avif", alt: "Humo bajo para vals con DJ", description: "El DJ coordina el vals mientras la niebla cubre el piso. El combo m\xE1s emotivo para bodas.", link: "/servicios/humo-bajo/" }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "canonical": canonical, "schemaMarkup": schemaMarkup }, { "breadcrumbs": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "breadcrumbs" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Breadcrumbs", $$Breadcrumbs, { "items": [
    { label: "Inicio", href: "/" },
    { label: "Sonido y DJ", href: "/servicios/sonido/" },
    { label: "DJ para Fiestas" }
  ] })} ` })}`, "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, { "title": "DJ Profesional para Fiestas y Bodas en CDMX", "subtitle": "Consola Pioneer DDJ + bocinas JBL + repertorio adaptado a tu evento. Desde $5,000 + IVA.", "introParagraph1": "Hay una diferencia grande entre un DJ de fiesta y un DJ de boda, y casi nadie la explica. El DJ de fiesta llega, pone su set y la gente baila. El DJ de boda tiene que manejar 15 momentos diferentes en una sola noche: m\xFAsica suave para la ceremonia, canci\xF3n espec\xEDfica para la entrada de los novios, vals, brindis del pap\xE1, baile padre-hija, hora loca, ramo, liga. Cada momento tiene su canci\xF3n, su volumen y su se\xF1al con el MC. En <strong>REDEIL</strong> nuestros DJs llevan m\xE1s de 10 a\xF1os haciendo esto con consola <strong>Pioneer CDJ-2000NXS2</strong> y <strong>DJM-750MK2</strong>.", "introParagraph2": "El DJ llega con equipo completo: consola profesional, bocinas <strong>JBL</strong> o <strong>QSC</strong> dimensionadas al espacio, subwoofer y micr\xF3fonos <strong>Shure</strong> inal\xE1mbricos. Antes del evento, te pide dos listas: canciones que s\xED quieres y canciones prohibidas. El d\xEDa del evento se coordina con el MC para definir se\xF1ales: cu\xE1ndo bajar la m\xFAsica para el brindis, cu\xE1ndo subir para la hora loca, cu\xE1ndo silencio total para la sorpresa. Si tu boda tiene banda en vivo en la cena, el DJ se conecta al mismo sistema y la transici\xF3n a la fiesta es limpia." })} ${renderComponent($$result2, "CtaBar", $$CtaBar, { "headline": "\xBFPara qu\xE9 evento necesitas DJ?", "items": [
    { label: "Bodas", href: "/servicios/bocinas-bodas/", icon: "sonido" },
    { label: "XV A\xF1os", href: "/servicios/bocinas-xv/", icon: "sonido" },
    { label: "Todo el sonido", href: "/servicios/sonido/", icon: "sonido" },
    { label: "Cotiza Gratis", href: "/contacto/", icon: "cotizar" }
  ] })} ${maybeRenderHead()}<section class="services-section"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "DJ en bodas, fiestas y eventos reales", "subtitle": "La diferencia entre una playlist en shuffle y un profesional que lee la pista.", "paragraph1": "Una playlist de Spotify no sabe que la abuela no se va a parar a bailar con reggaet\xF3n, pero s\xED con Sonora Santanera. No sabe que despu\xE9s del brindis emotivo hay que bajar la energ\xEDa antes de subirla. Nuestro DJ lee esas se\xF1ales en tiempo real y ajusta.", "paragraph2": "En bodas, el DJ no impone su estilo. Construye la noche alrededor de lo que los novios quieren y lo que la pista pide. Si la gente est\xE1 sentada, cambia de g\xE9nero. Si la pista est\xE1 llena, no toca la mezcla." })} ${renderComponent($$result2, "Gallery4x4", $$Gallery4X4, { "images": [
    { src: "/img/bocinas-djs/dj-para-bodas-mezclando-musica-evento.avif", alt: "DJ mezclando m\xFAsica en boda" },
    { src: "/img/bocinas-djs/dj-para-bodas-recepcion-baile.avif", alt: "DJ en recepci\xF3n de boda con baile" },
    { src: "/img/bocinas-djs/dj-para-bodas-vals-primer-baile.avif", alt: "DJ coordinando vals y primer baile" },
    { src: "/img/bocinas-djs/dj-para-eventos-bailando-gente.avif", alt: "P\xFAblico bailando en evento con DJ" },
    { src: "/img/bocinas-djs/dj-para-eventos-boda-hacienda.avif", alt: "DJ en boda de hacienda" },
    { src: "/img/bocinas-djs/dj-para-eventos-fiesta-empresa.avif", alt: "DJ en fiesta corporativa de empresa" },
    { src: "/img/bocinas-djs/dj-para-eventos-pista-iluminada.avif", alt: "DJ con pista de baile iluminada" },
    { src: "/img/bocinas-djs/dj-para-eventos-musica-latina.avif", alt: "DJ poniendo m\xFAsica latina en evento" },
    { src: "/img/bocinas-djs/dj-para-eventos-salon-banquetes.avif", alt: "DJ en sal\xF3n de banquetes" },
    { src: "/img/bocinas-djs/dj-para-eventos-terraza-rooftop.avif", alt: "DJ en terraza rooftop de evento" },
    { src: "/img/bocinas-djs/dj-para-eventos-karaoke-animacion.avif", alt: "DJ con karaoke y animaci\xF3n" },
    { src: "/img/bocinas-djs/dj-para-eventos-privados-exclusivos.avif", alt: "DJ en fiesta privada exclusiva" },
    { src: "/img/bocinas-djs/dj-para-eventos-musica-electronica.avif", alt: "DJ poniendo m\xFAsica electr\xF3nica" },
    { src: "/img/bocinas-djs/dj-para-eventos-jardin-terraza.avif", alt: "DJ en evento de jard\xEDn y terraza" },
    { src: "/img/bocinas-djs/dj-para-eventos-sociales-celebraciones.avif", alt: "DJ en celebraci\xF3n social" },
    { src: "/img/bocinas-djs/dj-para-eventos-fiesta-memorable.avif", alt: "DJ creando una fiesta memorable" }
  ] })} </div> </section> <section class="services-section services-alt"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Paquetes de DJ", "subtitle": "4 niveles \u2014 desde el vals hasta producci\xF3n completa con luces y efectos.", "paragraph1": "Cada paquete incluye al DJ, consola Pioneer, equipo de audio dimensionado al espacio, micr\xF3fonos inal\xE1mbricos, transporte, montaje y desmontaje. El DJ llega 2 horas antes para montar, probar y coordinar con el MC.", "paragraph2": "\xBFQuieres agregar iluminaci\xF3n o efectos especiales? Armamos el paquete completo con precio especial." })} ${renderComponent($$result2, "PricingCards", $$PricingCards, { "packages": [
    {
      name: "DJ B\xE1sico \u2014 4 horas",
      price: "$5,000",
      priceNote: "+ IVA",
      description: "DJ + equipo de sonido para fiestas privadas y eventos de hasta 100 personas. 4 horas de m\xFAsica.",
      features: [
        { text: "DJ con consola Pioneer DDJ", included: true },
        { text: "2 bocinas JBL + 1 subwoofer", included: true },
        { text: "2 micr\xF3fonos Shure inal\xE1mbricos", included: true },
        { text: "Repertorio adaptado a tu evento", included: true },
        { text: "Transporte + montaje + desmontaje", included: true },
        { text: "4 horas de operaci\xF3n", included: true },
        { text: "Cabina decorativa", included: false },
        { text: "Iluminaci\xF3n incluida", included: false }
      ],
      ctaLabel: "Cotizar DJ b\xE1sico",
      ctaHref: "/servicios/bocinas-djs/paquete-dj-fiesta-privada/"
    },
    {
      name: "DJ Est\xE1ndar \u2014 6 horas",
      price: "$8,000",
      priceNote: "+ IVA",
      badge: "M\xE1s popular",
      highlight: true,
      description: "El m\xE1s pedido para bodas y XV a\xF1os. DJ + audio completo + coordinaci\xF3n con MC para todos los momentos.",
      features: [
        { text: "DJ con consola Pioneer profesional", included: true },
        { text: "4 bocinas JBL/QSC + 2 subwoofers", included: true },
        { text: "4 micr\xF3fonos Shure inal\xE1mbricos", included: true },
        { text: "Coordinaci\xF3n con MC y wedding planner", included: true },
        { text: "Transporte + montaje + desmontaje", included: true },
        { text: "6 horas de operaci\xF3n", included: true },
        { text: "Ideal para: bodas, XV a\xF1os, galas", included: true },
        { text: "Cabina decorativa", included: false }
      ],
      ctaLabel: "Cotizar DJ est\xE1ndar",
      ctaHref: "/servicios/bocinas-djs/paquete-dj-boda/"
    },
    {
      name: "DJ Premium \u2014 8 horas",
      price: "$12,000",
      priceNote: "+ IVA",
      description: "DJ + cabina decorativa + iluminaci\xF3n LED b\xE1sica. El paquete que transforma la pista sin contratar luces aparte.",
      features: [
        { text: "DJ con consola Pioneer + cabina blanca", included: true },
        { text: "Equipo de audio completo para 200+ personas", included: true },
        { text: "4 PAR LED de color en la pista", included: true },
        { text: "Coordinaci\xF3n completa con MC", included: true },
        { text: "8 horas de operaci\xF3n", included: true },
        { text: "Transporte + montaje + desmontaje", included: true },
        { text: "Ideal para: bodas premium, corporativos", included: true },
        { text: "Cabezas m\xF3viles incluidas", included: false }
      ],
      ctaLabel: "Cotizar DJ premium",
      ctaHref: "/servicios/bocinas-djs/paquete-dj-corporativo/"
    },
    {
      name: "DJ Producci\xF3n \u2014 evento completo",
      price: "$18,000",
      priceNote: "+ IVA",
      description: "DJ + line array + 8 cabezas m\xF3viles + humo esc\xE9nico. La producci\xF3n completa de audio + luces + efectos.",
      features: [
        { text: "DJ profesional toda la noche", included: true },
        { text: "Line array para 300+ personas", included: true },
        { text: "8 cabezas m\xF3viles con operador DMX", included: true },
        { text: "Humo esc\xE9nico para la pista", included: true },
        { text: "Cabina decorativa premium", included: true },
        { text: "Coordinaci\xF3n total con producci\xF3n", included: true },
        { text: "Ideal para: mega fiestas, festivales", included: true },
        { text: "Visita previa al venue", included: true }
      ],
      ctaLabel: "Cotizar producci\xF3n completa",
      ctaHref: "/servicios/bocinas-djs/paquete-dj-festival/"
    }
  ] })} </div> </section> <section class="faq-section"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Preguntas sobre el DJ", "subtitle": "Lo que todos preguntan antes de contratar.", "paragraph1": "Si tienes otra duda, escr\xEDbenos por WhatsApp y te respondemos en minutos.", "paragraph2": "Nuestro DJ se adapta a cualquier tipo de evento \u2014 cu\xE9ntanos qu\xE9 tienes en mente." })} </div> ${renderComponent($$result2, "FaqSection", $$FaqSection, { "items": [
    { question: "\xBFEl DJ trae su propio equipo de sonido?", answer: "S\xED. Llega con consola Pioneer DDJ, bocinas JBL o QSC dimensionadas al espacio, subwoofer, micr\xF3fonos Shure inal\xE1mbricos y todo el cableado. Si el venue ya tiene sistema de audio, nuestro DJ se conecta al existente sin problema." },
    { question: "\xBFPuedo pedir canciones espec\xEDficas?", answer: "Claro. Antes del evento te pedimos dos listas: las canciones que S\xCD quieres (imprescindibles para el vals, hora loca, etc.) y las que NO quieres. El DJ construye la noche alrededor de tus preferencias y lee al p\xFAblico en vivo para ajustar." },
    { question: "\xBFEl DJ coordina con el maestro de ceremonias?", answer: "Siempre. Se re\xFAnen antes del evento para definir la secuencia de momentos: entrada, vals, brindis, pastel, ramo, hora loca. Cada momento tiene su canci\xF3n asignada y una se\xF1al acordada entre DJ y MC." },
    { question: "\xBFQu\xE9 g\xE9neros musicales maneja?", answer: "Todos. Desde boleros y cumbias cl\xE1sicas para la cena, hasta reggaet\xF3n, electr\xF3nica y pop para la hora loca. Tambi\xE9n salsa, bachata, rock cl\xE1sico, oldies, m\xFAsica lounge para coctel y sets de DJ para fiestas electr\xF3nicas." },
    { question: "\xBFEl DJ puede hacer karaoke?", answer: "S\xED. Tenemos equipo de karaoke con pantalla y cat\xE1logo de miles de canciones. Es un servicio que se agrega al paquete del DJ \u2014 muy popular en posadas, cumplea\xF1os y fiestas privadas." },
    { question: "\xBFCon cu\xE1nta anticipaci\xF3n debo reservar al DJ?", answer: "Idealmente 2-4 semanas antes. En temporada alta de bodas (noviembre-enero, mayo-junio) los s\xE1bados se agotan r\xE1pido. Para garantizar tu fecha, reserva con un mes de anticipaci\xF3n." }
  ] })} </section> <section class="services-section services-alt"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "DJ + luces + efectos del mismo proveedor", "subtitle": "El DJ da la se\xF1al y todo se sincroniza: luces, humo, confeti.", "paragraph1": "Cuando el DJ y el operador de luces trabajan juntos, los beams de las cabezas m\xF3viles se mueven al ritmo de la m\xFAsica. Cuando el DJ y el operador de humo bajo se conocen, la niebla se activa exactamente cuando empieza el vals, no 10 segundos tarde. Esa coordinaci\xF3n solo funciona cuando todo sale del mismo equipo.", "paragraph2": "Paquetes de DJ + luces + efectos con precio especial." })} <div class="services-grid"> ${serviciosRelacionados.map((s) => renderTemplate`${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "title": s.title, "image": s.image, "alt": s.alt, "description": s.description, "link": s.link })}`)} </div> </div> </section> <section class="cta-section"> <div class="container"> <div class="cta-content"> <h2>¿Listo para que tu fiesta tenga DJ profesional?</h2> <p>Cuéntanos la fecha, el tipo de evento y tus gustos musicales. Te presentamos al DJ ideal para tu celebración.</p> <div class="cta-buttons"> <a href="/contacto/" class="btn btn-whatsapp btn-lg">Cotiza por WhatsApp</a> <a href="tel:+525530682988" class="btn btn-primary btn-lg">Llámanos — 55 3068 2988</a> </div> </div> </div> </section> ` })}`;
}, "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/pages/servicios/bocinas-djs.astro", void 0);

const $$file = "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/pages/servicios/bocinas-djs.astro";
const $$url = "/servicios/bocinas-djs";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$BocinasDjs,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
