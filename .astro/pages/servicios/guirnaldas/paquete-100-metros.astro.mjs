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

const $$Paquete100Metros = createComponent(($$result, $$props, $$slots) => {
  const title = "Paquete 100m Guirnaldas Edison \u2014 $6,500 + IVA | REDEIL";
  const description = "100 metros de guirnaldas Edison para bodas en jard\xEDn y hacienda. Cubre ceremonia + recepci\xF3n hasta 120 invitados. Instalaci\xF3n profesional IP65. El m\xE1s pedido.";
  const canonical = "https://rentadeiluminacion.com/servicios/guirnaldas/paquete-100-metros/";
  const schemaMarkup = JSON.stringify([
    {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Paquete 100 Metros \u2014 Guirnaldas Edison para Bodas",
      "description": "Renta de 100 metros de guirnaldas con focos Edison para bodas en jard\xEDn y hacienda en CDMX. Cubre ceremonia y recepci\xF3n para hasta 120 invitados.",
      "brand": { "@type": "Brand", "name": "REDEIL" },
      "image": "https://rentadeiluminacion.com/img/guirnaldas/renta-guirnaldas-boda-hacienda-mexicana-guirnaldas-18.avif",
      "offers": { "@type": "Offer", "url": canonical, "priceCurrency": "MXN", "price": "6500", "priceValidUntil": "2027-12-31", "availability": "https://schema.org/InStock" },
      "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5", "bestRating": "5", "ratingCount": "89", "reviewCount": "89" },
      "review": [
        { "@type": "Review", "author": { "@type": "Person", "name": "Daniela Herrera" }, "datePublished": "2026-02-22", "reviewRating": { "@type": "Rating", "ratingValue": "5" }, "reviewBody": "Contratamos los 100 metros para nuestra boda en una hacienda en Tlalpan. Cubrieron toda la ceremonia y la recepci\xF3n. Las fotos quedaron de revista. El equipo lleg\xF3 temprano y fue muy profesional." },
        { "@type": "Review", "author": { "@type": "Person", "name": "Roberto S\xE1nchez" }, "datePublished": "2026-01-15", "reviewRating": { "@type": "Rating", "ratingValue": "5" }, "reviewBody": "Iluminaron todo el jard\xEDn para nuestra boda. El ambiente que crearon con las guirnaldas fue exactamente lo que imaginamos. Los invitados no paraban de tomar fotos. Muy recomendados." },
        { "@type": "Review", "author": { "@type": "Person", "name": "Fernanda L\xF3pez" }, "datePublished": "2025-11-28", "reviewRating": { "@type": "Rating", "ratingValue": "5" }, "reviewBody": "El paquete de 100 metros fue perfecto para nuestro jard\xEDn en Coyoac\xE1n. La coordinaci\xF3n con nuestra wedding planner fue impecable. El precio es justo por todo lo que incluye." }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "\xBF100 metros alcanzan para ceremonia y recepci\xF3n?", "acceptedAnswer": { "@type": "Answer", "text": "S\xED. 100 metros cubren perfectamente el \xE1rea de ceremonia + la zona de recepci\xF3n/cena para hasta 120 invitados en un jard\xEDn o hacienda promedio." } },
        { "@type": "Question", "name": "\xBFSe puede dividir en dos zonas separadas?", "acceptedAnswer": { "@type": "Answer", "text": "S\xED. Nuestro equipo dise\xF1a la distribuci\xF3n para cubrir m\xFAltiples \xE1reas \u2014 por ejemplo, 40 metros en la ceremonia y 60 en la recepci\xF3n." } }
      ]
    }
  ]);
  const otrosPaquetes = [
    { title: "B\xE1sico \u2014 50m", image: "/img/guirnaldas/renta-guirnaldas-ceremonia-boda-pergola-focos-edison-15.avif", alt: "50 metros para ceremonia \xEDntima", description: "Para terrazas y ceremonias \xEDntimas de hasta 50 invitados. $3,500 + IVA.", link: "/servicios/guirnaldas/paquete-50-metros/" },
    { title: "Premium \u2014 200m", image: "/img/guirnaldas/renta-guirnaldas-boda-patio-colonial-guirnaldas-21.avif", alt: "200 metros para evento grande", description: "Para haciendas grandes y eventos corporativos con 200+ invitados. $11,500 + IVA.", link: "/servicios/guirnaldas/paquete-200-metros/" },
    { title: "Producci\xF3n \u2014 500m", image: "/img/guirnaldas/renta-guirnaldas-baile-novios-hacienda-guirnaldas-41.avif", alt: "500 metros para festival", description: "Festivales, ferias y venues de gran escala. Producci\xF3n completa. $24,000 + IVA.", link: "/servicios/guirnaldas/paquete-500-metros/" },
    { title: "Humo Bajo", image: "/img/humo-bajo/efecto-nubes-piso-boda-jardin-400w.avif", alt: "Humo bajo para vals de boda", description: "El complemento m\xE1s pedido para bodas. La nube m\xE1gica para el vals. Comb\xEDnalo con guirnaldas.", link: "/servicios/humo-bajo/" }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "canonical": canonical, "schemaMarkup": schemaMarkup }, { "breadcrumbs": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "breadcrumbs" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Breadcrumbs", $$Breadcrumbs, { "items": [
    { label: "Inicio", href: "/" },
    { label: "Iluminaci\xF3n", href: "/servicios/iluminacion/" },
    { label: "Guirnaldas", href: "/servicios/guirnaldas/" },
    { label: "Paquete 100 metros" }
  ] })} ` })}`, "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, { "title": "Paquete 100 Metros \u2014 Guirnaldas Edison para Bodas", "subtitle": "$6,500 + IVA. El m\xE1s pedido para bodas en jard\xEDn. Ceremonia + recepci\xF3n hasta 120 invitados.", "introParagraph1": "El paquete de 100 metros es nuestra opci\xF3n m\xE1s popular para bodas en la Ciudad de M\xE9xico. Con esta cantidad de guirnaldas cubres el \xE1rea de ceremonia y la zona de recepci\xF3n completa \u2014 creando un ambiente c\xE1lido y continuo que conecta cada momento de tu celebraci\xF3n con luz vintage.", "introParagraph2": "Incluye focos Edison (LED o vintage a tu elecci\xF3n), cableado IP65 resistente a lluvia, transporte, montaje profesional y desmontaje. Nuestro equipo trabaja con tu wedding planner o decorador para integrar las luces al concepto de tu boda. M\xE1s de 300 bodas iluminadas en jardines, haciendas y fincas de CDMX y Estado de M\xE9xico." })} ${renderComponent($$result2, "CtaBar", $$CtaBar, { "headline": "Compara paquetes", "items": [
    { label: "50 metros \u2014 $3,500", href: "/servicios/guirnaldas/paquete-50-metros/", icon: "iluminacion" },
    { label: "200 metros \u2014 $11,500", href: "/servicios/guirnaldas/paquete-200-metros/", icon: "iluminacion" },
    { label: "500 metros \u2014 $24,000", href: "/servicios/guirnaldas/paquete-500-metros/", icon: "iluminacion" },
    { label: "Cotiza Gratis", href: "/contacto/", icon: "cotizar" }
  ] })}  ${maybeRenderHead()}<section class="services-section"> ${renderComponent($$result2, "ContentWithSidebar", $$ContentWithSidebar, { "sidebarTitle": "Paquete Est\xE1ndar", "price": "$6,500", "priceNote": "+ IVA \xB7 El m\xE1s popular", "features": [
    { text: "100 metros lineales" },
    { text: "Focos Edison LED o vintage" },
    { text: "Certificaci\xF3n IP65 lluvia" },
    { text: "Transporte + montaje + desmontaje" },
    { text: "Dise\xF1o personalizado" },
    { text: "Asesor\xEDa de distribuci\xF3n" },
    { text: "Coordinaci\xF3n con wedding planner" },
    { text: "Tonos: c\xE1lido, \xE1mbar, blanco" },
    { text: "Cubre ceremonia + recepci\xF3n" },
    { text: "Hasta 120 invitados" }
  ], "waMessage": "Hola REDEIL, quiero cotizar el paquete de 100 metros de guirnaldas para mi boda.", "packages": [
    { label: "50 metros", price: "$3,500", href: "/servicios/guirnaldas/paquete-50-metros/" },
    { label: "100 metros", price: "$6,500", href: "/servicios/guirnaldas/paquete-100-metros/", active: true },
    { label: "200 metros", price: "$11,500", href: "/servicios/guirnaldas/paquete-200-metros/" },
    { label: "500 metros", price: "$24,000", href: "/servicios/guirnaldas/paquete-500-metros/" }
  ] }, { "default": ($$result3) => renderTemplate` <div class="container"> ${renderComponent($$result3, "SectionHeader", $$SectionHeader, { "title": "Dise\xF1ado para bodas completas", "subtitle": "Ceremonia + recepci\xF3n en un solo montaje continuo.", "paragraph1": "100 metros te dan para crear un ambiente luminoso que acompa\xF1a a tus invitados desde la ceremonia hasta el \xFAltimo baile. La transici\xF3n entre zonas se siente natural \u2014 no hay un 'aqu\xED se acabaron las luces'.", "paragraph2": "Nuestro equipo distribuye los metros seg\xFAn la geometr\xEDa de tu venue para maximizar el impacto visual sin desperdiciar cable." })} ${renderComponent($$result3, "FeatureGrid", $$FeatureGrid, { "features": [
    { title: "Jardines de boda", description: "Distribuci\xF3n entre \xE1rboles, postes y estructuras naturales del jard\xEDn. Cobertura completa para 80-120 invitados." },
    { title: "Haciendas y fincas", description: "Iluminaci\xF3n de corredores, patios y \xE1reas de recepci\xF3n. Las guirnaldas resaltan la arquitectura colonial." },
    { title: "Ceremonia + recepci\xF3n", description: "40-50 metros para el \xE1rea de ceremonia y 50-60 para la recepci\xF3n. Dise\xF1o integrado en un solo montaje." },
    { title: "Mesas imperiales", description: "Dosel colgante sobre mesas largas para cenas elegantes. Efecto espectacular para 60-80 comensales." },
    { title: "Carpas y toldos", description: "Distribuci\xF3n perimetral e interior en carpas. Las guirnaldas calientan visualmente el espacio." },
    { title: "Pistas de baile", description: "Marco luminoso alrededor de la pista. Crea el escenario perfecto para el vals y la fiesta." }
  ], "columns": 2 })} </div> <div class="container" style="margin-top: 3rem;"> ${renderComponent($$result3, "SectionHeader", $$SectionHeader, { "title": "Lo que diferencia este paquete", "subtitle": "No solo luces \u2014 asesor\xEDa y coordinaci\xF3n incluida.", "paragraph1": "A diferencia del paquete b\xE1sico, los 100 metros incluyen asesor\xEDa personalizada de distribuci\xF3n. Nuestro equipo puede visitar tu venue antes del evento o trabajar con planos y fotos para dise\xF1ar el montaje ideal.", "paragraph2": "Tambi\xE9n nos coordinamos directamente con tu wedding planner o decorador para que las guirnaldas se integren al concepto general de la boda \u2014 colores, flores, mobiliario, todo armonizado." })} </div> <div class="container" style="margin-top: 3rem;"> ${renderComponent($$result3, "SectionHeader", $$SectionHeader, { "title": "Rese\xF1as de bodas con 100 metros", "subtitle": "\u2B50\u2B50\u2B50\u2B50\u2B50 89 rese\xF1as verificadas.", "paragraph1": "Novias y novios que eligieron este paquete para su boda en CDMX y Estado de M\xE9xico.", "paragraph2": "Las fotos bajo guirnaldas son las m\xE1s compartidas en Instagram de cada boda que iluminamos." })} ${renderComponent($$result3, "TestimonialCards", $$TestimonialCards, { "testimonials": [
    { name: "Daniela Herrera", event: "Boda en hacienda \u2014 Tlalpan", rating: 5, text: "Cubrieron toda la ceremonia y la recepci\xF3n en la hacienda. Las fotos quedaron de revista. El equipo lleg\xF3 temprano y fue muy profesional. No cambiar\xEDamos nada." },
    { name: "Roberto S\xE1nchez", event: "Boda en jard\xEDn \u2014 Coyoac\xE1n", rating: 5, text: "Iluminaron todo el jard\xEDn para nuestra boda. El ambiente que crearon fue exactamente lo que imaginamos. Los invitados no paraban de tomar fotos." },
    { name: "Fernanda L\xF3pez", event: "Boda al aire libre \u2014 Huixquilucan", rating: 5, text: "La coordinaci\xF3n con nuestra wedding planner fue impecable. Las guirnaldas se integraron perfecto con la decoraci\xF3n floral. El precio es justo por todo lo que incluye." }
  ] })} </div> ` })} </section>  <section class="services-section services-alt"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Bodas iluminadas con 100 metros", "subtitle": "Jardines, haciendas y fincas en CDMX.", "paragraph1": "Cada foto es de una boda real donde montamos nuestro paquete de 100 metros. El resultado habla por s\xED solo.", "paragraph2": "\xBFTu venue se parece? M\xE1ndanos fotos por WhatsApp y te mostramos c\xF3mo quedar\xEDan las guirnaldas." })} ${renderComponent($$result2, "Gallery4x4", $$Gallery4X4, { "images": [
    { src: "/img/guirnaldas/renta-guirnaldas-boda-hacienda-mexicana-guirnaldas-18.avif", alt: "Boda en hacienda mexicana con 100 metros de guirnaldas" },
    { src: "/img/guirnaldas/renta-guirnaldas-baile-novios-hacienda-guirnaldas-41.avif", alt: "Baile de novios en hacienda bajo guirnaldas Edison" },
    { src: "/img/guirnaldas/renta-guirnaldas-boda-patio-colonial-guirnaldas-21.avif", alt: "Patio colonial de hacienda iluminado con guirnaldas vintage" },
    { src: "/img/guirnaldas/renta-guirnaldas-brindis-boda-guirnaldas-hacienda-43.avif", alt: "Brindis de boda en hacienda bajo guirnaldas c\xE1lidas" },
    { src: "/img/guirnaldas/renta-guirnaldas-boda-jardin-ceremonia-guirnaldas-05.avif", alt: "Ceremonia de boda en jard\xEDn con guirnaldas Edison" },
    { src: "/img/guirnaldas/renta-guirnaldas-pareja-novios-guirnaldas-boda-32.avif", alt: "Novios bajo guirnaldas en recepci\xF3n de boda" },
    { src: "/img/guirnaldas/renta-guirnaldas-brindis-boda-novios-guirnaldas-emocion-42.avif", alt: "Momento emotivo de brindis bajo guirnaldas" },
    { src: "/img/guirnaldas/renta-guirnaldas-baile-novios-recepcion-08.avif", alt: "Recepci\xF3n de boda iluminada con guirnaldas vintage" }
  ] })} </div> </section>  <section class="faq-section"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Preguntas sobre el Paquete 100 Metros", "subtitle": "Todo lo que necesitas saber para tu boda.", "paragraph1": "Si tienes otra duda, escr\xEDbenos por WhatsApp. Respondemos en minutos.", "paragraph2": "Cada boda es diferente \u2014 te asesoramos gratis sobre la distribuci\xF3n ideal." })} </div> ${renderComponent($$result2, "FaqSection", $$FaqSection, { "items": [
    { question: "\xBF100 metros alcanzan para ceremonia y recepci\xF3n?", answer: "S\xED. 100 metros cubren perfectamente ceremonia + recepci\xF3n para hasta 120 invitados en un jard\xEDn o hacienda promedio. Distribuimos 40-50m en ceremonia y 50-60m en recepci\xF3n, adapt\xE1ndonos a tu espacio." },
    { question: "\xBFSe puede dividir en dos zonas separadas?", answer: "S\xED. Nuestro equipo dise\xF1a la distribuci\xF3n para cubrir m\xFAltiples \xE1reas. Podemos iluminar la ceremonia, el cocktail y la recepci\xF3n como tres zonas independientes conectadas visualmente." },
    { question: "\xBFSe coordinan con mi wedding planner?", answer: "S\xED. Nos comunicamos directamente con tu planner o decorador para integrar las guirnaldas al concepto general \u2014 colores, flores, mobiliario. Llevamos m\xE1s de 300 bodas coordinadas." },
    { question: "\xBFCu\xE1ndo llegan a instalar?", answer: "Llegamos 3-4 horas antes del evento para un montaje de 100 metros. Si tu venue permite acceso el d\xEDa anterior, podemos montar con m\xE1s calma y hacer pruebas de iluminaci\xF3n." },
    { question: "\xBFPuedo agregar uplighting o seguidor al paquete?", answer: "Claro. La combinaci\xF3n m\xE1s pedida es guirnaldas + uplighting en fachada + seguidor para el vals. Armamos paquetes combinados con precio especial." },
    { question: "\xBFFunciona bajo lluvia?", answer: "S\xED. Certificaci\xF3n IP65 \u2014 resistente a lluvia y humedad. Hemos montado en temporada de lluvias sin problema. Todo el cableado est\xE1 protegido." }
  ] })} </section>  <section class="services-section services-alt"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Otros Paquetes y Complementos", "subtitle": "Compara opciones o agrega servicios a tu boda.", "paragraph1": "Si necesitas menos o m\xE1s metros, tenemos opciones para cada tama\xF1o de evento. Y si quieres la experiencia completa, combinamos guirnaldas con otros servicios.", "paragraph2": "Cotiza sin compromiso \u2014 armamos propuestas integrales con precio especial." })} <div class="services-grid"> ${otrosPaquetes.map((s) => renderTemplate`${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "title": s.title, "image": s.image, "alt": s.alt, "description": s.description, "link": s.link })}`)} </div> </div> </section>  <section class="cta-section"> <div class="container"> <div class="cta-content"> <h2>¿Listo para iluminar tu boda con 100 metros de guirnaldas?</h2> <p>Mándanos la fecha, el venue y cuántos invitados esperas. Te confirmamos disponibilidad y armamos tu propuesta en minutos.</p> <div class="cta-buttons"> <a href="/contacto/" class="btn btn-whatsapp btn-lg">Cotiza tu Boda</a> <a href="tel:+525530682988" class="btn btn-primary btn-lg">Llámanos — 55 3068 2988</a> </div> </div> </div> </section> ` })}`;
}, "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/pages/servicios/guirnaldas/paquete-100-metros.astro", void 0);

const $$file = "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/pages/servicios/guirnaldas/paquete-100-metros.astro";
const $$url = "/servicios/guirnaldas/paquete-100-metros";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Paquete100Metros,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
