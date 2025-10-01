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
      <ClientOnly fallback-tag="span" fallback="Loading search functionality...">
        <!-- Search Form -->
        <UCard class="mb-6">
          <template #header>
            <div class="flex flex-col space-y-4">
              <div class="flex justify-between items-start">
                <div class="flex-1">
                  <UFormField label="Search Text"
                    help="use `OR` `AND` `NOT` to further enhance the search. Use `*` for wildcard search. Can also use quotes for phrase search. Use ( ) for grouping.">
                    <UInput v-model="searchQuery" placeholder="Enter search keywords..."
                      icon="i-heroicons-magnifying-glass" size="lg" @input="debouncedSearch" class="w-full" />
                  </UFormField>
                </div>
                <UButton variant="soft" color="neutral" size="sm" @click="clearFilters" :disabled="!hasActiveFilters"
                  class="mt-6 ml-4">
                  <UIcon name="i-heroicons-x-mark" class="mr-1 w-3 h-3" />
                  Clear Filters
                </UButton>
              </div>
            </div>
          </template>

          <div class="space-y-4">
            <!-- Filter Options -->
            <div class="gap-4 grid grid-cols-1 md:grid-cols-2">
              <UFormField label="Deity" help="Select or search for a specific deity">
                <div class="relative">
                  <USelectMenu v-model="selectedDeity" :items="deityOptions" placeholder="Select or search deity..."
                    :search-input="{ placeholder: 'Type to search deities...' }" :loading="deityLoading"
                    @update:search-term="onDeitySearch" label-key="name" class="w-full" />
                  <button v-if="selectedDeity" @click="clearDeitySelection" type="button"
                    class="top-1/2 right-8 z-[20] absolute hover:bg-gray-100 dark:hover:bg-gray-700 p-1 rounded-full transition-colors -translate-y-1/2"
                    title="Clear deity selection">
                    <UIcon name="i-heroicons-x-mark" class="w-4 h-4 text-gray-500 dark:text-gray-400" />
                  </button>
                </div>
              </UFormField>
              <UFormField label="Place" help="Select or search for a specific place">
                <div class="relative">
                  <USelectMenu v-model="selectedPlace" :items="placeOptions" placeholder="Select or search place..."
                    :search-input="{ placeholder: 'Type to search places...' }" :loading="placeLoading"
                    @update:search-term="onPlaceSearch" label-key="name" class="w-full" />
                  <button v-if="selectedPlace" @click="clearPlaceSelection" type="button"
                    class="top-1/2 right-8 z-[20] absolute hover:bg-gray-100 dark:hover:bg-gray-700 p-1 rounded-full transition-colors -translate-y-1/2"
                    title="Clear place selection">
                    <UIcon name="i-heroicons-x-mark" class="w-4 h-4 text-gray-500 dark:text-gray-400" />
                  </button>
                </div>
              </UFormField>
            </div>

            <!-- Location-based Search -->
            <div class="space-y-4">
              <div class="flex md:flex-row flex-col items-start md:items-end gap-4">
                <!-- Near Me Button -->
                <UFormField label="Location Search" help="Search for places near your current location">
                  <div class="flex items-center space-x-2">
                    <UButton :loading="locationLoading" :disabled="!isGeolocationSupported() || locationLoading"
                      variant="outline" color="primary" size="md" @click="getUserLocation">
                      <UIcon name="i-heroicons-map-pin" class="mr-2 w-4 h-4" />
                      {{ currentLocation ? 'Update Location' : 'Near Me' }}
                    </UButton>
                    <span v-if="currentLocation" class="text-gray-600 dark:text-gray-400 text-sm">
                      {{ formatCoordinates(currentLocation) }}
                    </span>
                    <UButton v-if="currentLocation" variant="ghost" color="error" size="sm" @click="clearLocation">
                      <UIcon name="i-heroicons-x-mark" class="w-3 h-3" />
                    </UButton>
                  </div>
                </UFormField>

                <!-- Radius Slider -->
                <UFormField v-if="currentLocation" label="Radius"
                  :help="`Search within ${searchRadius}km of your location`" class="flex-1 min-w-60">
                  <div class="space-y-2">
                    <USlider v-model="searchRadius" :min="1" :max="50" :step="1" tooltip color="primary" size="md" />
                    <div class="flex justify-between text-gray-500 text-xs">
                      <span>1km</span>
                      <span class="font-medium">{{ searchRadius }}km</span>
                      <span>50km</span>
                    </div>
                  </div>
                </UFormField>
              </div>

              <!-- Location Error Display -->
              <UAlert v-if="locationError" color="error" variant="soft" :title="'Location Error'"
                :description="locationError" :close-button="{ 'aria-label': 'Close' }" @close="locationError = null" />

              <!-- Location Permission Warning -->
              <UAlert v-if="locationPermissionDenied" color="warning" variant="soft"
                :title="'Location Permission Required'"
                :description="'To use the &quot;Near Me&quot; feature, please allow location access in your browser settings. You can find this in your browser\'s address bar or settings menu.'"
                :close-button="{ 'aria-label': 'Close' }" @close="locationPermissionDenied = false" />
            </div>
          </div>
        </UCard>
      </ClientOnly>

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

        <!-- Pagination Controls -->
        <div v-if="searchResults.length === countPerPage && !searchLoading"
          class="flex justify-center items-center space-x-4 pt-6">
          <UButton v-if="currentPage > 1" variant="soft" color="primary" size="md" @click="goToPreviousPage">
            <UIcon name="i-heroicons-chevron-left" class="mr-1 w-4 h-4" />
            Previous
          </UButton>

          <span class="text-gray-500 text-sm">
            Page {{ currentPage }}
          </span>

          <UButton variant="soft" color="primary" size="md" @click="goToNextPage">
            Next
            <UIcon name="i-heroicons-chevron-right" class="ml-1 w-4 h-4" />
          </UButton>
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
import type { LocationCoordinates } from '~/utils/location'
import { getCurrentLocation, isGeolocationSupported, formatCoordinates, isLocationPermissionDenied } from '~/utils/location'
import SearchResultsList from '~/components/search/SearchResultsList.vue'
import SearchResultsMap from '~/components/search/SearchResultsMap.vue'

