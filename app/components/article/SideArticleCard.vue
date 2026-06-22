<script setup lang="ts">
import type { Article } from '#types/article'

withDefaults(
  defineProps<{
    article: Article
    revealDelay?: number
  }>(),
  { revealDelay: 0 },
)

const { formatDate } = useFormatDate()
</script>

<template>
  <RevealOnEnter :delay="revealDelay">
    <article class="group">
    <NuxtLink :to="`/articles/${article.slug}`" class="flex gap-[14px] items-center h-[182px]">
      <div class="flex-shrink-0 w-[197px] h-[182px] rounded-[8px] overflow-hidden bg-forbes-dark/5">
        <ArticleThumbnail
          :src="article.thumbnail"
          :alt="article.title"
          :category="article.category"
          img-class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          :width="197"
          :height="182"
        />
      </div>

      <div class="flex-1 min-w-0 flex flex-col gap-2.5 justify-center">
        <p class="text-caption text-forbes-dark/60 leading-none">
          <span>{{ article.author.name }}</span>
          <span class="mx-1">-</span>
          <time :datetime="article.publishedAt">{{ formatDate(article.publishedAt) }}</time>
        </p>
        <h4 class="text-h5 font-medium leading-[1.35] text-forbes-dark line-clamp-3">
          {{ article.title }}
        </h4>
      </div>
    </NuxtLink>
    </article>
  </RevealOnEnter>
</template>
