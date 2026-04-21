import { c as createComponent, b as renderComponent, r as renderTemplate, m as maybeRenderHead, F as Fragment } from '../../chunks/astro/server_D8pMnQBn.mjs';
import 'piccolore';
import { $ as $$BaseLayout, a as $$Breadcrumbs } from '../../chunks/Breadcrumbs_BkFbHGbf.mjs';
import { $ as $$Hero } from '../../chunks/Hero_3Is3fruG.mjs';
import { $ as $$CtaBar } from '../../chunks/CtaBar_CdFZlCZU.mjs';
import { $ as $$SectionHeader } from '../../chunks/SectionHeader_mLKzHzNX.mjs';
import { $ as $$ServiceCard } from '../../chunks/ServiceCard_Bli7ALj4.mjs';
import { $ as $$Gallery4X4 } from '../../chunks/Gallery4x4_Bx6Jz45E.mjs';
import { $ as $$FeatureGrid } from '../../chunks/FeatureGrid_BlZakCJc.mjs';
import { $ as $$FaqSection } from '../../chunks/FaqSection_CzcP3CIi.mjs';
export { renderers } from '../../renderers.mjs';

const $$Dj = createComponent(($$result, $$props, $$slots) => {
  const title = "\xBFQu\xE9 tipo de DJ necesito? Gu\xEDa para eventos CDMX | REDEIL";
  const description = "DJ para bodas vs fiestas vs corporativos: c\xF3mo elegir el correcto. G\xE9neros, equipo, precios y qu\xE9 preguntar antes de contratar en CDMX.";
  const canonical = "https://rentadeiluminacion.com/servicios/dj/";
  const schemaMarkup = JSON.stringify([
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Gu\xEDa para Elegir DJ para Eventos en CDMX",
      "provider": {
        "@type": "LocalBusiness",
        "name": "REDEIL",
        "url": "https://rentadeiluminacion.com",
        "telephone": "+525530682988",
        "address": { "@type": "PostalAddress", "addressLocality": "Ciudad de M\xE9xico", "addressRegion": "CDMX", "addressCountry": "MX" }
      },
      "description": "Gu\xEDa completa para elegir el tipo de DJ correcto para tu evento en CDMX \u2014 bodas, fiestas privadas, corporativos y festivales. Comparativa de perfiles, g\xE9neros musicales y equipo necesario.",
      "areaServed": [
        { "@type": "City", "name": "Ciudad de M\xE9xico" },
        { "@type": "State", "name": "Estado de M\xE9xico" }
      ],
      "serviceType": "DJ para Eventos",
      "priceRange": "$$"
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "\xBFCu\xE1nto cuesta un DJ para un evento en CDMX?", "acceptedAnswer": { "@type": "Answer", "text": "El precio var\xEDa seg\xFAn el tipo de evento y la duraci\xF3n. Un DJ para fiesta privada de 4 horas empieza desde $4,500 + IVA. Un DJ para bodas con protocolo completo (8+ horas) va desde $8,000 + IVA. Un DJ para eventos corporativos con equipo premium empieza desde $12,000 + IVA. Todos nuestros paquetes incluyen equipo de sonido profesional." } },
        { "@type": "Question", "name": "\xBFC\xF3mo s\xE9 qu\xE9 tipo de DJ necesito?", "acceptedAnswer": { "@type": "Answer", "text": "Depende de tu evento. Para bodas necesitas un DJ que domine el protocolo (vals, ramo, liga, hora loca) y sepa leer a un p\xFAblico multigeneracional. Para fiestas privadas, un DJ que mantenga la pista llena con m\xFAsica bailable. Para corporativos, un DJ discreto que maneje ambiente lounge y momentos de energ\xEDa. Para festivales, un DJ con experiencia en g\xE9neros electr\xF3nicos y sets largos." } },
        { "@type": "Question", "name": "\xBFEl DJ trae su propio equipo de sonido?", "acceptedAnswer": { "@type": "Answer", "text": "S\xED. Todos nuestros DJs llegan con equipo completo: consola profesional Pioneer, bocinas amplificadas QSC o JBL, subwoofer para graves, micr\xF3fono inal\xE1mbrico para animaci\xF3n y cabina iluminada. Para eventos grandes, agregamos bocinas adicionales, monitores y line array." } }
      ]
    }
  ]);
  const serviciosRelacionados = [
    { title: "DJ + Sonido Profesional", image: "/img/bocinas-djs/dj-para-eventos-cdmx-cabina-profesional.avif", alt: "DJ con cabina profesional en evento CDMX", description: "\xBFYa sabes qu\xE9 DJ necesitas? Ve directo a nuestros paquetes de DJ con precios, equipo incluido y opciones de personalizaci\xF3n.", link: "/servicios/bocinas-djs/" },
    { title: "Sonido para Bodas", image: "/img/bocinas-djs/dj-para-bodas-mezclando-musica-evento.avif", alt: "DJ mezclando m\xFAsica en boda", description: "DJ especializado en bodas con protocolo completo \u2014 vals, brindis, ramo, liga y hora loca. Repertorio multigeneracional.", link: "/servicios/bocinas-bodas/" },
    { title: "Sonido para XV A\xF1os", image: "/img/bocinas-xv/renta-bocinas-xv-anos-baile-chambelanes-dorados-jbl.avif", alt: "DJ en fiesta de XV a\xF1os con chambelanes", description: "DJ que domina el protocolo de XV a\xF1os \u2014 entrada, vals, coreograf\xEDa, cambio de zapato y fiesta libre.", link: "/servicios/bocinas-xv/" },
    { title: "Sonido para Fiestas", image: "/img/bocinas-djs/dj-para-fiestas-hora-loca.avif", alt: "DJ animando hora loca en fiesta", description: "DJ para cumplea\xF1os, graduaciones, despedidas y fiestas tem\xE1ticas. Pista llena toda la noche.", link: "/servicios/bocinas-fiestas/" }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "canonical": canonical, "schemaMarkup": schemaMarkup }, { "breadcrumbs": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "breadcrumbs" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Breadcrumbs", $$Breadcrumbs, { "items": [
    { label: "Inicio", href: "/" },
    { label: "Servicios", href: "/servicios/" },
    { label: "\xBFQu\xE9 tipo de DJ necesito?" }
  ] })} ` })}`, "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, { "title": "\xBFQu\xE9 Tipo de DJ Necesitas para tu Evento en CDMX?", "subtitle": "DJ para bodas, XV a\xF1os, fiestas privadas o corporativos \u2014 cada evento necesita un perfil diferente. Te explicamos cu\xE1l es el tuyo.", "introParagraph1": "No es lo mismo un DJ para bodas que un DJ para una fiesta de cumplea\xF1os o un evento corporativo. El DJ de bodas necesita dominar un protocolo de 15+ momentos (vals, brindis, ramo, liga, hora loca) y saber leer a un p\xFAblico que va desde abuelos hasta adolescentes. El DJ de fiestas necesita mantener la pista llena con sets de alta energ\xEDa. Y el DJ corporativo necesita discreci\xF3n, timing perfecto y la capacidad de pasar de un ambiente lounge a un momento de celebraci\xF3n sin que nadie note la transici\xF3n.", "introParagraph2": 'En <strong>REDEIL</strong> tenemos DJs especializados por tipo de evento \u2014 no mandamos al mismo DJ a una boda que a un festival. Esta gu\xEDa te ayuda a entender <strong>qu\xE9 perfil de DJ necesitas</strong>, qu\xE9 equipo debe traer, qu\xE9 g\xE9neros musicales debe dominar y qu\xE9 preguntas hacerle antes de contratarlo. Si al final de la gu\xEDa ya sabes qu\xE9 necesitas, ve directo a nuestros <a href="/servicios/bocinas-djs/" style="color: #ff5722; font-weight: 600;">paquetes de DJ con precios</a>.' })} ${renderComponent($$result2, "CtaBar", $$CtaBar, { "headline": "\xBFPara qu\xE9 tipo de evento buscas DJ?", "items": [
    { label: "DJ para Bodas", href: "/servicios/bocinas-bodas/", icon: "sonido" },
    { label: "DJ para XV A\xF1os", href: "/servicios/bocinas-xv/", icon: "sonido" },
    { label: "Ver precios DJ", href: "/servicios/bocinas-djs/", icon: "cotizar" },
    { label: "Cotiza Gratis", href: "/contacto/", icon: "cotizar" }
  ] })}  ${maybeRenderHead()}<section class="services-section"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "DJs profesionales en eventos reales en CDMX", "subtitle": "Bodas, fiestas, corporativos y festivales \u2014 cada evento con el DJ correcto.", "paragraph1": "Un DJ leyendo al p\xFAblico en una boda de hacienda. Otro manteniendo la energ\xEDa en una fiesta de cumplea\xF1os de rooftop. Otro manejando el timing perfecto en un lanzamiento corporativo. Cada contexto exige un perfil diferente \u2014 la experiencia, los g\xE9neros y hasta el equipo cambian.", "paragraph2": "Estas son fotos reales de nuestros DJs operando en diferentes tipos de eventos en la Ciudad de M\xE9xico." })} ${renderComponent($$result2, "Gallery4x4", $$Gallery4X4, { "images": [
    { src: "/img/bocinas-djs/dj-para-bodas-mezclando-musica-evento.avif", alt: "DJ mezclando m\xFAsica en recepci\xF3n de boda" },
    { src: "/img/bocinas-djs/dj-para-eventos-cdmx-cabina-profesional.avif", alt: "DJ con cabina profesional en evento CDMX" },
    { src: "/img/bocinas-djs/dj-para-bodas-vals-primer-baile.avif", alt: "DJ acompa\xF1ando el vals y primer baile en boda" },
    { src: "/img/bocinas-djs/dj-para-eventos-fiesta-empresa.avif", alt: "DJ en fiesta de empresa corporativa" },
    { src: "/img/bocinas-djs/dj-para-eventos-xv-anos-vals.avif", alt: "DJ en vals de XV a\xF1os" },
    { src: "/img/bocinas-djs/dj-para-eventos-terraza-rooftop.avif", alt: "DJ en terraza rooftop de evento" },
    { src: "/img/bocinas-djs/dj-para-bodas-recepcion-baile.avif", alt: "DJ en recepci\xF3n de boda con pista de baile" },
    { src: "/img/bocinas-djs/renta-dj-para-eventos-corporativos.avif", alt: "DJ en evento corporativo profesional" },
    { src: "/img/bocinas-djs/dj-para-eventos-musica-latina.avif", alt: "DJ tocando m\xFAsica latina en evento" },
    { src: "/img/bocinas-djs/dj-para-fiestas-hora-loca.avif", alt: "DJ animando hora loca en fiesta" },
    { src: "/img/bocinas-djs/dj-para-eventos-boda-hacienda.avif", alt: "DJ en boda de hacienda" },
    { src: "/img/bocinas-djs/dj-profesional-consola-pioneer-cdj.avif", alt: "DJ profesional con consola Pioneer CDJ" },
    { src: "/img/bocinas-djs/dj-para-eventos-salon-banquetes.avif", alt: "DJ en sal\xF3n de banquetes para evento" },
    { src: "/img/bocinas-djs/dj-para-fiestas-graduacion-universitaria.avif", alt: "DJ en fiesta de graduaci\xF3n universitaria" },
    { src: "/img/bocinas-djs/dj-para-eventos-musica-electronica.avif", alt: "DJ tocando m\xFAsica electr\xF3nica en festival" },
    { src: "/img/bocinas-djs/dj-para-eventos-ambiente-lounge.avif", alt: "DJ en ambiente lounge de evento corporativo" }
  ] })} </div> </section>  <section class="services-section services-alt" id="tipos-dj"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Los 4 Tipos de DJ Seg\xFAn tu Evento", "subtitle": "Cada evento necesita un perfil diferente. Esta es la gu\xEDa para elegir bien.", "paragraph1": "El error m\xE1s com\xFAn al contratar DJ es pensar que todos hacen lo mismo. Un DJ que es incre\xEDble en fiestas de cumplea\xF1os puede ser un desastre en una boda \u2014 porque no domina el protocolo, no sabe leer a un p\xFAblico multigeneracional o no tiene la delicadeza para los momentos emotivos.", "paragraph2": "Aqu\xED te explicamos qu\xE9 buscar seg\xFAn tu tipo de evento para que contrates al DJ correcto desde el primer intento." })} ${renderComponent($$result2, "FeatureGrid", $$FeatureGrid, { "columns": 2, "features": [
    { title: "DJ para Bodas", description: "Domina el protocolo completo: vals, brindis, ramo, liga, hora loca. Lee a un p\xFAblico multigeneracional (abuelos + adolescentes). Sabe cu\xE1ndo subir la energ\xEDa y cu\xE1ndo crear momentos \xEDntimos. Coordina con MC, fot\xF3grafo y wedding planner. Repertorio: rom\xE1ntico, pop, regional mexicano, cumbia, electr\xF3nica suave." },
    { title: "DJ para Fiestas Privadas", description: "Energ\xEDa pura. Mantiene la pista llena desde el primer momento hasta que se acaba la fiesta. Especialista en cumplea\xF1os, graduaciones, despedidas y celebraciones. No necesita protocolo \u2014 necesita feeling para leer la pista y ajustar el set en tiempo real. Repertorio: reggaet\xF3n, pop, cumbia, hip-hop, electr\xF3nica." },
    { title: "DJ para Corporativos", description: "Discreto y profesional. Maneja ambiente lounge durante cena y networking, sube la energ\xEDa gradualmente para momentos de celebraci\xF3n. Timing perfecto para premiaciones, discursos y brindis. Equipo premium y cabina elegante. Repertorio: lounge, jazz moderno, pop internacional, m\xFAsica sin letra para discursos." },
    { title: "DJ para Festivales y Eventos Masivos", description: "Experiencia en sets largos (4-8 horas) con progresi\xF3n musical. Domina g\xE9neros electr\xF3nicos: house, techno, EDM, trance. Equipo de alto poder (line array, subwoofers m\xFAltiples). Sabe manejar multitudes grandes y crear build-ups y drops que hacen explotar al p\xFAblico. Producci\xF3n visual sincronizada." }
  ] })} </div> </section>  <section class="services-section"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "\xBFC\xF3mo Elegir al DJ Correcto?", "subtitle": "7 preguntas que debes hacerle antes de contratarlo.", "paragraph1": "Contratar un DJ sin hacer estas preguntas es como contratar un fot\xF3grafo sin ver su portafolio. La diferencia entre un DJ que llena la pista y uno que la vac\xEDa casi siempre se reduce a la experiencia en tu tipo de evento.", "paragraph2": "Hazle estas preguntas a cualquier DJ que est\xE9s considerando \u2014 las respuestas te dir\xE1n si es el correcto para tu evento." })} ${renderComponent($$result2, "FeatureGrid", $$FeatureGrid, { "columns": 2, "features": [
    { title: "\xBFCu\xE1ntos eventos como el m\xEDo has hecho?", description: "Un DJ con 50+ bodas sabe exactamente cu\xE1ndo poner el vals y cu\xE1ndo soltar la cumbia. Un DJ que solo ha hecho fiestas privadas puede no dominar el protocolo de boda. Pide referencias espec\xEDficas de tu tipo de evento." },
    { title: "\xBFQu\xE9 equipo traes incluido?", description: "El equipo m\xEDnimo: consola profesional, 2 bocinas amplificadas, subwoofer, micr\xF3fono inal\xE1mbrico y cabina. Para 200+ personas necesitas m\xE1s potencia. Pregunta marcas \u2014 Pioneer, QSC y JBL son el est\xE1ndar profesional." },
    { title: "\xBFTe coordinas con el MC y el fot\xF3grafo?", description: "Un DJ profesional para bodas y XV a\xF1os llega temprano para coordinarse con el maestro de ceremonias y el fot\xF3grafo. Los tiempos de cada momento del protocolo se acuerdan antes de que lleguen los invitados." },
    { title: "\xBFQu\xE9 pasa si falla el equipo?", description: "Pregunta si tiene equipo de respaldo en el venue o en un veh\xEDculo cercano. Un DJ profesional siempre lleva cables, consola y bocina de respaldo. La fiesta no puede detenerse por una falla t\xE9cnica." },
    { title: "\xBFPuedo elegir la lista de canciones?", description: "El DJ debe aceptar tu playlist de must-play y tu lista de canciones prohibidas. Pero tambi\xE9n debe tener libertad para leer la pista y ajustar. Los mejores DJs mezclan tus peticiones con su experiencia leyendo al p\xFAblico." },
    { title: "\xBFCu\xE1ntas horas incluye el servicio?", description: "Confirma horas exactas y costo por hora extra. La mayor\xEDa de los paquetes incluyen 5-8 horas. Para bodas, calcula desde la ceremonia civil o coctel hasta que se apaga la m\xFAsica \u2014 suelen ser 8-10 horas." },
    { title: "\xBFIncluyes iluminaci\xF3n o solo sonido?", description: "Algunos DJs incluyen luces b\xE1sicas en su cabina. Para iluminaci\xF3n profesional (cabezas m\xF3viles, seguidor, humo bajo) necesitas un servicio de iluminaci\xF3n aparte. En REDEIL ofrecemos paquetes combinados de DJ + iluminaci\xF3n." }
  ] })} </div> </section>  <section class="faq-section"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Preguntas Frecuentes sobre DJs para Eventos", "subtitle": "Lo que todo el mundo quiere saber antes de contratar.", "paragraph1": "Si tienes otra duda, escr\xEDbenos por WhatsApp y te respondemos en minutos.", "paragraph2": "Te asesoramos gratis sobre qu\xE9 tipo de DJ necesitas seg\xFAn tu evento, venue y presupuesto." })} </div> ${renderComponent($$result2, "FaqSection", $$FaqSection, { "items": [
    { question: "\xBFCu\xE1nto cuesta un DJ para un evento en CDMX?", answer: "El precio var\xEDa seg\xFAn el tipo de evento y la duraci\xF3n. Un DJ para fiesta privada de 4 horas empieza desde $4,500 + IVA. Un DJ para bodas con protocolo completo (8+ horas) va desde $8,000 + IVA. Un DJ para eventos corporativos con equipo premium empieza desde $12,000 + IVA. Todos nuestros paquetes incluyen equipo de sonido profesional, traslado, montaje y prueba de sonido." },
    { question: "\xBFC\xF3mo s\xE9 qu\xE9 tipo de DJ necesito?", answer: "Depende de tu evento. Para bodas necesitas un DJ que domine el protocolo (vals, ramo, liga, hora loca) y sepa leer a un p\xFAblico multigeneracional. Para fiestas privadas, un DJ que mantenga la pista llena con m\xFAsica bailable. Para corporativos, un DJ discreto que maneje ambiente lounge y momentos de energ\xEDa. Para festivales, un DJ con experiencia en g\xE9neros electr\xF3nicos y sets largos." },
    { question: "\xBFEl DJ trae su propio equipo de sonido?", answer: "S\xED. Todos nuestros DJs llegan con equipo completo: consola profesional Pioneer, bocinas amplificadas QSC o JBL, subwoofer para graves, micr\xF3fono inal\xE1mbrico para animaci\xF3n y cabina iluminada. Para eventos grandes, agregamos bocinas adicionales, monitores y line array seg\xFAn el tama\xF1o del venue." },
    { question: "\xBFPuedo ver al DJ antes de contratarlo?", answer: "S\xED. Te compartimos videos de eventos recientes del DJ que mejor se ajuste a tu tipo de evento. Tambi\xE9n podemos agendar una videollamada para que conozcas al DJ, platiques sobre tu evento y acuerden el estilo musical antes del d\xEDa." },
    { question: "\xBFEl DJ tambi\xE9n anima el evento?", answer: "Depende de lo que necesites. Nuestros DJs para bodas y XV a\xF1os incluyen animaci\xF3n del protocolo \u2014 anuncian el vals, el brindis, el ramo, etc. Para fiestas privadas, el DJ puede animar o solo mezclar m\xFAsica seg\xFAn prefieras. Para corporativos, recomendamos un MC profesional separado y el DJ solo en m\xFAsica." },
    { question: "\xBFQu\xE9 pasa si necesito cancelar o cambiar la fecha?", answer: "Cambios de fecha se aceptan sin costo con 15+ d\xEDas de anticipaci\xF3n, sujeto a disponibilidad. Cancelaciones con m\xE1s de 30 d\xEDas de anticipaci\xF3n tienen reembolso del 80% del anticipo. Con menos de 15 d\xEDas, el anticipo no es reembolsable. Todo queda especificado en el contrato de servicio." }
  ] })} </section>  <section class="services-section services-alt"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "\xBFYa sabes qu\xE9 DJ necesitas? Ve los precios", "subtitle": "Paquetes de DJ con equipo incluido para cada tipo de evento.", "paragraph1": "Si ya identificaste qu\xE9 perfil de DJ necesitas, el siguiente paso es ver los paquetes con precios espec\xEDficos. Cada paquete incluye DJ, equipo de sonido profesional, traslado, montaje y prueba de sonido.", "paragraph2": "Tambi\xE9n puedes cotizar directamente por WhatsApp \u2014 te respondemos en minutos." })} <div class="services-grid"> ${serviciosRelacionados.map((s) => renderTemplate`${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "title": s.title, "image": s.image, "alt": s.alt, "description": s.description, "link": s.link })}`)} </div> </div> </section>  <section class="cta-section"> <div class="container"> <div class="cta-content"> <h2>¿No estás seguro qué DJ necesitas? Te asesoramos gratis</h2> <p>Cuéntanos sobre tu evento — tipo, fecha, venue y número de personas — y te recomendamos el perfil de DJ ideal con precio incluido.</p> <div class="cta-buttons"> <a href="/contacto/" class="btn btn-whatsapp btn-lg">Asesórate por WhatsApp</a> <a href="tel:+525530682988" class="btn btn-primary btn-lg">Llámanos — 55 3068 2988</a> </div> </div> </div> </section> ` })}`;
}, "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/pages/servicios/dj.astro", void 0);

const $$file = "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/pages/servicios/dj.astro";
const $$url = "/servicios/dj";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Dj,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
