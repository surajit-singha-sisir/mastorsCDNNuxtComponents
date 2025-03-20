// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-03-20',
  devtools: { enabled: true },

  components: {
    dirs: [
      {
        path: '~/components',
        pattern: '**/*.vue',
        ignore: ['**/*.ts'],
      },
    ],
  },
})