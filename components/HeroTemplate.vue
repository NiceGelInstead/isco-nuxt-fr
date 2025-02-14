// components/HeroTemplate.vue Lama 
<template>

<div class="w-full grid gap-6 grid-cols-1 md:grid-cols-2 items-center">
<div class="">
    <h1 class="text-left text-accent mb-6">{{ title }}</h1>
    <h2 class="isco-h2 text-left">{{ tagline }}</h2>
</div>
<div class="flex h-full lg:place-content-end">
    <p class="text-left max-w-md md:max-w-lg mt-auto">
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
</script>.