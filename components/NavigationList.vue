<script setup>
defineProps({
    navigationTree: {
        type: Array,
        default: () => []
    }
})
</script>

<template>
    <ul>
        <li v-for="item in navigationTree" :key="item.title" class="text-center">
            <NuxtLink :to="item._path">
                {{ item.title}}
            </NuxtLink>
            <NavigationList v-if="item.children" :navigation-tree="item.children" class="sub-navigation" />
        </li>
    </ul>
</template>