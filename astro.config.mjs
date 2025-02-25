import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  output: 'server',
  adapter: cloudflare({
    mode: 'directory',
    imageService: 'cloudflare'
  }),
  image: {
    service: {
      entrypoint: 'astro/assets/services/cloudflare'
    }
  },
  build: {
    inlineStylesheets: 'auto'
  },
  vite: {
    build: {
      minify: 'esbuild', // Changed from 'terser' to 'esbuild'
      cssMinify: true
    },
    ssr: {
      noExternal: ['@astrojs/cloudflare']
    }
  }
});
