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
            <span class="text-black">
              Penulis
            </span>
            {{ article.author?.name }}
          </span>
          <span class="isco-p text-primary">
            |
          </span>
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
      <div class="grid grid-cols-4">
        <div class="dic">
          Sidebar
        </div>
        <div
          v-for="article in articles"
          :key="article.documentId"
          class="col-span-2">
          Sidebar
        </div>
        <div>
          Sidebar
        </div>
      </div>
    </div>
  </section>
</main>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
// import { useApiData } from "~/composables/useApiRequest";
import { type Article, defaultArticle } from "~/types/articleTypes";

// Fetch the article based on the slug
// const { data, error } = await useApiData<Article[]>(
//   `/api/articles?sort[0]=title:asc&filters[slug][$eq]=${slug}&populate[author][fields][0]=name&populate[category][fields][0]=name&populate[cover][fields][0]=url&fields[0]=title&fields[1]=slug&fields[2]=updatedAt&fields[3]=description&fields[4]=documentId&populate[blocks][populate]=*`
// );

// const article = computed(() => data.value?.data[0] ?? defaultArticle);

import { ref, onMounted } from "vue";
import { fetchFilteredArticles } from "~/composables/useFetchArticles";

// Get the slug from the route
const route = useRoute();
const slug = route.params.slug as string;

const articles = ref<Article[]>([]);

const filter = {
  slug: { eq: slug },
};

onMounted(async () => {
  articles.value = await fetchFilteredArticles(filter);
});
</script>
