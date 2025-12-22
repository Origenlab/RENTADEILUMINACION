# GUÍA COMPLETA: Creación de Páginas de Zonas de Cobertura

## Índice

1. [Introducción](#introducción)
2. [Estructura de Archivos](#estructura-de-archivos)
3. [Plantilla Base HTML](#plantilla-base-html)
4. [Secciones de la Página](#secciones-de-la-página)
5. [Contenido Personalizado por Zona](#contenido-personalizado-por-zona)
6. [SEO y Meta Tags](#seo-y-meta-tags)
7. [Schema.org (Datos Estructurados)](#schemaorg-datos-estructurados)
8. [Checklist de Implementación](#checklist-de-implementación)
9. [Ejemplos de Contenido por Tipo de Zona](#ejemplos-de-contenido-por-tipo-de-zona)

---

## Introducción

Este documento describe el proceso completo para crear una nueva página de zona de cobertura para el sitio REDEIL. Cada página de zona debe seguir la misma estructura y diseño que `polanco.html` para mantener la consistencia del sitio.

### Ubicación de Archivos

```
RENTADEILUMINACION/
├── zonas-de-cobertura/          # Carpeta de zonas individuales
│   ├── polanco.html             # Página de ejemplo (referencia)
│   ├── santa-fe.html            # Nueva zona
│   ├── coyoacan.html            # Nueva zona
│   └── [nombre-zona].html       # Otras zonas
├── zonas-de-cobertura.html      # Página índice de todas las zonas
├── css/
│   └── style.css                # Estilos (ya incluye estilos de zonas)
└── img/
    └── zonas/                   # Imágenes de zonas
        ├── polanco-hero.jpg
        ├── polanco-hero.webp
        └── [zona]-hero.jpg
```

---

## Estructura de Archivos

### Nomenclatura de Archivos

- **Formato**: `nombre-zona.html` (minúsculas, guiones para espacios)
- **Ejemplos**:
  - `polanco.html`
  - `santa-fe.html`
  - `condesa-roma.html`
  - `del-valle.html`
  - `benito-juarez.html`

### Imágenes Requeridas

Para cada zona necesitas:

```
img/zonas/
├── [zona]-hero.jpg          # Imagen principal del hero (1920x1080 mínimo)
├── [zona]-hero.webp         # Versión WebP del hero (mejor rendimiento)
└── [zona]-eventos.jpg       # Imagen para Open Graph (1200x630)
```

---

## Plantilla Base HTML

### Estructura Completa del Documento

```html
<!DOCTYPE html>
<html lang="es-MX">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <!-- SEO Meta Tags -->
  <title>Renta de Iluminación en [ZONA] | [DESCRIPCIÓN CORTA] | REDEIL</title>
  <meta name="description" content="[DESCRIPCIÓN 150-160 caracteres con keywords principales]">
  <meta name="keywords" content="[KEYWORDS SEPARADAS POR COMA]">
  <meta name="author" content="REDEIL">
  <meta name="robots" content="index, follow">
  <link rel="canonical" href="https://rentadeiluminacion.com/zonas-de-cobertura/[zona].html">

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://rentadeiluminacion.com/zonas-de-cobertura/[zona].html">
  <meta property="og:title" content="Renta de Iluminación en [ZONA] | [SUBTÍTULO] | REDEIL">
  <meta property="og:description" content="[DESCRIPCIÓN PARA REDES SOCIALES]">
  <meta property="og:image" content="https://rentadeiluminacion.com/img/zonas/[zona]-eventos.jpg">
  <meta property="og:locale" content="es_MX">
  <meta property="og:site_name" content="REDEIL - Renta de Iluminación">

  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Renta de Iluminación en [ZONA] | REDEIL">
  <meta name="twitter:description" content="[DESCRIPCIÓN CORTA PARA TWITTER]">
  <meta name="twitter:image" content="https://rentadeiluminacion.com/img/zonas/[zona]-eventos.jpg">

  <!-- Favicon -->
  <link rel="icon" href="/favicon.ico" sizes="any">
  <link rel="icon" href="/icon.svg" type="image/svg+xml">
  <link rel="apple-touch-icon" href="../icon.png">
  <link rel="manifest" href="../site.webmanifest">
  <meta name="theme-color" content="#1a1a2e">

  <!-- Preconnect for performance -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

  <!-- Fonts -->
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Open+Sans:wght@400;500;600&display=swap" rel="stylesheet">

  <!-- Styles -->
  <link rel="stylesheet" href="../css/style.css">

  <!-- Schema.org Structured Data -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "serviceType": "Renta de Iluminación para Eventos en [ZONA]",
        "provider": {
          "@type": "LocalBusiness",
          "name": "REDEIL - Renta de Iluminación Profesional",
          "telephone": "+52-55-3068-2988",
          "email": "hola@rentadeiluminacion.com",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "[ZONA]",
            "addressRegion": "[CDMX o Estado de México]",
            "addressCountry": "MX"
          }
        },
        "areaServed": {
          "@type": "Place",
          "name": "[ZONA], [Ciudad/Estado]",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "[ZONA]",
            "addressRegion": "[Ciudad de México o Estado de México]",
            "addressCountry": "MX"
          }
        },
        "description": "[DESCRIPCIÓN DEL SERVICIO EN LA ZONA]"
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Inicio",
            "item": "https://rentadeiluminacion.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Zonas de Cobertura",
            "item": "https://rentadeiluminacion.com/zonas-de-cobertura.html"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "[ZONA]",
            "item": "https://rentadeiluminacion.com/zonas-de-cobertura/[zona].html"
          }
        ]
      }
    ]
  }
  </script>
</head>

<body>
  <!-- Skip to main content (Accessibility) -->
  <a href="#main-content" class="skip-link">Saltar al contenido principal</a>

  <!-- HEADER - Copiar exactamente de polanco.html -->

  <!-- BREADCRUMB - Cambiar solo el nombre de la zona -->

  <!-- MAIN CONTENT -->
  <main id="main-content" role="main">
    <!-- Secciones detalladas abajo -->
  </main>

  <!-- FOOTER - Copiar exactamente de polanco.html -->

  <!-- WhatsApp Float Button -->

  <!-- Scripts -->
  <script src="../js/main.js" defer></script>
</body>

</html>
```

---

## Secciones de la Página

Cada página de zona debe contener las siguientes secciones EN ESTE ORDEN:

### 1. HERO SECTION (Obligatorio)

```html
<section class="hero hero-two-columns" aria-labelledby="hero-title">
  <div class="hero-background">
    <picture>
      <source srcset="../img/zonas/[zona]-hero.webp" type="image/webp">
      <img src="../img/zonas/[zona]-hero.jpg" alt="Iluminación profesional para eventos en [ZONA]" aria-hidden="true" loading="eager" fetchpriority="high">
    </picture>
    <div class="hero-overlay"></div>
  </div>

  <div class="container">
    <div class="hero-grid">
      <!-- Columna 1: Título y CTAs -->
      <div class="hero-content">
        <h1 id="hero-title">Renta de Iluminación en [ZONA]</h1>
        <p class="hero-subtitle">[SUBTÍTULO DESCRIPTIVO DE LA ZONA - 1-2 líneas]</p>

        <div class="hero-ctas">
          <a href="../contacto.html" class="btn btn-primary btn-lg">Cotiza tu Evento</a>
          <a href="https://wa.me/5530682988?text=Hola,%20quiero%20cotizar%20iluminación%20para%20un%20evento%20en%20[ZONA]" class="btn btn-whatsapp btn-lg" target="_blank" rel="noopener">
            <svg class="icon-whatsapp" aria-hidden="true" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            WhatsApp
          </a>
        </div>
      </div>

      <!-- Columna 2: Introducción Marketing SEO -->
      <div class="hero-intro">
        <p><strong>[ZONA]</strong> [TEXTO MARKETING SEO - 2 párrafos describiendo la zona,
        sus características principales, tipo de eventos comunes, y por qué REDEIL
        es la mejor opción. Incluir keywords naturalmente.]</p>

        <p>[SEGUNDO PÁRRAFO - Mencionar servicios incluidos: transporte, instalación,
        desmontaje. Mencionar experiencia en venues específicos de la zona.]</p>
      </div>
    </div>
  </div>
</section>
```

### 2. ESTADÍSTICAS (Obligatorio)

```html
<section class="stats-section stats-section-enhanced" aria-label="Estadísticas [ZONA]">
  <div class="container">
    <div class="stats-grid-enhanced">
      <div class="stat-card-enhanced">
        <div class="stat-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
          </svg>
        </div>
        <div class="stat-content">
          <div class="stat-number-enhanced">[###]+</div>
          <div class="stat-label-enhanced">Eventos en [ZONA]</div>
          <div class="stat-sublabel">Experiencia comprobada</div>
        </div>
      </div>
      <div class="stat-card-enhanced">
        <div class="stat-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M19 21V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5m-4 0h4"/>
          </svg>
        </div>
        <div class="stat-content">
          <div class="stat-number-enhanced">[##]+</div>
          <div class="stat-label-enhanced">Venues y Salones</div>
          <div class="stat-sublabel">Donde hemos trabajado</div>
        </div>
      </div>
      <div class="stat-card-enhanced">
        <div class="stat-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
          </svg>
        </div>
        <div class="stat-content">
          <div class="stat-number-enhanced">[#]</div>
          <div class="stat-label-enhanced">Sucursal [Cercana/Local]</div>
          <div class="stat-sublabel">Atención [inmediata/rápida]</div>
        </div>
      </div>
      <div class="stat-card-enhanced">
        <div class="stat-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"/>
            <polyline points="12 6 12 12 16 14"/>
          </svg>
        </div>
        <div class="stat-content">
          <div class="stat-number-enhanced">[#]hr</div>
          <div class="stat-label-enhanced">Respuesta Promedio</div>
          <div class="stat-sublabel">Cotizaciones rápidas</div>
        </div>
      </div>
    </div>
  </div>
</section>
```

### 3. CARACTERÍSTICAS DE LA ZONA (Obligatorio)

```html
<section class="zona-features-section" aria-label="Características del servicio">
  <div class="container">
    <div class="zona-features-grid">
      <div class="zona-feature-card">
        <div class="zona-feature-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
        </div>
        <h3>[CARACTERÍSTICA 1]</h3>
        <p>[Descripción breve]</p>
      </div>
      <div class="zona-feature-card">
        <div class="zona-feature-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
        </div>
        <h3>[CARACTERÍSTICA 2]</h3>
        <p>[Descripción breve]</p>
      </div>
      <div class="zona-feature-card">
        <div class="zona-feature-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
        </div>
        <h3>Todo Incluido</h3>
        <p>Transporte, instalación profesional, operación durante el evento y desmontaje.</p>
      </div>
      <div class="zona-feature-card">
        <div class="zona-feature-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
        </div>
        <h3>[CARACTERÍSTICA 4]</h3>
        <p>[Descripción breve]</p>
      </div>
    </div>
  </div>
</section>
```

### 4. VENUES EN LA ZONA (Obligatorio)

```html
<section class="zona-venues-section" aria-labelledby="venues-title">
  <div class="container">
    <header class="section-header">
      <span class="section-badge">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
        Venues [Exclusivos/Populares]
      </span>
      <h2 id="venues-title">Lugares que Iluminamos en [ZONA]</h2>
      <p>Experiencia comprobada en los venues más [prestigiosos/populares] de la zona</p>
    </header>

    <div class="venues-grid">
      <!-- Repetir para cada categoría de venue -->
      <article class="venue-card venue-card-featured">
        <div class="venue-card-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">[ICONO SVG]</svg>
        </div>
        <div class="venue-card-content">
          <h3>[CATEGORÍA DE VENUE]</h3>
          <p>[Descripción de la categoría]</p>
          <ul class="venue-list">
            <li>[Venue 1]</li>
            <li>[Venue 2]</li>
            <li>[Venue 3]</li>
            <li>[Venue 4]</li>
            <li>[Venue 5]</li>
          </ul>
        </div>
      </article>
      <!-- Más venue cards... -->
    </div>
  </div>
</section>
```

**Categorías de Venues sugeridas:**
- Hoteles (5 estrellas, boutique, etc.)
- Salones de Eventos / Rooftops
- Restaurantes
- Jardines / Haciendas
- Museos / Galerías
- Corporativos / Oficinas
- Residencias Privadas
- Iglesias / Templos
- Centros de Convenciones

### 5. TIPOS DE EVENTOS (Obligatorio)

```html
<section class="zona-eventos-section bg-light" aria-labelledby="eventos-title">
  <div class="container">
    <header class="section-header">
      <span class="section-badge">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
        Eventos [Exclusivos/Especiales]
      </span>
      <h2 id="eventos-title">Tipos de Eventos que Iluminamos</h2>
      <p>Experiencia en todo tipo de celebraciones y eventos</p>
    </header>

    <div class="eventos-grid">
      <!-- 6 tipos de eventos -->
      <article class="evento-card">
        <div class="evento-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">[ICONO]</svg>
        </div>
        <h3>[TIPO DE EVENTO]</h3>
        <p>[Descripción del servicio para este tipo de evento]</p>
      </article>
      <!-- Repetir para 6 eventos -->
    </div>
  </div>
</section>
```

**Tipos de eventos estándar:**
1. Bodas
2. XV Años
3. Eventos Corporativos
4. Fiestas Privadas
5. Cenas / Aniversarios
6. Exposiciones / Galas

### 6. SERVICIOS DISPONIBLES (Obligatorio)

Incluir las 3 secciones completas de servicios:

```html
<!-- SECCIÓN DE ILUMINACIÓN -->
<section class="services-section" id="iluminacion" aria-labelledby="services-title">
  <div class="container">
    <header class="section-header">
      <span class="section-badge">
        <svg>...</svg>
        Catálogo Completo
      </span>
      <h2 id="services-title">Servicios de Iluminación en [ZONA]</h2>
      <p>Equipos profesionales disponibles para tu evento</p>
    </header>

    <div class="services-grid">
      <!-- 11 service-cards de iluminación -->
      <!-- Copiar exactamente de polanco.html -->
    </div>
  </div>
</section>

<!-- SECCIÓN DE BOCINAS -->
<section class="audio-section" id="sonido" aria-labelledby="audio-title">
  <!-- Copiar estructura de polanco.html -->
  <!-- 5 audio-cards -->
</section>

<!-- SECCIÓN DE EQUIPO -->
<section class="equipment-section" id="equipo" aria-labelledby="equipment-title">
  <!-- Copiar estructura de polanco.html -->
  <!-- 7 equipment-cards -->
</section>
```

### 7. TESTIMONIOS (Opcional pero recomendado)

```html
<section class="testimonials-section" aria-labelledby="testimonials-title">
  <div class="container">
    <header class="section-header">
      <span class="section-badge">
        <svg>...</svg>
        Clientes Satisfechos
      </span>
      <h2 id="testimonials-title">Lo que Dicen Nuestros Clientes en [ZONA]</h2>
    </header>

    <div class="testimonials-grid">
      <!-- 3 testimonios -->
      <blockquote class="testimonial-card">
        <p>"[TESTIMONIO]"</p>
        <footer class="testimonial-author">
          <strong>[NOMBRE]</strong>
          <span>[TIPO DE EVENTO] en [VENUE]</span>
        </footer>
      </blockquote>
    </div>
  </div>
</section>
```

### 8. SUCURSAL / ATENCIÓN LOCAL (Obligatorio)

```html
<section class="zona-sucursal-section" aria-labelledby="sucursal-title">
  <div class="container">
    <div class="sucursal-card">
      <div class="sucursal-content">
        <span class="sucursal-badge">Sucursal [ZONA/Cercana]</span>
        <h2 id="sucursal-title">Atención Local en [ZONA]</h2>
        <p>[Descripción de la atención local y beneficios]</p>

        <div class="sucursal-info">
          <div class="sucursal-info-item">
            <svg>...</svg>
            <div>
              <strong>Dirección:</strong>
              <span>[DIRECCIÓN COMPLETA]</span>
            </div>
          </div>
          <div class="sucursal-info-item">
            <svg>...</svg>
            <div>
              <strong>Teléfono:</strong>
              <a href="tel:+525530682988">55 3068 2988</a>
            </div>
          </div>
          <div class="sucursal-info-item">
            <svg>...</svg>
            <div>
              <strong>Horario:</strong>
              <span>Lunes a Domingo: 8:00 - 18:00</span>
            </div>
          </div>
        </div>

        <div class="sucursal-ctas">
          <a href="https://wa.me/5530682988?text=Hola,%20contacto%20desde%20la%20página%20de%20[ZONA]" class="btn btn-whatsapp" target="_blank" rel="noopener">
            <svg>...</svg>
            WhatsApp
          </a>
          <a href="https://maps.google.com/?q=[DIRECCIÓN ENCODED]" class="btn btn-outline-light" target="_blank" rel="noopener">
            <svg>...</svg>
            Cómo Llegar
          </a>
        </div>
      </div>
      <div class="sucursal-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=[EMBED CODE]"
          width="100%"
          height="300"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="Ubicación sucursal [ZONA]">
        </iframe>
      </div>
    </div>
  </div>
</section>
```

### 9. CTA FINAL (Obligatorio)

```html
<section class="cta-section" aria-labelledby="cta-title">
  <div class="container">
    <div class="cta-content">
      <h2 id="cta-title">¿Listo para Iluminar tu Evento en [ZONA]?</h2>
      <p>Cotiza sin compromiso y recibe asesoría personalizada de nuestros expertos. Respondemos en menos de 1 hora.</p>
      <div class="cta-buttons">
        <a href="../contacto.html" class="btn btn-primary btn-lg">Solicitar Cotización</a>
        <a href="https://wa.me/5530682988?text=Hola,%20quiero%20cotizar%20iluminación%20para%20un%20evento%20en%20[ZONA]" class="btn btn-whatsapp btn-lg" target="_blank" rel="noopener">
          <svg>...</svg>
          WhatsApp
        </a>
      </div>
    </div>
  </div>
</section>
```

### 10. OTRAS ZONAS (Obligatorio)

```html
<section class="otras-zonas-section" aria-labelledby="otras-zonas-title">
  <div class="container">
    <header class="section-header">
      <h2 id="otras-zonas-title">Otras Zonas de Cobertura</h2>
      <p>También damos servicio en estas zonas cercanas</p>
    </header>

    <div class="otras-zonas-grid">
      <!-- 4-6 zonas cercanas -->
      <a href="[zona].html" class="otra-zona-card">
        <span class="otra-zona-name">[NOMBRE ZONA]</span>
        <svg>...</svg>
      </a>
    </div>

    <div class="otras-zonas-cta">
      <a href="../zonas-de-cobertura.html" class="btn btn-outline-primary">Ver Todas las Zonas</a>
    </div>
  </div>
</section>
```

### 11. FOOTER (Obligatorio)

**IMPORTANTE**: Copiar el footer EXACTAMENTE de `polanco.html`, solo ajustando las rutas relativas (`../`).

---

## Contenido Personalizado por Zona

### Variables a Personalizar

Para cada zona nueva, debes personalizar:

| Variable | Descripción | Ejemplo |
|----------|-------------|---------|
| `[ZONA]` | Nombre de la zona | Polanco, Santa Fe, Coyoacán |
| `[zona]` | Nombre en minúsculas para URLs | polanco, santa-fe, coyoacan |
| `[DESCRIPCIÓN]` | Descripción SEO (150-160 chars) | Ver ejemplos abajo |
| `[KEYWORDS]` | Palabras clave separadas por coma | Ver ejemplos abajo |
| `[SUBTÍTULO]` | Descripción corta del hero | Ver ejemplos abajo |
| `[VENUES]` | Lista de venues específicos | Hoteles, salones, restaurantes |
| `[ESTADÍSTICAS]` | Números de eventos, venues, etc. | 500+, 25+, etc. |
| `[SUCURSAL]` | Dirección de sucursal cercana | Ver sucursales disponibles |

### Sucursales Disponibles

```
1. Benito Juárez
   Av. Insurgentes Sur 615 - Piso 6
   Nápoles, Benito Juárez
   03810 Ciudad de México, CDMX

2. Polanco
   Av. Homero 1933 - Piso 3
   Polanco, Polanco I Secc
   11510 Ciudad de México, CDMX

3. Naucalpan
   Blvd. Manuel Ávila Camacho 5
   Lomas de Sotelo, Piso 10, Torre B
   53390 Naucalpan, Edo. de México

4. Tlalnepantla
   Emilio Carranza 17
   Tlalnepantla Centro
   54000 Tlalnepantla, Edo. de México
```

---

## SEO y Meta Tags

### Fórmula para Title

```
Renta de Iluminación en [ZONA] | [Característica Principal] | REDEIL
```

**Ejemplos:**
- `Renta de Iluminación en Polanco | Eventos Exclusivos CDMX | REDEIL`
- `Renta de Iluminación en Santa Fe | Corporativos y Bodas | REDEIL`
- `Renta de Iluminación en Coyoacán | Jardines y Haciendas | REDEIL`

### Fórmula para Description (150-160 caracteres)

```
Renta de iluminación profesional para eventos en [ZONA]. [Característica 1], [Característica 2]. [Venues destacados]. Instalación incluida.
```

**Ejemplos:**
- Polanco: "Renta de iluminación profesional para eventos en Polanco. Servicio premium para hoteles 5 estrellas, salones exclusivos y rooftops. JW Marriott, St. Regis, W Mexico City. Instalación incluida."
- Santa Fe: "Renta de iluminación para eventos corporativos y bodas en Santa Fe. Centros de convenciones, hoteles de negocios y salones modernos. Transporte e instalación incluidos."

### Keywords por Zona

**Fórmula:**
```
renta iluminación [zona], luces eventos [zona], iluminación bodas [zona], eventos corporativos [zona], iluminación [venues específicos], luces [tipo evento] [zona]
```

---

## Schema.org (Datos Estructurados)

Cada página debe incluir:

1. **Service Schema**: Describe el servicio ofrecido en la zona
2. **BreadcrumbList Schema**: Navegación estructurada

El JSON-LD debe ir en el `<head>` antes de cerrar `</head>`.

---

## Checklist de Implementación

### Antes de Empezar

- [ ] Definir nombre de la zona y URL (`nombre-zona.html`)
- [ ] Investigar venues principales de la zona
- [ ] Investigar tipos de eventos más comunes en la zona
- [ ] Determinar sucursal más cercana
- [ ] Preparar imágenes del hero (JPG + WebP)

### Creación del Archivo

- [ ] Copiar `polanco.html` como base
- [ ] Renombrar archivo a `[zona].html`
- [ ] Actualizar todas las instancias de "Polanco" a "[ZONA]"
- [ ] Actualizar todas las instancias de "polanco" a "[zona]"

### SEO y Meta Tags

- [ ] Actualizar `<title>`
- [ ] Actualizar `<meta name="description">`
- [ ] Actualizar `<meta name="keywords">`
- [ ] Actualizar `<link rel="canonical">`
- [ ] Actualizar Open Graph tags
- [ ] Actualizar Twitter tags
- [ ] Actualizar Schema.org JSON-LD

### Contenido

- [ ] Actualizar texto del hero (h1, subtítulo, intro SEO)
- [ ] Actualizar estadísticas con números relevantes
- [ ] Actualizar características de la zona
- [ ] Actualizar lista de venues (mínimo 6 categorías)
- [ ] Actualizar tipos de eventos (6 tipos)
- [ ] Verificar que todos los servicios estén incluidos
- [ ] Actualizar/agregar testimonios
- [ ] Actualizar información de sucursal
- [ ] Actualizar mapa de Google Maps
- [ ] Actualizar sección de otras zonas

### Enlaces y Navegación

- [ ] Verificar breadcrumb actualizado
- [ ] Verificar enlaces de WhatsApp con mensaje correcto
- [ ] Verificar enlaces a otras zonas
- [ ] Verificar todos los enlaces relativos (`../`)

### Validación Final

- [ ] Validar HTML (https://validator.w3.org/)
- [ ] Validar Schema.org (https://search.google.com/test/rich-results)
- [ ] Probar en móvil
- [ ] Probar todos los enlaces
- [ ] Verificar imágenes cargan correctamente
- [ ] Verificar WhatsApp float button funciona

### Después de Publicar

- [ ] Agregar link en `zonas-de-cobertura.html`
- [ ] Agregar link en footer (si aplica)
- [ ] Actualizar sitemap.xml
- [ ] Solicitar indexación en Google Search Console

---

## Ejemplos de Contenido por Tipo de Zona

### Zona Premium (Polanco, Santa Fe, Lomas)

**Tono**: Exclusivo, sofisticado, premium
**Keywords**: exclusivo, lujo, premium, 5 estrellas, prestigioso
**Venues**: Hoteles de lujo, restaurantes de alta cocina, rooftops, galerías
**Estadísticas**: Números altos (500+, 25+)

### Zona Tradicional (Coyoacán, San Ángel, Centro)

**Tono**: Cultural, artístico, tradicional, bohemio
**Keywords**: cultural, artístico, tradicional, colonial, histórico
**Venues**: Museos, casas coloniales, jardines, haciendas, foros culturales
**Estadísticas**: Números moderados (300+, 15+)

### Zona Residencial (Del Valle, Nápoles, Narvarte)

**Tono**: Familiar, accesible, céntrico, conveniente
**Keywords**: familiar, residencial, accesible, eventos sociales
**Venues**: Salones de eventos, jardines, terrazas, casas privadas
**Estadísticas**: Números moderados (200+, 20+)

### Estado de México (Naucalpan, Huixquilucan, Interlomas)

**Tono**: Moderno, corporativo, accesible
**Keywords**: corporativo, moderno, zona metropolitana, accesible
**Venues**: Centros de convenciones, hoteles de negocios, salones, jardines
**Estadísticas**: Números moderados (250+, 18+)

---

## Notas Importantes

1. **Consistencia**: Mantener el mismo diseño y estructura en todas las páginas
2. **Rutas relativas**: Todas las rutas deben usar `../` para subir un nivel
3. **WhatsApp**: Siempre incluir el mensaje predefinido con el nombre de la zona
4. **Imágenes**: Siempre incluir versión WebP para mejor rendimiento
5. **Footer**: Debe ser EXACTAMENTE igual al del index.html
6. **Responsive**: Verificar que todo se vea bien en móvil

---

## Contacto para Dudas

Si tienes dudas sobre la implementación, revisa el archivo de referencia:
`/zonas-de-cobertura/polanco.html`

---

*Documento creado: Diciembre 2024*
*Última actualización: Diciembre 2024*
*Versión: 1.0*
