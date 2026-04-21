import { e as createAstro, c as createComponent, b as renderComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, F as Fragment } from '../../../chunks/astro/server_D8pMnQBn.mjs';
import 'piccolore';
import { $ as $$BaseLayout, a as $$Breadcrumbs } from '../../../chunks/Breadcrumbs_BkFbHGbf.mjs';
import { $ as $$Hero } from '../../../chunks/Hero_3Is3fruG.mjs';
import { $ as $$CtaBar } from '../../../chunks/CtaBar_CdFZlCZU.mjs';
import { $ as $$BlogSidebar } from '../../../chunks/BlogSidebar_EFZc7r4C.mjs';
/* empty css                                        */
export { renderers } from '../../../renderers.mjs';

const blogArticles = [
  // ──── NUEVOS (Marzo 2026) ────
  {
    slug: "cuanto-cuesta-dj-para-boda-cdmx",
    title: "¿Cuánto Cuesta un DJ para Boda en CDMX? Guía de Precios",
    excerpt: "Precios reales de DJ para boda: desde $4,500 hasta $22,000. Qué incluye cada nivel y qué preguntar antes de contratar.",
    category: "Sonido",
    img: "/img/bocinas-djs/dj-para-bodas-mezclando-musica-evento-800w.avif"
  },
  {
    slug: "audio-profesional-boda-que-necesitas-saber",
    title: "Audio para Boda: Lo Que Nadie Te Dice Antes de Contratar",
    excerpt: "Los 3 momentos de audio en una boda, errores que arruinan eventos y cómo elegir el equipo correcto.",
    category: "Sonido",
    img: "/img/bocinas-bodas/renta-bocinas-boda-banda-cantante-mezcladora-jbl-800w.avif"
  },
  {
    slug: "renta-bola-disco-cdmx-guia-completa",
    title: "Bola Disco para Eventos en CDMX: Tamaños, Precios y Cuál Necesitas",
    excerpt: "Guía completa: tamaños de 30cm a 1.2m, precios, qué necesitas para que funcione y cuándo usarla.",
    category: "Efectos",
    img: "/img/bola-disco/bola-disco-dorada-pista-baile-colores.avif"
  },
  {
    slug: "sky-tracker-para-bodas-cdmx",
    title: "Sky Tracker para Bodas en CDMX: El Efecto que Se Ve Desde Kilómetros",
    excerpt: "Cómo funciona, para qué venues sirve, cuántos necesitas y preguntas logísticas sobre permisos y horarios.",
    category: "Iluminación",
    img: "/img/sky-tracker/luces-antiaereas-boda-hacienda-colonial.avif"
  },
  {
    slug: "maquina-burbujas-bodas-fiestas-cdmx",
    title: "Máquina de Burbujas para Bodas y Fiestas: El Efecto Más Fotogénico",
    excerpt: "Cómo funcionan las máquinas profesionales, mejores momentos para usarlas y qué pasa con el piso.",
    category: "Efectos",
    img: "/img/burbujas/burbujas-efecto-especial-fotografia-video.avif"
  },
  {
    slug: "audio-profesional-conferencias-cdmx",
    title: "Audio para Conferencias en CDMX: Por Qué el Sonido Mata tu Presentación",
    excerpt: "Errores comunes, equipo por tamaño de auditorio, tipos de micrófonos y checklist profesional.",
    category: "Corporativo",
    img: "/img/bocinas-conferencias/alquiler-bocinas-para-conferencias-y-seminarios-800w.avif"
  },
  {
    slug: "cascadas-led-para-bodas-eventos-cdmx",
    title: "Cascadas LED para Bodas: El Efecto Visual que Transforma Cualquier Fondo",
    excerpt: "Qué son, tamaños disponibles, dónde instalarlas para las mejores fotos y combinaciones ganadoras.",
    category: "Iluminación",
    img: "/img/cascadas-led/cascadas-led-backdrop-boda-espectacular-800w.avif"
  },
  {
    slug: "luz-negra-para-fiestas-cdmx-guia",
    title: "Luz Negra para Fiestas en CDMX: Cómo Organizar una Glow Party Profesional",
    excerpt: "Qué brilla bajo UV, cuánto equipo necesitas, diferencia con neón y guía paso a paso.",
    category: "Efectos",
    img: "/img/luz-negra/ambiente-glow-party-neon-800w.avif"
  },
  // ──── BODAS ────
  {
    slug: "cuanto-cuesta-iluminacion-boda-cdmx",
    title: "¿Cuánto Cuesta la Iluminación para una Boda en CDMX?",
    excerpt: "Precios reales, rangos por paquete y qué incluye cada opción. Guía honesta para planear tu presupuesto.",
    category: "Bodas",
    img: "/img/bodas/boda-hacienda-iluminacion-profesional-completa-800w.avif"
  },
  {
    slug: "checklist-iluminacion-boda",
    title: "Checklist de Iluminación para Boda: Todo lo que Debes Confirmar",
    excerpt: "La lista que usan los wedding planners profesionales para no olvidar nada en la iluminación.",
    category: "Bodas",
    img: "/img/guirnaldas/guirnaldas-edison-hacienda-boda.avif"
  },
  {
    slug: "iluminacion-primer-vals-boda",
    title: "Iluminación para el Primer Vals: Follow Spot, Gobo y Efectos",
    excerpt: "Cómo crear el momento más fotogénico de la boda con iluminación profesional.",
    category: "Bodas",
    img: "/img/seguidor/renta-luz-seguidor-boda-primer-baile-hmi-1200w-300w.avif"
  },
  {
    slug: "paquete-iluminacion-boda-completo",
    title: "Paquete Completo de Iluminación para Boda: Qué Incluye",
    excerpt: "Desglose real de qué equipos conforman un paquete de iluminación completo para boda.",
    category: "Paquetes",
    img: "/img/bodas/boda-hacienda-iluminacion-profesional-completa-800w.avif"
  },
  // ──── XV AÑOS ────
  {
    slug: "iluminacion-xv-anos-tendencias",
    title: "Tendencias de Iluminación para XV Años en CDMX 2025",
    excerpt: "Neón, luces LED de colores, bengalas frías y más. Todo lo que está de moda este año.",
    category: "XV Años",
    img: "/img/luces-neon/renta-luces-neon-fiesta-pista-baile-colores-800w.avif"
  },
  {
    slug: "entrada-xv-anos-efectos-especiales",
    title: "Efectos Especiales para Entrada de XV Años: CO2, Bengalas y Sky Tracker",
    excerpt: "Cómo hacer la entrada más impactante con efectos especiales profesionales.",
    category: "XV Años",
    img: "/img/cascadas-led/cascadas-led-backdrop-boda-espectacular-800w.avif"
  },
  // ──── GUIRNALDAS ────
  {
    slug: "cuantos-metros-guirnaldas-necesito",
    title: "¿Cuántos Metros de Guirnaldas Necesito para mi Boda?",
    excerpt: "Calculadora práctica con tablas por metros cuadrados, tipo de espacio y número de invitados.",
    category: "Guirnaldas",
    img: "/img/guirnaldas/guirnaldas-edison-hacienda-boda.avif"
  },
  {
    slug: "guirnaldas-boda-jardin-vs-salon",
    title: "Guirnaldas para Boda: Jardín vs Salón — Diferencias Clave",
    excerpt: "No todas las guirnaldas funcionan igual en interior y exterior. Lo que debes saber antes de contratar.",
    category: "Guirnaldas",
    img: "/img/guirnaldas/guirnaldas-exterior-jardin-boda.avif"
  },
  {
    slug: "diferencia-guirnaldas-edison-led",
    title: "Focos Edison vs LED para Guirnaldas: ¿Cuál Elegir?",
    excerpt: "Temperatura de color, consumo eléctrico, costo y estética. Comparativa honesta.",
    category: "Guirnaldas",
    img: "/img/guirnaldas/guirnaldas-edison-hacienda-boda.avif"
  },
  {
    slug: "paquete-guirnaldas-50-vs-100-metros",
    title: "Paquete 50 vs 100 Metros de Guirnaldas: ¿Cuál Elegir?",
    excerpt: "Cómo saber cuántos metros necesitas según el tamaño de tu espacio y número de invitados.",
    category: "Paquetes",
    img: "/img/guirnaldas/guirnaldas-edison-hacienda-boda.avif"
  },
  // ──── NEÓN ────
  {
    slug: "decoracion-neon-bodas-2025",
    title: "Decoración Neón para Bodas 2025: Ideas y Cómo Pedirla",
    excerpt: "Las tendencias más buscadas en decoración neón para bodas y cómo integrarlas en tu evento.",
    category: "Luces Neón",
    img: "/img/luces-neon/letrero-neon-mr-mrs-800w.avif"
  },
  {
    slug: "glow-party-ideas-cdmx",
    title: "Glow Party en CDMX: Guía Completa con UV y Neón",
    excerpt: "Todo lo que necesitas para organizar una glow party épica: equipos, vestuario, logística.",
    category: "Luces Neón",
    img: "/img/luces-neon/renta-luces-neon-fiesta-pista-baile-colores-800w.avif"
  },
  // ──── EQUIPOS ────
  {
    slug: "que-son-cabezas-moviles",
    title: "¿Qué Son las Cabezas Móviles y Para Qué Sirven?",
    excerpt: "La guía que necesitas si nunca has contratado iluminación profesional para eventos.",
    category: "Equipos",
    img: "/img/cabezas-moviles/renta-cabezas-moviles-boda-beams-blancos-elegante-600w.avif"
  },
  {
    slug: "cabezas-moviles-vs-par-led",
    title: "Cabezas Móviles vs Par LED: ¿Cuál Necesita Tu Evento?",
    excerpt: "Comparativa técnica y práctica para elegir el equipo correcto según tu tipo de evento.",
    category: "Equipos",
    img: "/img/cabezas-moviles/renta-cabezas-moviles-boda-beams-blancos-elegante-600w.avif"
  },
  {
    slug: "tipos-iluminacion-para-eventos",
    title: "Tipos de Iluminación para Eventos: Guía Completa",
    excerpt: "Wash, spot, efectos, arquitectónica, ambiental. Todo lo que debes conocer antes de cotizar.",
    category: "Guía",
    img: "/img/city-color/city-color-fachada-hacienda-boda-800w.avif"
  },
  {
    slug: "sky-tracker-que-es",
    title: "Sky Tracker para Eventos: Qué Es, Cómo Funciona y Cuándo Usarlo",
    excerpt: "El efecto más vistoso para entradas y exteriores nocturnos. Todo sobre los search lights.",
    category: "Equipos",
    img: "/img/sky-tracker/luces-antiaereas-boda-hacienda-colonial.avif"
  },
  {
    slug: "bengalas-frias-seguras-interiores",
    title: "Bengalas Frías en Interiores: ¿Son Seguras?",
    excerpt: "Mitos y verdades sobre los sparksters en salones. Por qué no queman, no generan humo y no activan alarmas.",
    category: "Efectos",
    img: "/img/cascadas-led/cascadas-led-backdrop-boda-espectacular-800w.avif"
  },
  // ──── CORPORATIVO ────
  {
    slug: "iluminacion-eventos-corporativos-cdmx",
    title: "Iluminación para Eventos Corporativos en CDMX",
    excerpt: "Cómo elegir la iluminación correcta para conferencias, lanzamientos y cenas empresariales.",
    category: "Corporativo",
    img: "/img/city-color/city-color-fachada-hacienda-boda-800w.avif"
  },
  {
    slug: "audiovisual-conferencias-cdmx",
    title: "Equipo Audiovisual para Conferencias en CDMX",
    excerpt: "Pantallas, micrófonos y sonido. Todo lo que necesita una conferencia profesional.",
    category: "Corporativo",
    img: "/img/bocinas/bocinas-profesionales-evento-masivo-800w.avif"
  },
  // ──── GUÍAS / COMPARATIVAS ────
  {
    slug: "iluminacion-completa-vs-basica",
    title: "Iluminación Completa vs Básica: Diferencia en Fotos y Video",
    excerpt: "Por qué la iluminación profesional transforma completamente el recuerdo visual de tu evento.",
    category: "Guía",
    img: "/img/bodas/boda-hacienda-iluminacion-profesional-completa-800w.avif"
  },
  {
    slug: "iluminacion-boda-diciembre-cdmx",
    title: "Iluminación para Boda en Diciembre CDMX — Navideña vs Clásica",
    excerpt: "Compara estilos navideño vs clásico para bodas de diciembre en CDMX.",
    category: "Temporadas",
    img: "/img/guirnaldas/guirnaldas-luz-calida-fiestas.avif"
  },
  {
    slug: "iluminacion-boda-al-aire-libre-lluvia",
    title: "¿Qué Pasa con la Iluminación si Llueve en mi Boda al Aire Libre?",
    excerpt: "Equipos IP65, planes B y cómo REDEIL protege tu iluminación de la lluvia.",
    category: "Guía",
    img: "/img/guirnaldas/renta-guirnaldas-boda-jardin-ceremonia-guirnaldas-05.avif"
  },
  {
    slug: "cuanto-adelanto-contratar-iluminacion",
    title: "¿Con Cuánta Anticipación Debo Contratar la Iluminación?",
    excerpt: "Timeline de reserva por tipo de evento: bodas 3-6 meses, XV años 2-4 meses, corporativos 1-2 meses.",
    category: "Guía",
    img: "/img/bodas/boda-hacienda-iluminacion-profesional-completa.avif"
  },
  {
    slug: "iluminacion-boda-100-vs-300-personas",
    title: "Iluminación para Boda de 100 vs 300 Personas: Diferencias Clave",
    excerpt: "Cuántos equipos, watts y luminarios necesitas según el número de invitados.",
    category: "Comparativas",
    img: "/img/bodas/boda-salon-guirnaldas-pista-iluminada.avif"
  },
  {
    slug: "sonido-vs-iluminacion-presupuesto",
    title: "¿En Qué Invertir Más: Sonido o Iluminación para tu Evento?",
    excerpt: "Análisis de presupuesto: cuándo priorizar sonido, cuándo iluminación y cómo equilibrar ambos.",
    category: "Comparativas",
    img: "/img/bocinas/bocinas-profesionales-evento-masivo.avif"
  },
  {
    slug: "iluminacion-boda-civil-vs-religiosa",
    title: "Iluminación para Boda Civil vs Religiosa: ¿Qué Cambia?",
    excerpt: "Diferencias de montaje, restricciones de venue y equipos recomendados.",
    category: "Comparativas",
    img: "/img/bodas/boda-hacienda-iluminacion-profesional.avif"
  },
  {
    slug: "efectos-especiales-que-combinan",
    title: "Guía de Efectos que Combinan Perfecto — CO2, Confeti y Bengalas",
    excerpt: "Cómo combinar CO2, confeti y bengalas frías para máximo impacto.",
    category: "Efectos",
    img: "/img/galeria/confeti-03.avif"
  },
  {
    slug: "iluminacion-garden-party-cdmx",
    title: "Garden Party en CDMX: Iluminación Perfecta para Fiestas al Aire Libre",
    excerpt: "Guirnaldas, luces festoon y iluminación ambiental para garden parties.",
    category: "Guía",
    img: "/img/guirnaldas/guirnaldas-exterior-jardin-boda.avif"
  },
  // ──── ZONAS GEOGRÁFICAS ────
  {
    slug: "iluminacion-bodas-coyoacan",
    title: "Iluminación para Bodas en Coyoacán CDMX",
    excerpt: "Guía de iluminación para bodas en Coyoacán: jardines privados, casas coloniales y los mejores espacios.",
    category: "Zonas",
    img: "/img/guirnaldas/renta-guirnaldas-boda-patio-colonial-guirnaldas-21.avif"
  },
  {
    slug: "iluminacion-eventos-polanco",
    title: "Iluminación para Eventos en Polanco CDMX",
    excerpt: "Iluminación profesional para eventos de alta gama en Polanco: hoteles 5 estrellas, rooftops y salones.",
    category: "Zonas",
    img: "/img/cabezas-moviles/renta-cabezas-moviles-boda-beams-blancos-elegante.avif"
  },
  {
    slug: "iluminacion-bodas-tlalpan",
    title: "Renta de Iluminación para Bodas en Tlalpan",
    excerpt: "Iluminación perfecta para bodas en haciendas y jardines de Tlalpan, zona boscosa del Ajusco.",
    category: "Zonas",
    img: "/img/guirnaldas/guirnaldas-edison-hacienda-boda.avif"
  },
  {
    slug: "iluminacion-xv-anos-iztapalapa",
    title: "Iluminación para XV Años en Iztapalapa",
    excerpt: "Equipos de iluminación y efectos especiales para XV años en salones y jardines de Iztapalapa.",
    category: "Zonas",
    img: "/img/xv-anos/iluminacion-xv-anos-vals-seguidor.avif"
  },
  {
    slug: "iluminacion-eventos-naucalpan",
    title: "Iluminación para Eventos en Naucalpan",
    excerpt: "Servicios de iluminación y sonido para eventos en Naucalpan y zona poniente del Estado de México.",
    category: "Zonas",
    img: "/img/galeria/cascadas-led-01.avif"
  },
  {
    slug: "iluminacion-bodas-cdmx-sur",
    title: "Iluminación para Bodas en el Sur de CDMX",
    excerpt: "Guirnaldas, luces LED y efectos especiales para bodas en la zona sur.",
    category: "Zonas",
    img: "/img/guirnaldas/guirnaldas-exterior-jardin-boda.avif"
  },
  {
    slug: "iluminacion-eventos-ecatepec",
    title: "Renta de Iluminación para Eventos en Ecatepec",
    excerpt: "Cobertura completa de iluminación profesional para eventos en Ecatepec y zona norte del Edomex.",
    category: "Zonas",
    img: "/img/cabezas-moviles/renta-cabezas-moviles-boda-beams-blancos-elegante.avif"
  },
  {
    slug: "iluminacion-bodas-satelite",
    title: "Iluminación para Bodas en Ciudad Satélite y Naucalpan",
    excerpt: "Iluminación elegante para bodas en Ciudad Satélite: salones modernos, terrazas y jardines.",
    category: "Zonas",
    img: "/img/bodas/boda-hacienda-iluminacion-profesional-completa.avif"
  },
  {
    slug: "iluminacion-eventos-alvaro-obregon",
    title: "Iluminación para Eventos en Álvaro Obregón",
    excerpt: "Iluminación corporativa y social para eventos en Santa Fe, Lomas de Chapultepec y Pedregal.",
    category: "Zonas",
    img: "/img/city-color/iluminacion-arquitectonica-edificio-oficinas.avif"
  },
  {
    slug: "iluminacion-eventos-benito-juarez",
    title: "Iluminación para Eventos en Benito Juárez",
    excerpt: "Servicios de iluminación para foros, terrazas y salones en la alcaldía Benito Juárez.",
    category: "Zonas",
    img: "/img/galeria/cabezas-moviles-01.avif"
  },
  {
    slug: "iluminacion-haciendas-edomex",
    title: "Iluminación para Bodas en Haciendas del Estado de México",
    excerpt: "Guirnaldas, city color y efectos especiales para haciendas coloniales.",
    category: "Zonas",
    img: "/img/guirnaldas/renta-guirnaldas-boda-hacienda-mexicana-guirnaldas-18.avif"
  },
  {
    slug: "renta-iluminacion-zona-metropolitana",
    title: "Cobertura REDEIL: Iluminación en Toda la Zona Metropolitana",
    excerpt: "Mapa completo de cobertura REDEIL: CDMX, Edomex, zona norte, sur, poniente y oriente.",
    category: "Zonas",
    img: "/img/galeria/cabezas-moviles-02.avif"
  },
  // ──── EXTRAS ────
  {
    slug: "iluminacion-eventos-azcapotzalco",
    title: "Iluminación para Eventos en Azcapotzalco",
    excerpt: "Servicios de iluminación profesional para eventos sociales y corporativos en Azcapotzalco.",
    category: "Zonas",
    img: "/img/galeria/cascadas-led-01.avif"
  },
  {
    slug: "iluminacion-eventos-centro-historico-cdmx",
    title: "Iluminación para Eventos en el Centro Histórico CDMX",
    excerpt: "Iluminación para eventos en palacios, museos y terrazas del Centro Histórico.",
    category: "Zonas",
    img: "/img/city-color/iluminacion-arquitectonica-edificio-oficinas.avif"
  },
  {
    slug: "iluminacion-eventos-gustavo-a-madero",
    title: "Iluminación para Eventos en Gustavo A. Madero",
    excerpt: "Servicios completos de iluminación para la zona norte de la Ciudad de México.",
    category: "Zonas",
    img: "/img/galeria/cabezas-moviles-01.avif"
  },
  {
    slug: "iluminacion-eventos-huixquilucan",
    title: "Iluminación para Eventos en Huixquilucan",
    excerpt: "Iluminación premium para eventos en Interlomas, La Herradura y zonas residenciales.",
    category: "Zonas",
    img: "/img/bodas/boda-hacienda-iluminacion-profesional-completa.avif"
  },
  {
    slug: "iluminacion-eventos-iztapalapa",
    title: "Iluminación para Eventos en Iztapalapa",
    excerpt: "Cobertura de iluminación profesional en la alcaldía más grande de CDMX.",
    category: "Zonas",
    img: "/img/galeria/cascadas-led-01.avif"
  },
  {
    slug: "iluminacion-eventos-texcoco",
    title: "Iluminación para Eventos en Texcoco",
    excerpt: "Iluminación para haciendas, salones y jardines en Texcoco y alrededores.",
    category: "Zonas",
    img: "/img/guirnaldas/guirnaldas-edison-hacienda-boda.avif"
  },
  {
    slug: "iluminacion-eventos-tlalpan",
    title: "Iluminación para Eventos en Tlalpan",
    excerpt: "Iluminación profesional para eventos en la zona boscosa del Ajusco y Tlalpan.",
    category: "Zonas",
    img: "/img/guirnaldas/guirnaldas-exterior-jardin-boda.avif"
  },
  {
    slug: "iluminacion-eventos-toluca-metepec",
    title: "Iluminación para Eventos en Toluca y Metepec",
    excerpt: "Servicios de iluminación y efectos especiales para eventos en el Valle de Toluca.",
    category: "Zonas",
    img: "/img/galeria/cabezas-moviles-02.avif"
  },
  {
    slug: "iluminacion-eventos-venustiano-carranza",
    title: "Iluminación para Eventos en Venustiano Carranza",
    excerpt: "Iluminación para salones, foros y espacios de eventos en la zona centro-oriente.",
    category: "Zonas",
    img: "/img/galeria/confeti-03.avif"
  },
  {
    slug: "iluminacion-eventos-xochimilco",
    title: "Iluminación para Eventos en Xochimilco",
    excerpt: "Guirnaldas y luces para bodas en jardines y trajineras de Xochimilco.",
    category: "Zonas",
    img: "/img/guirnaldas/guirnaldas-exterior-jardin-boda.avif"
  },
  // ──── NUEVOS (Marzo 2026) ────
  {
    slug: "cuanto-cuesta-humo-bajo-boda-cdmx",
    title: "¿Cuánto Cuesta el Humo Bajo para Boda en CDMX? Precios Reales",
    excerpt: "Precios reales del humo bajo para bodas: desde $3,500 hasta $9,000. Qué incluye, cuánto dura y qué preguntar antes de contratar.",
    category: "Bodas",
    img: "/img/humo-bajo/efecto-nubes-piso-boda-jardin-400w.avif"
  },
  {
    slug: "cuanto-cuesta-renta-pantalla-inflable-cdmx",
    title: "¿Cuánto Cuesta Rentar una Pantalla Inflable en CDMX? Guía de Precios",
    excerpt: "Precios reales de renta de pantalla inflable en CDMX: desde $4,500. Tamaños, qué incluye y cuántos lúmenes necesita el proyector.",
    category: "Guía",
    img: "/img/pantalla-inflable/alquiler-pantalla-inflable-aniversario-boda.avif"
  },
  {
    slug: "cuanto-cuesta-confeti-para-boda",
    title: "¿Cuánto Cuesta el Confeti para Boda? Cañones y Precios Reales",
    excerpt: "Cañones de confeti desde $1,800, máquinas desde $3,500. Tipos, cuándo usar cada uno y qué permiten los venues de CDMX.",
    category: "Efectos",
    img: "/img/confeti/confeti-dorado-boda-novios-fiesta.avif"
  },
  {
    slug: "humo-bajo-vs-maquina-humo-cual-es-para-ti",
    title: "Humo Bajo vs Máquina de Humo: ¿Cuál es Para Tu Evento?",
    excerpt: "Diferencias reales entre humo bajo y máquina convencional: cuándo usar cada uno, precios y cuál da mejores fotos en tu boda.",
    category: "Comparativas",
    img: "/img/humo-bajo/efecto-nubes-piso-boda-jardin-400w.avif"
  },
  {
    slug: "iluminacion-salon-vs-jardin-diferencias",
    title: "Iluminación para Salón vs Jardín: Diferencias que Debes Saber",
    excerpt: "Iluminar un salón cerrado es muy distinto a iluminar un jardín. Equipo, instalación, costos y qué funciona mejor en cada espacio.",
    category: "Guía",
    img: "/img/guirnaldas/guirnaldas-edison-hacienda-boda.avif"
  },
  {
    slug: "error-mas-caro-iluminacion-bodas",
    title: "El Error Más Caro en Iluminación para Bodas (y Cómo Evitarlo)",
    excerpt: "El error que arruina bodas no es el equipo ni el precio. Es la falta de coordinación. Te explicamos qué pasa y cómo evitarlo.",
    category: "Bodas",
    img: "/img/bodas/boda-hacienda-iluminacion-profesional-completa-800w.avif"
  },
  {
    slug: "lo-que-tu-fotografo-quiere-que-sepas-sobre-iluminacion",
    title: "Lo Que Tu Fotógrafo Quiere Que Sepas Sobre la Iluminación",
    excerpt: "Tu fotógrafo de boda tiene opiniones fuertes sobre la iluminación y probablemente no te las dijo. Aquí están, con consejos de REDEIL.",
    category: "Guía",
    img: "/img/bodas/boda-elegante-guirnaldas-iluminacion-dj.avif"
  },
  {
    slug: "que-pasa-cuando-llueve-evento-aire-libre",
    title: "¿Qué Pasa con la Iluminación Si Llueve en Tu Evento al Aire Libre?",
    excerpt: "¿Lluvia en tu boda o evento en jardín? Qué equipo resiste el agua, qué no, y cómo preparar un plan B que realmente funcione.",
    category: "Guía",
    img: "/img/guirnaldas/guirnaldas-exterior-jardin-boda.avif"
  },
  {
    slug: "temporada-alta-bodas-cdmx-cuando-reservar",
    title: "Temporada Alta de Bodas en CDMX: Cuándo Reservar y Cuándo Ahorrar",
    excerpt: "Las fechas más caras y más accesibles para bodas en CDMX. Cuándo reservar iluminación para garantizar disponibilidad y precio justo.",
    category: "Bodas",
    img: "/img/bodas/boda-hacienda-guirnaldas-city-color.avif"
  },
  {
    slug: "por-que-el-vals-necesita-su-propia-iluminacion",
    title: "Por Qué el Vals Necesita Su Propia Iluminación (y Qué Equipo Usamos)",
    excerpt: "El vals no puede iluminarse igual que el resto de la boda. Te explicamos el equipo, el seguidor HMI y cómo programamos cada segundo.",
    category: "Bodas",
    img: "/img/seguidor/renta-luz-seguidor-boda-primer-baile-hmi-1200w-300w.avif"
  }
];
const categoryOrder = [
  "Bodas",
  "XV Años",
  "Guirnaldas",
  "Luces Neón",
  "Equipos",
  "Efectos",
  "Sonido",
  "Corporativo",
  "Guía",
  "Comparativas",
  "Paquetes",
  "Temporadas",
  "Zonas"
];
function buildCategories() {
  const catMap = /* @__PURE__ */ new Map();
  blogArticles.forEach((a) => {
    catMap.set(a.category, (catMap.get(a.category) || 0) + 1);
  });
  return categoryOrder.filter((c) => catMap.has(c)).map((c) => ({
    name: c,
    count: catMap.get(c),
    slug: c.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, "-")
  }));
}
const popularSlugs = [
  "cuanto-cuesta-iluminacion-boda-cdmx",
  "cuantos-metros-guirnaldas-necesito",
  "tipos-iluminacion-para-eventos",
  "bengalas-frias-seguras-interiores",
  "cuanto-cuesta-dj-para-boda-cdmx"
];
function getPopularArticles() {
  return popularSlugs.map((slug) => blogArticles.find((a) => a.slug === slug)).filter(Boolean).map((a) => ({ title: a.title, slug: a.slug, category: a.category, img: a.img }));
}
const ARTICLES_PER_PAGE = 12;
function getTotalPages() {
  return Math.ceil(blogArticles.length / ARTICLES_PER_PAGE);
}
function getPageArticles(page) {
  const start = (page - 1) * ARTICLES_PER_PAGE;
  return blogArticles.slice(start, start + ARTICLES_PER_PAGE);
}

