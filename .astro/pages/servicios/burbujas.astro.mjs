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

const $$Burbujas = createComponent(($$result, $$props, $$slots) => {
  const title = "Renta de M\xE1quina de Burbujas para Eventos CDMX | REDEIL";
  const description = "M\xE1quinas de burbujas profesionales para bodas, XV a\xF1os, fiestas infantiles y eventos en CDMX. Burbujas gigantes o lluvia continua. Desde $1,800 + IVA.";
  const canonical = "https://rentadeiluminacion.com/servicios/burbujas/";
  const schemaMarkup = JSON.stringify([
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Renta de M\xE1quina de Burbujas para Eventos",
      "provider": {
        "@type": "LocalBusiness",
        "name": "REDEIL",
        "url": "https://rentadeiluminacion.com",
        "telephone": "+525530682988",
        "address": { "@type": "PostalAddress", "addressLocality": "Ciudad de M\xE9xico", "addressRegion": "CDMX", "addressCountry": "MX" }
      },
      "description": "Servicio profesional de renta de m\xE1quinas de burbujas para bodas, XV a\xF1os, fiestas infantiles y eventos en CDMX. Burbujas continuas o gigantes.",
      "areaServed": [
        { "@type": "City", "name": "Ciudad de M\xE9xico" },
        { "@type": "State", "name": "Estado de M\xE9xico" }
      ],
      "serviceType": "Renta de M\xE1quina de Burbujas",
      "priceRange": "$$"
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "\xBFLa m\xE1quina de burbujas moja el piso?", "acceptedAnswer": { "@type": "Answer", "text": "Las burbujas dejan una capa muy ligera de jab\xF3n en el piso al reventarse, especialmente si el volumen es alto. En pistas de baile, recomendamos tener personal que revise el \xE1rea peri\xF3dicamente. El fluido profesional que usamos es m\xEDnimamente resbaladizo comparado con soluciones caseras." } },
        { "@type": "Question", "name": "\xBFCu\xE1nto tiempo produce burbujas una carga de fluido?", "acceptedAnswer": { "@type": "Answer", "text": "Un litro de fluido concentrado produce burbujas continuas durante 60-90 minutos en uso normal. Para eventos de 4-6 horas llevamos fluido adicional para recargas." } },
        { "@type": "Question", "name": "\xBFSirve para la entrada de la quincea\xF1era o los novios?", "acceptedAnswer": { "@type": "Answer", "text": "S\xED \u2014 es uno de los usos m\xE1s populares. La entrada de la quincea\xF1era o los novios entre una lluvia de burbujas es una imagen espectacular para las fotos y el video. El operador activa la m\xE1quina exactamente cuando la persona hace su entrada." } }
      ]
    }
  ]);
  const serviciosRelacionados = [
    { title: "Humo Bajo", image: "/img/humo-bajo/efecto-nubes-piso-boda-jardin-400w.avif", alt: "Niebla baja en boda en jard\xEDn", description: "Burbujas + niebla baja = entrada de los novios como en una pel\xEDcula. El combo m\xE1s m\xE1gico para bodas.", link: "/servicios/humo-bajo/" },
    { title: "Confeti y Papelitos", image: "/img/maquina-de-papelitos/confeti-dorado-primer-baile-novios-romantico-400w.avif", alt: "Confeti dorado en primer baile de novios", description: "Burbujas durante la ceremonia + confeti en el brindis. Dos momentos visuales que la gente no olvida.", link: "/servicios/confeti/" },
    { title: "Luces Ne\xF3n y UV", image: "/img/luces-neon/renta-luces-neon-glow-party-celebracion-neon-300w.avif", alt: "Luces ne\xF3n UV en fiesta", description: "Las burbujas con iluminaci\xF3n UV se vuelven fluorescentes \u2014 el efecto m\xE1s sorprendente para glow parties.", link: "/servicios/luces-neon/" },
    { title: "Sky Tracker", image: "/img/sky-tracker/renta-skytracker-cielo-nocturno-potente-300w.avif", alt: "Sky tracker con haz al cielo", description: "Para eventos al aire libre: burbujas + sky tracker crean un momento visual \xFAnico e irrepetible.", link: "/servicios/sky-tracker/" }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "canonical": canonical, "schemaMarkup": schemaMarkup }, { "breadcrumbs": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "breadcrumbs" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Breadcrumbs", $$Breadcrumbs, { "items": [
    { label: "Inicio", href: "/" },
    { label: "Efectos Especiales", href: "/servicios/efectos-especiales/" },
    { label: "Burbujas" }
  ] })} ` })}`, "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, { "title": "Renta de M\xE1quina de Burbujas para Fiestas y Eventos en CDMX", "subtitle": "Lluvia continua de burbujas para entradas, vals, pistas de baile y fiestas infantiles. Fluido profesional. Desde $1,800 + IVA.", "introParagraph1": "Hay que ser honestos: las burbujas dependen del viento. En interiores o en jardines protegidos, la lluvia de burbujas dura flotando 10-15 segundos y se ve tal como en las fotos. Con viento fuerte, las burbujas se dispersan r\xE1pido y el efecto dura menos. Dicho eso, cuando las condiciones son buenas, la entrada de los novios entre burbujas o la sorpresa en una fiesta infantil genera reacciones genuinas que ning\xFAn otro efecto logra. En <strong>REDEIL</strong> usamos m\xE1quinas de producci\xF3n continua que generan entre 500 y 2,000 burbujas por minuto.", "introParagraph2": "Usamos fluido profesional concentrado que produce burbujas m\xE1s resistentes que las de jab\xF3n casero \u2014 flotan m\xE1s, revientan menos r\xE1pido y generan un efecto m\xE1s denso. Algo que la gente no pregunta pero deber\xEDa: el piso se pone resbaloso si las burbujas caen en superficie lisa (m\xE1rmol, porcelanato). Para pistas de baile con uso intensivo, recomendamos que el personal del venue revise la zona. Con luz UV, las burbujas se vuelven fluorescentes, que es el efecto que funciona para glow parties y XV a\xF1os tem\xE1ticos." })} ${renderComponent($$result2, "CtaBar", $$CtaBar, { "headline": "\xBFPara qu\xE9 tipo de evento necesitas burbujas?", "items": [
    { label: "Bodas", href: "/eventos/bodas/", icon: "efectos" },
    { label: "XV A\xF1os", href: "/eventos/xv-anos/", icon: "efectos" },
    { label: "M\xE1s efectos", href: "/servicios/efectos-especiales/", icon: "efectos" },
    { label: "Cotiza Gratis", href: "/contacto/", icon: "cotizar" }
  ] })}  ${maybeRenderHead()}<section class="services-section"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "\xBFC\xF3mo se ven las burbujas en un evento real?", "subtitle": "Un efecto que queda bien en cualquier tipo de evento y en cualquier foto.", "paragraph1": "La clave con burbujas es el timing. Si las activas 5 segundos antes de que los novios entren, el fot\xF3grafo captura la lluvia en su punto m\xE1ximo. Si las activas tarde, los novios ya pasaron y las burbujas caen atr\xE1s sin contexto. El operador se coordina con el fot\xF3grafo y el MC para activar en el momento exacto.", "paragraph2": "En fiestas infantiles es m\xE1s simple: activas y los ni\xF1os hacen el resto. Las burbujas gigantes de 30-50cm generan m\xE1s reacci\xF3n que las peque\xF1as pero producen menos cantidad." })} ${renderComponent($$result2, "Gallery4x4", $$Gallery4X4, { "images": [
    { src: "/img/burbujas/maquina-burbujas-boda-entrada-novios.avif", alt: "M\xE1quina de burbujas en entrada de novios a boda" },
    { src: "/img/burbujas/maquina-burbujas-profesional-boda-jardin.avif", alt: "M\xE1quina de burbujas profesional en jard\xEDn de boda" },
    { src: "/img/burbujas/maquina-burbujas-vals-quinceanos-pista.avif", alt: "Burbujas en vals de quincea\xF1era en pista" },
    { src: "/img/burbujas/renta-burbujas-evento-xv-anos-salon.avif", alt: "Renta de burbujas para evento de XV a\xF1os en sal\xF3n" },
    { src: "/img/burbujas/burbujas-gigantes-fiesta-cumpleanos-ninos.avif", alt: "Burbujas gigantes en fiesta de cumplea\xF1os de ni\xF1os" },
    { src: "/img/burbujas/burbujas-gigantes-show-infantil-animacion.avif", alt: "Show infantil con burbujas gigantes y animaci\xF3n" },
    { src: "/img/burbujas/maquina-burbujas-fiesta-jardin-terraza.avif", alt: "M\xE1quina de burbujas en fiesta de jard\xEDn y terraza" },
    { src: "/img/burbujas/maquina-burbujas-boda-romantica-exterior.avif", alt: "Burbujas en boda rom\xE1ntica en exterior" },
    { src: "/img/burbujas/burbujas-fiesta-tematica-magica-luces.avif", alt: "Burbujas en fiesta tem\xE1tica m\xE1gica con luces" },
    { src: "/img/burbujas/renta-maquina-burbujas-fiesta-infantil.avif", alt: "M\xE1quina de burbujas para fiesta infantil" },
    { src: "/img/burbujas/renta-burbujas-baby-shower-decoracion.avif", alt: "Burbujas en decoraci\xF3n de baby shower" },
    { src: "/img/burbujas/renta-burbujas-evento-corporativo-lanzamiento.avif", alt: "Burbujas en lanzamiento de evento corporativo" },
    { src: "/img/burbujas/burbujas-fiesta-pool-party-alberca.avif", alt: "Burbujas en fiesta pool party junto a alberca" },
    { src: "/img/burbujas/renta-burbujas-festival-kermesse-feria.avif", alt: "M\xE1quina de burbujas en festival y kermesse" },
    { src: "/img/burbujas/maquina-burbujas-despedida-soltera-diversion.avif", alt: "Burbujas en despedida de soltera divertida" },
    { src: "/img/burbujas/burbujas-efecto-especial-fotografia-video.avif", alt: "Efecto especial de burbujas para fotograf\xEDa y video" }
  ] })} </div> </section>  <section class="services-section services-alt" id="paquetes"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "\xBFCu\xE1nto cuesta rentar m\xE1quina de burbujas en CDMX?", "subtitle": "Para un momento espec\xEDfico o para toda la fiesta. Operador incluido.", "paragraph1": "Cada paquete incluye la m\xE1quina, fluido profesional, operador t\xE9cnico y traslado. El operador coordina el momento exacto de activaci\xF3n con el DJ o maestro de ceremonias.", "paragraph2": "\xBFQuieres burbujas gigantes con UV para glow party? \xBFO lluvia continua para la pista de baile de toda la noche? Cotiza tu combinaci\xF3n ideal." })} ${renderComponent($$result2, "PricingCards", $$PricingCards, { "packages": [
    {
      name: "Momento Estelar",
      price: "$1,800",
      priceNote: "+ IVA",
      description: "Burbujas para un momento espec\xEDfico: entrada, vals, brindis. El efecto perfecto para la foto que todos quieren.",
      features: [
        { text: "1 m\xE1quina de burbujas profesional", included: true },
        { text: "Fluido profesional (1 hora)", included: true },
        { text: "Operador t\xE9cnico incluido", included: true },
        { text: "Traslado + montaje + desmontaje", included: true },
        { text: "Coordinaci\xF3n con DJ/fot\xF3grafo", included: true },
        { text: "Ideal para: entrada, vals, momentos especiales", included: true },
        { text: "Uso toda la noche", included: false },
        { text: "Burbujas gigantes UV", included: false }
      ],
      ctaLabel: "Cotizar momento estelar",
      ctaHref: "/servicios/burbujas/paquete-fiesta-infantil/"
    },
    {
      name: "Fiesta Completa",
      price: "$3,200",
      priceNote: "+ IVA",
      badge: "M\xE1s popular",
      highlight: true,
      description: "Burbujas disponibles toda la noche para m\xFAltiples momentos. El operador activa en los picos del evento.",
      features: [
        { text: "1 m\xE1quina de burbujas de alta producci\xF3n", included: true },
        { text: "Fluido ilimitado (toda la noche)", included: true },
        { text: "Operador t\xE9cnico 4-6 horas", included: true },
        { text: "Traslado + montaje + desmontaje", included: true },
        { text: "Activaciones m\xFAltiples a demanda", included: true },
        { text: "Ideal para: bodas, XV a\xF1os, fiestas", included: true },
        { text: "Coordinaci\xF3n completa con DJ/MC", included: true },
        { text: "Burbujas gigantes UV", included: false }
      ],
      ctaLabel: "Cotizar fiesta completa",
      ctaHref: "/servicios/burbujas/paquete-boda-entrada/"
    },
    {
      name: "Show Infantil",
      price: "$4,500",
      priceNote: "+ IVA",
      description: "Burbujas gigantes + lluvia continua para el show m\xE1s memorable. Ideal para eventos infantiles y cumplea\xF1os.",
      features: [
        { text: "1 m\xE1quina de lluvia + 1 de burbujas gigantes", included: true },
        { text: "Fluido ilimitado", included: true },
        { text: "Operador t\xE9cnico incluido", included: true },
        { text: "Traslado + montaje + desmontaje", included: true },
        { text: "Burbujas de 30-50cm de di\xE1metro", included: true },
        { text: "Ideal para: cumplea\xF1os infantiles, colegios", included: true },
        { text: "Coordinaci\xF3n con animador del evento", included: true },
        { text: "Show de burbujas de 20 minutos", included: true }
      ],
      ctaLabel: "Cotizar show infantil",
      ctaHref: "/servicios/burbujas/paquete-burbujas-gigantes/"
    },
    {
      name: "Glow Party UV",
      price: "$6,500",
      priceNote: "+ IVA",
      description: "Burbujas + luz UV + fluido fluorescente. Las burbujas se iluminan en colores ne\xF3n bajo la luz negra.",
      features: [
        { text: "2 m\xE1quinas de burbujas profesionales", included: true },
        { text: "Fluido fluorescente UV especial", included: true },
        { text: "4 barras UV LED para iluminar las burbujas", included: true },
        { text: "Fluido ilimitado toda la noche", included: true },
        { text: "Operadores t\xE9cnicos incluidos", included: true },
        { text: "Traslado + montaje + desmontaje", included: true },
        { text: "Ideal para: glow parties, XV a\xF1os ne\xF3n", included: true },
        { text: "Coordinaci\xF3n con DJ y luces", included: true }
      ],
      ctaLabel: "Cotizar glow party",
      ctaHref: "/servicios/burbujas/paquete-produccion/"
    }
  ] })} </div> </section>  <section class="faq-section"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Preguntas frecuentes sobre burbujas para eventos", "subtitle": "Todo lo que necesitas saber antes de contratar.", "paragraph1": "Si tienes otra duda, escr\xEDbenos por WhatsApp y te respondemos en minutos.", "paragraph2": "Te asesoramos sobre qu\xE9 tipo de m\xE1quina y fluido es mejor para tu tipo de evento." })} </div> ${renderComponent($$result2, "FaqSection", $$FaqSection, { "items": [
    { question: "\xBFEl piso se pone resbaloso?", answer: "S\xED, algo. El fluido profesional deja menos residuo que el jab\xF3n casero, pero en superficies lisas (m\xE1rmol, porcelanato) se nota. Para pistas de baile con uso intensivo, el personal del venue deber\xEDa revisar cada cierto rato. En pool parties donde la gente anda descalza, m\xE1s cuidado todav\xEDa." },
    { question: "\xBFFunciona con viento?", answer: "Funciona pero diferente. Con poco viento las burbujas flotan 10-15 segundos y el efecto es denso. Con viento fuerte se dispersan r\xE1pido y algunas revientan antes de subir. Para la foto de la entrada de los novios, los mejores resultados son con poco o nada de viento." },
    { question: "\xBFCu\xE1ntas burbujas produce?", answer: "Las m\xE1quinas de lluvia producen entre 500 y 2,000 por minuto. Las de burbujas gigantes, 5-20 grandes por minuto. Para la entrada de los novios usamos lluvia al m\xE1ximo para efecto denso. Para fiesta infantil, las gigantes generan m\xE1s reacci\xF3n." },
    { question: "\xBFEs seguro para ni\xF1os peque\xF1os?", answer: "El fluido es no t\xF3xico y est\xE1 formulado para entretenimiento infantil. Si un ni\xF1o toca una burbuja o se la mete a la boca, no pasa nada. Lo que s\xED evitamos es que toquen el fluido concentrado directo \u2014 que est\xE1 en el tanque de la m\xE1quina, no en las burbujas." },
    { question: "\xBFSe ven en fotos?", answer: "Se ven bien cuando hay iluminaci\xF3n de fondo. La luz rebota en cada burbuja y genera puntos de luz. Los fot\xF3grafos de bodas saben capturarlas. Con luz UV, las burbujas fluorescentes quedan en otro nivel \u2014 pero necesitas oscuridad para que funcione." },
    { question: "\xBFPuedo pedir burbujas solo para un momento?", answer: "S\xED. El paquete Momento Estelar cubre una activaci\xF3n espec\xEDfica: entrada de los novios, brindis, vals. El operador llega, monta, activa en el momento exacto coordinado con el fot\xF3grafo, y desmonta." }
  ] })} </section>  <section class="services-section services-alt"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "\xBFQu\xE9 otros servicios combinan con burbujas?", "subtitle": "Los novios entran entre nubes en el piso y burbujas en el aire.", "paragraph1": "La combinaci\xF3n que m\xE1s montamos en bodas: humo bajo pegado al suelo + lluvia de burbujas desde arriba. El fot\xF3grafo queda loco con ese encuadre. Para XV a\xF1os, el combo es burbujas + UV \u2014 las burbujas fluorescentes en la oscuridad generan reacciones genuinas.", "paragraph2": "Cuando el cliente ya tiene humo bajo o luces ne\xF3n con nosotros, el operador de burbujas coordina directo con el resto del equipo." })} <div class="services-grid"> ${serviciosRelacionados.map((s) => renderTemplate`${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "title": s.title, "image": s.image, "alt": s.alt, "description": s.description, "link": s.link })}`)} </div> </div> </section>  <section class="cta-section"> <div class="container"> <div class="cta-content"> <h2>¿Lista la lluvia de burbujas para tu evento?</h2> <p>Cuéntanos qué tipo de evento es, cuántas personas esperan y qué momento quieres que sea especial. Te cotizamos en minutos.</p> <div class="cta-buttons"> <a href="/contacto/" class="btn btn-whatsapp btn-lg">Cotiza por WhatsApp</a> <a href="tel:+525530682988" class="btn btn-primary btn-lg">Llámanos — 55 3068 2988</a> </div> </div> </div> </section> ` })}`;
}, "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/pages/servicios/burbujas.astro", void 0);

const $$file = "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/pages/servicios/burbujas.astro";
const $$url = "/servicios/burbujas";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Burbujas,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
