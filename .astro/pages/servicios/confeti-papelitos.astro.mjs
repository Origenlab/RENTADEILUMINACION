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

const $$ConfetiPapelitos = createComponent(($$result, $$props, $$slots) => {
  const title = "Confeti y Papelitos para Bodas y Salidas de Iglesia CDMX | REDEIL";
  const description = "Lluvia de confeti para la salida de iglesia, el vals y el primer beso. Ca\xF1ones de CO\u2082 y confeti manual biodegradable. Desde $1,500 + IVA en CDMX.";
  const canonical = "https://rentadeiluminacion.com/servicios/confeti-papelitos/";
  const schemaMarkup = JSON.stringify([
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Confeti y Papelitos para Bodas y Salidas de Iglesia",
      "provider": {
        "@type": "LocalBusiness",
        "name": "REDEIL",
        "url": "https://rentadeiluminacion.com",
        "telephone": "+525530682988",
        "address": { "@type": "PostalAddress", "addressLocality": "Ciudad de M\xE9xico", "addressRegion": "CDMX", "addressCountry": "MX" }
      },
      "description": "Servicio de confeti y papelitos para bodas \u2014 lluvia de p\xE9talos en salida de iglesia, confeti biodegradable para el vals y ca\xF1ones de CO\u2082 sutiles para momentos ceremoniales en CDMX.",
      "areaServed": [
        { "@type": "City", "name": "Ciudad de M\xE9xico" },
        { "@type": "State", "name": "Estado de M\xE9xico" }
      ],
      "serviceType": "Confeti y Papelitos para Bodas",
      "priceRange": "$$"
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "\xBFEl confeti biodegradable se puede usar en la salida de la iglesia?", "acceptedAnswer": { "@type": "Answer", "text": "S\xED. El confeti de papel biodegradable es la opci\xF3n ideal para salidas de iglesia \u2014 se disuelve con agua en 24-72 horas sin dejar residuo en la banqueta ni da\xF1ar jardines. Es el tipo de confeti que recomendamos para cualquier espacio al aire libre." } },
        { "@type": "Question", "name": "\xBFCu\xE1ntos ca\xF1ones necesito para mi boda?", "acceptedAnswer": { "@type": "Answer", "text": "Depende del momento. Para la salida de iglesia con 50-80 personas, basta con confeti manual biodegradable sin ca\xF1ones. Para el vals en sal\xF3n, 2 ca\xF1ones de CO\u2082 sutiles cubren bien una pista de 100m\xB2. Para una boda completa con m\xFAltiples momentos (entrada, vals, salida), recomendamos 4 ca\xF1ones posicionados estrat\xE9gicamente." } },
        { "@type": "Question", "name": "\xBFEl confeti de p\xE9talos es real o artificial?", "acceptedAnswer": { "@type": "Answer", "text": "Ofrecemos ambas opciones. Los p\xE9talos naturales son ideales para ceremonias \xEDntimas y fotograf\xEDas rom\xE1nticas. Los p\xE9talos de tela y papel biodegradable son m\xE1s econ\xF3micos y funcionan mejor con ca\xF1ones de CO\u2082 porque tienen el peso correcto para flotar en el aire." } }
      ]
    }
  ]);
  const serviciosRelacionados = [
    { title: "M\xE1quinas de Confeti CO\u2082", image: "/img/confeti/maquina-confeti-boda-novios-celebracion.avif", alt: "M\xE1quina de confeti CO\u2082 para eventos masivos", description: "\xBFNecesitas explosiones de confeti para un concierto, festival o evento masivo? Las m\xE1quinas de CO\u2082 profesionales cubren estadios completos.", link: "/servicios/confeti/" },
    { title: "Humo Bajo", image: "/img/humo-bajo/humo-bajo-primer-baile-boda-romantico.avif", alt: "Humo bajo en primer baile de boda", description: "Confeti cayendo + niebla baja en el piso = la foto m\xE1s cinematogr\xE1fica de tu boda. Dos efectos que se complementan perfecto.", link: "/servicios/humo-bajo/" },
    { title: "Burbujas", image: "/img/burbujas/burbujas-efecto-especial-fotografia-video.avif", alt: "Burbujas en boda de jard\xEDn", description: "Burbujas + p\xE9talos en la salida de iglesia. Una combinaci\xF3n delicada y rom\xE1ntica que encanta a todos los invitados.", link: "/servicios/burbujas/" },
    { title: "Seguidor de Luz", image: "/img/seguidor/luz-seguidor-boda-baile-novios-salon-candil.avif", alt: "Seguidor iluminando vals de novios", description: "Spotlight en los novios + lluvia de confeti = la imagen que la gente enmarca. El efecto m\xE1s fotografiado en bodas.", link: "/servicios/seguidor/" }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "canonical": canonical, "schemaMarkup": schemaMarkup }, { "breadcrumbs": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "breadcrumbs" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Breadcrumbs", $$Breadcrumbs, { "items": [
    { label: "Inicio", href: "/" },
    { label: "Efectos Especiales", href: "/servicios/efectos-especiales/" },
    { label: "Confeti y Papelitos para Bodas" }
  ] })} ` })}`, "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, { "title": "Confeti y Papelitos para el Momento M\xE1s Fotografiado de tu Boda", "subtitle": "Lluvia de confeti en la salida de iglesia, el primer beso y el vals. P\xE9talos, confeti biodegradable y ca\xF1ones de CO\u2082 sutiles. Desde $1,500 + IVA.", "introParagraph1": "Hay un momento en cada boda que todo el mundo recuerda: los novios cruzando la puerta de la iglesia bajo una lluvia de p\xE9talos y confeti. Las c\xE1maras disparan, los invitados aplauden y por un segundo el tiempo se detiene. Ese momento no necesita una m\xE1quina de CO\u2082 industrial \u2014 necesita <strong>confeti manual biodegradable, p\xE9talos naturales o ca\xF1ones sutiles</strong> que crean una nube delicada, \xEDntima y perfectamente coordinada con el fot\xF3grafo.", "introParagraph2": "En <strong>REDEIL</strong> nos especializamos en los momentos ceremoniales de la boda: la salida de iglesia, el primer beso como esposos, el vals padre-hija y el primer baile. Cada momento tiene su propio tipo de confeti \u2014 p\xE9talos para la ceremonia, confeti biodegradable para exteriores, corazones dorados para el vals. Coordinamos cada disparo con el fot\xF3grafo y el vide\xF3grafo para que la lluvia suceda exactamente cuando la c\xE1mara est\xE1 lista. Bodas \xEDntimas de 50 personas hasta celebraciones de 400+ en toda la CDMX y Estado de M\xE9xico." })} ${renderComponent($$result2, "CtaBar", $$CtaBar, { "headline": "\xBFEn qu\xE9 momento quieres la lluvia de confeti?", "items": [
    { label: "Salida de Iglesia", href: "#paquetes", icon: "efectos" },
    { label: "Vals y Primer Baile", href: "#paquetes", icon: "efectos" },
    { label: "M\xE1s efectos boda", href: "/servicios/bodas/", icon: "iluminacion" },
    { label: "Cotiza Gratis", href: "/contacto/", icon: "cotizar" }
  ] })}  ${maybeRenderHead()}<section class="services-section"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Confeti y p\xE9talos en bodas reales", "subtitle": "Salidas de iglesia, vals, primer beso \u2014 cada momento con su confeti ideal.", "paragraph1": "El confeti dorado cayendo sobre los novios en su primer baile. Los p\xE9talos rosas volando en la salida de la iglesia. Los corazones de papel flotando mientras se dan el primer beso como esposos. Cada uno de estos momentos merece un tipo diferente de confeti y un timing perfecto.", "paragraph2": "Nuestro equipo trabaja directamente con tu fot\xF3grafo y vide\xF3grafo. El operador espera la se\xF1al exacta para que la lluvia de confeti coincida con el momento en que las c\xE1maras est\xE1n listas." })} ${renderComponent($$result2, "Gallery4x4", $$Gallery4X4, { "images": [
    { src: "/img/maquina-de-papelitos/confeti-salida-iglesia-boda-novios-felices.avif", alt: "Confeti en salida de iglesia de boda con novios felices" },
    { src: "/img/maquina-de-papelitos/confeti-rosa-boda-atardecer-beso-novios.avif", alt: "Confeti rosa en boda al atardecer con beso de novios" },
    { src: "/img/maquina-de-papelitos/confeti-dorado-primer-baile-novios-romantico.avif", alt: "Confeti dorado en primer baile de novios rom\xE1ntico" },
    { src: "/img/maquina-de-papelitos/confeti-petalos-boda-jardin-camino-novios.avif", alt: "P\xE9talos y confeti en camino de novios en boda de jard\xEDn" },
    { src: "/img/confeti/confeti-dorado-boda-novios-fiesta.avif", alt: "Confeti dorado en fiesta de boda con novios" },
    { src: "/img/maquina-de-papelitos/maquina-confeti-primer-baile-boda-salon-elegante.avif", alt: "Confeti en primer baile de boda en sal\xF3n elegante" },
    { src: "/img/maquina-de-papelitos/explosion-confeti-blanco-boda-pista-baile.avif", alt: "Explosi\xF3n de confeti blanco en pista de baile de boda" },
    { src: "/img/maquina-de-papelitos/confeti-rosa-boda-jardin-atardecer-novios.avif", alt: "Confeti rosa en boda de jard\xEDn al atardecer" },
    { src: "/img/maquina-de-papelitos/lluvia-papelitos-boda-elegante-candelabros.avif", alt: "Lluvia de papelitos en boda elegante con candelabros" },
    { src: "/img/maquina-de-papelitos/maquina-confeti-baile-padre-novia-recepcion.avif", alt: "Confeti en baile de padre con novia en recepci\xF3n" },
    { src: "/img/confeti/maquina-confeti-boda-novios-celebracion.avif", alt: "M\xE1quina de confeti en celebraci\xF3n de boda" },
    { src: "/img/maquina-de-papelitos/lluvia-confeti-corazones-xv-anos-vestido-rosa.avif", alt: "Lluvia de confeti corazones en celebraci\xF3n con vestido rosa" },
    { src: "/img/maquina-de-papelitos/lluvia-confeti-boda-candelier-chispas-frias.avif", alt: "Lluvia de confeti con candelier y chispas fr\xEDas en boda" },
    { src: "/img/maquina-de-papelitos/confeti-dorado-xv-anos-vals-quincea\xF1era.avif", alt: "Confeti dorado en vals de celebraci\xF3n" },
    { src: "/img/maquina-de-papelitos/maquina-confeti-xv-anos-baile-padre-quincea\xF1era.avif", alt: "Confeti en baile emotivo padre e hija" },
    { src: "/img/maquina-de-papelitos/explosion-confeti-rosa-revelacion-sexo-bebe-nina.avif", alt: "Explosi\xF3n de confeti rosa en celebraci\xF3n especial" }
  ] })} </div> </section>  <section class="services-section services-alt" id="paquetes"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Paquetes de Confeti para Bodas", "subtitle": "Desde la salida de iglesia hasta la producci\xF3n completa. Operador y coordinaci\xF3n incluidos.", "paragraph1": "Cada paquete incluye el confeti en el color y forma que elijas, operador t\xE9cnico, traslado y coordinaci\xF3n con tu fot\xF3grafo. El operador sincroniza cada disparo con las c\xE1maras para que la lluvia suceda en el momento exacto.", "paragraph2": "\xBFP\xE9talos naturales, confeti biodegradable o corazones dorados? Te asesoramos seg\xFAn el venue, el momento y el estilo de tu boda." })} ${renderComponent($$result2, "PricingCards", $$PricingCards, { "packages": [
    {
      name: "Salida de Iglesia",
      price: "$1,500",
      priceNote: "+ IVA",
      description: "Confeti manual biodegradable y p\xE9talos para la salida de iglesia. El momento m\xE1s cl\xE1sico y fotografiado.",
      features: [
        { text: "Confeti manual biodegradable para invitados", included: true },
        { text: "P\xE9talos naturales o de tela incluidos", included: true },
        { text: "Distribuci\xF3n a 50-80 invitados", included: true },
        { text: "Coordinaci\xF3n con fot\xF3grafo/vide\xF3grafo", included: true },
        { text: "Ideal para: salida de iglesia, ceremonia civil", included: true },
        { text: "Ca\xF1ones de CO\u2082", included: false },
        { text: "M\xFAltiples momentos", included: false },
        { text: "Confeti met\xE1lico o dorado", included: false }
      ],
      ctaLabel: "Cotizar salida de iglesia",
      ctaHref: "/contacto/"
    },
    {
      name: "Bodas \xCDntimas",
      price: "$2,500",
      priceNote: "+ IVA",
      badge: "M\xE1s popular",
      highlight: true,
      description: "2 ca\xF1ones de CO\u2082 sutiles + confeti biodegradable + p\xE9talos para el vals y un momento adicional.",
      features: [
        { text: "2 ca\xF1ones de CO\u2082 sutiles", included: true },
        { text: "Confeti biodegradable + p\xE9talos", included: true },
        { text: "2 momentos: vals + salida o primer beso", included: true },
        { text: "Operador t\xE9cnico incluido", included: true },
        { text: "Coordinaci\xF3n con fot\xF3grafo y DJ", included: true },
        { text: "Traslado + montaje + desmontaje", included: true },
        { text: "Ideal para: bodas \xEDntimas 50-150 personas", included: true },
        { text: "Colores a tu elecci\xF3n", included: true }
      ],
      ctaLabel: "Cotizar bodas \xEDntimas",
      ctaHref: "/contacto/"
    },
    {
      name: "Boda Completa",
      price: "$4,500",
      priceNote: "+ IVA",
      description: "4 ca\xF1ones + confeti biodegradable para m\xFAltiples momentos: entrada, vals, primer beso y salida.",
      features: [
        { text: "4 ca\xF1ones de CO\u2082 profesionales", included: true },
        { text: "Confeti biodegradable en varios colores", included: true },
        { text: "Cobertura de 3-4 momentos del evento", included: true },
        { text: "Entrada + vals + primer beso + salida", included: true },
        { text: "Operador t\xE9cnico toda la recepci\xF3n", included: true },
        { text: "Coordinaci\xF3n completa con DJ y MC", included: true },
        { text: "P\xE9talos + corazones + confeti circular", included: true },
        { text: "Ideal para: bodas 150-300 personas", included: true }
      ],
      ctaLabel: "Cotizar boda completa",
      ctaHref: "/contacto/"
    },
    {
      name: "Producci\xF3n Boda Premium",
      price: "$7,500",
      priceNote: "+ IVA",
      description: "8 ca\xF1ones + confeti dorado premium + p\xE9talos + coordinaci\xF3n completa de todos los momentos ceremoniales.",
      features: [
        { text: "8 ca\xF1ones de CO\u2082 posicionados estrat\xE9gicamente", included: true },
        { text: "Confeti dorado, corazones y p\xE9talos premium", included: true },
        { text: "Cobertura ilimitada de momentos", included: true },
        { text: "Equipo t\xE9cnico completo (2 operadores)", included: true },
        { text: "Visita previa al venue", included: true },
        { text: "Coordinaci\xF3n con wedding planner", included: true },
        { text: "Confeti biodegradable para exteriores", included: true },
        { text: "Ideal para: bodas 300+ personas", included: true }
      ],
      ctaLabel: "Cotizar producci\xF3n premium",
      ctaHref: "/contacto/"
    }
  ] })} </div> </section>  <section class="faq-section"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Preguntas sobre Confeti para Bodas", "subtitle": "Todo lo que necesitas saber antes de tu boda.", "paragraph1": "Si tienes otra duda, escr\xEDbenos por WhatsApp y te respondemos en minutos.", "paragraph2": "Te asesoramos sobre tipo de confeti, colores y log\xEDstica seg\xFAn tu venue y estilo de boda." })} </div> ${renderComponent($$result2, "FaqSection", $$FaqSection, { "items": [
    { question: "\xBFEl confeti biodegradable se puede usar en la salida de la iglesia?", answer: "S\xED. El confeti de papel biodegradable es la opci\xF3n ideal para salidas de iglesia \u2014 se disuelve con agua en 24-72 horas sin dejar residuo en la banqueta ni da\xF1ar jardines. Es el tipo de confeti que recomendamos para cualquier espacio al aire libre. Muchas iglesias y haciendas lo permiten sin problema." },
    { question: "\xBFCu\xE1ntos ca\xF1ones necesito para mi boda?", answer: "Depende del momento. Para la salida de iglesia con 50-80 personas, basta con confeti manual biodegradable sin ca\xF1ones. Para el vals en sal\xF3n, 2 ca\xF1ones de CO\u2082 sutiles cubren bien una pista de 100m\xB2. Para una boda completa con m\xFAltiples momentos (entrada, vals, salida), recomendamos 4 ca\xF1ones posicionados estrat\xE9gicamente." },
    { question: "\xBFEl confeti de p\xE9talos es real o artificial?", answer: "Ofrecemos ambas opciones. Los p\xE9talos naturales son ideales para ceremonias \xEDntimas y fotograf\xEDas rom\xE1nticas. Los p\xE9talos de tela y papel biodegradable son m\xE1s econ\xF3micos y funcionan mejor con ca\xF1ones de CO\u2082 porque tienen el peso correcto para flotar en el aire. Te asesoramos seg\xFAn el estilo de tu boda." },
    { question: "\xBFQu\xE9 diferencia hay entre este servicio y las m\xE1quinas de confeti CO\u2082?", answer: "Este servicio est\xE1 dise\xF1ado para momentos ceremoniales de bodas \u2014 salida de iglesia, primer beso, vals. Usamos confeti sutil, p\xE9talos y ca\xF1ones de CO\u2082 discretos. Las m\xE1quinas de confeti CO\u2082 (servicio aparte) son explosiones de gran alcance para conciertos, festivales y eventos masivos donde el impacto visual debe llegar a cientos de personas." },
    { question: "\xBFCoordinan con mi fot\xF3grafo?", answer: "Siempre. El operador se presenta con tu fot\xF3grafo y vide\xF3grafo antes de la ceremonia para acordar las se\xF1ales de timing. La lluvia de confeti sucede exactamente cuando las c\xE1maras est\xE1n listas \u2014 eso es lo que diferencia un servicio profesional de lanzar confeti al azar." },
    { question: "\xBFQu\xE9 colores y formas de confeti tienen?", answer: "Para bodas tenemos: dorado, plateado, blanco, rosa, champagne y colores personalizados. En formas: corazones, c\xEDrculos, estrellas, mariposas y p\xE9talos. El confeti dorado con corazones es el m\xE1s solicitado para el vals, y los p\xE9talos blancos o rosas para la salida de iglesia." }
  ] })} </section>  <section class="services-section services-alt"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Combina con Otros Efectos para tu Boda", "subtitle": "El confeti es solo uno de los momentos m\xE1gicos.", "paragraph1": "Confeti en el primer baile + humo bajo en el piso + spotlight del seguidor iluminando a los novios. Esa combinaci\xF3n es la foto que la gente enmarca y comparte. Cada efecto se potencia cuando se combina con los dem\xE1s.", "paragraph2": "Armamos paquetes combinados con precio especial para bodas completas." })} <div class="services-grid"> ${serviciosRelacionados.map((s) => renderTemplate`${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "title": s.title, "image": s.image, "alt": s.alt, "description": s.description, "link": s.link })}`)} </div> </div> </section>  <section class="cta-section"> <div class="container"> <div class="cta-content"> <h2>¿Lista para la lluvia de confeti en tu boda?</h2> <p>Cuéntanos en qué momento quieres el confeti — salida de iglesia, vals, primer beso — y te armamos el paquete perfecto.</p> <div class="cta-buttons"> <a href="/contacto/" class="btn btn-whatsapp btn-lg">Cotiza por WhatsApp</a> <a href="tel:+525530682988" class="btn btn-primary btn-lg">Llámanos — 55 3068 2988</a> </div> </div> </div> </section> ` })}`;
}, "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/pages/servicios/confeti-papelitos.astro", void 0);

const $$file = "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/pages/servicios/confeti-papelitos.astro";
const $$url = "/servicios/confeti-papelitos";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ConfetiPapelitos,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
