export interface LocationCoordinates {
  latitude: number
  longitude: number
}

export interface LocationError {
  code: number
  message: string
}

export interface LocationResult {
  success: boolean
  coordinates?: LocationCoordinates
  error?: LocationError
}

/**
 * Get user's current location using the browser's geolocation API
 * @param options GeolocationOptions for the request
 * @returns Promise<LocationResult>
 */
export async function getCurrentLocation(options?: PositionOptions): Promise<LocationResult> {
  return new Promise((resolve) => {
    // Check if we're in a browser environment and geolocation is supported
    if (typeof window === 'undefined' || typeof navigator === 'undefined' || !navigator.geolocation) {
      resolve({
        success: false,
        error: {
          code: -1,
          message: 'Geolocation is not supported by this browser'
        }
      })
      return
    }

    const defaultOptions: PositionOptions = {
      enableHighAccuracy: true,
      timeout: 10000,
      maximumAge: 300000, // 5 minutes
      ...options
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve({
          success: true,
          coordinates: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          }
        })
      },
      (error) => {
        let message: string
        switch (error.code) {
          case error.PERMISSION_DENIED:
            message = 'Location access denied by user'
            break
          case error.POSITION_UNAVAILABLE:
            message = 'Location information is unavailable'
            break
          case error.TIMEOUT:
            message = 'Location request timed out'
            break
          default:
            message = 'An unknown error occurred while retrieving location'
            break
        }

        resolve({
          success: false,
          error: {
            code: error.code,
            message
          }
        })
      },
      defaultOptions
    )
  })
}

/**
 * Check if the browser supports geolocation
 * @returns boolean
 */
export function isGeolocationSupported(): boolean {
  // Check if we're in a browser environment
  if (typeof window === 'undefined' || typeof navigator === 'undefined') {
    return false
  }
  return 'geolocation' in navigator
}

/**
 * Format coordinates for display
 * @param coordinates LocationCoordinates
 * @param precision Number of decimal places (default: 4)
 * @returns string
 */
export function formatCoordinates(coordinates: LocationCoordinates, precision: number = 4): string {
  return `${coordinates.latitude.toFixed(precision)}, ${coordinates.longitude.toFixed(precision)}`
}

/**
 * Calculate distance between two coordinates using Haversine formula
 * @param coord1 First coordinate
 * @param coord2 Second coordinate
 * @returns Distance in kilometers
 */
export function calculateDistance(coord1: LocationCoordinates, coord2: LocationCoordinates): number {
  const R = 6371 // Earth's radius in kilometers
  const dLat = (coord2.latitude - coord1.latitude) * Math.PI / 180
  const dLon = (coord2.longitude - coord1.longitude) * Math.PI / 180
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(coord1.latitude * Math.PI / 180) * Math.cos(coord2.latitude * Math.PI / 180) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  const d = R * c
  return d
}