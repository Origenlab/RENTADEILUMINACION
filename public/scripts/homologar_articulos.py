#!/usr/bin/env python3
"""
Script para homologar artículos del blog con las especificaciones SEO del DOCUMENTO-ARTICULOS.md
Mejoras aplicadas:
1. Meta tags completos (robots, googlebot, og:image:width/height, og:site_name, article:section)
2. Schema.org Article mejorado (wordCount, timeRequired, inLanguage, mainEntityOfPage)
3. Schema.org BreadcrumbList si no existe
"""

import os
import re
import json
from pathlib import Path

BLOG_DIR = Path(__file__).parent.parent / "blog"

# Artículos que ya están optimizados (no modificar)
SKIP_FILES = [
    "guirnaldas-focos-edison-bodas-eventos-cdmx.html",
    "renta-maquina-humo-eventos-cdmx.html"
]

def get_category_from_content(content):
    """Extrae la categoría del badge del hero"""
    match = re.search(r'class="category-badge">([^<]+)</span>', content)
    if match:
        return match.group(1)
    return "Iluminación para Eventos"

def get_og_image(content):
    """Extrae la imagen OG existente"""
    match = re.search(r'<meta property="og:image" content="([^"]+)"', content)
    if match:
        return match.group(1)
    return "https://rentadeiluminacion.com/img/logo-redeil.avif"

def get_canonical_url(content):
    """Extrae la URL canónica"""
    match = re.search(r'<link rel="canonical" href="([^"]+)"', content)
    if match:
        return match.group(1)
    return ""

def get_title(content):
    """Extrae el título de la página"""
    match = re.search(r'<title>([^<]+)</title>', content)
    if match:
        return match.group(1).replace(" | REDEIL", "")
    return ""

def get_description(content):
    """Extrae la meta descripción"""
    match = re.search(r'<meta name="description" content="([^"]+)"', content)
    if match:
        return match.group(1)
    return ""

def get_keywords(content):
    """Extrae las keywords"""
    match = re.search(r'<meta name="keywords" content="([^"]+)"', content)
    if match:
        return match.group(1)
    return ""

def estimate_word_count(content):
    """Estima el conteo de palabras del artículo"""
    # Buscar el contenido del artículo
    match = re.search(r'<div class="blog-article-content"[^>]*>(.*?)</div>\s*</article>', content, re.DOTALL)
    if match:
        text = re.sub(r'<[^>]+>', ' ', match.group(1))
        words = len(text.split())
        return words
    return 2500

def estimate_read_time(word_count):
    """Calcula tiempo de lectura (200 palabras por minuto)"""
    minutes = word_count // 200
    return max(8, min(15, minutes))

def has_breadcrumb_schema(content):
    """Verifica si ya tiene Schema BreadcrumbList"""
    return '"@type":"BreadcrumbList"' in content or '"@type": "BreadcrumbList"' in content

def get_breadcrumb_category_link(category):
    """Retorna el link de la categoría para el breadcrumb"""
    category_links = {
        "Guirnaldas y Series de Luces": ("renta-de-iluminacion/renta-de-guirnaldas.html", "Guirnaldas"),
        "Luces Neon y LED": ("renta-de-iluminacion/renta-de-luces-neon.html", "Luces Neon"),
        "Equipo para Eventos": ("equipo-para-eventos/equipo-para-eventos.html", "Equipo para Eventos"),
        "Iluminación Arquitectónica": ("renta-de-iluminacion/renta-de-iluminacion-arquitectonica.html", "Iluminación Arquitectónica"),
        "Sonido y DJ": ("renta-de-bocinas/bocinas.html", "Sonido"),
        "Iluminación para Eventos": ("renta-de-iluminacion/iluminacion.html", "Iluminación"),
    }
    return category_links.get(category, ("renta-de-iluminacion/iluminacion.html", "Iluminación"))

def improve_meta_tags(content, filename):
    """Mejora los meta tags del artículo"""

    # 1. Agregar http-equiv si no existe
    if 'http-equiv="X-UA-Compatible"' not in content:
        content = content.replace(
            '<meta name="viewport"',
            '<meta http-equiv="X-UA-Compatible" content="IE=edge">\n  <meta name="viewport"'
        )

    # 2. Mejorar robots meta tag
    if 'max-image-preview:large' not in content:
        content = re.sub(
            r'<meta name="robots" content="index, follow">',
            '<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">',
            content
        )

    # 3. Agregar googlebot si no existe
    if '<meta name="googlebot"' not in content:
        content = re.sub(
            r'(<meta name="robots"[^>]+>)',
            r'\1\n  <meta name="googlebot" content="index, follow">',
            content
        )

    # 4. Agregar og:image:width y og:image:height si no existen
    if 'og:image:width' not in content:
        og_image_match = re.search(r'(<meta property="og:image" content="[^"]+">)', content)
        if og_image_match:
            content = content.replace(
                og_image_match.group(1),
                og_image_match.group(1) + '\n  <meta property="og:image:width" content="1200">\n  <meta property="og:image:height" content="630">'
            )

    # 5. Agregar og:site_name si no existe
    if 'og:site_name' not in content:
        og_url_match = re.search(r'(<meta property="og:url"[^>]+>)', content)
        if og_url_match:
            content = content.replace(
                og_url_match.group(1),
                og_url_match.group(1) + '\n  <meta property="og:site_name" content="REDEIL - Renta de Iluminacion">'
            )

    # 6. Agregar article:section si no existe
    category = get_category_from_content(content)
    if 'article:section' not in content:
        og_locale_match = re.search(r'(<meta property="og:locale"[^>]+>)', content)
        if og_locale_match:
            content = content.replace(
                og_locale_match.group(1),
                og_locale_match.group(1) + f'\n  <meta property="article:section" content="{category}">'
            )

    return content

