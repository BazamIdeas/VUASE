import { services as servicesHardcoded } from './data-app/services'

export const state = () => ({
  groups: [
    {
      icon: '/icons/logo_a_medida_hover.svg',
      name: 'Logos e Identidades',
      layouts: [],
      carousel: [
        { src: 'images/carousels/servicios_folletos.png' },
        { src: 'images/carousels/servicios_folletos.png' }
      ],
      rows: [
        [
          'imagen-corporativa',
          'pack-rediseno-de-logo'
        ],
        [
          'logo-empresa',
          'carousel'
        ],
        [
          'diseno-logo-y-pagina-web',
          'vectorizacion'
        ]
      ]
    },
    {
      icon: '/icons/app_hover.svg',
      name: 'Web y App',
      layouts: [],
      carousel: [
        { src: 'images/carousels/servicios_folletos.png' },
        { src: 'images/carousels/servicios_folletos.png' }
      ],
      rows: [
        [
          'diseno-de-app'
        ],
        [
          'diseno-pagina-web',
          'carousel'
        ]
      ]
    },
    {
      icon: '/icons/folletos_y_publicidades_hover.svg',
      name: 'Folletos y Publicidades',
      layouts: [],
      carousel: [
        { src: 'images/carousels/servicios_folletos.png' },
        { src: 'images/carousels/servicios_folletos.png' }
      ],
      rows: [
        [
          'flyer',
          'diptico',
          'tripticos'
        ],
        [
          'flyer-dos-caras',
          'carousel'
        ],
        [
          'catalogo',
          'publicidad'
        ]
      ]
    },
    {
      icon: '/icons/rotulo_hover.svg',
      name: 'Rotulos',
      rows: [
        [
          'rotulo-vehicular',
          'rotulo-local',
          'rotulo-banner'
        ],
        [
          'rotulo-furgoneta-camion',
          'carousel'
        ],
        [
          'rotulo-vestimenta-uniforme',
          'packaging'
        ]
      ],
      layouts: [],
      carousel: [
        { src: 'images/carousels/servicios_folletos.png' },
        { src: 'images/carousels/servicios_folletos.png' }
      ]
    },
    {
      icon: '/images/services/icono-1.png',
      name: 'Perfiles de Redes Sociales',
      rows: [
        [
          'diseno-perfil-redes-sociales',
          'carousel'
        ]
      ],
      layouts: [],
      carousel: [
        { src: 'images/carousels/servicios_folletos.png' },
        { src: 'images/carousels/servicios_folletos.png' }
      ],
      noBorder: true
    }
  ],
  list: []
})

export const mutations = {
  GET_ALL (state, services) {
    state.list = services

    for (let group of state.groups) {
      if (!group.rows) { continue }
      group.layouts = []

      for (const arrSlugs of group.rows) {
        var row = {
          services: []
        }

        for (let slug of arrSlugs) {
          let service = services.find(function (el) {
            return el.slug === slug ? el : false
          })

          if (!service) {
            if (slug === 'carousel') {
              row.carousel = group.carousel
            }
            continue
          }

          // Service Items
          if (servicesHardcoded[slug]) {
            service.list = servicesHardcoded[slug].list || ['']
            service.description = servicesHardcoded[slug].description || ''
            service.icon = servicesHardcoded[slug].icon || ''
            service.url = servicesHardcoded[slug].url || ''
          }

          row.services.push(service)
        }
        group.layouts.push(row)
      }
    }
  }
}

export const getters = {
  getBySlug: (state) => (slug) => {
    return state.list.find(el => el.slug === slug)
  },
  forSelectField (state) {
    let formattedServices = state.list.map(x => { return { text: x.name, field: x.slug } })
    return [{ text: 'Todos los servicios', field: 'servicios' }].concat(formattedServices)
  }
}

export const actions = {
  async getAll ({ rootState, commit }) {
    try {
      let services = await this.$axios.$get('services?limit=1000')
      commit('GET_ALL', services)
    } catch (error) {
      console.log(error)
    }
  }
}
