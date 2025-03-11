<template>
  <div class="blog-card">
    <ArticleCover :article="article" class="w-full" />
    <div class="flex gap-3 py-4">
      <div class="flex">
        <span class="text-primary">{{ article.category?.name }}</span>
        <span> | </span>
        <span class="">{{ article.updatedAt }}</span>
      </div>
      <div class="isco-h-blog-card">
        <h2 class="title">{{ article.title }}</h2>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Article } from "~/types/articleTypes";
import ArticleCover from "~/components/ui/ArticleCover.vue";
defineProps<{ article: Article }>();
</script>
