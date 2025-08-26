<template>
  <UApp>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>

<script setup>
// Force light mode on app initialization
const colorMode = useColorMode()
colorMode.value = 'light'

// Global SEO configuration
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Jain Wiki` : 'Jain Wiki - Your Knowledge Hub'
  },
})

// Global site configuration
useSeoMeta({
  ogUrl: 'https://jain.wiki',
})
</script>
