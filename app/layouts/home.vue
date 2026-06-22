<script setup lang="ts">
const { showBackground } = useBackgroundToggle()
</script>

<template>
  <div class="layout-root">
    <PageBackground />

    <div v-if="showBackground" class="home-card relative z-10">
      <slot />
    </div>

    <div v-else class="page-shell">
      <slot />
    </div>
  </div>
</template>
