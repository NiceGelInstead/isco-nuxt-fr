<script setup>
defineProps({
  files: {
    type: Array,
  }
});
</script>

<template>
    <div class="grid grid-cols-2">
      <NuxtImg
        v-for="file in files" :key="file.id" 
        provider="strapi"
        :src="file.url"
        :alt="file.documentId"
        class=""
        loading="lazy"
        placeholder
        />
    </div>
</template>