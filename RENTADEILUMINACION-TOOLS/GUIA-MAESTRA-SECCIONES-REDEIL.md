# GUIA MAESTRA DE SECCIONES - REDEIL

## Documento de Homologacion para Paginas de Servicios

**Version:** 1.0
**Fecha:** Diciembre 2024
**Basado en:** /renta-de-iluminacion/renta-de-guirnaldas.html
**Autor:** REDEIL - Renta de Iluminacion Profesional

---

## INTRODUCCION

Este documento establece las reglas obligatorias para crear cualquier nueva seccion de servicios en el sitio web de REDEIL. Todas las paginas deben seguir esta estructura sin excepciones para garantizar consistencia visual, SEO optimizado y experiencia de usuario uniforme.

**REGLA CRITICA:** Antes de crear cualquier nueva seccion, este documento debe leerse completamente y aplicarse de forma estricta.

---

## 1. ESTRUCTURA GENERAL DEL ARCHIVO HTML

### 1.1 Convencion de Nombres de Archivos

- Usar kebab-case (palabras separadas por guiones); ejemplo: `renta-de-guirnaldas.html`;
- Iniciar siempre con `renta-de-` seguido del nombre del servicio;
- No usar espacios, acentos ni caracteres especiales;
- Mantener nombres descriptivos y cortos; maximo 40 caracteres;
- Ejemplos validos: `renta-de-guirnaldas.html`, `renta-de-letras-gigantes.html`, `renta-de-pistas-led.html`;

### 1.2 Ubicacion Correcta Dentro del Sitio

```
/RENTADEILUMINACION/
├── index.html
├── servicios.html
├── css/
│   └── style.css
├── js/
│   └── app.js
├── img/
│   ├── img-index/
│   └── galeria/
└── renta-de-iluminacion/
    ├── iluminacion.html
    ├── renta-de-guirnaldas.html
    └── renta-de-[nuevo-servicio].html
```

- Todas las paginas de servicios de iluminacion van dentro de `/renta-de-iluminacion/`;
- Las imagenes especificas del servicio van en `/img/img-index/` o `/img/galeria/`;
- Nunca crear carpetas adicionales sin autorizacion;

### 1.3 Estructura Base del Documento HTML

```html
<!DOCTYPE html>
<html lang="es-MX">
<head>
  <!-- Meta tags obligatorios -->
  <!-- SEO Meta Tags -->
  <!-- Open Graph -->
  <!-- Twitter Cards -->
  <!-- Favicon -->
  <!-- Preconnect -->
  <!-- Fonts -->
  <!-- Styles -->
  <!-- Schema.org JSON-LD -->
</head>
<body>
  <!-- Skip Link (Accesibilidad) -->
  <!-- HEADER -->
  <!-- BREADCRUMB -->
  <!-- MAIN CONTENT -->
    <!-- HERO SECTION -->
    <!-- CATALOGO/TIPOS DEL SERVICIO -->
    <!-- USOS Y APLICACIONES -->
    <!-- QUE INCLUYE EL SERVICIO -->
    <!-- GALERIA -->
    <!-- PREGUNTAS FRECUENTES -->
    <!-- ZONAS DE COBERTURA -->
    <!-- CTA SECTION -->
    <!-- FORMULARIO DE COTIZACION -->
  <!-- FOOTER -->
  <!-- WhatsApp Float Button -->
  <!-- Scripts -->
</body>
</html>
```

### 1.4 Orden Obligatorio de Etiquetas en Head

1. `<meta charset="utf-8">`;
2. `<meta name="viewport">`;
3. `<title>`;
4. `<meta name="description">`;
5. `<meta name="keywords">`;
6. `<meta name="author">`;
7. `<meta name="robots">`;
8. `<link rel="canonical">`;
9. Open Graph meta tags;
10. Twitter Card meta tags;
11. Favicon links;
12. Preconnect links;
13. Font links;
14. Stylesheet links;
15. Schema.org JSON-LD script;

### 1.5 Comentarios HTML Estandarizados

Usar el siguiente formato para separar secciones:

```html
<!-- ============================================
     NOMBRE DE LA SECCION
     ============================================ -->
```

Secciones que deben tener comentario:
- HEADER;
- BREADCRUMB;
- MAIN CONTENT;
- HERO SECTION;
- Cada seccion dentro de main;
- FOOTER;

---

## 2. HEADER (HOMOLOGACION TOTAL)

### 2.1 Estructura Exacta del Header

```html
<!-- Skip to main content (Accessibility) -->
<a href="#main-content" class="skip-link">Saltar al contenido principal</a>

<header class="site-header" role="banner">
  <div class="container">
    <div class="header-inner">
      <!-- Logo -->
      <a href="../index.html" class="logo" aria-label="REDEIL - Inicio">
        <img src="../img/logo-redeil.png" alt="REDEIL - Renta de Iluminacion" width="180" height="60" loading="eager">
      </a>

      <!-- Navigation -->
      <nav class="main-nav" role="navigation" aria-label="Navegacion principal">
        <button class="nav-toggle" aria-expanded="false" aria-controls="main-menu" aria-label="Abrir menu">
          <span class="hamburger"></span>
        </button>

        <ul id="main-menu" class="nav-menu">
          <li><a href="../index.html">Inicio</a></li>
          <li class="has-submenu">
            <a href="../servicios.html">Servicios</a>
            <ul class="submenu">
              <li class="has-submenu">
                <a href="iluminacion.html">Iluminacion</a>
                <ul class="submenu">
                  <li><a href="renta-de-guirnaldas.html">Renta de Guirnaldas</a></li>
                  <!-- Agregar nuevos servicios aqui -->
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </nav>

      <!-- CTA Header -->
      <a href="#cotizar" class="btn btn-primary header-cta">Cotiza Gratis</a>
    </div>
  </div>
</header>
```

