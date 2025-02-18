<template>
  <NuxtLink :to="to" class="block">
    <div
      class="shadow-md rounded-t-xl md:rounded-l-xl grid grid-cols-1 md:grid-cols-2 items-stretch gap-0 md:gap-0"
    >
      <!-- Kontainer gambar dengan responsif aspect ratio -->
      <div
        class="relative w-full rounded-t-xl md:rounded-l-xl aspect-video overflow-hidden"
      >
        <img
          :src="imageSrc"
          alt="gambar-blog"
          class="absolute inset-0 w-full h-full object-cover rounded-t-xl md:rounded-l-xl hover:scale-110 transition-transform duration-300"
        />
      </div>
      <!-- Konten teks -->
      <div class="flex flex-col items-start justify-center px-4 md:px-6 py-6">
        <div class="flex flex-row gap-2 mb-3">
          <p class="text-primary font-medium line-clamp-3">{{ category }}</p>
          <p class="text-gray-600 line-clamp-3">{{ date }}</p>
        </div>
        <h2 class="hover:text-cta text-lg font-semibold line-clamp-2">
          {{ title }}
        </h2>
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
  // description: { type: String, required: true },
  to: { type: String, required: true }, // Harus berisi path menuju halaman detail
});
</script>
