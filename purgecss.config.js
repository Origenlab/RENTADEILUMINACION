module.exports = {
  // Archivos HTML a analizar
  content: [
    './*.html',
    './**/*.html',
    './js/*.js'
  ],

  // Archivos CSS a purgar
  css: ['./css/style.css'],

  // Archivo de salida
  output: './css/',

  // Clases que siempre mantener (dinámicas, JS, etc.)
  safelist: {
    standard: [
      // Clases añadidas por JavaScript
      'active',
      'scrolled',
      'visible',
      'hidden',
      'open',
      'show',
      'fade-out',
      'loading',

      // Form messages
      'form-message',
      'form-message-success',
      'form-message-error',

      // Back to top
      'back-to-top',

      // FAQ
      /^faq-/,

      // Responsive
      /^nav-/,
      /^submenu/,

      // Clases de páginas principales (detectadas como faltantes)
      'btn-outline-primary',
      'contact-info',
      'faq-grid',
      'feature-list',
      'hero-home',
      'icon-whatsapp',
      'info-section',
      'otra-zona-name',
      'quote-contact-info',
      'quote-cta-buttons',
      'quote-cta-container',
      'quote-cta-text',
      'stats-section',
      'venue-card-content',
    ],
    deep: [
      // Mantener todas las variantes de estas clases
      /active$/,
      /visible$/,
      /scrolled$/,
    ],
    greedy: [
      // Patrones que pueden tener variantes
      /^has-/,
      /^is-/,
    ]
  },

  // Selectores dinámicos a preservar
  dynamicAttributes: ['data-theme', 'aria-expanded', 'aria-hidden'],

  // Mantener keyframes y font-face
  fontFace: true,
  keyframes: true,
  variables: true,
}
