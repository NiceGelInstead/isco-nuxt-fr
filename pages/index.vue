<template>
  <main id="home-page" class="">
    <section
      id="hero"
      class="min-h-screen bg-secondary py-0 pt-[calc(var(--header-height))]"
    >
      <div class="isco-container grid place-items-center">
        <div
          class="grid grid-cols-1 justify-between gap-x-8 py-8 md:grid-cols-12 lg:py-16"
        >
          <div class="col-span-6 w-full place-self-center">
            <div class="mb-12 w-full md:mb-14">
              <h1 class="isco-h1 isco-text-center-left mb-6 text-white">
                Bangun Kesuksesan Kontraktor Bersama ISCO Group
              </h1>

              <!-- Gambar mobile & Deskripsi -->
              <div class="relative md:static">
                <div
                  class="absolute inset-0 bg-gradient-to-t from-secondary to-transparent md:hidden"
                ></div>
                <NuxtImg
                  src="/images/test2.png"
                  alt="Gambar seseorang kontraktor konstruksi dengan logo berbagai lembaga pembangunan pemerintah Indonesia"
                  class="w-9/10 place-self-center object-cover md:hidden"
                  preload
                />
                <p
                  class="isco-short-desc isco-text-center-left absolute bottom-1 self-center text-white md:static"
                >
                  Majukan Pembangunan Kontraktor Jasa Konstruksi dan Jasa
                  Konsultan Di Indonesia Bersama Kami.
                </p>
              </div>
            </div>

            <!-- Tombol CTA -->
            <div class="flex flex-col gap-2.5 md:flex-row md:gap-8">
              <ButtonCTAIcon />
              <ButtonSecondary button-text="Lihat Layanan" to="/layanan" />
            </div>
          </div>
          <div>.</div>
          <!-- Gambar untuk Desktop -->
          <div class="col-span-5 w-full">
            <NuxtImg
              src="/images/test2.png"
              class="hidden h-125 w-full justify-self-end object-contain md:block"
              alt="Gambar seseorang kontraktor konstruksi dengan logo berbagai lembaga pembangunan pemerintah Indonesia"
              preload
            />
          </div>
        </div>
      </div>
    </section>

    <section id="layanan" class="bg-gray-50">
      <div class="isco-container">
        <!-- Heading & Tagline -->
        <div class="mb-9 w-full text-center md:mb-10">
          <h2
            class="isco-short-desc mb-4 place-self-center text-primary md:mb-6"
          >
            Layanan Kami
          </h2>
          <h3 class="isco-h2">
            Solusi Tepat Untuk Setiap<br />
            Tender Anda
          </h3>
        </div>
        <!-- components/HomeServiceCard.vue -->
        <HomeServiceSection />
        <!-- Tombol CTA -->
        <div class="mt-8 flex justify-center md:mt-14">
          <ButtonCTA button-text="Lihat Semua Layanan" to="/layanan" />
        </div>
      </div>
    </section>

    <section id="mengapa-kami" class="">
      <div class="isco-container">
        <div
          class="grid grid-cols-1 place-items-center gap-x-6 lg:grid-cols-12"
        >
          <!-- Left: Dropdown (pada mobile gambar muncul di dalam item aktif) -->
          <div class="col-span-6 w-full place-self-center">
            <div class="isco-text-center-left mb-6 w-full">
              <h2 class="isco-short-desc mb-4 text-primary">
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
                  class="flex w-full items-center justify-between focus:outline-none"
                  @click="select(index)"
                >
                  <h4
                    :class="[
                      'isco-h3 cursor-pointer transition-colors',
                      activeIndex === index ? 'text-primary' : 'hover:text-cta',
                    ]"
                  >
                    {{ item.title }}
                  </h4>
                  <svg
                    :class="[
                      'h-6 w-6 cursor-pointer transition-transform duration-300 hover:text-cta',
                      activeIndex === index
                        ? 'rotate-180 transform text-cta'
                        : 'rotate-0 transform',
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
                    <p class="mt-1 leading-relaxed text-gray-600">
                      {{ item.text }}
                    </p>
                    <!-- Gambar untuk mobile (hanya tampil di mobile) -->
                    <transition name="fade">
                      <NuxtImg
                        v-if="activeIndex === index"
                        key="mobileImage"
                        :src="item.image"
                        alt="Dropdown Image"
                        class="mx-auto my-6 block w-full object-contain lg:hidden"
                        loading="lazy"
                        placeholder
                      />
                    </transition>
                  </div>
                </transition>
              </div>
            </div>
          </div>
          <div>.</div>
          <!-- Right: Gambar untuk desktop (hanya tampil di desktop) -->
          <div class="col-span-5 hidden h-125 lg:flex lg:place-content-end">
            <transition name="fade">
              <NuxtImg
                v-if="currentImage"
                key="desktopImage"
                :src="currentImage"
                alt="Dropdown Image"
                class="object-contain"
                loading="lazy"
                placeholder
              />
            </transition>
          </div>
          <div class="col-span-2 mt-14 flex md:col-span-3 md:place-self-start">
            <ButtonCTA button-text="Lihat Profil Perusahaan" to="/tentang" />
          </div>
        </div>
      </div>
    </section>

    <section id="hubungi-kami mt-16" class="bg-[#073573]">
      <BlockCTA />
    </section>

    <section id="berita-dan-artikel" class="">
      <div class="isco-container">
        <div class="grid grid-cols-1 gap-8 py-16 md:grid-cols-12">
          <div class="col-span-6">
            <h2 class="isco-h4 mb-4 text-primary md:mb-6">Berita & Artikel</h2>
            <h3 class="isco-h2 text-left">
              Temukan Informasi Terkini tentang Dunia Konstruksi
            </h3>
          </div>
          <div class="col-span-2">.</div>
          <div class="col-span-4 flex h-full">
            <p class="isco-paragraph mt-auto">
              Berita, pengumuman, dan wawasan seputar dunia konstuksi para ahli
              industri, pemerintah, dan asosiasi terkemuka.
            </p>
          </div>
        </div>
        <div class="mt-8 mb-10 flex w-full justify-between md:mt-16">
          <div class="isco-h2 text-black">Berita Terbaru</div>
          <div class="isco-button-text hidden text-primary md:block">
            Lihat Semua <span class="ml-3">#</span>
          </div>
        </div>
        <div
          class="flex h-59.5 w-full items-end rounded-xl bg-[url(/images/munas-perdana-p2.jpeg)] object-cover object-center md:h-108"
        >
          <div
            class="w-full rounded-xl bg-gradient-to-t from-black/100 to-transparent px-4 py-5 md:px-8 md:py-10"
          >
            <div class="W-full isco-paragraph mb-1.5 text-white">
              Artikel
              <span class="px-2.5">|</span>
              24 Desember 2024
            </div>
            <div class="w-full">
              <h3 class="isco-h3 mb-2 line-clamp-1 text-white md:line-clamp-2">
                Pinned Article, Strapi Feature is Not Ready Yet
              </h3>
              <p class="isco-paragraph line-clamp-2 max-w-full text-white">
                Add Strapi configuration for this “Featured” article. Also this
                is supposedly short description (meta description in SEO terms)
              </p>
            </div>
          </div>
        </div>
        <div v-if="status === 'pending'">Loading...</div>
        <div v-else-if="error">Error: {{ error.message }}</div>
        <div
          v-else
          class="my-5 grid grid-cols-2 gap-x-4 gap-y-5 md:my-10 md:grid-cols-3 md:gap-x-8 md:gap-y-8"
        >
          <BlogCard
            v-for="article in articles"
            :key="article.id"
            :article="article"
          />
        </div>
        <ButtonCTA button-text="Lihat Artikel Lainnya ->" to="/berita" />
      </div>
    </section>
  </main>
  <!-- <pre> {{ articles }} </pre> -->
</template>

<script setup lang="ts">
import { useFetchAllArticles } from "~/composables/useFetchArticles";

// Api fetch for article list
const { data, status, error, refresh } = useFetchAllArticles();
const articles = computed(() => data.value?.data || []);

onMounted(() => {
  refresh();
  if (window.innerWidth < 768) {
    activeIndex.value = null;
  }
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
