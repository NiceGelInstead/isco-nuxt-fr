<template>

<section class="pt-32 pb-32">
    <div class="container">
        <div class="w-full grid grid-cols-1 md:grid-cols-2 items-center">
            <div>
                <h1 class="isco-h3 mb-6">Berita & Artikel</h1>
                <h2 class="isco-h2">Temukan Informasi Terkini <br> tentang Dunia Konstruksi</h2>
            </div>
            <div class="flex h-full place-content-end">
                <p class="max-w-md mt-auto">
                    Berita, pengumuman, dan wawasan terkini dari para kontraktor dan konsultan konstruksi terkemuka.
                </p>
            </div>
        </div>
    </div>
</section>

<section>
    <div class="container">
        <SearchBar v-model:searchQuery="searchQuery" />
        <div v-if="error">Error: {{ error.message }}</div>
        <div v-else-if="getFilteredPlayers.length" class="grid grid-cols-3 gap-4">
            <div
                v-for="player in getFilteredPlayers"
                :key="player.id"
                class="flex flex-col items-center p-4 rounded-lg shadow-xl bg-white w-full"
            >   
                <!-- components/PlayerImage.vue -->
                <PlayerImage :player="player" class="w-full h-64 object-cover rounded-lg" /> 
                <div class="flex flex-col gap-2 w-full mt-2">
                    <div class="flex gap-4">
                            <p
                            :class="player.isAlive ? 'text-green-600' : 'text-red-600'"
                            class="text-sm font-medium"
                        >
                            {{ player.isAlive ? 'Alive' : 'Deceased' }}
                        </p>
                        <p> {{ player.TimeOfDeath }}</p>
                    </div>
                    <h3 class="text-lg font-semibold">{{ player.Name }}</h3>
                    <p class="text-sm text-gray-600">Number: {{ player.Number }}</p>
                    
                </div>
            </div>
        </div>
        <p v-else class="mt-4 text-gray-500 text-center">No players found.</p>       
    </div>
</section>

</template>

<script setup lang="ts">

// API Req
import { useApiData } from '~/composables/useApiRequest'
import { type Player, defaultPlayer } from '~/types/playerTypes';
const { data, error } = await useApiData<Player[]>('/api/players?populate=*')

// Player Searches
import SearchBar from '~/components/SearchBar.vue'
import { useSearchPlayerName } from '~/composables/useSearchPlayerName'
const { searchQuery, getFilteredPlayers } = useSearchPlayerName(data?.value?.data ?? [defaultPlayer])

</script>