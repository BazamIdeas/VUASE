var pending = false

export const state = () => ({
  list: [],
  relateds: [],
  indexExamples: [
    {
      img: '/images/services-carousel/home/1 - Islas Canarias Air.jpg',
      icon: '/icons/white/logo-a-medida.svg',
      service: 'Logotipo',
      description: 'Diseños a la medida, llamativos y originales, exclusivos e ilimitados para tu logo',
      url: '/logo-empresa',
      color: '#006B64e1',
      textColor: 'white',
      tag: 'Logotipo'
    },
    {
      img: '/images/services-carousel/home/2 - Octopus_c.jpg',
      icon: '/icons/white/pack-identidad.svg',
      service: 'Diseño de logo, identidad corporativa y logo animado',
      description: 'El logo ideal para tu negocio + diseño de papelería digital y papel + diseño de redes sociales + tu logo animado creados profesional, planificada y uniformemente',
      url: '/imagen-corporativa',
      color: '#2F4962e1',
      textColor: 'white',
      tag: 'Logotipo, pack de identidad y animación'
    },
    {
      img: '/images/services-carousel/home/3 -logo-web_c.jpg',
      icon: '/icons/white/logo-y-web.svg',
      service: 'Logo y Sitio Web',
      description: 'Diseño de logo y sitio web a la medida para lanzar con éxito tu marca',
      url: '/logo-y-pagina-web',
      color: '#F09329e1',
      textColor: 'white',
      tag: 'Diseño de logotipo y sitio web'
    },
    {
      img: '/images/services-carousel/home/4-rediseno-logo.jpg',
      icon: '/icons/white/redisenio.svg',
      service: 'Rediseño de Logo',
      description: 'Renovación de logotipo',
      url: '/rediseno-de-logo',
      color: '#E92528e1',
      textColor: 'white',
      tag: 'Rediseño de logo'
    },
    {
      img: '/images/services-carousel/home/5 - truekeling_c.jpg',
      icon: '/icons/white/sitio-web-profesional.svg',
      service: 'Sitio web',
      description: 'Diseño gráfico original, maquetación, programación y publicación de sitio web actual y autogestionable',
      url: '/pagina-web',
      color: '#D6686Fe1',
      textColor: 'white',
      tag: 'Diseño y programación de Sitio web'
    },
    {
      img: '/images/services-carousel/home/6 - ibinatural_c.jpg',
      icon: '/icons/white/rotulo-etiqueta.svg',
      service: 'Packaging',
      description: 'Diseños irresistibles para destacar tus productos',
      url: '/packaging',
      color: '#DD9B62e1',
      textColor: 'white',
      tag: 'Packaging'
    },
    {
      img: '/images/services-carousel/home/7 - keycode_c.jpg',
      icon: '/icons/white/ecommerce.svg',
      service: 'Comercio Electrónico',
      description: 'Sitios de comercio electrónicos que generan muchísimas ventas',
      url: '/sitio-web-ecommerce',
      color: '#008653e1',
      textColor: 'white',
      tag: 'Tienda de ecommerce'
    },
    {
      img: '/images/services-carousel/home/8 - La-julia_c.jpg',
      icon: '/icons/white/folleto-y-publicidades.svg',
      service: 'Folletos y Publicidades',
      description: 'Presenta y promociona tu marca, tus productos y servicios con diseños extraordinarios',
      url: '?tab=2#servicios',
      color: '#E89166e1',
      textColor: 'white',
      tag: 'Folletos y publicidades'
    },
    {
      img: '/images/services-carousel/home/9 - papiro_c.jpg',
      icon: '/icons/white/rotulo-vehicular.svg',
      service: 'Rótulo de Vehículos',
      description: 'Un diseño que promociona tu negocio donde vallas',
      url: '/rotulo-vehicular',
      color: '#FF007Fe1',
      textColor: 'white',
      tag: 'Rótulo Vehicular'
    },
    {
      img: '/images/services-carousel/home/10 -app.jpg',
      icon: '/icons/white/app.svg',
      service: 'App',
      description: 'Apps Diseño y programación de Apps que conectan con más clientes',
      url: '/desarrollo-de-app',
      color: '#96BC67e1',
      textColor: 'white',
      tag: 'Diseño y programación de App'
    },
    {
      img: '/images/services-carousel/home/11 - Olarte_c.jpg',
      icon: '/icons/white/rotulo-local.svg',
      service: 'Rótulo de local',
      description: 'Diseño gráfico y publicitario de locales que llaman al atención',
      url: '/rotulo-local',
      color: '#00A8D8e1',
      textColor: 'white',
      tag: 'Diseño de rótulo de local'
    },
    {
      img: '/images/services-carousel/home/12 - goyo_c.jpg',
      icon: '/icons/white/rotulo-vestimenta.svg',
      service: 'Ropa laboral',
      description: 'Diseño de ropa laboral que tu personal deseara lucir',
      url: '/rotulo-vestimenta-uniforme',
      color: '#342C5De1',
      textColor: 'white',
      tag: 'Diseño de ropa laboral'
    },
    {
      img: '/images/services-carousel/home/13 -logo.jpg',
      icon: '/icons/white/logo-a-medida.svg',
      service: 'Logotipos',
      description: 'Diseños a la medida, originales, exclusivos e ilimitados para tu logo',
      url: '/logo-empresa',
      color: '#7B5431e1',
      textColor: 'white',
      tag: 'Logotipo'
    },
    {
      img: '/images/services-carousel/home/14 - ERH_c.jpg',
      icon: '/icons/white/rotulo-furgoneta.svg',
      service: 'Diseño de furgoneta',
      description: 'Diseños gráficos y publicitarios de alto impacto',
      url: '/rotulo-furgoneta-camion',
      color: '#015474e1',
      textColor: 'white',
      tag: 'Diseño de furgoneta'
    },
    {
      img: '/images/services-carousel/home/15 -imagen-corporativa.jpg',
      icon: '/icons/white/pack-identidad.svg',
      service: 'Logo, pack de imagen corporativa y logo animado',
      description: 'Creación de tu logo a la medida, imagen corporativa y logo animado',
      url: '/imagen-corporativa',
      color: '#D34C50e1',
      textColor: 'white',
      tag: 'Logotipo, pack de identidad y animación'
    },
    {
      img: '/images/services-carousel/home/16 - amedee_c.jpg',
      icon: '/icons/white/rotulo-banner.svg',
      service: 'Diseño rótulo de banner',
      description: 'Un diseño publicitario ideal para destacar tu stand y llamar a los clientes visualmente',
      url: '/rotulo-banner',
      color: '#F1A9C1e1',
      textColor: 'white',
      tag: 'Diseño de banner'
    },
    {
      img: '/images/services-carousel/home/17 - antartik_c.jpg',
      icon: '/icons/white/diptico.svg',
      service: 'Dípticos',
      description: 'La presentación profesional de tus productos y servicios en impresos de 4 caras',
      url: '/diptico',
      color: '#0795B3e1',
      textColor: 'white',
      tag: 'Diseño de dípticos'
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

var oldParams = {}

export const actions = {
  async getAll ({ rootGetters, commit, state }, params) {
    if (pending) return // console.log('pending')
    pending = true

    params.offset = state.list.length

    let requestParams = {}

    if (params) {
      let resetOffset = false

      if (params.servicio && rootGetters['services/getBySlug'](params.servicio)) {
        let el = rootGetters['services/getBySlug'](params.servicio)
        if (oldParams['services'] !== el.id) resetOffset = true
        requestParams['services'] = el.id
      }

      if (params.sector && rootGetters['sectors/getBySlug'](params.sector)) {
        let el = rootGetters['sectors/getBySlug'](params.sector)
        if (oldParams['sectors'] !== el.id) resetOffset = true
        requestParams['sectors'] = el.id
      }

      if (params.actividad && rootGetters['countries/getBySlug'](params.actividad)) {
        let el = rootGetters['countries/getBySlug'](params.actividad)
        if (oldParams['countries'] !== el.id) resetOffset = true
        requestParams['countries'] = el.id
      }

      if (params.pais && rootGetters['countries/getBySlug'](params.pais)) {
        let el = rootGetters['countries/getBySlug'](params.pais)
        if (oldParams['countries'] !== el.id) resetOffset = true
        requestParams['countries'] = el.id
      }

      if (params.localidad && rootGetters['countries/locations/getBySlug'](params.localidad)) {
        let el = rootGetters['countries/locations/getBySlug'](params.localidad)
        if (oldParams['locations'] !== el.id) resetOffset = true
        requestParams['locations'] = el.id
      }

      if (resetOffset && params.offset !== 0) {
        params.offset = 0
      }
    }

    let portfolios

    try {
      let url = 'portfolios/custom-search?offset=' + params.offset + '&limit=9'

      portfolios = await this.$axios.$get(url, {
        params: requestParams
      })

      oldParams = requestParams

      if (params.offset === 0) {
        return commit('GET_ALL', {portfolios: portfolios})
      }

      commit('GET_ALL', {portfolios: portfolios, push: true})
    } catch (error) {
      if (error.response.status === 404) commit('GET_ALL', {portfolios: [], push: true})
    }
  },
  async getRelateds ({ rootGetters, commit, state }, activity) {
    let el = rootGetters['sectors/activities/getBySlug'](activity)

    let url = 'portfolios/custom-search?limit=8&activities=' + el.id

    try {
      let portfolios = await this.$axios.$get(url)
      commit('RELATEDS', portfolios)
    } catch (error) {
      console.log(error)
      commit('RELATEDS', [])
    }
  }
}
