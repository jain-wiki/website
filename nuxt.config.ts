// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  // Configure for static generation (SSG)
  // nitro: {
  //   prerender: {
  //     routes: ['/sitemap.xml']
  //   }
  // },

  // Production URL configuration
  runtimeConfig: {
    public: {
      siteUrl: 'https://jain.wiki'
    }
  },

  // Global head configuration
  app: {
    baseURL: '/',
    head: {
      title: 'Jain Wiki - Your Knowledge Hub',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Welcome to Jain Wiki - your comprehensive knowledge hub' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'robots', content: 'index, follow' },
        { property: 'og:site_name', content: 'Jain Wiki' },
        { property: 'og:type', content: 'website' },
        { name: 'author', content: 'Jain Wiki Team' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ],
    }
  },


  // Vite configuration
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  // Modules
  modules: [
    '@nuxt/scripts',
    '@nuxt/ui',
    '@nuxtjs/sitemap',
    'nuxt-icon',
  ],

  // CSS configuration with Tailwind
  css: ['~/assets/css/main.css'],

  // Development server configuration
  devServer: {
    port: 5016
  },

  // UI module configuration
  ui: {
    // Configure Nuxt UI settings
    colorMode: false,
  },

  // TypeScript configuration
  typescript: {
    typeCheck: true
  }
})
