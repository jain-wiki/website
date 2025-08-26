<template>
  <div>
    <HeroSection />
    <MissionSection />
    <WhySection />
    <DifferenceSection />
    <HowSection />
    <ImpactSection />
    <GetInvolvedSection />
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'Home',
  ogTitle: 'Jain Wiki – Mapping Every Jain Place, Together',
  description: 'Open, collaborative, structured database of Jain temples and community places. Join the movement to map every Jain place.',
  ogDescription: 'Open, collaborative, structured database of Jain temples and community places. Join the movement to map every Jain place.',
  ogImage: '/images/og-home.jpg',
  twitterCard: 'summary_large_image',
})

useHead({
  link: [
    { rel: 'canonical', href: 'https://jain.wiki' }
  ]
})
</script>
