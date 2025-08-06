<template>
  <div class="page-container">
    <!-- Header -->
    <header class="bg-white border-b border-gray-200 shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <!-- Logo/Brand -->
          <div class="flex items-center">
            <NuxtLink to="/" class="text-xl font-bold text-gray-900">
              Jain Wiki
            </NuxtLink>
          </div>

          <!-- Navigation -->
          <nav class="hidden md:flex space-x-8">
            <NuxtLink to="/" class="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium">
              Home
            </NuxtLink>
            <NuxtLink to="/about" class="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium">
              About
            </NuxtLink>
          </nav>

          <!-- Mobile menu button -->
          <div class="md:hidden">
            <UButton icon="i-heroicons-bars-3" variant="ghost" @click="mobileMenuOpen = !mobileMenuOpen" />
          </div>
        </div>

        <!-- Mobile Navigation -->
        <div v-if="mobileMenuOpen" class="md:hidden py-2 border-t border-gray-200">
          <div class="px-2 pt-2 pb-3 space-y-1">
            <NuxtLink to="/" class="text-gray-900 hover:text-blue-600 block px-3 py-2 text-base font-medium">
              Home
            </NuxtLink>
            <NuxtLink to="/about" class="text-gray-900 hover:text-blue-600 block px-3 py-2 text-base font-medium">
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
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
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
