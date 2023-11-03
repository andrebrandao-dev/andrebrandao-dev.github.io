// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  sassOptions: {
    indentedSyntax: true
  },

  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icon'
  ]
})
