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
  meta: [


  ],
  link: [
    { rel: 'canonical', href: 'https://jain.wiki' }
  ]
})

// Global site configuration
useSeoMeta({
  ogUrl: 'https://jain.wiki',
})
</script>
