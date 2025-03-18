// composables/useMergeResponse.ts
import { type Article } from "~/types/articleTypes";
import {
  defaultArticle,
  defaultCover,
  defaultAuthor,
  defaultCategory,
} from "~/types/articleTypes";

export function useMergeArticle(article?: Partial<Article>): Article {
  return {
    ...defaultArticle,
    ...article,
    cover: {
      ...defaultCover,
      ...(article?.cover || {}),
    },
    author: {
      ...defaultAuthor,
      ...(article?.author || {}),
    },
    category: {
      ...defaultCategory,
      ...(article?.category || {}),
    },
  };
}
