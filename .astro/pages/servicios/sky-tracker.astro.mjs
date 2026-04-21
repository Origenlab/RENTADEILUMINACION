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

const $$SkyTracker = createComponent(($$result, $$props, $$slots) => {
  const title = "Renta de Sky Tracker para Eventos Nocturnos CDMX | REDEIL";
  const description = "Sky trackers xen\xF3n 7,000W visibles a 5 km para bodas, inauguraciones y festivales en CDMX. Instalaci\xF3n profesional incluida. Desde $5,500 + IVA.";
  const canonical = "https://rentadeiluminacion.com/servicios/sky-tracker/";
  const schemaMarkup = JSON.stringify([
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Renta de Sky Tracker para Eventos",
      "provider": {
        "@type": "LocalBusiness",
        "name": "REDEIL",
        "url": "https://rentadeiluminacion.com",
        "telephone": "+525530682988",
        "address": { "@type": "PostalAddress", "addressLocality": "Ciudad de M\xE9xico", "addressRegion": "CDMX", "addressCountry": "MX" }
      },
      "description": "Servicio profesional de renta de sky tracker y luces antia\xE9reas para bodas, inauguraciones y eventos nocturnos en CDMX. Haces de luz xen\xF3n visibles a kil\xF3metros de distancia.",
      "areaServed": [
        { "@type": "City", "name": "Ciudad de M\xE9xico" },
        { "@type": "State", "name": "Estado de M\xE9xico" }
      ],
      "serviceType": "Renta de Sky Tracker",
      "priceRange": "$$"
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "\xBFA qu\xE9 distancia se ven los haces de luz del sky tracker?", "acceptedAnswer": { "@type": "Answer", "text": "Nuestros sky trackers xen\xF3n de 7,000W son visibles a 5-7 kil\xF3metros de distancia en noches despejadas. Son las mismas luminarias que usan en estrenos de cine y apertura de centros comerciales." } },
        { "@type": "Question", "name": "\xBFNecesito permiso para usar sky trackers?", "acceptedAnswer": { "@type": "Answer", "text": "Depende de la ubicaci\xF3n. En zonas cercanas a aeropuertos se requiere autorizaci\xF3n de SENEAM. Nosotros tramitamos el permiso si es necesario y verificamos que tu venue sea apto antes del evento." } },
        { "@type": "Question", "name": "\xBFEl sky tracker funciona con lluvia?", "acceptedAnswer": { "@type": "Answer", "text": "Con lluvia ligera s\xED. Nuestros equipos tienen protecci\xF3n IP54. En lluvia fuerte se recomienda cubrir los equipos o pausar la operaci\xF3n temporalmente." } },
        { "@type": "Question", "name": "\xBFCu\xE1nto cuesta la renta de sky tracker?", "acceptedAnswer": { "@type": "Answer", "text": "Un sky tracker individual arranca desde $5,500 + IVA con instalaci\xF3n incluida. Los paquetes de 2 unidades (efecto cruzado) van desde $9,500 + IVA. Cotiza gratis por WhatsApp." } },
        { "@type": "Question", "name": "\xBFSe puede combinar el sky tracker con otros servicios de iluminaci\xF3n?", "acceptedAnswer": { "@type": "Answer", "text": "S\xED \u2014 es lo m\xE1s recomendable. La combinaci\xF3n m\xE1s popular es sky tracker + guirnaldas Edison para bodas al aire libre. Tambi\xE9n funciona perfecto con humo esc\xE9nico y cabezas m\xF3viles. Armamos paquetes con precio especial." } },
        { "@type": "Question", "name": "\xBFCu\xE1nto tiempo puede estar encendido el sky tracker?", "acceptedAnswer": { "@type": "Answer", "text": "Los sky trackers pueden operar 4-6 horas continuas sin problema. Recomendamos encenderlos despu\xE9s del atardecer para m\xE1ximo impacto visual en oscuridad completa." } }
      ]
    }
  ]);
  const serviciosRelacionados = [
    { title: "Cabezas M\xF3viles", image: "/img/cabezas-moviles/renta-cabezas-moviles-boda-beams-blancos-elegante-300w.avif", alt: "Cabezas m\xF3viles LED con beams en boda", description: "Show de luces DMX complementario. Los beams en el suelo + haces al cielo = producci\xF3n completa.", link: "/servicios/cabezas-moviles/" },
    { title: "Iluminaci\xF3n Arquitect\xF3nica", image: "/img/iluminacion-arquitectonica/iluminacion-arquitectonica-arcos-coloniales-luz-violeta-fachada-300w.avif", alt: "Uplighting en arcos coloniales", description: "Uplighting para fachadas y jardines. Mientras el sky tracker marca el cielo, el uplighting transforma el venue.", link: "/servicios/iluminacion-arquitectonica/" },
    { title: "Guirnaldas Edison", image: "/img/guirnaldas/renta-guirnaldas-edison-terraza-recepcion-02-300w.avif", alt: "Guirnaldas Edison para boda", description: "Guirnaldas c\xE1lidas a nivel humano + haces de luz al cielo. La combinaci\xF3n m\xE1s solicitada para bodas nocturnas.", link: "/servicios/guirnaldas/" },
    { title: "City Color", image: "/img/city-color/iluminacion-ceremonia-boda-hacienda-300w.avif", alt: "City color en hacienda", description: "Ca\xF1ones de color en las fachadas + haces al cielo. Producci\xF3n visual de arriba a abajo.", link: "/servicios/city-color/" }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "canonical": canonical, "schemaMarkup": schemaMarkup }, { "breadcrumbs": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "breadcrumbs" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Breadcrumbs", $$Breadcrumbs, { "items": [
    { label: "Inicio", href: "/" },
    { label: "Iluminaci\xF3n", href: "/servicios/iluminacion/" },
    { label: "Sky Tracker" }
  ] })} ` })}`, "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, { "title": "Renta de Sky Tracker y Luces Antia\xE9reas en CDMX", "subtitle": "Haces de luz xen\xF3n de 7,000W visibles a 5 km. Instalaci\xF3n profesional incluida. Desde $5,500 + IVA.", "introParagraph1": "El sky tracker se ve desde kil\xF3metros. Literalmente. Un haz de xen\xF3n de 7,000W cortando el cielo nocturno que marca d\xF3nde est\xE1 tu evento para quien lo vea a la distancia. Hay que ser claros: solo funciona al aire libre y de noche. En salones cerrados no tiene sentido, y de d\xEDa el efecto es invisible. Pero en una boda nocturna en hacienda, en una inauguraci\xF3n o en un festival al aire libre, no hay nada que se le compare. En <strong>REDEIL</strong> operamos sky trackers <strong>Strong</strong> y <strong>Syncrolite</strong> de 4,000W a 7,000W.", "introParagraph2": "Se pueden operar de forma est\xE1tica (haz fijo al cielo) o con movimiento programado: barridos lentos, cruzados entre dos equipos, o sincronizados con la m\xFAsica. Si el venue est\xE1 cerca de un aeropuerto (menos de 10 km), se necesita permiso de SENEAM. Nosotros lo tramitamos. Si el venue no tiene corriente suficiente para los 7,000W, llevamos generador. El servicio incluye transporte, generador si se necesita, operador t\xE9cnico y desmontaje. En noches nubladas el efecto cambia: los haces iluminan las nubes y crean un techo de luz. Tambi\xE9n se ve bien." })} ${renderComponent($$result2, "CtaBar", $$CtaBar, { "headline": "\xBFPara qu\xE9 evento necesitas sky tracker?", "items": [
    { label: "Bodas al Aire Libre", href: "/eventos/bodas/", icon: "iluminacion" },
    { label: "Toda la iluminaci\xF3n", href: "/servicios/iluminacion/", icon: "iluminacion" },
    { label: "Ver paquetes", href: "#paquetes", icon: "iluminacion" },
    { label: "Cotiza Gratis", href: "/contacto/", icon: "cotizar" }
  ] })}  ${maybeRenderHead()}<section class="services-section"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "\xBFC\xF3mo se ve el sky tracker en un evento real?", "subtitle": "Solo funciona de noche, solo al aire libre. Pero cuando funciona, no hay nada igual.", "paragraph1": "El momento en que se encienden, todos los invitados levantan la vista. Los que vienen llegando al venue lo ven desde la carretera. Las fotos y videos capturan algo que ning\xFAn otro servicio da: un haz de luz cortando el cielo que se ve a 5-7 km en noches despejadas.", "paragraph2": "En haciendas con cielo abierto el impacto es m\xE1ximo. En jardines con \xE1rboles altos, hay que posicionar los equipos donde no haya obstrucciones. En noches nubladas, los haces iluminan las nubes y crean un efecto diferente pero igual de bueno." })} ${renderComponent($$result2, "Gallery4x4", $$Gallery4X4, { "images": [
    { src: "/img/sky-tracker/renta-skytracker-boda-hacienda-haz-luz.avif", alt: "Sky tracker proyectando haz de luz desde hacienda en boda nocturna" },
    { src: "/img/sky-tracker/renta-skytracker-cielo-nocturno-potente.avif", alt: "Haz potente de sky tracker cortando el cielo nocturno" },
    { src: "/img/sky-tracker/renta-skytracker-evento-cielo-estrellado.avif", alt: "Sky tracker iluminando cielo estrellado en evento al aire libre" },
    { src: "/img/sky-tracker/renta-skytracker-evento-jardin-guirnaldas.avif", alt: "Sky tracker en evento de jard\xEDn decorado con guirnaldas Edison" },
    { src: "/img/sky-tracker/renta-skytracker-evento-jardin-carpa.avif", alt: "Haces de luz en evento con carpa en jard\xEDn nocturno" },
    { src: "/img/sky-tracker/renta-skytracker-boda-exterior-guirnaldas.avif", alt: "Boda exterior con sky tracker y guirnaldas de fondo" },
    { src: "/img/sky-tracker/renta-skytracker-boda-hacienda-banquete.avif", alt: "Banquete de boda en hacienda con sky tracker iluminando el cielo" },
    { src: "/img/sky-tracker/renta-skytracker-boda-hacienda-noche-cielo.avif", alt: "Hacienda de noche con haz de sky tracker al cielo" },
    { src: "/img/sky-tracker/renta-skytracker-boda-jardin-arco-floral.avif", alt: "Boda en jard\xEDn con arco floral y sky tracker de fondo" },
    { src: "/img/sky-tracker/renta-skytracker-boda-jardin-filtros-color.avif", alt: "Sky tracker con filtros de color en boda de jard\xEDn" },
    { src: "/img/sky-tracker/renta-skytracker-evento-nocturno-haz-potente.avif", alt: "Haz potente de sky tracker en evento nocturno" },
    { src: "/img/sky-tracker/luces-antiaereas-boda-hacienda-colonial.avif", alt: "Luces antia\xE9reas iluminando hacienda colonial para boda" },
    { src: "/img/sky-tracker/luces-antiaereas-espectaculo-cielo-noche.avif", alt: "Espect\xE1culo de luces antia\xE9reas en cielo nocturno" },
    { src: "/img/sky-tracker/luces-antiaereas-gala-nocturna-elegante.avif", alt: "Gala nocturna elegante con luces antia\xE9reas" },
    { src: "/img/sky-tracker/luces-antiaereas-multiple-haz-evento.avif", alt: "M\xFAltiples haces de luz antia\xE9rea en evento masivo" },
    { src: "/img/sky-tracker/sky-tracker-concierto-haces-luz.avif", alt: "Sky trackers en concierto con haces de luz cruzados" }
  ] })} </div> </section>  <section class="services-section services-alt" id="paquetes"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "\xBFCu\xE1nto cuesta rentar sky tracker en CDMX?", "subtitle": "4 opciones seg\xFAn el impacto que quieres lograr. Operador incluido.", "paragraph1": "Cada paquete incluye el equipo, transporte, generador de energ\xEDa (si el venue lo requiere), operador t\xE9cnico durante el evento y desmontaje. El operador controla los movimientos del haz en tiempo real para m\xE1ximo impacto.", "paragraph2": "\xBFTu evento necesita algo diferente? Armamos configuraciones a la medida. Cotiza por WhatsApp y te hacemos una propuesta en menos de 24 horas." })} ${renderComponent($$result2, "PricingCards", $$PricingCards, { "packages": [
    {
      name: "B\xE1sico \u2014 1 Sky Tracker",
      price: "$5,500",
      priceNote: "+ IVA",
      description: "Un haz de luz que marca la ubicaci\xF3n de tu evento. Ideal para bodas en haciendas y jardines.",
      features: [
        { text: "1 sky tracker xen\xF3n 4,000W", included: true },
        { text: "Visible a 3-5 km de distancia", included: true },
        { text: "Operador t\xE9cnico incluido", included: true },
        { text: "Transporte + montaje + desmontaje", included: true },
        { text: "Ideal para: bodas, fiestas privadas", included: true },
        { text: "Generador de energ\xEDa incluido", included: true },
        { text: "Movimiento programado", included: false },
        { text: "Filtros de color", included: false }
      ],
      ctaLabel: "Cotizar 1 sky tracker",
      ctaHref: "/servicios/sky-tracker/paquete-1-sky-tracker/"
    },
    {
      name: "Est\xE1ndar \u2014 2 Sky Trackers",
      price: "$9,500",
      priceNote: "+ IVA",
      badge: "M\xE1s popular",
      highlight: true,
      description: "Efecto cruzado: dos haces que se encuentran en el cielo. El m\xE1s pedido para bodas grandes e inauguraciones.",
      features: [
        { text: "2 sky trackers xen\xF3n 4,000-7,000W", included: true },
        { text: "Visible a 5-7 km de distancia", included: true },
        { text: "Efecto cruzado programable", included: true },
        { text: "Operador t\xE9cnico incluido", included: true },
        { text: "Transporte + montaje + desmontaje", included: true },
        { text: "Generador de energ\xEDa incluido", included: true },
        { text: "Ideal para: bodas grandes, inauguraciones", included: true },
        { text: "Filtros de color", included: false }
      ],
      ctaLabel: "Cotizar 2 sky trackers",
      ctaHref: "/servicios/sky-tracker/paquete-2-sky-trackers/"
    },
    {
      name: "Premium \u2014 4 Sky Trackers",
      price: "$16,000",
      priceNote: "+ IVA",
      description: "Producci\xF3n completa con 4 haces cruzados, filtros de color y movimiento sincronizado.",
      features: [
        { text: "4 sky trackers xen\xF3n 7,000W", included: true },
        { text: "Visible a 7+ km de distancia", included: true },
        { text: "Movimiento sincronizado programado", included: true },
        { text: "Filtros de color intercambiables", included: true },
        { text: "2 operadores t\xE9cnicos", included: true },
        { text: "Generadores de energ\xEDa incluidos", included: true },
        { text: "Ideal para: corporativos, lanzamientos", included: true },
        { text: "Coordinaci\xF3n con otros servicios", included: true }
      ],
      ctaLabel: "Cotizar producci\xF3n premium",
      ctaHref: "/servicios/sky-tracker/paquete-4-sky-trackers/"
    },
    {
      name: "Producci\xF3n \u2014 6+ Sky Trackers",
      price: "$25,000",
      priceNote: "+ IVA",
      description: "Espect\xE1culo a\xE9reo completo para festivales, conciertos y eventos masivos. Coreograf\xEDa de luz programada.",
      features: [
        { text: "6+ sky trackers de alta potencia", included: true },
        { text: "Coreograf\xEDa de luz programada", included: true },
        { text: "Sincronizaci\xF3n con m\xFAsica", included: true },
        { text: "Filtros de color + efectos", included: true },
        { text: "Equipo de operadores", included: true },
        { text: "Generadores y log\xEDstica completa", included: true },
        { text: "Visita previa al venue", included: true },
        { text: "Ideal para: festivales, conciertos, mega eventos", included: true }
      ],
      ctaLabel: "Cotizar producci\xF3n completa",
      ctaHref: "/servicios/sky-tracker/paquete-produccion-sky-tracker/"
    }
  ] })} </div> </section>  <section class="faq-section"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Preguntas frecuentes sobre sky tracker", "subtitle": "Lo que nuestros clientes preguntan antes de contratar.", "paragraph1": "Si tienes otra duda, escr\xEDbenos por WhatsApp y te respondemos en minutos.", "paragraph2": "Cada venue es diferente \u2014 verificamos que tu espacio sea apto antes de confirmar la renta." })} </div> ${renderComponent($$result2, "FaqSection", $$FaqSection, { "items": [
    { question: "\xBFA qu\xE9 distancia se ven los haces de luz?", answer: "Nuestros sky trackers xen\xF3n de 7,000W son visibles a 5-7 kil\xF3metros en noches despejadas. Incluso con contaminaci\xF3n lum\xEDnica de la CDMX, el efecto es impresionante. Son las mismas luminarias que se usan en estrenos de pel\xEDculas." },
    { question: "\xBFNecesito permiso especial para usar sky trackers?", answer: "Depende de la ubicaci\xF3n. En zonas a menos de 10 km de un aeropuerto se requiere autorizaci\xF3n de SENEAM (Servicios a la Navegaci\xF3n en el Espacio A\xE9reo Mexicano). Nosotros verificamos tu venue y tramitamos el permiso si es necesario \u2014 sin costo adicional." },
    { question: "\xBFFunciona si llueve?", answer: "Con lluvia ligera s\xED \u2014 nuestros equipos tienen protecci\xF3n IP54. En lluvia fuerte se cubre el equipo temporalmente. En noches nubladas, el efecto cambia: los haces iluminan las nubes y crean un efecto de techo de luz muy espectacular." },
    { question: "\xBFNecesita mucho espacio para la instalaci\xF3n?", answer: "Cada sky tracker ocupa aproximadamente 1\xD71 metro en el piso y necesita acceso a cielo abierto. En haciendas, jardines y terrazas sin techo el efecto es m\xE1ximo. Si hay techado parcial, ubicamos los equipos fuera de la zona cubierta." },
    { question: "\xBFSe puede combinar con otros servicios de iluminaci\xF3n?", answer: "Absolutamente \u2014 es lo m\xE1s recomendable. La combinaci\xF3n m\xE1s popular es sky tracker + guirnaldas Edison para bodas al aire libre. Tambi\xE9n se ven espectaculares con humo esc\xE9nico y cabezas m\xF3viles. Armamos paquetes combinados con precio especial." },
    { question: "\xBFCu\xE1nto tiempo puede estar encendido?", answer: "Los sky trackers pueden operar 4-6 horas continuas sin problema. Para eventos m\xE1s largos, rotamos equipos. Recomendamos encenderlos despu\xE9s del atardecer \u2014 el efecto m\xE1s impactante es en oscuridad completa." }
  ] })} </section>  <section class="services-section services-alt"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "\xBFQu\xE9 otros servicios combinan con sky tracker?", "subtitle": "Haces al cielo + guirnaldas a nivel humano. De arriba a abajo.", "paragraph1": "La combinaci\xF3n m\xE1s pedida para bodas en hacienda: sky tracker marcando el cielo + guirnaldas Edison sobre las mesas + uplighting \xE1mbar en las columnas. Cubres tres niveles de iluminaci\xF3n con un solo proveedor y un solo traslado.", "paragraph2": "Precio especial cuando combinas sky tracker con otros servicios de iluminaci\xF3n." })} <div class="services-grid"> ${serviciosRelacionados.map((s) => renderTemplate`${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "title": s.title, "image": s.image, "alt": s.alt, "description": s.description, "link": s.link })}`)} </div> </div> </section>  <section class="cta-section"> <div class="container"> <div class="cta-content"> <h2>¿Listo para que tu evento se vea a kilómetros?</h2> <p>Mándanos la ubicación de tu venue por WhatsApp. Verificamos que sea apto para sky tracker y te cotizamos en minutos.</p> <div class="cta-buttons"> <a href="/contacto/" class="btn btn-whatsapp btn-lg">Cotiza por WhatsApp</a> <a href="tel:+525530682988" class="btn btn-primary btn-lg">Llámanos — 55 3068 2988</a> </div> </div> </div> </section> ` })}`;
}, "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/pages/servicios/sky-tracker.astro", void 0);

const $$file = "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/pages/servicios/sky-tracker.astro";
const $$url = "/servicios/sky-tracker";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$SkyTracker,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
