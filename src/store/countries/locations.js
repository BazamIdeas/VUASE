export const state = () => ({
  list: []
})

export const mutations = {
  GET_ALL (state, locations) {
    state.list = locations
  }
}

export const getters = {
  getBySlug: (state) => (slug) => {
    return state.list.find(el => el.slug === slug)
  },
  forSelectField (state) {
    let formattedLocations = state.list.map(x => { return { text: x.name, field: x.slug } })
    return [{ text: 'Todas las localidades', field: 'localidades' }].concat(formattedLocations)
  },
  byCountry: (state) => (slugCountry) => {
    let formattedLocations = state.list.filter(x => x.country.slug === slugCountry)
    formattedLocations = formattedLocations.map(x => { return { text: x.name, field: x.slug } })
    return [{ text: 'Todas las localidades', field: 'localidades' }].concat(formattedLocations)
  }
}

export const actions = {
  async getAll ({ rootState, commit }) {
    try {
      let locations = await this.$axios.$get('locations')
      commit('GET_ALL', locations)
    } catch (error) {
      console.log(error)
    }
  }
}
