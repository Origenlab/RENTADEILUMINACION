import { e as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, r as renderTemplate } from './astro/server_D8pMnQBn.mjs';
import 'piccolore';
import 'clsx';
/* empty css                         */

const $$Astro = createAstro("https://rentadeiluminacion.com");
const $$Gallery4X4 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Gallery4X4;
  const { images } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="g4" data-astro-cid-ggsdctgz> ${images.map((img) => renderTemplate`<div class="g4__item" data-astro-cid-ggsdctgz> <img${addAttribute(img.src, "src")}${addAttribute(img.alt, "alt")} width="400" height="300" loading="lazy" data-astro-cid-ggsdctgz> </div>`)} </div> `;
}, "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/components/Gallery4x4.astro", void 0);

export { $$Gallery4X4 as $ };
