export const state = () => ({
  list: [],
  indexExamples: [
    [
      {
        img: '/images/examples/1.png',
        icon: '/icons/white/app.svg',
        service: 'App Movil',
        url: 'diseno-de-app',
        color: 'rgba(222, 58, 58, 0.80)',
        textColor: 'white'
      },
      {
        img: '/images/examples/2.png',
        icon: '/icons/white/pack-identidad.svg',
        service: 'Imagen Corporativa',
        url: 'imagen-corporativa',
        color: 'rgba(222, 58, 58, 0.80)',
        textColor: 'white'
      },
      {
        img: '/images/examples/3.png',
        icon: '/icons/white/app.svg',
        service: 'App Movil',
        url: 'diseno-de-app',
        color: 'rgba(222, 58, 58, 0.80)',
        textColor: 'white'
      },
      {
        img: '/images/examples/4.png',
        icon: '/icons/white/catalogo.svg',
        service: 'Catálogo',
        url: 'catalogo',
        color: 'rgba(222, 58, 58, 0.80)',
        textColor: 'white'
      },
      {
        img: '/images/examples/1.png',
        icon: '/icons/white/diptico.svg',
        service: 'Diptico',
        url: 'diptico',
        color: 'rgba(222, 58, 58, 0.80)',
        textColor: 'white'
      },
      {
        img: '/images/examples/2.png',
        icon: '/icons/white/flyer.svg',
        service: 'Flyer',
        url: 'Flyer',
        color: 'rgba(222, 58, 58, 0.80)',
        textColor: 'white'
      },
      {
        img: '/images/examples/3.png',
        icon: '/icons/white/logo-a-medida.svg',
        service: 'Logo a medida',
        url: 'logo-empresa',
        color: 'rgba(222, 58, 58, 0.80)',
        textColor: 'white'
      },
      {
        img: '/images/examples/4.png',
        icon: '/icons/white/logo-y-web.svg',
        service: 'Logo y sitio web',
        url: 'diseno-logo-y-pagina-web',
        color: 'rgba(222, 58, 58, 0.80)',
        textColor: 'white'
      },
      {
        img: '/images/examples/1.png',
        icon: '/icons/white/vectorizacion.svg',
        service: 'Vectorización',
        url: 'vectorizacion',
        color: 'rgba(222, 58, 58, 0.80)',
        textColor: 'white'
      },
      {
        img: '/images/examples/2.png',
        icon: '/icons/white/perfil-red.svg',
        service: 'Perfil Red',
        url: 'diseno-perfil-redes-sociales',
        color: 'rgba(222, 58, 58, 0.80)',
        textColor: 'white'
      },
      {
        img: '/images/examples/3.png',
        icon: '/icons/white/publicidad.svg',
        service: 'Publicidad',
        url: 'publicidad',
        color: 'rgba(222, 58, 58, 0.80)',
        textColor: 'white'
      },
      {
        img: '/images/examples/4.png',
        icon: '/icons/white/app.svg',
        service: 'App Movil',
        url: 'diseno-de-app',
        color: 'rgba(222, 58, 58, 0.80)',
        textColor: 'white'
      }
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
