<template>
  <main>
    <p v-if="isMainArticleLoading" class="mt-[calc(var(--header-height))] px-4 md:px-17.5 lg:px-35.5 text-center">
      Loading...
    </p>
    <div v-else>
      <div v-for="article in articles" :key="article.documentId">
        <section class="mt-[calc(var(--header-height))] px-4 md:px-17.5 lg:px-35.5">
          <div class="isco-container">
            <div class="space-y-4 lg:space-y-6 isco-text-break-pretty mb-16 lg:mb-10">
              <nav>
                <ol
                  class="flex flex-wrap lg:gap-2.5 isco-h4 uppercase text-primary"
                >
                  <li>
                    <NuxtLink to="/">BERANDA</NuxtLink>
                  </li>
                  <svg
                    class="fill-primary size-5 lg:size-6 self-center"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                  >
                    <path
                      d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
                    />
                  </svg>
                  <li>
                    <NuxtLink to="/berita-artikel">Berita & Artikel</NuxtLink>
                  </li>
                  <svg
                    class="fill-primary size-5 self-center"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                  >
                    <path
                      d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
                    />
                  </svg>
                  <li>
                    {{ article.category?.name }}
                  </li>
                </ol>
              </nav>
              <h1 class="isco-h1 text-secondary capitalize">
                {{ article.title }}
              </h1>
              <div class="space-x-1.5 isco-short-desc">
                <span> Penulis </span>
                <span class="text-primary">
                  {{ article.author?.name }}
                </span>
                <span>
                  {{ article.updatedAt }}
                </span>
              </div>
            </div>
            <ArticleCover
              :url="article.cover?.url || ''"
              cssClass="w-full object-cover object-center rounded-xl"
            />
          </div>
        </section>
        <section>
          <div class="isco-container"></div>
        </section>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { fetchAllArticles, fetchFilteredArticles } from "~/composables/useFetchArticles";
import { type Article, defaultArticle } from "~/types/articleTypes";

// Reactive state
const articles = ref<Article[]>([]);
const allArticles = ref<Article[]>([]);
const isMainArticleLoading = ref(true);
const isAllArticlesLoading = ref(true);

// current route slug
const route = useRoute();
const slug = route.params.slug as string;

onMounted(async () => {
  try {
    // Fetch the main article
    const fetchedArticles = await fetchFilteredArticles({ slug: { eq: slug } });
    articles.value = fetchedArticles.map((article) => ({
      ...defaultArticle,
      ...article,
    }));
  } catch (error) {
    console.error("Error fetching main article:", error);
  } finally {
    isMainArticleLoading.value = false; // Stop loading for the main article
  }

  // Fetch all articles after a delay
  setTimeout(async () => {
    try {
      const fetchedAllArticles = await fetchAllArticles();
      allArticles.value = fetchedAllArticles
        .filter((article) => article.slug !== slug)
        .map((article) => ({
          ...defaultArticle,
          ...article,
        }));
    } catch (error) {
      console.error("Error fetching all articles:", error);
    } finally {
      isAllArticlesLoading.value = false; // Stop loading for all articles
    }
  }, 1000);
});
</script>

