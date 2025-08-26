<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-gray-50 py-16">
      <div class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div class="text-center">
          <h1 class="mb-6 font-bold text-gray-900 text-4xl md:text-5xl">
            About Jain Wiki
          </h1>
          <p class="mx-auto max-w-3xl text-gray-600 text-lg md:text-xl">
            Learn more about our mission, vision, and the team behind this platform.
          </p>
        </div>
      </div>
    </section>

    <!-- Content Sections -->
    <section class="py-16">
      <div class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div class="items-center gap-12 grid grid-cols-1 lg:grid-cols-2">
          <!-- Our Mission -->
          <div>
            <h2 class="mb-6 font-bold text-gray-900 text-3xl">
              Our Mission
            </h2>
            <p class="mb-6 text-gray-600 text-lg">
              We are dedicated to creating a comprehensive knowledge hub that empowers individuals
              and organizations with the information they need to succeed.
            </p>
            <p class="text-gray-600 text-lg">
              Our platform is built with modern technologies and designed to provide
              fast, reliable, and secure access to knowledge.
            </p>
          </div>

          <!-- Placeholder for image -->
          <div class="flex justify-center items-center bg-gray-200 rounded-lg h-64">
            <p class="text-gray-500">Mission Image Placeholder</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Values Section -->
    <section class="bg-gray-50 py-16">
      <div class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div class="mb-12 text-center">
          <h2 class="mb-4 font-bold text-gray-900 text-3xl">
            Our Values
          </h2>
          <p class="text-gray-600 text-lg">
            The principles that guide everything we do
          </p>
        </div>

        <div class="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <div v-for="value in values" :key="value.title" class="text-center">
            <div class="flex justify-center items-center bg-blue-100 mx-auto mb-4 rounded-full w-16 h-16">
              <UIcon :name="value.icon" class="text-blue-600 text-2xl" />
            </div>
            <h3 class="mb-2 font-semibold text-gray-900 text-xl">{{ value.title }}</h3>
            <p class="text-gray-600">{{ value.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="py-16">
      <div class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div class="mb-12 text-center">
          <h2 class="mb-4 font-bold text-gray-900 text-3xl">
            By the Numbers
          </h2>
          <p class="text-gray-600 text-lg">
            Some key metrics about our platform
          </p>
        </div>

        <div class="gap-8 grid grid-cols-1 md:grid-cols-3">
          <div v-for="stat in stats" :key="stat.label" class="text-center">
            <div class="mb-2 font-bold text-blue-600 text-4xl">{{ stat.value }}</div>
            <div class="mb-1 font-medium text-gray-900 text-lg">{{ stat.label }}</div>
            <div class="text-gray-600">{{ stat.description }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="bg-blue-600 py-16 text-white">
      <div class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
        <h2 class="mb-4 font-bold text-3xl">
          Get in Touch
        </h2>
        <p class="mb-8 text-blue-100 text-lg">
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
