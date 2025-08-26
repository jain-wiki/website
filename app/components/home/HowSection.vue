<template>
  <HomeSectionWrapper id="how" title="How We're Building It" wrapperClass="bg-white">
    <div class="gap-8 grid md:grid-cols-3">
      <div class="group relative bg-gradient-to-br from-sky-50 to-emerald-50 p-6 border border-sky-100 rounded-2xl">
        <div class="top-4 right-4 absolute font-black text-sky-200 text-5xl select-none">1</div>
        <h3 class="flex items-center font-semibold text-lg">
          <Icon name="material-symbols:flag" class="mr-2 text-sky-500" /> Phase 1 – India First
        </h3>
        <p class="mt-3 text-gray-600 text-sm">Using India Post's DigiPIN system, we divided the nation into ~46,000
          zones (~4 sq. km each) for systematic coverage.</p>
      </div>
      <div class="group relative bg-gradient-to-br from-teal-50 to-sky-50 p-6 border border-teal-100 rounded-2xl">
        <div class="top-4 right-4 absolute font-black text-teal-200 text-5xl select-none">2</div>
        <h3 class="flex items-center font-semibold text-lg">
          <Icon name="material-symbols:grid-view" class="mr-2 text-teal-500" /> Zone-by-Zone Collection
        </h3>
        <p class="mt-3 text-gray-600 text-sm">Volunteers adopt a zone, explore via Google Maps, and document all Jain
          places.</p>
      </div>
      <div
        class="group relative bg-gradient-to-br from-emerald-50 to-teal-50 p-6 border border-emerald-100 rounded-2xl">
        <div class="top-4 right-4 absolute font-black text-emerald-200 text-5xl select-none">3</div>
        <h3 class="flex items-center font-semibold text-lg">
          <Icon name="material-symbols:sync" class="mr-2 text-emerald-500" /> Dual Update Process
        </h3>
        <p class="mt-3 text-gray-600 text-sm">List on Google Maps first if missing, then add or link in Jain
          Wiki—benefiting both ecosystems.</p>
      </div>
    </div>
  </HomeSectionWrapper>
</template>

<script setup>
</script>
