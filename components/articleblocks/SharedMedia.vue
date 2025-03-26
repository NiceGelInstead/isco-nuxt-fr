<script setup>
defineProps({
  file: {
    type: Object,
  },
});
</script>

<template>
  <div v-if="file" class="mb-8">
    <NuxtImg
      v-if="file.mime && file.mime.startsWith('image')"
      provider="strapi"
      :src="file.url"
      :alt="file.alternativeText"
      class="rounded-lg"
      loading="lazy"
      format="webp"
      placeholder
    />
    <video
      v-else-if="file.mime && file.mime.startsWith('video')"
      :src="file.url"
      controls
      class=""
    />
    <p v-else>Unsupported media type</p>
  </div>
</template>
