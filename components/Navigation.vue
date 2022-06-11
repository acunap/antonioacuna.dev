<script setup>
defineProps({
    navigationTree: {
        type: Array,
        default: () => []
    }
})

const isNavigationListHidden = ref(true)

const toggleNavigationListVisibility = () => isNavigationListHidden.value = !isNavigationListHidden.value

watch(useRoute(), () => isNavigationListHidden.value = true)
</script>

<template>
    <nav class="relative flex flex-col justify-center items-end lg:items-center">
        <button v-if="isNavigationListHidden" class="lg:hidden" v-on:click="toggleNavigationListVisibility()">
            <FontAwesomeIcon icon="fa-solid fa-bars" class="w-8"/>
        </button>
        <button v-else class="lg:hidden" v-on:click="toggleNavigationListVisibility()">
            <FontAwesomeIcon icon="fa-solid fa-xmark" class="w-8"/>
        </button>
        <NavigationList :navigation-tree="navigationTree" :class="{ hidden: isNavigationListHidden }" class="w-full h-screen top-full bg-white absolute lg:h-auto lg:static lg:block lg:bg-none" />
    </nav>
</template>
