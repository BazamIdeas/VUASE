export const state = () => ({
  list: [],
  indexExamples: [
    {
      img: '/images/services-carousel/home/1-logo.jpg',
      icon: '/icons/white/app.svg',
      service: 'Logo',
      url: 'diseno-de-logo',
      color: 'rgba(252, 210, 12, .8)',
      textColor: 'white'
    },
    {
      img: '/images/services-carousel/home/2-imagen-corporativa.jpg',
      icon: '/icons/white/pack-identidad.svg',
      service: 'Imagen Corporativa',
      url: 'imagen-corporativa',
      color: 'rgba(196, 149, 31, .8)',
      textColor: 'white'
    },
    {
      img: '/images/services-carousel/home/3-logo-web.jpg',
      icon: '/icons/white/logo-y-web.svg',
      service: 'LOGO + WEB',
      url: 'diseno-de-app',
      color: 'rgba(241, 145, 42, .8)',
      textColor: 'white'
    },
    {
      img: '/images/services-carousel/home/4-rediseno-logo.jpg',
      icon: '/icons/white/catalogo.svg',
      service: 'Rediseño de logo',
      url: 'rediseno-de-logo',
      color: 'rgba(222, 58, 58, 0.80)',
      textColor: 'white'
    },
    {
      img: '/images/services-carousel/home/5-web-app.jpg',
      icon: '/icons/white/web-y-app.svg',
      service: 'WEB + APP',
      url: 'diptico',
      color: 'rgba(7, 122, 53, .8)',
      textColor: 'white'
    },
    {
      img: '/images/services-carousel/home/6-rotulos.jpg',
      icon: '/icons/white/rotulo.svg',
      service: 'Rotulos',
      url: 'rotulo-banner',
      color: 'rgba(7, 122, 53, .8)',
      textColor: 'white'
    },
    {
      img: '/images/services-carousel/home/7-folletos.jpg',
      icon: '/icons/white/logo-a-medida.svg',
      service: 'Folletos',
      url: 'flyer',
      color: 'rgba(35, 30, 26, .8)',
      textColor: 'white'
    },
    {
      img: '/images/services-carousel/home/8-etiquetas-packaging.jpg',
      icon: '/icons/white/logo-y-web.svg',
      service: 'Etiqueta packaging',
      url: 'packaging',
      color: 'rgba(16, 23, 41, .8)',
      textColor: 'white'
    }
  ]
})

export const mutations = {
  GET_ALL (state, data) {
    if (data.push) {
      data.portfolios.forEach(el => {
        state.list.push(el)
      })
    } else {
      state.list = data.portfolios
    }
  }
}

export const getters = {}

export const actions = {
  async getAll ({ rootGetters, commit }, params) {
    let requestParams = {}
    if (params) {
      if (
        params.servicio &&
        rootGetters['services/getBySlug'](params.servicio)
      ) {
        requestParams['services'] = rootGetters['services/getBySlug'](
          params.servicio
        ).id
      }
      if (params.sector && rootGetters['sectors/getBySlug'](params.sector)) {
        requestParams['sectors'] = rootGetters['sectors/getBySlug'](
          params.sector
        ).id
      }
      if (
        params.actividad &&
        rootGetters['sectors/activities/getBySlug'](params.actividad)
      ) {
        requestParams['activities'] = rootGetters['sectors/activities/getBySlug'](params.actividad).id
      }
      if (params.pais && rootGetters['countries/getBySlug'](params.pais)) {
        requestParams['countries'] = rootGetters['countries/getBySlug'](
          params.pais
        ).id
      }
      if (
        params.localidad &&
        rootGetters['countries/locations/getBySlug'](params.localidad)
      ) {
        requestParams['locations'] = rootGetters['countries/locations/getBySlug'](params.localidad).id
      }
    }

    try {
      params.offset = params.offset || 0
      let url = 'portfolios/custom-search?offset=' + params.offset + '&limit=9'

      let portfolios = await this.$axios.$get(url, {
        params: requestParams
      })

      if (params.offset === 0) {
        return commit('GET_ALL', {portfolios: portfolios})
      }
      commit('GET_ALL', {portfolios: portfolios, push: true})
    } catch (error) {
      if (error.response.status === 404) commit('GET_ALL', {portfolios: [], push: true})
    }
  }
}
