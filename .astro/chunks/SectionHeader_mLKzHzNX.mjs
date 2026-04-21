import { e as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, b as renderComponent, r as renderTemplate } from './astro/server_D8pMnQBn.mjs';
import 'piccolore';
/* empty css                          */

const $$Astro = createAstro("https://rentadeiluminacion.com");
const $$SectionHeader = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SectionHeader;
  const {
    tag = "h2",
    title,
    subtitle,
    paragraph1,
    paragraph2,
    dark = false
  } = Astro2.props;
  const Tag = tag;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["sh", { "sh--dark": dark }], "class:list")} data-astro-cid-wk2votdk> <div class="container sh__grid" data-astro-cid-wk2votdk> <div class="sh__col1" data-astro-cid-wk2votdk> ${renderComponent($$result, "Tag", Tag, { "class": "sh__title", "data-astro-cid-wk2votdk": true }, { "default": ($$result2) => renderTemplate`${title}` })} ${subtitle && renderTemplate`<p class="sh__subtitle" data-astro-cid-wk2votdk>${subtitle}</p>`} </div> <div class="sh__col2" data-astro-cid-wk2votdk> <p class="sh__text" data-astro-cid-wk2votdk>${paragraph1}</p> <p class="sh__text" data-astro-cid-wk2votdk>${paragraph2}</p> </div> </div> </div> `;
}, "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/components/SectionHeader.astro", void 0);

export { $$SectionHeader as $ };
