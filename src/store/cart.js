export const state = () => ({
  data: {},
  pay: false
})

export const mutations = {
  SET_PAY (state) {
    state.pay = !state.pay
  }
}

export const getters = {
}

export const actions = {
}
