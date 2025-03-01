<template>
  <nuxt-link
    :to="to"
    role="button"
    :aria-label="buttonText"
    class="btn bg-primary hover:bg-cta text-white isco-button-text focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all duration-300 text-lg"
  >
    {{ buttonText }}
  </nuxt-link>
</template>

<script setup lang="ts">
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
