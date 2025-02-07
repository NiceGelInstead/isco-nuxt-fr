<template>
  <!-- Halaman Beranda -->
  <div class="home-page">
    <!-- Hero Section -->
    <section id="hero"class="bg-secondary md:py-16 py-14">

      <div class="container flex flex-col md:flex-row items-center md:justify-between gap-60 mt-12">
        <!-- Konten Kiri (Text + Tombol) -->
        <div class="w-full md:w-2/3 lg:w-1/2">
          <h1
            class="text-center md:text-left text-4xl md:text-5xl md:leading-snug font-bold text-white mb-4 md:mb-2 order-1"
          >
            Bangun Kesuksesan Bersama ISCO Group
          </h1>

          <!-- Gambar Mobile -->
          <div class="mx-auto mb-4 md:hidden order-2">
            <img
              src="@/assets/images/test2.png"
              class="w-full object-contain" alt="poto"
            />
          </div>

          <p
            class="text-center md:text-left text-white mt-6 order-3 md:order-3 leading-relaxed"
          >
            Mitra Terdepan para Kontraktor Jasa Konstruksi dan Jasa Konsultasi
            di Indonesia. kami mencapai 250+ lebih kontraktor di seluruh
            Indonesia dan menyelesaikan lebih dari 1000+ proyek dari tender
            ternama.
          </p>

          <div class="flex flex-col mt-12 md:mt-14 md:flex-row gap-6 md:gap-4 order-4 md:order-4 items-center">
          
            <ButtonCTA buttonText="Lihat Semua Layanan" to="/players" />
            <ButtonCTA buttonText="Lihat Semua Layanan" to="/players" />
      
           
          </div>
        </div>

        <!-- Gambar Desktop -->
        <div class="hidden md:flex md:w-1/2 order-2">
            <img
              src="@/assets/images/test2.png"
              class="my-6 w-full mx-auto object-contain block"alt="poto"
            />
        </div>
      </div>
    </section>

    <section id="Layanan" class="container md:py-16 py-14">
    <h2 class="text-base font-medium text-primary text-center mb-4">
      Layanan Kami
    </h2>
    <h3 class="text-3xl font-bold text-center mb-12">
      Solusi Tepat untuk Setiap Tender Anda
    </h3>

    <!-- Desktop View: Carousel Slider -->
    <div class="hidden md:block relative">
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
            class="w-full flex-shrink-0 grid grid-cols-3 gap-8"
          >
            <ServiceCard
              v-for="(service, index) in page"
              :key="index"
              :imageSrc="service.imageSrc"
              :title="service.title"
              :description="service.description"
              :to="service.to"
            />
          </div>
        </div>
      </div>

      <!-- Tombol panah Prev (kiri) -->
      <button
        @click="prevPage"
        :disabled="currentPage === 1"
        class="absolute -left-20 top-1/2 transform -translate-y-1/2 p-2 cursor-pointer hover:scale-125  transition-all duration-300 focus:outline-none"
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
          <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <!-- Tombol panah Next (kanan) -->
      <button
        @click="nextPage"
        :disabled="currentPage === totalPages"
        class="absolute -right-20 top-1/2 transform -translate-y-1/2 p-2 hover:scale-125 transition-all duration-300 cursor-pointer focus:outline-none"
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
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <!-- Pagination Bullets -->
      <div class="flex justify-center mt-8 space-x-2">
        <div
          v-for="page in totalPages"
          :key="page"
          class="w-2 h-2 rounded-full transition-all duration-300"
          :class="page === currentPage ? 'bg-primary scale-150' : 'bg-gray-300'"
        ></div>
      </div>
    </div>

    <!-- Mobile View: Menampilkan 3 card saja -->
    <div class="md:hidden grid grid-cols-1 gap-4">
      <ServiceCard
        v-for="(service, index) in mobileServices"
        :key="index"
        :imageSrc="service.imageSrc"
        :title="service.title"
        :description="service.description"
        :to="service.to"
      />
    </div>

    <!-- Tombol CTA -->
    <div class="flex justify-center mt-8">
      <ButtonCTA buttonText="Lihat Semua Layanan" to="/players" />
    </div>
  </section>

   <!-- Tentang Perusahaan -->
    <section id="Mengapa Kami" class="container md:py-16 py-14">
      <div class="flex flex-col md:flex-row items-center md:justify-between gap-60">
        <!-- Left: Dropdown (pada mobile gambar muncul di dalam item aktif) -->
        <div class="w-full md:w-2/3 lg:w-1/2"> 
          <h2 class="text-base font-medium text-primary mb-4 leading-relaxed">Mengapa Memilih Kami?</h2>
          <h3 class="text-2xl md:text-4xl font-bold mb-8">Memajukan Perkembangan Kontraktor Di Indonesia</h3>
          <div>
            <div
              v-for="(item, index) in items"
              :key="item.id"
              class="mb-6 border-b pb-4"
              :class="{ 'border-cta': activeIndex === index }"
            >
              <!-- Button judul & icon -->
              <button
                class="flex justify-between items-center w-full focus:outline-none"
                @click="select(index)"
              >
                <h3
                  :class="[
                    'text-xl text-left font-semibold transition-colors cursor-pointer',
                    activeIndex === index ? 'text-cta' : 'hover:text-cta :'
                  ]"
                >
                  {{ item.title }}
                </h3>
                <svg
                  :class="[
                    'h-6 w-6 transition-transform duration-300 hover:text-cta cursor-pointer',
                    activeIndex === index ? 'transform rotate-180 text-cta' : 'transform rotate-0'
                  ]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <!-- Konten dropdown untuk item aktif -->
              <transition name="slide-fade">
                <div v-if="activeIndex === index">
                  <p class="text-gray-600 leading-relaxed mt-2">
                    {{ item.text }}
                  </p>
                  <!-- Gambar untuk mobile (hanya tampil di mobile) -->
                  <transition name="fade">
                    <img
                      :src="item.image"
                      alt="Dropdown Image"
                      class="my-6 w-2/3 mx-auto object-contain block md:hidden"
                      key="mobileImage"
                      loading="lazy"
                    />
                  </transition>
                </div>
              </transition>
            </div>
          </div>
          <!-- Tombol CTA -->
          <div class="mt-14 flex justify-center md:justify-start">
            <ButtonCTA buttonText="Lihat Semua Layanan" to="/players" />
          </div>
        </div>
        <!-- Right: Gambar untuk desktop (hanya tampil di desktop) -->
        <div class="w-full hidden md:w-1/2 md:flex justify-end">
    <transition name="fade">
      <img
        :src="currentImage"
        alt="Dropdown Image"
        class="w-full object-contain max-w-xl"
        key="desktopImage"
        loading="lazy"
      />
    </transition>
  </div>
      </div>
    </section>

    <!-- Blok Cta-->
    <section id="Block Cta">
      <BlockCTA />
    </section>


  </div>
