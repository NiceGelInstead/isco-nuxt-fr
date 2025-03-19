// composables/useFetchArticles.ts
import type { Article, ApiResponse } from "~/types/articleTypes";

export function useFetchAllArticles() {
  const config = useRuntimeConfig();
  const strapiUrl = config.public.strapiUrl;
  const Get_All_Articles_Query =
    "/api/articles?sort[0]=updatedAt:desc&populate[category][fields][0]=name&populate[cover][fields][0]=url&fields[0]=title&fields[1]=slug&fields[2]=documentId&fields[3]=description&fields[4]=updatedAt&pagination[pageSize]=9&pagination[page]=1&status=published";

  const { data, status, error, refresh, clear } = useFetch<
    ApiResponse<Article[]>
  >(`${strapiUrl}${Get_All_Articles_Query}`);

  if (process.env.NODE_ENV === "development") {
    console.log("Fetched articles:", data.value);
    console.log("Fetch error:", error.value);
    console.log("Fetch status:", status.value);
  }

  return { data, status, error, refresh };
}

export function useFetchFilteredArticleBySlug(slug: string) {
  const config = useRuntimeConfig();
  const strapiUrl = config.public.strapiUrl;
  const Get_Filter_By_Slug = "/api/articles?filters[slug][$eq]=";
  const Get_Filtered_Article_By_Slug_Query =
    "&populate[cover][fields][0]=url&populate[category][fields][0]=name&populate[author][fields][0]=name&populate[blocks][on][shared.media][populate][file][fields][1]=url&populate[blocks][on][shared.media][populate][file][fields][0]=mime&populate[blocks][on][shared.quote][fields][0]=title&populate[blocks][on][shared.quote][fields][1]=body&populate[blocks][on][shared.rich-text][fields][0]=body&populate[blocks][on][shared.slider][populate][files][fields][0]=url&fields[0]=title&fields[1]=slug&fields[2]=documentId&fields[3]=updatedAt&pagination[pageSize]=1&pagination[page]=1&status=published";

  // Basic metadata
  const Get_Article_Cover_Query = "&populate[cover][fields][0]=url";
  const Get_Article_Category_Query = "&populate[category][fields][0]=name";
  const Get_Article_Author_Query = "&populate[author][fields][0]=name";

  // shared.media
  const Get_Article_Blocks_Media_File_Url_Query =
    "&populate[blocks][on][shared.media][populate][file][fields][1]=url";
  const Get_Article_Blocks_Media_File_Mime_Query =
    "&populate[blocks][on][shared.media][populate][file][fields][0]=mime";

  // shared.quote
  const Get_Article_Blocks_Quote_Title_Query =
    "&populate[blocks][on][shared.quote][fields][0]=title";
  const Get_Article_Blocks_Quote_Body_Query =
    "&populate[blocks][on][shared.quote][fields][1]=body";

  // shared.rich-text
  const Get_Article_Blocks_RichText_Body_Query =
    "&populate[blocks][on][shared.rich-text][fields][0]=body";

  // shared.slider
  const Get_Article_Blocks_Slider_Files_Url_Query =
    "&populate[blocks][on][shared.slider][populate][files][fields][0]=url";

  // Article fields
  const Get_Article_Title_Field = "&fields[0]=title";
  const Get_Article_Slug_Field = "&fields[1]=slug";
  const Get_Article_DocumentId_Field = "&fields[2]=documentId";
  const Get_Article_UpdatedAt_Field = "&fields[3]=updatedAt";

  // Pagination
  const Get_Article_Pagination_PageSize = "&pagination[pageSize]=1"; // Usage: `${Get_Article_Pagination_PageSize}1`
  const Get_Article_Pagination_Page = "&pagination[page]=1"; // Usage: `${Get_Article_Pagination_Page}1`
  const Get_Article_Status_Published = "&status=published";

  const { data, status, error, refresh, clear } = useFetch<
    ApiResponse<Article[]>
  >(
    `${strapiUrl}${Get_Filter_By_Slug}${slug}${Get_Article_Cover_Query}${Get_Article_Category_Query}${Get_Article_Author_Query}${Get_Article_Blocks_Media_File_Url_Query}${Get_Article_Blocks_Media_File_Mime_Query}${Get_Article_Blocks_Quote_Title_Query}${Get_Article_Blocks_Quote_Body_Query}${Get_Article_Blocks_RichText_Body_Query}${Get_Article_Blocks_Slider_Files_Url_Query}${Get_Article_Title_Field}${Get_Article_Slug_Field}${Get_Article_DocumentId_Field}${Get_Article_UpdatedAt_Field}${Get_Article_Pagination_PageSize}${Get_Article_Pagination_Page}${Get_Article_Status_Published}`,
  );

  if (process.env.NODE_ENV === "development") {
    console.log("Fetched articles:", data.value);
    console.log("Fetch error:", error.value);
    console.log("Fetch status:", status.value);
  }

  return { data, status, error, refresh };
}