### 2.2 Logo

- Ruta relativa desde subcarpeta: `../img/logo-redeil.png`;
- Dimensiones obligatorias: width="180" height="60";
- Atributo loading="eager" obligatorio;
- aria-label="REDEIL - Inicio" obligatorio;

### 2.3 Menu Principal

- Estructura de tres niveles: Inicio > Servicios > Iluminacion > [Servicio especifico];
- La pagina actual debe tener clase `class="active"`;
- Todos los enlaces deben ser relativos;
- Actualizar el menu en TODAS las paginas cuando se agregue un nuevo servicio;

### 2.4 CTA Principal Header

- Texto obligatorio: "Cotiza Gratis";
- Enlace obligatorio: `#cotizar`;
- Clases obligatorias: `btn btn-primary header-cta`;

### 2.5 Clases CSS Obligatorias del Header

- `.site-header` - Contenedor principal;
- `.container` - Contenedor de ancho maximo;
- `.header-inner` - Grid interno;
- `.logo` - Enlace del logo;
- `.main-nav` - Navegacion principal;
- `.nav-toggle` - Boton hamburguesa mobile;
- `.nav-menu` - Lista de navegacion;
- `.has-submenu` - Items con submenu;
- `.submenu` - Submenus anidados;
- `.header-cta` - Boton CTA;

---

## 3. BREADCRUMB

### 3.1 Estructura Obligatoria

```html
<section class="breadcrumb-section" aria-label="Breadcrumb">
  <div class="container">
    <nav class="breadcrumb">
      <ol itemscope itemtype="https://schema.org/BreadcrumbList">
        <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
          <svg class="breadcrumb-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
            <polyline points="9 22 9 12 15 12 15 22"/>
          </svg>
          <a itemprop="item" href="../index.html"><span itemprop="name">Inicio</span></a>
          <meta itemprop="position" content="1" />
        </li>
        <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
          <a itemprop="item" href="../servicios.html"><span itemprop="name">Servicios</span></a>
          <meta itemprop="position" content="2" />
        </li>
        <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
          <a itemprop="item" href="iluminacion.html"><span itemprop="name">Iluminacion</span></a>
          <meta itemprop="position" content="3" />
        </li>
        <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
          <span itemprop="name">[Nombre del Servicio]</span>
          <meta itemprop="position" content="4" />
        </li>
      </ol>
    </nav>
  </div>
</section>
```

### 3.2 Reglas del Breadcrumb

- El ultimo item NO lleva enlace; solo el nombre;
- Incluir schema.org markup obligatorio;
- Icono de casa solo en el primer item;
- Posiciones numeradas correctamente;

---

## 4. HERO SECTION

### 4.1 Estructura Obligatoria

```html
<section class="hero hero-two-columns" aria-labelledby="hero-title">
  <div class="hero-background">
    <picture>
      <source srcset="../img/hero-[servicio].webp" type="image/webp">
      <img src="../img/hero-[servicio].jpg" alt="" aria-hidden="true" loading="eager" fetchpriority="high">
    </picture>
    <div class="hero-overlay"></div>
  </div>

  <div class="container">
    <div class="hero-grid">
      <!-- Columna 1: Titulo y CTAs -->
      <div class="hero-content">
        <h1 id="hero-title">[Titulo Principal con Keyword + CDMX]</h1>
        <p class="hero-subtitle">[Subtitulo persuasivo y descriptivo]</p>

        <div class="hero-ctas">
          <a href="#cotizar" class="btn btn-primary btn-lg">Cotiza tu Evento</a>
          <a href="https://wa.me/525530682988?text=[mensaje]" class="btn btn-whatsapp btn-lg" target="_blank" rel="noopener">
            <svg>...</svg>
            WhatsApp
          </a>
        </div>
      </div>

      <!-- Columna 2: Introduccion Marketing SEO -->
      <div class="hero-intro">
        <p>[Parrafo 1: Introduccion con keywords en negritas]</p>
        <p>[Parrafo 2: Propuesta de valor y CTA textual]</p>
      </div>
    </div>
  </div>
</section>
```

### 4.2 Uso Obligatorio del H1

- Solo UN H1 por pagina;
- Debe contener la keyword principal + ubicacion geografica;
- Formato: "[Servicio] en CDMX" o "[Servicio] para Eventos en CDMX";
- Maximo 60 caracteres;
- Ejemplos:
  - "Renta de Guirnaldas para Eventos en CDMX";
  - "Renta de Letras Gigantes para Bodas en CDMX";
  - "Renta de Pistas de Baile LED en CDMX";

### 4.3 Subtitulo Hero

- Complementa el H1 con beneficio o propuesta de valor;
- Incluir keywords secundarias de forma natural;
- Maximo 120 caracteres;
- Debe persuadir al usuario a seguir leyendo;

### 4.4 Imagen de Fondo Hero

- Formato: WebP con fallback JPG;
- Resolucion minima: 1920x1080px;
- Peso maximo: 200KB (WebP) / 400KB (JPG);
- Alt vacio (`alt=""`) con `aria-hidden="true"` (es decorativa);
- loading="eager" y fetchpriority="high" obligatorios;

