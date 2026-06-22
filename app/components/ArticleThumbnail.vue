<script setup lang="ts">
import type { Category } from '#types/article'
import { getArticleThumbnail, getThumbnailFallbacks } from '#utils/thumbnail'

const props = withDefaults(
  defineProps<{
    src: string
    alt: string
    category: Category
    width?: number
    height?: number
    loading?: 'lazy' | 'eager'
    imgClass?: string
  }>(),
  {
    loading: 'lazy',
  },
)

const seed = computed(() => props.alt || props.category)
const dimensions = computed(() => ({
  width: props.width ?? 800,
  height: props.height ?? 500,
}))

function buildSources() {
  const { width, height } = dimensions.value
  const primary = props.src || getArticleThumbnail(seed.value, props.category, width, height)
  const fallbacks = getThumbnailFallbacks(seed.value, props.category, width, height)
  return [primary, ...fallbacks.filter((url) => url !== primary)]
}

const sources = ref<string[]>(buildSources())
const sourceIndex = ref(0)
const displaySrc = computed(() => sources.value[sourceIndex.value] ?? '')

watch(
  () => [props.src, props.category, props.width, props.height] as const,
  () => {
    sources.value = buildSources()
    sourceIndex.value = 0
  },
)

function onError() {
  if (sourceIndex.value < sources.value.length - 1) {
    sourceIndex.value += 1
  }
}
</script>

<template>
  <NuxtImg
    :src="displaySrc"
    :alt="alt"
    :class="imgClass"
    :loading="loading"
    :width="width"
    :height="height"
    @error="onError"
  />
</template>
