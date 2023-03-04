<template>
    <div class="blog-item">
        <a :href='path'>{{title}} ({{date}})</a>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    title: {
        type: String,
        required: true
    },
    path: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true
    }
})
</script>

<style scoped>
.blog-item {
    width: 100%;
}
</style>