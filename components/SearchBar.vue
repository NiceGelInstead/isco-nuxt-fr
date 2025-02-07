<script setup lang="ts">
// Props, asking searchQuery
// Emits, giving searchQuery
import { defineEmits } from "vue";
defineProps<{ searchQuery: string }>();
const emit = defineEmits(["update:searchQuery"]);
</script>

<template>
  <div class="">Cari Player</div>
  <input
    :value="searchQuery"
    type="text"
    placeholder="Player Name"
    class="w-3xs mb-4 p-1 border-b border-gray-800 focus:outline-none focus:ring-2 focus:ring-primary"
    @input="
      emit('update:searchQuery', ($event.target as HTMLInputElement).value)
    "
  >
</template>
