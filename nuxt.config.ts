export default defineNuxtConfig({
  app: {
    baseURL: '/zxec.github.io/',
    buildAssetsDir: 'assets',
    head: {
      link: [
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/@mdi/font@7.4.47/css/materialdesignicons.min.css' },
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/gh/lipis/flag-icons@7.2.3/css/flag-icons.min.css' }
      ],
    },
  },
  css: ['@/assets/styles/app.scss', 'vuetify/styles'],
  build: {
    transpile: ['vuetify'],
  },
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },
})