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

const $$CascadasLed = createComponent(($$result, $$props, $$slots) => {
  const title = "Renta de Cascadas LED para Bodas y Eventos CDMX | REDEIL";
  const description = "Cortinas de luces LED para mesa de novios, arcos de ceremonia y fondos fotogr\xE1ficos. Efecto cascada brillante. Instalaci\xF3n incluida. Desde $3,000 + IVA.";
  const canonical = "https://rentadeiluminacion.com/servicios/cascadas-led/";
  const schemaMarkup = JSON.stringify([
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Renta de Cascadas LED para Bodas y Eventos",
      "provider": {
        "@type": "LocalBusiness",
        "name": "REDEIL",
        "url": "https://rentadeiluminacion.com",
        "telephone": "+525530682988",
        "address": { "@type": "PostalAddress", "addressLocality": "Ciudad de M\xE9xico", "addressRegion": "CDMX", "addressCountry": "MX" }
      },
      "description": "Servicio profesional de renta de cascadas LED y cortinas de luces para mesa de novios, backdrops y decoraci\xF3n de bodas en CDMX y Estado de M\xE9xico.",
      "areaServed": [
        { "@type": "City", "name": "Ciudad de M\xE9xico" },
        { "@type": "State", "name": "Estado de M\xE9xico" }
      ],
      "serviceType": "Renta de Cascadas LED",
      "priceRange": "$$"
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "\xBFQu\xE9 tama\xF1o tienen las cortinas LED?", "acceptedAnswer": { "@type": "Answer", "text": "Cada cortina mide 3\xD73 metros (ancho \xD7 alto). Se pueden unir varias para crear backdrops m\xE1s amplios. Para una mesa de novios est\xE1ndar, una cortina es suficiente. Para un backdrop completo, recomendamos 2-3 cortinas." } },
        { "@type": "Question", "name": "\xBFLas cascadas LED se pueden usar en exteriores?", "acceptedAnswer": { "@type": "Answer", "text": "S\xED. Nuestras cortinas LED tienen protecci\xF3n para uso semi-exterior (bajo techo o carpa). Para uso a la intemperie directa, las protegemos con estructuras adicionales. La mayor\xEDa de los montajes son en salones y carpas." } },
        { "@type": "Question", "name": "\xBFQu\xE9 colores est\xE1n disponibles?", "acceptedAnswer": { "@type": "Answer", "text": "Ofrecemos cascadas en blanco c\xE1lido (la m\xE1s popular para bodas), blanco fr\xEDo, multicolor y con efecto twinkle (parpadeo estrellado). Las versiones DMX permiten cambiar de color durante el evento." } },
        { "@type": "Question", "name": "\xBFLa instalaci\xF3n da\xF1a las paredes?", "acceptedAnswer": { "@type": "Answer", "text": "No. Montamos las cortinas en estructuras de truss port\xE1tiles independientes de las paredes del sal\xF3n. No se perfora, pega ni da\xF1a ninguna superficie del venue." } },
        { "@type": "Question", "name": "\xBFCu\xE1nto tiempo toma la instalaci\xF3n de las cascadas LED?", "acceptedAnswer": { "@type": "Answer", "text": "El montaje de 1-2 cortinas toma aproximadamente 1 hora. Para 4+ cortinas, entre 2-3 horas. Llegamos con tiempo suficiente para que todo est\xE9 listo y probado antes de tu evento." } },
        { "@type": "Question", "name": "\xBFSe pueden combinar con otros servicios de iluminaci\xF3n?", "acceptedAnswer": { "@type": "Answer", "text": "S\xED, y es lo m\xE1s recomendable para bodas. La combinaci\xF3n m\xE1s popular: cascadas LED detr\xE1s de la mesa de novios + guirnaldas Edison en el techo + seguidor para el vals. Armamos un paquete con precio especial." } }
      ]
    }
  ]);
  const serviciosRelacionados = [
    { title: "Guirnaldas Edison", image: "/img/guirnaldas/renta-guirnaldas-edison-terraza-recepcion-02-300w.avif", alt: "Guirnaldas Edison en terraza de boda", description: "Cascadas LED detr\xE1s de la mesa + guirnaldas c\xE1lidas en el techo. La combinaci\xF3n cl\xE1sica para bodas.", link: "/servicios/guirnaldas/" },
    { title: "Seguidor", image: "/img/seguidor/renta-luz-seguidor-boda-primer-baile-hmi-1200w-300w.avif", alt: "Seguidor de luz en vals", description: "Las cascadas brillantes de fondo + spotlight siguiendo a los novios. El momento m\xE1s fotografiado de la boda.", link: "/servicios/seguidor/" },
    { title: "Gobos", image: "/img/gobos/renta-gobo-monograma-pista-baile-300w.avif", alt: "Gobo con monograma en pista", description: "Backdrop de cascadas LED + los nombres proyectados en la pista. Personalizaci\xF3n total del evento.", link: "/servicios/gobos/" },
    { title: "Iluminaci\xF3n Arquitect\xF3nica", image: "/img/iluminacion-arquitectonica/iluminacion-arquitectonica-arcos-coloniales-luz-violeta-fachada-300w.avif", alt: "Uplighting en arcos coloniales", description: "Cascadas dentro + uplighting en las columnas afuera. Iluminaci\xF3n completa del venue.", link: "/servicios/iluminacion-arquitectonica/" }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "canonical": canonical, "schemaMarkup": schemaMarkup }, { "breadcrumbs": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "breadcrumbs" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Breadcrumbs", $$Breadcrumbs, { "items": [
    { label: "Inicio", href: "/" },
    { label: "Iluminaci\xF3n", href: "/servicios/iluminacion/" },
    { label: "Cascadas LED" }
  ] })} ` })}`, "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, { "title": "Renta de Cascadas LED para Bodas y Eventos en CDMX", "subtitle": "Cortinas de luces brillantes para mesa de novios, backdrops y arcos de ceremonia. Instalaci\xF3n profesional incluida. Desde $3,000 + IVA.", "introParagraph1": "Las cascadas LED hacen una cosa muy concreta: convierten la pared detr\xE1s de la mesa de novios en un fondo fotogr\xE1fico. Cada foto tomada con las cortinas encendidas atr\xE1s sale con puntos de luz brillantes que le dan profundidad a la imagen. Los fot\xF3grafos de bodas en CDMX ya las piden por nombre. En <strong>REDEIL</strong> montamos cortinas de 3\xD73 metros cada una \u2014 se unen para crear backdrops de 6, 9 o 12 metros de ancho seg\xFAn el sal\xF3n.", "introParagraph2": "Las cortinas van montadas en estructura de truss port\xE1til, no en la pared del venue. No se perfora ni se pega nada. Lo que la gente no siempre pregunta: la cascada LED solo se ve bien de noche o con las luces del sal\xF3n bajas. Con el sal\xF3n iluminado a tope, las cortinas se pierden. Por eso coordinamos con el venue y el DJ para que las luces generales bajen cuando la mesa de novios es el centro de atenci\xF3n. Efecto twinkle (parpadeo estrellado), cascada continua o luz fija en blanco c\xE1lido, fr\xEDo o multicolor." })} ${renderComponent($$result2, "CtaBar", $$CtaBar, { "headline": "\xBFD\xF3nde vas a colocar las cascadas LED?", "items": [
    { label: "Mesa de Novios", href: "#paquetes", icon: "iluminacion" },
    { label: "Toda la iluminaci\xF3n", href: "/servicios/iluminacion/", icon: "iluminacion" },
    { label: "Bodas", href: "/eventos/bodas/", icon: "iluminacion" },
    { label: "Cotiza Gratis", href: "/contacto/", icon: "cotizar" }
  ] })}  ${maybeRenderHead()}<section class="services-section"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "\xBFC\xF3mo se ven las cascadas LED en un evento real?", "subtitle": "Backdrops, arcos de ceremonia y mesas de novios iluminadas.", "paragraph1": "Una cortina de 3\xD73 cubre la mesa de novios est\xE1ndar. Dos cortinas (6 metros) cubren la pared completa de la mayor\xEDa de los salones de CDMX. Para haciendas con paredes largas, 3-4 cortinas. El truss port\xE1til se adapta a techos de 2.5m hasta 5m de altura.", "paragraph2": "El efecto twinkle \u2014 parpadeo suave que simula estrellas \u2014 es el m\xE1s pedido para bodas. La luz fija es m\xE1s para fondos de foto booth o sesiones de retrato. El multicolor con control DMX se usa en XV a\xF1os donde los colores cambian seg\xFAn el momento." })} ${renderComponent($$result2, "Gallery4x4", $$Gallery4X4, { "images": [
    { src: "/img/cascadas-led/cascadas-led-backdrop-boda-espectacular.avif", alt: "Backdrop espectacular de cascadas LED en boda" },
    { src: "/img/cascadas-led/cascadas-led-arco-ceremonia-luces-moradas.avif", alt: "Arco de ceremonia con cascadas LED moradas" },
    { src: "/img/cascadas-led/cascadas-led-cortina-luz-calida-boda.avif", alt: "Cortina de luz c\xE1lida para boda rom\xE1ntica" },
    { src: "/img/cascadas-led/cascadas-led-cortina-luz-mesa-novios.avif", alt: "Cascada LED detr\xE1s de mesa de novios" },
    { src: "/img/cascadas-led/cascadas-led-decoracion-mesa-novios-flores.avif", alt: "Decoraci\xF3n de mesa de novios con cascadas LED y flores" },
    { src: "/img/cascadas-led/cascadas-led-backdrop-mesa-principal-boda.avif", alt: "Backdrop de mesa principal con cascadas LED brillantes" },
    { src: "/img/cascadas-led/cascadas-led-carpa-exterior-iluminacion.avif", alt: "Cascadas LED en carpa exterior para evento" },
    { src: "/img/cascadas-led/cascadas-led-iluminacion-completa-boda.avif", alt: "Iluminaci\xF3n completa de boda con cascadas LED" },
    { src: "/img/cascadas-led/renta-cascadas-led-fondo-fotografico-novios.avif", alt: "Fondo fotogr\xE1fico de cascadas LED para novios" },
    { src: "/img/cascadas-led/renta-cascadas-led-mesa-novios-romantico.avif", alt: "Mesa de novios con cascadas LED rom\xE1nticas" },
    { src: "/img/cascadas-led/luces-para-bodas-cascada-efecto-estrellado.avif", alt: "Cascada LED con efecto estrellado twinkle para boda" },
    { src: "/img/cascadas-led/renta-luces-led-cascada-ambiente-magico.avif", alt: "Ambiente m\xE1gico creado por cascadas LED" },
    { src: "/img/cascadas-led/cascadas-led-iluminacion-ambiente-romantico.avif", alt: "Iluminaci\xF3n rom\xE1ntica con cascadas LED" },
    { src: "/img/cascadas-led/renta-cascadas-led-cortina-luz-dorada.avif", alt: "Cortina de luz dorada cascada LED" },
    { src: "/img/cascadas-led/luces-para-bodas-cascada-fondo-elegante.avif", alt: "Fondo elegante de cascada LED para boda" },
    { src: "/img/cascadas-led/renta-luces-led-cascada-estructura-moderna.avif", alt: "Cascada LED en estructura moderna de evento" }
  ] })} </div> </section>  <section class="services-section services-alt" id="paquetes"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "\xBFCu\xE1nto cuesta rentar cascadas LED en CDMX?", "subtitle": "4 opciones seg\xFAn el tama\xF1o del backdrop. Estructura incluida.", "paragraph1": "Cada paquete incluye las cortinas LED, estructura de truss port\xE1til (no da\xF1amos el venue), cableado, montaje profesional y desmontaje. Las cortinas miden 3\xD73 metros cada una y se pueden unir para crear backdrops m\xE1s amplios.", "paragraph2": "\xBFTu evento necesita una configuraci\xF3n diferente? Armamos propuestas a la medida. Cotiza por WhatsApp y te hacemos un dise\xF1o personalizado." })} ${renderComponent($$result2, "PricingCards", $$PricingCards, { "packages": [
    {
      name: "B\xE1sico \u2014 1 Cortina 3\xD73m",
      price: "$3,000",
      priceNote: "+ IVA",
      description: "Una cortina de cascada LED perfecta para la mesa de novios o como fondo fotogr\xE1fico. Lo m\xE1s solicitado.",
      features: [
        { text: "1 cortina LED de 3\xD73 metros", included: true },
        { text: "Estructura de truss incluida", included: true },
        { text: "Blanco c\xE1lido, fr\xEDo o multicolor", included: true },
        { text: "Transporte + montaje + desmontaje", included: true },
        { text: "Ideal para: mesa de novios, photo booth", included: true },
        { text: "Efecto twinkle (parpadeo)", included: true },
        { text: "Control DMX de colores", included: false },
        { text: "Cortinas adicionales", included: false }
      ],
      ctaLabel: "Cotizar 1 cortina",
      ctaHref: "/servicios/cascadas-led/paquete-1-cortina/"
    },
    {
      name: "Est\xE1ndar \u2014 2 Cortinas 3\xD73m",
      price: "$5,500",
      priceNote: "+ IVA",
      badge: "M\xE1s popular",
      highlight: true,
      description: "Backdrop completo de 6 metros de ancho. Cubre toda la pared detr\xE1s de la mesa principal. El m\xE1s pedido para bodas.",
      features: [
        { text: "2 cortinas LED de 3\xD73 metros", included: true },
        { text: "Backdrop continuo de 6m de ancho", included: true },
        { text: "Estructura de truss incluida", included: true },
        { text: "Blanco c\xE1lido, fr\xEDo o multicolor", included: true },
        { text: "Transporte + montaje + desmontaje", included: true },
        { text: "Efecto twinkle (parpadeo)", included: true },
        { text: "Ideal para: bodas, XV a\xF1os, galas", included: true },
        { text: "Control DMX de colores", included: false }
      ],
      ctaLabel: "Cotizar backdrop est\xE1ndar",
      ctaHref: "/servicios/cascadas-led/paquete-2-cortinas/"
    },
    {
      name: "Premium \u2014 4 Cortinas",
      price: "$9,000",
      priceNote: "+ IVA",
      description: "12 metros de cortinas LED para cubrir todo un lateral del sal\xF3n. Efecto envolvente que transforma el espacio completo.",
      features: [
        { text: "4 cortinas LED (12m de ancho total)", included: true },
        { text: "Estructuras de truss independientes", included: true },
        { text: "Control DMX para cambios de color", included: true },
        { text: "Efecto twinkle + cascada programada", included: true },
        { text: "Transporte + montaje + desmontaje", included: true },
        { text: "Ideal para: bodas grandes, salones", included: true },
        { text: "Operador t\xE9cnico incluido", included: true },
        { text: "Dise\xF1o de distribuci\xF3n personalizado", included: true }
      ],
      ctaLabel: "Cotizar premium",
      ctaHref: "/servicios/cascadas-led/paquete-4-cortinas/"
    },
    {
      name: "Producci\xF3n \u2014 8+ Cortinas",
      price: "$15,000",
      priceNote: "+ IVA",
      description: "Decoraci\xF3n total con cascadas LED en todo el venue. Paredes, divisiones, backdrop y arcos luminosos.",
      features: [
        { text: "8+ cortinas LED (24m+ de cobertura)", included: true },
        { text: "M\xFAltiples zonas iluminadas", included: true },
        { text: "Control DMX completo", included: true },
        { text: "Efectos programados y sincronizados", included: true },
        { text: "Arcos y figuras luminosas", included: true },
        { text: "Equipo t\xE9cnico completo", included: true },
        { text: "Visita previa al venue", included: true },
        { text: "Ideal para: eventos masivos, producci\xF3n", included: true }
      ],
      ctaLabel: "Cotizar producci\xF3n completa",
      ctaHref: "/servicios/cascadas-led/paquete-produccion/"
    }
  ] })} </div> </section>  <section class="faq-section"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Preguntas frecuentes sobre cascadas LED", "subtitle": "Lo que todos preguntan antes de reservar.", "paragraph1": "Si tienes otra duda, escr\xEDbenos por WhatsApp y te respondemos en minutos.", "paragraph2": "Cada sal\xF3n es diferente \u2014 te asesoramos sobre cu\xE1ntas cortinas necesitas seg\xFAn las dimensiones de tu venue." })} </div> ${renderComponent($$result2, "FaqSection", $$FaqSection, { "items": [
    { question: "\xBFCu\xE1ntas cortinas necesito?", answer: "1 cortina (3m) cubre una mesa de novios est\xE1ndar. 2 cortinas (6m) cubren la pared completa del sal\xF3n \u2014 es lo m\xE1s pedido. 4 cortinas (12m) son para salones grandes o para cubrir dos laterales. M\xE1ndanos las medidas de la pared y te decimos exacto." },
    { question: "\xBFDa\xF1an las paredes?", answer: "No. Las cortinas van en estructura de truss port\xE1til que se apoya en el piso. No se perfora, pega ni toca la pared del venue. Al terminar, se retira todo sin dejar marca." },
    { question: "\xBFSe ven con las luces del sal\xF3n prendidas?", answer: "Poco. Con las luces generales al 100%, las cascadas se pierden en el brillo ambiental. El efecto funciona cuando las luces del sal\xF3n bajan \u2014 que normalmente coincide con la cena y el baile. Coordinamos con el venue y el DJ para ese momento." },
    { question: "\xBFQu\xE9 efecto es mejor para bodas?", answer: "Blanco c\xE1lido con twinkle. Es un parpadeo suave que simula estrellas \u2014 rom\xE1ntico, elegante, y en fotos sale perfecto. El blanco fr\xEDo da un look m\xE1s moderno. El multicolor es m\xE1s para XV a\xF1os." },
    { question: "\xBFSe usan en exteriores?", answer: "Bajo techo o carpa s\xED. Las cortinas no est\xE1n dise\xF1adas para lluvia directa. En p\xE9rgolas, carpas y estructuras cubiertas funcionan sin problema. Si el venue es jard\xEDn abierto, el truss se ancla al piso y la cortina queda protegida por la estructura." },
    { question: "\xBFCu\xE1nto tarda el montaje?", answer: "1-2 cortinas: 1 hora. 4+ cortinas: 2-3 horas. Llegamos con tiempo de sobra para que todo est\xE9 probado antes de que lleguen los invitados." }
  ] })} </section>  <section class="services-section services-alt"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "\xBFQu\xE9 otros servicios combinan con cascadas LED?", "subtitle": "Cascadas detr\xE1s de la mesa, guirnaldas Edison sobre las mesas de invitados.", "paragraph1": "Es la combinaci\xF3n que m\xE1s montamos. Las cascadas LED crean el fondo fotogr\xE1fico detr\xE1s de los novios. Las guirnaldas Edison calientan todo el techo con luz \xE1mbar. Cada zona del sal\xF3n tiene su propia capa de iluminaci\xF3n sin que una compita con la otra.", "paragraph2": "Si le sumas un seguidor para el vals, los tres elementos se complementan: fondo brillante, techo c\xE1lido, y los novios iluminados con spotlight." })} <div class="services-grid"> ${serviciosRelacionados.map((s) => renderTemplate`${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "title": s.title, "image": s.image, "alt": s.alt, "description": s.description, "link": s.link })}`)} </div> </div> </section>  <section class="cta-section"> <div class="container"> <div class="cta-content"> <h2>¿Listo para que tu mesa de novios brille?</h2> <p>Mándanos fotos de tu salón por WhatsApp. Te decimos cuántas cortinas necesitas y te cotizamos en minutos.</p> <div class="cta-buttons"> <a href="/contacto/" class="btn btn-whatsapp btn-lg">Cotiza por WhatsApp</a> <a href="tel:+525530682988" class="btn btn-primary btn-lg">Llámanos — 55 3068 2988</a> </div> </div> </div> </section> ` })}`;
}, "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/pages/servicios/cascadas-led.astro", void 0);

const $$file = "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/pages/servicios/cascadas-led.astro";
const $$url = "/servicios/cascadas-led";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$CascadasLed,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
