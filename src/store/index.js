import { staticData } from './data-app/staticData.js'

export const state = () => ({
  app: {
    links: {
      header: [
        { url: '/nuestros-servicios', title: 'Servicios' },
        { url: '/ejemplos', title: 'Ejemplos' },
        { url: '/precios', title: 'Precios' },
        { url: '/servicios-profesionales', title: 'Servicios Profesionales' },
        { url: '/contacto', title: 'Contacto' }
      ],
      footer: [
        { url: '/sobre-liderlogo', title: 'SOBRE LIDERLOGO' },
        { url: '/avisos-legales', title: 'AVISO LEGAL' },
        { url: '/terminos-y-condiciones', title: 'TÉRMINOS Y CONDICIONES' },
        { url: '#', title: 'BLOG' }
      ],
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
    try { countries = await $axios.$get('countries') } catch (error) {
      console.log(error)
      return
    }
    if (countries.length) {
      countries.forEach(country => {
        countriesObj[country.iso] = country
      })
    }
    let country = countriesObj[req.iso] ? countriesObj[req.iso] : countriesObj['US'] ? countriesObj['US'] : null
    dispatch('countries/setData', country)
  }
}
