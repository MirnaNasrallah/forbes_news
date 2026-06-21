<script setup lang="ts">
import type { Article } from '#types/article'

defineProps<{
  articles: Article[]
}>()
</script>

<template>
  <div class="mb-8">
    <ContentDivider />
    <div class="home-content py-5 overflow-x-auto">
      <div class="flex gap-6 lg:justify-between min-w-max lg:min-w-0 lg:w-full">
        <TickerCard
          v-for="article in articles"
          :key="article.slug"
          :article="article"
        />
      </div>
    </div>
    <ContentDivider />
  </div>
</template>
