// nuxt.config.ts
import { defineNuxtConfig } from 'nuxt/config'
import { resolve } from 'path';

export default defineNuxtConfig({
  alias: {
    '@': resolve(__dirname, "/"),
  },

  css: ["~/assets/main.css"],
  
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  
  modules: [],
  
  build: {
    transpile: ['@tailwindcss/forms'],
  },

  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/png', href: '/photo.png' }
      ]
    }
  },
});
