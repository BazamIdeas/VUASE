export const state = () => ({
  data: {},
  pay: false,
  chargePayMethods: false
})

export const mutations = {
  SET_PAY (state) {
    state.pay = !state.pay
  },
  START_LOADING (state) {
    state.chargePayMethods = true
  },
  OVER_LOADING (state) {
    state.chargePayMethods = false
  }
}

export const getters = {
}

export const actions = {
  setPay ({ commit, state }, data) {
    commit('SET_PAY')
    if (state.pay) {
      setTimeout(() => {
        commit('START_LOADING')
      }, 1)
    }
  }
}
