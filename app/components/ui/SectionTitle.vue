<script setup lang="ts">
defineProps<{
  title: string
  to?: string
  viewAllLabel?: string
}>()
</script>

<template>
  <div class="mb-6">
    <div class="flex items-center justify-between pb-4 pt-8">
      <h2 class="section-heading">
        {{ title }}
      </h2>
      <ActionLink
        v-if="to"
        :to="to"
        :label="viewAllLabel ?? 'View All'"
      />
    </div>
    <div class="border-t border-forbes-dark" />
  </div>
</template>
