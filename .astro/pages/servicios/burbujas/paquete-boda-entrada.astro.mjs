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

const $$PaqueteBodaEntrada = createComponent(($$result, $$props, $$slots) => {
  const title = "Burbujas para Entrada de Novios en Bodas \u2014 $3,200 + IVA | REDEIL";
  const description = "Lluvia de burbujas para la entrada de novios. 2 m\xE1quinas + fluido ilimitado + operador. $3,200 + IVA en CDMX.";
  const canonical = "https://rentadeiluminacion.com/servicios/burbujas/paquete-boda-entrada/";
  const schemaMarkup = JSON.stringify([
    {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Paquete Burbujas Entrada de Novios \u2014 2 M\xE1quinas Profesionales",
      "description": "Lluvia de burbujas para la entrada de novios en bodas y XV a\xF1os. 2 m\xE1quinas profesionales + fluido ilimitado + operador t\xE9cnico. CDMX y Edomex.",
      "brand": { "@type": "Brand", "name": "REDEIL" },
      "image": "https://rentadeiluminacion.com/img/burbujas/maquina-burbujas-boda-entrada-novios.avif",
      "offers": { "@type": "Offer", "url": canonical, "priceCurrency": "MXN", "price": "3200", "priceValidUntil": "2027-12-31", "availability": "https://schema.org/InStock" },
      "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5", "bestRating": "5", "ratingCount": "71", "reviewCount": "71" },
      "review": [
        { "@type": "Review", "author": { "@type": "Person", "name": "Andrea Villanueva" }, "datePublished": "2026-02-22", "reviewRating": { "@type": "Rating", "ratingValue": "5" }, "reviewBody": "La entrada de mi esposo y yo entre burbujas fue el momento m\xE1s m\xE1gico de la boda. Las fotos en el Jard\xEDn Jacarandas quedaron espectaculares. El operador se coordin\xF3 perfecto con el DJ." },
        { "@type": "Review", "author": { "@type": "Person", "name": "Carlos Mendoza" }, "datePublished": "2026-01-15", "reviewRating": { "@type": "Rating", "ratingValue": "5" }, "reviewBody": "Contratamos las 2 m\xE1quinas para la entrada de los novios y el vals. REDEIL lleg\xF3 puntual al Hacienda de Cort\xE9s y el efecto fue incre\xEDble. Las burbujas con la luz del atardecer \u2014 fotos de revista." },
        { "@type": "Review", "author": { "@type": "Person", "name": "Fernanda Quiroz" }, "datePublished": "2025-11-28", "reviewRating": { "@type": "Rating", "ratingValue": "5" }, "reviewBody": "Lo usamos para los XV de mi hija en Sal\xF3n Versalles. La entrada de la quincea\xF1era con burbujas fue un momento que nadie esperaba. El vide\xF3grafo dijo que fue de sus mejores tomas." }
      ]
    },
    { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
      { "@type": "Question", "name": "\xBF2 m\xE1quinas son suficientes para una boda?", "acceptedAnswer": { "@type": "Answer", "text": "S\xED. 2 m\xE1quinas colocadas a los lados del pasillo o la entrada crean una cortina de burbujas densa y uniforme. Para recepciones grandes con pista de baile continua, recomendamos el paquete Producci\xF3n." } },
      { "@type": "Question", "name": "\xBFEl operador se coordina con el DJ?", "acceptedAnswer": { "@type": "Answer", "text": "S\xED. Nuestro operador se pone de acuerdo con el DJ o maestro de ceremonias para activar las burbujas en el momento exacto de la entrada." } }
    ] }
  ]);
  const otrosPaquetes = [
    { title: "Fiesta Infantil \u2014 $1,800", image: "/img/burbujas/renta-maquina-burbujas-fiesta-infantil.avif", alt: "Burbujas en fiesta infantil", description: "1 m\xE1quina para fiestas \xEDntimas. Fluido no t\xF3xico. $1,800 + IVA.", link: "/servicios/burbujas/paquete-fiesta-infantil/" },
    { title: "Burbujas Gigantes \u2014 $5,000", image: "/img/burbujas/burbujas-gigantes-show-infantil-animacion.avif", alt: "Burbujas gigantes en show especial", description: "Burbujas gigantes + lluvia continua para shows especiales. $5,000 + IVA.", link: "/servicios/burbujas/paquete-burbujas-gigantes/" },
    { title: "Producci\xF3n \u2014 $8,500", image: "/img/burbujas/burbujas-fiesta-carnaval-evento-masivo.avif", alt: "Burbujas profesionales en festival", description: "6 m\xE1quinas + t\xE9cnico para festivales y shows masivos. $8,500 + IVA.", link: "/servicios/burbujas/paquete-produccion/" },
    { title: "Confeti", image: "/img/maquina-de-papelitos/confeti-dorado-primer-baile-novios-romantico-400w.avif", alt: "Confeti dorado en primer baile", description: "Burbujas en la entrada + confeti en el brindis. La combinaci\xF3n perfecta para bodas.", link: "/servicios/confeti/" }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "canonical": canonical, "schemaMarkup": schemaMarkup }, { "breadcrumbs": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "breadcrumbs" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Breadcrumbs", $$Breadcrumbs, { "items": [{ label: "Inicio", href: "/" }, { label: "Efectos Especiales", href: "/servicios/efectos-especiales/" }, { label: "Burbujas", href: "/servicios/burbujas/" }, { label: "Boda Entrada" }] })} ` })}`, "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, { "title": "Lluvia de Burbujas para la Entrada de Novios en Bodas", "subtitle": "$3,200 + IVA. 2 m\xE1quinas profesionales + fluido ilimitado + operador. El momento m\xE1s fotografiado de tu boda.", "introParagraph1": "La entrada de los novios entre una lluvia de burbujas es una de las im\xE1genes m\xE1s buscadas por fot\xF3grafos de bodas. La luz rebota en cada esfera de jab\xF3n creando destellos peque\xF1os que llenan la escena \u2014 es un efecto sutil, elegante y profundamente rom\xE1ntico. En <strong>REDEIL</strong> colocamos 2 m\xE1quinas de burbujas profesionales a los costados del pasillo o la entrada para crear una cortina continua que envuelve a los novios mientras caminan hacia la recepci\xF3n.", "introParagraph2": "Este paquete incluye fluido ilimitado para toda la noche, lo que significa que el operador puede activar las burbujas en m\xFAltiples momentos: la entrada, el vals, el brindis, la salida. Se coordina directamente con el DJ o maestro de ceremonias para que el timing sea perfecto. Atendemos bodas y XV a\xF1os en haciendas, jardines, salones y terrazas de toda la CDMX y Estado de M\xE9xico." })} ${renderComponent($$result2, "CtaBar", $$CtaBar, { "headline": "Compara paquetes de burbujas", "items": [
    { label: "Infantil \u2014 $1,800", href: "/servicios/burbujas/paquete-fiesta-infantil/", icon: "efectos" },
    { label: "Gigantes \u2014 $5,000", href: "/servicios/burbujas/paquete-burbujas-gigantes/", icon: "efectos" },
    { label: "Producci\xF3n \u2014 $8,500", href: "/servicios/burbujas/paquete-produccion/", icon: "efectos" },
    { label: "Cotiza Gratis", href: "/contacto/", icon: "cotizar" }
  ] })} ${maybeRenderHead()}<section class="services-section"> ${renderComponent($$result2, "ContentWithSidebar", $$ContentWithSidebar, { "sidebarTitle": "Boda Entrada", "price": "$3,200", "priceNote": "+ IVA \xB7 M\xE1s popular", "features": [
    { text: "2 m\xE1quinas de burbujas profesionales" },
    { text: "Fluido ilimitado toda la noche" },
    { text: "Operador t\xE9cnico 4-6 horas" },
    { text: "Traslado + montaje + desmontaje" },
    { text: "Coordinaci\xF3n con DJ y fot\xF3grafo" },
    { text: "Activaciones m\xFAltiples a demanda" },
    { text: "Ideal para bodas y XV a\xF1os" },
    { text: "Cobertura CDMX y Edomex" },
    { text: "Montaje discreto fuera de escena" },
    { text: "Fluido profesional de larga duraci\xF3n" }
  ], "waMessage": "Hola REDEIL, quiero cotizar el paquete Boda Entrada de burbujas para mi boda.", "packages": [
    { label: "Fiesta Infantil", price: "$1,800", href: "/servicios/burbujas/paquete-fiesta-infantil/" },
    { label: "Boda Entrada", price: "$3,200", href: "/servicios/burbujas/paquete-boda-entrada/", active: true },
    { label: "Burbujas Gigantes", price: "$5,000", href: "/servicios/burbujas/paquete-burbujas-gigantes/" },
    { label: "Producci\xF3n", price: "$8,500", href: "/servicios/burbujas/paquete-produccion/" }
  ] }, { "default": ($$result3) => renderTemplate` <div class="container"> ${renderComponent($$result3, "SectionHeader", $$SectionHeader, { "title": "Burbujas para cada momento de tu boda o XV a\xF1os", "subtitle": "No solo la entrada \u2014 el vals, el brindis, la salida.", "paragraph1": "Con fluido ilimitado y operador toda la noche, las burbujas est\xE1n disponibles para cada momento importante. El operador se coordina con el DJ para activar las m\xE1quinas exactamente cuando la m\xFAsica sube y los novios hacen su aparici\xF3n.", "paragraph2": "En jardines y haciendas, las burbujas flotan m\xE1s alto y duran m\xE1s \u2014 la combinaci\xF3n con la luz del atardecer es simplemente perfecta para las fotos." })} ${renderComponent($$result3, "FeatureGrid", $$FeatureGrid, { "features": [
    { title: "Entrada de Novios", description: "El momento principal. Dos cortinas de burbujas a los lados del pasillo crean un efecto de ensue\xF1o mientras los novios caminan hacia la recepci\xF3n." },
    { title: "Vals y Primer Baile", description: "Burbujas flotando alrededor de la pista mientras bailan el vals. Las fotos y el video quedan espectaculares con la iluminaci\xF3n correcta." },
    { title: "XV A\xF1os \u2014 Entrada", description: "La quincea\xF1era entra al sal\xF3n entre burbujas y aplausos. Un momento que los invitados no esperan y que queda perfecto en video." },
    { title: "Brindis y Pastel", description: "Burbujas sutiles durante el brindis o el corte de pastel. Un toque elegante sin exagerar." },
    { title: "Bodas en Jard\xEDn", description: "Al aire libre las burbujas se llenan de color con la luz natural. Los jardines y haciendas son el escenario perfecto para este efecto." },
    { title: "Salida de los Novios", description: "Lluvia de burbujas en la salida final. Un cierre m\xE1gico que los invitados recuerdan \u2014 y que el fot\xF3grafo captura perfecto." }
  ], "columns": 2 })} </div> <div class="container" style="margin-top: 3rem;"> ${renderComponent($$result3, "SectionHeader", $$SectionHeader, { "title": "Lo que dicen nuestros clientes", "subtitle": "\u2B50\u2B50\u2B50\u2B50\u2B50 71 rese\xF1as verificadas.", "paragraph1": "Bodas y XV a\xF1os con burbujas REDEIL.", "paragraph2": "El efecto m\xE1s rom\xE1ntico y el que mejor queda en fotos." })} ${renderComponent($$result3, "TestimonialCards", $$TestimonialCards, { "testimonials": [
    { name: "Andrea Villanueva", event: "Boda \u2014 Jard\xEDn Jacarandas, Cuernavaca", rating: 5, text: "La entrada de mi esposo y yo entre burbujas fue el momento m\xE1s m\xE1gico de la boda. Las fotos quedaron espectaculares. El operador se coordin\xF3 perfecto con el DJ." },
    { name: "Carlos Mendoza", event: "Boda \u2014 Hacienda de Cort\xE9s, Cuernavaca", rating: 5, text: "Contratamos las 2 m\xE1quinas para la entrada y el vals. REDEIL lleg\xF3 puntual y el efecto fue incre\xEDble. Las burbujas con la luz del atardecer \u2014 fotos de revista." },
    { name: "Fernanda Quiroz", event: "XV a\xF1os \u2014 Sal\xF3n Versalles, CDMX", rating: 5, text: "Lo usamos para los XV de mi hija. La entrada de la quincea\xF1era con burbujas fue un momento que nadie esperaba. El vide\xF3grafo dijo que fue de sus mejores tomas." }
  ] })} </div> ` })} </section> <section class="services-section services-alt"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Burbujas en bodas, XV a\xF1os y recepciones", "subtitle": "El efecto m\xE1s rom\xE1ntico para tu celebraci\xF3n.", "paragraph1": "Haciendas, jardines, salones y terrazas \u2014 las burbujas funcionan en cualquier venue.", "paragraph2": "\xBFTu boda se parece? M\xE1ndanos los detalles por WhatsApp." })} ${renderComponent($$result2, "Gallery4x4", $$Gallery4X4, { "images": [
    { src: "/img/burbujas/maquina-burbujas-boda-entrada-novios.avif", alt: "Entrada de novios con lluvia de burbujas" },
    { src: "/img/burbujas/maquina-burbujas-profesional-boda-jardin.avif", alt: "M\xE1quina de burbujas profesional en boda de jard\xEDn" },
    { src: "/img/burbujas/maquina-burbujas-vals-quinceanos-pista.avif", alt: "Burbujas en vals de quincea\xF1era" },
    { src: "/img/burbujas/renta-burbujas-evento-xv-anos-salon.avif", alt: "Burbujas en evento de XV a\xF1os en sal\xF3n" },
    { src: "/img/burbujas/maquina-burbujas-boda-romantica-exterior.avif", alt: "Burbujas en boda rom\xE1ntica exterior" },
    { src: "/img/burbujas/burbujas-efecto-especial-fotografia-video.avif", alt: "Efecto especial de burbujas para fotograf\xEDa" },
    { src: "/img/burbujas/burbujas-profesionales-fiesta-graduacion.avif", alt: "Burbujas profesionales en graduaci\xF3n" },
    { src: "/img/burbujas/burbujas-fiesta-tematica-magica-luces.avif", alt: "Burbujas con luces m\xE1gicas en fiesta" }
  ] })} </div> </section> <section class="faq-section"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Preguntas sobre Burbujas para Bodas", "subtitle": "Todo lo que necesitas saber antes de contratar.", "paragraph1": "Escr\xEDbenos por WhatsApp si tienes otra duda.", "paragraph2": "Te asesoramos sobre la mejor colocaci\xF3n para tu venue." })} </div> ${renderComponent($$result2, "FaqSection", $$FaqSection, { "items": [
    { question: "\xBF2 m\xE1quinas son suficientes para una boda de 200 personas?", answer: "S\xED. 2 m\xE1quinas colocadas a los lados del pasillo o la entrada crean una cortina de burbujas densa y continua. Para bodas con pista de baile grande donde quieras burbujas toda la noche en la pista, considera el paquete Producci\xF3n con 6 m\xE1quinas." },
    { question: "\xBFLas burbujas mojan los vestidos?", answer: "Las burbujas son 99% aire \u2014 cuando se revientan dejan una capa m\xEDnima de jab\xF3n que se seca en segundos. No manchan vestidos blancos ni telas delicadas. El fluido profesional que usamos est\xE1 formulado para evitar residuos." },
    { question: "\xBFEl operador se coordina con mi DJ y fot\xF3grafo?", answer: "S\xED. Nuestro operador llega con tiempo para hablar con el DJ y el fot\xF3grafo. Se ponen de acuerdo en los momentos exactos de activaci\xF3n para que el timing sea perfecto y el fot\xF3grafo est\xE9 listo." },
    { question: "\xBFFunciona en salones cerrados?", answer: "S\xED. En salones cerrados las burbujas se acumulan m\xE1s y crean un efecto m\xE1s denso. Solo hay que considerar que el piso puede ponerse ligeramente resbaloso \u2014 recomendamos avisar al venue para que tengan personal de limpieza atento." },
    { question: "\xBFPuedo agregar m\xE1s m\xE1quinas el mismo d\xEDa?", answer: "Si tenemos disponibilidad, s\xED. Pero es mejor confirmar desde la cotizaci\xF3n cu\xE1ntas m\xE1quinas necesitas para que llevemos el equipo completo. El upgrade al paquete Burbujas Gigantes ($5,000) o Producci\xF3n ($8,500) sale mejor." }
  ] })} </section> <section class="services-section services-alt"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Otros Paquetes y Complementos", "subtitle": "\xBFNecesitas m\xE1s efecto o burbujas gigantes?", "paragraph1": "Cada paquete sube en cantidad de m\xE1quinas y cobertura.", "paragraph2": "Combina burbujas con confeti para el brindis perfecto." })} <div class="services-grid">${otrosPaquetes.map((s) => renderTemplate`${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "title": s.title, "image": s.image, "alt": s.alt, "description": s.description, "link": s.link })}`)}</div> </div> </section> <section class="cta-section"> <div class="container"><div class="cta-content"> <h2>¿Lista la lluvia de burbujas para tu boda?</h2> <p>Cuéntanos la fecha, el venue y qué momentos quieres que sean especiales. Te cotizamos en minutos.</p> <div class="cta-buttons"> <a href="/contacto/" class="btn btn-whatsapp btn-lg">Cotiza por WhatsApp</a> <a href="tel:+525530682988" class="btn btn-primary btn-lg">Llámanos — 55 3068 2988</a> </div> </div></div> </section> ` })}`;
}, "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/pages/servicios/burbujas/paquete-boda-entrada.astro", void 0);

const $$file = "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/pages/servicios/burbujas/paquete-boda-entrada.astro";
const $$url = "/servicios/burbujas/paquete-boda-entrada";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$PaqueteBodaEntrada,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
