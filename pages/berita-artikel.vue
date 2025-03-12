<template>
  <main id="Layanan Isco Group">
    <HeroTemplate
      title="Layanan Kami"
      tagline="Memajukan Kontraktor di Indonesia Bersama  ISCO Group"
      description="Kami menawarkan pelayanan lengkap untuk Kontraktor Jasa Konstruksi dan Jasa Konsultasi."
    />
    <section>
      <div class="fixed-container mt-0 pt-0">
        <BlogCaraousel />
      </div>
    </section>

    <section id="Hubungi Kami Segera">
      <BlockCTA />
    </section>
    <section>
      <div class="isco-container">
        <h2>Starlink Launches</h2>

        <div v-for="article in articles" :key="article.documentId">
          <h2>{{ article.title }}</h2>
          <p>{{ article.slug }}</p>
        </div>
      </div>
    </section>
    <div />
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
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
</script>