const $$Astro = createAstro("https://rentadeiluminacion.com");
async function getStaticPaths() {
  const totalPages = getTotalPages();
  return Array.from({ length: totalPages - 1 }, (_, i) => ({
    params: { page: String(i + 2) }
  }));
}
const $$page = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$page;
  const { page: pageParam } = Astro2.params;
  const currentPage = Number(pageParam);
  const totalPages = getTotalPages();
  if (currentPage === 1) {
    return Astro2.redirect("/blog/", 301);
  }
  if (currentPage < 1 || currentPage > totalPages || isNaN(currentPage)) {
    return Astro2.redirect("/blog/", 301);
  }
  const pageArticles = getPageArticles(currentPage);
  const categories = buildCategories();
  const popularArticles = getPopularArticles();
  const catMap = /* @__PURE__ */ new Map();
  blogArticles.forEach((a) => {
    catMap.set(a.category, (catMap.get(a.category) || 0) + 1);
  });
  const categoryOrder = ["Bodas", "XV A\xF1os", "Guirnaldas", "Luces Ne\xF3n", "Equipos", "Efectos", "Sonido", "Corporativo", "Gu\xEDa", "Comparativas", "Paquetes", "Temporadas", "Zonas"];
  const ctaBarItems = categories.map((cat) => ({
    label: cat.name,
    href: `/blog/?cat=${cat.slug}`
  }));
  const title = `Blog de Iluminaci\xF3n \u2014 P\xE1gina ${currentPage} | REDEIL CDMX`;
  const description = `Art\xEDculos de iluminaci\xF3n para eventos: gu\xEDas, precios y consejos. P\xE1gina ${currentPage} de ${totalPages}.`;
  const canonical = `https://rentadeiluminacion.com/blog/pagina/${currentPage}/`;
  const schemaMarkup = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Blog de Iluminaci\xF3n para Eventos \u2014 REDEIL",
    "description": description,
    "url": canonical,
    "publisher": {
      "@type": "Organization",
      "name": "REDEIL",
      "url": "https://rentadeiluminacion.com"
    }
  });
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "canonical": canonical, "schemaMarkup": schemaMarkup, "data-astro-cid-wcnwzcuj": true }, { "breadcrumbs": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "breadcrumbs" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Breadcrumbs", $$Breadcrumbs, { "items": [
    { label: "Inicio", href: "/" },
    { label: "Blog", href: "/blog/" },
    { label: `P\xE1gina ${currentPage}` }
  ], "data-astro-cid-wcnwzcuj": true })} ` })}`, "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, { "title": "Blog de Iluminaci\xF3n para Eventos", "subtitle": "Gu\xEDas pr\xE1cticas, precios reales y consejos de nuestro equipo t\xE9cnico con m\xE1s de 30 a\xF1os de experiencia.", "introParagraph1": "En REDEIL compartimos m\xE1s de 30 a\xF1os de experiencia en iluminaci\xF3n para eventos. Cada art\xEDculo est\xE1 escrito por nuestro equipo t\xE9cnico con base en situaciones reales de bodas, XV a\xF1os y corporativos en CDMX y Zona Metropolitana.", "introParagraph2": "Encontrar\xE1s informaci\xF3n concreta sobre precios, metros de guirnaldas, diferencias entre equipos, efectos especiales y todo lo que necesitas saber para tomar la mejor decisi\xF3n para tu evento. Sin tecnicismos innecesarios, con datos reales.", "data-astro-cid-wcnwzcuj": true })} ${renderComponent($$result2, "CtaBar", $$CtaBar, { "headline": "Explora por categor\xEDa", "items": ctaBarItems, "data-astro-cid-wcnwzcuj": true })} ${maybeRenderHead()}<section class="blog-filters" data-astro-cid-wcnwzcuj> <div class="container" data-astro-cid-wcnwzcuj> <div class="bf-pills" data-astro-cid-wcnwzcuj> <a href="/blog/" class="bf-pill" data-astro-cid-wcnwzcuj>Todos</a> ${categoryOrder.filter((c) => catMap.has(c)).map((cat) => renderTemplate`<a${addAttribute(`/blog/`, "href")} class="bf-pill" data-astro-cid-wcnwzcuj>${cat} <span class="bf-pill__count" data-astro-cid-wcnwzcuj>${catMap.get(cat)}</span></a>`)} </div> </div> </section> <section class="blog-main" data-astro-cid-wcnwzcuj> <div class="container blog-main__layout" data-astro-cid-wcnwzcuj> <div class="blog-main__content" data-astro-cid-wcnwzcuj> <div class="blog-grid" data-astro-cid-wcnwzcuj> ${pageArticles.map((article) => renderTemplate`<article class="bc" data-astro-cid-wcnwzcuj> <a${addAttribute(`/blog/${article.slug}/`, "href")} class="bc__img-link" data-astro-cid-wcnwzcuj> <div class="bc__img" data-astro-cid-wcnwzcuj> <img${addAttribute(article.img, "src")}${addAttribute(article.title, "alt")} loading="lazy" width="600" height="338" data-astro-cid-wcnwzcuj> <span class="bc__cat" data-astro-cid-wcnwzcuj>${article.category}</span> </div> </a> <div class="bc__body" data-astro-cid-wcnwzcuj> <h2 class="bc__title" data-astro-cid-wcnwzcuj> <a${addAttribute(`/blog/${article.slug}/`, "href")} data-astro-cid-wcnwzcuj>${article.title}</a> </h2> <p class="bc__desc" data-astro-cid-wcnwzcuj>${article.excerpt}</p> <a${addAttribute(`/blog/${article.slug}/`, "href")} class="bc__link" data-astro-cid-wcnwzcuj>
