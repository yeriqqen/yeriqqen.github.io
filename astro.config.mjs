// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://yeriqqen.github.io',
  base: '/resume',
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [mdx()],
  trailingSlash: 'ignore'
});