/**
 * Blog Articles Data — REDEIL
 * Fuente de verdad para todos los artículos del blog.
 * Imágenes verificadas que existen en /public/img/
 */

export interface BlogArticle {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  img: string;
}

export const blogArticles: BlogArticle[] = [
  // ──── NUEVOS (Marzo 2026) ────
  {
    slug: "cuanto-cuesta-dj-para-boda-cdmx",
    title: "¿Cuánto Cuesta un DJ para Boda en CDMX? Guía de Precios",
    excerpt: "Precios reales de DJ para boda: desde $4,500 hasta $22,000. Qué incluye cada nivel y qué preguntar antes de contratar.",
    category: "Sonido",
    img: "/img/bocinas-djs/dj-para-bodas-mezclando-musica-evento-800w.avif",
  },
  {
    slug: "audio-profesional-boda-que-necesitas-saber",
    title: "Audio para Boda: Lo Que Nadie Te Dice Antes de Contratar",
    excerpt: "Los 3 momentos de audio en una boda, errores que arruinan eventos y cómo elegir el equipo correcto.",
    category: "Sonido",
    img: "/img/bocinas-bodas/renta-bocinas-boda-banda-cantante-mezcladora-jbl-800w.avif",
  },
  {
    slug: "renta-bola-disco-cdmx-guia-completa",
    title: "Bola Disco para Eventos en CDMX: Tamaños, Precios y Cuál Necesitas",
    excerpt: "Guía completa: tamaños de 30cm a 1.2m, precios, qué necesitas para que funcione y cuándo usarla.",
    category: "Efectos",
    img: "/img/bola-disco/bola-disco-dorada-pista-baile-colores.avif",
  },
  {
    slug: "sky-tracker-para-bodas-cdmx",
    title: "Sky Tracker para Bodas en CDMX: El Efecto que Se Ve Desde Kilómetros",
    excerpt: "Cómo funciona, para qué venues sirve, cuántos necesitas y preguntas logísticas sobre permisos y horarios.",
    category: "Iluminación",
    img: "/img/sky-tracker/luces-antiaereas-boda-hacienda-colonial.avif",
  },
  {
    slug: "maquina-burbujas-bodas-fiestas-cdmx",
    title: "Máquina de Burbujas para Bodas y Fiestas: El Efecto Más Fotogénico",
    excerpt: "Cómo funcionan las máquinas profesionales, mejores momentos para usarlas y qué pasa con el piso.",
    category: "Efectos",
    img: "/img/burbujas/burbujas-efecto-especial-fotografia-video.avif",
  },
  {
    slug: "audio-profesional-conferencias-cdmx",
    title: "Audio para Conferencias en CDMX: Por Qué el Sonido Mata tu Presentación",
    excerpt: "Errores comunes, equipo por tamaño de auditorio, tipos de micrófonos y checklist profesional.",
    category: "Corporativo",
    img: "/img/bocinas-conferencias/alquiler-bocinas-para-conferencias-y-seminarios-800w.avif",
  },
  {
    slug: "cascadas-led-para-bodas-eventos-cdmx",
    title: "Cascadas LED para Bodas: El Efecto Visual que Transforma Cualquier Fondo",
    excerpt: "Qué son, tamaños disponibles, dónde instalarlas para las mejores fotos y combinaciones ganadoras.",
    category: "Iluminación",
    img: "/img/cascadas-led/cascadas-led-backdrop-boda-espectacular-800w.avif",
  },
  {
    slug: "luz-negra-para-fiestas-cdmx-guia",
    title: "Luz Negra para Fiestas en CDMX: Cómo Organizar una Glow Party Profesional",
    excerpt: "Qué brilla bajo UV, cuánto equipo necesitas, diferencia con neón y guía paso a paso.",
    category: "Efectos",
    img: "/img/luz-negra/ambiente-glow-party-neon-800w.avif",
  },
  // ──── BODAS ────
  {
    slug: "cuanto-cuesta-iluminacion-boda-cdmx",
    title: "¿Cuánto Cuesta la Iluminación para una Boda en CDMX?",
    excerpt: "Precios reales, rangos por paquete y qué incluye cada opción. Guía honesta para planear tu presupuesto.",
    category: "Bodas",
    img: "/img/bodas/boda-hacienda-iluminacion-profesional-completa-800w.avif",
  },
  {
    slug: "checklist-iluminacion-boda",
    title: "Checklist de Iluminación para Boda: Todo lo que Debes Confirmar",
    excerpt: "La lista que usan los wedding planners profesionales para no olvidar nada en la iluminación.",
    category: "Bodas",
    img: "/img/guirnaldas/guirnaldas-edison-hacienda-boda.avif",
  },
  {
    slug: "iluminacion-primer-vals-boda",
    title: "Iluminación para el Primer Vals: Follow Spot, Gobo y Efectos",
    excerpt: "Cómo crear el momento más fotogénico de la boda con iluminación profesional.",
    category: "Bodas",
    img: "/img/seguidor/renta-luz-seguidor-boda-primer-baile-hmi-1200w-300w.avif",
  },
  {
    slug: "paquete-iluminacion-boda-completo",
    title: "Paquete Completo de Iluminación para Boda: Qué Incluye",
    excerpt: "Desglose real de qué equipos conforman un paquete de iluminación completo para boda.",
    category: "Paquetes",
    img: "/img/bodas/boda-hacienda-iluminacion-profesional-completa-800w.avif",
  },
  // ──── XV AÑOS ────
  {
    slug: "iluminacion-xv-anos-tendencias",
    title: "Tendencias de Iluminación para XV Años en CDMX 2025",
    excerpt: "Neón, luces LED de colores, bengalas frías y más. Todo lo que está de moda este año.",
    category: "XV Años",
    img: "/img/luces-neon/renta-luces-neon-fiesta-pista-baile-colores-800w.avif",
  },
  {
    slug: "entrada-xv-anos-efectos-especiales",
    title: "Efectos Especiales para Entrada de XV Años: CO2, Bengalas y Sky Tracker",
    excerpt: "Cómo hacer la entrada más impactante con efectos especiales profesionales.",
    category: "XV Años",
    img: "/img/cascadas-led/cascadas-led-backdrop-boda-espectacular-800w.avif",
  },
  // ──── GUIRNALDAS ────
  {
    slug: "cuantos-metros-guirnaldas-necesito",
    title: "¿Cuántos Metros de Guirnaldas Necesito para mi Boda?",
    excerpt: "Calculadora práctica con tablas por metros cuadrados, tipo de espacio y número de invitados.",
    category: "Guirnaldas",
    img: "/img/guirnaldas/guirnaldas-edison-hacienda-boda.avif",
  },
  {
    slug: "guirnaldas-boda-jardin-vs-salon",
    title: "Guirnaldas para Boda: Jardín vs Salón — Diferencias Clave",
    excerpt: "No todas las guirnaldas funcionan igual en interior y exterior. Lo que debes saber antes de contratar.",
    category: "Guirnaldas",
    img: "/img/guirnaldas/guirnaldas-exterior-jardin-boda.avif",
  },
  {
    slug: "diferencia-guirnaldas-edison-led",
    title: "Focos Edison vs LED para Guirnaldas: ¿Cuál Elegir?",
    excerpt: "Temperatura de color, consumo eléctrico, costo y estética. Comparativa honesta.",
    category: "Guirnaldas",
    img: "/img/guirnaldas/guirnaldas-edison-hacienda-boda.avif",
  },
  {
    slug: "paquete-guirnaldas-50-vs-100-metros",
    title: "Paquete 50 vs 100 Metros de Guirnaldas: ¿Cuál Elegir?",
    excerpt: "Cómo saber cuántos metros necesitas según el tamaño de tu espacio y número de invitados.",
    category: "Paquetes",
    img: "/img/guirnaldas/guirnaldas-edison-hacienda-boda.avif",
  },
  // ──── NEÓN ────
  {
    slug: "decoracion-neon-bodas-2025",
    title: "Decoración Neón para Bodas 2025: Ideas y Cómo Pedirla",
    excerpt: "Las tendencias más buscadas en decoración neón para bodas y cómo integrarlas en tu evento.",
    category: "Luces Neón",
    img: "/img/luces-neon/letrero-neon-mr-mrs-800w.avif",
  },
  {
    slug: "glow-party-ideas-cdmx",
    title: "Glow Party en CDMX: Guía Completa con UV y Neón",
    excerpt: "Todo lo que necesitas para organizar una glow party épica: equipos, vestuario, logística.",
    category: "Luces Neón",
    img: "/img/luces-neon/renta-luces-neon-fiesta-pista-baile-colores-800w.avif",
  },
  // ──── EQUIPOS ────
  {
    slug: "que-son-cabezas-moviles",
    title: "¿Qué Son las Cabezas Móviles y Para Qué Sirven?",
    excerpt: "La guía que necesitas si nunca has contratado iluminación profesional para eventos.",
    category: "Equipos",
    img: "/img/cabezas-moviles/renta-cabezas-moviles-boda-beams-blancos-elegante-600w.avif",
  },
  {
    slug: "cabezas-moviles-vs-par-led",
    title: "Cabezas Móviles vs Par LED: ¿Cuál Necesita Tu Evento?",
    excerpt: "Comparativa técnica y práctica para elegir el equipo correcto según tu tipo de evento.",
    category: "Equipos",
    img: "/img/cabezas-moviles/renta-cabezas-moviles-boda-beams-blancos-elegante-600w.avif",
  },
  {
    slug: "tipos-iluminacion-para-eventos",
    title: "Tipos de Iluminación para Eventos: Guía Completa",
    excerpt: "Wash, spot, efectos, arquitectónica, ambiental. Todo lo que debes conocer antes de cotizar.",
    category: "Guía",
    img: "/img/city-color/city-color-fachada-hacienda-boda-800w.avif",
  },
  {
    slug: "sky-tracker-que-es",
    title: "Sky Tracker para Eventos: Qué Es, Cómo Funciona y Cuándo Usarlo",
    excerpt: "El efecto más vistoso para entradas y exteriores nocturnos. Todo sobre los search lights.",
    category: "Equipos",
    img: "/img/sky-tracker/luces-antiaereas-boda-hacienda-colonial.avif",
  },
  {
    slug: "bengalas-frias-seguras-interiores",
    title: "Bengalas Frías en Interiores: ¿Son Seguras?",
    excerpt: "Mitos y verdades sobre los sparksters en salones. Por qué no queman, no generan humo y no activan alarmas.",
    category: "Efectos",
    img: "/img/cascadas-led/cascadas-led-backdrop-boda-espectacular-800w.avif",
  },
  // ──── CORPORATIVO ────
  {
    slug: "iluminacion-eventos-corporativos-cdmx",
    title: "Iluminación para Eventos Corporativos en CDMX",
    excerpt: "Cómo elegir la iluminación correcta para conferencias, lanzamientos y cenas empresariales.",
    category: "Corporativo",
    img: "/img/city-color/city-color-fachada-hacienda-boda-800w.avif",
  },
  {
    slug: "audiovisual-conferencias-cdmx",
    title: "Equipo Audiovisual para Conferencias en CDMX",
    excerpt: "Pantallas, micrófonos y sonido. Todo lo que necesita una conferencia profesional.",
    category: "Corporativo",
    img: "/img/bocinas/bocinas-profesionales-evento-masivo-800w.avif",
  },
  // ──── GUÍAS / COMPARATIVAS ────
  {
    slug: "iluminacion-completa-vs-basica",
    title: "Iluminación Completa vs Básica: Diferencia en Fotos y Video",
    excerpt: "Por qué la iluminación profesional transforma completamente el recuerdo visual de tu evento.",
    category: "Guía",
    img: "/img/bodas/boda-hacienda-iluminacion-profesional-completa-800w.avif",
  },
  {
    slug: "iluminacion-boda-diciembre-cdmx",
    title: "Iluminación para Boda en Diciembre CDMX — Navideña vs Clásica",
    excerpt: "Compara estilos navideño vs clásico para bodas de diciembre en CDMX.",
    category: "Temporadas",
    img: "/img/guirnaldas/guirnaldas-luz-calida-fiestas.avif",
  },
  {
    slug: "iluminacion-boda-al-aire-libre-lluvia",
    title: "¿Qué Pasa con la Iluminación si Llueve en mi Boda al Aire Libre?",
    excerpt: "Equipos IP65, planes B y cómo REDEIL protege tu iluminación de la lluvia.",
    category: "Guía",
    img: "/img/guirnaldas/renta-guirnaldas-boda-jardin-ceremonia-guirnaldas-05.avif",
  },
  {
    slug: "cuanto-adelanto-contratar-iluminacion",
    title: "¿Con Cuánta Anticipación Debo Contratar la Iluminación?",
    excerpt: "Timeline de reserva por tipo de evento: bodas 3-6 meses, XV años 2-4 meses, corporativos 1-2 meses.",
    category: "Guía",
    img: "/img/bodas/boda-hacienda-iluminacion-profesional-completa.avif",
  },
  {
    slug: "iluminacion-boda-100-vs-300-personas",
    title: "Iluminación para Boda de 100 vs 300 Personas: Diferencias Clave",
    excerpt: "Cuántos equipos, watts y luminarios necesitas según el número de invitados.",
    category: "Comparativas",
    img: "/img/bodas/boda-salon-guirnaldas-pista-iluminada.avif",
  },
  {
    slug: "sonido-vs-iluminacion-presupuesto",
    title: "¿En Qué Invertir Más: Sonido o Iluminación para tu Evento?",
    excerpt: "Análisis de presupuesto: cuándo priorizar sonido, cuándo iluminación y cómo equilibrar ambos.",
    category: "Comparativas",
    img: "/img/bocinas/bocinas-profesionales-evento-masivo.avif",
  },
  {
    slug: "iluminacion-boda-civil-vs-religiosa",
    title: "Iluminación para Boda Civil vs Religiosa: ¿Qué Cambia?",
    excerpt: "Diferencias de montaje, restricciones de venue y equipos recomendados.",
    category: "Comparativas",
    img: "/img/bodas/boda-hacienda-iluminacion-profesional.avif",
  },
  {
    slug: "efectos-especiales-que-combinan",
    title: "Guía de Efectos que Combinan Perfecto — CO2, Confeti y Bengalas",
    excerpt: "Cómo combinar CO2, confeti y bengalas frías para máximo impacto.",
    category: "Efectos",
    img: "/img/galeria/confeti-03.avif",
  },
  {
    slug: "iluminacion-garden-party-cdmx",
    title: "Garden Party en CDMX: Iluminación Perfecta para Fiestas al Aire Libre",
    excerpt: "Guirnaldas, luces festoon y iluminación ambiental para garden parties.",
    category: "Guía",
    img: "/img/guirnaldas/guirnaldas-exterior-jardin-boda.avif",
  },
  // ──── ZONAS GEOGRÁFICAS ────
  {
    slug: "iluminacion-bodas-coyoacan",
    title: "Iluminación para Bodas en Coyoacán CDMX",
    excerpt: "Guía de iluminación para bodas en Coyoacán: jardines privados, casas coloniales y los mejores espacios.",
    category: "Zonas",
    img: "/img/guirnaldas/renta-guirnaldas-boda-patio-colonial-guirnaldas-21.avif",
  },
  {
    slug: "iluminacion-eventos-polanco",
    title: "Iluminación para Eventos en Polanco CDMX",
    excerpt: "Iluminación profesional para eventos de alta gama en Polanco: hoteles 5 estrellas, rooftops y salones.",
    category: "Zonas",
    img: "/img/cabezas-moviles/renta-cabezas-moviles-boda-beams-blancos-elegante.avif",
  },
  {
    slug: "iluminacion-bodas-tlalpan",
    title: "Renta de Iluminación para Bodas en Tlalpan",
    excerpt: "Iluminación perfecta para bodas en haciendas y jardines de Tlalpan, zona boscosa del Ajusco.",
    category: "Zonas",
    img: "/img/guirnaldas/guirnaldas-edison-hacienda-boda.avif",
  },
  {
    slug: "iluminacion-xv-anos-iztapalapa",
    title: "Iluminación para XV Años en Iztapalapa",
    excerpt: "Equipos de iluminación y efectos especiales para XV años en salones y jardines de Iztapalapa.",
    category: "Zonas",
    img: "/img/xv-anos/iluminacion-xv-anos-vals-seguidor.avif",
  },
  {
    slug: "iluminacion-eventos-naucalpan",
    title: "Iluminación para Eventos en Naucalpan",
    excerpt: "Servicios de iluminación y sonido para eventos en Naucalpan y zona poniente del Estado de México.",
    category: "Zonas",
    img: "/img/galeria/cascadas-led-01.avif",
  },
  {
    slug: "iluminacion-bodas-cdmx-sur",
    title: "Iluminación para Bodas en el Sur de CDMX",
    excerpt: "Guirnaldas, luces LED y efectos especiales para bodas en la zona sur.",
    category: "Zonas",
    img: "/img/guirnaldas/guirnaldas-exterior-jardin-boda.avif",
  },
  {
    slug: "iluminacion-eventos-ecatepec",
    title: "Renta de Iluminación para Eventos en Ecatepec",
    excerpt: "Cobertura completa de iluminación profesional para eventos en Ecatepec y zona norte del Edomex.",
    category: "Zonas",
    img: "/img/cabezas-moviles/renta-cabezas-moviles-boda-beams-blancos-elegante.avif",
  },
  {
    slug: "iluminacion-bodas-satelite",
    title: "Iluminación para Bodas en Ciudad Satélite y Naucalpan",
    excerpt: "Iluminación elegante para bodas en Ciudad Satélite: salones modernos, terrazas y jardines.",
    category: "Zonas",
    img: "/img/bodas/boda-hacienda-iluminacion-profesional-completa.avif",
  },
  {
    slug: "iluminacion-eventos-alvaro-obregon",
    title: "Iluminación para Eventos en Álvaro Obregón",
    excerpt: "Iluminación corporativa y social para eventos en Santa Fe, Lomas de Chapultepec y Pedregal.",
    category: "Zonas",
    img: "/img/city-color/iluminacion-arquitectonica-edificio-oficinas.avif",
  },
  {
    slug: "iluminacion-eventos-benito-juarez",
    title: "Iluminación para Eventos en Benito Juárez",
    excerpt: "Servicios de iluminación para foros, terrazas y salones en la alcaldía Benito Juárez.",
    category: "Zonas",
    img: "/img/galeria/cabezas-moviles-01.avif",
  },
  {
    slug: "iluminacion-haciendas-edomex",
    title: "Iluminación para Bodas en Haciendas del Estado de México",
    excerpt: "Guirnaldas, city color y efectos especiales para haciendas coloniales.",
    category: "Zonas",
    img: "/img/guirnaldas/renta-guirnaldas-boda-hacienda-mexicana-guirnaldas-18.avif",
  },
  {
    slug: "renta-iluminacion-zona-metropolitana",
    title: "Cobertura REDEIL: Iluminación en Toda la Zona Metropolitana",
    excerpt: "Mapa completo de cobertura REDEIL: CDMX, Edomex, zona norte, sur, poniente y oriente.",
    category: "Zonas",
    img: "/img/galeria/cabezas-moviles-02.avif",
  },
  // ──── EXTRAS ────
  {
    slug: "iluminacion-eventos-azcapotzalco",
    title: "Iluminación para Eventos en Azcapotzalco",
    excerpt: "Servicios de iluminación profesional para eventos sociales y corporativos en Azcapotzalco.",
    category: "Zonas",
    img: "/img/galeria/cascadas-led-01.avif",
  },
  {
    slug: "iluminacion-eventos-centro-historico-cdmx",
    title: "Iluminación para Eventos en el Centro Histórico CDMX",
    excerpt: "Iluminación para eventos en palacios, museos y terrazas del Centro Histórico.",
    category: "Zonas",
    img: "/img/city-color/iluminacion-arquitectonica-edificio-oficinas.avif",
  },
  {
    slug: "iluminacion-eventos-gustavo-a-madero",
    title: "Iluminación para Eventos en Gustavo A. Madero",
    excerpt: "Servicios completos de iluminación para la zona norte de la Ciudad de México.",
    category: "Zonas",
    img: "/img/galeria/cabezas-moviles-01.avif",
  },
  {
    slug: "iluminacion-eventos-huixquilucan",
    title: "Iluminación para Eventos en Huixquilucan",
    excerpt: "Iluminación premium para eventos en Interlomas, La Herradura y zonas residenciales.",
    category: "Zonas",
    img: "/img/bodas/boda-hacienda-iluminacion-profesional-completa.avif",
  },
  {
    slug: "iluminacion-eventos-iztapalapa",
    title: "Iluminación para Eventos en Iztapalapa",
    excerpt: "Cobertura de iluminación profesional en la alcaldía más grande de CDMX.",
    category: "Zonas",
    img: "/img/galeria/cascadas-led-01.avif",
  },
  {
    slug: "iluminacion-eventos-texcoco",
    title: "Iluminación para Eventos en Texcoco",
    excerpt: "Iluminación para haciendas, salones y jardines en Texcoco y alrededores.",
    category: "Zonas",
    img: "/img/guirnaldas/guirnaldas-edison-hacienda-boda.avif",
  },
  {
    slug: "iluminacion-eventos-tlalpan",
    title: "Iluminación para Eventos en Tlalpan",
    excerpt: "Iluminación profesional para eventos en la zona boscosa del Ajusco y Tlalpan.",
    category: "Zonas",
    img: "/img/guirnaldas/guirnaldas-exterior-jardin-boda.avif",
  },
  {
    slug: "iluminacion-eventos-toluca-metepec",
    title: "Iluminación para Eventos en Toluca y Metepec",
    excerpt: "Servicios de iluminación y efectos especiales para eventos en el Valle de Toluca.",
    category: "Zonas",
    img: "/img/galeria/cabezas-moviles-02.avif",
  },
  {
    slug: "iluminacion-eventos-venustiano-carranza",
    title: "Iluminación para Eventos en Venustiano Carranza",
    excerpt: "Iluminación para salones, foros y espacios de eventos en la zona centro-oriente.",
    category: "Zonas",
    img: "/img/galeria/confeti-03.avif",
  },
  {
    slug: "iluminacion-eventos-xochimilco",
    title: "Iluminación para Eventos en Xochimilco",
    excerpt: "Guirnaldas y luces para bodas en jardines y trajineras de Xochimilco.",
    category: "Zonas",
    img: "/img/guirnaldas/guirnaldas-exterior-jardin-boda.avif",
  },
  // ──── NUEVOS (Marzo 2026) ────
  {
    slug: "cuanto-cuesta-humo-bajo-boda-cdmx",
    title: "¿Cuánto Cuesta el Humo Bajo para Boda en CDMX? Precios Reales",
    excerpt: "Precios reales del humo bajo para bodas: desde $3,500 hasta $9,000. Qué incluye, cuánto dura y qué preguntar antes de contratar.",
    category: "Bodas",
    img: "/img/humo-bajo/efecto-nubes-piso-boda-jardin-400w.avif",
  },
  {
    slug: "cuanto-cuesta-renta-pantalla-inflable-cdmx",
    title: "¿Cuánto Cuesta Rentar una Pantalla Inflable en CDMX? Guía de Precios",
    excerpt: "Precios reales de renta de pantalla inflable en CDMX: desde $4,500. Tamaños, qué incluye y cuántos lúmenes necesita el proyector.",
    category: "Guía",
    img: "/img/pantalla-inflable/alquiler-pantalla-inflable-aniversario-boda.avif",
  },
  {
    slug: "cuanto-cuesta-confeti-para-boda",
    title: "¿Cuánto Cuesta el Confeti para Boda? Cañones y Precios Reales",
    excerpt: "Cañones de confeti desde $1,800, máquinas desde $3,500. Tipos, cuándo usar cada uno y qué permiten los venues de CDMX.",
    category: "Efectos",
    img: "/img/confeti/confeti-dorado-boda-novios-fiesta.avif",
  },
  {
    slug: "humo-bajo-vs-maquina-humo-cual-es-para-ti",
    title: "Humo Bajo vs Máquina de Humo: ¿Cuál es Para Tu Evento?",
    excerpt: "Diferencias reales entre humo bajo y máquina convencional: cuándo usar cada uno, precios y cuál da mejores fotos en tu boda.",
    category: "Comparativas",
    img: "/img/humo-bajo/efecto-nubes-piso-boda-jardin-400w.avif",
  },
  {
    slug: "iluminacion-salon-vs-jardin-diferencias",
    title: "Iluminación para Salón vs Jardín: Diferencias que Debes Saber",
    excerpt: "Iluminar un salón cerrado es muy distinto a iluminar un jardín. Equipo, instalación, costos y qué funciona mejor en cada espacio.",
    category: "Guía",
    img: "/img/guirnaldas/guirnaldas-edison-hacienda-boda.avif",
  },
  {
    slug: "error-mas-caro-iluminacion-bodas",
    title: "El Error Más Caro en Iluminación para Bodas (y Cómo Evitarlo)",
    excerpt: "El error que arruina bodas no es el equipo ni el precio. Es la falta de coordinación. Te explicamos qué pasa y cómo evitarlo.",
    category: "Bodas",
    img: "/img/bodas/boda-hacienda-iluminacion-profesional-completa-800w.avif",
  },
  {
    slug: "lo-que-tu-fotografo-quiere-que-sepas-sobre-iluminacion",
    title: "Lo Que Tu Fotógrafo Quiere Que Sepas Sobre la Iluminación",
    excerpt: "Tu fotógrafo de boda tiene opiniones fuertes sobre la iluminación y probablemente no te las dijo. Aquí están, con consejos de REDEIL.",
    category: "Guía",
    img: "/img/bodas/boda-elegante-guirnaldas-iluminacion-dj.avif",
  },
  {
    slug: "que-pasa-cuando-llueve-evento-aire-libre",
    title: "¿Qué Pasa con la Iluminación Si Llueve en Tu Evento al Aire Libre?",
    excerpt: "¿Lluvia en tu boda o evento en jardín? Qué equipo resiste el agua, qué no, y cómo preparar un plan B que realmente funcione.",
    category: "Guía",
    img: "/img/guirnaldas/guirnaldas-exterior-jardin-boda.avif",
  },
  {
    slug: "temporada-alta-bodas-cdmx-cuando-reservar",
    title: "Temporada Alta de Bodas en CDMX: Cuándo Reservar y Cuándo Ahorrar",
    excerpt: "Las fechas más caras y más accesibles para bodas en CDMX. Cuándo reservar iluminación para garantizar disponibilidad y precio justo.",
    category: "Bodas",
    img: "/img/bodas/boda-hacienda-guirnaldas-city-color.avif",
  },
  {
    slug: "por-que-el-vals-necesita-su-propia-iluminacion",
    title: "Por Qué el Vals Necesita Su Propia Iluminación (y Qué Equipo Usamos)",
    excerpt: "El vals no puede iluminarse igual que el resto de la boda. Te explicamos el equipo, el seguidor HMI y cómo programamos cada segundo.",
    category: "Bodas",
    img: "/img/seguidor/renta-luz-seguidor-boda-primer-baile-hmi-1200w-300w.avif",
  },

  // ──── DIRECTORIO (Abril 2026) ────
  { slug: "audio-profesional-nezahualcoyotl-guia-completa", title: "Audio Profesional en Nezahualcóyotl: Guía Completa para Eventos", excerpt: "Dónde encontrar equipo de audio profesional en Neza, qué tiendas confiar y cómo equipar tu evento sin ir al centro.", category: "Audio", img: "/img/directorio/directorio-tienda-audio-01.avif" },
  { slug: "servicio-tecnico-audio-nezahualcoyotl", title: "Servicio Técnico de Audio en Nezahualcóyotl: Cuándo Reparar y Cuándo Cambiar", excerpt: "Guía para saber si conviene reparar tu equipo de audio o invertir en uno nuevo. Talleres en Neza y alrededores.", category: "Audio", img: "/img/directorio/directorio-sistema-sonido-01.avif" },
  { slug: "audio-profesional-centro-historico-cdmx-proveedores", title: "Proveedores de Audio en el Centro Histórico CDMX: Guía Completa", excerpt: "Las mejores tiendas de audio profesional en la calle Salvador El Seco y alrededores del Centro Histórico.", category: "Audio", img: "/img/directorio/directorio-tienda-audio-01.avif" },
  { slug: "cables-conectores-audio-profesional-cdmx", title: "Cables de Audio Profesional para Eventos en CDMX: El Detalle que Arruina Todo", excerpt: "XLR, TRS, Speakon, DMX: qué cable usar en cada situación y por qué los cables baratos destruyen eventos.", category: "Audio", img: "/img/directorio/directorio-tienda-audio-01.avif" },
  { slug: "sistemas-audiovisuales-corporativos-polanco-cdmx", title: "Sistemas Audiovisuales Corporativos en Polanco CDMX: Guía de Inversión", excerpt: "Cuándo invertir en AV corporativo, qué sistemas elegir y proveedores de confianza en Polanco.", category: "Corporativo", img: "/img/directorio/directorio-audio-video-01.avif" },
  { slug: "videoconferencia-telepresencia-empresas-cdmx", title: "Videoconferencia vs Telepresencia: Qué Necesita Tu Empresa en CDMX", excerpt: "Diferencias técnicas y de costo entre videoconferencia y telepresencia. Cuál elegir según tu empresa.", category: "Corporativo", img: "/img/directorio/directorio-audio-video-01.avif" },
  { slug: "equipo-audio-eventos-gustavo-a-madero-cdmx", title: "Equipo de Audio para Eventos en Gustavo A. Madero CDMX", excerpt: "Bocinas, micrófonos y sistemas PA para eventos en la zona norte de CDMX. Precios y recomendaciones.", category: "Audio", img: "/img/bocinas/bocinas-profesionales-evento-masivo.avif" },
  { slug: "como-elegir-microfono-inalambrico-eventos-cdmx", title: "Cómo Elegir Micrófono Inalámbrico para Eventos en CDMX", excerpt: "Guía técnica de micrófonos inalámbricos: UHF vs VHF, frecuencias, marcas y precios para eventos profesionales.", category: "Equipos", img: "/img/directorio/directorio-tienda-audio-01.avif" },
  { slug: "audio-para-eventos-iztapalapa-cdmx-guia", title: "Audio para Eventos en Iztapalapa CDMX: Guía Completa de Equipo", excerpt: "Qué equipo de audio necesitas para eventos en Iztapalapa: bocinas, PA y donde encontrar proveedores.", category: "Audio", img: "/img/bocinas/renta-bocinas-line-array-concierto.avif" },
  { slug: "instalacion-sonido-fijo-negocios-cdmx", title: "Instalación de Sonido Fijo para Negocios en CDMX: Restaurantes y Salones", excerpt: "Guía completa de instalación de audio permanente para negocios: costos, equipos y mejores prácticas.", category: "Audio", img: "/img/directorio/directorio-sistema-sonido-01.avif" },
  { slug: "iluminacion-led-eventos-iztapalapa-cdmx", title: "Iluminación LED para Eventos en Iztapalapa CDMX: Guía Completa", excerpt: "Qué iluminación LED usar en eventos de Iztapalapa: par LED, cabezas móviles, precios y proveedores locales.", category: "Iluminación", img: "/img/directorio/directorio-almacen-luces-01.avif" },
  { slug: "reflectores-exteriores-eventos-cdmx", title: "Reflectores de Exterior para Eventos en CDMX: Guía de Selección", excerpt: "Cómo elegir reflectores para eventos en exteriores: protección IP, potencia, tipos y precios en CDMX.", category: "Equipos", img: "/img/directorio/directorio-tienda-iluminacion-01.avif" },
  { slug: "equipo-audio-iluminacion-fiestas-venustiano-carranza-cdmx", title: "Equipo de Audio e Iluminación para Fiestas en Venustiano Carranza CDMX", excerpt: "Guía completa de audio e iluminación para fiestas y eventos en la alcaldía Venustiano Carranza.", category: "Audio", img: "/img/directorio/directorio-sistema-sonido-01.avif" },
  { slug: "accesorios-dj-cdmx-donde-comprar", title: "Accesorios DJ en CDMX: Dónde Comprar y Qué Necesitas", excerpt: "Guía de accesorios DJ: controladores, audífonos, cables, stands. Mejores tiendas en CDMX.", category: "DJ", img: "/img/directorio/directorio-equipo-dj-01.avif" },
  { slug: "controladores-dj-pioneer-native-instruments-cdmx-guia", title: "Controladores DJ Pioneer vs Native Instruments: Guía de Compra CDMX", excerpt: "Comparativa técnica y práctica entre Pioneer DJ y Native Instruments para DJs profesionales en CDMX.", category: "DJ", img: "/img/directorio/directorio-equipo-dj-01.avif" },
  { slug: "como-armar-setup-dj-profesional-cdmx", title: "Cómo Armar tu Setup DJ Profesional en CDMX: Guía Paso a Paso", excerpt: "Todo lo que necesitas para armar un setup DJ profesional: controlador, bocinas, mesa y accesorios.", category: "DJ", img: "/img/directorio/directorio-equipo-dj-01.avif" },
  { slug: "bocinas-pa-profesional-calle-uruguay-cdmx", title: "Bocinas PA Profesionales en Calle Uruguay CDMX: Guía de Compra", excerpt: "Las mejores tiendas de bocinas PA en la calle Uruguay del Centro Histórico. Marcas, precios y recomendaciones.", category: "Audio", img: "/img/bocinas/bocinas-profesionales-evento-masivo.avif" },
  { slug: "microfonos-shure-sennheiser-eventos-cdmx-donde-comprar", title: "Micrófonos Shure y Sennheiser para Eventos CDMX: Dónde Comprar", excerpt: "Distribuidores autorizados de Shure y Sennheiser en CDMX. Modelos recomendados para eventos profesionales.", category: "Equipos", img: "/img/directorio/directorio-tienda-audio-01.avif" },
  { slug: "ingenieria-audio-auditorios-teatros-del-valle-cdmx", title: "Ingeniería de Audio para Auditorios y Teatros en Del Valle CDMX", excerpt: "Diseño e instalación de sistemas de audio para auditorios y teatros. Empresas especializadas en Del Valle.", category: "Corporativo", img: "/img/bocinas/renta-bocinas-line-array-concierto.avif" },
  { slug: "tratamiento-acustico-salones-eventos-cdmx", title: "Tratamiento Acústico para Salones de Eventos en CDMX: Guía Técnica", excerpt: "Cómo mejorar la acústica de salones de eventos: paneles, materiales y costos en CDMX.", category: "Corporativo", img: "/img/directorio/directorio-sistema-sonido-01.avif" },
  { slug: "iluminacion-profesional-eventos-corporativos-polanco-cdmx", title: "Iluminación Profesional para Eventos Corporativos en Polanco CDMX", excerpt: "Qué iluminación usar en eventos corporativos en Polanco: hoteles, centros de convenciones y salones premium.", category: "Corporativo", img: "/img/directorio/directorio-tienda-iluminacion-01.avif" },
  { slug: "iluminacion-arquitectonica-hoteles-centros-convenciones-cdmx", title: "Iluminación Arquitectónica para Hoteles y Centros de Convenciones CDMX", excerpt: "Soluciones de iluminación arquitectónica para hoteles y centros de convenciones en Ciudad de México.", category: "Iluminación", img: "/img/directorio/directorio-almacen-luces-01.avif" },
  { slug: "instrumentos-audio-profesional-centro-historico-cdmx", title: "Instrumentos y Audio Profesional en el Centro Histórico CDMX", excerpt: "Guía de tiendas de instrumentos y audio profesional en el Centro Histórico: qué comprar y dónde.", category: "Audio", img: "/img/directorio/directorio-tienda-audio-01.avif" },
  { slug: "reparacion-instrumentos-audio-cdmx-guia", title: "Reparación de Instrumentos y Equipo de Audio en CDMX: Guía Completa", excerpt: "Dónde reparar instrumentos y equipo de audio en CDMX. Talleres especializados y costos promedio.", category: "Audio", img: "/img/directorio/directorio-sistema-sonido-01.avif" },
  { slug: "audio-alta-fidelidad-corporativos-polanco-cdmx", title: "Audio de Alta Fidelidad para Corporativos en Polanco CDMX", excerpt: "Sistemas de audio premium para juntas directivas, salas de conferencias y eventos ejecutivos en Polanco.", category: "Corporativo", img: "/img/bocinas/bocinas-profesionales-evento-masivo.avif" },
  { slug: "sistemas-sonido-salas-juntas-empresas-cdmx", title: "Sistemas de Sonido para Salas de Juntas de Empresas en CDMX", excerpt: "Instalación y renta de sistemas de audio para salas de juntas: videoconferencia, presentaciones y reuniones.", category: "Corporativo", img: "/img/directorio/directorio-audio-video-01.avif" },
  { slug: "iluminacion-escenica-tecnica-centro-cdmx-guia", title: "Iluminación Escénica Técnica en el Centro CDMX: Guía para Profesionales", excerpt: "Guía técnica de iluminación escénica para shows, teatros y eventos en el Centro Histórico de CDMX.", category: "Iluminación", img: "/img/directorio/directorio-tienda-iluminacion-01.avif" },
  { slug: "cables-dmx-gelatinas-repuestos-iluminacion-cdmx", title: "Cables DMX, Gelatinas y Repuestos de Iluminación en CDMX", excerpt: "Dónde comprar accesorios de iluminación profesional: cables DMX, gelatinas Lee/Rosco y repuestos en CDMX.", category: "Equipos", img: "/img/directorio/directorio-almacen-luces-01.avif" },
  { slug: "canones-laser-rgb-eventos-fiestas-cdmx", title: "Cañones Láser RGB para Eventos y Fiestas en CDMX", excerpt: "Guía completa de láseres RGB: tipos, potencia, efectos y cómo usarlos en eventos y fiestas en CDMX.", category: "Efectos", img: "/img/directorio/directorio-efectos-especiales-01.avif" },
  { slug: "seguridad-uso-laseres-eventos-normas-cdmx", title: "Seguridad en el Uso de Láseres para Eventos: Normas CDMX", excerpt: "Reglamentos, clases de láseres y medidas de seguridad para uso de láseres en eventos en Ciudad de México.", category: "Guía", img: "/img/directorio/directorio-efectos-especiales-01.avif" },
  { slug: "strips-led-rgb-decoracion-eventos-cdmx", title: "Strips LED RGB para Decoración de Eventos en CDMX", excerpt: "Cómo usar strips LED RGB en bodas y eventos: instalación, colores, control DMX y combinaciones ganadoras.", category: "Iluminación", img: "/img/directorio/directorio-almacen-luces-01.avif" },
  { slug: "iluminacion-ambiental-inteligente-bodas-xv-anos-cdmx", title: "Iluminación Ambiental Inteligente para Bodas y XV Años en CDMX", excerpt: "Cómo programar iluminación dinámica para transformar el ambiente de tu boda o XV años en CDMX.", category: "Bodas", img: "/img/cabezas-moviles/renta-cabezas-moviles-boda-beams-blancos-elegante.avif" },
  { slug: "guirnaldas-decorativas-bodas-xv-anos-iztapalapa-cdmx", title: "Guirnaldas Decorativas para Bodas y XV Años en Iztapalapa CDMX", excerpt: "Guirnaldas Edison y LED para bodas y XV años en salones y jardines de Iztapalapa. Precios y proveedores.", category: "Guirnaldas", img: "/img/guirnaldas/guirnaldas-led-fiestas-cdmx.avif" },
  { slug: "kits-iluminacion-fiestas-bodas-cdmx-guia", title: "Kits de Iluminación para Fiestas y Bodas en CDMX: Guía de Elección", excerpt: "Cómo elegir el kit de iluminación correcto para tu evento: equipos incluidos, precios y qué preguntar.", category: "Paquetes", img: "/img/directorio/directorio-tienda-iluminacion-01.avif" },
  { slug: "luminarias-reflectores-eventos-tepito-centro-cdmx", title: "Luminarias y Reflectores para Eventos en Tepito y Centro CDMX", excerpt: "Dónde comprar luminarias y reflectores profesionales en la zona de Tepito y Centro Histórico de CDMX.", category: "Equipos", img: "/img/directorio/directorio-almacen-luces-01.avif" },
  { slug: "iluminacion-comercial-negocios-cdmx-guia", title: "Iluminación Comercial para Negocios en CDMX: Guía Completa", excerpt: "Iluminación profesional para tiendas, restaurantes y negocios en CDMX: tipos, costos y proveedores.", category: "Corporativo", img: "/img/directorio/directorio-fachada-tienda-01.avif" },
  { slug: "tienda-musica-audio-mas-resenas-cdmx-guia-servicios", title: "Tiendas de Música y Audio con Más Reseñas en CDMX: Guía y Servicios", excerpt: "Las tiendas de audio y música mejor calificadas en CDMX según reseñas reales de clientes.", category: "Guía", img: "/img/directorio/directorio-fachada-tienda-01.avif" },
  { slug: "pa-microfonos-eventos-eje-central-cdmx", title: "PA y Micrófonos para Eventos en Eje Central CDMX", excerpt: "Proveedores de sistemas PA y micrófonos profesionales en la zona del Eje Central de Ciudad de México.", category: "Audio", img: "/img/bocinas/bocinas-profesionales-evento-masivo.avif" },
  { slug: "audio-instrumentos-eventos-ecatepec-estado-mexico", title: "Audio e Instrumentos para Eventos en Ecatepec, Estado de México", excerpt: "Equipo de audio, instrumentos y proveedores de confianza para eventos en Ecatepec y zona norte del Edomex.", category: "Audio", img: "/img/directorio/directorio-tienda-audio-01.avif" },
  { slug: "bocinas-amplificadores-eventos-norte-estado-mexico", title: "Bocinas y Amplificadores para Eventos en el Norte del Estado de México", excerpt: "Guía de bocinas y amplificadores para eventos en Ecatepec, Tlalnepantla y zona norte del Estado de México.", category: "Audio", img: "/img/bocinas/renta-bocinas-line-array-concierto.avif" },
  { slug: "strips-led-alta-densidad-del-valle-benito-juarez-cdmx", title: "Strips LED de Alta Densidad en Del Valle y Benito Juárez CDMX", excerpt: "Strips LED profesionales para diseño de interiores y eventos en las colonias Del Valle y Benito Juárez.", category: "Iluminación", img: "/img/directorio/directorio-almacen-luces-01.avif" },
  { slug: "iluminacion-diseno-interiores-restaurantes-cdmx", title: "Iluminación para Diseño de Interiores y Restaurantes en CDMX", excerpt: "Cómo iluminar restaurantes y espacios comerciales en CDMX para crear la atmósfera correcta.", category: "Iluminación", img: "/img/directorio/directorio-fachada-tienda-01.avif" },
  { slug: "sistemas-linea-array-eventos-gran-escala-cdmx", title: "Sistemas de Línea Array para Eventos de Gran Escala en CDMX", excerpt: "Cuándo y por qué usar line array: técnica, potencia, proveedores y costos para eventos masivos en CDMX.", category: "Audio", img: "/img/bocinas/renta-bocinas-line-array-concierto.avif" },
  { slug: "distribuidores-audio-profesional-centro-cdmx-guia", title: "Distribuidores de Audio Profesional en el Centro CDMX: Guía Completa", excerpt: "Los mejores distribuidores de equipo de audio profesional en el Centro Histórico de CDMX.", category: "Audio", img: "/img/directorio/directorio-tienda-audio-01.avif" },
  { slug: "cabezas-moviles-chauvet-robe-adj-cdmx-guia-compra", title: "Cabezas Móviles Chauvet, Robe y ADJ en CDMX: Guía de Compra", excerpt: "Comparativa técnica de cabezas móviles: Chauvet vs Robe vs ADJ. Precios, características y dónde comprar en CDMX.", category: "Equipos", img: "/img/cabezas-moviles/renta-cabezas-moviles-boda-beams-blancos-elegante.avif" },
  { slug: "iluminacion-arquitectonica-permanente-hoteles-clubs-cdmx", title: "Iluminación Arquitectónica Permanente para Hoteles y Clubs en CDMX", excerpt: "Instalaciones permanentes de iluminación arquitectónica para hoteles, clubs y espacios de lujo en CDMX.", category: "Iluminación", img: "/img/directorio/directorio-almacen-luces-01.avif" },
  { slug: "iluminacion-shows-discotecas-bares-cdmx-efectos", title: "Iluminación para Shows, Discotecas y Bares en CDMX: Efectos Profesionales", excerpt: "Equipos de iluminación para shows nocturnos: moving heads, láseres, strobe y efectos para bares en CDMX.", category: "Efectos", img: "/img/directorio/directorio-efectos-especiales-01.avif" },
  { slug: "maquinas-efectos-humo-burbujas-eventos-cdmx", title: "Máquinas de Efectos: Humo, Burbujas y Niebla para Eventos en CDMX", excerpt: "Guía completa de máquinas de efectos especiales: cuándo usar humo, niebla o burbujas en eventos CDMX.", category: "Efectos", img: "/img/directorio/directorio-efectos-especiales-01.avif" },
  { slug: "instrumentos-pa-jardin-balbuena-venustiano-carranza-cdmx", title: "Instrumentos y PA en Jardín Balbuena, Venustiano Carranza CDMX", excerpt: "Proveedores de instrumentos y sistemas PA en la zona de Jardín Balbuena y Venustiano Carranza, CDMX.", category: "Audio", img: "/img/bocinas/bocinas-profesionales-evento-masivo.avif" },
  { slug: "sistema-sonido-bodas-eventos-venustiano-carranza-cdmx", title: "Sistema de Sonido para Bodas y Eventos en Venustiano Carranza CDMX", excerpt: "Renta de equipo de sonido profesional para bodas y eventos en la alcaldía Venustiano Carranza.", category: "Sonido", img: "/img/bocinas/renta-bocinas-line-array-concierto.avif" },
];

