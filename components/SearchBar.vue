<script setup lang="ts">

// Constantly Emit Results
import { defineProps, defineEmits } from 'vue'
defineProps<{ searchQuery: string }>()
const emit = defineEmits(['update:searchQuery'])

</script>


<template>

<div class="">
    Cari Player
</div>
<input
    :value="searchQuery"
    @input="emit('update:searchQuery', ($event.target as HTMLInputElement).value)"
    type="text"
    placeholder="Player Name"
    class="w-3xs p-1 border-b border-gray-800 focus:outline-none focus:ring-2 focus:ring-primary"
/>

</template>
