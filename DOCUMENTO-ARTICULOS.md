# Guía de Creación de Artículos - Blog REDEIL

## Índice

1. [Introducción](#introducción)
2. [Estructura de Carpetas](#estructura-de-carpetas)
3. [Reglas Generales del Contenido](#reglas-generales-del-contenido)
4. [Crear el Archivo del Artículo](#crear-el-archivo-del-artículo)
5. [Estructura Completa del Artículo HTML](#estructura-completa-del-artículo-html)
6. [Componentes del Artículo](#componentes-del-artículo)
7. [Actualizar blog.html](#actualizar-bloghtml)
8. [Checklist Final](#checklist-final)
9. [Plantilla Rápida](#plantilla-rápida)

---

## Introducción

Esta guía documenta el proceso completo para crear artículos profesionales en el blog de REDEIL. Cada artículo debe seguir los estándares de diseño, SEO y estructura establecidos para mantener la coherencia del sitio.

---

## Estructura de Carpetas

```
RENTADEILUMINACION/
├── blog.html                    ← Página principal del blog
├── blog/                        ← Carpeta de artículos
│   ├── guia-iluminacion-bodas.html
│   ├── [nuevo-articulo].html
│   └── ...
├── css/
│   └── style.css               ← Estilos (ya incluye estilos de artículos)
├── img/
│   ├── img-guirnaldas/
│   ├── img-luces-neon/
│   ├── img-luz-negra/
│   └── ...
└── js/
    └── app.js
```

### Nomenclatura de Archivos

- **Formato:** `nombre-del-articulo.html` (minúsculas, guiones)
- **Ejemplos válidos:**
  - `guia-iluminacion-bodas.html`
  - `tipos-guirnaldas-eventos.html`
  - `iluminacion-xv-anos.html`
- **Evitar:**
  - Espacios: ~~`guia iluminacion.html`~~
  - Caracteres especiales: ~~`guía-iluminación.html`~~
  - Mayúsculas: ~~`Guia-Iluminacion.html`~~

---

## Reglas Generales del Contenido

### IMPORTANTE: Contenido Atemporal

Todo el contenido debe ser **atemporal** (sin fechas ni precios):

| NO INCLUIR | POR QUÉ |
|------------|---------|
| Fechas específicas | El contenido debe ser válido indefinidamente |
| Precios o costos | Los precios cambian constantemente |
| "Este año 2025..." | Caduca rápidamente |
| "Tendencias 2025" | Usar solo "Tendencias" |
| "Desde $X,XXX" | Invitar a cotizar en su lugar |

### Tono y Estilo

- **Profesional** pero accesible
- **Informativo** y útil para el lector
- **Orientado a conversión** (CTAs claros)
- **SEO optimizado** (keywords naturales)

---

## Crear el Archivo del Artículo

### Paso 1: Definir Información del Artículo

Antes de crear el archivo, define:

```
TÍTULO: [Título completo del artículo]
SLUG: [nombre-archivo.html]
DESCRIPCIÓN SEO: [150-160 caracteres]
KEYWORDS: [5-8 palabras clave separadas por comas]
CATEGORÍA: [Guía Profesional / Consejos / Tips / etc.]
TIEMPO LECTURA: [X min]
IMAGEN PRINCIPAL: [ruta de imagen]
```

**Ejemplo:**
```
TÍTULO: Guía Completa de Iluminación para Bodas
SLUG: guia-iluminacion-bodas.html
DESCRIPCIÓN SEO: Descubre cómo elegir la iluminación perfecta para tu boda. Guirnaldas, luces neón, efectos especiales y consejos profesionales.
KEYWORDS: iluminación bodas, luces para boda, guirnaldas boda, decoración luminosa, renta iluminación boda CDMX
CATEGORÍA: Guía Profesional
TIEMPO LECTURA: 12 min
IMAGEN PRINCIPAL: ../img/img-guirnaldas/guirnaldas-edison-hacienda-boda.avif
```

### Paso 2: Crear el Archivo

Crear archivo en: `/blog/[slug].html`

---

## Estructura Completa del Artículo HTML

### 5.1 Sección HEAD (Meta Tags y SEO)

```html
<!DOCTYPE html>
<html lang="es-MX">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <!-- SEO Meta Tags -->
  <title>[TÍTULO] | REDEIL Blog</title>
  <meta name="description" content="[DESCRIPCIÓN SEO 150-160 caracteres]">
  <meta name="keywords" content="[KEYWORDS separadas por comas]">
  <meta name="author" content="REDEIL">
  <meta name="robots" content="index, follow">
  <link rel="canonical" href="https://rentadeiluminacion.com/blog/[SLUG]">

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="article">
  <meta property="og:url" content="https://rentadeiluminacion.com/blog/[SLUG]">
  <meta property="og:title" content="[TÍTULO] | REDEIL">
  <meta property="og:description" content="[DESCRIPCIÓN CORTA]">
  <meta property="og:image" content="https://rentadeiluminacion.com/[RUTA-IMAGEN]">
  <meta property="og:locale" content="es_MX">
  <meta property="og:site_name" content="REDEIL - Renta de Iluminación">

  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="[TÍTULO] | REDEIL">
  <meta name="twitter:description" content="[DESCRIPCIÓN CORTA]">
  <meta name="twitter:image" content="https://rentadeiluminacion.com/[RUTA-IMAGEN]">

  <!-- Favicon -->
  <link rel="icon" href="/favicon.ico" sizes="any">
  <link rel="icon" href="/icon.svg" type="image/svg+xml">
  <link rel="apple-touch-icon" href="/icon.png">
  <link rel="manifest" href="/site.webmanifest">
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
    "@type": "Article",
    "headline": "[TÍTULO]",
    "description": "[DESCRIPCIÓN]",
    "image": "https://rentadeiluminacion.com/[RUTA-IMAGEN]",
    "author": {
      "@type": "Organization",
      "name": "REDEIL"
    },
    "publisher": {
      "@type": "Organization",
      "name": "REDEIL",
      "logo": {
        "@type": "ImageObject",
        "url": "https://rentadeiluminacion.com/img/logo-redeil.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://rentadeiluminacion.com/blog/[SLUG]"
    }
  }
  </script>
</head>
```

### 5.2 HEADER (Navegación)

**IMPORTANTE:** Todos los enlaces deben usar `../` para salir de la carpeta `/blog/`

```html
<body>
  <!-- Skip to main content (Accessibility) -->
  <a href="#main-content" class="skip-link">Saltar al contenido principal</a>

  <!-- HEADER -->
  <header class="site-header" role="banner">
    <div class="container">
      <div class="header-inner">
        <!-- Logo -->
        <a href="../index.html" class="logo" aria-label="REDEIL - Inicio">
          <img src="../img/logo-redeil.png" alt="REDEIL - Renta de Iluminación" width="180" height="60" loading="eager">
        </a>

        <!-- Navigation -->
        <nav class="main-nav" role="navigation" aria-label="Navegación principal">
          <button class="nav-toggle" aria-expanded="false" aria-controls="main-menu" aria-label="Abrir menú">
            <span class="hamburger"></span>
          </button>

          <ul id="main-menu" class="nav-menu">
            <li><a href="../index.html">Inicio</a></li>
            <li class="has-submenu">
              <a href="../servicios.html">Servicios</a>
              <ul class="submenu">
                <li class="has-submenu">
                  <a href="../renta-de-iluminacion/iluminacion.html">Iluminacion</a>
                  <ul class="submenu">
                    <li><a href="../renta-de-iluminacion/renta-de-guirnaldas.html">Renta de Guirnaldas</a></li>
                    <li><a href="../renta-de-iluminacion/renta-de-luces-neon.html">Renta de Luces Neon</a></li>
                    <li><a href="../renta-de-iluminacion/renta-de-luz-negra.html">Renta de Luz Negra</a></li>
                    <li><a href="../renta-de-iluminacion/renta-de-city-color.html">Renta de City Color</a></li>
                    <li><a href="../renta-de-iluminacion/renta-de-city-light.html">Renta de City Light</a></li>
                    <li><a href="../renta-de-iluminacion/renta-de-sky-tracker.html">Renta de Sky Tracker</a></li>
                    <li><a href="../renta-de-iluminacion/renta-de-cabezas-moviles.html">Renta de Cabezas Moviles</a></li>
                    <li><a href="../renta-de-iluminacion/renta-de-cascadas-led.html">Renta de Cascadas LED</a></li>
                    <li><a href="../renta-de-iluminacion/renta-de-gobos.html">Renta de Gobos</a></li>
                    <li><a href="../renta-de-iluminacion/renta-de-iluminacion-arquitectonica.html">Iluminacion Arquitectonica</a></li>
                    <li><a href="../renta-de-iluminacion/renta-de-seguidor.html">Renta de Seguidor</a></li>
                  </ul>
                </li>
                <li class="has-submenu">
                  <a href="../renta-de-bocinas/bocinas.html">Bocinas</a>
                  <ul class="submenu">
                    <li><a href="../renta-de-bocinas/renta-de-bocinas-para-bodas.html">Bocinas para Bodas</a></li>
                    <li><a href="../renta-de-bocinas/renta-de-bocinas-para-xv-anos.html">Bocinas para XV Años</a></li>
                    <li><a href="../renta-de-bocinas/renta-de-bocinas-para-fiestas.html">Bocinas para Fiestas</a></li>
                    <li><a href="../renta-de-bocinas/renta-de-bocinas-para-conferencias.html">Bocinas para Conferencias</a></li>
                    <li><a href="../renta-de-bocinas/dj-para-eventos.html">DJ para Eventos</a></li>
                  </ul>
                </li>
                <li class="has-submenu">
                  <a href="../equipo-para-eventos/equipo-para-eventos.html">Equipo para Eventos</a>
                  <ul class="submenu">
                    <li><a href="../equipo-para-eventos/renta-de-bolas-disco.html">Bolas Disco</a></li>
                    <li><a href="../equipo-para-eventos/renta-de-maquina-de-confeti.html">Maquina de Confeti</a></li>
                    <li><a href="../equipo-para-eventos/renta-de-podium.html">Podium</a></li>
                    <li><a href="../equipo-para-eventos/renta-de-pantalla-inflable.html">Pantalla Inflable</a></li>
                    <li><a href="../equipo-para-eventos/renta-de-maquina-de-humo.html">Maquina de Humo</a></li>
                    <li><a href="../equipo-para-eventos/renta-de-maquina-de-burbujas.html">Maquina de Burbujas</a></li>
                    <li><a href="../equipo-para-eventos/renta-de-humo-bajo.html">Humo Bajo</a></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li><a href="../nosotros.html">Nosotros</a></li>
            <li><a href="../blog.html" class="active">Blog</a></li>
          </ul>
        </nav>

        <!-- CTA Header -->
        <a href="../index.html#cotizar" class="btn btn-primary header-cta">Cotiza Gratis</a>
      </div>
    </div>
  </header>
```

### 5.3 BREADCRUMB

```html
  <!-- BREADCRUMB -->
  <section class="breadcrumb-section" aria-label="Breadcrumb">
    <div class="container">
      <nav class="breadcrumb">
        <ol itemscope itemtype="https://schema.org/BreadcrumbList">
          <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
            <svg class="breadcrumb-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
            <a itemprop="item" href="../index.html"><span itemprop="name">Inicio</span></a>
            <meta itemprop="position" content="1" />
          </li>
          <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
            <a itemprop="item" href="../blog.html"><span itemprop="name">Blog</span></a>
            <meta itemprop="position" content="2" />
          </li>
          <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
            <span itemprop="name">[TÍTULO CORTO DEL ARTÍCULO]</span>
            <meta itemprop="position" content="3" />
          </li>
        </ol>
      </nav>
    </div>
  </section>
```

### 5.4 ARTICLE HERO

```html
  <main id="main-content" role="main">

    <!-- ARTICLE HERO -->
    <section class="article-hero">
      <div class="container">
        <div class="article-hero-content">
          <span class="article-tag">[CATEGORÍA]</span>
          <h1>[TÍTULO DEL ARTÍCULO]</h1>
          <p class="article-excerpt">[EXTRACTO/RESUMEN del artículo en 1-2 oraciones]</p>
          <div class="article-meta-hero">
            <span class="meta-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              [X] min de lectura
            </span>
            <span class="meta-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
              +[X] lecturas
            </span>
          </div>
        </div>
      </div>
      <div class="article-hero-image">
        <img src="../[RUTA-IMAGEN-PRINCIPAL]" alt="[DESCRIPCIÓN ALT]" loading="eager">
      </div>
    </section>
```

---

## Componentes del Artículo

### 6.1 Tabla de Contenidos

```html
<!-- Table of Contents -->
<div class="article-toc">
  <h3>
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>
    Contenido del Artículo
  </h3>
  <ol>
    <li><a href="#seccion1">[Título Sección 1]</a></li>
    <li><a href="#seccion2">[Título Sección 2]</a></li>
    <li><a href="#seccion3">[Título Sección 3]</a></li>
    <!-- Agregar más según sea necesario -->
  </ol>
</div>
```

### 6.2 Párrafo Introductorio

```html
<p class="article-intro">[Párrafo introductorio destacado que resuma el artículo y enganche al lector. Usar lenguaje profesional pero accesible.]</p>
```

### 6.3 Encabezados de Sección

```html
<!-- H2 para secciones principales -->
<h2 id="seccion1">[Título de Sección Principal]</h2>

<!-- H3 para subsecciones -->
<h3>[Título de Subsección]</h3>
```

### 6.4 Listas

```html
<!-- Lista con viñetas -->
<ul class="article-list">
  <li><strong>[Término]:</strong> [Descripción del punto]</li>
  <li><strong>[Término]:</strong> [Descripción del punto]</li>
  <li><strong>[Término]:</strong> [Descripción del punto]</li>
</ul>
```

### 6.5 Imágenes con Caption

```html
<figure class="article-figure">
  <img src="../[RUTA-IMAGEN]" alt="[Descripción detallada de la imagen]" loading="lazy">
  <figcaption>[Texto descriptivo que aparece debajo de la imagen]</figcaption>
</figure>
```

### 6.6 Box Destacado (Highlight)

Para datos curiosos, estadísticas o información importante:

```html
<div class="article-highlight">
  <div class="highlight-icon">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="28" height="28"><path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>
  </div>
  <div class="highlight-content">
    <h4>¿Sabías que...?</h4>
    <p>[Dato interesante o estadística relevante]</p>
  </div>
</div>
```

### 6.7 Tip/Consejo Profesional

```html
<div class="article-tip">
  <div class="tip-header">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="24" height="24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
    <span>Consejo Profesional</span>
  </div>
  <p>[Consejo o recomendación de experto]</p>
</div>
```

### 6.8 Grid de Features (4 columnas)

Para mostrar características, servicios o efectos especiales:

```html
<div class="article-grid-features">
  <div class="feature-card">
    <div class="feature-icon">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="32" height="32">[SVG PATH]</svg>
    </div>
    <h4>[Título Feature]</h4>
    <p>[Descripción breve]</p>
  </div>
  <!-- Repetir para cada feature (recomendado: 4) -->
</div>
```

### 6.9 Timeline de Momentos

Para secuencias o pasos numerados:

```html
<div class="article-moments">
  <div class="moment-item">
    <div class="moment-number">01</div>
    <div class="moment-content">
      <h4>[Título del Momento]</h4>
      <p>[Descripción del momento o paso]</p>
    </div>
  </div>
  <!-- Repetir para cada momento -->
</div>
```

### 6.10 Grid de Tips (6 columnas)

Para consejos numerados:

```html
<div class="article-tips-grid">
  <div class="tip-card">
    <span class="tip-number">1</span>
    <h4>[Título del Tip]</h4>
    <p>[Descripción del consejo]</p>
  </div>
  <!-- Repetir para cada tip (recomendado: 6) -->
</div>
```

### 6.11 Lista de Errores a Evitar

```html
<div class="article-errors">
  <div class="error-item">
    <div class="error-icon">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="24" height="24"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>
    </div>
    <div class="error-content">
      <h4>[Título del Error]</h4>
      <p>[Explicación del error y cómo evitarlo]</p>
    </div>
  </div>
  <!-- Repetir para cada error -->
</div>
```

### 6.12 Conclusión

```html
<div class="article-conclusion">
  <h3>Conclusión</h3>
  <p>[Párrafo de cierre resumiendo los puntos principales]</p>
  <p>[Segundo párrafo con llamado a la acción suave]</p>
</div>
```

### 6.13 CTA Box (Llamado a la Acción)

```html
<div class="article-cta-box">
  <div class="cta-box-content">
    <h3>¿Listo para [Acción relacionada al tema]?</h3>
    <p>[Texto persuasivo invitando a cotizar o contactar]</p>
    <div class="cta-box-buttons">
      <a href="../index.html#cotizar" class="btn btn-primary">Solicitar Cotización</a>
      <a href="https://wa.me/525530682988?text=Hola,%20me%20interesa%20información%20sobre%20[TEMA]" class="btn btn-whatsapp" target="_blank" rel="noopener">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/></svg>
        WhatsApp
      </a>
    </div>
  </div>
</div>
```

### 6.14 Botones de Compartir

```html
<div class="article-share">
  <span class="share-label">Compartir artículo:</span>
  <div class="share-buttons">
    <a href="#" class="share-btn facebook" aria-label="Compartir en Facebook">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
    </a>
    <a href="#" class="share-btn twitter" aria-label="Compartir en Twitter">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
    </a>
    <a href="#" class="share-btn whatsapp" aria-label="Compartir en WhatsApp">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/></svg>
    </a>
    <a href="#" class="share-btn linkedin" aria-label="Compartir en LinkedIn">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
    </a>
  </div>
</div>
```

### 6.15 Sidebar del Artículo

```html
<!-- Sidebar -->
<aside class="article-sidebar">
  <!-- About Widget -->
  <div class="sidebar-widget widget-about">
    <h3 class="widget-title">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
      Sobre REDEIL
    </h3>
    <div class="about-content">
      <img src="../img/logo-redeil.png" alt="REDEIL Logo" class="about-logo" loading="lazy">
      <p>Más de 30 años transformando eventos en experiencias inolvidables con iluminación profesional en CDMX y Estado de México.</p>
      <div class="about-stats">
        <div class="about-stat">
          <span class="stat-number">30+</span>
          <span class="stat-label">Años</span>
        </div>
        <div class="about-stat">
          <span class="stat-number">15K+</span>
          <span class="stat-label">Eventos</span>
        </div>
        <div class="about-stat">
          <span class="stat-number">98%</span>
          <span class="stat-label">Satisfacción</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Related Services - PERSONALIZAR según el tema del artículo -->
  <div class="sidebar-widget widget-services">
    <h3 class="widget-title">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>
      Servicios Relacionados
    </h3>
    <ul class="services-list">
      <li>
        <a href="../renta-de-iluminacion/[SERVICIO].html">
          <span class="service-name">[Nombre del Servicio]</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><polyline points="9 18 15 12 9 6"/></svg>
        </a>
      </li>
      <!-- Agregar 4-5 servicios relacionados -->
    </ul>
  </div>

  <!-- CTA Widget -->
  <div class="sidebar-widget widget-cta">
    <div class="cta-widget-content">
      <div class="cta-widget-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="40" height="40">
          <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
        </svg>
      </div>
      <h3>¿Planeas [tu Evento/tu Boda/tu Fiesta]?</h3>
      <p>Cotiza sin compromiso y descubre cómo podemos iluminar tu celebración.</p>
      <a href="../index.html#cotizar" class="btn btn-primary btn-block">Cotizar Ahora</a>
      <a href="https://wa.me/525530682988" class="btn btn-whatsapp btn-block" target="_blank" rel="noopener">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/></svg>
        WhatsApp
      </a>
    </div>
  </div>

  <!-- Newsletter Widget -->
  <div class="sidebar-widget widget-newsletter">
    <h3 class="widget-title">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
      Newsletter
    </h3>
    <div class="newsletter-widget-content">
      <p>Suscríbete y recibe consejos exclusivos para tu evento.</p>
      <form class="newsletter-form-widget" action="#" method="post">
        <input type="email" placeholder="Tu email" required aria-label="Correo electrónico">
        <button type="submit" class="btn btn-primary">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
        </button>
      </form>
      <span class="newsletter-note">Sin spam. Cancela cuando quieras.</span>
    </div>
  </div>
</aside>
```

### 6.16 Sección de Artículos Relacionados

```html
<!-- RELATED ARTICLES -->
<section class="related-articles">
  <div class="container">
    <header class="section-header">
      <h2>Artículos Relacionados</h2>
      <p>Continúa explorando más contenido sobre iluminación para eventos</p>
    </header>
    <div class="related-grid">
      <!-- Incluir 3 post-cards de artículos relacionados -->
      <article class="post-card">
        <div class="post-card-image">
          <img src="../[RUTA-IMAGEN]" alt="[ALT]" loading="lazy">
        </div>
        <div class="post-card-content">
          <div class="post-meta">
            <span class="post-read-time">[X] min lectura</span>
          </div>
          <h3><a href="[SLUG].html">[Título del Artículo]</a></h3>
          <p>[Descripción breve]</p>
          <a href="[SLUG].html" class="post-link">Leer más <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></a>
        </div>
      </article>
      <!-- Repetir para 3 artículos -->
    </div>
  </div>
</section>
```

### 6.17 CTA Section Final

```html
<!-- CTA SECTION -->
<section class="cta-section" aria-labelledby="cta-title">
  <div class="container">
    <div class="cta-content">
      <h2 id="cta-title">¿Listo para Iluminar tu Evento?</h2>
      <p>Más de 30 años de experiencia nos respaldan. Cotiza sin compromiso y descubre cómo podemos transformar tu celebración.</p>
      <div class="cta-buttons">
        <a href="../index.html#cotizar" class="btn btn-primary btn-lg">Solicitar Cotización</a>
        <a href="https://wa.me/525530682988?text=Hola,%20quiero%20información%20sobre%20sus%20servicios" class="btn btn-whatsapp btn-lg" target="_blank" rel="noopener">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/></svg>
          Contactar por WhatsApp
        </a>
      </div>
    </div>
  </div>
</section>
```

### 6.18 Footer y Scripts

Copiar el footer completo del archivo de referencia (`blog/guia-iluminacion-bodas.html`) y asegurarse de:

- Todos los enlaces usen `../` para rutas relativas
- El botón flotante de WhatsApp incluya mensaje personalizado según el artículo

```html
  <!-- WhatsApp Float Button -->
  <a href="https://wa.me/525530682988?text=Hola,%20leí%20el%20artículo%20sobre%20[TEMA]%20y%20me%20gustaría%20más%20información" class="whatsapp-float" target="_blank" rel="noopener" aria-label="Contactar por WhatsApp">
    <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">...</svg>
  </a>

  <!-- Scripts -->
  <script src="../js/app.js" defer></script>
</body>

</html>
```

---

## Actualizar blog.html

### Paso 1: Agregar Card en la Grid Principal

Localizar la sección `<div class="posts-grid">` en `blog.html` y agregar la nueva card como **primer elemento**:

```html
<!-- Post [N] - [Nombre del Artículo] -->
<article class="post-card">
  <div class="post-card-image">
    <img src="img/[RUTA-IMAGEN]" alt="[ALT]" loading="lazy">
  </div>
  <div class="post-card-content">
    <div class="post-meta">
      <span class="post-read-time">[X] min lectura</span>
      <span class="post-category">[Categoría]</span> <!-- Opcional -->
    </div>
    <h3><a href="blog/[SLUG].html">[Título del Artículo]</a></h3>
    <p>[Descripción breve del artículo - máximo 2 líneas]</p>
    <a href="blog/[SLUG].html" class="post-link">Leer más <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></a>
  </div>
</article>
```

**IMPORTANTE:** Las rutas de imágenes en `blog.html` NO llevan `../` porque está en el root.

### Paso 2: Actualizar Artículo Destacado (Opcional)

Si el nuevo artículo debe ser el destacado, actualizar la sección `featured-post`:

```html
<article class="featured-post">
  <div class="featured-post-image">
    <img src="img/[RUTA-IMAGEN]" alt="[ALT]" loading="lazy">
    <span class="featured-badge">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
      Destacado
    </span>
  </div>
  <div class="featured-post-content">
    <div class="post-meta">
      <span class="post-read-time">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
        [X] min lectura
      </span>
      <span class="post-category">[Categoría]</span>
    </div>
    <h2 id="featured-title"><a href="blog/[SLUG].html">[Título]</a></h2>
    <p>[Descripción extendida del artículo]</p>
    <a href="blog/[SLUG].html" class="btn btn-primary">Leer Artículo</a>
  </div>
</article>
```

### Paso 3: Actualizar Widget "Más Populares" (Sidebar)

Agregar el nuevo artículo si corresponde:

```html
<article class="popular-post">
  <a href="blog/[SLUG].html" class="popular-post-image">
    <img src="img/[RUTA-IMAGEN]" alt="[ALT]" loading="lazy">
    <span class="popular-rank">[N]</span>
  </a>
  <div class="popular-post-content">
    <h4><a href="blog/[SLUG].html">[Título del Artículo]</a></h4>
  </div>
</article>
```

---

## Checklist Final

Antes de publicar, verificar que el artículo cumple con:

### Archivo del Artículo

- [ ] Archivo creado en `/blog/[slug].html`
- [ ] Nombre de archivo en minúsculas con guiones
- [ ] Meta tags SEO completos (title, description, keywords)
- [ ] Open Graph tags configurados
- [ ] Twitter cards configurados
- [ ] Schema.org JSON-LD incluido
- [ ] Canonical URL correcta
- [ ] Todas las rutas usan `../` para salir de `/blog/`
- [ ] Imagen principal con `loading="eager"`
- [ ] Imágenes secundarias con `loading="lazy"`
- [ ] Alt text descriptivo en todas las imágenes
- [ ] Tabla de contenidos con IDs correctos
- [ ] CTA box incluido
- [ ] Botones de compartir incluidos
- [ ] Sidebar con servicios relacionados
- [ ] Artículos relacionados al final
- [ ] Footer completo
- [ ] Botón WhatsApp con mensaje personalizado
- [ ] Script `app.js` incluido

### Contenido

- [ ] Sin fechas específicas (atemporal)
- [ ] Sin precios ni costos
- [ ] Contenido original y útil
- [ ] Mínimo 1000 palabras
- [ ] Al menos 3 imágenes
- [ ] Al menos 3 secciones H2
- [ ] Llamados a la acción claros
- [ ] Ortografía y gramática revisadas

### blog.html

- [ ] Card agregada en posts-grid
- [ ] Enlace correcto a `blog/[slug].html`
- [ ] Imagen sin `../` (rutas desde root)
- [ ] Artículo destacado actualizado (si aplica)
- [ ] Widget populares actualizado (si aplica)

### Pruebas

- [ ] Verificar que el artículo carga correctamente
- [ ] Verificar navegación (header, breadcrumb, links)
- [ ] Verificar imágenes cargan
- [ ] Verificar links internos funcionan
- [ ] Verificar responsividad en móvil
- [ ] Verificar botón WhatsApp funciona

---

## Plantilla Rápida

Para crear un nuevo artículo rápidamente, usar el archivo `blog/guia-iluminacion-bodas.html` como plantilla base y realizar buscar/reemplazar de:

| Buscar | Reemplazar con |
|--------|----------------|
| `Guía Completa de Iluminación para Bodas` | [Nuevo título] |
| `guia-iluminacion-bodas.html` | [nuevo-slug.html] |
| `Guía Profesional` | [Nueva categoría] |
| `12 min` | [Nuevo tiempo] |
| Textos de meta description | [Nueva descripción] |
| Contenido del artículo | [Nuevo contenido] |
| Imágenes y rutas | [Nuevas imágenes] |
| Servicios relacionados | [Nuevos servicios] |

---

## Notas Adicionales

### Imágenes Recomendadas

- **Formato:** `.avif` (preferido) o `.webp`
- **Imagen hero:** 1200x600px mínimo
- **Imágenes de contenido:** 800x450px mínimo
- **Compresión:** Calidad 80-85%

### Palabras Clave por Tema

| Tema | Keywords sugeridas |
|------|-------------------|
| Bodas | iluminación bodas, luces boda, guirnaldas boda, decoración luminosa |
| XV Años | iluminación xv años, luces quinceañera, decoración quinceaños |
| Corporativos | iluminación eventos corporativos, luces empresariales |
| Fiestas Neón | luz negra fiesta, fiesta neón, decoración fluorescente |
| Guirnaldas | tipos guirnaldas, guirnaldas edison, fairy lights |

---

**Última actualización:** Diciembre 2024

**Referencia:** `/blog/guia-iluminacion-bodas.html`
