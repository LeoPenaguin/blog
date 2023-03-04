
# Hello world

<script setup>
  import data from '../generated/data.json' 
  import blogItem from '../components/blogItem.vue' 
</script>

<template v-for="(article, index) in data" :key="index">
  <blogItem :title="article.title" :path="article.path" :date="article.date.string"/>
</template>