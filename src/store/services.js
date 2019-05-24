import { services as servicesHardcoded } from './data-app/services'

export const state = () => ({
  groups: [
    {
      icon: '/icons/logo-a-medida.svg',
      name: 'LOGO E IDENTIDAD',
      layouts: [],
      carousel: [
        { src: 'images/pages/nuestros-servicios/logo-identidades/pan-&-miri.jpg' },
        { src: 'images/pages/nuestros-servicios/logo-identidades/duarte.jpg' },
        { src: 'images/pages/nuestros-servicios/logo-identidades/meraki.jpg' },
        { src: 'images/pages/nuestros-servicios/logo-identidades/armel.jpg' },
        { src: 'images/pages/nuestros-servicios/logo-identidades/pro-belleza.jpg' }
      ],
      rows: [
        [
          'imagen-corporativa',
          'logo-empresa'
        ],
        [
          'logo-y-pagina-web',
          'carousel'
        ],
        [
          'rediseno-de-logo',
          'vectorizacion'
        ]
      ]
    },
    {
      icon: '/icons/app_hover.svg',
      name: 'Web y App',
      layouts: [],
      carousel: [
        { src: 'images/pages/nuestros-servicios/web-y-app/dual-web.jpg' },
        { src: 'images/pages/nuestros-servicios/web-y-app/oliveros-web.jpg' },
        { src: 'images/pages/nuestros-servicios/web-y-app/sanidae-web.jpg' },
        { src: 'images/pages/nuestros-servicios/web-y-app/toni-linas-web.jpg' },
        { src: 'images/pages/nuestros-servicios/web-y-app/ultimoo-web.jpg' },
        { src: 'images/pages/nuestros-servicios/web-y-app/Urkira-web.jpg' }
      ],
      rows: [
        [
          'logo-y-pagina-web',
          'pagina-web',
          'sitio-web-ecommerce'
        ],
        [
          'desarrollo-de-app',
          'carousel'
        ],
        [
          'presencia-web'
        ]
      ]
    },
    {
      icon: '/icons/folleto-y-publicidades.svg',
      name: 'Folletos y Publicidades',
      layouts: [],
      carousel: [
        { src: 'images/pages/nuestros-servicios/folletos/bellek.jpg' },
        { src: 'images/pages/nuestros-servicios/folletos/oliveros.jpg' },
        { src: 'images/pages/nuestros-servicios/folletos/rocabike.jpg' },
        { src: 'images/pages/nuestros-servicios/folletos/terra-agro.jpg' }
      ],
      rows: [
        [
          'flyer',
          'flyer-dos-caras',
          'diptico'
        ],
        [
          'tripticos',
          'carousel'
        ],
        [
          'publicidad',
          'catalogo'
        ]
      ]
    },
    {
      icon: '/icons/rotulo_hover.svg',
      name: 'Rótulos',
      rows: [
        [
          'rotulo-vehicular',
          'rotulo-local',
          'rotulo-banner'
        ],
        [
          'packaging',
          'carousel'
        ],
        [
          'rotulo-vestimenta-uniforme',
          'rotulo-furgoneta-camion'
        ]
      ],
      layouts: [],
      carousel: [
        { src: 'images/pages/nuestros-servicios/rotulos/Altacordillera.jpg' },
        { src: 'images/pages/nuestros-servicios/rotulos/dual.jpg' },
        { src: 'images/pages/nuestros-servicios/rotulos/extremadura-vending.jpg' },
        { src: 'images/pages/nuestros-servicios/rotulos/gps-seville-tour-auto.jpg' },
        { src: 'images/pages/nuestros-servicios/rotulos/ibinatural-local.jpg' },
        { src: 'images/pages/nuestros-servicios/rotulos/movilmarket-ropa.jpg' },
        { src: 'images/pages/nuestros-servicios/rotulos/nature-seafood.jpg' }
      ]
    },
    {
      icon: '/icons/perfil-red.svg',
      name: 'Perfiles de Redes Sociales',
      rows: [
        [
          'perfil-redes-sociales',
          'carousel'
        ]
      ],
      layouts: [],
      carousel: [
        { src: 'images/pages/nuestros-servicios/perfiles-de-redes-sociales/alpha.jpg' },
        { src: 'images/pages/nuestros-servicios/perfiles-de-redes-sociales/arete.jpg' },
        { src: 'images/pages/nuestros-servicios/perfiles-de-redes-sociales/rentum.jpg' },
        { src: 'images/pages/nuestros-servicios/perfiles-de-redes-sociales/sanidae.jpg' },
        { src: 'images/pages/nuestros-servicios/perfiles-de-redes-sociales/urkira.jpg' }
      ],
      noBorder: true
    }
  ],
  addonsSlugs: [
    'diseno-y-desarrollo-de-seccion-web',
    'hosting-por-un-ano',
    'dominio-por-un-ano',
    'casillas-de-correo',
    'certificado-ssl',
    'chat',
    'pop-publicitario',
    'cotizador',
    'multidioma-automatico',
    'area-privada-para-clientes',
    'plataforma-inmobiliaria',
    'formulario-personalizado',
    'reservaciones-o-citas',
    'area-para-la-gestion-de-archivos',
    'seccion-de-noticias-o-publicaciones',
    'integracion-con-herramientas-de-google',
    'ecommerce',
    'catalogo-productos',
    'galeria-de-proyectos',
    'logo-solo-para-web'
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
            service.dataService = servicesHardcoded[slug]
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

    formattedServices = formattedServices.filter((value, index) => {
      return !state.addonsSlugs.includes(value.field)
    })

    return [{ text: 'Todos los servicios', field: 'servicios' }].concat(formattedServices)
  },
  addons (state) {
    let addonsServices = []
    for (let serviceItem of state.list) {
      if (!state.addonsSlugs.find((addonSlug) => serviceItem.slug === addonSlug)) {
        continue
      }
      addonsServices.push(serviceItem)
    }
    return addonsServices
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
