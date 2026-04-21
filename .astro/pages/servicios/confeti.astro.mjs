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

const $$Confeti = createComponent(($$result, $$props, $$slots) => {
  const title = "Renta de M\xE1quina de Confeti para Eventos CDMX | REDEIL";
  const description = "Explosiones de confeti y lluvia de papelitos para bodas, XV a\xF1os, gender reveal y festivales en CDMX. Confeti biodegradable disponible. Desde $2,000 + IVA.";
  const canonical = "https://rentadeiluminacion.com/servicios/confeti/";
  const schemaMarkup = JSON.stringify([
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Renta de M\xE1quina de Confeti para Eventos",
      "provider": {
        "@type": "LocalBusiness",
        "name": "REDEIL",
        "url": "https://rentadeiluminacion.com",
        "telephone": "+525530682988",
        "address": { "@type": "PostalAddress", "addressLocality": "Ciudad de M\xE9xico", "addressRegion": "CDMX", "addressCountry": "MX" }
      },
      "description": "Servicio profesional de renta de m\xE1quinas de confeti y papelitos para bodas, XV a\xF1os, gender reveal y eventos masivos en CDMX. Confeti biodegradable disponible.",
      "areaServed": [
        { "@type": "City", "name": "Ciudad de M\xE9xico" },
        { "@type": "State", "name": "Estado de M\xE9xico" }
      ],
      "serviceType": "Renta de M\xE1quina de Confeti",
      "priceRange": "$$"
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "\xBFCu\xE1nto alcance tiene la explosi\xF3n de confeti?", "acceptedAnswer": { "@type": "Answer", "text": "Las m\xE1quinas de confeti profesionales de CO\u2082 pueden disparar una nube de confeti hasta 8-10 metros de altura y 5-6 metros de radio. Para pistas de baile de hasta 200m\xB2, con 2-3 m\xE1quinas bien posicionadas se cubre toda el \xE1rea." } },
        { "@type": "Question", "name": "\xBFTienen confeti biodegradable?", "acceptedAnswer": { "@type": "Answer", "text": "S\xED. Contamos con confeti de papel biodegradable especialmente para eventos al aire libre \u2014 jardines, haciendas y espacios exteriores donde la limpieza puede ser dif\xEDcil. El confeti de papel se disuelve con agua y no da\xF1a el entorno." } },
        { "@type": "Question", "name": "\xBFEl confeti se puede usar en exteriores?", "acceptedAnswer": { "@type": "Answer", "text": "S\xED. Las m\xE1quinas de confeti de CO\u2082 funcionan perfectamente en exteriores. Con viento, la nube se dispersa m\xE1s ampliamente \u2014 el efecto visual puede ser incluso m\xE1s espectacular. Para exteriores recomendamos confeti biodegradable." } }
      ]
    }
  ]);
  const serviciosRelacionados = [
    { title: "Humo Bajo", image: "/img/humo-bajo/efecto-nubes-piso-boda-jardin-400w.avif", alt: "Niebla baja en boda en jard\xEDn", description: "Confeti en el primer baile + niebla baja para el vals. Dos efectos visuales que crean el momento m\xE1s fotografiado.", link: "/servicios/humo-bajo/" },
    { title: "Seguidor de Luz", image: "/img/seguidor/renta-luz-seguidor-boda-primer-baile-hmi-1200w-300w.avif", alt: "Seguidor de luz en vals de novios", description: "Spotlight + lluvia de confeti = la foto de portada de revista. El efecto m\xE1s cinematogr\xE1fico para bodas.", link: "/servicios/seguidor/" },
    { title: "Cabezas M\xF3viles", image: "/img/cabezas-moviles/renta-cabezas-moviles-boda-beams-blancos-elegante-300w.avif", alt: "Cabezas m\xF3viles con beams en boda", description: "Show de luces + explosi\xF3n de confeti en el drop musical. La combinaci\xF3n que hace gritar a todos.", link: "/servicios/cabezas-moviles/" },
    { title: "Bola Disco", image: "/img/bola-disco/bola-disco-dj-pista-baile-evento.avif", alt: "Bola disco en pista de baile", description: "Los destellos de la bola disco + confeti cayendo = imagen de discoteca de lujo. Para fiestas retro o elegantes.", link: "/servicios/bola-disco/" }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "canonical": canonical, "schemaMarkup": schemaMarkup }, { "breadcrumbs": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "breadcrumbs" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Breadcrumbs", $$Breadcrumbs, { "items": [
    { label: "Inicio", href: "/" },
    { label: "Efectos Especiales", href: "/servicios/efectos-especiales/" },
    { label: "Confeti y Papelitos" }
  ] })} ` })}`, "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, { "title": "Renta de M\xE1quina de Confeti y Papelitos en CDMX", "subtitle": "Explosiones de confeti de CO\u2082 para bodas, XV a\xF1os, gender reveal y conciertos. Biodegradable disponible. Desde $2,000 + IVA.", "introParagraph1": "Hay dos tipos de confeti para eventos, y la diferencia importa. Los ca\xF1ones manuales de tienda de fiesta disparan a 2-3 metros y se acaban en un solo tiro. Las m\xE1quinas profesionales de CO\u2082 que usamos en <strong>REDEIL</strong> disparan nubes de confeti hasta 8-10 metros de altura con un radio de 5-6 metros. Puedes recargarlas y disparar varias veces en la misma noche. La explosi\xF3n es m\xE1s densa, m\xE1s alta y se ve en las fotos de lejos.", "introParagraph2": "Tenemos confeti en <strong>dorado, blanco, rosa, azul, multicolor</strong> y en formas: corazones, estrellas, c\xEDrculos. Para bodas en jard\xEDn o hacienda, el confeti <strong>biodegradable</strong> de papel es obligatorio en muchos venues porque se disuelve con agua en 24-72 horas sin da\xF1ar plantas. El confeti met\xE1lico (Mylar) se ve mejor en fotos pero es m\xE1s dif\xEDcil de limpiar y algunos salones cobran extra por usarlo. Te decimos cu\xE1l conviene seg\xFAn tu venue. El operador coordina el disparo exacto con tu fot\xF3grafo y el DJ." })} ${renderComponent($$result2, "CtaBar", $$CtaBar, { "headline": "\xBFPara qu\xE9 momento quieres la explosi\xF3n?", "items": [
    { label: "Vals de Boda", href: "#paquetes", icon: "efectos" },
    { label: "Gender Reveal", href: "#paquetes", icon: "efectos" },
    { label: "M\xE1s efectos", href: "/servicios/efectos-especiales/", icon: "efectos" },
    { label: "Cotiza Gratis", href: "/contacto/", icon: "cotizar" }
  ] })}  ${maybeRenderHead()}<section class="services-section"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "\xBFC\xF3mo se ve el confeti en un evento real?", "subtitle": "El momento exacto importa m\xE1s que la cantidad de confeti.", "paragraph1": "El operador no dispara cuando quiere. Se coordina con el fot\xF3grafo para que la c\xE1mara est\xE9 lista, con el DJ para que coincida con el pico de la canci\xF3n, y con el MC para que los novios est\xE9n en posici\xF3n. Si el confeti sale 3 segundos antes o despu\xE9s, la foto no funciona.", "paragraph2": "En gender reveals, el timing es todav\xEDa m\xE1s cr\xEDtico: la pareja abre la caja o el ca\xF1\xF3n dispara, y la reacci\xF3n de sorpresa dura un segundo. El fot\xF3grafo necesita estar listo en ese segundo exacto." })} ${renderComponent($$result2, "Gallery4x4", $$Gallery4X4, { "images": [
    { src: "/img/maquina-de-papelitos/confeti-dorado-primer-baile-novios-romantico.avif", alt: "Confeti dorado en primer baile de novios rom\xE1ntico" },
    { src: "/img/maquina-de-papelitos/maquina-confeti-primer-baile-boda-salon-elegante.avif", alt: "M\xE1quina de confeti en primer baile en sal\xF3n elegante" },
    { src: "/img/maquina-de-papelitos/explosion-confeti-blanco-boda-pista-baile.avif", alt: "Explosi\xF3n de confeti blanco en pista de baile de boda" },
    { src: "/img/maquina-de-papelitos/confeti-dorado-xv-anos-vals-quincea\xF1era.avif", alt: "Confeti dorado en vals de quincea\xF1era" },
    { src: "/img/maquina-de-papelitos/maquina-confeti-xv-anos-baile-padre-quincea\xF1era.avif", alt: "M\xE1quina de confeti en baile de padre con quincea\xF1era" },
    { src: "/img/maquina-de-papelitos/lluvia-confeti-corazones-xv-anos-vestido-rosa.avif", alt: "Lluvia de confeti corazones en XV a\xF1os con vestido rosa" },
    { src: "/img/maquina-de-papelitos/confeti-rosa-boda-jardin-atardecer-novios.avif", alt: "Confeti rosa en boda de jard\xEDn al atardecer" },
    { src: "/img/maquina-de-papelitos/explosion-confeti-rosa-revelacion-sexo-bebe-nina.avif", alt: "Explosi\xF3n de confeti rosa en gender reveal de ni\xF1a" },
    { src: "/img/maquina-de-papelitos/explosion-confeti-azul-revelacion-sexo-bebe-nino.avif", alt: "Confeti azul en gender reveal de ni\xF1o" },
    { src: "/img/maquina-de-papelitos/maquina-confeti-concierto-fiesta-neon-colores.avif", alt: "M\xE1quina de confeti en concierto con fiesta ne\xF3n de colores" },
    { src: "/img/maquina-de-papelitos/explosion-confeti-concierto-multitud-luces.avif", alt: "Explosi\xF3n de confeti en concierto con multitud y luces" },
    { src: "/img/maquina-de-papelitos/confeti-discoteca-laser-verde-bola-espejos.avif", alt: "Confeti en discoteca con l\xE1ser verde y bola de espejos" },
    { src: "/img/maquina-de-papelitos/maquina-confeti-baile-padre-novia-recepcion.avif", alt: "Confeti en baile de padre e hija en recepci\xF3n de boda" },
    { src: "/img/maquina-de-papelitos/lluvia-papelitos-boda-elegante-candelabros.avif", alt: "Lluvia de papelitos en boda elegante con candelabros" },
    { src: "/img/maquina-de-papelitos/confeti-salida-iglesia-boda-novios-felices.avif", alt: "Confeti en salida de iglesia de boda novios felices" },
    { src: "/img/maquina-de-papelitos/lluvia-confeti-boda-candelier-chispas-frias.avif", alt: "Lluvia de confeti con chispas fr\xEDas y candelier en boda" }
  ] })} </div> </section>  <section class="services-section services-alt" id="paquetes"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "\xBFCu\xE1nto cuesta rentar m\xE1quina de confeti en CDMX?", "subtitle": "Desde un disparo \xFAnico hasta cobertura completa del evento. Operador incluido.", "paragraph1": "Cada paquete incluye las m\xE1quinas de CO\u2082, el confeti en el color que elijas, operador t\xE9cnico y traslado. El operador coordina el disparo con el fot\xF3grafo, el DJ y el maestro de ceremonias para el timing perfecto.", "paragraph2": "\xBFNecesitas colores espec\xEDficos o confeti en forma especial? Consultanos \u2014 tenemos amplio cat\xE1logo de formas y colores." })} ${renderComponent($$result2, "PricingCards", $$PricingCards, { "packages": [
    {
      name: "Disparo \xDAnico",
      price: "$2,000",
      priceNote: "+ IVA",
      description: "Una explosi\xF3n de confeti perfectamente cronometrada para el momento m\xE1s especial del evento.",
      features: [
        { text: "1 m\xE1quina de confeti CO\u2082 profesional", included: true },
        { text: "1 carga de confeti a tu elecci\xF3n de color", included: true },
        { text: "Operador t\xE9cnico incluido", included: true },
        { text: "Traslado + montaje + desmontaje", included: true },
        { text: "Coordinaci\xF3n con fot\xF3grafo/DJ", included: true },
        { text: "Ideal para: vals, gender reveal, momentos \xFAnicos", included: true },
        { text: "Disparos adicionales", included: false },
        { text: "M\xFAltiples colores", included: false }
      ],
      ctaLabel: "Cotizar disparo \xFAnico",
      ctaHref: "/servicios/confeti/paquete-2-canones/"
    },
    {
      name: "Moments Pack \u2014 3 Disparos",
      price: "$4,000",
      priceNote: "+ IVA",
      badge: "M\xE1s popular",
      highlight: true,
      description: "3 explosiones para los 3 momentos estelares del evento. Vals, brindis y hora loca \u2014 cada uno con su propio confeti.",
      features: [
        { text: "2 m\xE1quinas de confeti CO\u2082", included: true },
        { text: "3 cargas de confeti (colores diferentes)", included: true },
        { text: "Operador t\xE9cnico incluido", included: true },
        { text: "Traslado + montaje + desmontaje", included: true },
        { text: "Coordinaci\xF3n completa con DJ/MC", included: true },
        { text: "Ideal para: bodas, XV a\xF1os completos", included: true },
        { text: "Timing personalizado por momento", included: true },
        { text: "Confeti biodegradable opcional", included: true }
      ],
      ctaLabel: "Cotizar 3 momentos",
      ctaHref: "/servicios/confeti/paquete-4-canones/"
    },
    {
      name: "Show Completo",
      price: "$6,500",
      priceNote: "+ IVA",
      description: "M\xE1quinas de confeti disponibles toda la noche para m\xFAltiples activaciones en los picos del evento.",
      features: [
        { text: "3 m\xE1quinas de confeti CO\u2082 profesionales", included: true },
        { text: "Recarga ilimitada de confeti", included: true },
        { text: "Operador t\xE9cnico toda la noche", included: true },
        { text: "M\xFAltiples colores disponibles", included: true },
        { text: "Coordinaci\xF3n con DJ en tiempo real", included: true },
        { text: "Ideal para: galas, corporativos, XV a\xF1os VIP", included: true },
        { text: "Confeti biodegradable para exterior", included: true },
        { text: "Cobertura de toda la pista de baile", included: true }
      ],
      ctaLabel: "Cotizar show completo",
      ctaHref: "/servicios/confeti/paquete-confeti-biodegradable/"
    },
    {
      name: "Producci\xF3n Masiva",
      price: "$12,000",
      priceNote: "+ IVA",
      description: "Para conciertos, festivales y eventos de gran escala. Ca\xF1ones de confeti de largo alcance para cubrir a cientos de personas.",
      features: [
        { text: "6+ ca\xF1ones de confeti profesionales", included: true },
        { text: "Confeti de largo alcance (hasta 15m)", included: true },
        { text: "Confeti dorado, plateado y multicolor", included: true },
        { text: "Equipo t\xE9cnico completo", included: true },
        { text: "Sincronizaci\xF3n con producci\xF3n del evento", included: true },
        { text: "Recarga ilimitada durante el show", included: true },
        { text: "Ideal para: conciertos, festivales, TV", included: true },
        { text: "Visita previa de producci\xF3n", included: true }
      ],
      ctaLabel: "Cotizar producci\xF3n masiva",
      ctaHref: "/servicios/confeti/paquete-produccion/"
    }
  ] })} </div> </section>  <section class="faq-section"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Preguntas frecuentes sobre confeti para eventos", "subtitle": "Todo lo que necesitas saber antes de contratar.", "paragraph1": "Si tienes otra duda, escr\xEDbenos por WhatsApp y te respondemos en minutos.", "paragraph2": "Tenemos confeti en todos los colores, tama\xF1os y materiales \u2014 te asesoramos para elegir el ideal." })} </div> ${renderComponent($$result2, "FaqSection", $$FaqSection, { "items": [
    { question: "\xBFEl confeti deja residuo dif\xEDcil de limpiar?", answer: "Depende del tipo. El confeti met\xE1lico (Mylar) es el m\xE1s bonito pero el m\xE1s dif\xEDcil de recoger \u2014 se adhiere a telas y alfombras. El confeti de papel es m\xE1s f\xE1cil de barrer. El biodegradable se disuelve con agua. Para venues que cobran limpieza extra por confeti met\xE1lico, recomendamos el de papel o biodegradable. Siempre consultamos con el venue antes." },
    { question: "\xBFTienen confeti biodegradable para jardines?", answer: "S\xED. Contamos con confeti de papel biodegradable en colores, corazones y formas especiales. Se disuelve con agua en 24-72 horas sin afectar plantas ni jardines. Es la opci\xF3n preferida para bodas en haciendas y jardines exteriores." },
    { question: "\xBFEn qu\xE9 colores tienen confeti?", answer: "Dorado, plateado, blanco, rosa, azul, verde, rojo, multicolor y en formas: corazones, estrellas, c\xEDrculos, mariposas y confeti rectangular est\xE1ndar. Para gender reveals tenemos rosa y azul espec\xEDficamente. Si necesitas un color especial, cons\xFAltanos con anticipaci\xF3n." },
    { question: "\xBFCu\xE1nto alcance tiene la m\xE1quina?", answer: "Las m\xE1quinas profesionales de CO\u2082 disparan confeti hasta 8-10 metros de altura y 5-6 metros de radio horizontal. Para cubrir una pista de baile de 200m\xB2, usamos 2-3 m\xE1quinas posicionadas estrat\xE9gicamente en los extremos." },
    { question: "\xBFSe puede usar en el exterior de la iglesia?", answer: "S\xED \u2014 es uno de los usos m\xE1s populares. La salida de los novios de la iglesia entre una lluvia de confeti es una imagen cl\xE1sica. Usamos confeti de papel biodegradable para no dejar residuo en la banqueta. El operador se posiciona en el exterior y dispara cuando los novios cruzan la puerta." },
    { question: "\xBFLos ca\xF1ones de CO\u2082 son seguros?", answer: "S\xED. Las m\xE1quinas profesionales de confeti CO\u2082 son equipo de entretenimiento certificado \u2014 el gas CO\u2082 se libera en cantidades m\xEDnimas y se disipa instant\xE1neamente en el aire sin riesgo para los invitados. Son las mismas m\xE1quinas que se usan en conciertos de estadio." }
  ] })} </section>  <section class="services-section services-alt"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "\xBFQu\xE9 otros servicios combinan con confeti?", "subtitle": "Confeti + seguidor de luz = la foto que los novios enmarcan.", "paragraph1": "Confeti dorado cayendo mientras el spotlight del seguidor ilumina a los novios. Esa combinaci\xF3n produce la foto que m\xE1s se comparte de cualquier boda. Tambi\xE9n funciona bien con cabezas m\xF3viles en modo beam, porque los haces de luz iluminan cada papelito en el aire.", "paragraph2": "Precio especial cuando combinas confeti con otros servicios." })} <div class="services-grid"> ${serviciosRelacionados.map((s) => renderTemplate`${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "title": s.title, "image": s.image, "alt": s.alt, "description": s.description, "link": s.link })}`)} </div> </div> </section>  <section class="cta-section"> <div class="container"> <div class="cta-content"> <h2>¿Listo para el momento más fotografiado de tu evento?</h2> <p>Cuéntanos para qué momento quieres el confeti y qué color va mejor con tu decoración. Te cotizamos en minutos.</p> <div class="cta-buttons"> <a href="/contacto/" class="btn btn-whatsapp btn-lg">Cotiza por WhatsApp</a> <a href="tel:+525530682988" class="btn btn-primary btn-lg">Llámanos — 55 3068 2988</a> </div> </div> </div> </section> ` })}`;
}, "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/pages/servicios/confeti.astro", void 0);

const $$file = "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/pages/servicios/confeti.astro";
const $$url = "/servicios/confeti";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Confeti,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
