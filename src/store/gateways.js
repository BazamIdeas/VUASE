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
  async getAll ({ commit }) {
    let gateways = await this.$axios.$get('gateways')
    if (gateways) commit('GET_ALL', gateways)
  }
}
