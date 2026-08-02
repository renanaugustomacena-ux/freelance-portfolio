import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://renanaugustomacena-ux.github.io',
  base: '/freelance-portfolio',
  output: 'static',
  integrations: [sitemap()],
});
