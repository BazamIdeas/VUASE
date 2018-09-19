export const state = () => ({
  groups: [
    { icon: '/icons/logo_a_medida_hover.svg', name: 'Logos e Identidades' },
    { icon: '/icons/app_hover.svg', name: 'Web y App' },
    { icon: '/icons/folletos_y_publicidades_hover.svg', name: 'Folletos y Publicidades' },
    { icon: '/icons/rotulo_hover.svg', name: 'Rotulos' },
    { icon: '/images/services/icono-1.png', name: 'Perfiles de Redes Sociales' }
  ],
  list: []
})

export const mutations = {
  GET_ALL (state, services) {
    state.list = services
  }
}

export const getters = {
  getBySlug: (state) => (slug) => {
    return state.list.find(el => el.slug === slug)
  },
  forSelectField (state) {
    let formattedServices = state.list.map(x => { return { text: x.name, field: x.slug } })
    return [{ text: 'Todos los servicios', field: 'servicios' }].concat(formattedServices)
  }
}

export const actions = {
  async getAll ({ rootState, commit }) {
    try {
      let services = await this.$axios.$get('services')
      commit('GET_ALL', services)
    } catch (error) {
      console.log(error)
    }
  }
}
