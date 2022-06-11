<script setup>
defineProps({
    navigationTree: {
        type: Array,
        default: () => []
    },
    isChildrenList: {
        type: Boolean,
        default: () => false
    }
})

const showChildren = ref(false)

const toggleShowChildren = () => showChildren.value = !showChildren.value
const isCurrentRoute = (path) => useRoute().path == path
</script>

<template>
    <ul>
        <li v-for="item in navigationTree" :key="item.title" class="text-center font-bold" :class="{ 'font-normal': isChildrenList }" >
            <button v-if="item.children" class="flex w-full space-x-4 justify-center items-center" v-on:click="toggleShowChildren()">
                <span>{{ item.title }}</span>
                <FontAwesomeIcon v-if="showChildren" icon="fa-solid fa-angle-up" class="w-3"/>
                <FontAwesomeIcon v-else icon="fa-solid fa-angle-down" class="w-3" />
            </button>
            <NuxtLink v-else :to="item._path" :class="{ 'text-slate-500': isCurrentRoute(item._path) }">
                {{ item.title}}
            </NuxtLink>
            <NavigationList v-if="item.children && showChildren" :navigation-tree="item.children" :isChildrenList="true"/>
        </li>
    </ul>
</template>