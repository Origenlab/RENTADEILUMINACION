import { c as createComponent, b as renderComponent, r as renderTemplate, m as maybeRenderHead, F as Fragment } from '../chunks/astro/server_D8pMnQBn.mjs';
import 'piccolore';
import { $ as $$BaseLayout, a as $$Breadcrumbs } from '../chunks/Breadcrumbs_BkFbHGbf.mjs';
import { $ as $$Hero } from '../chunks/Hero_3Is3fruG.mjs';
import { $ as $$SectionHeader } from '../chunks/SectionHeader_mLKzHzNX.mjs';
import { $ as $$ServiceCard } from '../chunks/ServiceCard_Bli7ALj4.mjs';
import { $ as $$ZoneCards } from '../chunks/ZoneCards_IzgUKlUT.mjs';
import { $ as $$FaqSection } from '../chunks/FaqSection_CzcP3CIi.mjs';
import { $ as $$TestimonialCards } from '../chunks/TestimonialCards_-EeuFf1C.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const title = "Renta de Iluminaci\xF3n y Sonido para Eventos CDMX | REDEIL";
  const description = "Iluminaci\xF3n profesional, audio JBL y DJ para bodas, XV a\xF1os y eventos en CDMX. Instalaci\xF3n incluida. Cotiza gratis por WhatsApp. +500 eventos realizados.";
  const canonical = "https://rentadeiluminacion.com/";
  const schemaMarkup = JSON.stringify([
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "REDEIL - Renta de Iluminaci\xF3n Profesional",
      "alternateName": "REDEIL",
      "telephone": "+52-55-3068-2988",
      "email": "hola@rentadeiluminacion.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "R\xEDo Amazonas 74B, Col. Renacimiento",
        "addressLocality": "Ciudad de M\xE9xico",
        "addressRegion": "CDMX",
        "postalCode": "06500",
        "addressCountry": "MX"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 19.4326,
        "longitude": -99.1332
      },
      "priceRange": "$$",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "127"
      },
      "url": "https://rentadeiluminacion.com/",
      "image": "https://rentadeiluminacion.com/img/og/og-image-redeil.avif"
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "REDEIL - Renta de Iluminaci\xF3n",
      "url": "https://rentadeiluminacion.com/"
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "\xBFQu\xE9 incluye el servicio de renta de iluminaci\xF3n?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Todo: transporte del equipo a tu venue, instalaci\xF3n profesional, operaci\xF3n t\xE9cnica durante el evento y desmontaje al finalizar. No tienes que contratar nada extra."
          }
        },
        {
          "@type": "Question",
          "name": "\xBFCu\xE1nto cuesta rentar iluminaci\xF3n para una boda?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Depende del equipo y la cantidad. Un paquete b\xE1sico de guirnaldas para jard\xEDn arranca desde $3,500. Producciones completas con audio, luces y efectos van desde $15,000. Cotiza por WhatsApp y te armamos algo a tu presupuesto."
          }
        },
        {
          "@type": "Question",
          "name": "\xBFCon cu\xE1nta anticipaci\xF3n debo reservar?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Idealmente 2-4 semanas antes. En temporada alta (noviembre-enero y mayo-junio) las fechas se llenan r\xE1pido, as\xED que entre antes reserves, mejor."
          }
        },
        {
          "@type": "Question",
          "name": "\xBFTrabajan con DJ propio o puedo traer el m\xEDo?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Las dos opciones. Tenemos DJ profesional con consola y repertorio listo, pero si ya tienes tu DJ de confianza, le conectamos todo el audio sin problema."
          }
        },
        {
          "@type": "Question",
          "name": "\xBFQu\xE9 pasa si mi venue no tiene corriente el\xE9ctrica?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Contamos con plantas de luz para eventos al aire libre, haciendas, jardines y cualquier espacio sin instalaci\xF3n el\xE9ctrica. El equipo t\xE9cnico se encarga de todo."
          }
        },
        {
          "@type": "Question",
          "name": "\xBFCubren eventos en el Estado de M\xE9xico?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "S\xED, operamos en toda la zona metropolitana: Naucalpan, Huixquilucan, Tlalnepantla, Metepec, Toluca y m\xE1s. El transporte est\xE1 incluido en el servicio."
          }
        }
      ]
    }
  ]);
  const iluminacion = [
    {
      title: "Guirnaldas Edison",
      image: "/img/guirnaldas/renta-guirnaldas-edison-terraza-recepcion-02-300w.avif",
      alt: "Guirnaldas con focos Edison iluminando terraza para recepci\xF3n de boda",
      description: "Focos tipo Edison con luz c\xE1lida vintage que transforman cualquier jard\xEDn, terraza o hacienda. Las m\xE1s pedidas para bodas al aire libre. Instalaci\xF3n profesional con cableado IP65.",
      link: "/servicios/guirnaldas/"
    },
    {
      title: "Luces Ne\xF3n y UV",
      image: "/img/luces-neon/renta-luces-neon-glow-party-celebracion-neon-300w.avif",
      alt: "Fiesta glow party con luces ne\xF3n UV y colores vibrantes",
      description: "Efectos fluorescentes, luz UV y glow que convierten cualquier espacio en una fiesta de colores. Perfectas para XV a\xF1os, fiestas tem\xE1ticas y pistas de baile.",
      link: "/servicios/luces-neon/"
    },
    {
      title: "Luz Negra",
      image: "/img/luz-negra/luz-negra-fiesta-neon-300w.avif",
      alt: "Fiesta con luz negra UV y efectos fluorescentes",
      description: "Iluminaci\xF3n UV que hace brillar todo lo blanco y fluorescente. Ideal para fiestas ne\xF3n, XV a\xF1os tem\xE1ticos y pistas de baile con un ambiente completamente diferente.",
      link: "/servicios/luz-negra/"
    },
    {
      title: "Sky Tracker",
      image: "/img/sky-tracker/renta-skytracker-cielo-nocturno-potente-300w.avif",
      alt: "Sky tracker proyectando haces de luz al cielo nocturno",
      description: "Haces de luz xen\xF3n de 7,000W visibles a 5-7 km. El efecto que hace que tu evento se vea desde toda la colonia. Ideales para inauguraciones, XV a\xF1os y lanzamientos.",
      link: "/servicios/sky-tracker/"
    },
    {
      title: "Cabezas M\xF3viles",
      image: "/img/cabezas-moviles/renta-cabezas-moviles-boda-beams-blancos-elegante-300w.avif",
      alt: "Cabezas m\xF3viles LED con beams blancos en boda elegante",
      description: "Luces rob\xF3ticas con movimiento programable v\xEDa DMX. Beams, spots y wash para shows de luces en el vals, la entrada de los novios o la pista de baile.",
      link: "/servicios/cabezas-moviles/"
    },
    {
      title: "Cascadas LED",
      image: "/img/cascadas-led/cascadas-led-arco-ceremonia-luces-moradas-400w.avif",
      alt: "Cascadas de luces LED en arco de ceremonia con tonos morados",
      description: "Cortinas de luces LED que caen como cascada creando un fondo espectacular. El complemento perfecto para la mesa de novios, el arco de ceremonia o el pastel.",
      link: "/servicios/cascadas-led/"
    },
    {
      title: "City Color",
      image: "/img/city-color/renta-luces-hacienda-boda-fuente-300w.avif",
      alt: "Iluminaci\xF3n City Color en hacienda para boda con fuente iluminada",
      description: "Ca\xF1ones de luz LED de alto impacto para ba\xF1ar de color fachadas, escenarios y espacios grandes. Transforma por completo la atm\xF3sfera de cualquier venue con un solo equipo.",
      link: "/servicios/city-color/"
    },
    {
      title: "City Light",
      image: "/img/city-light/iluminacion-profesional-bodas-cdmx-400w.avif",
      alt: "Luminarias City Light iluminando sal\xF3n de eventos profesionalmente",
      description: "Luminarias profesionales de luz potente y uniforme para iluminar espacios amplios. Perfectas para salones de eventos, carpas y venues que necesitan iluminaci\xF3n base de calidad.",
      link: "/servicios/city-light/"
    },
    {
      title: "Iluminaci\xF3n Arquitect\xF3nica",
      image: "/img/iluminacion-arquitectonica/boda-patio-hacienda-iluminacion-fachada-ambar-string-lights-baile-400w.avif",
      alt: "Uplighting arquitect\xF3nico en fachada de hacienda colonial tono \xE1mbar",
      description: "Uplighting profesional para transformar fachadas, columnas, \xE1rboles y jardines con color. Un solo equipo cambia la atm\xF3sfera completa de una hacienda o sal\xF3n.",
      link: "/servicios/iluminacion-arquitectonica/"
    },
    {
      title: "Gobos",
      image: "/img/gobos/renta-gobo-monograma-pista-baile-300w.avif",
      alt: "Proyecci\xF3n de gobo con monograma en pista de baile para boda",
      description: "Proyecci\xF3n de nombres, logos, monogramas o dise\xF1os personalizados en paredes y pisos. El detalle que nadie espera y todos recuerdan. Ideal para bodas y eventos corporativos.",
      link: "/servicios/gobos/"
    },
    {
      title: "Seguidor",
      image: "/img/seguidor/renta-luz-seguidor-boda-primer-baile-hmi-1200w-300w.avif",
      alt: "Luz de seguimiento profesional iluminando primer baile de novios",
      description: "Spotlight profesional que sigue al festejado en el vals, brindis o entrada triunfal. El toque de producci\xF3n que hace que los momentos importantes se vean espectaculares.",
      link: "/servicios/seguidor/"
    }
  ];
  const sonido = [
    {
      title: "Audio para Eventos",
      image: "/img/bocinas/renta-bocinas-line-array-concierto-400w.avif",
      alt: "Sistema de bocinas line array JBL profesional para evento",
      description: "Bocinas JBL y sistemas QSC dimensionados para tu espacio \u2014 desde reuniones de 50 personas hasta eventos de 2,000+. Sonido cristalino, potente, sin distorsi\xF3n.",
      link: "/servicios/bocinas/"
    },
    {
      title: "DJ para Fiestas y Bodas",
      image: "/img/bocinas-djs/dj-para-eventos-cdmx-cabina-profesional-300w.avif",
      alt: "DJ profesional en cabina con consola mezclando m\xFAsica en evento",
      description: "DJ con consola profesional, mezcla en vivo y repertorio adaptado. Desde el vals y la hora loca hasta el after. Solo o con paquete completo de audio e iluminaci\xF3n.",
      link: "/servicios/bocinas-djs/"
    },
    {
      title: "Bocinas para Bodas",
      image: "/img/bocinas-bodas/renta-bocinas-boda-primer-baile-novios-truss-300w.avif",
      alt: "Sistema de bocinas profesional montado para ceremonia y fiesta de boda",
      description: "Audio dimensionado para cada momento de tu boda \u2014 ceremonia, coctel, vals y fiesta. Sonido claro para los votos y potente para la pista de baile.",
      link: "/servicios/bocinas-bodas/"
    },
    {
      title: "Bocinas para XV A\xF1os",
      image: "/img/bocinas-xv/renta-bocinas-xv-anos-vals-padre-hija-dj-salon-300w.avif",
      alt: "Audio profesional para fiesta de XV a\xF1os con DJ en sal\xF3n",
      description: "El audio que tus XV merecen \u2014 vals con sonido cristalino, hora loca con potencia, y DJ que sabe exactamente cu\xE1ndo subir el ritmo.",
      link: "/servicios/bocinas-xv/"
    },
    {
      title: "Bocinas para Fiestas",
      image: "/img/bocinas-fiestas/renta-bocinas-fiestas-eventos-profesionales-300w.avif",
      alt: "Bocinas profesionales para fiesta privada con luces",
      description: "Cumplea\xF1os, graduaciones, posadas, reuniones. Audio profesional que se adapta al tama\xF1o de tu fiesta \u2014 desde una reuni\xF3n \xEDntima hasta un evento de 500 personas.",
      link: "/servicios/bocinas-fiestas/"
    },
    {
      title: "Bocinas para Conferencias",
      image: "/img/bocinas-conferencias/renta-de-bocinas-para-conferencias-salon-ejecutivo-300w.avif",
      alt: "Sistema de audio profesional en sal\xF3n ejecutivo para conferencia",
      description: "Audio cristalino para presentaciones, conferencias y capacitaciones. Micr\xF3fonos inal\xE1mbricos, bocinas de l\xEDnea y mezcladoras profesionales para que cada palabra se escuche.",
      link: "/servicios/bocinas-conferencias/"
    }
  ];
  const efectos = [
    {
      title: "Humo Bajo",
      image: "/img/humo-bajo/efecto-nubes-piso-boda-jardin-400w.avif",
      alt: "Efecto de humo bajo creando nube a nivel de piso durante vals de boda",
      description: "La nube m\xE1gica a nivel de piso que todo mundo quiere para el vals o la entrada de los novios. El efecto m\xE1s solicitado en bodas y XV a\xF1os.",
      link: "/servicios/humo-bajo/"
    },
    {
      title: "M\xE1quina de Humo",
      image: "/img/humo-bajo/efecto-humo-bajo-baile-novios.avif",
      alt: "Humo esc\xE9nico en pista de baile para efecto de show de luces",
      description: "Humo esc\xE9nico para crear atm\xF3sferas en pistas de baile y shows de luces. El complemento perfecto para cabezas m\xF3viles y efectos l\xE1ser.",
      link: "/servicios/maquina-humo/"
    },
    {
      title: "Confeti",
      image: "/img/confeti/confeti-dorado-boda-novios-fiesta.avif",
      alt: "Ca\xF1\xF3n de confeti dorado lanzando papelitos en celebraci\xF3n de boda",
      description: "Ca\xF1ones de confeti para el brindis, la mordida del pastel o la hora loca. Confeti dorado, plateado o multicolor \u2014 t\xFA eliges. Operaci\xF3n profesional incluida.",
      link: "/servicios/confeti/"
    },
    {
      title: "Burbujas",
      image: "/img/burbujas/burbujas-gigantes-fiesta-cumpleanos-ninos-400w.avif",
      alt: "M\xE1quina de burbujas gigantes en fiesta de cumplea\xF1os para ni\xF1os",
      description: "M\xE1quinas de burbujas para fiestas infantiles, jardines de eventos y recepciones al aire libre. Un efecto m\xE1gico que encanta a ni\xF1os y adultos por igual.",
      link: "/servicios/burbujas/"
    },
    {
      title: "Bola Disco",
      image: "/img/bola-disco/bola-disco-dj-pista-baile-evento.avif",
      alt: "Bola disco gigante con luces LED en pista de baile",
      description: "El cl\xE1sico que nunca pasa de moda. Bola disco gigante con luces LED que llenan la pista de destellos. Perfecta para bodas, XV a\xF1os y fiestas retro.",
      link: "/servicios/bola-disco/"
    },
    {
      title: "Pantalla Inflable",
      image: "/img/pantalla-inflable/alquiler-pantalla-inflable-aniversario-boda.avif",
      alt: "Pantalla inflable gigante para cine al aire libre en jard\xEDn",
      description: "Cine al aire libre con pantalla inflable gigante y proyector HD incluido. Ideal para jardines, roof gardens y terrazas. Perfecta despu\xE9s de la cena.",
      link: "/servicios/pantalla-inflable/"
    },
    {
      title: "Podium",
      image: "/img/podiums/conferencia-corporativa-podium-acrilico-auditorio-luces-azules-300w.avif",
      alt: "Podium acr\xEDlico profesional en auditorio corporativo con iluminaci\xF3n",
      description: "Tarimas y podiums para DJ, m\xFAsicos o presentaciones corporativas. Base firme, acabado profesional, con iluminaci\xF3n integrada opcional.",
      link: "/servicios/podiums/"
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "canonical": canonical, "schemaMarkup": schemaMarkup }, { "breadcrumbs": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "breadcrumbs" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Breadcrumbs", $$Breadcrumbs, { "items": [{ label: "Inicio" }] })} ` })}`, "default": ($$result2) => renderTemplate`   ${renderComponent($$result2, "Hero", $$Hero, { "title": "Renta de Iluminaci\xF3n y Sonido para Eventos en CDMX", "subtitle": "Tu boda, tus XV a\xF1os o tu evento corporativo merecen algo m\xE1s que unas luces bonitas. Merecen una producci\xF3n profesional.", "extraClass": "hero-home", "hideCtas": true, "introParagraph1": "REDEIL lleva m\xE1s de 10 a\xF1os montando iluminaci\xF3n y audio en bodas, XV a\xF1os y eventos corporativos en la Ciudad de M\xE9xico y Estado de M\xE9xico. M\xE1s de 500 eventos realizados con equipo <strong>Martin Professional</strong> y <strong>Chauvet</strong> en iluminaci\xF3n, <strong>JBL</strong> y <strong>QSC</strong> en audio. Las mismas marcas que usan las producciones de TV y conciertos \u2014 en tu evento.", "introParagraph2": "El servicio incluye transporte, instalaci\xF3n, operaci\xF3n t\xE9cnica durante el evento y desmontaje al finalizar \u2014 sin costo adicional. Cubrimos toda la zona metropolitana: Polanco, Santa Fe, Coyoac\xE1n, Naucalpan, Huixquilucan, Metepec y m\xE1s. Llevamos planta de luz a venues sin corriente el\xE9ctrica. Precios desde $3,500 para guirnaldas hasta producciones completas desde $15,000. Respuesta por WhatsApp en menos de 15 minutos." })}  ${maybeRenderHead()}<section class="services-section"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Los Servicios M\xE1s Pedidos", "subtitle": "Lo que la mayor\xEDa de nuestros clientes contratan para bodas y XV a\xF1os en CDMX.", "paragraph1": "Cuatro servicios que solos ya hacen la diferencia en cualquier evento. Guirnaldas Edison para la atm\xF3sfera del jard\xEDn, humo bajo para el vals, DJ completo para la pista y pantalla inflable si quieres cerrar la noche con algo diferente.", "paragraph2": "Los precios son punto de partida. Cada cotizaci\xF3n es personalizada seg\xFAn el venue, n\xFAmero de invitados y tipo de evento. Por WhatsApp te respondemos en menos de 15 minutos." })} <div class="services-grid"> ${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "title": "Guirnaldas Edison", "image": "/img/guirnaldas/renta-guirnaldas-edison-terraza-recepcion-02-300w.avif", "alt": "Guirnaldas Edison para bodas al aire libre", "description": "Lo m\xE1s pedido para bodas al aire libre. Focos vintage con luz c\xE1lida. Instalaci\xF3n profesional incluida. Desde $3,500 + IVA.", "link": "/servicios/guirnaldas/" })} ${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "title": "Humo Bajo para Vals", "image": "/img/humo-bajo/efecto-nubes-piso-boda-jardin-400w.avif", "alt": "Efecto humo bajo para vals de boda", "description": "La nube m\xE1gica a nivel de piso para el primer baile. El efecto m\xE1s solicitado en bodas y XV a\xF1os. Desde $4,500 + IVA.", "link": "/servicios/humo-bajo/" })} ${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "title": "DJ + Audio Completo", "image": "/img/bocinas-djs/dj-para-eventos-cdmx-cabina-profesional-300w.avif", "alt": "DJ profesional con consola para eventos CDMX", "description": "DJ profesional con consola, bocinas JBL y repertorio listo. Vals, hora loca y after incluidos. Desde $8,500 + IVA.", "link": "/servicios/bocinas-djs/" })} ${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "title": "Pantalla Inflable", "image": "/img/pantalla-inflable/alquiler-pantalla-inflable-aniversario-boda.avif", "alt": "Pantalla inflable gigante para cine al aire libre", "description": "Cine al aire libre con pantalla gigante y proyector HD incluido. Ideal para jardines y terrazas despu\xE9s de la cena. Desde $6,500 + IVA.", "link": "/servicios/pantalla-inflable/" })} </div> </div> </section>  <section class="services-section" id="iluminacion"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Iluminaci\xF3n Profesional", "subtitle": "Equipo Martin Professional, Chauvet y Elation \u2014 lo mismo que usan en conciertos.", "paragraph1": "La iluminaci\xF3n cambia c\xF3mo se percibe un espacio. Los invitados no siempre saben decir por qu\xE9 una boda se ve diferente \u2014 saben que algo est\xE1 bien, que el ambiente los envolvi\xF3 desde que llegaron. Eso no pasa solo. Pasa cuando el equipo es el correcto y est\xE1 bien instalado.", "paragraph2": "Guirnaldas Edison para bodas en jard\xEDn, sky trackers que se ven desde kil\xF3metros, cabezas m\xF3viles para shows sincronizados, gobos con el nombre de la festejada proyectado en el piso. Cada servicio incluye instalaci\xF3n y operaci\xF3n t\xE9cnica \u2014 no tienes que entender nada del equipo." })} <div class="services-grid"> ${iluminacion.map((s) => renderTemplate`${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "title": s.title, "image": s.image, "alt": s.alt, "description": s.description, "link": s.link })}`)} </div> </div> </section>  <section class="services-section services-alt" id="sonido"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Sonido y DJ", "subtitle": "Audio JBL y QSC \u2014 la diferencia entre que se oiga y que se sienta.", "paragraph1": "La diferencia entre bocinas que suenan y audio que se siente en el pecho no est\xE1 en el volumen \u2014 est\xE1 en el equipo y en c\xF3mo est\xE1 calibrado al espacio. Un sal\xF3n de 200 personas no necesita lo mismo que un jard\xEDn al aire libre o un auditorio de hotel.", "paragraph2": "Dimensionamos el sistema seg\xFAn el venue: bocinas JBL para espacios de hasta 200 personas, line array QSC para eventos m\xE1s grandes. DJ con consola Pioneer que lee al p\xFAblico y adapta el repertorio. Micr\xF3fonos Shure inal\xE1mbricos para votos, brindis y discursos. Todo instalado y operado por nuestro t\xE9cnico." })} <div class="services-grid"> ${sonido.map((s) => renderTemplate`${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "title": s.title, "image": s.image, "alt": s.alt, "description": s.description, "link": s.link })}`)} </div> </div> </section>  <section class="services-section" id="efectos"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Efectos Especiales", "subtitle": "El detalle que nadie espera y todos recuerdan.", "paragraph1": "El humo bajo sale 30 segundos antes de que los novios entren a la pista. El confeti se lanza en el momento del brindis, no un segundo antes ni despu\xE9s. Las burbujas empiezan cuando los ni\xF1os llegan a la recepci\xF3n. Cada efecto tiene su momento \u2014 y nuestro operador lo sabe.", "paragraph2": "Los efectos especiales no son extras para mostrar en video. Son lo que hace que los invitados saquen el tel\xE9fono sin que nadie se los pida. Ese es el objetivo." })} <div class="services-grid"> ${efectos.map((s) => renderTemplate`${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "title": s.title, "image": s.image, "alt": s.alt, "description": s.description, "link": s.link })}`)} </div> </div> </section>  <section class="why-us-section"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "\xBFPor Qu\xE9 REDEIL?", "subtitle": "+500 eventos en CDMX y Edomex. Instalaci\xF3n incluida siempre.", "paragraph1": "En 10 a\xF1os hemos montado equipo en jardines en Coyoac\xE1n, haciendas en Huixquilucan, salones en Tlalnepantla y roof gardens en Santa Fe. Cada venue tiene su particularidad \u2014 el cableado, la corriente disponible, los techos, los accesos. Eso se aprende haciendo, no leyendo manuales.", "paragraph2": "No rentamos cajas de equipo para que t\xFA te las arregles. Llegamos, montamos, operamos durante el evento y desmontamos al terminar. El staff sabe leer el ambiente \u2014 si hay que subir el volumen, bajar las luces o activar el confeti en el momento exacto, lo hacemos sin que tengas que pedir nada.", "dark": true })} <div class="services-grid"> ${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "title": "Instalaci\xF3n Profesional", "image": "/img/general/placeholder-instalacion.avif", "alt": "Equipo t\xE9cnico de REDEIL montando iluminaci\xF3n profesional en evento", "description": "Nuestro staff llega, monta todo, opera las luces y el audio durante tu evento, y desmonta al finalizar. T\xFA solo disfruta \u2014 nosotros nos encargamos de cada detalle t\xE9cnico.", "link": "/contacto/" })} ${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "title": "Equipo de Primera", "image": "/img/general/placeholder-equipo.avif", "alt": "Equipo profesional Martin Chauvet JBL QSC para eventos en CDMX", "description": "Martin Professional, Chauvet y Elation en iluminaci\xF3n. JBL y QSC en audio. No usamos equipo gen\xE9rico \u2014 cada pieza est\xE1 probada y en \xF3ptimas condiciones para tu evento.", "link": "/servicios/" })} ${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "title": "+500 Eventos Realizados", "image": "/img/general/placeholder-eventos.avif", "alt": "Boda iluminada profesionalmente por REDEIL en hacienda de CDMX", "description": "Bodas en jardines de Coyoac\xE1n, XV a\xF1os en Tlalnepantla, lanzamientos en Santa Fe. Cada evento nos ense\xF1\xF3 algo y esa experiencia se nota en c\xF3mo resolvemos imprevistos.", "link": "/nosotros/" })} ${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "title": "Cobertura Total CDMX", "image": "/img/general/placeholder-cobertura.avif", "alt": "Mapa de cobertura de REDEIL en CDMX y Estado de M\xE9xico", "description": "Polanco, Santa Fe, Coyoac\xE1n, Naucalpan, Huixquilucan, Metepec, Toluca y toda la zona metropolitana. Con plantas de luz para venues sin corriente el\xE9ctrica.", "link": "/zonas-de-cobertura/" })} </div> </div> </section>  <section class="testimonials-section"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Lo Que Dicen Nuestros Clientes", "subtitle": "Rese\xF1as reales de bodas, XV a\xF1os y eventos en CDMX.", "paragraph1": "Cada rese\xF1a es de un evento real. Nombres reales, venues reales, experiencias reales.", "paragraph2": "" })} ${renderComponent($$result2, "TestimonialCards", $$TestimonialCards, { "testimonials": [
    {
      name: "Mariana L\xF3pez",
      text: "El humo bajo en nuestro vals fue m\xE1gico. Los invitados no paraban de tomar fotos. El equipo lleg\xF3 puntual y mont\xF3 todo sin que nos preocup\xE1ramos por nada.",
      rating: 5,
      event: "Boda",
      avatar: "/img/testimonios/avatar-mujer-1.avif",
      venue: "Hacienda San Fernando, Tlalpan",
      date: "Noviembre 2025"
    },
    {
      name: "Roberto Garc\xEDa",
      text: "Contratamos audio completo + DJ para los XV de mi hija. El DJ ley\xF3 perfecto al p\xFAblico \u2014 el vals estuvo emotivo y la hora loca fue brutal. Muy profesionales.",
      rating: 5,
      event: "XV A\xF1os",
      avatar: "/img/testimonios/avatar-hombre-1.avif",
      venue: "Sal\xF3n Jard\xEDn del Arte, Naucalpan",
      date: "Enero 2026"
    },
    {
      name: "Carolina Mendoza",
      text: "Las guirnaldas Edison en el jard\xEDn transformaron completamente el espacio. Parec\xEDa otro lugar. Adem\xE1s incluyeron iluminaci\xF3n arquitect\xF3nica en la fachada sin costo extra.",
      rating: 5,
      event: "Boda",
      avatar: "/img/testimonios/avatar-mujer-2.avif",
      venue: "Quinta Real, Coyoac\xE1n",
      date: "Septiembre 2025"
    },
    {
      name: "Daniel Herrera",
      text: "El sky tracker se ve\xEDa desde toda la colonia. Mis invitados me llamaban preguntando '\xBFesas luces en el cielo son de tu evento?' El mejor efecto que pudimos agregar.",
      rating: 5,
      event: "Inauguraci\xF3n",
      avatar: "/img/testimonios/avatar-hombre-2.avif",
      venue: "Terraza WTC, CDMX",
      date: "Marzo 2025"
    },
    {
      name: "Andrea Ram\xEDrez",
      text: "Necesit\xE1bamos audio para conferencia + cena de gala. El mismo equipo oper\xF3 las dos cosas \u2014 micr\xF3fono cristalino para las presentaciones y luego pista de baile con DJ. Impecable.",
      rating: 5,
      event: "Corporativo",
      avatar: "/img/testimonios/avatar-mujer-3.avif",
      venue: "Hotel Presidente, Polanco",
      date: "Diciembre 2025"
    },
    {
      name: "Miguel Torres",
      text: "Tercer a\xF1o que los contratamos para la posada de la empresa. Siempre puntuales, siempre resuelven todo. Este a\xF1o agregamos confeti y fue el hit de la noche.",
      rating: 5,
      event: "Evento Corporativo",
      avatar: "/img/testimonios/avatar-hombre-3.avif",
      venue: "Casa de Campo, Huixquilucan",
      date: "Diciembre 2025"
    }
  ] })} </div> </section>  <section class="events-section"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Iluminamos Todo Tipo de Evento", "subtitle": "Bodas, XV a\xF1os, corporativos, fiestas \u2014 cada uno con su propia propuesta.", "paragraph1": "Una boda en jard\xEDn en Coyoac\xE1n no se ilumina igual que un lanzamiento de producto en el WTC o una quincea\xF1era en Tlalnepantla. El tipo de evento, el venue, el n\xFAmero de invitados y el momento del d\xEDa cambian completamente qu\xE9 equipo tiene sentido.", "paragraph2": "Cu\xE9ntanos qu\xE9 tienes en mente. Te decimos qu\xE9 equipo funciona para tu venue y tu tipo de evento \u2014 sin venderte m\xE1s de lo que necesitas." })} <div class="services-grid"> ${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "title": "Bodas", "image": "/img/hero/hero-iluminacion-bodas.avif", "alt": "Iluminaci\xF3n profesional para boda en jard\xEDn con guirnaldas y uplighting", "description": "Desde guirnaldas vintage en un jard\xEDn de Coyoac\xE1n hasta un show de luces completo en hacienda. Dise\xF1amos la iluminaci\xF3n y el audio para que cada momento tenga su propia atm\xF3sfera.", "link": "/eventos/bodas/" })} ${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "title": "XV A\xF1os", "image": "/img/hero/hero-iluminacion-eventos.avif", "alt": "Show de luces para XV a\xF1os con sky tracker y pista iluminada", "description": "Sky trackers que se ven desde toda la colonia, pistas de baile iluminadas para el vals, DJ que sabe exactamente cu\xE1ndo cambiar el ritmo. Los XV solo pasan una vez \u2014 que se noten.", "link": "/eventos/xv-anos/" })} ${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "title": "Eventos Corporativos", "image": "/img/hero/hero-equipo-eventos.avif", "alt": "Iluminaci\xF3n arquitect\xF3nica y audio profesional en evento corporativo", "description": "Lanzamientos de producto, conferencias, cenas de fin de a\xF1o. Audio cristalino para presentaciones, iluminaci\xF3n arquitect\xF3nica para ambientar, gobos con el logo de tu empresa.", "link": "/contacto/" })} ${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "title": "Fiestas y Eventos Sociales", "image": "/img/hero/hero-dj-eventos.avif", "alt": "DJ y luces para fiesta con pista de baile iluminada", "description": "Cumplea\xF1os, graduaciones, reuniones. Desde un par de bocinas con DJ para fiestas en jard\xEDn hasta una producci\xF3n completa con luces, humo bajo y confeti.", "link": "/contacto/" })} </div> </div> </section>  <section class="coverage-section"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Zonas de Cobertura", "subtitle": "CDMX y Estado de M\xE9xico \u2014 transporte incluido siempre.", "paragraph1": "Operamos en toda la Ciudad de M\xE9xico y el Estado de M\xE9xico. Nuestro equipo llega con todo incluido \u2014 transporte, montaje y desmontaje \u2014 sin importar la zona.", "paragraph2": "Si tu venue est\xE1 en la zona metropolitana, llegamos. Contamos con plantas de luz para eventos en espacios sin instalaci\xF3n el\xE9ctrica." })} ${renderComponent($$result2, "ZoneCards", $$ZoneCards, {})} </div> </section>  <section class="faq-section"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Preguntas Frecuentes", "subtitle": "Lo que todos preguntan antes de cotizar.", "paragraph1": "Las dudas m\xE1s comunes que nos hacen por WhatsApp antes de reservar. Si no encuentras tu respuesta aqu\xED, escr\xEDbenos directo.", "paragraph2": "Cada evento es diferente, pero estos son los puntos que casi todos los clientes quieren saber antes de confirmar." })} </div> ${renderComponent($$result2, "FaqSection", $$FaqSection, { "items": [
    { question: "\xBFQu\xE9 incluye el servicio de renta?", answer: "Todo: transporte del equipo a tu venue, instalaci\xF3n profesional, operaci\xF3n t\xE9cnica durante el evento y desmontaje al finalizar. No tienes que contratar nada extra \u2014 nuestro staff se encarga de cada detalle." },
    { question: "\xBFCu\xE1nto cuesta rentar iluminaci\xF3n para una boda?", answer: "Depende del equipo y la cantidad. Un paquete b\xE1sico de guirnaldas para jard\xEDn arranca desde $3,500. Producciones completas con audio, luces y efectos van desde $15,000. Cotiza por WhatsApp y te armamos algo a tu presupuesto." },
    { question: "\xBFCon cu\xE1nta anticipaci\xF3n debo reservar?", answer: "Idealmente 2-4 semanas antes. En temporada alta (noviembre-enero y mayo-junio) las fechas se llenan r\xE1pido, as\xED que entre antes reserves, mejor. Fines de semana en diciembre se agotan primero." },
    { question: "\xBFTrabajan con DJ propio o puedo traer el m\xEDo?", answer: "Las dos opciones. Tenemos DJ profesional con consola Pioneer y repertorio listo, pero si ya tienes tu DJ de confianza, le conectamos todo el audio sin problema. Tambi\xE9n rentamos solo el equipo de sonido." },
    { question: "\xBFQu\xE9 pasa si mi venue no tiene corriente el\xE9ctrica?", answer: "Contamos con plantas de luz para eventos al aire libre, haciendas, jardines y cualquier espacio sin instalaci\xF3n el\xE9ctrica. El equipo t\xE9cnico se encarga de toda la log\xEDstica el\xE9ctrica." },
    { question: "\xBFCubren eventos en el Estado de M\xE9xico?", answer: "S\xED, operamos en toda la zona metropolitana: Naucalpan, Huixquilucan, Tlalnepantla, Metepec, Toluca y m\xE1s. El transporte est\xE1 incluido en el servicio sin costo adicional." },
    { question: "\xBFPuedo combinar iluminaci\xF3n, sonido y efectos en un solo paquete?", answer: "Claro, es lo que m\xE1s nos piden. Armamos paquetes personalizados de luz y sonido que incluyen todo lo que necesitas. Cu\xE9ntanos tu evento y te hacemos un presupuesto con precio especial." },
    { question: "\xBFQu\xE9 marcas de equipo utilizan?", answer: "En iluminaci\xF3n trabajamos con Martin Professional, Chauvet y Elation. En audio usamos JBL y QSC. Todo equipo profesional, probado y en \xF3ptimas condiciones. Nada gen\xE9rico." }
  ] })} </section>  <section class="services-section services-alt"> <div class="container"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Directorio de Proveedores", "subtitle": "\xBFNecesitas comprar equipo? Te conectamos con las mejores tiendas", "paragraph1": "Conocemos el mercado de audio e iluminaci\xF3n profesional en CDMX como pocos. Seleccionamos 25 tiendas bien calificadas en Google Maps que venden equipo de sonido, luces LED, consolas para DJ y m\xE1s. Todas verificadas, con rese\xF1as reales de compradores.", "paragraph2": "Nosotros rentamos equipo para tu evento. Pero si lo que buscas es comprar tu propio equipo, estas son las tiendas que recomendamos. Cada ficha tiene direcci\xF3n, tel\xE9fono, horario y calificaci\xF3n de Google." })} <div class="services-grid"> ${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "title": "Tiendas de Audio", "image": "/img/directorio/directorio-tienda-audio-01.avif", "alt": "Tiendas de audio profesional en CDMX", "description": "10 tiendas especializadas en bocinas, amplificadores, mezcladoras y micr\xF3fonos profesionales. Las mejores marcas: JBL, QSC, Yamaha, Shure.", "link": "/directorio/", "btnLabel": "Ver directorio" })} ${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "title": "Tiendas de Iluminaci\xF3n", "image": "/img/directorio/directorio-tienda-iluminacion-01.avif", "alt": "Tiendas de iluminaci\xF3n profesional en CDMX", "description": "10 distribuidores de luces LED, par LED, cabezas m\xF3viles y equipo de iluminaci\xF3n profesional para eventos. Marcas: Chauvet, Elation, ADJ.", "link": "/directorio/", "btnLabel": "Ver directorio" })} ${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "title": "Equipo para DJ", "image": "/img/directorio/directorio-equipo-dj-01.avif", "alt": "Tiendas de equipo para DJ en CDMX", "description": "Consolas Pioneer, controladores, tornamesas y accesorios para DJ. Las tiendas m\xE1s surtidas de la Ciudad de M\xE9xico.", "link": "/directorio/", "btnLabel": "Ver directorio" })} ${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "title": "Audio y Video", "image": "/img/directorio/directorio-audio-video-01.avif", "alt": "Tiendas de equipo audiovisual en CDMX", "description": "Equipo audiovisual, pantallas, proyectores y sistemas integrados para conferencias y eventos corporativos.", "link": "/directorio/", "btnLabel": "Ver directorio" })} </div> </div> </section>  <section class="cta-section"> <div class="container"> <div class="cta-content"> <h2>¿Cuándo es tu evento?</h2> <p>Cuéntanos la fecha, el venue y cuántos invitados esperan. Te respondemos por WhatsApp con una propuesta concreta — sin rodeos y sin compromiso.</p> <div class="cta-buttons"> <a href="https://wa.me/525530682988?text=Hola,%20quiero%20cotizar%20iluminación%20para%20mi%20evento" class="btn btn-whatsapp btn-lg" target="_blank" rel="noopener noreferrer"> <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path></svg>
WhatsApp — 55 3068 2988
</a> <a href="tel:+525530682988" class="btn btn-primary btn-lg"> <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"></path></svg>
Llámanos — 55 3068 2988
</a> </div> </div> </div> </section> ` })}`;
}, "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/pages/index.astro", void 0);

const $$file = "/sessions/youthful-epic-gauss/mnt/RENTADEILUMINACION/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
