<template>
  <section :id="id" class="py-16 sm:py-24" :class="wrapperClass">
    <div class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
      <div class="mx-auto" :class="contentWidthClass">
        <header v-if="title || subtitle" class="mb-10 text-center">
          <h2 v-if="title"
            class="bg-clip-text bg-gradient-to-r from-sky-500 via-teal-500 to-emerald-500 font-bold text-transparent text-3xl sm:text-4xl leading-normal tracking-tight">
            {{ title }}
          </h2>
          <p v-if="subtitle" class="mx-auto mt-4 max-w-2xl text-gray-600 dark:text-gray-300 text-lg">
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
import { computed } from 'vue'
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
