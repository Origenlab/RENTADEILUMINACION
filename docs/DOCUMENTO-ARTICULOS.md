# ESPECIFICACIONES PARA ARTÍCULOS DEL BLOG — REDEIL

**Versión:** 2.1 | **Última actualización:** Enero 2026

**Archivos de referencia:**
- `blog/guirnaldas-focos-edison-bodas-eventos-cdmx.html` (Guirnaldas)
- `blog/renta-maquina-humo-eventos-cdmx.html` (Equipo para Eventos)

---

## MÉTRICAS DEL ARTÍCULO

| Parámetro | Valor |
|-----------|-------|
| Extensión | 2,500 – 4,000 palabras |
| Tiempo lectura | 10-15 min |
| Imágenes | 4-8 |
| CTAs | 3 mínimo |
| FAQs | 5 mínimo |
| Enlaces internos | 8-12 |

---

## 1. ARQUITECTURA HTML

```
<!DOCTYPE html>
<html lang="es-MX">
├── <head>
│   ├── Meta tags (básicos, SEO, OG, Twitter)
│   ├── Schema.org (Article, FAQPage, BreadcrumbList)
│   ├── CSS (crítico inline + async)
│   └── Fonts preload
└── <body>
    ├── Skip link
    ├── Top bar + Header + Breadcrumbs
    ├── Hero section
    ├── <main>
    │   ├── <article> (TOC + contenido + FAQ + CTA)
    │   └── <aside> (sidebar)
    ├── Footer
    └── WhatsApp button + Scripts
```

### Nomenclatura de archivos

**Formato:** `[keyword-principal]-[secundaria]-[ubicacion].html`

**Reglas:**
- Minúsculas, sin acentos ni caracteres especiales
- Palabras separadas por guiones
- Incluir ubicación (cdmx/edomex)
- Máximo 60 caracteres

**Ejemplos:**
- `guirnaldas-focos-edison-bodas-eventos-cdmx.html`
- `luces-neon-xv-anos-cdmx-renta.html`
- `renta-maquina-humo-eventos-cdmx.html`

---

## 2. METADATOS SEO

### Title tag
```html
<title>[Keyword Principal] para [Tipo Evento] en CDMX | REDEIL</title>
```
**50-60 caracteres** | Keyword al inicio | Marca al final

### Meta description
```html
<meta name="description" content="[Keyword]. [Beneficio]. [Credencial]. [CTA].">
```
**150-160 caracteres** | Incluir diferenciador (+15,000 eventos)

### Meta robots
```html
<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1">
<meta name="googlebot" content="index, follow">
<link rel="canonical" href="https://rentadeiluminacion.com/blog/[archivo].html">
```

### Open Graph
```html
<meta property="og:type" content="article">
<meta property="og:title" content="[Título ≤60 chars]">
<meta property="og:description" content="[Descripción ≤160 chars]">
<meta property="og:image" content="https://rentadeiluminacion.com/img/[cat]/[img]-1200x630.avif">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:url" content="[URL canónica]">
<meta property="og:site_name" content="REDEIL - Renta de Iluminacion">
<meta property="og:locale" content="es_MX">
<meta property="article:section" content="[Categoría]">
```

### Twitter Cards
```html
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="[Título]">
<meta name="twitter:description" content="[Descripción]">
<meta name="twitter:image" content="[URL imagen]">
```

---

## 3. SCHEMA.ORG

### Article
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "[Título ≤110 chars]",
  "description": "[Descripción]",
  "image": {
    "@type": "ImageObject",
    "url": "[URL]",
    "width": 1200,
    "height": 630
  },
  "author": {
    "@type": "Organization",
    "name": "REDEIL",
    "url": "https://rentadeiluminacion.com"
  },
  "publisher": {
    "@type": "Organization",
    "name": "REDEIL",
    "logo": {
      "@type": "ImageObject",
      "url": "https://rentadeiluminacion.com/img/logo-redeil.avif"
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "[URL]"
  },
  "keywords": "[keywords separadas por coma]",
  "articleSection": "[Categoría]",
  "wordCount": [número],
  "timeRequired": "PT[X]M",
  "inLanguage": "es-MX"
}
```

### FAQPage
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "[Pregunta sin acentos]",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "[Respuesta sin acentos]"
      }
    }
  ]
}
```

### BreadcrumbList
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://rentadeiluminacion.com" },
    { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://rentadeiluminacion.com/blog.html" },
    { "@type": "ListItem", "position": 3, "name": "[Categoría]", "item": "[URL categoría]" },
    { "@type": "ListItem", "position": 4, "name": "[Título corto]" }
  ]
}
```

---

## 4. HERO SECTION

```html
<section class="blog-hero-section">
  <div class="container">
    <div class="blog-hero-grid">
      <div class="blog-hero-image">
        <img src="../img/[cat]/[img].avif"
             alt="[Descripción detallada con keyword]"
             width="600" height="400"
             loading="eager" decoding="async">
      </div>
      <div class="blog-hero-content">
        <span class="category-badge">[CATEGORÍA EN MAYÚSCULAS]</span>
        <h1 class="hero-title">[Título 50-70 chars con keyword principal]</h1>
        <p class="hero-hook">[Gancho emocional: 1-2 oraciones que capturan atención]</p>
        <p class="hero-value">[Propuesta de valor: qué aprenderá el lector]</p>
        <div class="hero-meta">
          <span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
            </svg>
            [X] min lectura
          </span>
          <span>|</span>
          <span>[Categoría]</span>
        </div>
      </div>
    </div>
  </div>
