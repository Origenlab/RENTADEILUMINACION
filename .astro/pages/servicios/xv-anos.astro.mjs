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

const $$XvAnos = createComponent(($$result, $$props, $$slots) => {
  const title = "Paquetes de Iluminaci\xF3n para XV A\xF1os CDMX | REDEIL";
  const description = "Seguidor, cabezas m\xF3viles, humo bajo y confeti para el vals y la entrada de tu quincea\xF1era en CDMX. Paquetes desde $6,000 + IVA.";
  const canonical = "https://rentadeiluminacion.com/servicios/xv-anos/";
  const schemaMarkup = JSON.stringify([
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Paquetes de Iluminaci\xF3n y Efectos para XV A\xF1os",
      "provider": {
        "@type": "LocalBusiness",
        "name": "REDEIL",
        "url": "https://rentadeiluminacion.com",
        "telephone": "+525530682988",
        "address": { "@type": "PostalAddress", "addressLocality": "Ciudad de M\xE9xico", "addressRegion": "CDMX", "addressCountry": "MX" }
      },
      "description": "Paquetes de iluminaci\xF3n y efectos especiales para XV a\xF1os en CDMX \u2014 seguidor para el vals, cabezas m\xF3viles para la coreograf\xEDa, humo bajo para la entrada y confeti para los momentos estelares.",
      "areaServed": [
        { "@type": "City", "name": "Ciudad de M\xE9xico" },
        { "@type": "State", "name": "Estado de M\xE9xico" }
      ],
      "serviceType": "Iluminaci\xF3n y Efectos para XV A\xF1os",
      "priceRange": "$$$"
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "\xBFEl seguidor sigue a la quincea\xF1era durante toda la fiesta?", "acceptedAnswer": { "@type": "Answer", "text": "El seguidor se usa en los momentos clave del protocolo: entrada triunfal, vals padre-hija, vals con chambel\xE1n, coreograf\xEDa de chambelanes, cambio de zapato y brindis. Entre momentos, se apaga para que la atenci\xF3n fluya naturalmente. Es m\xE1s impactante cuando se reserva para los momentos estelares." } },
        { "@type": "Question", "name": "\xBFPueden sincronizar las luces con la coreograf\xEDa de los chambelanes?", "acceptedAnswer": { "@type": "Answer", "text": "S\xED. Nuestro t\xE9cnico se coordina con el core\xF3grafo antes del evento para conocer los tiempos musicales y los cambios de formaci\xF3n. Las cabezas m\xF3viles cambian de color y patr\xF3n en sincron\xEDa con cada secci\xF3n de la coreograf\xEDa \u2014 intro, parte lenta, parte r\xE1pida y final." } },
        { "@type": "Question", "name": "\xBFQu\xE9 incluye el humo bajo para la entrada?", "acceptedAnswer": { "@type": "Answer", "text": "El efecto de humo bajo crea una capa de niebla de 30-40cm sobre el piso que dura 2-3 minutos. La quincea\xF1era camina sobre las nubes mientras el seguidor la ilumina. Incluye m\xE1quina de humo bajo profesional, l\xEDquido especial, operador y coordinaci\xF3n con el DJ para que la niebla aparezca justo cuando empieza la m\xFAsica de entrada." } }
      ]
    }
  ]);
  const serviciosRelacionados = [
    { title: "Seguidor de Luz", image: "/img/seguidor/seguidor-xv-anos-baile-quincea\xF1era-salon-elegante.avif", alt: "Seguidor iluminando a quincea\xF1era en sal\xF3n elegante", description: "El spotlight que hace brillar a la quincea\xF1era en cada momento del protocolo \u2014 entrada, vals, coreograf\xEDa y brindis.", link: "/servicios/seguidor/" },
    { title: "Humo Bajo", image: "/img/humo-bajo/humo-bajo-entrada-quinceanos-salon.avif", alt: "Humo bajo en entrada de quincea\xF1era en sal\xF3n", description: "Niebla baja para la entrada triunfal y el vals. La quincea\xF1era camina sobre nubes mientras el seguidor la ilumina.", link: "/servicios/humo-bajo/" },
    { title: "Cabezas M\xF3viles", image: "/img/cabezas-moviles/renta-cabezas-moviles-fiesta-xv-beams-rosa-azul.avif", alt: "Cabezas m\xF3viles con beams rosa y azul en XV a\xF1os", description: "Show de luces din\xE1mico para la coreograf\xEDa de chambelanes y la fiesta libre. Beams, colores y gobos que elevan la pista.", link: "/servicios/cabezas-moviles/" },
    { title: "Confeti", image: "/img/maquina-de-papelitos/confeti-dorado-xv-anos-vals-quincea\xF1era.avif", alt: "Confeti dorado en vals de quincea\xF1era", description: "Explosi\xF3n de confeti dorado en el vals o al final de la coreograf\xEDa. El momento m\xE1s fotografiado de los XV a\xF1os.", link: "/servicios/confeti/" }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "canonical": canonical, "schemaMarkup": schemaMarkup }, { "breadcrumbs": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "breadcrumbs" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Breadcrumbs", $$Breadcrumbs, { "items": [
    { label: "Inicio", href: "/" },
    { label: "Servicios", href: "/servicios/" },
    { label: "Iluminaci\xF3n para XV A\xF1os" }
  ] })} ` })}`, "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, { "title": "Iluminaci\xF3n y Efectos Especiales para XV A\xF1os en CDMX", "subtitle": "Seguidor para el vals, humo bajo para la entrada, cabezas m\xF3viles para la coreograf\xEDa. Todo coordinado por un solo equipo. Desde $6,000 + IVA.", "introParagraph1": "Una fiesta de XV a\xF1os tiene momentos que merecen una iluminaci\xF3n a la altura: la entrada triunfal bajando las escaleras entre humo bajo y el haz del seguidor, el vals padre-hija con luz c\xE1lida y emotiva, la coreograf\xEDa de chambelanes con cabezas m\xF3viles cambiando de color a ritmo de la m\xFAsica, y la fiesta libre con show de luces completo. En <strong>REDEIL</strong> dise\xF1amos paquetes de iluminaci\xF3n y efectos especiales que cubren cada uno de estos momentos \u2014 con un solo proveedor y un t\xE9cnico que coordina todo con el DJ y el MC.", "introParagraph2": "Cada paquete combina los servicios que mejor funcionan juntos en XV a\xF1os: <strong>seguidor profesional</strong> que sigue a la quincea\xF1era en cada momento estelar, <strong>cabezas m\xF3viles</strong> que pintan la pista durante la coreograf\xEDa y la fiesta, <strong>humo bajo</strong> que crea nubes en el piso para la entrada y el vals, y <strong>confeti</strong> que explota en los momentos de mayor emoci\xF3n. Cubrimos fiestas en salones, jardines, haciendas y terrazas en toda la CDMX y Estado de M\xE9xico." })} ${renderComponent($$result2, "CtaBar", $$CtaBar, { "headline": "\xBFQu\xE9 momento de los XV quieres hacer inolvidable?", "items": [
    { label: "Entrada + Vals", href: "#paquetes", icon: "iluminacion" },
    { label: "Coreograf\xEDa", href: "#paquetes", icon: "iluminacion" },
    { label: "Sonido para XV", href: "/servicios/bocinas-xv/", icon: "sonido" },
    { label: "Cotiza Gratis", href: "/contacto/", icon: "cotizar" }
  ] })}  ${maybeRenderHead()}<section class="services-section"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Iluminaci\xF3n y efectos en XV a\xF1os reales", "subtitle": "Entrada, vals, coreograf\xEDa y fiesta \u2014 cada momento con su propia iluminaci\xF3n.", "paragraph1": "El seguidor iluminando a la quincea\xF1era mientras baja las escaleras entre humo bajo. Las cabezas m\xF3viles cambiando de rosa a azul durante la coreograf\xEDa de chambelanes. El confeti dorado explotando al final del vals. Estos son montajes reales que hemos operado en fiestas de XV a\xF1os en la CDMX.", "paragraph2": "Nuestro t\xE9cnico se coordina con el core\xF3grafo, el DJ y el maestro de ceremonias para que cada cambio de luz coincida con cada momento del protocolo." })} ${renderComponent($$result2, "Gallery4x4", $$Gallery4X4, { "images": [
    { src: "/img/seguidor/seguidor-xv-anos-baile-quincea\xF1era-salon-elegante.avif", alt: "Seguidor iluminando baile de quincea\xF1era en sal\xF3n elegante" },
    { src: "/img/humo-bajo/humo-bajo-entrada-quinceanos-salon.avif", alt: "Humo bajo en entrada de quincea\xF1era en sal\xF3n" },
    { src: "/img/cabezas-moviles/renta-cabezas-moviles-fiesta-xv-beams-rosa-azul.avif", alt: "Cabezas m\xF3viles con beams rosa y azul en XV a\xF1os" },
    { src: "/img/seguidor/luz-seguidor-quincea\xF1era-vals-chambelan-vestido-rosa.avif", alt: "Seguidor iluminando vals de quincea\xF1era con vestido rosa" },
    { src: "/img/humo-bajo/humo-bajo-vals-xv-anos-quinceanos.avif", alt: "Humo bajo en vals de XV a\xF1os" },
    { src: "/img/bocinas-xv/renta-bocinas-xv-anos-entrada-escalera-seguidor-humo.avif", alt: "Entrada de quincea\xF1era por escalera con seguidor y humo" },
    { src: "/img/cabezas-moviles/renta-cabezas-moviles-xv-anos-pista-baile-rosa.avif", alt: "Cabezas m\xF3viles iluminando pista de baile rosa en XV a\xF1os" },
    { src: "/img/seguidor/luz-seguidor-quincea\xF1era-vestido-azul-salon-candelabros.avif", alt: "Seguidor iluminando quincea\xF1era con vestido azul en sal\xF3n" },
    { src: "/img/bocinas-xv/renta-bocinas-xv-anos-coreografia-chambelanes-escenario.avif", alt: "Coreograf\xEDa de chambelanes en escenario de XV a\xF1os" },
    { src: "/img/humo-bajo/niebla-baja-vals-quinceanos-elegante.avif", alt: "Niebla baja en vals de quincea\xF1era elegante" },
    { src: "/img/bocinas-xv/renta-bocinas-xv-anos-baile-chambelanes-dorados-jbl.avif", alt: "Baile de chambelanes dorados en XV a\xF1os" },
    { src: "/img/maquina-de-papelitos/confeti-dorado-xv-anos-vals-quincea\xF1era.avif", alt: "Confeti dorado en vals de quincea\xF1era" },
    { src: "/img/seguidor/seguidor-vals-xv-anos-quincea\xF1era.avif", alt: "Seguidor en vals de XV a\xF1os" },
    { src: "/img/bocinas-xv/renta-bocinas-xv-anos-entrada-escalera-humo-bajo.avif", alt: "Entrada de quincea\xF1era por escalera con humo bajo" },
    { src: "/img/cabezas-moviles/renta-cabezas-moviles-evento-beams-cruzados-fiesta.avif", alt: "Beams cruzados de cabezas m\xF3viles en fiesta" },
    { src: "/img/luces-neon/letrero-luminoso-xv-anos.avif", alt: "Letrero luminoso para XV a\xF1os" }
  ] })} </div> </section>  <section class="services-section services-alt" id="paquetes"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Paquetes de Iluminaci\xF3n y Efectos para XV A\xF1os", "subtitle": "Desde el vals con seguidor hasta la producci\xF3n art\xEDstica completa. T\xE9cnico incluido.", "paragraph1": "Cada paquete incluye equipo profesional, t\xE9cnico de iluminaci\xF3n, traslado, montaje anticipado y coordinaci\xF3n con el DJ y maestro de ceremonias. El t\xE9cnico opera las luces en vivo durante toda la fiesta \u2014 cada momento del protocolo con su propia iluminaci\xF3n.", "paragraph2": "\xBFLa quincea\xF1era tiene un tema o color espec\xEDfico? Personalizamos cada paquete con los colores y efectos que mejor reflejen su estilo." })} ${renderComponent($$result2, "PricingCards", $$PricingCards, { "packages": [
    {
      name: "Vals y Entrada",
      price: "$6,000",
      priceNote: "+ IVA",
      description: "Seguidor + humo bajo + 2 cabezas m\xF3viles para la entrada triunfal y el vals. Lo esencial para los momentos m\xE1s emotivos.",
      features: [
        { text: "Seguidor profesional para vals y entrada", included: true },
        { text: "Humo bajo para entrada o primer vals", included: true },
        { text: "2 cabezas m\xF3viles beam para ambiente", included: true },
        { text: "T\xE9cnico de iluminaci\xF3n incluido", included: true },
        { text: "Coordinaci\xF3n con DJ y MC", included: true },
        { text: "Ideal para: fiestas \xEDntimas 80-150 personas", included: true },
        { text: "Confeti para el vals", included: false },
        { text: "City color o luces ne\xF3n", included: false }
      ],
      ctaLabel: "Cotizar vals y entrada",
      ctaHref: "/contacto/"
    },
    {
      name: "XV Completo",
      price: "$10,000",
      priceNote: "+ IVA",
      badge: "M\xE1s popular",
      highlight: true,
      description: "Seguidor + humo bajo + 4 cabezas m\xF3viles + confeti en el vals. Cobertura completa de todos los momentos del protocolo.",
      features: [
        { text: "Seguidor profesional toda la noche", included: true },
        { text: "Humo bajo para entrada y vals", included: true },
        { text: "4 cabezas m\xF3viles beam/wash", included: true },
        { text: "Confeti dorado para el vals", included: true },
        { text: "Sincronizaci\xF3n con coreograf\xEDa", included: true },
        { text: "T\xE9cnico de iluminaci\xF3n toda la noche", included: true },
        { text: "Montaje anticipado + prueba de luces", included: true },
        { text: "Ideal para: fiestas 150-250 personas", included: true }
      ],
      ctaLabel: "Cotizar XV completo",
      ctaHref: "/contacto/"
    },
    {
      name: "XV Premium",
      price: "$16,000",
      priceNote: "+ IVA",
      description: "Todo lo anterior + city color + luces ne\xF3n + bola disco + gobos monograma. Producci\xF3n visual de nivel art\xEDstico.",
      features: [
        { text: "Todo lo incluido en XV Completo", included: true },
        { text: "City color para paredes del sal\xF3n", included: true },
        { text: "Letrero ne\xF3n personalizado con nombre", included: true },
        { text: "Bola disco profesional", included: true },
        { text: "Gobo monograma con iniciales o nombre", included: true },
        { text: "Visita previa al venue", included: true },
        { text: "2 t\xE9cnicos de iluminaci\xF3n", included: true },
        { text: "Ideal para: fiestas 250-400 personas", included: true }
      ],
      ctaLabel: "Cotizar XV premium",
      ctaHref: "/contacto/"
    },
    {
      name: "Producci\xF3n XV",
      price: "$26,000",
      priceNote: "+ IVA",
      description: "Producci\xF3n art\xEDstica completa: todo el cat\xE1logo de iluminaci\xF3n y efectos para una fiesta de 400+ personas.",
      features: [
        { text: "Todo lo incluido en XV Premium", included: true },
        { text: "8+ cabezas m\xF3viles para show de luces", included: true },
        { text: "Confeti ilimitado (m\xFAltiples momentos)", included: true },
        { text: "Director de iluminaci\xF3n dedicado", included: true },
        { text: "Coreograf\xEDa de luces sincronizada", included: true },
        { text: "Generador de energ\xEDa si es necesario", included: true },
        { text: "Dise\xF1o art\xEDstico integral del venue", included: true },
        { text: "Ideal para: fiestas 400+ personas", included: true }
      ],
      ctaLabel: "Cotizar producci\xF3n XV",
      ctaHref: "/contacto/"
    }
  ] })} </div> </section>  <section class="faq-section"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Preguntas sobre Iluminaci\xF3n para XV A\xF1os", "subtitle": "Todo lo que necesitas saber antes de la fiesta.", "paragraph1": "Si tienes otra duda, escr\xEDbenos por WhatsApp y te respondemos en minutos.", "paragraph2": "Te asesoramos seg\xFAn el venue, la tem\xE1tica y el protocolo que tenga planificado la quincea\xF1era." })} </div> ${renderComponent($$result2, "FaqSection", $$FaqSection, { "items": [
    { question: "\xBFEl seguidor sigue a la quincea\xF1era durante toda la fiesta?", answer: "El seguidor se usa en los momentos clave del protocolo: entrada triunfal, vals padre-hija, vals con chambel\xE1n, coreograf\xEDa de chambelanes, cambio de zapato y brindis. Entre momentos, se apaga para que la atenci\xF3n fluya naturalmente. Es m\xE1s impactante cuando se reserva para los momentos estelares." },
    { question: "\xBFPueden sincronizar las luces con la coreograf\xEDa de los chambelanes?", answer: "S\xED. Nuestro t\xE9cnico se coordina con el core\xF3grafo antes del evento para conocer los tiempos musicales y los cambios de formaci\xF3n. Las cabezas m\xF3viles cambian de color y patr\xF3n en sincron\xEDa con cada secci\xF3n de la coreograf\xEDa \u2014 intro, parte lenta, parte r\xE1pida y final." },
    { question: "\xBFQu\xE9 incluye el humo bajo para la entrada?", answer: "El efecto de humo bajo crea una capa de niebla de 30-40cm sobre el piso que dura 2-3 minutos. La quincea\xF1era camina sobre las nubes mientras el seguidor la ilumina. Incluye m\xE1quina de humo bajo profesional, l\xEDquido especial, operador y coordinaci\xF3n con el DJ para que la niebla aparezca justo cuando empieza la m\xFAsica de entrada." },
    { question: "\xBFEl confeti se puede usar en salones cerrados?", answer: "S\xED. Usamos confeti de papel que no da\xF1a pisos ni decoraci\xF3n. El confeti se dispara con ca\xF1ones de CO\u2082 que son seguros para interiores. Despu\xE9s del evento ayudamos con la recolecci\xF3n. Para salones que cobran limpieza extra, tenemos confeti de papel m\xE1s f\xE1cil de recoger." },
    { question: "\xBFCu\xE1nto tiempo antes montan el equipo?", answer: "Montamos 3-4 horas antes de la fiesta. Hacemos prueba de luces completa, calibramos el seguidor y verificamos que todo funcione antes de que lleguen los invitados. El t\xE9cnico permanece toda la noche operando las transiciones de iluminaci\xF3n en vivo." },
    { question: "\xBFQu\xE9 diferencia hay entre este servicio y el sonido para XV a\xF1os?", answer: "Este servicio cubre la iluminaci\xF3n y los efectos visuales \u2014 seguidor, cabezas m\xF3viles, humo bajo, confeti. El sonido para XV a\xF1os (bocinas, DJ, micr\xF3fono) es un servicio aparte que puedes contratar en nuestro paquete de bocinas para XV. Si necesitas ambos, te hacemos precio especial como paquete combinado." }
  ] })} </section>  <section class="services-section services-alt"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Servicios Individuales para XV A\xF1os", "subtitle": "\xBFSolo necesitas un servicio? Cotiza por separado.", "paragraph1": "Si ya tienes parte de la producci\xF3n resuelta y solo necesitas el seguidor o el humo bajo, cada servicio se cotiza individualmente. Tambi\xE9n puedes armar tu propio paquete combinando los que necesites.", "paragraph2": "Cada servicio individual incluye equipo, t\xE9cnico, traslado y montaje." })} <div class="services-grid"> ${serviciosRelacionados.map((s) => renderTemplate`${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "title": s.title, "image": s.image, "alt": s.alt, "description": s.description, "link": s.link })}`)} </div> </div> </section>  <section class="cta-section"> <div class="container"> <div class="cta-content"> <h2>¿Lista para hacer brillar a la quinceañera?</h2> <p>Cuéntanos sobre el venue, la fecha y qué momentos del protocolo quieres destacar. Te armamos el paquete perfecto en minutos.</p> <div class="cta-buttons"> <a href="/contacto/" class="btn btn-whatsapp btn-lg">Cotiza por WhatsApp</a> <a href="tel:+525530682988" class="btn btn-primary btn-lg">Llámanos — 55 3068 2988</a> </div> </div> </div> </section> ` })}`;
}, "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/pages/servicios/xv-anos.astro", void 0);

const $$file = "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/pages/servicios/xv-anos.astro";
const $$url = "/servicios/xv-anos";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$XvAnos,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
