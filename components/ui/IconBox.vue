<template>
  <div :class="iconBoxClasses">
    <div class="w-16 h-16 bg-accent">
      {{ svg }} 
      <!-- install https://nuxt.com/modules/nuxt-fontawesome disini -->
    </div>
    <div class="flex flex-col">
      <h4 class="isco-h4">
        {{ tagline }}
      </h4>
      <p class="text-wrap break-words">
        {{ description }}
      </p>
    </div>
  </div>
  </template>
  
  <script setup lang="ts">
  import { computed } from "vue";
  
  // Define props with explicit types
  const props = defineProps<{
    svg: string;
    tagline: string;
    description: string;
    styling: string;
  }>();
  
  const iconBoxClasses = computed(() => [
    "gap-8 bg-white p-4 rounded-xl shadow-md w-full max-w-full overflow-hidden",
    props.styling === "horizontal" ? "flex flex-col lg:flex-row" : "flex flex-col text-center items-center",
  ]);
  </script>