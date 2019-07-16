const nodeExternals = require('webpack-node-externals')
const Cookies = require('cookies')
const axios = require('axios')

let axiosUrl = process.env.NODE_ENV === 'production' ? 'https://api.liderlogo.com/v1/' : 'http://api.liderlogos.com/v1/'

module.exports = {
  srcDir: 'src/',
  serverMiddleware: [
    function (req, res, next) {
      let cookies = new Cookies(req, res)
      req.cookies = cookies
      next()
    },
    '~~/server_middleware/geoip',
    '~~/server_middleware/redireccion',
    function (req, res, next) {
      next()
    }
  ],
  sitemap: {
    path: '/sitemap.xml',
    hostname: 'http://liderlogo.com',
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
    /*     htmlAttrs: {
      itemscope: undefined,
      itemtype: '<a href="http://schema.org/Article">http://schema.org/Article</a>'
    }, */
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'Liderlogo' },
      { property: 'og:image', content: '/liderlogo.png' },
      /* { property: 'og:url', content: '' },
      { property: 'og:title', content: '' },
      { property: 'og:description', content: 'Lorem Ipsum' },
      { hid: 'description', name: 'description', content: 'Lorem Ipsum' }, */
      { content: 'noindex', name: 'robots' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/liderlogo.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans:300,400,500,700|Material+Icons&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Merriweather:300,400,500,700|Material+Icons&display=swap' },
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.0.13/css/all.css' }
    ],
    script: [
      { src: 'https://www.google.com/recaptcha/api.js?render=6Lf1944UAAAAAHmlC7K-rhNxkaSs1_qbLU7hIdaH', type: 'text/javascript' }
    ]
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
        ['transform-imports', {
          'vuetify': {
            'transform': 'vuetify/es5/components/${member}',
            'preventFullImport': true
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
    extractCSS: false,
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

      config.module.rules.unshift({
        test: /\.(png|jpe?g|gif)$/,
        use: {
          loader: 'responsive-loader',
          options: {
            // disable: isDev,
            placeholder: true,
            quality: 85,
            placeholderSize: 30,
            name: 'img/[name].[hash:hex:7].[width].[ext]',
            adapter: require('responsive-loader/sharp')
          }
        }
      })

      config.module.rules.forEach(value => {
        if (String(value.test) === String(/\.(png|jpe?g|gif|svg|webp)$/)) {
          // reduce to svg and webp, as other images are handled above
          value.test = /\.(svg|webp)$/
          // keep the configuration from image-webpack-loader here unchanged
        }
      })

      config.module.rules.forEach(rule => {
        if (String(rule.test) === String(/\.(png|jpe?g|gif|svg|webp)$/)) {
          // add a second loader when loading images
          rule.use.push({
            loader: 'image-webpack-loader',
            options: {
              svgo: {
                plugins: [
                  // use these settings for internet explorer for proper scalable SVGs
                  // https://css-tricks.com/scale-svg/
                  { removeViewBox: false },
                  { removeDimensions: true }
                ]
              }
            }
          })
        }
      })
    }
  }
}
