// utils/doMergeWithDefault.ts
export const mergeWithDefault = <T>(item: T, defaultItem: T): T => ({
    ...defaultItem,
    ...item,
  })
  