// Page metadata
definePageMeta({
  title: 'Jain Place Search',
  description: 'Search and discover Jain temples and sacred places'
})

// Router access
const router = useRouter()
const route = useRoute()


// Search state
const countPerPage = 100
const searchQuery = ref('')
const selectedDeity = ref<DropdownOption | undefined>(undefined)
const selectedPlace = ref<DropdownOption | undefined>(undefined)
const viewMode = ref<'list' | 'map'>('list')
const currentPage = ref(1)

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

// Location state
const currentLocation = ref<LocationCoordinates | null>(null)
const searchRadius = ref(10) // Default 10km radius
const locationLoading = ref(false)
const locationError = ref<string | null>(null)
const locationPermissionDenied = ref(false)

// Computed
const hasActiveFilters = computed(() => {
  return searchQuery.value.trim() !== '' ||
    selectedDeity.value !== undefined ||
    selectedPlace.value !== undefined ||
    currentLocation.value !== null
})

// Debounced search function
let searchTimeout: NodeJS.Timeout
const debouncedSearch = () => {
  clearTimeout(searchTimeout)
  searchTimeout = setTimeout(() => performSearch(true), 500)
}

// Search function
async function performSearch(resetPage = false) {
  if (!hasActiveFilters.value) {
    searchResults.value = []
    hasSearched.value = false
    currentPage.value = 1
    return
  }

  // Reset to page 1 if this is a new search (filters changed)
  if (resetPage) {
    currentPage.value = 1
    updatePageInUrl()
  }

  searchLoading.value = true
  searchError.value = null
  hasSearched.value = true

  try {
    const params: any = {
      limit: countPerPage,
      offset: (currentPage.value - 1) * countPerPage
    }

    if (searchQuery.value.trim()) {
      params.q = searchQuery.value.trim()
    }

    if (selectedDeity.value) {
      params.deity = selectedDeity.value.value
    }

    if (selectedPlace.value) {
      params.place = selectedPlace.value.value
    }

    // Add location parameters if available
    if (currentLocation.value) {
      params.latitude = currentLocation.value.latitude
      params.longitude = currentLocation.value.longitude
      params.radius = searchRadius.value * 1000 // Convert km to meters for API
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
  try {
    const { options } = await getDeities(query)
    deityOptions.value = options

    // Ensure selected deity remains in options if it's not already there
    if (selectedDeity.value && !options.find(opt => opt.value === selectedDeity.value!.value)) {
      // Add the selected deity to the options if it's not already there
      deityOptions.value.unshift(selectedDeity.value)
    }
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

    // Ensure selected place remains in options if it's not already there
    if (selectedPlace.value && !options.find(opt => opt.value === selectedPlace.value!.value)) {
      // Add the selected place to the options if it's not already there
      placeOptions.value.unshift(selectedPlace.value)
    }
  } catch (err) {
    console.error('Failed to search places:', err)
  } finally {
    placeLoading.value = false
  }
}

// Clear all filters
function clearFilters() {
  searchQuery.value = ''
  selectedDeity.value = undefined
  selectedPlace.value = undefined
  currentLocation.value = null
  locationError.value = null
  locationPermissionDenied.value = false
  searchResults.value = []
  searchError.value = null
  hasSearched.value = false
}

// Clear deity selection
function clearDeitySelection() {
  selectedDeity.value = undefined
  performSearch(true) // Re-trigger search when deity is cleared
}

// Clear place selection
function clearPlaceSelection() {
  selectedPlace.value = undefined
  performSearch(true) // Re-trigger search when place is cleared
}

// Get user location
async function getUserLocation() {
  locationLoading.value = true
  locationError.value = null
  locationPermissionDenied.value = false

  try {
    const result = await getCurrentLocation()

    if (result.success && result.coordinates) {
      currentLocation.value = result.coordinates
      performSearch(true) // Automatically search when location is obtained
    } else {
      // Check if permission was specifically denied
      if (result.error?.code === 1) { // PERMISSION_DENIED
        locationPermissionDenied.value = true
      } else {
        locationError.value = result.error?.message || 'Failed to get location'
      }
    }
  } catch (err) {
    locationError.value = 'An unexpected error occurred while getting location'
  } finally {
    locationLoading.value = false
  }
}

// Clear location
function clearLocation() {
  currentLocation.value = null
  locationError.value = null
  locationPermissionDenied.value = false
  performSearch(true) // Re-search without location
}

// Pagination functions
function goToNextPage() {
  currentPage.value += 1
  updatePageInUrl()
  performSearch()
}

function goToPreviousPage() {
  // Use browser back button for better UX
  window.history.back()
}

function updatePageInUrl() {
  const query = { ...route.query }
  if (currentPage.value > 1) {
    query.page = currentPage.value.toString()
  } else {
    delete query.page
  }
  router.push({ query })
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

// Load initial options on mount
onMounted(async () => {
  // Initialize page from URL query parameters
  const pageParam = route.query.page
  if (pageParam && typeof pageParam === 'string') {
    const pageNumber = parseInt(pageParam, 10)
    if (pageNumber > 0) {
      currentPage.value = pageNumber
    }
  }

  // Load some initial deity and place options
  try {
    const [deityResult, placeResult] = await Promise.all([
      getDeities(''),
      getPlaces('')
    ])

    deityOptions.value = deityResult.options
    placeOptions.value = placeResult.options
  } catch (err) {
    console.error('Failed to load initial options:', err)
  }
})

// Watch for filter changes to trigger search
watch([selectedDeity, selectedPlace], () => {
  performSearch(true)
})

// Watch for radius changes to trigger search when location is set
watch(searchRadius, () => {
  if (currentLocation.value) {
    performSearch(true)
  }
})
</script>
