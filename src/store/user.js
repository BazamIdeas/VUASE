var jwtDecode = require('jwt-decode')

export const state = () => ({
})

export const mutations = {
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
  }
}
