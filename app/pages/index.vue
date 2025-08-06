<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div class="text-center">
          <h1 class="text-4xl md:text-6xl font-bold mb-6">
            Welcome to Jain Wiki
          </h1>
          <p class="text-lg md:text-xl mb-8 text-blue-100">
            Your comprehensive knowledge hub for everything you need to know
          </p>
          <div class="space-x-4">
            <UButton size="lg" color="white" variant="solid" to="/about">
              Get Started
            </UButton>
            <UButton size="lg" color="white" variant="outline" to="/about">
              Learn More
            </UButton>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">
            Key Features
          </h2>
          <p class="text-lg text-gray-600">
            Discover what makes our platform special
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <UCard v-for="feature in features" :key="feature.title" class="h-full">
            <template #header>
              <div class="flex items-center space-x-3">
                <UIcon :name="feature.icon" class="text-2xl text-blue-500" />
                <h3 class="text-xl font-semibold">{{ feature.title }}</h3>
              </div>
            </template>

            <p class="text-gray-600">{{ feature.description }}</p>
          </UCard>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl font-bold text-gray-900 mb-4">
          Ready to Get Started?
        </h2>
        <p class="text-lg text-gray-600 mb-8">
          Join thousands of users who trust our platform
        </p>
        <UButton size="lg" color="primary" to="/about">
          Start Exploring
        </UButton>
      </div>
    </section>
  </div>
</template>

<script setup>
// SEO Meta tags
useSeoMeta({
  title: 'Home - Jain Wiki',
  ogTitle: 'Welcome to Jain Wiki',
  description: 'Your comprehensive knowledge hub for everything you need to know. Explore our features and get started today.',
  ogDescription: 'Your comprehensive knowledge hub for everything you need to know. Explore our features and get started today.',
  ogImage: '/images/og-home.jpg',
  twitterCard: 'summary_large_image',
})

// Features data
const features = [
  {
    title: 'Fast & Reliable',
    description: 'Built with modern technologies for optimal performance and reliability.',
    icon: 'i-heroicons-bolt'
  },
  {
    title: 'User Friendly',
    description: 'Intuitive interface designed with user experience in mind.',
    icon: 'i-heroicons-user-group'
  },
  {
    title: 'Secure',
    description: 'Industry-standard security measures to protect your data.',
    icon: 'i-heroicons-shield-check'
  }
]
</script>
