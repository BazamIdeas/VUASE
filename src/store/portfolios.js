var pending = false

export const state = () => ({
  list: [],
  relateds: [],
  indexExamples: [
    {
      img: '/images/services-carousel/home/1-logo.jpg',
      icon: '/icons/white/logo-a-medida.svg',
      service: 'Logo',
      description: 'Diseños originales, exclusivos e ilimitados para tu logo',
      url: 'logo-empresa',
      color: 'rgba(68, 59, 20, 0.8)',
      textColor: 'white'
    },
    {
      img: '/images/services-carousel/home/2-imagen-corporativa.jpg',
      icon: '/icons/white/pack-identidad.svg',
      service: 'Logo, imagen corporativa y logo animado',
      description: 'El logo ideal para tu negocio + diseño de papeleria digital y papel + diseño de redes sociales + tu logo animado creados profesional, planificada y uniformemente',
      url: 'imagen-corporativa',
      color: 'rgba(196, 149, 31, .8)',
      textColor: 'white'
    },
    {
      img: '/images/services-carousel/home/3-logo-web.jpg',
      icon: '/icons/white/logo-y-web.svg',
      service: 'Logo y Sitio Web',
      description: 'El logo ideal y un sitio web a tu medida para concetar con nuevos y mas clientes',
      url: 'diseno-de-logo-y-pagina-web',
      color: 'rgba(241, 145, 42, .8)',
      textColor: 'white'
    },
    {
      img: '/images/services-carousel/home/4-rediseno-logo.jpg',
      icon: '/icons/white/redisenio.svg',
      service: 'Rediseño de Logo',
      description: 'Tu imagen renovada y profesional',
      url: 'rediseno-de-logo',
      color: 'rgba(222, 58, 58, 0.80)',
      textColor: 'white'
    },
    {
      img: '/images/services-carousel/home/5-web-app.jpg',
      icon: '/icons/white/web-y-app.svg',
      service: 'Web y App',
      description: 'Sitios webs y Apps que conectan con mas clientes',
      url: 'diseno-de-app',
      color: 'rgba(7, 122, 53, .8)',
      textColor: 'white'
    },
    {
      img: '/images/services-carousel/home/7-folletos.jpg',
      icon: '/icons/white/flyer.svg',
      service: 'Folletos y Publicidades',
      description: 'Presenta y promociona tu marca, tus productos y servicios con diseños extraordinarios',
      url: 'flyer',
      color: 'rgba(35, 30, 26, .8)',
      textColor: 'white'
    },
    {
      img: '/images/services-carousel/home/8-etiquetas-packaging.jpg',
      icon: '/icons/white/rotulo-etiqueta.svg',
      service: 'Diseño de Etiquetas y Packaging',
      description: 'Un diseño que da vida a tus productos y los hacen irresistibles',
      url: 'packaging',
      color: 'rgba(16, 23, 41, .8)',
      textColor: 'white'
    },
    {
      img: '/images/services-carousel/home/6-rotulos.jpg',
      icon: '/icons/white/rotulo.svg',
      service: 'Rótulos',
      description: 'Un diseño que promociona tu negocio donde vallas',
      url: 'rotulo-banner',
      color: 'rgba(7, 122, 53, .8)',
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
    // console.log('finishing')
    pending = false
  },
  RELATEDS (state, data) {
    state.relateds = data
  }
}

export const getters = {}

export const actions = {
  async getAll ({ rootGetters, commit, state }, params) {
    if (pending) return // console.log('pending')
    pending = true

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
        rootGetters['countries/getBySlug'](params.actividad)
      ) {
        requestParams['countries'] = rootGetters['countries/getBySlug'](params.actividad).id
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

    params.offset = state.list.length

    if (requestParams !== {} && params.offset !== 0) {
      params.offset = 0
    }

    let portfolios

    try {
      let url = 'portfolios/custom-search?offset=' + params.offset + '&limit=9'

      portfolios = await this.$axios.$get(url, {
        params: requestParams
      })

      if (params.offset === 0) {
        return commit('GET_ALL', {portfolios: portfolios})
      }

      commit('GET_ALL', {portfolios: portfolios, push: true})
    } catch (error) {
      if (error.response.status === 404) commit('GET_ALL', {portfolios: [], push: true})
    }
  },
  async getRelateds ({ rootGetters, commit, state }, params) {
    let url = 'portfolios/custom-search?limit=8&service=' + params.serviceSlug

    try {
      let portfolios = await this.$axios.$get(url)
      commit('RELATEDS', portfolios)
    } catch (error) {
      console.log(error)
      commit('RELATEDS', [])
    }
  }
}
