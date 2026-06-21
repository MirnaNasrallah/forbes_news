<script setup lang="ts">
const { showBackground } = useBackgroundToggle()
</script>

<template>
  <div
    v-if="showBackground"
    aria-hidden="true"
    class="page-background"
  />
</template>
