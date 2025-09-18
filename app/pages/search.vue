<template>
  <div class="bg-gray-50 dark:bg-gray-900 min-h-screen">
    <!-- Header -->
    <div class="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 border-b">
      <div class="mx-auto px-4 sm:px-6 lg:px-8 py-6 max-w-7xl">
        <div class="flex justify-between items-center">
          <div>
            <h1 class="font-bold text-gray-900 dark:text-white text-2xl">
              Jain Place Search
            </h1>
            <p class="mt-1 text-gray-600 dark:text-gray-400 text-sm">
              Discover Jain temples and sacred places
            </p>
          </div>

          <!-- View Toggle (Desktop) -->
          <div class="hidden md:flex space-x-2">
            <UButton :variant="viewMode === 'list' ? 'solid' : 'soft'" size="sm" @click="viewMode = 'list'">
              <UIcon name="i-heroicons-list-bullet" class="mr-1 w-4 h-4" />
              List
            </UButton>
            <UButton :variant="viewMode === 'map' ? 'solid' : 'soft'" size="sm" @click="viewMode = 'map'">
              <UIcon name="i-heroicons-map" class="mr-1 w-4 h-4" />
              Map
            </UButton>
          </div>
        </div>
      </div>
    </div>

    <div class="mx-auto px-4 sm:px-6 lg:px-8 py-6 max-w-7xl">
      <!-- Search Form -->
      <UCard class="mb-6">
        <template #header>
          <div class="flex items-center space-x-2">
            <UIcon name="i-heroicons-magnifying-glass" class="w-5 h-5 text-gray-400" />
            <span class="font-medium">Search Filters</span>
            <UButton variant="soft" color="neutral" size="sm" @click="clearFilters" :disabled="!hasActiveFilters">
              <UIcon name="i-heroicons-x-mark" class="mr-1 w-3 h-3" />
              Clear Filters
            </UButton>
          </div>
        </template>

        <div class="space-y-4">
          <!-- Main Search Input -->
          <div class="gap-4 grid grid-cols-1 md:grid-cols-4">
            <UFormField label="Search Text" help="Enter keywords to search for temples or places">
              <UInput v-model="searchQuery" placeholder="Enter search keywords..." icon="i-heroicons-magnifying-glass"
                size="lg" @input="debouncedSearch" />
            </UFormField>
            <UFormField label="Deity" help="Select or search for a specific deity">
              <USelectMenu v-model="selectedDeity" :options="deityOptions" placeholder="Select or search deity..."
                searchable searchable-placeholder="Type to search deities..." clear-search-on-close
                :loading="deityLoading" @query-change="onDeitySearch" option-attribute="name" value-attribute="value" />
            </UFormField>
            <UFormField label="Place" help="Select or search for a specific place">
              <USelectMenu v-model="selectedPlace" :options="placeOptions" placeholder="Select or search place..."
                searchable searchable-placeholder="Type to search places..." clear-search-on-close
                :loading="placeLoading" @query-change="onPlaceSearch" option-attribute="name" value-attribute="value" />
            </UFormField>
          </div>
        </div>
      </UCard>

      <!-- View Toggle (Mobile) -->
      <div class="md:hidden mb-4">
        <div class="flex space-x-2">
          <UButton :variant="viewMode === 'list' ? 'solid' : 'soft'" size="sm" class="flex-1"
            @click="viewMode = 'list'">
            <UIcon name="i-heroicons-list-bullet" class="mr-1 w-4 h-4" />
            List
          </UButton>
          <UButton :variant="viewMode === 'map' ? 'solid' : 'soft'" size="sm" class="flex-1" @click="viewMode = 'map'">
            <UIcon name="i-heroicons-map" class="mr-1 w-4 h-4" />
            Map
          </UButton>
        </div>
      </div>

      <!-- Error Display -->
      <UAlert v-if="searchError" color="error" variant="soft" class="mb-4" :title="'Search Error'"
        :description="searchError" />

      <!-- Results -->
      <div class="space-y-6">
        <!-- Results Header -->
        <div v-if="searchResults.length > 0 || searchLoading" class="flex justify-between items-center">
          <div class="flex items-center space-x-2">
            <h2 class="font-semibold text-gray-900 dark:text-white text-lg">
              Search Results
            </h2>
            <UBadge v-if="!searchLoading" variant="soft" size="sm">
              {{ searchResults.length }}
            </UBadge>
          </div>

          <div class="text-gray-500 text-sm">
            {{ viewMode === 'list' ? 'List View' : 'Map View' }}
          </div>
        </div>

        <!-- Results Content -->
        <div class="min-h-96">
          <!-- List View -->
          <SearchResultsList v-if="viewMode === 'list'" :results="searchResults" :loading="searchLoading"
            @select-result="handleResultSelect" @show-on-map="handleShowOnMap" />

          <!-- Map View -->
          <SearchResultsMap v-if="viewMode === 'map'" :results="searchResults" :loading="searchLoading"
            @select-result="handleResultSelect" />
        </div>
      </div>

      <!-- No Search Yet State -->
      <div v-if="!hasSearched && !searchLoading" class="py-12 text-center">
        <UIcon name="i-heroicons-magnifying-glass-circle" class="mx-auto mb-4 w-16 h-16 text-gray-300" />
        <h3 class="mb-2 font-medium text-gray-900 dark:text-white text-lg">
          Start Your Search
        </h3>
        <p class="mx-auto max-w-md text-gray-500">
          Use the search filters above to find Jain temples and sacred places. You can search by text,
          filter by deity, or specify a particular place.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { SearchResult, DropdownOption } from '~/utils/searchApi'
