<template>
  <main id="home-page" class="bg-gray-50">
    <section
      id="hero"
      class="bg-secondary py-0 pt-[calc(var(--header-height))] min-h-screen"
    >
      <div class="isco-container grid place-items-center">
        <div
          class="grid grid-cols-1 md:grid-cols-12 gap-x-8 place-items-center py-8 lg:py-16"
        >
          <div class="w-full col-span-7">
            <div class="w-full mb-12 md:mb-14">
              <h1 class="isco-h1 isco-text-center-left text-white mb-6">
                Bangun Kesuksesan Kontraktor Bersama ISCO Group
              </h1>

              <!-- Gambar mobile & Deskripsi -->
              <div class="relative md:static">
                <div
                  class="absolute inset-0 bg-gradient-to-t from-secondary to-transparent md:hidden"
                />
                <img
                  src="@/public/images/test2.png"
                  class="w-9/10 object-cover md:hidden place-self-center"
                  alt="Gambar seseorang kontraktor konstruksi dengan logo berbagai lembaga pembangunan pemerintah Indonesia"
                />
                <p
                  class="isco-short-desc isco-text-center-left absolute md:static bottom-1 text-white self-center"
                >
                  Majukan Pembangunan Kontraktor Jasa Konstruksi dan Jasa
                  Konsultan Di Indonesia Bersama Kami.
                </p>
              </div>
            </div>

            <!-- Tombol CTA -->
            <div class="flex flex-col md:flex-row gap-2.5 md:gap-8">
              <ButtonCTAIcon />
              <ButtonSecondary button-text="Lihat Pelayanan" to="/pelayanan" />
            </div>
          </div>

          <!-- Gambar untuk Desktop -->
          <div class="w-full col-span-5">
            <img
              src="@/assets/images/test2.png"
              class="object-contain w-full h-125 hidden md:block justify-self-end"
              alt="Gambar seseorang kontraktor konstruksi dengan logo berbagai lembaga pembangunan pemerintah Indonesia"
            />
          </div>
        </div>
      </div>
    </section>

    <section id="layanan" class="">
      <div class="isco-container">
        <!-- Heading & Tagline -->
        <div class="w-full text-center mb-9 md:mb-10">
          <h2 class="isco-short-desc place-self-center mb-4 text-accent">
            Layanan Kami
          </h2>
          <h3 class="isco-h2">Solusi Tepat untuk Setiap Tender Anda</h3>
        </div>
        <!-- components/HomeServiceCard.vue -->
        <HomeServiceSection />
        <!-- Tombol CTA -->
        <div class="flex justify-center mt-8 md:mt-14">
          <ButtonCTA button-text="Lihat Semua Layanan" to="/pelayanan" />
        </div>
      </div>
    </section>

    <section id="mengapa-kami" class="">
      <div class="isco-container">
        <div
          class="grid gap-x-6 grid-cols-1 lg:grid-cols-12 place-items-center"
        >
          <!-- Left: Dropdown (pada mobile gambar muncul di dalam item aktif) -->
          <div class="w-full h-full col-span-6 justify-center">
            <div class="w-full mb-6 isco-text-center-left">
              <h2 class="isco-short-desc mb-4 text-accent">
                Mengapa Memilih Kami?
              </h2>
              <h3 class="isco-h2">
                Memajukan Perkembangan Kontraktor Di Indonesia
              </h3>
            </div>
            <div class="mb-14">
              <div
                v-for="(item, index) in dropdownItems"
                :key="item.id"
                class="mb-6 border-b pb-6"
                :class="{ 'border-cta': activeIndex === index }"
                :aria-expanded="activeIndex === index"
              >
                <!-- Button judul & icon -->
                <button
                  class="flex justify-between items-center w-full focus:outline-none"
                  @click="select(index)"
                >
                  <h4
                    :class="[
                      'isco-h3 transition-colors cursor-pointer',
                      activeIndex === index ? 'text-accent' : 'hover:text-cta',
                    ]"
                  >
                    {{ item.title }}
                  </h4>
                  <svg
                    :class="[
                      'h-6 w-6 transition-transform duration-300 hover:text-cta cursor-pointer',
                      activeIndex === index
                        ? 'transform rotate-180 text-cta'
                        : 'transform rotate-0',
                    ]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <!-- Konten dropdown untuk item aktif -->
                <transition name="slide-fade">
                  <div v-if="activeIndex === index">
                    <p class="text-gray-600 leading-relaxed mt-1">
                      {{ item.text }}
                    </p>
                    <!-- Gambar untuk mobile (hanya tampil di mobile) -->
                    <transition name="fade">
                      <img
                        v-if="activeIndex === index"
                        key="mobileImage"
                        :src="item.image"
                        alt="Dropdown Image"
                        class="my-6 w-2/3 mx-auto object-contain block lg:hidden"
                        loading="lazy"
                      />
                    </transition>
                  </div>
                </transition>
              </div>
            </div>
          </div>
          <div>.</div>
          <!-- Right: Gambar untuk desktop (hanya tampil di desktop) -->
          <div class="hidden lg:flex h-125 lg:place-content-end col-span-5">
            <transition name="fade">
              <img
                v-if="currentImage"
                key="desktopImage"
                :src="currentImage"
                alt="Dropdown Image"
                class="object-contain md:max-w-md lg:max-w-lg"
                loading="lazy"
              />
            </transition>
          </div>
          <div class="flex place-self-start col-span-3 mt-14">
            <ButtonCTA button-text="Lihat Profil Perusahaan" to="#" />
          </div>
        </div>
      </div>
    </section>

    <section id="hubungi-kami mt-16" class="bg-[#073573]">
      <BlockCTA />
    </section>

    <section id="artikel-dan-berita" class="">
      <div class="isco-container">
        <div class="w-full text-center mb-9 md:mb-10">
          <h2 class="isco-short-desc place-self-center mb-4 text-accent">
            Berita & Artikel
          </h2>
          <h3 class="isco-h2">
            Temukan Informasi Terkini Tentang Dunia Konstruksi
          </h3>
        </div>
        <div class="flex justify-between w-full pt-16 pb-10">
          <div class="isco-h2 text-black">Berita Terbaru</div>
          <div class="isco-button-text text-primary">
            Lihat Semua <span class="ml-3">#</span>
          </div>
        </div>
        <div
          class="w-full rounded-xl bg-[url(/images/munas-perdana-p2.jpeg)] h-108 object-cover object-center flex items-end"
        >
          <div
            class="w-full py-10 px-8 bg-gradient-to-t from-black/100 to-transparent rounded-xl"
          >
            <div class="W-full isco-paragraph text-white mb-1.5">
              Artikel
              <span class="px-2.5">|</span>
              24 Desember 2024
            </div>
            <div class="w-full">
              <h3 class="isco-h3 text-white mb-2.5">
                Pinned Article, This Article are Marked as “Featured”
              </h3>
              <p class="isco-paragraph text-white max-w-full">
                Add Strapi configuration for this “Featured” article. Also this
                is supposedly short description (meta description in SEO terms)
              </p>
            </div>
          </div>
        </div>
        <div v-if="articles.length === 0" class="text-center mt-10">Loading articles...</div>
        <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-10">
          <BlogCard
            v-for="article in articles" 
            :key="article.id" 
            :article="article"
          />
        </div>
        </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { fetchAllArticles } from "~/composables/useFetchArticles";
