# PLAN DE ACCIÓN — REDEIL COMPLETAR v2.0 (3 ZONAS)
**Fecha:** 21 de marzo 2026  
**Objetivo:** Llevar 3 zonas de 62/100 → 88/100 cumpliendo metodología v2.0  
**Timeline estimado:** 15.5 horas de trabajo (2 días intensivos)  

---

## RESUMEN RÁPIDO

| Fase | Horas | Responsable |
|------|-------|-------------|
| 1. Documentación Discovery | 5.5 | Copy/SEO |
| 2. QA Técnica (Lighthouse + Schema + Responsive) | 4.5 | QA |
| 3. Optimizaciones (Schema fields + Images + Cross-links) | 3 | Programador |
| 4. QA Final + Deployment | 1.5 | QA/Programador |
| **TOTAL** | **15.5** | **Multi-rol** |

---

## FASE 1: DOCUMENTACIÓN DISCOVERY (5.5 horas)
**Responsable:** Copy (Frank o especialista) + SEO  

### Tarea 1.1: BRIEF.md (1.5h)
**Pasos:**
1. Crear `BRIEF.md`
2. Definir:
   - **Tipo de sitio:** A (Leads/ventas servicios)
   - **Objetivo:** Generar cotizaciones mensuales de renta de iluminación para eventos CDMX
   - **KPIs:** Cotizaciones/mes, posición "renta iluminación [ZONA]", conversión WhatsApp, ingresos mensuales
   - **Público:** Parejas (bodas), corporativos, XV años, productores de eventos, hogares
   - **Diferenciadores:**
     * Equipamiento premium (HMI, cabezas móviles, neon)
     * 350+ eventos/año (social proof)
     * Diseño personalizado por evento
     * Transporte e instalación incluidos
     * Respuesta rápida (<1h)
     * Cobertura 3 zonas de CDMX
   - **Propuesta de valor:** "Iluminación profesional. Diseño a tu medida. Instalación incluida. Eventos sin sorpresas."

### Tarea 1.2: KEYWORDS.md (2h)
**Pasos:**
1. Crear `KEYWORDS.md`
2. Estrategia: KEYWORD PER ZONE (cuidado canibalización)
3. Keywords primarios:
   - Home/Hub: "renta iluminación CDMX", "iluminación eventos profesional"
   - Polanco: "renta iluminación Polanco", "iluminación corporativa Polanco"
   - Coyoacán: "renta iluminación Coyoacán", "iluminación bodas Coyoacán"
   - Benito Juárez: "renta iluminación Benito Juárez", "eventos corporativos Benito Juárez"
4. Secundarios: "cabezas móviles", "gobos", "luces neon", "guirnaldas", "renta iluminación eventos"
5. Crear keyword map evitando canibalización
6. Densidad máxima: <1.5% por página

### Tarea 1.3: CONTENT-MAP.md (1h)
**Pasos:**
1. Crear `CONTENT-MAP.md`
2. Listar:
   ```
   | URL | Tipo | Keyword | Status |
   | / | Home | renta iluminación cdmx | ✅ Existe |
   | /zonas-de-cobertura/ | Hub | renta iluminación zonas | ✅ Existe |
   | /zonas/polanco/ | Zone | renta iluminación polanco | ✅ Implementada |
   | /zonas/coyoacan/ | Zone | renta iluminación coyoacán | ✅ Implementada |
   | /zonas/benito-juarez/ | Zone | renta iluminación benito juárez | ✅ Implementada |
   | /zonas/[P2-zona-4]/ | Zone | [keyword] | ❌ Planeada P2 |
   | /zonas/[P2-zona-5]/ | Zone | [keyword] | ❌ Planeada P2 |
   | [otros servicios, blog, etc] | ... | ... | ... |
   ```

### Tarea 1.4: SESSION-LOG.md (1h)
**Pasos:**
1. Crear `SESSION-LOG.md`
2. Registrar:
   ```
   # SESSION LOG — RENTADEILUMINACION (REDEIL)
   
   ## Sesión 1 — Auditoría Inicial [Fecha]
   - Resultado: 92/100 (hub page)
   - Auditor: [Nombre]
   - Findings: [resumen]
   
   ## Sesión 2 — 3 Zonas P1 Implementadas [Fecha]
   - Polanco: ✅ Implementada
   - Coyoacán: ✅ Implementada
   - Benito Juárez: ✅ Implementada
   - Build: 253 páginas, 0 errores
   - Status: Sin QA, sin documentación
   
   ## Próximas sesiones
   - Sesión 3: QA completa (Lighthouse, schema, responsive)
   - Sesión 4: Optimizaciones
   - Sesión 5: Deployment
   ```

---

## FASE 2: QA TÉCNICA (4.5 horas)
**Responsable:** QA  

### Tarea 2.1: Lighthouse Audit (2h)
**Pasos:**
1. Para CADA zona (Polanco, Coyoacán, Benito Juárez):
   - Abrir Chrome DevTools → Lighthouse
   - Auditar móvil:
     - Performance: TARGET ≥90
     - Accessibility: TARGET ≥90
     - Best Practices: TARGET ≥90
     - SEO: TARGET ≥90
   - Registrar resultados en `AUDIT-RESULTS-ZONAS.md`
2. Si <90: identificar problemas para Fase 3 (Optimizaciones)

