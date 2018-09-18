export const state = () => ({
  app: {
    links: {
      header: [
        { url: '/nuestros-servicios', title: 'Servicios' },
        { url: '/ejemplos', title: 'Ejemplos' },
        { url: '/precios', title: 'Precios' },
        { url: 'servicios-profesionales', title: 'Servicios Profesionales' },
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
    drawer: false
  }
})

export const mutations = {
  GET_TODOS (state, data) {
    console.log(data)
  },
  SHOW_DRAWER (state, value) {
    state.app.drawer = value !== undefined ? value : !state.app.drawer
  }
}

export const getters = {
}

export const actions = {
  async getTodos ({ commit }) {
    try {
      const data = await this.$axios.$get('todos', { headers: { 'Content-Type': 'application/json' }, responseEncoding: 'utf8' })
      commit('GET_TODOS', data)
    } catch (err) {
      console.log(err)
    }
  },
  showDrawer ({ commit }, value) {
    commit('SHOW_DRAWER', value)
  }
}
