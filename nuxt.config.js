const nodeExternals = require('webpack-node-externals')
const bodyParser = require('body-parser')
const Cookies = require('cookies')
const axios = require('axios')
const resolve = (dir) => require('path').join(__dirname, dir)

let axiosUrl = 'http://api.liderlogos.com/v1/'

module.exports = {
  srcDir: 'src/',
  serverMiddleware: [
    function (req, res, next) {
      let cookies = new Cookies(req, res)
      req.cookies = cookies
      next()
    },
    '~~/server_middleware/geoip',
    '~~/server_middleware/redireccion'
  ],
  sitemap: {
    path: '/sitemap.xml',
    hostname: 'http://liderlogos.com',
    cacheTime: 1000 * 60 * 15,
    gzip: true,
    excludes: [
      '/secret',
      '/admin/**'
    ],
    routes: async function () {
      let urls = []
      
      try {
        const portfolios = await axios.get(axiosUrl + 'portfolios?limit=1000')
        portfolios.data.forEach((port) => {
          urls.push('/ejemplo/' + port.service.slug + '/' + port.slug)
        })
      } catch (error) {
        console.log(error)
      }

      try {
        const services = await axios.get(axiosUrl + 'services?limit=1000')
        services.data.forEach((service) => {
          urls.push('/nuestros-servicios/' + service.slug)
        })
      } catch (error) {
        console.log(error)
      }

      return urls
    }
  },
  /*
  ** Headers of the page
  */
  head: {
    title: 'Liderlogo',
    htmlAttrs: {
      itemscope: undefined,
      itemtype: '<a href="http://schema.org/Article">http://schema.org/Article</a>'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Lorem Ipsum' },
      { name: 'twitter:title', content: '' },
      { name: 'twitter:description', content: 'Lorem Ipsum' },
      { property: 'og:title', content: '' },
      { property: 'og:type', content: '' },
      { property: 'og:url', content: '' },
      { property: 'og:image', content: '' },
      { property: 'og:description', content: 'Lorem Ipsum' },
      { property: 'og:site_name', content: 'Liderlogo' },
      { property: 'fb:admins', content: '00000000000000000000' },
      { content: 'noindex', name: 'robots' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' },
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.0.13/css/all.css' }
    ],
    script: [
      { href: 'https://bazam.agilecrm.com/stats/min/agile-min.js', type: 'text/javascript' },
      {
        innerHTML: "var Agile_API = Agile_API || {};Agile_API.on_after_load = function(){_agile.set_account('vhnq8gsqt163q4h41eseqk1fij', 'bazam', false);_agile.track_page_view();_agile_execute_web_rules();};",
        type: 'text/javascript',
        vmid: 'description'
      }
    ],
    __dangerouslyDisableSanitizers: ['script']
  },
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/toast',
    '@nuxtjs/sitemap',
    ['cookie-universal-nuxt', { alias: 'cookies' }]
  ],
  plugins: [
    '~/plugins/vuetify.js',
    // { src: '~/plugins/watch-countries.js', ssr: true },
    { src: '~/plugins/vee-validate.js', ssr: true },
    { src: '~/plugins/vue-cookies.js', ssr: true },
    { src: '~/plugins/vue2-storage.js', ssr: false },
    { src: '~/plugins/axios.js', ssr: true },
    { src: '~/plugins/components.js', ssr: true },
    { src: '~/plugins/vue-stripe-checkout.js', ssr: false }
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
    debug: (process.env.NODE_ENV === 'production')
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
        ['transform-imports', {
          'vuetify': {
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
      '~/plugins/vue-cookies.js',
      '~/plugins/axios.js',
      '~/plugins/components.js',
      'paypal-checkout',
      '~/plugins/vue-stripe-checkout.js'
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
