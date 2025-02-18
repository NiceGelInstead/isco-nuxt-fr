<template>
  <NuxtLink :to="to" class="block">
    <div class="items-stretch shadow-md border-gray-200 rounded-xl hover:shadow-lg transition">
      <div class="relative w-full rounded-t-xl aspect-video md:aspect-square overflow-hidden">
        <img
          :src="imageSrc"
          alt="gambar-blog"
          class="absolute inset-0 w-full h-full object-cover rounded-t-xl hover:scale-110 transition-transform duration-300">
      </div>
      <div class="flex flex-col px-4 py-6">
        <div class="flex flex-row gap-2 mb-3">
          <p class="text-primary font-medium line-clamp-3 overflow-hidden">{{ category }}</p>
          <p class="text-gray-600 line-clamp-3 overflow-hidden">{{ date }}</p>
        </div>
        <div class="flex flex-col gap-3">
            <h2 class="text-2xl font-semibold text-left truncate whitespace-nowrap overflow-hidden">{{ title }}</h2>
            <p class="text-base text-gray-600 line-clamp-3">{{ description }}</p>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup>
defineProps({
  imageSrc: { type: String },
  category: { type: String },
  date: { type: String },
  title: { type: String, required: true },
  description: { type: String, required: true },
  to: { type: String, required: true }, // Harus berisi path menuju halaman detail
});
</script>
