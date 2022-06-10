<script setup>
const { data: navigation } = await useAsyncData('navigation', () => {
  return fetchContentNavigation()
})
</script>

<template>
  <main class="h-screen flex">
    <Navigation :navigation-tree="navigation" class="basis-1/4"/>
    <NuxtPage  class="basis-2/4"/>
    <SocialMedia  class="basis-1/4"/>
  </main>
</template>
