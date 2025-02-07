<template>
  <header
    :class="[
      'fixed top-0 left-0 w-full transition-all duration-300 z-50',
      isHome && isTransparent
        ? 'bg-transparent text-white'
        : 'bg-white text-primary shadow-md',
    ]"
  >
    <!-- Navbar Upper untuk desktop -->
    <transition name="slide-down">
    <nav
      v-show="showNavbarUpper"
      class="hidden md:flex p-2 bg-secondary"
    >
      <div class="container flex justify-between">
        <ul class="text-white">
          <nuxt-link to="/">Hubungi Kami</nuxt-link>
        </ul>
        <ul class="flex gap-4">
          <li>
            <nuxt-link to="/" class="hover:underline text-white">
              iscogroup@gmail.com
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/" class="hover:underline text-white">
              +62-812367723
            </nuxt-link>
          </li>
        </ul>
      </div>
    </nav>
  </transition>

    <!-- Navbar utama -->
    <nav class="py-4 flex items-center">
      <div class="container flex justify-between items-center">
        <div class="flex items-center gap-1.5">
          <img
            src="@/assets/images/logo-IscoGroup.png"
            alt="Logo"
            class="size-11"
          >
          <a class="text-2xl font-bold">
            <nuxt-link to="/">Isco Group</nuxt-link>
          </a>
        </div>
        <ul class="hidden md:flex gap-4 mx-auto">
          <li>
            <nuxt-link to="/" class="hover:underline">Home</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/players" class="hover:underline">Players</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/players" class="hover:underline">Players</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/players" class="hover:underline">Players</nuxt-link>
          </li>
        </ul>
        <nuxt-link
:to="to"
          role="button" :aria-label="buttonText" class="hidden md:block bg-primary hover:bg-cta hover:scale-105 hover:shadow-md hover:transition-all duration-300 rounded-lg text-white px-5 py-3.5 text-base font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
        Hubungi Kami
        </nuxt-link>
        <button
          class="md:hidden focus:outline-none transition-all duration-300"
          @click="toggleMobileMenu"
        >
          <svg
            class="size-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
        <div
          v-if="isMobileMenuOpen"
          class="md:hidden absolute top-full right-0 w-full bg-white shadow-md"
        >
          <ul class="flex flex-col gap-4 p-4">
            <nuxt-link to="/" class="hover:underline text-primary p-2">
              Home
            </nuxt-link>
            <nuxt-link to="/players" class="hover:underline text-primary p-2">
              Players
            </nuxt-link>
          </ul>
        </div>
      </div>
    </nav>

  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const isTransparent = ref(true);
const isMobileMenuOpen = ref(false); // State untuk toggle menu mobile
const showNavbarUpper = ref(true); // Navbar upper tampil secara default

// Periksa apakah saat ini di halaman home ('/')
const isHome = computed(() => route.path === "/");

// Inisialisasi lastScrollY dengan nilai default
let lastScrollY = 0;

// Fungsi untuk mendeteksi arah scroll dan mengatur visibilitas navbar upper
const handleScroll = () => {
  // Pastikan window tersedia
  if (typeof window === "undefined") return;

  // Update kondisi transparansi header
  isTransparent.value = window.scrollY < 100;

  // Jika scroll ke atas, tampilkan navbar upper; jika ke bawah, sembunyikan
  if (window.scrollY < lastScrollY) {
    showNavbarUpper.value = true;
  } else {
    showNavbarUpper.value = false;
  }

  // Update nilai scroll sebelumnya
  lastScrollY = window.scrollY;
};

// Fungsi untuk toggle menu mobile
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

onMounted(() => {
  if (typeof window !== "undefined") {
    // Set nilai awal lastScrollY
    lastScrollY = window.scrollY;

    // Tambahkan event listener scroll hanya jika berada di halaman home
    if (isHome.value) {
      window.addEventListener("scroll", handleScroll);
    }
  }
});

onUnmounted(() => {
  if (typeof window !== "undefined") {
    window.removeEventListener("scroll", handleScroll);
  }
});
</script>

