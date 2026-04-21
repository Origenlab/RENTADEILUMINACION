import { c as createComponent, m as maybeRenderHead, d as addAttribute, r as renderTemplate, b as renderComponent, F as Fragment, e as createAstro, f as renderScript, g as renderSlot, a as renderHead, u as unescapeHTML } from './astro/server_D8pMnQBn.mjs';
import 'piccolore';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import matter from 'gray-matter';
/* empty css                          */
import 'clsx';

const $$TopBar = createComponent(($$result, $$props, $$slots) => {
  let config = {};
  try {
    const raw = readFileSync(join(process.cwd(), "src/data/topbar.md"), "utf-8");
    config = matter(raw).data;
  } catch {
  }
  const enabled = config.enabled ?? true;
  const promo = config.promo ?? "";
  const phone = config.phone ?? "";
  const whatsapp = config.whatsapp ?? "";
  const waMessage = config.waMessage ?? "Hola, quiero informaci\xF3n.";
  const email = config.email ?? "";
  const schedule = config.schedule ?? "";
  const delivery = config.delivery ?? "";
  const style = config.style ?? "dark";
  const waHref = whatsapp ? `https://wa.me/${whatsapp}?text=${encodeURIComponent(waMessage)}` : "";
  const variantClass = `topbar--${style}`;
  return renderTemplate`${enabled && renderTemplate`${maybeRenderHead()}<div${addAttribute(`topbar ${variantClass}`, "class")} role="banner" aria-label="Información de contacto" data-astro-cid-lq7i5isa><div class="topbar__inner" data-astro-cid-lq7i5isa><div class="topbar__left" data-astro-cid-lq7i5isa>${promo && renderTemplate`<span class="topbar__promo" data-astro-cid-lq7i5isa>${promo}</span>`}</div><div class="topbar__center" data-astro-cid-lq7i5isa>${phone && renderTemplate`<a${addAttribute(`tel:+52${whatsapp || phone.replace(/\s/g, "")}`, "href")} class="topbar__item topbar__link" data-astro-cid-lq7i5isa><svg class="topbar__icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" data-astro-cid-lq7i5isa><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" data-astro-cid-lq7i5isa></path></svg><span data-astro-cid-lq7i5isa>${phone}</span></a>`}${phone && schedule && renderTemplate`<span class="topbar__sep" aria-hidden="true" data-astro-cid-lq7i5isa>|</span>`}${schedule && renderTemplate`<span class="topbar__item" data-astro-cid-lq7i5isa><svg class="topbar__icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" data-astro-cid-lq7i5isa><circle cx="12" cy="12" r="10" data-astro-cid-lq7i5isa></circle><polyline points="12 6 12 12 16 14" data-astro-cid-lq7i5isa></polyline></svg><span data-astro-cid-lq7i5isa>${schedule}</span></span>`}</div><div class="topbar__right" data-astro-cid-lq7i5isa>${delivery && renderTemplate`<span class="topbar__item topbar__delivery" data-astro-cid-lq7i5isa><svg class="topbar__icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" data-astro-cid-lq7i5isa><rect x="1" y="3" width="15" height="13" data-astro-cid-lq7i5isa></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8" data-astro-cid-lq7i5isa></polygon><circle cx="5.5" cy="18.5" r="2.5" data-astro-cid-lq7i5isa></circle><circle cx="18.5" cy="18.5" r="2.5" data-astro-cid-lq7i5isa></circle></svg><span data-astro-cid-lq7i5isa>${delivery}</span></span>`}${delivery && email && renderTemplate`<span class="topbar__sep topbar__sep--hide-tablet" aria-hidden="true" data-astro-cid-lq7i5isa>|</span>`}${email && renderTemplate`<a${addAttribute(`mailto:${email}`, "href")} class="topbar__item topbar__link topbar__sep--hide-tablet" data-astro-cid-lq7i5isa><svg class="topbar__icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" data-astro-cid-lq7i5isa><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" data-astro-cid-lq7i5isa></path><polyline points="22,6 12,13 2,6" data-astro-cid-lq7i5isa></polyline></svg><span data-astro-cid-lq7i5isa>${email}</span></a>`}${waHref && renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-lq7i5isa": true }, { "default": ($$result2) => renderTemplate`${email && renderTemplate`<span class="topbar__sep topbar__sep--hide-tablet" aria-hidden="true" data-astro-cid-lq7i5isa>|</span>`}<button type="button" data-open-chat class="topbar__item topbar__link topbar__wa" data-astro-cid-lq7i5isa><svg class="topbar__icon" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-astro-cid-lq7i5isa><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" data-astro-cid-lq7i5isa></path></svg><span data-astro-cid-lq7i5isa>Chat</span></button>` })}`}</div></div></div>`}`;
}, "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/components/TopBar.astro", void 0);

