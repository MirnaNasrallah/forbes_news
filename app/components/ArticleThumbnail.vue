<script setup lang="ts">
import type { Category } from '#types/article'
import {
  THUMBNAIL_LOAD_TIMEOUT_MS,
  getThumbnailSourceChain,
  isLocalThumbnail,
} from '#utils/thumbnail'

const props = withDefaults(
  defineProps<{
    src: string
    alt: string
    category: Category
    width?: number
    height?: number
    loading?: 'lazy' | 'eager'
    imgClass?: string
    fit?: 'cover' | 'contain' | 'fill' | 'inside' | 'outside'
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
  return getThumbnailSourceChain(props.src, seed.value, props.category, width, height)
}

const sources = ref<string[]>(buildSources())
const sourceIndex = ref(0)
const displaySrc = computed(() => sources.value[sourceIndex.value] ?? '')

let loadTimeoutId: ReturnType<typeof setTimeout> | null = null

function clearLoadTimeout() {
  if (loadTimeoutId) {
    clearTimeout(loadTimeoutId)
    loadTimeoutId = null
  }
}

function resetSources() {
  sources.value = buildSources()
  sourceIndex.value = 0
  scheduleLoadTimeout()
}

function advanceSource() {
  clearLoadTimeout()
  if (sourceIndex.value < sources.value.length - 1) {
    sourceIndex.value += 1
    scheduleLoadTimeout()
  }
}

function scheduleLoadTimeout() {
  clearLoadTimeout()

  const url = displaySrc.value
  if (!url || isLocalThumbnail(url)) {
    return
  }

  loadTimeoutId = setTimeout(() => {
    advanceSource()
  }, THUMBNAIL_LOAD_TIMEOUT_MS)
}

function onLoad() {
  clearLoadTimeout()
}

function onError() {
  advanceSource()
}

watch(
  () => [props.src, props.category, props.width, props.height] as const,
  resetSources,
)

watch(displaySrc, () => {
  scheduleLoadTimeout()
})

onMounted(() => {
  scheduleLoadTimeout()
})

onUnmounted(() => {
  clearLoadTimeout()
})
</script>

<template>
  <NuxtImg
    :key="displaySrc"
    :src="displaySrc"
    :alt="alt"
    :class="imgClass"
    :loading="loading"
    :width="width"
    :height="height"
    :fit="fit"
    @load="onLoad"
    @error="onError"
  />
</template>
