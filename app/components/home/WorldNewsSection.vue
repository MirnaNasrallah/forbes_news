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

    <div class="grid grid-cols-1 lg:grid-cols-[1fr_469px] gap-[28px] lg:items-start">
      <FeaturedArticleCard :article="featured" :reveal-delay="0" />
      <div class="flex flex-col gap-[21px] lg:w-[469px] lg:h-[588px]">
        <SideArticleCard
          v-for="(article, index) in sideArticles"
          :key="article.slug"
          :article="article"
          :reveal-delay="(index + 1) * 60"
        />
      </div>
    </div>
  </section>
</template>
