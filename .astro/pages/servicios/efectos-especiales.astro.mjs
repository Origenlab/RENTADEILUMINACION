import { c as createComponent, b as renderComponent, r as renderTemplate, m as maybeRenderHead, F as Fragment } from '../../chunks/astro/server_D8pMnQBn.mjs';
import 'piccolore';
import { $ as $$BaseLayout, a as $$Breadcrumbs } from '../../chunks/Breadcrumbs_BkFbHGbf.mjs';
import { $ as $$Hero } from '../../chunks/Hero_3Is3fruG.mjs';
import { $ as $$CtaBar } from '../../chunks/CtaBar_CdFZlCZU.mjs';
import { $ as $$SectionHeader } from '../../chunks/SectionHeader_mLKzHzNX.mjs';
import { $ as $$ServiceCard } from '../../chunks/ServiceCard_Bli7ALj4.mjs';
import { $ as $$FaqSection } from '../../chunks/FaqSection_CzcP3CIi.mjs';
export { renderers } from '../../renderers.mjs';

const $$EfectosEspeciales = createComponent(($$result, $$props, $$slots) => {
  const title = "Renta de Efectos Especiales para Eventos CDMX | REDEIL";
  const description = "Humo bajo, confeti, burbujas, bola disco y m\xE1s para tu boda o fiesta. Operaci\xF3n profesional incluida. 7 efectos disponibles. Cotiza por WhatsApp.";
  const canonical = "https://rentadeiluminacion.com/servicios/efectos-especiales/";
  const schemaMarkup = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Renta de Efectos Especiales para Eventos",
    "provider": { "@type": "LocalBusiness", "name": "REDEIL", "url": "https://rentadeiluminacion.com", "telephone": "+525530682988" },
    "description": "Servicio profesional de efectos especiales para bodas, XV a\xF1os y eventos en CDMX. Humo bajo, confeti, burbujas y m\xE1s.",
    "areaServed": { "@type": "City", "name": "Ciudad de M\xE9xico" }
  });
  const servicios = [
    { title: "Humo Bajo", image: "/img/humo-bajo/efecto-nubes-piso-boda-jardin-400w.avif", alt: "Humo bajo creando nube a nivel de piso en vals de boda", description: "La nube m\xE1gica a nivel de piso para el vals. Equipos JEM ZR33 y Antari ICE-101 con fluido farmac\xE9utico certificado. El efecto m\xE1s solicitado en bodas.", link: "/servicios/humo-bajo/" },
    { title: "M\xE1quina de Humo", image: "/img/humo-bajo/efecto-humo-bajo-baile-novios.avif", alt: "Humo esc\xE9nico en pista de baile", description: "Humo atmosf\xE9rico Antari Z-1500 para crear neblina en pistas de baile. El show de luces se multiplica con humo.", link: "/servicios/maquina-humo/" },
    { title: "Confeti", image: "/img/confeti/confeti-dorado-boda-novios-fiesta.avif", alt: "Ca\xF1\xF3n de confeti dorado en celebraci\xF3n de boda", description: "Ca\xF1ones de CO\u2082 que lanzan confeti dorado, plateado o multicolor a 10 metros de altura. El momento m\xE1s fotografiado.", link: "/servicios/confeti/" },
    { title: "Confeti para Bodas", image: "/img/confeti/confeti-dorado-boda-novios-fiesta.avif", alt: "Confeti y p\xE9talos para salida de iglesia", description: "Confeti biodegradable y p\xE9talos para la salida de iglesia y el vals. Coordinado con el fot\xF3grafo para el timing perfecto.", link: "/servicios/confeti-papelitos/" },
    { title: "M\xE1quina CO\u2082", image: "/img/humo-bajo/efecto-nubes-piso-boda-jardin-400w.avif", alt: "Ca\xF1ones de CO2 para entrada de novios", description: "Columnas de vapor fr\xEDo que se disparan a control remoto. No activan alarmas, no dejan residuo. Desde $3,500 + IVA.", link: "/servicios/co2/" },
    { title: "Bengalas Fr\xEDas", image: "/img/seguidor/renta-luz-seguidor-boda-primer-baile-hmi-1200w-300w.avif", alt: "Sparklers bengalas fr\xEDas para boda", description: "Chispas de titanio sin calor, sin humo. Columnas de 1-3m aprobadas para interiores. Sparkular y Showven.", link: "/servicios/sparklers/" },
    { title: "Burbujas", image: "/img/burbujas/burbujas-gigantes-fiesta-cumpleanos-ninos-400w.avif", alt: "M\xE1quina de burbujas en fiesta infantil", description: "Lluvia continua de burbujas y burbujas gigantes. Encanta a los ni\xF1os, es fotog\xE9nico en bodas, funciona en todos los eventos.", link: "/servicios/burbujas/" },
    { title: "Bola Disco", image: "/img/bola-disco/bola-disco-dj-pista-baile-evento.avif", alt: "Bola disco gigante en pista de baile", description: "Bola de espejos de 30cm a 1.2m con motor y focos PAR. Destellos que llenan la pista \u2014 atemporal y siempre efectiva.", link: "/servicios/bola-disco/" },
    { title: "Robot LED", image: "/img/cabezas-moviles/renta-cabezas-moviles-boda-beams-blancos-elegante-300w.avif", alt: "Robot LED automatizado para pista de baile", description: "Robots de luz con movimiento motorizado que reaccionan a la m\xFAsica autom\xE1ticamente. Show de luces sin operador.", link: "/servicios/robot-led/" },
    { title: "Pantalla Inflable", image: "/img/pantalla-inflable/alquiler-pantalla-inflable-aniversario-boda.avif", alt: "Pantalla inflable para cine al aire libre", description: "Pantalla de 3 a 10+ metros con proyector HD y audio. Cine al aire libre en 15 minutos. Bodas, fiestas y corporativos.", link: "/servicios/pantalla-inflable/" },
    { title: "Podium de Acr\xEDlico", image: "/img/podiums/conferencia-corporativa-podium-acrilico-auditorio-luces-azules-300w.avif", alt: "Podium profesional en auditorio corporativo", description: "Atriles de acr\xEDlico cristalino 10mm para conferencias, bodas y congresos. Iluminaci\xF3n LED base opcional.", link: "/servicios/podiums/" }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "canonical": canonical, "schemaMarkup": schemaMarkup }, { "breadcrumbs": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "breadcrumbs" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Breadcrumbs", $$Breadcrumbs, { "items": [{ label: "Inicio", href: "/" }, { label: "Servicios", href: "/servicios/" }, { label: "Efectos Especiales" }] })} ` })}`, "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, { "title": "Efectos Especiales para Eventos en CDMX", "subtitle": "11 efectos con operador incluido. Lo que la gente recuerda de un evento no es la comida \u2014 es el momento que los puso de pie.", "introParagraph1": "Humo bajo <strong>JEM ZR33</strong> y <strong>Antari ICE-101</strong> para el vals. Ca\xF1ones de CO\u2082 para la entrada. Bengalas fr\xEDas <strong>Sparkular</strong> que no activan alarmas. Confeti biodegradable que se barre en 10 minutos. Burbujas, bola disco, robot LED, pantalla inflable. En <strong>REDEIL</strong> operamos 11 efectos distintos y los coordinamos con el DJ y el fot\xF3grafo para que cada disparo suceda en el segundo exacto. Si el fot\xF3grafo no estaba listo, el confeti se desperdici\xF3.", "introParagraph2": "El operador llega con el equipo, instala, hace pruebas antes de que lleguen los invitados y activa cada efecto a control remoto durante el evento. Importante: no todos los efectos funcionan en todos los espacios. El humo bajo necesita piso fr\xEDo para mantenerse abajo. Las burbujas dependen del viento. La pantalla inflable necesita oscuridad. Te decimos qu\xE9 funciona en tu venue antes de cotizar." })} ${renderComponent($$result2, "CtaBar", $$CtaBar, { "headline": "\xBFQu\xE9 efecto quieres para tu evento?", "items": [
    { label: "Humo Bajo", href: "/servicios/humo-bajo/", icon: "efectos" },
    { label: "Confeti", href: "/servicios/confeti/", icon: "efectos" },
    { label: "Burbujas", href: "/servicios/burbujas/", icon: "efectos" },
    { label: "Cotiza Gratis", href: "/contacto/", icon: "cotizar" }
  ] })} ${maybeRenderHead()}<section class="services-section"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Cat\xE1logo de Efectos Especiales", "subtitle": "11 efectos \u2014 cada uno con su momento en el protocolo del evento.", "paragraph1": "El humo bajo va en el vals, no antes. El confeti se dispara en el brindis o en la salida, no en los dos porque pierde impacto. Las bengalas fr\xEDas funcionan mejor como recibimiento. Las burbujas son para la sesi\xF3n de fotos o la entrada de los ni\xF1os. Cada efecto tiene un momento y el operador lo activa en coordinaci\xF3n con el DJ.", "paragraph2": "La mayor\xEDa de las bodas llevan 2 o 3 efectos. No tiene sentido contratar los 11. Te ayudamos a elegir los que realmente hacen diferencia en tu tipo de evento y en tu venue." })} <div class="services-grid"> ${servicios.map((s) => renderTemplate`${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "title": s.title, "image": s.image, "alt": s.alt, "description": s.description, "link": s.link })}`)} </div> </div> </section> <section class="faq-section"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Preguntas sobre Efectos Especiales", "subtitle": "Lo que nos preguntan por WhatsApp antes de apartar fecha.", "paragraph1": "Si tu duda no est\xE1 aqu\xED, m\xE1ndanos mensaje y te contestamos en minutos.", "paragraph2": "" })} </div> ${renderComponent($$result2, "FaqSection", $$FaqSection, { "items": [
    { question: "\xBFEl humo bajo activa las alarmas contra incendio?", answer: "Depende del tipo de detector. Los detectores i\xF3nicos (los m\xE1s viejos) s\xED se activan con cualquier tipo de humo. Los fotoel\xE9ctricos y de temperatura no. En salones de eventos normalmente son fotoel\xE9ctricos y no hay problema, pero siempre coordinamos con el venue antes del evento para confirmar. Si el sal\xF3n tiene detectores i\xF3nicos, los desactivamos en coordinaci\xF3n con el encargado del venue." },
    { question: "\xBFPuedo usar varios efectos en el mismo evento?", answer: "S\xED, de hecho es lo m\xE1s com\xFAn. Una boda t\xEDpica lleva humo bajo para el vals y confeti o bengalas fr\xEDas para la entrada. No recomendamos m\xE1s de 3 efectos porque saturan \u2014 el impacto se diluye cuando todo pasa al mismo tiempo. Mejor pocos y bien coordinados." },
    { question: "\xBFLas bengalas fr\xEDas son seguras en sal\xF3n cerrado?", answer: "S\xED. Son chispas de titanio a temperatura ambiente \u2014 puedes poner la mano encima sin quemarte. No generan humo, no activan alarmas y no dejan residuo. Las usamos en hoteles como Marquis Reforma y Hyatt Regency sin restricci\xF3n. Es el \xFAnico tipo de chispa aprobado para interiores." },
    { question: "\xBFEl confeti ensucia mucho? \xBFQui\xE9n limpia?", answer: "El confeti biodegradable se barre en 10 minutos en interior. En exterior se disuelve con agua en 24-72 horas. Hacemos una limpieza b\xE1sica al desmontar. La mayor\xEDa de los venues no ponen problema con el confeti biodegradable porque ya lo conocen." },
    { question: "\xBFQu\xE9 efecto recomiendan si solo puedo contratar uno?", answer: "Para bodas, humo bajo. Es el efecto con m\xE1s impacto visual en las fotos del vals y el que m\xE1s recuerdan los invitados. Para XV a\xF1os, bengalas fr\xEDas en la entrada de la quincea\xF1era. Para fiestas, una bola disco \u2014 simple pero efectivo toda la noche." },
    { question: "\xBFNecesito planta de luz para los efectos?", answer: "La mayor\xEDa de los efectos consumen poco \u2014 un ca\xF1\xF3n de confeti o la m\xE1quina de burbujas no necesitan m\xE1s que un contacto normal. El humo bajo con m\xE1quina JEM ZR33 s\xED necesita circuito dedicado de 20A. Si tu venue es un jard\xEDn sin instalaci\xF3n el\xE9ctrica, llevamos planta de luz." }
  ] })} </section> <section class="cta-section"> <div class="container"> <div class="cta-content"> <h2>¿Quieres efectos para tu evento?</h2> <p>Mándanos por WhatsApp la fecha, el venue y qué momentos quieres resaltar. Te decimos qué efectos funcionan y cuánto cuesta.</p> <div class="cta-buttons"> <a href="/contacto/" class="btn btn-whatsapp btn-lg">Cotiza por WhatsApp</a> <a href="tel:+525530682988" class="btn btn-primary btn-lg">Llámanos — 55 3068 2988</a> </div> </div> </div> </section> ` })}`;
}, "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/pages/servicios/efectos-especiales.astro", void 0);

const $$file = "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/pages/servicios/efectos-especiales.astro";
const $$url = "/servicios/efectos-especiales";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$EfectosEspeciales,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
