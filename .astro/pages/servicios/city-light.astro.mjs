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

const $$CityLight = createComponent(($$result, $$props, $$slots) => {
  const title = "Renta de Luces LED PAR para Eventos y Bodas CDMX | REDEIL";
  const description = "Luminarias PAR LED RGBW para ambientar salones, bodas y eventos corporativos en CDMX. Control DMX. Instalaci\xF3n incluida. Desde $3,500 + IVA.";
  const canonical = "https://rentadeiluminacion.com/servicios/city-light/";
  const schemaMarkup = JSON.stringify([
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Renta de Luces LED PAR para Eventos",
      "provider": {
        "@type": "LocalBusiness",
        "name": "REDEIL",
        "url": "https://rentadeiluminacion.com",
        "telephone": "+525530682988",
        "address": { "@type": "PostalAddress", "addressLocality": "Ciudad de M\xE9xico", "addressRegion": "CDMX", "addressCountry": "MX" }
      },
      "description": "Servicio profesional de renta de luces LED PAR RGBW y luminarias ambientales para bodas, XV a\xF1os y eventos corporativos en CDMX. Control DMX incluido.",
      "areaServed": [
        { "@type": "City", "name": "Ciudad de M\xE9xico" },
        { "@type": "State", "name": "Estado de M\xE9xico" }
      ],
      "serviceType": "Renta de Luces LED PAR",
      "priceRange": "$$"
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "\xBFQu\xE9 es un PAR LED?", "acceptedAnswer": { "@type": "Answer", "text": "Un PAR LED es una luminaria compacta y vers\xE1til con m\xFAltiples LEDs RGBW (rojo, verde, azul, blanco) que puede producir cualquier color. Se usa para ambientar salones, iluminar mesas, crear zonas de color y complementar otros servicios de iluminaci\xF3n." } },
        { "@type": "Question", "name": "\xBFLos PAR LED cambian de color?", "acceptedAnswer": { "@type": "Answer", "text": "S\xED. Cada unidad puede producir millones de colores mezclando RGBW. Se controlan v\xEDa DMX para cambiar colores durante el evento \u2014 rosa en el vals, dorado en la cena, multicolor en la fiesta." } },
        { "@type": "Question", "name": "\xBFCu\xE1ntas luces necesito para mi sal\xF3n?", "acceptedAnswer": { "@type": "Answer", "text": "Para un sal\xF3n est\xE1ndar de 200m\xB2, 16 PAR LED distribuidos en el per\xEDmetro son suficientes para un ambiente completo. Para zonas espec\xEDficas (mesa de novios, entrada), 4-8 unidades." } },
        { "@type": "Question", "name": "\xBFCu\xE1nto cuesta la renta?", "acceptedAnswer": { "@type": "Answer", "text": "Un paquete b\xE1sico de 8 PAR LED arranca desde $3,500 + IVA con instalaci\xF3n incluida. Los paquetes completos para salones van desde $6,000 + IVA." } },
        { "@type": "Question", "name": "\xBFLos PAR LED tienen opciones inal\xE1mbricas?", "acceptedAnswer": { "@type": "Answer", "text": "S\xED. Contamos con modelos de PAR LED inal\xE1mbricos con bater\xEDa recargable de hasta 12 horas \u2014 ideales para centros de mesa, zonas sin acceso a corriente y colocaciones creativas sin cables visibles." } },
        { "@type": "Question", "name": "\xBFSe pueden combinar con otros servicios de iluminaci\xF3n?", "acceptedAnswer": { "@type": "Answer", "text": "S\xED, y es lo m\xE1s recomendable. Los PAR LED son la base del ambiente \u2014 agrega cabezas m\xF3viles para el show de luces, cascadas LED para la mesa de novios y guirnaldas para el jard\xEDn. Armamos paquetes con precio especial." } }
      ]
    }
  ]);
  const serviciosRelacionados = [
    { title: "City Color", image: "/img/city-color/iluminacion-ceremonia-boda-hacienda-300w.avif", alt: "City color en hacienda", description: "PAR LED para el interior + city color para las fachadas. Iluminaci\xF3n completa dentro y fuera.", link: "/servicios/city-color/" },
    { title: "Cabezas M\xF3viles", image: "/img/cabezas-moviles/renta-cabezas-moviles-boda-beams-blancos-elegante-300w.avif", alt: "Cabezas m\xF3viles con beams", description: "PAR LED crean el ambiente, las cabezas m\xF3viles hacen el show. La combinaci\xF3n perfecta para bodas.", link: "/servicios/cabezas-moviles/" },
    { title: "Cascadas LED", image: "/img/cascadas-led/cascadas-led-novios-mesa-romantica-boda-300w.avif", alt: "Cascadas LED para mesa de novios", description: "PAR LED en el sal\xF3n + cascadas LED detr\xE1s de la mesa de novios. Backdrop brillante + ambiente completo.", link: "/servicios/cascadas-led/" },
    { title: "Guirnaldas Edison", image: "/img/guirnaldas/renta-guirnaldas-edison-terraza-recepcion-02-300w.avif", alt: "Guirnaldas Edison en terraza", description: "PAR LED dentro del sal\xF3n + guirnaldas c\xE1lidas en el jard\xEDn. Adentro y afuera, todo iluminado.", link: "/servicios/guirnaldas/" }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "canonical": canonical, "schemaMarkup": schemaMarkup }, { "breadcrumbs": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "breadcrumbs" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Breadcrumbs", $$Breadcrumbs, { "items": [
    { label: "Inicio", href: "/" },
    { label: "Iluminaci\xF3n", href: "/servicios/iluminacion/" },
    { label: "City Light" }
  ] })} ` })}`, "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, { "title": "Renta de Luces LED PAR para Eventos en CDMX", "subtitle": "Luminarias RGBW vers\xE1tiles para ambientar salones, mesas y zonas de tu evento. Control DMX. Desde $3,500 + IVA.", "introParagraph1": "Las luces PAR LED son las m\xE1s vers\xE1tiles del cat\xE1logo de iluminaci\xF3n profesional \u2014 compactas, potentes y capaces de producir cualquier color imaginable. En <strong>REDEIL</strong> las usamos para ambientar salones completos, crear zonas de color diferenciadas, iluminar mesas principales, ba\xF1ar centros de mesa y complementar cualquier otro servicio de iluminaci\xF3n. Trabajamos con equipos <strong>Chauvet SlimPAR</strong>, <strong>Elation SixPar</strong> y <strong>ADJ Mega Par Profile</strong> \u2014 luminarias profesionales con mezcla RGBW de alta fidelidad.", "introParagraph2": "La ventaja del PAR LED es su flexibilidad: se coloca en el piso, en truss, en totems, sobre mesas o en cualquier superficie. Cada unidad se controla de forma independiente v\xEDa DMX512 \u2014 un mismo sal\xF3n puede tener la zona de cena en dorado c\xE1lido, la pista de baile en azul intenso y la entrada en rosa. El operador cambia colores en tiempo real seg\xFAn los momentos del evento. Bodas, XV a\xF1os, galas corporativas y cenas de gala en toda la CDMX y Estado de M\xE9xico." })} ${renderComponent($$result2, "CtaBar", $$CtaBar, { "headline": "\xBFQu\xE9 zona de tu evento quieres iluminar?", "items": [
    { label: "Ambiente de Sal\xF3n", href: "#paquetes", icon: "iluminacion" },
    { label: "Toda la iluminaci\xF3n", href: "/servicios/iluminacion/", icon: "iluminacion" },
    { label: "Bodas", href: "/eventos/bodas/", icon: "iluminacion" },
    { label: "Cotiza Gratis", href: "/contacto/", icon: "cotizar" }
  ] })}  ${maybeRenderHead()}<section class="services-section"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Ambientes de color en eventos reales", "subtitle": "Cada luminaria produce millones de colores \u2014 t\xFA eliges la paleta.", "paragraph1": "Desde un ambiente rom\xE1ntico en tonos c\xE1lidos para la cena de boda hasta una explosi\xF3n de color para la fiesta de XV a\xF1os \u2014 las luces PAR LED se adaptan a cualquier estilo. Cada foto es de un evento real donde nuestro equipo dise\xF1\xF3 la iluminaci\xF3n seg\xFAn la tem\xE1tica del cliente.", "paragraph2": "El cambio de color es instant\xE1neo. Durante la cena el sal\xF3n puede estar en dorado suave, y cuando empieza la fiesta, transformarse en rosa, azul o multicolor con un solo cue del operador." })} ${renderComponent($$result2, "Gallery4x4", $$Gallery4X4, { "images": [
    { src: "/img/city-light/iluminacion-profesional-bodas-cdmx.avif", alt: "Iluminaci\xF3n profesional para bodas en CDMX" },
    { src: "/img/city-light/iluminacion-para-fiestas-cdmx.avif", alt: "Iluminaci\xF3n ambiental para fiestas en CDMX" },
    { src: "/img/city-light/iluminacion-salon-bodas.avif", alt: "Sal\xF3n de bodas iluminado con PAR LED" },
    { src: "/img/city-light/iluminacion-bodas-hacienda.avif", alt: "Hacienda iluminada con luces LED para boda" },
    { src: "/img/city-light/iluminacion-eventos-corporativos.avif", alt: "Iluminaci\xF3n LED para evento corporativo" },
    { src: "/img/city-light/luces-para-bodas-baile-romantico.avif", alt: "Baile rom\xE1ntico con luces LED en boda" },
    { src: "/img/city-light/iluminacion-ambientar-vals-boda-magenta.avif", alt: "Vals de boda ambientado con luces magenta" },
    { src: "/img/city-light/luces-eventos-primer-baile-novios.avif", alt: "Primer baile de novios con iluminaci\xF3n profesional" },
    { src: "/img/city-light/renta-de-luces-para-bodas-cdmx.avif", alt: "Renta de luces profesionales para bodas CDMX" },
    { src: "/img/city-light/renta-iluminacion-entrada-novios-rosa.avif", alt: "Entrada de novios con iluminaci\xF3n rosa" },
    { src: "/img/city-light/luces-ambientar-jardin-boda-calido.avif", alt: "Jard\xEDn de boda iluminado con tono c\xE1lido" },
    { src: "/img/city-light/renta-luces-boda-recepcion-elegante.avif", alt: "Recepci\xF3n elegante de boda con iluminaci\xF3n LED" },
    { src: "/img/city-light/luces-boda-brindis-ambar-elegante.avif", alt: "Brindis de boda con ambiente \xE1mbar elegante" },
    { src: "/img/city-light/iluminacion-fiestas-salon-gala-rosa.avif", alt: "Sal\xF3n de gala iluminado en rosa para fiesta" },
    { src: "/img/city-light/iluminacion-profesional-eventos.avif", alt: "Iluminaci\xF3n LED profesional para eventos" },
    { src: "/img/city-light/renta-de-luces-para-eventos-cdmx.avif", alt: "Renta de luces LED para eventos en CDMX" }
  ] })} </div> </section>  <section class="services-section services-alt" id="paquetes"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Paquetes de Luces PAR LED", "subtitle": "4 opciones seg\xFAn el tama\xF1o de tu venue. Operador DMX incluido.", "paragraph1": "Cada paquete incluye las luminarias PAR LED RGBW, soportes, cableado DMX, operador t\xE9cnico y desmontaje. El operador programa los cambios de color seg\xFAn tu playlist de momentos \u2014 ceremonia, cena, brindis, fiesta.", "paragraph2": "\xBFTu evento necesita algo espec\xEDfico? Armamos configuraciones a la medida con la cantidad exacta de luces para tu espacio." })} ${renderComponent($$result2, "PricingCards", $$PricingCards, { "packages": [
    {
      name: "B\xE1sico \u2014 8 PAR LED",
      price: "$3,500",
      priceNote: "+ IVA",
      description: "Ambiente de color para una zona espec\xEDfica: mesa de novios, entrada, zona lounge o pista de baile.",
      features: [
        { text: "8 PAR LED RGBW profesionales", included: true },
        { text: "Cobertura para 1 zona del sal\xF3n", included: true },
        { text: "Control DMX con operador", included: true },
        { text: "Transporte + montaje + desmontaje", included: true },
        { text: "Ideal para: mesa de novios, zona lounge", included: true },
        { text: "Cambios de color programados", included: true },
        { text: "M\xFAltiples zonas independientes", included: false },
        { text: "Sincronizaci\xF3n con m\xFAsica", included: false }
      ],
      ctaLabel: "Ver paquete 8 PAR LED",
      ctaHref: "/servicios/city-light/paquete-8-par-led/"
    },
    {
      name: "Est\xE1ndar \u2014 16 PAR LED",
      price: "$6,000",
      priceNote: "+ IVA",
      badge: "M\xE1s popular",
      highlight: true,
      description: "Sal\xF3n completo ambientado en color. El m\xE1s pedido para bodas \u2014 cena en dorado, fiesta en color.",
      features: [
        { text: "16 PAR LED RGBW profesionales", included: true },
        { text: "Cobertura sal\xF3n completo hasta 200m\xB2", included: true },
        { text: "2 zonas de color independientes", included: true },
        { text: "Operador DMX profesional", included: true },
        { text: "Transporte + montaje + desmontaje", included: true },
        { text: "Ideal para: bodas, XV a\xF1os, galas", included: true },
        { text: "Cambios por momento del evento", included: true },
        { text: "Sincronizaci\xF3n con m\xFAsica", included: false }
      ],
      ctaLabel: "Ver paquete 16 PAR LED",
      ctaHref: "/servicios/city-light/paquete-16-par-led/"
    },
    {
      name: "Premium \u2014 24 PAR LED",
      price: "$9,000",
      priceNote: "+ IVA",
      description: "Hacienda completa: sal\xF3n + jard\xEDn + \xE1reas de transici\xF3n. M\xFAltiples zonas con paletas independientes.",
      features: [
        { text: "24 PAR LED RGBW de alta potencia", included: true },
        { text: "4+ zonas de color independientes", included: true },
        { text: "Sal\xF3n + jard\xEDn + \xE1reas exteriores", included: true },
        { text: "Operador DMX + asistente", included: true },
        { text: "Transporte + montaje + desmontaje", included: true },
        { text: "Dise\xF1o de iluminaci\xF3n personalizado", included: true },
        { text: "Sincronizaci\xF3n con DJ/m\xFAsica", included: true },
        { text: "Ideal para: haciendas, fincas, venues grandes", included: true }
      ],
      ctaLabel: "Ver paquete 24 PAR LED",
      ctaHref: "/servicios/city-light/paquete-24-par-led/"
    },
    {
      name: "Producci\xF3n \u2014 40+ PAR LED",
      price: "$14,000",
      priceNote: "+ IVA",
      description: "Producci\xF3n completa para eventos masivos. Carpas, escenarios, m\xFAltiples zonas sincronizadas.",
      features: [
        { text: "40+ PAR LED profesionales", included: true },
        { text: "Cobertura ilimitada de zonas", included: true },
        { text: "Coreograf\xEDa de color programada", included: true },
        { text: "Sincronizaci\xF3n con audio/video", included: true },
        { text: "Equipo completo de t\xE9cnicos", included: true },
        { text: "Log\xEDstica + generadores si requerido", included: true },
        { text: "Visita previa al venue", included: true },
        { text: "Ideal para: eventos masivos, carpas grandes", included: true }
      ],
      ctaLabel: "Ver producci\xF3n 40+",
      ctaHref: "/servicios/city-light/paquete-produccion/"
    }
  ] })} </div> </section>  <section class="faq-section"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Preguntas sobre Luces PAR LED", "subtitle": "Todo lo que necesitas saber sobre la iluminaci\xF3n ambiental.", "paragraph1": "Si tienes otra duda, escr\xEDbenos por WhatsApp y te respondemos en minutos.", "paragraph2": "Cada sal\xF3n tiene su configuraci\xF3n ideal \u2014 te asesoramos seg\xFAn las dimensiones y estilo de tu evento." })} </div> ${renderComponent($$result2, "FaqSection", $$FaqSection, { "items": [
    { question: "\xBFQu\xE9 es un PAR LED y para qu\xE9 sirve?", answer: "Un PAR LED es una luminaria compacta con m\xFAltiples LEDs de colores (rojo, verde, azul y blanco) que mezclados producen cualquier color imaginable. Se usa para ambientar salones, crear zonas de color, iluminar mesas principales, ba\xF1ar paredes y complementar shows de luces. Es la luminaria m\xE1s vers\xE1til y usada en eventos profesionales." },
    { question: "\xBFPuedo elegir los colores para mi evento?", answer: "S\xED, puedes elegir cualquier color o combinaci\xF3n. Los m\xE1s populares para bodas: dorado/\xE1mbar para la cena, rosa para el vals, azul para la fiesta. Para XV a\xF1os: magenta, morado, rosa. Para corporativos: los colores de la marca. El operador cambia los colores seg\xFAn cada momento del evento." },
    { question: "\xBFSe pueden poner en el piso sin cables a la vista?", answer: "S\xED. Usamos canaletas y cubrecables para que la instalaci\xF3n se vea limpia. Tambi\xE9n tenemos modelos inal\xE1mbricos con bater\xEDa que se colocan en cualquier punto sin cables \u2014 ideales para centros de mesa e islas de color en zonas donde no hay acceso a corriente el\xE9ctrica." },
    { question: "\xBFCu\xE1ntas luces necesito para mi sal\xF3n?", answer: "Para un sal\xF3n est\xE1ndar de bodas (150-200m\xB2), 16 PAR LED distribuidos en el per\xEDmetro son suficientes para un ambiente de color completo. Para zonas espec\xEDficas como la mesa de novios o entrada, 4-8 unidades. Te asesoramos seg\xFAn las fotos de tu venue." },
    { question: "\xBFGeneran mucho calor?", answer: "No. Los PAR LED generan muy poco calor comparados con las luminarias hal\xF3genas antiguas. Puedes tenerlos cerca de arreglos florales, telas decorativas y centros de mesa sin riesgo. Por eso son la opci\xF3n preferida en salones de eventos." },
    { question: "\xBFSe notan durante el d\xEDa?", answer: "El efecto de color es m\xE1s notorio en espacios con poca luz natural. En salones cerrados, el efecto es visible desde que oscurece. Para eventos de d\xEDa con ventanales abiertos, recomendamos complementar con cortinas o iniciar el programa de color conforme oscurece." }
  ] })} </section>  <section class="services-section services-alt"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Combina con Otros Servicios", "subtitle": "Las luces PAR LED son la base \u2014 agr\xE9gales el wow factor.", "paragraph1": "La iluminaci\xF3n ambiental con PAR LED es la base sobre la que construyes una producci\xF3n completa. Agrega cabezas m\xF3viles para el show de luces, cascadas LED para la mesa de novios y guirnaldas para el jard\xEDn \u2014 y tienes un evento de revista.", "paragraph2": "Armamos paquetes combinados con precio especial. Cu\xE9ntanos tu evento y te dise\xF1amos la iluminaci\xF3n de principio a fin." })} <div class="services-grid"> ${serviciosRelacionados.map((s) => renderTemplate`${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "title": s.title, "image": s.image, "alt": s.alt, "description": s.description, "link": s.link })}`)} </div> </div> </section>  <section class="cta-section"> <div class="container"> <div class="cta-content"> <h2>¿Listo para transformar tu salón con color?</h2> <p>Mándanos fotos de tu salón y dinos los colores que te gustan. Te diseñamos la iluminación ambiental perfecta para tu evento.</p> <div class="cta-buttons"> <a href="/contacto/" class="btn btn-whatsapp btn-lg">Diseña tu Iluminación</a> <a href="tel:+525530682988" class="btn btn-primary btn-lg">Llámanos — 55 3068 2988</a> </div> </div> </div> </section> ` })}`;
}, "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/pages/servicios/city-light.astro", void 0);

const $$file = "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/pages/servicios/city-light.astro";
const $$url = "/servicios/city-light";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$CityLight,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
