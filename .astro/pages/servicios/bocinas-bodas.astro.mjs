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

const $$BocinasBodas = createComponent(($$result, $$props, $$slots) => {
  const title = "Renta de Bocinas para Bodas en CDMX | REDEIL";
  const description = "Audio profesional JBL para ceremonia, recepci\xF3n y fiesta de boda en CDMX. Micr\xF3fonos para votos incluidos. Desde $3,500 + IVA.";
  const canonical = "https://rentadeiluminacion.com/servicios/bocinas-bodas/";
  const schemaMarkup = JSON.stringify([
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Renta de Audio Profesional para Bodas",
      "provider": {
        "@type": "LocalBusiness",
        "name": "REDEIL",
        "url": "https://rentadeiluminacion.com",
        "telephone": "+525530682988",
        "address": { "@type": "PostalAddress", "addressLocality": "Ciudad de M\xE9xico", "addressRegion": "CDMX", "addressCountry": "MX" }
      },
      "description": "Servicio de renta de bocinas y audio profesional para bodas en CDMX. Cobertura de ceremonia, recepci\xF3n y fiesta con equipos JBL y QSC.",
      "areaServed": [{ "@type": "City", "name": "Ciudad de M\xE9xico" }, { "@type": "State", "name": "Estado de M\xE9xico" }],
      "serviceType": "Audio Profesional para Bodas",
      "priceRange": "$$"
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "\xBFEl audio cubre ceremonia y fiesta?", "acceptedAnswer": { "@type": "Answer", "text": "S\xED. Nuestros paquetes Boda Completa y superiores cubren los tres momentos: ceremonia al aire libre con sonido claro para los votos, recepci\xF3n con micr\xF3fonos para brindis, y fiesta con potencia completa para la pista de baile." } },
        { "@type": "Question", "name": "\xBFLos micr\xF3fonos para los votos est\xE1n incluidos?", "acceptedAnswer": { "@type": "Answer", "text": "S\xED. Incluimos micr\xF3fonos inal\xE1mbricos Shure \u2014 uno para los novios y otro para el oficiante. Son de alta sensibilidad para captar la voz con claridad incluso al aire libre." } },
        { "@type": "Question", "name": "\xBFSe puede tener m\xFAsica en vivo y DJ en la misma boda?", "acceptedAnswer": { "@type": "Answer", "text": "S\xED. Montamos el equipo para que el grupo musical use las bocinas durante la cena y el DJ se conecte al mismo sistema para la fiesta. La transici\xF3n es transparente \u2014 nuestro t\xE9cnico maneja el cambio." } },
        { "@type": "Question", "name": "\xBFFunciona en haciendas al aire libre?", "acceptedAnswer": { "@type": "Answer", "text": "S\xED. Las haciendas son el tipo de venue donde m\xE1s bodas hacemos. Usamos bocinas certificadas para exterior con mayor potencia para compensar la dispersi\xF3n del sonido al aire libre. Si no hay suficiente corriente, llevamos planta de luz." } },
        { "@type": "Question", "name": "\xBFEl equipo coordina con mi wedding planner?", "acceptedAnswer": { "@type": "Answer", "text": "Siempre. Nuestro t\xE9cnico y DJ se coordinan con el wedding planner y el MC antes del evento para definir la secuencia de momentos, canciones clave, se\xF1ales y protocolo." } },
        { "@type": "Question", "name": "\xBFCu\xE1nto antes llega el equipo?", "acceptedAnswer": { "@type": "Answer", "text": "El equipo llega 2-3 horas antes de la ceremonia. Montamos, ecualizaci\xF3n al espacio, pruebas de micr\xF3fono con el oficiante y coordinamos con el fot\xF3grafo/vide\xF3grafo para que los cables no salgan en las tomas." } }
      ]
    }
  ]);
  const serviciosRelacionados = [
    { title: "DJ para Bodas", image: "/img/bocinas-djs/dj-para-bodas-mezclando-musica-evento-400w.avif", alt: "DJ mezclando m\xFAsica en boda", description: "DJ con consola Pioneer que lee la pista y coordina cada momento del evento \u2014 del vals a la hora loca.", link: "/servicios/bocinas-djs/" },
    { title: "Guirnaldas Edison", image: "/img/guirnaldas/renta-guirnaldas-edison-terraza-recepcion-02-300w.avif", alt: "Guirnaldas Edison para boda", description: "Audio + guirnaldas c\xE1lidas = boda perfecta. El sonido se siente y la luz se ve.", link: "/servicios/guirnaldas/" },
    { title: "Seguidor de Luz", image: "/img/seguidor/renta-luz-seguidor-boda-primer-baile-hmi-1200w-300w.avif", alt: "Spotlight en vals de boda", description: "Mientras el audio pone la canci\xF3n del vals, el seguidor ilumina a los novios. Coordinaci\xF3n perfecta.", link: "/servicios/seguidor/" },
    { title: "Humo Bajo", image: "/img/humo-bajo/efecto-nubes-piso-boda-jardin-400w.avif", alt: "Humo bajo para vals de boda", description: "El DJ da la se\xF1al, la niebla cubre el piso, los novios bailan sobre nubes. El momento que todos recuerdan.", link: "/servicios/humo-bajo/" }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "canonical": canonical, "schemaMarkup": schemaMarkup }, { "breadcrumbs": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "breadcrumbs" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Breadcrumbs", $$Breadcrumbs, { "items": [
    { label: "Inicio", href: "/" },
    { label: "Sonido y DJ", href: "/servicios/sonido/" },
    { label: "Bocinas para Bodas" }
  ] })} ` })}`, "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, { "title": "Renta de Bocinas y Audio para Bodas en CDMX", "subtitle": "Sonido cristalino para los votos, potencia para la pista, micr\xF3fonos para cada brindis. JBL y QSC. Desde $3,500 + IVA.", "introParagraph1": "Una boda tiene tres momentos ac\xFAsticos muy diferentes, y si el equipo de audio no los cubre los tres, algo va a fallar. La ceremonia necesita claridad: los votos del novio nervioso tienen que llegar hasta la \xFAltima silla del jard\xEDn sin distorsi\xF3n. La recepci\xF3n necesita micr\xF3fonos que no generen feedback cuando el pap\xE1 de la novia habla con la voz entrecortada. Y la fiesta necesita potencia real, bajo que se sienta sin que los agudos truenen. En <strong>REDEIL</strong> llevamos m\xE1s de 30 a\xF1os sonorizando bodas con equipo <strong>JBL PRX</strong>, <strong>QSC K.2</strong> y micr\xF3fonos <strong>Shure</strong>.", "introParagraph2": "Lo que nos diferencia de otros proveedores: nuestro t\xE9cnico coordina con tu wedding planner, el MC, el DJ, el fot\xF3grafo y el vide\xF3grafo antes de montar. Sabe d\xF3nde poner las bocinas para que no salgan en las fotos de la ceremonia. Sabe que el micro del oficiante necesita m\xE1s ganancia que el del novio porque habla m\xE1s lejos. Y se queda toda la noche operando, no solo montando y y\xE9ndose. Haciendas en Huixquilucan, jardines en Coyoac\xE1n, salones en Polanco, hoteles en Santa Fe. Cada venue tiene su ac\xFAstica y nuestro t\xE9cnico la conoce." })} ${renderComponent($$result2, "CtaBar", $$CtaBar, { "headline": "\xBFQu\xE9 necesitas para tu boda?", "items": [
    { label: "DJ para Bodas", href: "/servicios/bocinas-djs/", icon: "sonido" },
    { label: "Iluminaci\xF3n Bodas", href: "/eventos/bodas/", icon: "iluminacion" },
    { label: "Todo el sonido", href: "/servicios/sonido/", icon: "sonido" },
    { label: "Cotiza Gratis", href: "/contacto/", icon: "cotizar" }
  ] })} ${maybeRenderHead()}<section class="services-section"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Tres momentos, tres configuraciones diferentes", "subtitle": "Ceremonia en el jard\xEDn, recepci\xF3n en el patio, fiesta en el sal\xF3n.", "paragraph1": "El volumen de la ceremonia no es el mismo que el de la fiesta. Si tu venue tiene la ceremonia y la recepci\xF3n en espacios separados, montamos dos sets independientes para no tener que mover equipo cuando los invitados est\xE1n comiendo. El t\xE9cnico preprograma los niveles para cada momento.", "paragraph2": "En haciendas con patio central, la ac\xFAstica rebota entre las paredes de piedra. En jardines abiertos, el sonido se pierde hacia arriba. El t\xE9cnico ecualiza seg\xFAn el espacio real, no seg\xFAn una configuraci\xF3n gen\xE9rica." })} ${renderComponent($$result2, "Gallery4x4", $$Gallery4X4, { "images": [
    { src: "/img/bocinas-bodas/renta-bocinas-boda-primer-baile-novios-romantico.avif", alt: "Primer baile rom\xE1ntico de novios con audio profesional" },
    { src: "/img/bocinas-bodas/renta-bocinas-ceremonia-boda-hacienda-arcos-audio.avif", alt: "Audio para ceremonia de boda en hacienda con arcos" },
    { src: "/img/bocinas-bodas/renta-bocinas-boda-brindis-discurso-invitados.avif", alt: "Brindis con discurso en boda con micr\xF3fonos profesionales" },
    { src: "/img/bocinas-bodas/renta-bocinas-boda-dj-cabina-blanca-flores.avif", alt: "DJ con cabina blanca decorada con flores en boda" },
    { src: "/img/bocinas-bodas/renta-bocinas-boda-entrada-novios-humo-dj.avif", alt: "Entrada de novios con humo y DJ en boda" },
    { src: "/img/bocinas-bodas/renta-bocinas-boda-fiesta-confeti-chispas-dj.avif", alt: "Fiesta de boda con confeti y chispas en pista de DJ" },
    { src: "/img/bocinas-bodas/renta-bocinas-boda-banda-jazz-consola-salon.avif", alt: "Banda de jazz con consola en sal\xF3n de boda" },
    { src: "/img/bocinas-bodas/renta-bocinas-boda-dj-consola-mesa-novios.avif", alt: "DJ con consola junto a mesa de novios" },
    { src: "/img/bocinas-bodas/renta-bocinas-ceremonia-boda-jardin-guitarrista.avif", alt: "Guitarrista en ceremonia de boda en jard\xEDn" },
    { src: "/img/bocinas-bodas/renta-bocinas-boda-rustica-dj-ladrillo-jbl.avif", alt: "DJ con bocinas JBL en boda r\xFAstica de ladrillo" },
    { src: "/img/bocinas-bodas/renta-bocinas-boda-salon-qsc-truss-luces.avif", alt: "Sal\xF3n de boda con bocinas QSC, truss y luces" },
    { src: "/img/bocinas-bodas/renta-bocinas-boda-playa-montaje-tripie-carpa.avif", alt: "Montaje de bocinas en tripi\xE9 bajo carpa para boda en playa" },
    { src: "/img/bocinas-bodas/renta-bocinas-boda-baile-padre-hija-iluminacion.avif", alt: "Baile padre e hija con iluminaci\xF3n profesional en boda" },
    { src: "/img/bocinas-bodas/renta-bocinas-boda-corte-pastel-animador-microfono.avif", alt: "Corte de pastel con animador y micr\xF3fono en boda" },
    { src: "/img/bocinas-bodas/renta-bocinas-boda-primer-baile-salon-ambar.avif", alt: "Primer baile en sal\xF3n con iluminaci\xF3n \xE1mbar" },
    { src: "/img/bocinas-bodas/renta-bocinas-boda-stack-qsc-subwoofer-escenario.avif", alt: "Stack de bocinas QSC con subwoofer en escenario de boda" }
  ] })} </div> </section> <section class="services-section services-alt"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Paquetes de Audio para Bodas", "subtitle": "Desde la ceremonia sola hasta producci\xF3n completa con DJ y luces.", "paragraph1": "Cada paquete incluye bocinas, subwoofers, micr\xF3fonos Shure inal\xE1mbricos, mezcladora, t\xE9cnico de audio, transporte, montaje, ecualizaci\xF3n al venue y desmontaje. El t\xE9cnico coordina con tu wedding planner y MC.", "paragraph2": "No sabes qu\xE9 paquete necesitas? M\xE1ndanos fotos del venue y el n\xFAmero de invitados. Te decimos exactamente qu\xE9 equipo es el correcto." })} ${renderComponent($$result2, "PricingCards", $$PricingCards, { "packages": [
    {
      name: "Solo Ceremonia",
      price: "$3,500",
      priceNote: "+ IVA",
      description: "Audio para la ceremonia civil o religiosa. Votos claros en cada silla del jard\xEDn, la capilla o el sal\xF3n.",
      features: [
        { text: "2 bocinas JBL port\xE1tiles", included: true },
        { text: "2 micr\xF3fonos Shure inal\xE1mbricos", included: true },
        { text: "Mezcladora + conexi\xF3n para m\xFAsicos", included: true },
        { text: "T\xE9cnico de audio incluido", included: true },
        { text: "Transporte + montaje + desmontaje", included: true },
        { text: "Ideal para: ceremonia civil, religiosa, jard\xEDn", included: true },
        { text: "Subwoofer para fiesta", included: false },
        { text: "DJ incluido", included: false }
      ],
      ctaLabel: "Cotizar ceremonia",
      ctaHref: "/servicios/bocinas-bodas/paquete-solo-ceremonia/"
    },
    {
      name: "Boda Completa \u2014 ceremonia + fiesta",
      price: "$7,500",
      priceNote: "+ IVA",
      badge: "M\xE1s popular",
      highlight: true,
      description: "Todo el audio de tu boda cubierto: ceremonia con votos claros + recepci\xF3n con micros para brindis + pista con bajo potente.",
      features: [
        { text: "4 bocinas JBL PRX / QSC K.2", included: true },
        { text: "2 subwoofers para pista de baile", included: true },
        { text: "4 micr\xF3fonos Shure inal\xE1mbricos", included: true },
        { text: "Mezcladora Yamaha + Bluetooth", included: true },
        { text: "T\xE9cnico de audio toda la noche", included: true },
        { text: "Transporte + montaje + desmontaje", included: true },
        { text: "Ideal para: boda 100-200 invitados", included: true },
        { text: "DJ incluido", included: false }
      ],
      ctaLabel: "Cotizar boda completa",
      ctaHref: "/servicios/bocinas-bodas/paquete-boda-completa/"
    },
    {
      name: "Boda con DJ",
      price: "$11,000",
      priceNote: "+ IVA",
      description: "Audio completo + DJ profesional con consola Pioneer. Coordinaci\xF3n total con MC y wedding planner.",
      features: [
        { text: "DJ con consola Pioneer DDJ", included: true },
        { text: "4-6 bocinas + 2 subwoofers", included: true },
        { text: "4 micr\xF3fonos Shure inal\xE1mbricos", included: true },
        { text: "Coordinaci\xF3n MC + wedding planner", included: true },
        { text: "Repertorio personalizado", included: true },
        { text: "6-8 horas de operaci\xF3n", included: true },
        { text: "Ideal para: bodas completas con fiesta", included: true },
        { text: "Cabina decorativa opcional", included: true }
      ],
      ctaLabel: "Cotizar boda con DJ",
      ctaHref: "/servicios/bocinas-bodas/paquete-boda-con-dj/"
    },
    {
      name: "Producci\xF3n Boda Premium",
      price: "$22,000",
      priceNote: "+ IVA",
      description: "DJ + audio line array + cabezas m\xF3viles + humo bajo + seguidor. La producci\xF3n completa que transforma tu boda.",
      features: [
        { text: "DJ profesional toda la noche", included: true },
        { text: "Line array para 200+ invitados", included: true },
        { text: "8 cabezas m\xF3viles con operador DMX", included: true },
        { text: "Humo bajo para el vals", included: true },
        { text: "Seguidor de luz para primer baile", included: true },
        { text: "Coordinaci\xF3n total con tu equipo", included: true },
        { text: "Visita previa al venue", included: true },
        { text: "Ideal para: bodas premium, haciendas", included: true }
      ],
      ctaLabel: "Cotizar producci\xF3n premium",
      ctaHref: "/servicios/bocinas-bodas/paquete-produccion-boda/"
    }
  ] })} </div> </section> <section class="faq-section"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Preguntas sobre Audio para Bodas", "subtitle": "Lo que las parejas preguntan antes de reservar.", "paragraph1": "Si tu duda no est\xE1 aqu\xED, escr\xEDbenos por WhatsApp. Respondemos en minutos.", "paragraph2": "Cada boda es diferente \u2014 te asesoramos seg\xFAn tu venue, invitados y presupuesto." })} </div> ${renderComponent($$result2, "FaqSection", $$FaqSection, { "items": [
    { question: "\xBFEl audio cubre la ceremonia y la fiesta?", answer: "S\xED. Los paquetes Boda Completa y superiores cubren todo: ceremonia con sonido claro para los votos, recepci\xF3n con micr\xF3fonos para brindis y discursos, y fiesta con potencia completa para la pista de baile. Si la ceremonia y la recepci\xF3n est\xE1n en espacios separados, montamos dos sets." },
    { question: "\xBFLos micr\xF3fonos para los votos est\xE1n incluidos?", answer: "S\xED. Usamos micr\xF3fonos Shure inal\xE1mbricos \u2014 uno para los novios y otro para el oficiante. Son de alta sensibilidad para captar la voz con claridad incluso en ceremonias al aire libre con viento. El t\xE9cnico se encarga de que todo se escuche perfecto." },
    { question: "\xBFSe puede tener banda en vivo y DJ la misma noche?", answer: "S\xED \u2014 es muy com\xFAn en bodas grandes. Montamos el equipo para que la banda use las bocinas durante la cena y el DJ se conecte al mismo sistema para la fiesta. El t\xE9cnico maneja la transici\xF3n sin pausas ni problemas t\xE9cnicos." },
    { question: "\xBFFunciona en haciendas al aire libre?", answer: "Las haciendas son donde m\xE1s bodas hacemos. Usamos bocinas con mayor potencia para compensar la dispersi\xF3n del sonido en espacios abiertos. En la ceremonia del jard\xEDn usamos bocinas discretas cerca de los invitados, y para la fiesta subimos la potencia con subs." },
    { question: "\xBFCoordinan con el fot\xF3grafo para ocultar cables?", answer: "S\xED. Nuestro t\xE9cnico se coordina con el fot\xF3grafo y vide\xF3grafo para que los cables, tripies y equipo est\xE9n fuera de las tomas principales. Usamos canaletas y cableado negro que se disimula en el piso." },
    { question: "\xBFCu\xE1nto antes deben llegar al venue?", answer: "El equipo llega 2-3 horas antes de la ceremonia. Montaje, ecualizaci\xF3n al espacio, prueba de micr\xF3fonos con el oficiante y coordinaci\xF3n con MC/wedding planner. Todo est\xE1 listo y probado mucho antes de que lleguen los invitados." }
  ] })} </section> <section class="services-section services-alt"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Audio + iluminaci\xF3n del mismo proveedor", "subtitle": "Cuando el DJ da la se\xF1al, el humo bajo y el seguidor se activan al mismo tiempo.", "paragraph1": "El vals sale bien cuando el DJ, el operador de humo bajo y el del seguidor se conocen y trabajan juntos. El DJ da la se\xF1al por radio, la niebla se activa 30 segundos antes, el spotlight enciende cuando los novios pisan la pista. Si contratas audio e iluminaci\xF3n con proveedores diferentes, esa coordinaci\xF3n se complica.", "paragraph2": "Paquetes combinados de audio + iluminaci\xF3n con precio especial para bodas." })} <div class="services-grid"> ${serviciosRelacionados.map((s) => renderTemplate`${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "title": s.title, "image": s.image, "alt": s.alt, "description": s.description, "link": s.link })}`)} </div> </div> </section> <section class="cta-section"> <div class="container"> <div class="cta-content"> <h2>¿Listo para que tu boda suene como la imaginaste?</h2> <p>Mándanos fotos del venue, la fecha y el número de invitados. Te decimos exactamente qué equipo necesitas y cuánto cuesta.</p> <div class="cta-buttons"> <a href="/contacto/" class="btn btn-whatsapp btn-lg">Cotiza por WhatsApp</a> <a href="tel:+525530682988" class="btn btn-primary btn-lg">Llámanos — 55 3068 2988</a> </div> </div> </div> </section> ` })}`;
}, "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/pages/servicios/bocinas-bodas.astro", void 0);

const $$file = "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/pages/servicios/bocinas-bodas.astro";
const $$url = "/servicios/bocinas-bodas";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$BocinasBodas,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
