<template>
  <div class="container mx-auto px-4 py-6">
    <!-- Search & Sort Bar -->
    <div class="flex flex-rows gap-4 mb-6">
      <SearchBar
        v-model:search-query="searchQuery"
        search-text="Cari berita/artikel"
        search-placeholder="Masukkan judul..."
      />
      <SortDropdown v-model="selectedCategory" :options="['Semua', 'Berita', 'Artikel']" />
    </div>

    <!-- Jika dalam mode default (tanpa filter & di halaman pertama) -->
    <div v-if="isDefaultView">
      <!-- Tampilan Default untuk Berita -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- Kolom 1: Card Style 1 (1 data berita pertama) -->
        <div class="col-span-2">
          <BlogCard1
            v-for="(item, index) in card1Data"
            :key="'card1-' + index"
            v-bind="item"
            :to="`/blogdetail/${item.id}`"
          />
        </div>
        <!-- Kolom 2: Card Style 2 (3 data berita berikutnya) -->
        <div class="flex flex-col gap-8 col-span-2">
          <BlogCard2
            v-for="(item, index) in card2Data"
            :key="'card2-' + index"
            v-bind="item"
            :to="`/blogdetail/${item.id}`"
          />
        </div>
      </div>

      <!-- Tampilan Default untuk Artikel -->
      <div class="mt-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <BlogCard3
            v-for="(item, index) in card3Data"
            :key="'card3-' + index"
            v-bind="item"
            :to="`/blogdetail/${item.id}`"
          />
        </div>
      </div>
    </div>

    <!-- Jika ada pencarian atau filter aktif atau halaman bukan 1 -->
    <div v-else>
      <!-- Jika tidak ada data yang cocok -->
      <div v-if="filteredData.length === 0" class="mt-4 text-center text-gray-600">
        Berita & artikel yang anda cari tidak ada.
      </div>
      <!-- Jika ada data, tampilkan dengan card style 3 -->
      <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <BlogCard3
          v-for="(item, index) in currentPageData"
          :key="'filtered-' + index"
          v-bind="item"
        />
      </div>
    </div>

    <!-- Pagination (selalu ditampilkan) -->
    <div class="flex justify-center items-center mt-8 space-x-4 border-t pt-4">
      <button
        :disabled="currentPage === 1"
        @click="prevPage"
        class="px-4 py-2 bg-primary text-white rounded disabled:opacity-50"
      >
        Previous
      </button>
      <span>Page {{ currentPage }} of {{ totalPages }}</span>
      <button
        :disabled="currentPage === totalPages"
        @click="nextPage"
        class="px-4 py-2 bg-primary text-white rounded disabled:opacity-50"
      >
        Next
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import blogData from '~/types/blogData.json'
import usePagination from '~/composables/usePagination'

// STATE UNTUK SEARCH DAN SORT
const searchQuery = ref('')
const selectedCategory = ref('Semua')

// FILTERING DATA BERDASARKAN SEARCH DAN SORT
const filteredData = computed(() => {
  const query = searchQuery.value.toLowerCase().trim()
  return blogData.filter((item) => {
    const matchesQuery = query
      ? item.title.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query)
      : true
    const matchesCategory =
      selectedCategory.value === 'Semua'
        ? true
        : item.category.toLowerCase() === selectedCategory.value.toLowerCase()
    return matchesQuery && matchesCategory
  })
})

// PANGGIL COMPOSABLE PAGINATION DENGAN DATA YANG SUDAH DIFILTER
const { currentPage, totalPages, currentPageData, nextPage, prevPage, isMobile } =
  usePagination({ data: filteredData })

// MODE DEFAULT: Search kosong, kategori "Semua", dan halaman 1
const isDefaultView = computed(() => {
  return searchQuery.value.trim() === '' && selectedCategory.value === 'Semua' && currentPage.value === 1
})

// UNTUK TAMPILAN DEFAULT (DATA TIDAK DIFILTER)
// Pisahkan data berdasarkan kategori (perhatikan data JSON memiliki "Berita" dan "Artikel")
const beritaData = computed(() =>
  blogData.filter((item) => item.category.toLowerCase() === 'berita')
)
const artikelData = computed(() =>
  blogData.filter((item) => item.category.toLowerCase() === 'artikel')
)

// Default view: Card 1 untuk berita pertama, Card 2 untuk 3 berita berikutnya, Card 3 untuk 6 artikel pertama
const card1Data = computed(() => beritaData.value.slice(0, 1))
const card2Data = computed(() => beritaData.value.slice(1, 5))
const card3Data = computed(() => artikelData.value.slice(0, 6))
</script>
