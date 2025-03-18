<template>
  <div>
    <!-- Desktop View: Carousel Slider -->
    <div class="relative hidden md:block">
      <!-- Container slider -->
      <div class="overflow-hidden">
        <!-- Inner container yang akan digeser -->
        <div
          class="flex transition-transform duration-500 ease-out"
          :style="{ transform: `translateX(-${(currentPage - 1) * 100}%)` }"
        >
          <!-- Setiap halaman carousel -->
          <div
            v-for="(page, pageIndex) in pages"
            :key="pageIndex"
            class="grid w-full flex-shrink-0 gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            <ServiceCard
              v-for="(service, index) in page"
              :key="index"
              :image-src="service.imageSrc"
              :title="service.title"
              :description="service.description"
              :to="service.to"
            />
          </div>
        </div>
      </div>

      <!-- Tombol panah Prev (kiri) -->
      <button
        :disabled="currentPage === 1"
        class="absolute top-1/2 -left-5/100 hidden -translate-y-1/2 transform cursor-pointer p-2 transition-all duration-300 hover:scale-125 focus:outline-none sm:flex"
        @click="prevPage"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="size-12"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          :class="currentPage === 1 ? 'text-gray-400' : 'text-primary'"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <!-- Tombol panah Next (kanan) -->
      <button
        :disabled="currentPage === totalPages"
        class="absolute top-1/2 -right-5/100 hidden -translate-y-1/2 transform cursor-pointer p-2 transition-all duration-300 hover:scale-125 focus:outline-none sm:flex"
        @click="nextPage"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="size-12"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          :class="currentPage === totalPages ? 'text-gray-400' : 'text-primary'"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      <!-- Pagination Bullets -->
      <div class="mt-4 hidden justify-center gap-2 sm:flex">
        <div
          v-for="page in totalPages"
          :key="page"
          class="h-4 w-4 rounded-full transition-all duration-300"
          :class="page === currentPage ? 'scale-125 bg-primary' : 'bg-gray-300'"
        />
      </div>
    </div>

    <!-- Mobile View: Menampilkan 3 card saja -->
    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:hidden">
      <ServiceCard
        v-for="(service, index) in mobileServices"
        :key="index"
        :image-src="service.imageSrc"
        :title="service.title"
        :description="service.description"
        :to="service.to"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import servicesData from "~/types/servicesData.json";

// Desktop: Pagination (3 items per page)
const itemsPerPage = 3;
const currentPage = ref(1);

// Paginate services for desktop carousel
const pages = computed(() => {
  return Array.from(
    { length: Math.ceil(servicesData.length / itemsPerPage) },
    (_, index) =>
      servicesData.slice(index * itemsPerPage, (index + 1) * itemsPerPage),
  );
});

const totalPages = computed(() => pages.value.length);

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
};

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};

// Mobile: Show only the first 3 items
const mobileServices = computed(() => servicesData.slice(0, 3));
</script>
