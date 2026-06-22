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
    <article class="group relative overflow-hidden rounded-[8px] bg-forbes-dark/10 h-[520px] lg:h-[588px]">
    <NuxtLink :to="`/articles/${article.slug}`" class="block h-full relative">
      <div class="absolute inset-0">
        <ArticleThumbnail
          :src="article.thumbnail"
          :alt="article.title"
          :category="article.category"
          img-class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          :width="800"
          :height="588"
        />
      </div>

      <div class="absolute top-5 left-5 bg-forbes-surface border border-forbes-dark/10 rounded-[8px] p-5 flex flex-col justify-between w-[calc(100%-40px)] h-[calc(100%-40px)] lg:w-[408px] lg:h-[548px]">
        <div>
          <span class="inline-block bg-forbes-dark text-forbes-bg text-caption font-semibold px-3 py-1 rounded-full mb-4">
            <time :datetime="article.publishedAt">{{ formatDate(article.publishedAt) }}</time>
          </span>
          <h3 class="text-h2 font-medium leading-[1.25] text-forbes-dark line-clamp-4">
            {{ article.title }}
          </h3>
        </div>
        <p class="text-caption text-forbes-dark/80 mt-4">
          by.
          <span class="underline underline-offset-2">{{ article.author.name }}</span>
          /
          <span class="underline underline-offset-2">{{ article.author.title }}</span>
        </p>
      </div>
    </NuxtLink>
    </article>
  </RevealOnEnter>
</template>