### 4.5 CTAs del Hero

- CTA Primario: "Cotiza tu Evento" -> enlace a #cotizar;
- CTA Secundario: "WhatsApp" -> enlace a wa.me con mensaje predefinido;
- El mensaje de WhatsApp debe ser especifico del servicio;

### 4.6 Texto de Introduccion SEO

**Parrafo 1 (obligatorio):**
- 50-80 palabras;
- Incluir keyword principal en negritas;
- Mencionar CDMX y Estado de Mexico;
- Describir el servicio y sus variantes;

**Parrafo 2 (obligatorio):**
- 30-50 palabras;
- Mencionar que incluye el servicio;
- Terminar con CTA textual: "Cotiza hoy sin compromiso.";

---

## 5. SECCION DE CATALOGO / TIPOS DEL SERVICIO

### 5.1 Estructura Obligatoria

```html
<section class="info-cards-section" aria-labelledby="tipos-title">
  <div class="container">
    <header class="section-header">
      <h2 id="tipos-title">[Catalogo de X Disponibles]</h2>
      <p>[Subtitulo descriptivo]</p>
    </header>

    <div class="info-cards-grid">
      <!-- Cards de 9 tipos/variantes -->
    </div>
  </div>
</section>
```

### 5.2 Estructura de Cada Card

```html
<article class="info-card">
  <div class="info-card-image">
    <img src="../img/img-index/[imagen].avif" alt="[Descripcion]" loading="lazy">
    <span class="info-card-badge">[Badge opcional]</span>
  </div>
  <div class="info-card-content">
    <h3>[Nombre del Tipo]</h3>
    <p class="info-card-tagline">"[Frase corta y memorable]"</p>
    <p>[Descripcion de 50-80 palabras explicando caracteristicas y usos]</p>
    <div class="info-card-specs">
      <span class="info-card-spec">
        <svg>...</svg>
        [Especificacion 1]
      </span>
      <span class="info-card-spec">
        <svg>...</svg>
        [Especificacion 2]
      </span>
    </div>
  </div>
</article>
```

### 5.3 Reglas de las Cards

- Exactamente 9 cards en grid de 3x3;
- Cada card debe tener imagen, titulo H3, tagline, descripcion y specs;
- El badge es opcional; usar para destacar: "Mas Popular", "Premium", "Eficiente", "Exterior";
- Las imagenes deben ser en formato AVIF o WebP;
- Altura de imagen: 270px;
- La descripcion debe ser unica y no repetir contenido entre cards;

### 5.4 Badges Permitidos

- `badge-popular` - "Mas Popular";
- `badge-premium` - "Premium";
- `badge-exterior` - "Exterior";
- Sin clase adicional - Badge estandar;

---

## 6. SECCION USOS Y APLICACIONES

### 6.1 Estructura Obligatoria

```html
<section class="featured-service" aria-labelledby="usos-title">
  <div class="container">
    <div class="featured-grid">
      <div class="featured-intro">
        <h2 id="usos-title">Usos de [Servicio]</h2>
        <p class="featured-tagline">[Tagline persuasivo]</p>
      </div>
      <div class="featured-content">
        <p>[Parrafo 1: Versatilidad y usos principales con keywords en negritas]</p>
        <p>[Parrafo 2: Mas usos y CTA implicito]</p>
      </div>
    </div>
  </div>
</section>
```

### 6.2 Reglas de Contenido

- H2 obligatorio con formato "Usos de [Servicio]";
- Tagline corto y persuasivo;
- Dos parrafos de 60-100 palabras cada uno;
- Mencionar al menos 8 usos especificos en negritas;
- Incluir tipos de eventos: bodas, XV anos, corporativos, cumpleanos;
- Terminar con frase de accion: "nuestro equipo te ayuda a hacerla realidad";

---

## 7. SECCION QUE INCLUYE EL SERVICIO

### 7.1 Estructura Obligatoria

```html
<section class="features-section" aria-labelledby="incluye-title">
  <div class="container">
    <header class="section-header">
      <h2 id="incluye-title">Que Incluye el Servicio?</h2>
      <p>[Subtitulo sobre beneficio principal]</p>
    </header>

    <div class="features-grid">
      <!-- 6 feature cards -->
    </div>
  </div>
</section>
```

### 7.2 Estructura de Cada Feature Card

```html
<div class="feature-card">
  <div class="feature-icon">
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      [Icono SVG]
    </svg>
  </div>
  <h3>[Nombre del Beneficio]</h3>
  <p>[Descripcion de 20-30 palabras]</p>
</div>
```

### 7.3 Los 6 Beneficios Obligatorios

1. **Asesoria Personalizada** - Icono de personas;
2. **Transporte Incluido** - Icono de camion;
3. **Instalacion Profesional** - Icono de herramienta;
4. **Montaje Anticipado** - Icono de reloj;
5. **Desmontaje Sin Preocupaciones** - Icono de caja;
6. **Equipo de Respaldo** - Icono de escudo;

### 7.4 Reglas de las Features

- Exactamente 6 cards;
- Icono SVG de 48x48;
- H3 corto (maximo 4 palabras);
- Descripcion que resuelve una preocupacion del cliente;

---

## 8. SECCION GALERIA

### 8.1 Estructura Obligatoria

