const nodeExternals = require('webpack-node-externals')
const bodyParser = require('body-parser')
const resolve = (dir) => require('path').join(__dirname, dir)

let axiosUrl = 'http://api.liderlogos.com/v1/'
if (process.env.NODE_ENV === 'production') axiosUrl = 'http://api.liderlogos.com/v1/'

module.exports = {
  srcDir: 'src/',
  serverMiddleware: [
    '~~/server_middleware/geoip',
    '~~/server_middleware/redireccion'
  ],

  /*
  ** Headers of the page
  */
  head: {
    title: 'liderlogo',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Lorem Ipsum' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' },
      { rel: 'stylesheet', href: "https://use.fontawesome.com/releases/v5.0.13/css/all.css" }

    ]
  },
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/toast'
  ],
  plugins: [
    '~/plugins/vuetify.js',
    // { src: '~/plugins/watch-countries.js', ssr: true },
    { src: '~/plugins/vee-validate.js', ssr: true },
    { src: '~/plugins/vue2-storage.js', ssr: false },
    { src: '~/plugins/axios.js', ssr: true },
    { src: '~/plugins/components.js', ssr: true }
  ],
  css: [
    '~/assets/style/app.styl',
    '~/assets/css/app.css'
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#004b7b' },
  /*
  ** Build configuration
  */
  axios: {
    baseURL: axiosUrl,
    browserBaseURL: axiosUrl,
    retry: { retries: 3 },
    debug: (process.env.NODE_ENV !== 'production')
  },
  toast: {
    position: 'top-right',
    duration: 2000,
    className: 'toast',
    singleton: true
  },
  build: {
    cssSourceMap: false,
    babel: {
      plugins: [
        ["transform-imports", {
          "vuetify": {
            "transform": "vuetify/es5/components/${member}",
            "preventFullImport": true
          }
        }]
      ]
    },
    vendor: [
      // '~/plugins/watch-countries.js',
      '~/plugins/vuetify.js',
      '~/plugins/vee-validate.js',
      '~/plugins/vue2-storage.js',
      '~/plugins/axios.js',
      '~/plugins/components.js'
    ],
    extractCSS: true,
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      if (ctx.isServer) {
        config.externals = [
          nodeExternals({
            whitelist: [/^vuetify/]
          })
        ]
      }
    }
  }
}
