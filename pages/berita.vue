<template>
  <main id="Layanan Isco Group">
    <HeroTemplate
      title="Layanan Kami"
      tagline="Memajukan Kontraktor di Indonesia Bersama  ISCO Group"
      description="Kami menawarkan pelayanan lengkap untuk Kontraktor Jasa Konstruksi dan Jasa Konsultasi."
    />
    <section>
      <div class="fixed-container mt-0 pt-0">
        <div v-if="status === 'pending'">Loading...</div>
        <div v-else-if="error">Error: {{ error.message }}</div>
        <div
          v-else
          class="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-5 md:gap-x-8 md:gap-y-8 my-5 md:my-10"
        >
          <BlogCard
            v-for="article in mergedArticles"
            :key="article.id"
            :article="article"
          />
        </div>
      </div>
    </section>

    <section id="Hubungi Kami Segera">
      <BlockCTA />
    </section>
  </main>
</template>

<script setup lang="ts">
import { useFetchAllArticles } from "~/composables/useFetchArticles";
import { useMergeArticle } from "~/composables/useMergeResponse";
import { type Article } from "~/types/articleTypes"; 

// Api fetch for article list
const { data, status, error, refresh } = useFetchAllArticles();
const articles = computed(() => data.value?.data || []);
const mergedArticles = computed(() => 
  articles.value.map((article: Partial<Article>) => useMergeArticle(article))
);
onMounted(() => {
  refresh();
});
</script>

