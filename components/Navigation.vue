<script setup>
defineProps({
    navigationTree: {
        type: Array,
        default: () => []
    }
})
</script>

<template>
    <ul class="flex flex-col justify-center items-center">
        <li v-for="item in navigationTree" :key="item.title" class="text-center">
            <NuxtLink :to="item._path">
                {{ item.title}}
            </NuxtLink>
            <Navigation v-if="item.children" :navigation-tree="item.children" class="sub-navigation" />
        </li>
    </ul>
</template>
