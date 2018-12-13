var jwtDecode = require('jwt-decode')

export const state = () => ({
  orders: []
})

export const mutations = {
  SET_ORDERS (state, orders) {
    state.orders = orders
  }
}

export const getters = {
}

export const actions = {
  async login ({ rootState, commit }, user) {
    let token = null

    try {
      let login = await this.$axios.$post('clients/login', user)
      token = login.token
    } catch (error) {
      if (error) console.log(error)
      return
    }

    if (token) {
      this.$cookies.set('session_token', token)
      commit('SET_TOKEN', token, { root: true })

      let jwt = jwtDecode(token)
      let user

      try {
        user = await this.$axios.get('clients/' + jwt.id, {
          headers: {
            'Authorization': token
          }
        })
      } catch (error) { console.log(error) }
      commit('SET_AUTH_DATA', user.data, { root: true })
      return true
    }
  },
  async getOrders ({ rootState, commit }) {
    let orders

    try {
      orders = await this.$axios.get('orders/self', {
        headers: {
          'Authorization': this.$cookies.get('session_token')
        }
      })
    } catch (error) { console.log(error) }
    commit('SET_ORDERS', orders.data)
  }
}
