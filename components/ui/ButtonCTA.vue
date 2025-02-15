<template>
  <!-- External link, pake <a> -->
  <a v-if="isOutbound" :href="to" target="_blank" rel="noopener noreferrer nofollow"
     role="button" :aria-label="buttonText" :class="buttonClass">
    {{ buttonText }}
  </a>
  <!-- Internal link, pake nuxt-link -->
  <nuxt-link v-else :to="to"
             role="button" :aria-label="buttonText" :class="buttonClass">
    {{ buttonText }}
  </nuxt-link>
</template>

<script setup lang="ts">
import { computed } from 'vue';
const props = defineProps<{
  buttonText: string;
  to: string;
  isOutbound?: boolean;
}>();
const buttonClass = computed(() => 
  "btn bg-primary hover:bg-cta text-white text-base font-medium"
);
</script>
