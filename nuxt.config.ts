// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  // Configure for static generation (SSG)
  nitro: {
    prerender: {
      routes: ['/sitemap.xml']
    }
  },

  // Production URL configuration
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://jain.wiki'
    }
  },

  // Global head configuration
  app: {
    head: {
      title: 'Jain Wiki - Your Knowledge Hub',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Welcome to Jain Wiki - your comprehensive knowledge hub' },
        { name: 'format-detection', content: 'telephone=no' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },

  // CSS configuration with Tailwind
  css: ['~/assets/css/main.css'],

  // Modules
  modules: [
    '@nuxt/scripts',
    '@nuxt/ui',
    '@nuxtjs/tailwindcss'
  ],

  // Development server configuration
  devServer: {
    port: 5016
  },

  // UI module configuration
  ui: {
    // Configure Nuxt UI settings
  },

  // TypeScript configuration
  typescript: {
    typeCheck: true
  }
})