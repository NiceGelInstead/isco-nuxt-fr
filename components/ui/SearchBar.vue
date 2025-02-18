<script setup lang="ts">
// Props, asking searchQuery
// Emits, giving searchQuery
import { defineEmits } from "vue";
defineProps<{
  searchQuery: string;
  searchText: string;
  searchPlaceholder: string;
}>();

const emit = defineEmits(["update:searchQuery"]);
</script>

<template>
  <div class="mt-0 md:mt-16">
    <div class="mb-1.5 font-semibold">{{ searchText }}</div>
    <input
      :value="searchQuery"
      type="text"
      :placeholder="searchPlaceholder"
      class="w-3xs mb-4 p-1 border-b border-gray-800 focus:outline-none focus:border-b-2 focus:border-b-primary"
      @input="
        emit('update:searchQuery', ($event.target as HTMLInputElement).value)
      "
    >
  </div>
</template>
