import { fileURLToPath } from 'node:url'

const typesPath = fileURLToPath(new URL('./types', import.meta.url))

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@nuxtjs/color-mode',
    '@vueuse/nuxt',
    '@nuxt/fonts',
  ],

  css: ['~/assets/css/main.css'],

  alias: {
    '#types': typesPath,
  },

  nitro: {
    alias: {
      '#types': typesPath,
    },
  },

  fonts: {
    families: [
      { name: 'Inter', weights: [400, 500, 600, 700] },
    ],
  },

  image: {
    domains: ['picsum.photos'],
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
