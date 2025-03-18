<template>
  <nuxt-link
    :to="to"
    role="button"
    :aria-label="buttonText"
    class="btn isco-button-text border-2 border-primary bg-primary text-lg text-white transition-all duration-300 hover:bg-cta focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:outline-none"
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
