<script setup lang="ts">
defineProps({
  body: {
    type: String,
  },
});
</script>

<template>
  <div v-if="body" class="">
    <MDC :value="body" tag="article" />
  </div>
</template>

<style scoped></style>
