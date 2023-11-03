<template>
  <main class="h-auto w-screen bg-black">
    <img 
      src="@/images/background.jpg"
      alt="background image"
      class="w-screen h-screen object-cover object-center absolute inset-0 z-0 blur-sm"
    />
    <div class="absolute inset-0 bg-gradient-to-br from-cyan-600 via-blue-900 to-amber-600 opacity-20 z-10"></div>
    <div class="relative z-20">
      <slot />
    </div>
  </main>
</template>
<script setup lang="ts">
import '@/styles/main.scss'

useHead({
  title: 'André Brandão - FullStack Developer',
})
</script>