import { staticData } from './data-app/staticData.js'

var jwtDecode = require('jwt-decode')

export const state = () => ({
  app: {
    links: {
      header: [
        { url: '/nuestros-servicios',
          title: 'Servicios',
          sublinks: [
            {
              name: 'LOGO E IDENTIDAD',
              links: [
                { url: '/nuestros-servicios/imagen-corporativa', title: 'LOGO, IMAGEN CORPORATIVA Y LOGO ANIMADO' },
                { url: '/nuestros-servicios/logo-empresa', title: 'LOGO' },
                { url: '/nuestros-servicios/logo-y-pagina-web', title: 'LOGO Y SITIO WEB' },
                { url: '/nuestros-servicios/rediseno-de-logo', title: 'REDISEÑO DE LOGO' },
                { url: '/nuestros-servicios/vectorizacion', title: 'VECTORIZACIÓN DE TU LOGO' }
              ]
            },
            {
              name: 'WEB Y APP',
              links: [
                { url: '/nuestros-servicios/logo-y-pagina-web', title: 'LOGO Y SITIO WEB' },
                { url: '/nuestros-servicios/pagina-web', title: 'SITIO WEB PROFESIONAL' },
                { url: '/nuestros-servicios/sitio-web-ecommerce', title: 'ECOMMERCE' },
                { url: '/nuestros-servicios/desarrollo-de-app', title: 'APLICACIÓN MOVIL' },
                { url: '/nuestros-servicios/presencia-web', title: 'PRESENCIA WEB' }
              ]
            }, {
              name: 'FOLLETOS Y PUBLICIDADES',
              links: [
                { url: '/nuestros-servicios/flyer', title: 'FLYER' },
                { url: '/nuestros-servicios/flyer-dos-caras', title: 'FLYER DOS CARAS' },
                { url: '/nuestros-servicios/diptico', title: 'DÍPTICO' },
                { url: '/nuestros-servicios/tripticos', title: 'TRÍPTICO' },
                { url: '/nuestros-servicios/publicidad', title: 'PUBLICIDAD' },
                { url: '/nuestros-servicios/catalogo', title: 'CATÁLOGO' }
              ]
            },
            {
              name: 'RÓTULOS',
              links: [
                { url: '/nuestros-servicios/rotulo-vehicular', title: 'RÓTULO VEHICULAR' },
                { url: '/nuestros-servicios/rotulo-local', title: 'RÓTULO LOCAL' },
                { url: '/nuestros-servicios/rotulo-banner', title: 'RÓTULO BANNER' },
                { url: '/nuestros-servicios/packaging', title: 'RÓTULO ETIQUETA / PACKAGING' },
                { url: '/nuestros-servicios/rotulo-vestimenta-uniforme', title: 'RÓTULO VESTIMENTA/UNIFORME' },
                { url: '/nuestros-servicios/rotulo-furgoneta-camion', title: 'RÓTULO FURGONETA CAMION' }
              ]
            },
            {
              name: 'REDES SOCIALES',
              links: [
                { url: '/nuestros-servicios/perfil-redes-sociales', title: 'PERFILES DE REDES SOCIALES' }
              ]
            }
          ]
        },
        { url: '/como-funciona', title: 'Cómo Funciona' },
        { url: '/ejemplos', title: '1001 Ejemplos' },
        { url: '/opiniones', title: 'Opiniones' },
        { url: '/precios', title: 'Precios' },
        { url: '/contacto', title: 'Contacto' }
      ],
      footer: [
        { url: '/sobre-liderlogo', title: 'NUESTRA HISTORIA' },
        { url: '/servicios-profesionales', title: 'SERVICIOS A AGENCIAS' },
        { url: '/avisos-legales', title: 'AVISO LEGAL' }

      ],
      headerMovil: [
        {
          url: '/nuestros-servicios',
          title: 'Servicios',
          icon: 'list',
          sublinks: [
            {
              name: 'LOGO E IDENTIDAD',
              links: [
                { url: '/nuestros-servicios/imagen-corporativa', title: 'LOGO, IMAGEN CORPORATIVA Y LOGO ANIMADO' },
                { url: '/nuestros-servicios/logo-empresa', title: 'LOGO' },
                { url: '/nuestros-servicios/logo-y-pagina-web', title: 'LOGO Y SITIO WEB' },
                { url: '/nuestros-servicios/rediseno-de-logo', title: 'REDISEÑO DE LOGO' },
                { url: '/nuestros-servicios/vectorizacion', title: 'VECTORIZACIÓN DE TU LOGO' }
              ]
            },
            {
              name: 'WEB Y APP',
              links: [
                { url: '/nuestros-servicios/logo-y-pagina-web', title: 'LOGO Y SITIO WEB' },
                { url: '/nuestros-servicios/pagina-web', title: 'SITIO WEB PROFESIONAL' },
                { url: '/nuestros-servicios/sitio-web-ecommerce', title: 'ECOMMERCE' },
                { url: '/nuestros-servicios/desarrollo-de-app', title: 'APLICACIÓN MOVIL' },
                { url: '/nuestros-servicios/presencia-web', title: 'PRESENCIA WEB' }
              ]
            }, {
              name: 'FOLLETOS Y PUBLICIDADES',
              links: [
                { url: '/nuestros-servicios/flyer', title: 'FLYER' },
                { url: '/nuestros-servicios/flyer-dos-caras', title: 'FLYER DOS CARAS' },
                { url: '/nuestros-servicios/diptico', title: 'DÍPTICO' },
                { url: '/nuestros-servicios/tripticos', title: 'TRÍPTICO' },
                { url: '/nuestros-servicios/publicidad', title: 'PUBLICIDAD' },
                { url: '/nuestros-servicios/catalogo', title: 'CATÁLOGO' }
              ]
            },
            {
              name: 'RÓTULOS',
              links: [
                { url: '/nuestros-servicios/rotulo-vehicular', title: 'RÓTULO VEHICULAR' },
                { url: '/nuestros-servicios/rotulo-local', title: 'RÓTULO LOCAL' },
                { url: '/nuestros-servicios/rotulo-banner', title: 'RÓTULO BANNER' },
                { url: '/nuestros-servicios/packaging', title: 'RÓTULO ETIQUETA / PACKAGING' },
                { url: '/nuestros-servicios/rotulo-vestimenta-uniforme', title: 'RÓTULO VESTIMENTA/UNIFORME' },
                { url: '/nuestros-servicios/rotulo-furgoneta-camion', title: 'RÓTULO FURGONETA CAMION' }
              ]
            },
            {
              name: 'REDES SOCIALES',
              links: [
                { url: '/nuestros-servicios/perfil-redes-sociales', title: 'PERFILES DE REDES SOCIALES' }
              ]
            }
          ]
        },
        { url: '/como-funciona', title: 'Como Funciona', icon: 'timeline' },
        { url: '/ejemplos', title: '1001 Ejemplos', icon: 'important_devices' },
        { url: '/opiniones', title: 'Opiniones', icon: 'work' },
        { url: '/precios', title: 'Precios', icon: 'store' }
      ],
      redes: [{
        icon: 'fa-instagram',
        url: 'https://instagram.com/liderlogo/'
      }, {
        icon: 'fa-facebook',
        url: 'https://www.facebook.com/liderlogo'
      }, {
        icon: 'fa-pinterest',
        url: 'https://es.pinterest.com/liderlogo/'
      }],
      whatsapp: '#'
    },
    drawer: false,
    staticData: staticData,
    token: null,
    authData: {}
  }
})

