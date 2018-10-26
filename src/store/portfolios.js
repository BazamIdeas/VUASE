export const state = () => ({
  list: [],
  indexExamples: [
    [
      { img: '/images/examples/1.png' },
      { img: '/images/examples/2.png' },
      { img: '/images/examples/3.png' },
      { img: '/images/examples/4.png' },
      { img: '/images/examples/1.png' },
      { img: '/images/examples/2.png' },
      { img: '/images/examples/3.png' },
      { img: '/images/examples/4.png' },
      { img: '/images/examples/1.png' },
      { img: '/images/examples/2.png' },
      { img: '/images/examples/3.png' },
      { img: '/images/examples/4.png' },
      { img: '/images/examples/1.png' }
    ],
    [
      { img: '/images/examples/5.png' },
      { img: '/images/examples/6.png' },
      { img: '/images/examples/7.png' },
      { img: '/images/examples/8.png' },
      { img: '/images/examples/5.png' },
      { img: '/images/examples/6.png' },
      { img: '/images/examples/7.png' },
      { img: '/images/examples/8.png' },
      { img: '/images/examples/5.png' },
      { img: '/images/examples/6.png' },
      { img: '/images/examples/7.png' },
      { img: '/images/examples/8.png' }
    ]
  ]
})

export const mutations = {
  GET_ALL (state, portfolios) {
    state.list = portfolios
  }
}

export const getters = {
}

export const actions = {
  async getAll ({ rootGetters, commit }, params) {
    console.log(params)
    let requestParams = {}
    if (params) {
      if (params.servicio && rootGetters['services/getBySlug'](params.servicio)) {
        requestParams['services'] = rootGetters['services/getBySlug'](params.servicio).id
      }
      if (params.sector && rootGetters['sectors/getBySlug'](params.sector)) {
        requestParams['sectors'] = rootGetters['sectors/getBySlug'](params.sector).id
      }
      if (params.actividad && rootGetters['sectors/activities/getBySlug'](params.actividad)) {
        requestParams['activities'] = rootGetters['sectors/activities/getBySlug'](params.actividad).id
      }
      if (params.pais && rootGetters['countries/getBySlug'](params.pais)) {
        requestParams['countries'] = rootGetters['countries/getBySlug'](params.pais).id
      }
      if (params.localidad && rootGetters['countries/locations/getBySlug'](params.localidad)) {
        requestParams['locations'] = rootGetters['countries/locations/getBySlug'](params.localidad).id
      }
    }

    try {
      let portfolios = await this.$axios.$get('portfolios/custom-search', {
        params: requestParams
      })
      commit('GET_ALL', portfolios)
    } catch (error) {
      if (error.response.status === 404) commit('GET_ALL', [])
    }
  }
}
