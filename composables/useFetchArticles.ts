// composables/useFetchArticles.ts
import type { Article, ApiResponse } from "~/types/articleTypes";

export function useFetchAllArticles() {
  const config = useRuntimeConfig();
  const strapiUrl = config.public.strapiUrl;
  const Get_All_Articles_Query =
  "/api/articles?sort[0]=updatedAt:desc&populate[category][fields][0]=name&populate[cover][fields][0]=url&fields[0]=title&fields[1]=slug&fields[2]=documentId&fields[3]=description&fields[4]=updatedAt&pagination[pageSize]=9&pagination[page]=1&status=published";

  const { data, status, error, refresh, clear } = useFetch<ApiResponse<Article[]>
    >(`${strapiUrl}${Get_All_Articles_Query}`);

  if (process.env.NODE_ENV === "development") {
    console.log("Fetched articles:", data.value);
    console.log("Fetch error:", error.value);
    console.log("Fetch status:", status.value);
  }

  return { data, status, error, refresh };
}

export function useFetchFilteredArticleBySlug( slug: string ) {
  const config = useRuntimeConfig();
  const strapiUrl = config.public.strapiUrl;
  const Get_Filter_By_Slug =
  "/api/articles?filters[slug][$eq]="
  const Get_Filtered_Article_By_Slug_Query = 
  "&populate[cover][fields][0]=url&populate[category][fields][0]=name&populate[author][fields][0]=name&populate[blocks][on][ComponentSharedMedia][populate][file][fields][0]=url&populate[blocks][on][ComponentSharedQuote][fields][0]=id&populate[blocks][on][ComponentSharedQuote][fields][1]=title&populate[blocks][on][ComponentSharedQuote][fields][2]=body&populate[blocks][on][ComponentSharedRichText][fields][0]=id&populate[blocks][on][ComponentSharedRichText][fields][1]=body&populate[blocks][on][ComponentSharedSlider][populate][files][fields][0]=url&fields[0]=title&fields[1]=slug&fields[2]=documentId&fields[3]=updatedAt&sort[0]=title:asc&pagination[pageSize]=1&pagination[page]=1&status=published"

  const { data, status, error, refresh, clear } = useFetch<ApiResponse<Article[]>
    >(`${strapiUrl}${Get_Filter_By_Slug}${slug}${Get_Filtered_Article_By_Slug_Query}`);

  if (process.env.NODE_ENV === "development") {
    console.log("Fetched articles:", data.value);
    console.log("Fetch error:", error.value);
    console.log("Fetch status:", status.value);
  }

  return { data, status, error };
}
