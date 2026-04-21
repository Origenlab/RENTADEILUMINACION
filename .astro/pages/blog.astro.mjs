import { c as createComponent, b as renderComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, F as Fragment } from '../chunks/astro/server_D8pMnQBn.mjs';
import 'piccolore';
import { $ as $$BaseLayout, a as $$Breadcrumbs } from '../chunks/Breadcrumbs_BkFbHGbf.mjs';
import { $ as $$Hero } from '../chunks/Hero_3Is3fruG.mjs';
import { g as getCollection } from '../chunks/_astro_content_DoEh7u_S.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const SITE_URL = "https://rentadeiluminacion.com";
  const collectionPosts = await getCollection("blog", ({ data }) => !data.draft);
  const collectionArticles = collectionPosts.map((post) => ({
    title: post.data.title,
    description: post.data.description,
    slug: post.id,
    category: post.data.category,
    image: post.data.image,
    imageAlt: post.data.imageAlt
  }));
  const title = "Blog de Iluminaci\xF3n para Eventos CDMX | REDEIL";
  const description = "Gu\xEDas de iluminaci\xF3n, sonido y efectos para bodas, XV a\xF1os y eventos CDMX. 30 a\xF1os de experiencia. REDEIL.";
  const canonical = "https://rentadeiluminacion.com/blog/";
  const articles = [
    {
      title: "Iluminaci\xF3n para Bodas en CDMX 2026: La Gu\xEDa Completa",
      description: "Los 4 tipos esenciales, precios reales y cu\xE1ndo reservar. Todo lo que usan los wedding planners.",
      slug: "iluminacion-para-bodas-cdmx-2026",
      category: "Bodas",
      image: "/img/guirnaldas/guirnaldas-edison-hacienda-boda.avif",
      imageAlt: "Guirnaldas Edison iluminando boda en hacienda CDMX"
    },
    {
      title: "Guirnaldas para Eventos en Exterior: Gu\xEDa Definitiva",
      description: "Edison vs LED, f\xF3rmula de metros, puntos de anclaje y los 3 errores m\xE1s caros.",
      slug: "guirnaldas-para-eventos-exterior-guia",
      category: "Guirnaldas",
      image: "/img/guirnaldas/guirnaldas-exterior-jardin-boda.avif",
      imageAlt: "Guirnaldas para jard\xEDn en evento exterior CDMX"
    },
    {
      title: "Sky Tracker: Todo lo que Debes Saber Antes de Rentarlo",
      description: "Qu\xE9 es, d\xF3nde funciona, cu\xE1ntos necesitas y cu\xE1nto cuesta. Sin rodeos.",
      slug: "sky-tracker-renta-cdmx-todo-lo-que-debes-saber",
      category: "Efectos",
      image: "/img/sky-tracker/sky-tracker-evento-cdmx-noche.avif",
      imageAlt: "Sky tracker iluminando cielo en evento CDMX"
    },
    {
      title: "Efectos Especiales para XV A\xF1os: Bengalas, CO2 y Cascadas LED",
      description: "Cu\xE1les son seguros en interiores, cu\xE1nto cuestan y la combinaci\xF3n perfecta por presupuesto.",
      slug: "efectos-especiales-xv-anos-bengalas-co2-cascadas",
      category: "XV A\xF1os",
      image: "/img/cascadas-led/cascadas-led-backdrop-boda-espectacular-800w.avif",
      imageAlt: "Cascadas LED y efectos especiales para XV a\xF1os"
    },
    {
      title: "Sonido Profesional para Eventos en CDMX",
      description: "Bocinas, micr\xF3fonos, DJ: qu\xE9 equipo necesitas y precios reales seg\xFAn tama\xF1o del evento.",
      slug: "sonido-profesional-eventos-bocinas-dj-cdmx",
      category: "Sonido",
      image: "/img/bocinas-djs/dj-para-bodas-mezclando-musica-evento-800w.avif",
      imageAlt: "DJ profesional en boda CDMX con equipo de sonido"
    },
    {
      title: "Renta de Iluminaci\xF3n para Eventos en Tlalpan CDMX",
      description: "Haciendas, jardines y quintas: iluminaci\xF3n profesional con 30 a\xF1os en la zona.",
      slug: "iluminacion-eventos-tlalpan",
      category: "Zonas",
      image: "/img/guirnaldas/guirnaldas-edison-hacienda-boda.avif",
      imageAlt: "Iluminaci\xF3n para eventos en Tlalpan CDMX"
    }
  ];
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Inicio",
        item: SITE_URL
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: canonical
      }
    ]
  };
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: title,
    description,
    url: canonical,
    publisher: {
      "@type": "Organization",
      name: "REDEIL",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/img/logo.avif`
      }
    },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: articles.map((article, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `${SITE_URL}/blog/${article.slug}/`,
        name: article.title,
        description: article.description,
        image: `${SITE_URL}${article.image}`
      }))
    }
  };
  const structuredData = JSON.stringify([breadcrumbSchema, collectionSchema]);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "canonical": canonical, "schemaMarkup": structuredData, "data-astro-cid-5tznm7mj": true }, { "breadcrumbs": async ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "breadcrumbs" }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "Breadcrumbs", $$Breadcrumbs, { "items": [{ label: "Inicio", href: "/" }, { label: "Blog" }], "data-astro-cid-5tznm7mj": true })} ` })}`, "default": async ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, { "title": "Blog REDEIL: Gu\xEDas de Iluminaci\xF3n y Efectos para tus Eventos", "subtitle": "Consejos, precios reales y soluciones t\xE9cnicas de nuestro equipo con 30 a\xF1os de experiencia.", "introParagraph1": "En REDEIL compartimos 30 a\xF1os de experiencia en iluminaci\xF3n profesional para bodas, XV a\xF1os, corporativos y eventos en CDMX. Cada gu\xEDa est\xE1 escrita por nuestro equipo t\xE9cnico con base en situaciones reales.", "introParagraph2": "Encontrar\xE1s informaci\xF3n pr\xE1ctica sobre equipos, precios, metros de guirnaldas, efectos especiales y todo lo que necesitas para tomar la mejor decisi\xF3n para tu evento.", "data-astro-cid-5tznm7mj": true })} ${maybeRenderHead()}<main data-astro-cid-5tznm7mj> <!-- Articles Grid --> <section class="blog-articles" data-astro-cid-5tznm7mj> <div class="container" data-astro-cid-5tznm7mj> <div class="articles-grid" data-astro-cid-5tznm7mj> ${articles.map((article) => renderTemplate`<article class="article-card" data-astro-cid-5tznm7mj> <div class="article-card__image-wrapper" data-astro-cid-5tznm7mj> <img${addAttribute(article.image, "src")}${addAttribute(article.imageAlt, "alt")} class="article-card__image" loading="lazy" decoding="async" width="400" height="240" data-astro-cid-5tznm7mj> </div> <div class="article-card__content" data-astro-cid-5tznm7mj> <span class="article-card__category" data-astro-cid-5tznm7mj>${article.category}</span> <h2 class="article-card__title" data-astro-cid-5tznm7mj>${article.title}</h2> <p class="article-card__description" data-astro-cid-5tznm7mj>${article.description}</p> <a${addAttribute(`/blog/${article.slug}/`, "href")} class="article-card__link" data-astro-cid-5tznm7mj>
