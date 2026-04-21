import { e as createAstro, c as createComponent, b as renderComponent, r as renderTemplate } from '../../chunks/astro/server_D8pMnQBn.mjs';
import 'piccolore';
import { r as renderEntry, g as getCollection } from '../../chunks/_astro_content_DoEh7u_S.mjs';
import { $ as $$BlogLayout } from '../../chunks/BlogLayout_CZyANi2n.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://rentadeiluminacion.com");
async function getStaticPaths() {
  const posts = await getCollection("blog", ({ data }) => !data.draft);
  return posts.map((post) => ({
    params: { slug: post.slug },
    props: { post }
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { post } = Astro2.props;
  const { Content, headings } = await renderEntry(post);
  const canonical = `https://rentadeiluminacion.com/blog/${post.slug}/`;
  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": post.data.title,
      "description": post.data.description,
      "image": `https://rentadeiluminacion.com${post.data.image}`,
      ...post.data.pubDate ? { "datePublished": post.data.pubDate } : {},
      "author": {
        "@type": "Organization",
        "name": "REDEIL",
        "url": "https://rentadeiluminacion.com"
      },
      "publisher": {
        "@type": "Organization",
        "name": "REDEIL",
        "logo": {
          "@type": "ImageObject",
          "url": "https://rentadeiluminacion.com/img/logo-redeil.avif"
        }
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": canonical
      }
    }
  ];
  if (post.data.faqItems && post.data.faqItems.length > 0) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": post.data.faqItems.map((faq) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    });
  }
  const schemaMarkup = JSON.stringify(schemas);
  return renderTemplate`${renderComponent($$result, "BlogLayout", $$BlogLayout, { "title": post.data.title, "description": post.data.description, "canonical": canonical, "image": post.data.image, "imageAlt": post.data.imageAlt, "category": post.data.category, "schemaMarkup": schemaMarkup, "headings": headings }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Content", Content, {})} ` })}`;
}, "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/pages/blog/[...slug].astro", void 0);

const $$file = "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/pages/blog/[...slug].astro";
const $$url = "/blog/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
