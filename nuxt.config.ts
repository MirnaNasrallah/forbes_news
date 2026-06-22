import { fileURLToPath } from 'node:url'

const typesPath = fileURLToPath(new URL('./types', import.meta.url))
const utilsPath = fileURLToPath(new URL('./utils', import.meta.url))

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
