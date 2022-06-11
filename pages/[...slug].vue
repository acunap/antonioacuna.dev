<script setup>
definePageMeta({
    middleware: (to, from) => {
        if (to.path == "/") {
            return navigateTo("/me")
        }
    }
})
</script>

<template>
  <article class="flex items-center overflow-y-auto py-16">
    <ContentDoc class="my-auto prose w-full max-w-none"/>
  </article>
</template>
