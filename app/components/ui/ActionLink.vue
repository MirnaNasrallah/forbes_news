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
    class="group inline-flex items-center justify-end w-[106px] h-5 gap-[5px] shrink-0"
  >
    <span class="text-caption text-forbes-dark">{{ label }}</span>
    <span class="inline-flex items-center justify-center w-5 h-5 rounded-full border border-forbes-dark text-forbes-dark transition-colors group-hover:border-forbes-red group-hover:text-forbes-red">
      <svg
        class="w-2.5 h-2.5 transition-transform duration-300 ease-in-out group-hover:-rotate-[45deg]"
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
    class="group inline-flex items-center justify-end w-[106px] h-5 gap-[5px] shrink-0"
  >
    <span class="text-caption text-forbes-dark">{{ label }}</span>
    <span class="inline-flex items-center justify-center w-5 h-5 rounded-full border border-forbes-dark text-forbes-dark transition-colors group-hover:border-forbes-red group-hover:text-forbes-red">
      <svg
        class="w-2.5 h-2.5 transition-transform duration-300 ease-in-out group-hover:-rotate-[45deg]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h13m0 0l-4-4m4 4l-4 4" />
      </svg>
    </span>
  </span>
</template>
