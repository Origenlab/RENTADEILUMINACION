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

const $$PantallaInflable = createComponent(($$result, $$props, $$slots) => {
  const title = "Renta de Pantalla Inflable para Eventos CDMX | REDEIL";
  const description = "Pantallas inflables de 3m a 10m+ para cine al aire libre, bodas y eventos corporativos en CDMX. Proyector HD + audio incluidos. Desde $4,500 + IVA.";
  const canonical = "https://rentadeiluminacion.com/servicios/pantalla-inflable/";
  const schemaMarkup = JSON.stringify([
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Renta de Pantalla Inflable para Eventos y Cine al Aire Libre",
      "provider": {
        "@type": "LocalBusiness",
        "name": "REDEIL",
        "url": "https://rentadeiluminacion.com",
        "telephone": "+525530682988",
        "address": { "@type": "PostalAddress", "addressLocality": "Ciudad de M\xE9xico", "addressRegion": "CDMX", "addressCountry": "MX" }
      },
      "description": "Servicio de renta de pantallas inflables de 3m a 10m+ para cine al aire libre, bodas, XV a\xF1os y eventos corporativos en CDMX. Incluye proyector HD, sistema de audio y operador t\xE9cnico.",
      "areaServed": [
        { "@type": "City", "name": "Ciudad de M\xE9xico" },
        { "@type": "State", "name": "Estado de M\xE9xico" }
      ],
      "serviceType": "Renta de Pantalla Inflable",
      "priceRange": "$$"
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "\xBFQu\xE9 tama\xF1o de pantalla inflable necesito para mi evento?", "acceptedAnswer": { "@type": "Answer", "text": "Depende de la cantidad de personas y del espacio disponible. Para jardines familiares con 20-50 personas, una pantalla de 3 metros es ideal. Para bodas y XV a\xF1os con 50-150 invitados, recomendamos 5 metros. Para eventos corporativos de 150-300 personas, 8 metros. Y para festivales o eventos masivos al aire libre, 10 metros o m\xE1s." } },
        { "@type": "Question", "name": "\xBFLa pantalla inflable funciona con viento?", "acceptedAnswer": { "@type": "Answer", "text": "Las pantallas inflables est\xE1n dise\xF1adas para soportar brisa ligera gracias a su sistema de anclaje con estacas y contrapesos. Con vientos moderados (hasta 25 km/h) funcionan sin problema. Si se pronostica viento fuerte, coordinamos con anticipaci\xF3n para usar anclajes reforzados o reposicionar la pantalla en una zona protegida del venue." } },
        { "@type": "Question", "name": "\xBFEl proyector y el audio est\xE1n incluidos?", "acceptedAnswer": { "@type": "Answer", "text": "S\xED. Todos nuestros paquetes incluyen la pantalla inflable, proyector HD de alta luminosidad (adecuado al tama\xF1o de la pantalla), sistema de audio con bocinas, cableado, operador t\xE9cnico, traslado, montaje y desmontaje. Solo necesitas decirnos qu\xE9 contenido quieres proyectar." } },
        { "@type": "Question", "name": "\xBFPuedo conectar mi laptop o celular para proyectar?", "acceptedAnswer": { "@type": "Answer", "text": "S\xED. El proyector acepta conexi\xF3n HDMI desde laptop, consola de videojuegos o reproductor multimedia. Tambi\xE9n podemos recibir se\xF1al inal\xE1mbrica desde celular o tablet. El operador t\xE9cnico se encarga de configurar todo antes de que empiece tu evento." } },
        { "@type": "Question", "name": "\xBFCu\xE1nto tiempo tarda el montaje de la pantalla inflable?", "acceptedAnswer": { "@type": "Answer", "text": "El equipo llega 2-3 horas antes del evento. El inflado de la pantalla toma 15-20 minutos. El resto del tiempo se dedica a calibrar el proyector, configurar el audio, hacer pruebas de imagen y ajustar el enfoque. Todo queda listo antes de que lleguen tus invitados." } },
        { "@type": "Question", "name": "\xBFQu\xE9 pasa si llueve el d\xEDa del evento?", "acceptedAnswer": { "@type": "Answer", "text": "Si hay pron\xF3stico de lluvia, coordinamos contigo con 24-48 horas de anticipaci\xF3n. Las opciones incluyen: reubicar la pantalla bajo un techo o carpa, reprogramar sin costo adicional, o montar un plan B en interior. El equipo electr\xF3nico (proyector y audio) debe protegerse del agua, por lo que no se puede operar bajo lluvia directa." } }
      ]
    }
  ]);
  const serviciosRelacionados = [
    { title: "Bocinas y DJ", image: "/img/bocinas-djs/dj-para-eventos-cdmx-cabina-profesional-300w.avif", alt: "DJ profesional con cabina para eventos en CDMX", description: "Complementa tu pantalla inflable con DJ y sistema de audio profesional para una experiencia audiovisual completa.", link: "/servicios/bocinas-djs/" },
    { title: "Luces Ne\xF3n", image: "/img/luces-neon/renta-luces-neon-glow-party-celebracion-neon-300w.avif", alt: "Luces ne\xF3n para glow party y celebraci\xF3n", description: "Decora el \xE1rea de la pantalla con letreros ne\xF3n personalizados. Ideal para fiestas tem\xE1ticas y cine al aire libre.", link: "/servicios/luces-neon/" },
    { title: "Bola Disco", image: "/img/bola-disco/bola-disco-dj-pista-baile-evento.avif", alt: "Bola disco en pista de baile de evento", description: "Despu\xE9s de la funci\xF3n de cine, activa la pista de baile con bola disco y luces. La combinaci\xF3n perfecta para fiestas.", link: "/servicios/bola-disco/" },
    { title: "Confeti", image: "/img/maquina-de-papelitos/confeti-dorado-primer-baile-novios-romantico-400w.avif", alt: "Confeti dorado en primer baile de novios", description: "Agrega un momento wow con lluvia de confeti al terminar la proyecci\xF3n. Efecto espectacular para bodas y cumplea\xF1os.", link: "/servicios/confeti/" }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "canonical": canonical, "schemaMarkup": schemaMarkup }, { "breadcrumbs": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "breadcrumbs" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Breadcrumbs", $$Breadcrumbs, { "items": [
    { label: "Inicio", href: "/" },
    { label: "Efectos Especiales", href: "/servicios/efectos-especiales/" },
    { label: "Pantalla Inflable" }
  ] })} ` })}`, "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, { "title": "Renta de Pantalla Inflable para Eventos y Cine al Aire Libre CDMX", "subtitle": "Pantallas inflables de 3m a 10m+ con proyector HD y audio incluidos. Cine al aire libre, bodas, XV a\xF1os y eventos corporativos. Desde $4,500 + IVA.", "introParagraph1": "La pantalla inflable necesita dos cosas para verse bien: oscuridad y un proyector con suficientes l\xFAmenes. Con un proyector de oficina de 3,000 l\xFAmenes y algo de luz ambiental, la imagen se lava. Por eso los paquetes de 5 metros en adelante llevan proyectores de 5,000 a 20,000 l\xFAmenes \u2014 la imagen se ve n\xEDtida aunque queden postes de luz cerca o las mesas tengan velas. En <strong>REDEIL</strong> manejamos pantallas de <strong>3 a 10+ metros</strong> con lona cinematogr\xE1fica de marco negro que elimina la luz par\xE1sita alrededor de la imagen.", "introParagraph2": "La otra variable que nadie menciona: el viento. La pantalla inflable se mueve con r\xE1fagas fuertes y la imagen vibra. Si hay pron\xF3stico de viento, lo hablamos antes para reposicionar la pantalla en una zona protegida o usar anclajes reforzados. Con brisa normal (hasta 25 km/h) no hay problema \u2014 el sistema de estacas y contrapesos la mantiene estable. El inflado toma 15 minutos, el operador calibra proyector y audio antes de que lleguen los invitados. Jardines, terrazas, azoteas, estacionamientos, haciendas y parques en CDMX y Estado de M\xE9xico." })} ${renderComponent($$result2, "CtaBar", $$CtaBar, { "headline": "\xBFQu\xE9 tipo de evento planeas?", "items": [
    { label: "Cine al Aire Libre", href: "#paquetes", icon: "efectos" },
    { label: "Boda / XV A\xF1os", href: "/servicios/pantalla-inflable/paquete-5metros/", icon: "efectos" },
    { label: "Evento Corporativo", href: "/servicios/pantalla-inflable/paquete-8metros/", icon: "efectos" },
    { label: "Cotiza Gratis", href: "/contacto/", icon: "cotizar" }
  ] })}  ${maybeRenderHead()}<section class="services-section"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Cine al aire libre y proyecciones gigantes en eventos reales", "subtitle": "Pantallas inflables montadas en jardines, haciendas, terrazas y foros de CDMX.", "paragraph1": "El error m\xE1s com\xFAn es pedir una pantalla de 3 metros para 150 personas. A esa distancia, las personas de atr\xE1s no ven los subt\xEDtulos. Para m\xE1s de 80 personas, la pantalla de 5 metros es el m\xEDnimo. Para m\xE1s de 200, 8 metros. El tama\xF1o lo define el n\xFAmero de personas y la distancia de la \xFAltima fila, no el presupuesto.", "paragraph2": "El segundo error: montar de espaldas a postes de luz o focos del jard\xEDn. Cualquier fuente de luz detr\xE1s del p\xFAblico que refleje en la pantalla lava la imagen. Nuestro operador revisa la orientaci\xF3n y posici\xF3n antes de inflar." })} ${renderComponent($$result2, "Gallery4x4", $$Gallery4X4, { "images": [
    { src: "/img/pantalla-inflable/alquiler-pantalla-cine-inflable-posada.avif", alt: "Alquiler de pantalla de cine inflable para posada navide\xF1a" },
    { src: "/img/pantalla-inflable/alquiler-pantalla-gigante-inflable-deportes.avif", alt: "Pantalla gigante inflable para transmisi\xF3n de deportes en vivo" },
    { src: "/img/pantalla-inflable/alquiler-pantalla-inflable-aniversario-boda.avif", alt: "Pantalla inflable para proyecci\xF3n de video en aniversario de boda" },
    { src: "/img/pantalla-inflable/alquiler-pantalla-inflable-boda-hacienda.avif", alt: "Pantalla inflable instalada en hacienda para boda al aire libre" },
    { src: "/img/pantalla-inflable/alquiler-pantalla-inflable-cumpleanos-infantil.avif", alt: "Pantalla inflable para cine en cumplea\xF1os infantil" },
    { src: "/img/pantalla-inflable/alquiler-pantalla-inflable-despedida-soltera.avif", alt: "Pantalla inflable para despedida de soltera con cine al aire libre" },
    { src: "/img/pantalla-inflable/alquiler-pantalla-inflable-evento-escolar.avif", alt: "Pantalla inflable para evento escolar y funci\xF3n de cine" },
    { src: "/img/pantalla-inflable/alquiler-pantalla-inflable-presentacion.avif", alt: "Pantalla inflable para presentaci\xF3n corporativa al aire libre" },
    { src: "/img/pantalla-inflable/alquiler-pantalla-inflable-reunion-empresarial.avif", alt: "Pantalla inflable en reuni\xF3n empresarial al aire libre" },
    { src: "/img/pantalla-inflable/pantalla-cine-exterior-inflable-camping.avif", alt: "Pantalla de cine inflable para noche de camping al aire libre" },
    { src: "/img/pantalla-inflable/pantalla-cine-exterior-inflable-comunidad.avif", alt: "Pantalla de cine inflable para funci\xF3n comunitaria al aire libre" },
    { src: "/img/pantalla-inflable/pantalla-cine-inflable-evento-corporativo.avif", alt: "Pantalla inflable para evento corporativo con proyecci\xF3n profesional" },
    { src: "/img/pantalla-inflable/pantalla-cine-inflable-evento-familiar.avif", alt: "Pantalla de cine inflable en evento familiar al aire libre" },
    { src: "/img/pantalla-inflable/pantalla-cine-inflable-fiesta-infantil.avif", alt: "Pantalla inflable para cine en fiesta infantil nocturna" },
    { src: "/img/pantalla-inflable/pantalla-cine-inflable-fiesta-tematica.avif", alt: "Pantalla de cine inflable para fiesta tem\xE1tica nocturna" },
    { src: "/img/pantalla-inflable/pantalla-gigante-inflable-evento-social.avif", alt: "Pantalla gigante inflable para evento social al aire libre" }
  ] })} </div> </section>  <section class="services-section services-alt" id="paquetes"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Paquetes de Pantalla Inflable", "subtitle": "Desde cine familiar en el jard\xEDn hasta festivales con pantalla de 10 metros.", "paragraph1": "Cada paquete incluye la pantalla inflable, proyector HD de alta luminosidad, sistema de audio con bocinas, cableado completo, operador t\xE9cnico, traslado, montaje y desmontaje. Solo elige el tama\xF1o.", "paragraph2": "\xBFNo sabes qu\xE9 tama\xF1o necesitas? Dinos cu\xE1ntas personas esperan y el tipo de espacio \u2014 te recomendamos el paquete ideal." })} ${renderComponent($$result2, "PricingCards", $$PricingCards, { "packages": [
    {
      name: "Pantalla 3 Metros",
      price: "$4,500",
      priceNote: "+ IVA",
      description: "Cine al aire libre para jardines privados y fiestas familiares. Pantalla compacta ideal para 20-50 personas.",
      features: [
        { text: "Pantalla inflable de 3 metros", included: true },
        { text: "Proyector HD 3,000 lumens", included: true },
        { text: "2 bocinas con audio est\xE9reo", included: true },
        { text: "Operador t\xE9cnico incluido", included: true },
        { text: "Traslado + montaje + desmontaje", included: true },
        { text: "Ideal para: cine familiar, cumplea\xF1os infantiles", included: true },
        { text: "Capacidad: 20-50 personas", included: true },
        { text: "Proyector de alta potencia", included: false }
      ],
      ctaLabel: "Cotizar pantalla 3 metros",
      ctaHref: "/servicios/pantalla-inflable/paquete-3metros/"
    },
    {
      name: "Pantalla 5 Metros",
      price: "$6,500",
      priceNote: "+ IVA",
      badge: "M\xE1s popular",
      highlight: true,
      description: "El tama\xF1o m\xE1s solicitado para bodas y XV a\xF1os. Pantalla imponente para 50-150 invitados.",
      features: [
        { text: "Pantalla inflable de 5 metros", included: true },
        { text: "Proyector HD 5,000 lumens", included: true },
        { text: "Sistema de audio profesional", included: true },
        { text: "Operador t\xE9cnico incluido", included: true },
        { text: "Traslado + montaje + desmontaje", included: true },
        { text: "Ideal para: bodas, XV a\xF1os, fiestas grandes", included: true },
        { text: "Capacidad: 50-150 personas", included: true },
        { text: "Conexi\xF3n HDMI + inal\xE1mbrica", included: true }
      ],
      ctaLabel: "Cotizar pantalla 5 metros",
      ctaHref: "/servicios/pantalla-inflable/paquete-5metros/"
    },
    {
      name: "Pantalla 8 Metros",
      price: "$9,500",
      priceNote: "+ IVA",
      description: "Para eventos corporativos y reuniones empresariales. Proyector de 10,000 lumens para imagen n\xEDtida.",
      features: [
        { text: "Pantalla inflable de 8 metros", included: true },
        { text: "Proyector 10,000 lumens", included: true },
        { text: "Audio profesional de alta potencia", included: true },
        { text: "Operador t\xE9cnico incluido", included: true },
        { text: "Traslado + montaje + desmontaje", included: true },
        { text: "Ideal para: corporativos, convenciones", included: true },
        { text: "Capacidad: 150-300 personas", included: true },
        { text: "Conexi\xF3n m\xFAltiple (HDMI, VGA, inal\xE1mbrica)", included: true }
      ],
      ctaLabel: "Cotizar pantalla 8 metros",
      ctaHref: "/servicios/pantalla-inflable/paquete-8metros/"
    },
    {
      name: "Pantalla 10m+ Producci\xF3n",
      price: "$15,000",
      priceNote: "+ IVA",
      description: "Producci\xF3n completa para festivales, eventos p\xFAblicos y transmisiones masivas al aire libre.",
      features: [
        { text: "Pantalla inflable de 10 metros o m\xE1s", included: true },
        { text: "Proyector 20,000 lumens", included: true },
        { text: "Sistema de audio line array profesional", included: true },
        { text: "2 operadores t\xE9cnicos", included: true },
        { text: "Traslado + montaje + desmontaje", included: true },
        { text: "Ideal para: festivales, eventos p\xFAblicos", included: true },
        { text: "Capacidad: 300+ personas", included: true },
        { text: "Visita previa al venue incluida", included: true }
      ],
      ctaLabel: "Cotizar producci\xF3n 10m+",
      ctaHref: "/servicios/pantalla-inflable/paquete-produccion/"
    }
  ] })} </div> </section>  <section class="faq-section"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Preguntas sobre Pantalla Inflable", "subtitle": "Resolvemos todas las dudas antes de contratar.", "paragraph1": "Desde el tama\xF1o ideal hasta el plan de lluvia \u2014 aqu\xED respondemos todo sobre la renta de pantallas inflables.", "paragraph2": "Si tu duda no est\xE1 aqu\xED, escr\xEDbenos por WhatsApp. Respondemos en minutos." })} </div> ${renderComponent($$result2, "FaqSection", $$FaqSection, { "items": [
    { question: "\xBFQu\xE9 tama\xF1o necesito?", answer: "Depende de cu\xE1nta gente y a qu\xE9 distancia. Para 20-50 personas en un jard\xEDn familiar, 3 metros. Para 50-150 invitados, 5 metros \u2014 es el m\xE1s pedido para bodas. Para 150-300, 8 metros. Para festivales, 10+ metros. La regla r\xE1pida: la \xFAltima fila no deber\xEDa estar a m\xE1s de 4 veces el ancho de la pantalla." },
    { question: "\xBFFunciona con viento?", answer: "Con brisa ligera (hasta 25 km/h), sin problema \u2014 el sistema de estacas y contrapesos la mantiene estable. Con viento fuerte la pantalla se mueve y la imagen vibra. Si el pron\xF3stico marca viento, lo hablamos antes para reposicionar en zona protegida o usar anclajes reforzados." },
    { question: "\xBFIncluye proyector y audio?", answer: "S\xED. Cada paquete incluye pantalla, proyector HD con los l\xFAmenes adecuados al tama\xF1o, bocinas, cableado, operador t\xE9cnico, traslado y montaje. El proyector de 3m es de 3,000 l\xFAmenes, el de 5m es de 5,000, el de 8m es de 10,000. La diferencia de l\xFAmenes es lo que determina si la imagen se ve n\xEDtida o lavada." },
    { question: "\xBFPuedo conectar mi celular o laptop?", answer: "S\xED. HDMI directo desde laptop o consola. Inal\xE1mbrico desde celular o tablet. El operador configura todo y hace pruebas antes de que lleguen los invitados. Si vas a proyectar desde Spotify o Netflix, necesitas tener la app descargada porque depender del wifi del venue es arriesgado." },
    { question: "\xBFQu\xE9 pasa si llueve?", answer: "El proyector y el audio no se pueden mojar. Si hay pron\xF3stico de lluvia, coordinamos 24-48 horas antes: reubicamos bajo techo o carpa, reprogramamos sin costo, o montamos plan B en interior. La pantalla en s\xED resiste agua, el problema es el equipo electr\xF3nico." },
    { question: "\xBFSe puede proyectar de d\xEDa?", answer: "T\xE9cnicamente s\xED, pero no se ve bien. Incluso con proyectores de 10,000 l\xFAmenes, la luz del sol lava la imagen. El mejor resultado es despu\xE9s del atardecer. Si tu evento es de d\xEDa, la alternativa es una pantalla LED (no inflable) \u2014 que s\xED se ve con luz directa." }
  ] })} </section>  <section class="services-section services-alt"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Lo que m\xE1s se combina con pantalla", "subtitle": "Cine + coctel. Proyecci\xF3n + pista de baile despu\xE9s.", "paragraph1": "El formato que m\xE1s nos piden: funci\xF3n de cine durante la cena, y cuando termina la pel\xEDcula, se enciende la pista de baile con DJ y luces. La pantalla se desinfla en 10 minutos y el espacio queda libre. Dos eventos en uno con la misma log\xEDstica.", "paragraph2": "Para bodas, la proyecci\xF3n del video de los novios durante la cena con audio profesional es el momento que m\xE1s comentan los invitados." })} <div class="services-grid"> ${serviciosRelacionados.map((s) => renderTemplate`${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "title": s.title, "image": s.image, "alt": s.alt, "description": s.description, "link": s.link })}`)} </div> </div> </section>  <section class="cta-section"> <div class="container"> <div class="cta-content"> <h2>¿Listo para el cine al aire libre en tu evento?</h2> <p>Cuéntanos la fecha, el espacio y cuántas personas esperan. Te recomendamos el tamaño ideal y te cotizamos en minutos.</p> <div class="cta-buttons"> <a href="/contacto/" class="btn btn-whatsapp btn-lg">Cotiza por WhatsApp</a> <a href="tel:+525530682988" class="btn btn-primary btn-lg">Llámanos — 55 3068 2988</a> </div> </div> </div> </section> ` })}`;
}, "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/pages/servicios/pantalla-inflable.astro", void 0);

const $$file = "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/pages/servicios/pantalla-inflable.astro";
const $$url = "/servicios/pantalla-inflable";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$PantallaInflable,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
