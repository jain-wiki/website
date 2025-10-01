# Copilot Instructions for Jain Wiki Website

## Project Overview

Jain Wiki is an open, collaborative platform for mapping and documenting Jain temples and community places. The website is built with modern web technologies and serves as the frontend for the Jain Wiki knowledge base.

## Technology Stack

- **Framework**: Nuxt 4 (Vue 3)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4.x with Nuxt UI
- **Icons**: Nuxt Icon with Heroicons and Lucide icon sets
- **Package Manager**: Bun (fallback to npm)
- **Build Tool**: Vite
- **Additional Modules**: 
  - @nuxt/scripts
  - @nuxtjs/sitemap

## Project Structure

```
/app
  /components      # Vue components
    /home          # Home page specific components
    /search        # Search functionality components
  /layouts         # Layout components (default.vue)
  /pages           # Page routes (index.vue, about.vue, search.vue)
  /assets
    /css           # Global CSS files
    /img           # Image assets
  app.vue          # Root app component
/public            # Static assets
nuxt.config.ts     # Nuxt configuration
tailwind.config.ts # Tailwind configuration
tsconfig.json      # TypeScript configuration
```

## Code Style and Conventions

### Vue Components

- Use **Composition API** with `<script setup>` syntax
- Components should be organized in appropriate subdirectories
- Follow Vue 3 best practices for reactive data and computed properties
- Use TypeScript for type safety

Example:
```vue
<template>
  <div>
    <!-- Component markup -->
  </div>
</template>

<script setup>
// Component logic using Composition API
</script>
```

### Component Naming

- Use PascalCase for component files (e.g., `HeroSection.vue`, `DifferenceSection.vue`)
- Use kebab-case in templates (e.g., `<home-section-wrapper>`)
- Home page components should be prefixed with `Home` (e.g., `HomeMissionSection.vue`)

### TypeScript

- Enable strict type checking
- Use proper type annotations for function parameters and return values
- Leverage TypeScript's type inference where appropriate
- The project extends `.nuxt/tsconfig.json` for proper Nuxt auto-imports

### Styling

- Use **Tailwind CSS** utility classes for styling
- Follow the Tailwind CSS 4.x syntax
- Use the `@nuxt/ui` component library for UI elements
- Color mode is disabled (`colorMode: false` in nuxt.config.ts)
- Main CSS imports Tailwind and Nuxt UI:
  ```css
  @import 'tailwindcss' theme(static);
  @import '@nuxt/ui';
  ```

### CSS Class Conventions

- Prefer Tailwind utility classes over custom CSS
- Use responsive prefixes (sm:, md:, lg:) for responsive design
- Common color scheme: sky, teal, emerald, cyan for primary colors
- Use semantic color utilities (e.g., `text-gray-600`, `bg-sky-50`)

## SEO and Meta Tags

- Use `useSeoMeta()` composable for page-specific meta tags
- Use `useHead()` for additional head configuration
- Always include:
  - `title` and `ogTitle`
  - `description` and `ogDescription`
  - `ogImage` for social sharing
  - `twitterCard` (usually `summary_large_image`)
  - `canonical` links

Example:
```vue
<script setup>
useSeoMeta({
  title: 'Page Title',
  ogTitle: 'OG Title',
  description: 'Page description',
  ogDescription: 'OG description',
  ogImage: '/images/og-image.jpg',
  twitterCard: 'summary_large_image',
})

useHead({
  link: [
    { rel: 'canonical', href: 'https://jain.wiki/page-url' }
  ]
})
</script>
```

## Development Guidelines

### Running the Project

- **Development**: `npm run dev` (runs on port 5016)
- **Build**: `npm run build`
- **Preview**: `npm run preview`
- **Type Check**: TypeScript type checking is enabled in nuxt.config.ts

### Configuration

- Site URL: `https://jain.wiki`
- API Base URL: configurable via `NUXT_PUBLIC_API_BASE_URL` environment variable
- Development server runs on port **5016**

### Content Guidelines

- The site focuses on Jain temples and community places
- Emphasizes open collaboration, structured data, and interoperability
- Built on Wikibase platform (same as Wikidata)
- Supports SPARQL queries and API access

### Icons

- Use `<Icon>` component from nuxt-icon
- Available icon sets: Heroicons (`heroicons:`), Lucide (`lucide:`), Material Symbols (`material-symbols:`)
- Example: `<Icon name="material-symbols:public" class="text-sky-500 text-2xl" />`

## Best Practices

1. **Component Organization**: Keep components focused and reusable
2. **Responsive Design**: Always consider mobile-first design with Tailwind
3. **Type Safety**: Leverage TypeScript for better code quality
4. **SEO Optimization**: Always include proper meta tags for all pages
5. **Accessibility**: Use semantic HTML and proper ARIA attributes
6. **Performance**: Optimize images and use lazy loading where appropriate
7. **Code Reusability**: Extract common patterns into reusable components

## Common Patterns

### Section Wrapper Component

Use `HomeSectionWrapper` for consistent section styling:
```vue
<HomeSectionWrapper 
  id="section-id" 
  title="Section Title"
  wrapperClass="bg-gradient-to-b from-sky-50 to-white">
  <!-- Section content -->
</HomeSectionWrapper>
```

### Navigation Links

Use `NuxtLink` for internal navigation:
```vue
<NuxtLink to="/" class="font-medium text-gray-900 hover:text-blue-600">
  Home
</NuxtLink>
```

### Layout Usage

All pages should use the default layout which includes header, main content area, and footer:
```vue
<template>
  <UApp>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>
```

## Contact and Support

- Email: thejainwiki@gmail.com
- The project is in early stages and welcomes contributions
- Focus on collaborative, open-source development

## Additional Notes

- The project uses static generation (SSG) capabilities but currently commented out in config
- Sitemap generation is configured via @nuxtjs/sitemap module
- The site has a dedicated Wiki instance at `https://data.jain.wiki`
- Built with ❤️ in India 🇮🇳
