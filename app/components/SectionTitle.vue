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
        class="text-caption text-forbes-dark/60 hover:text-forbes-red transition-colors flex items-center gap-1 shrink-0"
      >
        {{ viewAllLabel ?? 'View All' }}
        <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7" />
        </svg>
      </NuxtLink>
    </div>
    <div class="border-t border-forbes-dark" />
  </div>
</template>