var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(cooked.slice()) }));
var _a$2;
const $$Astro$2 = createAstro("https://rentadeiluminacion.com");
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Header;
  let config = {};
  try {
    const raw = readFileSync(join(process.cwd(), "src/data/header.md"), "utf-8");
    config = matter(raw).data;
  } catch {
  }
  const brand = config.brand ?? "MesPic";
  const brandAccent = config.brandAccent ?? "\xB7";
  const logoHref = config.logoHref ?? "/";
  const navLinks = config.nav ?? [];
  const cta = config.cta ?? { enabled: false, label: "", href: "" };
  const scrollEffect = config.scrollEffect ?? true;
  const blurBg = config.blurBg ?? true;
  const currentPath = Astro2.url.pathname;
  function isActive(href, children) {
    if (href === "/") return currentPath === "/";
    if (currentPath.startsWith(href)) return true;
    if (children?.some((c) => currentPath.startsWith(c.href))) return true;
    return false;
  }
  return renderTemplate(_a$2 || (_a$2 = __template$2(["", "<header", ' id="hdr"', ' data-astro-cid-3ef6ksr2> <div class="hdr__inner" data-astro-cid-3ef6ksr2>  <a', ' class="hdr__logo"', ' data-astro-cid-3ef6ksr2> <img src="/img/logo-redeil.avif" alt="REDEIL - Renta de Iluminaci\xF3n Profesional" width="160" height="50" loading="eager" decoding="async" data-astro-cid-3ef6ksr2> </a>  <nav class="hdr__nav" aria-label="Navegaci\xF3n principal" data-astro-cid-3ef6ksr2> <ul class="hdr__list" role="menubar" data-astro-cid-3ef6ksr2> ', " </ul> </nav>  ", '  <button class="hdr__toggle" id="hdrToggle" type="button" aria-label="Abrir men\xFA" aria-expanded="false" aria-controls="hdrPanel" data-astro-cid-3ef6ksr2> <span class="hdr__bar" data-astro-cid-3ef6ksr2></span> </button> </div> </header>  <div class="hdr__overlay" id="hdrOverlay" aria-hidden="true" data-astro-cid-3ef6ksr2></div>  <nav class="hdr__panel" id="hdrPanel" aria-label="Men\xFA m\xF3vil" aria-hidden="true" data-astro-cid-3ef6ksr2> <div class="hdr__panel-head" data-astro-cid-3ef6ksr2> <span class="hdr__panel-brand" data-astro-cid-3ef6ksr2>', '<span class="hdr__logo-dot" data-astro-cid-3ef6ksr2>', '</span></span> <button class="hdr__panel-close" id="hdrClose" type="button" aria-label="Cerrar men\xFA" data-astro-cid-3ef6ksr2> <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" data-astro-cid-3ef6ksr2> <path d="M1 1l14 14M15 1L1 15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" data-astro-cid-3ef6ksr2></path> </svg> </button> </div> <ul class="hdr__panel-list" data-astro-cid-3ef6ksr2> ', " </ul> ", " </nav>  <script>\n  (function () {\n    var hdr     = document.getElementById('hdr');\n    var toggle  = document.getElementById('hdrToggle');\n    var panel   = document.getElementById('hdrPanel');\n    var overlay = document.getElementById('hdrOverlay');\n    var close   = document.getElementById('hdrClose');\n    var topbar  = document.querySelector('.topbar');\n\n    /* \u2500\u2500 Mobile menu \u2500\u2500 */\n    function open() {\n      toggle.classList.add('hdr__toggle--open');\n      toggle.setAttribute('aria-expanded', 'true');\n      panel.classList.add('hdr__panel--open');\n      panel.setAttribute('aria-hidden', 'false');\n      overlay.classList.add('hdr__overlay--visible');\n      document.body.style.overflow = 'hidden';\n    }\n\n    function shut() {\n      toggle.classList.remove('hdr__toggle--open');\n      toggle.setAttribute('aria-expanded', 'false');\n      panel.classList.remove('hdr__panel--open');\n      panel.setAttribute('aria-hidden', 'true');\n      overlay.classList.remove('hdr__overlay--visible');\n      document.body.style.overflow = '';\n    }\n\n    if (toggle) toggle.addEventListener('click', function () {\n      panel.classList.contains('hdr__panel--open') ? shut() : open();\n    });\n    if (close)   close.addEventListener('click', shut);\n    if (overlay) overlay.addEventListener('click', shut);\n\n    /* Close on link click */\n    if (panel) {\n      var links = panel.querySelectorAll('a');\n      for (var i = 0; i < links.length; i++) links[i].addEventListener('click', shut);\n    }\n\n    /* \u2500\u2500 Accordion submenus \u2500\u2500 */\n    var subs = document.querySelectorAll('[data-sub]');\n    for (var j = 0; j < subs.length; j++) {\n      subs[j].addEventListener('click', function () {\n        this.classList.toggle('hdr__panel-subtoggle--open');\n        var sub = this.nextElementSibling;\n        if (sub) sub.classList.toggle('hdr__panel-sub--open');\n      });\n    }\n\n    /* \u2500\u2500 Scroll: hide topbar, add shadow \u2500\u2500 */\n    if (hdr && hdr.dataset.scroll === 'true') {\n      var stack = document.querySelector('.hdr-stack');\n\n      function getTopbarH() {\n        return topbar ? topbar.offsetHeight : 0;\n      }\n\n      window.addEventListener('scroll', function () {\n        var topbarH = getTopbarH();\n        var y = window.pageYOffset || document.documentElement.scrollTop;\n        if (y > topbarH) {\n          hdr.classList.add('hdr--scrolled');\n          if (stack) stack.style.top = '0';\n          if (topbar) topbar.style.transform = 'translateY(-100%)';\n        } else {\n          hdr.classList.remove('hdr--scrolled');\n          if (stack) stack.style.top = topbarH + 'px';\n          if (topbar) topbar.style.transform = '';\n        }\n      }, { passive: true });\n    }\n  })();\n<\/script>"])), maybeRenderHead(), addAttribute(["hdr", { "hdr--blur": blurBg }], "class:list"), addAttribute(scrollEffect ? "true" : void 0, "data-scroll"), addAttribute(logoHref, "href"), addAttribute(`${brand} \u2014 Inicio`, "aria-label"), navLinks.map((link) => renderTemplate`<li${addAttribute([{ "hdr__has-sub": !!link.children }], "class:list")} role="none" data-astro-cid-3ef6ksr2> <a${addAttribute(link.href, "href")} role="menuitem"${addAttribute(["hdr__link", { "hdr__link--active": isActive(link.href, link.children) }], "class:list")}${addAttribute(link.children ? "true" : void 0, "aria-haspopup")} data-astro-cid-3ef6ksr2> ${link.label} ${link.children && renderTemplate`<svg class="hdr__chevron" width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden="true" data-astro-cid-3ef6ksr2> <path d="M1 1l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-3ef6ksr2></path> </svg>`} </a> ${link.children && renderTemplate`<ul class="hdr__dropdown" role="menu" data-astro-cid-3ef6ksr2> ${link.children.map((sub) => renderTemplate`<li role="none" data-astro-cid-3ef6ksr2> <a${addAttribute(sub.href, "href")} role="menuitem"${addAttribute(["hdr__drop-link", { "hdr__drop-link--active": currentPath === sub.href }], "class:list")} data-astro-cid-3ef6ksr2> ${sub.label} </a> </li>`)} </ul>`} </li>`), cta.enabled && renderTemplate`<a${addAttribute(cta.href, "href")} class="hdr__cta btn btn-primary" data-astro-cid-3ef6ksr2>${cta.label}</a>`, brand, brandAccent, navLinks.map((link) => renderTemplate`<li${addAttribute([{ "hdr__panel-hassub": !!link.children }], "class:list")} data-astro-cid-3ef6ksr2> ${link.children ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-3ef6ksr2": true }, { "default": ($$result2) => renderTemplate` <button class="hdr__panel-link hdr__panel-subtoggle" type="button" data-sub data-astro-cid-3ef6ksr2> <span data-astro-cid-3ef6ksr2>${link.label}</span> <svg class="hdr__panel-chev" width="12" height="7" viewBox="0 0 12 7" fill="none" aria-hidden="true" data-astro-cid-3ef6ksr2> <path d="M1 1l5 5 5-5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-3ef6ksr2></path> </svg> </button> <ul class="hdr__panel-sub" data-astro-cid-3ef6ksr2> ${link.children.map((sub) => renderTemplate`<li data-astro-cid-3ef6ksr2> <a${addAttribute(sub.href, "href")}${addAttribute(["hdr__panel-link hdr__panel-sublink", { "hdr__panel-link--active": currentPath === sub.href }], "class:list")} data-astro-cid-3ef6ksr2> ${sub.label} </a> </li>`)} </ul> ` })}` : renderTemplate`<a${addAttribute(link.href, "href")}${addAttribute(["hdr__panel-link", { "hdr__panel-link--active": isActive(link.href) }], "class:list")} data-astro-cid-3ef6ksr2> ${link.label} </a>`} </li>`), cta.enabled && renderTemplate`<div class="hdr__panel-foot" data-astro-cid-3ef6ksr2> <a${addAttribute(cta.href, "href")} class="btn btn-primary hdr__panel-cta" data-astro-cid-3ef6ksr2>${cta.label}</a> </div>`);
}, "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const year = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<footer class="ft" data-astro-cid-sz7xmlte> <!-- ═══ PRINCIPAL ═══ --> <div class="container ft__main" data-astro-cid-sz7xmlte> <div class="ft__grid" data-astro-cid-sz7xmlte> <!-- Marca + contacto --> <div class="ft__brand" data-astro-cid-sz7xmlte> <a href="/" class="ft__logo" data-astro-cid-sz7xmlte>REDEIL</a> <p class="ft__tagline" data-astro-cid-sz7xmlte>Renta de iluminación, sonido y efectos especiales para bodas, XV años y eventos en Ciudad de México y Estado de México.</p> <div class="ft__contact-list" data-astro-cid-sz7xmlte> <a href="tel:+525530682988" class="ft__contact-link" data-astro-cid-sz7xmlte> <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-sz7xmlte><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" data-astro-cid-sz7xmlte></path></svg>
55 3068 2988
</a> <button type="button" data-open-chat class="ft__contact-link ft__contact-wa" data-astro-cid-sz7xmlte> <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" data-astro-cid-sz7xmlte><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" data-astro-cid-sz7xmlte></path></svg>
Chat
</button> <a href="mailto:hola@rentadeiluminacion.com" class="ft__contact-link" data-astro-cid-sz7xmlte> <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-sz7xmlte><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" data-astro-cid-sz7xmlte></path><polyline points="22,6 12,13 2,6" data-astro-cid-sz7xmlte></polyline></svg>
hola@rentadeiluminacion.com
</a> <span class="ft__schedule" data-astro-cid-sz7xmlte> <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-sz7xmlte><circle cx="12" cy="12" r="10" data-astro-cid-sz7xmlte></circle><polyline points="12 6 12 12 16 14" data-astro-cid-sz7xmlte></polyline></svg>
Lun–Dom 8:00–18:00
</span> </div> </div> <!-- Iluminación --> <div class="ft__col" data-astro-cid-sz7xmlte> <h4 class="ft__heading" data-astro-cid-sz7xmlte>Iluminación</h4> <ul data-astro-cid-sz7xmlte> <li data-astro-cid-sz7xmlte><a href="/servicios/guirnaldas/" data-astro-cid-sz7xmlte>Guirnaldas Edison</a></li> <li data-astro-cid-sz7xmlte><a href="/servicios/luces-neon/" data-astro-cid-sz7xmlte>Luces Neón y UV</a></li> <li data-astro-cid-sz7xmlte><a href="/servicios/luz-negra/" data-astro-cid-sz7xmlte>Luz Negra</a></li> <li data-astro-cid-sz7xmlte><a href="/servicios/sky-tracker/" data-astro-cid-sz7xmlte>Sky Tracker</a></li> <li data-astro-cid-sz7xmlte><a href="/servicios/cabezas-moviles/" data-astro-cid-sz7xmlte>Cabezas Móviles</a></li> <li data-astro-cid-sz7xmlte><a href="/servicios/cascadas-led/" data-astro-cid-sz7xmlte>Cascadas LED</a></li> <li data-astro-cid-sz7xmlte><a href="/servicios/city-color/" data-astro-cid-sz7xmlte>City Color</a></li> <li data-astro-cid-sz7xmlte><a href="/servicios/iluminacion-arquitectonica/" data-astro-cid-sz7xmlte>Ilum. Arquitectónica</a></li> <li data-astro-cid-sz7xmlte><a href="/servicios/gobos/" data-astro-cid-sz7xmlte>Gobos</a></li> <li data-astro-cid-sz7xmlte><a href="/servicios/seguidor/" data-astro-cid-sz7xmlte>Seguidor</a></li> </ul> </div> <!-- Sonido + Efectos --> <div class="ft__col" data-astro-cid-sz7xmlte> <h4 class="ft__heading" data-astro-cid-sz7xmlte>Sonido y DJ</h4> <ul data-astro-cid-sz7xmlte> <li data-astro-cid-sz7xmlte><a href="/servicios/bocinas/" data-astro-cid-sz7xmlte>Audio para Eventos</a></li> <li data-astro-cid-sz7xmlte><a href="/servicios/bocinas-djs/" data-astro-cid-sz7xmlte>DJ para Fiestas</a></li> <li data-astro-cid-sz7xmlte><a href="/servicios/bocinas-bodas/" data-astro-cid-sz7xmlte>Bocinas para Bodas</a></li> <li data-astro-cid-sz7xmlte><a href="/servicios/bocinas-xv/" data-astro-cid-sz7xmlte>Bocinas para XV Años</a></li> <li data-astro-cid-sz7xmlte><a href="/servicios/bocinas-fiestas/" data-astro-cid-sz7xmlte>Bocinas para Fiestas</a></li> <li data-astro-cid-sz7xmlte><a href="/servicios/bocinas-conferencias/" data-astro-cid-sz7xmlte>Conferencias</a></li> </ul> <h4 class="ft__heading ft__heading--mt" data-astro-cid-sz7xmlte>Efectos Especiales</h4> <ul data-astro-cid-sz7xmlte> <li data-astro-cid-sz7xmlte><a href="/servicios/humo-bajo/" data-astro-cid-sz7xmlte>Humo Bajo</a></li> <li data-astro-cid-sz7xmlte><a href="/servicios/confeti/" data-astro-cid-sz7xmlte>Confeti</a></li> <li data-astro-cid-sz7xmlte><a href="/servicios/burbujas/" data-astro-cid-sz7xmlte>Burbujas</a></li> <li data-astro-cid-sz7xmlte><a href="/servicios/bola-disco/" data-astro-cid-sz7xmlte>Bola Disco</a></li> <li data-astro-cid-sz7xmlte><a href="/servicios/pantalla-inflable/" data-astro-cid-sz7xmlte>Pantalla Inflable</a></li> <li data-astro-cid-sz7xmlte><a href="/servicios/podiums/" data-astro-cid-sz7xmlte>Podium</a></li> </ul> </div> <!-- Empresa + Cobertura --> <div class="ft__col" data-astro-cid-sz7xmlte> <h4 class="ft__heading" data-astro-cid-sz7xmlte>Empresa</h4> <ul data-astro-cid-sz7xmlte> <li data-astro-cid-sz7xmlte><a href="/nosotros/" data-astro-cid-sz7xmlte>Nosotros</a></li> <li data-astro-cid-sz7xmlte><a href="/servicios/" data-astro-cid-sz7xmlte>Servicios</a></li> <li data-astro-cid-sz7xmlte><a href="/directorio/" data-astro-cid-sz7xmlte>Directorio</a></li> <li data-astro-cid-sz7xmlte><a href="/blog/" data-astro-cid-sz7xmlte>Blog</a></li> <li data-astro-cid-sz7xmlte><a href="/contacto/" data-astro-cid-sz7xmlte>Contacto</a></li> <li data-astro-cid-sz7xmlte><a href="/eventos/bodas/" data-astro-cid-sz7xmlte>Bodas</a></li> <li data-astro-cid-sz7xmlte><a href="/eventos/xv-anos/" data-astro-cid-sz7xmlte>XV Años</a></li> </ul> <h4 class="ft__heading ft__heading--mt" data-astro-cid-sz7xmlte>Zonas</h4> <ul data-astro-cid-sz7xmlte> <li data-astro-cid-sz7xmlte><a href="/zonas/" data-astro-cid-sz7xmlte>Todas las zonas</a></li> <li data-astro-cid-sz7xmlte><a href="/zonas/coyoacan/" data-astro-cid-sz7xmlte>Coyoacán</a></li> <li data-astro-cid-sz7xmlte><a href="/zonas/benito-juarez/" data-astro-cid-sz7xmlte>Benito Juárez</a></li> <li data-astro-cid-sz7xmlte><a href="/zonas/miguel-hidalgo/" data-astro-cid-sz7xmlte>Miguel Hidalgo</a></li> <li data-astro-cid-sz7xmlte><a href="/zonas/cuauhtemoc/" data-astro-cid-sz7xmlte>Cuauhtémoc</a></li> <li data-astro-cid-sz7xmlte><a href="/zonas/tlalpan/" data-astro-cid-sz7xmlte>Tlalpan</a></li> <li data-astro-cid-sz7xmlte><a href="/zonas/alvaro-obregon/" data-astro-cid-sz7xmlte>Álvaro Obregón</a></li> <li data-astro-cid-sz7xmlte><a href="/zonas/naucalpan/" data-astro-cid-sz7xmlte>Naucalpan</a></li> <li data-astro-cid-sz7xmlte><a href="/zonas/tlalnepantla/" data-astro-cid-sz7xmlte>Tlalnepantla</a></li> <li data-astro-cid-sz7xmlte><a href="/zonas/ecatepec/" data-astro-cid-sz7xmlte>Ecatepec</a></li> <li data-astro-cid-sz7xmlte><a href="/zonas/nezahualcoyotl/" data-astro-cid-sz7xmlte>Nezahualcóyotl</a></li> </ul> </div> </div> </div> <!-- ═══ BOTTOM BAR ═══ --> <div class="ft__bar" data-astro-cid-sz7xmlte> <div class="container ft__bar-inner" data-astro-cid-sz7xmlte> <p data-astro-cid-sz7xmlte>&copy; ${year} REDEIL — Renta de Iluminación Profesional para Eventos. Todos los derechos reservados.</p> <div class="ft__bar-links" data-astro-cid-sz7xmlte> <a href="/aviso-privacidad/" data-astro-cid-sz7xmlte>Aviso de privacidad</a> <span class="ft__bar-sep" data-astro-cid-sz7xmlte>·</span> <a href="/contacto/" data-astro-cid-sz7xmlte>Contacto</a> </div> </div> </div> </footer> `;
}, "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/components/Footer.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1, _b, _c;
const $$Astro$1 = createAstro("https://rentadeiluminacion.com");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const CDN_URL = "https://ek8wn5x6rqg.exactdn.com";
  const {
    title,
    description,
    canonical,
    ogImage = `${CDN_URL}/img/og/og-image-redeil.avif`,
    ogTitle,
    ogDescription,
    schemaMarkup
  } = Astro2.props;
  const finalOgTitle = ogTitle || title;
  const finalOgDescription = ogDescription || description;
  const siteUrl = "https://rentadeiluminacion.com";
  const urlPath = new URL(canonical).pathname;
  const pathSegments = urlPath.split("/").filter(Boolean);
  const slugNames = {
    "servicios": "Servicios",
    "eventos": "Eventos",
    "nosotros": "Nosotros",
    "contacto": "Contacto",
    "blog": "Blog",
    "aviso-privacidad": "Aviso de Privacidad",
    "zonas-de-cobertura": "Zonas de Cobertura",
    "cabezas-moviles": "Cabezas M\xF3viles",
    "guirnaldas": "Guirnaldas",
    "luces-neon": "Luces Ne\xF3n",
    "luces-led": "Luces LED",
    "sky-tracker": "Sky Tracker",
    "bola-disco": "Bola de Disco",
    "city-color": "City Color",
    "city-light": "City Light",
    "gobos": "Gobos",
    "cascadas-led": "Cascadas LED",
    "maquina-humo": "M\xE1quina de Humo",
    "humo-bajo": "Humo Bajo",
    "confeti": "Confeti",
    "confeti-papelitos": "Confeti Papelitos",
    "burbujas": "Burbujas",
    "bocinas": "Bocinas",
    "bocinas-bodas": "Bocinas para Bodas",
    "bocinas-xv": "Bocinas para XV A\xF1os",
    "bocinas-fiestas": "Bocinas para Fiestas",
    "bocinas-conferencias": "Bocinas para Conferencias",
    "bocinas-djs": "DJ y Bocinas",
    "dj": "DJ",
    "pantalla-inflable": "Pantalla Inflable",
    "iluminacion-arquitectonica": "Iluminaci\xF3n Arquitect\xF3nica",
    "luz-negra": "Luz Negra",
    "seguidor": "Seguidor",
    "podiums": "Podiums",
    "bodas": "Bodas",
    "xv-anos": "XV A\xF1os",
    "co2": "CO2",
    "sparklers": "Sparklers",
    "robot-led": "Robot LED",
    "microfonos": "Micr\xF3fonos",
    "pantallas-led": "Pantallas LED",
    "plantas-de-luz": "Plantas de Luz",
    "iluminacion": "Iluminaci\xF3n",
    "sonido": "Sonido",
    "efectos-especiales": "Efectos Especiales",
    "paquete-50-metros": "Paquete 50 Metros",
    "paquete-100-metros": "Paquete 100 Metros",
    "paquete-200-metros": "Paquete 200 Metros",
    "paquete-500-metros": "Paquete 500 Metros",
    "paquete-uv-basico": "Paquete UV B\xE1sico",
    "paquete-neon-premium": "Paquete Ne\xF3n Premium",
    "paquete-glow-party": "Paquete Glow Party",
    "paquete-produccion-neon": "Paquete Producci\xF3n Ne\xF3n"
  };
  let breadcrumbSchema = null;
  if (pathSegments.length > 0) {
    const items = [
      { "@type": "ListItem", "position": 1, "name": "Inicio", "item": siteUrl + "/" }
    ];
    let currentPath = "";
    pathSegments.forEach((seg, i) => {
      currentPath += "/" + seg;
      const isLast = i === pathSegments.length - 1;
      const name = slugNames[seg] || seg.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
      const entry = {
        "@type": "ListItem",
        "position": i + 2,
        "name": name
      };
      if (!isLast) {
        entry["item"] = siteUrl + currentPath + "/";
      }
      items.push(entry);
    });
    breadcrumbSchema = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": items
    });
  }
  return renderTemplate(_c || (_c = __template$1(['<html lang="es-MX" data-astro-cid-37fxchfa> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><!-- Critical CSS Inline (LCP optimization) --><title>', '</title><meta name="description"', '><meta name="author" content="REDEIL"><meta name="robots" content="index, follow"><link rel="canonical"', '><meta property="og:type" content="website"><meta property="og:url"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><meta property="og:locale" content="es_MX"><meta property="og:site_name" content="REDEIL - Renta de Iluminaci\xF3n"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"', '><meta name="twitter:description"', '><meta name="twitter:image"', '><link rel="icon" href="/favicon.ico" sizes="any"><link rel="icon" href="/icon.svg" type="image/svg+xml"><link rel="apple-touch-icon" href="/icon.png"><meta name="theme-color" content="#1a1a2e"><!-- Preconnect al CDN de im\xE1genes (ExactDN) \u2014 ahorra DNS + TLS antes del primer <img> --><link rel="preconnect" href="https://ek8wn5x6rqg.exactdn.com" crossorigin><link rel="dns-prefetch" href="https://ek8wn5x6rqg.exactdn.com"><!-- Critical Font Preloads for LCP --><link rel="preload" href="/fonts/montserrat-700.woff2" as="font" type="font/woff2" crossorigin><link rel="preload" href="/fonts/montserrat-400.woff2" as="font" type="font/woff2" crossorigin><link rel="preload" href="/fonts/open-sans-400.woff2" as="font" type="font/woff2" crossorigin><link rel="stylesheet" href="/css/fonts.css"><link rel="stylesheet" href="/css/style.css">', "", "<!-- Measure TopBar height dynamically for hero padding --><script>\n    (function(){\n      function setTopbarHeight(){\n        var tb = document.querySelector('.topbar');\n        var h = tb ? tb.offsetHeight : 36;\n        document.documentElement.style.setProperty('--topbar-height', h + 'px');\n      }\n      if (document.readyState === 'loading') {\n        document.addEventListener('DOMContentLoaded', setTopbarHeight);\n      } else {\n        setTopbarHeight();\n      }\n      window.addEventListener('resize', setTopbarHeight, {passive:true});\n    })();\n  <\/script><!-- ExactDN CDN \u2014 la reescritura /img/ \u2192 CDN se hace en post-build\n       (scripts/rewrite-cdn.mjs). Ya no hay rewrite en runtime: evitaba\n       el doble request (origin + CDN) que destru\xEDa LCP. --><!-- TruConversion --><script>\n    var _tip = _tip || [];\n    (function(d,s,id){\n      var js, tjs = d.getElementsByTagName(s)[0];\n      if(d.getElementById(id)) { return; }\n      js = d.createElement(s); js.id = id;\n      js.async = true;\n      js.src = d.location.protocol + '//app.truconversion.com/ti-js/62671/e4e92.js';\n      tjs.parentNode.insertBefore(js, tjs);\n    }(document, 'script', 'ti-js'));\n  <\/script>", '</head> <body data-astro-cid-37fxchfa> <a href="#main-content" class="skip-link" data-astro-cid-37fxchfa>Saltar al contenido principal</a> ', ' <div class="hdr-stack" data-astro-cid-37fxchfa> ', " ", ' </div> <main id="main-content" data-astro-cid-37fxchfa> ', " </main> ", " <!-- WhatzAI Chat Widget --> <!-- (comentado \u2014 activo abajo) --> <!-- TruConversion Microsurvey \u2014 Traducci\xF3n al espa\xF1ol --> ", ` <!-- DMChamp Chat Widget --> <script src="https://api.dmchamp.com/v1/chat-widget/T1ascJwdozIT8qo0YtQh"><\/script> <!-- Global helper: abre el chat DMChamp desde cualquier parte del sitio --> <script>
  window.openDmchampChat = function() {
    var bubble = document.querySelector('.wai-chat-bubble');
    if (bubble) { bubble.click(); return; }
    var container = document.querySelector('.wai-widget-container');
    if (container) {
      var btn = container.querySelector('button') || container.firstElementChild;
      if (btn) { btn.click(); return; }
    }
  };
  // Delegaci\xF3n global: cualquier elemento con data-open-chat abre el widget
  document.addEventListener('click', function(e) {
    var el = e.target.closest('[data-open-chat]');
    if (el) { e.preventDefault(); window.openDmchampChat(); }
  });
  <\/script> <!-- DMChamp i18n \u2014 traducir textos del widget al espa\xF1ol via MutationObserver --> <script>
  (function() {
    var translations = {
      "Hi there! \u{1F44B} How can we help you today?": "\xA1Hola! \u{1F44B} \xBFEn qu\xE9 podemos ayudarte?",
      "Let's chat": "Chatear ahora",
      "Maybe later": "Quiz\xE1s despu\xE9s",
      "I need more info": "Necesito m\xE1s informaci\xF3n",
      "Online": "En l\xEDnea",
      "Sound": "Sonido",
      "Notifications": "Notificaciones",
      "Clear conversation": "Limpiar conversaci\xF3n",
      "Type a message...": "Escribe un mensaje...",
      "Send a message...": "Escribe un mensaje...",
      "Type your message...": "Escribe un mensaje...",
      "Send": "Enviar",
      "Close": "Cerrar",
      "Powered by": "Desarrollado por"
    };

    function translateAll() {
      // Buscar en TODO el body \u2014 no depender de selectores espec\xEDficos del widget
      var allElements = document.body.querySelectorAll('*');
      for (var i = 0; i < allElements.length; i++) {
        var el = allElements[i];
        // Traducir texto visible (solo nodos hoja)
        if (el.childNodes.length === 1 && el.childNodes[0].nodeType === 3) {
          var trimmed = el.textContent.trim();
          if (translations[trimmed]) {
            el.textContent = translations[trimmed];
          }
        }
        // Traducir placeholders
        if (el.placeholder && translations[el.placeholder]) {
          el.placeholder = translations[el.placeholder];
        }
        // Traducir aria-label
        if (el.getAttribute && el.getAttribute('aria-label')) {
          var ariaLabel = el.getAttribute('aria-label').trim();
          if (translations[ariaLabel]) {
            el.setAttribute('aria-label', translations[ariaLabel]);
          }
        }
        // Traducir title
        if (el.title && translations[el.title.trim()]) {
          el.title = translations[el.title.trim()];
        }
      }
    }

    // Observer que traduce cada vez que el DOM cambia
    var observer = new MutationObserver(function() {
      translateAll();
    });

    function init() {
      observer.observe(document.body, { childList: true, subtree: true, characterData: true });
      // Traducir peri\xF3dicamente los primeros 10 segundos (por si el widget carga tarde)
      var count = 0;
      var interval = setInterval(function() {
        translateAll();
        count++;
        if (count >= 20) clearInterval(interval);
      }, 500);
    }

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', init);
    } else {
      init();
    }
  })();
  <\/script> </body> </html>`])), title, addAttribute(description, "content"), addAttribute(canonical, "href"), addAttribute(canonical, "content"), addAttribute(finalOgTitle, "content"), addAttribute(finalOgDescription, "content"), addAttribute(ogImage, "content"), addAttribute(finalOgTitle, "content"), addAttribute(finalOgDescription, "content"), addAttribute(ogImage, "content"), schemaMarkup && renderTemplate(_a$1 || (_a$1 = __template$1(['<script type="application/ld+json">', "<\/script>"])), unescapeHTML(schemaMarkup)), breadcrumbSchema && renderTemplate(_b || (_b = __template$1(['<script type="application/ld+json">', "<\/script>"])), unescapeHTML(breadcrumbSchema)), renderHead(), renderComponent($$result, "TopBar", $$TopBar, { "data-astro-cid-37fxchfa": true }), renderComponent($$result, "Header", $$Header, { "data-astro-cid-37fxchfa": true }), renderSlot($$result, $$slots["breadcrumbs"]), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-37fxchfa": true }), renderScript($$result, "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/layouts/BaseLayout.astro?astro&type=script&index=0&lang.ts"));
}, "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/layouts/BaseLayout.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://rentadeiluminacion.com");
const $$Breadcrumbs = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Breadcrumbs;
  const { items } = Astro2.props;
  const schemaItems = items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.label,
    ...item.href ? { "item": `https://rentadeiluminacion.com${item.href}` } : {}
  }));
  const breadcrumbSchema = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": schemaItems
  });
  return renderTemplate(_a || (_a = __template(["", '<nav class="crumbs" aria-label="Breadcrumb" data-astro-cid-ilhxcym7> <div class="crumbs__inner" data-astro-cid-ilhxcym7> <ol class="crumbs__list" data-astro-cid-ilhxcym7> ', ' </ol> </div> </nav> <script type="application/ld+json">', "<\/script> "])), maybeRenderHead(), items.map((item, index) => renderTemplate`<li class="crumbs__item" data-astro-cid-ilhxcym7> ${item.href && index < items.length - 1 ? renderTemplate`<a${addAttribute(item.href, "href")} class="crumbs__link" data-astro-cid-ilhxcym7>${item.label}</a>` : renderTemplate`<span class="crumbs__current" aria-current="page" data-astro-cid-ilhxcym7>${item.label}</span>`} </li>`), unescapeHTML(breadcrumbSchema));
}, "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/components/Breadcrumbs.astro", void 0);

export { $$BaseLayout as $, $$Breadcrumbs as a };
