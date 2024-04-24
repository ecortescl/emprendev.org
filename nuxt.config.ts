// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  site: {
    url: "https://emprendev.org", // URL base de tu sitio web
  },

  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "nuxt-simple-robots",
  ],

  googleFonts: {
    families: {
      Inter: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      preload: true,
      preconnect: true,
      download: true,
      base64: true,
    },
  },
  tailwindcss: {
    // Options
  },
  runtimeConfig: {
    public: {
      apiBrevo: process.env.NUXT_PUBLIC_API_BREVO,
    },
  },
});
