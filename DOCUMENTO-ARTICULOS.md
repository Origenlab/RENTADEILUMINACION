# Guia de Creacion de Articulos - Blog REDEIL

## Indice

1. [Introduccion](#introduccion)
2. [Proceso Completo de Creacion](#proceso-completo-de-creacion)
3. [FASE 1: Analisis Previo](#fase-1-analisis-previo)
4. [FASE 2: Parametros de Redaccion](#fase-2-parametros-de-redaccion)
5. [FASE 3: Arquitectura SEO](#fase-3-arquitectura-seo)
6. [FASE 4: Estructura de Contenido](#fase-4-estructura-de-contenido)
7. [FASE 5: Preguntas Frecuentes (FAQ)](#fase-5-preguntas-frecuentes-faq)
8. [FASE 6: Modulos de Interes Final](#fase-6-modulos-de-interes-final)
9. [FASE 7: Integracion de Imagenes](#fase-7-integracion-de-imagenes)
10. [FASE 8: Elementos SEO Adicionales](#fase-8-elementos-seo-adicionales)
11. [FASE 9: Crear Archivo HTML](#fase-9-crear-archivo-html)
12. [FASE 10: Agregar Card en blog.html](#fase-10-agregar-card-en-bloghtml)
13. [Plantilla HTML Completa](#plantilla-html-completa)
14. [Checklist Final](#checklist-final)
15. [Restricciones Absolutas](#restricciones-absolutas)

---

## Introduccion

Esta guia documenta el proceso completo para crear articulos profesionales, optimizados para SEO y orientados a conversiones para el blog de REDEIL. Cada articulo debe seguir los estandares establecidos para mantener coherencia y maximizar el impacto comercial.

### Contexto Empresarial REDEIL

- Empresa mexicana de renta de equipo para eventos
- Operacion en Ciudad de Mexico y Estado de Mexico
- Mas de 10 anos de experiencia en el mercado
- Catalogo incluye: iluminacion, audio, inflables, mobiliario, efectos especiales
- Enfoque en eventos sociales (bodas, XV anos, cumpleanos) y corporativos
- Diferenciador: servicio integral con personal tecnico incluido

---

## Proceso Completo de Creacion

### Resumen del Flujo de Trabajo

```
1. Analizar carpeta de imagenes del servicio
2. Definir palabras clave y estructura SEO
3. Redactar contenido (1,800-2,500 palabras)
4. Crear 5 FAQs con schema estructurado
5. Agregar 3 modulos de interes final
6. Integrar 4-7 imagenes estrategicamente
7. Generar archivo HTML completo
8. Agregar card en blog.html
9. Verificar con checklist final
```

### Estructura de Carpetas

```
RENTADEILUMINACION/
├── blog.html                    <- Pagina principal del blog (agregar card aqui)
├── blog/                        <- Carpeta de articulos
│   ├── renta-bolas-disco-eventos-cdmx.html
│   ├── [nuevo-articulo].html
│   └── ...
├── css/
│   ├── style.css
│   └── blog.css               <- Estilos especificos de articulos
├── img/
│   ├── bola-disco/            <- Imagenes por servicio
│   ├── guirnaldas/
│   ├── luces-neon/
│   └── ...
└── js/
    └── app.js
```

---

## FASE 1: Analisis Previo

### Antes de redactar cualquier contenido:

#### 1.1 Examinar Imagenes Disponibles

Localizar la carpeta de imagenes del servicio y:

- Identificar cada imagen y su contenido visual
- Determinar el orden logico de aparicion dentro del articulo
- Seleccionar 4-7 imagenes representativas
- Preparar para cada imagen:
  - Texto ALT descriptivo con palabra clave integrada naturalmente
  - Ubicacion estrategica en el articulo

**Ejemplo de analisis de imagen:**
```
Imagen: bola-disco-gigante-para-eventos.webp
ALT: Bola disco gigante profesional para eventos y fiestas en CDMX
Ubicacion: Hero principal del articulo
```

#### 1.2 Definir Informacion Base

```
TITULO (max 60 chars): [Titulo con palabra clave principal]
SLUG: [nombre-archivo-optimizado-seo.html]
DESCRIPCION SEO (150-160 chars): [Descripcion con keyword y CTA]
CATEGORIA: [Equipo para Eventos / Iluminacion / Sonido / etc.]
TIEMPO LECTURA: [8-12 min]
IMAGEN PRINCIPAL: [ruta de imagen hero]
SERVICIO RELACIONADO: [pagina del servicio en el sitio]
```

**Ejemplo:**
```
TITULO: Renta de Bolas Disco para Eventos en CDMX | REDEIL
SLUG: renta-bolas-disco-eventos-cdmx.html
DESCRIPCION SEO: Renta de bolas disco profesionales para bodas, XV anos y fiestas en CDMX. Incluye motor e instalacion. Cotiza gratis con REDEIL.
CATEGORIA: Equipo para Eventos
TIEMPO LECTURA: 10 min
IMAGEN PRINCIPAL: ../img/bola-disco/bola-disco-gigante-para-eventos.webp
SERVICIO RELACIONADO: ../equipo-para-eventos/renta-de-bolas-disco.html
```

---

## FASE 2: Parametros de Redaccion

### Persona Gramatical
- Segunda persona del singular (tu/tu)
- Dirigirse directamente al cliente potencial

### Tono y Voz
- Profesional pero accesible
- Experto en produccion de eventos y ambientacion
- Comercial sin ser agresivo
- Confiable y con autoridad en el sector
- Orientado a soluciones y beneficios tangibles

### Extension
- Minimo 1,800 palabras de contenido principal
- Maximo 2,500 palabras incluyendo FAQs y modulos finales
- Parrafos de 3 a 5 oraciones para optima legibilidad

### Formato
- Sin emojis ni iconos decorativos
- Sin texto generico o de relleno
- Sin frases vacias como "en este articulo veremos..."
- Sin repeticion forzada de palabras clave
- HTML limpio y estructurado

---

## FASE 3: Arquitectura SEO

### Titulo H1 (unico)
- Incluir palabra clave principal
- Maximo 60 caracteres para visualizacion optima en SERPs
- Orientado a intencion de busqueda transaccional/informativa

### Estructura de Encabezados
- H2: Secciones principales del articulo (4-6 secciones)
- H3: Subsecciones dentro de cada H2
- Jerarquia logica y semanticamente coherente
- Cada encabezado debe contener palabra clave secundaria o variacion semantica

### Palabras Clave a Integrar

#### Primarias (usar 3-5 veces cada una):
Definir 2-3 keywords principales relacionadas con el servicio.

#### Secundarias (usar 1-2 veces cada una):
Definir 5-8 keywords secundarias y variaciones semanticas.

#### Long-tail (usar 1 vez cada una):
Definir 3-4 frases long-tail especificas.

**Ejemplo para Bolas Disco:**
```
Primarias:
- renta de bolas disco
- bolas disco para eventos
- bola de espejos para fiestas

Secundarias:
- iluminacion decorativa para eventos
- ambientacion para fiestas
- efecto disco para bodas
- bola disco gigante
- renta de equipo de iluminacion CDMX
- decoracion luminosa para XV anos

Long-tail:
- renta de bolas disco para bodas en Ciudad de Mexico
- bola de espejos con motor para eventos
- donde rentar bolas disco en CDMX
```

### Densidad de Keywords
- Primarias: 1.5% - 2%
- Secundarias: distribucion natural
- Evitar keyword stuffing

---

## FASE 4: Estructura de Contenido

### SECCION 1: Introduccion (150-200 palabras)

Debe incluir:
- Apertura que capture atencion inmediata
- Identificacion del problema o necesidad del cliente
- Presentacion del servicio/producto como solucion
- Mencion de REDEIL como proveedor especializado
- Transicion natural al desarrollo del contenido

**Ejemplo:**
```html
<p class="lead">La bola disco ha trascendido generaciones como simbolo universal de celebracion. Su capacidad para dispersar la luz en cientos de destellos la convierte en un elemento decorativo y funcional que eleva cualquier evento.</p>

<p>Cuando planeas un evento, cada detalle cuenta para crear la atmosfera perfecta. La iluminacion juega un papel fundamental, y pocos elementos logran el impacto visual inmediato que ofrece una bola de espejos profesional girando sobre la pista de baile.</p>

<p>En REDEIL hemos iluminado eventos en Ciudad de Mexico y Estado de Mexico durante mas de una decada, y la demanda de bolas disco sigue creciendo...</p>
```

### SECCION 2: Que Es y Como Funciona (200-250 palabras)

Debe incluir:
- Descripcion tecnica del producto/servicio
- Explicacion del efecto visual o beneficio que genera
- Tipos o variantes disponibles
- Equipamiento complementario
- Diferencia entre version profesional y decorativa

### SECCION 3: Aplicaciones por Tipo de Evento (300-400 palabras)

Desarrollar subsecciones H3 para cada tipo de evento:

```html
<h3>Bodas y Recepciones Elegantes</h3>
<p>[Beneficio especifico + ejemplo de uso + resultado visual esperado]</p>

<h3>XV Anos y Fiestas de Cumpleanos</h3>
<p>[Beneficio especifico + ejemplo de uso + resultado visual esperado]</p>

<h3>Eventos Corporativos y Fiestas de Fin de Ano</h3>
<p>[Beneficio especifico + ejemplo de uso + resultado visual esperado]</p>

<h3>Fiestas Tematicas</h3>
<p>[Beneficio especifico + ejemplo de uso + resultado visual esperado]</p>
```

### SECCION 4: Beneficios de Rentar con REDEIL (250-300 palabras)

Puntos obligatorios a cubrir:
- Equipos profesionales de grado comercial
- Variedad de tamanos/opciones disponibles
- Que incluye el servicio (instalacion, accesorios, etc.)
- Personal tecnico para instalacion
- Cobertura en CDMX y Estado de Mexico
- Experiencia comprobada en eventos
- Integracion con otros servicios

### SECCION 5: Como Integrar el Servicio en tu Evento (200-250 palabras)

Consejos practicos:
- Ubicacion y altura recomendada
- Combinacion con otros efectos de iluminacion
- Recomendaciones de uso segun espacio
- Momentos clave para activar el efecto

### SECCION 6: Proceso de Renta con REDEIL (150-200 palabras)

- Pasos para solicitar cotizacion
- Que incluye el servicio
- Tiempos de reservacion recomendados
- Llamado a la accion claro

---

## FASE 5: Preguntas Frecuentes (FAQ)

### Incluir exactamente 5 preguntas frecuentes

Cada FAQ debe:
- Resolver la duda completamente
- Mencionar un beneficio o diferenciador de REDEIL
- Incluir palabra clave secundaria cuando sea natural
- Cerrar con micro-llamado a la accion cuando aplique

### Estructura HTML para FAQs:

```html
<section class="faq-section" id="preguntas-frecuentes">
  <h2>Preguntas Frecuentes</h2>
  <div class="faq-accordion" role="list">
    <div class="faq-item">
      <button class="faq-question" aria-expanded="false">
        <span>[Pregunta optimizada con palabra clave]</span>
        <svg class="faq-chevron" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </button>
      <div class="faq-answer">
        <p>[Respuesta en parrafo de 60-100 palabras, informativa y orientada a conversion]</p>
      </div>
    </div>
    <!-- Repetir para 5 preguntas -->
  </div>
</section>
```

### Preguntas Sugeridas por Tipo de Servicio:

**Para Bolas Disco:**
1. Que tamanos de bolas disco tienen disponibles para renta?
2. La renta incluye instalacion y motor de rotacion?
3. Puedo combinar la bola disco con otros efectos de iluminacion?
4. Cuanto tiempo de anticipacion necesito para reservar?
5. Ofrecen servicio de renta en Estado de Mexico?

**Para Guirnaldas:**
1. Cuantos metros de guirnaldas necesito para mi evento?
2. La instalacion esta incluida en el precio?
3. Que tipo de focos utilizan las guirnaldas?
4. Cubren eventos fuera de CDMX?
5. Con cuanta anticipacion debo reservar?

---

## FASE 6: Modulos de Interes Final

### Crear exactamente 3 modulos al final del articulo

Cada modulo debe tener:
- Titulo corto con palabra clave (maximo 8 palabras)
- Parrafo de 80-120 palabras
- Enfoque especifico
- Llamado a la accion

### Estructura HTML:

```html
<div class="module-complementario">
  <h3>[Titulo con Palabra Clave]</h3>
  <p>[Contenido de 80-120 palabras con CTA]</p>
</div>
```

### Contenido de cada Modulo:

**MODULO 1: Servicio Complementario**
- Enfocado en un servicio complementario o beneficio adicional
- Incluir llamado a la accion hacia cotizacion

**MODULO 2: Experiencia y Trayectoria**
- Enfocado en la experiencia de REDEIL en eventos
- Generar confianza y autoridad

**MODULO 3: Cobertura Geografica**
- Enfocado en cobertura geografica y disponibilidad
- Reforzar servicio en CDMX y Estado de Mexico
- Cerrar con invitacion a contacto

---

## FASE 7: Integracion de Imagenes

### Distribucion Recomendada (4-7 imagenes):

| Ubicacion | Tipo de Imagen | Cantidad |
|-----------|----------------|----------|
| Hero (despues del titulo) | Imagen principal del servicio | 1 |
| Despues de introduccion | Imagen complementaria | 1 |
| Seccion de aplicaciones | Galeria o imagen individual | 1-2 |
| Seccion de beneficios | Imagen de detalle | 1 |
| Galeria antes de FAQs | Grid de 4 imagenes | 4 |

### Formato de Imagen Individual:

```html
<figure class="article-figure">
  <img src="../img/[carpeta]/[nombre-archivo].webp" alt="[Descripcion con keyword]" loading="lazy">
  <figcaption>[Leyenda descriptiva opcional]</figcaption>
</figure>
```

### Formato de Galeria (4 imagenes):

```html
<div class="blog-image-gallery">
  <h3>Galeria de [Servicio] para Eventos</h3>
  <div class="gallery-grid">
    <img src="../img/[carpeta]/[imagen1].webp" alt="[ALT con keyword]" loading="lazy">
    <img src="../img/[carpeta]/[imagen2].webp" alt="[ALT con keyword]" loading="lazy">
    <img src="../img/[carpeta]/[imagen3].webp" alt="[ALT con keyword]" loading="lazy">
    <img src="../img/[carpeta]/[imagen4].webp" alt="[ALT con keyword]" loading="lazy">
  </div>
</div>
```

### Requisitos de Imagenes:

- Formato: .webp (preferido)
- Imagen hero: loading="eager"
- Imagenes secundarias: loading="lazy"
- Alt text: descriptivo con keyword integrada naturalmente
- Tamano recomendado: 800x600px minimo

---

## FASE 8: Elementos SEO Adicionales

### Meta Descripcion

- Exactamente 150-160 caracteres
- Incluir palabra clave principal
- Incluir llamado a la accion
- Mencionar CDMX o Ciudad de Mexico

**Ejemplo:**
```
Renta de bolas disco profesionales para bodas, XV anos y fiestas en CDMX. Incluye motor e instalacion. Cotiza gratis con REDEIL.
```

### Slug Recomendado

Formato: `renta-[servicio]-eventos-cdmx.html`

**Ejemplos:**
- renta-bolas-disco-eventos-cdmx.html
- guirnaldas-focos-edison-bodas-cdmx.html
- luces-neon-xv-anos-renta-cdmx.html

### Schema Estructurado (JSON-LD)

#### Article Schema:
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "[TITULO]",
  "description": "[META DESCRIPCION]",
  "image": "https://rentadeiluminacion.com/img/[carpeta]/[imagen].webp",
  "author": {
    "@type": "Organization",
    "name": "REDEIL"
  },
  "publisher": {
    "@type": "Organization",
    "name": "REDEIL"
  }
}
```

#### FAQPage Schema:
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "[Pregunta 1]",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "[Respuesta 1]"
      }
    }
    // Repetir para 5 preguntas
  ]
}
```

---

## FASE 9: Crear Archivo HTML

### Ubicacion del Archivo

Crear en: `/blog/[slug].html`

### Estructura Completa del HTML

El archivo debe incluir en este orden:

1. **HEAD**
   - Meta charset y viewport
   - Title (max 60 chars)
   - Meta description (150-160 chars)
   - Keywords
   - Canonical URL
   - Open Graph tags
   - Twitter Card tags
   - Favicon
   - Fonts
   - CSS (style.css + blog.css)
   - Article Schema JSON-LD
   - FAQPage Schema JSON-LD

2. **HEADER**
   - Skip link para accesibilidad
   - Logo con enlace a home
   - Navegacion principal con submenus
   - Boton CTA "Cotiza Gratis"
   - IMPORTANTE: Todos los enlaces usan `../` para salir de /blog/

3. **BREADCRUMB**
   - Inicio > Blog > [Categoria del Servicio] > [Titulo del Articulo]
   - Schema BreadcrumbList integrado

4. **HERO SECTION**
   - Badge de categoria
   - Titulo H1
   - Parrafo hook
   - Meta (tiempo de lectura, palabras)
   - Imagen principal

5. **CONTENIDO PRINCIPAL**
   - Tabla de contenidos inline
   - Lead paragraph
   - Secciones con H2 y H3
   - Imagenes con figure/figcaption
   - Modulos de interes (stat-module, tip-module)
   - Benefits box
   - Galeria de imagenes
   - FAQs con accordion
   - CTA final
   - 3 modulos complementarios

6. **SIDEBAR**
   - Navegacion del articulo
   - Servicios relacionados
   - Widget de contacto (WhatsApp, telefono, email)
   - CTA box
   - Experiencia badge

7. **FOOTER**
   - Informacion de marca
   - Links de servicios
   - Zonas de cobertura
   - Sucursales
   - Links legales

8. **SCRIPTS**
   - WhatsApp float button
   - app.js
   - FAQ accordion script

---

## FASE 10: Agregar Card en blog.html

### Ubicacion de Insercion

Localizar el comentario `<!-- n8n:INSERT-NEW-CARDS-HERE -->` en blog.html y agregar la card INMEDIATAMENTE DESPUES.

### Estructura de la Card:

```html
<!-- [Nombre del Servicio] -->
<article class="post-card">
  <div class="post-card-image">
    <img src="img/[carpeta]/[imagen].webp" alt="[ALT con keyword]" loading="lazy" width="400" height="300">
  </div>
  <div class="post-card-content">
    <div class="post-meta">
      <span class="post-read-time">[X] min lectura</span>
      <span class="post-category">[Categoria]</span>
    </div>
    <h3><a href="blog/[slug].html">[Titulo del Articulo]</a></h3>
    <p>[Descripcion breve de 1-2 lineas]</p>
    <a href="blog/[slug].html" class="post-link">Leer mas <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></a>
  </div>
</article>
```

### Importante:
- Las rutas de imagenes en blog.html NO llevan `../` porque esta en el root
- La card del nuevo articulo va como PRIMER elemento despues del marcador
- Maximo 16 cards por pagina de blog

### Si hay mas de 16 Cards:

Mover la ultima card a blog-page-2.html siguiendo el mismo formato.

---

## Plantilla HTML Completa

Ver archivo de referencia: `/blog/renta-bolas-disco-eventos-cdmx.html`

Este archivo contiene la estructura completa y actualizada que debe usarse como base para nuevos articulos.

### Elementos Clave de la Plantilla:

1. **CSS Inline en HEAD**: Incluye todos los estilos necesarios para el articulo
2. **Schema Dual**: Article + FAQPage para maximo SEO
3. **Estructura Responsive**: Grid de 2 columnas (contenido + sidebar)
4. **Componentes Reutilizables**:
   - `.lead` - Parrafo destacado inicial
   - `.interest-module.stat-module` - Estadistica destacada
   - `.interest-module.tip-module` - Consejo profesional
   - `.benefits-box` - Lista de beneficios
   - `.blog-image-gallery` - Galeria de 4 imagenes
   - `.faq-section` - Accordion de preguntas frecuentes
   - `.article-cta-final` - CTA principal
   - `.module-complementario` - Modulos finales

---

## Checklist Final

### Archivo del Articulo

- [ ] Archivo creado en `/blog/[slug].html`
- [ ] Slug optimizado para SEO (minusculas, guiones)
- [ ] Title tag: max 60 caracteres con keyword
- [ ] Meta description: 150-160 caracteres con keyword y CTA
- [ ] Canonical URL correcta
- [ ] Open Graph tags completos
- [ ] Article Schema JSON-LD
- [ ] FAQPage Schema JSON-LD
- [ ] Breadcrumb con schema
- [ ] Todas las rutas internas usan `../`

### Contenido

- [ ] Extension: 1,800-2,500 palabras
- [ ] Introduccion con lead paragraph
- [ ] 4-6 secciones H2
- [ ] Subsecciones H3 donde corresponda
- [ ] 5 FAQs completas
- [ ] 3 modulos de interes final
- [ ] 4-7 imagenes integradas
- [ ] 3+ CTAs distribuidos
- [ ] Links internos a servicios relacionados
- [ ] Sin fechas especificas (contenido atemporal)
- [ ] Sin precios ni costos
- [ ] Sin emojis

### SEO

- [ ] Keyword principal en H1
- [ ] Keywords secundarias en H2s
- [ ] Alt text con keywords en imagenes
- [ ] Densidad de keywords: 1.5-2%
- [ ] Enlaces internos relevantes

### blog.html

- [ ] Card agregada despues de `<!-- n8n:INSERT-NEW-CARDS-HERE -->`
- [ ] Imagen sin `../` (ruta desde root)
- [ ] Categoria correcta
- [ ] Descripcion breve y atractiva

### Pruebas

- [ ] Articulo carga correctamente
- [ ] Navegacion funciona
- [ ] Imagenes cargan
- [ ] FAQ accordion funciona
- [ ] Links internos funcionan
- [ ] Responsividad en movil
- [ ] Boton WhatsApp funciona

---

## Restricciones Absolutas

### NO hacer:

- NO usar frases como "en conclusion", "para finalizar", "en resumen"
- NO incluir emojis, iconos ni caracteres decorativos
- NO usar bullet points excesivos (maximo 2 listas en todo el articulo)
- NO repetir la misma palabra clave mas de 4 veces en forma identica
- NO incluir informacion no verificable sobre REDEIL
- NO usar superlativos vacios sin respaldo ("los mejores", "unicos en el mercado")
- NO generar contenido que suene a inteligencia artificial o plantilla generica
- NO incluir fechas especificas ni precios
- NO usar "Tendencias 2025" o referencias temporales

### SI hacer:

- SI usar segunda persona (tu/tu)
- SI incluir CTAs claros y estrategicos
- SI mencionar CDMX, Estado de Mexico y zonas de cobertura
- SI integrar links internos a servicios relacionados
- SI usar datos concretos sobre experiencia de REDEIL (+10 anos, +15,000 eventos)
- SI invitar a cotizar en lugar de mencionar precios

---

## Entregables por Articulo

Al finalizar cada articulo, documentar:

1. **Archivo HTML**: Ruta completa del archivo creado
2. **Meta Descripcion**: Texto exacto (150-160 chars)
3. **Slug**: URL final del articulo
4. **Tabla de Imagenes**: Nombre de archivo + ALT text para cada imagen
5. **Keywords Utilizadas**: Lista con frecuencia aproximada
6. **Card en blog.html**: Confirmacion de insercion

---

**Ultima actualizacion:** Enero 2025

**Archivo de referencia:** `/blog/renta-bolas-disco-eventos-cdmx.html`
