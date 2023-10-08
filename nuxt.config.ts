// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
      '@pinia/nuxt',
    ],
    components: {
      "dirs": [
        {
          "path": "~/components/global",
          "global": true
        },
        "~/components"
      ]
    },
    ssr: false
})
