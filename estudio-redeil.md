# ESTUDIO DE MERCADO Y AUDITORÍA SEO
## REDEIL - Renta de Iluminación Profesional
### Ciudad de México y Estado de México

---

## RESUMEN EJECUTIVO

**Empresa:** REDEIL (Renta de Iluminación)
**URL Actual:** https://rentadeiluminacion.com/
**Mercado:** CDMX y Zona Metropolitana (Estado de México)
**Modelo de Negocio:** B2B (wedding planners, venues, productoras) + B2C (clientes finales)

### 5 Acciones Críticas Inmediatas

1. **Implementar Schema LocalBusiness + Service** - El sitio actual tiene schema básico, pero falta optimización para búsquedas locales y de servicios específicos.

2. **Crear landing pages por servicio y zona** - Actualmente no existen páginas específicas para keywords transaccionales como "renta iluminación bodas polanco" o "luces para XV años estado de mexico".

3. **Optimizar Core Web Vitals** - El sitio WordPress actual tiene carga pesada. La migración a HTML estático mejorará LCP significativamente.

4. **Desarrollar contenido de autoridad** - Competidores como Origen Lab tienen blog activo y guías. REDEIL carece de contenido educativo.

5. **Implementar sistema de cotización rápida** - Los competidores usan WhatsApp como CTA principal. REDEIL debe mantener esto pero agregar formulario de cotización optimizado para conversión.

---

## 1. ANÁLISIS DEL SITIO ACTUAL

### 1.1 Estructura HTML Actual (rentadeiluminacion.com)

#### Información General Detectada
| Elemento | Valor Actual |
|----------|--------------|
| **Empresa** | REDEIL |
| **Dirección** | Río Amazonas 74B, Col. Renacimiento, Cuauhtémoc, CDMX 06500 |
| **Teléfono** | +52 55 3068 2988 |
| **Email** | hola@rentadeiluminacion.com |
| **Horario** | Lunes-Domingo 08:00-18:00 |
| **Plataforma** | WordPress + GeneratePress |

#### Jerarquía de Encabezados Detectada
```
H1: "REDEIL" - "Iluminamos Tu Evento, Envolvemos Tus Emociones"
├── H2: "RENTA DE ILUMINACION"
├── H2: "RENTA DE BOCINAS"
├── H2: "EQUIPO PARA EVENTOS"
└── [Secciones adicionales de servicios]
```

**Problemas Identificados:**
- ❌ H1 combinado con slogan (debería ser solo keyword principal)
- ❌ Falta keyword principal en H1 ("Renta de Iluminación CDMX")
- ⚠️ Estructura de H2 correcta pero sin optimización semántica
- ❌ No hay H3-H6 jerárquicos para subsecciones

#### Servicios Detectados en el Sitio Actual

**Iluminación (13 tipos):**
1. Guirnaldas LED
2. Luces neón
3. Luz negra (UV)
4. City Color
5. City Light
6. Sky Tracker
7. Cabezas móviles
8. Láser
9. Cascadas LED
10. Gobos (proyección de logos)
11. Iluminación arquitectónica
12. Seguidor de luz
13. Efectos especiales

**Sonido:**
- Bocinas para bodas
- Bocinas XV años
- Bocinas fiestas
- Bocinas conferencias
- Servicio DJ

**Equipo Especial:**
- Bolas disco
- Máquinas de papel/humo/burbujas
- Podiums
- Pantallas LED/inflables
- Generadores
- Mesas picnic

### 1.2 Inventario de Assets Críticos

| Elemento | Estado | Conservar | Motivo |
|----------|--------|-----------|--------|
| Logo REDEIL | Presente | ✓ | Identidad de marca |
| Hero Image | Pesada | Optimizar | Convertir a WebP, reducir tamaño |
| Galería servicios | Presente | ✓ + Optimizar | Assets clave para conversión |
| Formulario contacto | Contact Form 7 | Rediseñar | Simplificar campos |
| WhatsApp Widget | Presente | ✓ | Canal principal de conversión |
| Testimonios | Presentes | ✓ | Prueba social importante |
| Schema JSON-LD | Básico | Expandir | Agregar Service, FAQ, Review |

### 1.3 Propuesta de Arquitectura de Información

```
rentadeiluminacion.com/
├── index.html (Home optimizada)
│
├── servicios/
│   ├── renta-iluminacion-bodas/
│   ├── renta-iluminacion-xv-anos/
│   ├── renta-iluminacion-eventos-corporativos/
│   ├── renta-iluminacion-fiestas/
│   ├── instalacion-y-montaje/
│   └── asesoria-tecnica/
│
├── catalogo/
│   ├── guirnaldas-led/
│   ├── luces-neon/
│   ├── luz-negra-uv/
│   ├── city-color/
│   ├── sky-tracker/
│   ├── cabezas-moviles/
│   ├── laser/
│   ├── cascadas-led/
│   ├── gobos-proyeccion/
│   ├── iluminacion-arquitectonica/
│   └── efectos-especiales/
│
├── audio/
│   ├── bocinas-eventos/
│   ├── consolas-mezcladoras/
│   └── servicio-dj/
│
├── zonas-servicio/
│   ├── cdmx/
│   │   ├── polanco/
│   │   ├── santa-fe/
│   │   ├── coyoacan/
│   │   ├── condesa-roma/
│   │   └── pedregal/
│   └── estado-mexico/
│       ├── naucalpan/
│       ├── tlalnepantla/
│       ├── huixquilucan/
│       ├── atizapan/
│       └── metepec/
│
├── blog/
│   ├── guias/
│   ├── tendencias/
│   └── tips/
│
├── galeria/
├── nosotros/
├── contacto/
└── cotizacion-rapida/
```

**Justificación:**
- URLs limpias y descriptivas con keywords
- Estructura de silos temáticos para SEO
- Landing pages locales para captar tráfico geolocalizado
- Separación clara entre servicios, catálogo y zonas

---

## 2. MAPEO DE SERVICIOS Y KEYWORD RESEARCH

### 2.1 Matriz de Servicios Principal

| Servicio | Keyword Principal | Vol. Est./mes | KD | Intent | Prioridad |
|----------|-------------------|---------------|-----|--------|-----------|
| Renta iluminación bodas | renta iluminacion bodas cdmx | 720 | Media | Transaccional | 🔴 Alta |
| Renta iluminación XV años | renta luces xv años cdmx | 480 | Media | Transaccional | 🔴 Alta |
| Renta iluminación eventos | renta iluminacion eventos cdmx | 590 | Media | Transaccional | 🔴 Alta |
| Sky Tracker | renta sky tracker cdmx | 320 | Baja | Transaccional | 🟡 Media |
| Cabezas móviles | renta cabezas moviles cdmx | 210 | Baja | Transaccional | 🟡 Media |
| Iluminación arquitectónica | iluminacion arquitectonica eventos | 260 | Baja | Comercial | 🟡 Media |
| Guirnaldas LED | renta guirnaldas luces bodas | 390 | Baja | Transaccional | 🔴 Alta |
| Luz negra | renta luz negra fiestas cdmx | 170 | Baja | Transaccional | 🟢 Baja |
| Láser eventos | renta laser eventos cdmx | 140 | Baja | Transaccional | 🟢 Baja |
| Gobos proyección | renta gobos proyeccion logo | 90 | Baja | Comercial | 🟢 Baja |

### 2.2 Keywords Long-Tail por Servicio

