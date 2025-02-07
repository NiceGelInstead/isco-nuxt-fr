<!-- /components/PlayersCarousel.vue -->
<template>
  <div class="player-carousel">
    <SearchBar v-model:searchQuery="searchQuery" />
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
        @click="prevPage"
        :disabled="currentPage === 1"
        class="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
      >
        Previous
      </button>
      <span class="px-4 py-2">Page {{ currentPage }} of {{ totalPages }}</span>
      <button
        @click="nextPage"
        :disabled="currentPage === totalPages"
        class="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
      >
        Next
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
// Props, asking players per page for pagiii
const props = defineProps<{ playersPerPage: number }>();

// Fetch API Data
import { useApiData } from "~/composables/useApiRequest";
import { type Player, defaultPlayer } from "~/types/playerTypes";
const { data, error } = await useApiData<Player[]>("/api/players?populate=*");

// Player Search
import { useSearchPlayerName } from "~/composables/useSearchPlayerName";
const { searchQuery, getFilteredPlayers } = useSearchPlayerName(
  data?.value?.data ?? [defaultPlayer],
);

// Pagination
import { computed, ref, watch } from "vue";
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
