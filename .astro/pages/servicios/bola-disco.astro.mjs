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

const $$BolaDisco = createComponent(($$result, $$props, $$slots) => {
  const title = "Renta de Bola Disco para Fiestas y Bodas en CDMX | REDEIL";
  const description = "Bola disco de espejos para pistas de baile \u2014 30cm a 1.2m. Bodas, fiestas retro y XV a\xF1os en CDMX. Desde $2,000 + IVA.";
  const canonical = "https://rentadeiluminacion.com/servicios/bola-disco/";
  const schemaMarkup = JSON.stringify([
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Renta de Bola Disco para Eventos",
      "provider": {
        "@type": "LocalBusiness",
        "name": "REDEIL",
        "url": "https://rentadeiluminacion.com",
        "telephone": "+525530682988",
        "address": { "@type": "PostalAddress", "addressLocality": "Ciudad de M\xE9xico", "addressRegion": "CDMX", "addressCountry": "MX" }
      },
      "description": "Servicio profesional de renta de bolas de espejos (bola disco) de 30cm a 1.2m para bodas, fiestas retro y eventos en CDMX. Instalaci\xF3n con motor y focos PAR incluidos.",
      "areaServed": [
        { "@type": "City", "name": "Ciudad de M\xE9xico" },
        { "@type": "State", "name": "Estado de M\xE9xico" }
      ],
      "serviceType": "Renta de Bola Disco",
      "priceRange": "$$"
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "\xBFEn qu\xE9 tama\xF1os viene la bola disco?", "acceptedAnswer": { "@type": "Answer", "text": "Contamos con bolas de espejos de 30cm (\xEDntima), 50cm (est\xE1ndar para salones), 80cm (grande para venues amplios) y 1.2m (gigante para producci\xF3n). El tama\xF1o ideal depende de la altura del techo y el tama\xF1o de la pista de baile." } },
        { "@type": "Question", "name": "\xBFLa instalaci\xF3n requiere estructura especial?", "acceptedAnswer": { "@type": "Answer", "text": "Necesitamos un punto de anclaje en el techo sobre la pista de baile \u2014 una viga, una argolla o un gancho de resistencia suficiente. Llevamos todo el cableado, el motor giratorio y los focos PAR para iluminar la bola. Inspeccionamos el punto de anclaje antes de instalar." } },
        { "@type": "Question", "name": "\xBFLa bola disco viene con motor y focos?", "acceptedAnswer": { "@type": "Answer", "text": "S\xED. Todos nuestros paquetes incluyen la bola, el motor giratorio de velocidad variable y los focos PAR de color que apuntan a la bola para crear el efecto de miles de destellos. Sin los focos PAR, la bola no produce el efecto visual completo." } }
      ]
    }
  ]);
  const serviciosRelacionados = [
    { title: "M\xE1quina de Humo", image: "/img/humo-bajo/efecto-nubes-piso-boda-jardin-400w.avif", alt: "Humo en pista de baile", description: "Los reflejos de la bola disco en el humo crean miles de puntos de luz flotantes. El combo m\xE1s instagrameable.", link: "/servicios/maquina-humo/" },
    { title: "DJ para Fiestas", image: "/img/bocinas-djs/dj-para-eventos-cdmx-cabina-profesional-300w.avif", alt: "DJ profesional en cabina", description: "DJ + bola disco = fiesta completa. M\xFAsica perfecta con el efecto visual cl\xE1sico que nunca falla.", link: "/servicios/bocinas-djs/" },
    { title: "Luces Ne\xF3n y UV", image: "/img/luces-neon/renta-luces-neon-glow-party-celebracion-neon-300w.avif", alt: "Luces ne\xF3n en fiesta", description: "Bola disco dorada + luces UV = fiesta tem\xE1tica de otro nivel. Combinaci\xF3n perfecta para XV a\xF1os.", link: "/servicios/luces-neon/" },
    { title: "Cabezas M\xF3viles", image: "/img/cabezas-moviles/renta-cabezas-moviles-boda-beams-blancos-elegante-300w.avif", alt: "Cabezas m\xF3viles con beams", description: "Show de luces DMX + bola disco. Los beams + los destellos crean un espect\xE1culo visual completo.", link: "/servicios/cabezas-moviles/" }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "canonical": canonical, "schemaMarkup": schemaMarkup }, { "breadcrumbs": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "breadcrumbs" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Breadcrumbs", $$Breadcrumbs, { "items": [
    { label: "Inicio", href: "/" },
    { label: "Efectos Especiales", href: "/servicios/efectos-especiales/" },
    { label: "Bola Disco" }
  ] })} ` })}`, "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, { "title": "Renta de Bola Disco para Bodas y Fiestas en CDMX", "subtitle": "Bolas de espejos de 30cm hasta 1.2m. Con motor, focos PAR y instalaci\xF3n profesional. Desde $2,000 + IVA.", "introParagraph1": "Algo que la gente no sabe: una bola disco sin focos PAR apunt\xE1ndole no hace nada. Los destellos que ves en la pista los producen los focos rebotando en los espejos, no la bola sola. Por eso todos nuestros paquetes incluyen la bola, el motor giratorio y los focos PAR de color. Sin los tres elementos juntos, no hay efecto. En <strong>REDEIL</strong> rentamos bolas de espejos en cuatro tama\xF1os: 30cm para espacios \xEDntimos, 50-60cm para salones est\xE1ndar, 80cm para venues grandes y 1.2 metros para producciones.", "introParagraph2": "El tama\xF1o correcto depende de la altura del techo, no del tama\xF1o de la pista. Con techo de 3 metros, una bola de 30-40cm se ve bien. Con techo de 5 metros, necesitas m\xEDnimo 50-60cm para que los destellos lleguen al piso. La de 1.2 metros necesita techo de 8m+ y un punto de anclaje que aguante el peso. Nuestro equipo revisa el punto de anclaje antes de instalar. Si no hay d\xF3nde colgarla, llevamos estructura de truss port\xE1til. El servicio incluye transporte, instalaci\xF3n, motor, focos PAR y desmontaje." })} ${renderComponent($$result2, "CtaBar", $$CtaBar, { "headline": "\xBFPara qu\xE9 tipo de fiesta?", "items": [
    { label: "Fiestas Retro", href: "#paquetes", icon: "efectos" },
    { label: "Bodas", href: "/eventos/bodas/", icon: "efectos" },
    { label: "XV A\xF1os", href: "/eventos/xv-anos/", icon: "efectos" },
    { label: "Cotiza Gratis", href: "/contacto/", icon: "cotizar" }
  ] })}  ${maybeRenderHead()}<section class="services-section"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "\xBFQu\xE9 tama\xF1os de bola disco hay disponibles?", "subtitle": "El car\xE1cter lo definen los focos PAR, no la bola.", "paragraph1": "La misma bola de 60cm se ve vintage y rom\xE1ntica con PAR en tono \xE1mbar entre guirnaldas Edison. Con PAR multicolor en una fiesta de los 80s, es otro objeto. Con PAR azul en un coctel corporativo, se ve sofisticada. Lo que cambia no es la bola sino el color de los focos que la iluminan.", "paragraph2": "En bodas r\xFAsticas en hacienda, la bola de espejos colgada entre guirnaldas es una combinaci\xF3n que nunca falla. Los reflejos dorados movi\xE9ndose por las paredes de piedra generan un ambiente que los invitados fotograf\xEDan sin parar." })} ${renderComponent($$result2, "Gallery4x4", $$Gallery4X4, { "images": [
    { src: "/img/bola-disco/bola-disco-gigante-fiesta-nocturna.avif", alt: "Bola disco gigante en fiesta nocturna" },
    { src: "/img/bola-disco/bola-disco-dj-pista-baile-evento.avif", alt: "Bola disco con DJ en pista de baile" },
    { src: "/img/bola-disco/bola-disco-dorada-boda-hacienda-romantica.avif", alt: "Bola disco dorada en boda rom\xE1ntica en hacienda" },
    { src: "/img/bola-disco/bola-disco-dorada-pista-baile-colores.avif", alt: "Bola disco dorada con destellos de colores en pista" },
    { src: "/img/bola-disco/renta-bola-disco-para-fiestas-cdmx.avif", alt: "Renta de bola disco para fiestas en CDMX" },
    { src: "/img/bola-disco/bola-disco-para-fiestas-tematicas-70s.avif", alt: "Bola disco para fiesta tem\xE1tica de los 70s" },
    { src: "/img/bola-disco/renta-bola-disco-fiesta-80s-90s.avif", alt: "Bola disco para fiesta de los 80s y 90s" },
    { src: "/img/bola-disco/bola-espejos-para-bodas-elegantes.avif", alt: "Bola de espejos para bodas elegantes" },
    { src: "/img/bola-disco/renta-bola-disco-salon-eventos.avif", alt: "Bola disco en sal\xF3n de eventos" },
    { src: "/img/bola-disco/bola-disco-gigante-para-eventos.avif", alt: "Bola disco gigante para eventos especiales" },
    { src: "/img/bola-disco/bola-disco-moderna-coctel-corporativo.avif", alt: "Bola disco en coctel corporativo moderno" },
    { src: "/img/bola-disco/renta-bola-espejos-primer-baile-novios.avif", alt: "Bola de espejos para primer baile de novios" },
    { src: "/img/bola-disco/renta-de-bola-disco-pista-iluminada.avif", alt: "Pista de baile iluminada con bola disco" },
    { src: "/img/bola-disco/renta-de-bola-disco-xv-anos.avif", alt: "Bola disco para XV a\xF1os" },
    { src: "/img/bola-disco/bola-disco-boda-rustica-guirnaldas.avif", alt: "Bola disco en boda r\xFAstica con guirnaldas" },
    { src: "/img/bola-disco/renta-bola-espejos-evento-premium.avif", alt: "Bola de espejos premium para evento especial" }
  ] })} </div> </section>  <section class="services-section services-alt" id="paquetes"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "\xBFCu\xE1nto cuesta rentar bola disco en CDMX?", "subtitle": "4 tama\xF1os seg\xFAn tu pista de baile. Motor y focos PAR incluidos.", "paragraph1": "Cada paquete incluye la bola de espejos, motor giratorio de velocidad variable, 2 focos PAR de color, sistema de anclaje, instalaci\xF3n profesional y desmontaje. El tama\xF1o correcto depende de la altura del techo y el di\xE1metro de la pista.", "paragraph2": "\xBFNo sabes qu\xE9 tama\xF1o necesitas? M\xE1ndanos fotos de tu venue y te recomendamos el ideal." })} ${renderComponent($$result2, "PricingCards", $$PricingCards, { "packages": [
    {
      name: "Compacta \u2014 30-40cm",
      price: "$2,000",
      priceNote: "+ IVA",
      description: "La opci\xF3n \xEDntima para salones bajos y espacios peque\xF1os. Destellos suaves para bodas vintage y fiestas privadas.",
      features: [
        { text: "Bola de espejos 30-40cm de di\xE1metro", included: true },
        { text: "Motor giratorio con velocidad variable", included: true },
        { text: "2 focos PAR de color incluidos", included: true },
        { text: "Traslado + instalaci\xF3n + desmontaje", included: true },
        { text: "Ideal para: salones bajos, eventos \xEDntimos", included: true },
        { text: "Instalaci\xF3n: techo hasta 3.5m de altura", included: true },
        { text: "Focos PAR adicionales", included: false },
        { text: "Motor de alta velocidad", included: false }
      ],
      ctaLabel: "Cotizar bola compacta",
      ctaHref: "/servicios/bola-disco/paquete-30cm/"
    },
    {
      name: "Est\xE1ndar \u2014 50-60cm",
      price: "$3,000",
      priceNote: "+ IVA",
      badge: "M\xE1s popular",
      highlight: true,
      description: "El tama\xF1o m\xE1s vers\xE1til \u2014 funciona en cualquier sal\xF3n est\xE1ndar de bodas y eventos. Destellos que cubren toda la pista.",
      features: [
        { text: "Bola de espejos 50-60cm de di\xE1metro", included: true },
        { text: "Motor giratorio de velocidad variable", included: true },
        { text: "2 focos PAR de color incluidos", included: true },
        { text: "Traslado + instalaci\xF3n + desmontaje", included: true },
        { text: "Ideal para: salones est\xE1ndar, bodas, XV a\xF1os", included: true },
        { text: "Instalaci\xF3n: techo de 3m a 5m de altura", included: true },
        { text: "Cobertura completa de la pista", included: true },
        { text: "Focos PAR adicionales", included: false }
      ],
      ctaLabel: "Cotizar bola est\xE1ndar",
      ctaHref: "/servicios/bola-disco/paquete-60cm/"
    },
    {
      name: "Grande \u2014 80cm",
      price: "$4,500",
      priceNote: "+ IVA",
      description: "Para venues amplios y techos altos. Destellos de mayor alcance que cubren un sal\xF3n completo de 300m\xB2.",
      features: [
        { text: "Bola de espejos 80cm de di\xE1metro", included: true },
        { text: "Motor de alta potencia con velocidad variable", included: true },
        { text: "4 focos PAR de color incluidos", included: true },
        { text: "Traslado + instalaci\xF3n + desmontaje", included: true },
        { text: "Ideal para: salones grandes, haciendas", included: true },
        { text: "Instalaci\xF3n: techo de 4m a 8m de altura", included: true },
        { text: "Cobertura 300m\xB2 de pista", included: true },
        { text: "Instalaci\xF3n con andamio si requerido", included: true }
      ],
      ctaLabel: "Cotizar bola grande",
      ctaHref: "/servicios/bola-disco/paquete-90cm/"
    },
    {
      name: "Gigante \u2014 1.2m",
      price: "$8,000",
      priceNote: "+ IVA",
      description: "La bola disco de producci\xF3n. 1.2 metros de puro espect\xE1culo para eventos masivos, festivales y venues de gran escala.",
      features: [
        { text: "Bola de espejos 1.2m de di\xE1metro", included: true },
        { text: "Motor industrial de alta potencia", included: true },
        { text: "6 focos PAR de alta potencia", included: true },
        { text: "Traslado + instalaci\xF3n especializada", included: true },
        { text: "Andamio + equipo t\xE9cnico completo", included: true },
        { text: "Inspecci\xF3n estructural del punto de anclaje", included: true },
        { text: "Ideal para: festivales, clubs, mega eventos", included: true },
        { text: "Visita previa obligatoria", included: true }
      ],
      ctaLabel: "Cotizar bola gigante",
      ctaHref: "/servicios/bola-disco/paquete-120cm/"
    }
  ] })} </div> </section>  <section class="faq-section"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Preguntas frecuentes sobre bola disco", "subtitle": "Todo lo que necesitas saber antes de reservar.", "paragraph1": "Si tienes otra duda, escr\xEDbenos por WhatsApp y te respondemos en minutos.", "paragraph2": "M\xE1ndanos fotos de tu venue y te recomendamos el tama\xF1o exacto que necesitas." })} </div> ${renderComponent($$result2, "FaqSection", $$FaqSection, { "items": [
    { question: "\xBFQu\xE9 tama\xF1o de bola disco necesito para mi sal\xF3n?", answer: "Como regla general: bola de 30-40cm para salones con techo de hasta 3.5m; 50-60cm para techos de 3 a 5m; 80cm para techos de 4 a 8m; 1.2m para venues de producci\xF3n con techos de 8m+. M\xE1ndanos fotos de tu pista de baile y el techo y te recomendamos el tama\xF1o exacto." },
    { question: "\xBFLa bola de espejos viene con motor y focos?", answer: "S\xED, siempre. Sin el motor, la bola no gira y sin los focos PAR apuntando a ella, no produce el efecto de destellos. Todos nuestros paquetes incluyen los tres elementos. Si quieres cambiar los colores durante la noche, usamos focos PAR con geles intercambiables." },
    { question: "\xBFSe puede instalar en el techo de cualquier sal\xF3n?", answer: "En la mayor\xEDa de los salones, s\xED. Necesitamos un punto de anclaje resistente en el techo sobre la pista de baile \u2014 una viga, una argolla instalada o un punto de rigging. Nuestro equipo revisa el punto antes de instalar. Si no hay punto de anclaje, usamos una estructura de truss port\xE1til (costo adicional)." },
    { question: "\xBFLa bola disco es buena para bodas?", answer: "Absolutamente \u2014 especialmente para bodas con tem\xE1tica vintage, r\xFAstica o retro. Una bola de espejos de 50-60cm colgada entre guirnaldas Edison crea un ambiente \xFAnico y muy fotog\xE9nico. Los reflejos sobre la pista de baile se ven incre\xEDbles en las fotos y videos." },
    { question: "\xBFSe puede combinar con m\xE1quina de humo?", answer: "S\xED, y es uno de los combos m\xE1s populares. Cuando el humo llena la pista y los focos PAR iluminan la bola disco, los reflejos se hacen visibles en el humo \u2014 miles de puntos de luz flotando en la neblina. El efecto es espectacular y muy fotog\xE9nico." },
    { question: "\xBFCu\xE1nto tiempo toma la instalaci\xF3n?", answer: "Entre 30 y 60 minutos dependiendo del tama\xF1o y la accesibilidad del punto de anclaje. Para bolas gigantes (1.2m) con andamio, 2-3 horas. Llegamos con tiempo suficiente para que todo est\xE9 listo antes del evento." }
  ] })} </section>  <section class="services-section services-alt"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "\xBFQu\xE9 otros servicios combinan con bola disco?", "subtitle": "Bola disco + m\xE1quina de humo = miles de puntos de luz flotando.", "paragraph1": "Cuando el humo llena la pista y los focos PAR iluminan la bola, cada reflejo se hace visible flotando en la neblina. Son miles de puntos de luz movi\xE9ndose en el aire. El efecto se ve en persona mucho mejor que en fotos. Si agregas un DJ, la velocidad de giro de la bola se coordina con el ritmo.", "paragraph2": "Precio especial cuando combinas bola disco con otros servicios." })} <div class="services-grid"> ${serviciosRelacionados.map((s) => renderTemplate`${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "title": s.title, "image": s.image, "alt": s.alt, "description": s.description, "link": s.link })}`)} </div> </div> </section>  <section class="cta-section"> <div class="container"> <div class="cta-content"> <h2>¿Lista para llenar tu pista de destellos?</h2> <p>Mándanos fotos de tu salón y el tipo de evento. Te decimos qué tamaño de bola es el ideal y te cotizamos en minutos.</p> <div class="cta-buttons"> <a href="/contacto/" class="btn btn-whatsapp btn-lg">Cotiza por WhatsApp</a> <a href="tel:+525530682988" class="btn btn-primary btn-lg">Llámanos — 55 3068 2988</a> </div> </div> </div> </section> ` })}`;
}, "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/pages/servicios/bola-disco.astro", void 0);

const $$file = "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/pages/servicios/bola-disco.astro";
const $$url = "/servicios/bola-disco";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$BolaDisco,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
