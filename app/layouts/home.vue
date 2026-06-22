<script setup lang="ts">
const { showBackground } = useBackgroundToggle()
</script>

<template>
  <div class="relative min-h-screen w-full">
    <PageBackground />

    <div v-if="showBackground" class="home-card relative z-10">
      <slot />
    </div>

    <div v-else class="relative z-10 min-h-screen flex flex-col bg-forbes-bg">
      <slot />
    </div>
  </div>
</template>
