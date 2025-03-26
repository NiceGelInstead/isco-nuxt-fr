<script setup lang="ts">
defineProps({
  title: {
    type: String,
  },
  body: {
    type: String,
  },
});
</script>

<template>
  <blockquote
    v-if="title"
    class="mb-8 w-full space-y-4 rounded-lg border-1 p-4"
  >
    <p class="isco-short-desc text-secondary">"{{ body }}"</p>
    <cite class="isco-h3 text-primary">
      {{ title }}
    </cite>
  </blockquote>
</template>
