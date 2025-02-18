<template>
  <div class="w-full min-h-screen bg-[#FF5482] place-content-center">
    <div
      v-if="player"
      ref="pdfSection"
      class="isco-container p-8 grid grid-cols-3 gap-8 bg-[#FF54] rounded-lg"
    >
      <img
        :src="player.Photo?.url ? strapiUrl + player.Photo.url : ''"
        alt=""
        class="w-full h-48 object-cover"
      >
      <div class="bg-white">
        <div
          :class="{
            'text-black': !player.isAlive,
            'text-[#FF5482]': player.isAlive,
            'text-2xl font-semibold mb-2': true,
          }"
        >
          {{ player.isAlive ? "Alive" : "Dead" }}
        </div>
        <h1 class="mb-8">{{ player.Name }}</h1>
        <p class="text-lg mt-8">{{ player.EmergencyContact }}</p>
        <div class="text-lg mb-8 underline">{{ player.uid }}</div>
        <Qrcode :value="fullUrl" variant="pixelated" height="100" />
      </div>
    </div>

    <div class="mt-8 text-center">
      <button
        class="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
        @click="exportToPDF"
      >
        Unduh Sertifikat
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
// Nonaktifkan SSR khusus untuk halaman ini
// Taking current URL (for dynamic routing and QR code)
import { useRequestURL, useRoute } from "#app";

// Api Call (the real deal is here)
import { useApiData } from "~/composables/useApiRequest";
import { type Player, defaultPlayer } from "~/types/playerTypes"; // This is for ONE player

// html2pdf exporter
import { usePdfExporter } from "~/composables/usePdfExporter";

definePageMeta({
  ssr: false,
});

// Strapi Base URL (for image purposes)
const config = useRuntimeConfig();
const strapiUrl = config.public.strapiUrl;
const route = useRoute();
const url = useRequestURL();
// const fullUrl = computed(() => `${url.origin}${route.path}`); // All path/route
const documentId = route.params.documentId; // Current path/route
const fullUrl = computed(() => `${config.public.siteUrl}${route.path}`);
const { data, error } = await useApiData<Player>(
  `/api/players/${documentId}?populate=*`,
);
const player = computed(() => data.value?.data ?? defaultPlayer);
const { pdfSection, handleExport } = usePdfExporter();
// const player = ref({ }); // Already in API call player = computed(())
const exportToPDF = () => {
  handleExport(`certificate_${player.value.Name}`);
};

// import { ref, computed, onMounted } from 'vue';

// const pdfSection = ref<HTMLElement | null>(null);
// let html2pdf: any = null;

// onMounted(async () => {
//   if (process.client) {
//     html2pdf = (await import('html2pdf.js')).default;
//     console.log("html2pdf.js dimuat!");
//   }
// });

// const exportToPDF = () => {
//   if (!pdfSection.value) return;

//   const element = pdfSection.value;
//   const opt = {
//     margin: 10,
//     filename: `sertifikat_${player.value.Name}.pdf`,
//     image: { type: 'jpeg', quality: 0.98 },
//     html2canvas: { scale: 2, useCORS: true },
//     jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
//   };

//   html2pdf()
//     .from(element)
//     .set(opt)
//     .toPdf()
//     .get('pdf')
//     .then((pdf: { internal: { scaleFactor: number; }; }) => {
//       pdf.internal.scaleFactor = 1.5; // Bisa disesuaikan untuk kualitas lebih baik
//     })
//     .save();
// };
</script>
