<template>
  <div
    class="flex flex-col w-full p-4 hover:border-2 hover:border-primary rounded-xl hover:shadow-lg transition-all duration-500"
  >
    <img
      :src="imageSrc"
      alt="gambar-pelayanan"
      class="size-16 md:size-20 object-cover"
    >
    <div class="my-5 md:my-8 space-y-2 md:space-y-3.5">
      <h3 class="isco-h4 line-clamp-2">{{ title }}</h3>
      <p class="isco-p-desc text-gray-600 line-clamp-3 overflow-hidden">{{ description }}</p>
      <nuxt-link
      :to="to"
      class="text-primary text-lg font-bold hover:text-cta hover:underline">
      Lihat Layanan >
    </nuxt-link>
    </div> 
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
