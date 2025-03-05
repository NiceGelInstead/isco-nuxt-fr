// composables/useFetchArticles.ts
import { gql } from "nuxt-graphql-request/utils";
import { useNuxtApp } from "#app";
import type { Article } from "~/types/articleTypes";

interface ArticlesResponse {
  articles: Article[];
}

const allArticlesQuery = gql`
  query allArticlesQuery {
    articles {
      title
      slug
      documentId
      description
      category {
        name
      }
      cover {
        url
      }
    }
  }
`;

const filteredArticleQuery = gql`
  query filteredArticleQuery($filters: ArticleFiltersInput) {
    articles(filters: $filters) {
      title
      slug
      documentId
      cover {
        url
      }
      updatedAt
      category {
        name
      }
      author {
        name
      }
    }
  }
`;

const filteredArticleWithBlocksQuery = gql`
  query filteredArticleQuery($filters: ArticleFiltersInput) {
    articles(filters: $filters) {
      title
      slug
      documentId
      cover {
        url
      }
      updatedAt
      category {
        name
      }
      author {
        name
      }
      blocks {
        ... on ComponentSharedMedia {
          __typename
          id
          file {
            url
          }
        }
        ... on ComponentSharedQuote {
          __typename
          id
          title
          body
        }
        ... on ComponentSharedRichText {
          __typename
          id
          body
        }
        ... on ComponentSharedSlider {
          __typename
          id
          files {
            url
          }
        }
        ... on Error {
          code
          message
        }
      }
    }
  }
`;

export const fetchAllArticles = async (): Promise<Article[]> => {
  const { $graphql } = useNuxtApp();
  const data =
    await $graphql.default.request<ArticlesResponse>(allArticlesQuery);
  return data.articles;
};

export const fetchFilteredArticles = async (
  filters: Record<string, any>,
): Promise<Article[]> => {
  const { $graphql } = useNuxtApp();
  const data = await $graphql.default.request<ArticlesResponse>(
    filteredArticleQuery,
    { filters },
  );
  return data.articles;
};

export const fetchFilteredArticleWithBlocks = async (
  filters: Record<string, any>,
): Promise<Article[]> => {
  const { $graphql } = useNuxtApp();
  const data = await $graphql.default.request<ArticlesResponse>(
    filteredArticleWithBlocksQuery,
    { filters },
  );
  return data.articles;
};
