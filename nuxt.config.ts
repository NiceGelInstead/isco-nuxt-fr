// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
  compatibilityDate: "2024-11-01",
  devtools: {
    enabled: true,
    timeline: {
      enabled: true,
    },
  },
  runtimeConfig: {
    strapiUrl: "https://admin.testjellysuper.my.id",
    public: {
      strapiUrl: "https://admin.testjellysuper.my.id",
    },
  },
  image: {
    strapi: {
      baseURL: "https://admin.testjellysuper.my.id",
    },
  },
  modules: [
    "nuxt-qrcode",
    "@nuxt/eslint",
    "@nuxt/image",
    "@nuxtjs/mdc",
  ],
  css: ["~/assets/css/index.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  // Please consider the custom prose AND native HTML tag
  // mdc: {
  //   components: {
  //     prose: false,
  //     map: {
  //       h2: 'IscoH2Prose'
  //     }
  //   }
  // }
});