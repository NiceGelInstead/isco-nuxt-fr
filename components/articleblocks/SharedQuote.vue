<script setup lang="ts">
defineProps({
  title: {
    type: String
  },
  body: {
    type: String
  },
});
</script>

<template>
  <div v-if="title" class="w-full">
    <blockquote class="w-full space-y-2 p-2 border-1">
        <p class="isco-paragraph">
            {{ body }}
        </p>
        <h3 class="isco-h3">
            {{ title }}
        </h3>
    </blockquote>
  </div>
</template>