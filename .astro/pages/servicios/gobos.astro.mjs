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

const $$Gobos = createComponent(($$result, $$props, $$slots) => {
  const title = "Renta de Gobos Personalizados para Eventos CDMX | REDEIL";
  const description = "Gobos personalizados: nombres, logos y monogramas proyectados en pisos y paredes. Bodas, corporativos y XV a\xF1os en CDMX. Desde $2,500 + IVA.";
  const canonical = "https://rentadeiluminacion.com/servicios/gobos/";
  const schemaMarkup = JSON.stringify([
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Renta de Gobos para Eventos",
      "provider": {
        "@type": "LocalBusiness",
        "name": "REDEIL",
        "url": "https://rentadeiluminacion.com",
        "telephone": "+525530682988",
        "address": { "@type": "PostalAddress", "addressLocality": "Ciudad de M\xE9xico", "addressRegion": "CDMX", "addressCountry": "MX" }
      },
      "description": "Servicio profesional de renta de gobos y proyecci\xF3n personalizada de nombres, logos y monogramas para bodas, corporativos y eventos en CDMX.",
      "areaServed": [
        { "@type": "City", "name": "Ciudad de M\xE9xico" },
        { "@type": "State", "name": "Estado de M\xE9xico" }
      ],
      "serviceType": "Renta de Gobos",
      "priceRange": "$$"
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "\xBFQu\xE9 es un gobo?", "acceptedAnswer": { "@type": "Answer", "text": "Un gobo es una plantilla de metal o vidrio que se coloca dentro de un proyector profesional para proyectar un dise\xF1o \u2014 nombres de novios, logos de empresa, monogramas, patrones decorativos \u2014 en pisos, paredes y techos." } },
        { "@type": "Question", "name": "\xBFEl gobo se fabrica con mi dise\xF1o?", "acceptedAnswer": { "@type": "Answer", "text": "S\xED. Los gobos met\xE1licos se fabrican con tu dise\xF1o en silueta (1 color). Los gobos de vidrio permiten dise\xF1os full color con fotos y logotipos a color. Necesitamos tu dise\xF1o con 5-7 d\xEDas de anticipaci\xF3n para fabricarlo." } },
        { "@type": "Question", "name": "\xBFCu\xE1nto cuesta un gobo personalizado?", "acceptedAnswer": { "@type": "Answer", "text": "Un gobo met\xE1lico personalizado con proyector arranca desde $2,500 + IVA incluyendo la fabricaci\xF3n, el equipo y la instalaci\xF3n. Los gobos de vidrio full color desde $4,500 + IVA." } },
        { "@type": "Question", "name": "\xBFMe puedo quedar con el gobo despu\xE9s del evento?", "acceptedAnswer": { "@type": "Answer", "text": "S\xED. Los gobos personalizados son tuyos \u2014 te los entregamos despu\xE9s del evento. Es un recuerdo \xFAnico de tu boda o evento." } },
        { "@type": "Question", "name": "\xBFCon cu\xE1nto tiempo de anticipaci\xF3n debo pedir mi dise\xF1o de gobo?", "acceptedAnswer": { "@type": "Answer", "text": "Para gobos met\xE1licos necesitamos el dise\xF1o final con 5-7 d\xEDas h\xE1biles de anticipaci\xF3n. Para gobos de vidrio full color, 7-10 d\xEDas. Si necesitas ayuda con el dise\xF1o, nuestro equipo puede crearlo." } },
        { "@type": "Question", "name": "\xBFEn qu\xE9 superficies se puede proyectar?", "acceptedAnswer": { "@type": "Answer", "text": "La proyecci\xF3n funciona mejor en superficies claras y lisas \u2014 paredes blancas, pisos de m\xE1rmol, techos lisos. Tambi\xE9n se proyecta en superficies irregulares como fachadas de piedra para efectos m\xE1s art\xEDsticos." } }
      ]
    }
  ]);
  const serviciosRelacionados = [
    { title: "Cabezas M\xF3viles", image: "/img/cabezas-moviles/renta-cabezas-moviles-boda-beams-blancos-elegante-300w.avif", alt: "Cabezas m\xF3viles con beams", description: "Las cabezas Spot ya tienen gobos giratorios integrados. Combina proyecci\xF3n fija + din\xE1mica.", link: "/servicios/cabezas-moviles/" },
    { title: "Seguidor", image: "/img/seguidor/renta-luz-seguidor-boda-primer-baile-hmi-1200w-300w.avif", alt: "Seguidor de luz en vals", description: "Los nombres proyectados en la pista + spotlight siguiendo a los novios. El momento m\xE1s cinematogr\xE1fico.", link: "/servicios/seguidor/" },
    { title: "Iluminaci\xF3n Arquitect\xF3nica", image: "/img/iluminacion-arquitectonica/iluminacion-arquitectonica-arcos-coloniales-luz-violeta-fachada-300w.avif", alt: "Uplighting en arcos coloniales", description: "Uplighting en las columnas + nombre proyectado en la pista. Personalizaci\xF3n en toda la arquitectura.", link: "/servicios/iluminacion-arquitectonica/" },
    { title: "Cascadas LED", image: "/img/cascadas-led/cascadas-led-novios-mesa-romantica-boda-300w.avif", alt: "Cascadas LED para mesa de novios", description: "Backdrop de cascadas LED detr\xE1s de la mesa de novios + monograma en la pista. El duo perfecto para bodas.", link: "/servicios/cascadas-led/" }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "canonical": canonical, "schemaMarkup": schemaMarkup }, { "breadcrumbs": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "breadcrumbs" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Breadcrumbs", $$Breadcrumbs, { "items": [
    { label: "Inicio", href: "/" },
    { label: "Iluminaci\xF3n", href: "/servicios/iluminacion/" },
    { label: "Gobos" }
  ] })} ` })}`, "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, { "title": "Renta de Gobos y Proyecci\xF3n Personalizada en CDMX", "subtitle": "Nombres, logos y monogramas proyectados en pisos y paredes. Gobos met\xE1licos y de vidrio full color. Desde $2,500 + IVA.", "introParagraph1": "El gobo es una plantilla de metal o vidrio que se mete dentro de un proyector profesional y proyecta un dise\xF1o en cualquier superficie: piso, pared, techo. Para bodas, lo m\xE1s pedido son los nombres de los novios en la pista de baile. Para corporativos, el logo de la empresa en la pared del escenario. Usamos proyectores <strong>ETC Source Four</strong> y <strong>Martin RUSH</strong> de 575W a 1200W \u2014 la imagen se ve n\xEDtida a distancias de hasta 15 metros.", "introParagraph2": "Hay dos tipos: <strong>gobos met\xE1licos</strong> que proyectan siluetas en un solo color (nombres, iniciales, patrones) y <strong>gobos de vidrio</strong> que permiten dise\xF1os full color con fotos y logotipos con degradados. El met\xE1lico se fabrica en 5-7 d\xEDas h\xE1biles, el de vidrio en 7-10. Algo que la gente no siempre sabe: la proyecci\xF3n se ve mejor en superficies claras y lisas. En un piso de m\xE1rmol blanco, el nombre sale n\xEDtido. En un piso oscuro de madera, se pierde. Es lo primero que verificamos cuando nos preguntan. Despu\xE9s del evento, el gobo es tuyo." })} ${renderComponent($$result2, "CtaBar", $$CtaBar, { "headline": "\xBFQu\xE9 quieres proyectar?", "items": [
    { label: "Nombres en la Pista", href: "#paquetes", icon: "iluminacion" },
    { label: "Toda la iluminaci\xF3n", href: "/servicios/iluminacion/", icon: "iluminacion" },
    { label: "Ver paquetes", href: "#paquetes", icon: "iluminacion" },
    { label: "Cotiza Gratis", href: "/contacto/", icon: "cotizar" }
  ] })}  ${maybeRenderHead()}<section class="services-section"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "\xBFQu\xE9 se puede proyectar con gobos personalizados?", "subtitle": "Gobos met\xE1licos y de vidrio en pisos, paredes y techos.", "paragraph1": "La proyecci\xF3n se ajusta en tama\xF1o y enfoque seg\xFAn la distancia. Un proyector montado a 4 metros de altura produce una imagen de unos 80cm en el piso. Desde 8 metros, la imagen crece a 1.5-2 metros pero pierde algo de nitidez \u2014 el operador ajusta el foco para encontrar el balance.", "paragraph2": "En pisos claros (m\xE1rmol, porcelanato blanco) la imagen es n\xEDtida y contrastada. En pisos oscuros, se nota menos. Para paredes, funciona mejor en superficies lisas y de color claro. En piedra o ladrillo, el resultado es m\xE1s art\xEDstico \u2014 las texturas del muro se mezclan con el dise\xF1o." })} ${renderComponent($$result2, "Gallery4x4", $$Gallery4X4, { "images": [
    { src: "/img/gobos/renta-gobo-monograma-pista-baile.avif", alt: "Monograma de novios proyectado en pista de baile" },
    { src: "/img/gobos/gobo-proyeccion-monograma-boda-elegante.avif", alt: "Proyecci\xF3n de monograma elegante en boda" },
    { src: "/img/gobos/gobo-personalizado-proyeccion-logo-empresa.avif", alt: "Logo de empresa proyectado con gobo personalizado" },
    { src: "/img/gobos/gobo-personalizado-proyectar-logo-empresa.avif", alt: "Gobo personalizado proyectando logotipo corporativo" },
    { src: "/img/gobos/gobo-proyector-logo-empresa-corporativo.avif", alt: "Proyector de gobo con logo corporativo" },
    { src: "/img/gobos/gobos-eventos-proyectar-marca-personalizada.avif", alt: "Marca personalizada proyectada en evento" },
    { src: "/img/gobos/gobos-luz-proyectar-monograma-boda.avif", alt: "Luz proyectando monograma en boda" },
    { src: "/img/gobos/gobos-para-eventos-proyeccion-personalizada.avif", alt: "Proyecci\xF3n personalizada de gobos para eventos" },
    { src: "/img/gobos/proyeccion-gobo-empresa-iluminacion-marca.avif", alt: "Iluminaci\xF3n de marca con proyecci\xF3n de gobo" },
    { src: "/img/gobos/proyeccion-gobo-personalizado-evento-social.avif", alt: "Gobo personalizado en evento social" },
    { src: "/img/gobos/proyeccion-logotipo-gobo-fiesta-corporativa.avif", alt: "Logotipo proyectado en fiesta corporativa" },
    { src: "/img/gobos/proyector-gobo-logotipo-corporativo.avif", alt: "Proyector de gobo con logotipo corporativo" },
    { src: "/img/gobos/renta-gobo-logo-proyectado-fiesta.avif", alt: "Logo proyectado con gobo en fiesta" },
    { src: "/img/gobos/renta-gobos-personalizados-logo-evento.avif", alt: "Gobos personalizados con logo para evento" },
    { src: "/img/gobos/renta-proyeccion-gobos-monograma-boda.avif", alt: "Proyecci\xF3n de monograma con gobos en boda" },
    { src: "/img/gobos/alquiler-gobo-proyeccion-marca-empresa.avif", alt: "Alquiler de gobo con proyecci\xF3n de marca empresarial" }
  ] })} </div> </section>  <section class="services-section services-alt" id="paquetes"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "\xBFCu\xE1nto cuesta rentar gobos en CDMX?", "subtitle": "4 opciones seg\xFAn el tipo de dise\xF1o y cantidad de proyecciones.", "paragraph1": "Cada paquete incluye la fabricaci\xF3n del gobo personalizado, el proyector profesional, montaje, enfoque y desmontaje. Los gobos met\xE1licos se fabrican en 5-7 d\xEDas h\xE1biles y los de vidrio en 7-10 d\xEDas. Despu\xE9s del evento, las plantillas son tuyas.", "paragraph2": "\xBFNecesitas algo diferente? Armamos paquetes a la medida con m\xFAltiples proyecciones simult\xE1neas." })} ${renderComponent($$result2, "PricingCards", $$PricingCards, { "packages": [
    {
      name: "B\xE1sico \u2014 1 Gobo Met\xE1lico",
      price: "$2,500",
      priceNote: "+ IVA",
      description: "Un dise\xF1o en silueta proyectado en pista de baile o pared. El cl\xE1sico: nombres de los novios iluminados.",
      features: [
        { text: "1 gobo met\xE1lico personalizado", included: true },
        { text: "Proyector profesional 575W", included: true },
        { text: "Fabricaci\xF3n con tu dise\xF1o", included: true },
        { text: "Transporte + montaje + desmontaje", included: true },
        { text: "Proyecci\xF3n en piso o pared", included: true },
        { text: "Ideal para: nombres, iniciales, fecha", included: true },
        { text: "Full color", included: false },
        { text: "M\xFAltiples proyecciones", included: false }
      ],
      ctaLabel: "Cotizar 1 gobo",
      ctaHref: "/servicios/gobos/paquete-1-gobo/"
    },
    {
      name: "Est\xE1ndar \u2014 2 Gobos",
      price: "$4,500",
      priceNote: "+ IVA",
      badge: "M\xE1s popular",
      highlight: true,
      description: "Dos proyecciones: una en la pista de baile y otra en la entrada o pared. El m\xE1s pedido para bodas.",
      features: [
        { text: "2 gobos met\xE1licos personalizados", included: true },
        { text: "2 proyectores profesionales", included: true },
        { text: "Fabricaci\xF3n con tus dise\xF1os", included: true },
        { text: "Transporte + montaje + desmontaje", included: true },
        { text: "Proyecci\xF3n en pista + pared/entrada", included: true },
        { text: "Ideal para: bodas, XV a\xF1os, galas", included: true },
        { text: "Enfoque y posici\xF3n personalizada", included: true },
        { text: "Full color", included: false }
      ],
      ctaLabel: "Cotizar 2 gobos",
      ctaHref: "/servicios/gobos/paquete-2-gobos/"
    },
    {
      name: "Premium \u2014 4 Gobos Mixtos",
      price: "$7,500",
      priceNote: "+ IVA",
      description: "2 met\xE1licos + 2 de vidrio full color. Nombres en la pista, logo en la pared, patrones decorativos.",
      features: [
        { text: "2 gobos met\xE1licos + 2 de vidrio", included: true },
        { text: "Full color en gobos de vidrio", included: true },
        { text: "4 proyectores profesionales", included: true },
        { text: "Transporte + montaje + desmontaje", included: true },
        { text: "M\xFAltiples superficies de proyecci\xF3n", included: true },
        { text: "Dise\xF1o gr\xE1fico del gobo incluido", included: true },
        { text: "Ideal para: bodas premium, corporativos", included: true },
        { text: "Operador t\xE9cnico incluido", included: true }
      ],
      ctaLabel: "Cotizar paquete premium",
      ctaHref: "/servicios/gobos/paquete-4-gobos/"
    },
    {
      name: "Producci\xF3n \u2014 6+ Gobos",
      price: "$12,000",
      priceNote: "+ IVA",
      description: "Branding completo para corporativos y producciones. Logos a color, patrones y dise\xF1os en m\xFAltiples superficies.",
      features: [
        { text: "6+ gobos (met\xE1licos + vidrio)", included: true },
        { text: "Full color y dise\xF1os complejos", included: true },
        { text: "6+ proyectores de alta potencia", included: true },
        { text: "Dise\xF1o gr\xE1fico profesional incluido", included: true },
        { text: "Branding completo del venue", included: true },
        { text: "Equipo t\xE9cnico completo", included: true },
        { text: "Visita previa al venue", included: true },
        { text: "Ideal para: lanzamientos, galas, TV", included: true }
      ],
      ctaLabel: "Cotizar producci\xF3n",
      ctaHref: "/servicios/gobos/paquete-produccion/"
    }
  ] })} </div> </section>  <section class="faq-section"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Preguntas frecuentes sobre gobos personalizados", "subtitle": "Todo lo que necesitas saber sobre la proyecci\xF3n personalizada.", "paragraph1": "Si tienes otra duda, escr\xEDbenos por WhatsApp y te asesoramos en minutos.", "paragraph2": "Cada dise\xF1o es \xFAnico \u2014 te ayudamos a crear la proyecci\xF3n perfecta para tu evento." })} </div> ${renderComponent($$result2, "FaqSection", $$FaqSection, { "items": [
    { question: "\xBFCu\xE1nto tiempo antes necesitan mi dise\xF1o?", answer: "Gobos met\xE1licos: 5-7 d\xEDas h\xE1biles. Gobos de vidrio full color: 7-10 d\xEDas. Si no tienes dise\xF1o, nuestro equipo lo arma \u2014 solo necesitamos los nombres, la fecha y una idea del estilo. La fabricaci\xF3n no se puede apurar mucho porque es un proceso f\xEDsico de corte o impresi\xF3n en vidrio." },
    { question: "\xBFSe ve bien en pisos oscuros?", answer: "Poco. En m\xE1rmol blanco o porcelanato claro, el nombre se lee perfecto. En duela oscura o alfombra, la imagen se pierde. Es lo primero que preguntamos cuando nos contactan. Si el piso es oscuro, la alternativa es proyectar en pared o en una tela blanca como backdrop." },
    { question: "\xBFMet\xE1lico o de vidrio?", answer: "Met\xE1lico proyecta siluetas en un solo color \u2014 funciona para nombres, iniciales y patrones simples. M\xE1s econ\xF3mico. De vidrio permite fotos, logos a color, degradados. M\xE1s vers\xE1til pero m\xE1s caro y toma m\xE1s tiempo de fabricaci\xF3n. Para bodas, el met\xE1lico con los nombres de los novios es el m\xE1s pedido." },
    { question: "\xBFMe quedo con el gobo?", answer: "S\xED. Los gobos personalizados son tuyos \u2014 te los entregamos despu\xE9s del evento. Muchos clientes los enmarcan. El gobo met\xE1lico es un disco de acero con tu dise\xF1o calado. El de vidrio es un disco con la imagen impresa." },
    { question: "\xBFFunciona con las luces del sal\xF3n prendidas?", answer: "Se ve, pero menos. Entre m\xE1s oscuro el ambiente, m\xE1s contraste tiene la proyecci\xF3n. Durante el baile con las luces bajas es cuando mejor se ve. Con el sal\xF3n iluminado al 100%, el gobo se nota pero no brilla tanto." },
    { question: "\xBFPuedo proyectar una foto?", answer: "Con gobo de vidrio s\xED. Se pueden proyectar fotos, logotipos a color, escudos y dise\xF1os con detalle. La resoluci\xF3n depende del tama\xF1o de proyecci\xF3n \u2014 a imagen peque\xF1a se ve muy n\xEDtido, a imagen grande pierde algo de detalle fino." }
  ] })} </section>  <section class="services-section services-alt"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "\xBFQu\xE9 otros servicios combinan con gobos?", "subtitle": "Los nombres en la pista + spotlight siguiendo a los novios.", "paragraph1": "La combinaci\xF3n que m\xE1s nos piden para bodas: gobo con los nombres proyectados en la pista durante toda la noche + seguidor iluminando a los novios en el vals. El fot\xF3grafo encuadra a los novios bailando sobre sus propios nombres iluminados \u2014 es la foto m\xE1s compartida.", "paragraph2": "Para corporativos, gobo del logo en pared + PAR LED en colores de la marca + audio. Branding completo del escenario con un solo proveedor." })} <div class="services-grid"> ${serviciosRelacionados.map((s) => renderTemplate`${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "title": s.title, "image": s.image, "alt": s.alt, "description": s.description, "link": s.link })}`)} </div> </div> </section>  <section class="cta-section"> <div class="container"> <div class="cta-content"> <h2>¿Listo para personalizar tu evento con luz?</h2> <p>Mándanos tu diseño o dinos los nombres y la fecha. Te fabricamos el gobo y te cotizamos todo el servicio en minutos.</p> <div class="cta-buttons"> <a href="/contacto/" class="btn btn-whatsapp btn-lg">Envía tu Diseño</a> <a href="tel:+525530682988" class="btn btn-primary btn-lg">Llámanos — 55 3068 2988</a> </div> </div> </div> </section> ` })}`;
}, "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/pages/servicios/gobos.astro", void 0);

const $$file = "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/pages/servicios/gobos.astro";
const $$url = "/servicios/gobos";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Gobos,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
