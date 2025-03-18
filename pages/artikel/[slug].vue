<template>
  <main>
    <p
      v-if="status === 'pending'"
      class="mt-[calc(var(--header-height))] px-4 md:px-17.5 lg:px-35.5 text-center"
    >
      Loading...
    </p>
    <div v-else-if="error">Error: {{ error.message }}</div>
    <div v-else>
      <div v-for="article in mergedArticles" :key="article.documentId">
        <section
          class="mt-[calc(var(--header-height))] px-4 md:px-17.5 lg:px-35.5"
        >
          <div class="isco-container">
            <div
              class="space-y-4 lg:space-y-6 isco-text-break-pretty mb-16 lg:mb-10"
            >
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
              css-class="w-full object-cover object-center rounded-xl"
            />
          </div>
        </section>
        <section>
          <div class="isco-container" />
        </section>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { useFetchFilteredArticleBySlug } from "~/composables/useFetchArticles";
import { useMergeArticle } from "~/composables/useMergeResponse";
import { type Article } from "~/types/articleTypes";

const route = useRoute();
const slug = route.params.slug as string;

const { data, status, error, refresh } = useFetchFilteredArticleBySlug(slug);
const articles = computed(() => data.value?.data || []);
const mergedArticles = computed(() =>
  articles.value.map((article: Partial<Article>) => useMergeArticle(article)),
);
onMounted(() => {
  refresh();
});
</script>
