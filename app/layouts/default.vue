<template>
  <div class="page-container">
    <!-- Header -->
    <header class="bg-white shadow-sm border-gray-200 border-b">
      <div class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div class="flex justify-between items-center h-16">
          <!-- Logo/Brand -->
          <div class="flex items-center">
            <NuxtLink to="/" class="font-bold text-gray-900 text-xl">
              Jain Wiki
            </NuxtLink>
          </div>

          <!-- Navigation -->
          <nav class="hidden md:flex space-x-8">
            <NuxtLink to="/" class="px-3 py-2 font-medium text-gray-900 hover:text-blue-600 text-sm">
              Home
            </NuxtLink>
            <NuxtLink to="/about" class="px-3 py-2 font-medium text-gray-900 hover:text-blue-600 text-sm">
              About
            </NuxtLink>
          </nav>

          <!-- Mobile menu button -->
          <div class="md:hidden">
            <UButton icon="i-heroicons-bars-3" variant="ghost" @click="mobileMenuOpen = !mobileMenuOpen" />
          </div>
        </div>

        <!-- Mobile Navigation -->
        <div v-if="mobileMenuOpen" class="md:hidden py-2 border-gray-200 border-t">
          <div class="space-y-1 px-2 pt-2 pb-3">
            <NuxtLink to="/" class="block px-3 py-2 font-medium text-gray-900 hover:text-blue-600 text-base">
              Home
            </NuxtLink>
            <NuxtLink to="/about" class="block px-3 py-2 font-medium text-gray-900 hover:text-blue-600 text-base">
              About
            </NuxtLink>
          </div>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="main-content">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="bg-gray-800 text-white">
      <div class="mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-7xl">
        <div class="text-center">
          <p>&copy; {{ new Date().getFullYear() }} Jain Wiki. All rights reserved.</p>
          <p class="mt-2 text-gray-400">
            Built with ❤️ using Nuxt {{ $nuxt.ssrContext?.nuxtVersion || '4.x' }}
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const mobileMenuOpen = ref(false)

// Close mobile menu when route changes
const route = useRoute()
watch(() => route.path, () => {
  mobileMenuOpen.value = false
})
</script>
