// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  components: [
    {
      path: '~/components',
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
    strapiUrl: "https://staging.testjellysuper.my.id",
    public: {
      strapiUrl: "https://staging.testjellysuper.my.id",
    },
  },
  modules: ["nuxt-qrcode", "@nuxt/eslint"],
  css: ["~/assets/css/index.css"],
  vite: {
    plugins: [tailwindcss()],
  },
});
