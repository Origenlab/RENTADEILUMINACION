import { c as createComponent, b as renderComponent, r as renderTemplate, m as maybeRenderHead, F as Fragment } from '../../chunks/astro/server_D8pMnQBn.mjs';
import 'piccolore';
import { $ as $$BaseLayout, a as $$Breadcrumbs } from '../../chunks/Breadcrumbs_BkFbHGbf.mjs';
import { $ as $$Hero } from '../../chunks/Hero_3Is3fruG.mjs';
import { $ as $$CtaBar } from '../../chunks/CtaBar_CdFZlCZU.mjs';
import { $ as $$SectionHeader } from '../../chunks/SectionHeader_mLKzHzNX.mjs';
import { $ as $$ServiceCard } from '../../chunks/ServiceCard_Bli7ALj4.mjs';
import { $ as $$FaqSection } from '../../chunks/FaqSection_CzcP3CIi.mjs';
export { renderers } from '../../renderers.mjs';

const $$Iluminacion = createComponent(($$result, $$props, $$slots) => {
  const title = "Renta de Iluminaci\xF3n para Eventos en CDMX | REDEIL";
  const description = "11 tipos de iluminaci\xF3n profesional para bodas, XV a\xF1os y eventos. Guirnaldas, sky tracker, cabezas m\xF3viles. Instalaci\xF3n incluida. Cotiza por WhatsApp.";
  const canonical = "https://rentadeiluminacion.com/servicios/iluminacion/";
  const schemaMarkup = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Renta de Iluminaci\xF3n Profesional para Eventos",
    "provider": { "@type": "LocalBusiness", "name": "REDEIL", "url": "https://rentadeiluminacion.com", "telephone": "+525530682988" },
    "description": "Servicio profesional de renta de iluminaci\xF3n para bodas, XV a\xF1os y eventos en CDMX. 11 tipos de luces con instalaci\xF3n incluida.",
    "areaServed": { "@type": "City", "name": "Ciudad de M\xE9xico" }
  });
  const servicios = [
    { title: "Guirnaldas Edison", image: "/img/guirnaldas/renta-guirnaldas-edison-terraza-recepcion-02-300w.avif", alt: "Guirnaldas con focos Edison para boda al aire libre", description: "Focos Edison LED o vintage con luz c\xE1lida \xE1mbar. Cableado IP65. Las m\xE1s pedidas para bodas al aire libre \u2014 desde $3,500 + IVA.", link: "/servicios/guirnaldas/" },
    { title: "Luces Ne\xF3n y UV", image: "/img/luces-neon/renta-luces-neon-glow-party-celebracion-neon-300w.avif", alt: "Luces ne\xF3n y UV en fiesta glow party", description: "Barras UV Chauvet, letreros ne\xF3n LED y accesorios fluorescentes para glow parties completas desde $4,500 + IVA.", link: "/servicios/luces-neon/" },
    { title: "Luz Negra", image: "/img/luz-negra/luz-negra-fiesta-neon-300w.avif", alt: "Luz negra UV para fiesta ne\xF3n", description: "Iluminaci\xF3n UV profesional que hace brillar todo lo blanco y fluorescente. El motor de cualquier fiesta ne\xF3n.", link: "/servicios/luz-negra/" },
    { title: "Sky Tracker", image: "/img/sky-tracker/renta-skytracker-cielo-nocturno-potente-300w.avif", alt: "Sky tracker proyectando haces de luz al cielo", description: "Xen\xF3n Strong y Syncrolite de 7,000W visibles a 5-7 km. El efecto que hace que tu evento se vea desde kil\xF3metros.", link: "/servicios/sky-tracker/" },
    { title: "Cabezas M\xF3viles", image: "/img/cabezas-moviles/renta-cabezas-moviles-boda-beams-blancos-elegante-300w.avif", alt: "Cabezas m\xF3viles LED en boda elegante", description: "Beam, Spot y Wash con control DMX. Martin, Chauvet y Elation para shows de luces de nivel producci\xF3n.", link: "/servicios/cabezas-moviles/" },
    { title: "Cascadas LED", image: "/img/cascadas-led/cascadas-led-arco-ceremonia-luces-moradas-400w.avif", alt: "Cascadas LED en arco de ceremonia", description: "Cortinas LED de 3\xD73m con efecto twinkle sobre estructura de truss port\xE1til. El backdrop m\xE1s fotografiado.", link: "/servicios/cascadas-led/" },
    { title: "City Color", image: "/img/city-color/renta-luces-hacienda-boda-fuente-300w.avif", alt: "City Color iluminando hacienda para boda", description: "Wash lights Elation SixPar y Chauvet Colorado de 180-360W para ba\xF1ar fachadas y escenarios con color potente.", link: "/servicios/city-color/" },
    { title: "City Light", image: "/img/city-light/iluminacion-profesional-bodas-cdmx-400w.avif", alt: "City Light iluminando sal\xF3n de eventos", description: "PAR LED Chauvet SlimPAR y ADJ Mega Par con mezcla RGBW. Cambios de color en tiempo real por momentos del evento.", link: "/servicios/city-light/" },
    { title: "Iluminaci\xF3n Arquitect\xF3nica", image: "/img/iluminacion-arquitectonica/boda-patio-hacienda-iluminacion-fachada-ambar-string-lights-baile-400w.avif", alt: "Uplighting en fachada de hacienda", description: "Uplighters inal\xE1mbricos Chauvet Freedom Par con bater\xEDa 12h. Sin cables en el piso ni perforaciones en el venue.", link: "/servicios/iluminacion-arquitectonica/" },
    { title: "Gobos", image: "/img/gobos/renta-gobo-monograma-pista-baile-300w.avif", alt: "Gobo proyectando monograma en pista de baile", description: "Proyecci\xF3n de nombres y logos con ETC Source Four. Gobos met\xE1licos y de vidrio a color. El detalle que todos recuerdan.", link: "/servicios/gobos/" },
    { title: "Seguidor", image: "/img/seguidor/renta-luz-seguidor-boda-primer-baile-hmi-1200w-300w.avif", alt: "Spotlight seguidor en primer baile de novios", description: "Follow spots Robert Juliat y Strong Super Trouper 575W-2500W con operador profesional para vals, entrada y brindis.", link: "/servicios/seguidor/" },
    { title: "Luces LED", image: "/img/city-light/iluminacion-profesional-bodas-cdmx-400w.avif", alt: "Luces LED profesionales en colores personalizados", description: "Par LED RGBW con colores programados al c\xF3digo HEX de tu paleta. Uplighting perimetral desde $4,500 + IVA.", link: "/servicios/luces-led/" },
    { title: "Robot LED", image: "/img/cabezas-moviles/renta-cabezas-moviles-boda-beams-blancos-elegante-300w.avif", alt: "Robot LED automatizado que reacciona a la m\xFAsica", description: "Robots de luz con movimiento motorizado y modo sound-active. Show de luces aut\xF3nomo desde $4,500 + IVA.", link: "/servicios/robot-led/" }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "canonical": canonical, "schemaMarkup": schemaMarkup }, { "breadcrumbs": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "breadcrumbs" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Breadcrumbs", $$Breadcrumbs, { "items": [{ label: "Inicio", href: "/" }, { label: "Servicios", href: "/servicios/" }, { label: "Iluminaci\xF3n" }] })} ` })}`, "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, { "title": "Renta de Iluminaci\xF3n Profesional para Eventos en CDMX", "subtitle": "13 servicios de iluminaci\xF3n con instalaci\xF3n incluida. Equipo Martin Professional, Chauvet y Elation.", "introParagraph1": "La iluminaci\xF3n define c\xF3mo se ve y c\xF3mo se siente un evento. No es decoraci\xF3n \u2014 es lo que hace que una hacienda se vea imponente, que la pista de baile funcione, que las fotos salgan bien. En <strong>REDEIL</strong> manejamos 13 tipos de iluminaci\xF3n: guirnaldas Edison, uplighting arquitect\xF3nico, cabezas m\xF3viles DMX, seguidor, gobos, cascadas LED, sky tracker, luces UV, city color y m\xE1s. Cada uno resuelve algo distinto.", "introParagraph2": "Trabajamos con <strong>Martin Professional</strong>, <strong>Chauvet</strong> y <strong>Elation</strong> \u2014 el mismo equipo que se usa en conciertos y televisi\xF3n. Lo que cambia es c\xF3mo se programa: no es lo mismo iluminar un sal\xF3n de 200m\xB2 que un jard\xEDn abierto donde la luz se pierde. Nuestro t\xE9cnico llega horas antes, monta, ecualiza la luz al espacio y opera todo durante el evento. Transporte, instalaci\xF3n, operaci\xF3n y desmontaje van incluidos." })} ${renderComponent($$result2, "CtaBar", $$CtaBar, { "headline": "\xBFQu\xE9 tipo de iluminaci\xF3n buscas?", "items": [
    { label: "Guirnaldas", href: "/servicios/guirnaldas/", icon: "iluminacion" },
    { label: "Sky Tracker", href: "/servicios/sky-tracker/", icon: "iluminacion" },
    { label: "Cabezas M\xF3viles", href: "/servicios/cabezas-moviles/", icon: "iluminacion" },
    { label: "Cotiza Gratis", href: "/contacto/", icon: "cotizar" }
  ] })} ${maybeRenderHead()}<section class="services-section"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Cat\xE1logo de Iluminaci\xF3n", "subtitle": "13 servicios \u2014 cada uno resuelve algo distinto en tu evento.", "paragraph1": "Las guirnaldas dan calidez a un jard\xEDn. El uplighting convierte una fachada de cantera en el fondo de todas las fotos. Las cabezas m\xF3viles arman el show en la pista. El seguidor convierte el vals en cine. Los gobos proyectan los nombres de los novios en la pista. No necesitas todo \u2014 necesitas los correctos para tu espacio.", "paragraph2": "La mayor\xEDa de bodas llevan 3 a 5 tipos de iluminaci\xF3n. Para XV a\xF1os el paquete m\xE1s com\xFAn incluye cabezas m\xF3viles, seguidor y luces UV para la hora loca. Te ayudamos a elegir lo que realmente funciona en tu venue." })} <div class="services-grid"> ${servicios.map((s) => renderTemplate`${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "title": s.title, "image": s.image, "alt": s.alt, "description": s.description, "link": s.link })}`)} </div> </div> </section> <section class="faq-section"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Preguntas sobre Iluminaci\xF3n", "subtitle": "Lo que nos preguntan por WhatsApp antes de apartar fecha.", "paragraph1": "Si tu duda no est\xE1 aqu\xED, m\xE1ndanos mensaje y te contestamos en minutos.", "paragraph2": "" })} </div> ${renderComponent($$result2, "FaqSection", $$FaqSection, { "items": [
    { question: "\xBFQu\xE9 iluminaci\xF3n funciona para una boda en jard\xEDn?", answer: "Guirnaldas Edison para la zona de mesas \u2014 es lo que da el ambiente c\xE1lido en las fotos. Uplighting en la fachada o los \xE1rboles si el venue tiene arquitectura interesante. Seguidor para el vals. Y si hay pista techada, cabezas m\xF3viles para la fiesta. Esa combinaci\xF3n cubre el 90% de las bodas en jard\xEDn que hacemos." },
    { question: "\xBFCu\xE1ntas luces necesito?", answer: "Depende del espacio. Un jard\xEDn de 300m\xB2 necesita m\xE1s uplighting que un sal\xF3n cerrado de 150m\xB2. Si nos mandas las medidas del venue o fotos por WhatsApp, te decimos la cantidad exacta. No cotizamos de m\xE1s \u2014 si con 8 reflectores se cubre, no te ponemos 12." },
    { question: "\xBFLa instalaci\xF3n va incluida?", answer: "S\xED, siempre. Transporte, montaje, operaci\xF3n durante el evento y desmontaje al final. Nuestro equipo llega 4-6 horas antes. T\xFA no tocas nada." },
    { question: "\xBFSe pueden combinar varios tipos de luz?", answer: "S\xED, y es lo normal. Una boda promedio lleva 3-5 tipos: guirnaldas + uplighting + seguidor + cabezas m\xF3viles. Para XV a\xF1os lo m\xE1s pedido es cabezas m\xF3viles + seguidor + luz UV para la hora loca. Armamos paquete con precio especial cuando combinas." },
    { question: "\xBFQu\xE9 pasa si llueve y mi evento es en jard\xEDn?", answer: "Las guirnaldas son IP65 \u2014 aguantan lluvia. El uplighting inal\xE1mbrico tambi\xE9n. Las cabezas m\xF3viles y el seguidor necesitan techo o carpa. Si tu venue tiene plan B techado, movemos el equipo. Por eso llegamos con tiempo de sobra." },
    { question: "\xBFPuedo elegir colores espec\xEDficos para la iluminaci\xF3n?", answer: "S\xED. Con LED programamos cualquier color al c\xF3digo HEX de tu paleta. Si tu wedding planner tiene un moodboard con colores espec\xEDficos, igualamos. El t\xE9cnico ajusta en sitio porque el color se ve distinto en cantera que en muro blanco." }
  ] })} </section> <section class="cta-section"> <div class="container"> <div class="cta-content"> <h2>¿Necesitas iluminación para tu evento?</h2> <p>Mándanos la fecha, el venue y el tipo de evento. Te decimos qué luces funcionan para tu espacio y cuánto cuesta.</p> <div class="cta-buttons"> <a href="/contacto/" class="btn btn-whatsapp btn-lg">Cotiza por WhatsApp</a> <a href="tel:+525530682988" class="btn btn-primary btn-lg">Llámanos — 55 3068 2988</a> </div> </div> </div> </section> ` })}`;
}, "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/pages/servicios/iluminacion.astro", void 0);

const $$file = "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/pages/servicios/iluminacion.astro";
const $$url = "/servicios/iluminacion";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Iluminacion,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
