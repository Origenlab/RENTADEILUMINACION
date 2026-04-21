import { e as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, r as renderTemplate } from './astro/server_D8pMnQBn.mjs';
import 'piccolore';
import 'clsx';
/* empty css                                         */

const $$Astro = createAstro("https://rentadeiluminacion.com");
const $$FeatureGrid = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FeatureGrid;
  const { features, columns = 3 } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="fg"${addAttribute(`--fg-cols: ${columns}`, "style")} data-astro-cid-p7n436wq> ${features.map((f) => renderTemplate`<div class="fg__item" data-astro-cid-p7n436wq> <span class="fg__icon" data-astro-cid-p7n436wq>✓</span> <div data-astro-cid-p7n436wq> <h4 class="fg__title" data-astro-cid-p7n436wq>${f.title}</h4> <p class="fg__desc" data-astro-cid-p7n436wq>${f.description}</p> </div> </div>`)} </div> `;
}, "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/components/FeatureGrid.astro", void 0);

export { $$FeatureGrid as $ };
