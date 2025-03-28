// types/articleTypes.ts

// Default in case of nulls
export const defaultCover: cover = {
  url: "/images/munas-perdana-p2.jpeg", // this has to be above defaultPlayer for whatever reason XD
};
export const defaultAuthor: author = {
  name: "Isco Group", // this has to be above defaultPlayer for whatever reason XD
};
export const defaultCategory: category = {
  name: "No Category", // this has to be above defaultPlayer for whatever reason XD
};
export const defaultArticle: Article = {
  id: 0,
  documentId: "NULL",
  title: "No Title",
  description: "No Description",
  slug: "missing-slug",
  cover: defaultCover,
  author: defaultAuthor,
  category: defaultCategory,
  updatedAt: "No Date",
  blocks: [],
};

export interface Article {
  id: number;
  documentId: string;
  title: string;
  description: string;
  slug: string;
  cover: cover | null;
  author: author | null;
  category: category | null;
  updatedAt: string;
  blocks: any[];
}
interface cover {
  url: string;
}
interface author {
  name: string;
}
interface category {
  name: string;
}

// Export end products (lmao)
export interface ApiResponse<T> {
  data: T;
}
