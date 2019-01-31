import { staticData } from './data-app/staticData.js'

var jwtDecode = require('jwt-decode')

export const state = () => ({
  app: {
    links: {
      header: [
        { url: '/nuestros-servicios', title: 'Servicios' },
        { url: '/ejemplos', title: '1001 Ejemplos' },
        { url: '/precios', title: 'Precios' },
        { url: '/servicios-profesionales', title: 'Servicios a Profesionales' }
      ],
      footer: [
        { url: '/sobre-liderlogo', title: 'SOBRE LIDERLOGO' },
        { url: '/avisos-legales', title: 'AVISO LEGAL' },
        { url: '/terminos-y-condiciones', title: 'TÉRMINOS Y CONDICIONES' },
        { url: '/contacto', title: 'Contacto' },
        { url: '#', title: 'BLOG' }
      ],
      redes: [{
        icon: 'fa-facebook',
        url: 'https://www.facebook.com/liderlogo'
      }, {
        icon: 'fa-twitter',
        url: 'https://twitter.com/lider_logo'
      }, {
        icon: 'fa-google',
        url: 'https://plus.google.com/114230428674579789847'
      }, {
        icon: 'fa-linkedin',
        url: 'https://www.linkedin.com/company/liderlogo/'
      }, {
        icon: 'fa-pinterest',
        url: 'https://es.pinterest.com/liderlogo/'
      }, {
        icon: 'fa-instagram',
        url: 'https://instagram.com/liderlogo/'
      }, {
        icon: 'fa-flickr',
        url: 'https://www.flickr.com/people/lider-logo/'
      }, {
        icon: 'fa-tumblr',
        url: 'http://liderlogo.tumblr.com/'
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
    /* const GTM = {
      ES: 'Espana',
      AMERICA: 'Cualquier pais de america'
    }

    const GTMscript = {
      head: 'console.log("' + (GTM[req.iso] ? GTM[req.iso] : GTM.AMERICA) + '")',
      body: 'console.log("' + (GTM[req.iso] ? GTM[req.iso] : GTM.AMERICA) + '")'
    }

    app.head.script.push({
      innerHTML: GTMscript.head
    })

    app.head.script.push({
      innerHTML: GTMscript.body, body: true
    }) */

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

    let countries = await $axios.$get('countries')

    if (countries.length) {
      countries.forEach(country => {
        countriesObj[country.iso] = country
      })
    }

    let country = countriesObj[req.iso] ? countriesObj[req.iso] : countriesObj['US'] ? countriesObj['US'] : {}

    dispatch('countries/setData', country)
  }
}
