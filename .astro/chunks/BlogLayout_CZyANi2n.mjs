import { e as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, r as renderTemplate, b as renderComponent, g as renderSlot, F as Fragment } from './astro/server_D8pMnQBn.mjs';
import 'piccolore';
import { $ as $$BaseLayout, a as $$Breadcrumbs } from './Breadcrumbs_BkFbHGbf.mjs';
import { $ as $$Hero } from './Hero_3Is3fruG.mjs';
import { $ as $$CtaBar } from './CtaBar_CdFZlCZU.mjs';
import { $ as $$BlogSidebar } from './BlogSidebar_EFZc7r4C.mjs';
import 'clsx';
/* empty css                          */

const $$Astro$1 = createAstro("https://rentadeiluminacion.com");
const $$BlogCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BlogCard;
  const { title, description, image, imageAlt, category, slug } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article class="bc" data-astro-cid-e3grugc2> <a${addAttribute(`/blog/${slug}/`, "href")} class="bc__img-link" data-astro-cid-e3grugc2> <div class="bc__img" data-astro-cid-e3grugc2> <img${addAttribute(image, "src")}${addAttribute(imageAlt, "alt")} loading="lazy" width="600" height="338" data-astro-cid-e3grugc2> <span class="bc__cat" data-astro-cid-e3grugc2>${category}</span> </div> </a> <div class="bc__body" data-astro-cid-e3grugc2> <h2 class="bc__title" data-astro-cid-e3grugc2> <a${addAttribute(`/blog/${slug}/`, "href")} data-astro-cid-e3grugc2>${title}</a> </h2> <p class="bc__desc" data-astro-cid-e3grugc2>${description}</p> <a${addAttribute(`/blog/${slug}/`, "href")} class="bc__link" data-astro-cid-e3grugc2>
