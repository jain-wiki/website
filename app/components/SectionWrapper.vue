<template>
  <section :id="id" class="py-16 sm:py-24" :class="wrapperClass">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="mx-auto" :class="contentWidthClass">
        <header v-if="title || subtitle" class="mb-10 text-center">
          <h2 v-if="title"
            class="text-3xl sm:text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-sky-500 via-teal-500 to-emerald-500">
            {{ title }}
          </h2>
          <p v-if="subtitle" class="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {{ subtitle }}
          </p>
        </header>
        <div>
          <slot />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Props {
  id?: string
  title?: string
  subtitle?: string
  narrow?: boolean
  wrapperClass?: string | string[]
}

const props = withDefaults(defineProps<Props>(), {
  id: undefined,
  title: undefined,
  subtitle: undefined,
  narrow: false,
  wrapperClass: ''
})

const contentWidthClass = computed(() => props.narrow ? 'max-w-3xl' : 'max-w-none')
</script>
