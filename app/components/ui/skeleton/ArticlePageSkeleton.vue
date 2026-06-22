<template>
  <div>
    <div class="container pt-8">
      <SkeletonBox class="w-full aspect-[16/7]" />
    </div>

    <div class="container py-10">
      <div class="max-w-[720px] mx-auto space-y-5">
        <SkeletonBox class="w-32 h-3" />
        <SkeletonBox class="w-52 h-3" />
        <SkeletonBox class="w-full h-10" />
        <SkeletonBox class="w-4/5 h-10" />
        <div class="space-y-3 pt-4">
          <SkeletonBox
            v-for="index in 6"
            :key="index"
            class="w-full h-5"
          />
        </div>
      </div>
    </div>
  </div>
</template>