import { type Article, defaultArticle } from "~/types/articleTypes";
const articles = ref<Article[]>([]);
onMounted(async () => {
  const fetchedArticles = await fetchAllArticles(); // API request
  articles.value = fetchedArticles.map((article) => ({
    // Merging article with defautArticle for placeholder
    ...defaultArticle,
    ...article,
  }));
});

const dropdownItems = ref([
  {
    id: 1,
    title: "Jaringan Asosiasi Pilihan Terakreditasi A",
    text: "Asosiasi knstruksi dan konsultan pilihan terbaik terakreditasi A",
    image: "/images/Image-Content-Asosiai.png",
  },
  {
    id: 2,
    title: "Prioritas Utama Kepuasan Klien ",
    text: "Personil aseseor berpengalaman lebih dari 10+ tahun memberi kepuasan klien.",
    image: "/images/test2.png",
  },
  {
    id: 3,
    title: "Melayani Seluruh Indonesia",
    text: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/images/test2.png",
  },
]);

// Manage active dropdown item (default: first item active on desktop)
const activeIndex = ref<number | null>(0);

onMounted(() => {
  if (window.innerWidth < 768) {
    activeIndex.value = null;
  }
});

// Get the current image for desktop view
const currentImage = computed(() => {
  return activeIndex.value !== null
    ? dropdownItems.value[activeIndex.value]?.image
    : "";
});

// Handle dropdown selection
const select = (index: number) => {
  if (window.innerWidth < 768) {
    // Toggle selection on mobile
    activeIndex.value = activeIndex.value === index ? null : index;
  } else {
    // Always set active item on desktop
    activeIndex.value = index;
  }
};
</script>
