import { defineConfig } from 'astro/config';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: 'https://Daniel-Cochachi.github.io',
  base: '/Portafolio-Daniel-Cochachi',
  integrations: [icon()],
});