```html
<section class="gallery-section" aria-labelledby="galeria-title">
  <div class="container">
    <header class="section-header">
      <h2 id="galeria-title">Nuestros Trabajos con [Servicio]</h2>
      <p>Inspirate con algunos de los eventos que hemos iluminado en CDMX y Estado de Mexico</p>
    </header>

    <div class="gallery-grid">
      <!-- 8 imagenes -->
    </div>
  </div>
</section>
```

### 8.2 Estructura de Cada Imagen

```html
<figure class="gallery-item">
  <img src="../img/galeria/[servicio]-0X.jpg" alt="[Descripcion del evento]" loading="lazy">
</figure>
```

### 8.3 Reglas de la Galeria

- Exactamente 8 imagenes;
- Grid de 4 columnas en desktop, 2 en mobile;
- Formato JPG o WebP;
- Alt descriptivo para cada imagen;
- loading="lazy" obligatorio;
- Sin texto overlay (solo imagenes);

---

## 9. SECCION PREGUNTAS FRECUENTES (FAQ)

### 9.1 Estructura Obligatoria

```html
<section class="faq-section" aria-labelledby="faq-title">
  <div class="container">
    <header class="section-header">
      <h2 id="faq-title">Preguntas Frecuentes sobre [Servicio]</h2>
      <p>Resolvemos tus dudas mas comunes</p>
    </header>

    <div class="faq-grid">
      <!-- 6 preguntas -->
    </div>
  </div>
</section>
```

### 9.2 Estructura de Cada Pregunta

```html
<details class="faq-item">
  <summary>[Pregunta en formato de pregunta directa]</summary>
  <div class="faq-answer">
    <p>[Respuesta de 50-80 palabras con keywords naturales]</p>
  </div>
</details>
```

### 9.3 Las 6 Preguntas Obligatorias (Adaptar al Servicio)

1. **Cantidad/Dimensiones** - "Cuantos [metros/unidades] necesito para mi evento?";
2. **Instalacion** - "El servicio incluye instalacion?";
3. **Variantes** - "Que tipos de [servicio] tienen disponibles?";
4. **Anticipacion** - "Con cuanta anticipacion debo reservar?";
5. **Condiciones** - "Funciona en [exteriores/condiciones especificas]?";
6. **Contingencias** - "Que pasa si [problema comun]?";

### 9.4 Reglas de las FAQ

- Exactamente 6 preguntas;
- Usar elemento `<details>` para accordion nativo;
- Preguntas deben ser las que realmente hacen los clientes;
- Respuestas deben resolver objeciones de compra;
- Incluir keywords de forma natural;
- Referenciar en Schema.org FAQPage;

---

## 10. SECCION ZONAS DE COBERTURA

### 10.1 Estructura Obligatoria

```html
<section class="coverage-section" aria-labelledby="cobertura-title">
  <div class="container">
    <header class="section-header">
      <h2 id="cobertura-title">Zonas de Cobertura</h2>
      <p>Llevamos [servicio] a toda la zona metropolitana</p>
    </header>

    <div class="coverage-grid">
      <div class="coverage-column">
        <h3>Ciudad de Mexico</h3>
        <ul>
          <li>Polanco</li>
          <li>Santa Fe</li>
          <li>Coyoacan</li>
          <li>Condesa / Roma</li>
          <li>San Angel</li>
          <li>Pedregal</li>
          <li>Tlalpan</li>
          <li>Xochimilco</li>
        </ul>
      </div>
      <div class="coverage-column">
        <h3>Estado de Mexico</h3>
        <ul>
          <li>Naucalpan</li>
          <li>Huixquilucan</li>
          <li>Tlalnepantla</li>
          <li>Atizapan</li>
          <li>Metepec</li>
          <li>Toluca</li>
          <li>Valle de Bravo</li>
          <li>Tepotzotlan</li>
        </ul>
      </div>
    </div>
  </div>
</section>
```

### 10.2 Reglas de Cobertura

- Dos columnas: CDMX y Estado de Mexico;
- 8 zonas por columna;
- Zonas mas solicitadas primero;
- H3 para cada region;

---

## 11. SECCION CTA FINAL

### 11.1 Estructura Obligatoria

```html
<section class="cta-section" aria-labelledby="cta-title">
  <div class="container">
    <div class="cta-content">
      <h2 id="cta-title">Listo para [Beneficio Principal]?</h2>
      <p>Cotiza sin compromiso y recibe asesoria personalizada en menos de 2 horas</p>
      <div class="cta-buttons">
        <a href="#cotizar" class="btn btn-primary btn-lg">Solicitar Cotizacion</a>
        <a href="https://wa.me/525530682988?text=[mensaje]" class="btn btn-whatsapp btn-lg" target="_blank" rel="noopener">
          <svg>...</svg>
          WhatsApp Directo
        </a>
      </div>
    </div>
  </div>
</section>
```

### 11.2 Reglas del CTA Final

- H2 en forma de pregunta con beneficio;
- Subtitulo con promesa de respuesta rapida;
- Dos botones: Cotizacion y WhatsApp;
- Fondo con gradiente oscuro o imagen;

---

## 12. SECCION FORMULARIO DE COTIZACION

### 12.1 Estructura Obligatoria

```html
<section class="quote-section" id="cotizar" aria-labelledby="quote-title">
  <div class="container">
    <header class="section-header">
      <h2 id="quote-title">Reserva [Servicio] para tu Evento</h2>
      <p>Aparta tu fecha y asegura disponibilidad</p>
    </header>

    <div class="quote-wrapper">
      <div class="quote-form-container">
        <form class="quote-form" id="quote-form">
          <!-- Campos del formulario -->
        </form>
      </div>

      <div class="quote-cta-container">
        <!-- Informacion de contacto lateral -->
      </div>
    </div>
  </div>
</section>
```

