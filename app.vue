<template>
  <div class="body">
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'André Brandão - FullStack Developer',
  ogTitle: 'André Brandão - FullStack Developer',
  description: 'André Brandão - FullStack Developer',
  ogDescription: 'André Brandão - FullStack Developer',
})
</script>

<style>
.body {
  @apply
  w-full
  min-h-[100vh]
  overflow-x-hidden
  overflow-y-auto
  bg-gradient-to-r
  from-slate-900 
  to-slate-700
}
</style>
