<script setup>
const { data: navigation } = await useAsyncData('navigation', () => {
  return fetchContentNavigation()
})
</script>

<template>
  <main class="h-screen flex flex-col px-8 lg:flex-row lg:px-0">
    <Navigation :navigation-tree="navigation" class="basis-1/12 lg:basis-1/4"/>
    <NuxtPage  class="basis-10/12 lg:basis-2/4"/>
    <SocialMedia  class="basis-1/12 lg:basis-1/4"/>
  </main>
</template>
