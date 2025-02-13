<template>
  <div
    class="bg-white py-4 md:py-10 px-4 md:px-8 border-2 shadow-md border-border-color hover:border-primary rounded-xl hover:shadow-lg transition-all duration-500"
  >
    <img
      :src="imageSrc"
      alt="gambar-pelayanan"
      class="size-16 md:size-20 object-cover"
    >
    <div class="my-5 md:my-8">
      <h2 class="isco-h3 text-left text-black truncate whitespace-nowrap overflow-hidden mb-2 md:mb-3.5">{{ title }}</h2>
      <p class="text-gray-600 line-clamp-3 overflow-hidden">{{ description }}</p>
    </div>
    <nuxt-link
:to="to"
      class="text-primary text-lg font-bold hover:text-cta hover:underline">
      Lihat Layanan
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
