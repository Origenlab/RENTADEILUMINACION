import { c as createComponent, b as renderComponent, r as renderTemplate, m as maybeRenderHead, F as Fragment } from '../../chunks/astro/server_D8pMnQBn.mjs';
import 'piccolore';
import { $ as $$BaseLayout, a as $$Breadcrumbs } from '../../chunks/Breadcrumbs_BkFbHGbf.mjs';
import { $ as $$Hero } from '../../chunks/Hero_3Is3fruG.mjs';
import { $ as $$CtaBar } from '../../chunks/CtaBar_CdFZlCZU.mjs';
import { $ as $$SectionHeader } from '../../chunks/SectionHeader_mLKzHzNX.mjs';
import { $ as $$ServiceCard } from '../../chunks/ServiceCard_Bli7ALj4.mjs';
import { $ as $$Gallery4X4 } from '../../chunks/Gallery4x4_Bx6Jz45E.mjs';
import { $ as $$FaqSection } from '../../chunks/FaqSection_CzcP3CIi.mjs';
export { renderers } from '../../renderers.mjs';

const $$Sonido = createComponent(($$result, $$props, $$slots) => {
  const title = "Renta de Sonido y DJ para Eventos en CDMX | REDEIL";
  const description = "Audio profesional JBL y QSC para bodas, XV a\xF1os y fiestas. DJ, bocinas, micr\xF3fonos. Desde 50 hasta 2,000 personas. Instalaci\xF3n incluida. Cotiza gratis.";
  const canonical = "https://rentadeiluminacion.com/servicios/sonido/";
  const schemaMarkup = JSON.stringify([
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Renta de Sonido y DJ Profesional para Eventos",
      "provider": {
        "@type": "LocalBusiness",
        "name": "REDEIL",
        "url": "https://rentadeiluminacion.com",
        "telephone": "+525530682988",
        "address": { "@type": "PostalAddress", "addressLocality": "Ciudad de M\xE9xico", "addressRegion": "CDMX", "addressCountry": "MX" }
      },
      "description": "Servicio profesional de renta de audio, bocinas y DJ para bodas, XV a\xF1os y eventos en CDMX y Estado de M\xE9xico.",
      "areaServed": [
        { "@type": "City", "name": "Ciudad de M\xE9xico" },
        { "@type": "State", "name": "Estado de M\xE9xico" }
      ],
      "serviceType": "Renta de Sonido y DJ",
      "priceRange": "$$"
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "\xBFCu\xE1ntas bocinas necesito para mi evento?", "acceptedAnswer": { "@type": "Answer", "text": "Depende del espacio y la cantidad de personas. Para eventos de hasta 100 personas en sal\xF3n cerrado, un par de bocinas JBL PRX es suficiente. Para 200+, usamos sistemas line array. Te asesoramos seg\xFAn las dimensiones de tu venue." } },
        { "@type": "Question", "name": "\xBFEl DJ trae su propio equipo de sonido?", "acceptedAnswer": { "@type": "Answer", "text": "S\xED. Nuestro DJ llega con consola profesional, bocinas, subwoofer y todo lo necesario. Si ya tienes equipo de sonido contratado, tambi\xE9n puede trabajar con tu setup existente." } },
        { "@type": "Question", "name": "\xBFPuedo rentar solo las bocinas sin DJ?", "acceptedAnswer": { "@type": "Answer", "text": "Claro. Muchos clientes rentan solo el equipo de audio con t\xE9cnico. Conectamos tu playlist de Spotify, tu laptop o el micr\xF3fono que necesites. El t\xE9cnico se encarga de que todo suene bien." } },
        { "@type": "Question", "name": "\xBFIncluyen micr\xF3fonos para la ceremonia?", "acceptedAnswer": { "@type": "Answer", "text": "S\xED, incluimos micr\xF3fonos inal\xE1mbricos profesionales. Para bodas, normalmente usamos 2: uno para los votos y otro para el oficiante. Para conferencias, hasta 4 micr\xF3fonos seg\xFAn necesidad." } },
        { "@type": "Question", "name": "\xBFCubren eventos al aire libre?", "acceptedAnswer": { "@type": "Answer", "text": "S\xED. Tenemos equipos dise\xF1ados para exteriores con la potencia necesaria para espacios abiertos. Si no hay toma el\xE9ctrica, incluimos planta de luz sin costo adicional." } }
      ]
    }
  ]);
  const servicios = [
    { title: "Audio para Eventos", image: "/img/bocinas/renta-bocinas-line-array-concierto-400w.avif", alt: "Sistema de bocinas line array JBL para evento", description: "Bocinas JBL PRX y sistemas QSC desde 50 hasta 2,000+ personas. T\xE9cnico de audio incluido. Desde $4,000 + IVA.", link: "/servicios/bocinas/" },
    { title: "DJ para Fiestas y Bodas", image: "/img/bocinas-djs/dj-para-eventos-cdmx-cabina-profesional-300w.avif", alt: "DJ profesional con consola Pioneer en evento", description: "DJ con consola Pioneer DDJ y repertorio adaptado \u2014 vals, hora loca, cumbia, electr\xF3nica. Solo o con paquete completo.", link: "/servicios/bocinas-djs/" },
    { title: "Bocinas para Bodas", image: "/img/bocinas-bodas/renta-bocinas-boda-primer-baile-novios-truss-300w.avif", alt: "Audio profesional para ceremonia y fiesta de boda", description: "Audio JBL dimensionado para ceremonia, coctel, vals y fiesta. El t\xE9cnico llega 2-3 horas antes para ecualizarlo al venue.", link: "/servicios/bocinas-bodas/" },
    { title: "Bocinas para XV A\xF1os", image: "/img/bocinas-xv/renta-bocinas-xv-anos-vals-padre-hija-dj-salon-300w.avif", alt: "Sistema de audio para fiesta de XV a\xF1os", description: "DJ con Pioneer que conoce el protocolo de XV a\xF1os. Vals, coreograf\xEDa, hora loca, liga \u2014 cada canci\xF3n en el momento exacto.", link: "/servicios/bocinas-xv/" },
    { title: "Bocinas para Fiestas", image: "/img/bocinas-fiestas/renta-bocinas-fiestas-eventos-profesionales-300w.avif", alt: "Bocinas profesionales para fiesta privada", description: "Cumplea\xF1os, graduaciones, posadas, aniversarios. Audio JBL o QSC dimensionado para tu espacio y n\xFAmero de invitados.", link: "/servicios/bocinas-fiestas/" },
    { title: "Bocinas para Conferencias", image: "/img/bocinas-conferencias/renta-de-bocinas-para-conferencias-salon-ejecutivo-300w.avif", alt: "Audio para conferencia en sal\xF3n ejecutivo", description: "Audio Bose y JBL para que cada palabra del ponente llegue clara a la \xFAltima fila. Mezcladora Yamaha TF incluida.", link: "/servicios/bocinas-conferencias/" },
    { title: "Micr\xF3fonos Inal\xE1mbricos", image: "/img/bocinas/renta-bocinas-line-array-concierto-400w.avif", alt: "Micr\xF3fonos Shure y Sennheiser inal\xE1mbricos para eventos", description: "Shure y Sennheiser UHF \u2014 de mano, lavalier y diadema para brindis, ceremonias y conferencias. T\xE9cnico incluido.", link: "/servicios/microfonos/" }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "canonical": canonical, "schemaMarkup": schemaMarkup }, { "breadcrumbs": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "breadcrumbs" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Breadcrumbs", $$Breadcrumbs, { "items": [
    { label: "Inicio", href: "/" },
    { label: "Servicios", href: "/servicios/" },
    { label: "Sonido y DJ" }
  ] })} ` })}`, "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, { "title": "Renta de Sonido y DJ para Eventos en CDMX", "subtitle": "Audio JBL y QSC con t\xE9cnico incluido. Desde 50 hasta 2,000+ personas.", "introParagraph1": 'La diferencia entre "se oye" y "se siente" es el equipo y qui\xE9n lo opera. Un par de bocinas Bluetooth en un jard\xEDn de 200 personas no va a funcionar \u2014 el sonido se pierde en el aire libre, el bajo desaparece, y a las 11pm los vecinos se quejan del agudo. En <strong>REDEIL</strong> dimensionamos el audio al espacio: bocinas <strong>JBL PRX</strong> para fiestas de hasta 150 personas, sistemas <strong>QSC</strong> line array para 200+, y subwoofers dedicados cuando necesitas que el bajo se sienta.', "introParagraph2": "El t\xE9cnico de audio llega 2-3 horas antes, ecualiza al venue espec\xEDfico (un sal\xF3n de m\xE1rmol rebota diferente que uno alfombrado), y se queda durante todo el evento. Si necesitas DJ, llega con consola <strong>Pioneer CDJ-2000NXS2</strong> y repertorio adaptado a tu protocolo. Si solo necesitas bocinas para tu playlist de Spotify, tambi\xE9n. Transporte, montaje y desmontaje incluidos." })} ${renderComponent($$result2, "CtaBar", $$CtaBar, { "headline": "\xBFQu\xE9 necesitas para tu evento?", "items": [
    { label: "Audio Eventos", href: "/servicios/bocinas/", icon: "sonido" },
    { label: "DJ Profesional", href: "/servicios/bocinas-djs/", icon: "sonido" },
    { label: "Conferencias", href: "/servicios/bocinas-conferencias/", icon: "sonido" },
    { label: "Cotiza Gratis", href: "/contacto/", icon: "cotizar" }
  ] })}  ${maybeRenderHead()}<section class="services-section"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Audio Profesional en Acci\xF3n", "subtitle": "As\xED se ve el equipo montado en eventos reales.", "paragraph1": "Un line array JBL en sal\xF3n de bodas. Una cabina Pioneer en la pista. Bocinas QSC en jard\xEDn con subwoofer. El equipo cambia seg\xFAn el evento, pero el t\xE9cnico siempre est\xE1 ah\xED ajustando niveles en tiempo real.", "paragraph2": "Estas fotos son de montajes nuestros \u2014 no de cat\xE1logo de fabricante." })} ${renderComponent($$result2, "Gallery4x4", $$Gallery4X4, { "images": [
    { src: "/img/bocinas/bocinas-profesionales-evento-masivo.avif", alt: "Bocinas profesionales para evento masivo" },
    { src: "/img/bocinas/renta-bocinas-line-array-concierto.avif", alt: "Sistema line array para concierto" },
    { src: "/img/bocinas/sonido-profesional-concierto-estadio.avif", alt: "Sonido profesional en concierto" },
    { src: "/img/bocinas-bodas/renta-bocinas-boda-primer-baile-novios-romantico.avif", alt: "Primer baile con sonido profesional" },
    { src: "/img/bocinas-bodas/renta-bocinas-boda-salon-line-array-pioneer-dj.avif", alt: "Line array en sal\xF3n de boda" },
    { src: "/img/bocinas-bodas/renta-bocinas-boda-dj-cabina-blanca-flores.avif", alt: "Cabina DJ en boda elegante" },
    { src: "/img/bocinas-bodas/renta-bocinas-boda-fiesta-confeti-chispas-dj.avif", alt: "Fiesta con confeti y DJ" },
    { src: "/img/bocinas-djs/dj-para-eventos-cdmx-cabina-profesional.avif", alt: "DJ profesional con cabina" },
    { src: "/img/bocinas-djs/dj-profesional-consola-pioneer-cdj.avif", alt: "Consola Pioneer CDJ profesional" },
    { src: "/img/bocinas-djs/dj-para-eventos-pista-iluminada.avif", alt: "Pista iluminada con DJ" },
    { src: "/img/bocinas-djs/dj-para-fiestas-hora-loca.avif", alt: "DJ animando hora loca" },
    { src: "/img/bocinas-conferencias/renta-de-bocinas-para-conferencias-salon-ejecutivo.avif", alt: "Audio para conferencia ejecutiva" },
    { src: "/img/bocinas-conferencias/renta-sonido-conferencias-auditorio-profesional.avif", alt: "Sonido en auditorio profesional" },
    { src: "/img/bocinas-xv/renta-bocinas-xv-anos-vals-padre-hija-dj-salon.avif", alt: "Vals XV a\xF1os con DJ" },
    { src: "/img/bocinas-fiestas/renta-bocinas-fiestas-eventos-profesionales.avif", alt: "Bocinas para fiesta" },
    { src: "/img/bocinas-fiestas/bocinas-profesionales-fiestas-noche.avif", alt: "Sonido para fiesta nocturna" }
  ] })} </div> </section>  <section class="services-section services-alt"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Equipo de Audio Profesional", "subtitle": "7 servicios de sonido \u2014 cada uno dimensionado a tu tipo de evento.", "paragraph1": "Una ceremonia de boda necesita claridad en los votos, no potencia. Una pista de baile necesita bajo y volumen. Una conferencia necesita que el ponente se entienda en la \xFAltima fila sin feedback. Son tres problemas de audio completamente distintos y se resuelven con equipo diferente.", "paragraph2": "El t\xE9cnico ecualiza al venue: un sal\xF3n con piso de m\xE1rmol y techo alto rebota el sonido diferente que uno alfombrado con plaf\xF3n bajo. Por eso no mandamos bocinas y ya \u2014 siempre va un t\xE9cnico que ajusta en sitio." })} <div class="services-grid"> ${servicios.map((s) => renderTemplate`${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "title": s.title, "image": s.image, "alt": s.alt, "description": s.description, "link": s.link })}`)} </div> </div> </section>  <section class="faq-section"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Preguntas sobre Sonido y DJ", "subtitle": "Lo que nos preguntan por WhatsApp antes de apartar fecha.", "paragraph1": "Si tu duda no est\xE1 aqu\xED, m\xE1ndanos mensaje y te contestamos en minutos.", "paragraph2": "" })} </div> ${renderComponent($$result2, "FaqSection", $$FaqSection, { "items": [
    { question: "\xBFCu\xE1ntas bocinas necesito?", answer: "Para sal\xF3n cerrado hasta 100 personas, un par de JBL PRX315 es suficiente. De 100 a 200, agregamos subwoofer. Arriba de 200 personas o en jard\xEDn abierto, usamos line array. M\xE1ndanos las medidas de tu espacio y el n\xFAmero de invitados y te decimos exacto." },
    { question: "\xBFEl DJ trae su propio equipo?", answer: "S\xED. Llega con consola Pioneer, bocinas, sub y todo montado. Si ya contrataste audio aparte, tambi\xE9n puede trabajar con tu equipo \u2014 solo necesita una entrada auxiliar o l\xEDnea." },
    { question: "\xBFPuedo rentar bocinas sin DJ?", answer: "S\xED. Muchos clientes rentan solo el audio con t\xE9cnico. Conectamos tu celular por Bluetooth o cable, tu laptop, o los micr\xF3fonos que necesites. El t\xE9cnico se encarga de los niveles y de que no haya feedback." },
    { question: "\xBFQu\xE9 pasa con el sonido en jard\xEDn abierto?", answer: "En exterior el sonido se pierde \u2014 no hay paredes que lo contengan. Necesitas m\xE1s potencia que en sal\xF3n cerrado, y subwoofer dedicado porque el bajo es lo primero que desaparece al aire libre. Tambi\xE9n orientamos las bocinas para minimizar la fuga hacia vecinos." },
    { question: "\xBFIncluyen micr\xF3fonos para la ceremonia?", answer: "S\xED. Para bodas usamos 2 micr\xF3fonos inal\xE1mbricos Shure: uno para los votos y otro para el oficiante. Para conferencias podemos incluir hasta 4. Son UHF \u2014 no se interfieren con el WiFi del venue ni con otras se\xF1ales." },
    { question: "\xBFQu\xE9 pasa si no hay electricidad en el venue?", answer: "Llevamos planta de luz. Es com\xFAn en jardines y haciendas. La planta la colocamos alejada para que no se escuche el motor, y cableamos hasta el equipo. Va incluida cuando el venue no tiene instalaci\xF3n el\xE9ctrica suficiente." }
  ] })} </section>  <section class="cta-section"> <div class="container"> <div class="cta-content"> <h2>¿Necesitas audio para tu evento?</h2> <p>Mándanos la fecha, el venue, cuántas personas esperas y si necesitas DJ o solo bocinas. Te cotizamos el mismo día.</p> <div class="cta-buttons"> <a href="/contacto/" class="btn btn-whatsapp btn-lg">Cotiza por WhatsApp</a> <a href="tel:+525530682988" class="btn btn-primary btn-lg">Llámanos — 55 3068 2988</a> </div> </div> </div> </section> ` })}`;
}, "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/pages/servicios/sonido.astro", void 0);

const $$file = "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/pages/servicios/sonido.astro";
const $$url = "/servicios/sonido";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Sonido,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