Leer artículo →
</a> </div> </article>`)} </div> </div> </section> <!-- Content Collection Articles --> ${collectionArticles.length > 0 && renderTemplate`<section class="blog-articles blog-articles--alt" data-astro-cid-5tznm7mj> <div class="container" data-astro-cid-5tznm7mj> <h2 class="blog-section-title" data-astro-cid-5tznm7mj>Más guías y comparativas</h2> <div class="articles-grid" data-astro-cid-5tznm7mj> ${collectionArticles.map((article) => renderTemplate`<article class="article-card" data-astro-cid-5tznm7mj> <div class="article-card__image-wrapper" data-astro-cid-5tznm7mj> <img${addAttribute(article.image, "src")}${addAttribute(article.imageAlt, "alt")} class="article-card__image" loading="lazy" decoding="async" width="400" height="240" data-astro-cid-5tznm7mj> </div> <div class="article-card__content" data-astro-cid-5tznm7mj> <span class="article-card__category" data-astro-cid-5tznm7mj>${article.category}</span> <h3 class="article-card__title" data-astro-cid-5tznm7mj>${article.title}</h3> <p class="article-card__description" data-astro-cid-5tznm7mj>${article.description}</p> <a${addAttribute(`/blog/${article.slug}/`, "href")} class="article-card__link" data-astro-cid-5tznm7mj>
Leer artículo →
</a> </div> </article>`)} </div> </div> </section>`} <!-- CTA Final --> <section class="blog-cta" data-astro-cid-5tznm7mj> <div class="container" data-astro-cid-5tznm7mj> <div class="blog-cta__inner" data-astro-cid-5tznm7mj> <h2 data-astro-cid-5tznm7mj>¿Listo para cotizar tu evento?</h2> <p data-astro-cid-5tznm7mj>Nuestro equipo técnico responde en máximo 2 horas.</p> <div class="blog-cta__buttons" data-astro-cid-5tznm7mj> <a href="https://wa.me/5215530682988?text=Hola%20REDEIL%2C%20quiero%20cotizar%20iluminaci%C3%B3n%20para%20mi%20evento" target="_blank" rel="noopener noreferrer" class="btn btn-primary" data-astro-cid-5tznm7mj>
Cotizar por WhatsApp →
</a> </div> </div> </div> </section> </main> ` })} `;
}, "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/pages/blog/index.astro", void 0);

const $$file = "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/pages/blog/index.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
