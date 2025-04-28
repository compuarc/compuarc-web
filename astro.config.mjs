// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx'; // Si usas archivos .mdx
import sitemap from '@astrojs/sitemap'; // Para generar sitemap.xml
import robotsTxt from 'astro-robots-txt'; // Para generar robots.txt
import compressor from 'astro-compressor'; // Para optimizar salida (opcional)
// Asegúrate de que NO haya 'import cloudflare from ...' aquí arriba

// https://astro.build/config
export default defineConfig({
  
  // ¡IMPORTANTE! Define la URL final de tu sitio para rutas correctas y sitemap
  site: 'https://compuarc-web.pages.dev', 
  
  // ¡IMPORTANTE! Fuerza la salida 100% estática (SSG)
  output: 'static', 

  integrations: [
    mdx(), // Mantenlo si usas archivos .mdx además de .md
    sitemap(), 
    robotsTxt(), 
    compressor() 
    // Aquí puedes añadir otras integraciones que instalaste si es necesario
    // por ej. astro-seo, astro-pagefind (revisa su documentación si requieren
    // ser añadidas aquí o solo se usan como componentes/scripts)
    // ¡Asegúrate de que la integración de cloudflare() NO esté aquí!
  ],
});
