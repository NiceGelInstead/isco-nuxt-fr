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
  devtools: { enabled: true },
  runtimeConfig: {
    strapiUrl: "https://staging.testjellysuper.my.id",
    public: {
      strapiUrl: "https://staging.testjellysuper.my.id",
      graphql: {
        clients: {
          default: {
            endpoint: 'https://staging.testjellysuper.my.id/graphql',
          },
        }
      }
    },
  },
  modules: ["nuxt-qrcode", "@nuxt/eslint", "nuxt-graphql-request"],
  css: ["~/assets/css/index.css"],
  vite: {
    plugins: [tailwindcss()],
  },
});