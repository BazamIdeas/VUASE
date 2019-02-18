<template>
  <section class="cotizacion">
    <v-container grid-list-md>
      <v-layout row wrap>
        <v-flex xs12 class="my-4 py-4"></v-flex>
        <v-flex xs12>
          <AppHeading :number="'1'" size="headline" title="¿QUE QUIERE HACER CON SU WEB?" class="mb-3" />
        </v-flex>
        <v-flex md7 offset-md1 class="mb-5">
          <v-layout row wrap>
            <v-flex md3 xs6 v-for="pkg in slugsPackages" :key="pkg" class="px-2 mb-2">
              <v-card class="pa-3 package" :class="{ 'selected': selectedPkg(pkg) }">
                <div role="img" aria-label="Liderlogo" class="package-img" style="width: 100%; position: relative; padding-top: 55%; margin-bottom: 14%;"  :style="{ backgroundImage: 'url(/images/quote/what_to_do/' + pkg + '.svg)' }" @click="selectPack(pkg)">
                </div>
                <div class="package-title">
                  <p class="body-2 text-xs-center mb-0">{{ packages[pkg].title }}</p>
                </div>
              </v-card>
            </v-flex>
            <v-flex md12 class="mt-1">
              <p class="headline font-weight-medium section-title" style="border-bottom: 2px solid #004b7b;">Detalles</p>
            </v-flex>
            <v-flex md6 v-for="service in addons" v-if="addonsObject[service.slug].section === 'details'" :key="service.slug" class="pa-2">
              <v-card class="py-1 service-package" :class="{ 'selected': selectedAddon(service.slug) }">
                <v-layout row wrap @click="selectAddon(service.slug)">
                  <v-flex xs3 class="service-package-img">
                    <img :alt="service.name + ' Liderlogo'" :src="'/images/quote/services/' + service.slug + '.svg'" height="50">
                  </v-flex>
                  <v-flex xs6 class="service-package-name">
                    <p class="body-2 mb-0" style="line-height: 15px;">{{ service.name }}</p>
                  </v-flex>
                  <v-flex xs2 class="service-package-img" v-if="service.slug === 'diseno-y-desarrollo-de-seccion-web'">
                    <v-text-field v-model="sections" name="sections" type="number" class="sections" hide-details></v-text-field>
                  </v-flex>
                </v-layout>
              </v-card>
            </v-flex>
            <v-flex md12 xs12 class="mt-3">
              <p class="headline font-weight-medium section-title" style="border-bottom: 2px solid #004b7b;">Funcionalidades</p>
            </v-flex>
            <v-flex md3 xs6 v-for="service in addons" v-if="addonsObject[service.slug].section === 'functionalities'" :key="service.slug" class="px-2 mb-2">
              <v-card class="service-package" :class="{ 'selected': selectedAddon(service.slug) }"  >
                <div class="px-3 pt-2" @click="selectAddon(service.slug)">
                  <img :alt="service.name + ' Liderlogo'" :src="'/images/quote/services/' + service.slug + '.svg'">
                </div>
                <v-divider light></v-divider>
                <div class="package-title px-1">
                  <p class="body-2 mb-0 text-xs-center">{{ service.name }}</p>
                </div>
              </v-card>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex md4 class="px-2">
          <v-card style="position: sticky; top: 9px;" class="pb-3">
            <div class="subheading text-xs-center py-2 font-weight-bold section-title">SERVICIOS INCLUIDOS</div>
            <v-divider light></v-divider>
            <table width="100%">
              <tbody>
                <tr v-for="(addon, index) in addons" :key="index" v-if="addon.slug === 'diseno-y-desarrollo-de-seccion-web'">
                  <td class="caption py-1 pl-2 addon-name-table-price" style="width: 70%;"> {{ addon.name }} ({{ sections }}) </td>
                  <td class="body-1 font-weight-bold text-xs-center py-1 pr-2" style="font-size: 12px !important;"> 
                    <span v-if="addon.price.currency.display == 'left'">
                      {{addon.price.currency.symbol}}
                      {{addon.price.value * sections}}
                    </span>

                    <span v-if="addon.price.currency.display == 'right'">
                      {{addon.price.value * sections}}
                      {{addon.price.currency.symbol}}
                    </span>
                  </td>
                </tr>
                <tr v-for="(addon, index) in addons" :key="index" v-if="selectedAddon(addon.slug)">
                  <td class="caption py-1 pl-2 addon-name-table-price" style="width: 70%;"> {{ addon.name }} </td>
                  <td class="body-1 font-weight-bold text-xs-center py-1 pr-2" style="font-size: 12px !important;">
                    <span v-if="addon.price.currency.display == 'left'">
                      {{addon.price.currency.symbol}}
                      {{addon.price.value}}
                    </span>

                    <span v-if="addon.price.currency.display == 'right'">
                      {{addon.price.value}}
                      {{addon.price.currency.symbol}}
                    </span>
                  </td>
                </tr>
                <tr class="hidden-xs-only">
                  <td class="title font-weight-bold py-1 pl-2" style="width: 70%;"> TOTAL </td>
                  <td class="title font-weight-bold text-xs-center py-1 pr-2">  
                    <!-- {{ countryData.currency.symbol }} {{ total }} -->
                    <span v-if="countryData.currency.display == 'left'">
                      {{countryData.currency.symbol}}
                      {{total}}
                    </span>

                    <span v-if="countryData.currency.display == 'right'">
                      {{total}}
                      {{countryData.currency.symbol}}
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
            <v-divider light></v-divider>
            <div class="subheading text-xs-center py-2 font-weight-bold section-title hidden-xs-only">
              <v-btn color="primary" @click="toCheckout">CONTINUAR</v-btn>
            </div>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <v-toolbar class="hidden-sm-and-up" fixed style="top: inherit;bottom: 0;">
      <div class="title font-weight-bold text-xs-center">
        <!-- {{ countryData.currency.symbol }} {{ total }} -->
        <span v-if="countryData.currency.display == 'left'">
          {{countryData.currency.symbol}}
          {{total}}
        </span>

        <span v-if="countryData.currency.display == 'right'">
          {{total}}
          {{countryData.currency.symbol}}
        </span>
      </div>
      <v-spacer></v-spacer>
      <div class="">
        <v-btn color="primary" @click="toCheckout">CONTINUAR</v-btn>
      </div>
    </v-toolbar>
  </section>
