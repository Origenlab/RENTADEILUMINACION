# DOCUMENTO-CREACIONDE-WORKFLOW.md
## Guia Maestra para Automatizacion de Articulos con n8n

**Version:** 1.0
**Fecha:** Diciembre 2024
**Autor:** Arquitectura de Automatizacion
**Proyecto Base:** Paginas Amarillas Mexico

---

## TABLA DE CONTENIDOS

1. [Introduccion General](#1-introduccion-general)
2. [Arquitectura General del Sistema](#2-arquitectura-general-del-sistema)
3. [Preparacion del Sitio Web](#3-preparacion-del-sitio-web)
4. [Optimizacion y Adecuacion de blog.html](#4-optimizacion-y-adecuacion-de-bloghtml)
5. [Diseno y Homologacion de Cards](#5-diseno-y-homologacion-de-cards)
6. [Estructura del Articulo Automatizado](#6-estructura-del-articulo-automatizado)
7. [Creacion del Workflow en n8n](#7-creacion-del-workflow-en-n8n)
8. [Archivos del Workflow](#8-archivos-del-workflow)
9. [SEO Automatizado](#9-seo-automatizado)
10. [Escalabilidad y Reutilizacion](#10-escalabilidad-y-reutilizacion)
11. [Buenas Practicas y Errores Comunes](#11-buenas-practicas-y-errores-comunes)
12. [Conclusion](#12-conclusion)

---

# 1. INTRODUCCION GENERAL

## 1.1 Contexto del Proyecto

Este documento describe el sistema completo de automatizacion de contenidos desarrollado para **Paginas Amarillas Mexico**, un directorio empresarial que requiere generar articulos SEO de alta calidad de forma automatica para promocionar negocios registrados.

El sistema utiliza:
- **n8n** como motor de automatizacion
- **OpenAI GPT-4o** para generacion de contenido
- **GitHub API** para publicacion automatica
- **Telegram** para notificaciones

## 1.2 Objetivo del Sistema Automatizado

Crear un flujo de trabajo que:

1. **Seleccione automaticamente** un negocio de la base de datos
2. **Genere contenido profesional** optimizado para SEO
3. **Construya un articulo HTML** completo y responsive
4. **Cree una card** para el listado del blog
5. **Publique automaticamente** en el sitio web
6. **Notifique al equipo** via Telegram

## 1.3 Beneficios del Flujo Automatizado

| Beneficio | Descripcion |
|-----------|-------------|
| **Ahorro de tiempo** | Articulos que tomarian 4-6 horas se generan en 2-3 minutos |
| **Consistencia** | Todos los articulos siguen la misma estructura SEO |
| **Escalabilidad** | Puede generar 1 articulo cada 3 dias automaticamente |
| **SEO optimizado** | Schema.org, meta tags y keywords automaticos |
| **Zero maintenance** | Una vez configurado, funciona sin intervencion |

## 1.4 Casos de Uso

Este sistema puede replicarse en:

- Directorios empresariales
- Blogs corporativos
- Portales de noticias
- Sitios de reviews de productos
- Plataformas de servicios profesionales
- Cualquier sitio que requiera contenido periodico

---

# 2. ARQUITECTURA GENERAL DEL SISTEMA

## 2.1 Diagrama Conceptual

```
┌─────────────────────────────────────────────────────────────────────┐
│                         FLUJO DE AUTOMATIZACION                      │
└─────────────────────────────────────────────────────────────────────┘

    ┌──────────┐      ┌──────────┐      ┌──────────┐      ┌──────────┐
    │  TRIGGER │ ──▶  │ SELECTOR │ ──▶  │ PROMPT   │ ──▶  │ ChatGPT  │
    │ (Cron/   │      │ EMPRESA  │      │ BUILDER  │      │ API      │
    │  Manual) │      │          │      │          │      │          │
    └──────────┘      └──────────┘      └──────────┘      └──────────┘
                                                                │
                                                                ▼
    ┌──────────┐      ┌──────────┐      ┌──────────┐      ┌──────────┐
    │ TELEGRAM │ ◀──  │ GITHUB   │ ◀──  │ CARD     │ ◀──  │ VALIDAR  │
    │ NOTIFY   │      │ PUBLISH  │      │ BUILDER  │      │ + HTML   │
    └──────────┘      └──────────┘      └──────────┘      └──────────┘
```

## 2.2 Componentes del Sistema

### 2.2.1 Sitio Web (Frontend)
- Estructura HTML semantica
- CSS responsive
- JavaScript minimo
- Carpetas organizadas por categoria

### 2.2.2 Blog (Contenedor de Articulos)
- Pagina `blog/index.html` con grid de cards
- Marcadores para insercion automatica
- Sidebar con widgets
- Paginacion

### 2.2.3 Cards (Preview de Articulos)
- Imagen destacada
- Titulo
- Extracto
- Tiempo de lectura
- Boton CTA

### 2.2.4 Workflow n8n
- 12 nodos interconectados
- Manejo de errores
- Reintentos automaticos
- Notificaciones

### 2.2.5 Inteligencia Artificial
- GPT-4o para generacion de contenido
- Prompts optimizados para SEO
- Validacion de respuestas JSON

### 2.2.6 SEO
- Schema.org (Article, FAQPage, BreadcrumbList)
- Meta tags Open Graph y Twitter Cards
- Keywords primarias, secundarias y LSI
- URLs canonicas

## 2.3 Flujo Completo de Datos

```
1. Trigger activa el workflow (cada 3 dias o manual)
         │
         ▼
2. Selector Empresa elige negocio aleatorio no usado
         │
         ▼
3. Constructor Prompt genera instrucciones para ChatGPT
         │
         ▼
4. ChatGPT API retorna JSON con contenido del articulo
         │
         ▼
5. Validar parsea JSON y aplica defaults robustos
         │
         ▼
6. Construir HTML genera articulo completo con CSS inline
         │
         ▼
7. Construir Card genera HTML de la card del blog
         │
         ▼
8. GitHub Subir Articulo publica el HTML en el repositorio
         │
         ▼
9. GitHub Obtener Index descarga blog/index.html actual
         │
         ▼
10. Insertar Card agrega la nueva card al index
         │
         ▼
11. GitHub Actualizar Index sube el index modificado
         │
         ▼
12. Telegram envia notificacion de exito
```

---

# 3. PREPARACION DEL SITIO WEB

## 3.1 Requisitos Minimos del Sitio

Antes de implementar el sistema, el sitio debe cumplir:

### Requisitos Tecnicos
- [ ] Hosting con soporte para archivos estaticos (GitHub Pages, Netlify, Vercel)
- [ ] Repositorio Git para versionado
- [ ] Estructura de carpetas definida
- [ ] CSS base implementado
- [ ] JavaScript minimo funcional

### Requisitos de Contenido
- [ ] Logo y branding definido
- [ ] Categorias de negocio establecidas
- [ ] Al menos 3 negocios registrados por categoria
- [ ] Imagenes de stock organizadas

## 3.2 Estructura de Carpetas Recomendada

```
sitio-web/
├── index.html
├── categorias.html
├── css/
│   └── style.css
├── js/
│   └── app.js
├── img/
│   ├── logo.png
│   ├── img-seguridad-privada/
│   │   ├── imagen1.webp
│   │   ├── imagen2.webp
│   │   └── ...
│   └── img-eventos/
│       ├── imagen1.webp
│       └── ...
├── blog/
│   ├── index.html          ← Listado de articulos con cards
│   ├── seguridad-privada/  ← Carpeta por categoria
│   │   ├── articulo-1.html
│   │   └── articulo-2.html
│   └── eventos/
│       └── articulo-1.html
├── negocios/
│   └── seguridad-privada/
│       └── nombre-negocio.html
├── categoria/
│   ├── seguridad-privada.html
│   └── eventos.html
└── n8n-workflows/
    ├── workflow-COMPLETO-LOCAL.json
    └── .env.example
```

## 3.3 Naming Conventions

### Archivos HTML
- Todo en minusculas
- Palabras separadas por guiones
- Sin acentos ni caracteres especiales
- Ejemplo: `guia-completa-seguridad-privada-mexico.html`

### Imagenes
- Formato WebP preferido (mejor compresion)
- Nombres descriptivos con keywords
- Ejemplo: `equipo-seguridad-corporativo.webp`

### Carpetas
- Nombres cortos y descriptivos
- Slug de la categoria
- Ejemplo: `img-seguridad-privada/`

## 3.4 Buenas Practicas de HTML Base

### DOCTYPE y Meta Tags Esenciales

```html
<!DOCTYPE html>
<html lang="es-MX">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Titulo | Nombre del Sitio</title>
  <meta name="description" content="Descripcion de 150-160 caracteres">
  <meta name="robots" content="index, follow">
  <link rel="canonical" href="https://tusitio.com/pagina.html">

  <!-- Open Graph -->
  <meta property="og:type" content="website">
  <meta property="og:title" content="Titulo">
  <meta property="og:description" content="Descripcion">
  <meta property="og:image" content="https://tusitio.com/img/og-image.jpg">
  <meta property="og:url" content="https://tusitio.com/pagina.html">

  <!-- Twitter Cards -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Titulo">
  <meta name="twitter:description" content="Descripcion">

  <link rel="stylesheet" href="/css/style.css">
</head>
```

## 3.5 SEO Tecnico Base

### Checklist SEO para el Sitio

- [ ] Certificado SSL instalado (HTTPS)
- [ ] Archivo `robots.txt` configurado
- [ ] Sitemap XML generado
- [ ] Velocidad de carga optimizada
- [ ] Imagenes comprimidas
- [ ] HTML semantico (header, main, article, footer)
- [ ] Jerarquia de headings correcta
- [ ] Links internos implementados
- [ ] Schema.org basico en homepage

### robots.txt Ejemplo

```
User-agent: *
Allow: /

Sitemap: https://tusitio.com/sitemap.xml
```

---

# 4. OPTIMIZACION Y ADECUACION DE blog.html

## 4.1 Proposito del Archivo

El archivo `blog/index.html` es la pagina principal del blog que muestra todas las cards de articulos. Este archivo debe:

1. Mostrar cards de articulos en un grid responsive
2. Contener marcadores para insercion automatica
3. Tener sidebar con widgets
4. Ser SEO-friendly

## 4.2 Estructura HTML Recomendada

```html
<!DOCTYPE html>
<html lang="es-MX">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Blog | Paginas Amarillas Mexico</title>
  <meta name="description" content="Articulos, guias y noticias sobre seguridad privada, eventos y mas.">
  <link rel="canonical" href="https://paginasamarillas.mx/blog/">
  <link rel="stylesheet" href="/css/style.css">
</head>
<body>
  <!-- Header -->
  <header class="header">
    <!-- Navegacion -->
  </header>

  <!-- Hero del Blog -->
  <section class="blog-hero">
    <div class="container">
      <h1>Blog de Paginas Amarillas</h1>
      <p>Articulos, guias y consejos profesionales</p>
    </div>
  </section>

  <!-- Contenido Principal -->
  <section class="blog-section">
    <div class="container">
      <div class="blog-layout">

        <!-- Area Principal -->
        <div class="blog-main">

          <!-- Grid de Cards -->
          <!-- n8n:BLOG-GRID-START -->
          <div class="blog-grid">
            <!-- n8n:INSERT-NEW-CARDS-HERE -->

            <!-- Las cards se insertan aqui automaticamente -->

          </div>
          <!-- n8n:BLOG-GRID-END -->

          <!-- Paginacion -->
          <div class="blog-pagination">
            <!-- Botones de paginacion -->
          </div>

        </div>

        <!-- Sidebar -->
        <aside class="blog-sidebar">
          <!-- Widgets -->
        </aside>

      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="footer">
    <!-- Contenido del footer -->
  </footer>

  <script src="/js/app.js" defer></script>
</body>
</html>
```

## 4.3 Marcadores Criticos para Automatizacion

El workflow busca estos marcadores exactos:

```html
<!-- n8n:INSERT-NEW-CARDS-HERE -->
```

**IMPORTANTE:** Este marcador debe existir EXACTAMENTE como se muestra. El workflow inserta nuevas cards DESPUES de este marcador, asegurando que los articulos mas nuevos aparezcan primero.

### Marcadores Adicionales Recomendados

```html
<!-- n8n:BLOG-GRID-START -->
<div class="blog-grid">
  <!-- n8n:INSERT-NEW-CARDS-HERE -->
  <!-- Cards existentes... -->
</div>
<!-- n8n:BLOG-GRID-END -->
```

## 4.4 CSS para el Grid de Cards

```css
/* Grid de Blog Cards */
.blog-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

/* Responsive */
@media (max-width: 768px) {
  .blog-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}

/* Layout Principal */
.blog-layout {
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 3rem;
  align-items: start;
}

@media (max-width: 1024px) {
  .blog-layout {
    grid-template-columns: 1fr;
  }

  .blog-sidebar {
    display: none;
  }
}
```

## 4.5 Eliminacion de Cards Destacadas

**IMPORTANTE:** Para mantener uniformidad visual, se recomienda NO usar cards destacadas (featured) que ocupen mas espacio. Todas las cards deben tener el mismo tamano.

**Antes (NO recomendado):**
```html
<article class="blog-featured">
  <!-- Card grande que ocupa 2 columnas -->
</article>
```

**Despues (RECOMENDADO):**
```html
<article class="blog-card">
  <!-- Card del mismo tamano que las demas -->
</article>
```

---

# 5. DISENO Y HOMOLOGACION DE CARDS

## 5.1 Estructura de la Card

Cada card de articulo debe contener:

```html
<article class="blog-card">
  <!-- Imagen con badge de categoria -->
  <a href="/blog/categoria/slug-articulo.html" class="blog-card-image">
    <img src="/img/img-categoria/imagen.webp" alt="Descripcion de la imagen">
    <span class="blog-category-badge">Nombre Categoria</span>
  </a>

  <!-- Contenido -->
  <div class="blog-card-content">
    <!-- Titulo -->
    <h3 class="blog-card-title">
      <a href="/blog/categoria/slug-articulo.html">Titulo del Articulo</a>
    </h3>

    <!-- Meta (tiempo de lectura) -->
    <div class="blog-meta">
      <span class="blog-reading-time">
        <svg><!-- Icono reloj --></svg>
        12 min
      </span>
    </div>

    <!-- Extracto -->
    <p class="blog-card-excerpt">
      Descripcion breve del articulo de 120-150 caracteres...
    </p>

    <!-- Boton CTA -->
    <a href="/blog/categoria/slug-articulo.html" class="btn btn-outline">
      Leer articulo completo
    </a>
  </div>
</article>
```

## 5.2 CSS para Cards con Boton Alineado al Fondo

Para que el boton siempre quede al final de la card (importante para uniformidad):

```css
.blog-card {
  display: flex;
  flex-direction: column;
  height: 100%;
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  transition: transform 0.3s, box-shadow 0.3s;
}

.blog-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.12);
}

.blog-card-image {
  position: relative;
  overflow: hidden;
}

.blog-card-image img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  transition: transform 0.3s;
}

.blog-card:hover .blog-card-image img {
  transform: scale(1.05);
}

.blog-category-badge {
  position: absolute;
  top: 1rem;
  left: 1rem;
  background: #f59e0b;
  color: #000;
  padding: 0.4rem 0.8rem;
  border-radius: 50px;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
}

.blog-card-content {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 1.5rem;
}

.blog-card-title {
  font-size: 1.1rem;
  font-weight: 700;
  margin: 0 0 0.75rem;
  line-height: 1.3;
}

.blog-card-title a {
  color: #1d1d1f;
  text-decoration: none;
}

.blog-card-title a:hover {
  color: #f59e0b;
}

.blog-meta {
  display: flex;
  gap: 1rem;
  margin-bottom: 0.75rem;
  color: #6b7280;
  font-size: 0.85rem;
}

.blog-reading-time {
  display: flex;
  align-items: center;
  gap: 0.4rem;
}

.blog-card-excerpt {
  flex-grow: 1;
  color: #6b7280;
  font-size: 0.95rem;
  line-height: 1.6;
  margin: 0 0 1rem;
}

.blog-card .btn {
  margin-top: auto;
  align-self: flex-start;
}

.btn-outline {
  display: inline-block;
  padding: 0.75rem 1.25rem;
  border: 2px solid #1a1a2e;
  color: #1a1a2e;
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s;
}

.btn-outline:hover {
  background: #1a1a2e;
  color: #fff;
}
```

## 5.3 Card Generada por el Workflow

El nodo "Construir Card" genera exactamente esta estructura:

```javascript
const card = `<!-- n8n:AUTO ${businessName} -->
<article class="blog-card" style="display:flex;flex-direction:column;height:100%;">
  <a href="/blog/${categorySlug}/${articleSlug}.html" class="blog-card-image">
    <img src="/img/img-${categorySlug}/${heroImage}" alt="${title}">
    <span class="blog-category-badge">${categoryName}</span>
  </a>
  <div class="blog-card-content" style="display:flex;flex-direction:column;flex-grow:1;">
    <h3 class="blog-card-title"><a href="/blog/${categorySlug}/${articleSlug}.html">${title}</a></h3>
    <div class="blog-meta"><span class="blog-reading-time">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>${readingTime} min</span>
    </div>
    <p class="blog-card-excerpt" style="flex-grow:1;">${excerpt}</p>
    <a href="/blog/${categorySlug}/${articleSlug}.html" class="btn btn-outline" style="margin-top:auto;align-self:flex-start;">
      Leer articulo completo
    </a>
  </div>
</article>`;
```

**Nota:** Los estilos inline garantizan que el layout funcione aunque el CSS externo no tenga estas reglas.

## 5.4 Comentario de Identificacion

Cada card generada automaticamente incluye un comentario de identificacion:

```html
<!-- n8n:AUTO ORIGINS Private Security -->
```

Esto permite:
- Identificar cards generadas automaticamente
- Facilitar debugging
- Permitir limpieza manual si es necesario

---

# 6. ESTRUCTURA DEL ARTICULO AUTOMATIZADO

## 6.1 Anatomia del Articulo

Cada articulo generado contiene las siguientes secciones:

```
┌─────────────────────────────────────────────────────────────┐
│                         HEAD                                 │
│  - Meta tags SEO                                            │
│  - Open Graph / Twitter Cards                               │
│  - Schema.org (Article, FAQPage, BreadcrumbList)           │
│  - CSS inline                                               │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                       HEADER                                 │
│  - Logo                                                      │
│  - Navegacion                                               │
│  - Botones CTA                                              │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                    BREADCRUMBS                               │
│  Inicio > Blog > Categoria > Titulo                         │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                   HERO (2 columnas)                          │
│  ┌───────────────┐  ┌───────────────────────────┐          │
│  │    IMAGEN     │  │  - Badge Categoria        │          │
│  │    HERO       │  │  - H1 Titulo              │          │
│  │               │  │  - Parrafo Hook           │          │
│  │               │  │  - Meta (tiempo, palabras)│          │
│  └───────────────┘  └───────────────────────────┘          │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│               CONTENIDO PRINCIPAL                            │
│  ┌───────────────────────────────┐  ┌─────────────────────┐│
│  │                               │  │     SIDEBAR         ││
│  │  - TOC inline                 │  │  - TOC sticky       ││
│  │  - Parrafo lead               │  │  - CTA boxes        ││
│  │  - Seccion Intro              │  │                     ││
│  │  - Seccion 1 + Stat Module    │  │                     ││
│  │  - Seccion 2 + Tip Module     │  │                     ││
│  │  - Seccion 3 + Benefits Box   │  │                     ││
│  │  - Seccion 4 + Process Steps  │  │                     ││
│  │  - Seccion 5 + Alert Module   │  │                     ││
│  │  - Seccion 6                  │  │                     ││
│  │  - Tabla Comparativa          │  │                     ││
│  │  - Conclusion                 │  │                     ││
│  │                               │  │                     ││
│  └───────────────────────────────┘  └─────────────────────┘│
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                     FAQ SECTION                              │
│  - Accordion interactivo                                    │
│  - Schema.org FAQPage                                       │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                    TAGS + CTA FINAL                          │
│  - Etiquetas del articulo                                   │
│  - Temas relacionados                                       │
│  - Call to action grande                                    │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                       FOOTER                                 │
└─────────────────────────────────────────────────────────────┘
```

## 6.2 Seccion Hero en Dos Columnas

El hero es visualmente impactante y contiene:

```html
<section class="blog-hero-section">
  <div class="container">
    <div class="blog-hero-grid">
      <!-- Columna Izquierda: Imagen -->
      <div class="blog-hero-image">
        <img src="../../img/img-categoria/imagen.webp"
             alt="Titulo - Nombre Empresa"
             width="600" height="400" loading="eager">
      </div>

      <!-- Columna Derecha: Contenido -->
      <div class="blog-hero-content">
        <span class="category-badge">Seguridad Privada</span>
        <h1 class="hero-title">Titulo SEO del Articulo</h1>
        <p class="hero-hook">Parrafo gancho de 80-100 palabras...</p>
        <div class="hero-meta">
          <span>12 min de lectura</span>
          <span>3000 palabras</span>
        </div>
      </div>
    </div>
  </div>
</section>
```

## 6.3 Modulos de Interes

El articulo incluye modulos visuales intercalados:

### Stat Module (Estadistica)
```html
<div class="interest-module stat-module">
  <div class="stat-number">98%</div>
  <div class="stat-content">
    <h4>Satisfaccion del Cliente</h4>
    <p>Nuestros clientes nos recomiendan...</p>
  </div>
</div>
```

### Tip Module (Consejo)
```html
<div class="interest-module tip-module">
  <div class="tip-icon"><!-- SVG --></div>
  <div class="tip-content">
    <h4>Consejo de Seguridad</h4>
    <p>Antes de contratar...</p>
  </div>
</div>
```

### Quote Module (Cita)
```html
<div class="interest-module quote-module">
  <blockquote>"La seguridad no es un gasto..."</blockquote>
  <cite>— Director de Operaciones, Empresa</cite>
</div>
```

### Alert Module (Alerta)
```html
<div class="interest-module alert-module">
  <div class="alert-icon"><!-- SVG --></div>
  <div class="alert-content">
    <h4>Dato Importante</h4>
    <p>En Mexico, solo las empresas registradas...</p>
  </div>
</div>
```

## 6.4 Seccion FAQ con Accordion

```html
<section class="faq-section" id="preguntas-frecuentes">
  <h2>Preguntas Frecuentes sobre Seguridad Privada</h2>
  <p>Respondemos las dudas mas comunes...</p>

  <div class="faq-accordion" role="list">
    <div class="faq-item">
      <button class="faq-question" aria-expanded="false">
        <span>¿Que servicios ofrece?</span>
        <svg class="faq-chevron"><!-- Chevron --></svg>
      </button>
      <div class="faq-answer">
        <p>Respuesta detallada...</p>
      </div>
    </div>
    <!-- Mas preguntas... -->
  </div>
</section>
```

**JavaScript para el Accordion:**
```javascript
document.addEventListener('DOMContentLoaded', function() {
  var faqButtons = document.querySelectorAll('.faq-question');
  faqButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      var answer = this.parentElement.querySelector('.faq-answer');
      var isExpanded = this.getAttribute('aria-expanded') === 'true';

      // Cerrar todos los demas
      faqButtons.forEach(function(btn) {
        if (btn !== button) {
          btn.setAttribute('aria-expanded', 'false');
          var otherAnswer = btn.parentElement.querySelector('.faq-answer');
          if (otherAnswer) otherAnswer.style.maxHeight = null;
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
```

## 6.5 Jerarquia de Headings

El articulo sigue una jerarquia SEO correcta:

```
H1: Titulo principal (solo uno por pagina)
  └── H2: Introduccion
  └── H2: Seccion 1 (Servicios)
  └── H2: Seccion 2 (Tecnologia)
  └── H2: Seccion 3 (Experiencia)
        └── H3: Subseccion (dentro del contenido)
  └── H2: Seccion 4 (Beneficios)
  └── H2: Seccion 5 (Proceso)
  └── H2: Seccion 6 (Cobertura)
  └── H2: Conclusion
  └── H2: Preguntas Frecuentes
```

---

# 7. CREACION DEL WORKFLOW EN n8n

## 7.1 Descripcion General

El workflow se llama **"Blog Paginas Amarillas - COMPLETO"** y contiene 12 nodos interconectados.

## 7.2 Nodos del Workflow (Explicacion Detallada)

### NODO 1: Cada 3 Dias (Schedule Trigger)

**Proposito:** Ejecutar el workflow automaticamente cada 3 dias.

**Configuracion:**
```json
{
  "parameters": {
    "rule": {
      "interval": [
        {
          "field": "days",
          "daysInterval": 3,
          "triggerAtHour": 9
        }
      ]
    }
  },
  "type": "n8n-nodes-base.scheduleTrigger"
}
```

**Notas:**
- Se ejecuta a las 9:00 AM
- Puede ajustarse segun necesidades
- Alternativa: usar Cron expression

---

### NODO 2: Ejecutar Manual (Manual Trigger)

**Proposito:** Permitir ejecucion manual para pruebas.

**Configuracion:**
```json
{
  "parameters": {},
  "type": "n8n-nodes-base.manualTrigger"
}
```

**Notas:**
- Util durante desarrollo y testing
- No requiere configuracion adicional

---

### NODO 3: Selector Empresa (Code Node)

**Proposito:** Seleccionar aleatoriamente un negocio que no haya sido usado recientemente. Tambien aleatoriza imagenes.

**Codigo JavaScript:**
```javascript
const config = {
  baseUrl: 'https://paginasamarillas.mx',
  github: {
    owner: 'Origenlab',
    repo: 'PAGINASAMARILLAS',
    branch: 'main'
  },
  categories: [
    {
      id: 'seguridad-privada',
      name: 'Seguridad Privada',
      slug: 'seguridad-privada',
      categoryPage: '/categoria/seguridad-privada.html'
    }
  ],
  businesses: [
    {
      id: 'origins-private-security',
      name: 'ORIGINS Private Security',
      slug: 'origins-private-security',
      businessPage: '/negocios/seguridad-privada/origins-private-security.html',
      mainImage: 'equipo-seguridad-corporativo.webp',
      services: ['vigilancia', 'escoltas', 'CCTV', 'control-acceso'],
      location: 'CDMX',
      keywords: ['seguridad corporativa', 'escoltas ejecutivos']
    },
    // ... mas negocios
  ],
  articleTypes: [
    {
      id: 'resena-completa',
      name: 'Resena Completa',
      slug: 'resena-completa',
      description: 'Analisis detallado de la empresa'
    },
    {
      id: 'guia-servicios',
      name: 'Guia de Servicios',
      slug: 'guia-servicios',
      description: 'Desglose de cada servicio'
    }
  ],
  images: [
    'acceso-biometrico-torniquete.webp',
    'centro-monitoreo-camaras.webp',
    'equipo-seguridad-corporativo.webp',
    // ... mas imagenes
  ]
};

// Usar staticData para persistir entre ejecuciones
const staticData = $getWorkflowStaticData('global');
if (!staticData.usados) staticData.usados = [];
if (!staticData.imagenesUsadas) staticData.imagenesUsadas = [];

// Seleccionar negocio no usado
let disponibles = config.businesses.filter(b => !staticData.usados.includes(b.id));
if (disponibles.length === 0) {
  staticData.usados = [];
  disponibles = config.businesses;
}
const business = disponibles[Math.floor(Math.random() * disponibles.length)];
staticData.usados.push(business.id);

// Seleccionar tipo de articulo aleatorio
const articleType = config.articleTypes[Math.floor(Math.random() * config.articleTypes.length)];

// Imagenes aleatorias sin repetir (Fisher-Yates shuffle)
let imagenesDisponibles = config.images.filter(i =>
  i !== business.mainImage && !staticData.imagenesUsadas.includes(i)
);
if (imagenesDisponibles.length < 5) {
  staticData.imagenesUsadas = [];
  imagenesDisponibles = config.images.filter(i => i !== business.mainImage);
}

for (let i = imagenesDisponibles.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [imagenesDisponibles[i], imagenesDisponibles[j]] = [imagenesDisponibles[j], imagenesDisponibles[i]];
}

const heroImage = imagenesDisponibles[0];
const galleryImages = imagenesDisponibles.slice(1, 5);
staticData.imagenesUsadas.push(heroImage, ...galleryImages);

return [{
  json: {
    config,
    category: config.categories[0],
    business,
    articleType,
    heroImage,
    galleryImages,
    slugUnique: business.slug + '-' + articleType.slug + '-' + Date.now().toString(36)
  }
}];
```

**Conceptos Clave:**
- `$getWorkflowStaticData('global')`: Persiste datos entre ejecuciones
- Fisher-Yates shuffle: Algoritmo para aleatorizacion verdadera
- slugUnique: Garantiza URLs unicas incluyendo timestamp

---

### NODO 4: Constructor Prompt (Code Node)

**Proposito:** Construir el prompt optimizado para ChatGPT.

**Codigo JavaScript (Prompt Mejorado):**
```javascript
const data = $input.first().json;
const b = data.business;
const a = data.articleType;

const prompt = `GENERA UN ARTICULO PROFESIONAL COMPLETO para ${b.name}.

== EMPRESA ==
Nombre: ${b.name}
Servicios: ${b.services.join(', ')}
Ubicacion: ${b.location}
Keywords: ${b.keywords.join(', ')}
Tipo articulo: ${a.name}

== REGLAS CRITICAS ==
1. TODO el contenido debe ser REAL, ESPECIFICO y PROFESIONAL
2. PROHIBIDO usar placeholders como "Contenido...", "Descripcion del paso...", etc.
3. Cada parrafo debe tener MINIMO 4-6 oraciones completas
4. Incluir datos reales del sector seguridad privada en Mexico
5. Usar lenguaje profesional pero accesible
6. NO usar subsections dentro de sections

== ESTRUCTURA REQUERIDA ==
Genera exactamente 6 secciones H2 con contenido extenso.

Responde con JSON valido...`;

return [{
  json: {
    ...data,
    chatGPTBody: {
      model: 'gpt-4o',
      messages: [
        {
          role: 'system',
          content: 'Eres un redactor experto en contenidos de seguridad privada para Mexico. REGLA ABSOLUTA: Todo el contenido debe ser REAL y ESPECIFICO. Respondes UNICAMENTE con JSON valido sin markdown.'
        },
        {
          role: 'user',
          content: prompt
        }
      ],
      temperature: 0.8,
      max_tokens: 12000,
      response_format: { type: 'json_object' }
    }
  }
}];
```

**Notas Importantes:**
- `response_format: { type: 'json_object' }` fuerza respuesta JSON valida
- `temperature: 0.8` permite creatividad pero mantiene coherencia
- `max_tokens: 12000` permite articulos extensos

---

### NODO 5: ChatGPT API (HTTP Request)

**Proposito:** Enviar el prompt a OpenAI y recibir el contenido generado.

**Configuracion:**
```json
{
  "parameters": {
    "method": "POST",
    "url": "https://api.openai.com/v1/chat/completions",
    "sendHeaders": true,
    "headerParameters": {
      "parameters": [
        {"name": "Content-Type", "value": "application/json"},
        {"name": "Authorization", "value": "Bearer TU_API_KEY_AQUI"}
      ]
    },
    "sendBody": true,
    "specifyBody": "json",
    "jsonBody": "={{ $json.chatGPTBody }}",
    "options": {"timeout": 180000}
  },
  "retryOnFail": true,
  "maxTries": 3
}
```

**Notas:**
- Timeout de 3 minutos (articulos largos pueden tardar)
- 3 reintentos automaticos en caso de fallo
- API key debe mantenerse segura

---

### NODO 6: Validar (Code Node)

**Proposito:** Parsear la respuesta JSON y aplicar defaults robustos.

**Codigo JavaScript:**
```javascript
const r = $input.first().json;
const d = $('Constructor Prompt').first().json;
const b = d.business;
let c;

// Parsear JSON de la respuesta
try {
  let t = r.choices[0].message.content
    .replace(/```json\n?/gi, '')
    .replace(/```\n?/gi, '')
    .trim();
  c = JSON.parse(t);
} catch(e) {
  throw new Error('Error JSON: ' + e.message);
}

// Validacion minima
if (!c.title) throw new Error('Falta title');

// Defaults robustos para sections
if (!c.sections || c.sections.length === 0) {
  c.sections = [
    { id: 'servicios', title: 'Servicios de ' + b.name, content: '<p>...</p>' },
    { id: 'beneficios', title: 'Beneficios y Ventajas', content: '<p>...</p>' },
    { id: 'experiencia', title: 'Experiencia y Trayectoria', content: '<p>...</p>' },
    { id: 'contacto', title: 'Como Contactarnos', content: '<p>...</p>' }
  ];
}

// Defaults para FAQs
if (!c.faqs || c.faqs.length === 0) {
  c.faqs = [
    { question: 'Que servicios ofrece ' + b.name + '?', answer: '...' },
    { question: 'Cual es el area de cobertura?', answer: '...' },
    { question: 'Como puedo solicitar una cotizacion?', answer: '...' }
  ];
}

// ... mas defaults para todos los campos

return [{ json: { ...d, content: c, finalSlug: c.slug || d.slugUnique } }];
```

**Conceptos Clave:**
- Limpia posibles marcadores de markdown en la respuesta
- Aplica defaults si ChatGPT no genero algun campo
- Garantiza que el articulo siempre tenga contenido minimo

---

### NODO 7: Construir HTML (Code Node)

**Proposito:** Generar el HTML completo del articulo con CSS inline.

Este nodo es el mas extenso. Genera un documento HTML completo que incluye:
- Meta tags SEO
- Schema.org estructurado
- CSS inline completo
- Header y navegacion
- Hero en dos columnas
- Contenido con modulos intercalados
- FAQ accordion
- CTA final
- Footer
- JavaScript del accordion

**El codigo completo esta en el archivo workflow-COMPLETO-LOCAL.json**

---

### NODO 8: Construir Card (Code Node)

**Proposito:** Generar la card HTML para el listado del blog.

**Codigo JavaScript:**
```javascript
const d = $input.first().json;
const c = d.content;
const cat = d.category;
const b = d.business;
const hero = d.heroImage;
const slug = d.finalSlug;

const card = `<!-- n8n:AUTO ${b.name} -->
<article class="blog-card" style="display:flex;flex-direction:column;height:100%;">
  <a href="/blog/${cat.slug}/${slug}.html" class="blog-card-image">
    <img src="/img/img-${cat.slug}/${hero}" alt="${c.title}">
    <span class="blog-category-badge">${cat.name}</span>
  </a>
  <div class="blog-card-content" style="display:flex;flex-direction:column;flex-grow:1;">
    <h3 class="blog-card-title"><a href="/blog/${cat.slug}/${slug}.html">${c.title}</a></h3>
    <div class="blog-meta"><span class="blog-reading-time">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
      </svg>${c.readingTime} min</span>
    </div>
    <p class="blog-card-excerpt" style="flex-grow:1;">${c.excerpt}</p>
    <a href="/blog/${cat.slug}/${slug}.html" class="btn btn-outline" style="margin-top:auto;align-self:flex-start;">
      Leer articulo completo
    </a>
  </div>
</article>`;

return [{ json: { ...d, cardHtml: card } }];
```

---

### NODO 9: GitHub Subir Articulo (HTTP Request)

**Proposito:** Subir el articulo HTML al repositorio de GitHub.

**Configuracion:**
```json
{
  "parameters": {
    "method": "PUT",
    "url": "=https://api.github.com/repos/OWNER/REPO/contents/blog/{{ $json.category.slug }}/{{ $json.finalSlug }}.html",
    "sendHeaders": true,
    "headerParameters": {
      "parameters": [
        {"name": "Authorization", "value": "token TU_GITHUB_TOKEN"},
        {"name": "Accept", "value": "application/vnd.github.v3+json"},
        {"name": "Content-Type", "value": "application/json"}
      ]
    },
    "sendBody": true,
    "specifyBody": "json",
    "jsonBody": "={\n  \"message\": \"Add article: {{ $json.content.title }}\",\n  \"content\": \"{{ $json.articleHtmlBase64 }}\",\n  \"branch\": \"main\"\n}"
  }
}
```

**Notas:**
- El contenido debe estar en Base64
- El nodo anterior (Construir HTML) ya genera `articleHtmlBase64`

---

### NODO 10: GitHub Obtener Index (HTTP Request)

**Proposito:** Descargar el archivo blog/index.html actual.

**Configuracion:**
```json
{
  "parameters": {
    "method": "GET",
    "url": "https://api.github.com/repos/OWNER/REPO/contents/blog/index.html",
    "sendHeaders": true,
    "headerParameters": {
      "parameters": [
        {"name": "Authorization", "value": "token TU_GITHUB_TOKEN"},
        {"name": "Accept", "value": "application/vnd.github.v3+json"}
      ]
    }
  }
}
```

**Respuesta incluye:**
- `content`: Contenido del archivo en Base64
- `sha`: Hash necesario para actualizar el archivo

---

### NODO 11: Insertar Card (Code Node)

**Proposito:** Insertar la nueva card en el index.html.

**Codigo JavaScript:**
```javascript
const d = $('Construir Card').first().json;
const cardHtml = d.cardHtml;
const gh = $input.first().json;

// Decodificar contenido Base64
const indexContent = Buffer.from(gh.content, 'base64').toString('utf8');

// Buscar marcador
const marker = '<!-- n8n:INSERT-NEW-CARDS-HERE -->';

if (!indexContent.includes(marker)) {
  throw new Error('Marcador n8n no encontrado en blog/index.html');
}

// Insertar card despues del marcador
const newContent = indexContent.replace(marker, marker + '\n' + cardHtml);
const indexHtmlBase64 = Buffer.from(newContent).toString('base64');

return [{
  json: {
    ...d,
    indexHtml: newContent,
    indexHtmlBase64: indexHtmlBase64,
    sha: gh.sha
  }
}];
```

---

### NODO 12: GitHub Actualizar Index (HTTP Request)

**Proposito:** Subir el index.html actualizado con la nueva card.

**Configuracion:**
```json
{
  "parameters": {
    "method": "PUT",
    "url": "https://api.github.com/repos/OWNER/REPO/contents/blog/index.html",
    "sendHeaders": true,
    "headerParameters": {
      "parameters": [
        {"name": "Authorization", "value": "token TU_GITHUB_TOKEN"},
        {"name": "Accept", "value": "application/vnd.github.v3+json"},
        {"name": "Content-Type", "value": "application/json"}
      ]
    },
    "sendBody": true,
    "specifyBody": "json",
    "jsonBody": "={\n  \"message\": \"Add card: {{ $json.content.title }}\",\n  \"content\": \"{{ $json.indexHtmlBase64 }}\",\n  \"sha\": \"{{ $json.sha }}\",\n  \"branch\": \"main\"\n}"
  }
}
```

**IMPORTANTE:** El campo `sha` es obligatorio para actualizar archivos existentes en GitHub.

---

### NODO 13: Telegram (HTTP Request)

**Proposito:** Enviar notificacion de exito al equipo.

**Configuracion:**
```json
{
  "parameters": {
    "method": "POST",
    "url": "https://api.telegram.org/botTU_BOT_TOKEN/sendMessage",
    "sendHeaders": true,
    "headerParameters": {
      "parameters": [
        {"name": "Content-Type", "value": "application/json"}
      ]
    },
    "sendBody": true,
    "specifyBody": "json",
    "jsonBody": "={\n  \"chat_id\": \"TU_CHAT_ID\",\n  \"text\": \"✅ *Articulo Publicado*\\n\\n🏢 *Empresa:* {{ $('Insertar Card').first().json.business.name }}\\n📝 *Titulo:* {{ $('Insertar Card').first().json.content.title }}\\n\\n🔗 *URL:*\\nhttps://tusitio.com/blog/...\",\n  \"parse_mode\": \"Markdown\"\n}"
  }
}
```

---

### NODO 14: Fin (No Operation)

**Proposito:** Marcador de finalizacion del workflow.

```json
{
  "parameters": {},
  "type": "n8n-nodes-base.noOp"
}
```

---

# 8. ARCHIVOS DEL WORKFLOW

## 8.1 Lista de Archivos

| Archivo | Ubicacion | Proposito |
|---------|-----------|-----------|
| `workflow-COMPLETO-LOCAL.json` | `/n8n-workflows/` | Workflow principal con credenciales hardcodeadas |
| `.env.example` | `/n8n-workflows/` | Plantilla de variables de entorno |
| `.gitignore` | `/` | Ignorar archivos sensibles |
| `blog/index.html` | `/blog/` | Listado de articulos con marcador |

## 8.2 workflow-COMPLETO-LOCAL.json

Este archivo contiene el workflow completo listo para importar en n8n.

**Para importar:**
1. Abrir n8n
2. Ir a Workflows > Import from File
3. Seleccionar `workflow-COMPLETO-LOCAL.json`
4. El workflow aparecera en la lista

**Credenciales que deben actualizarse:**
- `OPENAI_API_KEY`: En nodo "ChatGPT API"
- `GITHUB_TOKEN`: En nodos "GitHub Subir Articulo", "GitHub Obtener Index", "GitHub Actualizar Index"
- `TELEGRAM_BOT_TOKEN`: En nodo "Telegram"
- `TELEGRAM_CHAT_ID`: En nodo "Telegram"

## 8.3 .env.example

```env
# OpenAI
OPENAI_API_KEY=sk-...

# GitHub
GITHUB_OWNER=TuOrganizacion
GITHUB_REPO=TuRepositorio
GITHUB_TOKEN=ghp_...

# Telegram
TELEGRAM_BOT_TOKEN=123456789:ABC...
TELEGRAM_CHAT_ID=123456789
```

## 8.4 .gitignore

```gitignore
# Credenciales y archivos sensibles
.env
.env.local
.env.*.local
*.local
n8n-workflows/.env*
!n8n-workflows/.env.example
```

---

# 9. SEO AUTOMATIZADO

## 9.1 Elementos SEO Generados Automaticamente

El workflow genera automaticamente los siguientes elementos SEO:

### Meta Tags Basicos
```html
<title>Titulo SEO | Nombre Sitio</title>
<meta name="description" content="Meta description 150-160 chars">
<meta name="keywords" content="keyword1, keyword2, ...">
<meta name="robots" content="index, follow">
<link rel="canonical" href="https://...">
```

### Open Graph (Facebook/LinkedIn)
```html
<meta property="og:type" content="article">
<meta property="og:title" content="Titulo">
<meta property="og:description" content="Descripcion">
<meta property="og:image" content="https://.../imagen.webp">
<meta property="og:url" content="https://.../articulo.html">
<meta property="og:site_name" content="Nombre Sitio">
<meta property="og:locale" content="es_MX">
<meta property="article:section" content="Categoria">
```

### Twitter Cards
```html
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Titulo">
<meta name="twitter:description" content="Descripcion">
<meta name="twitter:image" content="https://.../imagen.webp">
```

### Schema.org Article
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Titulo",
  "description": "Descripcion",
  "image": {...},
  "author": {...},
  "publisher": {...},
  "mainEntityOfPage": {...},
  "keywords": "...",
  "articleSection": "Categoria",
  "wordCount": 3000,
  "inLanguage": "es-MX"
}
```

### Schema.org FAQPage
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Pregunta 1?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Respuesta..."
      }
    }
  ]
}
```

### Schema.org BreadcrumbList
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://..."},
    {"@type": "ListItem", "position": 2, "name": "Blog", "item": "https://.../blog/"},
    {"@type": "ListItem", "position": 3, "name": "Categoria", "item": "https://.../categoria/..."},
    {"@type": "ListItem", "position": 4, "name": "Titulo Articulo"}
  ]
}
```

## 9.2 Keywords Strategy

El prompt solicita a ChatGPT:

- **Keyword primaria:** Termino principal del articulo
- **Keywords secundarias:** 3-4 terminos relacionados
- **Keywords LSI:** 5 terminos semanticos latentes

Ejemplo de distribucion:
```
Primary: "seguridad privada CDMX"
Secondary: "guardias de seguridad, vigilancia empresarial, escoltas ejecutivos"
LSI: "proteccion patrimonial, monitoreo CCTV, control de acceso, seguridad corporativa, alarmas"
```

## 9.3 Optimizacion de Headings

El articulo genera automaticamente una jerarquia correcta:

```
H1: [Keyword primaria] - Titulo descriptivo (50-60 chars)
  H2: Introduccion con keyword
  H2: Servicios de [Empresa] con keyword
  H2: Tecnologia con keyword
  H2: Experiencia con keyword
  H2: Beneficios con keyword
  H2: Proceso con keyword
  H2: Cobertura con keyword
  H2: Conclusion con keyword
  H2: Preguntas Frecuentes con keyword
```

## 9.4 ALT Text para Imagenes

Todas las imagenes incluyen ALT descriptivo:

```html
<img src="..." alt="Titulo del articulo - Nombre Empresa">
<img src="..." alt="Keyword primaria - Servicio 1">
<img src="..." alt="Keyword primaria - Servicio 2">
```

## 9.5 Enlaces Internos

El articulo incluye automaticamente:
- Link a la pagina del negocio
- Link a la categoria
- Links en breadcrumbs
- Links en sidebar a otras secciones

---

# 10. ESCALABILIDAD Y REUTILIZACION

## 10.1 Como Adaptar a Otros Sitios

### Paso 1: Preparar el Nuevo Sitio

1. Crear estructura de carpetas igual a la documentada
2. Configurar `blog/index.html` con marcadores
3. Subir imagenes de stock organizadas

### Paso 2: Duplicar el Workflow

1. Exportar `workflow-COMPLETO-LOCAL.json`
2. Importar en nueva instancia n8n
3. Renombrar workflow

### Paso 3: Modificar Configuracion

En el nodo "Selector Empresa", actualizar:

```javascript
const config = {
  baseUrl: 'https://NUEVO-SITIO.com',
  github: {
    owner: 'NUEVA-ORG',
    repo: 'NUEVO-REPO',
    branch: 'main'
  },
  categories: [
    {
      id: 'nueva-categoria',
      name: 'Nueva Categoria',
      slug: 'nueva-categoria',
      categoryPage: '/categoria/nueva-categoria.html'
    }
  ],
  businesses: [
    // Nuevos negocios
  ],
  articleTypes: [
    // Tipos de articulo
  ],
  images: [
    // Nuevas imagenes
  ]
};
```

### Paso 4: Actualizar Credenciales

- OpenAI API Key (puede reutilizarse)
- GitHub Token (nuevo repositorio)
- Telegram Bot (nuevo chat si se desea)

### Paso 5: Actualizar Prompt

En el nodo "Constructor Prompt", ajustar:
- Nombre del sector/industria
- Contexto geografico
- Tono y estilo

## 10.2 Partes Reutilizables

| Componente | Reutilizable | Notas |
|------------|--------------|-------|
| Estructura HTML del articulo | SI | Solo cambiar branding |
| CSS del articulo | SI | Ajustar colores de marca |
| CSS de cards | SI | Ajustar colores de marca |
| Nodos del workflow | SI | Solo cambiar configuracion |
| Prompt base | PARCIAL | Ajustar sector/industria |
| Schema.org | SI | Cambiar datos de publisher |

## 10.3 Partes a Personalizar

| Componente | Personalizacion Necesaria |
|------------|---------------------------|
| config.categories | Nuevas categorias del sitio |
| config.businesses | Nuevos negocios a promocionar |
| config.images | Imagenes del nuevo sector |
| Logo y branding | Header/Footer del articulo |
| URLs de GitHub | Nuevo repositorio |
| Telegram | Nuevo bot/chat |

## 10.4 Arquitectura Multi-Sitio

Para gestionar multiples sitios desde una instancia n8n:

```
n8n Instance
├── Workflow: Blog Sitio A
├── Workflow: Blog Sitio B
├── Workflow: Blog Sitio C
└── Credentials (compartidas donde aplique)
```

**Ventajas:**
- Un solo n8n para multiples sitios
- Reutilizacion de API keys
- Gestion centralizada

**Consideraciones:**
- Naming conventions claros para workflows
- Documentar que workflow corresponde a que sitio
- Cuidado con rate limits de APIs

---

# 11. BUENAS PRACTICAS Y ERRORES COMUNES

## 11.1 Errores a Evitar

### Error 1: Marcador Faltante
**Problema:** El workflow falla en "Insertar Card" porque no encuentra el marcador.

**Causa:** El archivo blog/index.html no tiene `<!-- n8n:INSERT-NEW-CARDS-HERE -->`

**Solucion:** Asegurarse de que el marcador existe EXACTAMENTE como se espera:
```html
<!-- n8n:INSERT-NEW-CARDS-HERE -->
```

### Error 2: JSON Invalido de ChatGPT
**Problema:** El nodo "Validar" falla con "Error JSON"

**Causa:** ChatGPT a veces incluye markdown o texto extra

**Solucion:** El nodo Validar ya limpia el JSON:
```javascript
let t = r.choices[0].message.content
  .replace(/```json\n?/gi, '')
  .replace(/```\n?/gi, '')
  .trim();
```

### Error 3: Token de GitHub Expirado
**Problema:** Los nodos de GitHub fallan con 401 Unauthorized

**Causa:** El Personal Access Token expiro

**Solucion:** Generar nuevo token en GitHub Settings > Developer Settings > Personal Access Tokens

### Error 4: Contenido con Placeholders
**Problema:** El articulo muestra textos como "Contenido..." o "H3 Subtema 1"

**Causa:** El prompt no era lo suficientemente explicito

**Solucion:** Usar el prompt mejorado que incluye:
```
== REGLAS CRITICAS ==
1. TODO el contenido debe ser REAL, ESPECIFICO y PROFESIONAL
2. PROHIBIDO usar placeholders como "Contenido...", "Descripcion del paso...", etc.
```

### Error 5: Imagenes Repetidas
**Problema:** Varios articulos usan las mismas imagenes

**Causa:** No se implemento el tracking de imagenes usadas

**Solucion:** Usar Fisher-Yates shuffle y staticData:
```javascript
const staticData = $getWorkflowStaticData('global');
if (!staticData.imagenesUsadas) staticData.imagenesUsadas = [];
// ... logica de shuffle y tracking
staticData.imagenesUsadas.push(heroImage, ...galleryImages);
```

### Error 6: Card No Alineada
**Problema:** El boton CTA de la card no queda al fondo

**Causa:** Falta CSS de flexbox

**Solucion:** Incluir estilos inline en la card:
```html
<article class="blog-card" style="display:flex;flex-direction:column;height:100%;">
  ...
  <div class="blog-card-content" style="display:flex;flex-direction:column;flex-grow:1;">
    ...
    <a style="margin-top:auto;align-self:flex-start;">...</a>
  </div>
</article>
```

## 11.2 Checklist de Revision

### Antes de Activar el Workflow

- [ ] Verificar que blog/index.html tiene el marcador
- [ ] Confirmar que las credenciales son validas
- [ ] Probar ejecucion manual
- [ ] Revisar articulo generado
- [ ] Verificar card insertada correctamente
- [ ] Confirmar notificacion de Telegram

### Despues de Cada Ejecucion

- [ ] Articulo aparece en sitio web
- [ ] Card visible en blog/index.html
- [ ] Links funcionan correctamente
- [ ] Imagenes cargan
- [ ] Schema.org valido (usar Google Rich Results Test)

### Mantenimiento Mensual

- [ ] Revisar logs de errores en n8n
- [ ] Verificar que tokens no esten por expirar
- [ ] Actualizar lista de negocios si hay nuevos
- [ ] Agregar nuevas imagenes de stock
- [ ] Revisar metricas SEO de articulos

## 11.3 QA del Workflow

### Test 1: Ejecucion Manual
1. Click en "Execute Workflow"
2. Esperar completado
3. Verificar cada nodo en verde

### Test 2: Validacion de Articulo
1. Abrir URL del articulo
2. Verificar que todo el contenido es real (no placeholders)
3. Probar accordion de FAQ
4. Verificar responsive en mobile

### Test 3: Validacion de Card
1. Ir a blog/index.html
2. Verificar nueva card aparece primera
3. Verificar imagen carga
4. Click en link funciona

### Test 4: Validacion SEO
1. Usar Google Rich Results Test
2. Verificar Schema.org Article
3. Verificar Schema.org FAQPage
4. Verificar BreadcrumbList

## 11.4 Monitoreo y Alertas

### Telegram como Sistema de Alertas
El nodo Telegram puede modificarse para alertar errores:

```javascript
// En un nodo Error Handler
const errorMessage = {
  chat_id: "TU_CHAT_ID",
  text: "❌ *Error en Workflow*\n\nError: " + $input.first().json.error.message,
  parse_mode: "Markdown"
};
```

### Logs de n8n
- Revisar Executions en n8n
- Filtrar por Failed
- Analizar error message
- Corregir y re-ejecutar

---

# 12. CONCLUSION

## 12.1 Resultado Final Esperado

Al implementar este sistema completo, obtendras:

1. **Articulos Profesionales Automaticos**
   - Contenido extenso (3000+ palabras)
   - SEO optimizado
   - Estructura consistente
   - Modulos visuales atractivos

2. **Cards Uniformes**
   - Diseno consistente
   - Layout responsive
   - Insercion automatica

3. **SEO Automatizado**
   - Schema.org completo
   - Meta tags optimizados
   - Keywords estrategicos

4. **Operacion Sin Intervencion**
   - Ejecucion cada 3 dias
   - Notificaciones automaticas
   - Manejo de errores

## 12.2 Impacto en SEO y Marketing

| Metrica | Impacto Esperado |
|---------|------------------|
| Contenido fresco | +1 articulo cada 3 dias |
| Paginas indexadas | Crecimiento constante |
| Keywords rankeadas | Expansion de long-tail |
| Trafico organico | Incremento progresivo |
| Autoridad del dominio | Mejora con contenido consistente |

## 12.3 Recomendaciones Finales

### Para Desarrollo
- Siempre probar en un repositorio de staging primero
- Mantener backups del workflow
- Documentar cualquier modificacion

### Para SEO
- Monitorear posiciones de keywords
- Analizar que tipos de articulo funcionan mejor
- Ajustar prompt segun resultados

### Para Operaciones
- Revisar logs semanalmente
- Rotar API keys periodicamente
- Mantener lista de negocios actualizada

### Para Escalabilidad
- Un workflow por sitio
- Centralizar gestion en una instancia n8n
- Estandarizar naming conventions

---

## ANEXOS

### A1: Glosario de Terminos

| Termino | Definicion |
|---------|------------|
| n8n | Plataforma de automatizacion de workflows |
| Workflow | Flujo de trabajo automatizado |
| Node | Paso individual en un workflow |
| Trigger | Evento que inicia un workflow |
| staticData | Datos persistentes entre ejecuciones |
| Schema.org | Vocabulario de datos estructurados |
| Base64 | Codificacion para transferencia de datos |
| SHA | Hash de version de archivo en GitHub |
| Fisher-Yates | Algoritmo de shuffle aleatorio |
| LSI Keywords | Latent Semantic Indexing keywords |

### A2: URLs de Referencia

- n8n Documentation: https://docs.n8n.io
- OpenAI API: https://platform.openai.com/docs
- GitHub API: https://docs.github.com/en/rest
- Telegram Bot API: https://core.telegram.org/bots/api
- Schema.org: https://schema.org
- Google Rich Results Test: https://search.google.com/test/rich-results

### A3: Comandos Utiles

```bash
# Validar JSON del workflow
cat workflow-COMPLETO-LOCAL.json | jq .

# Verificar estructura de archivos
tree -L 3 sitio-web/

# Buscar marcador en index
grep -n "n8n:INSERT" blog/index.html
```

---

**Fin del Documento**

*Documento generado para Paginas Amarillas Mexico*
*Version 1.0 - Diciembre 2024*
