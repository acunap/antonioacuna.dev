<script setup>
defineProps({
    navigationTree: {
        type: Array,
        default: () => []
    }
})
</script>

<template>
    <ul class="navigation">
        <li v-for="item in navigationTree" :key="item.title">
            <NuxtLink :to="item._path">
                {{ item.title}}
            </NuxtLink>
            <Navigation v-if="item.children" :navigation-tree="item.children" class="sub-navigation" />
        </li>
    </ul>
</template>