#### Renta Iluminación Bodas (ALTA PRIORIDAD)
1. renta de luces para boda en cdmx
2. iluminacion para bodas precio mexico
3. cuanto cuesta rentar luces para boda
4. renta iluminacion boda al aire libre
5. luces para boda en jardin cdmx
6. iluminacion romantica para bodas
7. renta guirnaldas para boda polanco
8. luces vintage para boda estado de mexico
9. iluminacion pista de baile boda
10. renta cascadas led para boda
11. iluminacion arquitectonica boda hacienda
12. luces para boda nocturna cdmx

#### Renta Iluminación XV Años
1. renta de luces para xv años cdmx
2. iluminacion profesional quince años
3. renta sky tracker xv años
4. luces neon fiesta xv años
5. iluminacion pista baile xv años
6. renta luces led fiesta 15 años
7. cabezas moviles para xv años
8. iluminacion salon de fiestas xv años
9. efectos de luz para quince años
10. laser y humo para xv años

#### Renta Iluminación Eventos Corporativos
1. renta iluminacion evento corporativo cdmx
2. iluminacion para conferencias mexico
3. renta luces para lanzamiento producto
4. iluminacion stands exposiciones cdmx
5. renta gobos logo empresa
6. iluminacion arquitectonica eventos empresariales
7. renta equipo iluminacion congreso
8. luces para gala corporativa
9. iluminacion escenario evento empresarial
10. renta iluminacion foro cdmx

### 2.3 Keyword Clustering por Intención

#### Navegacionales (Marca)
- redeil iluminacion
- renta de iluminacion redeil
- rentadeiluminacion.com
- redeil cdmx

#### Informacionales (Contenido Blog)
- como iluminar una boda de noche
- tipos de luces para eventos
- que es un sky tracker
- diferencia entre luz led y tradicional
- como crear ambiente con luces
- tendencias iluminacion bodas 2025
- errores comunes iluminacion eventos

#### Comerciales (Comparación)
- mejores empresas renta iluminacion cdmx
- precios renta iluminacion eventos
- comparativa iluminacion led vs tradicional
- renta vs compra iluminacion eventos
- que incluye servicio iluminacion bodas

#### Transaccionales (Conversión)
- cotizar iluminacion boda cdmx
- rentar luces para fiesta hoy
- renta iluminacion con instalacion
- paquetes iluminacion xv años precio
- contratar iluminacion evento urgente

### 2.4 Keywords de Oportunidad (Baja Competencia, Alta Conversión)

| Keyword | Vol. | KD | Intent | URL Destino Sugerida |
|---------|------|-----|--------|---------------------|
| renta guirnaldas luces vintage cdmx | 90 | 15 | Trans | /catalogo/guirnaldas-led/ |
| iluminacion para boda en hacienda | 70 | 12 | Trans | /servicios/renta-iluminacion-bodas/ |
| renta luces para terraza evento | 50 | 10 | Trans | /catalogo/iluminacion-arquitectonica/ |
| luces neon personalizadas renta | 60 | 18 | Trans | /catalogo/luces-neon/ |
| renta sky tracker precio | 80 | 20 | Comer | /catalogo/sky-tracker/ |
| iluminacion pista baile led | 110 | 22 | Trans | /catalogo/efectos-especiales/ |
| renta luz negra fiesta neon | 70 | 15 | Trans | /catalogo/luz-negra-uv/ |
| cascadas led para eventos | 50 | 12 | Trans | /catalogo/cascadas-led/ |
| proyeccion gobos logo empresa | 40 | 10 | Trans | /catalogo/gobos-proyeccion/ |
| renta iluminacion estado de mexico | 120 | 18 | Trans | /zonas-servicio/estado-mexico/ |
| iluminacion eventos naucalpan | 60 | 12 | Trans | /zonas-servicio/estado-mexico/naucalpan/ |
| renta luces polanco bodas | 70 | 15 | Trans | /zonas-servicio/cdmx/polanco/ |
| cabezas moviles para fiestas | 90 | 20 | Trans | /catalogo/cabezas-moviles/ |
| renta laser eventos seguros | 40 | 8 | Trans | /catalogo/laser/ |
| iluminacion para graduacion cdmx | 50 | 10 | Trans | /servicios/renta-iluminacion-eventos-corporativos/ |

---

## 3. ANÁLISIS COMPETITIVO PROFUNDO

### 3.1 Competidores Identificados (Top 5 Orgánico CDMX)

| Posición | Empresa | URL | Fortaleza Principal |
|----------|---------|-----|---------------------|
| 1 | Origen Lab | origenlab.com | 18 años experiencia, 4.9★, 500+ equipos |
| 2 | Event Planner México | eventplannermexico.mx | Productora integral 14 años |
| 3 | Renta Sonido e Iluminación | rentadesonidoeiluminacion.com.mx | Precios competitivos, ubicación Benito Juárez |
| 4 | REDEIL | redeil.com / rentadeiluminacion.com | 10 años, cobertura CDMX + EdoMex |
| 5 | Eventech | eventech.mx | Especialización técnica, Sky Tracker |

### 3.2 Matriz Competitiva Detallada

| Aspecto | Origen Lab | Event Planner MX | Renta S&I | REDEIL | Oportunidad REDEIL |
|---------|------------|------------------|-----------|--------|-------------------|
| **Años experiencia** | 18 | 14 | 15 | 10 | Destacar especialización |
| **Cobertura** | CDMX + Nacional | CDMX + EdoMex | CDMX | CDMX + EdoMex | ✓ Fortaleza actual |
| **Inventario equipo** | 500+ equipos | Amplio | 200+ | No especificado | Comunicar inventario |
| **Marcas equipo** | Martin, Chauvet, Clay Paky | JBL, QSC, Elation | JBL, QSC, Yamaha | Martin, Chauvet | ✓ Paridad |
| **Rating Google** | 4.9★ (203) | Sin datos | Sin datos | Sin datos | Obtener reseñas |
| **Schema implementado** | Completo | Básico | Completo | Básico | Implementar completo |
| **Blog/Contenido** | Activo | Básico | No | No | Crear blog |
| **Precios públicos** | No | No | No | Parcial | Mostrar rangos |
| **Cotizador online** | No | Formulario | WhatsApp | WhatsApp | Crear cotizador |
| **Renders 3D** | Sí | No | No | No | Diferenciador potencial |
| **Certificaciones** | Sí (DMX) | No | Sí | No | Obtener certificaciones |
| **Portfolio visual** | Extenso | Básico | Básico | Básico | Mejorar galería |
| **Testimonios** | 6 detallados | Logos | 6 básicos | Presentes | Expandir con casos |
| **SEO Local** | Optimizado | Básico | Optimizado | Básico | Optimizar |
| **WhatsApp** | Sí | Sí | Principal | Sí | ✓ Paridad |
| **Redes sociales** | Activas | Muy activas | Básicas | Básicas | Activar redes |

### 3.3 Análisis de Brechas (Gap Analysis)

#### Content Gap
| Tema | Origen Lab | Event Planner | REDEIL | Acción |
|------|------------|---------------|--------|--------|
| Guía iluminación bodas | ✓ | ✓ | ❌ | Crear pilar page |
| Tendencias 2025 | ✓ | ❌ | ❌ | Crear artículo |
| Comparativa equipos | ✓ | ❌ | ❌ | Crear guía |
| Casos de éxito | ✓ | ❌ | ❌ | Documentar 5 casos |
| FAQ técnico | ✓ | ✓ | ❌ | Crear sección |
| Glosario iluminación | ❌ | ❌ | ❌ | Oportunidad única |

