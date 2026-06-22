// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt()
  .override('nuxt/vue/rules', {
    rules: {
      // Nuxt pages/layouts often use single-word names (e.g. index.vue)
      'vue/multi-word-component-names': 'off',
      // Optional props are typed in TypeScript — defaults are redundant
      'vue/require-default-prop': 'off',
    },
  })
  .override('nuxt/typescript/rules', {
    rules: {
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
    },
  })
  .override('nuxt/javascript', {
    rules: {
      'no-console': ['warn', { allow: ['warn', 'error'] }],
    },
  })
  .append({
    name: 'project/scripts',
    files: ['scripts/**'],
    rules: {
      'no-console': 'off',
    },
  })
