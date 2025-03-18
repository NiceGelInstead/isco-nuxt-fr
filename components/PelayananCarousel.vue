<template>
  <div ref="layananSection" class="player-carousel">
    <SearchBar
      v-model:search-query="searchQuery"
      search-text="Cari Layanan"
      search-placeholder="Masukkan Nama Layanan"
    />
    <!-- Misalnya, untuk menampilkan nilai searchQuery -->

    <!-- Grid Layanan -->
    <div
      class="grid gap-4 md:gap-8"
      :class="{
        'grid-cols-1': isMobile,
        'grid-cols-3': !isMobile,
      }"
    >
      <ServiceCard
        v-for="(service, index) in pages"
        :key="index"
        :image-src="service.imageSrc"
        :title="service.title"
        :description="service.description"
        :to="service.to"
      />
    </div>

    <!-- Pagination -->
    <div
      class="mt-16 flex items-center justify-center space-x-4 border-t border-border-color pt-6"
    >
      <button
        :disabled="currentPage === 1"
        class="rounded bg-primary px-4 py-2 text-white disabled:opacity-50"
        @click="prevPage"
      >
        Previous
      </button>
      <span>Page {{ currentPage }} of {{ totalPages }}</span>
      <button
        :disabled="currentPage === totalPages"
        class="rounded bg-primary px-4 py-2 text-white disabled:opacity-50"
        @click="nextPage"
      >
        Next
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import useServicePagination from "~/composables/useServicePagination";
const {
  currentPage,
  totalPages,
  currentPageData: pages,
  nextPage,
  prevPage,
  isMobile,
  searchQuery,
} = useServicePagination();

// // Untuk tampilan mobile, ambil 3 data teratas dari data terfilter
// const mobileServices = computed(() => {
//   // pages: array of paginated data, tapi untuk mobile kita menggunakan filteredServices langsung
//   // Anda bisa menyesuaikan logika sesuai kebutuhan
//   return pages.value?.[0] || []
// })
// Buat ref untuk elemen container layanan
const layananSection = ref<HTMLElement | null>(null);

// Watch currentPage, ketika berubah scroll ke elemen layananSection
watch(currentPage, () => {
  if (layananSection.value) {
    layananSection.value.scrollIntoView({ behavior: "smooth" });
  }
});
</script>
