<template>
  <main>
    <section class="mt-[calc(var(--header-height))]">
      <div
        v-for="article in articles"
        :key="article.documentId"
        class="isco-container"
      >
        <div class="flex flex-col w-full gap-6 mb-10">
          <span class="isco-h4 text-center text-primary capitalize">
            {{ article.category?.name }}
          </span>
          <h1 class="isco-h3 text-center text-secondary">
            {{ article.title }}
          </h1>
          <div class="grid grid-cols-[1fr_auto_1fr] gap-1">
            <span class="isco-p text-primary text-end font-bold">
              <span class="text-black"> Penulis </span>
              {{ article.author?.name }}
            </span>
            <span class="isco-p text-primary"> | </span>
            <span class="isco-p">
              {{ article.updatedAt }}
            </span>
          </div>
        </div>
        <ArticleCover
          :article="article"
          css-class="w-full aspect-2/1 object-cover rounded-xl"
        />
      </div>
    </section>
    <section>
      <div class="isco-container">
        <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div class="dic">
            <SideCTA />
          </div>
          <div
            v-for="article in articles"
            :key="article.documentId"
            class="col-span-2"
          >
            Sidebar
          </div>
          <div class="grid grid-rows-3">
            <p v-if="isLoadingSeeAlso">Loading related articles...</p>
            <BlogCardNoDescription
              v-for="article in allArticles"
              v-else
              :key="article.documentId"
              :article="article"
            />
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { type Article, defaultArticle } from "~/types/articleTypes";
import { ref, onMounted, nextTick } from "vue";
import {
  fetchFilteredArticles,
  fetchAllArticles,
} from "~/composables/useFetchArticles";

const route = useRoute();
const slug = route.params.slug as string;

const articles = ref<Article[]>([]); // current article
const filter = { slug: { eq: slug } };
const allArticles = ref<Article[]>([]); // all article
const isLoadingSeeAlso = ref(true);

onMounted(async () => {
  articles.value = await fetchFilteredArticles(filter); // Main articles fetch

  // Defer all articles
  nextTick(async () => {
    setTimeout(async () => {
      const fetchedArticles = await fetchAllArticles();
      allArticles.value = fetchedArticles.filter(
        (article) => article.slug !== slug,
      );
      isLoadingSeeAlso.value = false;
    }, 500); // Defer xxx ms
  });
});
</script>
