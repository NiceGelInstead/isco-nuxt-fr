<template>
  <img :src="imageUrl" alt="" :class="cssClass" />
</template>

<script setup>
// URL strapi
const config = useRuntimeConfig();
const strapiUrl = config.public.strapiUrl;

// Catch image and classes
const props = defineProps({
  article: Object,
  cssClass: String,
});
const imageUrl = props.article?.cover?.url
  ? strapiUrl + props.article.cover.url
  : "";
</script>
