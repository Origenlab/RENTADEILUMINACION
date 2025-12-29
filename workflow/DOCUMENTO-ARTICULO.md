# Arquitectura de Articulos - Paginas Amarillas MX

Documentacion completa para recrear articulos con el mismo diseno, estructura y estilos.

---

## INDICE

1. [Estructura General](#1-estructura-general)
2. [HEAD - Meta Tags y Schema](#2-head---meta-tags-y-schema)
3. [Header y Navegacion](#3-header-y-navegacion)
4. [Breadcrumbs](#4-breadcrumbs)
5. [Hero Section (Dos Columnas)](#5-hero-section-dos-columnas)
6. [Layout del Articulo](#6-layout-del-articulo)
7. [Tabla de Contenidos Inline](#7-tabla-de-contenidos-inline)
8. [Contenido del Articulo](#8-contenido-del-articulo)
9. [Modulos de Interes](#9-modulos-de-interes)
10. [Galeria de Imagenes](#10-galeria-de-imagenes)
11. [Seccion FAQ Accordion](#11-seccion-faq-accordion)
12. [Tags Relacionados](#12-tags-relacionados)
13. [CTA Final](#13-cta-final)
14. [Articulos Relacionados](#14-articulos-relacionados)
15. [Sidebar](#15-sidebar)
16. [Footer](#16-footer)
17. [JavaScript](#17-javascript)
18. [Variables CSS](#18-variables-css)

---

## 1. ESTRUCTURA GENERAL

```
<!DOCTYPE html>
<html lang="es">
<head>
    [META TAGS + SCHEMA.ORG + STYLES]
</head>
<body>
    <header class="header">...</header>

    <section class="breadcrumbs">...</section>

    <section class="blog-hero-section">...</section>

    <main class="container">
        <div class="blog-article-layout">
            <article class="blog-article">...</article>
            <aside class="blog-article-sidebar">...</aside>
        </div>
    </main>

    <footer class="footer">...</footer>

    [SCRIPTS]
</body>
</html>
```

### Archivos CSS Requeridos
```html
<link rel="stylesheet" href="../../css/style.css">
```
Los estilos especificos del articulo van en un `<style>` inline en el HEAD.

---

## 2. HEAD - META TAGS Y SCHEMA

### 2.1 Meta Tags Basicos
```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="[DESCRIPCION SEO - 150-160 caracteres]">
<meta name="keywords" content="[KEYWORD1], [KEYWORD2], [KEYWORD3], [KEYWORD4], [KEYWORD5]">
<meta name="author" content="Paginas Amarillas Mexico">
<meta name="robots" content="index, follow">
<title>[TITULO] | Paginas Amarillas</title>
<link rel="canonical" href="https://paginasamarillas.mx/blog/[CATEGORIA]/[SLUG].html">
```

### 2.2 Open Graph (Facebook)
```html
<meta property="og:type" content="article">
<meta property="og:title" content="[TITULO]">
<meta property="og:description" content="[DESCRIPCION]">
<meta property="og:image" content="https://paginasamarillas.mx/img/[RUTA-IMAGEN]">
<meta property="og:url" content="https://paginasamarillas.mx/blog/[CATEGORIA]/[SLUG].html">
<meta property="og:site_name" content="Paginas Amarillas Mexico">
<meta property="og:locale" content="es_MX">
```

### 2.3 Twitter Cards
```html
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="[TITULO]">
<meta name="twitter:description" content="[DESCRIPCION]">
<meta name="twitter:image" content="https://paginasamarillas.mx/img/[RUTA-IMAGEN]">
```

### 2.4 Schema.org - Article
```html
<script type="application/ld+json">
{
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "[TITULO]",
    "description": "[DESCRIPCION]",
    "image": "https://paginasamarillas.mx/img/[RUTA-IMAGEN]",
    "author": {
        "@type": "Organization",
        "name": "Paginas Amarillas Mexico",
        "url": "https://paginasamarillas.mx"
    },
    "publisher": {
        "@type": "Organization",
        "name": "Paginas Amarillas Mexico",
        "logo": {
            "@type": "ImageObject",
            "url": "https://paginasamarillas.mx/img/logo.svg"
        }
    },
    "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://paginasamarillas.mx/blog/[CATEGORIA]/[SLUG].html"
    },
    "keywords": "[KEYWORDS]",
    "articleSection": "[CATEGORIA]",
    "wordCount": [NUMERO],
    "timeRequired": "PT[MINUTOS]M",
    "inLanguage": "es-MX"
}
</script>
```

### 2.5 Schema.org - FAQPage
```html
<script type="application/ld+json">
{
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "[PREGUNTA 1]",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "[RESPUESTA 1]"
            }
        },
        {
            "@type": "Question",
            "name": "[PREGUNTA 2]",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "[RESPUESTA 2]"
            }
        }
        // ... mas preguntas (5 total recomendado)
    ]
}
</script>
```

---

## 3. HEADER Y NAVEGACION

```html
<header class="header" id="header">
    <div class="container">
        <nav class="navbar">
            <div class="logo">
                <a href="/" aria-label="Paginas Amarillas Mexico - Inicio">
                    <span class="logo-text">Paginas<span class="logo-highlight">Amarillas</span>.mx</span>
                </a>
            </div>
            <button class="menu-toggle" id="menuToggle" aria-label="Abrir menu" aria-expanded="false">
                <span class="hamburger"></span>
            </button>
            <div class="nav-menu" id="navMenu">
                <ul class="nav-list">
                    <li><a href="/">Inicio</a></li>
                    <li><a href="/categorias.html">Categorias</a></li>
                    <li><a href="/blog/">Blog</a></li>
                </ul>
                <div class="nav-actions">
                    <a href="#login" class="btn btn-ghost">Iniciar Sesion</a>
                    <a href="#registrar" class="btn btn-primary">Registrar Negocio</a>
                </div>
            </div>
        </nav>
    </div>
</header>
```

---

## 4. BREADCRUMBS

```html
<section class="breadcrumbs">
    <div class="container">
        <nav aria-label="Breadcrumb">
            <ol class="breadcrumb-list">
                <li><a href="/">Inicio</a></li>
                <li><a href="../index.html">Blog</a></li>
                <li><a href="../categorias/[CATEGORIA].html">[NOMBRE CATEGORIA]</a></li>
                <li aria-current="page">[TITULO ARTICULO]</li>
            </ol>
        </nav>
    </div>
</section>
```

---

## 5. HERO SECTION (DOS COLUMNAS)

### 5.1 Estructura HTML
```html
<section class="blog-hero-section">
    <div class="container">
        <div class="blog-hero-grid">
            <!-- Columna Izquierda: Imagen -->
            <div class="blog-hero-image">
                <img src="../../img/[RUTA-IMAGEN]"
                     alt="[ALT DESCRIPTIVO]"
                     loading="eager">
            </div>

            <!-- Columna Derecha: Contenido -->
            <div class="blog-hero-content">
                <span class="category-badge">[CATEGORIA]</span>
                <h1 class="hero-title">[TITULO DEL ARTICULO]</h1>
                <p class="hero-hook">[PARRAFO ENGANCHADOR - 60-80 palabras]</p>
                <p class="hero-value">[PROPUESTA DE VALOR - que obtendra el lector]</p>
                <div class="hero-meta">
                    <span>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="vertical-align: middle; margin-right: 4px;">
                            <circle cx="12" cy="12" r="10"/>
                            <polyline points="12 6 12 12 16 14"/>
                        </svg>
                        [X] min lectura
                    </span>
                    <span>|</span>
                    <span>[CATEGORIA]</span>
                </div>
            </div>
        </div>
    </div>
</section>
```

### 5.2 CSS del Hero
```css
.blog-hero-section {
    background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
    padding: 3rem 0;
    margin-bottom: 2rem;
}

.blog-hero-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    align-items: center;
}

.blog-hero-image {
    position: relative;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 15px 40px rgba(0,0,0,0.3);
}

.blog-hero-image img {
    width: 100%;
    height: 350px;
    object-fit: cover;
}

.blog-hero-content {
    color: #fff;
}

.category-badge {
    display: inline-block;
    background: #f59e0b;
    color: #000;
    padding: 0.4rem 0.8rem;
    border-radius: 50px;
    font-size: 0.8rem;
    font-weight: 600;
    text-transform: uppercase;
    margin-bottom: 1rem;
}

.hero-title {
    font-size: 2.2rem;
    font-weight: 800;
    line-height: 1.2;
    margin-bottom: 1rem;
    color: #fff;
}

.hero-hook {
    font-size: 1.1rem;
    line-height: 1.6;
    color: rgba(255,255,255,0.9);
    margin-bottom: 0.8rem;
}

.hero-value {
    font-size: 1rem;
    line-height: 1.6;
    color: rgba(255,255,255,0.7);
    margin-bottom: 1.5rem;
}

.hero-meta {
    display: flex;
    gap: 1rem;
    color: rgba(255,255,255,0.6);
    font-size: 0.9rem;
}

@media (max-width: 768px) {
    .blog-hero-grid { grid-template-columns: 1fr; }
    .hero-title { font-size: 1.8rem; }
}
```

---

## 6. LAYOUT DEL ARTICULO

### 6.1 Estructura Principal
```html
<main class="container">
    <div class="blog-article-layout">
        <article class="blog-article">
            <!-- Tabla de contenidos inline -->
            <nav class="blog-article-toc-inline">...</nav>

            <!-- Contenido del articulo -->
            <div class="blog-article-content">...</div>

            <!-- FAQ Section -->
            <section class="faq-section">...</section>

            <!-- Tags -->
            <div class="blog-article-tags">...</div>

            <!-- CTA Final -->
            <div class="article-cta-final">...</div>

            <!-- Articulos Relacionados -->
            <div class="blog-related-articles">...</div>
        </article>

        <aside class="blog-article-sidebar">
            <!-- Widgets del sidebar -->
        </aside>
    </div>
</main>
```

### 6.2 CSS del Layout
```css
.blog-article-layout {
    display: grid;
    grid-template-columns: 1fr 280px;
    gap: 5rem;
    align-items: start;
    padding: 5rem 0 8rem;
}

@media (max-width: 1024px) {
    .blog-article-layout {
        grid-template-columns: 1fr;
        gap: 3rem;
    }
}
```

---

## 7. TABLA DE CONTENIDOS INLINE

```html
<nav class="blog-article-toc-inline">
    <h4>En este articulo</h4>
    <ul>
        <li><a href="#seccion-1">[Titulo Seccion 1]</a></li>
        <li><a href="#seccion-2">[Titulo Seccion 2]</a></li>
        <li><a href="#seccion-3">[Titulo Seccion 3]</a></li>
        <li><a href="#seccion-4">[Titulo Seccion 4]</a></li>
        <li><a href="#seccion-5">[Titulo Seccion 5]</a></li>
        <li><a href="#preguntas-frecuentes">Preguntas Frecuentes</a></li>
    </ul>
</nav>
```

### CSS
```css
.blog-article-toc-inline {
    background: #f5f5f7;
    border-radius: 12px;
    padding: 2rem;
    margin: 3rem 0;
}

.blog-article-toc-inline h4 {
    font-size: 0.875rem;
    font-weight: 600;
    color: #86868b;
    margin: 0 0 1.5rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
}

.blog-article-toc-inline ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: grid;
    grid-template-columns: 1fr;
    gap: 0.75rem;
}

.blog-article-toc-inline a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: #1d1d1f;
    font-size: 0.9375rem;
    text-decoration: none;
}

.blog-article-toc-inline a::before {
    content: '→';
    color: #86868b;
}

.blog-article-toc-inline a:hover {
    color: #0066cc;
}

@media (min-width: 768px) {
    .blog-article-toc-inline ul {
        grid-template-columns: repeat(2, 1fr);
    }
}
```

---

## 8. CONTENIDO DEL ARTICULO

### 8.1 Estructura del Contenido
```html
<div class="blog-article-content">
    <!-- Parrafo Lead (introduccion) -->
    <p class="lead">[PARRAFO INTRODUCTORIO EXTENSO - 80-100 palabras]</p>

    <!-- Seccion 1 -->
    <h2 id="seccion-1">[Titulo Seccion]</h2>
    <p>[Contenido...]</p>

    <!-- Modulo de estadistica -->
    <div class="interest-module stat-module">...</div>

    <!-- Seccion 2 -->
    <h2 id="seccion-2">[Titulo Seccion]</h2>
    <h3>[Subtitulo]</h3>
    <p>[Contenido...]</p>

    <!-- Galeria de imagenes -->
    <div class="blog-image-gallery">...</div>

    <!-- Modulo de tip -->
    <div class="interest-module tip-module">...</div>

    <!-- Seccion 3 -->
    <h2 id="seccion-3">[Titulo Seccion]</h2>
    <p>[Contenido con testimonios...]</p>

    <!-- Modulo de cita -->
    <div class="interest-module quote-module">...</div>

    <!-- Seccion 4 -->
    <h2 id="seccion-4">[Titulo Seccion]</h2>
    <p>[Contenido...]</p>

    <!-- Modulo de alerta -->
    <div class="interest-module alert-module">...</div>

    <!-- Seccion 5 -->
    <h2 id="seccion-5">[Titulo Seccion]</h2>
    <p>[Contenido con CTA...]</p>
</div>
```

### 8.2 Estilos del Contenido
```css
.blog-article-content {
    font-size: 1.0625rem;
    line-height: 1.75;
    color: #1d1d1f;
    letter-spacing: -0.003em;
}

.blog-article-content .lead {
    font-size: 1.3125rem;
    font-weight: 400;
    color: #1d1d1f;
    line-height: 1.7;
    margin-bottom: 3rem;
}

.blog-article-content h2 {
    font-size: 2rem;
    font-weight: 600;
    color: #1d1d1f;
    margin: 3.5rem 0 1.5rem;
    line-height: 1.2;
}

.blog-article-content h3 {
    font-size: 1.5rem;
    font-weight: 600;
    color: #1d1d1f;
    margin: 2.5rem 0 1rem;
}

.blog-article-content p {
    margin-bottom: 1.5rem;
}

.blog-article-content a {
    color: #0066cc;
    text-decoration: none;
}

.blog-article-content a:hover {
    color: #0055aa;
}

.blog-article-content ul,
.blog-article-content ol {
    margin: 1.75rem 0;
    padding-left: 1.5rem;
    list-style: none;
}

.blog-article-content ul li {
    margin-bottom: 0.75rem;
    padding-left: 1rem;
    position: relative;
}

.blog-article-content ul li::before {
    content: '•';
    position: absolute;
    left: 0;
    color: #86868b;
}
```

---

## 9. MODULOS DE INTERES

### 9.1 Modulo de Estadistica (stat-module)
```html
<div class="interest-module stat-module">
    <div class="stat-number">[NUMERO/DATO]</div>
    <div class="stat-content">
        <h4>[TITULO]</h4>
        <p>[DESCRIPCION]</p>
    </div>
</div>
```

### 9.2 Modulo de Tip (tip-module)
```html
<div class="interest-module tip-module">
    <div class="tip-icon">💡</div>
    <div class="tip-content">
        <h4>Consejo de Experto</h4>
        <p>[CONSEJO PROFESIONAL]</p>
    </div>
</div>
```

### 9.3 Modulo de Alerta (alert-module)
```html
<div class="interest-module alert-module">
    <div class="alert-icon">⚠️</div>
    <div class="alert-content">
        <h4>Importante</h4>
        <p>[INFORMACION IMPORTANTE]</p>
    </div>
</div>
```

### 9.4 Modulo de Cita (quote-module)
```html
<div class="interest-module quote-module">
    <blockquote>"[CITA TEXTUAL]"</blockquote>
    <cite>— [NOMBRE], [CARGO/TITULO]</cite>
</div>
```

### 9.5 CSS de Modulos
```css
.interest-module {
    margin: 2rem 0;
    padding: 1.5rem;
    border-radius: 12px;
    display: flex;
    gap: 1rem;
    align-items: flex-start;
}

/* Estadistica */
.stat-module {
    background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
    border-left: 4px solid #f59e0b;
}
.stat-number {
    font-size: 2.5rem;
    font-weight: 800;
    color: #b45309;
    line-height: 1;
}
.stat-content h4 { margin: 0 0 0.5rem; color: #92400e; }
.stat-content p { margin: 0; color: #78350f; }

/* Tip */
.tip-module {
    background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%);
    border-left: 4px solid #3b82f6;
}
.tip-icon { font-size: 2rem; }
.tip-content h4 { margin: 0 0 0.5rem; color: #1e40af; }
.tip-content p { margin: 0; color: #1e3a8a; }

/* Alerta */
.alert-module {
    background: linear-gradient(135deg, #fee2e2 0%, #fecaca 100%);
    border-left: 4px solid #ef4444;
}
.alert-icon { font-size: 2rem; }
.alert-content h4 { margin: 0 0 0.5rem; color: #b91c1c; }
.alert-content p { margin: 0; color: #991b1b; }

/* Cita */
.quote-module {
    background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
    border-left: 4px solid #6b7280;
    flex-direction: column;
}
.quote-module blockquote {
    font-size: 1.2rem;
    font-style: italic;
    color: #374151;
    margin: 0;
    line-height: 1.6;
}
.quote-module cite {
    color: #6b7280;
    font-size: 0.9rem;
}
```

---

## 10. GALERIA DE IMAGENES

```html
<div class="blog-image-gallery">
    <h3>[TITULO DE LA GALERIA]</h3>
    <div class="gallery-grid">
        <figure class="gallery-item">
            <img src="../../img/[RUTA]" alt="[ALT]" loading="lazy">
            <figcaption class="gallery-caption">
                <strong>[TITULO]</strong>
                <span>[DESCRIPCION]</span>
            </figcaption>
        </figure>
        <!-- Repetir para cada imagen (4 recomendado) -->
    </div>
</div>
```

### CSS de Galeria
```css
.blog-image-gallery {
    margin: 2rem 0;
    padding: 1.5rem;
    background: #f8fafc;
    border-radius: 12px;
}

.blog-image-gallery h3 {
    margin: 0 0 1rem;
    color: #1f2937;
}

.gallery-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
}

.gallery-item {
    margin: 0;
    border-radius: 8px;
    overflow: hidden;
    background: #fff;
    box-shadow: 0 2px 8px rgba(0,0,0,0.08);
}

.gallery-item img {
    width: 100%;
    height: 160px;
    object-fit: cover;
}

.gallery-caption {
    padding: 0.8rem;
}

.gallery-caption strong {
    display: block;
    font-size: 0.9rem;
    color: #1f2937;
}

.gallery-caption span {
    font-size: 0.8rem;
    color: #6b7280;
}

@media (max-width: 640px) {
    .gallery-grid { grid-template-columns: 1fr; }
}
```

---

## 11. SECCION FAQ ACCORDION

### 11.1 HTML
```html
<section class="faq-section" id="preguntas-frecuentes">
    <h2>Preguntas Frecuentes</h2>
    <p>Respondemos las dudas mas comunes sobre [TEMA].</p>
    <div class="faq-accordion">

        <div class="faq-item">
            <button class="faq-question" aria-expanded="false">
                <span>[PREGUNTA 1]</span>
                <svg class="faq-chevron" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
            </button>
            <div class="faq-answer">
                <p>[RESPUESTA 1]</p>
            </div>
        </div>

        <!-- Repetir para cada pregunta (5 recomendado) -->

    </div>
</section>
```

### 11.2 CSS del FAQ
```css
.faq-section {
    margin: 2rem 0;
}

.faq-item {
    border: 1px solid #e5e7eb;
    border-radius: 8px;
    margin-bottom: 0.8rem;
    overflow: hidden;
}

.faq-question {
    width: 100%;
    background: #fff;
    border: none;
    padding: 1rem 1.2rem;
    text-align: left;
    font-size: 1rem;
    font-weight: 600;
    color: #1f2937;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: background 0.2s;
}

.faq-question:hover {
    background: #f9fafb;
}

.faq-question span {
    flex: 1;
    padding-right: 1rem;
}

.faq-chevron {
    transition: transform 0.3s;
    color: #6b7280;
}

.faq-question[aria-expanded="true"] .faq-chevron {
    transform: rotate(180deg);
    color: #f59e0b;
}

.faq-answer {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease;
    background: #fafafa;
}

.faq-answer p {
    padding: 1rem 1.2rem;
    margin: 0;
    color: #4b5563;
    line-height: 1.6;
}
```

---

## 12. TAGS RELACIONADOS

```html
<div class="blog-article-tags">
    <h3>Temas relacionados:</h3>
    <div class="tags-container">
        <a href="../categorias/[CATEGORIA].html" class="tag">[Categoria Principal]</a>
        <a href="#" class="tag">[Tag 2]</a>
        <a href="#" class="tag">[Tag 3]</a>
        <a href="#" class="tag">[Tag 4]</a>
    </div>
</div>
```

---

## 13. CTA FINAL

```html
<div class="article-cta-final" style="background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%); padding: 2rem; border-radius: 12px; color: #fff; text-align: center; margin: 2rem 0;">
    <h3 style="margin: 0 0 0.5rem; color: #fff;">¿Listo para [ACCION]?</h3>
    <p style="margin: 0 0 1.5rem; color: rgba(255,255,255,0.8);">[PROPUESTA DE VALOR]</p>
    <a href="../categorias/[CATEGORIA].html" style="display: inline-block; background: #f59e0b; color: #000; padding: 0.8rem 1.5rem; border-radius: 8px; font-weight: 600; text-decoration: none;">[TEXTO BOTON]</a>
</div>
```

---

## 14. ARTICULOS RELACIONADOS

```html
<div class="blog-related-articles">
    <h3>Articulos Relacionados</h3>
    <div class="blog-cards-grid">
        <article class="blog-card">
            <div class="blog-card-image">
                <img src="../../img/[RUTA]" alt="[ALT]">
            </div>
            <div class="blog-card-content">
                <h3 class="blog-card-title">
                    <a href="[URL]">[TITULO]</a>
                </h3>
                <p class="blog-card-excerpt">[EXTRACTO CORTO]</p>
            </div>
        </article>
        <!-- Repetir para 2-3 articulos -->
    </div>
</div>
```

---

## 15. SIDEBAR

### 15.1 Estructura del Sidebar
```html
<aside class="blog-article-sidebar">
    <!-- Tabla de Contenidos -->
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
            En este articulo
        </h3>
        <ul class="blog-toc-list">
            <li><a href="#seccion-1">[Seccion 1]</a></li>
            <li><a href="#seccion-2">[Seccion 2]</a></li>
            <!-- ... -->
        </ul>
    </div>

    <!-- CTA Box -->
    <div class="blog-cta-box">
        <h3>¿Buscas [SERVICIO]?</h3>
        <p>Encuentra las mejores empresas certificadas en nuestro directorio</p>
        <a href="../categorias/[CATEGORIA].html" class="btn">Ver Empresas</a>
    </div>

    <!-- Empresas Destacadas -->
    <div class="blog-widget">
        <h3 class="blog-widget-title">Empresas Destacadas</h3>
        <div class="blog-popular-posts">
            <article class="blog-popular-post">
                <a href="../../negocios/[CATEGORIA]/[EMPRESA].html" class="blog-popular-thumb">
                    <img src="../../img/[RUTA]" alt="[EMPRESA]">
                </a>
                <div class="blog-popular-content">
                    <h4 class="blog-popular-title">
                        <a href="../../negocios/[CATEGORIA]/[EMPRESA].html">[NOMBRE EMPRESA]</a>
                    </h4>
                </div>
            </article>
            <!-- Repetir para 3 empresas -->
        </div>
    </div>
</aside>
```

---

## 16. FOOTER

```html
<footer class="footer">
    <div class="footer-main">
        <div class="container">
            <div class="footer-grid">
                <div class="footer-column footer-brand">
                    <div class="footer-logo">
                        <span class="logo-text">Paginas<span class="logo-highlight">Amarillas</span>.mx</span>
                    </div>
                    <p class="footer-text">El directorio empresarial mas completo de Mexico.</p>
                    <div class="footer-contact-info">
                        <div class="footer-contact-item">
                            <svg>...</svg>
                            <a href="mailto:contacto@paginasamarillas.mx">contacto@paginasamarillas.mx</a>
                        </div>
                    </div>
                </div>
                <div class="footer-column">
                    <h4 class="footer-heading">Categorias Populares</h4>
                    <ul class="footer-links">
                        <li><a href="#">[Categoria]</a></li>
                        <!-- ... -->
                    </ul>
                </div>
                <div class="footer-column">
                    <h4 class="footer-heading">Ciudades</h4>
                    <ul class="footer-links">...</ul>
                </div>
                <div class="footer-column">
                    <h4 class="footer-heading">Ayuda</h4>
                    <ul class="footer-links">...</ul>
                </div>
            </div>
        </div>
    </div>
    <div class="footer-bottom">
        <div class="container">
            <div class="footer-bottom-content">
                <p class="copyright">&copy; 2025 PaginasAmarillas.mx</p>
                <div class="footer-badges">
                    <span class="footer-badge">Sitio Seguro</span>
                    <span class="footer-badge">Hecho en Mexico</span>
                </div>
            </div>
        </div>
    </div>
</footer>
```

---

## 17. JAVASCRIPT

### 17.1 Script del FAQ Accordion
```html
<script>
// FAQ Accordion
document.addEventListener('DOMContentLoaded', function() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(function(question) {
        question.addEventListener('click', function() {
            const faqItem = this.parentElement;
            const answer = faqItem.querySelector('.faq-answer');
            const isExpanded = this.getAttribute('aria-expanded') === 'true';

            // Cerrar todos los demas
            faqQuestions.forEach(function(q) {
                if (q !== question) {
                    q.setAttribute('aria-expanded', 'false');
                    q.parentElement.querySelector('.faq-answer').style.maxHeight = null;
                }
            });

            // Toggle actual
            if (isExpanded) {
                this.setAttribute('aria-expanded', 'false');
                answer.style.maxHeight = null;
            } else {
                this.setAttribute('aria-expanded', 'true');
                answer.style.maxHeight = answer.scrollHeight + 'px';
            }
        });
    });
});
</script>
```

### 17.2 Script principal
```html
<script src="../../js/app.js"></script>
```

---

## 18. VARIABLES CSS

Las variables CSS base estan en `/css/style.css`:

```css
:root {
    /* Colores Principales */
    --color-primary: #F4B942;
    --color-primary-dark: #E6A82E;
    --color-primary-light: #FFF8E7;

    /* Colores de Acento */
    --color-accent-blue: #3B82F6;
    --color-accent-purple: #8B5CF6;
    --color-accent-emerald: #10B981;
    --color-accent-orange: #F97316;

    /* Colores Secundarios */
    --color-secondary: #1A2332;
    --color-secondary-light: #2C3E50;

    /* Escala de Grises */
    --color-gray-50: #F9FAFB;
    --color-gray-100: #F3F4F6;
    --color-gray-200: #E5E7EB;
    --color-gray-300: #D1D5DB;
    --color-gray-400: #9CA3AF;
    --color-gray-500: #6B7280;
    --color-gray-600: #4B5563;
    --color-gray-700: #374151;
    --color-gray-800: #1F2937;
    --color-gray-900: #111827;

    /* Tipografia */
    --font-family: 'Inter', -apple-system, sans-serif;
    --font-size-xs: 0.75rem;
    --font-size-sm: 0.875rem;
    --font-size-base: 1rem;
    --font-size-lg: 1.125rem;
    --font-size-xl: 1.25rem;
    --font-size-2xl: 1.5rem;
    --font-size-3xl: 1.875rem;
    --font-size-4xl: 2.25rem;

    /* Espaciado */
    --spacing-xs: 0.5rem;
    --spacing-sm: 1rem;
    --spacing-md: 1.5rem;
    --spacing-lg: 2rem;
    --spacing-xl: 3rem;
    --spacing-2xl: 4rem;

    /* Sombras */
    --shadow-sm: 0 1px 2px rgba(0,0,0,0.05);
    --shadow-md: 0 4px 6px -1px rgba(0,0,0,0.1);
    --shadow-lg: 0 10px 15px -3px rgba(0,0,0,0.1);
    --shadow-xl: 0 20px 25px -5px rgba(0,0,0,0.1);

    /* Bordes */
    --radius-sm: 0.375rem;
    --radius-md: 0.5rem;
    --radius-lg: 0.75rem;
    --radius-xl: 1rem;
    --radius-full: 9999px;
}
```

---

## CHECKLIST PARA CREAR UN ARTICULO

- [ ] Crear archivo HTML en `/blog/[categoria]/[slug].html`
- [ ] Configurar todos los meta tags
- [ ] Agregar Schema.org Article
- [ ] Agregar Schema.org FAQPage
- [ ] Configurar Hero section con imagen
- [ ] Escribir parrafo lead (introduccion)
- [ ] Crear 5-6 secciones con h2
- [ ] Agregar al menos 1 modulo stat
- [ ] Agregar al menos 1 modulo tip
- [ ] Agregar 1 modulo quote
- [ ] Agregar galeria de imagenes (4 fotos)
- [ ] Crear 5 preguntas FAQ
- [ ] Agregar tags relacionados
- [ ] Configurar CTA final
- [ ] Agregar 2 articulos relacionados
- [ ] Configurar sidebar con TOC
- [ ] Agregar empresas destacadas en sidebar
- [ ] Verificar todos los links
- [ ] Verificar responsive en mobile
- [ ] Validar Schema.org en Google Rich Results Test

---

## IMAGENES REQUERIDAS

Para cada articulo necesitas:
1. **Imagen principal** (hero): 800x350px minimo, formato WebP
2. **Imagenes de galeria** (4): 400x160px minimo, formato WebP
3. **Imagenes de articulos relacionados** (2): 400x220px minimo

**Ruta de imagenes:** `/img/img-[categoria]/[nombre].webp`

---

*Documento creado para Paginas Amarillas Mexico - Diciembre 2024*