### Tarea 2.2: Schema Validation (1h)
**Pasos:**
1. Para CADA zona:
   - Ir a schema.org/validator
   - Copiar HTML de la zona
   - Verificar 0 errores
   - Verificar LocalBusiness, Service, FAQPage reconocidos
   - Documentar en `AUDIT-RESULTS-ZONAS.md`

### Tarea 2.3: Responsive Testing (1.5h)
**Pasos:**
1. Para CADA zona:
   - Test en 375px (móvil)
   - Test en 768px (tablet)
   - Test en 1024px (desktop tablet)
   - Test en 1440px (desktop)
   - Verificar: botones clickeables (44px+), texto legible (16px+), layout coherente
   - Test en Chrome, Firefox, Safari si es posible

---

## FASE 3: OPTIMIZACIONES (3 horas)
**Responsable:** Programador + Copy  

### Tarea 3.1: Schema Completeness (1.5h)
**Pasos:**
1. Para CADA zona, actualizar schema:
   - Agregar `serviceArea` (Place[] con addressLocality, addressRegion)
   - Agregar `openingHoursSpecification` (horario REDEIL)
   - Agregar más detalles en Service.description
   - Ejemplo:
     ```json
     "serviceArea": [
       {
         "@type": "Place",
         "name": "Polanco, CDMX",
         "address": {
           "@type": "PostalAddress",
           "addressLocality": "Polanco",
           "addressRegion": "CDMX",
           "addressCountry": "MX"
         }
       },
       {
         "@type": "Place",
         "name": "Lomas de Chapultepec, CDMX",
         "address": { ... }
       }
     ],
     "openingHoursSpecification": {
       "@type": "OpeningHoursSpecification",
       "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
       "opens": "09:00",
       "closes": "20:00"
     }
     ```

### Tarea 3.2: Image Optimization (1h)
**Pasos:**
1. Verificar que TODAS las imágenes en `/img/...` existen en disk
2. Verificar peso (target ≤200KB contenido, ≤400KB hero)
3. Si >200KB: comprimir con TinyPNG/ImageOptim
4. Verificar alt text descriptivo
5. Verificar lazy loading + decoding async

### Tarea 3.3: Cross-linking Zones (0.5h)
**Pasos:**
1. Agregar sección "Otras Zonas" en cada página zona:
   - Polanco: links a Coyoacán, Benito Juárez
   - Coyoacán: links a Polanco, Benito Juárez
   - Benito Juárez: links a Polanco, Coyoacán
2. Posición: Pre-footer o post-FAQ
3. Beneficio: Distribute link equity, facilita user navigation

---

## FASE 4: QA FINAL (1.5 horas)

### Tarea 4.1: Final Checklist (1h)
**Checklist para CADA zona:**
- [ ] Title ≤60 chars
- [ ] Meta ≤155 chars
- [ ] H1 único
- [ ] 3+ links funcionales
- [ ] Schema validado (0 errores)
- [ ] PageSpeed ≥90 móvil
- [ ] Responsive OK (375, 768, 1024, 1440px)
- [ ] Imágenes existen + optimizadas
- [ ] FAQ completo (≥4 preguntas)
- [ ] Cross-links a otras zonas

### Tarea 4.2: Deployment (0.5h)
**Pasos:**
1. ```bash
   cd ~/Desktop/PAGINAS/rentadeiluminacion
   git add .
   git commit -m "feat: QA REDEIL 3 zonas + documentación Discovery [date]"
   git push origin main
   ```
2. Cloudflare Pages deploy automático
3. Verificar en `rentadeiluminacion.com/zonas/polanco/`, etc.

---

## TIMELINE

### Día 1 (5.5h + 1h documentación)
- **Mañana:** BRIEF.md + KEYWORDS.md (3.5h)
- **Tarde:** CONTENT-MAP.md + SESSION-LOG.md (2h)
- **Noche:** Enviar a Frank para review

### Día 2 (4.5h QA)
- **Mañana:** Lighthouse audit 3 zonas (2h)
- **Mediodía:** Schema validation (1h)
- **Tarde:** Responsive testing 3 zonas (1.5h)

### Día 2 Evening + Día 3 (3h Optimizaciones)
- **Evening:** Schema completeness (1.5h)
- **Día 3 morning:** Image optimization + cross-links (1.5h)
- **Final:** QA checklist + deployment (1h)

---

## CRITERIO "LISTO" FINAL

✅ **Las 3 zonas están LISTAS cuando:**

1. ✅ CADA ZONA (Polanco, Coyoacán, Benito Juárez)
   - Lighthouse ≥90 (Performance, Accessibility, Best Practices, SEO)
   - Schema validado 0 errores + serviceArea + openingHours
   - Responsive OK 4 viewports
   - Imágenes existen + optimizadas
   - FAQ ≥4 preguntas
   - Cross-links a otras zonas

2. ✅ PROYECTO
   - SESSION-LOG.md + BRIEF.md + KEYWORDS.md + CONTENT-MAP.md creados
   - BUILD limpio (0 errores)
   - GIT commits limpios

**Cuando TODO = ✅**, deployment LIVE.

---

**Plan creado:** 21 de marzo 2026  
**Próximo:** PLAN EJECUTIVO CONSOLIDADO (SELLODEGARANTIA + REDEIL)
