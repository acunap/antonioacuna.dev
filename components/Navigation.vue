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

watch(useRoute(), () => isNavigationListHidden.value = true)
</script>

<template>
    <nav class="relative flex flex-col justify-center items-end md:items-center">
        <button class="md:hidden" v-on:click="toggleNavigationListVisibility()">
            <FontAwesomeIcon v-if="isNavigationListHidden" icon="fa-solid fa-bars" class="w-8"/>
            <FontAwesomeIcon v-else icon="fa-solid fa-xmark"  class="w-8"/>
        </button>
        <NavigationList :navigation-tree="navigationTree" :class="{ hidden: isNavigationListHidden }" class="w-full h-screen top-full bg-white absolute md:h-auto md:static md:block md:bg-none" />
    </nav>
</template>
