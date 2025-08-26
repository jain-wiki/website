<template>
  <section class="relative overflow-hidden">
    <div class="absolute inset-0 -z-10 bg-gradient-to-br from-white via-sky-50 to-emerald-50"></div>
    <div
      class="absolute -top-24 -right-32 w-[34rem] h-[34rem] rounded-full bg-gradient-to-tr from-sky-200 via-teal-200 to-emerald-200 opacity-40 blur-3xl">
    </div>
    <div
      class="absolute -bottom-32 -left-32 w-[30rem] h-[30rem] rounded-full bg-gradient-to-tr from-cyan-200 via-sky-200 to-teal-200 opacity-40 blur-3xl">
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24">
      <div class="flex flex-col-reverse md:flex-row items-center gap-12">
        <div class="w-full md:w-7/12">
          <div
            class="inline-flex items-center space-x-2 rounded-full bg-sky-100/70 border border-sky-200 px-3 py-1 text-xs font-medium text-sky-700 mb-6">
            <Icon name="material-symbols:public" class="text-sky-600" />
            <span>Community Open Data Initiative</span>
          </div>
          <h1 class="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
            <span class="bg-clip-text text-transparent bg-gradient-to-r from-sky-500 via-teal-500 to-emerald-500">Jain
              Wiki</span>
            <span class="block mt-2 text-gray-800">Mapping Every Jain Place, Together</span>
          </h1>
          <p class="mt-6 text-lg sm:text-xl text-gray-600 max-w-2xl">
            A collaborative, open, and structured database of Jain temples, bhavans, sthanaks, bhojanshalas, and
            dharamshalas—starting with India, expanding worldwide.
          </p>
          <div class="mt-8 flex flex-col sm:flex-row gap-4">
            <UButton size="lg" color="sky" variant="solid" :ui="{ rounded: 'rounded-full' }" class="font-semibold"
              icon="i-heroicons-user-group">
              Join the Movement
            </UButton>
            <UButton size="lg" color="teal" variant="soft" :ui="{ rounded: 'rounded-full' }" class="font-semibold"
              icon="i-heroicons-map">
              Explore the Data
            </UButton>
            <UButton size="lg" color="emerald" variant="ghost" :ui="{ rounded: 'rounded-full' }" class="font-semibold"
              icon="i-heroicons-cloud-arrow-up">
              Contribute Data
            </UButton>
          </div>
        </div>
        <div class="w-full md:w-5/12 flex justify-center relative">
          <div class="relative group">
            <div
              class="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-sky-400 via-teal-400 to-emerald-400 opacity-30 blur-xl transition group-hover:opacity-60">
            </div>
            <div
              class="relative bg-white/70 backdrop-blur-md border border-sky-100 shadow-xl rounded-3xl p-6 flex flex-col items-center">
              <img src="/assets/img/logo.png" alt="Jain Wiki Logo" class="w-40 h-40 object-contain" />
              <p class="mt-4 text-center text-sm text-gray-600 max-w-xs">Built on Wikibase. Powered by community
                contributions. Designed for openness.</p>
              <div class="mt-6 grid grid-cols-3 gap-4 text-center">
                <div class="p-3 rounded-lg bg-sky-50 border border-sky-100">
                  <Icon name="material-symbols:volunteer-activism" class="text-sky-500 text-2xl" />
                  <p class="mt-1 text-xs font-medium text-sky-700">Volunteer</p>
                </div>
                <div class="p-3 rounded-lg bg-teal-50 border border-teal-100">
                  <Icon name="material-symbols:hub" class="text-teal-500 text-2xl" />
                  <p class="mt-1 text-xs font-medium text-teal-700">Open Data</p>
                </div>
                <div class="p-3 rounded-lg bg-emerald-50 border border-emerald-100">
                  <Icon name="material-symbols:map" class="text-emerald-500 text-2xl" />
                  <p class="mt-1 text-xs font-medium text-emerald-700">Mapping</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Hero section
</script>
