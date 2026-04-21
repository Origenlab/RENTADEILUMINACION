import { e as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, r as renderTemplate } from './astro/server_D8pMnQBn.mjs';
import 'piccolore';
import 'clsx';
/* empty css                          */

const $$Astro = createAstro("https://rentadeiluminacion.com");
const $$DirectoryCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$DirectoryCard;
  const {
    nombre,
    categoria,
    zona,
    alcaldia_municipio,
    telefono,
    rating,
    resenas,
    slug
  } = Astro2.props;
  const categoriaLabel = {
    audio: "Audio Profesional",
    iluminacion: "Iluminaci\xF3n",
    "audio-video": "Audio & Video",
    dj: "Equipo DJ",
    efectos: "Efectos"
  };
  const zonaLabel = {
    cdmx: "CDMX",
    "estado-de-mexico": "Edomex"
  };
  const categoriaImg = {
    audio: "/img/directorio/directorio-tienda-audio-01.avif",
    iluminacion: "/img/directorio/directorio-tienda-iluminacion-01.avif",
    "audio-video": "/img/directorio/directorio-audio-video-01.avif",
    dj: "/img/directorio/directorio-equipo-dj-01.avif",
    efectos: "/img/directorio/directorio-efectos-especiales-01.avif"
  };
  const image = categoriaImg[categoria] || categoriaImg.audio;
  const fullStars = Math.floor(rating ?? 0);
  const hasHalf = (rating ?? 0) - fullStars >= 0.3;
  return renderTemplate`${maybeRenderHead()}<article class="dc" data-astro-cid-4ft27olw> <a${addAttribute(`/directorio/${slug}/`, "href")} class="dc__img-link" data-astro-cid-4ft27olw> <div class="dc__img" data-astro-cid-4ft27olw> <img${addAttribute(image, "src")}${addAttribute(`${nombre} \u2014 ${categoriaLabel[categoria] || categoria}`, "alt")} loading="lazy" width="400" height="225" data-astro-cid-4ft27olw> <span class="dc__cat" data-astro-cid-4ft27olw>${categoriaLabel[categoria] || categoria}</span> <span class="dc__zona" data-astro-cid-4ft27olw>${zonaLabel[zona] || zona}</span> </div> </a> <div class="dc__body" data-astro-cid-4ft27olw> <h3 class="dc__title" data-astro-cid-4ft27olw> <a${addAttribute(`/directorio/${slug}/`, "href")} data-astro-cid-4ft27olw>${nombre}</a> </h3> ${rating && renderTemplate`<div class="dc__rating" data-astro-cid-4ft27olw> <span class="dc__stars" data-astro-cid-4ft27olw> ${Array.from({ length: 5 }, (_, i) => renderTemplate`<svg${addAttribute(`dc__star ${i < fullStars ? "dc__star--full" : i === fullStars && hasHalf ? "dc__star--half" : ""}`, "class")} width="14" height="14" viewBox="0 0 24 24" fill="currentColor" data-astro-cid-4ft27olw> <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" data-astro-cid-4ft27olw></path> </svg>`)} </span> <span class="dc__rating-text" data-astro-cid-4ft27olw>${rating} (${resenas} reseñas)</span> </div>`} <p class="dc__location" data-astro-cid-4ft27olw>📍 ${alcaldia_municipio}, ${zonaLabel[zona] || zona}</p> ${telefono && renderTemplate`<p class="dc__phone" data-astro-cid-4ft27olw> <a${addAttribute(`tel:+52${telefono.replace(/\s/g, "")}`, "href")} data-astro-cid-4ft27olw>📞 ${telefono}</a> </p>`} <a${addAttribute(`/directorio/${slug}/`, "href")} class="dc__btn" data-astro-cid-4ft27olw>Ver detalles →</a> </div> </article> `;
}, "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/components/DirectoryCard.astro", void 0);

export { $$DirectoryCard as $ };
