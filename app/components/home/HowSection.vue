<template>
  <HomeSectionWrapper id="how" title="How We're Building It" wrapperClass="bg-white">
    <div class="grid md:grid-cols-3 gap-8">
      <div class="relative group p-6 bg-gradient-to-br from-sky-50 to-emerald-50 rounded-2xl border border-sky-100">
        <div class="absolute top-4 right-4 text-sky-200 text-5xl font-black select-none">1</div>
        <h3 class="text-lg font-semibold flex items-center">
          <Icon name="material-symbols:flag" class="text-sky-500 mr-2" /> Phase 1 – India First
        </h3>
        <p class="mt-3 text-sm text-gray-600">Using India Post's DigiPIN system, we divided the nation into ~46,000
          zones (~4 sq. km each) for systematic coverage.</p>
      </div>
      <div class="relative group p-6 bg-gradient-to-br from-teal-50 to-sky-50 rounded-2xl border border-teal-100">
        <div class="absolute top-4 right-4 text-teal-200 text-5xl font-black select-none">2</div>
        <h3 class="text-lg font-semibold flex items-center">
          <Icon name="material-symbols:grid-view" class="text-teal-500 mr-2" /> Zone-by-Zone Collection
        </h3>
        <p class="mt-3 text-sm text-gray-600">Volunteers adopt a zone, explore via Google Maps, and document all Jain
          places.</p>
      </div>
      <div
        class="relative group p-6 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl border border-emerald-100">
        <div class="absolute top-4 right-4 text-emerald-200 text-5xl font-black select-none">3</div>
        <h3 class="text-lg font-semibold flex items-center">
          <Icon name="material-symbols:sync" class="text-emerald-500 mr-2" /> Dual Update Process
        </h3>
        <p class="mt-3 text-sm text-gray-600">List on Google Maps first if missing, then add or link in Jain
          Wiki—benefiting both ecosystems.</p>
      </div>
    </div>
  </HomeSectionWrapper>
</template>

<script setup>
</script>
