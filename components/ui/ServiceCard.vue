<template>
  <div
    class="flex md:flex-col gap-4 md:gap-8.5 bg-white py-4 md:py-9.5 px-5 md:px-8 border-2 shadow-md border-border-color hover:border-primary rounded-xl hover:shadow-lg transition-all duration-500"
  >
    <NuxtImg
      :src="imageSrc"
      alt="gambar-pelayanan"
      class="size-19 md:size-22.5 object-cover self-center md:self-start"
      loading="lazy"
      placeholder
    />
    <div class="w-full">
      <div class="w-full mb-4">
        <h3 class="isco-h3 line-clamp-2 mb-2">{{ title }}</h3>
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