### 12.2 Campos Obligatorios del Formulario

1. **Nombre completo** - input text, required;
2. **WhatsApp de contacto** - input tel, required;
3. **Tipo de [servicio]** - select con opciones del catalogo + "No estoy seguro", required;
4. **Cantidad/Metros** - select con rangos, required;
5. **Fecha del evento** - input date, required;
6. **Tipo de evento** - select (Boda, XV Anos, Cumpleanos, Corporativo, Graduacion, Restaurante, Otro), required;
7. **Ubicacion del evento** - input text, required;
8. **Detalles adicionales** - textarea, optional;

### 12.3 Comportamiento del Formulario

- Envio a WhatsApp via JavaScript;
- Numero de WhatsApp: +52 55 3068 2988;
- Mensaje formateado con todos los datos;
- No usar backend; solo redireccion a WhatsApp;

### 12.4 Script de Envio Obligatorio

```javascript
document.getElementById('quote-form').addEventListener('submit', function(e) {
  e.preventDefault();

  // Recopilar valores
  const nombre = document.getElementById('nombre').value;
  const whatsapp = document.getElementById('whatsapp').value;
  // ... demas campos

  // Formatear fecha
  const fechaFormateada = new Date(fecha).toLocaleDateString('es-MX', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  // Construir mensaje
  let mensaje = `*SOLICITUD DE RESERVACION - [SERVICIO]*%0A%0A`;
  mensaje += `*Nombre:* ${nombre}%0A`;
  // ... demas campos
  mensaje += `%0A_Enviado desde rentadeiluminacion.com_`;

  // Abrir WhatsApp
  window.open(`https://wa.me/525530682988?text=${mensaje}`, '_blank');
});
```

### 12.5 Panel Lateral de Contacto

- Texto persuasivo breve;
- Boton de WhatsApp;
- Informacion de contacto:
  - WhatsApp: 55 3068 2988;
  - Email: hola@rentadeiluminacion.com;
  - Horario: Lunes a Domingo: 8:00 - 18:00;

---

## 13. FOOTER (HOMOLOGACION TOTAL)

### 13.1 Estructura Obligatoria del Footer

El footer tiene 4 secciones verticales:

1. **Footer Main** - Informacion principal;
2. **Footer Zones** - Zonas de cobertura;
3. **Footer Branches** - Sucursales;
4. **Footer Bottom** - Copyright y legal;

### 13.2 Footer Main (4 columnas)

**Columna 1 - About:**
- Logo SVG;
- Descripcion de la empresa;
- Social links (Facebook, Instagram, WhatsApp);

**Columna 2 - Servicios:**
- Ver todos los servicios;
- Iluminacion para Bodas;
- Iluminacion XV Anos;
- Eventos Corporativos;
- Fiestas;

**Columna 3 - Enlaces:**
- Inicio;
- Servicios;
- Iluminacion;
- Renta de Guirnaldas (y otros servicios);
- Cotizacion Rapida;

**Columna 4 - Contacto:**
- Direccion completa;
- Telefono;
- Email;
- Horario;

### 13.3 Footer Zones

- Titulo y descripcion;
- Boton "Ver mapa de cobertura";
- 3 columnas de zonas: CDMX, CDMX Sur, Estado de Mexico;
- Links a paginas de zonas;

### 13.4 Footer Branches

4 sucursales:
- Benito Juarez;
- Polanco;
- Naucalpan;
- Tlalnepantla;

### 13.5 Footer Bottom

- Copyright 2025;
- Links legales: Aviso de Privacidad, Terminos y Condiciones;

### 13.6 Rutas Relativas en Footer

Desde subcarpeta `/renta-de-iluminacion/`:
- Index: `../index.html`;
- Servicios: `../servicios.html`;
- Imagenes: `../img/`;

---

## 14. SEO AVANZADO

### 14.1 Title Obligatorio

**Formato:** `[Keyword Principal] en CDMX | [Keyword Secundaria] | REDEIL`

**Reglas:**
- Maximo 60 caracteres;
- Keyword principal al inicio;
- Incluir CDMX;
- Terminar con marca REDEIL;

**Ejemplo:** `Renta de Guirnaldas para Eventos en CDMX | Focos Edison y LED | REDEIL`

### 14.2 Meta Description Obligatoria

**Formato:** `[Keyword + Beneficio]. [Variantes principales]. [Diferenciador]. [CTA].`

**Reglas:**
- 150-160 caracteres;
- Keyword al inicio;
- Incluir ubicacion;
- Terminar con CTA;

**Ejemplo:** `Renta de guirnaldas de luces para bodas, jardines y eventos en CDMX. Focos Edison vintage, series LED luz calida. Instalacion profesional incluida. Cotiza hoy.`

### 14.3 Jerarquia de Encabezados

```
H1 - Titulo principal (solo 1)
  H2 - Secciones principales
    H3 - Subsecciones o items
