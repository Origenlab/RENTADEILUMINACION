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

const $$IluminacionArquitectonica = createComponent(($$result, $$props, $$slots) => {
  const title = "Renta de Uplighting para Haciendas y Eventos CDMX | REDEIL";
  const description = "Uplighting LED inal\xE1mbrico para fachadas, columnas, \xE1rboles y arcos de haciendas en CDMX. Sin cables. Instalaci\xF3n incluida. Desde $3,500 + IVA.";
  const canonical = "https://rentadeiluminacion.com/servicios/iluminacion-arquitectonica/";
  const schemaMarkup = JSON.stringify([
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Renta de Iluminaci\xF3n Arquitect\xF3nica para Eventos",
      "provider": {
        "@type": "LocalBusiness",
        "name": "REDEIL",
        "url": "https://rentadeiluminacion.com",
        "telephone": "+525530682988",
        "address": { "@type": "PostalAddress", "addressLocality": "Ciudad de M\xE9xico", "addressRegion": "CDMX", "addressCountry": "MX" }
      },
      "description": "Servicio profesional de uplighting e iluminaci\xF3n arquitect\xF3nica LED para fachadas, columnas, \xE1rboles y arcos en bodas y eventos en CDMX.",
      "areaServed": [
        { "@type": "City", "name": "Ciudad de M\xE9xico" },
        { "@type": "State", "name": "Estado de M\xE9xico" }
      ],
      "serviceType": "Renta de Iluminaci\xF3n Arquitect\xF3nica",
      "priceRange": "$$"
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "\xBFQu\xE9 es el uplighting?", "acceptedAnswer": { "@type": "Answer", "text": "El uplighting consiste en colocar reflectores LED en el piso apuntando hacia arriba para ba\xF1ar de luz y color fachadas, columnas, \xE1rboles, arcos y muros. Transforma la arquitectura del venue en un elemento decorativo espectacular." } },
        { "@type": "Question", "name": "\xBFLos reflectores son inal\xE1mbricos?", "acceptedAnswer": { "@type": "Answer", "text": "S\xED. Usamos uplighters LED con bater\xEDa recargable que duran hasta 12 horas. Sin cables en el piso \u2014 se colocan al pie de columnas, \xE1rboles y fachadas sin instalaci\xF3n el\xE9ctrica." } },
        { "@type": "Question", "name": "\xBFFunciona en haciendas y patios coloniales?", "acceptedAnswer": { "@type": "Answer", "text": "Es donde mejor se ve. Las haciendas con arcos de cantera, columnas coloniales y \xE1rboles centenarios son el escenario perfecto para uplighting. La luz resalta la textura de la piedra y crea sombras dram\xE1ticas que transforman el espacio." } },
        { "@type": "Question", "name": "\xBFCu\xE1ntos reflectores necesito?", "acceptedAnswer": { "@type": "Answer", "text": "Depende de lo que quieras iluminar. Para una fachada frontal con arcos, 6 uplighters. Para fachada + jard\xEDn con \xE1rboles, 12. Para una hacienda completa, 20 o m\xE1s. Te asesoramos seg\xFAn fotos de tu venue." } },
        { "@type": "Question", "name": "\xBFSe puede cambiar el color del uplighting durante el evento?", "acceptedAnswer": { "@type": "Answer", "text": "En los paquetes Premium y Producci\xF3n con control DMX, s\xED. Los uplighters cambian de color en tiempo real \u2014 \xE1mbar durante la cena, rosa durante el vals, multicolor en la fiesta. En los paquetes b\xE1sicos, el color se fija al inicio del evento." } },
        { "@type": "Question", "name": "\xBFEl uplighting se puede combinar con otros servicios?", "acceptedAnswer": { "@type": "Answer", "text": "S\xED, es el complemento perfecto para cualquier otro servicio. Con guirnaldas Edison en el techo y uplighting en las columnas, la hacienda queda completamente transformada. Tambi\xE9n combina con city color para fachadas grandes y gobos para personalizaci\xF3n." } }
      ]
    }
  ]);
  const serviciosRelacionados = [
    { title: "Guirnaldas Edison", image: "/img/guirnaldas/renta-guirnaldas-edison-terraza-recepcion-02-300w.avif", alt: "Guirnaldas Edison en terraza", description: "Uplighting en las columnas + guirnaldas c\xE1lidas en el techo. La combinaci\xF3n m\xE1s rom\xE1ntica para bodas en hacienda.", link: "/servicios/guirnaldas/" },
    { title: "City Color", image: "/img/city-color/iluminacion-ceremonia-boda-hacienda-300w.avif", alt: "City color en hacienda", description: "Uplighting para los detalles + city color para las fachadas grandes. Cobertura total del venue.", link: "/servicios/city-color/" },
    { title: "Sky Tracker", image: "/img/sky-tracker/renta-skytracker-cielo-nocturno-potente-300w.avif", alt: "Sky tracker al cielo", description: "Uplighting en el suelo + haces al cielo. Una producci\xF3n completa de arriba abajo para eventos nocturnos.", link: "/servicios/sky-tracker/" },
    { title: "Cascadas LED", image: "/img/cascadas-led/cascadas-led-novios-mesa-romantica-boda-300w.avif", alt: "Cascadas LED para boda", description: "Columnas iluminadas afuera + cascadas brillantes dentro. El venue completamente transformado.", link: "/servicios/cascadas-led/" }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "canonical": canonical, "schemaMarkup": schemaMarkup }, { "breadcrumbs": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "breadcrumbs" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Breadcrumbs", $$Breadcrumbs, { "items": [
    { label: "Inicio", href: "/" },
    { label: "Iluminaci\xF3n", href: "/servicios/iluminacion/" },
    { label: "Iluminaci\xF3n Arquitect\xF3nica" }
  ] })} ` })}`, "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, { "title": "Renta de Iluminaci\xF3n Arquitect\xF3nica y Uplighting en CDMX", "subtitle": "Reflectores LED inal\xE1mbricos para fachadas, columnas, \xE1rboles y arcos. Sin cables. Desde $3,500 + IVA.", "introParagraph1": "El uplighting funciona por un principio simple: la luz que viene de abajo genera sombras hacia arriba, y eso resalta la textura de cualquier superficie. Una columna de cantera que de d\xEDa se ve gris, de noche con un reflector LED \xE1mbar en la base se convierte en una pieza dorada con cada grieta y cada relieve marcado. Usamos <strong>Chauvet Freedom Par</strong> y <strong>ADJ Element</strong> inal\xE1mbricos con bater\xEDa de hasta 12 horas \u2014 se colocan en el piso sin cables.", "introParagraph2": "Los reflectores inal\xE1mbricos resuelven el problema m\xE1s com\xFAn en haciendas: no hay contactos cerca de las columnas ni de los \xE1rboles. Con bater\xEDa, el reflector se pone al pie de donde quieras iluminar y listo. No hay cables cruzando el piso donde los invitados caminan. Para las haciendas coloniales de CDMX y Edomex \u2014 que es donde m\xE1s montamos este servicio \u2014 la combinaci\xF3n cl\xE1sica es \xE1mbar en los arcos, verde en los \xE1rboles y violeta en la fachada principal. El equipo dise\xF1a la distribuci\xF3n seg\xFAn la arquitectura espec\xEDfica del venue." })} ${renderComponent($$result2, "CtaBar", $$CtaBar, { "headline": "\xBFQu\xE9 quieres iluminar de tu venue?", "items": [
    { label: "Haciendas y Jardines", href: "#paquetes", icon: "iluminacion" },
    { label: "Toda la iluminaci\xF3n", href: "/servicios/iluminacion/", icon: "iluminacion" },
    { label: "Bodas", href: "/eventos/bodas/", icon: "iluminacion" },
    { label: "Cotiza Gratis", href: "/contacto/", icon: "cotizar" }
  ] })}  ${maybeRenderHead()}<section class="services-section"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "\xBFC\xF3mo se ve la iluminaci\xF3n arquitect\xF3nica en un evento real?", "subtitle": "La arquitectura de tu venue se convierte en decoraci\xF3n.", "paragraph1": "La posici\xF3n del reflector importa. Si est\xE1 demasiado pegado a la columna, ilumina solo la base. Demasiado lejos, el haz se abre y pierde intensidad. La distancia ideal es entre 30cm y 1 metro de la superficie, dependiendo de la altura. Cada columna, cada \xE1rbol, cada arco requiere su propio ajuste.", "paragraph2": "El color tambi\xE9n cambia seg\xFAn el material. La cantera absorbe los tonos c\xE1lidos (\xE1mbar, dorado) de forma natural. El ladrillo rojo se ve bien con violeta porque el contraste crea profundidad. Los \xE1rboles con follaje verde se iluminan mejor en verde o blanco fr\xEDo \u2014 el \xE1mbar los hace ver amarillos." })} ${renderComponent($$result2, "Gallery4x4", $$Gallery4X4, { "images": [
    { src: "/img/iluminacion-arquitectonica/boda-patio-hacienda-iluminacion-fachada-ambar-string-lights-baile.avif", alt: "Patio de hacienda con uplighting \xE1mbar y guirnaldas para boda" },
    { src: "/img/iluminacion-arquitectonica/iluminacion-arbol-centenario-verde-jardin-boda-luces-decorativas.avif", alt: "\xC1rbol centenario iluminado en verde para boda en jard\xEDn" },
    { src: "/img/iluminacion-arquitectonica/iluminacion-arbol-majestuoso-uplighting-verde-hacienda-colonial.avif", alt: "Uplighting verde en \xE1rbol majestuoso de hacienda colonial" },
    { src: "/img/iluminacion-arquitectonica/iluminacion-arcada-hacienda-plantas-luz-ambar-evento-social.avif", alt: "Arcada de hacienda iluminada en \xE1mbar para evento social" },
    { src: "/img/iluminacion-arquitectonica/iluminacion-arcos-coloniales-columnas-piedra-luz-calida-boda.avif", alt: "Arcos coloniales y columnas de piedra con luz c\xE1lida para boda" },
    { src: "/img/iluminacion-arquitectonica/iluminacion-arquitectonica-arcos-coloniales-luz-violeta-fachada.avif", alt: "Fachada con arcos coloniales en luz violeta" },
    { src: "/img/iluminacion-arquitectonica/iluminacion-arboles-morados-boda-exterior-mesas-velas-romantico.avif", alt: "\xC1rboles iluminados en morado para boda exterior rom\xE1ntica" },
    { src: "/img/iluminacion-arquitectonica/iluminacion-boda-fachada-rosa-luces-colgantes-arboles-mesas.avif", alt: "Fachada rosa con luces colgantes y \xE1rboles iluminados" },
    { src: "/img/iluminacion-arquitectonica/boda-exterior-hacienda-luces-string-fachada-ambar-parejas-bailando.avif", alt: "Boda exterior en hacienda con fachada \xE1mbar y parejas bailando" },
    { src: "/img/iluminacion-arquitectonica/iluminacion-arcos-coloniales-luces-cadena-cielo-nocturno-hacienda.avif", alt: "Arcos coloniales con luces cadena bajo cielo nocturno" },
    { src: "/img/iluminacion-arquitectonica/iluminacion-arquitectonica-moderna-azul-turquesa-terraza-lounge.avif", alt: "Iluminaci\xF3n arquitect\xF3nica moderna azul turquesa en terraza lounge" },
    { src: "/img/iluminacion-arquitectonica/iluminacion-boda-hacienda-dosel-luces-fachada-rosa-flores.avif", alt: "Boda en hacienda con dosel de luces y fachada rosa" },
    { src: "/img/iluminacion-arquitectonica/iluminacion-boda-lujo-rosa-columnas-pista-baile-pastel.avif", alt: "Boda de lujo con columnas rosa y pista de baile" },
    { src: "/img/iluminacion-arquitectonica/iluminacion-camino-hacienda-mexicana-agaves-palmeras-entrada.avif", alt: "Camino de hacienda mexicana iluminado con agaves y palmeras" },
    { src: "/img/iluminacion-arquitectonica/iluminacion-boda-jardin-arboles-violeta-mesa-imperial-hacienda.avif", alt: "Jard\xEDn con \xE1rboles violeta y mesa imperial en hacienda" },
    { src: "/img/iluminacion-arquitectonica/equipo-reflectores-led-wash-calido-instalacion-profesional.avif", alt: "Equipo de reflectores LED wash c\xE1lido instalaci\xF3n profesional" }
  ] })} </div> </section>  <section class="services-section services-alt" id="paquetes"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "\xBFCu\xE1nto cuesta rentar iluminaci\xF3n arquitect\xF3nica en CDMX?", "subtitle": "4 opciones seg\xFAn lo que quieras iluminar. Reflectores inal\xE1mbricos.", "paragraph1": "Cada paquete incluye reflectores LED inal\xE1mbricos con bater\xEDa (sin cables en el piso), dise\xF1o de distribuci\xF3n seg\xFAn tu venue, montaje profesional y desmontaje. Los colores se controlan de forma inal\xE1mbrica o v\xEDa DMX seg\xFAn el modelo.", "paragraph2": "\xBFTu venue tiene una arquitectura especial? M\xE1ndanos fotos por WhatsApp y te dise\xF1amos la distribuci\xF3n de reflectores ideal." })} ${renderComponent($$result2, "PricingCards", $$PricingCards, { "packages": [
    {
      name: "B\xE1sico \u2014 6 Uplighters",
      price: "$3,500",
      priceNote: "+ IVA",
      description: "Fachada frontal o arco de ceremonia iluminado. El detalle que transforma la primera impresi\xF3n de tu venue.",
      features: [
        { text: "6 uplighters LED inal\xE1mbricos", included: true },
        { text: "Bater\xEDa hasta 12h (sin cables)", included: true },
        { text: "Color a tu elecci\xF3n (RGBW)", included: true },
        { text: "Transporte + montaje + desmontaje", included: true },
        { text: "Ideal para: fachada frontal, arco, entrada", included: true },
        { text: "Dise\xF1o de distribuci\xF3n incluido", included: true },
        { text: "M\xFAltiples zonas de color", included: false },
        { text: "Cambios de color durante el evento", included: false }
      ],
      ctaLabel: "Ver paquete 6 uplighters",
      ctaHref: "/servicios/iluminacion-arquitectonica/paquete-6-uplighters/"
    },
    {
      name: "Est\xE1ndar \u2014 12 Uplighters",
      price: "$6,000",
      priceNote: "+ IVA",
      badge: "M\xE1s popular",
      highlight: true,
      description: "Fachada completa + jard\xEDn con \xE1rboles. El m\xE1s pedido para bodas en haciendas coloniales.",
      features: [
        { text: "12 uplighters LED inal\xE1mbricos", included: true },
        { text: "Bater\xEDa hasta 12h (sin cables)", included: true },
        { text: "2 zonas de color independientes", included: true },
        { text: "Transporte + montaje + desmontaje", included: true },
        { text: "Fachada + \xE1rboles + columnas", included: true },
        { text: "Ideal para: bodas en hacienda, jardines", included: true },
        { text: "Dise\xF1o personalizado de distribuci\xF3n", included: true },
        { text: "Cambios de color durante el evento", included: false }
      ],
      ctaLabel: "Ver paquete 12 uplighters",
      ctaHref: "/servicios/iluminacion-arquitectonica/paquete-12-uplighters/"
    },
    {
      name: "Premium \u2014 20 Uplighters",
      price: "$9,500",
      priceNote: "+ IVA",
      description: "Hacienda completa: fachada, columnas, arcos, \xE1rboles, fuentes. M\xFAltiples zonas con paletas diferentes.",
      features: [
        { text: "20 uplighters LED con control DMX", included: true },
        { text: "4+ zonas de color independientes", included: true },
        { text: "Cambios de color durante el evento", included: true },
        { text: "Operador con control inal\xE1mbrico", included: true },
        { text: "Transporte + montaje + desmontaje", included: true },
        { text: "Visita previa al venue", included: true },
        { text: "Ideal para: haciendas completas, fincas", included: true },
        { text: "Dise\xF1o de iluminaci\xF3n personalizado", included: true }
      ],
      ctaLabel: "Ver paquete 20 uplighters",
      ctaHref: "/servicios/iluminacion-arquitectonica/paquete-20-uplighters/"
    },
    {
      name: "Producci\xF3n \u2014 30+ Uplighters",
      price: "$14,000",
      priceNote: "+ IVA",
      description: "Iluminaci\xF3n arquitect\xF3nica completa para venues grandes, edificios hist\xF3ricos y producciones especiales.",
      features: [
        { text: "30+ uplighters de alta potencia", included: true },
        { text: "Coreograf\xEDa de color programada", included: true },
        { text: "M\xFAltiples fachadas y zonas", included: true },
        { text: "Equipo t\xE9cnico completo", included: true },
        { text: "Sincronizaci\xF3n con otros servicios", included: true },
        { text: "Log\xEDstica + generadores si requerido", included: true },
        { text: "Visita t\xE9cnica previa", included: true },
        { text: "Ideal para: edificios hist\xF3ricos, mega venues", included: true }
      ],
      ctaLabel: "Ver producci\xF3n 30+",
      ctaHref: "/servicios/iluminacion-arquitectonica/paquete-produccion/"
    }
  ] })} </div> </section>  <section class="faq-section"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Preguntas frecuentes sobre iluminaci\xF3n arquitect\xF3nica", "subtitle": "Lo que nuestros clientes preguntan antes de contratar.", "paragraph1": "Si tienes otra duda, escr\xEDbenos por WhatsApp y te respondemos en minutos.", "paragraph2": "Cada venue tiene su arquitectura \u2014 te recomendamos la distribuci\xF3n de reflectores ideal para resaltar lo mejor de tu espacio." })} </div> ${renderComponent($$result2, "FaqSection", $$FaqSection, { "items": [
    { question: "\xBFDe verdad son inal\xE1mbricos?", answer: "S\xED. Bater\xEDa recargable interna de hasta 12 horas. Se ponen en el piso al pie de la columna o el \xE1rbol y no necesitan contacto el\xE9ctrico cerca. Sin cables cruzando el piso donde caminan los invitados. Es la raz\xF3n principal por la que funcionan en haciendas donde los contactos est\xE1n lejos." },
    { question: "\xBFCu\xE1ntos reflectores necesito?", answer: "Depende de qu\xE9 quieras iluminar. 6 uplighters cubren una fachada frontal con arcos. 12 cubren fachada + \xE1rboles del jard\xEDn. 20+ para una hacienda completa con m\xFAltiples fachadas, columnas y caminos. M\xE1ndanos fotos del venue y te decimos el n\xFAmero exacto." },
    { question: "\xBFPuedo cambiar colores durante la noche?", answer: "En paquetes Premium y Producci\xF3n con DMX, s\xED \u2014 el operador cambia colores en tiempo real. En los paquetes B\xE1sico y Est\xE1ndar, el color se fija al inicio del evento y se queda as\xED toda la noche. La mayor\xEDa de las bodas eligen un solo color (\xE1mbar o dorado) para toda la noche." },
    { question: "\xBFDa\xF1an las fachadas?", answer: "No. Los reflectores van en el piso apuntando hacia arriba. No se pegan, atornillan ni fijan a nada. Al terminar, los recogemos y el venue queda igual. Los encargados de haciendas ya conocen este sistema y lo prefieren sobre cualquier instalaci\xF3n invasiva." },
    { question: "\xBFFunciona bajo lluvia?", answer: "S\xED. Los reflectores tienen protecci\xF3n IP para exteriores. Operan bajo lluvia sin problema. De hecho, la superficie mojada refleja m\xE1s la luz y el efecto se ve m\xE1s intenso. Hemos montado en temporada de lluvias sin inconvenientes." },
    { question: "\xBFQu\xE9 color queda mejor en cantera?", answer: "\xC1mbar y dorado son los m\xE1s pedidos \u2014 resaltan la textura natural de la piedra. Violeta genera un contraste dram\xE1tico. Rosa es popular para bodas. Blanco fr\xEDo da un look m\xE1s moderno. Cada hacienda es diferente \u2014 si nos mandas fotos, te sugerimos la paleta." }
  ] })} </section>  <section class="services-section services-alt"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "\xBFQu\xE9 otros servicios combinan con iluminaci\xF3n arquitect\xF3nica?", "subtitle": "Columnas en \xE1mbar abajo, guirnaldas c\xE1lidas arriba.", "paragraph1": "Es la combinaci\xF3n m\xE1s montada en haciendas de CDMX: uplighting en las columnas del patio y guirnaldas Edison cruzando el techo entre los arcos. Las dos capas de luz crean un ambiente c\xE1lido donde cada foto sale bien sin necesidad de flash.", "paragraph2": "Si la hacienda tiene fachadas grandes, le sumamos city color para cubrir la superficie completa. El uplighting queda para los detalles (columnas, \xE1rboles, fuentes) y el city color para las paredes largas." })} <div class="services-grid"> ${serviciosRelacionados.map((s) => renderTemplate`${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "title": s.title, "image": s.image, "alt": s.alt, "description": s.description, "link": s.link })}`)} </div> </div> </section>  <section class="cta-section"> <div class="container"> <div class="cta-content"> <h2>¿Listo para que tu venue brille como nunca?</h2> <p>Mándanos fotos de las fachadas, columnas y jardines de tu venue. Te diseñamos la distribución de uplighting perfecta y te cotizamos en minutos.</p> <div class="cta-buttons"> <a href="/contacto/" class="btn btn-whatsapp btn-lg">Cotiza por WhatsApp</a> <a href="tel:+525530682988" class="btn btn-primary btn-lg">Llámanos — 55 3068 2988</a> </div> </div> </div> </section> ` })}`;
}, "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/pages/servicios/iluminacion-arquitectonica.astro", void 0);

const $$file = "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/pages/servicios/iluminacion-arquitectonica.astro";
const $$url = "/servicios/iluminacion-arquitectonica";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$IluminacionArquitectonica,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
