<script setup>
const { data: navigation } = await useAsyncData('navigation', () => {
  return fetchContentNavigation()
})
</script>

<template>
  <main>
    <Navigation :navigation-tree="navigation"/>
    <NuxtPage />
    <SocialMedia />
  </main>
</template>