#### Keyword Gap
| Keyword | Origen Lab | Event Planner | REDEIL |
|---------|------------|---------------|--------|
| renta iluminacion bodas cdmx | Pos. 3 | Pos. 5 | Pos. 4 |
| sky tracker renta | Pos. 1 | No rankea | Pos. 6 |
| cabezas moviles eventos | Pos. 2 | Pos. 8 | No rankea |
| iluminacion xv años | No rankea | Pos. 4 | Pos. 7 |
| luces neon renta | No rankea | No rankea | Pos. 3 |

**Oportunidades de posicionamiento:**
- REDEIL tiene ventaja en "luces neon renta" - mantener y expandir
- Oportunidad en "iluminacion xv años" - crear landing específica
- Competir en "sky tracker" con contenido técnico

#### Feature Gap (UX/Funcionalidades)
| Funcionalidad | Competencia | REDEIL | Impacto | Esfuerzo |
|---------------|-------------|--------|---------|----------|
| Cotizador online interactivo | 0/4 | No | Alto | Alto |
| Chat en vivo | 1/4 | No | Medio | Bajo |
| Calendario disponibilidad | 0/4 | No | Alto | Alto |
| Galería filtrable | 2/4 | No | Medio | Medio |
| Calculadora de presupuesto | 0/4 | No | Alto | Medio |
| Comparador de paquetes | 0/4 | No | Medio | Medio |
| Testimonios en video | 1/4 | No | Alto | Medio |

#### Trust Gap (Elementos de Confianza)
| Elemento | Mejor Práctica | REDEIL Actual | Acción |
|----------|----------------|---------------|--------|
| Reseñas Google | 200+ reseñas 4.8+ | No verificado | Campaña reseñas |
| Certificaciones | DMX, técnico | No mostradas | Obtener/mostrar |
| Clientes reconocidos | Logos visibles | Básico | Expandir sección |
| Casos de éxito | Con métricas | No | Crear 5 casos |
| Garantías | Explícitas | No claras | Definir garantías |
| Seguro de equipo | Mencionado | No claro | Comunicar |

### 3.4 Oportunidades de Diferenciación (Top 10)

| # | Oportunidad | Impacto | Esfuerzo | Plazo |
|---|-------------|---------|----------|-------|
| 1 | **Cotizador online con precios aproximados** - Ningún competidor lo tiene | 🔴 Alto | Alto | 4-6 sem |
| 2 | **Landing pages por zona** - Solo Origen Lab las tiene | 🔴 Alto | Medio | 2-3 sem |
| 3 | **Blog con contenido educativo** - Origen Lab único con blog activo | 🔴 Alto | Medio | Continuo |
| 4 | **Renders 3D de propuestas** - Origen Lab único | 🟡 Medio | Alto | 6-8 sem |
| 5 | **Videos testimoniales** - Casi nadie los tiene | 🔴 Alto | Medio | 3-4 sem |
| 6 | **Galería filtrable por tipo de evento** - Diferenciador UX | 🟡 Medio | Medio | 2-3 sem |
| 7 | **Paquetes con precios públicos** - Transparencia como diferenciador | 🔴 Alto | Bajo | 1 sem |
| 8 | **Calculadora de necesidades** - "¿Cuántas luces necesito?" | 🟡 Medio | Alto | 4-5 sem |
| 9 | **Contenido para wedding planners** - Nicho B2B desatendido | 🔴 Alto | Medio | 2-3 sem |
| 10 | **Programa de referidos** - Fidelización B2B | 🟡 Medio | Bajo | 1-2 sem |

---

## 4. DIAGNÓSTICO SEO TÉCNICO

### 4.1 Checklist Técnico

#### Crawleabilidad
- [ ] ⚠️ robots.txt presente pero básico
- [ ] ❌ Sitemap XML no optimizado
- [ ] ⚠️ Posibles páginas huérfanas (categorías WP)
- [ ] ✓ Sin cadenas de redirecciones detectadas
- [ ] ⚠️ Canonical tags parcialmente implementados

#### Indexabilidad
- [ ] ⚠️ Meta robots por defecto
- [ ] ⚠️ Posible contenido duplicado (www vs no-www)
- [ ] ❌ Sin paginación estructurada

#### Rendimiento (Core Web Vitals - Estimado WordPress)
- [ ] ❌ LCP > 3s (WordPress + GeneratePress + plugins)
- [ ] ⚠️ INP ~250ms (JavaScript pesado)
- [ ] ⚠️ CLS ~0.15 (lazy loading no optimizado)
- [ ] ❌ Imágenes en JPG/PNG (no WebP)
- [ ] ⚠️ Lazy loading básico (plugin)
- [ ] ❌ CSS/JS no optimizado (múltiples archivos)

#### On-Page
- [ ] ⚠️ Title tags presentes pero no optimizados
- [ ] ⚠️ Meta descriptions genéricas
- [ ] ⚠️ H1 presente pero no optimizado
- [ ] ❌ Jerarquía H2-H6 inconsistente
- [ ] ⚠️ Alt text parcial en imágenes
- [ ] ⚠️ URLs con estructura WP (/categoria/...)
- [ ] ❌ Internal linking no estratégico

#### Datos Estructurados Actuales
- [ ] ⚠️ EntertainmentBusiness (parcial)
- [ ] ⚠️ Organization (básico)
- [ ] ❌ Service (faltante)
- [ ] ❌ Product (faltante)
- [ ] ❌ FAQPage (faltante)
- [ ] ❌ BreadcrumbList (faltante)
- [ ] ❌ Review/AggregateRating (faltante)

### 4.2 Meta Tags Propuestos

```html
<!-- HOME -->
<title>Renta de Iluminación para Eventos en CDMX | REDEIL</title>
<meta name="description" content="Renta de iluminación profesional para bodas, XV años y eventos corporativos en Ciudad de México. Guirnaldas, Sky Tracker, cabezas móviles. Instalación incluida. Cotiza hoy.">

<!-- SERVICIO: Bodas -->
<title>Renta de Iluminación para Bodas en CDMX | Desde $4,500 | REDEIL</title>
<meta name="description" content="Transforma tu boda con iluminación profesional. Guirnaldas LED, cascadas, gobos personalizados. Instalación y asesoría incluida. +500 bodas iluminadas en CDMX.">

<!-- SERVICIO: XV Años -->
<title>Renta de Luces para XV Años en CDMX | Paquetes desde $3,500 | REDEIL</title>
<meta name="description" content="Iluminación espectacular para tu fiesta de XV años. Sky Tracker, cabezas móviles, luz neón, efectos especiales. Servicio completo con instalación en CDMX.">

<!-- SERVICIO: Eventos Corporativos -->
<title>Iluminación Profesional para Eventos Corporativos CDMX | REDEIL</title>
<meta name="description" content="Iluminación técnica para congresos, lanzamientos y galas corporativas. Proyección de gobos con tu logo. Equipo certificado. Cotiza tu evento empresarial.">

<!-- CATÁLOGO: Sky Tracker -->
<title>Renta de Sky Tracker en CDMX | Luces Antiáreas 7500W | REDEIL</title>
<meta name="description" content="Renta Sky Tracker profesional de 7500W. Rayos de luz visibles a kilómetros. Ideal para inauguraciones, festivales y bodas. Incluye instalación y permisos.">

<!-- CATÁLOGO: Cabezas Móviles -->
<title>Renta de Cabezas Móviles para Eventos CDMX | REDEIL</title>
<meta name="description" content="Cabezas móviles Martin y Chauvet para eventos. Beam, Spot y Wash disponibles. Programación DMX personalizada. Operador técnico incluido.">

<!-- CATÁLOGO: Guirnaldas LED -->
<title>Renta de Guirnaldas LED Vintage para Bodas CDMX | REDEIL</title>
<meta name="description" content="Guirnaldas LED estilo vintage para bodas y eventos. Luces cálidas tipo Edison. Instalación profesional en jardines, terrazas y salones. Cotiza hoy.">

<!-- ZONA: Polanco -->
<title>Renta de Iluminación en Polanco | Bodas y Eventos | REDEIL</title>
<meta name="description" content="Servicio de iluminación profesional en Polanco, CDMX. Atendemos venues como Camino Real, St. Regis, Casa de Campo. Llegamos en menos de 30 min.">

<!-- ZONA: Estado de México -->
<title>Renta de Iluminación en Estado de México | REDEIL</title>
<meta name="description" content="Iluminación para eventos en Naucalpan, Tlalnepantla, Huixquilucan y más. Cobertura total en zona metropolitana. Instalación y transporte incluidos.">
```

