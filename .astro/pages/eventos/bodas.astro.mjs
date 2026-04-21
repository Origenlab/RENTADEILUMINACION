import { c as createComponent, b as renderComponent, r as renderTemplate, m as maybeRenderHead, F as Fragment } from '../../chunks/astro/server_D8pMnQBn.mjs';
import 'piccolore';
import { $ as $$BaseLayout, a as $$Breadcrumbs } from '../../chunks/Breadcrumbs_BkFbHGbf.mjs';
import { $ as $$Hero } from '../../chunks/Hero_3Is3fruG.mjs';
import { $ as $$CtaBar } from '../../chunks/CtaBar_CdFZlCZU.mjs';
import { $ as $$Gallery4X4 } from '../../chunks/Gallery4x4_Bx6Jz45E.mjs';
import { $ as $$SectionHeader } from '../../chunks/SectionHeader_mLKzHzNX.mjs';
import { $ as $$ServiceCard } from '../../chunks/ServiceCard_Bli7ALj4.mjs';
import { $ as $$FaqSection } from '../../chunks/FaqSection_CzcP3CIi.mjs';
import { $ as $$PricingCards } from '../../chunks/PricingCards_CLGxK1tp.mjs';
import { $ as $$TestimonialCards } from '../../chunks/TestimonialCards_-EeuFf1C.mjs';
export { renderers } from '../../renderers.mjs';

