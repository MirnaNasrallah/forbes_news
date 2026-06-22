import { defineNuxtConfig } from 'nuxt/config'

const typesPath = new URL('./types', import.meta.url).pathname
const utilsPath = new URL('./utils', import.meta.url).pathname

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: process.env.NODE_ENV === 'development' },
  dir: {
    app: 'app',
    pages: 'app/pages',
    layouts: 'app/layouts',
  },

  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      title: 'Forbes Middle East',
      titleTemplate: '%s | Forbes Middle East',
      meta: [
        { name: 'robots', content: 'index, follow' },
        { property: 'og:site_name', content: 'Forbes Middle East' },
        { name: 'twitter:card', content: 'summary_large_image' },
      ],
      link: [{ rel: 'icon', href: '/favicon.ico' }],
    },
  },

  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    },
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
    compressPublicAssets: true,
  },

  fonts: {
    families: [
      { name: 'Inter', weights: [400, 500, 600, 700], display: 'swap' },
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
