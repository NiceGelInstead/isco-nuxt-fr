// composables/useFetchArticles.ts
import { gql } from 'nuxt-graphql-request/utils'
import { useNuxtApp } from '#app'
import type { Article } from '~/types/articleTypes'

interface ArticlesResponse {
  articles: Article[]
}

const query = gql`
  query RequestAllArticles {
    articles {
      title
      slug
      documentId
    }
  }
`

export const fetchAllArticles = async (): Promise<Article[]> => {
  const { $graphql } = useNuxtApp()
  const data = await $graphql.default.request<ArticlesResponse>(query)
  return data.articles
}

export function useFetchArticles() {
  return { fetchAllArticles: fetchAllArticles }
}
