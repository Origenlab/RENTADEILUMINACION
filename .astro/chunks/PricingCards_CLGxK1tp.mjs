import { e as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, r as renderTemplate } from './astro/server_D8pMnQBn.mjs';
import 'piccolore';
import 'clsx';
/* empty css                         */

const $$Astro = createAstro("https://rentadeiluminacion.com");
const $$PricingCards = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PricingCards;
  const { packages } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="pk__grid" data-astro-cid-7jt2x4ie> ${packages.map((pkg) => renderTemplate`<div${addAttribute(["pk__card", { "pk__card--highlight": pkg.highlight }], "class:list")} data-astro-cid-7jt2x4ie> ${pkg.badge && renderTemplate`<span class="pk__badge" data-astro-cid-7jt2x4ie>${pkg.badge}</span>`} <h3 class="pk__name" data-astro-cid-7jt2x4ie>${pkg.name}</h3> <div class="pk__price" data-astro-cid-7jt2x4ie> <span class="pk__price-value" data-astro-cid-7jt2x4ie>${pkg.price}</span> ${pkg.priceNote && renderTemplate`<span class="pk__price-note" data-astro-cid-7jt2x4ie>${pkg.priceNote}</span>`} </div> <p class="pk__desc" data-astro-cid-7jt2x4ie>${pkg.description}</p> <ul class="pk__features" data-astro-cid-7jt2x4ie> ${pkg.features.map((f) => renderTemplate`<li${addAttribute([{ "pk__feat--no": !f.included }], "class:list")} data-astro-cid-7jt2x4ie> <span class="pk__feat-icon" data-astro-cid-7jt2x4ie>${f.included ? "\u2713" : "\u2014"}</span> ${f.text} </li>`)} </ul> <button type="button" data-open-chat${addAttribute(["pk__cta", { "pk__cta--highlight": pkg.highlight }], "class:list")} data-astro-cid-7jt2x4ie> ${pkg.ctaLabel || "Cotizar este paquete"} </button> </div>`)} </div> `;
}, "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/components/PricingCards.astro", void 0);

export { $$PricingCards as $ };