```

**H2 obligatorios:**
1. Catalogo de [Servicio] Disponibles;
2. Usos de [Servicio];
3. Que Incluye el Servicio?;
4. Nuestros Trabajos con [Servicio];
5. Preguntas Frecuentes sobre [Servicio];
6. Zonas de Cobertura;
7. [CTA Final];
8. Reserva [Servicio] para tu Evento;

### 14.4 URLs Amigables

**Formato:** `/renta-de-iluminacion/renta-de-[servicio].html`

**Reglas:**
- Usar kebab-case;
- Incluir keyword principal;
- Sin parametros;
- Sin numeros innecesarios;

### 14.5 Enlaces Internos Obligatorios

Cada pagina debe enlazar a:
- index.html;
- servicios.html;
- iluminacion.html;
- Al menos 2 servicios relacionados;

### 14.6 Schema.org JSON-LD Obligatorio

Incluir tres tipos de schema:

**1. Service:**
```json
{
  "@type": "Service",
  "name": "[Nombre del Servicio]",
  "description": "[Descripcion completa]",
  "provider": {
    "@type": "LocalBusiness",
    "name": "REDEIL",
    "telephone": "+52-55-3068-2988"
  },
  "areaServed": ["Ciudad de Mexico", "Estado de Mexico"]
}
```

**2. BreadcrumbList:**
```json
{
  "@type": "BreadcrumbList",
  "itemListElement": [...]
}
```

**3. FAQPage:**
```json
{
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "[Pregunta]",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "[Respuesta]"
      }
    }
  ]
}
```

---

## 15. REGLAS DE ESTILO Y FORMATO

### 15.1 Longitud de Textos

| Elemento | Minimo | Maximo |
|----------|--------|--------|
| Title | 50 | 60 caracteres |
| Meta description | 150 | 160 caracteres |
| H1 | 40 | 60 caracteres |
| H2 | 20 | 50 caracteres |
| H3 | 15 | 40 caracteres |
| Parrafos | 50 | 100 palabras |
| Descripciones cards | 50 | 80 palabras |
| FAQ respuestas | 50 | 80 palabras |

### 15.2 Tono de Comunicacion

- **Profesional pero cercano;**
- **Seguro y confiable;**
- **Orientado a soluciones;**
- **Sin tecnicismos innecesarios;**
- **Enfocado en beneficios, no caracteristicas;**

### 15.3 Segunda Persona Obligatoria

**Correcto:** "Tu evento brillara", "Te ayudamos", "Cotiza tu evento"
**Incorrecto:** "Los eventos brillan", "Ayudamos a los clientes", "Cotizar eventos"

### 15.4 Prohibiciones

- NO usar emojis;
- NO usar signos de exclamacion excesivos;
- NO usar mayusculas para enfatizar (GRATIS, MEJOR);
- NO repetir la misma frase en diferentes secciones;
- NO usar textos genericos como "Lorem ipsum" o "Descripcion aqui";
- NO usar "click aqui" en CTAs;
- NO incluir precios en el sitio;

### 15.5 Buenas Practicas de Accesibilidad

- Skip link al inicio del body;
- role="banner" en header;
- role="navigation" en nav;
- role="main" en main;
- role="contentinfo" en footer;
- aria-labelledby en todas las secciones;
- aria-label en botones con solo icono;
- alt descriptivo en todas las imagenes de contenido;
- alt vacio en imagenes decorativas;

---

## 16. WHATSAPP FLOAT BUTTON

### 16.1 Estructura Obligatoria

```html
<a href="https://wa.me/525530682988?text=[mensaje]" class="whatsapp-float" target="_blank" rel="noopener" aria-label="Contactar por WhatsApp">
  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
    [SVG de WhatsApp]
  </svg>
</a>
```

### 16.2 Reglas

- Posicion fija en esquina inferior derecha;
- Mensaje predefinido especifico del servicio;
- aria-label obligatorio;
- target="_blank" y rel="noopener" obligatorios;

---

## 17. SCRIPTS

### 17.1 Orden de Scripts

```html
<!-- Scripts -->
<script src="../js/app.js" defer></script>
<script>
  // Script especifico de la pagina (formulario)
