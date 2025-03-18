// composables/useFetchArticles.ts
import type { Article, ApiResponse } from "~/types/articleTypes";

const allArticlesQuery =
  "/api/articles?sort[0]=updatedAt:desc&populate[category][fields][0]=name&populate[cover][fields][0]=url&fields[0]=title&fields[1]=slug&fields[2]=documentId&fields[3]=description&fields[4]=updatedAt&pagination[pageSize]=9&pagination[page]=1&status=published";

export function useFetchAllArticles() {
  const config = useRuntimeConfig();
  const strapiUrl = config.public.strapiUrl;

  const { data, status, error, refresh, clear } = useLazyFetch<
    ApiResponse<Article[]>
  >(`${strapiUrl}${allArticlesQuery}`);

  if (process.env.NODE_ENV === "development") {
    console.log("Fetched articles:", data.value);
    console.log("Fetch error:", error.value);
    console.log("Fetch status:", status.value);
  }

  return { data, status, error };
}
