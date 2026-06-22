<script setup lang="ts">
withDefaults(
  defineProps<{
    label: string
    to?: string
    as?: 'link' | 'span'
  }>(),
  {
    as: 'link',
  },
)
</script>

<template>
  <NuxtLink
    v-if="as === 'link' && to"
    :to="to"
    class="action-link group"
  >
    <span class="action-link__label">{{ label }}</span>
    <span class="action-link__icon">
      <svg
        class="action-link__arrow"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h13m0 0l-4-4m4 4l-4 4" />
      </svg>
    </span>
  </NuxtLink>

  <span
    v-else
    class="action-link group"
  >
    <span class="action-link__label">{{ label }}</span>
    <span class="action-link__icon">
      <svg
        class="action-link__arrow"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h13m0 0l-4-4m4 4l-4 4" />
      </svg>
    </span>
  </span>
</template>
