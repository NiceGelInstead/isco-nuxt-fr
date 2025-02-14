// composables/useServicePagination.ts
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import { useWindowSize } from '@vueuse/core'
import servicesData from '~/types/servicesData.json'

export default function useServicePagination() {
  const currentPage = ref(1)
  
  // Reactive state untuk search query
  const searchQuery = ref('')

  const { width } = useWindowSize()

  const handleResize = () => {
    width.value = window.innerWidth
  }

  onMounted(() => {
    window.addEventListener('resize', handleResize)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
  })

  const isMobile = computed(() => width.value < 768)
  const itemsPerPage = computed(() => (isMobile.value ? 3 : 9))

  // Filter data berdasarkan searchQuery
  const filteredServices = computed(() => {
    if (!searchQuery.value.trim()) return servicesData
    return servicesData.filter(service =>
      service.title.toLowerCase().includes(searchQuery.value.toLowerCase())
    )
  })

  // Watcher: reset currentPage setiap kali searchQuery berubah
  watch(searchQuery, () => {
    currentPage.value = 1
  })

  // Bagi data terfilter ke dalam halaman-halaman
  const pages = computed(() => {
    const result = []
    const data = filteredServices.value
    for (let i = 0; i < data.length; i += itemsPerPage.value) {
      result.push(data.slice(i, i + itemsPerPage.value))
    }
    // Jika currentPage melebihi jumlah halaman, reset ke 1
    if (currentPage.value > result.length) {
      currentPage.value = 1
    }
    return result
  })

  const totalPages = computed(() => pages.value.length)

  const currentPageData = computed(() => {
    if (currentPage.value > totalPages.value) {
      currentPage.value = totalPages.value
    }
    return pages.value[currentPage.value - 1] || []
  })

  const nextPage = () => {
    if (currentPage.value < totalPages.value) {
      currentPage.value++
    }
  }

  const prevPage = () => {
    if (currentPage.value > 1) {
      currentPage.value--
    }
  }

  return {
    currentPage,
    totalPages,
    currentPageData,
    nextPage,
    prevPage,
    isMobile,
    searchQuery, // expose untuk binding ke SearchBar
    filteredServices,
  }
}
