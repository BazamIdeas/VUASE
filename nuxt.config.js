const nodeExternals = require('webpack-node-externals')
const resolve = (dir) => require('path').join(__dirname, dir)

module.exports = {
  srcDir: 'src/',
  serverMiddleware: [
    '~~/server_middleware/geoip'
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
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' }
    ]
  },
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/toast'
  ],
  plugins: [
    '~/plugins/vuetify.js',
    { src: '~/plugins/vee-validate.js', ssr: true },
    { src: '~/plugins/vue2-storage.js', ssr: false },
    { src: '~/plugins/axios.js', ssr: true }
  ],
  css: [
    '~/assets/style/app.styl',
    '~/assets/css/app.css'
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  axios: {
    baseURL: 'https://jsonplaceholder.typicode.com/',
    browserBaseURL: 'https://jsonplaceholder.typicode.com/',
    retry: { retries: 3 },
    debug: false
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
      '~/plugins/vuetify.js',
      '~/plugins/vee-validate.js',
      '~/plugins/vue2-storage.js',
      '~/plugins/axios.js',
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
