<!-- components/ui/BlogCard.vue -->
<template>
  <a
    :href="`/artikel/${article.slug}`"
    class="w-full flex flex-col md:border-2 md:border-border-color"
  >
    <ArticleCover
      :url="article.cover?.url || ''"
      css-class="w-full h-28.5 md:h-51 object-cover object-center rounded-xl"
    />
    <div class="flex flex-col gap-1.5 md:gap-4 mt-1.5 md:mt-0 md:p-4">
      <div class="isco-small-text md:isco-paragraph">
        <span class="text-primary">
          {{ article.category?.name }}
        </span>
        <span class="px-1 md:px-2.5"> | </span>
        <span class="text-text">
          {{ formattedDate }}
        </span>
      </div>
      <div class="w-full">
        <h2 class="isco-h3 md:mb-3 line-clamp-2">
          {{ article.title }}
        </h2>
        <p class="hidden md:block text-text line-clamp-4">
          {{ article.description }}
        </p>
      </div>
      <div class="isco-paragraph text-primary">Baca Selengkapnya</div>
    </div>
  </a>
</template>

<script setup lang="ts">
import { useDateFormat } from "~/composables/useDateFormat";
import type { Article } from "~/types/articleTypes";
const props = defineProps<{ article: Article }>();
const formattedDate = useDateFormat(props.article.updatedAt);

// Work in progress (it does works, but need to enhance the flow)
// import { useMergeArticle } from '~/composables/useMergeResponse';
// const { mergeArticle } = useMergeArticle();
// const mergedArticle: Article = mergeArticle(props.article);
</script>
