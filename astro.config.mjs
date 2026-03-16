import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://rentadeiluminacion.com',
  integrations: [sitemap({
    filter: (page) => 
      !page.includes('/servicios/bodas/') &&
      !page.includes('/servicios/xv-anos/') &&
      !page.includes('/servicios/confeti-papelitos/')
  })],
  build: {
    assets: '_astro'
  }
});
