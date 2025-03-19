<template>
  <main>
    <p
      v-if="status === 'pending'"
      class="mt-[calc(var(--header-height))] px-4 text-center md:px-17.5 lg:px-35.5"
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
              class="isco-text-break-pretty mb-16 space-y-4 lg:mb-10 lg:space-y-6"
            >
              <nav>
                <ol
                  class="isco-h4 flex flex-wrap text-primary uppercase lg:gap-2.5"
                >
                  <li>
                    <NuxtLink to="/">BERANDA</NuxtLink>
                  </li>
                  <svg
                    class="size-5 self-center fill-primary lg:size-6"
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
                    class="size-5 self-center fill-primary"
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
              <div class="isco-short-desc space-x-1.5">
                <span> Penulis </span>
                <span class="text-primary">
                  {{ article.author?.name }}
                </span>
                <span>
                  {{ article.updatedAt }}
                </span>
              </div>
            </div>
            <NuxtImg
              provider="strapi"
              :src="article.cover?.url || ''"
              :alt="article.title"
              class="w-full rounded-xl object-cover object-center"
              format="avif"
              preload
            />
          </div>
        </section>
        <section>
          <div class="isco-container grid grid-cols-1 md:grid-cols-12 gap-8">
            <div class="md:col-span-2">
              Table of content
            </div>
            <div v-if="article && article.blocks" class="md:col-span-8">
              <div v-for="block in article.blocks" :key="block.id">
                <template v-if="block && block.__component">
                  <SharedMedia
                    v-if="block.__component === 'shared.media'"
                    :file="block.file"
                  />
                  <SharedRichText
                    v-if="block.__component === 'shared.rich-text'"
                    :body="block.body"
                  />
                </template>
              </div>
            </div>
            <div class="md:col-span-2">
              Block CTA
            </div>
          </div>
        </section>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { useFetchFilteredArticleBySlug } from "~/composables/useFetchArticles";
import { useMergeArticle } from "~/composables/useMergeResponse";
import type { Article } from "~/types/articleTypes";

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
