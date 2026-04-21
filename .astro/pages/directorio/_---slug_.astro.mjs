import { e as createAstro, c as createComponent, b as renderComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_D8pMnQBn.mjs';
import 'piccolore';
import { g as getCollection } from '../../chunks/_astro_content_DoEh7u_S.mjs';
import { $ as $$BaseLayout, a as $$Breadcrumbs } from '../../chunks/Breadcrumbs_BkFbHGbf.mjs';
import { $ as $$CtaBar } from '../../chunks/CtaBar_CdFZlCZU.mjs';
import { $ as $$DirectoryCard } from '../../chunks/DirectoryCard_DykBwQs9.mjs';
import { $ as $$ServiceCard } from '../../chunks/ServiceCard_Bli7ALj4.mjs';
import { $ as $$SectionHeader } from '../../chunks/SectionHeader_mLKzHzNX.mjs';
import { $ as $$FaqSection } from '../../chunks/FaqSection_CzcP3CIi.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://rentadeiluminacion.com");
async function getStaticPaths() {
  const empresas = await getCollection("directorio", ({ data }) => data.activo !== false);
  return empresas.map((empresa) => ({
    params: { slug: empresa.slug },
    props: { empresa }
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { empresa } = Astro2.props;
  const { Content } = await empresa.render();
  const d = empresa.data;
  const todasLasEmpresas = await getCollection("directorio", ({ data }) => data.activo !== false);
  const otrasEmpresas = todasLasEmpresas.filter((e) => e.slug !== empresa.slug && e.data.categoria === d.categoria).sort((a, b) => (b.data.resenas ?? 0) - (a.data.resenas ?? 0)).slice(0, 4);
  const categoriaLabel = {
    audio: "Audio Profesional",
    iluminacion: "Iluminaci\xF3n",
    "audio-video": "Audio & Video",
    dj: "DJ",
    efectos: "Efectos"
  };
  const zonaLabel = {
    cdmx: "Ciudad de M\xE9xico",
    "estado-de-mexico": "Estado de M\xE9xico"
  };
  const zonaShort = {
    cdmx: "CDMX",
    "estado-de-mexico": "Edomex"
  };
  const fullStars = Math.floor(d.rating ?? 0);
  const hasHalf = (d.rating ?? 0) - fullStars >= 0.5;
  const heroDesc1 = `${d.nombre} es una tienda de ${categoriaLabel[d.categoria] ?? d.categoria} ubicada en ${d.alcaldia_municipio}, ${zonaLabel[d.zona] ?? d.zona}. ${d.rating ? `Con ${d.rating} estrellas y ${d.resenas?.toLocaleString("es-MX")} rese\xF1as verificadas en Google Maps, figura` : "Figura"} como una de las opciones m\xE1s reconocidas de la zona para quienes buscan equipo para eventos.`;
  const heroDesc2 = d.servicios && d.servicios.length > 0 ? `Su oferta incluye ${d.servicios.slice(0, 3).join(", ")} y otros productos especializados. ${d.horario ? `Horario de atenci\xF3n: ${d.horario}.` : "Consulta horarios directamente con la tienda."}` : `Especializada en equipo de ${categoriaLabel[d.categoria] ?? d.categoria} para profesionales y organizadores de eventos. ${d.horario ? `Atiende de ${d.horario}.` : ""}`;
  const mapsQuery = encodeURIComponent(`${d.nombre} ${d.direccion}`);
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;
  const ctaBarItems = {
    audio: [
      { label: "Bocinas para Eventos", href: "/servicios/bocinas/", icon: "sonido" },
      { label: "Bocinas para Bodas", href: "/servicios/bocinas-bodas/", icon: "sonido" },
      { label: "DJ + Sonido", href: "/servicios/bocinas-djs/", icon: "sonido" },
      { label: "Cotizar Sonido", href: "/contacto/", icon: "cotizar" }
    ],
    iluminacion: [
      { label: "Iluminaci\xF3n para Bodas", href: "/eventos/bodas/", icon: "iluminacion" },
      { label: "Cabezas M\xF3viles", href: "/servicios/cabezas-moviles/", icon: "iluminacion" },
      { label: "Efectos Especiales", href: "/servicios/efectos-especiales/", icon: "efectos" },
      { label: "Cotizar Evento", href: "/contacto/", icon: "cotizar" }
    ],
    "audio-video": [
      { label: "Bocinas Conferencias", href: "/servicios/bocinas-conferencias/", icon: "sonido" },
      { label: "Pantallas LED", href: "/servicios/pantallas-led/", icon: "iluminacion" },
      { label: "Iluminaci\xF3n", href: "/servicios/iluminacion/", icon: "iluminacion" },
      { label: "Cotizar Evento", href: "/contacto/", icon: "cotizar" }
    ],
    dj: [
      { label: "Bocinas DJ", href: "/servicios/bocinas-djs/", icon: "sonido" },
      { label: "Cabezas M\xF3viles", href: "/servicios/cabezas-moviles/", icon: "iluminacion" },
      { label: "Efectos para DJ", href: "/servicios/efectos-especiales/", icon: "efectos" },
      { label: "Cotizar Show", href: "/contacto/", icon: "cotizar" }
    ],
    efectos: [
      { label: "Efectos Especiales", href: "/servicios/efectos-especiales/", icon: "efectos" },
      { label: "L\xE1seres & Cabezas", href: "/servicios/cabezas-moviles/", icon: "iluminacion" },
      { label: "M\xE1quina de Humo", href: "/servicios/maquina-humo/", icon: "efectos" },
      { label: "Cotizar Evento", href: "/contacto/", icon: "cotizar" }
    ]
  };
  const ctaItems = ctaBarItems[d.categoria] ?? ctaBarItems.iluminacion;
  const serviciosRelacionados = d.categoria === "audio" || d.categoria === "dj" ? [
    { title: "Bocinas para Eventos", description: "Renta de bocinas y sistemas de sonido profesional para bodas, XV a\xF1os y eventos corporativos en CDMX.", image: "/img/servicios/bocinas.avif", link: "/servicios/bocinas/", btnLabel: "Ver bocinas" },
    { title: "DJ para Eventos", description: "DJ profesional con equipo completo de sonido y mezcla para todo tipo de eventos en CDMX y Estado de M\xE9xico.", image: "/img/servicios/dj.avif", link: "/servicios/bocinas-djs/", btnLabel: "Ver paquetes DJ" },
    { title: "Cabezas M\xF3viles", description: "Renta de cabezas m\xF3viles para espect\xE1culos de luz profesional en eventos y celebraciones.", image: "/img/servicios/cabezas-moviles.avif", link: "/servicios/cabezas-moviles/", btnLabel: "Ver iluminaci\xF3n" }
  ] : d.categoria === "audio-video" ? [
    { title: "Bocinas para Conferencias", description: "Sistema de audio profesional para conferencias, congresos y eventos corporativos en CDMX.", image: "/img/servicios/bocinas.avif", link: "/servicios/bocinas-conferencias/", btnLabel: "Ver audio corporativo" },
    { title: "Pantallas LED", description: "Renta de pantallas LED de alta resoluci\xF3n para presentaciones y eventos corporativos.", image: "/img/servicios/pantallas-led.avif", link: "/servicios/pantallas-led/", btnLabel: "Ver pantallas LED" },
    { title: "Iluminaci\xF3n Corporativa", description: "Iluminaci\xF3n profesional para eventos empresariales, congresos y lanzamientos de productos.", image: "/img/eventos/bodas.avif", link: "/servicios/iluminacion/", btnLabel: "Ver iluminaci\xF3n" }
  ] : [
    { title: "Iluminaci\xF3n para Bodas", description: "Renta de equipo de iluminaci\xF3n completo para bodas en CDMX. Incluye instalaci\xF3n y operaci\xF3n.", image: "/img/eventos/bodas.avif", link: "/eventos/bodas/", btnLabel: "Ver para bodas" },
    { title: "Cabezas M\xF3viles", description: "Renta de cabezas m\xF3viles para espect\xE1culos de luz profesional. Con instalaci\xF3n incluida.", image: "/img/servicios/cabezas-moviles.avif", link: "/servicios/cabezas-moviles/", btnLabel: "Ver cabezas m\xF3viles" },
    { title: "Efectos Especiales", description: "M\xE1quinas de humo, confeti, sparklers y m\xE1s para crear momentos \xFAnicos en tu evento.", image: "/img/servicios/efectos.avif", link: "/servicios/efectos-especiales/", btnLabel: "Ver efectos" }
  ];
  const faqsByCategory = {
    audio: [
      { question: `\xBFQu\xE9 tipo de equipo de audio venden en ${d.nombre}?`, answer: `${d.nombre} se especializa en equipo de audio profesional para eventos: ${d.servicios?.slice(0, 3).join(", ") || "bocinas, micr\xF3fonos y consolas"}. Puedes visitar su local en ${d.alcaldia_municipio} para revisar el inventario disponible o contactarles directamente por tel\xE9fono.` },
      { question: `\xBF${d.nombre} ofrece instalaci\xF3n adem\xE1s de venta?`, answer: `Muchas tiendas de audio en ${zonaLabel[d.zona] ?? d.zona} ofrecen servicios de instalaci\xF3n b\xE1sicos adem\xE1s de la venta. Te recomendamos contactar directamente a ${d.nombre} para confirmar si cuentan con este servicio y cu\xE1l es su costo.` },
      { question: `\xBFEs mejor comprar o rentar equipo de audio para un evento?`, answer: `Depende de la frecuencia de uso. Si organizas m\xE1s de 6\u20138 eventos por a\xF1o, la compra puede convenir. Para eventos espor\xE1dicos como una boda o XV a\xF1os, rentar es m\xE1s eficiente: evitas la inversi\xF3n inicial, el transporte y la log\xEDstica. REDEIL ofrece renta de sistemas de sonido completos con instalaci\xF3n en CDMX y Estado de M\xE9xico.` },
      { question: `\xBFC\xF3mo llego a ${d.nombre} en ${d.alcaldia_municipio}?`, answer: `${d.nombre} se ubica en ${d.direccion}. ${d.zona === "cdmx" ? "Al estar en la Ciudad de M\xE9xico, puedes llegar en Metro o Metrob\xFAs seg\xFAn la alcald\xEDa." : "Consulta las rutas de transporte disponibles en la zona."} Te recomendamos llamar antes de visitar para confirmar disponibilidad de lo que buscas.` }
    ],
    iluminacion: [
      { question: `\xBFQu\xE9 tipo de iluminaci\xF3n para eventos venden en ${d.nombre}?`, answer: `${d.nombre} maneja iluminaci\xF3n de diferentes tipos: ${d.servicios?.slice(0, 3).join(", ") || "luminarias LED, focos de colores y efectos"}. Es recomendable visitar el local en ${d.alcaldia_municipio} o llamarles para verificar la disponibilidad de equipo espec\xEDfico.` },
      { question: `\xBFPuedo comprar equipo de iluminaci\xF3n profesional (DMX) para mi evento?`, answer: `Dependiendo de la especializaci\xF3n de ${d.nombre}, pueden tener equipo de control DMX, luminarias esc\xE9nicas y accesorios profesionales. Para producciones de mayor escala, muchas empresas prefieren rentar equipo para un evento espec\xEDfico, lo cual resulta m\xE1s econ\xF3mico que la compra.` },
      { question: `\xBFCu\xE1nto cuesta armar un sistema de iluminaci\xF3n b\xE1sico para una fiesta?`, answer: `Un sistema b\xE1sico de iluminaci\xF3n para fiestas puede variar entre $3,000 y $15,000 MXN dependiendo del equipo seleccionado. Incluir\xEDa algunas luminarias LED de colores, controlador y accesorios b\xE1sicos. Para bodas y eventos formales, la renta profesional suele ser m\xE1s conveniente que la compra.` },
      { question: `\xBFEs mejor comprar o rentar iluminaci\xF3n para bodas y eventos en ${zonaShort[d.zona] ?? d.zona}?`, answer: `Para eventos \xFAnicos como bodas o XV a\xF1os, la renta es casi siempre la mejor opci\xF3n. Con REDEIL obtienes equipo profesional \u2014cabezas m\xF3viles, l\xE1seres, efectos\u2014 con instalaci\xF3n y operaci\xF3n incluida. Sin preocuparte por almacenamiento, transporte ni mantenimiento. Cont\xE1ctanos al 55 3068 2988 para cotizar.` }
    ],
    "audio-video": [
      { question: `\xBF${d.nombre} vende equipo para videoconferencia y presentaciones corporativas?`, answer: `${d.nombre} se especializa en ${d.servicios?.slice(0, 2).join(" y ") || "sistemas de audio y video"}. Para proyectos corporativos, ofrecen asesor\xEDa t\xE9cnica para seleccionar el equipo m\xE1s adecuado seg\xFAn el espacio y las necesidades de comunicaci\xF3n de la empresa.` },
      { question: `\xBFQu\xE9 tipo de pantallas y proyectores manejan?`, answer: `La oferta de pantallas y proyectores var\xEDa seg\xFAn el inventario disponible. ${d.nombre} puede asesorarte sobre soluciones de visualizaci\xF3n para salas de juntas, auditorios y espacios de presentaci\xF3n. Te recomendamos contactarles directamente para verificar modelos y precios actuales.` },
      { question: `\xBFOfrecen instalaci\xF3n de sistemas audiovisuales?`, answer: `${d.nombre} ofrece servicios de instalaci\xF3n e integraci\xF3n de sistemas AV. Esto incluye la instalaci\xF3n f\xEDsica, configuraci\xF3n de software y pruebas de funcionamiento para garantizar que el sistema opere correctamente en tu espacio.` },
      { question: `\xBFPuedo rentar equipo audiovisual para un evento puntual?`, answer: `Para eventos donde no quieres invertir en la compra de equipo, la renta es la mejor opci\xF3n. REDEIL ofrece renta de sistemas de sonido, pantallas LED y equipos de iluminaci\xF3n para eventos corporativos en CDMX y Estado de M\xE9xico. Cont\xE1ctanos al 55 3068 2988.` }
    ],
    dj: [
      { question: `\xBFQu\xE9 marcas de equipo DJ maneja ${d.nombre}?`, answer: `${d.nombre} es la referencia en equipo para DJ en ${d.alcaldia_municipio}. Manejan controladores y equipo de marcas l\xEDderes como Pioneer DJ, Native Instruments y Rane, entre otras. Sus asesores tienen conocimiento real del sector y pueden orientarte seg\xFAn tu nivel y tipo de actuaciones.` },
      { question: `\xBFPuedo probar los controladores antes de comprar?`, answer: `En tiendas especializadas como ${d.nombre} suelen permitir probar el equipo antes de decidir. Es recomendable llamar con anticipaci\xF3n para verificar disponibilidad y si tienen el modelo espec\xEDfico que te interesa para una demostraci\xF3n.` },
      { question: `\xBFQu\xE9 equipo de iluminaci\xF3n necesita un DJ para sus eventos?`, answer: `Un DJ profesional necesita al menos algunas cabezas m\xF3viles, strobes y efectos LED para crear un buen show visual. Para eventos grandes, la opci\xF3n m\xE1s pr\xE1ctica es rentar el equipo de iluminaci\xF3n. REDEIL ofrece paquetes de iluminaci\xF3n completos para DJs con instalaci\xF3n incluida.` },
      { question: `\xBFC\xF3mo llego a ${d.nombre} desde cualquier parte de CDMX?`, answer: `${d.nombre} se localiza en ${d.direccion}. ${d.zona === "cdmx" ? "La ubicaci\xF3n en el Centro Hist\xF3rico tiene buena conexi\xF3n de transporte: Metro Salto del Agua, Pino Su\xE1rez y varias l\xEDneas de Metrob\xFAs pasan cerca." : "Consulta las opciones de transporte disponibles en la zona para planear tu visita."} Confirma horarios llamando al ${d.telefono || "n\xFAmero disponible en Google Maps"}.` }
    ],
    efectos: [
      { question: `\xBFQu\xE9 tipo de efectos de luz venden en ${d.nombre}?`, answer: `${d.nombre} se especializa en efectos de luz y tecnolog\xEDa LED: ${d.servicios?.slice(0, 3).join(", ") || "l\xE1seres, strobes y efectos LED"}. Su cat\xE1logo est\xE1 orientado a quienes quieren crear ambientes visuales impactantes en eventos, clubs y espacios de entretenimiento.` },
      { question: `\xBFLos ca\xF1ones l\xE1ser son seguros para interiores?`, answer: `Los l\xE1seres para eventos deben clasificarse seg\xFAn su potencia y uso. Los l\xE1seres de clase 3B y 4 requieren operaci\xF3n por t\xE9cnicos certificados y medidas de seguridad espec\xEDficas. En ${d.nombre} pueden asesorarte sobre la clase adecuada para tu aplicaci\xF3n y las restricciones legales vigentes.` },
      { question: `\xBFPuedo sincronizar los efectos de luz con el sonido?`, answer: `La mayor\xEDa del equipo de efectos moderno tiene modo "sound-to-light" que sincroniza los efectos con el ritmo de la m\xFAsica autom\xE1ticamente. Los sistemas m\xE1s avanzados usan control DMX para programar secuencias precisas. En ${d.nombre} pueden explicarte las opciones disponibles en su cat\xE1logo.` },
      { question: `\xBFEs mejor comprar o rentar efectos especiales para un evento?`, answer: `Para eventos \xFAnicos, la renta es m\xE1s conveniente: evitas la inversi\xF3n y te aseguras de que el equipo est\xE9 operado correctamente. REDEIL renta ca\xF1ones l\xE1ser, m\xE1quinas de humo, confeti y efectos especiales para eventos en CDMX y Estado de M\xE9xico, con personal t\xE9cnico incluido.` }
    ]
  };
  const faqItems = faqsByCategory[d.categoria] ?? faqsByCategory.iluminacion;
  const localBusinessSchema = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": d.nombre,
    "description": `${d.nombre} \u2014 ${categoriaLabel[d.categoria] ?? d.categoria} en ${zonaLabel[d.zona] ?? d.zona}. ${d.alcaldia_municipio}.`,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": d.direccion,
      "addressLocality": d.alcaldia_municipio,
      "addressRegion": d.zona === "cdmx" ? "CDMX" : "Estado de M\xE9xico",
      "addressCountry": "MX"
    },
    ...d.telefono ? { "telephone": d.telefono } : {},
    ...d.rating ? {
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": d.rating,
        "reviewCount": d.resenas ?? 1,
        "bestRating": 5,
        "worstRating": 1
      }
    } : {},
    ...d.horario ? { "openingHours": d.horario } : {}
  });
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": `${d.nombre} \u2014 ${categoriaLabel[d.categoria] ?? d.categoria} en ${d.alcaldia_municipio} | Directorio REDEIL`, "description": `${d.nombre} en ${d.alcaldia_municipio}. ${d.rating ? `\u2B50${d.rating} (${d.resenas} rese\xF1as).` : ""} Equipo de ${categoriaLabel[d.categoria] ?? d.categoria} para eventos en ${zonaLabel[d.zona] ?? d.zona}.`, "canonical": `https://rentadeiluminacion.com/directorio/${empresa.slug}/`, "schemaMarkup": localBusinessSchema, "data-astro-cid-pkhkl56b": true }, { "breadcrumbs": async ($$result2) => renderTemplate`${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "slot": "breadcrumbs", "items": [
    { label: "Inicio", href: "/" },
    { label: "Directorio", href: "/directorio/" },
    { label: zonaLabel[d.zona] ?? d.zona, href: `/directorio/${d.zona}/` },
    { label: d.nombre }
  ], "data-astro-cid-pkhkl56b": true })}`, "default": async ($$result2) => renderTemplate`   ${maybeRenderHead()}<section class="ficha-hero" data-astro-cid-pkhkl56b> <div class="container" data-astro-cid-pkhkl56b> <div class="ficha-hero__grid" data-astro-cid-pkhkl56b> <!-- Col 1: datos empresa + CTAs --> <div class="ficha-hero__info" data-astro-cid-pkhkl56b> <div class="ficha-hero__badges" data-astro-cid-pkhkl56b> <span class="badge badge--cat" data-astro-cid-pkhkl56b>${categoriaLabel[d.categoria] ?? d.categoria}</span> <span class="badge badge--zona" data-astro-cid-pkhkl56b>${zonaShort[d.zona] ?? d.zona}</span> </div> <h1 class="ficha-hero__name" data-astro-cid-pkhkl56b>${d.nombre}</h1> ${d.rating !== void 0 && renderTemplate`<div class="ficha-rating" data-astro-cid-pkhkl56b> <span class="ficha-stars"${addAttribute(`${d.rating} de 5 estrellas`, "aria-label")} data-astro-cid-pkhkl56b> ${Array.from({ length: 5 }, (_, i) => renderTemplate`<svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"${addAttribute(i < fullStars ? "star star--full" : i === fullStars && hasHalf ? "star star--half" : "star star--empty", "class")} data-astro-cid-pkhkl56b> <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" fill="currentColor" stroke="currentColor" stroke-width="0.5" data-astro-cid-pkhkl56b></polygon> </svg>`)} </span> <strong class="ficha-rating-val" data-astro-cid-pkhkl56b>${d.rating.toFixed(1)}</strong> ${d.resenas !== void 0 && renderTemplate`<span class="ficha-resenas" data-astro-cid-pkhkl56b>${d.resenas.toLocaleString("es-MX")} reseñas</span>`} </div>`} <p class="ficha-hero__addr" data-astro-cid-pkhkl56b> <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" data-astro-cid-pkhkl56b><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" data-astro-cid-pkhkl56b></path><circle cx="12" cy="10" r="3" data-astro-cid-pkhkl56b></circle></svg> ${d.direccion} </p> <div class="ficha-hero__ctas" data-astro-cid-pkhkl56b> ${d.telefono && renderTemplate`<a${addAttribute(`tel:${d.telefono.replace(/\s/g, "")}`, "href")} class="ficha-hero__btn ficha-hero__btn--phone" data-astro-cid-pkhkl56b> <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" data-astro-cid-pkhkl56b><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 015.13 12.72 19.79 19.79 0 012.06 4.11 2 2 0 014 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" data-astro-cid-pkhkl56b></path></svg> ${d.telefono} </a>`} <a${addAttribute(mapsUrl, "href")} target="_blank" rel="noopener noreferrer" class="ficha-hero__btn ficha-hero__btn--maps" data-astro-cid-pkhkl56b> <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" data-astro-cid-pkhkl56b><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" data-astro-cid-pkhkl56b></path><circle cx="12" cy="10" r="3" data-astro-cid-pkhkl56b></circle></svg>
