var jwtDecode = require('jwt-decode')

export const state = () => ({
  orders: [],
  sketchs: []
})

export const mutations = {
  SET_ORDERS (state, orders) {
    state.orders = orders
  },
  SET_SKETCHS (state, sketchs) {
    state.sketchs = sketchs
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
    let orders = await this.$axios.get('orders/self', {
      headers: {
        'Authorization': this.$cookies.get('session_token')
      }
    })

    if (orders) commit('SET_ORDERS', orders.data)
  },
  async getProject ({ commit }, id) {
    let project = await this.$axios.get('projects/' + id, {
      headers: {
        'Authorization': this.$cookies.get('session_token')
      }
    })

    if (project) return project.data
    return {}
  },
  async getProjectSketchs ({ commit }, sketchsIds) {
    let sketchs = []

    for (const id of sketchsIds) {
      let sketch = await this.$axios.get('sketchs/' + id, {
        headers: {
          'Authorization': this.$cookies.get('session_token')
        }
      })

      if (sketch) {
        let comments = sketch.data.comments.map(x => {
          return {
            id: x.id,
            attachment_uuid: 'https://api.liderlogo.com/v1/comments/attachment/' + x.attachment_uuid || false,
            description: x.description,
            type: x.type
            // date: x.date
          }
        })

        let object = {
          id: sketch.data.id,
          version: sketch.data.version,
          approved: sketch.data.approved,
          selected: sketch.data.selected,
          recommended: sketch.data.recommended,
          inks: sketch.data.inks,
          services: sketch.data.services,
          files: sketch.data.files.map(x => 'https://api.liderlogo.com/v1/sketchs-files/attachment/' + x.uuid),
          comments: comments
        }

        sketchs.push(object)
      }
    }

    commit('SET_SKETCHS', sketchs)
  },
  contactForm ({ dispatch, commit }, params) {
    return this.$axios.$post('leads', params)
  },
  newsletter ({ dispatch, commit }, params) {
    return this.$axios.$post('leads/newsletter', params)
  }
}
