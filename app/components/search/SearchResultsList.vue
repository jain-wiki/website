<template>
  <div class="space-y-4">
    <div v-if="loading" class="space-y-3">
      <UCard v-for="i in 3" :key="i" class="animate-pulse">
        <template #header>
          <div class="flex justify-between items-start">
            <USkeleton class="w-48 h-6" />
            <USkeleton class="rounded-full w-16 h-5" />
          </div>
        </template>

        <div class="space-y-3">
          <USkeleton class="w-full h-4" />
          <USkeleton class="w-3/4 h-4" />

          <div class="flex items-center space-x-2">
            <USkeleton class="rounded-full w-4 h-4" />
            <USkeleton class="w-32 h-4" />
          </div>

          <div class="space-y-2">
            <div class="flex items-start space-x-2">
              <USkeleton class="rounded-full w-4 h-4" />
              <USkeleton class="w-24 h-4" />
            </div>

            <div class="flex items-center space-x-2">
              <USkeleton class="rounded-full w-4 h-4" />
              <USkeleton class="w-28 h-4" />
            </div>
          </div>
        </div>

        <template #footer>
          <div class="flex justify-between items-center">
            <div class="flex space-x-2">
              <USkeleton class="rounded-md w-24 h-8" />
              <USkeleton class="rounded-md w-28 h-8" />
            </div>
            <USkeleton class="rounded-md w-8 h-8" />
          </div>
        </template>
      </UCard>
    </div>

    <div v-else-if="results.length === 0 && !loading" class="py-8 text-gray-500 text-center">
      <UIcon name="i-heroicons-magnifying-glass" class="mx-auto mb-4 w-12 h-12" />
      <p>No results found. Try adjusting your search criteria.</p>
    </div>

    <div v-else class="space-y-3">
      <UCard v-for="result in results" :key="result.id"
        class="hover:shadow-md transition-shadow duration-200 cursor-pointer" @click="handleResultClick(result)">
        <template #header>
          <div class="flex justify-between items-start">
            <h3 class="font-semibold text-gray-900 dark:text-white text-lg">
              {{ result.parsedData.name || 'Unnamed Place' }}
            </h3>
            <UBadge color="primary" variant="soft" size="sm">
              ID: {{ result.id }}
            </UBadge>
          </div>
        </template>

        <div class="space-y-3">
          <p v-if="result.parsedData.description" class="text-gray-600 dark:text-gray-400 text-sm">
            {{ result.parsedData.description }}
          </p>

          <div v-if="result.parsedData.location" class="flex items-center space-x-2 text-gray-500 text-sm">
            <UIcon name="i-heroicons-map-pin" class="w-4 h-4" />
            <span>
              {{ result.parsedData.location.latitude }}, {{ result.parsedData.location.longitude }}
            </span>
          </div>

          <div v-if="result.parsedData.claims" class="space-y-2">
            <div v-if="result.parsedData.claims.P14" class="flex items-start space-x-2 text-sm">
              <UIcon name="i-heroicons-building-office-2" class="mt-0.5 w-4 h-4 text-gray-400" />
              <span class="text-gray-600 dark:text-gray-400">{{ result.parsedData.claims.P14[0] }}</span>
            </div>

            <div v-if="result.parsedData.claims.P15" class="flex items-center space-x-2 text-sm">
              <UIcon name="i-heroicons-map" class="w-4 h-4 text-gray-400" />
              <span class="text-gray-600 dark:text-gray-400">Postal Code: {{ result.parsedData.claims.P15[0] }}</span>
            </div>
          </div>
        </div>

        <template #footer>
          <div class="flex justify-between items-center">
            <div class="flex space-x-2">
              <UButton v-if="result.parsedData.claims?.P5" size="sm" variant="soft" color="info"
                @click.stop="openGoogleMaps(result.parsedData.claims.P5[0]!)">
                <UIcon name="i-heroicons-globe-alt" class="mr-1 w-3 h-3" />
                View on Maps
              </UButton>

              <UButton v-if="result.parsedData.location" size="sm" variant="soft" color="success"
                @click.stop="$emit('showOnMap', result)">
                <UIcon name="i-heroicons-map-pin" class="mr-1 w-3 h-3" />
                Show on Map
              </UButton>
            </div>

            <UButton size="sm" variant="ghost" @click.stop="$emit('selectResult', result)">
              <UIcon name="i-heroicons-arrow-right" class="w-3 h-3" />
            </UButton>
          </div>
        </template>
      </UCard>
    </div>

    <div v-if="results.length > 0" class="pt-4 text-gray-500 text-sm text-center">
      Showing {{ results.length }} result{{ results.length !== 1 ? 's' : '' }}
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

defineProps<Props>()

const emit = defineEmits<{
  selectResult: [result: SearchResult]
  showOnMap: [result: SearchResult]
}>()

const handleResultClick = (result: SearchResult) => {
  emit('selectResult', result)
}

const openGoogleMaps = (url: string) => {
  window.open(url, '_blank')
}
</script>