Leer artículo <span aria-hidden="true" data-astro-cid-wcnwzcuj>→</span> </a> </div> </article>`)} </div>  <nav class="pagination" aria-label="Páginas del blog" data-astro-cid-wcnwzcuj> ${currentPage > 1 && renderTemplate`<a${addAttribute(currentPage === 2 ? "/blog/" : `/blog/pagina/${currentPage - 1}/`, "href")} class="pagination__prev" data-astro-cid-wcnwzcuj>« Anterior</a>`} <div class="pagination__pages" data-astro-cid-wcnwzcuj> <a href="/blog/" class="pagination__page" data-astro-cid-wcnwzcuj>1</a> ${Array.from({ length: totalPages - 1 }, (_, i) => i + 2).map((p) => renderTemplate`<a${addAttribute(`/blog/pagina/${p}/`, "href")}${addAttribute(`pagination__page${p === currentPage ? " pagination__page--active" : ""}`, "class")}${addAttribute(p === currentPage ? "page" : void 0, "aria-current")} data-astro-cid-wcnwzcuj>${p}</a>`)} </div> ${currentPage < totalPages && renderTemplate`<a${addAttribute(`/blog/pagina/${currentPage + 1}/`, "href")} class="pagination__next" data-astro-cid-wcnwzcuj>Siguiente »</a>`} </nav> </div> <aside class="blog-main__sidebar" data-astro-cid-wcnwzcuj> ${renderComponent($$result2, "BlogSidebar", $$BlogSidebar, { "categories": categories, "popularArticles": popularArticles, "data-astro-cid-wcnwzcuj": true })} </aside> </div> </section> <section class="blog-cta-final" data-astro-cid-wcnwzcuj> <div class="container blog-cta-final__inner" data-astro-cid-wcnwzcuj> <h2 data-astro-cid-wcnwzcuj>¿No encuentras lo que buscas?</h2> <p data-astro-cid-wcnwzcuj>Nuestro equipo técnico tiene la respuesta. Cotiza sin compromiso o pregúntanos directamente por WhatsApp.</p> <div class="blog-cta-final__btns" data-astro-cid-wcnwzcuj> <a href="/contacto/" class="btn btn-primary btn-lg" data-astro-cid-wcnwzcuj>Cotizar Gratis →</a> <a href="https://wa.me/5215530682988?text=Hola%20REDEIL%2C%20tengo%20una%20pregunta%20sobre%20iluminación." target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-lg" data-astro-cid-wcnwzcuj>WhatsApp</a> </div> </div> </section> ` })} `;
}, "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/pages/blog/pagina/[page].astro", void 0);

const $$file = "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/pages/blog/pagina/[page].astro";
const $$url = "/blog/pagina/[page]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$page,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