</template>

<script setup>
import { ref, computed } from "vue";

// Data dummy layanan (sesuaikan dengan data Anda)
const allServices = ref([
  {
    imageSrc: new URL("@/assets/images/logo-IscoGroup.png", import.meta.url).href,
    title: "Web Development",
    description: "Sertifikat atau lisensi resmi yang dikeluarkan oleh Lembaga...",
    to:"/players",
  },
  {
    imageSrc: new URL("@/assets/images/logo-IscoGroup.png", import.meta.url).href,
    title: "Mobile Apps",
    description: "Aplikasi mobile cross-platform yang powerful",
    to:"/players",
  },
  {
    imageSrc: new URL("@/assets/images/logo-IscoGroup.png", import.meta.url).href,
    title: "Digital Marketing",
    description: "Sertifikat atau lisensi resmi yang dikeluarkan oleh Lembaga.",
    to:"/players",
  },
  {
    imageSrc: new URL("@/assets/images/logo-IscoGroup.png", import.meta.url).href,
    title: "SEO Optimization 1",
    description: "Meningkatkan peringkat website di mesin pencari",
    to:"/players",
  },
  {
    imageSrc: new URL("@/assets/images/logo-IscoGroup.png", import.meta.url).href,
    title: "SEO Optimization 2",
    description: "Meningkatkan peringkat website di mesin pencari",
    to:"/players",
  },
  {
    imageSrc: new URL("@/assets/images/logo-IscoGroup.png", import.meta.url).href,
    title: "SEO Optimization 3",
    description: "Meningkatkan peringkat website di mesin pencari",
    to:"/players",
  },
  {
    imageSrc: new URL("@/assets/images/logo-IscoGroup.png", import.meta.url).href,
    title: "SEO Optimization 4",
    description: "Meningkatkan peringkat website di mesin pencari",
    to:"/players",
  },
  {
    imageSrc: new URL("@/assets/images/logo-IscoGroup.png", import.meta.url).href,
    title: "SEO Optimization 5",
    description: "Meningkatkan peringkat website di mesin pencari",
    to:"/players",
  },
  {
    imageSrc: new URL("@/assets/images/logo-IscoGroup.png", import.meta.url).href,
    title: "SEO Optimization 6",
    description: "Meningkatkan peringkat website di mesin pencari",
    to:"/players",
  },
  {
    imageSrc: new URL("@/assets/images/logo-IscoGroup.png", import.meta.url).href,
    title: "SEO Optimization 7",
    description: "Meningkatkan peringkat website di mesin pencari",
    to:"/players",
  },
]);

