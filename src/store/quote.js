export const state = () => ({
})

export const mutations = {
  SET_DATA (state, data) {
    state.data = Object.assign(state.data, data)
  }
}

export const getters = {
}

export const actions = {
  setData ({ commit }, data) {
    commit('SET_DATA', data)
  }
}