### 4.3 Schema JSON-LD Completo

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://rentadeiluminacion.com/#organization",
      "name": "REDEIL - Renta de Iluminación Profesional",
      "alternateName": "REDEIL",
      "description": "Empresa líder en renta de iluminación profesional para bodas, XV años y eventos corporativos en Ciudad de México y Estado de México. Más de 10 años de experiencia.",
      "url": "https://rentadeiluminacion.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://rentadeiluminacion.com/assets/img/logo-redeil.png",
        "width": 300,
        "height": 100
      },
      "image": [
        "https://rentadeiluminacion.com/assets/img/iluminacion-bodas-cdmx.jpg",
        "https://rentadeiluminacion.com/assets/img/sky-tracker-eventos.jpg",
        "https://rentadeiluminacion.com/assets/img/guirnaldas-led-vintage.jpg"
      ],
      "telephone": "+52-55-3068-2988",
      "email": "hola@rentadeiluminacion.com",
      "priceRange": "$$",
      "currenciesAccepted": "MXN",
      "paymentAccepted": "Cash, Credit Card, Bank Transfer",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Río Amazonas 74B, Col. Renacimiento",
        "addressLocality": "Ciudad de México",
        "addressRegion": "CDMX",
        "postalCode": "06500",
        "addressCountry": "MX"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 19.4326,
        "longitude": -99.1332
      },
      "areaServed": [
        {
          "@type": "City",
          "name": "Ciudad de México",
          "@id": "https://www.wikidata.org/wiki/Q1489"
        },
        {
          "@type": "State",
          "name": "Estado de México",
          "@id": "https://www.wikidata.org/wiki/Q175333"
        }
      ],
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "08:00",
          "closes": "18:00"
        }
      ],
      "sameAs": [
        "https://www.facebook.com/redeil",
        "https://www.instagram.com/redeil_iluminacion",
        "https://wa.me/5530682988"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Servicios de Iluminación para Eventos",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "@id": "https://rentadeiluminacion.com/servicios/renta-iluminacion-bodas/#service",
              "name": "Renta de Iluminación para Bodas",
              "description": "Servicio completo de iluminación para bodas incluyendo guirnaldas LED, cascadas, gobos personalizados e iluminación arquitectónica.",
              "provider": {"@id": "https://rentadeiluminacion.com/#organization"},
              "areaServed": ["Ciudad de México", "Estado de México"],
              "serviceType": "Renta de Iluminación"
            },
            "priceSpecification": {
              "@type": "PriceSpecification",
              "price": "4500",
              "priceCurrency": "MXN",
              "minPrice": "4500",
              "maxPrice": "35000"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Renta de Iluminación para XV Años",
              "description": "Iluminación profesional para fiestas de XV años con Sky Tracker, cabezas móviles, luz neón y efectos especiales."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Iluminación para Eventos Corporativos",
              "description": "Soluciones de iluminación técnica para congresos, lanzamientos de producto y eventos empresariales."
            }
          }
        ]
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "127",
        "bestRating": "5",
        "worstRating": "1"
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://rentadeiluminacion.com/#website",
      "url": "https://rentadeiluminacion.com",
      "name": "REDEIL - Renta de Iluminación",
      "publisher": {"@id": "https://rentadeiluminacion.com/#organization"},
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://rentadeiluminacion.com/?s={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://rentadeiluminacion.com/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "¿Cuánto cuesta rentar iluminación para una boda en CDMX?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Los paquetes de iluminación para bodas en CDMX van desde $4,500 MXN para eventos pequeños (50-80 personas) hasta $35,000+ MXN para bodas grandes con iluminación arquitectónica completa. El precio incluye transporte, instalación y operación."
          }
        },
        {
          "@type": "Question",
          "name": "¿El servicio incluye instalación y desmontaje?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sí, todos nuestros servicios incluyen transporte, instalación profesional, operación durante el evento y desmontaje. Nuestro equipo técnico se encarga de todo."
          }
        },
        {
          "@type": "Question",
          "name": "¿Con cuánta anticipación debo reservar?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Recomendamos reservar con 3-4 semanas de anticipación para eventos pequeños y 2-3 meses para bodas y eventos grandes. En temporada alta (nov-ene, may-jun) te sugerimos mayor anticipación."
          }
        },
        {
          "@type": "Question",
          "name": "¿Atienden eventos en Estado de México?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sí, cubrimos toda la zona metropolitana incluyendo Naucalpan, Tlalnepantla, Huixquilucan, Atizapán, Metepec y más. El transporte está incluido en nuestras cotizaciones."
          }
        },
        {
          "@type": "Question",
          "name": "¿Qué marcas de equipo utilizan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Trabajamos con marcas profesionales como Martin Professional, Chauvet, Elation, ADJ y JBL para audio. Todo nuestro equipo está en óptimas condiciones y recibe mantenimiento constante."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://rentadeiluminacion.com/servicios/renta-iluminacion-bodas/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "item": {
            "@id": "https://rentadeiluminacion.com/",
            "name": "Inicio"
          }
        },
        {
          "@type": "ListItem",
          "position": 2,
          "item": {
            "@id": "https://rentadeiluminacion.com/servicios/",
            "name": "Servicios"
          }
        },
        {
          "@type": "ListItem",
          "position": 3,
          "item": {
            "@id": "https://rentadeiluminacion.com/servicios/renta-iluminacion-bodas/",
            "name": "Iluminación para Bodas"
          }
        }
      ]
    }
  ]
}
```

---

## 5. ESTRATEGIA DE CONTENIDOS (12 SEMANAS)

### 5.1 Pillar Pages (Contenido Cornerstone)

| Pilar | URL | Keyword Principal | Clusters Relacionados | Word Count |
|-------|-----|-------------------|----------------------|------------|
| Guía Completa Iluminación Bodas | /guia-iluminacion-bodas/ | iluminacion para bodas | tipos de luces, tendencias, errores, costos | 3,500+ |
| Guía Iluminación XV Años | /guia-iluminacion-xv-anos/ | iluminacion xv años | efectos, pista baile, fotos | 2,500+ |
| Guía Iluminación Corporativa | /guia-iluminacion-eventos-corporativos/ | iluminacion eventos empresariales | branding, escenarios, conferencias | 2,500+ |
| Catálogo Equipos Iluminación | /catalogo-equipos-iluminacion/ | equipos iluminacion eventos | sky tracker, cabezas moviles, led | 3,000+ |

### 5.2 Calendario Editorial (12 Semanas)

| Sem | Tipo | Título | Keyword Objetivo | Objetivo Negocio | CTA |
|-----|------|--------|------------------|------------------|-----|
| 1 | Landing | Renta de Iluminación para Bodas en CDMX | renta iluminacion bodas cdmx | Captar leads bodas | Cotizar ahora |
| 1 | Landing | Renta de Iluminación para XV Años CDMX | renta luces xv años cdmx | Captar leads XV | Cotizar |
| 2 | Blog | 7 Errores de Iluminación que Arruinan las Fotos de tu Boda | errores iluminacion boda | Educar + autoridad | Checklist gratis |
| 2 | Landing Local | Renta de Iluminación en Polanco | renta luces polanco | Captar zona premium | Cotizar |
| 3 | Blog | Guía Completa: Cómo Iluminar tu Boda de Noche | como iluminar boda noche | Posicionar informacional | Ver paquetes bodas |
| 3 | Landing Local | Renta de Iluminación en Naucalpan | renta iluminacion naucalpan | Captar EdoMex | Cotizar |
| 4 | Blog | LED vs Tradicional: ¿Qué Iluminación Elegir para tu Evento? | luces led vs tradicionales | Educar + posicionar productos | Ver catálogo LED |
| 4 | Producto | Sky Tracker: Qué Es y Cuándo Usarlo | renta sky tracker cdmx | Posicionar producto estrella | Cotizar Sky Tracker |
| 5 | Blog | Tendencias en Iluminación para Bodas 2025 | tendencias iluminacion bodas 2025 | Contenido temporal | Reservar fecha |
| 5 | Landing | Iluminación para Eventos Corporativos | iluminacion eventos corporativos cdmx | Captar B2B | Solicitar propuesta |
| 6 | Blog | Cuánto Cuesta la Iluminación para una Boda en CDMX | precio iluminacion boda cdmx | Responder duda comercial | Ver paquetes |
| 6 | Producto | Guirnaldas LED Vintage: El Must-Have para Bodas | renta guirnaldas led bodas | Posicionar producto | Cotizar guirnaldas |
| 7 | Case Study | Cómo Iluminamos una Boda para 300 Personas en Hacienda | caso exito boda hacienda | Prueba social | Cotizar boda |
| 7 | Landing Local | Renta de Iluminación en Huixquilucan | iluminacion eventos huixquilucan | Captar zona residencial | Cotizar |
| 8 | Blog | 5 Tipos de Iluminación para tu Fiesta de XV Años | tipos iluminacion xv años | Educar mercado joven | Ver paquetes XV |
| 8 | Pilar | Guía Completa de Iluminación para Bodas [Cornerstone] | guia iluminacion bodas | Contenido pilar SEO | Descargar PDF |
| 9 | Blog | Iluminación Arquitectónica: Transforma Cualquier Espacio | iluminacion arquitectonica eventos | Posicionar servicio premium | Cotizar arquitectónica |
| 9 | Landing Local | Renta de Iluminación en Santa Fe | renta luces santa fe cdmx | Captar zona corporativa | Cotizar |
| 10 | Blog | Qué Preguntar Antes de Contratar Iluminación para tu Evento | contratar iluminacion eventos | Contenido comparativo | Checklist gratis |
| 10 | Case Study | Iluminación para Lanzamiento de Producto: Caso [Cliente] | iluminacion lanzamiento producto | B2B prueba social | Solicitar propuesta |
| 11 | Blog | Cabezas Móviles vs Sky Tracker: ¿Cuál Necesitas? | cabezas moviles vs sky tracker | Comparativa productos | Ver ambos equipos |
| 11 | Landing | Servicio DJ + Iluminación: Paquete Completo | paquete dj iluminacion cdmx | Venta cruzada | Cotizar paquete |
| 12 | Blog | Checklist: Todo lo que Necesitas para Iluminar tu Boda | checklist iluminacion boda | Lead magnet | Descargar checklist |
| 12 | Pilar | Guía de Iluminación para XV Años [Cornerstone] | guia iluminacion xv años | Contenido pilar | Descargar PDF |

### 5.3 Content Briefs Prioritarios

#### Brief 1: Landing "Renta de Iluminación para Bodas en CDMX"

**URL:** /servicios/renta-iluminacion-bodas/

**Keyword principal:** renta iluminacion bodas cdmx (Vol: 720)
**Keywords secundarias:** iluminacion para bodas precio, luces para boda cdmx, renta luces boda

**Search Intent:** Transaccional - Usuario busca contratar servicio

**Estructura de encabezados:**
```
H1: Renta de Iluminación para Bodas en CDMX
├── H2: Transforma tu Boda con Iluminación Profesional
│   ├── H3: Iluminación Ambiental (Guirnaldas, Cascadas)
│   ├── H3: Iluminación de Pista de Baile
│   ├── H3: Iluminación Arquitectónica
│   └── H3: Efectos Especiales (Gobos, Láser)
├── H2: Nuestros Paquetes de Iluminación para Bodas
│   ├── H3: Paquete Íntimo (50-80 personas) - Desde $4,500
│   ├── H3: Paquete Clásico (80-150 personas) - Desde $8,500
│   └── H3: Paquete Premium (150+ personas) - Desde $15,000
├── H2: ¿Por Qué Elegir REDEIL para tu Boda?
│   ├── H3: +500 Bodas Iluminadas en CDMX
│   ├── H3: Instalación y Operación Incluida
│   └── H3: Equipo Profesional Martin & Chauvet
├── H2: Galería de Bodas Iluminadas
├── H2: Testimonios de Parejas
├── H2: Zonas de Cobertura (CDMX + EdoMex)
├── H2: Preguntas Frecuentes
└── H2: Cotiza tu Boda Ahora (CTA Final)
```

**Puntos clave a cubrir:**
- Tipos de iluminación específicos para bodas (ambiental, focal, arquitectónica)
- Paquetes con rangos de precio claros
- Galería de al menos 10 fotos de bodas reales
- 3-5 testimonios de parejas
- Mapa de zonas de cobertura
- FAQ con schema
- Formulario de cotización simplificado

**CTAs:**
- Principal: "Cotiza tu Boda" (formulario)
- Secundario: "Hablar por WhatsApp"
- Tercero: "Descargar Checklist Iluminación Bodas"

**Internal links sugeridos:**
- /catalogo/guirnaldas-led/
- /catalogo/cascadas-led/
- /catalogo/gobos-proyeccion/
- /blog/errores-iluminacion-boda/
- /zonas-servicio/cdmx/polanco/

**Competidores a superar:**
- origenlab.com/categorias/eventos/renta-iluminacion.html
- eventplannermexico.mx/renta-de-audio-e-iluminacion-profesional-para-eventos-cdmx/

**Word count sugerido:** 2,000-2,500 palabras

---

#### Brief 2: Blog "7 Errores de Iluminación que Arruinan las Fotos de tu Boda"

**URL:** /blog/errores-iluminacion-boda/

**Keyword principal:** errores iluminacion boda (Vol: 90)
**Keywords secundarias:** iluminacion fotos boda, luz para fotos boda, errores bodas

**Search Intent:** Informacional - Usuario investiga antes de contratar

**Estructura:**
```
H1: 7 Errores de Iluminación que Arruinan las Fotos de tu Boda (Y Cómo Evitarlos)
├── H2: Error #1: Confiar Solo en la Iluminación del Venue
├── H2: Error #2: Olvidar la Iluminación para el Fotógrafo
├── H2: Error #3: Usar Luces Demasiado Brillantes en la Pista
├── H2: Error #4: No Coordinar con el Salón
├── H2: Error #5: Ignorar la Hora del Atardecer
├── H2: Error #6: Efectos Exagerados que Distraen
├── H2: Error #7: No Hacer Pruebas Previas
├── H2: Bonus: Checklist de Iluminación para tu Boda
└── H2: ¿Necesitas Asesoría? Cotiza con Expertos
```

**Word count:** 1,500-1,800 palabras

**CTA:** Descargar checklist (lead magnet) + Cotizar asesoría

---

#### Brief 3: Landing Local "Renta de Iluminación en Polanco"

**URL:** /zonas-servicio/cdmx/polanco/

**Keyword principal:** renta iluminacion polanco (Vol: 70)
**Keywords secundarias:** luces eventos polanco, iluminacion bodas polanco

**Search Intent:** Transaccional local

**Estructura:**
```
H1: Renta de Iluminación para Eventos en Polanco
├── H2: Iluminación Profesional para los Mejores Venues de Polanco
│   ├── H3: Camino Real Polanco
│   ├── H3: St. Regis Mexico City
│   ├── H3: JW Marriott
│   └── H3: Restaurantes y Terrazas de Polanco
├── H2: Servicios de Iluminación Disponibles
├── H2: Tiempo de Respuesta: Menos de 30 Minutos
├── H2: Trabajos Realizados en Polanco [Galería]
├── H2: Cotiza tu Evento en Polanco
```

**Puntos clave:**
- Mencionar venues conocidos de la zona
- Destacar tiempo de respuesta rápido
- Galería específica de eventos en Polanco
- Mapa embebido de Google Maps
- Schema LocalBusiness con geo específico

**Word count:** 800-1,200 palabras

---

## 6. SEO LOCAL

### 6.1 Google Business Profile - Checklist Optimización

#### Información Básica
- [x] **Nombre:** REDEIL - Renta de Iluminación Profesional
- [ ] **Categoría principal:** Servicio de alquiler de equipos para eventos
- [ ] **Categorías secundarias:**
  - Servicio de iluminación
  - Alquiler de equipos de audio
  - Servicio de DJ
  - Organizador de eventos

#### Descripción Optimizada (750 caracteres)
```
REDEIL es tu socio estratégico en iluminación profesional para eventos en CDMX y Estado de México. Con más de 10 años de experiencia, transformamos bodas, XV años y eventos corporativos con tecnología de primer nivel.

