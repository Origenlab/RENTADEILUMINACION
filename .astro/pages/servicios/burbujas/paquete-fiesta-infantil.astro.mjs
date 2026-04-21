import { c as createComponent, b as renderComponent, r as renderTemplate, m as maybeRenderHead, F as Fragment } from '../../../chunks/astro/server_D8pMnQBn.mjs';
import 'piccolore';
import { $ as $$BaseLayout, a as $$Breadcrumbs } from '../../../chunks/Breadcrumbs_BkFbHGbf.mjs';
import { $ as $$Hero } from '../../../chunks/Hero_3Is3fruG.mjs';
import { $ as $$CtaBar } from '../../../chunks/CtaBar_CdFZlCZU.mjs';
import { $ as $$SectionHeader } from '../../../chunks/SectionHeader_mLKzHzNX.mjs';
import { $ as $$FeatureGrid } from '../../../chunks/FeatureGrid_BlZakCJc.mjs';
import { $ as $$TestimonialCards } from '../../../chunks/TestimonialCards_-EeuFf1C.mjs';
import { $ as $$ContentWithSidebar } from '../../../chunks/ContentWithSidebar_HmYQt5AF.mjs';
import { $ as $$Gallery4X4 } from '../../../chunks/Gallery4x4_Bx6Jz45E.mjs';
import { $ as $$FaqSection } from '../../../chunks/FaqSection_CzcP3CIi.mjs';
import { $ as $$ServiceCard } from '../../../chunks/ServiceCard_Bli7ALj4.mjs';
export { renderers } from '../../../renderers.mjs';

