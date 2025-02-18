<!-- /components/PlayersCarousel.vue -->
<template>
  <div class="player-carousel">
    <SearchBar
      v-model:search-query="searchQuery"
      search-text="Cari Anggota"
      search-placeholder="Masukkan Nama Anggota"
    />
    <div v-if="error" class="text-red-500">Error: {{ error.message }}</div>
    <div v-else-if="paginatedPlayers.length" class="grid lg:grid-cols-3 gap-8">
      <!-- /components/PlayerCard.vue -->
      <PlayerCard
        v-for="player in paginatedPlayers"
        :key="player.id"
        :player="player"
      />
    </div>
    <p v-else class="mt-4 text-gray-500 text-center">No players found.</p>
    <!-- Pagination nation nation nation -->
    <div v-if="totalPages > 1" class="flex justify-center mt-4 gap-2">
      <button
        :disabled="currentPage === 1"
        class="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        @click="prevPage"
      >
        Previous
      </button>
      <span class="px-4 py-2">Page {{ currentPage }} of {{ totalPages }}</span>
      <button
        :disabled="currentPage === totalPages"
        class="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        @click="nextPage"
      >
        Next
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
// Props, asking players per page for pagiii
// Fetch API Data
import { useApiData } from "~/composables/useApiRequest";
import { type Player, defaultPlayer } from "~/types/playerTypes";

// Player Search
import { useSearchPlayerName } from "~/composables/useSearchPlayerName";

// Pagination
import { computed, ref, watch } from "vue";

const props = defineProps<{ playersPerPage: number }>();
const { data, error } = await useApiData<Player[]>("/api/players?populate=*");
const { searchQuery, getFilteredPlayers } = useSearchPlayerName(
  data?.value?.data ?? [defaultPlayer],
);
const currentPage = ref(1);
const totalPages = computed(() =>
  Math.ceil(getFilteredPlayers.value.length / props.playersPerPage),
);
const paginatedPlayers = computed(() => {
  const start = (currentPage.value - 1) * props.playersPerPage;
  return getFilteredPlayers.value.slice(start, start + props.playersPerPage);
});
watch(getFilteredPlayers, () => {
  currentPage.value = 1; // Reset pagination when searching
});
const prevPage = () => {
  if (currentPage.value > 1) currentPage.value--;
};
const nextPage = () => {
  if (currentPage.value < totalPages.value) currentPage.value++;
};
</script>