Leer artículo <span aria-hidden="true" data-astro-cid-e3grugc2>→</span> </a> </div> </article> `;
}, "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/components/BlogCard.astro", void 0);

const $$Astro = createAstro("https://rentadeiluminacion.com");
const $$BlogLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BlogLayout;
  const {
    title,
    description,
    canonical,
    image,
    imageAlt,
    category,
    schemaMarkup
  } = Astro2.props;
  const popularArticles = [
    { title: "\xBFCu\xE1nto Cuesta la Iluminaci\xF3n para una Boda en CDMX?", slug: "cuanto-cuesta-iluminacion-boda-cdmx", category: "Bodas", img: "/img/guirnaldas/renta-guirnaldas-boda-hacienda-mexicana-guirnaldas-18-400w.avif" },
    { title: "\xBFCu\xE1ntos Metros de Guirnaldas Necesito para mi Boda?", slug: "cuantos-metros-guirnaldas-necesito", category: "Guirnaldas", img: "/img/guirnaldas/guirnaldas-edison-hacienda-boda.avif" },
    { title: "Tipos de Iluminaci\xF3n para Eventos: Gu\xEDa Completa", slug: "tipos-iluminacion-para-eventos", category: "Gu\xEDa", img: "/img/city-color/city-color-fachada-hacienda-boda-800w.avif" },
    { title: "Bengalas Fr\xEDas en Interiores: \xBFSon Seguras?", slug: "bengalas-frias-seguras-interiores", category: "Efectos", img: "/img/cascadas-led/cascadas-led-backdrop-boda-espectacular-800w.avif" },
    { title: "\xBFCu\xE1nto Cuesta un DJ para Boda en CDMX?", slug: "cuanto-cuesta-dj-para-boda-cdmx", category: "Sonido", img: "/img/bocinas-djs/dj-para-bodas-mezclando-musica-evento-800w.avif" }
  ];
  const relatedByCategory = {
    "Bodas": [
      { title: "Checklist de Iluminaci\xF3n para Boda", description: "La lista que usan los wedding planners para no olvidar nada.", image: "/img/guirnaldas/guirnaldas-edison-hacienda-boda.avif", imageAlt: "Guirnaldas para boda", category: "Bodas", slug: "checklist-iluminacion-boda" },
      { title: "Iluminaci\xF3n para el Primer Vals", description: "Follow Spot, Gobo y efectos para el momento m\xE1s fotog\xE9nico.", image: "/img/seguidor/renta-luz-seguidor-boda-primer-baile-hmi-1200w-300w.avif", imageAlt: "Iluminaci\xF3n primer vals", category: "Bodas", slug: "iluminacion-primer-vals-boda" },
      { title: "\xBFCu\xE1nto Cuesta la Iluminaci\xF3n para Boda en CDMX?", description: "Precios reales y rangos por paquete.", image: "/img/guirnaldas/renta-guirnaldas-boda-hacienda-mexicana-guirnaldas-18-400w.avif", imageAlt: "Iluminaci\xF3n boda hacienda", category: "Bodas", slug: "cuanto-cuesta-iluminacion-boda-cdmx" }
    ],
    "XV A\xF1os": [
      { title: "Tendencias de Iluminaci\xF3n para XV A\xF1os 2025", description: "Ne\xF3n, LED, efectos especiales y todo lo que est\xE1 de moda.", image: "/img/luces-neon/renta-luces-neon-fiesta-pista-baile-colores-800w.avif", imageAlt: "Luces ne\xF3n XV a\xF1os", category: "XV A\xF1os", slug: "iluminacion-xv-anos-tendencias" },
      { title: "Efectos Especiales para Entrada de XV A\xF1os", description: "CO2, bengalas y sky tracker para la entrada m\xE1s impactante.", image: "/img/cascadas-led/cascadas-led-backdrop-boda-espectacular-800w.avif", imageAlt: "Efectos especiales XV", category: "XV A\xF1os", slug: "entrada-xv-anos-efectos-especiales" },
      { title: "Iluminaci\xF3n para XV A\xF1os en Iztapalapa", description: "Equipos y efectos para salones y jardines.", image: "/img/xv-anos/iluminacion-xv-anos-vals-seguidor.avif", imageAlt: "XV a\xF1os Iztapalapa", category: "Zonas", slug: "iluminacion-xv-anos-iztapalapa" }
    ],
    "Guirnaldas": [
      { title: "\xBFCu\xE1ntos Metros de Guirnaldas Necesito?", description: "Calculadora pr\xE1ctica por tipo de espacio e invitados.", image: "/img/guirnaldas/guirnaldas-edison-hacienda-boda.avif", imageAlt: "Guirnaldas boda jard\xEDn", category: "Guirnaldas", slug: "cuantos-metros-guirnaldas-necesito" },
      { title: "Guirnaldas: Jard\xEDn vs Sal\xF3n \u2014 Diferencias Clave", description: "No todas funcionan igual. Lo que debes saber.", image: "/img/guirnaldas/guirnaldas-exterior-jardin-boda.avif", imageAlt: "Guirnaldas hacienda", category: "Guirnaldas", slug: "guirnaldas-boda-jardin-vs-salon" },
      { title: "Focos Edison vs LED para Guirnaldas: \xBFCu\xE1l Elegir?", description: "Temperatura, consumo y est\xE9tica. Comparativa honesta.", image: "/img/guirnaldas/guirnaldas-focos-edison-eventos.avif", imageAlt: "Guirnaldas Edison vintage", category: "Guirnaldas", slug: "diferencia-guirnaldas-edison-led" }
    ],
    "Sonido": [
      { title: "Audio para Boda: Lo Que Nadie Te Dice", description: "Los 3 momentos de audio y errores que arruinan eventos.", image: "/img/bocinas-bodas/renta-bocinas-boda-banda-cantante-mezcladora-jbl-800w.avif", imageAlt: "Audio profesional boda", category: "Sonido", slug: "audio-profesional-boda-que-necesitas-saber" },
      { title: "\xBFCu\xE1nto Cuesta un DJ para Boda en CDMX?", description: "Precios reales de DJ: desde $4,500 hasta $22,000.", image: "/img/bocinas-djs/dj-para-bodas-mezclando-musica-evento-800w.avif", imageAlt: "DJ para bodas CDMX", category: "Sonido", slug: "cuanto-cuesta-dj-para-boda-cdmx" },
      { title: "Audio para Conferencias en CDMX", description: "Por qu\xE9 el sonido mata tu presentaci\xF3n.", image: "/img/bocinas-conferencias/alquiler-bocinas-para-conferencias-y-seminarios-800w.avif", imageAlt: "Audio conferencias", category: "Sonido", slug: "audio-profesional-conferencias-cdmx" }
    ],
    "Efectos": [
      { title: "Bengalas Fr\xEDas en Interiores: \xBFSon Seguras?", description: "Mitos y verdades sobre los sparklers en salones.", image: "/img/cascadas-led/cascadas-led-backdrop-boda-espectacular-800w.avif", imageAlt: "Bengalas fr\xEDas interiores", category: "Efectos", slug: "bengalas-frias-seguras-interiores" },
      { title: "Gu\xEDa de Efectos que Combinan Perfecto", description: "CO2, confeti y bengalas fr\xEDas para m\xE1ximo impacto.", image: "/img/galeria/confeti-03.avif", imageAlt: "Efectos especiales evento", category: "Efectos", slug: "efectos-especiales-que-combinan" },
      { title: "M\xE1quina de Burbujas para Bodas y Fiestas", description: "El efecto m\xE1s fotog\xE9nico y cu\xE1ndo usarlo.", image: "/img/burbujas/burbujas-efecto-especial-fotografia-video.avif", imageAlt: "M\xE1quina de burbujas", category: "Efectos", slug: "maquina-burbujas-bodas-fiestas-cdmx" }
    ]
  };
  const defaultRelated = [
    { title: "Tipos de Iluminaci\xF3n para Eventos: Gu\xEDa Completa", description: "Wash, spot, efectos, arquitect\xF3nica. Todo lo que debes conocer.", image: "/img/city-color/city-color-fachada-hacienda-boda-800w.avif", imageAlt: "Tipos de iluminaci\xF3n", category: "Gu\xEDa", slug: "tipos-iluminacion-para-eventos" },
    { title: "\xBFCu\xE1nto Cuesta la Iluminaci\xF3n para una Boda?", description: "Precios reales, rangos por paquete y qu\xE9 incluye cada opci\xF3n.", image: "/img/guirnaldas/renta-guirnaldas-boda-hacienda-mexicana-guirnaldas-18-400w.avif", imageAlt: "Iluminaci\xF3n boda", category: "Bodas", slug: "cuanto-cuesta-iluminacion-boda-cdmx" },
    { title: "Cabezas M\xF3viles vs Par LED: \xBFCu\xE1l Necesita Tu Evento?", description: "Comparativa t\xE9cnica para elegir el equipo correcto.", image: "/img/cabezas-moviles/renta-cabezas-moviles-boda-beams-blancos-elegante-600w.avif", imageAlt: "Cabezas m\xF3viles vs par led", category: "Equipos", slug: "cabezas-moviles-vs-par-led" }
  ];
  const relatedArticles = relatedByCategory[category] || defaultRelated;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "canonical": canonical, "ogImage": image, "schemaMarkup": schemaMarkup, "data-astro-cid-4dqtj3le": true }, { "breadcrumbs": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "breadcrumbs" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Breadcrumbs", $$Breadcrumbs, { "items": [
    { label: "Inicio", href: "/" },
    { label: "Blog", href: "/blog/" },
    { label: title.length > 45 ? title.substring(0, 45) + "\u2026" : title }
  ], "data-astro-cid-4dqtj3le": true })} ` })}`, "default": ($$result2) => renderTemplate`   ${renderComponent($$result2, "Hero", $$Hero, { "title": title, "subtitle": description, "introParagraph1": `<strong>${category}</strong> \xB7 Escrito por el equipo t\xE9cnico de <strong>REDEIL</strong> con m\xE1s de 30 a\xF1os de experiencia en iluminaci\xF3n profesional para eventos en la Ciudad de M\xE9xico y Estado de M\xE9xico. Cada art\xEDculo est\xE1 basado en proyectos reales.`, "introParagraph2": `En este blog compartimos conocimiento pr\xE1ctico sobre c\xF3mo elegir la iluminaci\xF3n correcta para cada tipo de evento \u2014 bodas, XV a\xF1os, galas corporativas y fiestas privadas. Todo lo que aprendemos en campo, lo documentamos para ti.`, "data-astro-cid-4dqtj3le": true })}  ${renderComponent($$result2, "CtaBar", $$CtaBar, { "headline": "Explora nuestros servicios", "items": [
    { label: "Iluminaci\xF3n", href: "/servicios/iluminacion/", icon: "iluminacion" },
    { label: "Sonido y DJ", href: "/servicios/sonido/", icon: "sonido" },
    { label: "Efectos Especiales", href: "/servicios/efectos-especiales/", icon: "efectos" },
    { label: "Cotiza Gratis", href: "/contacto/", icon: "cotizar" }
  ], "data-astro-cid-4dqtj3le": true })}  ${maybeRenderHead()}<section class="blog-article-section" data-astro-cid-4dqtj3le> <div class="container blog-article-layout" data-astro-cid-4dqtj3le> <!-- Artículo principal --> <article class="blog-article" data-astro-cid-4dqtj3le> <!-- Imagen destacada --> <div class="blog-article__hero-img" data-astro-cid-4dqtj3le> <img${addAttribute(image, "src")}${addAttribute(imageAlt, "alt")} loading="eager" width="1200" height="630" data-astro-cid-4dqtj3le> </div> <!-- Contenido del artículo (slot) --> <div class="blog-content" data-astro-cid-4dqtj3le> ${renderSlot($$result2, $$slots["default"])} </div> <!-- CTA al final del artículo --> <div class="blog-article__cta" data-astro-cid-4dqtj3le> <div class="blog-article__cta-inner" data-astro-cid-4dqtj3le> <h3 data-astro-cid-4dqtj3le>¿Te quedaron dudas sobre tu evento?</h3> <p data-astro-cid-4dqtj3le>Escríbenos por WhatsApp con la fecha y el venue. Te asesoramos gratis y te cotizamos en minutos.</p> <div class="blog-article__cta-btns" data-astro-cid-4dqtj3le> <button type="button" data-open-chat class="btn btn-whatsapp btn-lg" data-astro-cid-4dqtj3le>