const $$PaqueteFiestaInfantil = createComponent(($$result, $$props, $$slots) => {
  const title = "Burbujas para Fiestas Infantiles \u2014 $1,800 + IVA | REDEIL";
  const description = "M\xE1quina de burbujas para fiestas infantiles y baby showers. Fluido no t\xF3xico + operador. $1,800 + IVA en CDMX.";
  const canonical = "https://rentadeiluminacion.com/servicios/burbujas/paquete-fiesta-infantil/";
  const schemaMarkup = JSON.stringify([
    {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Paquete Burbujas Fiesta Infantil \u2014 1 M\xE1quina Profesional",
      "description": "M\xE1quina de burbujas profesional para fiestas infantiles, baby showers y cumplea\xF1os en casa o terraza. Fluido no t\xF3xico + operador incluido. CDMX y Edomex.",
      "brand": { "@type": "Brand", "name": "REDEIL" },
      "image": "https://rentadeiluminacion.com/img/burbujas/renta-maquina-burbujas-fiesta-infantil.avif",
      "offers": { "@type": "Offer", "url": canonical, "priceCurrency": "MXN", "price": "1800", "priceValidUntil": "2027-12-31", "availability": "https://schema.org/InStock" },
      "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5", "bestRating": "5", "ratingCount": "64", "reviewCount": "64" },
      "review": [
        { "@type": "Review", "author": { "@type": "Person", "name": "Mariana L\xF3pez" }, "datePublished": "2026-02-10", "reviewRating": { "@type": "Rating", "ratingValue": "5" }, "reviewBody": "La m\xE1quina de burbujas fue el hit de la fiesta de mi hija. Los ni\xF1os no pararon de correr detr\xE1s de las burbujas. El operador fue super amable y puntual." },
        { "@type": "Review", "author": { "@type": "Person", "name": "Roberto Castillo" }, "datePublished": "2026-01-18", "reviewRating": { "@type": "Rating", "ratingValue": "5" }, "reviewBody": "Contratamos para el baby shower de mi esposa en la terraza de nuestra casa. Las burbujas le dieron un toque m\xE1gico a las fotos y el fluido es completamente seguro." },
        { "@type": "Review", "author": { "@type": "Person", "name": "Sof\xEDa Ram\xEDrez" }, "datePublished": "2025-12-05", "reviewRating": { "@type": "Rating", "ratingValue": "5" }, "reviewBody": "Perfecto para el cumplea\xF1os de mi sobrino en el jard\xEDn. La m\xE1quina estuvo trabajando una hora y los ni\xF1os estaban felices. Precio justo y servicio profesional." }
      ]
    },
    { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
      { "@type": "Question", "name": "\xBFEl fluido de burbujas es seguro para ni\xF1os peque\xF1os?", "acceptedAnswer": { "@type": "Answer", "text": "S\xED. Usamos fluido profesional no t\xF3xico, sin irritantes y seguro para ni\xF1os desde 1 a\xF1o. Si un ni\xF1o toca o prueba una burbuja, no hay riesgo alguno." } },
      { "@type": "Question", "name": "\xBFCu\xE1nto dura el efecto de burbujas?", "acceptedAnswer": { "@type": "Answer", "text": "El paquete incluye fluido para 1 hora de producci\xF3n continua de burbujas. Suficiente para el momento principal de la fiesta infantil." } }
    ] }
  ]);
  const otrosPaquetes = [
    { title: "Boda Entrada \u2014 $3,200", image: "/img/burbujas/maquina-burbujas-boda-entrada-novios.avif", alt: "Burbujas entrada de novios en boda", description: "2 m\xE1quinas para entrada de novios. Fluido ilimitado + operador. $3,200 + IVA.", link: "/servicios/burbujas/paquete-boda-entrada/" },
    { title: "Burbujas Gigantes \u2014 $5,000", image: "/img/burbujas/burbujas-gigantes-show-infantil-animacion.avif", alt: "Burbujas gigantes en show infantil", description: "Burbujas gigantes + lluvia continua para shows especiales. $5,000 + IVA.", link: "/servicios/burbujas/paquete-burbujas-gigantes/" },
    { title: "Producci\xF3n \u2014 $8,500", image: "/img/burbujas/burbujas-fiesta-carnaval-evento-masivo.avif", alt: "Burbujas profesionales en festival masivo", description: "6 m\xE1quinas + t\xE9cnico para festivales y shows masivos. $8,500 + IVA.", link: "/servicios/burbujas/paquete-produccion/" },
    { title: "Confeti", image: "/img/maquina-de-papelitos/confeti-dorado-primer-baile-novios-romantico-400w.avif", alt: "Confeti dorado en primer baile", description: "Combina burbujas + confeti para una fiesta doblemente m\xE1gica.", link: "/servicios/confeti/" }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "canonical": canonical, "schemaMarkup": schemaMarkup }, { "breadcrumbs": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "breadcrumbs" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Breadcrumbs", $$Breadcrumbs, { "items": [{ label: "Inicio", href: "/" }, { label: "Efectos Especiales", href: "/servicios/efectos-especiales/" }, { label: "Burbujas", href: "/servicios/burbujas/" }, { label: "Fiesta Infantil" }] })} ` })}`, "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, { "title": "Burbujas para Fiestas Infantiles y Baby Showers", "subtitle": "$1,800 + IVA. 1 m\xE1quina profesional + fluido no t\xF3xico + operador. El efecto favorito de los ni\xF1os.", "introParagraph1": "Hay pocos efectos que generen tanta alegr\xEDa instant\xE1nea como una lluvia de burbujas en una fiesta infantil. Los ni\xF1os corren, saltan, intentan atraparlas \u2014 y los pap\xE1s se quedan con las fotos m\xE1s tiernas del evento. En <strong>REDEIL</strong> llevamos una m\xE1quina de burbujas profesional con fluido no t\xF3xico especialmente formulado para eventos con ni\xF1os peque\xF1os, completamente seguro si lo tocan o lo prueban.", "introParagraph2": "Este paquete es ideal para fiestas de cumplea\xF1os en casa o terraza, baby showers al aire libre, bautizos y eventos \xEDntimos de hasta 50 personas. El operador llega, monta la m\xE1quina en el lugar ideal y la activa en el momento que t\xFA elijas \u2014 la entrada del pastel, la pi\xF1ata o cuando los ni\xF1os necesiten un boost de diversi\xF3n. Incluye fluido para una hora continua de burbujas, traslado y montaje en toda la CDMX y Estado de M\xE9xico." })} ${renderComponent($$result2, "CtaBar", $$CtaBar, { "headline": "Compara paquetes de burbujas", "items": [
    { label: "Boda Entrada \u2014 $3,200", href: "/servicios/burbujas/paquete-boda-entrada/", icon: "efectos" },
    { label: "Gigantes \u2014 $5,000", href: "/servicios/burbujas/paquete-burbujas-gigantes/", icon: "efectos" },
    { label: "Producci\xF3n \u2014 $8,500", href: "/servicios/burbujas/paquete-produccion/", icon: "efectos" },
    { label: "Cotiza Gratis", href: "/contacto/", icon: "cotizar" }
  ] })} ${maybeRenderHead()}<section class="services-section"> ${renderComponent($$result2, "ContentWithSidebar", $$ContentWithSidebar, { "sidebarTitle": "Fiesta Infantil", "price": "$1,800", "priceNote": "+ IVA \xB7 \xCDntimo y seguro", "features": [
    { text: "1 m\xE1quina de burbujas profesional" },
    { text: "Fluido no t\xF3xico certificado" },
    { text: "Producci\xF3n continua 1 hora" },
    { text: "Operador t\xE9cnico incluido" },
    { text: "Traslado + montaje + desmontaje" },
    { text: "Ideal para casa, terraza, jard\xEDn" },
    { text: "Seguro para ni\xF1os desde 1 a\xF1o" },
    { text: "Coordinaci\xF3n con animador" },
    { text: "Cobertura CDMX y Edomex" },
    { text: "Hasta 50 invitados" }
  ], "waMessage": "Hola REDEIL, quiero cotizar el paquete Fiesta Infantil de burbujas para una fiesta de ni\xF1os.", "packages": [
    { label: "Fiesta Infantil", price: "$1,800", href: "/servicios/burbujas/paquete-fiesta-infantil/", active: true },
    { label: "Boda Entrada", price: "$3,200", href: "/servicios/burbujas/paquete-boda-entrada/" },
    { label: "Burbujas Gigantes", price: "$5,000", href: "/servicios/burbujas/paquete-burbujas-gigantes/" },
    { label: "Producci\xF3n", price: "$8,500", href: "/servicios/burbujas/paquete-produccion/" }
  ] }, { "default": ($$result3) => renderTemplate` <div class="container"> ${renderComponent($$result3, "SectionHeader", $$SectionHeader, { "title": "Burbujas para cada momento de la fiesta infantil", "subtitle": "El efecto m\xE1s seguro y m\xE1s divertido para los peque\xF1os.", "paragraph1": "Una m\xE1quina de burbujas transforma cualquier fiesta de ni\xF1os. Ya sea en el jard\xEDn de tu casa, la terraza de un sal\xF3n o un parque, las burbujas crean un ambiente m\xE1gico que mantiene a los ni\xF1os entretenidos durante toda la celebraci\xF3n.", "paragraph2": "El fluido profesional que usamos est\xE1 certificado para contacto infantil \u2014 sin qu\xEDmicos irritantes, sin aroma agresivo y sin riesgo si un ni\xF1o se mete una burbuja en la boca." })} ${renderComponent($$result3, "FeatureGrid", $$FeatureGrid, { "features": [
    { title: "Cumplea\xF1os Infantiles", description: "El momento de las burbujas se convierte en el favorito de la fiesta. Los ni\xF1os corren, saltan y las fotos quedan incre\xEDbles." },
    { title: "Baby Showers", description: "Burbujas flotando en la terraza mientras abres los regalos. Un toque delicado y fotog\xE9nico para la celebraci\xF3n." },
    { title: "Bautizos", description: "Efecto sutil y elegante para la recepci\xF3n despu\xE9s de la ceremonia. Las burbujas complementan la decoraci\xF3n sin exagerar." },
    { title: "Fiestas en Jard\xEDn", description: "Al aire libre las burbujas duran m\xE1s y flotan m\xE1s alto. El efecto se multiplica con la luz natural del d\xEDa." },
    { title: "Fiestas en Terraza", description: "Espacios peque\xF1os e \xEDntimos donde una sola m\xE1quina cubre todo. Perfecto para departamentos con terraza en CDMX." },
    { title: "Pi\xF1ata con Burbujas", description: "Activa las burbujas justo cuando rompen la pi\xF1ata. Dulces + burbujas = el momento m\xE1s ca\xF3tico y divertido." }
  ], "columns": 2 })} </div> <div class="container" style="margin-top: 3rem;"> ${renderComponent($$result3, "SectionHeader", $$SectionHeader, { "title": "Lo que dicen nuestros clientes", "subtitle": "\u2B50\u2B50\u2B50\u2B50\u2B50 64 rese\xF1as verificadas.", "paragraph1": "Fiestas infantiles y baby showers con burbujas REDEIL.", "paragraph2": "El efecto m\xE1s sencillo y el que m\xE1s sonrisas genera." })} ${renderComponent($$result3, "TestimonialCards", $$TestimonialCards, { "testimonials": [
    { name: "Mariana L\xF3pez", event: "Cumplea\xF1os 4 a\xF1os \u2014 Coyoac\xE1n", rating: 5, text: "La m\xE1quina de burbujas fue el hit de la fiesta de mi hija. Los ni\xF1os no pararon de correr detr\xE1s de las burbujas. El operador fue super amable y puntual." },
    { name: "Roberto Castillo", event: "Baby shower \u2014 Sat\xE9lite", rating: 5, text: "Contratamos para el baby shower de mi esposa en la terraza. Las burbujas le dieron un toque m\xE1gico a las fotos y el fluido es completamente seguro." },
    { name: "Sof\xEDa Ram\xEDrez", event: "Cumplea\xF1os 6 a\xF1os \u2014 Tlalpan", rating: 5, text: "Perfecto para el cumplea\xF1os de mi sobrino en el jard\xEDn. La m\xE1quina estuvo trabajando una hora y los ni\xF1os estaban felices. Precio justo y servicio profesional." }
  ] })} </div> ` })} </section> <section class="services-section services-alt"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Burbujas en fiestas infantiles y baby showers", "subtitle": "El efecto que transforma cualquier fiesta de ni\xF1os.", "paragraph1": "Casas, jardines, terrazas y salones peque\xF1os \u2014 las burbujas funcionan en todos lados.", "paragraph2": "\xBFTu fiesta se parece? M\xE1ndanos los detalles por WhatsApp." })} ${renderComponent($$result2, "Gallery4x4", $$Gallery4X4, { "images": [
    { src: "/img/burbujas/renta-maquina-burbujas-fiesta-infantil.avif", alt: "M\xE1quina de burbujas en fiesta infantil" },
    { src: "/img/burbujas/burbujas-gigantes-fiesta-cumpleanos-ninos.avif", alt: "Burbujas gigantes en cumplea\xF1os de ni\xF1os" },
    { src: "/img/burbujas/renta-burbujas-baby-shower-decoracion.avif", alt: "Burbujas en decoraci\xF3n de baby shower" },
    { src: "/img/burbujas/maquina-burbujas-fiesta-jardin-terraza.avif", alt: "M\xE1quina de burbujas en fiesta de jard\xEDn" },
    { src: "/img/burbujas/burbujas-gigantes-show-infantil-animacion.avif", alt: "Show infantil con burbujas y animaci\xF3n" },
    { src: "/img/burbujas/maquina-burbujas-evento-navidad-posada.avif", alt: "Burbujas en evento navide\xF1o y posada" },
    { src: "/img/burbujas/burbujas-fiesta-tematica-magica-luces.avif", alt: "Burbujas en fiesta tem\xE1tica m\xE1gica" },
    { src: "/img/burbujas/maquina-burbujas-despedida-soltera-diversion.avif", alt: "Burbujas en fiesta divertida" }
  ] })} </div> </section> <section class="faq-section"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Preguntas sobre Burbujas para Fiestas Infantiles", "subtitle": "Todo lo que necesitas saber antes de contratar.", "paragraph1": "Escr\xEDbenos por WhatsApp si tienes otra duda.", "paragraph2": "Te asesoramos para que el efecto sea perfecto en tu fiesta." })} </div> ${renderComponent($$result2, "FaqSection", $$FaqSection, { "items": [
    { question: "\xBFEl fluido de burbujas es seguro para ni\xF1os peque\xF1os?", answer: "S\xED. Usamos fluido profesional no t\xF3xico, sin irritantes y formulado espec\xEDficamente para entretenimiento infantil. Si un ni\xF1o toca o prueba una burbuja, no representa ning\xFAn riesgo. Solo evitamos contacto directo del fluido con los ojos." },
    { question: "\xBFLa m\xE1quina hace mucho ruido?", answer: "No. Las m\xE1quinas profesionales que usamos producen un zumbido suave \u2014 mucho menos que una bocina de m\xFAsica. Los ni\xF1os no se asustan y el sonido no interfiere con la conversaci\xF3n ni con la m\xFAsica." },
    { question: "\xBFFunciona en espacios cerrados?", answer: "S\xED. En salones cerrados las burbujas se acumulan m\xE1s porque no hay viento que las disperse, creando un efecto m\xE1s denso. Solo considera que al reventarse dejan una pel\xEDcula fina en el piso \u2014 recomendamos tener un trapeador cerca para pistas resbalosas." },
    { question: "\xBFPuedo elegir el momento exacto de activaci\xF3n?", answer: "S\xED. El operador activa la m\xE1quina cuando t\xFA digas \u2014 al entrar el pastel, durante la pi\xF1ata, en la entrada del festejado. T\xFA decides y el operador coordina contigo y con el animador." },
    { question: "\xBFCu\xE1ntas burbujas produce en una hora?", answer: "La m\xE1quina profesional produce entre 500 y 2,000 burbujas por minuto dependiendo de la configuraci\xF3n. En una hora continua, estamos hablando de miles de burbujas flotando por toda la fiesta." },
    { question: "\xBFQu\xE9 pasa si llueve el d\xEDa de la fiesta?", answer: "Si tu evento es al aire libre y llueve, la m\xE1quina puede funcionar bajo techo o en un \xE1rea cubierta sin problema. Si necesitas reagendar, coordinamos contigo para buscar una nueva fecha sin costo extra." }
  ] })} </section> <section class="services-section services-alt"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Otros Paquetes y Complementos", "subtitle": "\xBFNecesitas m\xE1s m\xE1quinas o burbujas gigantes?", "paragraph1": "Cada paquete sube en intensidad y cobertura.", "paragraph2": "Combina burbujas con confeti para una fiesta doblemente m\xE1gica." })} <div class="services-grid">${otrosPaquetes.map((s) => renderTemplate`${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "title": s.title, "image": s.image, "alt": s.alt, "description": s.description, "link": s.link })}`)}</div> </div> </section> <section class="cta-section"> <div class="container"><div class="cta-content"> <h2>¿Listo para llenar de burbujas la fiesta de tus pequeños?</h2> <p>Cuéntanos la fecha, el lugar y cuántos niños esperan. Te confirmamos disponibilidad en minutos.</p> <div class="cta-buttons"> <a href="/contacto/" class="btn btn-whatsapp btn-lg">Cotiza por WhatsApp</a> <a href="tel:+525530682988" class="btn btn-primary btn-lg">Llámanos — 55 3068 2988</a> </div> </div></div> </section> ` })}`;
}, "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/pages/servicios/burbujas/paquete-fiesta-infantil.astro", void 0);

const $$file = "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/pages/servicios/burbujas/paquete-fiesta-infantil.astro";
const $$url = "/servicios/burbujas/paquete-fiesta-infantil";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$PaqueteFiestaInfantil,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
