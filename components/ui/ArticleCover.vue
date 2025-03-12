<template>
  <img :src="computedUrl" alt="" :class="cssClass" />
</template>

<script setup lang="ts">
const config = useRuntimeConfig();
const strapiUrl = config.public.strapiUrl;

const props = defineProps<{
  url: string;
  cssClass?: string;
}>();

// Prepend the Strapi URL to the provided URL string if needed
const computedUrl = props.url ? strapiUrl + props.url : "";
</script>
