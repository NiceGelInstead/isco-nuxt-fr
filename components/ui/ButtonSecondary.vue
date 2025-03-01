<template>
  <nuxt-link
    :to="to"
    role="button"
    :aria-label="buttonText"
    class="btn border-2 border-white bg-transparent text-white text-base font-medium isco-button-text text-lg"
  >
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
