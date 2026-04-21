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

const $$CabezasMoviles = createComponent(($$result, $$props, $$slots) => {
  const title = "Renta de Cabezas M\xF3viles para Eventos y Bodas CDMX | REDEIL";
  const description = "Luces rob\xF3ticas Beam, Spot y Wash con control DMX para shows de luces en bodas, XV a\xF1os y eventos. Martin, Chauvet, Elation. Desde $6,000 + IVA.";
  const canonical = "https://rentadeiluminacion.com/servicios/cabezas-moviles/";
  const schemaMarkup = JSON.stringify([
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Renta de Cabezas M\xF3viles para Eventos",
      "provider": {
        "@type": "LocalBusiness",
        "name": "REDEIL",
        "url": "https://rentadeiluminacion.com",
        "telephone": "+525530682988",
        "address": { "@type": "PostalAddress", "addressLocality": "Ciudad de M\xE9xico", "addressRegion": "CDMX", "addressCountry": "MX" }
      },
      "description": "Servicio profesional de renta de cabezas m\xF3viles LED y luminarias rob\xF3ticas DMX para shows de luces en bodas, XV a\xF1os y eventos en CDMX.",
      "areaServed": [
        { "@type": "City", "name": "Ciudad de M\xE9xico" },
        { "@type": "State", "name": "Estado de M\xE9xico" }
      ],
      "serviceType": "Renta de Cabezas M\xF3viles",
      "priceRange": "$$"
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "\xBFQu\xE9 diferencia hay entre Beam, Spot y Wash?", "acceptedAnswer": { "@type": "Answer", "text": "Beam proyecta un haz concentrado y delgado \u2014 ideal para shows a\xE9reos y efectos con humo. Spot proyecta patrones, gobos y colores con bordes definidos. Wash ba\xF1a grandes \xE1reas con color suave y uniforme. La mayor\xEDa de los eventos usan una combinaci\xF3n de los tres." } },
        { "@type": "Question", "name": "\xBFLas cabezas m\xF3viles necesitan operador?", "acceptedAnswer": { "@type": "Answer", "text": "S\xED. Todos nuestros paquetes incluyen operador con consola DMX512. El operador programa las secuencias antes del evento y las controla en vivo para sincronizar con la m\xFAsica y los momentos clave." } },
        { "@type": "Question", "name": "\xBFCu\xE1ntas cabezas m\xF3viles necesito para mi evento?", "acceptedAnswer": { "@type": "Answer", "text": "Para una pista de baile est\xE1ndar, 4-8 cabezas son suficientes. Para bodas completas con show de luces, recomendamos 8-12. Para conciertos y eventos masivos, 20 o m\xE1s. Te asesoramos seg\xFAn tu espacio." } },
        { "@type": "Question", "name": "\xBFSe pueden sincronizar con la m\xFAsica?", "acceptedAnswer": { "@type": "Answer", "text": "S\xED. Nuestras cabezas m\xF3viles se operan v\xEDa DMX512 y pueden sincronizarse con el audio del DJ o la banda en vivo. El operador programa cues espec\xEDficos para momentos clave como el vals, brindis o entrada de los novios." } },
        { "@type": "Question", "name": "\xBFLas cabezas m\xF3viles hacen ruido?", "acceptedAnswer": { "@type": "Answer", "text": "Las cabezas m\xF3viles modernas son pr\xE1cticamente silenciosas \u2014 el motor de movimiento genera un m\xEDnimo ruido que es imperceptible con la m\xFAsica. Las instalamos a distancia del \xE1rea de conversaci\xF3n para evitar cualquier distracci\xF3n." } },
        { "@type": "Question", "name": "\xBFSe pueden combinar cabezas m\xF3viles con humo esc\xE9nico?", "acceptedAnswer": { "@type": "Answer", "text": "S\xED, es la combinaci\xF3n m\xE1s solicitada. Los beams de las cabezas m\xF3viles se hacen visibles al cortar el humo \u2014 el efecto de concierto m\xE1s espectacular que puedes tener en un evento." } }
      ]
    }
  ]);
  const serviciosRelacionados = [
    { title: "Sky Tracker", image: "/img/sky-tracker/renta-skytracker-cielo-nocturno-potente-300w.avif", alt: "Sky tracker al cielo nocturno", description: "Sky tracker en el cielo + cabezas m\xF3viles en la pista. Producci\xF3n visual completa de arriba a abajo.", link: "/servicios/sky-tracker/" },
    { title: "Gobos", image: "/img/gobos/renta-gobo-monograma-pista-baile-300w.avif", alt: "Gobo proyectando monograma", description: "Las cabezas m\xF3viles tipo Spot ya incluyen gobos giratorios. Complementa con proyecci\xF3n fija personalizada.", link: "/servicios/gobos/" },
    { title: "City Color", image: "/img/city-color/iluminacion-ceremonia-boda-hacienda-300w.avif", alt: "City color en hacienda", description: "Wash de color en paredes + cabezas m\xF3viles en la pista. Ambiente y show en el mismo evento.", link: "/servicios/city-color/" },
    { title: "Cascadas LED", image: "/img/cascadas-led/cascadas-led-novios-mesa-romantica-boda-300w.avif", alt: "Cascadas LED para mesa de novios", description: "Backdrop brillante detr\xE1s de la mesa + show de luces en la pista. Dos zonas visuales perfectas.", link: "/servicios/cascadas-led/" }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "canonical": canonical, "schemaMarkup": schemaMarkup }, { "breadcrumbs": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "breadcrumbs" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Breadcrumbs", $$Breadcrumbs, { "items": [
    { label: "Inicio", href: "/" },
    { label: "Iluminaci\xF3n", href: "/servicios/iluminacion/" },
    { label: "Cabezas M\xF3viles" }
  ] })} ` })}`, "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, { "title": "Renta de Cabezas M\xF3viles para Shows de Luces en CDMX", "subtitle": "Luces rob\xF3ticas Beam, Spot y Wash con control DMX. Operador profesional incluido. Desde $6,000 + IVA.", "introParagraph1": "Las cabezas m\xF3viles son lo que diferencia un evento con luces bonitas de un evento con show de luces real. Son luminarias rob\xF3ticas que se mueven, cambian de color y proyectan patrones, controladas en tiempo real por un operador con consola DMX512. Durante el vals van suaves y lentas en tono \xE1mbar. Cuando arranca la hora loca, explotan en color y velocidad. El operador programa esos cambios antes del evento y los ejecuta en vivo sincronizados con la m\xFAsica. En <strong>REDEIL</strong> trabajamos con <strong>Martin MAC Aura</strong>, <strong>Chauvet Rogue R2</strong> y <strong>Elation Platinum</strong>.", "introParagraph2": "Hay tres tipos y cada uno hace algo diferente. <strong>Beam</strong>: haz concentrado y delgado que corta el aire, el efecto a\xE9reo de concierto. Se ve mejor con humo. <strong>Spot</strong>: proyecta gobos (figuras, logos, estrellas) con bordes definidos en paredes y piso. <strong>Wash</strong>: ba\xF1a \xE1reas grandes con color uniforme, ideal para cambiar el ambiente del sal\xF3n entero. Para una boda est\xE1ndar de 150 personas, 8 cabezas (mezcla de beam y wash) cubren pista y sal\xF3n. Para 4 cabezas alcanza la pista sola. Montamos en truss a\xE9reo o totems de piso seg\xFAn el venue." })} ${renderComponent($$result2, "CtaBar", $$CtaBar, { "headline": "\xBFPara qu\xE9 tipo de evento necesitas el show de luces?", "items": [
    { label: "Bodas", href: "/eventos/bodas/", icon: "iluminacion" },
    { label: "Toda la iluminaci\xF3n", href: "/servicios/iluminacion/", icon: "iluminacion" },
    { label: "Ver paquetes", href: "#paquetes", icon: "iluminacion" },
    { label: "Cotiza Gratis", href: "/contacto/", icon: "cotizar" }
  ] })}  ${maybeRenderHead()}<section class="services-section"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "\xBFC\xF3mo se ven las cabezas m\xF3viles en un evento real?", "subtitle": "El mismo equipo, dos ambientes opuestos: vals rom\xE1ntico y hora loca.", "paragraph1": "Durante la cena, el operador deja las cabezas en modo suave: wash \xE1mbar en las paredes, movimiento lento, sin beams cruzando el sal\xF3n. Cuando el DJ sube la energ\xEDa para la hora loca, el operador cambia de programa y las cabezas explotan en color, velocidad y beams a\xE9reos. Dos momentos completamente diferentes con el mismo equipo.", "paragraph2": "Si le agregas humo esc\xE9nico, los beams se hacen visibles cortando la niebla. Ese efecto de 'rayos de luz' que ves en conciertos. Sin humo, los beams solo se ven donde tocan una superficie." })} ${renderComponent($$result2, "Gallery4x4", $$Gallery4X4, { "images": [
    { src: "/img/cabezas-moviles/renta-cabezas-moviles-boda-beams-blancos-elegante.avif", alt: "Cabezas m\xF3viles con beams blancos en boda elegante" },
    { src: "/img/cabezas-moviles/renta-cabezas-moviles-boda-pista-baile-azul-rosa.avif", alt: "Pista de baile iluminada con cabezas m\xF3viles azul y rosa" },
    { src: "/img/cabezas-moviles/renta-cabezas-moviles-show-luces-beams-colores.avif", alt: "Show de luces con beams de colores en evento" },
    { src: "/img/cabezas-moviles/renta-cabezas-moviles-fiesta-xv-beams-rosa-azul.avif", alt: "Fiesta de XV a\xF1os con beams rosa y azul" },
    { src: "/img/cabezas-moviles/renta-cabezas-moviles-boda-baile-novios-iluminacion.avif", alt: "Baile de novios con iluminaci\xF3n de cabezas m\xF3viles" },
    { src: "/img/cabezas-moviles/renta-cabezas-moviles-evento-corporativo-beams-show.avif", alt: "Evento corporativo con show de beams profesional" },
    { src: "/img/cabezas-moviles/renta-cabezas-moviles-boda-romantica-beams-suaves.avif", alt: "Boda rom\xE1ntica con beams suaves y c\xE1lidos" },
    { src: "/img/cabezas-moviles/renta-cabezas-moviles-fiesta-beams-humo-pista.avif", alt: "Fiesta con beams cortando el humo en pista de baile" },
    { src: "/img/cabezas-moviles/renta-cabezas-moviles-show-profesional-truss-beams.avif", alt: "Montaje profesional en truss con m\xFAltiples cabezas m\xF3viles" },
    { src: "/img/cabezas-moviles/renta-cabezas-moviles-xv-anos-pista-baile-rosa.avif", alt: "Pista de baile rosa para XV a\xF1os con cabezas m\xF3viles" },
    { src: "/img/cabezas-moviles/renta-cabezas-moviles-gala-corporativa-salon-rosa.avif", alt: "Gala corporativa en sal\xF3n iluminado con wash rosa" },
    { src: "/img/cabezas-moviles/renta-cabezas-moviles-evento-beams-cruzados-fiesta.avif", alt: "Beams cruzados en fiesta nocturna" },
    { src: "/img/cabezas-moviles/renta-cabezas-moviles-boda-salon-iluminacion-completa.avif", alt: "Sal\xF3n de boda con iluminaci\xF3n completa de cabezas m\xF3viles" },
    { src: "/img/cabezas-moviles/renta-cabezas-moviles-operador-consola-dmx-boda.avif", alt: "Operador controlando consola DMX en boda" },
    { src: "/img/cabezas-moviles/renta-cabezas-moviles-pista-baile-gobos-espiral.avif", alt: "Gobos en espiral proyectados en pista de baile" },
    { src: "/img/cabezas-moviles/renta-cabezas-moviles-evento-masivo-luces-show.avif", alt: "Evento masivo con show de luces de cabezas m\xF3viles" }
  ] })} </div> </section>  <section class="services-section services-alt" id="paquetes"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "\xBFCu\xE1nto cuesta rentar cabezas m\xF3viles en CDMX?", "subtitle": "4 niveles de show seg\xFAn el tama\xF1o de tu evento. Operador DMX incluido.", "paragraph1": "Cada paquete incluye las luminarias rob\xF3ticas, truss o totems para montaje, cableado DMX, operador profesional con consola, programaci\xF3n de secuencias y desmontaje. El operador llega horas antes para programar los cues seg\xFAn tu playlist y momentos clave.", "paragraph2": "\xBFNecesitas algo espec\xEDfico? Armamos configuraciones a la medida con la cantidad exacta de beam, spot y wash que tu evento necesita." })} ${renderComponent($$result2, "PricingCards", $$PricingCards, { "packages": [
    {
      name: "Show B\xE1sico \u2014 4 Cabezas",
      price: "$6,000",
      priceNote: "+ IVA",
      description: "Show de luces para la pista de baile. Ideal para bodas \xEDntimas y fiestas privadas de hasta 80 invitados.",
      features: [
        { text: "4 cabezas m\xF3viles LED (beam + wash)", included: true },
        { text: "Montaje en totems profesionales", included: true },
        { text: "Operador DMX incluido", included: true },
        { text: "Transporte + montaje + desmontaje", included: true },
        { text: "Ideal para: pista de baile, bodas", included: true },
        { text: "Programaci\xF3n por momentos clave", included: true },
        { text: "Montaje en truss a\xE9reo", included: false },
        { text: "Sincronizaci\xF3n con m\xFAsica en vivo", included: false }
      ],
      ctaLabel: "Cotizar show b\xE1sico",
      ctaHref: "/servicios/cabezas-moviles/paquete-show-basico/"
    },
    {
      name: "Show Est\xE1ndar \u2014 8 Cabezas",
      price: "$10,000",
      priceNote: "+ IVA",
      badge: "M\xE1s popular",
      highlight: true,
      description: "El show completo para bodas y XV a\xF1os. Beam + Spot + Wash que cubren pista y sal\xF3n para 150+ invitados.",
      features: [
        { text: "8 cabezas m\xF3viles (beam + spot + wash)", included: true },
        { text: "Montaje en truss o totems", included: true },
        { text: "Operador DMX con consola profesional", included: true },
        { text: "Transporte + montaje + desmontaje", included: true },
        { text: "Programaci\xF3n de cues por momento", included: true },
        { text: "Ideal para: bodas, XV a\xF1os, galas", included: true },
        { text: "Sincronizaci\xF3n con playlist/DJ", included: true },
        { text: "Gobos personalizados", included: false }
      ],
      ctaLabel: "Cotizar show est\xE1ndar",
      ctaHref: "/servicios/cabezas-moviles/paquete-show-estandar/"
    },
    {
      name: "Show Premium \u2014 12 Cabezas",
      price: "$16,000",
      priceNote: "+ IVA",
      description: "Producci\xF3n de luces nivel concierto. 12 luminarias rob\xF3ticas para eventos grandes y galas corporativas.",
      features: [
        { text: "12 cabezas m\xF3viles de alta potencia", included: true },
        { text: "Montaje en truss profesional a\xE9reo", included: true },
        { text: "Operador DMX + asistente t\xE9cnico", included: true },
        { text: "Transporte + montaje + desmontaje", included: true },
        { text: "Programaci\xF3n completa sincronizada", included: true },
        { text: "Gobos personalizados incluidos", included: true },
        { text: "Ideal para: galas, corporativos, shows", included: true },
        { text: "Visita previa al venue", included: true }
      ],
      ctaLabel: "Cotizar producci\xF3n premium",
      ctaHref: "/servicios/cabezas-moviles/paquete-show-premium/"
    },
    {
      name: "Producci\xF3n \u2014 20+ Cabezas",
      price: "$28,000",
      priceNote: "+ IVA",
      description: "Producci\xF3n completa nivel concierto para festivales, lanzamientos y mega eventos. Show coreografiado.",
      features: [
        { text: "20+ cabezas m\xF3viles profesionales", included: true },
        { text: "Truss a\xE9reo + ground support", included: true },
        { text: "Equipo de operadores DMX", included: true },
        { text: "Coreograf\xEDa de luces programada", included: true },
        { text: "Sincronizaci\xF3n con audio + video", included: true },
        { text: "Gobos + efectos especiales", included: true },
        { text: "Log\xEDstica completa + visita previa", included: true },
        { text: "Ideal para: conciertos, festivales, TV", included: true }
      ],
      ctaLabel: "Cotizar mega producci\xF3n",
      ctaHref: "/servicios/cabezas-moviles/paquete-produccion/"
    }
  ] })} </div> </section>  <section class="faq-section"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Preguntas frecuentes sobre cabezas m\xF3viles", "subtitle": "Todo lo que necesitas saber sobre el show de luces.", "paragraph1": "Si tienes otra duda, escr\xEDbenos por WhatsApp y te asesoramos en minutos.", "paragraph2": "Cada evento tiene su configuraci\xF3n ideal \u2014 te recomendamos la combinaci\xF3n exacta de beam, spot y wash para tu espacio." })} </div> ${renderComponent($$result2, "FaqSection", $$FaqSection, { "items": [
    { question: "\xBFQu\xE9 diferencia hay entre Beam, Spot y Wash?", answer: "Beam proyecta un haz de luz concentrado y delgado \u2014 es el efecto a\xE9reo que ves en conciertos cuando los rayos cruzan el sal\xF3n, y se ve espectacular con humo. Spot proyecta patrones, gobos y colores con bordes definidos \u2014 ideal para logos y figuras en paredes. Wash ba\xF1a \xE1reas grandes con color suave y uniforme \u2014 perfecto para ambientar salones completos." },
    { question: "\xBFNecesito un operador para las cabezas m\xF3viles?", answer: "S\xED, y todos nuestros paquetes lo incluyen. Las cabezas m\xF3viles se controlan con consola DMX512 \u2014 el operador programa secuencias antes del evento y las ejecuta en vivo. Esto permite sincronizar las luces con la m\xFAsica y crear cues espec\xEDficos para el vals, brindis, hora loca y entrada de novios." },
    { question: "\xBFSe pueden sincronizar con la m\xFAsica del DJ?", answer: "S\xED. Nuestro operador se coordina con el DJ o la banda en vivo para sincronizar los cambios de luces con la m\xFAsica. El resultado es un show donde las luces se mueven al ritmo \u2014 suave durante las baladas, explosivo en la fiesta." },
    { question: "\xBFCu\xE1ntas cabezas m\xF3viles necesito?", answer: "Para una pista de baile est\xE1ndar de 100m\xB2, 4 cabezas son suficientes. Para cubrir pista + sal\xF3n en una boda, recomendamos 8. Para galas y corporativos en venues grandes, 12 o m\xE1s. Te asesoramos seg\xFAn las dimensiones de tu espacio." },
    { question: "\xBFEl montaje en truss es seguro?", answer: "100%. Nuestro truss es de aluminio certificado con capacidad de carga superior al peso de los equipos. Lo aseguramos con slings de acero y cadenas de seguridad. Cada cabeza m\xF3vil tiene su propio cable de seguridad independiente del soporte principal." },
    { question: "\xBFCu\xE1nto tiempo toma la instalaci\xF3n?", answer: "El montaje completo toma entre 2 y 4 horas dependiendo de la cantidad de equipos y si es truss a\xE9reo o totems. Llegamos temprano para que todo est\xE9 listo y probado antes de que lleguen tus invitados." }
  ] })} </section>  <section class="services-section services-alt"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "\xBFQu\xE9 otros servicios combinan con cabezas m\xF3viles?", "subtitle": "Humo esc\xE9nico + cabezas m\xF3viles es la combinaci\xF3n que m\xE1s se contrata.", "paragraph1": "Sin humo, los beams solo se ven donde tocan pared o piso. Con humo, los haces de luz se hacen visibles en el aire y el efecto de concierto se multiplica. Tambi\xE9n combinan bien con gobos personalizados (nombres de los novios proyectados en el piso) y con seguidor de luz para el vals.", "paragraph2": "Precio especial cuando combinas dos o m\xE1s servicios. El traslado y el equipo t\xE9cnico se comparten." })} <div class="services-grid"> ${serviciosRelacionados.map((s) => renderTemplate`${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "title": s.title, "image": s.image, "alt": s.alt, "description": s.description, "link": s.link })}`)} </div> </div> </section>  <section class="cta-section"> <div class="container"> <div class="cta-content"> <h2>¿Listo para un show de luces en tu evento?</h2> <p>Cuéntanos el tipo de evento, el tamaño del venue y qué efecto quieres lograr. Te diseñamos el show de luces perfecto.</p> <div class="cta-buttons"> <a href="/contacto/" class="btn btn-whatsapp btn-lg">Diseña tu Show de Luces</a> <a href="tel:+525530682988" class="btn btn-primary btn-lg">Llámanos — 55 3068 2988</a> </div> </div> </div> </section> ` })}`;
}, "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/pages/servicios/cabezas-moviles.astro", void 0);

const $$file = "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/pages/servicios/cabezas-moviles.astro";
const $$url = "/servicios/cabezas-moviles";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$CabezasMoviles,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
