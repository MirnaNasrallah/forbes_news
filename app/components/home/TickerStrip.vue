<script setup lang="ts">
import type { Article } from '#types/article'

defineProps<{
  articles: Article[]
}>()
</script>

<template>
  <div class="mb-8 w-full min-w-0">
    <div class="overflow-x-auto py-5 -mx-4 px-4 sm:-mx-6 sm:px-6">
      <div class="flex gap-6 w-max lg:w-full lg:min-w-0 lg:justify-between">
        <TickerCard
          v-for="(article, index) in articles"
          :key="article.slug"
          :article="article"
          :reveal-delay="index * 60"
        />
      </div>
    </div>
  </div>
</template>