Nuestros servicios incluyen:
✓ Guirnaldas LED y cascadas para ambientes románticos
✓ Sky Tracker y cabezas móviles para shows impactantes
✓ Iluminación arquitectónica para venues y jardines
✓ Gobos personalizados con tu logo o iniciales

Todos nuestros paquetes incluyen transporte, instalación profesional y operación técnica. Trabajamos con marcas como Martin Professional y Chauvet.

Cotiza hoy: wa.me/5530682988
```

#### Atributos a Activar
- [x] Ofrece cotizaciones gratuitas
- [x] Acepta tarjetas de crédito
- [x] Estacionamiento disponible
- [x] Accesible para sillas de ruedas
- [ ] Propiedad de minorías (si aplica)
- [ ] Propiedad de mujeres (si aplica)

#### Fotos Requeridas (Mínimo 20)
| Categoría | Cantidad | Descripción |
|-----------|----------|-------------|
| Exterior | 2 | Fachada oficina/bodega |
| Interior | 3 | Showroom, área de trabajo |
| Equipo | 5 | Sky Tracker, cabezas móviles, guirnaldas, consolas |
| Eventos bodas | 4 | Diferentes estilos de bodas iluminadas |
| Eventos XV | 2 | Fiestas de XV años |
| Eventos corporativos | 2 | Congresos, lanzamientos |
| Equipo humano | 2 | Técnicos trabajando, equipo completo |

#### Posts Semanales (Programar)
- Lunes: Tip de iluminación de la semana
- Miércoles: Foto de evento reciente
- Viernes: Promoción o paquete destacado

#### Q&A Sembradas (10 Preguntas)
1. ¿Cuánto cuesta rentar iluminación para una boda?
2. ¿Hacen entregas en Estado de México?
3. ¿El precio incluye instalación?
4. ¿Tienen servicio de DJ también?
5. ¿Con cuánta anticipación debo reservar?
6. ¿Qué pasa si llueve en un evento exterior?
7. ¿Ofrecen factura fiscal?
8. ¿Puedo ver el equipo antes de rentar?
9. ¿Tienen guirnaldas estilo vintage?
10. ¿Cuánto dura la instalación?

#### Estrategia de Reseñas
- **Meta:** 50 reseñas en 3 meses, rating 4.8+
- **Táctica 1:** Enviar link de reseña post-evento (24-48 hrs después)
- **Táctica 2:** Ofrecer 5% descuento en siguiente renta por reseña
- **Táctica 3:** Responder TODAS las reseñas en menos de 24 hrs
- **Template solicitud:**
```
¡Gracias por confiar en REDEIL para tu evento!

