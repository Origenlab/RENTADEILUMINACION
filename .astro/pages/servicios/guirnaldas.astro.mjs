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

const $$Guirnaldas = createComponent(($$result, $$props, $$slots) => {
  const title = "Renta de Guirnaldas Edison para Bodas en CDMX | REDEIL";
  const description = "Guirnaldas con focos Edison para bodas, XV a\xF1os y eventos al aire libre en CDMX. IP65. Instalaci\xF3n incluida. Desde $3,500 + IVA.";
  const canonical = "https://rentadeiluminacion.com/servicios/guirnaldas/";
  const schemaMarkup = JSON.stringify([
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Renta de Guirnaldas de Luces para Eventos",
      "provider": {
        "@type": "LocalBusiness",
        "name": "REDEIL",
        "url": "https://rentadeiluminacion.com",
        "telephone": "+525530682988",
        "address": { "@type": "PostalAddress", "addressLocality": "Ciudad de M\xE9xico", "addressRegion": "CDMX", "addressCountry": "MX" }
      },
      "description": "Alquiler de guirnaldas de luces con focos Edison vintage y LED para bodas, fiestas y eventos en CDMX y Estado de M\xE9xico. Instalaci\xF3n profesional incluida.",
      "areaServed": [
        { "@type": "City", "name": "Ciudad de M\xE9xico" },
        { "@type": "State", "name": "Estado de M\xE9xico" }
      ],
      "serviceType": "Renta de Guirnaldas de Luces",
      "priceRange": "$$"
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "\xBFCu\xE1ntos metros de guirnaldas necesito para mi evento?", "acceptedAnswer": { "@type": "Answer", "text": "Depende del espacio. Para un jard\xEDn de 100m\xB2 recomendamos entre 50 y 80 metros lineales. Para una terraza o p\xE9rgola, 30-50 metros. Para una carpa completa, 80-150 metros seg\xFAn el tama\xF1o." } },
        { "@type": "Question", "name": "\xBFCu\xE1nto cuesta la renta de guirnaldas?", "acceptedAnswer": { "@type": "Answer", "text": "El precio depende de los metros lineales y el tipo de foco. Un paquete b\xE1sico para jard\xEDn arranca desde $3,500 MXN. Para bodas completas con 100+ metros, cotiza por WhatsApp para un precio personalizado." } },
        { "@type": "Question", "name": "\xBFLa instalaci\xF3n est\xE1 incluida?", "acceptedAnswer": { "@type": "Answer", "text": "S\xED, siempre. El servicio incluye transporte, montaje profesional, operaci\xF3n durante el evento y desmontaje al finalizar." } },
        { "@type": "Question", "name": "\xBFLas guirnaldas funcionan bajo lluvia?", "acceptedAnswer": { "@type": "Answer", "text": "S\xED. Nuestras guirnaldas cuentan con certificaci\xF3n IP65 \u2014 resistentes a lluvia y humedad. El cableado y las conexiones est\xE1n protegidos para uso en exteriores. Hemos montado en temporada de lluvias sin ning\xFAn problema." } },
        { "@type": "Question", "name": "\xBFCon cu\xE1nta anticipaci\xF3n debo reservar?", "acceptedAnswer": { "@type": "Answer", "text": "Idealmente 2-3 semanas antes. En temporada alta (noviembre-enero y mayo-junio) las fechas se llenan r\xE1pido. Para garantizar disponibilidad, entre antes reserves mejor." } },
        { "@type": "Question", "name": "\xBFPuedo elegir entre focos Edison LED y vintage?", "acceptedAnswer": { "@type": "Answer", "text": "S\xED. Las bombillas Edison LED tienen la misma est\xE9tica vintage con luz c\xE1lida y tono \xE1mbar, pero consumen menos energ\xEDa \u2014 ideales para montajes largos. Los focos vintage de filamento dan un brillo m\xE1s natural y org\xE1nico. Mismo precio en ambas opciones." } }
      ]
    }
  ]);
  const serviciosRelacionados = [
    { title: "Iluminaci\xF3n Arquitect\xF3nica", image: "/img/iluminacion-arquitectonica/boda-patio-hacienda-iluminacion-fachada-ambar-string-lights-baile-400w.avif", alt: "Uplighting en hacienda con string lights", description: "Guirnaldas en el techo + uplighting en las columnas. La combinaci\xF3n m\xE1s solicitada para bodas en hacienda.", link: "/servicios/iluminacion-arquitectonica/" },
    { title: "Seguidor de Luz", image: "/img/seguidor/renta-luz-seguidor-boda-primer-baile-hmi-1200w-300w.avif", alt: "Seguidor de luz en primer baile", description: "Guirnaldas creando el ambiente c\xE1lido + spotlight siguiendo a los novios en el vals. La boda perfecta.", link: "/servicios/seguidor/" },
    { title: "Cascadas LED", image: "/img/cascadas-led/cascadas-led-novios-mesa-romantica-boda-300w.avif", alt: "Cascadas LED para mesa de novios", description: "Guirnaldas en el techo + cascadas LED detr\xE1s de la mesa de novios. El backdrop que todos fotograf\xEDan.", link: "/servicios/cascadas-led/" },
    { title: "Gobos", image: "/img/gobos/renta-gobo-monograma-pista-baile-300w.avif", alt: "Gobo proyectando monograma en pista", description: "Guirnaldas ambientando el jard\xEDn + nombres de los novios proyectados en la pista. Detalles que marcan la diferencia.", link: "/servicios/gobos/" }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "canonical": canonical, "schemaMarkup": schemaMarkup }, { "breadcrumbs": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "breadcrumbs" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Breadcrumbs", $$Breadcrumbs, { "items": [
    { label: "Inicio", href: "/" },
    { label: "Iluminaci\xF3n", href: "/servicios/iluminacion/" },
    { label: "Guirnaldas" }
  ] })} ` })}`, "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, { "title": "Renta de Guirnaldas de Luces para Bodas y Eventos en CDMX", "subtitle": "Focos Edison vintage y LED. Certificaci\xF3n IP65 para exteriores. Instalaci\xF3n profesional incluida. Desde $3,500.", "introParagraph1": "Las guirnaldas con focos Edison son lo que m\xE1s montamos en bodas al aire libre. Jardines en Coyoac\xE1n, haciendas en Huixquilucan, terrazas en Condesa, carpas en Tepotzotl\xE1n. La regla para calcular metros es sencilla: multiplica el largo de tu espacio por 1.5 si quieres l\xEDneas paralelas, o por 2 si quieres cruce en zigzag. Un jard\xEDn de 100m\xB2 lleva entre 50 y 80 metros. En <strong>REDEIL</strong> llevamos m\xE1s de 500 montajes con guirnaldas, y sabemos que lo que hace la diferencia no es la cantidad de focos sino la altura y el \xE1ngulo de cada l\xEDnea.", "introParagraph2": "Todo el cableado es IP65, certificado para lluvia. Hemos montado en plena temporada de lluvias en julio sin un solo corto. Ofrecemos dos tipos de foco: Edison LED de bajo consumo (mismo tono \xE1mbar, aguantan montajes largos de 8+ horas sin calentarse) y bombillas vintage de filamento real (brillo m\xE1s c\xE1lido y org\xE1nico, pero consumen m\xE1s). Mismo precio en ambas. El servicio incluye transporte, instalaci\xF3n profesional, operaci\xF3n y desmontaje. Nos coordinamos con tu wedding planner o decorador para que el montaje coincida con la distribuci\xF3n de mesas y el flujo del evento." })} ${renderComponent($$result2, "CtaBar", $$CtaBar, { "headline": "\xBFPara qu\xE9 tipo de evento necesitas guirnaldas?", "items": [
    { label: "Bodas", href: "/eventos/bodas/", icon: "iluminacion" },
    { label: "Toda la iluminaci\xF3n", href: "/servicios/iluminacion/", icon: "iluminacion" },
    { label: "XV A\xF1os", href: "/eventos/xv-anos/", icon: "iluminacion" },
    { label: "Cotiza Ahora", href: "/contacto/", icon: "cotizar" }
  ] })}  ${maybeRenderHead()}<section class="services-section"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "\xBFQu\xE9 tipo de guirnaldas incluye la renta?", "subtitle": "LED o filamento. Misma est\xE9tica, distinto consumo.", "paragraph1": "Los focos Edison LED producen el mismo tono \xE1mbar c\xE1lido que los de filamento, pero consumen un tercio de la energ\xEDa. Eso importa cuando montas 200 metros de guirnaldas en una hacienda con planta de luz limitada. Los de filamento vintage dan un brillo que oscila ligeramente, m\xE1s parecido a una vela. La diferencia es sutil, pero los fot\xF3grafos la notan.", "paragraph2": "Las dos opciones llevan cableado IP65 y funcionan bajo lluvia. Lo que cambia es la durabilidad: los LED no se calientan aunque est\xE9n encendidos 10 horas, los de filamento s\xED se calientan y ocasionalmente hay que reemplazar uno durante el evento. Llevamos focos de repuesto siempre." })} ${renderComponent($$result2, "Gallery4x4", $$Gallery4X4, { "images": [
    { src: "/img/guirnaldas/guirnaldas-edison-hacienda-boda.avif", alt: "Guirnaldas Edison iluminando hacienda para boda" },
    { src: "/img/guirnaldas/guirnaldas-exterior-jardin-boda.avif", alt: "Guirnaldas vintage en jard\xEDn exterior para boda" },
    { src: "/img/guirnaldas/guirnaldas-focos-edison-eventos.avif", alt: "Focos Edison vintage para eventos nocturnos" },
    { src: "/img/guirnaldas/guirnaldas-luz-calida-fiestas.avif", alt: "Guirnaldas con luz c\xE1lida \xE1mbar para fiestas" },
    { src: "/img/guirnaldas/renta-guirnaldas-ceremonia-boda-pergola-focos-edison-15.avif", alt: "P\xE9rgola con focos Edison para ceremonia r\xFAstica" },
    { src: "/img/guirnaldas/renta-guirnaldas-boda-exterior-guirnaldas-arco-floral-07.avif", alt: "Arco floral con guirnaldas para boda al aire libre" },
    { src: "/img/guirnaldas/renta-guirnaldas-ceremonia-boda-guirnaldas-edison-06.avif", alt: "Ceremonia iluminada con guirnaldas Edison" },
    { src: "/img/guirnaldas/renta-guirnaldas-boda-jardin-ceremonia-guirnaldas-05.avif", alt: "Jard\xEDn decorado con guirnaldas vintage" },
    { src: "/img/guirnaldas/renta-guirnaldas-baile-novios-hacienda-guirnaldas-41.avif", alt: "Baile de novios en hacienda bajo guirnaldas" },
    { src: "/img/guirnaldas/renta-guirnaldas-boda-patio-colonial-guirnaldas-21.avif", alt: "Patio colonial con guirnaldas para recepci\xF3n" },
    { src: "/img/guirnaldas/renta-guirnaldas-brindis-boda-guirnaldas-exterior-14.avif", alt: "Brindis de boda con guirnaldas c\xE1lidas" },
    { src: "/img/guirnaldas/luces-decorativas-eventos-cdmx.avif", alt: "Luces decorativas vintage para eventos CDMX" },
    { src: "/img/guirnaldas/guirnaldas-led-fiestas-cdmx.avif", alt: "Guirnaldas LED para fiestas en CDMX" },
    { src: "/img/guirnaldas/renta-guirnaldas-ceremonia-atardecer-jardin-12.avif", alt: "Guirnaldas Edison al atardecer en jard\xEDn" },
    { src: "/img/guirnaldas/guirnaldas-decoracion-xv-anos.avif", alt: "Guirnaldas decorativas para XV a\xF1os" },
    { src: "/img/guirnaldas/renta-guirnaldas-bodas-cdmx.avif", alt: "Renta de guirnaldas para bodas CDMX" }
  ] })} </div> </section>  <section class="services-section services-alt"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "\xBFCu\xE1nto cuesta rentar guirnaldas en CDMX?", "subtitle": "Desde una p\xE9rgola chica hasta un festival de 500+ personas.", "paragraph1": "Cada paquete incluye focos Edison (LED o filamento a tu elecci\xF3n), cableado IP65, transporte, montaje, operaci\xF3n durante el evento y desmontaje. El precio ya incluye todo, no hay cargo extra por instalaci\xF3n ni por planta de luz si tu venue la necesita.", "paragraph2": "Si tu evento no encaja en estos paquetes, armamos uno a la medida. M\xE1ndanos fotos del venue por WhatsApp y te respondemos con una propuesta en menos de 24 horas." })} ${renderComponent($$result2, "PricingCards", $$PricingCards, { "packages": [
    {
      name: "B\xE1sico \u2014 50 metros",
      price: "$3,500",
      priceNote: "+ IVA",
      description: "Perfecto para terrazas peque\xF1as, p\xE9rgolas y ceremonias \xEDntimas de hasta 50 invitados.",
      features: [
        { text: "50 metros lineales de guirnaldas", included: true },
        { text: "Focos Edison LED o vintage", included: true },
        { text: "Certificaci\xF3n IP65 exteriores", included: true },
        { text: "Transporte + montaje + desmontaje", included: true },
        { text: "Dise\xF1o de distribuci\xF3n incluido", included: true },
        { text: "Ideal para: p\xE9rgola, terraza, ceremonia", included: true },
        { text: "Asesor\xEDa personalizada", included: false },
        { text: "Dimmer para control de intensidad", included: false }
      ],
      ctaLabel: "Ver paquete 50 metros",
      ctaHref: "/servicios/guirnaldas/paquete-50-metros/"
    },
    {
      name: "Est\xE1ndar \u2014 100 metros",
      ctaHref: "/servicios/guirnaldas/paquete-100-metros/",
      price: "$6,500",
      priceNote: "+ IVA",
      badge: "M\xE1s popular",
      highlight: true,
      description: "El m\xE1s pedido para bodas en jard\xEDn. Cubre el \xE1rea de ceremonia + recepci\xF3n para hasta 120 invitados.",
      features: [
        { text: "100 metros lineales de guirnaldas", included: true },
        { text: "Focos Edison LED o vintage", included: true },
        { text: "Certificaci\xF3n IP65 exteriores", included: true },
        { text: "Transporte + montaje + desmontaje", included: true },
        { text: "Dise\xF1o de distribuci\xF3n incluido", included: true },
        { text: "Ideal para: bodas, jardines, haciendas", included: true },
        { text: "Asesor\xEDa personalizada de montaje", included: true },
        { text: "Dimmer para control de intensidad", included: false }
      ],
      ctaLabel: "Ver paquete 100 metros"
    },
    {
      name: "Premium \u2014 200 metros",
      ctaHref: "/servicios/guirnaldas/paquete-200-metros/",
      price: "$11,500",
      priceNote: "+ IVA",
      description: "Para bodas grandes y eventos corporativos. Cubre \xE1reas amplias con iluminaci\xF3n completa para 200+ invitados.",
      features: [
        { text: "200 metros lineales de guirnaldas", included: true },
        { text: "Focos Edison LED o vintage", included: true },
        { text: "Certificaci\xF3n IP65 exteriores", included: true },
        { text: "Transporte + montaje + desmontaje", included: true },
        { text: "Dise\xF1o personalizado del montaje", included: true },
        { text: "Ideal para: haciendas, fincas, eventos grandes", included: true },
        { text: "Asesor\xEDa en sitio antes del evento", included: true },
        { text: "Dimmer para control de intensidad", included: true }
      ],
      ctaLabel: "Ver paquete 200 metros"
    },
    {
      name: "Producci\xF3n \u2014 500 metros",
      ctaHref: "/servicios/guirnaldas/paquete-500-metros/",
      price: "$24,000",
      priceNote: "+ IVA",
      description: "Producci\xF3n completa para festivales, ferias, eventos masivos y venues de gran escala con 500+ invitados.",
      features: [
        { text: "500 metros lineales de guirnaldas", included: true },
        { text: "Focos Edison LED o vintage", included: true },
        { text: "Certificaci\xF3n IP65 exteriores", included: true },
        { text: "Transporte + montaje + desmontaje", included: true },
        { text: "Dise\xF1o personalizado + visita previa", included: true },
        { text: "Ideal para: festivales, ferias, venues grandes", included: true },
        { text: "Asesor\xEDa en sitio + prueba de iluminaci\xF3n", included: true },
        { text: "Dimmer + plantas de luz si se requiere", included: true }
      ],
      ctaLabel: "Ver paquete 500 metros"
    }
  ] })} </div> </section>  <section class="faq-section"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Preguntas frecuentes sobre renta de guirnaldas", "subtitle": "Lo que todos preguntan antes de cotizar.", "paragraph1": "Si tienes otra duda sobre la renta de guirnaldas, escr\xEDbenos por WhatsApp y te respondemos en minutos.", "paragraph2": "Cada espacio es diferente \u2014 por eso hacemos propuestas a la medida con el n\xFAmero exacto de metros que necesitas." })} </div> ${renderComponent($$result2, "FaqSection", $$FaqSection, { "items": [
    { question: "\xBFCu\xE1ntos metros de guirnaldas necesito?", answer: "Depende de c\xF3mo quieras distribuirlas. La regla r\xE1pida: multiplica el largo de tu espacio por 1.5 para l\xEDneas paralelas, o por 2 para cruce en zigzag. Un jard\xEDn de 100m\xB2 lleva entre 50 y 80 metros lineales. Una p\xE9rgola de 4x6m, unos 30 metros. Una carpa grande, 80-150 metros. M\xE1ndanos fotos de tu venue y te calculamos el metraje exacto." },
    { question: "\xBFCu\xE1nto cuesta la renta?", answer: "Desde $3,500 para 50 metros (p\xE9rgola o terraza chica). Una boda est\xE1ndar con 100 metros sale $6,500. Bodas grandes con 200+ metros, $11,500. Todo incluido: focos, cableado IP65, transporte, montaje y desmontaje. Cotiza por WhatsApp con fotos de tu espacio y te damos precio exacto." },
    { question: "\xBFFuncionan bajo lluvia?", answer: "S\xED. Todo el cableado y las conexiones son IP65, certificados para lluvia directa. Hemos montado en julio y agosto en plena temporada de lluvias sin un solo problema. Lo \xFAnico que cambia con lluvia es que los focos de filamento se ven todav\xEDa mejor porque el agua refleja la luz." },
    { question: "\xBFCu\xE1l es la diferencia entre focos LED y filamento?", answer: "Los Edison LED producen el mismo tono \xE1mbar pero consumen un tercio de la energ\xEDa y no se calientan, ideales para montajes largos o venues con planta de luz limitada. Los de filamento real dan un brillo que oscila ligeramente, m\xE1s parecido a una vela. Mismo precio. La diferencia es sutil en persona, pero los fot\xF3grafos suelen preferir el filamento." },
    { question: "\xBFC\xF3mo se instalan en jardines sin postes?", answer: "Llevamos postes telesc\xF3picos de aluminio que clavamos o lastramos con base de arena. En haciendas usamos las columnas y vigas existentes. En carpas, las guirnaldas van tensadas entre los postes de la estructura. El montaje toma 2-4 horas seg\xFAn la cantidad de metros. Llegamos temprano para que todo est\xE9 listo antes de que lleguen los invitados." },
    { question: "\xBFPuedo ver c\xF3mo va a quedar antes del evento?", answer: "Si contratas 100 metros o m\xE1s, hacemos una visita previa al venue donde medimos, tomamos fotos y te mandamos un diagrama del montaje propuesto. En la visita definimos alturas, puntos de anclaje y la distribuci\xF3n de l\xEDneas. As\xED no hay sorpresas el d\xEDa del evento." }
  ] })} </section>  <section class="services-section services-alt"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "\xBFQu\xE9 otros servicios combinan con guirnaldas?", "subtitle": "Lo que m\xE1s se pide junto con guirnaldas.", "paragraph1": "La combinaci\xF3n m\xE1s com\xFAn en bodas: guirnaldas en el techo del jard\xEDn + uplighting \xE1mbar en las columnas de la hacienda. Cubre arriba y abajo con un solo proveedor, y el t\xE9cnico coordina todo junto.", "paragraph2": "Cuando combinas dos o m\xE1s servicios, el precio baja porque compartimos traslado, montaje y operador. Cu\xE9ntanos qu\xE9 tienes en mente." })} <div class="services-grid"> ${serviciosRelacionados.map((s) => renderTemplate`${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "title": s.title, "image": s.image, "alt": s.alt, "description": s.description, "link": s.link })}`)} </div> </div> </section>  <section class="cta-section"> <div class="container"> <div class="cta-content"> <h2>¿Listo para iluminar tu evento con guirnaldas?</h2> <p>Mándanos fotos de tu venue por WhatsApp y te decimos cuántos metros necesitas, qué tipo de foco te conviene y el precio exacto.</p> <div class="cta-buttons"> <a href="/contacto/" class="btn btn-whatsapp btn-lg">Cotiza por WhatsApp</a> <a href="tel:+525530682988" class="btn btn-primary btn-lg">Llámanos — 55 3068 2988</a> </div> </div> </div> </section> ` })}`;
}, "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/pages/servicios/guirnaldas.astro", void 0);

const $$file = "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/pages/servicios/guirnaldas.astro";
const $$url = "/servicios/guirnaldas";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Guirnaldas,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
