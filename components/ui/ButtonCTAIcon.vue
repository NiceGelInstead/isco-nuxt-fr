<template>
  <a
    href="https://wa.me/6285157375776" target="_blank" rel="noopener noreferrer nofollow"
     role="button" :aria-label="buttonText" class="btn bg-primary hover:bg-cta text-white text-base font-medium">
    {{ buttonText }}
  </a>
</template>

<script setup>
defineProps({
  buttonText: {
    type: String,
    required: true,
  },
});
</script>
