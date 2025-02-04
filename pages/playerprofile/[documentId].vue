<template>
    <div class=" w-full min-h-screen bg-[#FF5482] place-content-center">
      <div v-if="player" class="isco-container p-8 grid grid-cols-3 gap-8 bg-white rounded-lg" ref="pdfSection">
        <img
            :src="player.Photo?.url ? strapiUrl + player.Photo.url : ''"
            alt=""
            class="w-full h-48 object-cover"
        />
        <div class="bg-white">
          <div :class="{
            'text-red-500': !player.isAlive,
            'text-green-500': player.isAlive,
            'text-2xl font-semibold mb-2': true
          }">
            {{ player.isAlive ? 'Alive' : 'Dead' }}
          </div>
          <h1 class="mb-8">{{ player.Name }}</h1>
          <p class="text-lg mt-8">{{ player.EmergencyContact }}</p>
          <div class="text-lg mb-8 underline">{{ player.uid }}</div>
          <!-- <div class="btn border-black rounded-full border-2 hover:bg-black hover:text-white font-semibold" @click="exportToPDF('profile.pdf', pdfSection)">
              Print
          </div> -->
        </div>
        <div class="flex place-content-end">
          <!-- <Qrcode
            :value="fullUrl"
            variant="pixelated"
            height="100"
          /> -->
        </div>    
      </div>
      <div v-else>
        Loading player...
      </div>
    </div>
  </template>
  
<script setup lang="ts">

// Strapi Base URL (for image purposes)
const config = useRuntimeConfig();
const strapiUrl = config.public.strapiUrl;

// Taking current URL (for dynamic routing and QR code)
import { useRequestURL, useRoute } from "#app";
const route = useRoute()
const url = useRequestURL();
const fullUrl = computed(() => `${url.origin}${route.path}`); // All path/route
const documentId = route.params.documentId // Current path/route

// Api Call (the real deal is here)
import { useApiData } from '~/composables/useApiRequest'
import { type Player, defaultPlayer } from '~/types/playerTypes';
const { data, error } = await useApiData<Player>(`/api/players/${documentId}?populate=*`)
const player = computed(() => data.value?.data ?? defaultPlayer) // This is for ONE player

</script>