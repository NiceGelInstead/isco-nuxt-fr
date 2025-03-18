// pages/Players.vue
<template>
  <div class="isco-container pt-16">
    <div v-if="error">Error: {{ error.message }}</div>
    <div v-else-if="players.length" class="grid grid-cols-2 gap-8 p-8">
      <div
        v-for="player in players"
        class="overflow-hidden rounded-lg bg-[#FF5482] p-4 shadow-md"
      >
        <img
          :src="player.Photo?.url ? strapiUrl + player.Photo.url : ''"
          alt=""
          class="h-48 w-full object-cover"
        />
        <div class="p-4 text-center">
          <h3
            :class="{
              'line-through': player.isAlive,
              'text-3xl font-semibold text-black': true,
            }"
          >
            {{ player.Name }}
          </h3>
          <span class="text-sm text-gray-700">{{ player.documentId }}</span>
          <p
            :class="{
              'text-red-500': !player.isAlive,
              'text-green-500': player.isAlive,
              'my-4 rounded-full bg-white p-2 text-3xl font-semibold': true,
            }"
          >
            Time of Death: {{ player.TimeOfDeath }}
          </p>
          <NuxtLink
            :to="`/playerprofile/${player.documentId}`"
            class="btn rounded-full border-2 border-black font-semibold hover:bg-black hover:text-white"
          >
            Check Their Profile
          </NuxtLink>
        </div>
      </div>
    </div>
    <div v-else>Loading...</div>
  </div>
</template>

<script setup lang="ts">
// Strapi Base URL (for image purposes)
// Api Call (the real deal is here)
import { useApiData } from "~/composables/useApiRequest";
import { type Player, defaultPlayer } from "~/types/playerTypes";

const config = useRuntimeConfig();
const strapiUrl = config.public.strapiUrl;
const { data, error } = await useApiData<Player[]>("/api/players?populate=*");
const players = computed(() => data.value?.data ?? [defaultPlayer]); // This is [array] for MANY players
</script>
