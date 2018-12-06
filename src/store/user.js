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
    }

    if (token) {
      this.$cookies.set('session_token', token)
      return true
    }
  }
}
