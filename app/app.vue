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
    { name: 'author', content: 'Jain Wiki Team' },
    { name: 'robots', content: 'index, follow' },
    { property: 'og:site_name', content: 'Jain Wiki' },
    { property: 'og:type', content: 'website' },
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
