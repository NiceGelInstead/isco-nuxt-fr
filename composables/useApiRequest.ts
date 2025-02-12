// composables/useApiRequest.ts
import type { ApiResponse } from '~/types/playerTypes'


export const useApiData = <T>(endpoint: string) => {
  const config = useRuntimeConfig()
  const strapiUrl = config.public.strapiUrl

  return useFetch<ApiResponse<T>>(`${strapiUrl}${endpoint}`)
}
