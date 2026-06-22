import { defineNuxtConfig } from 'nuxt/config'

const typesPath = new URL('./types', import.meta.url).pathname
const utilsPath = new URL('./utils', import.meta.url).pathname

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  dir: {
    app: 'app',
    pages: 'app/pages',
    layouts: 'app/layouts',
  },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@nuxtjs/color-mode',
    '@vueuse/nuxt',
    '@nuxt/fonts',
  ],

  css: ['~/app/assets/css/main.css'],
  components: [
    {
      path: '~/app/components',
      pathPrefix: false,
    },
  ],
  imports: {
    dirs: ['app/composables'],
  },

  alias: {
    '#types': typesPath,
    '#utils': utilsPath,
  },

  nitro: {
    alias: {
      '#types': typesPath,
      '#utils': utilsPath,
    },
  },

  fonts: {
    families: [
      { name: 'Inter', weights: [400, 500, 600, 700] },
    ],
  },

  image: {
    domains: ['images.unsplash.com', 'dummyimage.com'],
    quality: 80,
  },

  colorMode: {
    classSuffix: '',
    preference: 'light',
    fallback: 'light',
  },

  typescript: {
    strict: true,
  },
})
