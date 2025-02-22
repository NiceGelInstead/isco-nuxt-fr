<template>
  <div class="container mx-auto px-4 py-6">
    <div class="max-w-3xl mx-auto" v-for="article in articles" :key="article.documentId">
      <ArticleCover
      :article="article"
      css-class="w-full h-64 object-cover rounded-xl"
    />
      <h1 class="text-3xl font-bold">{{ article.title }}</h1>
      <p class="text-gray-600 my-2">{{ article.author?.name }} - {{ article.category?.name }}</p>
      <p class="text-lg text-gray-800">{{ article.slug }}</p>
    </div>
    <div v-for="article in articles" :key="article.documentId">
      <h2>{{ article.title }}</h2>
      <p>{{ article.slug }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
// import { useApiData } from "~/composables/useApiRequest";
import { type Article, defaultArticle } from "~/types/articleTypes";

// Get the slug from the route
const route = useRoute();
const slug = route.params.slug as string;

// Fetch the article based on the slug
// const { data, error } = await useApiData<Article[]>(
//   `/api/articles?sort[0]=title:asc&filters[slug][$eq]=${slug}&populate[author][fields][0]=name&populate[category][fields][0]=name&populate[cover][fields][0]=url&fields[0]=title&fields[1]=slug&fields[2]=updatedAt&fields[3]=description&fields[4]=documentId&populate[blocks][populate]=*`
// );

// const article = computed(() => data.value?.data[0] ?? defaultArticle);

import { ref, onMounted } from 'vue'
import { fetchFilteredArticles } from '~/composables/useFetchArticles'

const articles = ref<Article[]>([])

 
const filter = {
  slug: { eq: slug },
}

onMounted(async () => {
  articles.value = await fetchFilteredArticles(filter)
})

</script>
