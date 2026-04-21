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

const $$CityColor = createComponent(($$result, $$props, $$slots) => {
  const title = "Renta de City Color LED para Bodas y Eventos CDMX | REDEIL";
  const description = "Ca\xF1ones de luz LED RGBW para ba\xF1ar de color fachadas, salones y escenarios. Bodas, corporativos y festivales en CDMX. Desde $4,000 + IVA.";
  const canonical = "https://rentadeiluminacion.com/servicios/city-color/";
  const schemaMarkup = JSON.stringify([
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Renta de City Color para Eventos",
      "provider": {
        "@type": "LocalBusiness",
        "name": "REDEIL",
        "url": "https://rentadeiluminacion.com",
        "telephone": "+525530682988",
        "address": { "@type": "PostalAddress", "addressLocality": "Ciudad de M\xE9xico", "addressRegion": "CDMX", "addressCountry": "MX" }
      },
      "description": "Servicio profesional de renta de city color y ca\xF1ones de luz LED RGBW para ba\xF1ar de color fachadas, salones y escenarios en bodas y eventos en CDMX.",
      "areaServed": [
        { "@type": "City", "name": "Ciudad de M\xE9xico" },
        { "@type": "State", "name": "Estado de M\xE9xico" }
      ],
      "serviceType": "Renta de City Color",
      "priceRange": "$$"
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "\xBFQu\xE9 es un city color?", "acceptedAnswer": { "@type": "Answer", "text": "Un city color es un ca\xF1\xF3n de luz LED RGBW de alto impacto dise\xF1ado para ba\xF1ar grandes superficies con color \u2014 fachadas de haciendas, muros de salones, columnas, escenarios. Proyecta un haz ancho y potente que cubre de 10 a 30 metros cuadrados por unidad." } },
        { "@type": "Question", "name": "\xBFCu\xE1ntos city colors necesito para mi evento?", "acceptedAnswer": { "@type": "Answer", "text": "Para una fachada de hacienda est\xE1ndar, 4-6 ca\xF1ones son suficientes. Para un sal\xF3n de eventos mediano, 8 unidades. Para venues grandes con m\xFAltiples zonas, 16 o m\xE1s. Te asesoramos seg\xFAn las dimensiones de tu espacio." } },
        { "@type": "Question", "name": "\xBFSe puede cambiar el color durante el evento?", "acceptedAnswer": { "@type": "Answer", "text": "S\xED. Los city colors se controlan v\xEDa DMX512 y pueden cambiar de color en tiempo real \u2014 rosa para el vals, dorado para la cena, multicolor para la fiesta. Nuestro operador programa los cambios seg\xFAn los momentos de tu evento." } },
        { "@type": "Question", "name": "\xBFFuncionan en exteriores?", "acceptedAnswer": { "@type": "Answer", "text": "S\xED. Nuestros ca\xF1ones de luz tienen protecci\xF3n IP65 para uso en exteriores. Son ideales para fachadas, jardines, fuentes y espacios al aire libre." } },
        { "@type": "Question", "name": "\xBFQu\xE9 diferencia hay entre city color y uplighting arquitect\xF3nico?", "acceptedAnswer": { "@type": "Answer", "text": "El city color usa ca\xF1ones de alta potencia para cubrir superficies grandes (fachadas completas, escenarios). El uplighting arquitect\xF3nico usa reflectores m\xE1s peque\xF1os para iluminar puntos espec\xEDficos (columnas, \xE1rboles, arcos). Lo ideal es combinar ambos." } },
        { "@type": "Question", "name": "\xBFSe puede combinar el city color con otros servicios?", "acceptedAnswer": { "@type": "Answer", "text": "S\xED \u2014 es lo m\xE1s recomendable. La fachada ba\xF1ada de color es solo el primer nivel. Agrega uplighting en columnas, cascadas LED dentro del sal\xF3n y sky tracker para una producci\xF3n completa." } }
      ]
    }
  ]);
  const serviciosRelacionados = [
    { title: "Iluminaci\xF3n Arquitect\xF3nica", image: "/img/iluminacion-arquitectonica/iluminacion-arquitectonica-arcos-coloniales-luz-violeta-fachada-300w.avif", alt: "Uplighting en arcos coloniales", description: "City color para las fachadas grandes + uplighting para los detalles. Cobertura total del venue.", link: "/servicios/iluminacion-arquitectonica/" },
    { title: "Sky Tracker", image: "/img/sky-tracker/renta-skytracker-cielo-nocturno-potente-300w.avif", alt: "Sky tracker al cielo", description: "Fachadas ba\xF1adas de color + haces de luz al cielo. La producci\xF3n nocturna m\xE1s impresionante.", link: "/servicios/sky-tracker/" },
    { title: "Cascadas LED", image: "/img/cascadas-led/cascadas-led-novios-mesa-romantica-boda-300w.avif", alt: "Cascadas LED para mesa de novios", description: "Color en las paredes exteriores + cascadas brillantes dentro del sal\xF3n. Adentro y afuera, transformado.", link: "/servicios/cascadas-led/" },
    { title: "Cabezas M\xF3viles", image: "/img/cabezas-moviles/renta-cabezas-moviles-boda-beams-blancos-elegante-300w.avif", alt: "Cabezas m\xF3viles con beams", description: "City color para el ambiente + cabezas m\xF3viles para el show. La combinaci\xF3n que usan en conciertos.", link: "/servicios/cabezas-moviles/" }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "canonical": canonical, "schemaMarkup": schemaMarkup }, { "breadcrumbs": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "breadcrumbs" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Breadcrumbs", $$Breadcrumbs, { "items": [
    { label: "Inicio", href: "/" },
    { label: "Iluminaci\xF3n", href: "/servicios/iluminacion/" },
    { label: "City Color" }
  ] })} ` })}`, "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, { "title": "Renta de City Color para Eventos en CDMX", "subtitle": "Ca\xF1ones de luz LED RGBW que ba\xF1an de color fachadas, salones y escenarios. Control DMX. Desde $4,000 + IVA.", "introParagraph1": "El city color es un ca\xF1\xF3n de luz LED que ba\xF1a superficies grandes con color uniforme. No es un foco que ilumina un punto \u2014 es un wash de 180W a 360W que cubre 10 a 30 metros cuadrados por unidad. Con 4 ca\xF1ones cubres la fachada frontal de una hacienda. Con 8, fachada m\xE1s jard\xEDn. Con 16, la hacienda completa. Operamos <strong>Elation SixPar</strong>, <strong>Chauvet Colorado</strong> y <strong>Martin Rush</strong> con certificaci\xF3n IP65 para exteriores.", "introParagraph2": "La diferencia con el uplighting arquitect\xF3nico es la escala. El uplighting usa reflectores chicos para puntos espec\xEDficos: una columna, un \xE1rbol, un arco. El city color ba\xF1a paredes enteras, fachadas de 15 metros de ancho, escenarios completos. Los dos se complementan y se controlan por el mismo operador v\xEDa DMX512 \u2014 cambia colores en tiempo real seg\xFAn el momento del evento. Rosa para el vals, dorado para la cena, multicolor cuando se arma la fiesta." })} ${renderComponent($$result2, "CtaBar", $$CtaBar, { "headline": "\xBFQu\xE9 quieres ba\xF1ar de color?", "items": [
    { label: "Fachadas de Hacienda", href: "#paquetes", icon: "iluminacion" },
    { label: "Toda la iluminaci\xF3n", href: "/servicios/iluminacion/", icon: "iluminacion" },
    { label: "Bodas", href: "/eventos/bodas/", icon: "iluminacion" },
    { label: "Cotiza Gratis", href: "/contacto/", icon: "cotizar" }
  ] })}  ${maybeRenderHead()}<section class="services-section"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "\xBFC\xF3mo se ve el city color en un evento real?", "subtitle": "Cada ca\xF1\xF3n cubre hasta 30m\xB2 de superficie con luz potente y uniforme.", "paragraph1": "Con 4 ca\xF1ones distribuidos a lo largo de la fachada, el color se ve uniforme sin manchas ni puntos muertos. Si los ca\xF1ones est\xE1n demasiado juntos, se superponen y generan un centro m\xE1s brillante que los bordes. La distribuci\xF3n correcta depende del ancho de la fachada y del \xE1ngulo de apertura de cada ca\xF1\xF3n.", "paragraph2": "En haciendas con cantera, el color se absorbe diferente que en paredes lisas. La cantera tiene textura y la luz resalta cada relieve. El resultado es m\xE1s dram\xE1tico que en un muro plano \u2014 pero requiere m\xE1s ca\xF1ones porque la textura absorbe m\xE1s luz." })} ${renderComponent($$result2, "Gallery4x4", $$Gallery4X4, { "images": [
    { src: "/img/city-color/city-color-fachada-hacienda-boda.avif", alt: "Fachada de hacienda ba\xF1ada de color para boda" },
    { src: "/img/city-color/iluminacion-ceremonia-boda-hacienda.avif", alt: "Ceremonia de boda con iluminaci\xF3n city color en hacienda" },
    { src: "/img/city-color/iluminacion-salon-boda-rosa.avif", alt: "Sal\xF3n de boda iluminado en rosa con city color" },
    { src: "/img/city-color/renta-city-color-boda-romantica.avif", alt: "City color rom\xE1ntico para boda" },
    { src: "/img/city-color/iluminacion-fachada-colonial-ambar.avif", alt: "Fachada colonial iluminada en \xE1mbar" },
    { src: "/img/city-color/renta-city-color-xv-anos-rosa.avif", alt: "City color rosa para XV a\xF1os" },
    { src: "/img/city-color/iluminacion-fiesta-corporativa-azul.avif", alt: "Fiesta corporativa iluminada en azul" },
    { src: "/img/city-color/renta-city-color-haciendas.avif", alt: "City color en hacienda para evento nocturno" },
    { src: "/img/city-color/iluminacion-rooftop-vista-nocturna.avif", alt: "Rooftop iluminado con city color vista nocturna" },
    { src: "/img/city-color/renta-city-color-primer-baile.avif", alt: "Primer baile con iluminaci\xF3n city color" },
    { src: "/img/city-color/iluminacion-fiesta-xv-magenta.avif", alt: "Fiesta de XV a\xF1os con iluminaci\xF3n magenta" },
    { src: "/img/city-color/luces-boda-hacienda-mexicana.avif", alt: "Luces de color en hacienda mexicana para boda" },
    { src: "/img/city-color/renta-city-color-evento-nocturno.avif", alt: "Evento nocturno con ca\xF1ones de color" },
    { src: "/img/city-color/iluminacion-profesional-jardines-eventos.avif", alt: "Iluminaci\xF3n profesional de jardines para eventos" },
    { src: "/img/city-color/renta-city-color-terraza-ciudad.avif", alt: "Terraza urbana iluminada con city color" },
    { src: "/img/city-color/luces-salon-quinceanos-morado.avif", alt: "Sal\xF3n de quincea\xF1os iluminado en morado" }
  ] })} </div> </section>  <section class="services-section services-alt" id="paquetes"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "\xBFCu\xE1nto cuesta rentar city color en CDMX?", "subtitle": "4 opciones seg\xFAn la superficie a iluminar. Operador DMX incluido.", "paragraph1": "Cada paquete incluye los ca\xF1ones LED RGBW, tripies o soportes de piso, cableado DMX, operador t\xE9cnico y desmontaje. El operador programa cambios de color para cada momento del evento \u2014 ceremonia, cena, fiesta, brindis.", "paragraph2": "\xBFTu venue necesita una configuraci\xF3n especial? Armamos propuestas a la medida. Cotiza por WhatsApp con fotos de tu espacio." })} ${renderComponent($$result2, "PricingCards", $$PricingCards, { "packages": [
    {
      name: "B\xE1sico \u2014 4 Ca\xF1ones",
      price: "$4,000",
      priceNote: "+ IVA",
      description: "Ba\xF1o de color para una fachada frontal o un lateral del sal\xF3n. El punto de partida para transformar tu venue.",
      features: [
        { text: "4 ca\xF1ones LED RGBW de 180W", included: true },
        { text: "Cobertura hasta 80m\xB2 de superficie", included: true },
        { text: "Control DMX con operador", included: true },
        { text: "Transporte + montaje + desmontaje", included: true },
        { text: "Ideal para: fachada, un lateral del sal\xF3n", included: true },
        { text: "Cambios de color programados", included: true },
        { text: "M\xFAltiples zonas de color", included: false },
        { text: "IP65 para exteriores", included: true }
      ],
      ctaLabel: "Cotizar 4 ca\xF1ones",
      ctaHref: "/servicios/city-color/paquete-4-canones/"
    },
    {
      name: "Est\xE1ndar \u2014 8 Ca\xF1ones",
      price: "$7,000",
      priceNote: "+ IVA",
      badge: "M\xE1s popular",
      highlight: true,
      description: "Fachada completa + interior del sal\xF3n. El m\xE1s pedido para bodas en haciendas \u2014 transforma dentro y fuera.",
      features: [
        { text: "8 ca\xF1ones LED RGBW de 180-360W", included: true },
        { text: "Cobertura hasta 200m\xB2 de superficie", included: true },
        { text: "2 zonas de color independientes", included: true },
        { text: "Operador DMX profesional", included: true },
        { text: "Transporte + montaje + desmontaje", included: true },
        { text: "Ideal para: bodas, haciendas, salones", included: true },
        { text: "Cambios sincronizados con momentos", included: true },
        { text: "IP65 para exteriores", included: true }
      ],
      ctaLabel: "Cotizar 8 ca\xF1ones",
      ctaHref: "/servicios/city-color/paquete-8-canones/"
    },
    {
      name: "Premium \u2014 16 Ca\xF1ones",
      price: "$12,000",
      priceNote: "+ IVA",
      description: "Hacienda completa: fachada, jard\xEDn, sal\xF3n, fuentes. M\xFAltiples zonas con colores independientes.",
      features: [
        { text: "16 ca\xF1ones LED RGBW de alta potencia", included: true },
        { text: "4+ zonas de color independientes", included: true },
        { text: "Fachada + jard\xEDn + sal\xF3n + detalles", included: true },
        { text: "Operador DMX + asistente", included: true },
        { text: "Transporte + montaje + desmontaje", included: true },
        { text: "Dise\xF1o de color personalizado", included: true },
        { text: "Visita previa al venue", included: true },
        { text: "Ideal para: haciendas completas, fincas", included: true }
      ],
      ctaLabel: "Cotizar premium",
      ctaHref: "/servicios/city-color/paquete-16-canones/"
    },
    {
      name: "Producci\xF3n \u2014 24+ Ca\xF1ones",
      price: "$18,000",
      priceNote: "+ IVA",
      description: "Producci\xF3n completa para festivales, conciertos y eventos de gran escala. Escenarios, fachadas y estructuras.",
      features: [
        { text: "24+ ca\xF1ones LED de alta potencia", included: true },
        { text: "Coreograf\xEDa de color programada", included: true },
        { text: "Sincronizaci\xF3n con audio/video", included: true },
        { text: "Equipo completo de operadores", included: true },
        { text: "Log\xEDstica y generadores incluidos", included: true },
        { text: "M\xFAltiples escenarios y zonas", included: true },
        { text: "Visita t\xE9cnica previa", included: true },
        { text: "Ideal para: festivales, conciertos, TV", included: true }
      ],
      ctaLabel: "Cotizar producci\xF3n",
      ctaHref: "/servicios/city-color/paquete-produccion/"
    }
  ] })} </div> </section>  <section class="faq-section"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Preguntas frecuentes sobre city color", "subtitle": "Todo lo que necesitas saber sobre los ca\xF1ones de luz.", "paragraph1": "Si tienes otra duda, escr\xEDbenos por WhatsApp y te asesoramos en minutos.", "paragraph2": "Cada venue es diferente \u2014 te recomendamos la cantidad exacta de ca\xF1ones seg\xFAn tu espacio." })} </div> ${renderComponent($$result2, "FaqSection", $$FaqSection, { "items": [
    { question: "\xBFCu\xE1ntos ca\xF1ones necesito?", answer: "Para una fachada frontal de 10-15 metros: 4-6 ca\xF1ones. Para fachada + jard\xEDn: 8-12. Para una hacienda completa con m\xFAltiples fachadas, jardines y fuentes: 16+. La cantidad depende del ancho de las superficies. M\xE1ndanos fotos del venue y te decimos el n\xFAmero exacto." },
    { question: "\xBFSe pueden cambiar los colores durante el evento?", answer: "S\xED. El operador los controla v\xEDa DMX512 en tiempo real. Programa cambios para cada momento: rosa suave en el vals, dorado en la cena, multicolor en la fiesta. Los cambios pueden ser graduales (fade de 10 segundos) o instant\xE1neos seg\xFAn el efecto que quieras." },
    { question: "\xBFFuncionan bajo lluvia?", answer: "S\xED. Tienen certificaci\xF3n IP65 \u2014 resistentes a lluvia, humedad y polvo. Son equipo dise\xF1ado para exteriores. Hemos montado en bodas donde llovi\xF3 toda la noche y los ca\xF1ones siguieron operando sin problema." },
    { question: "\xBFCu\xE1l es la diferencia con el uplighting?", answer: "Escala. El city color ba\xF1a superficies grandes: fachadas de 15 metros, escenarios completos. El uplighting ilumina puntos espec\xEDficos: una columna, un \xE1rbol. Se complementan bien \u2014 city color para las fachadas y uplighting para los detalles. Los controla el mismo operador." },
    { question: "\xBFConsumen mucha corriente?", answer: "No. Cada ca\xF1\xF3n LED consume 180W a 360W. Un paquete de 8 ca\xF1ones consume en total lo que un horno de microondas. En venues con instalaci\xF3n el\xE9ctrica normal no hay problema. Para 24+ ca\xF1ones o venues sin corriente, llevamos generador." },
    { question: "\xBFSe ve bien en paredes de color?", answer: "Depende del color de la pared. En paredes claras o blancas, el color del ca\xF1\xF3n se proyecta limpio. En paredes pintadas de color, el resultado es una mezcla. Pared roja + ca\xF1\xF3n azul = morado. Pared blanca + ca\xF1\xF3n azul = azul n\xEDtido. Para haciendas de cantera (beige/gris), funciona bien con casi cualquier color." }
  ] })} </section>  <section class="services-section services-alt"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "\xBFQu\xE9 otros servicios combinan con city color?", "subtitle": "La fachada ba\xF1ada de color y el sal\xF3n con backdrop brillante.", "paragraph1": "La combinaci\xF3n m\xE1s completa para haciendas: city color ba\xF1ando la fachada de un color, uplighting en columnas y \xE1rboles del jard\xEDn, y adentro cascadas LED detr\xE1s de la mesa de novios. Los invitados ven color desde que llegan al estacionamiento hasta que se sientan a cenar.", "paragraph2": "Con sky tracker se le suma un haz al cielo que marca el venue desde kil\xF3metros. Es lo que usan los antros para que los veas desde la carretera \u2014 en una hacienda el efecto es m\xE1s llamativo porque no hay otros haces compitiendo." })} <div class="services-grid"> ${serviciosRelacionados.map((s) => renderTemplate`${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "title": s.title, "image": s.image, "alt": s.alt, "description": s.description, "link": s.link })}`)} </div> </div> </section>  <section class="cta-section"> <div class="container"> <div class="cta-content"> <h2>¿Listo para bañar tu evento de color?</h2> <p>Mándanos fotos de tu venue por WhatsApp. Te decimos cuántos cañones necesitas, qué colores recomendamos y el precio exacto.</p> <div class="cta-buttons"> <a href="/contacto/" class="btn btn-whatsapp btn-lg">Cotiza por WhatsApp</a> <a href="tel:+525530682988" class="btn btn-primary btn-lg">Llámanos — 55 3068 2988</a> </div> </div> </div> </section> ` })}`;
}, "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/pages/servicios/city-color.astro", void 0);

const $$file = "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/pages/servicios/city-color.astro";
const $$url = "/servicios/city-color";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$CityColor,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
