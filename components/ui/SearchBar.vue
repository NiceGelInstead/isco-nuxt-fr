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
      class="mb-4 w-3xs border-b border-gray-800 p-1 focus:border-b-2 focus:border-b-primary focus:outline-none"
      @input="
        emit('update:searchQuery', ($event.target as HTMLInputElement).value)
      "
    />
  </div>
</template>
