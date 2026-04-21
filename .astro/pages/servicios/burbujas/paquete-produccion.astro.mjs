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

const $$PaqueteProduccion = createComponent(($$result, $$props, $$slots) => {
  const title = "Burbujas Profesionales para Festivales \u2014 $8,500 + IVA | REDEIL";
  const description = "6 m\xE1quinas de burbujas + t\xE9cnico para festivales y shows masivos. Cobertura total. $8,500 + IVA.";
  const canonical = "https://rentadeiluminacion.com/servicios/burbujas/paquete-produccion/";
  const schemaMarkup = JSON.stringify([
    {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Paquete Producci\xF3n Burbujas \u2014 6 M\xE1quinas para Festivales y Shows Masivos",
      "description": "6 m\xE1quinas de burbujas profesionales + t\xE9cnico dedicado para festivales, conciertos y shows masivos. Cobertura total de escenario y p\xFAblico. CDMX y Edomex.",
      "brand": { "@type": "Brand", "name": "REDEIL" },
      "image": "https://rentadeiluminacion.com/img/burbujas/burbujas-fiesta-carnaval-evento-masivo.avif",
      "offers": { "@type": "Offer", "url": canonical, "priceCurrency": "MXN", "price": "8500", "priceValidUntil": "2027-12-31", "availability": "https://schema.org/InStock" },
      "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5", "bestRating": "5", "ratingCount": "33", "reviewCount": "33" },
      "review": [
        { "@type": "Review", "author": { "@type": "Person", "name": "Ricardo Dom\xEDnguez" }, "datePublished": "2026-01-28", "reviewRating": { "@type": "Rating", "ratingValue": "5" }, "reviewBody": "Contratamos las 6 m\xE1quinas para un festival en el Foro Sol. La cobertura fue total \u2014 burbujas sobre todo el p\xFAblico durante el cierre del headliner. El t\xE9cnico de REDEIL se coordin\xF3 perfecto con nuestro equipo de producci\xF3n." },
        { "@type": "Review", "author": { "@type": "Person", "name": "Alejandra Vega" }, "datePublished": "2025-12-15", "reviewRating": { "@type": "Rating", "ratingValue": "5" }, "reviewBody": "Para el concierto de fin de a\xF1o en Auditorio Nacional necesit\xE1bamos burbujas masivas. REDEIL mont\xF3 las 6 m\xE1quinas en los laterales del escenario y el efecto fue brutal. El p\xFAblico enloqueci\xF3." },
        { "@type": "Review", "author": { "@type": "Person", "name": "Miguel \xC1ngel Fuentes" }, "datePublished": "2025-11-20", "reviewRating": { "@type": "Rating", "ratingValue": "5" }, "reviewBody": "Organizamos un festival de m\xFAsica en Xochimilco y las burbujas fueron el efecto que m\xE1s impacto tuvo. 6 m\xE1quinas cubriendo todo el escenario. Las fotos y videos que subi\xF3 la gente fueron incre\xEDbles." }
      ]
    },
    { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
      { "@type": "Question", "name": "\xBF6 m\xE1quinas cubren un escenario de festival?", "acceptedAnswer": { "@type": "Answer", "text": "S\xED. 6 m\xE1quinas distribuidas en los laterales y frente del escenario cubren \xE1reas de hasta 500m\xB2. El t\xE9cnico las posiciona para m\xE1xima cobertura sobre el p\xFAblico." } },
      { "@type": "Question", "name": "\xBFEl t\xE9cnico se integra con el equipo de producci\xF3n?", "acceptedAnswer": { "@type": "Answer", "text": "S\xED. Nuestro t\xE9cnico trabaja directamente con el director de producci\xF3n del festival, coordinando las activaciones con la m\xFAsica y la iluminaci\xF3n." } }
    ] }
  ]);
  const otrosPaquetes = [
    { title: "Fiesta Infantil \u2014 $1,800", image: "/img/burbujas/renta-maquina-burbujas-fiesta-infantil.avif", alt: "Burbujas en fiesta infantil", description: "1 m\xE1quina para fiestas \xEDntimas. Fluido no t\xF3xico. $1,800 + IVA.", link: "/servicios/burbujas/paquete-fiesta-infantil/" },
    { title: "Boda Entrada \u2014 $3,200", image: "/img/burbujas/maquina-burbujas-boda-entrada-novios.avif", alt: "Burbujas entrada de novios", description: "2 m\xE1quinas para bodas y XV a\xF1os. $3,200 + IVA.", link: "/servicios/burbujas/paquete-boda-entrada/" },
    { title: "Burbujas Gigantes \u2014 $5,000", image: "/img/burbujas/burbujas-gigantes-show-infantil-animacion.avif", alt: "Burbujas gigantes en show", description: "Burbujas gigantes + lluvia continua para shows especiales. $5,000 + IVA.", link: "/servicios/burbujas/paquete-burbujas-gigantes/" },
    { title: "Confeti", image: "/img/maquina-de-papelitos/confeti-dorado-primer-baile-novios-romantico-400w.avif", alt: "Confeti dorado en evento", description: "Burbujas masivas + confeti para el cierre m\xE1s \xE9pico de un festival.", link: "/servicios/confeti/" }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "canonical": canonical, "schemaMarkup": schemaMarkup }, { "breadcrumbs": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "breadcrumbs" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Breadcrumbs", $$Breadcrumbs, { "items": [{ label: "Inicio", href: "/" }, { label: "Efectos Especiales", href: "/servicios/efectos-especiales/" }, { label: "Burbujas", href: "/servicios/burbujas/" }, { label: "Producci\xF3n" }] })} ` })}`, "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, { "title": "Burbujas Profesionales para Festivales y Shows Masivos", "subtitle": "$8,500 + IVA. 6 m\xE1quinas de burbujas + t\xE9cnico dedicado. Cobertura total de escenario y p\xFAblico.", "introParagraph1": "Cuando un festival o concierto activa las m\xE1quinas de burbujas sobre el p\xFAblico, la energ\xEDa cambia instant\xE1neamente. Miles de burbujas cayendo desde los laterales del escenario crean un efecto visual masivo que el p\xFAblico fotograf\xEDa, graba y comparte en redes sociales. Es uno de los efectos especiales m\xE1s impactantes en producci\xF3n de eventos a gran escala \u2014 y uno de los m\xE1s accesibles en relaci\xF3n costo-impacto.", "introParagraph2": "Este paquete incluye 6 m\xE1quinas de burbujas profesionales de alta producci\xF3n, posicionadas estrat\xE9gicamente alrededor del escenario para cobertura total. Un t\xE9cnico dedicado de <strong>REDEIL</strong> se integra con tu equipo de producci\xF3n y coordina las activaciones con la m\xFAsica, la iluminaci\xF3n y los momentos clave del show. Incluye fluido profesional ilimitado, traslado, montaje completo y operaci\xF3n durante todo el evento. Atendemos festivales, conciertos, kermeses, ferias y shows masivos en CDMX y Estado de M\xE9xico." })} ${renderComponent($$result2, "CtaBar", $$CtaBar, { "headline": "Compara paquetes de burbujas", "items": [
    { label: "Infantil \u2014 $1,800", href: "/servicios/burbujas/paquete-fiesta-infantil/", icon: "efectos" },
    { label: "Boda \u2014 $3,200", href: "/servicios/burbujas/paquete-boda-entrada/", icon: "efectos" },
    { label: "Gigantes \u2014 $5,000", href: "/servicios/burbujas/paquete-burbujas-gigantes/", icon: "efectos" },
    { label: "Cotiza Gratis", href: "/contacto/", icon: "cotizar" }
  ] })} ${maybeRenderHead()}<section class="services-section"> ${renderComponent($$result2, "ContentWithSidebar", $$ContentWithSidebar, { "sidebarTitle": "Producci\xF3n", "price": "$8,500", "priceNote": "+ IVA \xB7 Cobertura masiva", "features": [
    { text: "6 m\xE1quinas de burbujas profesionales" },
    { text: "T\xE9cnico dedicado de producci\xF3n" },
    { text: "Fluido profesional ilimitado" },
    { text: "Cobertura hasta 500m\xB2" },
    { text: "Traslado + montaje + desmontaje" },
    { text: "Coordinaci\xF3n con equipo de producci\xF3n" },
    { text: "Ideal para festivales y conciertos" },
    { text: "Activaciones sincronizadas con m\xFAsica" },
    { text: "Cobertura CDMX y Edomex" },
    { text: "Operaci\xF3n durante todo el evento" }
  ], "waMessage": "Hola REDEIL, quiero cotizar el paquete Producci\xF3n de burbujas para un festival masivo.", "packages": [
    { label: "Fiesta Infantil", price: "$1,800", href: "/servicios/burbujas/paquete-fiesta-infantil/" },
    { label: "Boda Entrada", price: "$3,200", href: "/servicios/burbujas/paquete-boda-entrada/" },
    { label: "Burbujas Gigantes", price: "$5,000", href: "/servicios/burbujas/paquete-burbujas-gigantes/" },
    { label: "Producci\xF3n", price: "$8,500", href: "/servicios/burbujas/paquete-produccion/", active: true }
  ] }, { "default": ($$result3) => renderTemplate` <div class="container"> ${renderComponent($$result3, "SectionHeader", $$SectionHeader, { "title": "Burbujas masivas para cada tipo de producci\xF3n", "subtitle": "6 m\xE1quinas distribuidas para m\xE1ximo impacto visual.", "paragraph1": "Las 6 m\xE1quinas se posicionan en los laterales y frente del escenario, creando una cortina de burbujas que cubre al p\xFAblico completo. El t\xE9cnico coordina las activaciones con los drops de la m\xFAsica y los momentos clave del show para m\xE1ximo impacto.", "paragraph2": "Funcionan en foros, explanadas, estadios, jardines masivos y cualquier espacio abierto o cerrado con capacidad para cientos o miles de personas." })} ${renderComponent($$result3, "FeatureGrid", $$FeatureGrid, { "features": [
    { title: "Festivales de M\xFAsica", description: "Burbujas cayendo sobre el p\xFAblico durante el headliner. El efecto m\xE1s fotografiado y compartido en redes sociales de cualquier festival." },
    { title: "Conciertos y Shows", description: "6 m\xE1quinas sincronizadas con la m\xFAsica crean momentos \xE9picos que el p\xFAblico no olvida. Perfecto para artistas que quieren un cierre espectacular." },
    { title: "Eventos Masivos", description: "Kermeses, ferias, carnavales y eventos comunitarios con miles de asistentes. Las burbujas cubren todo el espacio y crean un ambiente festivo instant\xE1neo." },
    { title: "Producciones Corporativas", description: "Convenciones, lanzamientos y eventos de marca a gran escala. Las burbujas profesionales elevan la producci\xF3n a otro nivel." },
    { title: "Graduaciones Masivas", description: "Ceremonias de graduaci\xF3n en explanadas. Burbujas cayendo mientras los graduados celebran \u2014 fotos grupales memorables." },
    { title: "Shows de Cierre de A\xF1o", description: "Fiestas de fin de a\xF1o corporativas y p\xFAblicas. Las burbujas a medianoche combinadas con confeti crean un momento inolvidable." }
  ], "columns": 2 })} </div> <div class="container" style="margin-top: 3rem;"> ${renderComponent($$result3, "SectionHeader", $$SectionHeader, { "title": "Lo que dicen nuestros clientes", "subtitle": "\u2B50\u2B50\u2B50\u2B50\u2B50 33 rese\xF1as verificadas.", "paragraph1": "Festivales, conciertos y shows masivos con burbujas REDEIL.", "paragraph2": "El efecto que transforma un show en una experiencia inolvidable." })} ${renderComponent($$result3, "TestimonialCards", $$TestimonialCards, { "testimonials": [
    { name: "Ricardo Dom\xEDnguez", event: "Festival \u2014 Foro Sol, CDMX", rating: 5, text: "La cobertura fue total \u2014 burbujas sobre todo el p\xFAblico durante el cierre del headliner. El t\xE9cnico de REDEIL se coordin\xF3 perfecto con nuestro equipo de producci\xF3n." },
    { name: "Alejandra Vega", event: "Concierto \u2014 Auditorio Nacional", rating: 5, text: "Necesit\xE1bamos burbujas masivas para el concierto de fin de a\xF1o. REDEIL mont\xF3 las 6 m\xE1quinas en los laterales y el efecto fue brutal. El p\xFAblico enloqueci\xF3." },
    { name: "Miguel \xC1ngel Fuentes", event: "Festival \u2014 Xochimilco", rating: 5, text: "Las burbujas fueron el efecto que m\xE1s impacto tuvo en el festival. 6 m\xE1quinas cubriendo todo el escenario. Las fotos y videos que subi\xF3 la gente fueron incre\xEDbles." }
  ] })} </div> ` })} </section> <section class="services-section services-alt"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Burbujas profesionales en festivales y conciertos", "subtitle": "Producci\xF3n a gran escala con cobertura total.", "paragraph1": "Foros, explanadas, estadios y espacios masivos \u2014 nuestras 6 m\xE1quinas cubren todo.", "paragraph2": "\xBFTu producci\xF3n necesita burbujas masivas? M\xE1ndanos el rider t\xE9cnico." })} ${renderComponent($$result2, "Gallery4x4", $$Gallery4X4, { "images": [
    { src: "/img/burbujas/burbujas-fiesta-carnaval-evento-masivo.avif", alt: "Burbujas en carnaval y evento masivo" },
    { src: "/img/burbujas/renta-burbujas-festival-kermesse-feria.avif", alt: "Burbujas en festival y kermesse" },
    { src: "/img/burbujas/burbujas-profesionales-fiesta-graduacion.avif", alt: "Burbujas profesionales en graduaci\xF3n" },
    { src: "/img/burbujas/renta-burbujas-evento-corporativo-lanzamiento.avif", alt: "Burbujas en evento corporativo" },
    { src: "/img/burbujas/maquina-burbujas-profesional-boda-jardin.avif", alt: "M\xE1quinas de burbujas profesionales" },
    { src: "/img/burbujas/burbujas-efecto-especial-fotografia-video.avif", alt: "Efecto de burbujas para producci\xF3n visual" },
    { src: "/img/burbujas/burbujas-fiesta-pool-party-alberca.avif", alt: "Burbujas en evento al aire libre" },
    { src: "/img/burbujas/maquina-burbujas-boda-romantica-exterior.avif", alt: "M\xE1quinas de burbujas en exterior" }
  ] })} </div> </section> <section class="faq-section"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Preguntas sobre Burbujas para Festivales", "subtitle": "Todo lo que tu equipo de producci\xF3n necesita saber.", "paragraph1": "Escr\xEDbenos por WhatsApp o m\xE1ndanos tu rider t\xE9cnico.", "paragraph2": "Nos integramos con cualquier equipo de producci\xF3n." })} </div> ${renderComponent($$result2, "FaqSection", $$FaqSection, { "items": [
    { question: "\xBF6 m\xE1quinas cubren un escenario de festival?", answer: "S\xED. 6 m\xE1quinas distribuidas en los laterales y frente del escenario cubren \xE1reas de hasta 500m\xB2. Para festivales m\xE1s grandes o con m\xFAltiples escenarios, podemos escalar el paquete con m\xE1quinas adicionales \u2014 cotiza tu caso espec\xEDfico." },
    { question: "\xBFEl t\xE9cnico se integra con mi equipo de producci\xF3n?", answer: "S\xED. Nuestro t\xE9cnico trabaja directamente con el director de producci\xF3n, stage manager y DJ. Se integra al canal de comunicaci\xF3n del equipo (radio o headset) y coordina las activaciones en tiempo real." },
    { question: "\xBFCu\xE1nto fluido se necesita para un festival de 6 horas?", answer: "Llevamos fluido suficiente para 8-10 horas de producci\xF3n continua con las 6 m\xE1quinas. Para festivales de 2 d\xEDas, ajustamos la cantidad. Nunca nos quedamos sin fluido durante un evento." },
    { question: "\xBFLas m\xE1quinas necesitan electricidad del venue?", answer: "S\xED. Necesitamos 6 tomas de corriente est\xE1ndar (120V) distribuidas en las posiciones de las m\xE1quinas. Si el escenario tiene distribuci\xF3n el\xE9ctrica profesional, nuestro t\xE9cnico se conecta directamente al panel." },
    { question: "\xBFSe pueden sincronizar con DMX o timecode?", answer: "Las m\xE1quinas profesionales que usamos aceptan activaci\xF3n manual por nuestro t\xE9cnico en coordinaci\xF3n con el show. Para sincronizaci\xF3n DMX automatizada, pregunta por nuestro upgrade de control digital con costo adicional." },
    { question: "\xBFQu\xE9 pasa si llueve durante el festival?", answer: "Las m\xE1quinas de burbujas funcionan bajo lluvia ligera sin problema. Con lluvia fuerte, las burbujas se revientan m\xE1s r\xE1pido pero el efecto sigue siendo visible. Si la producci\xF3n se suspende por clima, coordinamos con tu equipo para reagendar." }
  ] })} </section> <section class="services-section services-alt"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Otros Paquetes y Complementos", "subtitle": "\xBFTu evento es m\xE1s peque\xF1o? Tenemos opciones para todo.", "paragraph1": "Desde fiestas infantiles hasta producciones masivas.", "paragraph2": "Combina burbujas con confeti para un cierre de festival \xE9pico." })} <div class="services-grid">${otrosPaquetes.map((s) => renderTemplate`${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "title": s.title, "image": s.image, "alt": s.alt, "description": s.description, "link": s.link })}`)}</div> </div> </section> <section class="cta-section"> <div class="container"><div class="cta-content"> <h2>¿Listo para las burbujas masivas en tu festival?</h2> <p>Mándanos la fecha, el venue, el aforo esperado y tu rider técnico. Te armamos la propuesta en horas.</p> <div class="cta-buttons"> <a href="/contacto/" class="btn btn-whatsapp btn-lg">Cotiza por WhatsApp</a> <a href="tel:+525530682988" class="btn btn-primary btn-lg">Llámanos — 55 3068 2988</a> </div> </div></div> </section> ` })}`;
}, "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/pages/servicios/burbujas/paquete-produccion.astro", void 0);

const $$file = "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/pages/servicios/burbujas/paquete-produccion.astro";
const $$url = "/servicios/burbujas/paquete-produccion";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$PaqueteProduccion,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
