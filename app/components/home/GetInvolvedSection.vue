<template>
  <HomeSectionWrapper id="get-involved" title="Get Involved" wrapperClass="bg-white"
    subtitle="This is a community movement — your contribution matters.">
    <div class="gap-8 grid md:grid-cols-3">
      <div class="bg-sky-50/60 p-6 border border-sky-100 rounded-2xl">
        <Icon name="material-symbols:volunteer-activism" class="text-sky-500 text-3xl" />
        <h3 class="mt-4 font-semibold text-gray-800">Volunteer Locally</h3>
        <p class="mt-2 text-gray-600 text-sm">Adopt a zone and help map every Jain place in your area.</p>
        <UButton color="sky" variant="soft" class="mt-4" size="sm" icon="i-heroicons-user-plus" target="_blank"
          rel="noopener noreferrer" href="https://forms.gle/hWPYva1sXRKyjimf8">Sign Up</UButton>
      </div>
      <div class="bg-teal-50/60 p-6 border border-teal-100 rounded-2xl">
        <Icon name="material-symbols:cloud-upload" class="text-teal-500 text-3xl" />
        <h3 class="mt-4 font-semibold text-gray-800">Contribute Data</h3>
        <p class="mt-2 text-gray-600 text-sm">Add missing places or improve details for accuracy and richness.</p>
        <UButton color="teal" variant="soft" class="mt-4" size="sm" icon="i-heroicons-cloud-arrow-up" target="_blank"
          rel="noopener noreferrer" href="https://data.jain.wiki">Add Data</UButton>
      </div>
      <div class="bg-emerald-50/60 p-6 border border-emerald-100 rounded-2xl">
        <Icon name="material-symbols:explore" class="text-emerald-500 text-3xl" />
        <h3 class="mt-4 font-semibold text-gray-800">Explore the Graph</h3>
        <p class="mt-2 text-gray-600 text-sm">Query, analyze, and build apps on top of our structured dataset.</p>
        <UButton color="emerald" variant="soft" class="mt-4" size="sm" icon="i-heroicons-command-line" target="_blank"
          rel="noopener noreferrer" href="https://data.jain.wiki/query/">Run a Query
        </UButton>
      </div>
    </div>
    <div class="mt-12 text-center">
      <p class="text-gray-600 text-sm">Together we can ensure every Jain place is visible, documented, and celebrated.
      </p>
      <div class="flex sm:flex-row flex-col justify-center gap-4 mt-6">
        <UButton size="lg" color="sky" variant="solid" icon="i-heroicons-user-group" :ui="{ rounded: 'rounded-full' }"
          target="_blank" rel="noopener noreferrer" href="https://forms.gle/hWPYva1sXRKyjimf8">
          Join the Movement</UButton>
        <UButton size="lg" color="emerald" variant="soft" icon="i-heroicons-cloud-arrow-up" target="_blank"
          rel="noopener noreferrer" href="https://data.jain.wiki" :ui="{ rounded: 'rounded-full' }">
          Contribute Data </UButton>
        <UButton size="lg" color="teal" variant="ghost" icon="i-heroicons-map" :ui="{ rounded: 'rounded-full' }"
          target="_blank" rel="noopener noreferrer" href="https://data.jain.wiki/query/">
          Explore the Data</UButton>
      </div>
    </div>
  </HomeSectionWrapper>
</template>

<script setup>
</script>
