<script setup lang="ts">
import type { Category } from '#types/article'
import { getPlaceholderThumbnail } from '#utils/thumbnail'

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

function resolveFallback() {
  return getPlaceholderThumbnail(
    props.category,
    props.width ?? 800,
    props.height ?? 500,
  )
}

const displaySrc = ref(props.src || resolveFallback())
const usedFallback = ref(!props.src)

watch(
  () => props.src,
  (next) => {
    if (usedFallback.value) return
    displaySrc.value = next || resolveFallback()
    usedFallback.value = !next
  },
)

function onError() {
  if (usedFallback.value) return
  usedFallback.value = true
  displaySrc.value = resolveFallback()
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
