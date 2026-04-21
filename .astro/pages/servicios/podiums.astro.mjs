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

const $$Podiums = createComponent(($$result, $$props, $$slots) => {
  const title = "Renta de Podiums de Acr\xEDlico para Eventos CDMX | REDEIL";
  const description = "Podiums de acr\xEDlico transparente para conferencias, bodas y eventos corporativos en CDMX. Entrega, instalaci\xF3n y retiro incluidos. Desde $1,500 + IVA.";
  const canonical = "https://rentadeiluminacion.com/servicios/podiums/";
  const schemaMarkup = JSON.stringify([
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Renta de Podiums y Atriles de Acr\xEDlico para Eventos",
      "provider": {
        "@type": "LocalBusiness",
        "name": "REDEIL",
        "url": "https://rentadeiluminacion.com",
        "telephone": "+525530682988",
        "address": { "@type": "PostalAddress", "addressLocality": "Ciudad de M\xE9xico", "addressRegion": "CDMX", "addressCountry": "MX" }
      },
      "description": "Servicio de renta de podiums y atriles de acr\xEDlico transparente de 10mm para conferencias, bodas, congresos y eventos corporativos en Ciudad de M\xE9xico. Entrega, instalaci\xF3n y retiro incluidos.",
      "areaServed": [{ "@type": "City", "name": "Ciudad de M\xE9xico" }, { "@type": "State", "name": "Estado de M\xE9xico" }],
      "serviceType": "Renta de Podiums y Atriles",
      "priceRange": "$$"
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "\xBFDe qu\xE9 material son los podiums?", "acceptedAnswer": { "@type": "Answer", "text": "Nuestros podiums est\xE1n fabricados en acr\xEDlico transparente de 10mm de espesor. El material es resistente, cristalino y le da una apariencia moderna y profesional al escenario. Se limpian y pulen antes de cada evento para que luzcan impecables frente a c\xE1maras y audiencia." } },
        { "@type": "Question", "name": "\xBFEl podium soporta una laptop o tablet?", "acceptedAnswer": { "@type": "Answer", "text": "S\xED. La superficie superior del podium tiene espacio suficiente para colocar una laptop, tablet, documentos y micr\xF3fono de cuello de ganso. Soporta hasta 15 kg sin problema. Tambi\xE9n tiene un borde discreto que evita que los objetos se deslicen." } },
        { "@type": "Question", "name": "\xBFLos podiums incluyen micr\xF3fono?", "acceptedAnswer": { "@type": "Answer", "text": "El podium se entrega solo como estructura. Si necesitas micr\xF3fono de cuello de ganso, micr\xF3fono inal\xE1mbrico o sistema de audio completo, lo cotizamos como complemento. Tenemos paquetes que incluyen todo: podium + audio + iluminaci\xF3n de escenario." } },
        { "@type": "Question", "name": "\xBFSe puede agregar iluminaci\xF3n LED al podium?", "acceptedAnswer": { "@type": "Answer", "text": "S\xED. Ofrecemos iluminaci\xF3n LED integrada en la base del podium que le da un efecto luminoso elegante. Puedes elegir color blanco, azul o el color corporativo de tu empresa. La iluminaci\xF3n LED se incluye sin costo adicional si la solicitas al momento de reservar." } },
        { "@type": "Question", "name": "\xBFCon cu\xE1nta anticipaci\xF3n debo reservar?", "acceptedAnswer": { "@type": "Answer", "text": "Idealmente 1-2 semanas antes del evento. En temporada de congresos y convenciones (septiembre-noviembre) la demanda es alta. Para eventos grandes con 4+ podiums, recomendamos reservar con 3 semanas de anticipaci\xF3n." } },
        { "@type": "Question", "name": "\xBFSe puede personalizar el podium con logotipo?", "acceptedAnswer": { "@type": "Answer", "text": "S\xED. Podemos aplicar vinil de corte o impresi\xF3n en el frente del podium con tu logotipo corporativo. Env\xEDanos tu logo en formato vectorial y lo preparamos antes del evento. El branding se retira al finalizar sin dejar residuos en el acr\xEDlico." } }
      ]
    }
  ]);
  const serviciosRelacionados = [
    { title: "Luces LED", image: "/img/city-light/iluminacion-eventos-corporativos.avif", alt: "Iluminaci\xF3n LED para escenarios y conferencias", description: "Ilumina el escenario y al orador con par LED de color. Los colores corporativos de tu empresa reflejados en cada rinc\xF3n del escenario.", link: "/servicios/luces-led/" },
    { title: "Bocinas y DJ", image: "/img/bocinas-djs/dj-para-eventos-cdmx-cabina-profesional-300w.avif", alt: "Equipo de audio profesional para eventos y conferencias", description: "Audio profesional para que el orador se escuche claro en todo el sal\xF3n. Micr\xF3fonos Shure inal\xE1mbricos incluidos.", link: "/servicios/bocinas-djs/" },
    { title: "Pantalla Inflable", image: "/img/pantalla-inflable/pantalla-cine-inflable-evento-corporativo.avif", alt: "Pantalla inflable para proyecci\xF3n en eventos corporativos", description: "Pantalla gigante para proyectar presentaciones detr\xE1s del podium. Ideal para congresos y conferencias.", link: "/servicios/pantalla-inflable/" },
    { title: "Cabezas M\xF3viles", image: "/img/cabezas-moviles/renta-cabezas-moviles-boda-beams-blancos-elegante-300w.avif", alt: "Show de luces con cabezas m\xF3viles para eventos", description: "Iluminaci\xF3n rob\xF3tica para galas y premiaciones. Los beams resaltan el escenario donde est\xE1 el podium.", link: "/servicios/cabezas-moviles/" }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "canonical": canonical, "schemaMarkup": schemaMarkup }, { "breadcrumbs": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "breadcrumbs" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Breadcrumbs", $$Breadcrumbs, { "items": [
    { label: "Inicio", href: "/" },
    { label: "Efectos Especiales", href: "/servicios/efectos-especiales/" },
    { label: "Podiums" }
  ] })} ` })}`, "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, { "title": "Renta de Podiums de Acr\xEDlico para Eventos en CDMX", "subtitle": "Atriles transparentes profesionales para conferencias, bodas y congresos. Desde $1,500 + IVA.", "introParagraph1": "El podium de acr\xEDlico transparente funciona donde un atril de madera no: conferencias de prensa donde el orador necesita verse de cuerpo completo en c\xE1mara, premiaciones donde el dise\xF1o del escenario exige que nada obstaculice la visual, y galas corporativas donde un mueble de madera romper\xEDa la est\xE9tica. Nuestros podiums est\xE1n fabricados en acr\xEDlico cristalino de <strong>10mm de espesor</strong>, pulido a espejo. Soportan hasta 15 kg en la superficie \u2014 laptop, documentos y micr\xF3fono de cuello de ganso sin problema.", "introParagraph2": "Para eventos corporativos agregamos <strong>iluminaci\xF3n LED en la base</strong> en el color de la marca \u2014 lo piden mucho para lanzamientos y conferencias de prensa donde hay video. El servicio incluye entrega puntual, colocaci\xF3n exacta en el escenario y nivelaci\xF3n profesional. Hemos montado en auditorios de Santa Fe, Polanco, salones del Centro Hist\xF3rico, Expo Reforma y hoteles de toda la CDMX. Para congresos con m\xFAltiples salas manejamos 4+ podiums con log\xEDstica coordinada." })} ${renderComponent($$result2, "CtaBar", $$CtaBar, { "headline": "\xBFQu\xE9 tipo de evento tienes?", "items": [
    { label: "Conferencia", href: "/servicios/podiums/paquete-1-podium/", icon: "efectos" },
    { label: "Boda / Gala", href: "/servicios/podiums/paquete-2-podiums/", icon: "efectos" },
    { label: "Congreso", href: "/servicios/podiums/paquete-congreso/", icon: "efectos" },
    { label: "Cotiza Gratis", href: "/contacto/", icon: "cotizar" }
  ] })} ${maybeRenderHead()}<section class="services-section"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Podiums de acr\xEDlico en eventos reales", "subtitle": "Conferencias, congresos, premiaciones y bodas en CDMX.", "paragraph1": "El acr\xEDlico transparente tiene una ventaja que no se nota en fotos pero s\xED en video: el orador se ve completo sin obst\xE1culos. Para conferencias de prensa donde hay 10 c\xE1maras apuntando, un atril de madera oculta medio cuerpo. El acr\xEDlico desaparece visualmente y el encuadre queda limpio.", "paragraph2": "Lo que s\xED hay que cuidar: el acr\xEDlico refleja la luz. Si los PAR LED apuntan directo al podium, genera reflejos en c\xE1mara. Nuestro equipo posiciona la iluminaci\xF3n para evitar eso." })} ${renderComponent($$result2, "Gallery4x4", $$Gallery4X4, { "images": [
    { src: "/img/podiums/conferencia-auditorio-grande-podium-transparente-iluminacion.avif", alt: "Conferencia en auditorio grande con podium transparente e iluminaci\xF3n profesional" },
    { src: "/img/podiums/conferencia-auditorio-podium-acrilico-vista-trasera-audiencia.avif", alt: "Vista trasera de conferencia con podium de acr\xEDlico y audiencia" },
    { src: "/img/podiums/conferencia-corporativa-podium-acrilico-auditorio-luces-azules.avif", alt: "Conferencia corporativa con podium de acr\xEDlico en auditorio con luces azules" },
    { src: "/img/podiums/conferencia-ejecutivo-podium-alto-iluminacion-profesional.avif", alt: "Ejecutivo en podium alto con iluminaci\xF3n profesional" },
    { src: "/img/podiums/conferencia-ejecutivo-podium-transparente-escenario-iluminado.avif", alt: "Ejecutivo en podium transparente sobre escenario iluminado" },
    { src: "/img/podiums/conferencia-ejecutivo-podium-transparente-graficos-financieros.avif", alt: "Ejecutivo presentando gr\xE1ficos financieros desde podium transparente" },
    { src: "/img/podiums/conferencia-empresarial-podium-transparente-audiencia-profesional.avif", alt: "Conferencia empresarial con podium transparente y audiencia profesional" },
    { src: "/img/podiums/conferencia-estadio-podium-transparente-multitud-pantallas.avif", alt: "Conferencia en estadio con podium transparente frente a multitud y pantallas" },
    { src: "/img/podiums/conferencia-masiva-podium-acrilico-pantallas-auditorio.avif", alt: "Conferencia masiva con podium de acr\xEDlico y pantallas en auditorio" },
    { src: "/img/podiums/conferencia-mujer-ejecutiva-podium-acrilico-auditorio-grande.avif", alt: "Mujer ejecutiva en podium de acr\xEDlico en auditorio grande" },
    { src: "/img/podiums/conferencia-mujer-podium-acrilico-tablet-presentacion.avif", alt: "Mujer en conferencia usando tablet sobre podium de acr\xEDlico" },
    { src: "/img/podiums/conferencia-mujer-traje-rojo-podium-acrilico-evento-corporativo.avif", alt: "Mujer con traje rojo en podium de acr\xEDlico en evento corporativo" },
    { src: "/img/podiums/conferencia-orador-microfono-podium-acrilico-escenario-azul.avif", alt: "Orador con micr\xF3fono en podium de acr\xEDlico sobre escenario azul" },
    { src: "/img/podiums/conferencia-podium-acrilico-alto-iluminacion-azul-cortinas.avif", alt: "Podium de acr\xEDlico alto con iluminaci\xF3n azul y cortinas de escenario" },
    { src: "/img/podiums/presentacion-corporativa-podium-acrilico-graficos-audiencia.avif", alt: "Presentaci\xF3n corporativa con podium de acr\xEDlico mostrando gr\xE1ficos a la audiencia" },
    { src: "/img/podiums/presentacion-ejecutivo-podium-acrilico-graficos-pantalla-azul.avif", alt: "Ejecutivo realizando presentaci\xF3n desde podium de acr\xEDlico con pantalla azul" }
  ] })} </div> </section> <section class="services-section services-alt"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Paquetes de Podiums", "subtitle": "4 opciones \u2014 desde 1 podium para conferencia hasta staging completo para congresos.", "paragraph1": "Todos los paquetes incluyen entrega puntual en el venue, colocaci\xF3n en el escenario, nivelaci\xF3n profesional y retiro al finalizar. Los podiums se entregan limpios, pulidos y en condiciones impecables.", "paragraph2": "\xBFNecesitas algo diferente? Armamos paquetes a medida con podiums + audio + iluminaci\xF3n." })} ${renderComponent($$result2, "PricingCards", $$PricingCards, { "packages": [
    {
      name: "1 Podium",
      price: "$1,500",
      priceNote: "+ IVA",
      description: "1 podium de acr\xEDlico transparente para conferencias peque\xF1as, presentaciones en sala de juntas y discursos individuales.",
      features: [
        { text: "1 podium acr\xEDlico transparente 10mm", included: true },
        { text: "Iluminaci\xF3n LED base opcional", included: true },
        { text: "Entrega + colocaci\xF3n + retiro", included: true },
        { text: "Superficie para laptop/tablet", included: true },
        { text: "Cobertura CDMX y Edomex", included: true },
        { text: "Branding con logotipo", included: false },
        { text: "Audio / micr\xF3fono", included: false },
        { text: "Iluminaci\xF3n de escenario", included: false }
      ],
      ctaLabel: "Ver paquete 1 Podium",
      ctaHref: "/servicios/podiums/paquete-1-podium/"
    },
    {
      name: "2 Podiums",
      price: "$2,500",
      priceNote: "+ IVA",
      badge: "M\xE1s popular",
      highlight: true,
      description: "2 podiums de acr\xEDlico para mesas de honor, bodas, galas y eventos con m\xFAltiples oradores.",
      features: [
        { text: "2 podiums acr\xEDlico transparente 10mm", included: true },
        { text: "Iluminaci\xF3n LED base opcional", included: true },
        { text: "Entrega + colocaci\xF3n + retiro", included: true },
        { text: "Superficie para laptop/tablet", included: true },
        { text: "Ideal para bodas y galas", included: true },
        { text: "Cobertura CDMX y Edomex", included: true },
        { text: "Audio / micr\xF3fono", included: false },
        { text: "Iluminaci\xF3n de escenario", included: false }
      ],
      ctaLabel: "Ver paquete 2 Podiums",
      ctaHref: "/servicios/podiums/paquete-2-podiums/"
    },
    {
      name: "Escenario Completo",
      price: "$5,000",
      priceNote: "+ IVA",
      description: "2 podiums + iluminaci\xF3n de escenario + audio profesional. Todo lo que necesita un evento corporativo.",
      features: [
        { text: "2 podiums acr\xEDlico transparente 10mm", included: true },
        { text: "Iluminaci\xF3n LED de escenario", included: true },
        { text: "Audio profesional para orador", included: true },
        { text: "Micr\xF3fono inal\xE1mbrico Shure", included: true },
        { text: "Operador t\xE9cnico incluido", included: true },
        { text: "Entrega + montaje + desmontaje", included: true },
        { text: "Branding con logotipo", included: true },
        { text: "Cobertura CDMX y Edomex", included: true }
      ],
      ctaLabel: "Ver paquete Escenario",
      ctaHref: "/servicios/podiums/paquete-escenario-completo/"
    },
    {
      name: "Congreso",
      price: "$8,500",
      priceNote: "+ IVA",
      description: "4+ podiums + staging completo + audio profesional + iluminaci\xF3n + t\xE9cnico dedicado para congresos y convenciones.",
      features: [
        { text: "4+ podiums acr\xEDlico transparente", included: true },
        { text: "Staging profesional completo", included: true },
        { text: "Audio line array para auditorio", included: true },
        { text: "Iluminaci\xF3n profesional de escenario", included: true },
        { text: "T\xE9cnico dedicado todo el evento", included: true },
        { text: "Branding con logotipo corporativo", included: true },
        { text: "Montaje anticipado + pruebas", included: true },
        { text: "Cobertura CDMX y Edomex", included: true }
      ],
      ctaLabel: "Ver paquete Congreso",
      ctaHref: "/servicios/podiums/paquete-congreso/"
    }
  ] })} </div> </section> <section class="faq-section"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Preguntas sobre Podiums", "subtitle": "Lo que todos preguntan antes de rentar.", "paragraph1": "Si tienes otra duda, escr\xEDbenos por WhatsApp y te respondemos en minutos.", "paragraph2": "Cada evento es diferente \u2014 te asesoramos gratis sobre cu\xE1ntos podiums necesitas y qu\xE9 complementos agregar." })} </div> ${renderComponent($$result2, "FaqSection", $$FaqSection, { "items": [
    { question: "\xBFSoporta una laptop encima?", answer: "S\xED. La superficie soporta hasta 15 kg \u2014 laptop, tablet, documentos y micr\xF3fono de cuello de ganso. Tiene un borde discreto que evita que los objetos se deslicen. Hemos tenido ponentes con laptop + botella de agua + carpeta sin problema." },
    { question: "\xBFIncluye micr\xF3fono?", answer: "No. El podium se entrega como estructura. Si necesitas micr\xF3fono de cuello de ganso, inal\xE1mbrico o audio completo, lo cotizamos aparte. El paquete Escenario Completo ($5,000 + IVA) incluye podiums + audio Shure + iluminaci\xF3n de escenario." },
    { question: "\xBFSe puede poner el logo de la empresa?", answer: "S\xED. Aplicamos vinil de corte o impresi\xF3n en el frente del podium. Necesitamos el logo en formato vectorial (AI, EPS o PDF) con 3-5 d\xEDas de anticipaci\xF3n. Al terminar el evento retiramos el vinil sin residuos en el acr\xEDlico." },
    { question: "\xBFLa iluminaci\xF3n LED se ve bien en video?", answer: "Se ve bien si est\xE1 bien posicionada. La LED en la base ilumina el acr\xEDlico de abajo hacia arriba y genera un halo de color. Lo que hay que evitar es que la luz de los PAR del escenario rebote directo en el acr\xEDlico \u2014 genera reflejos en c\xE1mara. Nuestro equipo ajusta los \xE1ngulos." },
    { question: "\xBFCu\xE1ntos podiums necesito para un panel?", answer: "Para un panel de discusi\xF3n, normalmente 1 podium para el moderador y una mesa con micr\xF3fonos para los panelistas. Para un formato donde cada ponente habla desde podium individual, 1 por orador. En debates, 2 podiums enfrentados." },
    { question: "\xBFLlegan a tiempo para la prueba de sonido?", answer: "Llegamos 2-3 horas antes del evento. Colocamos los podiums, nivelamos, y los dejamos listos para que el t\xE9cnico de audio monte los micr\xF3fonos y se haga la prueba de sonido con cada ponente." }
  ] })} </section> <section class="services-section services-alt"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Podium + audio + iluminaci\xF3n: el escenario completo", "subtitle": "Lo que m\xE1s piden: podium con LED + micr\xF3fonos Shure + PAR en colores corporativos.", "paragraph1": "Para conferencias de prensa y lanzamientos, el combo es podium con LED en color de la marca + 2 micr\xF3fonos Shure (cuello de ganso + inal\xE1mbrico para Q&A) + PAR LED ba\xF1ando el escenario. Para congresos, le sumamos pantalla de proyecci\xF3n y audio para 300+ personas.", "paragraph2": "Cuando todo viene del mismo proveedor, la log\xEDstica es una sola y el montaje se coordina entre todos los servicios sin cruces." })} <div class="services-grid"> ${serviciosRelacionados.map((s) => renderTemplate`${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "title": s.title, "image": s.image, "alt": s.alt, "description": s.description, "link": s.link })}`)} </div> </div> </section> <section class="cta-section"> <div class="container"> <div class="cta-content"> <h2>¿Listo para rentar podiums para tu evento?</h2> <p>Cuéntanos la fecha, el tipo de evento y cuántos podiums necesitas. Te enviamos cotización en minutos.</p> <div class="cta-buttons"> <a href="/contacto/" class="btn btn-whatsapp btn-lg">Cotiza por WhatsApp</a> <a href="tel:+525530682988" class="btn btn-primary btn-lg">Llámanos — 55 3068 2988</a> </div> </div> </div> </section> ` })}`;
}, "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/pages/servicios/podiums.astro", void 0);

const $$file = "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/pages/servicios/podiums.astro";
const $$url = "/servicios/podiums";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Podiums,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