const $$Bodas = createComponent(($$result, $$props, $$slots) => {
  const title = "Iluminaci\xF3n para Bodas en CDMX | +800 Bodas Iluminadas | REDEIL";
  const description = "Renta de iluminaci\xF3n y sonido profesional para bodas en CDMX. +800 bodas iluminadas. Guirnaldas, humo bajo, cabezas m\xF3viles, seguidor. Desde $5,000 + IVA. Cotiza gratis.";
  const canonical = "https://rentadeiluminacion.com/eventos/bodas/";
  const schemaMarkup = JSON.stringify([
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Iluminaci\xF3n y Sonido Profesional para Bodas",
      "provider": {
        "@type": "LocalBusiness",
        "name": "REDEIL",
        "url": "https://rentadeiluminacion.com",
        "telephone": "+525530682988",
        "address": { "@type": "PostalAddress", "addressLocality": "Ciudad de M\xE9xico", "addressCountry": "MX" }
      },
      "description": "Servicio integral de iluminaci\xF3n y sonido profesional para bodas en Ciudad de M\xE9xico. Guirnaldas, city color, cabezas m\xF3viles, humo bajo, seguidor y bocinas.",
      "areaServed": { "@type": "City", "name": "Ciudad de M\xE9xico" },
      "serviceType": "Iluminaci\xF3n y Sonido para Bodas"
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "\xBFCu\xE1nto tiempo antes debo reservar la iluminaci\xF3n para mi boda?", "acceptedAnswer": { "@type": "Answer", "text": "Recomendamos reservar con al menos 3 meses de anticipaci\xF3n, especialmente en temporada alta (noviembre\u2013febrero). Los fines de semana se reservan r\xE1pido. Con fecha y venue confirmados, podemos hacer la visita previa y dise\xF1ar el esquema de iluminaci\xF3n personalizado." } },
        { "@type": "Question", "name": "\xBFHacen visita previa al venue?", "acceptedAnswer": { "@type": "Answer", "text": "S\xED. Para bodas hacemos visita previa al venue sin costo adicional. Esto nos permite dise\xF1ar el esquema de iluminaci\xF3n exacto, calcular el equipo necesario y coordinarnos con el sal\xF3n sobre horarios de montaje. La visita se realiza de 4 a 6 semanas antes del evento." } },
        { "@type": "Question", "name": "\xBFSe coordina con el wedding planner y el DJ?", "acceptedAnswer": { "@type": "Answer", "text": "S\xED. Trabajamos en coordinaci\xF3n con wedding planners, DJs, fot\xF3grafos y decoradores. Les compartimos el schedule t\xE9cnico y nos coordinamos para que cada efecto (humo bajo, confeti, seguidor) se active en el momento exacto que define la pareja." } },
        { "@type": "Question", "name": "\xBFQu\xE9 incluye el servicio de iluminaci\xF3n para boda?", "acceptedAnswer": { "@type": "Answer", "text": "El servicio incluye visita previa, dise\xF1o del esquema de iluminaci\xF3n, transporte del equipo, montaje (llega 4-6 horas antes), operaci\xF3n t\xE9cnica durante toda la boda y desmontaje al finalizar. El equipo permanece hasta que termina el evento." } },
        { "@type": "Question", "name": "\xBFPueden cubrir la ceremonia y la recepci\xF3n?", "acceptedAnswer": { "@type": "Answer", "text": "S\xED. Manejamos la iluminaci\xF3n y el audio para ambos momentos. Para la ceremonia usamos luz blanca c\xE1lida suave y seguidor para el vals. Para la recepci\xF3n cambiamos a iluminaci\xF3n de ambiente y pista de baile con cabezas m\xF3viles y efectos especiales." } },
        { "@type": "Question", "name": "\xBFTienen paquetes completos de iluminaci\xF3n + audio para bodas?", "acceptedAnswer": { "@type": "Answer", "text": "S\xED. Armamos paquetes completos de iluminaci\xF3n + sonido + efectos especiales con precio especial. Es la forma m\xE1s eficiente porque un solo equipo t\xE9cnico coordina todo. Cu\xE9ntanos tu venue, fecha y n\xFAmero de invitados y te cotizamos el paquete completo." } }
      ]
    }
  ]);
  const paquetesBoda = [
    {
      name: "Boda \xCDntima",
      price: "$5,000\u2013$12,000",
      priceNote: "m\xE1s IVA \xB7 hasta 80 personas",
      description: "Ideal para bodas peque\xF1as en jard\xEDn o sal\xF3n boutique. Ambiente c\xE1lido y rom\xE1ntico sin producci\xF3n compleja.",
      features: [
        { text: "Guirnaldas Edison (hasta 30 m)", included: true },
        { text: "City Color o Par LED (4 piezas)", included: true },
        { text: "T\xE9cnico de iluminaci\xF3n incluido", included: true },
        { text: "Transporte e instalaci\xF3n CDMX", included: true },
        { text: "Humo bajo para el vals", included: false },
        { text: "Seguidor de luz", included: false },
        { text: "Cabezas m\xF3viles", included: false },
        { text: "Sistema de audio", included: false }
      ],
      ctaLabel: "Cotizar Boda \xCDntima",
      ctaHref: "https://wa.me/525530682988?text=Hola,%20quiero%20cotizar%20el%20paquete%20Boda%20%C3%8Dntima"
    },
    {
      name: "Boda Est\xE1ndar",
      badge: "M\xE1s pedido",
      highlight: true,
      price: "$12,000\u2013$25,000",
      priceNote: "m\xE1s IVA \xB7 80\u2013150 personas",
      description: "El paquete m\xE1s completo para bodas en sal\xF3n o hacienda. Iluminaci\xF3n de ambiente + pista de baile + efectos.",
      features: [
        { text: "Guirnaldas Edison (hasta 60 m)", included: true },
        { text: "City Color (6\u20138 piezas)", included: true },
        { text: "Cabezas m\xF3viles (4 piezas)", included: true },
        { text: "Humo bajo para el vals", included: true },
        { text: "Seguidor de luz", included: true },
        { text: "T\xE9cnico de iluminaci\xF3n incluido", included: true },
        { text: "Transporte e instalaci\xF3n CDMX", included: true },
        { text: "Sistema de audio (bocinas)", included: false }
      ],
      ctaLabel: "Cotizar Boda Est\xE1ndar",
      ctaHref: "https://wa.me/525530682988?text=Hola,%20quiero%20cotizar%20el%20paquete%20Boda%20Est%C3%A1ndar"
    },
    {
      name: "Boda Premium",
      price: "$25,000\u2013$50,000",
      priceNote: "m\xE1s IVA \xB7 150\u2013300 personas",
      description: "Producci\xF3n completa de iluminaci\xF3n y audio. Para bodas en hacienda o sal\xF3n de gran formato.",
      features: [
        { text: "Guirnaldas Edison (hasta 120 m)", included: true },
        { text: "City Color + Par LED (12+ piezas)", included: true },
        { text: "Cabezas m\xF3viles (8 piezas)", included: true },
        { text: "Humo bajo para el vals", included: true },
        { text: "Seguidor de luz", included: true },
        { text: "Confeti para el brindis", included: true },
        { text: "Sistema de audio profesional", included: true },
        { text: "2 t\xE9cnicos de iluminaci\xF3n + audio", included: true }
      ],
      ctaLabel: "Cotizar Boda Premium",
      ctaHref: "https://wa.me/525530682988?text=Hola,%20quiero%20cotizar%20el%20paquete%20Boda%20Premium"
    },
    {
      name: "Producci\xF3n Total",
      price: "$50,000+",
      priceNote: "m\xE1s IVA \xB7 300+ personas",
      description: "Para bodas de gran producci\xF3n: haciendas grandes, venues de lujo, m\xFAltiples espacios. Dise\xF1o t\xE9cnico personalizado.",
      features: [
        { text: "Dise\xF1o de iluminaci\xF3n personalizado", included: true },
        { text: "Equipo ilimitado seg\xFAn venue", included: true },
        { text: "Visita t\xE9cnica previa incluida", included: true },
        { text: "Efectos especiales completos", included: true },
        { text: "Audio profesional m\xFAltiple zona", included: true },
        { text: "Coordinaci\xF3n con planner y DJ", included: true },
        { text: "Operaci\xF3n t\xE9cnica todo el evento", included: true },
        { text: "Presupuesto a medida", included: true }
      ],
      ctaLabel: "Cotizar Producci\xF3n",
      ctaHref: "https://wa.me/525530682988?text=Hola,%20quiero%20cotizar%20producci%C3%B3n%20completa%20para%20mi%20boda"
    }
  ];
  const testimoniosBoda = [
    {
      name: "Daniela & Carlos Montes",
      rating: 5,
      event: "Boda \xB7 Hacienda San Gabriel, Tlalpan \xB7 Nov 2024",
      text: "REDEIL transform\xF3 la hacienda completamente. Las guirnaldas Edison sobre la mesa imperial quedaron exactamente como lo imagin\xE9, y el humo bajo durante el vals fue simplemente m\xE1gico. Todos los invitados nos preguntaron qui\xE9n era el proveedor de iluminaci\xF3n."
    },
    {
      name: "Valeria R\xEDos",
      rating: 5,
      event: "Boda \xB7 Jard\xEDn Villa Monta\xF1a, Coyoac\xE1n \xB7 Feb 2025",
      text: "Reservamos con 4 meses de anticipaci\xF3n y vali\xF3 la pena. El t\xE9cnico que oper\xF3 el seguidor durante el vals conoc\xEDa perfectamente los tiempos \u2014 ni siquiera tuvimos que pedirle que nos siguiera, lo hac\xEDa instintivamente. El servicio fue impecable de principio a fin."
    },
    {
      name: "Fernando & Alejandra Vega",
      rating: 5,
      event: "Boda \xB7 Sal\xF3n Cristal, Polanco \xB7 Dic 2024",
      text: "Contratamos el paquete completo: guirnaldas, city color, cabezas m\xF3viles, humo bajo y audio. El resultado super\xF3 nuestras expectativas. Un solo equipo para todo el evento signific\xF3 cero fricci\xF3n con coordinadores distintos. Totalmente recomendados."
    }
  ];
  const serviciosBoda = [
    { title: "Guirnaldas Edison", image: "/img/guirnaldas/renta-guirnaldas-edison-terraza-recepcion-02-300w.avif", alt: "Guirnaldas con focos Edison para boda al aire libre", description: "Focos tipo Edison con luz c\xE1lida vintage. Las m\xE1s pedidas para jardines, terrazas y haciendas. Cableado IP65 certificado.", link: "/servicios/guirnaldas/" },
    { title: "Humo Bajo para el Vals", image: "/img/humo-bajo/efecto-nubes-piso-boda-jardin-400w.avif", alt: "Humo bajo creando nube m\xE1gica en primer vals de boda", description: "La nube m\xE1gica a nivel de piso para el primer vals. El efecto m\xE1s solicitado en bodas. Activaci\xF3n a control remoto por nuestro t\xE9cnico.", link: "/servicios/humo-bajo/" },
    { title: "Seguidor de Luz", image: "/img/seguidor/renta-luz-seguidor-boda-primer-baile-hmi-1200w-300w.avif", alt: "Seguidor de luz en primer baile de novios boda CDMX", description: "Spotlight que sigue a los novios en el vals, la entrada y los momentos m\xE1s emotivos. Operado por un t\xE9cnico dedicado.", link: "/servicios/seguidor/" },
    { title: "Cabezas M\xF3viles", image: "/img/cabezas-moviles/renta-cabezas-moviles-boda-beams-blancos-elegante-300w.avif", alt: "Cabezas m\xF3viles LED en boda elegante CDMX", description: "Luces rob\xF3ticas programables para la pista de baile. Show de luces que transforma el sal\xF3n para la fiesta principal.", link: "/servicios/cabezas-moviles/" },
    { title: "City Color", image: "/img/city-color/renta-luces-hacienda-boda-fuente-300w.avif", alt: "City Color iluminando hacienda para boda", description: "Ca\xF1ones LED de alto impacto para ba\xF1ar de color fachadas y espacios grandes. Perfectos para exteriores de haciendas.", link: "/servicios/city-color/" },
    { title: "Audio para Boda", image: "/img/bocinas-bodas/renta-bocinas-boda-primer-baile-novios-truss-300w.avif", alt: "Sistema de audio profesional para boda", description: "Bocinas JBL con t\xE9cnico de audio. Ceremonia con sonido cristalino para los votos y potencia para la pista de baile.", link: "/servicios/bocinas-bodas/" },
    { title: "Cascadas LED", image: "/img/cascadas-led/cascadas-led-arco-ceremonia-luces-moradas-400w.avif", alt: "Cascadas LED en arco de ceremonia de boda", description: "Cortinas de luces LED que caen en cascada. Fondo espectacular para el arco de ceremonia o la mesa de novios.", link: "/servicios/cascadas-led/" },
    { title: "Confeti para el Brindis", image: "/img/confeti/confeti-dorado-boda-novios-fiesta.avif", alt: "Ca\xF1\xF3n de confeti dorado en brindis de boda", description: "Ca\xF1ones de confeti dorado para el brindis o la hora loca. El detalle que desata la celebraci\xF3n.", link: "/servicios/confeti/" }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "canonical": canonical, "schemaMarkup": schemaMarkup }, { "breadcrumbs": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "breadcrumbs" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Breadcrumbs", $$Breadcrumbs, { "items": [
    { label: "Inicio", href: "/" },
    { label: "Servicios", href: "/servicios/" },
    { label: "Bodas" }
  ] })} ` })}`, "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, { "title": "Iluminaci\xF3n y Sonido para Bodas en CDMX", "subtitle": "+800 bodas iluminadas. Guirnaldas Edison, humo bajo, cabezas m\xF3viles, seguidor y audio profesional. Desde $5,000 + IVA. Instalaci\xF3n incluida.", "whatsappText": "Hola,%20quiero%20cotizar%20iluminaci%C3%B3n%20y%20sonido%20para%20mi%20boda", "introParagraph1": "<strong>REDEIL</strong> lleva m\xE1s de 30 a\xF1os iluminando bodas en CDMX y Estado de M\xE9xico. Con <strong>+800 bodas realizadas</strong> y equipo profesional de marcas como <strong>Martin, Chauvet y Elation</strong>, conocemos cada momento que necesita iluminaci\xF3n especial: la ceremonia con luz c\xE1lida y seguidor para el vals, la recepci\xF3n con guirnaldas Edison y city color, y la pista de baile con cabezas m\xF3viles que hacen que nadie quiera irse.", "introParagraph2": "Cubrimos todo el evento con un solo equipo t\xE9cnico: montaje 4\u20136 horas antes, operaci\xF3n durante toda la boda y desmontaje al terminar. Coordinamos con wedding planners, decoradores y DJs para que cada efecto ocurra exactamente en el momento que defines. Atendemos haciendas, jardines, salones y terrazas en toda la zona metropolitana." })} ${renderComponent($$result2, "CtaBar", $$CtaBar, { "headline": "\xBFQu\xE9 necesitas para tu boda?", "items": [
    { label: "Guirnaldas", href: "/servicios/guirnaldas/", icon: "iluminacion" },
    { label: "Humo Bajo", href: "/servicios/humo-bajo/", icon: "efectos" },
    { label: "Audio para Boda", href: "/servicios/bocinas-bodas/", icon: "sonido" },
    { label: "Cotiza Gratis", href: "/contacto/", icon: "cotizar" }
  ] })} ${maybeRenderHead()}<section class="services-section"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Tu boda merece iluminaci\xF3n y sonido de primer nivel", "subtitle": "Instalaci\xF3n profesional incluida. Coordinaci\xF3n con planner, DJ y fot\xF3grafo.", "paragraph1": "La iluminaci\xF3n es uno de los elementos que m\xE1s impacto tiene en la atm\xF3sfera de una boda. Combinamos diferentes t\xE9cnicas: guirnaldas Edison para calidez en jardines, city color para ba\xF1ar fachadas, cabezas m\xF3viles para la pista de baile y seguidor de luz para destacar los momentos m\xE1s emotivos. El resultado es una boda que luce espectacular en cada foto y cada video.", "paragraph2": "Complementamos la iluminaci\xF3n con efectos especiales como humo bajo para el vals, confeti para el brindis y sonido profesional para que la m\xFAsica y los discursos lleguen con claridad a todos los invitados. Un solo proveedor integral para toda la producci\xF3n t\xE9cnica de tu boda." })} </div> </section> <section class="services-section services-alt"> <div class="container"> ${renderComponent($$result2, "Gallery4x4", $$Gallery4X4, { "images": [
    { src: "/img/bodas/guirnaldas-edison-boda-hacienda-colonial.avif", alt: "Guirnaldas de focos Edison iluminando boda en hacienda colonial" },
    { src: "/img/bodas/iluminacion-completa-boda-hacienda-elegante.avif", alt: "Iluminaci\xF3n completa en boda elegante dentro de hacienda" },
    { src: "/img/bodas/salon-boda-iluminacion-edison-elegante.avif", alt: "Sal\xF3n de boda con iluminaci\xF3n Edison elegante sobre mesas" },
    { src: "/img/bodas/boda-salon-colonial-guirnaldas-dj.avif", alt: "Boda en sal\xF3n colonial con guirnaldas y cabina de DJ" },
    { src: "/img/bodas/guirnaldas-boda-jardin-mesa-imperial.avif", alt: "Guirnaldas sobre mesa imperial en boda de jard\xEDn" },
    { src: "/img/bodas/recepcion-boda-guirnaldas-hacienda-elegante.avif", alt: "Recepci\xF3n de boda con guirnaldas en hacienda elegante" },
    { src: "/img/bodas/boda-hacienda-guirnaldas-city-color-dj.avif", alt: "Boda en hacienda con guirnaldas y city color junto a DJ" },
    { src: "/img/bodas/iluminacion-salon-fiesta-profesional.avif", alt: "Sal\xF3n de fiesta de boda con iluminaci\xF3n profesional" },
    { src: "/img/galeria/seguidor-primer-baile-bodas.avif", alt: "Seguidor de luz en primer baile de novios boda CDMX" },
    { src: "/img/galeria/seguidor-entrada-novios-boda.avif", alt: "Spotlight siguiendo a novios en entrada de ceremonia" },
    { src: "/img/galeria/humo-bajo-01.avif", alt: "Humo bajo en vals de boda CDMX" },
    { src: "/img/galeria/humo-bajo-03.avif", alt: "Nube m\xE1gica de humo bajo en primer baile" },
    { src: "/img/galeria/boda-audio-01.avif", alt: "Sistema de audio profesional en boda sal\xF3n" },
    { src: "/img/galeria/boda-audio-03.avif", alt: "Brindis con micr\xF3fono en boda hacienda" },
    { src: "/img/galeria/cascadas-led-01.avif", alt: "Cascadas LED en arco de ceremonia de boda" },
    { src: "/img/galeria/confeti-01.avif", alt: "Confeti dorado en brindis de boda CDMX" }
  ] })} </div> </section> <section class="services-section"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Servicios de REDEIL para tu Boda", "subtitle": "Iluminaci\xF3n, sonido y efectos especiales con un solo proveedor.", "paragraph1": "Cada servicio se puede contratar por separado o en paquete. Cuando contratas todo con REDEIL, un solo equipo t\xE9cnico coordina todo el evento \u2014 lo que significa mejor coordinaci\xF3n, un solo interlocutor y precio especial por paquete.", "paragraph2": "\xBFNo sabes cu\xE1les servicios necesitas? Cu\xE9ntanos el venue, el n\xFAmero de invitados y el estilo de la boda. Te asesoramos sin costo." })} <div class="services-grid"> ${serviciosBoda.map((s) => renderTemplate`${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "title": s.title, "image": s.image, "alt": s.alt, "description": s.description, "link": s.link })}`)} </div> </div> </section> <section class="services-section services-alt"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Paquetes de Iluminaci\xF3n para Bodas", "subtitle": "Precios referenciales + IVA. Cada boda es diferente \u2014 te cotizamos a medida.", "paragraph1": "Estos rangos de precio te dan una idea de la inversi\xF3n seg\xFAn el tama\xF1o de tu boda. El precio final depende del venue, el n\xFAmero de metros de guirnaldas, la cantidad de equipo y los efectos especiales que elijas.", "paragraph2": "La cotizaci\xF3n es gratuita y sin compromiso. Cu\xE9ntanos tu venue, fecha y n\xFAmero de invitados y te respondemos en menos de 24 horas." })} ${renderComponent($$result2, "PricingCards", $$PricingCards, { "packages": paquetesBoda })} </div> </section> <section class="services-section"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Parejas que confiaron en REDEIL", "subtitle": "Lo que dicen las parejas que iluminamos.", "paragraph1": "M\xE1s de 800 bodas en CDMX y Estado de M\xE9xico. Cada una diferente, cada una especial.", "paragraph2": "" })} ${renderComponent($$result2, "TestimonialCards", $$TestimonialCards, { "testimonials": testimoniosBoda })} </div> </section> <section class="faq-section"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Preguntas sobre Iluminaci\xF3n para Bodas", "subtitle": "Lo que las parejas nos preguntan antes de contratar.", "paragraph1": "Si tu duda no est\xE1 aqu\xED, escr\xEDbenos por WhatsApp y te respondemos en minutos.", "paragraph2": "M\xE1s de 30 a\xF1os iluminando bodas en CDMX y Estado de M\xE9xico. Conocemos cada detalle." })} </div> ${renderComponent($$result2, "FaqSection", $$FaqSection, { "items": [
    { question: "\xBFCu\xE1nto tiempo antes debo reservar la iluminaci\xF3n para mi boda?", answer: "Recomendamos reservar con al menos 3 meses de anticipaci\xF3n, especialmente en temporada alta (noviembre\u2013febrero). Los fines de semana se reservan r\xE1pido. Con fecha y venue confirmados, podemos hacer la visita previa y dise\xF1ar el esquema de iluminaci\xF3n personalizado." },
    { question: "\xBFHacen visita previa al venue?", answer: "S\xED. Para bodas hacemos visita previa al venue sin costo adicional. Esto nos permite dise\xF1ar el esquema de iluminaci\xF3n exacto, calcular el equipo necesario y coordinarnos con el sal\xF3n sobre horarios de montaje. La visita se realiza de 4 a 6 semanas antes del evento." },
    { question: "\xBFSe coordina con el wedding planner y el DJ?", answer: "S\xED. Trabajamos en coordinaci\xF3n con wedding planners, DJs, fot\xF3grafos y decoradores. Les compartimos el schedule t\xE9cnico y nos coordinamos para que cada efecto (humo bajo, confeti, seguidor) se active en el momento exacto que define la pareja." },
    { question: "\xBFQu\xE9 incluye el servicio de iluminaci\xF3n para boda?", answer: "El servicio incluye visita previa, dise\xF1o del esquema de iluminaci\xF3n, transporte del equipo, montaje (llega 4-6 horas antes), operaci\xF3n t\xE9cnica durante toda la boda y desmontaje al finalizar. El equipo permanece hasta que termina el evento." },
    { question: "\xBFPueden cubrir la ceremonia y la recepci\xF3n?", answer: "S\xED. Manejamos la iluminaci\xF3n y el audio para ambos momentos. Para la ceremonia usamos luz blanca c\xE1lida suave y seguidor para el vals. Para la recepci\xF3n cambiamos a iluminaci\xF3n de ambiente y pista de baile con cabezas m\xF3viles y efectos especiales." },
    { question: "\xBFTienen paquetes completos de iluminaci\xF3n + audio para bodas?", answer: "S\xED. Armamos paquetes completos de iluminaci\xF3n + sonido + efectos especiales con precio especial. Es la forma m\xE1s eficiente porque un solo equipo t\xE9cnico coordina todo. Cu\xE9ntanos tu venue, fecha y n\xFAmero de invitados y te cotizamos el paquete completo." }
  ] })} </section> <section class="cta-section"> <div class="container"> <div class="cta-content"> <h2>¿Listo para que tu boda luzca como lo imaginaste?</h2> <p>Cuéntanos la fecha, el venue y el estilo que buscas. Te enviamos una propuesta personalizada en menos de 24 horas.</p> <div class="cta-buttons"> <a href="/contacto/" class="btn btn-whatsapp btn-lg">Cotiza por WhatsApp</a> <a href="tel:+525530682988" class="btn btn-primary btn-lg">Llámanos — 55 3068 2988</a> </div> </div> </div> </section> ` })}`;
}, "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/pages/eventos/bodas.astro", void 0);

const $$file = "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/pages/eventos/bodas.astro";
const $$url = "/eventos/bodas";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Bodas,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
