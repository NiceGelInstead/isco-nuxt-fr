<!-- /components/PlayersCarousel.vue -->
<template>
  <div class="player-carousel">
    <!-- <SearchBar v-model:search-query="searchQuery" search-text="Cari Anggota" search-placeholder="Nama Anggota" /> -->
    <div v-if="error" class="text-red-500">Error: {{ error.message }}</div>
    <div v-else-if="paginatedPlayers.length">
      <!-- Bagian atas: topPlayers -->
      <div class="grid grid-cols-2  gap-8 mx-auto">
        <!-- Kolom Kiri: PlayerCardStyle1 -->
        <div>
    <PlayerCardStyle1 :player="topPlayers[0]">
      <template #status>
        Alive
      </template>
    </PlayerCardStyle1>
  </div>
        <!-- Kolom Kanan: PlayerCardStyle2 dalam 3 baris -->
        <div class="grid grid-rows-3 gap-8">
    <component
      v-for="(player, index) in topPlayers.slice(1)"
      :key="player.id"
      :is="PlayerCardStyle2"
      :player="player"
    >
      <template #status>
        Alive
      </template>
    </component>
  </div>
      </div>

      <!-- Bagian bawah: PlayerCardStyle3 ditampilkan dalam grid tiga kolom -->
      <div
  v-if="bottomPlayers.length"
  class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 mx-auto"
>
  <component
    v-for="player in bottomPlayers"
    :key="player.id"
    :is="PlayerCardStyle3"
    :player="player"
  >
    <template #status>
      Deceased
    </template>
  </component>
</div>
    </div>
    <p v-else class="mt-4 text-gray-500 text-center">No players found.</p>

    <!-- Pagination -->
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
import { computed, ref, watch } from "vue";
import { useApiData } from "~/composables/useApiRequest";
import { type Player, defaultPlayer } from "~/types/playerTypes";
import { useSearchPlayerName } from "~/composables/useSearchPlayerName";

// Import tiga komponen dengan style berbeda
import PlayerCardStyle1 from "~/components/PlayerCard.vue";
import PlayerCardStyle2 from "~/components/PlayerCard2.vue";
import PlayerCardStyle3 from "~/components/PlayerCard3.vue";

const props = defineProps<{ playersPerPage: number }>();

// Ambil data API
const { data, error } = await useApiData<Player[]>("/api/players?populate=*");

// Setup pencarian
const { searchQuery, getFilteredPlayers } = useSearchPlayerName(
  data?.value?.data ?? [defaultPlayer]
);

// Pagination
const currentPage = ref(1);
const totalPages = computed(() =>
  Math.ceil(getFilteredPlayers.value.length / props.playersPerPage)
);
const paginatedPlayers = computed(() => {
  const start = (currentPage.value - 1) * props.playersPerPage;
  return getFilteredPlayers.value.slice(start, start + props.playersPerPage);
});
watch(getFilteredPlayers, () => {
  currentPage.value = 1; // Reset pagination ketika pencarian berubah
});

// Memisahkan pemain ke dalam dua grup untuk layout
const topPlayers = computed(() => paginatedPlayers.value.slice(0, 4)); // index 0-4
const bottomPlayers = computed(() => paginatedPlayers.value.slice(4)); // index 5 ke atas

// Fungsi pagination
const prevPage = () => {
  if (currentPage.value > 1) currentPage.value--;
};
const nextPage = () => {
  if (currentPage.value < totalPages.value) currentPage.value++;
};
</script>

<!-- <script setup lang="ts">
import { computed, ref, watch } from "vue";
import { useApiData } from "~/composables/useApiRequest";
import { type Player, defaultPlayer } from "~/types/playerTypes";
import { useSearchPlayerName } from "~/composables/useSearchPlayerName";

// Import ketiga komponen card style
import PlayerCardStyle1 from "~/components/PlayerCard.vue";
import PlayerCardStyle2 from "~/components/PlayerCard2.vue";
import PlayerCardStyle3 from "~/components/PlayerCard3.vue";

const props = defineProps<{ playersPerPage: number }>();

// Mengambil data API
const { data, error } = await useApiData<Player[]>("/api/players?populate=*");

// Setup search
const { searchQuery, getFilteredPlayers } = useSearchPlayerName(
  data?.value?.data ?? [defaultPlayer],
);

// Pagination
const currentPage = ref(1);
const totalPages = computed(() =>
  Math.ceil(getFilteredPlayers.value.length / props.playersPerPage)
);
const paginatedPlayers = computed(() => {
  const start = (currentPage.value - 1) * props.playersPerPage;
  return getFilteredPlayers.value.slice(start, start + props.playersPerPage);
});
watch(getFilteredPlayers, () => {
  currentPage.value = 1; // Reset pagination saat mencari
});

// Fungsi pagination
const prevPage = () => {
  if (currentPage.value > 1) currentPage.value--;
};
const nextPage = () => {
  if (currentPage.value < totalPages.value) currentPage.value++;
};

// Fungsi untuk memilih komponen card berdasarkan indeks
function getComponentByIndex(index: number) {
  // Perlu diingat: index dimulai dari 0.
  // Jadi: index 0 = player pertama (style 1),
  // index 1-4 = pemain ke-2 sampai ke-5 (style 2),
  // index 5-7 = pemain ke-6 sampai ke-8 (style 3).
  if (index === 0) {
    return PlayerCardStyle1;
  } else if (index >= 1 && index <= 4) {
    return PlayerCardStyle2;
  } else if (index >= 5 && index <= 7) {
    return PlayerCardStyle3;
  } else {
    // Jika jumlah pemain lebih dari 8, bisa diberlakukan default atau logika lainnya.
    return PlayerCardStyle2;
  }
}
</script> -->
<!-- <script setup lang="ts">
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
</script> -->