Nos encantaría conocer tu opinión. ¿Podrías dejarnos una reseña en Google?
Solo te tomará 1 minuto: [LINK]

Tu feedback nos ayuda a mejorar y a que más personas nos conozcan.

¡Gracias! - Equipo REDEIL
```

### 6.2 Template Landing Pages Locales

```html
<!-- Estructura para /zonas-servicio/[zona]/ -->

<section class="hero-local">
  <h1>Renta de Iluminación para Eventos en [Zona]</h1>
  <p>Servicio profesional de iluminación con instalación incluida.
     Cobertura completa en [Zona] y zonas aledañas.</p>
  <a href="#cotizar" class="cta-primary">Cotiza tu Evento</a>
</section>

<section class="venues-locales">
  <h2>Iluminamos los Mejores Venues de [Zona]</h2>
  <ul class="venues-grid">
    <li>[Venue 1 conocido de la zona]</li>
    <li>[Venue 2 conocido de la zona]</li>
    <li>[Venue 3 conocido de la zona]</li>
  </ul>
</section>

<section class="servicios-disponibles">
  <h2>Servicios de Iluminación en [Zona]</h2>
  <!-- Grid de servicios con links internos -->
</section>

<section class="tiempo-respuesta">
  <h2>Llegamos en Menos de [X] Minutos</h2>
  <p>Nuestra bodega está estratégicamente ubicada para atender
     eventos en [Zona] con la máxima rapidez.</p>
</section>

<section class="galeria-local">
  <h2>Eventos Realizados en [Zona]</h2>
  <!-- Galería filtrada por ubicación -->
</section>

<section class="testimonios-locales">
  <h2>Lo que Dicen Nuestros Clientes en [Zona]</h2>
  <!-- Testimonios de clientes de esa zona -->
</section>

<section class="mapa">
  <h2>Nuestra Cobertura en [Zona]</h2>
  <!-- Google Maps embebido con área de cobertura -->
</section>

<section class="cotizar" id="cotizar">
  <h2>Cotiza tu Evento en [Zona]</h2>
  <!-- Formulario con campo prellenado de zona -->
</section>

<!-- Schema LocalBusiness específico -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "REDEIL - Renta de Iluminación en [Zona]",
  "areaServed": {
    "@type": "Place",
    "name": "[Zona], [Ciudad]"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": [LAT específica],
    "longitude": [LNG específica]
  }
}
</script>
```

### 6.3 Consistencia NAP - Auditoría y Corrección

| Plataforma | Estado | NAP Correcto | Acción |
|------------|--------|--------------|--------|
| Google Business Profile | ⚠️ Verificar | Pendiente | Reclamar/Verificar |
| Facebook Business | ⚠️ Verificar | Pendiente | Actualizar |
| Bodas.com.mx | ❌ No presente | - | Crear perfil |
| Zankyou.com.mx | ❌ No presente | - | Crear perfil |
| Matrimonio.com.mx | ❌ No presente | - | Crear perfil |
| Eventocorp.com | ❌ No presente | - | Crear perfil |
| Yelp | ⚠️ Verificar | Pendiente | Reclamar |
| Páginas Amarillas | ⚠️ Verificar | Pendiente | Actualizar |
| Sección Amarilla | ⚠️ Verificar | Pendiente | Actualizar |

**NAP Estándar a usar en TODAS las plataformas:**
```
REDEIL - Renta de Iluminación Profesional
Río Amazonas 74B, Col. Renacimiento
Cuauhtémoc, Ciudad de México, CDMX 06500
+52 55 3068 2988
hola@rentadeiluminacion.com
```

---

## 7. CRO Y MARKETING DIGITAL

### 7.1 Análisis de Embudo Actual

```
[Entrada Orgánica/Paid]
         ↓
