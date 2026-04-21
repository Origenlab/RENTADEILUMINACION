import { e as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, b as renderComponent, F as Fragment, r as renderTemplate, u as unescapeHTML } from './astro/server_D8pMnQBn.mjs';
import 'piccolore';
/* empty css                          */

const $$Astro = createAstro("https://rentadeiluminacion.com");
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Hero;
  const {
    title,
    subtitle,
    cotizarHref = "/contacto/",
    whatsappText = "Hola,%20quiero%20cotizar%20iluminacion%20para%20mi%20evento",
    introParagraph1,
    introParagraph2,
    extraClass = "",
    badge,
    stats,
    hideCtas = false
  } = Astro2.props;
  const defaultStats = [
    { value: "+500", label: "Eventos realizados" },
    { value: "10+", label: "A\xF1os de experiencia" },
    { value: "CDMX", label: "Y zona metropolitana" }
  ];
  const displayStats = stats ?? defaultStats;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(`hero hero-two-columns ${extraClass}`, "class")} aria-labelledby="hero-title" data-astro-cid-bbe6dxrz> <!-- Fondo con gradiente sutil --> <div class="hero__bg" aria-hidden="true" data-astro-cid-bbe6dxrz> <div class="hero__bg-glow" data-astro-cid-bbe6dxrz></div> </div> <div class="container" data-astro-cid-bbe6dxrz> <div class="hero__grid" data-astro-cid-bbe6dxrz> <!-- COLUMNA IZQUIERDA --> <div class="hero__left" data-astro-cid-bbe6dxrz> <!-- Overline --> <div class="hero__overline" aria-hidden="true" data-astro-cid-bbe6dxrz> <span class="hero__overline-dot" data-astro-cid-bbe6dxrz></span> <span data-astro-cid-bbe6dxrz>Iluminación &amp; Sonido Profesional · CDMX</span> </div> <!-- H1 con acento --> <h1 id="hero-title" class="hero__h1" data-astro-cid-bbe6dxrz> ${title.includes("Iluminaci\xF3n") ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-bbe6dxrz": true }, { "default": ($$result2) => renderTemplate` <span class="hero__h1-top" data-astro-cid-bbe6dxrz>Renta de</span> <span class="hero__h1-accent" data-astro-cid-bbe6dxrz>Iluminación</span> <span class="hero__h1-bottom" data-astro-cid-bbe6dxrz>y Sonido para Eventos en CDMX</span> ` })}` : title} </h1> <!-- Subtítulo --> <p class="hero__subtitle" data-astro-cid-bbe6dxrz>${subtitle}</p> <!-- CTAs --> ${!hideCtas && renderTemplate`<div class="hero__ctas" data-astro-cid-bbe6dxrz> <button type="button" data-open-chat class="btn btn-primary btn-lg" data-astro-cid-bbe6dxrz>Cotiza tu Evento</button> <button type="button" data-open-chat class="btn btn-whatsapp btn-lg" data-astro-cid-bbe6dxrz> <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" data-astro-cid-bbe6dxrz><path fill="currentColor" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" data-astro-cid-bbe6dxrz></path></svg>
WhatsApp
</button> </div>`} <!-- Stats --> <div class="hero__stats" data-astro-cid-bbe6dxrz> ${displayStats.map((s) => renderTemplate`<div class="hero__stat" data-astro-cid-bbe6dxrz> <span class="hero__stat-value" data-astro-cid-bbe6dxrz>${s.value}</span> <span class="hero__stat-label" data-astro-cid-bbe6dxrz>${s.label}</span> </div>`)} </div> </div> <!-- COLUMNA DERECHA --> <div class="hero__right" data-astro-cid-bbe6dxrz> <div class="hero__editorial" data-astro-cid-bbe6dxrz> <div class="hero__editorial-bar" aria-hidden="true" data-astro-cid-bbe6dxrz></div> <p class="hero__para hero__para--lead" data-astro-cid-bbe6dxrz>${unescapeHTML(introParagraph1)}</p> <p class="hero__para" data-astro-cid-bbe6dxrz>${unescapeHTML(introParagraph2)}</p> <!-- Marca de confianza --> <div class="hero__brands" aria-label="Marcas de equipo profesional" data-astro-cid-bbe6dxrz> <span class="hero__brands-label" data-astro-cid-bbe6dxrz>Equipo profesional</span> <div class="hero__brands-list" data-astro-cid-bbe6dxrz> ${["Martin", "Chauvet", "JBL", "QSC", "Shure"].map((b) => renderTemplate`<span class="hero__brand-tag" data-astro-cid-bbe6dxrz>${b}</span>`)} </div> </div> </div> </div> </div> </div> </section> `;
}, "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/components/Hero.astro", void 0);

export { $$Hero as $ };
