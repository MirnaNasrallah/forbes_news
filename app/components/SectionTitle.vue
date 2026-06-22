<script setup lang="ts">
defineProps<{
  title: string
  to?: string
  viewAllLabel?: string
}>()
</script>

<template>
  <div class="mb-6">
    <div class="flex items-center justify-between pb-4">
      <h2 class="section-heading">
        {{ title }}
      </h2>
      <NuxtLink
        v-if="to"
        :to="to"
        class="group text-caption text-forbes-dark inline-flex items-center gap-2 shrink-0"
      >
        {{ viewAllLabel ?? 'View All' }}
        <span class="inline-flex items-center justify-center w-5 h-5 rounded-full border border-forbes-dark text-forbes-dark transition-colors group-hover:border-forbes-red group-hover:text-forbes-red">
          <svg
            class="w-2.5 h-2.5 transition-transform duration-200 ease-out group-hover:translate-x-0.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h13m0 0l-4-4m4 4l-4 4" />
          </svg>
        </span>
      </NuxtLink>
    </div>
    <div class="border-t border-forbes-dark" />
  </div>
</template>
