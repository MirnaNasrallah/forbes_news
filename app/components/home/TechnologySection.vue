<script setup lang="ts">
import type { Article } from '#types/article'

defineProps<{
  articles: Article[]
}>()
</script>

<template>
  <section class="mb-14">
    <SectionTitle title="Technology News" to="/technology" />

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      <TechnologyCard
        v-for="article in articles.slice(0, 4)"
        :key="article.slug"
        :article="article"
      />
    </div>
  </section>
</template>
