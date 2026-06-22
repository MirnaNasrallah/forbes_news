<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    delay?: number
    tag?: string
  }>(),
  {
    delay: 0,
    tag: 'div',
  },
)

const mounted = ref(false)

onMounted(() => {
  mounted.value = true
})
</script>

<template>
  <component
    :is="tag"
    :class="mounted ? 'reveal-up' : undefined"
    :style="{ '--reveal-delay': `${props.delay}ms` }"
  >
    <slot />
  </component>
</template>
