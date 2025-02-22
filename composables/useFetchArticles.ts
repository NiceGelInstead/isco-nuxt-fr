// composables/useFetchArticles.ts
import { gql } from 'nuxt-graphql-request/utils'
import { useNuxtApp } from '#app'
import type { Article } from '~/types/articleTypes'

interface ArticlesResponse {
  articles: Article[]
}

const allArticlesQuery = gql`
  query RequestAllArticles {
    articles {
      title
      slug
      documentId
    }
  }
`

const filteredArticleQuery = gql`
query RequestAllArticles($filters: ArticleFiltersInput) {
  articles(filters: $filters) {
    title
    slug
    documentId
  }
}
`

export const fetchAllArticles = async (): Promise<Article[]> => {
  const { $graphql } = useNuxtApp()
  const data = await $graphql.default.request<ArticlesResponse>(allArticlesQuery)
  return data.articles
}

export const fetchFilteredArticles = async (filters: Record<string, any>): Promise<Article[]> => {
  const { $graphql } = useNuxtApp()
  const data = await $graphql.default.request<ArticlesResponse>(filteredArticleQuery, { filters })
  return data.articles
}
