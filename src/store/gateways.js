export const state = () => ({
  list: []
})

export const mutations = {
  GET_ALL (state, gateways) {
    state.list = gateways
  }
}

export const getters = {
}

export const actions = {
  async getAll ({ rootState, commit }) {
    try {
      let gateways = await this.$axios.$get('gateways')
      commit('GET_ALL', gateways)
    } catch (error) {
      console.log(error)
    }
  }
}
