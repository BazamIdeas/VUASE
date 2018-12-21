export const state = () => ({
  list: [],
  data: null
})

export const mutations = {
  GET_ALL (state, countries) {
    state.list = countries
  },
  SET_DATA (state, value) {
    state.data = value
  }
}

export const getters = {
  getBySlug: (state) => (slug) => {
    return state.list.find(el => el.slug === slug)
  },
  forSelectField (state) {
    let formattedCountries = state.list.filter(x => x.show_portfolios).map(x => { return { text: x.name, field: x.slug } })
    return [{ text: 'Todos los paises', field: 'paises' }].concat(formattedCountries)
  }
}

export const actions = {
  async getAll ({ commit }) {
    let countries = await this.$axios.$get('countries?limit=1000')
    if (countries) commit('GET_ALL', countries)
  },
  setData ({ commit }, country) {
    commit('SET_DATA', country)
  }
}
