<template>
  <nuxt-link
    :to="to"
    role="button"
    :aria-label="buttonText"
    class="btn isco-button-text border-2 border-white bg-transparent text-lg font-medium text-white"
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
