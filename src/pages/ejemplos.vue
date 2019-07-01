<template>
  <section>
    <v-container grid-list-md class="ejemplos">
      <v-layout row wrap>
        <v-flex xs12 class="my-3 py-5 xs-pb-0"></v-flex>
        <!-- <v-flex xs12>
          <AppFilterExamplesForm :params="params" :count="portfolios.length" />
        </v-flex> -->
        <v-layout xs12 row wrap class="portfolios" v-if="portfolios && portfolios.length">
          <v-flex @click="goPortfolio('/ejemplo/'+ portfolio.service.slug +'/'+ portfolio.slug, portfolio)" v-for="(portfolio, key) in portfolios" :key="portfolio.id + key" xs12 sm6 md4 class="pr-2 pointer">
            <v-card height="auto">
              <div class="img-cuadrada-ejemplos-container" >
                  <svg role="img" :aria-label="portfolio.name" :alt="portfolio.name" class="img-cuadrada-ejemplos" style="border-bottom: 1px solid #6a6a6a38;" viewBox="0 0 100 100 " :style="'background: url('+ urlHosting + portfolio.images[0].slug+')'"></svg>
              </div>
              <v-flex class="my-0">
                <h2 class="mb-1 px-1 text-xs-center subheading font-weight-medium">{{portfolio.name}}</h2>
                <p class="text-xs-center caption" style="font-weight: 400;">
                  {{portfolio.service.name}}
                </p>
              </v-flex>
            </v-card>
          </v-flex>
        </v-layout>
        <v-flex v-if="!portfolios.length">
          <h1 class="text-xs-center">No se encontraron portfolios</h1>
        </v-flex>
      </v-layout>
    </v-container>

    <!--<AppHeading class="mb-3" number="2" size="display-1" title="¿Qué necesitas crear?" subtitle="Disfruta del diseño perfecto cualquiera sea tu necesidad. Potencia hoy tu negocio." />
    <AppServicesGrid color="#F29F01" class="mb-4 pt-0"/>-->
  </section>
</template>

<script>
  export default {
    data () {
      return {
        urlHosting: 'https://api.liderlogo.com/v1/images/slug/',
        alt: 'Ejemplos de nuestros trabajos profesionales',
        description: 'Ejemplos de logos, imagen corporativa y páginas web, tenemos más de 15 años de experiencia diseñando marcas',
        title: 'Ejemplos de nuestros trabajos profesionales'
      }
    },
    asyncData ({ params }) {
      return { params: params }
    },
    async fetch ({ store, params }) {
      /* if (params.servicio) await store.dispatch('sectors/getAll')
      if (params.sector) await store.dispatch('sectors/activities/getAll')
      if (params.actividad) await store.dispatch('countries/getAll')
      if (params.pais) await store.dispatch('countries/locations/getAll') */

      await store.dispatch('services/getAll')
      await store.dispatch('sectors/getAll')
      // await store.dispatch('sectors/activities/getAll')
      await store.dispatch('countries/getAll')
      // await store.dispatch('countries/locations/getAll')
      await store.dispatch('portfolios/getAll', params)
    },
    mounted: function () {
      if (process.browser) {
        window.onscroll = () => {
          var offsetHeight = document.documentElement.offsetHeight
          var scrollPosition = document.documentElement.scrollTop + window.innerHeight

          // console.log(scrollPosition + 600, offsetHeight)
          var bottomOfWindow = scrollPosition + 600 >= offsetHeight
          // console.log(bottomOfWindow)
          if (bottomOfWindow && this.portfolios.length >= 9) {
            console.log('listing')
            this.$store.dispatch('portfolios/getAll', this.params)
          }
        }
      }
    },
    methods: {
      goPortfolio (url, portfolio) {
        if (process.browser) {
          localStorage.setItem('liderlogo_selected_portfolio', JSON.stringify(portfolio))
        }

        this.$router.push(url)
      }
    },
    head () {
      return {
        titleTemplate: this.title + ' | %s',
        meta: [
          { property: 'og:title', content: this.title },
          { property: 'og:description', content: this.description },
          { hid: 'description', name: 'description', content: this.description }
        ]
      }
    },
    computed: {
      portfolios () {
        if (this.$store.state.portfolios.list) {
          return this.$store.state.portfolios.list.filter(function (e) {
            return ![
              'Alquimia Expediciones - Tours y recorridos de montaña',
              'Corpeluva - Corporación educativa',
              'Geoit - Consultaría de Negocios geográficos',
              'Maremma - Heladería artesanal y cafetería.',
              'Sergio Hedrera - Fotógrafo',
              'Team Plus Interiorismo - Interiorismo Reformas y diseño de interiores'
            ].includes(e.name)
          })
        }
        return false
      }
    }
  }
</script>

<style>
.ejemplos  .v-text-field__details {
  display: none;
}

.pointer{
  cursor: pointer;
}
</style>
