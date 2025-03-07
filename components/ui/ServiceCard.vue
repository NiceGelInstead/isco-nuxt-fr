<template>
  <div
    class="flex md:flex-col gap-4 md:gap-8.5 bg-white py-4 md:py-9.5 px-5 md:px-8 border-2 shadow-md border-border-color hover:border-primary rounded-xl hover:shadow-lg transition-all duration-500"
  >
    <img
      :src="imageSrc"
      alt="gambar-pelayanan"
      class="size-19 md:size-22.5 object-cover self-center md:self-start"
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
      <svg
        class="inline"
        width="0.75rem"
        viewBox="0 0 10 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 9L9 1M9 1H2.5M9 1V7.22222"
          stroke="currentColor"
          stroke-width="1.25"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
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
