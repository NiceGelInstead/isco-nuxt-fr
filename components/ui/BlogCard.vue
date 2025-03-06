<template>
  <a
    :href="`/artikel/${article.slug}`"
    class="w-full flex flex-col border-2 border-border-color"
  >
    <ArticleCover
      :article="article"
      css-class="w-full h-28.5 md:h-51 object-cover object-center rounded-xl"
    />
    <div class="flex flex-col gap-4 p-4">
      <div class="isco-small-text md:isco-paragraph">
        <span class="text-primary">
          {{ computedCategory }}
        </span>
        <span class="px-1 md:px-2.5"> | </span>
        <span class="text-text">
          {{ formattedDate }}
        </span>
      </div>
      <div class="w-full">
        <h2 class="isco-h3 mb-3 line-clamp-2">
          {{ article.title }}
        </h2>
        <p class="hidden md:block text-text line-clamp-4">
          {{ article.description }}
        </p>
      </div>
      <div class="isco-button-text text-primary">Baca Selengkapnya</div>
    </div>
  </a>
</template>

<script setup lang="ts">
const props = defineProps({ // Halo, selamat pagi. Saya minta artikel
  article: { type: Object, required: true }, 
});

const computedCategory = computed( // Kategori kalau empty
  () => props.article.category?.name || "No Category",
);
const formattedDate = computed(() => { // Format tanggalan
  if (!props.article.updatedAt) return "No Date";

  const date = new Date(props.article.updatedAt);
  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(date);
});
</script>