// ── Category order for display ──
export const categoryOrder = [
  "Audio",
  "DJ",
  "Iluminación",
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
  "Zonas",
];

// ── Build categories with counts ──
export function buildCategories() {
  const catMap = new Map<string, number>();
  blogArticles.forEach((a) => {
    catMap.set(a.category, (catMap.get(a.category) || 0) + 1);
  });

  return categoryOrder
    .filter((c) => catMap.has(c))
    .map((c) => ({
      name: c,
      count: catMap.get(c)!,
      slug: c
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/\s+/g, "-"),
    }));
}

// ── Popular articles (hand-picked for best SEO value) ──
export const popularSlugs = [
  "cuanto-cuesta-iluminacion-boda-cdmx",
  "cuantos-metros-guirnaldas-necesito",
  "tipos-iluminacion-para-eventos",
  "bengalas-frias-seguras-interiores",
  "cuanto-cuesta-dj-para-boda-cdmx",
];

export function getPopularArticles() {
  return popularSlugs
    .map((slug) => blogArticles.find((a) => a.slug === slug))
    .filter(Boolean)
    .map((a) => ({ title: a!.title, slug: a!.slug, category: a!.category, img: a!.img }));
}

// ── Pagination ──
export const ARTICLES_PER_PAGE = 12;

export function getTotalPages(): number {
  return Math.ceil(blogArticles.length / ARTICLES_PER_PAGE);
}

export function getPageArticles(page: number): BlogArticle[] {
  const start = (page - 1) * ARTICLES_PER_PAGE;
  return blogArticles.slice(start, start + ARTICLES_PER_PAGE);
}
