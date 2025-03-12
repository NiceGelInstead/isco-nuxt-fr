<template>
  <main 
    v-for="article in articles"
    :key="article.documentId"
  >
    <section class="mt-[calc(var(--header-height))]">
      <div class="isco-container space-y-16 lg:space-y-10">
        <div class="space-y-4 lg:space-y-6 isco-text-break-pretty">
          <nav>
            <ol class="flex flex-wrap lg:gap-2.5 isco-h4 uppercase text-primary">
              <li>
                <NuxtLink to="/">BERANDA</NuxtLink>
              </li>
              <svg class="fill-primary size-5 self-center" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>
              <li>
                <NuxtLink to="/berita-artikel">Berita & Artikel</NuxtLink>
              </li>
              <svg class="fill-primary size-5 self-center" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>
              <li>
                {{ article.category?.name }}
              </li>
            </ol>
          </nav>
          <h1 class="isco-h1 text-secondary capitalize">
            {{ article.title }}
          </h1>
          <div class="space-x-1.5">
            <span>
              Penulis
            </span>
            <span class="text-primary">
              {{ article.author?.name }}
            </span>
            <span>
              {{ article.updatedAt }}
            </span>
          </div>
        </div>
        <ArticleCover
          :article="article"
          css-class="w-full object-cover object-center rounded-xl"
        />
      </div>
    </section>
    <section>
      <div class="isco-container">
        
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { type Article, defaultArticle } from "~/types/articleTypes";
import {
  fetchFilteredArticles,
  fetchAllArticles,
} from "~/composables/useFetchArticles";

const route = useRoute();
const slug = route.params.slug as string;

const articles = ref<Article[]>([]); // current article
const filter = { slug: { eq: slug } };
const allArticles = ref<Article[]>([]); // all article
const isAllArticlesLoading = ref(true);

onMounted(async () => {
  articles.value = await fetchFilteredArticles(filter); // Main articles fetch

  // Defer all articles
  nextTick(async () => {
    setTimeout(async () => {
      const fetchedArticles = await fetchAllArticles();
      allArticles.value = fetchedArticles.filter(
        (article) => article.slug !== slug,
      );
      isAllArticlesLoading.value = false;
    }, 1000); // Defer xxx ms, Why defer? Idk, double fetching seems wasteful
  });
});


</script>
