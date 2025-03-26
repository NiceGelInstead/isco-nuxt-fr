<script setup>
import { computed } from "vue";

const props = defineProps({
  files: {
    type: Array,
  },
});

const columnCount = computed(() => {
  return props.files.length >= 3 ? 3 : props.files.length;
});

const columns = computed(() => {
  return Array.from({ length: columnCount.value }, (_, index) =>
    props.files.filter((_, idx) => idx % columnCount.value === index),
  );
});
</script>

<template>
  <div
    class="mb-8 grid gap-4"
    :class="{
      'grid-cols-1': columnCount === 1,
      'grid-cols-2': columnCount === 2,
      'grid-cols-3': columnCount === 3,
    }"
  >
    <div
      v-for="(column, colIndex) in columns"
      :key="colIndex"
      class="grid gap-4"
    >
      <NuxtImg
        v-for="(file, i) in column"
        :key="file.id || i"
        provider="strapi"
        :src="file.url"
        :alt="file.documentId"
        class="h-auto max-w-full rounded-lg"
        loading="lazy"
        placeholder
      />
    </div>
  </div>
</template>
