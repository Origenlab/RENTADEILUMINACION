import { e as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, r as renderTemplate } from './astro/server_D8pMnQBn.mjs';
import 'piccolore';
import 'clsx';
/* empty css                          */

const $$Astro = createAstro("https://rentadeiluminacion.com");
const $$ServiceCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ServiceCard;
  const {
    title,
    description,
    image,
    alt = title,
    link,
    btnLabel
  } = Astro2.props;
  const finalBtnLabel = btnLabel || `Ver ${title} \u2192`;
  return renderTemplate`${maybeRenderHead()}<article class="sc" data-astro-cid-uhzbvkqe> <a${addAttribute(link, "href")} class="sc__img-link" data-astro-cid-uhzbvkqe> <div class="sc__img" data-astro-cid-uhzbvkqe> <img${addAttribute(image, "src")}${addAttribute(alt, "alt")} loading="lazy" width="400" height="225" data-astro-cid-uhzbvkqe> </div> </a> <div class="sc__body" data-astro-cid-uhzbvkqe> <h3 class="sc__title" data-astro-cid-uhzbvkqe>${title}</h3> <p class="sc__desc" data-astro-cid-uhzbvkqe>${description}</p> <a${addAttribute(link, "href")} class="sc__btn" data-astro-cid-uhzbvkqe>${finalBtnLabel}</a> </div> </article> `;
}, "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/components/ServiceCard.astro", void 0);

export { $$ServiceCard as $ };