</script>
```

### 17.2 Reglas

- app.js siempre con defer;
- Scripts especificos inline al final;
- No usar librerias externas innecesarias;

---

## 18. CHECKLIST FINAL OBLIGATORIO

Antes de publicar cualquier nueva seccion, verificar:

### Estructura HTML
- [ ] Archivo nombrado correctamente (renta-de-[servicio].html);
- [ ] Ubicado en /renta-de-iluminacion/;
- [ ] DOCTYPE y lang="es-MX" presentes;
- [ ] Comentarios HTML estandarizados;

### SEO
- [ ] Title con keyword + CDMX + REDEIL (max 60 chars);
- [ ] Meta description optimizada (150-160 chars);
- [ ] Canonical URL correcta;
- [ ] Open Graph completo;
- [ ] Twitter Cards completo;
- [ ] Schema.org JSON-LD (Service, Breadcrumb, FAQ);
- [ ] Solo 1 H1 por pagina;
- [ ] Jerarquia H1 > H2 > H3 correcta;

### Header
- [ ] Skip link presente;
- [ ] Logo con ruta relativa correcta;
- [ ] Menu actualizado con nuevo servicio;
- [ ] Pagina actual con clase active;
- [ ] CTA "Cotiza Gratis" enlazando a #cotizar;

### Breadcrumb
- [ ] 4 niveles: Inicio > Servicios > Iluminacion > [Servicio];
- [ ] Schema.org markup incluido;
- [ ] Ultimo nivel sin enlace;

### Hero Section
- [ ] H1 con keyword + CDMX;
- [ ] Imagen WebP + JPG fallback;
- [ ] Dos CTAs (Cotizar + WhatsApp);
- [ ] Dos parrafos de introduccion SEO;

### Contenido Principal
- [ ] Seccion de Catalogo con 9 cards;
- [ ] Seccion Usos con 2 parrafos;
- [ ] Seccion Incluye con 6 features;
- [ ] Galeria con 8 imagenes;
- [ ] FAQ con 6 preguntas;
- [ ] Zonas de cobertura (CDMX + Edomex);
- [ ] CTA final;
- [ ] Formulario funcional;

### Footer
- [ ] Footer Main (4 columnas);
- [ ] Footer Zones (zonas de cobertura);
- [ ] Footer Branches (4 sucursales);
- [ ] Footer Bottom (copyright + legal);
- [ ] Social links funcionando;

### Funcionalidad
- [ ] Formulario envia a WhatsApp correctamente;
- [ ] WhatsApp float button funcionando;
- [ ] Todos los enlaces internos correctos;
- [ ] Menu responsive funcionando;

### Responsive
- [ ] Probado en mobile (375px);
- [ ] Probado en tablet (768px);
- [ ] Probado en desktop (1280px);
- [ ] Imagenes con tamaño correcto en cada breakpoint;

### Accesibilidad
- [ ] Skip link funcional;
- [ ] Roles ARIA correctos;
- [ ] aria-labelledby en todas las secciones;
- [ ] Alt text en todas las imagenes;

### Performance
- [ ] Imagenes optimizadas (WebP/AVIF);
- [ ] loading="lazy" en imagenes below the fold;
- [ ] loading="eager" en hero;
- [ ] Fonts con preconnect;

---

## 19. INVESTIGACION OBLIGATORIA DEL SERVICIO

**REGLA CRITICA:** Antes de escribir cualquier contenido, es OBLIGATORIO investigar a fondo el servicio o equipo para garantizar informacion tecnica precisa y profesional.

### 19.1 Por Que Investigar

- El contenido generico o impreciso dana la credibilidad de la marca;
- Los clientes profesionales detectan informacion incorrecta;
- El SEO se beneficia de contenido tecnico especifico y unico;
- Diferencia a REDEIL de competidores con contenido superficial;

### 19.2 Fuentes de Investigacion Obligatorias

**Fuentes Primarias (usar siempre):**
1. **Sitios web de REDEIL existentes:**
   - https://rentadeiluminacion.com/
   - https://redeil.com/
   - Buscar paginas existentes del servicio para mantener consistencia;

2. **Fabricantes de equipo profesional:**
   - Chauvet Professional (https://www.chauvetprofessional.com/)
   - Elation Lighting (https://www.elationlighting.com/)
   - Martin by Harman (https://www.martin.com/)
   - ADJ (American DJ)
   - Manufacturers especializados segun el equipo;

3. **Distribuidores y especificaciones tecnicas:**
   - Buscar fichas tecnicas (spec sheets) de equipos reales;
   - Verificar potencias en watts, voltajes, certificaciones IP;
   - Confirmar tecnologias (RGBW, RGBWA, COB, DMX512, Art-Net);

**Fuentes Secundarias (complementarias):**
- Foros de iluminacion profesional;
- Videos de YouTube de instalaciones reales;
- Blogs de empresas de eventos;
- Articulos tecnicos de la industria;

### 19.3 Informacion Tecnica a Investigar

Para cada tipo de equipo, documentar:

**Especificaciones de Potencia:**
- Watts totales del equipo;
- Configuracion de LEDs (ej: 60x10W, 18x15W, 120x10W);
- Tipo de LED (RGBW 4-en-1, RGBWA 5-en-1, RGBW+UV 6-en-1);
- Consumo electrico real;

**Caracteristicas Opticas:**
- Angulo de haz (beam angle): 15°, 25°, 40°, etc.;
- Zoom motorizado si aplica (rango en grados);
- Temperatura de color (2700K-8000K);
- Lumenes de salida;

**Caracteristicas Fisicas:**
- Certificacion IP (IP20 interior, IP65 exterior, IP67 sumergible);
- Material de carcasa (aluminio fundido, plastico ABS);
- Peso del equipo;
- Dimensiones;

**Control y Conectividad:**
- Canales DMX (4CH, 6CH, 9CH, etc.);
- Protocolos soportados (DMX512, Art-Net, sACN, Kling-Net);
- Modos de operacion (standalone, master/slave, sound-activated);

**Vida Util y Garantia:**
- Horas de vida de LEDs (30,000h, 50,000h);
- Tipo de enfriamiento (pasivo, ventilador);

### 19.4 Ejemplo de Investigacion: City Color

**Busqueda realizada:**
```
"City Color LED wash lights professional architectural lighting specifications watts RGBW outdoor IP65"
"City Color 1200W 120x10W RGBW DMX specifications"
"Elation Chauvet Martin architectural wash LED"
```

**Informacion encontrada y aplicada:**
- City Color 1200W: 120 LEDs de 10W RGBW 4-en-1;
- City Color 600W: 60 LEDs de 10W RGBW;
- Certificacion IP65 para uso exterior;
- Control DMX512 con 4/6/9 canales;
- Angulos de haz: 15°, 25°, 40° segun modelo;
- Zoom motorizado disponible: 6° a 32°;
- Vida util LED: 50,000 horas;
- Tecnologia COB disponible para mezcla de color perfecta;
- Opciones RGBWA (5-en-1) con chip ambar;

### 19.5 Como Aplicar la Investigacion al Contenido

**En las 9 Cards del Catalogo:**
- Incluir potencia real en watts;
- Mencionar configuracion de LEDs (ej: "60x10W RGBW");
- Especificar certificaciones (IP65, IP67);
- Usar terminologia tecnica correcta;

**Ejemplo CORRECTO:**
```
<h3>City Color 600W</h3>
<p>Canon profesional con 60 LEDs de 10W RGBW que ofrece
la combinacion ideal de potencia y manejabilidad...</p>
<span class="info-card-spec">600W / 60x10W</span>
<span class="info-card-spec">25° Angulo</span>
```

**Ejemplo INCORRECTO (generico):**
```
<h3>City Color Grande</h3>
<p>Luz muy potente para iluminar espacios grandes...</p>
<span class="info-card-spec">Alta potencia</span>
```

**En las FAQ:**
- Responder con datos tecnicos reales;
- Incluir numeros especificos (watts, metros, horas);
- Explicar tecnologias con precision;

**Ejemplo CORRECTO:**
```
"Nuestros canones City Color tienen certificacion IP65
que garantiza proteccion total contra polvo y chorros
de agua. Estan disenados para operar en exteriores
bajo lluvia moderada."
```

**Ejemplo INCORRECTO:**
```
"Si, funcionan afuera sin problemas."
```

### 19.6 Checklist de Investigacion

Antes de escribir contenido, verificar:

- [ ] Busque informacion en sitios de REDEIL existentes;
- [ ] Investigue especificaciones de fabricantes (Chauvet, Elation, etc.);
- [ ] Documente potencias en watts reales;
- [ ] Confirme configuraciones de LED (cantidad x watts);
- [ ] Verifique certificaciones IP para uso exterior;
- [ ] Identifique protocolos de control (DMX512, Art-Net);
- [ ] Encontre angulos de haz y opciones de zoom;
- [ ] Investigue tecnologias especificas (COB, RGBW, RGBWA);
- [ ] Busque aplicaciones reales del equipo;
- [ ] Confirme preguntas frecuentes reales de clientes;

### 19.7 Terminologia Tecnica Correcta

**Usar estos terminos con precision:**

| Termino | Significado | Uso Correcto |
|---------|-------------|--------------|
| RGBW | Red, Green, Blue, White (4-en-1) | "LEDs RGBW 4-en-1" |
| RGBWA | RGBW + Amber (5-en-1) | "Tecnologia RGBWA para tonos calidos" |
| COB | Chip-On-Board | "LED COB de alta eficiencia" |
| DMX512 | Protocolo de control | "Control DMX512 profesional" |
| IP65 | Proteccion polvo/agua | "Certificacion IP65 para exterior" |
| IP67 | Sumergible temporalmente | "IP67 resistente a inmersion" |
| Wash | Bano de luz amplio | "Efecto wash de color" |
| Beam | Haz concentrado | "Angulo de beam de 15°" |
| Par | Reflector parabolico | "Par LED profesional" |
| Lumen | Unidad de flujo luminoso | "Salida de 15,000 lumenes" |
| Kelvin (K) | Temperatura de color | "2700K luz calida" |

### 19.8 Errores Comunes a Evitar

**NO hacer:**
- Inventar especificaciones tecnicas;
- Usar potencias aproximadas sin verificar;
- Confundir tipos de LED (RGBW vs RGB);
- Omitir certificaciones importantes;
- Usar terminos tecnicos incorrectamente;
- Copiar contenido generico de competidores;

**SI hacer:**
- Investigar cada equipo antes de escribir;
- Usar especificaciones de fabricantes reales;
- Incluir datos tecnicos verificables;
- Explicar beneficios de cada tecnologia;
- Diferenciar entre modelos con datos reales;

---

## 20. PLANTILLA RAPIDA PARA NUEVO SERVICIO

Al crear un nuevo servicio, seguir estos pasos:

1. **INVESTIGAR PRIMERO** (Seccion 19):
   - Buscar informacion tecnica del servicio/equipo;
   - Documentar especificaciones reales;
   - Verificar terminologia correcta;

2. Duplicar `/renta-de-iluminacion/renta-de-guirnaldas.html`;

3. Renombrar a `renta-de-[nuevo-servicio].html`;

4. Buscar y reemplazar:
   - "guirnaldas" -> "[nuevo servicio]";
   - "Guirnaldas" -> "[Nuevo Servicio]";
   - "GUIRNALDAS" -> "[NUEVO SERVICIO]";

5. Actualizar con informacion investigada:
   - Title y meta description con keywords tecnicas;
   - Keywords especificas del equipo;
   - URLs canonicas y Open Graph;
   - Schema.org JSON-LD;
   - Contenido tecnico en cada seccion;
   - Especificaciones reales en las cards;
   - FAQ con respuestas tecnicas precisas;
   - Opciones del formulario relevantes;

6. Actualizar menu en TODAS las paginas del sitio;

7. Verificar checklist completo (Seccion 18);

8. Verificar checklist de investigacion (Seccion 19.6);

---

## 21. CONTACTO PARA DUDAS

Para consultas sobre este documento o excepciones justificadas:

- **Email:** hola@rentadeiluminacion.com
- **WhatsApp:** 55 3068 2988

---

**FIN DEL DOCUMENTO**

*Este documento debe consultarse obligatoriamente antes de crear cualquier nueva seccion de servicios. No se permiten variaciones sin autorizacion previa.*