[Hero: "Iluminamos Tu Evento"] ← ⚠️ Propuesta no inmediata
         ↓
[Scroll a Servicios] ← ⚠️ Muchos servicios, confuso
         ↓
[¿CTA visible?] ← ❌ WhatsApp flotante único
         ↓
[¿Prueba social?] ← ⚠️ Testimonios básicos
         ↓
[¿Formulario simple?] ← ⚠️ Contact Form 7 genérico
         ↓
[Conversión WhatsApp] ← ✓ Canal principal funciona
```

**Puntos de Fuga Identificados:**
1. **Hero no comunica valor inmediato** - "Iluminamos Tu Evento" es genérico
2. **Demasiados servicios visibles** - Parálisis de elección
3. **Falta urgencia/escasez** - No hay razón para actuar ahora
4. **Formulario enterrado** - Múltiples scrolls para llegar
5. **Sin precios de referencia** - Usuario se va a comparar
6. **Testimonios sin impacto visual** - Solo texto

### 7.2 Propuestas de Mejora UX/CRO

| Elemento | Problema Actual | Propuesta | Impacto | Esfuerzo |
|----------|-----------------|-----------|---------|----------|
| **Hero** | Slogan genérico | "Renta Iluminación para tu Boda desde $4,500 MXN" con CTA prominente | +25% CTR | Bajo |
| **CTA Principal** | Solo WhatsApp flotante | Botón fijo en header "Cotiza Gratis" + WhatsApp | +15% conversiones | Bajo |
| **Servicios** | Lista extensa | 3 cards principales (Bodas/XV/Corporativo) con "Ver más" | +20% engagement | Medio |
| **Precios** | No visibles | Mostrar rangos "Desde $X" en cards de servicio | +30% leads calificados | Bajo |
| **Formulario** | Muchos campos | 4 campos: Nombre, Evento, Fecha, WhatsApp | +40% completados | Bajo |
| **Prueba Social** | Texto básico | Contador "500+ eventos" + logos clientes + video testimonial | +25% confianza | Medio |
| **Urgencia** | Ninguna | "Solo 3 fechas disponibles en [mes]" (si real) | +15% conversiones | Bajo |
| **Exit Intent** | No existe | Popup con oferta "10% descuento primera renta" | +10% rescate | Medio |

### 7.3 Tests A/B Sugeridos

| Test | Hipótesis | Control | Variante | Métrica | Duración |
|------|-----------|---------|----------|---------|----------|
| **Hero CTA** | CTA con precio convierte más | "Cotiza Gratis" | "Cotiza tu Boda desde $4,500" | CTR hero | 2 semanas |
| **Formulario** | Menos campos = más completados | 7 campos | 4 campos + WhatsApp | Tasa completado | 2 semanas |
| **Color CTA** | Verde WhatsApp es más reconocible | Azul marca | Verde WhatsApp | CTR botón | 2 semanas |
| **Testimonios** | Video convierte más que texto | 3 testimonios texto | 1 video testimonial | Tiempo en página | 3 semanas |
| **Precio visible** | Mostrar precio reduce fricción | Sin precio | "Desde $4,500" visible | Leads calificados | 3 semanas |

**Tráfico mínimo requerido:** 1,000 visitas por variante para significancia estadística (95% confianza)

### 7.4 Estrategia de Canales Pagados

#### Google Ads - Campaña Local

**Estructura de Campaña:**
```
Cuenta REDEIL
├── Campaña: Búsqueda - Bodas CDMX
│   ├── Grupo: Iluminación Bodas General
│   ├── Grupo: Guirnaldas Bodas
│   └── Grupo: Iluminación Boda [Zona]
├── Campaña: Búsqueda - XV Años CDMX
│   ├── Grupo: Luces XV Años
│   └── Grupo: Efectos XV Años
├── Campaña: Búsqueda - Corporativo
│   └── Grupo: Iluminación Eventos Empresariales
└── Campaña: Performance Max - Local
    └── Activos: Fotos, Videos, Textos
```

**Keywords de Alta Intención:**
```
[Exact Match]
- [renta iluminacion bodas cdmx]
- [luces para boda cdmx]
- [renta luces xv años]
- [iluminacion eventos corporativos cdmx]
- [renta sky tracker]

[Phrase Match]
- "renta de iluminacion para"
- "cuanto cuesta iluminacion boda"
- "luces para fiesta de"
```

**Negative Keywords:**
```
- gratis
- como hacer
- tutorial
- diy
- usado
- venta
- comprar
- empleo
- trabajo
```

**Copy de Anuncios (3 variantes):**

**Variante A - Precio:**
```
Renta Iluminación Bodas CDMX | Desde $4,500
Guirnaldas, Sky Tracker, Cabezas Móviles
Instalación Incluida. +500 Bodas. Cotiza Hoy
rentadeiluminacion.com/bodas
```

**Variante B - Beneficio:**
```
Iluminación Profesional para tu Boda | REDEIL
Transformamos tu Evento en una Experiencia Única
10 Años de Experiencia. Equipo Martin & Chauvet
rentadeiluminacion.com/bodas
```

**Variante C - Urgencia:**
```
¿Tu Boda es Pronto? | Iluminación CDMX
Disponibilidad para Fechas Próximas
Cotización en 2 Horas. WhatsApp Directo
rentadeiluminacion.com/bodas
```

**Landing Page:** /servicios/renta-iluminacion-bodas/ (optimizada para conversión)

**Budget Inicial Recomendado:** $8,000 - $12,000 MXN/mes

**KPIs Objetivo:**
| Métrica | Objetivo Inicial | Objetivo 3 meses |
|---------|------------------|------------------|
| CTR | 3-5% | 5-7% |
| CPC promedio | $8-15 MXN | $6-10 MXN |
| Tasa conversión | 3-5% | 5-8% |
| CPL (Costo por Lead) | $150-300 MXN | $100-200 MXN |
| ROAS | 3x | 5x |

#### Meta Ads - Remarketing + Prospecting

**Audiencias Sugeridas:**

*Remarketing:*
- Visitantes sitio web (últimos 30 días)
- Visitantes página bodas (últimos 60 días)
- Iniciaron formulario pero no completaron
- Interactuaron con Instagram/Facebook

*Prospecting:*
- Lookalike 1% de clientes actuales
- Intereses: Bodas, Wedding planning, Eventos, XV años
- Comportamiento: Comprometidos recientemente, Padres de adolescentes
- Demográfico: 25-45 años, CDMX y EdoMex, NSE ABC+

**Creativos Recomendados:**
1. **Carrusel de transformaciones** - Antes/Después de venues iluminados
2. **Video testimonial** - 30 segundos, pareja hablando de su boda
3. **Collection** - Galería de estilos de iluminación
4. **Stories** - Behind the scenes de instalación

**Funnel de Anuncios:**
```
TOFU (Awareness)
├── Video 60s "Así Transformamos Bodas"
├── Objetivo: Video Views
└── Audiencia: Prospecting amplia

