import { e as createAstro, c as createComponent, r as renderTemplate, d as addAttribute, m as maybeRenderHead } from './astro/server_D8pMnQBn.mjs';
import 'piccolore';
import 'clsx';
/* empty css                          */

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://rentadeiluminacion.com");
const $$FaqSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FaqSection;
  const {
    items,
    phone = "55 3068 2988",
    whatsapp = "5530682988",
    waMessage = "Hola REDEIL, tengo una duda sobre el servicio de iluminaci\xF3n.",
    email = "hola@rentadeiluminacion.com",
    schedule = "Lun\u2013Dom 8:00\u201318:00"
  } = Astro2.props;
  return renderTemplate(_a || (_a = __template(["", '<div class="faq-layout container" data-astro-cid-4j5dlmku> <!-- \u2550\u2550\u2550 COLUMNA 1: FAQ \u2550\u2550\u2550 --> <div class="faq-layout__faqs" data-astro-cid-4j5dlmku> ', ' </div> <!-- \u2550\u2550\u2550 COLUMNA 2: Contacto + Formulario WA \u2550\u2550\u2550 --> <div class="faq-layout__contact" data-astro-cid-4j5dlmku> <div class="faq-contact" data-astro-cid-4j5dlmku> <h3 class="faq-contact__title" data-astro-cid-4j5dlmku>\xBFNo encuentras tu respuesta?</h3> <p class="faq-contact__desc" data-astro-cid-4j5dlmku>Escr\xEDbenos y te respondemos en minutos. Tambi\xE9n puedes llamarnos directamente.</p> <div class="faq-contact__info" data-astro-cid-4j5dlmku> <a', ' class="faq-contact__item" data-astro-cid-4j5dlmku> <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-4j5dlmku><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" data-astro-cid-4j5dlmku></path></svg> <span data-astro-cid-4j5dlmku>', '</span> </a> <div class="faq-contact__item" data-astro-cid-4j5dlmku> <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-4j5dlmku><circle cx="12" cy="12" r="10" data-astro-cid-4j5dlmku></circle><polyline points="12 6 12 12 16 14" data-astro-cid-4j5dlmku></polyline></svg> <span data-astro-cid-4j5dlmku>', `</span> </div> </div> <!-- Chat en vivo con Bot IA (DMChamp) --> <div class="faq-chat-cta" data-astro-cid-4j5dlmku> <div class="faq-chat-cta__avatar" data-astro-cid-4j5dlmku> <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-4j5dlmku> <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" data-astro-cid-4j5dlmku></path> </svg> </div> <h4 class="faq-chat-cta__name" data-astro-cid-4j5dlmku>Sonia</h4> <p class="faq-chat-cta__status" data-astro-cid-4j5dlmku> <span class="faq-chat-cta__dot" data-astro-cid-4j5dlmku></span> En l\xEDnea ahora
</p> <p class="faq-chat-cta__desc" data-astro-cid-4j5dlmku>
Soy la asistente virtual de REDEIL. Preg\xFAntame sobre iluminaci\xF3n, sonido o efectos para tu evento y te ayudo a cotizar.
</p> <button class="faq-chat-btn" id="openDmchampChat" type="button" data-astro-cid-4j5dlmku> <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-4j5dlmku> <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" data-astro-cid-4j5dlmku></path> </svg>
Chatear con Sonia
</button> <p class="faq-chat-cta__fallback" data-astro-cid-4j5dlmku>
O <button type="button" data-open-chat style="background:none;border:none;padding:0;color:inherit;text-decoration:underline;cursor:pointer;font:inherit;" data-astro-cid-4j5dlmku>inicia el chat</button> con nuestro equipo
</p> </div> </div> </div> </div> <script>
  document.getElementById('openDmchampChat').addEventListener('click', function() {
    var opened = false;

    // 1. Buscar el bot\xF3n burbuja del widget DMChamp (clase wai-chat-bubble)
    var bubble = document.querySelector('.wai-chat-bubble');
    if (bubble) {
      bubble.click();
      opened = true;
    }

    // 2. Buscar el contenedor del widget DMChamp
    if (!opened) {
      var container = document.querySelector('.wai-widget-container');
      if (container) {
        var btn = container.querySelector('svg') || container.firstElementChild;
        if (btn) { btn.click(); opened = true; }
      }
    }

    // 3. Fallback: WhatsApp directo
    if (!opened) {
      window.open('https://wa.me/5530682988?text=Hola%20REDEIL%2C%20tengo%20una%20pregunta%20sobre%20iluminaci%C3%B3n%20para%20mi%20evento.', '_blank');
    }
  });
<\/script> `])), maybeRenderHead(), items.map((item) => renderTemplate`<details class="faq-item" data-astro-cid-4j5dlmku> <summary class="faq-item__q" data-astro-cid-4j5dlmku>${item.question}</summary> <div class="faq-item__a" data-astro-cid-4j5dlmku> <p data-astro-cid-4j5dlmku>${item.answer}</p> </div> </details>`), addAttribute(`tel:+52${whatsapp}`, "href"), phone, schedule);
}, "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/components/FaqSection.astro", void 0);

export { $$FaqSection as $ };
