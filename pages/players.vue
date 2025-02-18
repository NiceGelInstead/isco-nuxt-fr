// pages/Players.vue
<template>
  <div class="isco-container pt-16">
    <div v-if="error">Error: {{ error.message }}</div>
    <div v-else-if="players.length" class="grid grid-cols-2 gap-8 p-8">
      <div
        v-for="player in players"
        class="p-4 bg-[#FF5482] shadow-md rounded-lg overflow-hidden"
      >
        <img
          :src="player.Photo?.url ? strapiUrl + player.Photo.url : ''"
          alt=""
          class="w-full h-48 object-cover"
        />
        <div class="p-4 text-center">
          <h3
            :class="{
              'line-through': player.isAlive,
              'text-black text-3xl font-semibold': true,
            }"
          >
            {{ player.Name }}
          </h3>
          <span class="text-sm text-gray-700">{{ player.documentId }}</span>
          <p
            :class="{
              'text-red-500': !player.isAlive,
              'text-green-500': player.isAlive,
              'text-3xl font-semibold bg-white my-4 p-2 rounded-full': true,
            }"
          >
            Time of Death: {{ player.TimeOfDeath }}
          </p>
          <NuxtLink
            :to="`/playerprofile/${player.documentId}`"
            class="btn border-black rounded-full border-2 hover:bg-black hover:text-white font-semibold"
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
