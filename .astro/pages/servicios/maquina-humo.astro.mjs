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

const $$MaquinaHumo = createComponent(($$result, $$props, $$slots) => {
  const title = "Renta de M\xE1quina de Humo para Eventos CDMX | REDEIL";
  const description = "M\xE1quinas de humo profesionales para pistas de baile, DJ sets, fiestas ne\xF3n y eventos tem\xE1ticos en CDMX. Humo atmosf\xE9rico denso. Sin olor. Desde $2,500 + IVA.";
  const canonical = "https://rentadeiluminacion.com/servicios/maquina-humo/";
  const schemaMarkup = JSON.stringify([
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Renta de M\xE1quina de Humo para Eventos",
      "provider": {
        "@type": "LocalBusiness",
        "name": "REDEIL",
        "url": "https://rentadeiluminacion.com",
        "telephone": "+525530682988",
        "address": { "@type": "PostalAddress", "addressLocality": "Ciudad de M\xE9xico", "addressRegion": "CDMX", "addressCountry": "MX" }
      },
      "description": "Servicio profesional de renta de m\xE1quinas de humo atmosf\xE9rico para fiestas, eventos tem\xE1ticos y DJ sets en CDMX. Equipo Antari y Chauvet.",
      "areaServed": [
        { "@type": "City", "name": "Ciudad de M\xE9xico" },
        { "@type": "State", "name": "Estado de M\xE9xico" }
      ],
      "serviceType": "Renta de M\xE1quina de Humo",
      "priceRange": "$$"
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "\xBFCu\xE1l es la diferencia entre humo y humo bajo?", "acceptedAnswer": { "@type": "Answer", "text": "La m\xE1quina de humo convencional crea humo que asciende y llena el sal\xF3n \u2014 ideal para pistas de baile y DJ sets. El humo bajo (niebla fr\xEDa) permanece pegado al piso creando el efecto de nubes \u2014 ideal para bodas y vals. Para fiestas de noche con DJ, se usa la m\xE1quina convencional." } },
        { "@type": "Question", "name": "\xBFEl humo da\xF1a el equipo de audio o iluminaci\xF3n?", "acceptedAnswer": { "@type": "Answer", "text": "El fluido de humo de calidad profesional no da\xF1a el equipo electr\xF3nico. Es el mismo tipo que se usa en conciertos de estadio donde hay millones en equipos expuestos. Usamos fluidos certificados Antari y Chauvet." } },
        { "@type": "Question", "name": "\xBFCu\xE1nto dura el fluido de humo?", "acceptedAnswer": { "@type": "Answer", "text": "Un litro de fluido genera entre 60-90 minutos de humo intermitente en uso normal. Para eventos de 4-6 horas llevamos 2-3 litros de fluido extra." } }
      ]
    }
  ]);
  const serviciosRelacionados = [
    { title: "Cabezas M\xF3viles", image: "/img/cabezas-moviles/renta-cabezas-moviles-show-luces-beams-colores-300w.avif", alt: "Show de beams con humo en pista de baile", description: "Los beams de las cabezas m\xF3viles se ven espectaculares cortando el humo. El efecto de concierto que todos quieren.", link: "/servicios/cabezas-moviles/" },
    { title: "Luces Ne\xF3n y UV", image: "/img/luces-neon/renta-luces-neon-glow-party-celebracion-neon-300w.avif", alt: "Luces ne\xF3n UV en glow party", description: "Humo atmosf\xE9rico + luces UV = pista de baile de otro planeta. El combo estrella para fiestas tem\xE1ticas.", link: "/servicios/luces-neon/" },
    { title: "Bola Disco", image: "/img/bola-disco/bola-disco-dj-pista-baile-evento.avif", alt: "Bola disco en pista de baile", description: "Los reflejos de la bola disco en el humo crean miles de puntos de luz. El efecto m\xE1s fotog\xE9nico para fiestas.", link: "/servicios/bola-disco/" },
    { title: "Humo Bajo", image: "/img/humo-bajo/efecto-nubes-piso-boda-jardin-400w.avif", alt: "Humo bajo para bodas", description: "Para bodas, el humo bajo es la opci\xF3n: niebla que permanece en el piso sin llenar el sal\xF3n. Ideal para el vals.", link: "/servicios/humo-bajo/" }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "canonical": canonical, "schemaMarkup": schemaMarkup }, { "breadcrumbs": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "breadcrumbs" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Breadcrumbs", $$Breadcrumbs, { "items": [
    { label: "Inicio", href: "/" },
    { label: "Efectos Especiales", href: "/servicios/efectos-especiales/" },
    { label: "M\xE1quina de Humo" }
  ] })} ` })}`, "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, { "title": "Renta de M\xE1quina de Humo para Fiestas y Eventos en CDMX", "subtitle": "Humo atmosf\xE9rico profesional para pistas de baile, DJ sets y fiestas tem\xE1ticas. Antari y Chauvet. Desde $2,500 + IVA.", "introParagraph1": "La m\xE1quina de humo hace una cosa que ning\xFAn otro efecto hace: vuelve visibles los haces de luz. Sin humo, los beams de las cabezas m\xF3viles solo se ven donde tocan una pared o el piso. Con humo, cada rayo se dibuja completo en el aire. Es la raz\xF3n por la que los conciertos usan humo atmosf\xE9rico, y es la raz\xF3n por la que una pista de baile con cabezas m\xF3viles y sin humo se ve incompleta. En <strong>REDEIL</strong> operamos <strong>Antari Z-1500</strong> y <strong>Chauvet Hurricane 1302</strong> de 1,200W a 1,500W con fluido de glicol farmac\xE9utico.", "introParagraph2": "No es lo mismo que el humo bajo. La m\xE1quina de humo convencional crea una neblina que sube y llena el espacio de forma uniforme \u2014 el operador controla la densidad con r\xE1fagas cortas, no es un chorro continuo. El punto es lograr una atm\xF3sfera donde la luz se vea sin que la gente deje de ver al DJ o a la pista. Antes del evento verificamos si el venue tiene detectores de humo y coordinamos con el sal\xF3n para desactivarlos temporalmente en la zona de la pista. Es algo que no todos los proveedores hacen y que evita que suene la alarma a media fiesta." })} ${renderComponent($$result2, "CtaBar", $$CtaBar, { "headline": "\xBFPara qu\xE9 tipo de evento?", "items": [
    { label: "Fiesta con DJ", href: "#paquetes", icon: "efectos" },
    { label: "Fiesta Ne\xF3n", href: "/servicios/luces-neon/", icon: "efectos" },
    { label: "M\xE1s efectos", href: "/servicios/efectos-especiales/", icon: "efectos" },
    { label: "Cotiza Gratis", href: "/contacto/", icon: "cotizar" }
  ] })}  ${maybeRenderHead()}<section class="services-section"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Humo atmosf\xE9rico en fiestas y eventos reales", "subtitle": "Pistas de baile, shows de DJ, eventos tem\xE1ticos y producciones.", "paragraph1": "El humo se controla con r\xE1fagas cortas. No es un chorro continuo. El operador activa 3-5 segundos, espera a que la neblina se distribuya, y repite cuando baja la densidad. Si el DJ est\xE1 por soltar un drop, la activaci\xF3n va 10 segundos antes para que los beams encuentren humo cuando cambia la luz.", "paragraph2": "La diferencia entre un evento con operador y uno donde dejan la m\xE1quina en autom\xE1tico es que el autom\xE1tico llena el sal\xF3n entero en 15 minutos y la gente empieza a toser. Con operador, la densidad se mantiene en el punto donde los haces se ven pero la gente respira normal." })} ${renderComponent($$result2, "Gallery4x4", $$Gallery4X4, { "images": [
    { src: "/img/humo/maquina-humo-profesional-boda-pista-baile.avif", alt: "M\xE1quina de humo profesional en pista de baile de boda" },
    { src: "/img/humo/humo-profesional-evento-nocturno-iluminacion.avif", alt: "Humo profesional con iluminaci\xF3n en evento nocturno" },
    { src: "/img/humo/maquina-humo-concierto-festival-luces.avif", alt: "M\xE1quina de humo en concierto con luces" },
    { src: "/img/humo/niebla-densa-fiesta-electronica-rave.avif", alt: "Niebla densa en fiesta electr\xF3nica rave" },
    { src: "/img/humo/maquina-humo-fiesta-neon-discoteca.avif", alt: "Humo en fiesta ne\xF3n discoteca" },
    { src: "/img/humo/efecto-humo-evento-corporativo-escenario.avif", alt: "Efecto de humo en escenario corporativo" },
    { src: "/img/humo/renta-humo-atmosferico-fiesta-tematica.avif", alt: "Humo atmosf\xE9rico en fiesta tem\xE1tica" },
    { src: "/img/humo/renta-maquina-humo-eventos-fiesta-noche.avif", alt: "M\xE1quina de humo en evento de noche" },
    { src: "/img/humo/renta-humo-fiestas-xv-anos-salon.avif", alt: "Humo en salon para fiesta de XV a\xF1os" },
    { src: "/img/humo/maquina-niebla-boda-romantica-jardin.avif", alt: "Niebla en boda rom\xE1ntica en jard\xEDn" },
    { src: "/img/humo/renta-humo-escenario-presentacion-dj.avif", alt: "Humo en presentaci\xF3n de DJ en escenario" },
    { src: "/img/humo/renta-humo-evento-empresarial-lanzamiento.avif", alt: "Humo en lanzamiento de evento empresarial" },
    { src: "/img/humo/renta-humo-espectaculo-magia-show.avif", alt: "Humo en espect\xE1culo de magia y show" },
    { src: "/img/humo/humo-teatral-obra-teatro-escenario.avif", alt: "Humo teatral en obra de teatro" },
    { src: "/img/humo/efecto-humo-sesion-fotos-profesional.avif", alt: "Efecto de humo en sesi\xF3n de fotos profesional" },
    { src: "/img/humo/efecto-niebla-fiesta-cumpleanos-luces.avif", alt: "Niebla con luces en fiesta de cumplea\xF1os" }
  ] })} </div> </section>  <section class="services-section services-alt" id="paquetes"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Paquetes de M\xE1quina de Humo", "subtitle": "Desde una activaci\xF3n hasta cobertura de toda la noche. Operador incluido.", "paragraph1": "Cada paquete incluye la m\xE1quina de humo profesional, fluido certificado, operador t\xE9cnico y traslado. El operador coordina con el DJ para activar el humo en los momentos de mayor impacto \u2014 drops, momentos especiales, presentaciones.", "paragraph2": "\xBFQuieres combinar con cabezas m\xF3viles o luces ne\xF3n? Armamos el paquete con precio especial." })} ${renderComponent($$result2, "PricingCards", $$PricingCards, { "packages": [
    {
      name: "Fiesta B\xE1sica",
      price: "$2,500",
      priceNote: "+ IVA",
      description: "M\xE1quina de humo para la pista de baile. Ideal para fiestas privadas, cumplea\xF1os y eventos hasta 100 personas.",
      features: [
        { text: "1 m\xE1quina de humo 1,200W", included: true },
        { text: "1L fluido certificado (60-90 min)", included: true },
        { text: "Operador t\xE9cnico incluido", included: true },
        { text: "Traslado + montaje + desmontaje", included: true },
        { text: "Ideal para: pista de baile, fiestas", included: true },
        { text: "Coordinaci\xF3n con DJ", included: true },
        { text: "Fluido adicional", included: false },
        { text: "Segunda m\xE1quina", included: false }
      ],
      ctaLabel: "Cotizar fiesta b\xE1sica",
      ctaHref: "/servicios/maquina-humo/paquete-dj-fiesta/"
    },
    {
      name: "Noche Completa",
      price: "$4,500",
      priceNote: "+ IVA",
      badge: "M\xE1s popular",
      highlight: true,
      description: "Humo durante toda la noche con fluido ilimitado. El operador activa en los mejores momentos del evento.",
      features: [
        { text: "1 m\xE1quina de humo 1,500W", included: true },
        { text: "Fluido ilimitado (toda la noche)", included: true },
        { text: "Operador t\xE9cnico 4-6 horas", included: true },
        { text: "Traslado + montaje + desmontaje", included: true },
        { text: "Activaciones coordinadas con DJ", included: true },
        { text: "Ideal para: XV a\xF1os, bodas, fiestas grandes", included: true },
        { text: "Control de intensidad variable", included: true },
        { text: "Segunda m\xE1quina", included: false }
      ],
      ctaLabel: "Cotizar noche completa",
      ctaHref: "/servicios/maquina-humo/paquete-noche-completa/"
    },
    {
      name: "Doble Potencia",
      price: "$7,000",
      priceNote: "+ IVA",
      description: "2 m\xE1quinas para cobertura total en salones grandes o para crear un efecto m\xE1s denso y espectacular.",
      features: [
        { text: "2 m\xE1quinas de humo 1,500W cada una", included: true },
        { text: "Fluido ilimitado toda la noche", included: true },
        { text: "2 operadores t\xE9cnicos", included: true },
        { text: "Traslado + montaje + desmontaje", included: true },
        { text: "Cobertura total del venue", included: true },
        { text: "Ideal para: salones grandes, haciendas", included: true },
        { text: "Sincronizaci\xF3n entre m\xE1quinas", included: true },
        { text: "Combinable con cabezas m\xF3viles", included: true }
      ],
      ctaLabel: "Cotizar doble potencia",
      ctaHref: "/servicios/maquina-humo/paquete-show-corporativo/"
    },
    {
      name: "Producci\xF3n Completa",
      price: "$11,000",
      priceNote: "+ IVA",
      description: "Humo + cabezas m\xF3viles + DJ. El paquete completo para una pista de baile de nivel concierto.",
      features: [
        { text: "2 m\xE1quinas de humo profesionales", included: true },
        { text: "8 cabezas m\xF3viles (beam + wash)", included: true },
        { text: "DJ profesional incluido", included: true },
        { text: "Fluido ilimitado toda la noche", included: true },
        { text: "Equipo t\xE9cnico completo", included: true },
        { text: "Coordinaci\xF3n total integrada", included: true },
        { text: "Ideal para: XV a\xF1os, corporativos, fiestas VIP", included: true },
        { text: "Visita previa al venue", included: true }
      ],
      ctaLabel: "Cotizar producci\xF3n completa",
      ctaHref: "/servicios/maquina-humo/paquete-festival/"
    }
  ] })} </div> </section>  <section class="faq-section"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Preguntas sobre M\xE1quina de Humo", "subtitle": "Las dudas que la gente nos manda por WhatsApp.", "paragraph1": "Si tu venue tiene detectores de humo, eso es lo primero que necesitamos saber.", "paragraph2": "" })} </div> ${renderComponent($$result2, "FaqSection", $$FaqSection, { "items": [
    { question: "\xBFEs lo mismo que el humo bajo?", answer: "No. Son dos efectos diferentes. La m\xE1quina de humo convencional crea neblina que sube y llena el espacio \u2014 hace visibles los beams y los l\xE1seres. El humo bajo permanece pegado al piso y genera el efecto de nubes para el vals. Para fiestas con DJ y pista de baile, se usa la convencional. Para bodas, el humo bajo." },
    { question: "\xBFActiva las alarmas del sal\xF3n?", answer: "Puede. Depende del tipo de detector. Los detectores i\xF3nicos son sensibles al humo de glicol, los fotoel\xE9ctricos menos. Lo que hacemos es preguntar por el sistema del venue antes del evento y coordinar con el encargado del sal\xF3n para desactivar la zona de la pista. Los salones de eventos de CDMX ya conocen el procedimiento." },
    { question: "\xBFEl fluido deja olor en la ropa?", answer: "No. El fluido de glicol farmac\xE9utico que usamos (Antari y Chauvet) no deja olor ni residuo. Algunas personas perciben un ligero olor dulce en el momento de la activaci\xF3n que se va en segundos. No mancha ropa ni superficies." },
    { question: "\xBFSirve en exteriores?", answer: "Funciona, pero el efecto dura menos. Al aire libre el humo se dispersa r\xE1pido con cualquier brisa. Para jardines sin viento se ve bien. Para espacios abiertos con viento, usamos dos m\xE1quinas para compensar la dispersi\xF3n. En interiores es donde mejor resultado da." },
    { question: "\xBFCu\xE1nto tarda en llenar la pista?", answer: "Una r\xE1faga de 5 segundos con la Antari Z-1500 crea un efecto visible al instante. Llenar una pista de 100m\xB2 con densidad uniforme toma 2-3 minutos con activaciones intermitentes. El operador regula para que se vean los beams sin que la gente deje de verse entre s\xED." },
    { question: "\xBFSe puede combinar con l\xE1seres?", answer: "Es una de las combinaciones que m\xE1s piden. Los l\xE1seres dibujan l\xEDneas n\xEDtidas en el humo \u2014 sin humo, el l\xE1ser solo se ve como un punto donde toca superficie. El humo le da cuerpo a cada l\xEDnea." }
  ] })} </section>  <section class="services-section services-alt"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "El humo funciona mejor combinado", "subtitle": "Sin humo, los beams son puntos. Con humo, son l\xEDneas.", "paragraph1": "La combinaci\xF3n que m\xE1s montamos: humo + 8 cabezas m\xF3viles en la pista. Los beams se dibujan completos en el aire y el efecto es de concierto. Con luces UV, el humo toma color fluorescente y la pista se ve como otra dimensi\xF3n.", "paragraph2": "Cuando el cliente ya tiene DJ con nosotros, el operador de humo se coordina directo \u2014 activa en los drops y los momentos de mayor energ\xEDa." })} <div class="services-grid"> ${serviciosRelacionados.map((s) => renderTemplate`${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "title": s.title, "image": s.image, "alt": s.alt, "description": s.description, "link": s.link })}`)} </div> </div> </section>  <section class="cta-section"> <div class="container"> <div class="cta-content"> <h2>¿Lista tu pista de baile para el show?</h2> <p>Cuéntanos el tipo de evento y el tamaño del venue. Te decimos qué equipo es el ideal y te cotizamos todo.</p> <div class="cta-buttons"> <a href="/contacto/" class="btn btn-whatsapp btn-lg">Cotiza por WhatsApp</a> <a href="tel:+525530682988" class="btn btn-primary btn-lg">Llámanos — 55 3068 2988</a> </div> </div> </div> </section> ` })}`;
}, "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/pages/servicios/maquina-humo.astro", void 0);

const $$file = "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/pages/servicios/maquina-humo.astro";
const $$url = "/servicios/maquina-humo";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$MaquinaHumo,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
