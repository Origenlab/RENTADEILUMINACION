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
];

// ── Category order for display ──
export const categoryOrder = [
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
