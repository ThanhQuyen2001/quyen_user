export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: process.env.VUE_APP_NAME ?? 'Nuxt app',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon.png' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/scss/index.scss', 'boxicons/css/boxicons.min.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/axios', '@/plugins/vue2-google-maps.js', '~/plugins/filters', '~/plugins/icons', '~/plugins/prototype', '~/plugins/vue-debounce', { src: '~/plugins/vue-apexchart.js', ssr: false }],
  transpile: [/^vue2-google-maps($|\/)/],
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/style-resources',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    ['vue-scrollto/nuxt', { duration: 500 }]
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: process.env.VUE_APP_HOST_API,
    prefix: '/api',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^vue2-google-maps($|\/)/],
    vendor: [
      'vue-apexchart'
    ]
  },
  bootstrapVue: {
    bootstrapCSS: false,
    bootstrapVueCSS: false,
  },
  styleResources: {
    scss: ['@/assets/scss/_variables.scss'],
  },
  env: {
    VUE_APP_HOST: process.env.VUE_APP_HOST,
    VUE_APP_USER: process.env.VUE_APP_USER,
    VUE_APP_HOST_API: process.env.VUE_APP_HOST_API,
    VUE_APP_PREVIEW: process.env.VUE_APP_PREVIEW
  },
  router: {
    middleware: ['router'],
    scrollBehavior(to, from, savedPosition) {
      if(savedPosition) return savedPosition
      return setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }, 50)
    }
  },
}
