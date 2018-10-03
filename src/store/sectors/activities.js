export const state = () => ({
  list: []
})

export const mutations = {
  GET_ALL (state, activities) {
    state.list = activities
  }
}

export const getters = {
  getBySlug: (state) => (slug) => {
    return state.list.find(el => el.slug === slug)
  },
  forSelectField (state) {
    let formattedActivities = state.list.map(x => { return { text: x.name, field: x.slug } })
    return [{ text: 'Todas las actividades', field: 'actividades' }].concat(formattedActivities)
  },
  bySector: (state) => (slugSector) => {
    let formattedActivities = state.list.filter(x => x.sector.slug === slugSector)
    formattedActivities = formattedActivities.map(x => { return { text: x.name, field: x.slug } })
    return [{ text: 'Todas las actividades', field: 'actividades' }].concat(formattedActivities)
  }
}

export const actions = {
  async getAll ({ rootState, commit }) {
    try {
      let activities = await this.$axios.$get('activities')
      commit('GET_ALL', activities)
    } catch (error) {
      console.log(error)
    }
  }
}
