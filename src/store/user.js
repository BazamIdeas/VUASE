import Vue from 'vue'
const vueInstance = new Vue()

export const state = () => ({
})

export const mutations = {
}

export const getters = {
}

export const actions = {
  async loginOrRegister ({ rootState, commit }) {
    let brief = vueInstance.$storage.get('brief')

    let user = {
      name: brief.information.names.value,
      email: brief.information.email.value,
      phone: brief.information.phone.value,
      company: brief.information.company.value
    }

    let token = null

    try {
      let login = await this.$axios.$post('clients/login', user)
      token = login.token
    } catch (error) {
      if (error) {
        try {
          let register = await this.$axios.$post('clients', user)
          token = register.token
        } catch (error) {
          return false
        }
      }
    }

    if (token) {
      vueInstance.$storage.set('token_session', token)
      return true
    }
  }
}
