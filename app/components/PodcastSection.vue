<script setup lang="ts">
import type { Article } from '#types/article'

defineProps<{
  articles: Article[]
}>()
</script>

<template>
  <section class="mb-14">
    <SectionTitle title="Podcasts" to="/podcast" />

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
      <PodcastCard
        v-for="article in articles.slice(0, 6)"
        :key="article.slug"
        :article="article"
      />
    </div>
  </section>
</template>