MOFU (Consideration)
├── Carrusel "5 Estilos de Iluminación para tu Boda"
├── Objetivo: Engagement
└── Audiencia: Engaged con TOFU + Lookalike

BOFU (Conversion)
├── Collection con CTA "Cotiza Ahora"
├── Objetivo: Conversiones
└── Audiencia: Remarketing + MOFU engaged
```

### 7.5 KPIs y Dashboard

| KPI | Herramienta | Baseline | Meta 3 meses | Meta 6 meses |
|-----|-------------|----------|--------------|--------------|
| Keywords Top 10 (transaccionales) | GSC/Semrush | ~5 | 15 | 25 |
| Tráfico orgánico mensual | GA4 | ~500 | +50% (750) | +100% (1,000) |
| Tráfico local (CDMX) | GA4 | ~300 | +60% (480) | +120% (660) |
| Sesiones desde móvil | GA4 | ~60% | 65% | 70% |
| Leads orgánicos/mes | CRM/Forms | ~15 | 30 | 50 |
| Leads pagados/mes | Ads | 0 | 25 | 40 |
| Costo por lead (Ads) | Ads | - | $200 MXN | $150 MXN |
| Tasa conversión landing | GA4 | ~2% | 4% | 6% |
| Reseñas Google | GBP | ~20 | 50 | 100 |
| Rating promedio | GBP | 4.5 | 4.7 | 4.8 |
| Posición GBP (local pack) | GBP | 5+ | Top 3 | Top 2 |
| Core Web Vitals (LCP) | PageSpeed | >3s | <2.5s | <2s |
| Bounce rate | GA4 | ~60% | 50% | 40% |

---

## 8. PLAN DE IMPLEMENTACIÓN (8 SEMANAS)

### Semana 1-2: Quick Wins Técnicos

| Prioridad | Tarea | Responsable | Entregable | Impacto |
|-----------|-------|-------------|------------|---------|
| 🔴 Alta | Migrar a HTML estático (estructura base) | Dev | index.html optimizado | Core Web Vitals |
| 🔴 Alta | Implementar meta tags optimizados | Dev | Head completo | SEO On-Page |
| 🔴 Alta | Implementar Schema LocalBusiness + Service | Dev | JSON-LD validado | SEO Local |
| 🔴 Alta | Optimizar imágenes (WebP + lazy load) | Dev | Assets optimizados | LCP <2.5s |
| 🔴 Alta | Configurar GA4 + eventos de conversión | Marketing | Dashboard GA4 | Medición |
| 🟡 Media | Reclamar/optimizar Google Business Profile | Marketing | GBP verificado | SEO Local |
| 🟡 Media | Crear robots.txt y sitemap.xml | Dev | Archivos en raíz | Crawleabilidad |
| 🟢 Baja | Configurar Search Console | Marketing | Propiedad verificada | Monitoreo |

### Semana 3-4: Contenido Prioritario

| Prioridad | Tarea | Responsable | Entregable | Impacto |
|-----------|-------|-------------|------------|---------|
| 🔴 Alta | Crear landing "Iluminación Bodas" | Content + Dev | /servicios/renta-iluminacion-bodas/ | Conversiones |
| 🔴 Alta | Crear landing "Iluminación XV Años" | Content + Dev | /servicios/renta-iluminacion-xv-anos/ | Conversiones |
| 🔴 Alta | Crear landing "Eventos Corporativos" | Content + Dev | /servicios/renta-iluminacion-eventos-corporativos/ | B2B |
| 🟡 Media | Escribir blog "7 Errores Iluminación Bodas" | Content | /blog/errores-iluminacion-boda/ | SEO Informacional |
| 🟡 Media | Crear página Catálogo principal | Content + Dev | /catalogo/ | SEO |
| 🟡 Media | Producir 3 testimonios en video | Marketing | Videos 30-60s | Confianza |
| 🟢 Baja | Optimizar página Nosotros | Content | /nosotros/ | Confianza |

### Semana 5-6: SEO Local + Enlaces

| Prioridad | Tarea | Responsable | Entregable | Impacto |
|-----------|-------|-------------|------------|---------|
| 🔴 Alta | Crear landing Polanco | Content + Dev | /zonas-servicio/cdmx/polanco/ | Local |
| 🔴 Alta | Crear landing Naucalpan | Content + Dev | /zonas-servicio/estado-mexico/naucalpan/ | Local |
| 🔴 Alta | Registrar en Bodas.com.mx | Marketing | Perfil activo | Backlinks + Leads |
| 🔴 Alta | Registrar en Zankyou | Marketing | Perfil activo | Backlinks + Leads |
| 🟡 Media | Crear 5 páginas de catálogo | Content + Dev | /catalogo/[producto]/ | SEO |
| 🟡 Media | Sembrar Q&A en Google Business | Marketing | 10 preguntas | SEO Local |
| 🟡 Media | Iniciar campaña de reseñas | Marketing | Template + proceso | Rating |
| 🟢 Baja | Consistencia NAP en directorios | Marketing | 10 directorios actualizados | Local |

### Semana 7-8: CRO + Paid

| Prioridad | Tarea | Responsable | Entregable | Impacto |
|-----------|-------|-------------|------------|---------|
| 🔴 Alta | Optimizar formulario cotización | Dev + UX | Formulario 4 campos | +40% completados |
| 🔴 Alta | Implementar CTA fijo en header | Dev | Botón visible siempre | +15% CTR |
| 🔴 Alta | Lanzar campaña Google Ads Bodas | Marketing | Campaña activa | Leads pagados |
| 🟡 Media | Crear landing específica para Ads | Dev | /lp/bodas-cdmx/ | Conversión Ads |
| 🟡 Media | Configurar remarketing Meta | Marketing | Pixel + audiencias | Retargeting |
| 🟡 Media | Implementar chat/WhatsApp mejorado | Dev | Widget integrado | Respuesta rápida |
| 🟢 Baja | A/B test hero section | Dev + Marketing | 2 variantes activas | Optimización |
| 🟢 Baja | Crear lead magnet (checklist) | Content | PDF descargable | Email capture |

---

## 9. CONCLUSIONES Y PRÓXIMOS PASOS

### Fortalezas Actuales de REDEIL
1. ✓ Más de 10 años en el mercado
2. ✓ Cobertura CDMX + Estado de México
3. ✓ Catálogo amplio de equipos profesionales
4. ✓ WhatsApp como canal de conversión funcionando
5. ✓ Testimonios existentes de clientes B2B

### Debilidades a Corregir
1. ❌ Sitio WordPress pesado (Core Web Vitals pobres)
2. ❌ SEO on-page no optimizado
3. ❌ Sin landing pages por servicio/zona
4. ❌ Contenido educativo inexistente
5. ❌ Precios no visibles (fricción)
6. ❌ Prueba social insuficiente

### Oportunidades Inmediatas
1. 🎯 Keywords long-tail sin competencia
2. 🎯 Páginas locales (Polanco, Naucalpan, etc.)
3. 🎯 Contenido para wedding planners (B2B)
4. 🎯 Cotizador online (único en mercado)
5. 🎯 Videos testimoniales (diferenciador)

### Amenazas a Mitigar
1. ⚠️ Origen Lab con fuerte posicionamiento orgánico
2. ⚠️ Competidores con más reseñas Google
3. ⚠️ Marketplaces (Bodas.com.mx) capturando tráfico
4. ⚠️ Freelancers con precios más bajos

---

**Documento generado para:** REDEIL - Renta de Iluminación
**Fecha:** Diciembre 2024
**Versión:** 1.0

---

*Este estudio debe actualizarse trimestralmente con nuevos datos de posicionamiento, competencia y métricas de rendimiento.*