import { searchPlaces, getDeities, getPlaces } from '~/utils/searchApi'
import SearchResultsList from '~/components/search/SearchResultsList.vue'
import SearchResultsMap from '~/components/search/SearchResultsMap.vue'

// Page metadata
definePageMeta({
  title: 'Jain Place Search',
  description: 'Search and discover Jain temples and sacred places'
})


// Search state
const searchQuery = ref('')
const selectedDeity = ref<DropdownOption | null>(null)
const selectedPlace = ref<DropdownOption | null>(null)
const viewMode = ref<'list' | 'map'>('list')

// Results state
const searchResults = ref<SearchResult[]>([])
const searchLoading = ref(false)
const searchError = ref<string | null>(null)
const hasSearched = ref(false)

// Dropdown options state
const deityOptions = ref<DropdownOption[]>([])
const placeOptions = ref<DropdownOption[]>([])
const deityLoading = ref(false)
const placeLoading = ref(false)

// Computed
const hasActiveFilters = computed(() => {
  return searchQuery.value.trim() !== '' || selectedDeity.value !== null || selectedPlace.value !== null
})

// Debounced search function
let searchTimeout: NodeJS.Timeout
const debouncedSearch = () => {
  clearTimeout(searchTimeout)
  searchTimeout = setTimeout(performSearch, 500)
}

// Search function
async function performSearch() {
  if (!hasActiveFilters.value) {
    searchResults.value = []
    hasSearched.value = false
    return
  }

  searchLoading.value = true
  searchError.value = null
  hasSearched.value = true

  try {
    const params: any = {}

    if (searchQuery.value.trim()) {
      params.q = searchQuery.value.trim()
    }

    if (selectedDeity.value) {
      params.deity = selectedDeity.value.value
    }

    if (selectedPlace.value) {
      params.place = selectedPlace.value.value
    }

    const { results, error } = await searchPlaces(params)

    if (error) {
      searchError.value = error
      searchResults.value = []
    } else {
      searchResults.value = results
    }
  } catch (err) {
    searchError.value = 'An unexpected error occurred while searching'
    searchResults.value = []
  } finally {
    searchLoading.value = false
  }
}

// Deity search function
async function onDeitySearch(query: string) {
  deityLoading.value = true
  debugger
  try {
    const { options } = await getDeities(query)
    deityOptions.value = options
  } catch (err) {
    console.error('Failed to search deities:', err)
  } finally {
    deityLoading.value = false
  }
}

// Place search function
async function onPlaceSearch(query: string) {
  placeLoading.value = true
  try {
    const { options } = await getPlaces(query)
    placeOptions.value = options
  } catch (err) {
    console.error('Failed to search places:', err)
  } finally {
    placeLoading.value = false
  }
}

// Clear all filters
function clearFilters() {
  searchQuery.value = ''
  selectedDeity.value = null
  selectedPlace.value = null
  searchResults.value = []
  searchError.value = null
  hasSearched.value = false
}

// Handle result selection
function handleResultSelect(result: SearchResult) {
  console.log('Selected result:', result)
  // You can implement navigation or modal display here
}

// Handle show on map
function handleShowOnMap(result: SearchResult) {
  viewMode.value = 'map'
  // You can implement map focusing here
  console.log('Show on map:', result)
}

// Watch for filter changes to trigger search
watch([selectedDeity, selectedPlace], () => {
  performSearch()
})
</script>
