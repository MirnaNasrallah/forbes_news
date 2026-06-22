<script setup lang="ts">
import TheHeader from '../TheHeader.vue'
import SkeletonBox from './SkeletonBox.vue'

const { showBackground } = useBackgroundToggle()
</script>

<template>
  <div>
    <TheHeader />

    <div :class="showBackground ? 'home-content py-6 sm:py-8' : 'home-content py-8'">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-5">
        <div
          v-for="index in 4"
          :key="index"
          class="flex gap-[10px]"
        >
          <SkeletonBox class="w-[84px] h-[84px] shrink-0" />
          <div class="flex-1 space-y-2 py-2">
            <SkeletonBox class="h-4 w-24" />
            <SkeletonBox class="h-4 w-full" />
            <SkeletonBox class="h-4 w-2/3" />
          </div>
        </div>
      </div>

      <div class="mt-8 space-y-4">
        <SkeletonBox class="w-full aspect-[16/7]" />
        <div class="flex justify-between">
          <div class="flex gap-[10px]">
            <SkeletonBox class="w-[120px] h-[37px]" />
            <SkeletonBox class="w-[120px] h-[37px]" />
          </div>
          <SkeletonBox class="w-40 h-4" />
        </div>
        <SkeletonBox class="w-3/4 h-[49px]" />
      </div>
    </div>
  </div>
</template>
