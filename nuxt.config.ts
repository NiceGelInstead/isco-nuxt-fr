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
    "@nuxtjs/seo",
  ],
  css: ["~/assets/css/index.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  site: {
    url: "https://iscogroup.id",
    name: "Isco Group",
    description: "Memajukan kontraktor di seluruh indonesia.",
    defaultLocale: "id",
  },
  sitemap: {
    sources: ["/api/__sitemap__/articles"],
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
