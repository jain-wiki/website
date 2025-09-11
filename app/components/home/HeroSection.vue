<template>
  <section class="relative overflow-hidden">
    <div class="-z-10 absolute inset-0 bg-gradient-to-br from-white via-sky-50 to-emerald-50"></div>
    <div
      class="-top-24 -right-32 -z-10 absolute bg-gradient-to-tr from-sky-200 via-teal-200 to-emerald-200 opacity-40 blur-3xl rounded-full w-[34rem] h-[34rem]">
    </div>
    <div
      class="-bottom-32 -left-32 -z-10 absolute bg-gradient-to-tr from-cyan-200 via-sky-200 to-teal-200 opacity-40 blur-3xl rounded-full w-[30rem] h-[30rem]">
    </div>

    <div class="mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 max-w-7xl">
      <div class="flex md:flex-row flex-col-reverse items-center gap-12">
        <div class="w-full md:w-7/12">
          <div
            class="inline-flex items-center space-x-2 bg-sky-100/70 mb-6 px-3 py-1 border border-sky-200 rounded-full font-medium text-sky-700 text-xs">
            <Icon name="material-symbols:public" class="text-sky-600" />
            <span>Community Open Data Initiative</span>
          </div>
          <h1 class="font-extrabold text-4xl sm:text-5xl md:text-6xl leading-tight tracking-tight">
            <span class="bg-clip-text bg-gradient-to-r from-sky-500 via-teal-500 to-emerald-500 text-transparent">Jain
              Wiki</span>
            <span class="block mt-2 text-gray-800">Mapping Every Jain Place, Together</span>
          </h1>
          <p class="mt-6 max-w-2xl text-gray-600 text-lg sm:text-xl">
            A collaborative, open, and structured database of Jain temples, bhavans, sthanaks, bhojanshalas, and
            dharamshalas—starting with India, expanding worldwide.
          </p>
          <div class="flex sm:flex-row flex-col gap-4 mt-8">
            <UButton size="lg" color="sky" variant="solid" :ui="{ rounded: 'rounded-full' }" class="font-semibold"
              target="_blank" rel="noopener noreferrer" href="https://forms.gle/hWPYva1sXRKyjimf8"
              icon="i-heroicons-user-group">
              Join the Movement
            </UButton>
            <UButton size="lg" color="teal" variant="soft" :ui="{ rounded: 'rounded-full' }" class="font-semibold"
              target="_blank" rel="noopener noreferrer" href="https://data.jain.wiki" icon="i-heroicons-map">
              Explore the Data
            </UButton>
            <UButton size="lg" color="emerald" variant="ghost" :ui="{ rounded: 'rounded-full' }" class="font-semibold"
              target="_blank" rel="noopener noreferrer" href="https://github.com/jain-wiki"
              icon="i-heroicons-cloud-arrow-up">
              Contribute
            </UButton>
          </div>
        </div>
        <div class="relative flex justify-center w-full md:w-5/12">
          <div class="group relative">
            <div
              class="absolute -inset-4 bg-gradient-to-tr from-sky-400 via-teal-400 to-emerald-400 opacity-30 group-hover:opacity-60 blur-xl rounded-3xl transition">
            </div>
            <div
              class="relative flex flex-col items-center bg-white/70 shadow-xl backdrop-blur-md p-6 border border-sky-100 rounded-3xl">
              <img src="/assets/img/logo.png" alt="Jain Wiki Logo" class="w-40 h-40 object-contain" />
              <p class="mt-4 max-w-xs text-gray-600 text-sm text-center">Built on Wikibase. Powered by community
                contributions. Designed for openness.</p>
              <div class="gap-4 grid grid-cols-3 mt-6 text-center">
                <div class="bg-sky-50 p-3 border border-sky-100 rounded-lg">
                  <Icon name="material-symbols:volunteer-activism" class="text-sky-500 text-2xl" />
                  <p class="mt-1 font-medium text-sky-700 text-xs">Volunteer</p>
                </div>
                <div class="bg-teal-50 p-3 border border-teal-100 rounded-lg">
                  <Icon name="material-symbols:hub" class="text-teal-500 text-2xl" />
                  <p class="mt-1 font-medium text-teal-700 text-xs">Open Data</p>
                </div>
                <div class="bg-emerald-50 p-3 border border-emerald-100 rounded-lg">
                  <Icon name="material-symbols:map" class="text-emerald-500 text-2xl" />
                  <p class="mt-1 font-medium text-emerald-700 text-xs">Mapping</p>
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