def improve_article_schema(content, filename):
    """Mejora el Schema.org Article"""

    # Encontrar el schema Article existente
    article_schema_pattern = r'<script type="application/ld\+json">\s*\{[^}]*"@type"\s*:\s*"Article"[^<]+</script>'
    match = re.search(article_schema_pattern, content, re.DOTALL)

    if not match:
        return content

    old_schema = match.group(0)

    # Extraer información necesaria
    title = get_title(content)
    description = get_description(content)
    keywords = get_keywords(content)
    og_image = get_og_image(content)
    canonical = get_canonical_url(content)
    category = get_category_from_content(content)
    word_count = estimate_word_count(content)
    read_time = estimate_read_time(word_count)

    # Crear nuevo schema mejorado
    new_schema = f'''<script type="application/ld+json">
  {{
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "{title}",
    "description": "{description}",
    "image": {{
      "@type": "ImageObject",
      "url": "{og_image}",
      "width": 1200,
      "height": 630
    }},
    "author": {{
      "@type": "Organization",
      "name": "REDEIL",
      "url": "https://rentadeiluminacion.com"
    }},
    "publisher": {{
      "@type": "Organization",
      "name": "REDEIL",
      "logo": {{
        "@type": "ImageObject",
        "url": "https://rentadeiluminacion.com/img/logo-redeil.avif"
      }}
    }},
    "mainEntityOfPage": {{
      "@type": "WebPage",
      "@id": "{canonical}"
    }},
    "keywords": "{keywords[:100]}",
    "articleSection": "{category}",
    "wordCount": {word_count},
    "timeRequired": "PT{read_time}M",
    "inLanguage": "es-MX"
  }}
  </script>'''

    content = content.replace(old_schema, new_schema)
    return content

def add_breadcrumb_schema(content, filename):
    """Agrega Schema BreadcrumbList si no existe"""

    if has_breadcrumb_schema(content):
        return content

    title = get_title(content)
    category = get_category_from_content(content)
    cat_link, cat_name = get_breadcrumb_category_link(category)

    breadcrumb_schema = f'''
  <!-- Schema.org BreadcrumbList -->
  <script type="application/ld+json">
  {{
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {{"@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://rentadeiluminacion.com"}},
      {{"@type": "ListItem", "position": 2, "name": "Blog", "item": "https://rentadeiluminacion.com/blog.html"}},
      {{"@type": "ListItem", "position": 3, "name": "{cat_name}", "item": "https://rentadeiluminacion.com/{cat_link}"}},
      {{"@type": "ListItem", "position": 4, "name": "{title[:60]}"}}
    ]
  }}
  </script>'''

    # Insertar después del FAQPage schema o después del Article schema
    faq_pattern = r'(</script>\s*)(<!--\s*Fonts|<link rel="stylesheet")'
    match = re.search(faq_pattern, content)
    if match:
        # Buscar el último </script> antes de los estilos
        last_script_pos = content.rfind('</script>', 0, content.find('<link rel="stylesheet"'))
        if last_script_pos > 0:
            insert_pos = last_script_pos + len('</script>')
            content = content[:insert_pos] + breadcrumb_schema + content[insert_pos:]

    return content

def process_file(filepath):
    """Procesa un archivo HTML aplicando todas las mejoras"""

    filename = os.path.basename(filepath)

    if filename in SKIP_FILES:
        print(f"  ⏭️  Saltando (ya optimizado): {filename}")
        return False

    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    original_content = content

    # Aplicar mejoras
    content = improve_meta_tags(content, filename)
    content = improve_article_schema(content, filename)
    content = add_breadcrumb_schema(content, filename)

    # Verificar si hubo cambios
    if content != original_content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"  ✅ Actualizado: {filename}")
        return True
    else:
        print(f"  ℹ️  Sin cambios: {filename}")
        return False

def main():
    """Función principal"""
    print("=" * 60)
    print("HOMOLOGACIÓN DE ARTÍCULOS DEL BLOG")
    print("=" * 60)
    print()

    if not BLOG_DIR.exists():
        print(f"Error: No se encontró el directorio {BLOG_DIR}")
        return

    html_files = list(BLOG_DIR.glob("*.html"))
    print(f"Encontrados {len(html_files)} artículos")
    print()

    updated = 0
    skipped = 0
    unchanged = 0

    for filepath in sorted(html_files):
        result = process_file(filepath)
        if result is True:
            updated += 1
        elif result is False and os.path.basename(filepath) in SKIP_FILES:
            skipped += 1
        else:
            unchanged += 1

    print()
    print("=" * 60)
    print("RESUMEN")
    print("=" * 60)
    print(f"  Actualizados: {updated}")
    print(f"  Saltados:     {skipped}")
    print(f"  Sin cambios:  {unchanged}")
    print(f"  Total:        {len(html_files)}")

if __name__ == "__main__":
    main()
