<template>
    <div class="container mx-auto px-4 py-6">
      <div class="max-w-3xl mx-auto">
        <img :src="blog.imageSrc" alt="gambar-blog" class="w-full rounded-xl mb-4">
        <h1 class="text-3xl font-bold">{{ blog.title }}</h1>
        <p class="text-gray-600 my-2">{{ blog.date }} - {{ blog.category }}</p>
        <p class="text-lg text-gray-800">{{ blog.description }}</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useRoute } from 'vue-router'
  import blogData from '~/types/blogData.json'
  
  const route = useRoute()
  
  // Cari artikel berdasarkan ID
  const blog = blogData.find(item => item.id.toString() === route.params.id)
  </script>
  