import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Food-City',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/svg', href: '/favicon.svg' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/mixins.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/v-mask.js',
    '~/plugins/mixins.js',
    '~/plugins/axios.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    '@nuxtjs/auth-next',
    '@nuxtjs/toast',
    "@nuxtjs/i18n",
  ],

  toast: {
    position: 'top-center',
    duration: 2000
  },

  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: '/api/auth',
            method: 'post',
            propertyName: 'token'
          },
          logout: false,
          user: false
        }
      }
    },
    redirect: {
      login: '/login',
      logout: '/',
      callback: '/',
      home: '/'
    }
  },
  // router: {
  //   middleware: ['auth', 'isAuth'],
  // },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: 'http://192.168.3.11:2332',
  },

  styleResources: {
    scss: ['@/assets/mixins.scss'],
  },

  i18n: {
    useCookie: false,
    alwaysRedirect: true,
    detectBrowserLanguage: false,
    // strategy: "prefix",
    locales: [
      {
        code: "ru",
        iso: "ru-RU",
        name: "Russian",
        file: "ru/index.js",
        icon: "/ru.svg",
        title: "Ru"
      },
      {
        code: "uz",
        iso: "uz-UZ",
        name: "O'zbek",
        file: "uz/index.js",
        icon: "/uz.svg",
        title: "Uz"
      },
      {
        code: "en",
        iso: "en-US",
        name: "English",
        file: "en/index.js",
        icon: "/en.svg",
        title: "En"
      }
    ],
    lazy: true,
    seo: false,
    langDir: "locales/",
    strategy: 'prefix_except_default',
    defaultLocale: "uz",
    parsePages: false
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        },

        light: {
          green: '#F8C018'
        }
      }
    },
    icons: {
      iconfont: 'mdiSvg' // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
