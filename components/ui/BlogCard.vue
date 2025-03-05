<template>
    <a :href="`/articles/${article.slug}`" class="w-full flex flex-col gap-3">
        <ArticleCover :article="article" cssClass="w-full h-37.5 object-cover object-center rounded-xl" />
        <div class="isco-paragraph">
            <span class="text-primary">
                {{ article.category.name }}
            </span>
            <span class="px-2.5">
                |
            </span>
            <span class="text-text">
                {{ article.updatedAt }}
            </span>
        </div>
        <div class="w-full">
            <h2 class="isco-h3 mb-1.5 line-clamp-2">
                {{ article.title }}
            </h2>
            <p class="isco-paragraph text-text line-clamp-4">
                {{  article.description }}
            </p>
        </div>
        <div class="isco-button-text text-primary">
            Baca Selengkapnya
        </div>
    </a>
  </template>
  
<script setup lang="ts">
  import { computed } from 'vue';
  
  const props = defineProps({
    article: { type: Object, required: true }, // Pass the entire article object
  });
  
  // Computed properties for safe handling
  const computedCategory = computed(() => props.article.category?.name || "No Category");
  const computedDate = computed(() => props.article.updatedAt || "No Date");
  </script>