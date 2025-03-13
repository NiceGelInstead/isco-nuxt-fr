// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  runtimeConfig: {
    strapiUrl: "https://staging.testjellysuper.my.id",
    public: {
      strapiUrl: "https://staging.testjellysuper.my.id",
      // graphql: {
      //   clients: {
      //     default: {
      //       endpoint: "https://staging.testjellysuper.my.id/graphql",
      //     },
      //   },
      // },
    },
  },
  // modules: ["nuxt-qrcode", "@nuxt/eslint", "nuxt-graphql-request"],
  modules: ["nuxt-qrcode", "@nuxt/eslint", '@bicou/nuxt-urql'],
  css: ["~/assets/css/index.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  urql: {
    endpoint: "https://staging.testjellysuper.my.id/graphql"
  },
  build: {
    transpile: ["@urql/vue"]
  },
});