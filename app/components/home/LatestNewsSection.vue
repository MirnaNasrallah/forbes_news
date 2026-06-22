<script setup lang="ts">
import type { Article } from '#types/article'
import { CATEGORY_LABELS } from '#types/article'

const props = defineProps<{
  articles: Article[]
}>()

const { formatDate } = useFormatDate()

const featured = computed(() => props.articles[0])
const sideArticles = computed(() => props.articles.slice(1, 3))
const bottomArticles = computed(() => props.articles.slice(3, 6))
</script>

<template>
  <section v-if="featured" class="mb-14">
    <SectionTitle title="Latest News" to="/world-news" />

    <div class="grid grid-cols-1 lg:grid-cols-[628px_628px] gap-[30px]">
      <RevealOnEnter :delay="0">
      <article class="group relative w-full h-[490px] rounded-[4px] overflow-hidden bg-forbes-dark/10">
        <NuxtLink :to="`/articles/${featured.slug}`" class="block h-full">
          <ArticleThumbnail
            :src="featured.thumbnail"
            :alt="featured.title"
            :category="featured.category"
            img-class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            :width="628"
            :height="490"
          />

          <div class="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 via-black/35 to-transparent">
            <h3 class="text-[28px] leading-[1.2] font-medium text-white line-clamp-2">
              {{ featured.title }}
            </h3>
            <p class="mt-2 text-caption text-white/90">
              {{ CATEGORY_LABELS[featured.category] }}
              <span class="mx-1">-</span>
              <time :datetime="featured.publishedAt">{{ formatDate(featured.publishedAt) }}</time>
            </p>
          </div>

          <span class="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span class="w-11 h-11 rounded-full bg-white/80 text-forbes-dark flex items-center justify-center">
              <svg class="w-4 h-4 ml-0.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M8 6v12l10-6z" />
              </svg>
            </span>
          </span>
        </NuxtLink>
      </article>
      </RevealOnEnter>

      <div class="flex flex-col gap-[21px] w-full h-[490px]">
        <RevealOnEnter
          v-for="(article, index) in sideArticles"
          :key="article.slug"
          :delay="(index + 1) * 60"
        >
        <article class="group w-full h-[230px]">
          <NuxtLink :to="`/articles/${article.slug}`" class="flex items-center gap-[11px] w-full h-full">
            <div class="w-[302px] h-[80px] flex flex-col justify-center gap-[11px]">
              <h4 class="text-h5 font-medium text-forbes-dark line-clamp-2">
                {{ article.title }}
              </h4>
              <p class="text-caption text-forbes-dark/70">
                {{ CATEGORY_LABELS[article.category] }}
                <span class="mx-1">-</span>
                <time :datetime="article.publishedAt">{{ formatDate(article.publishedAt) }}</time>
              </p>
            </div>

            <div class="w-[304px] h-[230px] rounded-[4px] overflow-hidden bg-forbes-dark/10">
              <ArticleThumbnail
                :src="article.thumbnail"
                :alt="article.title"
                :category="article.category"
                img-class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                :width="304"
                :height="230"
              />
            </div>
          </NuxtLink>
        </article>
        </RevealOnEnter>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[14px] mt-[14px]">
      <ArticleCard
        v-for="(article, index) in bottomArticles"
        :key="article.slug"
        :article="article"
        :reveal-delay="(index + 1) * 60"
      />
    </div>
  </section>
</template>
