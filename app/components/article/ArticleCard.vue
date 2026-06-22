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
    <article class="group w-full max-w-[420px]">
    <NuxtLink
      :to="`/articles/${article.slug}`"
      class="flex flex-col w-full min-h-[350px] gap-[14px]"
    >
      <div class="card-image w-full h-[260px] bg-forbes-bg shrink-0">
        <ArticleThumbnail
          :src="article.thumbnail"
          :alt="article.title"
          :category="article.category"
          img-class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          :width="420"
          :height="260"
        />
      </div>

      <div class="flex flex-col gap-[7px] min-h-[76px]">
        <h3 class="card-title text-body-md font-semibold text-forbes-dark leading-snug">
          {{ article.title }}
        </h3>

        <p class="text-caption text-forbes-dark/60">
          <span>{{ article.author.name }}</span>
          <span class="mx-1">-</span>
          <time :datetime="article.publishedAt">{{ formatDate(article.publishedAt) }}</time>
        </p>
      </div>
    </NuxtLink>
    </article>
  </RevealOnEnter>
</template>
