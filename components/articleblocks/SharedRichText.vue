<script setup lang="ts">
defineProps({
  body: {
    type: String,
  },
});
</script>

<template>
  <MDC v-if="body" :value="body" tag="article" class="mb-8 space-y-4" />
</template>

<style scoped></style>
