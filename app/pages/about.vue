<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-gray-50 py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Jain Wiki
          </h1>
          <p class="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Learn more about our mission, vision, and the team behind this platform.
          </p>
        </div>
      </div>
    </section>

    <!-- Content Sections -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- Our Mission -->
          <div>
            <h2 class="text-3xl font-bold text-gray-900 mb-6">
              Our Mission
            </h2>
            <p class="text-lg text-gray-600 mb-6">
              We are dedicated to creating a comprehensive knowledge hub that empowers individuals
              and organizations with the information they need to succeed.
            </p>
            <p class="text-lg text-gray-600">
              Our platform is built with modern technologies and designed to provide
              fast, reliable, and secure access to knowledge.
            </p>
          </div>

          <!-- Placeholder for image -->
          <div class="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
            <p class="text-gray-500">Mission Image Placeholder</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Values Section -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">
            Our Values
          </h2>
          <p class="text-lg text-gray-600">
            The principles that guide everything we do
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="value in values" :key="value.title" class="text-center">
            <div class="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <UIcon :name="value.icon" class="text-2xl text-blue-600" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ value.title }}</h3>
            <p class="text-gray-600">{{ value.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">
            By the Numbers
          </h2>
          <p class="text-lg text-gray-600">
            Some key metrics about our platform
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="stat in stats" :key="stat.label" class="text-center">
            <div class="text-4xl font-bold text-blue-600 mb-2">{{ stat.value }}</div>
            <div class="text-lg font-medium text-gray-900 mb-1">{{ stat.label }}</div>
            <div class="text-gray-600">{{ stat.description }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="py-16 bg-blue-600 text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl font-bold mb-4">
          Get in Touch
        </h2>
        <p class="text-lg mb-8 text-blue-100">
          Have questions or want to learn more? We'd love to hear from you.
        </p>
        <UButton size="lg" color="white" variant="solid" disabled>
          Contact Us (Coming Soon)
        </UButton>
      </div>
    </section>
  </div>
</template>

<script setup>
// SEO Meta tags
useSeoMeta({
  title: 'About - Jain Wiki',
  ogTitle: 'About Jain Wiki',
  description: 'Learn more about Jain Wiki, our mission, values, and the team behind this comprehensive knowledge platform.',
  ogDescription: 'Learn more about Jain Wiki, our mission, values, and the team behind this comprehensive knowledge platform.',
  ogImage: '/images/og-about.jpg',
  twitterCard: 'summary_large_image',
})

// Values data
const values = [
  {
    title: 'Innovation',
    description: 'Constantly pushing boundaries and embracing new technologies.',
    icon: 'i-heroicons-light-bulb'
  },
  {
    title: 'Quality',
    description: 'Delivering excellence in everything we create.',
    icon: 'i-heroicons-star'
  },
  {
    title: 'Community',
    description: 'Building strong relationships and fostering collaboration.',
    icon: 'i-heroicons-users'
  },
  {
    title: 'Growth',
    description: 'Continuously learning and evolving to serve you better.',
    icon: 'i-heroicons-arrow-trending-up'
  }
]

// Stats data
const stats = [
  {
    value: '10K+',
    label: 'Active Users',
    description: 'People trust our platform'
  },
  {
    value: '50+',
    label: 'Features',
    description: 'Tools to help you succeed'
  },
  {
    value: '99.9%',
    label: 'Uptime',
    description: 'Reliable service you can count on'
  }
]
</script>
