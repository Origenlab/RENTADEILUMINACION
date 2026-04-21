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

const $$RobotLed = createComponent(($$result, $$props, $$slots) => {
  const title = "Renta de Robot LED CDMX | REDEIL \u2014 Efectos Autom\xE1ticos para Pista";
  const description = "Renta de robot LED en CDMX. Efectos rob\xF3ticos autom\xE1ticos para pistas de baile de bodas, XV a\xF1os y fiestas. Mueve, cambia de color y crea shows de luz.";
  const canonical = "https://rentadeiluminacion.com/servicios/robot-led/";
  const schemaMarkup = JSON.stringify([
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Renta de Robot LED para Eventos CDMX",
      "provider": {
        "@type": "LocalBusiness",
        "name": "REDEIL",
        "url": "https://rentadeiluminacion.com",
        "telephone": "+525530682988",
        "address": { "@type": "PostalAddress", "addressLocality": "Ciudad de M\xE9xico", "addressRegion": "CDMX", "addressCountry": "MX" }
      },
      "description": "Renta de robot LED en CDMX. Efectos de luces rob\xF3ticas autom\xE1ticas para pistas de baile, entradas espectaculares y momentos especiales en eventos.",
      "areaServed": [
        { "@type": "City", "name": "Ciudad de M\xE9xico" },
        { "@type": "State", "name": "Estado de M\xE9xico" }
      ],
      "serviceType": "Renta de Robot LED",
      "priceRange": "$$"
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "\xBFQu\xE9 es un robot LED para eventos?", "acceptedAnswer": { "@type": "Answer", "text": "Un robot LED es un efecto automatizado que combina movimiento motorizado con iluminaci\xF3n LED multicolor. Se programa para crear shows de luces sincronizados con la m\xFAsica: gira, cambia de color, proyecta patrones y responde al beat. Es diferente a las cabezas m\xF3viles porque es un sistema aut\xF3nomo con coreograf\xEDa preprogramada." } },
        { "@type": "Question", "name": "\xBFEl robot LED necesita operador?", "acceptedAnswer": { "@type": "Answer", "text": "Depende del modo de operaci\xF3n. Puede funcionar en modo autom\xE1tico sin operador (reacciona a la m\xFAsica con sus sensores de sonido) o en modo manual DMX controlado por nuestro t\xE9cnico para coreograf\xEDas espec\xEDficas. Lo m\xE1s com\xFAn para eventos es el modo autom\xE1tico con supervisi\xF3n t\xE9cnica." } },
        { "@type": "Question", "name": "\xBFCu\xE1ntos robots LED necesito para mi evento?", "acceptedAnswer": { "@type": "Answer", "text": "Para una pista de baile est\xE1ndar, 2-4 robots son suficientes para crear un show visual completo. Para venues grandes o eventos con escenario, 6-8 unidades crean un efecto de producci\xF3n profesional. Te asesoramos seg\xFAn las dimensiones de tu espacio." } },
        { "@type": "Question", "name": "\xBFEl robot LED se puede sincronizar con el DJ?", "acceptedAnswer": { "@type": "Answer", "text": "S\xED. El robot LED se puede programar para sincronizarse con el sistema DMX del DJ o funcionar en modo sound-active que reacciona autom\xE1ticamente al volumen y ritmo de la m\xFAsica. El t\xE9cnico de REDEIL configura el equipo seg\xFAn el set del DJ." } },
        { "@type": "Question", "name": "\xBFEl robot LED funciona en interiores y exteriores?", "acceptedAnswer": { "@type": "Answer", "text": "El robot LED est\xE1 dise\xF1ado principalmente para interiores. Para eventos en exteriores, recomendamos cabezas m\xF3viles o sky trackers que tienen mayor potencia de iluminaci\xF3n. En terrazas cerradas o carpas con techo, el robot LED funciona perfectamente." } },
        { "@type": "Question", "name": "\xBFCu\xE1nto cuesta rentar un robot LED en CDMX?", "acceptedAnswer": { "@type": "Answer", "text": "Los paquetes de robot LED comienzan desde $4,500 + IVA para 2 unidades con t\xE9cnico incluido. El precio var\xEDa seg\xFAn el n\xFAmero de robots y la duraci\xF3n del evento. Cotiza por WhatsApp con la informaci\xF3n de tu evento." } }
      ]
    }
  ]);
  const serviciosRelacionados = [
    { title: "Cabezas M\xF3viles", image: "/img/cabezas-moviles/renta-cabezas-moviles-boda-beams-blancos-elegante-300w.avif", alt: "Cabezas m\xF3viles LED en boda elegante", description: "Combinadas con el robot LED, las cabezas m\xF3viles crean un show de luces completo con mayor potencia y alcance.", link: "/servicios/cabezas-moviles/" },
    { title: "Bola Disco", image: "/img/bola-disco/bola-disco-dj-pista-baile-evento.avif", alt: "Bola disco gigante en pista de baile", description: "Bola disco + robot LED = pista de baile con dos dimensiones de efecto. Los reflejos de la bola combinados con el movimiento del robot.", link: "/servicios/bola-disco/" },
    { title: "Luces LED", image: "/img/city-color/renta-luces-hacienda-boda-fuente-300w.avif", alt: "Iluminaci\xF3n LED en evento", description: "Las luces LED de ambiente complementan el show del robot. Mientras el robot mueve la pista, el LED ba\xF1a el resto del espacio.", link: "/servicios/luces-led/" },
    { title: "DJ Profesional", image: "/img/bocinas-djs/dj-para-eventos-cdmx-cabina-profesional-300w.avif", alt: "DJ profesional en cabina para eventos CDMX", description: "El robot LED funciona en sincron\xEDa con el DJ. Juntos crean la experiencia de pista de baile m\xE1s completa.", link: "/servicios/bocinas-djs/" }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "canonical": canonical, "schemaMarkup": schemaMarkup }, { "breadcrumbs": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "breadcrumbs" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Breadcrumbs", $$Breadcrumbs, { "items": [
    { label: "Inicio", href: "/" },
    { label: "Iluminaci\xF3n", href: "/servicios/iluminacion/" },
    { label: "Robot LED" }
  ] })} ` })}`, "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, { "title": "Renta de Robot LED en CDMX", "subtitle": "Robots de luz automatizados que se mueven, cambian de color y crean shows sincronizados con la m\xFAsica. Operaci\xF3n incluida.", "whatsappText": "Hola,%20quiero%20cotizar%20robot%20LED%20para%20mi%20evento", "introParagraph1": "El robot LED transforma cualquier pista de baile en un show de iluminaci\xF3n profesional. En <strong>REDEIL</strong> rentamos robots LED que combinan movimiento motorizado, iluminaci\xF3n multicolor y efectos programables para crear coreograf\xEDas de luces autom\xE1ticas sincronizadas con la m\xFAsica. Se mueven, giran, proyectan patrones de colores y reaccionan al ritmo del DJ \u2014 sin operador constante, de forma aut\xF3noma.", "introParagraph2": "Son ideales para el primer vals en bodas, la entrada de quincea\xF1era, la hora loca y la pista de baile principal. El robot LED trabaja perfectamente en conjunto con cabezas m\xF3viles, par LED y bola disco para crear ambientes \xFAnicos en cualquier tipo de venue. Con m\xE1s de 30 a\xF1os en el sector, <strong>REDEIL</strong> programa el show de luces perfecto para tu celebraci\xF3n en CDMX y Estado de M\xE9xico." })} ${renderComponent($$result2, "CtaBar", $$CtaBar, { "headline": "\xBFQu\xE9 tipo de show de luces necesitas?", "items": [
    { label: "Cabezas M\xF3viles", href: "/servicios/cabezas-moviles/", icon: "iluminacion" },
    { label: "Bola Disco", href: "/servicios/bola-disco/", icon: "iluminacion" },
    { label: "Toda la Iluminaci\xF3n", href: "/servicios/iluminacion/", icon: "iluminacion" },
    { label: "Cotiza Gratis", href: "/contacto/", icon: "cotizar" }
  ] })} ${maybeRenderHead()}<section class="services-section"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Shows de luz autom\xE1ticos con tecnolog\xEDa rob\xF3tica", "subtitle": "Sincronizaci\xF3n autom\xE1tica con la m\xFAsica. Coreograf\xEDas preprogramadas. Sin necesidad de operador constante.", "paragraph1": "Los robots LED que usamos en REDEIL son equipos de grado profesional con motores de paso precisos, LEDs RGBW de alta potencia y sensores de audio que les permiten reaccionar al ritmo de la m\xFAsica. En modo autom\xE1tico, el robot crea shows de luz completamente aut\xF3nomos que se adaptan a cada canci\xF3n.", "paragraph2": "En modo DMX, nuestro t\xE9cnico puede programar coreograf\xEDas espec\xEDficas para momentos clave del evento: una secuencia especial para el vals, un modo agresivo para la hora loca, una paleta de colores que coincide con la decoraci\xF3n del sal\xF3n. La versatilidad del robot LED lo hace \xFAtil en cualquier momento de la noche." })} ${renderComponent($$result2, "Gallery4x4", $$Gallery4X4, { "images": [
    { src: "/img/galeria/cabezas-moviles-01.avif", alt: "Robot LED en pista de baile de boda CDMX" },
    { src: "/img/galeria/cabezas-moviles-02.avif", alt: "Show de luces rob\xF3tico en XV a\xF1os sal\xF3n" },
    { src: "/img/galeria/cabezas-moviles-03.avif", alt: "Robot LED multicolor en evento corporativo" },
    { src: "/img/galeria/cabezas-moviles-04.avif", alt: "Efectos autom\xE1ticos robot LED fiesta privada" },
    { src: "/img/galeria/cabezas-moviles-05.avif", alt: "Robot LED sincronizado con DJ en boda" },
    { src: "/img/galeria/cabezas-moviles-06.avif", alt: "Show luz rob\xF3tico entrada de novios hacienda" },
    { src: "/img/galeria/cabezas-moviles-07.avif", alt: "Robot LED beams de colores en pista de baile" },
    { src: "/img/galeria/cabezas-moviles-08.avif", alt: "Iluminaci\xF3n autom\xE1tica rob\xF3tica en sal\xF3n de eventos" },
    { src: "/img/galeria/bola-disco-01.avif", alt: "Robot LED con bola disco en fiesta de XV a\xF1os" },
    { src: "/img/galeria/bola-disco-02.avif", alt: "Show de luces completo robot LED bola disco" },
    { src: "/img/galeria/bola-disco-03.avif", alt: "Robot LED efectos en pista de baile bodas" },
    { src: "/img/galeria/bola-disco-04.avif", alt: "Luces rob\xF3ticas LED para eventos especiales CDMX" },
    { src: "/img/galeria/fiestas-01.avif", alt: "Robot LED en fiesta privada CDMX" },
    { src: "/img/galeria/fiestas-02.avif", alt: "Show rob\xF3tico LED en hora loca de boda" },
    { src: "/img/galeria/fiestas-03.avif", alt: "Efectos LED autom\xE1ticos en fiesta de cumplea\xF1os" },
    { src: "/img/galeria/fiestas-04.avif", alt: "Robot LED profesional en evento social CDMX" }
  ] })} </div> </section> <section class="services-section services-alt"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Paquetes de Robot LED para Eventos", "subtitle": "4 configuraciones desde 2 hasta 8 robots. T\xE9cnico de iluminaci\xF3n incluido.", "paragraph1": "Todos los paquetes incluyen los robots LED, programaci\xF3n del show, t\xE9cnico de iluminaci\xF3n, transporte, instalaci\xF3n y retiro. Sin costos adicionales.", "paragraph2": "\xBFQuieres combinar con cabezas m\xF3viles o par LED para un show completo? Te armamos una propuesta integral." })} ${renderComponent($$result2, "PricingCards", $$PricingCards, { "packages": [
    {
      name: "B\xE1sico \u2014 2 Robots",
      price: "$4,500",
      priceNote: "+ IVA",
      description: "2 robots LED para una pista de baile peque\xF1a o un efecto puntual en el primer vals o hora loca.",
      features: [
        { text: "2 robots LED RGBW profesionales", included: true },
        { text: "Modo sound-active autom\xE1tico", included: true },
        { text: "T\xE9cnico de iluminaci\xF3n incluido", included: true },
        { text: "Transporte + instalaci\xF3n + retiro", included: true },
        { text: "Ideal: fiestas hasta 80 personas", included: true },
        { text: "Programaci\xF3n b\xE1sica incluida", included: true },
        { text: "Control DMX personalizado", included: false },
        { text: "Coreograf\xEDas para momentos clave", included: false }
      ],
      ctaLabel: "Cotizar paquete b\xE1sico",
      ctaHref: "/contacto/"
    },
    {
      name: "Est\xE1ndar \u2014 4 Robots",
      price: "$7,000",
      priceNote: "+ IVA",
      badge: "M\xE1s popular",
      highlight: true,
      description: "4 robots para cobertura completa de la pista. Shows autom\xE1ticos + coreograf\xEDas para vals y hora loca.",
      features: [
        { text: "4 robots LED RGBW profesionales", included: true },
        { text: "Modo sound-active + control DMX", included: true },
        { text: "T\xE9cnico de iluminaci\xF3n incluido", included: true },
        { text: "Transporte + instalaci\xF3n + retiro", included: true },
        { text: "Coreograf\xEDas para vals y hora loca", included: true },
        { text: "Sincronizaci\xF3n con DJ incluida", included: true },
        { text: "Ideal: bodas, XV a\xF1os, salones", included: true },
        { text: "Coordinaci\xF3n con fot\xF3grafo", included: true }
      ],
      ctaLabel: "Cotizar paquete est\xE1ndar",
      ctaHref: "/contacto/"
    },
    {
      name: "Premium \u2014 6 Robots",
      price: "$10,000",
      priceNote: "+ IVA",
      description: "6 robots para venues grandes. Show de luces profesional con coreograf\xEDas m\xFAltiples durante todo el evento.",
      features: [
        { text: "6 robots LED RGBW profesionales", included: true },
        { text: "Control DMX completo", included: true },
        { text: "T\xE9cnico de iluminaci\xF3n + asistente", included: true },
        { text: "Transporte + instalaci\xF3n + retiro", included: true },
        { text: "Coreograf\xEDas para cada momento", included: true },
        { text: "Sincronizaci\xF3n avanzada con DJ", included: true },
        { text: "Ideal: haciendas, jardines, galas", included: true },
        { text: "Integraci\xF3n con rest del sistema LED", included: true }
      ],
      ctaLabel: "Cotizar paquete premium",
      ctaHref: "/contacto/"
    },
    {
      name: "Show \u2014 8 Robots",
      price: "$14,000",
      priceNote: "+ IVA",
      description: "8 robots para producci\xF3n completa. El m\xE1ximo impacto visual con show de luces de nivel profesional.",
      features: [
        { text: "8 robots LED RGBW profesionales", included: true },
        { text: "Consola DMX dedicada", included: true },
        { text: "Iluminador profesional en cabina", included: true },
        { text: "Transporte + instalaci\xF3n + retiro", included: true },
        { text: "Show completo programado", included: true },
        { text: "Visita previa de dise\xF1o incluida", included: true },
        { text: "Ideal: bodas de lujo, producciones", included: true },
        { text: "Integraci\xF3n completa con DJ y audio", included: true }
      ],
      ctaLabel: "Cotizar show completo",
      ctaHref: "/contacto/"
    }
  ] })} </div> </section> <section class="faq-section"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Preguntas sobre Robot LED para Eventos", "subtitle": "Todo lo que necesitas saber antes de contratar.", "paragraph1": "Si tu duda no est\xE1 aqu\xED, escr\xEDbenos por WhatsApp y te respondemos en minutos.", "paragraph2": "El robot LED es uno de los efectos m\xE1s solicitados para pistas de baile en bodas y XV a\xF1os en CDMX." })} </div> ${renderComponent($$result2, "FaqSection", $$FaqSection, { "items": [
    { question: "\xBFQu\xE9 es un robot LED para eventos?", answer: "Un robot LED es un efecto automatizado que combina movimiento motorizado con iluminaci\xF3n LED multicolor. Se programa para crear shows de luces sincronizados con la m\xFAsica: gira, cambia de color, proyecta patrones y responde al beat. Es diferente a las cabezas m\xF3viles porque es un sistema aut\xF3nomo con coreograf\xEDa preprogramada." },
    { question: "\xBFEl robot LED necesita operador?", answer: "Depende del modo de operaci\xF3n. Puede funcionar en modo autom\xE1tico sin operador (reacciona a la m\xFAsica con sus sensores de sonido) o en modo manual DMX controlado por nuestro t\xE9cnico para coreograf\xEDas espec\xEDficas. Lo m\xE1s com\xFAn para eventos es el modo autom\xE1tico con supervisi\xF3n t\xE9cnica." },
    { question: "\xBFCu\xE1ntos robots LED necesito para mi evento?", answer: "Para una pista de baile est\xE1ndar, 2-4 robots son suficientes para crear un show visual completo. Para venues grandes o eventos con escenario, 6-8 unidades crean un efecto de producci\xF3n profesional. Te asesoramos seg\xFAn las dimensiones de tu espacio." },
    { question: "\xBFEl robot LED se puede sincronizar con el DJ?", answer: "S\xED. El robot LED se puede programar para sincronizarse con el sistema DMX del DJ o funcionar en modo sound-active que reacciona autom\xE1ticamente al volumen y ritmo de la m\xFAsica. El t\xE9cnico de REDEIL configura el equipo seg\xFAn el set del DJ." },
    { question: "\xBFEl robot LED funciona en interiores y exteriores?", answer: "El robot LED est\xE1 dise\xF1ado principalmente para interiores. Para eventos en exteriores, recomendamos cabezas m\xF3viles o sky trackers que tienen mayor potencia de iluminaci\xF3n. En terrazas cerradas o carpas con techo, el robot LED funciona perfectamente." },
    { question: "\xBFCu\xE1nto cuesta rentar un robot LED en CDMX?", answer: "Los paquetes de robot LED comienzan desde $4,500 + IVA para 2 unidades con t\xE9cnico incluido. El precio var\xEDa seg\xFAn el n\xFAmero de robots y la duraci\xF3n del evento. Cotiza por WhatsApp con la informaci\xF3n de tu evento." }
  ] })} </section> <section class="services-section services-alt"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Combina con Otros Servicios de Iluminaci\xF3n", "subtitle": "El robot LED es m\xE1s poderoso cuando forma parte de un sistema completo.", "paragraph1": "El mayor impacto se logra cuando el robot LED trabaja en conjunto con otros equipos. Cabezas m\xF3viles para beams de largo alcance, par LED para ambiente, bola disco para destellos \u2014 cada elemento suma al show general.", "paragraph2": "Armamos paquetes de iluminaci\xF3n completa para el evento entero con precio especial." })} <div class="services-grid"> ${serviciosRelacionados.map((s) => renderTemplate`${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "title": s.title, "image": s.image, "alt": s.alt, "description": s.description, "link": s.link })}`)} </div> </div> </section> <section class="cta-section"> <div class="container"> <div class="cta-content"> <h2>¿Listo para transformar tu pista de baile?</h2> <p>Cuéntanos el tipo de evento, el venue y la cantidad de personas. Te cotizamos el show de luces perfecto en minutos.</p> <div class="cta-buttons"> <a href="/contacto/" class="btn btn-whatsapp btn-lg">Cotiza por WhatsApp</a> <a href="tel:+525530682988" class="btn btn-primary btn-lg">Llámanos — 55 3068 2988</a> </div> </div> </div> </section> ` })}`;
}, "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/pages/servicios/robot-led.astro", void 0);

const $$file = "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/pages/servicios/robot-led.astro";
const $$url = "/servicios/robot-led";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$RobotLed,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
