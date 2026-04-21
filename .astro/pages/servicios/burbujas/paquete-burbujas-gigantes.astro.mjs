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

const $$PaqueteBurbujasGigantes = createComponent(($$result, $$props, $$slots) => {
  const title = "Burbujas Gigantes para Shows y Eventos \u2014 $5,000 + IVA | REDEIL";
  const description = "Burbujas gigantes + lluvia continua para shows especiales. M\xE1quinas profesionales. $5,000 + IVA en CDMX.";
  const canonical = "https://rentadeiluminacion.com/servicios/burbujas/paquete-burbujas-gigantes/";
  const schemaMarkup = JSON.stringify([
    {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Paquete Burbujas Gigantes \u2014 Shows y Eventos Especiales",
      "description": "Burbujas gigantes de 30-50cm + lluvia continua de burbujas normales para shows corporativos, eventos especiales y producciones en CDMX y Edomex.",
      "brand": { "@type": "Brand", "name": "REDEIL" },
      "image": "https://rentadeiluminacion.com/img/burbujas/burbujas-gigantes-show-infantil-animacion.avif",
      "offers": { "@type": "Offer", "url": canonical, "priceCurrency": "MXN", "price": "5000", "priceValidUntil": "2027-12-31", "availability": "https://schema.org/InStock" },
      "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5", "bestRating": "5", "ratingCount": "48", "reviewCount": "48" },
      "review": [
        { "@type": "Review", "author": { "@type": "Person", "name": "Paulina Guerrero" }, "datePublished": "2026-02-08", "reviewRating": { "@type": "Rating", "ratingValue": "5" }, "reviewBody": "Las burbujas gigantes fueron el centro del show corporativo que organizamos en el WTC. Los asistentes estaban fascinados viendo burbujas de medio metro flotar por el sal\xF3n. Efecto wow garantizado." },
        { "@type": "Review", "author": { "@type": "Person", "name": "Emilio Torres" }, "datePublished": "2026-01-12", "reviewRating": { "@type": "Rating", "ratingValue": "5" }, "reviewBody": "Contratamos para un evento de lanzamiento de producto en Polanco. La combinaci\xF3n de burbujas gigantes y lluvia continua cre\xF3 una atm\xF3sfera incre\xEDble. El equipo de REDEIL fue muy profesional." },
        { "@type": "Review", "author": { "@type": "Person", "name": "Gabriela Salinas" }, "datePublished": "2025-12-18", "reviewRating": { "@type": "Rating", "ratingValue": "5" }, "reviewBody": "Para el show de cierre de a\xF1o de la empresa las burbujas gigantes fueron perfectas. Los ni\xF1os de los empleados no paraban de intentar atraparlas. Un acierto total para el evento familiar corporativo." }
      ]
    },
    { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
      { "@type": "Question", "name": "\xBFQu\xE9 tan grandes son las burbujas gigantes?", "acceptedAnswer": { "@type": "Answer", "text": "Las burbujas gigantes miden entre 30 y 50cm de di\xE1metro. Flotan lentamente y capturan la luz de forma espectacular, creando un efecto visual \xFAnico." } },
      { "@type": "Question", "name": "\xBFSe pueden usar burbujas gigantes en interiores?", "acceptedAnswer": { "@type": "Answer", "text": "S\xED. En salones con techos altos las burbujas gigantes flotan y se ven espectaculares. El fluido que usamos no deja residuo pegajoso en el piso." } }
    ] }
  ]);
  const otrosPaquetes = [
    { title: "Fiesta Infantil \u2014 $1,800", image: "/img/burbujas/renta-maquina-burbujas-fiesta-infantil.avif", alt: "Burbujas en fiesta infantil", description: "1 m\xE1quina para fiestas \xEDntimas y baby showers. $1,800 + IVA.", link: "/servicios/burbujas/paquete-fiesta-infantil/" },
    { title: "Boda Entrada \u2014 $3,200", image: "/img/burbujas/maquina-burbujas-boda-entrada-novios.avif", alt: "Burbujas entrada de novios", description: "2 m\xE1quinas para entrada de novios y vals. $3,200 + IVA.", link: "/servicios/burbujas/paquete-boda-entrada/" },
    { title: "Producci\xF3n \u2014 $8,500", image: "/img/burbujas/burbujas-fiesta-carnaval-evento-masivo.avif", alt: "Burbujas en festival masivo", description: "6 m\xE1quinas + t\xE9cnico para festivales y conciertos. $8,500 + IVA.", link: "/servicios/burbujas/paquete-produccion/" },
    { title: "Confeti", image: "/img/maquina-de-papelitos/confeti-dorado-primer-baile-novios-romantico-400w.avif", alt: "Confeti dorado en evento", description: "Burbujas gigantes + confeti para un show de cierre espectacular.", link: "/servicios/confeti/" }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "canonical": canonical, "schemaMarkup": schemaMarkup }, { "breadcrumbs": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "breadcrumbs" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Breadcrumbs", $$Breadcrumbs, { "items": [{ label: "Inicio", href: "/" }, { label: "Efectos Especiales", href: "/servicios/efectos-especiales/" }, { label: "Burbujas", href: "/servicios/burbujas/" }, { label: "Burbujas Gigantes" }] })} ` })}`, "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, { "title": "Burbujas Gigantes para Shows y Eventos Especiales", "subtitle": "$5,000 + IVA. M\xE1quina de burbujas gigantes + lluvia continua. El efecto wow para shows corporativos y producciones.", "introParagraph1": "Las burbujas gigantes son otro nivel de espect\xE1culo. Esferas de jab\xF3n de 30 a 50 cent\xEDmetros de di\xE1metro que flotan lentamente por el espacio, capturando la luz y los colores del ambiente. Es un efecto visual que sorprende a adultos y ni\xF1os por igual \u2014 perfecto para shows corporativos, lanzamientos de producto, eventos de cierre de a\xF1o y producciones especiales donde necesitas el factor wow.", "introParagraph2": "Este paquete combina una m\xE1quina de burbujas gigantes con una de lluvia continua para crear dos capas de efecto: las burbujas grandes que flotan y las peque\xF1as que llenan el ambiente. El operador t\xE9cnico controla ambas m\xE1quinas y coordina los momentos de activaci\xF3n con el productor del evento. Incluye fluido especial para burbujas gigantes (m\xE1s resistente que el normal), traslado y montaje en toda la CDMX y Estado de M\xE9xico." })} ${renderComponent($$result2, "CtaBar", $$CtaBar, { "headline": "Compara paquetes de burbujas", "items": [
    { label: "Infantil \u2014 $1,800", href: "/servicios/burbujas/paquete-fiesta-infantil/", icon: "efectos" },
    { label: "Boda \u2014 $3,200", href: "/servicios/burbujas/paquete-boda-entrada/", icon: "efectos" },
    { label: "Producci\xF3n \u2014 $8,500", href: "/servicios/burbujas/paquete-produccion/", icon: "efectos" },
    { label: "Cotiza Gratis", href: "/contacto/", icon: "cotizar" }
  ] })} ${maybeRenderHead()}<section class="services-section"> ${renderComponent($$result2, "ContentWithSidebar", $$ContentWithSidebar, { "sidebarTitle": "Burbujas Gigantes", "price": "$5,000", "priceNote": "+ IVA \xB7 Efecto wow", "features": [
    { text: "1 m\xE1quina de burbujas gigantes (30-50cm)" },
    { text: "1 m\xE1quina de lluvia continua" },
    { text: "Fluido especial de alta resistencia" },
    { text: "Operador t\xE9cnico incluido" },
    { text: "Traslado + montaje + desmontaje" },
    { text: "Fluido ilimitado toda la noche" },
    { text: "Ideal para shows y corporativos" },
    { text: "Coordinaci\xF3n con productor" },
    { text: "Cobertura CDMX y Edomex" },
    { text: "Funciona en interiores y exteriores" }
  ], "waMessage": "Hola REDEIL, quiero cotizar el paquete Burbujas Gigantes para un show especial.", "packages": [
    { label: "Fiesta Infantil", price: "$1,800", href: "/servicios/burbujas/paquete-fiesta-infantil/" },
    { label: "Boda Entrada", price: "$3,200", href: "/servicios/burbujas/paquete-boda-entrada/" },
    { label: "Burbujas Gigantes", price: "$5,000", href: "/servicios/burbujas/paquete-burbujas-gigantes/", active: true },
    { label: "Producci\xF3n", price: "$8,500", href: "/servicios/burbujas/paquete-produccion/" }
  ] }, { "default": ($$result3) => renderTemplate` <div class="container"> ${renderComponent($$result3, "SectionHeader", $$SectionHeader, { "title": "Burbujas gigantes para cada tipo de producci\xF3n", "subtitle": "El efecto que transforma cualquier show en espect\xE1culo.", "paragraph1": "Las burbujas gigantes flotan lentamente, capturan la luz del escenario y crean una atm\xF3sfera et\xE9rea que hipnotiza al p\xFAblico. Combinadas con la lluvia continua de burbujas normales, el efecto visual es de producci\xF3n cinematogr\xE1fica.", "paragraph2": "Funcionan perfecto en salones con techos altos, escenarios al aire libre, centros de convenciones y cualquier espacio donde quieras un impacto visual memorable." })} ${renderComponent($$result3, "FeatureGrid", $$FeatureGrid, { "features": [
    { title: "Shows Corporativos", description: "Lanzamientos de producto, cierres de a\xF1o, convenciones. Las burbujas gigantes crean un momento memorable que los asistentes fotograf\xEDan y comparten." },
    { title: "Eventos Especiales", description: "Inauguraciones, aniversarios, galas. El efecto de burbujas gigantes eleva cualquier producci\xF3n de nivel medio a nivel premium." },
    { title: "Producciones Audiovisuales", description: "Filmaci\xF3n de comerciales, videoclips, sesiones fotogr\xE1ficas. Las burbujas gigantes en c\xE1mara lenta son un recurso visual espectacular." },
    { title: "Shows Infantiles Premium", description: "Fiestas infantiles de alto nivel donde las burbujas gigantes se convierten en el centro del espect\xE1culo. Los ni\xF1os intentan atraparlas sin \xE9xito." },
    { title: "Eventos al Aire Libre", description: "En jardines y terrazas las burbujas gigantes flotan m\xE1s alto y se llenan de los colores del cielo. Un efecto natural y org\xE1nico." },
    { title: "Combinaci\xF3n con Iluminaci\xF3n", description: "Con luces LED o UV, las burbujas gigantes se iluminan por dentro y crean un efecto de ciencia ficci\xF3n que nadie espera." }
  ], "columns": 2 })} </div> <div class="container" style="margin-top: 3rem;"> ${renderComponent($$result3, "SectionHeader", $$SectionHeader, { "title": "Lo que dicen nuestros clientes", "subtitle": "\u2B50\u2B50\u2B50\u2B50\u2B50 48 rese\xF1as verificadas.", "paragraph1": "Shows corporativos y eventos especiales con burbujas gigantes REDEIL.", "paragraph2": "El efecto que convierte cualquier evento en producci\xF3n de primer nivel." })} ${renderComponent($$result3, "TestimonialCards", $$TestimonialCards, { "testimonials": [
    { name: "Paulina Guerrero", event: "Evento corporativo \u2014 WTC, CDMX", rating: 5, text: "Las burbujas gigantes fueron el centro del show corporativo. Los asistentes estaban fascinados viendo burbujas de medio metro flotar por el sal\xF3n. Efecto wow garantizado." },
    { name: "Emilio Torres", event: "Lanzamiento de producto \u2014 Polanco", rating: 5, text: "La combinaci\xF3n de burbujas gigantes y lluvia continua cre\xF3 una atm\xF3sfera incre\xEDble para el lanzamiento. El equipo de REDEIL fue muy profesional." },
    { name: "Gabriela Salinas", event: "Cierre de a\xF1o \u2014 Santa Fe", rating: 5, text: "Para el show de cierre de a\xF1o las burbujas gigantes fueron perfectas. Los ni\xF1os de los empleados no paraban de intentar atraparlas. Un acierto total." }
  ] })} </div> ` })} </section> <section class="services-section services-alt"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Burbujas gigantes en shows y producciones", "subtitle": "El efecto visual que eleva cualquier evento.", "paragraph1": "Shows corporativos, lanzamientos, filmaciones y fiestas premium.", "paragraph2": "\xBFTu evento necesita el factor wow? M\xE1ndanos los detalles." })} ${renderComponent($$result2, "Gallery4x4", $$Gallery4X4, { "images": [
    { src: "/img/burbujas/burbujas-gigantes-fiesta-cumpleanos-ninos.avif", alt: "Burbujas gigantes en fiesta de cumplea\xF1os" },
    { src: "/img/burbujas/burbujas-gigantes-show-infantil-animacion.avif", alt: "Show infantil con burbujas gigantes" },
    { src: "/img/burbujas/renta-burbujas-evento-corporativo-lanzamiento.avif", alt: "Burbujas en lanzamiento corporativo" },
    { src: "/img/burbujas/burbujas-efecto-especial-fotografia-video.avif", alt: "Efecto especial de burbujas para fotograf\xEDa" },
    { src: "/img/burbujas/maquina-burbujas-profesional-boda-jardin.avif", alt: "M\xE1quina de burbujas profesional en jard\xEDn" },
    { src: "/img/burbujas/burbujas-fiesta-tematica-magica-luces.avif", alt: "Burbujas en fiesta tem\xE1tica con luces" },
    { src: "/img/burbujas/renta-burbujas-festival-kermesse-feria.avif", alt: "Burbujas en festival y kermesse" },
    { src: "/img/burbujas/burbujas-fiesta-pool-party-alberca.avif", alt: "Burbujas en pool party" }
  ] })} </div> </section> <section class="faq-section"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Preguntas sobre Burbujas Gigantes", "subtitle": "Todo lo que necesitas saber antes de contratar.", "paragraph1": "Escr\xEDbenos por WhatsApp si tienes otra duda.", "paragraph2": "Te asesoramos sobre el mejor setup para tu evento." })} </div> ${renderComponent($$result2, "FaqSection", $$FaqSection, { "items": [
    { question: "\xBFQu\xE9 tan grandes son las burbujas gigantes?", answer: "Las burbujas gigantes miden entre 30 y 50 cent\xEDmetros de di\xE1metro. Flotan lentamente y pueden durar hasta 30 segundos antes de reventarse, dependiendo de las condiciones del ambiente. En interiores sin corrientes de aire duran m\xE1s." },
    { question: "\xBFSe pueden usar en interiores con techo bajo?", answer: "Funcionan mejor en espacios con techos de al menos 3 metros de altura. En techos bajos las burbujas gigantes se revientan r\xE1pidamente al tocar el techo. Para techos est\xE1ndar (2.5m), usamos solo la m\xE1quina de lluvia y las gigantes las reservamos para momentos puntuales." },
    { question: "\xBFLas burbujas gigantes dejan residuo en el piso?", answer: "El fluido especial para burbujas gigantes es m\xE1s concentrado que el normal, pero est\xE1 formulado para dejar m\xEDnimo residuo. Recomendamos tener un trapeador cerca para shows de larga duraci\xF3n en pisos lisos." },
    { question: "\xBFPuedo combinar burbujas gigantes con humo o niebla?", answer: "S\xED, y es una combinaci\xF3n espectacular. Las burbujas gigantes flotando sobre niebla baja crean un efecto de fantas\xEDa. Pregunta por nuestro combo de burbujas + humo bajo con precio especial." },
    { question: "\xBFCu\xE1ntas burbujas gigantes produce la m\xE1quina por minuto?", answer: "La m\xE1quina de burbujas gigantes produce entre 5 y 20 burbujas grandes por minuto, dependiendo del tama\xF1o configurado. La de lluvia continua produce 500-2,000 burbujas normales por minuto. Juntas crean dos capas de efecto visual." },
    { question: "\xBFFunciona al aire libre con viento?", answer: "Con viento moderado las burbujas gigantes se dispersan r\xE1pido pero el efecto sigue siendo bonito. Con viento fuerte, recomendamos posicionar las m\xE1quinas en una zona protegida. Al aire libre sin viento es el escenario ideal." }
  ] })} </section> <section class="services-section services-alt"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Otros Paquetes y Complementos", "subtitle": "\xBFNecesitas m\xE1s m\xE1quinas o cobertura total?", "paragraph1": "Cada paquete sube en cantidad de equipos y alcance.", "paragraph2": "Combina burbujas gigantes con confeti para un cierre espectacular." })} <div class="services-grid">${otrosPaquetes.map((s) => renderTemplate`${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "title": s.title, "image": s.image, "alt": s.alt, "description": s.description, "link": s.link })}`)}</div> </div> </section> <section class="cta-section"> <div class="container"><div class="cta-content"> <h2>¿Listo para el show de burbujas gigantes?</h2> <p>Cuéntanos qué tipo de evento es, el espacio y cuántas personas esperan. Te armamos la propuesta perfecta.</p> <div class="cta-buttons"> <a href="/contacto/" class="btn btn-whatsapp btn-lg">Cotiza por WhatsApp</a> <a href="tel:+525530682988" class="btn btn-primary btn-lg">Llámanos — 55 3068 2988</a> </div> </div></div> </section> ` })}`;
}, "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/pages/servicios/burbujas/paquete-burbujas-gigantes.astro", void 0);

const $$file = "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/pages/servicios/burbujas/paquete-burbujas-gigantes.astro";
const $$url = "/servicios/burbujas/paquete-burbujas-gigantes";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$PaqueteBurbujasGigantes,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
