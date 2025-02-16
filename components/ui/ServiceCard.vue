<template>
  <div
    class="bg-white py-4 md:py-10 px-4 md:px-8 border-2 shadow-md border-border-color hover:border-primary rounded-xl hover:shadow-lg transition-all duration-500"
  >
    <img
      :src="imageSrc"
      alt="gambar-pelayanan"
      class="size-16 md:size-20 object-cover"
    >
    <div class="my-5 md:my-8 space-y-2 md:space-y-3.5">
      <h3 class="isco-h4 line-clamp-2">{{ title }}</h3>
      <p class="isco-p-desc text-gray-600 line-clamp-3">{{ description }}</p>
    </div>
    <nuxt-link
:to="to"
      class="text-primary text-lg font-bold hover:text-cta hover:underline">
      Lihat Layanan
      <svg class="inline" width="0.75rem" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 9L9 1M9 1H2.5M9 1V7.22222" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </nuxt-link>

   
  </div>
</template>

<script setup>
defineProps({
  imageSrc: {
    type: String,// Gambar diambil dari lokal, jadi wajib ada
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    required: true,
  },
});
</script>