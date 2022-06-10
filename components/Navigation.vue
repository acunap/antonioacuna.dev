<script setup>
import { reactive } from 'vue'

defineProps({
    navigationTree: {
        type: Array,
        default: () => []
    }
})

const isNavigationListHidden = ref(false)

const toggleNavigationListVisibility = () => isNavigationListHidden.value = !isNavigationListHidden.value
</script>

<template>
    <nav class="relative flex flex-col justify-center items-end md:items-center">
        <button class="md:hidden" v-on:click="toggleNavigationListVisibility()">
            <FontAwesomeIcon icon="fa-solid fa-bars" class="w-8"/>
        </button>
        <NavigationList :navigation-tree="navigationTree" :class="{ hidden: isNavigationListHidden }" class="w-full h-screen top-full bg-white absolute md:h-auto md:static md:block md:bg-none" />
    </nav>
</template>
