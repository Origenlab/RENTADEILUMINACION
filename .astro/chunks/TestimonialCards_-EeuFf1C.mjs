import { e as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, r as renderTemplate } from './astro/server_D8pMnQBn.mjs';
import 'piccolore';
import 'clsx';
/* empty css                         */

const $$Astro = createAstro("https://rentadeiluminacion.com");
const $$TestimonialCards = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$TestimonialCards;
  const { testimonials } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="tc__grid" data-astro-cid-ddmup6w4> ${testimonials.map((t) => renderTemplate`<div class="tc__card" itemscope itemtype="https://schema.org/Review" data-astro-cid-ddmup6w4> <div class="tc__header" data-astro-cid-ddmup6w4> ${t.avatar ? renderTemplate`<img${addAttribute(t.avatar, "src")}${addAttribute(`Foto de ${t.name}`, "alt")} class="tc__avatar" width="48" height="48" loading="lazy" data-astro-cid-ddmup6w4>` : renderTemplate`<div class="tc__avatar-initials" data-astro-cid-ddmup6w4>${t.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}</div>`} <div class="tc__meta" data-astro-cid-ddmup6w4> <span class="tc__name" itemprop="author" data-astro-cid-ddmup6w4>${t.name}</span> ${t.venue && renderTemplate`<span class="tc__venue" data-astro-cid-ddmup6w4>${t.venue}</span>`} ${t.date && renderTemplate`<span class="tc__date" data-astro-cid-ddmup6w4>${t.date}</span>`} </div> </div> <div class="tc__stars" itemprop="reviewRating" itemscope itemtype="https://schema.org/Rating" data-astro-cid-ddmup6w4> <meta itemprop="ratingValue"${addAttribute(String(t.rating), "content")}> <meta itemprop="bestRating" content="5"> ${Array.from({ length: t.rating }).map(() => renderTemplate`<span class="tc__star" data-astro-cid-ddmup6w4>★</span>`)} </div> <p class="tc__text" itemprop="reviewBody" data-astro-cid-ddmup6w4>"${t.text}"</p> ${t.event && renderTemplate`<span class="tc__event" itemprop="about" data-astro-cid-ddmup6w4>${t.event}</span>`} </div>`)} </div> `;
}, "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/components/TestimonialCards.astro", void 0);

export { $$TestimonialCards as $ };