Ver en Maps
</a> </div> </div> <!-- Col 2: descripción de la empresa --> <div class="ficha-hero__desc" data-astro-cid-pkhkl56b> <p class="ficha-hero__desc-p" data-astro-cid-pkhkl56b>${heroDesc1}</p> <p class="ficha-hero__desc-p" data-astro-cid-pkhkl56b>${heroDesc2}</p> <div class="ficha-hero__redeil-hint" data-astro-cid-pkhkl56b> <span class="ficha-hero__hint-label" data-astro-cid-pkhkl56b>¿Prefieres rentar equipo?</span> <a href="https://wa.me/525530682988?text=Hola%20REDEIL%2C%20quiero%20cotizar%20iluminaci%C3%B3n%20para%20mi%20evento" target="_blank" rel="noopener noreferrer" class="ficha-hero__hint-link" data-astro-cid-pkhkl56b>
REDEIL — 55 3068 2988 →
</a> </div> </div> </div> </div> </section>  ${renderComponent($$result2, "CtaBar", $$CtaBar, { "headline": `\xBFNecesitas ${categoriaLabel[d.categoria] ?? "equipo"} rentado con instalaci\xF3n incluida?`, "items": ctaItems, "data-astro-cid-pkhkl56b": true })}  <div class="container ficha-body" data-astro-cid-pkhkl56b> <div class="ficha-layout" data-astro-cid-pkhkl56b> <!-- Columna principal --> <main class="ficha-main" data-astro-cid-pkhkl56b> <!-- Datos de la empresa --> <section class="ficha-datos" data-astro-cid-pkhkl56b> <h2 class="ficha-section-title" data-astro-cid-pkhkl56b>Datos de contacto</h2> <div class="ficha-datos__grid" data-astro-cid-pkhkl56b> <div class="ficha-datos__item" data-astro-cid-pkhkl56b> <div class="ficha-datos__icon" data-astro-cid-pkhkl56b> <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" data-astro-cid-pkhkl56b><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" data-astro-cid-pkhkl56b></path><circle cx="12" cy="10" r="3" data-astro-cid-pkhkl56b></circle></svg> </div> <div data-astro-cid-pkhkl56b> <span class="ficha-datos__label" data-astro-cid-pkhkl56b>Dirección</span> <span class="ficha-datos__val" data-astro-cid-pkhkl56b>${d.direccion}</span> </div> </div> ${d.telefono && renderTemplate`<div class="ficha-datos__item" data-astro-cid-pkhkl56b> <div class="ficha-datos__icon" data-astro-cid-pkhkl56b> <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" data-astro-cid-pkhkl56b><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 015.13 12.72 19.79 19.79 0 012.06 4.11 2 2 0 014 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" data-astro-cid-pkhkl56b></path></svg> </div> <div data-astro-cid-pkhkl56b> <span class="ficha-datos__label" data-astro-cid-pkhkl56b>Teléfono</span> <a${addAttribute(`tel:${d.telefono.replace(/\s/g, "")}`, "href")} class="ficha-datos__val ficha-datos__link" data-astro-cid-pkhkl56b>${d.telefono}</a> </div> </div>`} ${d.horario && renderTemplate`<div class="ficha-datos__item" data-astro-cid-pkhkl56b> <div class="ficha-datos__icon" data-astro-cid-pkhkl56b> <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" data-astro-cid-pkhkl56b><circle cx="12" cy="12" r="10" data-astro-cid-pkhkl56b></circle><polyline points="12 6 12 12 16 14" data-astro-cid-pkhkl56b></polyline></svg> </div> <div data-astro-cid-pkhkl56b> <span class="ficha-datos__label" data-astro-cid-pkhkl56b>Horario</span> <span class="ficha-datos__val" data-astro-cid-pkhkl56b>${d.horario}</span> </div> </div>`} <div class="ficha-datos__item" data-astro-cid-pkhkl56b> <div class="ficha-datos__icon" data-astro-cid-pkhkl56b> <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" data-astro-cid-pkhkl56b><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" data-astro-cid-pkhkl56b></path><circle cx="12" cy="9" r="2.5" data-astro-cid-pkhkl56b></circle></svg> </div> <div data-astro-cid-pkhkl56b> <span class="ficha-datos__label" data-astro-cid-pkhkl56b>Zona</span> <a${addAttribute(`/directorio/${d.zona}/`, "href")} class="ficha-datos__val ficha-datos__link" data-astro-cid-pkhkl56b>${zonaLabel[d.zona] ?? d.zona}</a> </div> </div> ${(d.facebook || d.instagram) && renderTemplate`<div class="ficha-datos__item" data-astro-cid-pkhkl56b> <div class="ficha-datos__icon" data-astro-cid-pkhkl56b> <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" data-astro-cid-pkhkl56b><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" data-astro-cid-pkhkl56b></path></svg> </div> <div data-astro-cid-pkhkl56b> <span class="ficha-datos__label" data-astro-cid-pkhkl56b>Redes sociales</span> <span class="ficha-datos__val" data-astro-cid-pkhkl56b> ${d.facebook && renderTemplate`<a${addAttribute(d.facebook, "href")} target="_blank" rel="noopener noreferrer" class="ficha-datos__link" data-astro-cid-pkhkl56b>Facebook</a>`} ${d.facebook && d.instagram && " \xB7 "} ${d.instagram && renderTemplate`<span data-astro-cid-pkhkl56b>${d.instagram}</span>`} </span> </div> </div>`} </div> </section> <!-- Servicios que ofrece --> ${d.servicios && d.servicios.length > 0 && renderTemplate`<section class="ficha-servicios" data-astro-cid-pkhkl56b> <h2 class="ficha-section-title" data-astro-cid-pkhkl56b>Servicios que ofrece ${d.nombre}</h2> <ul class="ficha-servicios__list" data-astro-cid-pkhkl56b> ${d.servicios.map((s) => renderTemplate`<li class="ficha-servicios__item" data-astro-cid-pkhkl56b> <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" data-astro-cid-pkhkl56b><polyline points="20 6 9 17 4 12" data-astro-cid-pkhkl56b></polyline></svg> ${s} </li>`)} </ul> </section>`} <!-- Contenido descriptivo --> <section class="ficha-descripcion prose" data-astro-cid-pkhkl56b> ${renderComponent($$result2, "Content", Content, { "data-astro-cid-pkhkl56b": true })} </section> <!-- Mapa --> <section class="ficha-mapa" data-astro-cid-pkhkl56b> <h2 class="ficha-section-title" data-astro-cid-pkhkl56b>Cómo llegar a ${d.nombre}</h2> <div class="ficha-mapa__embed" data-astro-cid-pkhkl56b> <iframe${addAttribute(`Mapa de ${d.nombre}`, "title")}${addAttribute(`https://maps.google.com/maps?q=${encodeURIComponent(d.nombre + " " + d.direccion)}&output=embed`, "src")} width="100%" height="340" style="border:0;"${addAttribute(false, "allowfullscreen")} loading="lazy" referrerpolicy="no-referrer-when-downgrade" data-astro-cid-pkhkl56b></iframe> </div> <p class="ficha-mapa__addr" data-astro-cid-pkhkl56b> <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true" data-astro-cid-pkhkl56b><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" data-astro-cid-pkhkl56b></path><circle cx="12" cy="10" r="3" data-astro-cid-pkhkl56b></circle></svg> ${d.direccion} </p> </section> </main> <!-- Sidebar sticky --> <aside class="ficha-sidebar" data-astro-cid-pkhkl56b> <div class="ficha-sidebar__card" data-astro-cid-pkhkl56b> <h3 class="ficha-sidebar__title" data-astro-cid-pkhkl56b>Contacto rápido</h3> ${d.telefono && renderTemplate`<a${addAttribute(`tel:${d.telefono.replace(/\s/g, "")}`, "href")} class="ficha-sidebar__tel" data-astro-cid-pkhkl56b> <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" data-astro-cid-pkhkl56b><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 015.13 12.72 19.79 19.79 0 012.06 4.11 2 2 0 014 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" data-astro-cid-pkhkl56b></path></svg> ${d.telefono} </a>`} <a${addAttribute(mapsUrl, "href")} target="_blank" rel="noopener noreferrer" class="ficha-sidebar__maps" data-astro-cid-pkhkl56b> <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" data-astro-cid-pkhkl56b><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" data-astro-cid-pkhkl56b></path><circle cx="12" cy="10" r="3" data-astro-cid-pkhkl56b></circle></svg>
Ver en Google Maps
</a> </div> <!-- REDEIL CTA --> <div class="ficha-sidebar__cta" data-astro-cid-pkhkl56b> <p class="ficha-sidebar__cta-label" data-astro-cid-pkhkl56b>¿Prefieres rentar?</p> <h4 class="ficha-sidebar__cta-title" data-astro-cid-pkhkl56b>Renta de equipo con instalación incluida</h4> <p class="ficha-sidebar__cta-desc" data-astro-cid-pkhkl56b>REDEIL lleva, instala y opera el equipo en tu evento. Sin inversión inicial.</p> <a href="https://wa.me/525530682988?text=Hola%20REDEIL%2C%20quiero%20cotizar%20para%20mi%20evento" target="_blank" rel="noopener noreferrer" class="ficha-sidebar__wa-btn" data-astro-cid-pkhkl56b> <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-astro-cid-pkhkl56b><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" data-astro-cid-pkhkl56b></path></svg>
55 3068 2988
</a> <a href="/servicios/" class="ficha-sidebar__servicios-link" data-astro-cid-pkhkl56b>Ver todos los servicios →</a> </div> <!-- Zona link --> <div class="ficha-sidebar__zona" data-astro-cid-pkhkl56b> <p class="ficha-sidebar__zona-label" data-astro-cid-pkhkl56b>Más tiendas en ${zonaLabel[d.zona] ?? d.zona}</p> <a${addAttribute(`/directorio/${d.zona}/`, "href")} class="ficha-sidebar__zona-link" data-astro-cid-pkhkl56b>
Ver directorio ${zonaShort[d.zona] ?? d.zona} →
</a> </div> </aside> </div> </div>  ${otrasEmpresas.length > 0 && renderTemplate`<section class="ficha-otras" data-astro-cid-pkhkl56b> <div class="container" data-astro-cid-pkhkl56b> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": `Otras tiendas de ${categoriaLabel[d.categoria] ?? d.categoria}`, "paragraph1": `M\xE1s proveedores de equipo de ${categoriaLabel[d.categoria] ?? d.categoria} en ${zonaLabel[d.zona] ?? d.zona} y zona metropolitana.`, "data-astro-cid-pkhkl56b": true })} <div class="ficha-otras__grid" data-astro-cid-pkhkl56b> ${otrasEmpresas.map((e) => renderTemplate`${renderComponent($$result2, "DirectoryCard", $$DirectoryCard, { "nombre": e.data.nombre, "categoria": e.data.categoria, "zona": e.data.zona, "alcaldia_municipio": e.data.alcaldia_municipio, "telefono": e.data.telefono, "rating": e.data.rating, "resenas": e.data.resenas, "slug": e.slug, "data-astro-cid-pkhkl56b": true })}`)} </div> <div class="ficha-otras__ver-mas" data-astro-cid-pkhkl56b> <a${addAttribute(`/directorio/${d.zona}/`, "href")} class="ficha-otras__btn" data-astro-cid-pkhkl56b>Ver todo el directorio ${zonaShort[d.zona] ?? d.zona} →</a> </div> </div> </section>`} <section class="ficha-cta-rentar" data-astro-cid-pkhkl56b> <div class="container" data-astro-cid-pkhkl56b> <div class="ficha-cta-rentar__header" data-astro-cid-pkhkl56b> <h2 class="ficha-cta-rentar__title" data-astro-cid-pkhkl56b>¿Prefieres rentar equipo en lugar de comprarlo?</h2> <p class="ficha-cta-rentar__desc" data-astro-cid-pkhkl56b>REDEIL te lo lleva e instala. Renta de iluminación y audio profesional para eventos en CDMX y Estado de México. Sin inversión inicial, sin preocuparte por transporte ni montaje.</p> <div class="ficha-cta-rentar__btns" data-astro-cid-pkhkl56b> <a href="/contacto/" class="ficha-cta-rentar__btn ficha-cta-rentar__btn--primary" data-astro-cid-pkhkl56b>Cotizar mi evento</a> <a href="https://wa.me/525530682988?text=Hola%20REDEIL%2C%20quiero%20cotizar%20iluminaci%C3%B3n%20para%20mi%20evento" target="_blank" rel="noopener noreferrer" class="ficha-cta-rentar__btn ficha-cta-rentar__btn--wa" data-astro-cid-pkhkl56b> <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-astro-cid-pkhkl56b><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" data-astro-cid-pkhkl56b></path></svg>
WhatsApp
</a> </div> </div> <div class="ficha-cta-rentar__cards" data-astro-cid-pkhkl56b> ${serviciosRelacionados.map((s) => renderTemplate`${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "title": s.title, "description": s.description, "image": s.image, "link": s.link, "btnLabel": s.btnLabel, "data-astro-cid-pkhkl56b": true })}`)} </div> </div> </section>  <section class="ficha-faq" data-astro-cid-pkhkl56b> <div class="container" data-astro-cid-pkhkl56b> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": `Preguntas frecuentes sobre ${categoriaLabel[d.categoria] ?? "equipo"} en ${d.alcaldia_municipio}`, "paragraph1": `Resolvemos las dudas m\xE1s comunes sobre comprar equipo de ${categoriaLabel[d.categoria] ?? "audio e iluminaci\xF3n"} en ${zonaLabel[d.zona] ?? d.zona}.`, "data-astro-cid-pkhkl56b": true })} </div> ${renderComponent($$result2, "FaqSection", $$FaqSection, { "items": faqItems, "waMessage": `Hola REDEIL, quiero saber m\xE1s sobre equipo de ${categoriaLabel[d.categoria] ?? "audio e iluminaci\xF3n"} para mi evento.`, "data-astro-cid-pkhkl56b": true })} </section> ` })} `;
}, "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/pages/directorio/[...slug].astro", void 0);

const $$file = "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/pages/directorio/[...slug].astro";
const $$url = "/directorio/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