export const mutations = {
  TOGGLE_DRAWER (state, value) {
    state.app.drawer = value !== undefined ? value : !state.app.drawer
  },
  SET_TOKEN (state, value) {
    state.app.token = value
  },
  SET_AUTH_DATA (state, value) {
    state.app.authData = value
  }
}

export const getters = {
  isLoggedIn: (state) => {
    let token = state.app.token
    if (!token) return false

    let jwt = jwtDecode(token)
    if (!jwt) return false

    let time = Date.now() / 1000
    if (jwt.exp < time) return false

    return jwt
  }
}

export const actions = {
  toggleDrawer ({ commit }, value) {
    commit('TOGGLE_DRAWER', value)
  },
  async nuxtServerInit ({ dispatch, commit }, { $axios, req, app }) {
    if (req.cookies && req.cookies.get('session_token')) {
      commit('SET_TOKEN', req.cookies.get('session_token'))

      let decodedToken = jwtDecode(req.cookies.get('session_token'))

      if (decodedToken) {
        let user = await $axios.get('clients/' + decodedToken.id, {
          headers: {
            'Authorization': req.cookies.get('session_token')
          }
        })

        if (user) commit('SET_AUTH_DATA', user.data)
      }
    }

    let countriesObj = {}

    let countries = await $axios.$get('countries?limit=1000')

    if (countries.length) {
      countries.forEach(country => {
        countriesObj[country.iso] = country
      })
    }

    let country = countriesObj[req.iso] ? countriesObj[req.iso] : countriesObj['US'] ? countriesObj['US'] : {}

    dispatch('countries/setData', country)
  }
}
