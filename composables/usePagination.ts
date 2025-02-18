// composables/usePagination.ts
import { ref, computed, watch, type ComputedRef } from "vue";
import { useWindowSize } from "@vueuse/core";

export default function usePagination<T>({ data }: { data: ComputedRef<T[]> }) {
  const currentPage = ref(1);
  const { width } = useWindowSize();

  const isMobile = computed(() => width.value < 768);
  const itemsPerPage = computed(() => (isMobile.value ? 3 : 9));

  // Reset halaman ketika data berubah
  watch(data, () => {
    currentPage.value = 1;
  });

  const pages = computed(() => {
    const result: T[][] = [];
    const arr = data.value;
    for (let i = 0; i < arr.length; i += itemsPerPage.value) {
      result.push(arr.slice(i, i + itemsPerPage.value));
    }
    if (currentPage.value > result.length) {
      currentPage.value = 1;
    }
    return result;
  });

  const totalPages = computed(() => pages.value.length);

  const currentPageData = computed(() => {
    if (currentPage.value > totalPages.value) {
      currentPage.value = totalPages.value;
    }
    return pages.value[currentPage.value - 1] || [];
  });

  const nextPage = () => {
    if (currentPage.value < totalPages.value) {
      currentPage.value++;
    }
  };

  const prevPage = () => {
    if (currentPage.value > 1) {
      currentPage.value--;
    }
  };

  return {
    currentPage,
    totalPages,
    currentPageData,
    nextPage,
    prevPage,
    isMobile,
  };
}