Cotizar ahora
</button> <a href="/servicios/" class="btn btn-primary btn-lg" data-astro-cid-4dqtj3le>Ver todos los servicios</a> </div> </div> </div> </article> <!-- Sidebar --> <div class="blog-article-sidebar" data-astro-cid-4dqtj3le> ${renderComponent($$result2, "BlogSidebar", $$BlogSidebar, { "popularArticles": popularArticles, "data-astro-cid-4dqtj3le": true })} </div> </div> </section>  <section class="blog-related services-alt" data-astro-cid-4dqtj3le> <div class="container" data-astro-cid-4dqtj3le> <div class="blog-related__header" data-astro-cid-4dqtj3le> <h2 class="blog-related__title" data-astro-cid-4dqtj3le>Artículos Relacionados</h2> <p class="blog-related__sub" data-astro-cid-4dqtj3le>Más guías y consejos del equipo técnico de REDEIL</p> </div> <div class="blog-related__grid" data-astro-cid-4dqtj3le> ${relatedArticles.map((art) => renderTemplate`${renderComponent($$result2, "BlogCard", $$BlogCard, { "title": art.title, "description": art.description, "image": art.image, "imageAlt": art.imageAlt, "category": art.category, "slug": art.slug, "data-astro-cid-4dqtj3le": true })}`)} </div> <div class="blog-related__link" data-astro-cid-4dqtj3le> <a href="/blog/" class="btn btn-outline btn-lg" data-astro-cid-4dqtj3le>Ver todos los artículos →</a> </div> </div> </section> ` })} `;
}, "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/layouts/BlogLayout.astro", void 0);

export { $$BlogLayout as $ };
