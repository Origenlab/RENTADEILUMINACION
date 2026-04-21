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

const $$Bodas = createComponent(($$result, $$props, $$slots) => {
  const title = "Paquetes de Iluminaci\xF3n para Boda en CDMX | REDEIL";
  const description = "Guirnaldas, seguidor, cabezas m\xF3viles, humo bajo y city color para bodas en CDMX. Paquetes completos desde $8,000 + IVA. T\xE9cnico incluido.";
  const canonical = "https://rentadeiluminacion.com/servicios/bodas/";
  const schemaMarkup = JSON.stringify([
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Paquetes de Iluminaci\xF3n para Bodas",
      "provider": {
        "@type": "LocalBusiness",
        "name": "REDEIL",
        "url": "https://rentadeiluminacion.com",
        "telephone": "+525530682988",
        "address": { "@type": "PostalAddress", "addressLocality": "Ciudad de M\xE9xico", "addressRegion": "CDMX", "addressCountry": "MX" }
      },
      "description": "Paquetes completos de iluminaci\xF3n profesional para bodas en CDMX \u2014 guirnaldas edison, seguidor, cabezas m\xF3viles, humo bajo, city color y gobos monograma. Un solo proveedor para toda la luz de tu boda.",
      "areaServed": [
        { "@type": "City", "name": "Ciudad de M\xE9xico" },
        { "@type": "State", "name": "Estado de M\xE9xico" }
      ],
      "serviceType": "Paquetes de Iluminaci\xF3n para Bodas",
      "priceRange": "$$$"
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "\xBFQu\xE9 incluye un paquete de iluminaci\xF3n para boda?", "acceptedAnswer": { "@type": "Answer", "text": "Depende del paquete. Los b\xE1sicos incluyen guirnaldas edison y uplighters para la ceremonia. Los completos agregan seguidor para el vals, cabezas m\xF3viles para la fiesta, humo bajo para el primer baile y city color para ambientar paredes. Todos incluyen t\xE9cnico de iluminaci\xF3n, traslado, montaje y desmontaje." } },
        { "@type": "Question", "name": "\xBFHacen visita previa al venue?", "acceptedAnswer": { "@type": "Answer", "text": "S\xED. En los paquetes Premium y Producci\xF3n hacemos visita previa al venue para planificar la distribuci\xF3n de equipos, verificar tomas de corriente y dise\xF1ar el mapa de iluminaci\xF3n. En paquetes b\xE1sicos, trabajamos con fotos y planos del espacio." } },
        { "@type": "Question", "name": "\xBFPueden iluminar jardines y haciendas sin conexi\xF3n el\xE9ctrica?", "acceptedAnswer": { "@type": "Answer", "text": "S\xED. Contamos con generadores de energ\xEDa silenciosos para venues sin conexi\xF3n el\xE9ctrica o con capacidad limitada. El generador se coloca alejado del \xE1rea de celebraci\xF3n para que no genere ruido durante la ceremonia o el evento." } }
      ]
    }
  ]);
  const serviciosRelacionados = [
    { title: "Seguidor de Luz", image: "/img/seguidor/luz-seguidor-boda-baile-novios-salon-candil.avif", alt: "Seguidor iluminando vals de novios en sal\xF3n con candil", description: "El spotlight que sigue a los novios durante el vals, el brindis y la entrada. El elemento m\xE1s cinematogr\xE1fico de la iluminaci\xF3n de boda.", link: "/servicios/seguidor/" },
    { title: "Guirnaldas Edison", image: "/img/guirnaldas/guirnaldas-edison-hacienda-boda.avif", alt: "Guirnaldas edison decorando hacienda para boda", description: "Luz c\xE1lida y rom\xE1ntica que transforma jardines, haciendas y terrazas. El elemento decorativo m\xE1s solicitado para bodas en CDMX.", link: "/servicios/guirnaldas/" },
    { title: "Humo Bajo", image: "/img/humo-bajo/humo-bajo-primer-baile-boda-romantico.avif", alt: "Humo bajo en primer baile de boda rom\xE1ntico", description: "Niebla baja que cubre el piso durante el primer baile. El efecto visual m\xE1s rom\xE1ntico para el vals de los novios.", link: "/servicios/humo-bajo/" },
    { title: "Cabezas M\xF3viles", image: "/img/cabezas-moviles/renta-cabezas-moviles-boda-beams-blancos-elegante.avif", alt: "Cabezas m\xF3viles con beams blancos en boda elegante", description: "Show de luces din\xE1mico para la fiesta \u2014 beams, gobos con iniciales y wash de color. Elevan la pista de baile a nivel producci\xF3n.", link: "/servicios/cabezas-moviles/" }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "canonical": canonical, "schemaMarkup": schemaMarkup }, { "breadcrumbs": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "breadcrumbs" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Breadcrumbs", $$Breadcrumbs, { "items": [
    { label: "Inicio", href: "/" },
    { label: "Servicios", href: "/servicios/" },
    { label: "Paquetes de Iluminaci\xF3n para Bodas" }
  ] })} ` })}`, "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, { "title": "Paquetes de Iluminaci\xF3n Completa para Bodas en CDMX", "subtitle": "Guirnaldas + seguidor + cabezas m\xF3viles + humo bajo. Un solo proveedor para toda la iluminaci\xF3n de tu boda. Desde $8,000 + IVA.", "introParagraph1": 'La iluminaci\xF3n define el ambiente de una boda. No es lo mismo una hacienda con focos del venue que esa misma hacienda con <strong>guirnaldas edison cruzando el jard\xEDn, uplighters \xE1mbar en las columnas y un seguidor iluminando a los novios en el primer baile</strong>. La diferencia entre "bonita boda" y "la mejor boda del a\xF1o" casi siempre est\xE1 en la luz. En <strong>REDEIL</strong> dise\xF1amos paquetes de iluminaci\xF3n completa que cubren cada momento \u2014 desde la ceremonia hasta la fiesta \u2014 con un solo proveedor y un solo t\xE9cnico coordinando todo.', "introParagraph2": "Cada paquete combina los servicios de iluminaci\xF3n que mejor funcionan juntos: <strong>guirnaldas edison</strong> para ambiente c\xE1lido, <strong>seguidor</strong> para el vals y los momentos estelares, <strong>cabezas m\xF3viles</strong> para la fiesta, <strong>humo bajo</strong> para el primer baile, <strong>city color</strong> para ambientar paredes y <strong>gobos monograma</strong> con las iniciales de los novios. Cubrimos bodas en haciendas, jardines, salones, terrazas y rooftops en toda la CDMX y Estado de M\xE9xico. Montaje anticipado y prueba de luces antes de que lleguen los invitados." })} ${renderComponent($$result2, "CtaBar", $$CtaBar, { "headline": "\xBFQu\xE9 necesitas para la iluminaci\xF3n de tu boda?", "items": [
    { label: "Guirnaldas", href: "/servicios/guirnaldas/", icon: "iluminacion" },
    { label: "Seguidor", href: "/servicios/seguidor/", icon: "iluminacion" },
    { label: "Ver paquetes", href: "#paquetes", icon: "iluminacion" },
    { label: "Cotiza Gratis", href: "/contacto/", icon: "cotizar" }
  ] })}  ${maybeRenderHead()}<section class="services-section"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Iluminaci\xF3n en bodas reales en CDMX", "subtitle": "Guirnaldas, seguidor, cabezas m\xF3viles y humo bajo en haciendas, jardines y salones.", "paragraph1": "Cada boda tiene su personalidad y la luz debe reflejarla. Las guirnaldas edison en una hacienda colonial, el seguidor siguiendo a los novios en su vals, las cabezas m\xF3viles pintando la pista con colores durante la hora loca. Estos son montajes de iluminaci\xF3n reales que hemos operado en la CDMX.", "paragraph2": "Trabajamos con tu wedding planner y decorador para que la iluminaci\xF3n complemente la paleta de colores y el concepto visual de tu boda." })} ${renderComponent($$result2, "Gallery4x4", $$Gallery4X4, { "images": [
    { src: "/img/guirnaldas/guirnaldas-edison-hacienda-boda.avif", alt: "Guirnaldas edison iluminando hacienda para boda" },
    { src: "/img/guirnaldas/renta-guirnaldas-boda-hacienda-mexicana-guirnaldas-18.avif", alt: "Guirnaldas en hacienda mexicana para boda" },
    { src: "/img/seguidor/luz-seguidor-boda-baile-novios-salon-candil.avif", alt: "Seguidor iluminando baile de novios en sal\xF3n con candil" },
    { src: "/img/humo-bajo/humo-bajo-primer-baile-boda-romantico.avif", alt: "Humo bajo en primer baile de boda rom\xE1ntico" },
    { src: "/img/guirnaldas/renta-guirnaldas-boda-jardin-ceremonia-guirnaldas-05.avif", alt: "Guirnaldas en ceremonia de boda en jard\xEDn" },
    { src: "/img/cabezas-moviles/renta-cabezas-moviles-boda-beams-blancos-elegante.avif", alt: "Cabezas m\xF3viles con beams blancos en boda elegante" },
    { src: "/img/guirnaldas/renta-guirnaldas-baile-novios-hacienda-guirnaldas-41.avif", alt: "Baile de novios con guirnaldas en hacienda" },
    { src: "/img/humo-bajo/efecto-nubes-piso-boda-jardin.avif", alt: "Efecto de nubes en piso de boda en jard\xEDn" },
    { src: "/img/cabezas-moviles/renta-cabezas-moviles-boda-romantica-beams-suaves.avif", alt: "Cabezas m\xF3viles con beams suaves en boda rom\xE1ntica" },
    { src: "/img/seguidor/luz-seguidor-boda-entrada-novios-confeti-puerta.avif", alt: "Seguidor iluminando entrada de novios con confeti" },
    { src: "/img/guirnaldas/renta-guirnaldas-boda-arco-floral-pergola-13.avif", alt: "Guirnaldas en arco floral y p\xE9rgola de boda" },
    { src: "/img/humo-bajo/humo-bajo-vals-boda-pista-luz.avif", alt: "Humo bajo en vals de boda con pista iluminada" },
    { src: "/img/cabezas-moviles/renta-cabezas-moviles-boda-hacienda-gobos-cielo.avif", alt: "Cabezas m\xF3viles con gobos en hacienda de boda" },
    { src: "/img/guirnaldas/renta-guirnaldas-ceremonia-atardecer-jardin-12.avif", alt: "Guirnaldas en ceremonia al atardecer en jard\xEDn" },
    { src: "/img/seguidor/luz-seguidor-boda-salon-candelabros-baile-novios.avif", alt: "Seguidor en baile de novios en sal\xF3n con candelabros" },
    { src: "/img/cabezas-moviles/renta-cabezas-moviles-gobo-monograma-boda-salon.avif", alt: "Gobo monograma proyectado en sal\xF3n de boda" }
  ] })} </div> </section>  <section class="services-section services-alt" id="paquetes"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Paquetes de Iluminaci\xF3n para Bodas", "subtitle": "Desde ceremonia \xEDntima hasta producci\xF3n completa. T\xE9cnico de iluminaci\xF3n incluido.", "paragraph1": "Cada paquete incluye equipo profesional, t\xE9cnico de iluminaci\xF3n, traslado, montaje anticipado y desmontaje. El t\xE9cnico opera las luces en vivo \u2014 cada cambio de escena, cada momento del protocolo, coordinado con el DJ y el maestro de ceremonias.", "paragraph2": "\xBFTu boda tiene un concepto espec\xEDfico? Personalizamos cualquier paquete con colores, gobos con iniciales y efectos adicionales." })} ${renderComponent($$result2, "PricingCards", $$PricingCards, { "packages": [
    {
      name: "Iluminaci\xF3n Ceremonia",
      price: "$5,500",
      priceNote: "+ IVA",
      description: "Iluminaci\xF3n c\xE1lida y elegante para la ceremonia y cena. Uplighters + guirnaldas que transforman el espacio.",
      features: [
        { text: "8 uplighters LED \xE1mbar/c\xE1lido", included: true },
        { text: "Guirnaldas edison (30m lineales)", included: true },
        { text: "T\xE9cnico de iluminaci\xF3n incluido", included: true },
        { text: "Montaje anticipado + desmontaje", included: true },
        { text: "Ideal para: ceremonias \xEDntimas, cenas", included: true },
        { text: "Seguidor para el vals", included: false },
        { text: "Cabezas m\xF3viles para fiesta", included: false },
        { text: "Humo bajo para primer baile", included: false }
      ],
      ctaLabel: "Cotizar iluminaci\xF3n ceremonia",
      ctaHref: "/contacto/"
    },
    {
      name: "Boda Rom\xE1ntica",
      price: "$12,000",
      priceNote: "+ IVA",
      badge: "M\xE1s popular",
      highlight: true,
      description: "Guirnaldas + seguidor + humo bajo. La combinaci\xF3n perfecta para bodas que quieren ese toque cinematogr\xE1fico.",
      features: [
        { text: "Guirnaldas edison (50m lineales)", included: true },
        { text: "Seguidor profesional para vals y momentos clave", included: true },
        { text: "Humo bajo para primer baile", included: true },
        { text: "12 uplighters LED en paleta de tu boda", included: true },
        { text: "T\xE9cnico de iluminaci\xF3n toda la noche", included: true },
        { text: "Coordinaci\xF3n con DJ y wedding planner", included: true },
        { text: "Montaje anticipado + prueba de luces", included: true },
        { text: "Ideal para: bodas 100-200 personas", included: true }
      ],
      ctaLabel: "Cotizar boda rom\xE1ntica",
      ctaHref: "/contacto/"
    },
    {
      name: "Boda Premium",
      price: "$18,000",
      priceNote: "+ IVA",
      description: "Todo lo anterior + cabezas m\xF3viles + city color + gobos monograma. Producci\xF3n visual de nivel revista.",
      features: [
        { text: "Todo lo incluido en Boda Rom\xE1ntica", included: true },
        { text: "4 cabezas m\xF3viles beam/wash", included: true },
        { text: "City color para paredes y fachada", included: true },
        { text: "Gobo monograma con iniciales de los novios", included: true },
        { text: "Dise\xF1o de iluminaci\xF3n personalizado", included: true },
        { text: "Visita previa al venue", included: true },
        { text: "2 t\xE9cnicos de iluminaci\xF3n", included: true },
        { text: "Ideal para: bodas 200-350 personas", included: true }
      ],
      ctaLabel: "Cotizar boda premium",
      ctaHref: "/contacto/"
    },
    {
      name: "Producci\xF3n Boda",
      price: "$28,000",
      priceNote: "+ IVA",
      description: "Producci\xF3n completa de iluminaci\xF3n: todo el cat\xE1logo de luz + t\xE9cnico dedicado + dise\xF1o art\xEDstico integral.",
      features: [
        { text: "Todo lo incluido en Boda Premium", included: true },
        { text: "8+ cabezas m\xF3viles para show de luces", included: true },
        { text: "Guirnaldas ilimitadas (100m+ lineales)", included: true },
        { text: "Bola disco + efectos especiales", included: true },
        { text: "Director de iluminaci\xF3n dedicado", included: true },
        { text: "Generador de energ\xEDa si es necesario", included: true },
        { text: "Dise\xF1o art\xEDstico integral del venue", included: true },
        { text: "Ideal para: bodas 350+ personas", included: true }
      ],
      ctaLabel: "Cotizar producci\xF3n completa",
      ctaHref: "/contacto/"
    }
  ] })} </div> </section>  <section class="faq-section"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Preguntas sobre Iluminaci\xF3n para Bodas", "subtitle": "Todo lo que necesitas saber antes de contratar.", "paragraph1": "Si tienes otra duda, escr\xEDbenos por WhatsApp y te respondemos en minutos.", "paragraph2": "Te asesoramos seg\xFAn tu venue, estilo de boda y presupuesto para armar el paquete ideal." })} </div> ${renderComponent($$result2, "FaqSection", $$FaqSection, { "items": [
    { question: "\xBFQu\xE9 incluye un paquete de iluminaci\xF3n para boda?", answer: "Depende del paquete. Los b\xE1sicos incluyen guirnaldas edison y uplighters para la ceremonia y cena. Los intermedios agregan seguidor para el vals y humo bajo para el primer baile. Los premium incluyen cabezas m\xF3viles, city color, gobos monograma y producci\xF3n completa. Todos incluyen t\xE9cnico de iluminaci\xF3n, traslado, montaje anticipado y desmontaje." },
    { question: "\xBFHacen visita previa al venue?", answer: "S\xED. En los paquetes Premium y Producci\xF3n hacemos visita previa al venue para planificar la distribuci\xF3n de equipos, verificar tomas de corriente y dise\xF1ar el mapa de iluminaci\xF3n seg\xFAn la arquitectura del espacio. En paquetes b\xE1sicos, trabajamos con fotos y planos que nos env\xEDes." },
    { question: "\xBFPueden iluminar jardines y haciendas sin conexi\xF3n el\xE9ctrica?", answer: "S\xED. Contamos con generadores de energ\xEDa silenciosos para venues sin conexi\xF3n el\xE9ctrica o con capacidad limitada. El generador se coloca alejado del \xE1rea de celebraci\xF3n para que no genere ruido durante la ceremonia. Las guirnaldas son de bajo consumo y funcionan perfectamente con generador." },
    { question: "\xBFEl seguidor sigue a los novios toda la noche?", answer: "El seguidor se usa en los momentos clave: entrada de los novios, primer vals, baile padre-hija/madre-hijo, brindis, corte de pastel y momentos que t\xFA definas. Entre momentos, el t\xE9cnico apaga el seguidor para que la atenci\xF3n fluya naturalmente. Es m\xE1s impactante cuando se usa estrat\xE9gicamente." },
    { question: "\xBFPueden coordinar los colores con mi decoraci\xF3n?", answer: "Siempre. Los uplighters LED y el city color son RGB \u2014 podemos programar exactamente los colores de tu paleta de boda. El t\xE9cnico ajusta los tonos durante el montaje para que la luz complemente flores, manteles y centros de mesa. Si tu wedding planner tiene un moodboard, lo usamos como referencia." },
    { question: "\xBFCu\xE1nto tiempo antes montan el equipo?", answer: "Montamos 3-4 horas antes del evento. Las guirnaldas se instalan por la ma\xF1ana si el venue lo permite. Hacemos prueba de luces completa antes de que lleguen los invitados. El t\xE9cnico permanece toda la noche operando las transiciones de iluminaci\xF3n en vivo, coordinado con el DJ." }
  ] })} </section>  <section class="services-section services-alt"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Servicios de Iluminaci\xF3n Individual para Bodas", "subtitle": "\xBFSolo necesitas un servicio? Cotiza por separado.", "paragraph1": "Si ya tienes parte de la iluminaci\xF3n resuelta y solo necesitas el seguidor para el vals o las guirnaldas para el jard\xEDn, cada servicio se cotiza individualmente. Tambi\xE9n puedes armar tu propio paquete combinando los que necesites.", "paragraph2": "Cada servicio individual incluye equipo, t\xE9cnico, traslado y montaje." })} <div class="services-grid"> ${serviciosRelacionados.map((s) => renderTemplate`${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "title": s.title, "image": s.image, "alt": s.alt, "description": s.description, "link": s.link })}`)} </div> </div> </section>  <section class="cta-section"> <div class="container"> <div class="cta-content"> <h2>¿Lista para diseñar la iluminación de tu boda?</h2> <p>Cuéntanos sobre tu venue, la fecha y el estilo de tu boda. Te armamos el paquete de iluminación perfecto en minutos.</p> <div class="cta-buttons"> <a href="/contacto/" class="btn btn-whatsapp btn-lg">Cotiza por WhatsApp</a> <a href="tel:+525530682988" class="btn btn-primary btn-lg">Llámanos — 55 3068 2988</a> </div> </div> </div> </section> ` })}`;
}, "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/pages/servicios/bodas.astro", void 0);

const $$file = "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/pages/servicios/bodas.astro";
const $$url = "/servicios/bodas";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Bodas,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
