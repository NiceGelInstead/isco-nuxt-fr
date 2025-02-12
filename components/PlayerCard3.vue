<template>
  <div
    class="flex flex-col items-center p-0 rounded-lg shadow-xl bg-white w-full"
  >
    <!-- /components/PlayerImage.vue -->
    <PlayerImage :player="player" css-class="h-64 object-cover rounded-xl" />
    <div class="flex flex-col gap-1 w-full p-2">
      <div class="flex gap-1 text-sm">
        <!-- Slot status sebagai fallback -->
        <span class="text-primary font-bold">
          <slot name="status">{{ player.isAlive ? "Alive" : "Deceased" }}</slot>
        </span>
        <span class="font-thin">|</span>
        <span class="text-sm font-medium">{{ player.TimeOfDeath }}</span>
      </div>
      <h3 class="text-lg font-semibold">{{ player.Name }}</h3>
    </div>
  </div>
</template>

<script setup lang="ts">
// Props, asking who player object is
import { defineProps } from "vue";
import type { Player } from "~/types/playerTypes";
defineProps<{ player: Player }>();


</script>
