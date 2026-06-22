import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/**/*.{vue,js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'forbes-bg-dark': 'rgb(var(--forbes-bg-dark) / <alpha-value>)',
        'forbes-red': '#E63946',
        'forbes-dark': 'rgb(var(--forbes-dark) / <alpha-value>)',
        'forbes-bg': 'rgb(var(--forbes-bg) / <alpha-value>)',
        'forbes-surface': 'rgb(var(--forbes-surface) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        h1: ['36px', { lineHeight: '1.2', fontWeight: '700' }],
        h2: ['28px', { lineHeight: '1.25', fontWeight: '700' }],
        h3: ['24px', { lineHeight: '1.3', fontWeight: '700' }],
        h4: ['20px', { lineHeight: '1.35', fontWeight: '600' }],
        h5: ['18px', { lineHeight: '1.4', fontWeight: '600' }],
        h6: ['16px', { lineHeight: '1.4', fontWeight: '600' }],
        'body-lg': ['18px', { lineHeight: '1.6' }],
        'body-md': ['16px', { lineHeight: '1.6' }],
        'body-sm': ['14px', { lineHeight: '1.5' }],
        caption: ['12px', { lineHeight: '1.4' }],
      },
      maxWidth: {
        content: '1320px',
      },
    },
  },
  plugins: [],
} satisfies Config
