<script setup>
defineProps({
  file: {
    type: Object
  },
});
</script>

<template>
  <div v-if="file" class="shared-media">
    <NuxtImg
      provider="strapi"
      v-if="file.mime && file.mime.startsWith('image')"
      :src="file.url"
      :alt="file.documentId"
      class=""
      loading="lazy"
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
