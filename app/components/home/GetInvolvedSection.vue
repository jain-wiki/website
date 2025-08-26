<template>
  <HomeSectionWrapper id="get-involved" title="Get Involved" wrapperClass="bg-white"
    subtitle="This is a community movement — your contribution matters.">
    <div class="grid md:grid-cols-3 gap-8">
      <div class="p-6 rounded-2xl border border-sky-100 bg-sky-50/60">
        <Icon name="material-symbols:volunteer-activism" class="text-sky-500 text-3xl" />
        <h3 class="mt-4 font-semibold text-gray-800">Volunteer Locally</h3>
        <p class="mt-2 text-sm text-gray-600">Adopt a zone and help map every Jain place in your area.</p>
        <UButton color="sky" variant="soft" class="mt-4" size="sm" icon="i-heroicons-user-plus">Sign Up</UButton>
      </div>
      <div class="p-6 rounded-2xl border border-teal-100 bg-teal-50/60">
        <Icon name="material-symbols:cloud-upload" class="text-teal-500 text-3xl" />
        <h3 class="mt-4 font-semibold text-gray-800">Contribute Data</h3>
        <p class="mt-2 text-sm text-gray-600">Add missing places or improve details for accuracy and richness.</p>
        <UButton color="teal" variant="soft" class="mt-4" size="sm" icon="i-heroicons-cloud-arrow-up">Add Data</UButton>
      </div>
      <div class="p-6 rounded-2xl border border-emerald-100 bg-emerald-50/60">
        <Icon name="material-symbols:explore" class="text-emerald-500 text-3xl" />
        <h3 class="mt-4 font-semibold text-gray-800">Explore the Graph</h3>
        <p class="mt-2 text-sm text-gray-600">Query, analyze, and build apps on top of our structured dataset.</p>
        <UButton color="emerald" variant="soft" class="mt-4" size="sm" icon="i-heroicons-command-line">Run a Query
        </UButton>
      </div>
    </div>
    <div class="mt-12 text-center">
      <p class="text-gray-600 text-sm">Together we can ensure every Jain place is visible, documented, and celebrated.
      </p>
      <div class="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
        <UButton size="lg" color="sky" variant="solid" icon="i-heroicons-user-group" :ui="{ rounded: 'rounded-full' }">
          Join the Movement</UButton>
        <UButton size="lg" color="emerald" variant="soft" icon="i-heroicons-cloud-arrow-up"
          :ui="{ rounded: 'rounded-full' }">Contribute Data</UButton>
        <UButton size="lg" color="teal" variant="ghost" icon="i-heroicons-map" :ui="{ rounded: 'rounded-full' }">Explore
          the Data</UButton>
      </div>
    </div>
  </HomeSectionWrapper>
</template>

<script setup>
</script>
