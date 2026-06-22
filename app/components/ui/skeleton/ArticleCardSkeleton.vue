<template>
  <article class="w-full max-w-[420px]">
    <div class="flex flex-col w-full min-h-[350px] gap-[14px]">
      <SkeletonBox class="w-full h-[260px]" />
      <div class="flex flex-col gap-[7px] min-h-[76px]">
        <SkeletonBox class="w-20 h-3" />
        <SkeletonBox class="w-full h-4" />
        <SkeletonBox class="w-3/4 h-4" />
        <SkeletonBox class="w-32 h-3" />
      </div>
    </div>
  </article>
</template>