</template>

<script>
  export default {
    async fetch ({ store }) {
      await store.dispatch('services/getAll')
    },
    asyncData ({ params }) {
      return { params: params }
    },
    mounted () {
      let packages = this.$storage.get('quotePacksOptions')
      let addons = this.$storage.get('quoteAddonsOptions')

      if (packages) this.packagesSelected = packages
      if (addons) this.addonsSelected = addons

      this.sections = 0

      for (const pkg of this.packagesSelected) {
        if (this.packages[pkg]) {
          for (let addon of this.packages[pkg].services) {
            if (addon === 'diseno-y-desarrollo-de-seccion-web') {
              this.sections += this.packages[pkg].sections
            } else if (!this.addonsSelected.includes(addon)) {
              this.addonsSelected.push(addon)
            }
          }
        }
      }

      if (this.params.servicio === 'logo-y-pagina-web') this.addonsSelected.push('logo-solo-para-web')

      this.$storage.set('quotePacksOptions', this.packagesSelected)
      this.$storage.set('quoteAddonsOptions', this.addonsSelected)
    },
    data () {
      return {
        packagesSelected: ['promocionar-un-servicio-o-producto'],
        addonsSelected: [],
        packages: {
          'promocionar-un-servicio-o-producto': {
            title: 'Promocionar un servicio o producto',
            description: 'Es una herramienta sumamente eficiente para obtener nuevos clientes por medio de acciones marketing online. Tiene como principal beneficio lograr nuevos clientes potenciales y/o obtener que se realice una acción determinada que incremente sus ventas e interacción con el mercado.',
            sections: 1,
            services: ['diseno-y-desarrollo-de-seccion-web', 'pop-publicitario', 'hosting-por-un-ano']
          },
          'presentar-mi-empresa': {
            title: 'Presentar mi empresa',
            description: 'Sitio de presencia en Internet ideal para brindar introducción de una pequeña empresa a la web. Diseño exclusivo compuesto por home page de bienvenida, carrousel de 6 imágenes, información introductoria de la actividad, sector de contacto con datos, formulario, mapa interactivo de Google y sector de avisos legales.',
            sections: 2,
            services: ['diseno-y-desarrollo-de-seccion-web', 'hosting-por-un-ano']
          },
          'ofrecer-multiples-servicios': {
            title: 'Ofrecer múltiples servicios',
            description: 'Es el sitio web perfecto para PyMes que desean ganar clientes en Internet. Incluye el diseño de hasta 5 secciones, como ser: reseña de la empresa, sector de contacto, mapa interactivo, galería imágenes o videos, descripción de servicios, noticias, etc.',
            sections: 5,
            services: ['diseno-y-desarrollo-de-seccion-web', 'hosting-por-un-ano', 'chat', 'seccion-de-noticias-o-publicaciones']
          },
          'dar-a-conocer-mis-proyectos-realizados': {
            title: 'Dar a conocer mis proyectos realizados',
            description: 'Además de mostrar la información de su empresa o actividad, incluye una galería donde podrá publicar proyectos junto a sus características, atributos y anexarle imágenes. Los mismos pueden ser filtrados según las variables que desee.',
            sections: 3,
            services: ['diseno-y-desarrollo-de-seccion-web', 'hosting-por-un-ano', 'galeria-de-proyectos']
          },
          'publicar-inmuebles-para-alquiler-o-venta': {
            title: 'Publicar inmuebles para alquilar o venta',
            description: 'Plataforma imprescindible si está en la industria de Bienes Raíces, permite: cargar propiedades junto a sus atributos y características, localización en mapa interactivo, búsqueda personalizada, listado de favoritas, publicar galería de fotos, entre otras funciones.',
            sections: 5,
            services: ['diseno-y-desarrollo-de-seccion-web', 'hosting-por-un-ano', 'plataforma-inmobiliaria']
          },
          'exhibir-un-menu-de-platos-o-comidas': {
            title: 'Exhibir un menú de platos / comidas',
            description: 'De a conocer su restaurant o bar con un sitio web atractivo y profesional, además podrá agregar y modificar platos al menú cuando desee.',
            sections: 3,
            services: ['diseno-y-desarrollo-de-seccion-web', 'hosting-por-un-ano', 'catalogo-productos']
          },
          'mostrar-un-catalogo-de-productos': {
            title: 'Mostrar un catálogo de productos',
            description: 'Herramienta indispensable para exhibir sus productos en la web, podrá cargar, modificar y agregar categorías, además incluye las secciones básicas como: contacto, reseña de la empresa, slider de imágenes, mapa de ubicación, etc.',
            sections: 5,
            services: ['diseno-y-desarrollo-de-seccion-web', 'hosting-por-un-ano', 'catalogo-productos']
          },
          'vender-mis-productos-online': {
            title: 'Vender mis productos online',
            description: 'Es la opción ideal para vender en línea. Todo lo necesario para dar a conocer su negocio con una web Profesional + Diseño y programación de Catálogo de productos, con alta de 100 productos y la posibilidad de creación ilimitada de categorías y subcategorías, carro de compras, posibilidad de configurar distintos impuestos en función de país o el código postal de envío, ficha de productos completas, valoración de productos, integración con medios de pagos(Paypal, Paypal PRO, 2CO, Transferencia Bancaria, Pago contra entrega, etc), cupones de descuento por porcentaje o importe fijo, múltiples monedas.',
            sections: 5,
            services: ['diseno-y-desarrollo-de-seccion-web', 'hosting-por-un-ano', 'ecommerce']
          },
          'compartir-informacion': {
            title: 'Compartir informacion y archivos con mis clientes',
            description: 'Tus clientes podrán acceder a una sección privada mediante un usuario y contraseña, desde allí desde podrá descargar archivos y documentos ordenados por categorías',
            sections: 2,
            services: ['diseno-y-desarrollo-de-seccion-web', 'area-privada-para-clientes', 'hosting-por-un-ano']
          },
          'personalizado': {
            title: 'Personalizado',
            description: '',
            sections: 0,
            services: []
          }
        },
        addonsObject: {
          'diseno-y-desarrollo-de-seccion-web': { section: 'details' },
          'hosting-por-un-ano': { section: 'details' },
          // 'dominio-por-un-ano': { section: 'details' },
          // 'casillas-de-correo': { section: 'details' },
          'certificado-ssl': { section: 'details' },
          'chat': { section: 'functionalities' },
          'pop-publicitario': { section: 'functionalities' },
          'cotizador': { section: 'functionalities' },
          'multidioma-automatico': { section: 'functionalities' },
          'area-privada-para-clientes': { section: 'functionalities' },
          'plataforma-inmobiliaria': { section: 'functionalities' },
          'formulario-personalizado': { section: 'functionalities' },
          'reservaciones-o-citas': { section: 'functionalities' },
          'area-para-la-gestion-de-archivos': { section: 'functionalities' },
          'seccion-de-noticias-o-publicaciones': { section: 'functionalities' },
          'integracion-con-herramientas-de-google': { section: 'functionalities' },
          'ecommerce': { section: 'functionalities' },
          'catalogo-productos': { section: 'functionalities' },
          'galeria-de-proyectos': { section: 'functionalities' },
          'logo-solo-para-web': { section: 'details' }
        },
        sections: 1
      }
    },
    computed: {
      slugsPackages () { return Object.keys(this.packages) },
      addons () { return this.$store.getters['services/addons'] },
      countryData () { return this.$store.state.countries.data },
      total () {
        let total = 0

        for (let addon of this.addons) {
          if (this.addonsSelected.includes(addon.slug)) {
            total += addon.price.value
          } else if (addon.slug === 'diseno-y-desarrollo-de-seccion-web') {
            total += addon.price.value * this.sections
          }
        }

        return total
      },
      dataService () {
        return this.$store.getters['services/getBySlug'](this.params.servicio)
      }
    },
    methods: {
      selectPack (slugPack) {
        if (slugPack === 'personalizado') return

        if (this.packagesSelected.includes('personalizado')) {
          this.packagesSelected = []
          this.addonsSelected = []
        }

        this.sections = 0
        this.addonsSelected = []

        if (this.packagesSelected.includes(slugPack)) {
          let index = this.packagesSelected.indexOf(slugPack)
          this.packagesSelected.splice(index, 1)
        } else {
          this.packagesSelected.push(slugPack)
        }

        for (let slug of this.packagesSelected) {
          for (let addon of this.packages[slug].services) {
            if (addon === 'diseno-y-desarrollo-de-seccion-web') {
              this.sections += this.packages[slug].sections
            } else if (!this.addonsSelected.includes(addon)) {
              this.addonsSelected.push(addon)
            }
          }
        }

        this.$storage.set('quotePacksOptions', this.packagesSelected)
        this.$storage.set('quoteAddonsOptions', this.addonsSelected)
      },
      selectAddon (slugAddon) {
        if (slugAddon === 'diseno-y-desarrollo-de-seccion-web') return

        if (this.addonsSelected.includes(slugAddon)) {
          let index = this.addonsSelected.indexOf(slugAddon)
          this.addonsSelected.splice(index, 1)
        } else {
          this.addonsSelected.push(slugAddon)
        }

        this.packagesSelected = ['personalizado']
        this.$storage.set('quotePacksOptions', this.packagesSelected)
        this.$storage.set('quoteAddonsOptions', this.addonsSelected)
      },
      selectedPkg (slug) {
        return this.packagesSelected.includes(slug)
      },
      selectedAddon (slug) {
        return this.addonsSelected.includes(slug)
      },
      toCheckout () {
        const brief = { service: { id: this.dataService.id, name: this.dataService.name, slug: this.dataService.slug }, designs: [], styles: {}, colors: [], customColors: '', information: {} }
        var target = null

        brief.subServices = []

        for (let addon of this.addons) {
          if (this.addonsSelected.includes(addon.slug)) {
            brief.subServices.push({ id: addon.id, name: addon.name, slug: addon.slug })
          } else if (addon.slug === 'diseno-y-desarrollo-de-seccion-web') {
            brief.subServices.push({ id: addon.id, name: addon.name, slug: addon.slug, sections: this.sections })
          }
        }

        target = 'brief/disenos'

        this.$storage.set('brief', brief)
        this.$router.push('/nuestros-servicios/' + this.dataService.slug + '/' + target)
      }
    }
  }

  // 'quotePacksOptions'
</script>

<style>
  .package {
    display: flex;
    flex-flow: column;
    justify-content: center;
    cursor: pointer;
  }
  
  .package-img {
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
  }

  .package-title {
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 15px;
  }

  .package.selected {
    background-color: #0081c1;
  }

  .package.selected > .package-img {
    filter: brightness(3);
  }

  .package.selected .package-title p {
    color: #ffffff;
  }
/*
  .service-package {
    border: 2px solid grey;
  }
*/
  .service-package.selected {
    border: 2px solid #0081c1;
  }
  
  .service-package-name, .service-package-img {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  .section-title {
    color: #004b7b;
  }

  .v-text-field.sections {
    padding-top: 0px;
    margin-top: 0px;
  }

  .addon-name-table-price {
    position: relative;
  }

  .addon-name-table-price::after {
    content: "";
    width: 96%;
    height: 1px;
    background-color: #434343;
    position: absolute;
    left: 8px;
    bottom: 2px;
  }
</style>