// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    [
      '@nuxtjs/google-fonts',
      {
        families: {
          Ubuntu: {
            wght: [300, 400, 500, 700],
            ital: [300, 400, 500, 700],
          },
        },
      },
    ],
  ],
});