</section>
```

**Cálculo tiempo lectura:** palabras totales ÷ 200 = minutos

---

## 5. ESTRUCTURA DE CONTENIDO

### Jerarquía de encabezados

```
H1 → Título único (solo en hero)
 └── H2 → Secciones principales (5-7 por artículo)
      └── H3 → Subsecciones (2-4 por H2)
           └── H4 → Solo dentro de módulos (opcional)
```

**Regla de keywords:** H1 + mínimo 2 H2 + primer párrafo

### Secciones obligatorias (en orden)

| # | Sección | ID | Contenido |
|---|---------|-----|-----------|
| 1 | Introducción | `#introduccion` | Qué es, por qué importa, tendencia actual (3 párrafos) |
| 2 | Tipos/Variedades | `#tipos` | 3-4 opciones con H3 cada una |
| 3 | Aplicaciones | `#aplicaciones` | Bodas, XV años, corporativos, fiestas (H3 cada uno) |
| 4 | Beneficios renta | `#beneficios-renta` | Ventajas vs comprar + Benefits Box |
| 5 | Cómo elegir | `#como-elegir` | 4 factores numerados con H3 |
| 6 | Proceso REDEIL | `#instalacion` | Visita, instalación, soporte, desmontaje |
| 7 | FAQ | `#preguntas-frecuentes` | 5+ preguntas en acordeón |

### TOC Inline (después del article tag)

```html
<nav class="blog-article-toc-inline" aria-label="Tabla de contenidos">
  <h4>En Este Articulo</h4>
  <ul>
    <li><a href="#introduccion">Introducción a [Tema]</a></li>
    <li><a href="#tipos">Tipos de [Producto] Disponibles</a></li>
    <li><a href="#aplicaciones">Aplicaciones por Tipo de Evento</a></li>
    <li><a href="#beneficios-renta">Beneficios de Rentar vs Comprar</a></li>
    <li><a href="#como-elegir">Cómo Elegir [Producto] Perfecto</a></li>
    <li><a href="#instalacion">Instalación Profesional REDEIL</a></li>
    <li><a href="#preguntas-frecuentes">Preguntas Frecuentes</a></li>
  </ul>
</nav>
```

### Lead paragraph (después del TOC)

```html
<p class="lead">[50-80 palabras: Establecer autoridad REDEIL + presentar problema/necesidad + prometer solución. Incluir dato de credibilidad: "Con más de 30 años de experiencia..." o "+15,000 eventos iluminados..."]</p>
```

### Especificaciones de párrafos

| Aspecto | Especificación |
|---------|----------------|
| Oraciones por párrafo | 3-5 |
| Palabras por párrafo | Máximo 100 |
| Negritas por párrafo | 2-3 (términos clave) |
| Ritmo | Alternar párrafos cortos y largos |

---

## 6. MÓDULOS VISUALES

### Stat Module (estadísticas destacadas)
```html
<div class="interest-module stat-module">
  <div class="stat-number">+15,000</div>
  <div class="stat-content">
    <h4>[Título de la estadística]</h4>
    <p>[Descripción del logro o dato]</p>
  </div>
</div>
```
**Usar para:** Números impactantes, logros, experiencia

### Tip Module (consejos de experto)
```html
<div class="interest-module tip-module">
  <div class="tip-icon">💡</div>
  <div class="tip-content">
    <h4>Consejo de Experto</h4>
    <p>[Consejo práctico y útil para el lector]</p>
  </div>
</div>
```
**Usar para:** Recomendaciones técnicas, tips prácticos

### Alert Module (información importante)
```html
<div class="interest-module alert-module">
  <div class="alert-icon">⚠️</div>
  <div class="alert-content">
    <h4>Importante: [Título]</h4>
    <p>[Información crítica: reservas, temporadas, requisitos]</p>
  </div>
</div>
```
**Usar para:** Temporadas altas, requisitos de reserva, advertencias

### Quote Module (testimonios)
```html
<div class="interest-module quote-module">
  <blockquote>"[Testimonio real del cliente]"</blockquote>
  <cite>— [Nombre], [Tipo de evento], [Ubicación]</cite>
</div>
```
**Usar para:** Testimonios de clientes satisfechos

