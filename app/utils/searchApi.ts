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

export interface SearchResult {
  id: number
  d: string
  parsedData: ParsedData
}

interface ApiResponse {
  data: Array<{
    id: number
    d: string
  }>
}

export interface DropdownOption {
  id: number
  name: string
  value: string // Will be 'Q' + id
}

// Parse the 'd' field from API response
const parseData = (rawData: string): ParsedData => {
  try {
    return JSON.parse(rawData)
  } catch (error) {
    console.error('Failed to parse data:', error)
    return {
      id: 0,
      name: 'Unknown',
      description: 'Failed to parse data'
    }
  }
}

// Transform API response to our format
const transformResults = (apiResponse: ApiResponse): SearchResult[] => {
  return apiResponse.data.map(item => ({
    id: item.id,
    d: item.d,
    parsedData: parseData(item.d)
  }))
}

// Get base URL from runtime config
const getBaseUrl = () => {
  const config = useRuntimeConfig()
  return config.public.apiBaseUrl
}

// Search for places/temples
export const searchPlaces = async (params: {
  q?: string
  place?: string
  deity?: string
  latitude?: number
  longitude?: number
  radius?: number
  limit?: number
  offset?: number
}): Promise<{ results: SearchResult[], error: string | null }> => {
  try {
    const baseUrl = getBaseUrl()
    const query = new URLSearchParams()

    if (params.limit !== undefined) query.append('limit', params.limit.toString())
    if (params.offset !== undefined) query.append('offset', params.offset.toString())
    if (params.q) query.append('q', params.q)
    if (params.place) query.append('place', params.place)
    if (params.deity) query.append('deity', params.deity)
    if (params.latitude !== undefined) query.append('latitude', params.latitude.toString())
    if (params.longitude !== undefined) query.append('longitude', params.longitude.toString())
    if (params.radius !== undefined) query.append('radius', params.radius.toString())

    const response = await $fetch<ApiResponse>(`${baseUrl}/search?${query.toString()}`)
    return {
      results: transformResults(response),
      error: null
    }
  } catch (err) {
    return {
      results: [],
      error: err instanceof Error ? err.message : 'Failed to search places'
    }
  }
}

// Get deities for dropdown
export const getDeities = async (q: string = ''): Promise<{ options: DropdownOption[], error: string | null }> => {
  try {
    const baseUrl = getBaseUrl()
    const query = new URLSearchParams({
      instanceOf: 'Q44'
    })

    if (q.trim()) query.append('q', q.trim())

    const response = await $fetch<ApiResponse>(`${baseUrl}/search?${query.toString()}`)
    const options = response.data.map(item => {
      const parsedData = parseData(item.d)
      return {
        id: item.id,
        name: parsedData.name || `Deity ${item.id}`,
        value: `Q${item.id}`
      }
    })

    return {
      options,
      error: null
    }
  } catch (err) {
    return {
      options: [],
      error: err instanceof Error ? err.message : 'Failed to fetch deities'
    }
  }
}

// Get places for dropdown
export const getPlaces = async (q: string = ''): Promise<{ options: DropdownOption[], error: string | null }> => {
  try {
    const baseUrl = getBaseUrl()
    const query = new URLSearchParams({
      instanceOf: 'Q43'
    })

    if (q.trim()) query.append('q', q.trim())

    const response = await $fetch<ApiResponse>(`${baseUrl}/search?${query.toString()}`)
    const options = response.data.map(item => {
      const parsedData = parseData(item.d)
      return {
        id: item.id,
        name: parsedData.name || `Place ${item.id}`,
        value: `Q${item.id}`
      }
    })

    return {
      options,
      error: null
    }
  } catch (err) {
    return {
      options: [],
      error: err instanceof Error ? err.message : 'Failed to fetch places'
    }
  }
}