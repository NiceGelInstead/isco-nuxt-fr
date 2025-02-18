<template>
    <div
        class="items-stretch shadow-md border-gray-200 rounded-xl"
      >
      <div class="relative w-full aspect-video overflow-hidden">
        <img
          :src="imageSrc"
          alt="gambar-blog"
            class="absolute inset-0 w-full h-full object-cover rounded-t-xl hover:scale-110 transition-transform duration-300">
          </div>

          <div class="flex flex-col px-4 py-6">
              <div class="flex flex-row gap-2 mb-3">
                <p class="text-primary font-medium line-clamp-3 overflow-hidden">{{ category }}</p>
                <p class="text-gray-600 line-clamp-3 overflow-hidden">{{ date }}</p>
              </div>
              <h2 class="text-lg font-semibold text-left line-clamp-2 overflow-hidden hover:text-cta">{{ title }}</h2>
        </div>
      </div>
    </template>
    
    <script setup>
    defineProps({
      imageSrc: {
        type: String,// Gambar diambil dari lokal, jadi wajib ada
      },
      category:{
        type:String,
      },
      date:{
        type: String,
      },
      title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      to: {
        type: String,
        required: true,
      },
    });
    </script>
    