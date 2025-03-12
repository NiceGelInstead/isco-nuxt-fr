// components/HeroTemplate.vue Lama
<template>
  <section id="hero" class="py-0 mt-[calc(var(--header-height))]">
    <div class="isco-container my-16 grid grid-cols-1 md:grid-cols-12 gap-8">
      <div class="col-span-6">
        <h1 class="isco-h4 text-primary mb-4 md:mb-6">{{ title }}</h1>
        <h2 class="isco-h2 text-left">{{ tagline }}</h2>
      </div>
      <div class="hidden md:col-span-2">.</div>
      <div class="flex h-full col-span-4">
        <p class="isco-paragraph mt-auto">
          {{ description }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: "ISCO Group",
  },
  tagline: {
    type: String,
    default: "Selamat Datang",
  },
  description: {
    type: String,
    default: "Memajukan Kontraktor Di Seluruh Indonesia",
  },
});
</script>
