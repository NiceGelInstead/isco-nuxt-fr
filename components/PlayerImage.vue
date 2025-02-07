<script setup>

// URL strapi
const config = useRuntimeConfig();
const strapiUrl = config.public.strapiUrl;

// Catch image and classes
const props = defineProps({
  player: Object,
  cssClass: String, 
});
const imageUrl = props.player?.Photo?.url ? strapiUrl + props.player.Photo.url : '';

</script>

<template>
  <img :src="imageUrl" alt="" :class="cssClass" >
</template>
