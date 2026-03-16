# GUÍA COMPLETA PARA CREAR PÁGINAS DE ZONAS DE COBERTURA

## Descripción General

Este documento es una guía paso a paso para crear nuevas páginas de zonas de cobertura para el sitio rentadeiluminacion.com. Cada zona tiene una página individual con contenido optimizado para SEO, servicios disponibles, venues locales y testimonios.

---

## ÍNDICE

1. [Estructura de Archivos](#1-estructura-de-archivos)
2. [Checklist de Creación](#2-checklist-de-creación)
3. [Plantilla HTML Completa](#3-plantilla-html-completa)
4. [Secciones Detalladas](#4-secciones-detalladas)
5. [Variables a Personalizar](#5-variables-a-personalizar)
6. [Imágenes Requeridas](#6-imágenes-requeridas)
7. [Integración en el Sitio](#7-integración-en-el-sitio)
8. [Ejemplos de Contenido](#8-ejemplos-de-contenido)

---

## 1. ESTRUCTURA DE ARCHIVOS

```
rentadeiluminacion/
├── zonas-de-cobertura.html          # Página principal de zonas
├── zonas-de-cobertura/
│   ├── polanco.html                 # Ejemplo de zona
│   ├── santa-fe.html
│   ├── coyoacan.html
│   ├── [nueva-zona].html            # Nueva zona a crear
│   └── ...
├── img/
│   └── zonas/
│       ├── [nueva-zona]-eventos-iluminacion-400w.avif
│       └── [nueva-zona]-eventos-iluminacion-800w.avif
```

---

## 2. CHECKLIST DE CREACIÓN

### Antes de empezar:
- [ ] Definir nombre de la zona (ej: "Tlalpan", "Naucalpan")
- [ ] Definir slug/URL (ej: "tlalpan", "naucalpan")
- [ ] Investigar venues populares de la zona
- [ ] Definir tipo de badge (premium, corporate, romantic, etc.)
- [ ] Preparar imagen de zona (400w y 800w en formato .avif)

### Durante la creación:
- [ ] Crear archivo HTML en `/zonas-de-cobertura/[zona].html`
- [ ] Personalizar todas las variables (ver sección 5)
- [ ] Agregar venues específicos de la zona
- [ ] Crear testimonios relevantes
- [ ] Verificar todos los enlaces relativos (`../`)

### Después de crear:
- [ ] Agregar card en `zonas-de-cobertura.html`
- [ ] Agregar link en footer de `zonas-de-cobertura.html`
- [ ] Agregar en "Otras zonas" de páginas cercanas
- [ ] Verificar en navegador que funciona
- [ ] Commit y push

---

## 3. PLANTILLA HTML COMPLETA

### 3.1 HEAD - Meta Tags y SEO

```html
<!DOCTYPE html>
<html lang="es-MX">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <!-- SEO Meta Tags -->
  <title>Renta de Iluminación en [ZONA] | [TIPO_EVENTO] | REDEIL</title>
  <meta name="description" content="Renta de iluminación para eventos en [ZONA]. [VENUES_PRINCIPALES]. Instalación incluida.">
  <meta name="keywords" content="renta iluminacion [ZONA], luces eventos [ZONA], iluminacion bodas [ZONA], eventos corporativos [ZONA], [KEYWORDS_ADICIONALES]">
  <meta name="author" content="REDEIL">
  <meta name="robots" content="index, follow">
  <link rel="canonical" href="https://rentadeiluminacion.com/zonas-de-cobertura/[SLUG].html">

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://rentadeiluminacion.com/zonas-de-cobertura/[SLUG].html">
  <meta property="og:title" content="Renta de Iluminación en [ZONA] | [TIPO_EVENTO] | REDEIL">
  <meta property="og:description" content="Iluminación profesional para eventos en [ZONA]. [DESCRIPCION_BREVE]. Transporte e instalación incluidos.">
  <meta property="og:image" content="https://rentadeiluminacion.com/img/zonas/[SLUG]-eventos-iluminacion.avif">
  <meta property="og:locale" content="es_MX">
  <meta property="og:site_name" content="REDEIL - Renta de Iluminación">

  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Renta de Iluminación en [ZONA] | REDEIL">
  <meta name="twitter:description" content="Iluminación profesional para eventos en [ZONA]. Transporte e instalación incluidos.">
  <meta name="twitter:image" content="https://rentadeiluminacion.com/img/zonas/[SLUG]-eventos-iluminacion.avif">

  <!-- Favicon -->
  <link rel="icon" href="/favicon.ico" sizes="any">
  <link rel="icon" href="/icon.svg" type="image/svg+xml">
  <link rel="apple-touch-icon" href="../icon.png">
  <link rel="manifest" href="../site.webmanifest">
  <meta name="theme-color" content="#1a1a2e">

  <!-- Fonts -->
  <link rel="preload" href="../fonts/montserrat-700.woff2" as="font" type="font/woff2" crossorigin>
  <link rel="preload" href="../fonts/montserrat-400.woff2" as="font" type="font/woff2" crossorigin>
  <link rel="preload" href="../fonts/open-sans-400.woff2" as="font" type="font/woff2" crossorigin>
  <link rel="stylesheet" href="../css/fonts.css">

  <!-- Critical CSS inline (copiar del archivo existente) -->
  <style>/* ... CSS crítico ... */</style>

  <!-- Full CSS -->
  <link rel="stylesheet" href="../css/style.min.css" media="print" onload="this.media='all'">
  <noscript><link rel="stylesheet" href="../css/style.min.css"></noscript>

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
            "addressRegion": "[ESTADO]",
            "addressCountry": "MX"
          }
        },
        "areaServed": {
          "@type": "Place",
          "name": "[ZONA], [ESTADO]",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "[ZONA]",
            "addressRegion": "[ESTADO]",
            "addressCountry": "MX"
          }
        },
        "description": "[DESCRIPCION_SERVICIO]"
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
            "item": "https://rentadeiluminacion.com/zonas-de-cobertura/[SLUG].html"
          }
        ]
      }
    ]
  }
  </script>
</head>
```

### 3.2 HEADER (copiar exactamente)

```html
<body>
  <a href="#main-content" class="skip-link">Saltar al contenido principal</a>

  <header class="site-header" role="banner">
    <div class="container">
      <div class="header-inner">
        <a href="https://rentadeiluminacion.com/" class="logo" aria-label="REDEIL - Inicio">
          <img src="../img/logo-redeil.avif" alt="REDEIL - Renta de Iluminación" width="400" height="125" loading="eager" decoding="async">
        </a>

        <nav class="main-nav" role="navigation" aria-label="Navegación principal">
          <button class="nav-toggle" aria-expanded="false" aria-controls="main-menu" aria-label="Abrir menú">
            <span class="hamburger"></span>
          </button>

          <ul id="main-menu" class="nav-menu">
            <li><a href="https://rentadeiluminacion.com/">Inicio</a></li>
            <li class="has-submenu">
              <a href="../servicios.html">Servicios</a>
              <ul class="submenu">
                <li><a href="../renta-de-iluminacion/iluminacion.html">Iluminación</a></li>
                <li><a href="../renta-de-bocinas/bocinas.html">Bocinas</a></li>
                <li><a href="../equipo-para-eventos/equipo-para-eventos.html">Equipo para Eventos</a></li>
              </ul>
            </li>
            <li><a href="../zonas-de-cobertura.html">Cobertura</a></li>
            <li><a href="../nosotros.html">Nosotros</a></li>
            <li><a href="../contacto.html">Contacto</a></li>
          </ul>
        </nav>

        <a href="../contacto.html" class="btn btn-primary header-cta">Cotiza Gratis</a>
      </div>
    </div>
  </header>
```

### 3.3 BREADCRUMB

```html
  <section class="breadcrumb-section" aria-label="Breadcrumb">
    <div class="container">
      <nav class="breadcrumb">
        <ol itemscope itemtype="https://schema.org/BreadcrumbList">
          <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
            <svg class="breadcrumb-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
            <a itemprop="item" href="https://rentadeiluminacion.com/"><span itemprop="name">Inicio</span></a>
            <meta itemprop="position" content="1" />
          </li>
          <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
            <a itemprop="item" href="../zonas-de-cobertura.html"><span itemprop="name">Zonas de Cobertura</span></a>
            <meta itemprop="position" content="2" />
          </li>
          <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
            <span itemprop="name">[ZONA]</span>
            <meta itemprop="position" content="3" />
          </li>
        </ol>
      </nav>
    </div>
  </section>
```

---

## 4. SECCIONES DETALLADAS

### 4.1 HERO SECTION

```html
<main id="main-content" role="main">
  <section class="hero hero-two-columns" aria-labelledby="hero-title">
    <div class="hero-background" style="background-color: var(--color-secondary);"></div>

    <div class="container">
      <div class="hero-grid">
        <!-- Columna 1: Título y CTAs -->
        <div class="hero-content">
          <h1 id="hero-title">Renta de Iluminación en [ZONA]</h1>
          <p class="hero-subtitle">[SUBTITULO_HERO - descripción atractiva de la zona]</p>

          <div class="hero-ctas">
            <a href="../contacto.html" class="btn btn-primary btn-lg">Cotiza tu Evento</a>
            <a href="https://wa.me/525530682988?text=Hola,%20quiero%20cotizar%20iluminacion%20para%20un%20evento%20en%20[ZONA]" class="btn btn-whatsapp btn-lg" target="_blank" rel="noopener noreferrer">
              <svg class="icon-whatsapp" aria-hidden="true" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              WhatsApp
            </a>
          </div>
        </div>

        <!-- Columna 2: Introducción Marketing SEO -->
        <div class="hero-intro">
          <p>[PARRAFO_1 - Descripción de la zona, por qué es especial, qué tipo de eventos se hacen]</p>
          <p>[PARRAFO_2 - Servicios incluidos, experiencia, por qué elegir REDEIL]</p>
        </div>
      </div>
    </div>
  </section>
```

### 4.2 ESTADÍSTICAS

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
            <div class="stat-number-enhanced">[NUMERO]+</div>
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
            <div class="stat-number-enhanced">[NUMERO]+</div>
            <div class="stat-label-enhanced">[TIPO_VENUES]</div>
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
            <div class="stat-number-enhanced">[SI/NO]</div>
            <div class="stat-label-enhanced">Sucursal Local</div>
            <div class="stat-sublabel">[DESCRIPCION]</div>
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
            <div class="stat-number-enhanced">[TIEMPO]</div>
            <div class="stat-label-enhanced">Respuesta Promedio</div>
            <div class="stat-sublabel">Cotizaciones rápidas</div>
          </div>
        </div>
      </div>
    </div>
  </section>
```

### 4.3 CARACTERÍSTICAS DE LA ZONA

```html
  <section class="zona-features-section" aria-label="Características del servicio">
    <div class="container">
      <div class="zona-features-grid">
        <div class="zona-feature-card">
          <div class="zona-feature-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
          </div>
          <h3>[TITULO_CARACTERISTICA_1]</h3>
          <p>[DESCRIPCION_1]</p>
        </div>
        <div class="zona-feature-card">
          <div class="zona-feature-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          </div>
          <h3>[TITULO_CARACTERISTICA_2]</h3>
          <p>[DESCRIPCION_2]</p>
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
          <h3>[TITULO_CARACTERISTICA_4]</h3>
          <p>[DESCRIPCION_4]</p>
        </div>
      </div>
    </div>
  </section>
```

### 4.4 VENUES DE LA ZONA

```html
  <section class="zona-venues-section" aria-labelledby="venues-title">
    <div class="container">
      <header class="section-header">
        <span class="section-badge">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
          [BADGE_VENUES]
        </span>
        <h2 id="venues-title">Lugares que Iluminamos en [ZONA]</h2>
        <p>Experiencia comprobada en los venues más [ADJETIVO] de la zona</p>
      </header>

      <div class="venues-grid">
        <!-- VENUE TIPO 1 (destacado) -->
        <article class="venue-card venue-card-featured">
          <div class="venue-card-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">[ICONO_SVG]</svg>
          </div>
          <div class="venue-card-content">
            <h3>[CATEGORIA_1]</h3>
            <p>[DESCRIPCION_CATEGORIA]</p>
            <ul class="venue-list">
              <li>[VENUE_1]</li>
              <li>[VENUE_2]</li>
              <li>[VENUE_3]</li>
              <li>[VENUE_4]</li>
              <li>[VENUE_5]</li>
            </ul>
          </div>
        </article>

        <!-- VENUE TIPO 2 -->
        <article class="venue-card">
          <div class="venue-card-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">[ICONO_SVG]</svg>
          </div>
          <div class="venue-card-content">
            <h3>[CATEGORIA_2]</h3>
            <p>[DESCRIPCION_CATEGORIA]</p>
            <ul class="venue-list">
              <li>[VENUE_1]</li>
              <li>[VENUE_2]</li>
              <li>[VENUE_3]</li>
            </ul>
          </div>
        </article>

        <!-- Repetir para más categorías de venues... -->
      </div>
    </div>
  </section>
```

### 4.5 TIPOS DE EVENTOS

```html
  <section class="zona-eventos-section bg-light" aria-labelledby="eventos-title">
    <div class="container">
      <header class="section-header">
        <span class="section-badge">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
          Eventos [ADJETIVO]
        </span>
        <h2 id="eventos-title">Tipos de Eventos que Iluminamos</h2>
        <p>Experiencia en todo tipo de celebraciones y eventos</p>
      </header>

      <div class="eventos-grid">
        <article class="evento-card">
          <div class="evento-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
          </div>
          <h3>Bodas</h3>
          <p>[DESCRIPCION_BODAS_ZONA]</p>
        </article>

        <article class="evento-card">
          <div class="evento-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
          </div>
          <h3>Eventos Corporativos</h3>
          <p>[DESCRIPCION_CORPORATIVOS_ZONA]</p>
        </article>

        <article class="evento-card">
          <div class="evento-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
          </div>
          <h3>XV Años</h3>
          <p>[DESCRIPCION_XV_ZONA]</p>
        </article>

        <article class="evento-card">
          <div class="evento-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>
          </div>
          <h3>Fiestas</h3>
          <p>[DESCRIPCION_FIESTAS_ZONA]</p>
        </article>

        <!-- Agregar más tipos de eventos según la zona -->
      </div>
    </div>
  </section>
```

### 4.6 SECCIÓN DE SERVICIOS (Iluminación, Bocinas, Equipo)

> **NOTA:** Copiar las secciones de servicios del archivo `polanco.html` líneas 513-911. Solo cambiar las referencias a la zona en los textos alt de las imágenes.

### 4.7 TESTIMONIOS

```html
  <section class="testimonials-section" aria-labelledby="testimonios-title">
    <div class="container">
      <header class="section-header">
        <span class="section-badge">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
          Testimonios
        </span>
        <h2 id="testimonios-title">Lo Que Dicen Nuestros Clientes</h2>
        <p>Experiencias reales de eventos en [ZONA]</p>
      </header>

      <div class="testimonials-grid">
        <article class="testimonial-card">
          <div class="testimonial-content">
            <div class="testimonial-stars">
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            </div>
            <blockquote>
              "[TESTIMONIO_1 - incluir venue específico de la zona]"
            </blockquote>
          </div>
          <div class="testimonial-author">
            <div class="testimonial-avatar">[INICIALES]</div>
            <div class="testimonial-info">
              <strong>[NOMBRE]</strong>
              <span>[TIPO_EVENTO] en [VENUE]</span>
            </div>
          </div>
        </article>

        <!-- Repetir para 2-3 testimonios más -->
      </div>
    </div>
  </section>
```

### 4.8 SUCURSAL (opcional, si hay sucursal en la zona)

```html
  <section class="zona-sucursal-section" aria-labelledby="sucursal-title">
    <div class="container">
      <div class="sucursal-card">
        <div class="sucursal-content">
          <span class="sucursal-badge">Sucursal [ZONA]</span>
          <h2 id="sucursal-title">Atención Local en [ZONA]</h2>
          <p>[DESCRIPCION_SUCURSAL]</p>

          <div class="sucursal-info">
            <div class="sucursal-info-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="24" height="24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              <div>
                <strong>Dirección</strong>
                <span>[DIRECCION_COMPLETA]</span>
              </div>
            </div>
            <div class="sucursal-info-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="24" height="24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              <div>
                <strong>Teléfono</strong>
                <span>55 3068 2988</span>
              </div>
            </div>
            <div class="sucursal-info-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="24" height="24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              <div>
                <strong>Horario</strong>
                <span>Lun - Dom: 8:00 - 18:00</span>
              </div>
            </div>
          </div>

          <div class="sucursal-ctas">
            <a href="https://wa.me/525530682988?text=Hola,%20contacto%20desde%20la%20página%20de%20[ZONA]" class="btn btn-whatsapp" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">...</svg>
              WhatsApp
            </a>
            <a href="https://maps.google.com/?q=[DIRECCION_ENCODED]" class="btn btn-outline-light" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><polygon points="3 11 22 2 13 21 11 13 3 11"/></svg>
              Cómo Llegar
            </a>
          </div>
        </div>
        <div class="sucursal-map">
          <iframe
            src="[GOOGLE_MAPS_EMBED_URL]"
            width="100%"
            height="100%"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="Ubicación sucursal [ZONA] REDEIL">
          </iframe>
        </div>
      </div>
    </div>
  </section>
```

### 4.9 CTA FINAL

```html
  <section class="cta-section" aria-labelledby="cta-title">
    <div class="container">
      <div class="cta-content">
        <h2 id="cta-title">¿Tienes un Evento en [ZONA]?</h2>
        <p>Cotiza sin compromiso y recibe asesoría personalizada de nuestros expertos. Respondemos en menos de 1 hora y te enviamos una propuesta adaptada a tu venue y necesidades.</p>
        <div class="cta-buttons">
          <a href="../contacto.html" class="btn btn-primary btn-lg">Solicitar Cotización</a>
          <a href="https://wa.me/525530682988?text=Hola,%20quiero%20cotizar%20iluminacion%20para%20un%20evento%20en%20[ZONA]" class="btn btn-whatsapp btn-lg" target="_blank" rel="noopener noreferrer">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">...</svg>
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  </section>
```

### 4.10 OTRAS ZONAS

```html
  <section class="otras-zonas-section bg-light" aria-labelledby="otras-zonas-title">
    <div class="container">
      <header class="section-header">
        <h2 id="otras-zonas-title">Otras Zonas de Cobertura</h2>
        <p>También brindamos servicio en estas zonas cercanas</p>
      </header>

      <div class="otras-zonas-grid">
        <a href="[zona-cercana-1].html" class="otra-zona-card">
          <span class="otra-zona-name">[Zona Cercana 1]</span>
          <span class="otra-zona-arrow">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </span>
        </a>
        <a href="[zona-cercana-2].html" class="otra-zona-card">
          <span class="otra-zona-name">[Zona Cercana 2]</span>
          <span class="otra-zona-arrow">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </span>
        </a>
        <a href="[zona-cercana-3].html" class="otra-zona-card">
          <span class="otra-zona-name">[Zona Cercana 3]</span>
          <span class="otra-zona-arrow">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </span>
        </a>
        <a href="../zonas-de-cobertura.html" class="otra-zona-card otra-zona-card-all">
          <span class="otra-zona-name">Ver Todas las Zonas</span>
          <span class="otra-zona-arrow">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </span>
        </a>
      </div>
    </div>
  </section>
</main>
```

### 4.11 FOOTER

> **NOTA:** Copiar el footer completo del archivo `polanco.html` líneas 1122-1270. No requiere modificaciones.

### 4.12 SCRIPTS Y CIERRE

```html
  <!-- WhatsApp Float Button -->
  <a href="https://wa.me/525530682988" class="whatsapp-float" target="_blank" rel="noopener noreferrer" aria-label="Contactar por WhatsApp">
    <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32">...</svg>
  </a>

  <!-- JavaScript -->
  <script src="../js/app.min.js" defer></script>
</body>
</html>
```

---

## 5. VARIABLES A PERSONALIZAR

### Variables principales:

| Variable | Descripción | Ejemplo |
|----------|-------------|---------|
| `[ZONA]` | Nombre completo de la zona | "Polanco", "Tlalpan" |
| `[SLUG]` | URL amigable (minúsculas, guiones) | "polanco", "tlalpan" |
| `[ESTADO]` | Estado o región | "CDMX", "Estado de México" |
| `[TIPO_EVENTO]` | Tipo principal de eventos | "Eventos Exclusivos", "Bodas en Jardín" |

### Variables de contenido:

| Variable | Descripción |
|----------|-------------|
| `[SUBTITULO_HERO]` | Frase atractiva sobre la zona |
| `[PARRAFO_1]` | Descripción de la zona y sus características |
| `[PARRAFO_2]` | Servicios y por qué elegir REDEIL |
| `[VENUES_PRINCIPALES]` | Lista de venues conocidos |
| `[DESCRIPCION_SERVICIO]` | Para Schema.org |

### Estadísticas:

| Variable | Descripción |
|----------|-------------|
| `[NUMERO_EVENTOS]` | Cantidad aproximada de eventos realizados |
| `[NUMERO_VENUES]` | Cantidad de venues donde se ha trabajado |
| `[TIEMPO_RESPUESTA]` | "1hr", "2hr", etc. |

---

## 6. IMÁGENES REQUERIDAS

### Imagen principal de la zona:

```
img/zonas/[SLUG]-eventos-iluminacion-400w.avif
img/zonas/[SLUG]-eventos-iluminacion-800w.avif
```

**Requisitos:**
- Formato: AVIF (preferido) o WebP
- Tamaños: 400w y 800w
- Dimensiones recomendadas: 800x600 px para 800w
- Contenido: Imagen representativa de iluminación en un evento de la zona

---

## 7. INTEGRACIÓN EN EL SITIO

### 7.1 Agregar card en zonas-de-cobertura.html

Buscar la sección `zones-featured-grid` correspondiente (CDMX o Edomex) y agregar:

```html
<!-- [ZONA] -->
<article class="zone-featured-card">
  <div class="zone-featured-image">
    <picture>
      <source srcset="img/zonas/[SLUG]-eventos-iluminacion-400w.avif 1x, img/zonas/[SLUG]-eventos-iluminacion-800w.avif 2x" type="image/avif">
      <source srcset="img/zonas/[SLUG]-eventos-iluminacion-400w.avif 1x, img/zonas/[SLUG]-eventos-iluminacion-800w.avif 2x" type="image/webp">
      <img src="img/zonas/[SLUG]-eventos-iluminacion-400w.avif" alt="Iluminación para eventos en [ZONA]" loading="lazy" width="400" height="300" srcset="img/zonas/[SLUG]-eventos-iluminacion-400w.avif 1x, img/zonas/[SLUG]-eventos-iluminacion-800w.avif 2x" sizes="(max-width: 992px) 100vw, (max-width: 1200px) 33vw, 25vw" decoding="async">
    </picture>
    <div class="zone-featured-overlay"></div>
    <span class="zone-featured-badge zone-badge-[TIPO]">[BADGE_TEXT]</span>
  </div>
  <div class="zone-featured-content">
    <h3>[ZONA]</h3>
    <p>[DESCRIPCION_BREVE]</p>
    <ul class="zone-featured-highlights">
      <li>
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
        [HIGHLIGHT_1]
      </li>
      <li>
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
        [HIGHLIGHT_2]
      </li>
      <li>
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
        [HIGHLIGHT_3]
      </li>
    </ul>
    <a href="zonas-de-cobertura/[SLUG].html" class="btn btn-primary">
      Ver [ZONA]
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
    </a>
  </div>
</article>
```

### 7.2 Tipos de badges disponibles:

| Clase | Color | Uso |
|-------|-------|-----|
| `zone-badge-premium` | Dorado | Zonas exclusivas (Polanco, Lomas) |
| `zone-badge-corporate` | Azul | Zonas empresariales (Santa Fe, WTC) |
| `zone-badge-romantic` | Rosa | Zonas para bodas (Coyoacán, Xochimilco) |
| `zone-badge-trendy` | Morado | Zonas modernas (Condesa, Roma) |
| `zone-badge-exclusive` | Teal | Zonas de alto nivel (Pedregal) |
| `zone-badge-popular` | Naranja | Zonas populares (Del Valle, Iztapalapa) |
| `zone-badge-nature` | Verde | Zonas naturales (Tlalpan, Bosques) |
| `zone-badge-industrial` | Gris | Zonas industriales (Azcapotzalco) |
| `zone-badge-historic` | Ámbar | Zonas históricas (Centro, Cuauhtémoc) |
| `zone-badge-featured` | Verde esmeralda | Zonas destacadas |

### 7.3 Agregar en footer de zonas-de-cobertura.html

Buscar la sección de zonas en el footer y agregar el link:

```html
<a href="zonas-de-cobertura/[SLUG].html">[ZONA]</a>
```

---

## 8. EJEMPLOS DE CONTENIDO

### Ejemplo para zona CDMX - Tlalpan:

```
ZONA: Tlalpan
SLUG: tlalpan
ESTADO: CDMX
TIPO_BADGE: nature
BADGE_TEXT: Natural

SUBTITULO_HERO: Iluminación profesional para eventos rodeados de naturaleza en el sur de la Ciudad de México

PARRAFO_1: Tlalpan es una de las alcaldías más verdes de la Ciudad de México, con hermosos bosques, jardines y espacios naturales perfectos para eventos al aire libre. En REDEIL ofrecemos servicios de iluminación profesional para bodas en jardín, eventos corporativos en quintas y celebraciones familiares en este entorno único.

PARRAFO_2: Conocemos perfectamente las haciendas, quintas y jardines de Tlalpan y sus requerimientos específicos de iluminación. Todos nuestros servicios incluyen transporte, instalación profesional y desmontaje. Iluminamos desde bodas íntimas hasta grandes celebraciones en los venues más exclusivos de la zona.

VENUES:
- Haciendas: Hacienda de Tlalpan, Quinta Real, Hacienda San Fernando
- Jardines: Bosque de Tlalpan, Jardín Botánico, Parque Ecológico
- Salones: Centro de Tlalpan, Salones históricos
- Restaurantes: La Casona de Tlalpan, restaurantes coloniales

ESTADISTICAS:
- 150+ eventos
- 15+ venues
- Sin sucursal local (cobertura desde Nápoles)
- 2hr respuesta

TESTIMONIOS:
- "Nuestra boda en la Hacienda de Tlalpan fue mágica gracias a la iluminación. Las guirnaldas en los árboles crearon un ambiente de ensueño." - Ana y Pedro, Boda
```

### Ejemplo para zona Edomex - Metepec:

```
ZONA: Metepec
SLUG: metepec
ESTADO: Estado de México
TIPO_BADGE: romantic
BADGE_TEXT: Romántico

SUBTITULO_HERO: Iluminación profesional para bodas en las haciendas más hermosas del Valle de Toluca

VENUES:
- Haciendas: Hacienda Villejé, Ex Hacienda San Carlos, Hacienda La Gavia
- Jardines: Jardines de Metepec, El Rincón Colonial
- Salones: Salón de eventos La Marquesa, Centro de Convenciones

ESTADISTICAS:
- 80+ eventos
- 10+ haciendas
- Sin sucursal local (cobertura desde Toluca)
- 3hr respuesta
```

---

## NOTAS FINALES

1. **Consistencia:** Mantener el mismo tono y estilo en todas las páginas de zonas.

2. **SEO:** Cada zona debe tener contenido único, no copiar/pegar de otras zonas.

3. **Imágenes:** Usar imágenes representativas de cada zona, no repetir entre zonas.

4. **Testimonios:** Crear testimonios creíbles con venues reales de la zona.

5. **Venues:** Investigar venues reales y populares de cada zona.

6. **Enlaces:** Verificar que todos los enlaces relativos (`../`) funcionen correctamente.

7. **Testing:** Probar la página en móvil y escritorio antes de publicar.

---

**Documento creado para REDEIL - Renta de Iluminación**
**Última actualización: Enero 2026**
