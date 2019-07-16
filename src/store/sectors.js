export const state = () => ({
  list: []
})

export const mutations = {
  GET_ALL (state, sectors) {
    state.list = sectors
  }
}

export const getters = {
  getBySlug: (state) => (slug) => {
    return state.list.find(el => el.slug === slug)
  },
  forSelectField (state) {
    let formattedSectors = state.list.map(x => { return { text: x.name, field: x.slug, description: x.description } })
    return [{ text: 'Todos los sectores', field: 'sectores' }].concat(formattedSectors)
  }
}

export const actions = {
  async getAll ({ rootState, commit }) {
    try {
      let sectors = await this.$axios.$get('sectors?limit=1000')
      commit('GET_ALL', sectors)
    } catch (error) {
      console.log(error)
    }
  }
}
