<template>
  <div class="container mx-auto px-4 py-6">
    <div class="max-w-3xl mx-auto">
      <ArticleCover
      :article="article"
      css-class="w-full h-64 object-cover rounded-xl"
    />
      <h1 class="text-3xl font-bold">{{ article.title }}</h1>
      <p class="text-gray-600 my-2">{{ article.author }} - {{ article.category }}</p>
      <p class="text-lg text-gray-800">{{ article.description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { useApiData } from "~/composables/useApiRequest";
import { type Article, defaultArticle } from "~/types/articleTypes";

// Get the slug from the route
const route = useRoute();
const slug = route.params.slug as string;

// Fetch the article based on the slug
const { data, error } = await useApiData<Article>(
  `/api/articles?filters[slug][$eq]=${slug}&populate=*`
);

const article = computed(() => data.value?.data?.[0] ?? defaultArticle);

</script>
