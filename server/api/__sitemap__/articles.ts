import { defineSitemapEventHandler } from '#imports'
import type { SitemapUrlInput } from '#sitemap/types'

export default defineSitemapEventHandler(async () => {
    const config = useRuntimeConfig();
    const strapiUrl = config.public.strapiUrl;

  try {
    const response = await $fetch(`${strapiUrl}/api/articles`);
    return response.data.map((article: any) => ({
      loc: `/artikel/${article.slug}`,
      lastmod: article.updatedAt, 
    })) satisfies SitemapUrlInput[];
  } catch (error) {
    console.error('Error fetching sitemap data:', error);
    return [];
  }
});