### Benefits Box (lista de beneficios)
```html
<div class="benefits-box">
  <h3>Por Qué Elegir la Renta Profesional con REDEIL</h3>
  <ul class="benefits-list">
    <li><strong>[Beneficio 1]:</strong> [Descripción detallada]</li>
    <li><strong>[Beneficio 2]:</strong> [Descripción detallada]</li>
    <li><strong>[Beneficio 3]:</strong> [Descripción detallada]</li>
    <li><strong>[Beneficio 4]:</strong> [Descripción detallada]</li>
    <li><strong>[Beneficio 5]:</strong> [Descripción detallada]</li>
    <li><strong>[Beneficio 6]:</strong> [Descripción detallada]</li>
  </ul>
</div>
```
**Usar después de:** Sección de beneficios (#beneficios-renta)

### Process Section (pasos del proceso)
```html
<div class="process-section">
  <h3>Proceso de Renta con REDEIL</h3>
  <div class="process-steps">
    <div class="process-step">
      <div class="step-number">1</div>
      <div class="step-content">
        <h4>Cotización</h4>
        <p>Contáctanos por WhatsApp o teléfono. Cuéntanos sobre tu evento y recibe una cotización personalizada.</p>
      </div>
    </div>
    <div class="process-step">
      <div class="step-number">2</div>
      <div class="step-content">
        <h4>Visita al Venue</h4>
        <p>Programamos una visita para conocer el espacio, tomar medidas y planificar la instalación.</p>
      </div>
    </div>
    <div class="process-step">
      <div class="step-number">3</div>
      <div class="step-content">
        <h4>Instalación</h4>
        <p>Llegamos horas antes de tu evento con todo el equipo. Montamos, probamos y dejamos todo listo.</p>
      </div>
    </div>
    <div class="process-step">
      <div class="step-number">4</div>
      <div class="step-content">
        <h4>Desmontaje</h4>
        <p>Al finalizar tu evento, regresamos para recoger todo el equipo. Sin preocupaciones para ti.</p>
      </div>
    </div>
  </div>
</div>
```

### Image Gallery (galería de imágenes)
```html
<div class="blog-image-gallery">
  <h3>Galería de Instalaciones Profesionales</h3>
  <div class="gallery-grid">
    <picture>
      <source srcset="../img/[cat]/[img]-400w.avif 1x, ../img/[cat]/[img]-800w.avif 2x" type="image/avif">
      <source srcset="../img/[cat]/[img]-400w.webp 1x, ../img/[cat]/[img]-800w.webp 2x" type="image/webp">
      <img src="../img/[cat]/[img]-400w.avif"
           alt="[Descripción detallada con keyword]"
           loading="lazy" width="400" height="300"
           srcset="../img/[cat]/[img]-400w.avif 1x, ../img/[cat]/[img]-800w.avif 2x"
           sizes="(max-width: 992px) 100vw, (max-width: 1200px) 33vw, 25vw"
           decoding="async">
    </picture>
    <!-- Repetir para 4 imágenes total -->
  </div>
</div>
```

### Comparison Table (tabla comparativa)
```html
<div class="comparison-section">
  <h3>Comparativa de [Opciones]</h3>
  <div class="table-wrapper">
    <table class="comparison-table">
      <thead>
        <tr>
          <th>Característica</th>
          <th>[Opción 1]</th>
          <th>[Opción 2]</th>
          <th>[Opción 3]</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>[Característica 1]</td>
          <td>[Valor]</td>
          <td>[Valor]</td>
          <td>[Valor]</td>
        </tr>
        <!-- Más filas -->
      </tbody>
    </table>
  </div>
</div>
```

### CTA Inline (mitad del artículo)
```html
<div class="cta-inline">
  <h3>Habla con un Experto en Iluminación</h3>
  <p>Resuelve tus dudas directamente con nuestro equipo de asesores especializados.</p>
  <a href="https://wa.me/525530682988?text=Hola%2C%20quiero%20cotizar%20[producto]%20para%20mi%20evento" class="btn">Contactar Ahora</a>
</div>
```
**Ubicación:** Después de la sección de beneficios

### FAQ Section (preguntas frecuentes)
```html
<section class="faq-section" id="preguntas-frecuentes">
  <h2>Preguntas Frecuentes sobre [Tema]</h2>
  <p>Respondemos las dudas más comunes que recibimos sobre [tema].</p>

  <div class="faq-accordion" role="list">
    <div class="faq-item">
      <button class="faq-question" aria-expanded="false">
        <span>[Pregunta 1]</span>
        <svg class="faq-chevron" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>
      <div class="faq-answer">
        <p>[Respuesta completa y útil]</p>
      </div>
    </div>
    <!-- Mínimo 5 preguntas -->
  </div>
</section>
```

### Tags Section
```html
<div class="blog-article-tags">
  <h3>Temas Relacionados</h3>
  <div class="tags-container">
    <a href="../renta-de-iluminacion/[servicio].html" class="tag">[Tag 1]</a>
    <a href="#" class="tag">[Tag 2]</a>
    <a href="#" class="tag">[Tag 3]</a>
    <a href="#" class="tag">[Tag 4]</a>
    <a href="#" class="tag">[Tag 5]</a>
  </div>
  <div class="related-topics">
    <h4>También te puede interesar:</h4>
    <ul>
      <li>[Tema relacionado 1]</li>
      <li>[Tema relacionado 2]</li>
      <li>[Tema relacionado 3]</li>
      <li>[Tema relacionado 4]</li>
    </ul>
  </div>
</div>
```

### CTA Final (al final del artículo)
```html
<div class="article-cta-final">
  <h3>Transforma tu Evento con [Producto/Servicio]</h3>
  <p>Más de 15,000 eventos exitosos respaldan nuestra experiencia. Cotiza sin compromiso y descubre cómo podemos hacer brillar tu celebración.</p>
  <a href="https://wa.me/525530682988?text=Hola%2C%20quiero%20cotizar%20[producto]%20para%20mi%20evento">Cotizar por WhatsApp</a>
</div>
```

---

## 7. SIDEBAR

```html
<aside class="blog-article-sidebar">
  <!-- TOC Navigation -->
  <div class="blog-toc">
    <h3 class="blog-toc-title">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <line x1="8" y1="6" x2="21" y2="6"></line>
        <line x1="8" y1="12" x2="21" y2="12"></line>
        <line x1="8" y1="18" x2="21" y2="18"></line>
        <line x1="3" y1="6" x2="3.01" y2="6"></line>
        <line x1="3" y1="12" x2="3.01" y2="12"></line>
        <line x1="3" y1="18" x2="3.01" y2="18"></line>
      </svg>
      Navegación
    </h3>
    <ul class="blog-toc-list">
      <li><a href="#introduccion">Introducción</a></li>
      <li><a href="#tipos">Tipos</a></li>
      <li><a href="#aplicaciones">Aplicaciones</a></li>
      <li><a href="#beneficios-renta">Beneficios</a></li>
      <li><a href="#como-elegir">Cómo Elegir</a></li>
      <li><a href="#instalacion">Instalación</a></li>
      <li><a href="#preguntas-frecuentes">FAQ</a></li>
    </ul>
  </div>

  <!-- Servicios Relacionados -->
  <div class="sidebar-services">
    <h3 class="sidebar-section-title">Servicios Relacionados</h3>
    <ul class="sidebar-services-list">
      <li><a href="../renta-de-iluminacion/[servicio-1].html">[Servicio 1]</a></li>
      <li><a href="../renta-de-iluminacion/[servicio-2].html">[Servicio 2]</a></li>
      <li><a href="../renta-de-iluminacion/[servicio-3].html">[Servicio 3]</a></li>
      <li><a href="../renta-de-iluminacion/[servicio-4].html">[Servicio 4]</a></li>
      <li><a href="../renta-de-iluminacion/[servicio-5].html">[Servicio 5]</a></li>
    </ul>
    <a href="../servicios.html" class="sidebar-link-all">Ver todos los servicios →</a>
  </div>

  <!-- Contacto -->
  <div class="sidebar-contact">
    <h3 class="sidebar-section-title">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
      Contáctanos
    </h3>
    <a href="https://wa.me/525530682988?text=Hola%2C%20me%20interesa%20cotizar%20para%20mi%20evento" class="contact-whatsapp-btn">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><!-- WhatsApp icon --></svg>
      WHATSAPP
    </a>
    <div class="contact-info-compact">
      <a href="tel:+525530682988" class="contact-info-item">
        <svg><!-- Phone icon --></svg>
        55 3068 2988
      </a>
      <a href="mailto:hola@rentadeiluminacion.com" class="contact-info-item">
        <svg><!-- Email icon --></svg>
        hola@rentadeiluminacion.com
      </a>
      <div class="contact-info-item">
        <svg><!-- Location icon --></svg>
        CDMX y Edo. de México
      </div>
      <div class="contact-info-item">
        <svg><!-- Clock icon --></svg>
        Lun - Dom: 8:00 - 18:00
      </div>
    </div>
  </div>

  <!-- CTA Principal -->
  <div class="blog-cta-box">
    <h3>Cotiza tu Evento</h3>
    <p>Recibe una propuesta personalizada sin compromiso. Respondemos en menos de 2 horas.</p>
    <a href="https://wa.me/525530682988?text=Hola%2C%20quiero%20cotizar%20para%20mi%20evento" class="btn">
      <svg><!-- WhatsApp icon --></svg>
      Cotizar por WhatsApp
    </a>
  </div>

  <!-- Badge de Experiencia -->
  <div class="sidebar-experience">
    <div class="experience-number">+30</div>
    <div class="experience-text">
      <strong>Años de Experiencia</strong>
      <small>Iluminando eventos en México</small>
    </div>
  </div>
</aside>
```

---

## 8. FOOTER

El footer es consistente en todo el sitio. Usar el footer estándar del archivo de referencia.

**Estructura:**
1. Sección principal (4 columnas): Marca, Iluminación, Sonido/Equipo, Empresa
2. Zonas de cobertura (5 columnas)
3. Sucursales (4 ubicaciones)
4. Copyright y enlaces legales

**Nota rutas:** Para artículos en `/blog/`, usar prefijo `../` en todas las rutas.

---

## 9. SEO TÉCNICO

### Densidad de keywords

| Ubicación | Frecuencia |
|-----------|------------|
| Title tag | 1× |
| Meta description | 1× |
| H1 | 1× |
| H2 | 2-3× (en diferentes H2) |
| Primer párrafo | 1-2× |
| Contenido total | 1-2% |
| Alt de imágenes | En todas |

### Enlaces internos (8-12 mínimo)

| Tipo | Cantidad |
|------|----------|
| Páginas de servicios | 2-3 |
| Otros artículos blog | 2-3 |
| Página contacto | 1-2 |
| Zonas cobertura | 1 |
| Sidebar | 2-3 |

**Anchor text:** Descriptivo, con keywords naturales, variado (evitar "click aquí")

### Optimización de imágenes

**Nomenclatura:** `[keyword]-[descripcion]-[numero]-[tamaño].avif`

| Tipo | Tamaño | Loading | Formato |
|------|--------|---------|---------|
| Hero | Full size | `eager` | .avif |
| Galería | 400w, 800w | `lazy` | .avif |

**Alt text:** Descripción detallada incluyendo keyword principal

**Ejemplo:** `alt="Guirnaldas con focos Edison iluminando boda elegante en jardín de hacienda mexicana"`

---

## 10. ESTILO EDITORIAL

### Tono de voz

| Atributo | Aplicación |
|----------|------------|
| Profesional | Vocabulario técnico cuando sea apropiado |
| Cercano | Tutear: "tu evento", "tu boda", "tu celebración" |
| Experto | Incluir datos, estadísticas, experiencia |
| Confiable | Mencionar años de experiencia y número de eventos |
| Orientado a soluciones | Enfocarse en beneficios, no solo características |

### Vocabulario de marca

| ✓ Usar | ✗ Evitar |
|--------|----------|
| Transformar | Decorar |
| Experiencia | Evento (cuando sea posible) |
| Atmósfera | Ambiente |
| Profesional | — |
| Accesible / Competitivo | Barato |
| Elegante / Sofisticado | Simple |
| Esencial / Clásico | Básico |

### Datos de autoridad (incluir en cada artículo)

- **+30 años de experiencia**
- **+15,000 eventos iluminados**
- **CDMX y Estado de México**
- **Instalación y desmontaje incluidos**
- **Equipo de técnicos profesionales**

### Llamadas a la Acción (CTAs)

**URL base WhatsApp:**
```
https://wa.me/525530682988?text=[mensaje_urlencoded]
```

**Textos recomendados:**
- Cotizar por WhatsApp
- Contactar Ahora
- Habla con un Experto
- Solicita tu Cotización
- Reserva tu Fecha

**Distribución obligatoria:**
1. CTA inline después de sección de beneficios (mitad del artículo)
2. CTA final al terminar el contenido
3. CTA en sidebar (siempre visible)

---

## 11. CHECKLIST DE PUBLICACIÓN

### Pre-escritura
- [ ] Keyword principal definida
- [ ] Keywords secundarias identificadas (3-5)
- [ ] Estructura del artículo planificada
- [ ] Imágenes disponibles (mínimo 4)

### Contenido
- [ ] H1 optimizado (50-70 chars, incluye keyword)
- [ ] Meta title (50-60 chars)
- [ ] Meta description (150-160 chars)
- [ ] Lead paragraph impactante (50-80 palabras)
- [ ] Mínimo 2,500 palabras
- [ ] 5-7 secciones H2
- [ ] Keyword en primer párrafo
- [ ] Keyword en al menos 2 H2
- [ ] Negritas en términos clave
- [ ] Sin errores ortográficos

### SEO técnico
- [ ] Schema.org Article implementado
- [ ] Schema.org FAQPage implementado
- [ ] Schema.org BreadcrumbList implementado
- [ ] Open Graph tags completos
- [ ] Twitter Cards completos
- [ ] Canonical URL correcta
- [ ] Alt text en todas las imágenes
- [ ] 8-12 enlaces internos

### Componentes obligatorios
- [ ] TOC inline con enlaces funcionales
- [ ] Mínimo 1 Stat Module
- [ ] Mínimo 1 Tip Module
- [ ] Benefits Box (después de sección beneficios)
- [ ] Process Section (4 pasos)
- [ ] Galería de imágenes (4 fotos)
- [ ] FAQ Section (5+ preguntas)
- [ ] CTA inline (mitad del artículo)
- [ ] CTA final (al terminar contenido)

### Imágenes
- [ ] Imagen hero con `loading="eager"`
- [ ] Imágenes de galería en .avif
- [ ] Srcset para responsive (400w, 800w)
- [ ] Alt text descriptivo con keywords
- [ ] Picture element con source avif/webp

### Sidebar
- [ ] TOC de navegación
- [ ] Servicios relacionados (4-5)
- [ ] Información de contacto completa
- [ ] CTA de WhatsApp
- [ ] Badge de experiencia (+30 años)

### Verificación final
- [ ] Breadcrumbs correctos
- [ ] Footer consistente
- [ ] Rutas relativas correctas (`../`)
- [ ] Prueba en móvil
- [ ] Prueba de todos los enlaces
- [ ] Velocidad de carga < 3s

---

## 12. CATEGORÍAS DE ARTÍCULOS

| Categoría | Página de servicio | Keywords base |
|-----------|-------------------|---------------|
| Guirnaldas y Series de Luces | `renta-de-guirnaldas.html` | guirnaldas, focos edison, series de luces, techo de luces |
| Luces Neón | `renta-de-luces-neon.html` | luces neon, letreros neon, neon personalizado |
| Iluminación Arquitectónica | `renta-de-iluminacion-arquitectonica.html` | city color, iluminacion fachadas, wash led |
| Efectos Especiales | `equipo-para-eventos.html` | maquina humo, confeti, bolas disco, humo bajo |
| Sonido y DJ | `bocinas.html` | renta bocinas, dj eventos, sonido profesional |

---

## 13. CARD EN BLOG.HTML

Cada artículo nuevo debe tener una card en `blog.html` (o en `blog-page-X.html` según paginación). Las cards se insertan después del marcador `<!-- n8n:INSERT-NEW-CARDS-HERE -->`.

### Estructura de la Card

```html
<!-- [Nombre descriptivo del artículo] -->
<article class="post-card">
  <div class="post-card-image">
    <a href="blog/[nombre-archivo].html">
      <picture>
        <source srcset="img/[categoria]/[imagen]-400w.avif 1x, img/[categoria]/[imagen]-800w.avif 2x" type="image/avif">
        <source srcset="img/[categoria]/[imagen]-400w.webp 1x, img/[categoria]/[imagen]-800w.webp 2x" type="image/webp">
        <img src="img/[categoria]/[imagen]-400w.avif"
             alt="[Descripción con keyword principal]"
             loading="lazy"
             width="400"
             height="300"
             srcset="img/[categoria]/[imagen]-400w.avif 1x, img/[categoria]/[imagen]-800w.avif 2x"
             sizes="(max-width: 992px) 100vw, (max-width: 1200px) 33vw, 25vw"
             decoding="async">
      </picture>
    </a>
  </div>
  <div class="post-card-content">
    <div class="post-meta">
      <span class="post-read-time">[X] min lectura</span>
      <span class="post-category">[Categoría]</span>
    </div>
    <h3><a href="blog/[nombre-archivo].html">[Título del artículo]</a></h3>
    <p>[Descripción breve 15-25 palabras - resumen atractivo del contenido]</p>
    <a href="blog/[nombre-archivo].html" class="post-link">Leer más <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></a>
  </div>
</article>
```

### Ubicación de inserción

**Orden de las cards:** Las cards más recientes se insertan inmediatamente después del marcador:

```html
<!-- Artículo más antiguo/fijo (guirnaldas-focos-edison) -->
<article class="post-card">...</article>

<!-- n8n:INSERT-NEW-CARDS-HERE -->
<!-- AQUÍ se insertan las nuevas cards -->
<article class="post-card">...</article>  <!-- Card nueva 1 -->
<article class="post-card">...</article>  <!-- Card nueva 2 -->
```

### Paginación

| Archivo | Contenido |
|---------|-----------|
| `blog.html` | Cards principales + marcador n8n |
| `blog-page-2.html` | Overflow de cards (si hay más de 12) |
| `blog-page-3.html` | Reservado para expansión futura |
| `blog-page-4.html` | Reservado para expansión futura |
| `blog-page-5.html` | Reservado para expansión futura |

**Nota:** Las páginas 3-5 solo contienen el marcador `<!-- n8n:INSERT-NEW-CARDS-HERE -->` para uso futuro.

### Categorías disponibles

| Categoría (para card) | Carpeta de imágenes |
|-----------------------|---------------------|
| Guirnaldas y Series de Luces | `img/guirnaldas/` |
| Luces Neon y LED | `img/luces-neon/` |
| Equipo para Eventos | `img/humo/`, `img/bola-disco/`, `img/maquina-de-papelitos/`, `img/podiums/`, `img/pantalla-inflable/` |
| Iluminación Arquitectónica | `img/city-color/`, `img/iluminacion-arquitectonica/` |
| Sonido y DJ | `img/bocinas-djs/` |

### Checklist de Card

- [ ] Imagen 400x300 px en formato .avif
- [ ] Versiones 400w y 800w para srcset
- [ ] Alt text descriptivo con keyword
- [ ] Tiempo de lectura calculado (palabras ÷ 200)
- [ ] Categoría correcta
- [ ] Título conciso (máx 70 caracteres)
- [ ] Descripción atractiva (15-25 palabras)
- [ ] URL del artículo correcta
- [ ] Card insertada después del marcador n8n

---

## 14. PLANTILLA BASE

Para crear un nuevo artículo:

1. **Copiar** el archivo de referencia:
   ```
   blog/guirnaldas-focos-edison-bodas-eventos-cdmx.html
   ```

2. **Renombrar** siguiendo nomenclatura:
   ```
   blog/[keyword-principal]-[secundaria]-[ubicacion].html
   ```

3. **Modificar** en orden:
   - Todos los meta tags (title, description, keywords)
   - Schema.org (Article, FAQPage, BreadcrumbList)
   - Breadcrumbs (categoría y título)
   - Hero section (imagen, título, descripción)
   - TOC inline (secciones del artículo)
   - Contenido completo del artículo
   - FAQs (5+ preguntas relevantes)
   - Tags y temas relacionados
   - Enlaces del sidebar (servicios relacionados)
   - Mensajes de WhatsApp (personalizar producto)

4. **Mantener** sin cambios:
   - Estructura HTML base
   - Top bar
   - Header principal
   - Footer
   - WhatsApp floating button
   - Scripts

5. **Crear card en blog.html:**
   - Copiar plantilla de card (sección 13)
   - Insertar después del marcador `<!-- n8n:INSERT-NEW-CARDS-HERE -->`
   - Completar: imagen, alt, tiempo lectura, categoría, título, descripción, URL
   - Verificar que la imagen exista en la carpeta correspondiente

---

## ANEXO: PREGUNTAS FAQ SUGERIDAS POR CATEGORÍA

### Guirnaldas
1. ¿Cuánto cuesta la renta de guirnaldas?
2. ¿La instalación está incluida?
3. ¿Cuántos metros necesito?
4. ¿Pueden instalar en exteriores?
5. ¿Con cuánta anticipación debo reservar?

### Luces Neón
1. ¿Puedo personalizar el letrero?
2. ¿Cuánto tiempo tardan en fabricarlo?
3. ¿Qué colores están disponibles?
4. ¿Son seguros para interiores?
5. ¿Incluyen estructura de soporte?

### Efectos Especiales
1. ¿Es seguro el humo/confeti?
2. ¿Mancha la ropa o el piso?
3. ¿Cuánto dura el efecto?
4. ¿Necesitan permiso del venue?
5. ¿Incluyen operador?

---

## ANEXO B: ARTÍCULOS COMPLETADOS

Lista de artículos que cumplen con todas las especificaciones de este documento y pueden usarse como referencia adicional.

| Archivo | Categoría | Palabras | FAQs | Fecha |
|---------|-----------|----------|------|-------|
| `guirnaldas-focos-edison-bodas-eventos-cdmx.html` | Guirnaldas y Series de Luces | ~3,000 | 5 | Ene 2026 |
| `renta-maquina-humo-eventos-cdmx.html` | Equipo para Eventos | ~2,800 | 5 | Ene 2026 |
| `renta-bocinas-bodas-cdmx-sonido-profesional.html` | Sonido y DJ | ~3,200 | 6 | Ene 2026 |
| `renta-bolas-disco-eventos-cdmx.html` | Equipo para Eventos | ~2,500 | 5 | Ene 2026 |
| `bola-disco-fiestas-retro-70s-80s-cdmx.html` | Equipo para Eventos | ~3,100 | 6 | Ene 2026 |

### Homologación SEO (19 Enero 2026)

Se ejecutó el script `scripts/homologar_articulos.py` que actualizó los **36 artículos** del blog con las siguientes mejoras SEO:

| Mejora | Descripción |
|--------|-------------|
| `http-equiv="X-UA-Compatible"` | Compatibilidad con IE |
| `robots` mejorado | `max-image-preview:large, max-snippet:-1, max-video-preview:-1` |
| `googlebot` | Meta tag específico para Googlebot |
| `og:image:width/height` | Dimensiones 1200x630 |
| `og:site_name` | "REDEIL - Renta de Iluminacion" |
| `article:section` | Categoría del artículo |
| Schema.org Article | `mainEntityOfPage`, `keywords`, `articleSection`, `wordCount`, `timeRequired`, `inLanguage` |
| Schema.org BreadcrumbList | 4 niveles: Inicio > Blog > Categoría > Artículo |

**Archivos actualizados:** 34 (2 ya estaban optimizados)

---

### Artículo: Renta de Máquina de Humo

**Archivo:** `blog/renta-maquina-humo-eventos-cdmx.html`

**Elementos SEO implementados:**
- ✅ Meta tags completos (title, description, robots, canonical)
- ✅ Open Graph completo (type, title, description, image con dimensiones, url, site_name, locale, article:section)
- ✅ Twitter Cards completos
- ✅ Schema.org Article (headline, description, image, author, publisher, mainEntityOfPage, keywords, articleSection, wordCount, timeRequired, inLanguage)
- ✅ Schema.org FAQPage (5 preguntas)
- ✅ Schema.org BreadcrumbList (4 niveles)

**Estructura de contenido:**
- ✅ Hero Section con imagen, badge de categoría, título, hook y meta
- ✅ TOC inline con 6 secciones
- ✅ Lead paragraph destacado
- ✅ 6 secciones H2: Tipos, Fogger vs Hazer, Aplicaciones, Consideraciones, Qué incluye, FAQ
- ✅ Múltiples H3 por sección
- ✅ Stat Module (+8,000 atmósferas creadas)
- ✅ Tip Module (consejo sobre alarmas)
- ✅ Benefits Box (6 beneficios)
- ✅ Process Section (4 pasos)
- ✅ Image Gallery (4 imágenes)
- ✅ FAQ Section (5 preguntas con acordeón)
- ✅ Tags Section con temas relacionados
- ✅ CTA inline (mitad del artículo)
- ✅ CTA final
- ✅ Módulos complementarios (3)

**Sidebar:**
- ✅ TOC de navegación
- ✅ Servicios relacionados (5)
- ✅ Información de contacto completa
- ✅ CTA de WhatsApp
- ✅ Badge de experiencia (+30 años)

**Imágenes utilizadas:**
```
img/humo/maquina-humo-profesional-boda-pista-baile.avif (Hero)
img/humo/maquina-humo-concierto-festival-luces.avif (Figura 1)
img/humo/maquina-humo-fiesta-neon-discoteca.avif (Figura 2)
img/humo/renta-humo-fiestas-xv-anos-salon.avif (Galería)
img/humo/efecto-humo-evento-corporativo-escenario.avif (Galería)
img/humo/maquina-niebla-boda-romantica-jardin.avif (Galería)
img/humo/renta-humo-escenario-presentacion-dj.avif (Galería)
```

---

### Artículo: Renta de Bocinas para Bodas en CDMX

**Archivo:** `blog/renta-bocinas-bodas-cdmx-sonido-profesional.html`

**Elementos SEO implementados:**
- ✅ Meta tags completos (title, description, robots, canonical, googlebot)
- ✅ Open Graph completo (type, title, description, image con dimensiones, url, site_name, locale, article:section)
- ✅ Twitter Cards completos
- ✅ Schema.org Article (headline, description, image, author, publisher, mainEntityOfPage, keywords, articleSection, wordCount: 3200, timeRequired: PT16M, inLanguage)
- ✅ Schema.org FAQPage (6 preguntas)
- ✅ Schema.org BreadcrumbList (4 niveles)

**Estructura de contenido:**
- ✅ Hero Section con imagen, badge "Sonido y DJ", título, hook y meta
- ✅ TOC inline con 6 secciones
- ✅ Lead paragraph destacado (importancia del sonido)
- ✅ 6 secciones H2: Por Qué el Sonido Importa, Tipos de Sistemas, Potencia Necesaria, Momentos Clave, Qué Incluye, Errores Comunes
- ✅ Múltiples H3 por sección (detalle por tipo de sistema y potencia)
- ✅ Stat Module (+3,000 bodas sonorizadas)
- ✅ Tip Module (consejo sobre viento en exteriores)
- ✅ Alert Module (advertencia sobre potencia vs calidad)
- ✅ Benefits Box (8 beneficios incluidos)
- ✅ Process Section (4 pasos: Consulta, Visita Técnica, Montaje, Operación)
- ✅ Image Gallery (4 imágenes de sonido profesional)
- ✅ FAQ Section (6 preguntas con acordeón)
- ✅ Tags Section con temas relacionados
- ✅ CTA inline (mitad del artículo)
- ✅ CTA final
- ✅ Módulo complementario (iluminación + sonido)

**Sidebar:**
- ✅ TOC de navegación
- ✅ Servicios de sonido relacionados (5)
- ✅ Información de contacto completa
- ✅ CTA de WhatsApp
- ✅ Badge de experiencia (+30 años)

**Imágenes utilizadas:**
```
img/bocinas-djs/dj-para-bodas-recepcion-baile.avif (Hero)
img/bocinas-djs/dj-para-bodas-mezclando-musica-evento.avif (Figura 1)
img/bocinas-djs/dj-para-eventos-pista-iluminada.avif (Figura 2)
img/bocinas-djs/dj-para-eventos-equipo-sonido-luces-400w.avif (Galería)
img/bocinas-djs/dj-para-eventos-salon-banquetes-400w.avif (Galería)
img/bocinas-djs/dj-para-fiestas-pista-de-baile-luces-400w.avif (Galería)
img/bocinas-djs/dj-profesional-consola-pioneer-cdj-400w.avif (Galería)
```

---

### Artículo: Renta de Bolas Disco para Eventos

**Archivo:** `blog/renta-bolas-disco-eventos-cdmx.html`

**Elementos SEO implementados:**
- ✅ Meta tags completos (title, description, robots, canonical, googlebot)
- ✅ Open Graph completo (type, title, description, image con dimensiones, url, site_name, locale, article:section)
- ✅ Twitter Cards completos
- ✅ Schema.org Article (headline, description, image, author, publisher, mainEntityOfPage, keywords, articleSection, wordCount: 2303, timeRequired: PT11M, inLanguage)
- ✅ Schema.org FAQPage (5 preguntas)
- ✅ Schema.org BreadcrumbList (4 niveles)

**Estructura de contenido:**
- ✅ Hero Section con imagen, badge "Equipo para Eventos", título, hook y meta
- ✅ TOC inline con 6 secciones
- ✅ Lead paragraph destacado (bola disco como símbolo de celebración)
- ✅ 6 secciones H2: Qué es y Cómo Funciona, Aplicaciones por Evento, Beneficios de Rentar, Cómo Integrar, Proceso de Renta, FAQ
- ✅ Múltiples H3 por sección (componentes, efecto visual, tipos de eventos)
- ✅ Stat Module (+15,000 eventos iluminados)
- ✅ Tip Module (consejo sobre iluminación ambiente)
- ✅ Benefits Box (4 beneficios)
- ✅ Process Section (4 pasos: Cotización, Asesoría, Instalación, Desmontaje)
- ✅ Image Gallery (4 imágenes de bolas disco)
- ✅ FAQ Section (5 preguntas con acordeón)
- ✅ Tags Section con temas relacionados
- ✅ CTA inline (mitad del artículo)
- ✅ CTA final
- ✅ Módulos complementarios (3: LED, Experiencia, Cobertura)

**Sidebar:**
- ✅ TOC de navegación
- ✅ Servicios relacionados (5)
- ✅ Información de contacto completa
- ✅ CTA de WhatsApp
- ✅ Badge de experiencia (+30 años)

**Imágenes utilizadas:**
```
img/bola-disco/bola-disco-gigante-para-eventos.avif (Hero)
img/bola-disco/renta-bola-disco-profesional-eventos.avif (Figura 1)
img/bola-disco/renta-bola-espejos-para-bodas.avif (Figura 2)
img/bola-disco/bola-disco-para-fiestas-tematicas-70s.avif (Galería)
img/bola-disco/bola-espejos-para-eventos-nocturnos.avif (Galería)
img/bola-disco/renta-bola-disco-fiesta-80s-90s.avif (Galería)
img/bola-disco/bola-disco-para-pista-de-baile.avif (Galería)
```

---

### Artículo: Bola Disco para Fiestas Retro Anos 70 y 80

**Archivo:** `blog/bola-disco-fiestas-retro-70s-80s-cdmx.html`

**Enfoque diferenciador:** Este artículo se centra específicamente en fiestas temáticas retro, diferente al artículo general de bolas disco que cubre aplicaciones variadas. Profundiza en las diferencias estéticas entre los 70s y 80s, combinaciones de iluminación por década, y consejos para crear experiencias auténticas.

**Elementos SEO implementados:**
- ✅ Meta tags completos (title, description, robots, canonical, googlebot)
- ✅ Open Graph completo (type, title, description, image con dimensiones, url, site_name, locale, article:section)
- ✅ Twitter Cards completos
- ✅ Schema.org Article (headline, description, image, author, publisher, mainEntityOfPage, keywords, articleSection, wordCount: 3100, timeRequired: PT15M, inLanguage)
- ✅ Schema.org FAQPage (6 preguntas)
- ✅ Schema.org BreadcrumbList (4 niveles)

**Estructura de contenido:**
- ✅ Hero Section con imagen dorada retro, badge "Equipo para Eventos", título, hook y meta
- ✅ TOC inline con 6 secciones
- ✅ Lead paragraph destacado (resurgimiento de fiestas retro)
- ✅ 6 secciones H2: Era Disco y Legado, Tipos de Bolas Disco Retro, 70s vs 80s Diferencias, Iluminación Complementaria, Cómo Organizar, FAQ
- ✅ Múltiples H3 por sección (tipos de bolas, estética por década, elementos complementarios)
- ✅ Stat Module (+2,500 fiestas temáticas iluminadas)
- ✅ Tip Module (consejo sobre colores por década)
- ✅ Alert Module (advertencia sobre temporada alta)
- ✅ Benefits Box (6 beneficios de paquetes retro)
- ✅ Process Section (4 pasos: Consulta, Diseño, Montaje, Fiesta)
- ✅ Image Gallery (4 imágenes de fiestas retro)
- ✅ FAQ Section (6 preguntas con acordeón)
- ✅ Tags Section con temas relacionados
- ✅ CTA inline (mitad del artículo)
- ✅ CTA final
- ✅ Módulo complementario (Momento wow, Cobertura)

**Sidebar:**
- ✅ TOC de navegación
- ✅ Servicios relacionados (5: Bolas Disco, Luz Negra, Luces Neon, Humo, DJ)
- ✅ Información de contacto completa
- ✅ CTA de WhatsApp
- ✅ Badge de experiencia (+30 años)

**Imágenes utilizadas (diferentes al artículo general):**
```
img/bola-disco/bola-disco-dorada-pista-led-retro.avif (Hero)
img/bola-disco/bola-disco-espejos-fiesta-dj-luces.avif (Figura 1)
img/bola-disco/bola-disco-dorada-boda-hacienda-romantica.avif (Figura 2)
img/bola-disco/bola-disco-para-fiestas-vintage.avif (Galería)
img/bola-disco/renta-bola-disco-fiesta-tematica.avif (Galería)
img/bola-disco/bola-espejos-para-fiestas-retro.avif (Galería)
img/bola-disco/renta-bola-disco-luces-led.avif (Galería)
```

---

**Documento de uso interno — REDEIL**
**Cualquier duda contactar al equipo de contenido**
