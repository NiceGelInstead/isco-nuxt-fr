<template>
  <div
    class="flex gap-4 rounded-xl border-2 border-border-color bg-white px-5 py-4 shadow-md transition-all duration-500 hover:border-primary hover:shadow-lg md:flex-col md:gap-8.5 md:px-8 md:py-9.5"
  >
    <NuxtImg
      :src="imageSrc"
      alt="gambar-pelayanan"
      class="size-19 self-center object-cover md:size-22.5 md:self-start"
      loading="lazy"
      placeholder
    />
    <div class="w-full">
      <div class="mb-4 w-full">
        <h3 class="isco-h3 mb-2 line-clamp-2">{{ title }}</h3>
        <p class="isco-paragraph line-clamp-3">{{ description }}</p>
      </div>
      <nuxt-link
        :to="to"
        class="isco-button-text text-primary hover:text-cta hover:underline"
      >
        Lihat Pelayanan
      </nuxt-link>
    </div>
  </div>
</template>

<script setup>
defineProps({
  imageSrc: {
    type: String,
    default: "/images/logo/Logo-IscoGroup.png",
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
