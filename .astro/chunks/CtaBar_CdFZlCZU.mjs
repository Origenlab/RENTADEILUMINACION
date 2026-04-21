import { e as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, r as renderTemplate } from './astro/server_D8pMnQBn.mjs';
import 'piccolore';
import 'clsx';
/* empty css                          */

const $$Astro = createAstro("https://rentadeiluminacion.com");
const $$CtaBar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CtaBar;
  const { items } = Astro2.props;
  const descriptions = {
    iluminacion: "Guirnaldas \xB7 Cabezas m\xF3viles \xB7 Gobos \xB7 Sky trackers",
    sonido: "Sistemas JBL \xB7 QSC \xB7 DJ profesional \xB7 Micr\xF3fonos Shure",
    efectos: "Humo bajo \xB7 Confeti \xB7 Bengalas fr\xEDas \xB7 Efectos de escenario",
    cotizar: "Respuesta en menos de 15 min por WhatsApp"
  };
  return renderTemplate`${maybeRenderHead()}<section class="ctabar" aria-label="Categorías de servicio" data-astro-cid-szmug3e6> <div class="ctabar__grid" data-astro-cid-szmug3e6> ${items.map((item) => {
    const isCta = item.icon === "cotizar";
    const desc = item.description ?? (item.icon ? descriptions[item.icon] : "");
    return renderTemplate`<a${addAttribute(item.href, "href")}${addAttribute(`ctabar__card${isCta ? " ctabar__card--cta" : ""}`, "class")}${addAttribute(item.label, "aria-label")} data-astro-cid-szmug3e6> <div class="ctabar__text" data-astro-cid-szmug3e6> <span class="ctabar__label" data-astro-cid-szmug3e6>${item.label}</span> <span class="ctabar__desc" data-astro-cid-szmug3e6>${desc}</span> </div> <svg class="ctabar__arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" data-astro-cid-szmug3e6> <line x1="5" y1="12" x2="19" y2="12" data-astro-cid-szmug3e6></line> <polyline points="12 5 19 12 12 19" data-astro-cid-szmug3e6></polyline> </svg> <span class="ctabar__line" aria-hidden="true" data-astro-cid-szmug3e6></span> </a>`;
  })} </div> </section> `;
}, "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/components/CtaBar.astro", void 0);

export { $$CtaBar as $ };
