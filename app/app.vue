<template>
  <UApp>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>

<script setup>
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
