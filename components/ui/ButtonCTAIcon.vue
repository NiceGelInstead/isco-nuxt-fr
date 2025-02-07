<template>
  <nuxt-link :to="to"
    role="button" :aria-label="buttonText" class="invisible md:visible bg-primary hover:bg-cta hover:scale-105 hover:shadow-md hover:transition-all duration-300 rounded-lg text-white px-4 py-2 text-base font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
    {{ buttonText }}
  </nuxt-link>
</template>

<script setup>
defineProps({
  buttonText: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    required: true,
  },
});
</script>
