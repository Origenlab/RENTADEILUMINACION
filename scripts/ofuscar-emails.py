#!/usr/bin/env python3
"""
Script para ofuscar emails en HTML para evitar la detección de Cloudflare
"""
import os
import re
import glob

def ofuscar_email_link(match):
    """Reemplaza <a href="mailto:user@domain.com">user@domain.com</a> con versión ofuscada"""
    full_match = match.group(0)
    email = match.group(1)
    display = match.group(2)

    # Dividir email en partes
    if '@' in email:
        user, domain = email.split('@', 1)
        # Crear enlace ofuscado con data attributes
        return f'<a href="#" class="email-link" data-u="{user}" data-d="{domain}">{display}</a>'
    return full_match

def ofuscar_email_schema(match):
    """Reemplaza emails en JSON-LD Schema con versión sin @"""
    email = match.group(1)
    if '@' in email:
        # En Schema.org, mejor usar formato de contacto
        return '"email": "contacto[arroba]rentadeiluminacion.com"'
    return match.group(0)

def ofuscar_email_texto(match):
    """Reemplaza emails en texto plano"""
    email = match.group(0)
    if '@' in email:
        user, domain = email.split('@', 1)
        return f'<span class="email-text" data-u="{user}" data-d="{domain}"></span>'
    return email

def agregar_script_email(html):
    """Agrega el script de decodificación antes de </body>"""
    script = '''
  <!-- Email Decoder -->
  <script>
  document.addEventListener('DOMContentLoaded',function(){
    // Decodificar enlaces de email
    document.querySelectorAll('.email-link').forEach(function(el){
      var u=el.dataset.u,d=el.dataset.d;
      if(u&&d){
        var e=u+'@'+d;
        el.href='mailto:'+e;
        if(!el.textContent||el.textContent==='')el.textContent=e;
        else if(el.textContent.includes('[arroba]'))el.textContent=e;
      }
    });
    // Decodificar textos de email
    document.querySelectorAll('.email-text').forEach(function(el){
      var u=el.dataset.u,d=el.dataset.d;
      if(u&&d)el.textContent=u+'@'+d;
    });
  });
  </script>'''

    if '</body>' in html and 'Email Decoder' not in html:
        html = html.replace('</body>', script + '\n</body>')
    return html

def procesar_archivo(filepath):
    """Procesa un archivo HTML"""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    original = content

    # 1. Reemplazar enlaces mailto con email visible
    # <a href="mailto:user@domain.com">user@domain.com</a>
    pattern_link = r'<a href="mailto:([^"]+)">([^<]+)</a>'
    content = re.sub(pattern_link, ofuscar_email_link, content)

    # 2. Reemplazar emails en Schema.org (JSON-LD)
    pattern_schema = r'"email"\s*:\s*"([^"]+@[^"]+)"'
    content = re.sub(pattern_schema, ofuscar_email_schema, content)

    # 3. Agregar script de decodificación
    content = agregar_script_email(content)

    if content != original:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        return True
    return False

def main():
    # Buscar todos los archivos HTML
    html_files = []
    for pattern in ['*.html', '*/*.html', '*/*/*.html']:
        html_files.extend(glob.glob(pattern))

    modificados = 0
    for filepath in sorted(set(html_files)):
        if 'node_modules' in filepath:
            continue
        try:
            if procesar_archivo(filepath):
                print(f'✅ {filepath}')
                modificados += 1
        except Exception as e:
            print(f'❌ {filepath}: {e}')

    print(f'\n📧 {modificados} archivos modificados')

if __name__ == '__main__':
    main()
