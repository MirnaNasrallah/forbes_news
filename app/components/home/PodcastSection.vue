<script setup lang="ts">
import type { Article } from '#types/article'

defineProps<{
  articles: Article[]
}>()
</script>

<template>
  <section class="mb-14">
    <SectionTitle title="Podcasts" to="/podcast" />

    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[14px] justify-items-center xl:justify-items-start">
      <PodcastCard
        v-for="(article, index) in articles.slice(0, 6)"
        :key="article.slug"
        :article="article"
        :reveal-delay="index * 60"
      />
    </div>
  </section>
</template>
