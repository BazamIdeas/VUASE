import { staticData } from './data-app/staticData.js'

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
        url: 'https://www.linkedin.com/company-beta/2369935'
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
    staticData: staticData
  }
})

export const mutations = {
  TOGGLE_DRAWER (state, value) {
    state.app.drawer = value !== undefined ? value : !state.app.drawer
  }
}

export const getters = {
}

export const actions = {
  toggleDrawer ({ commit }, value) {
    commit('TOGGLE_DRAWER', value)
  },
  async nuxtServerInit ({ dispatch }, { $axios, req }) {
    let countries = []
    let countriesObj = {}
    try { countries = await $axios.$get('countries') } catch (error) { console.log(error) }
    if (countries.length) {
      countries.forEach(country => {
        countriesObj[country.iso] = country
      })
    }
    let country = countriesObj[req.iso] ? countriesObj[req.iso] : countriesObj['US'] ? countriesObj['US'] : null
    dispatch('countries/setData', country)
  }
}
