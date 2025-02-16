<template>
  <nuxt-link
    :to="to"
    role="button" :aria-label="buttonText" class="btn bg-primary hover:bg-cta text-white text-base font-medium">
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
