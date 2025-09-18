<template>
  <div class="w-full h-full">
    <div v-if="loading" class="flex justify-center items-center h-96">
      Loading ...
    </div>

    <div v-else-if="results.length === 0 && !loading"
      class="flex flex-col justify-center items-center h-96 text-gray-500">
      <UIcon name="i-heroicons-map" class="mb-4 w-16 h-16" />
      <p>No locations to display on map</p>
    </div>

    <div v-else class="space-y-4">
      <!-- Map placeholder - you'll need to integrate with a map library like Leaflet or Google Maps -->
      <div
        class="relative flex justify-center items-center bg-gray-100 dark:bg-gray-800 rounded-lg h-96 overflow-hidden">
        <div class="text-center">
          <UIcon name="i-heroicons-map" class="mx-auto mb-2 w-12 h-12 text-gray-400" />
          <p class="text-gray-500 text-sm">Interactive Map</p>
          <p class="mt-1 text-gray-400 text-xs">{{ results.length }} location{{ results.length !== 1 ? 's' : '' }} found
          </p>
        </div>

        <!-- Map markers visualization -->
        <div class="absolute inset-0 p-4">
          <div v-for="(result, index) in limitedResults" :key="result.id"
            class="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer transform"
            :style="getMarkerPosition(index)" @click="selectResult(result)">
            <div class="relative">
              <UIcon name="i-heroicons-map-pin" class="w-6 h-6 text-red-500 hover:text-red-600 transition-colors" />
              <div v-if="selectedResult?.id === result.id"
                class="bottom-full left-1/2 z-10 absolute bg-white dark:bg-gray-800 shadow-lg mb-2 p-2 border rounded-lg min-w-48 -translate-x-1/2 transform">
                <div class="font-medium text-sm">{{ result.parsedData.name }}</div>
                <div v-if="result.parsedData.description" class="mt-1 text-gray-500 text-xs">
                  {{ result.parsedData.description.slice(0, 100) }}{{ result.parsedData.description.length > 100 ? '...'
                    : '' }}
                </div>
                <div class="mt-1 text-gray-400 text-xs">
                  {{ result.parsedData.location?.latitude }}, {{ result.parsedData.location?.longitude }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Map controls -->
      <div class="flex justify-between items-center">
        <div class="flex space-x-2">
          <UButton size="sm" variant="soft" @click="zoomIn">
            <UIcon name="i-heroicons-plus" class="w-3 h-3" />
          </UButton>
          <UButton size="sm" variant="soft" @click="zoomOut">
            <UIcon name="i-heroicons-minus" class="w-3 h-3" />
          </UButton>
          <UButton size="sm" variant="soft" @click="resetView">
            <UIcon name="i-heroicons-arrow-path" class="w-3 h-3" />
          </UButton>
        </div>

        <div class="text-gray-500 text-sm">
          {{ results.length }} location{{ results.length !== 1 ? 's' : '' }}
        </div>
      </div>

      <!-- Location list (for mobile or as fallback) -->
      <div class="lg:hidden">
        <UCard>
          <template #header>
            <h3 class="font-semibold text-lg">Locations</h3>
          </template>

          <div class="space-y-2 max-h-48 overflow-y-auto">
            <div v-for="result in results" :key="result.id"
              class="flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-800 p-2 rounded cursor-pointer"
              @click="selectResult(result)">
              <div class="flex-1 min-w-0">
                <div class="font-medium text-sm truncate">{{ result.parsedData.name }}</div>
                <div v-if="result.parsedData.location" class="text-gray-500 text-xs">
                  {{ result.parsedData.location.latitude }}, {{ result.parsedData.location.longitude }}
                </div>
              </div>
              <UIcon name="i-heroicons-map-pin" class="flex-shrink-0 w-4 h-4 text-red-500" />
            </div>
          </div>
        </UCard>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { SearchResult } from '~/utils/searchApi'

interface ParsedData {
  id: number
  name: string
  description?: string
  location?: {
    latitude: number
    longitude: number
  }
  claims?: {
    [key: string]: string[]
  }
}

interface Props {
  results: SearchResult[]
  loading?: boolean
}

const props = defineProps<Props>()

const emit = defineEmits<{
  selectResult: [result: SearchResult]
}>()

const selectedResult = ref<SearchResult | null>(null)

// Limit markers on map for performance
const limitedResults = computed(() => {
  return props.results
    .filter(result => result.parsedData.location)
    .slice(0, 20) // Limit to 20 markers for performance
})

const selectResult = (result: SearchResult) => {
  selectedResult.value = selectedResult.value?.id === result.id ? null : result
  emit('selectResult', result)
}

// Generate pseudo-random positions for markers (replace with actual map coordinates)
const getMarkerPosition = (index: number) => {
  const positions = [
    { top: '20%', left: '30%' },
    { top: '40%', left: '60%' },
    { top: '60%', left: '25%' },
    { top: '30%', left: '75%' },
    { top: '70%', left: '50%' },
    { top: '25%', left: '45%' },
    { top: '55%', left: '80%' },
    { top: '45%', left: '20%' },
    { top: '80%', left: '40%' },
    { top: '35%', left: '65%' },
  ]

  const position = positions[index % positions.length]
  return position
}

const zoomIn = () => {
  // Placeholder for zoom functionality
  console.log('Zoom in')
}

const zoomOut = () => {
  // Placeholder for zoom functionality
  console.log('Zoom out')
}

const resetView = () => {
  // Placeholder for reset view functionality
  selectedResult.value = null
  console.log('Reset view')
}
</script>