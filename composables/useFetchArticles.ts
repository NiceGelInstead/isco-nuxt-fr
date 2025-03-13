// composables/useFetchArticles.ts
import { gql, useQuery } from '@urql/vue';
import type { Article } from "~/types/articleTypes";

interface ArticlesResponse {
  articles: Article[];
}

const GET_ALL_ARTICLES_QUERY = gql`
  query allArticlesQuery {
    articles {
      title
      slug
      documentId
      description
      updatedAt
      category {
        name
      }
      author {
        name
      }
      cover {
        url
      }
    }
  }
`;

const GET_ARTICLE_BY_SLUG = gql`
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

export function useFetchAllArticles() {
  return useQuery({ query: GET_ALL_ARTICLES_QUERY });
}

export function useFetchArticleBySlug(slug: string) {
  return useQuery({
    query: GET_ARTICLE_BY_SLUG,
    variables: {
      filters: {
        slug: {
          eq: slug,
        },
      },
    },
  });
}