// Desktop: Pagination (3 card per halaman)
const itemsPerPage = 3;
const currentPage = ref(1);

// Membagi data layanan menjadi halaman-halaman untuk carousel desktop
const pages = computed(() => {
  const result = [];
  for (let i = 0; i < allServices.value.length; i += itemsPerPage) {
    result.push(allServices.value.slice(i, i + itemsPerPage));
  }
  return result;
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

// Mobile: Hanya tampilkan 3 card (misal, 3 card pertama)
const mobileServices = computed(() => {
  return allServices.value.slice(0, 3);
});

// Data dropdown
const items = ref([
  {
    id: 1,
    title: 'Jaringan Asosiasi Pilihan Terakreditasi A',
    text: 'Kami fokus pada kepuasan klien dengan hasil cepat, solusi berkualitas, harga terjangkau, dan keahlian yang didukung pengalaman lebih dari 10 tahun.',
    image: '/images/Image-Content-Asosiai.png'  // pastikan file ini ada di folder public/images/
  },
  {
    id: 2,
    title: 'Prioritas Utama Kepuasan Klien',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
    image: '/images/test2.png'  // pastikan file ini ada di folder public/images/
  },
  {
    id: 3,
    title: 'Melayani Tender di Seluruh Indonesia',
    text: 'Kami fokus pada kepuasan klien dengan hasil cepat, solusi berkualitas, harga terjangkau, dan keahlian yang didukung pengalaman lebih dari 10 tahun.',
    image: '/images/test2.png'  // pastikan file ini ada di folder public/images/
  }
])

// activeIndex akan bergantung pada apakah perangkat mobile atau desktop.
// Secara default, pada desktop aktif item pertama (0) dan pada mobile tidak ada yang terbuka (null).
const activeIndex = ref(0)

onMounted(() => {
  if (window.innerWidth < 768) {
    activeIndex.value = null
  }
})

// Computed property untuk gambar yang ditampilkan di desktop
const currentImage = computed(() => {
  // Jika tidak ada item aktif (pada mobile), kita bisa mengembalikan gambar default atau string kosong.
  // Karena di desktop seharusnya selalu ada item aktif, kita asumsikan currentImage digunakan hanya di desktop.
  return items.value[activeIndex.value]?.image || ''
})

// Fungsi untuk memilih/toggle dropdown
const select = (index) => {
  // Cek apakah perangkat mobile (dengan breakpoint md, yaitu <768px)
  if (window.innerWidth < 768) {
    // Pada mobile, jika item yang sama ditekan lagi, maka toggle off (tutup).
    if (activeIndex.value === index) {
      activeIndex.value = null
    } else {
      activeIndex.value = index
    }
  } else {
    // Pada desktop, selalu set item aktif (tidak ada toggle off)
    activeIndex.value = index
  }
}

</script>

