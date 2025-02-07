// components/HeroTemplate.vue
<template>

<div class="w-full grid gap-6 grid-cols-1 md:grid-cols-2 items-center">
<div>
    <h1 class="isco-h3 mb-6">{{ title }}</h1>
    <h2 class="isco-h2">{{ tagline }}</h2>
</div>
<div class="flex h-full lg:place-content-end">
    <p class="max-w-md mt-auto">
    {{ description }}
    </p>
</div>
</div>

</template>

<script setup lang="ts">
defineProps({
  title: String,
  tagline: String,
  description: String
});
</script>