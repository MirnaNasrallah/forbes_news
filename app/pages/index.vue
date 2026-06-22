<script setup lang="ts">
import type { HomepagePayload, SectionPreview } from '#types/article'
import { HERO_LIVE_IMAGE } from '#utils/thumbnail'
import HomepageSkeleton from '~/app/components/ui/skeleton/HomepageSkeleton.vue'

definePageMeta({ layout: 'home', key: (route) => route.fullPath })

const { data, pending, error, status } = await useAsyncData<HomepagePayload>(
  'homepage',
  () => $fetch('/api/homepage'),
)
const { showBackground } = useBackgroundToggle()
const showSkeleton = usePageLoading(pending, data, status)

if (error.value) {
  throw createError({
    statusCode: error.value.statusCode ?? 500,
    statusMessage: 'Failed to load homepage',
    fatal: true,
  })
}

if (!pending.value && !data.value) {
  throw createError({
    statusCode: 500,
    statusMessage: 'Failed to load homepage',
    fatal: true,
  })
}

function getSection(category: SectionPreview['category']) {
  return data.value?.sections.find((s) => s.category === category)
}

usePageSeo(() => ({
  title: 'Business, Technology, World News',
  description:
    'Forbes Middle East delivers authoritative business, technology, culture, and world news coverage across the Middle East and beyond.',
  path: '/',
  ogImage: HERO_LIVE_IMAGE,
  preloadImage: HERO_LIVE_IMAGE,
}))

useHomeJsonLd()
</script>

<template>
  <HomepageSkeleton v-if="showSkeleton" />

  <div v-else-if="data">
    <TheHeader />

    <div :class="showBackground ? 'page-content-offset pb-6 sm:pb-8' : 'page-content-offset pb-8'">
      <div class="home-content">
      <h1 class="sr-only">Forbes Middle East – Latest News</h1>
      <RevealOnEnter :delay="0">
        <HeroArticle :article="data.hero" />
      </RevealOnEnter>

      <RevealOnEnter :delay="60">
        <TickerStrip :articles="data.ticker" />
      </RevealOnEnter>

      <RevealOnEnter :delay="120">
        <LatestNewsSection :articles="data.latest" />
      </RevealOnEnter>

      <RevealOnEnter v-if="getSection('world-news')" :delay="180">
        <WorldNewsSection :articles="getSection('world-news')!.articles" />
      </RevealOnEnter>

      <RevealOnEnter v-if="getSection('technology')" :delay="240">
        <TechnologySection :articles="getSection('technology')!.articles" />
      </RevealOnEnter>

      <RevealOnEnter v-if="getSection('podcast')" :delay="300">
        <PodcastSection :articles="getSection('podcast')!.articles" />
      </RevealOnEnter>
      </div>
    </div>

    <TheFooter />
  </div>
</template>
