<script setup lang="ts">
import type { Article } from '#types/article'

const props = defineProps<{
  articles: Article[]
}>()

const featured = computed(() => props.articles[0])
const sideArticles = computed(() => props.articles.slice(1, 4))
</script>

<template>
  <section v-if="featured" class="mb-14">
    <SectionTitle title="World News" to="/world-news" />

    <div class="grid grid-cols-1 lg:grid-cols-[1fr_469px] gap-[14px] lg:items-start">
      <FeaturedArticleCard :article="featured" />
      <div class="flex flex-col gap-[21px] lg:w-[469px] lg:h-[588px]">
        <SideArticleCard
          v-for="article in sideArticles"
          :key="article.slug"
          :article="article"
        />
      </div>
    </div>
  </section>
</template>
