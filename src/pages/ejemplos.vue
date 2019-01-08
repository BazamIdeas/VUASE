<template>
  <section>
    <v-container grid-list-md class="ejemplos">
      <v-layout row wrap>
        <v-flex xs12 class="my-3 py-5 xs-pb-0"></v-flex>
        <v-flex xs12>
          <AppFilterExamplesForm :params="params"/>
        </v-flex>
        <v-layout xs12 row wrap class="portfolios" v-if="portfolios && portfolios.length">
          <v-flex @click="goPortfolio('/ejemplo/'+ portfolio.service.slug +'/'+ portfolio.slug, portfolio)" v-for="portfolio in portfolios" :key="portfolio.id" xs12 sm6 md4 class="pr-2">
            <v-card height="auto">
              <div class="img-cuadrada-ejemplos-container" >
                  <svg role="img" :aria-labelledby="alt" class="img-cuadrada-ejemplos" style="border-bottom: 1px solid #6a6a6a38;" viewBox="0 0 100 100 " :style="'background: url('+ urlHosting + portfolio.images[0].slug+')'"></svg>
              </div>
              <v-flex class="my-0">
                <h2 class="mb-1 px-1 text-xs-center subheading font-weight-medium">{{portfolio.name}}</h2>
                <p class="text-xs-center caption" style="font-weight: 400;">
                  {{portfolio.service.name}} - {{portfolio.location.name}}
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
  </section>
</template>

<script>
  export default {
    data () {
      return {
        urlHosting: 'http://api.liderlogos.com/v1/images/slug/',
        alt: 'Liderlogo'
      }
    },
    asyncData ({ params }) {
      return { params: params }
    },
    async fetch ({ store, params }) {
      await store.dispatch('services/getAll')
      if (params.servicio) await store.dispatch('sectors/getAll')
      if (params.sector) await store.dispatch('sectors/activities/getAll')
      if (params.actividad) await store.dispatch('countries/getAll')
      if (params.pais) await store.dispatch('countries/locations/getAll')
      await store.dispatch('portfolios/getAll', params)
    },
    methods: {
      goPortfolio (url, portfolio) {
        if (process.browser) {
          localStorage.setItem('liderlogo_selected_portfolio', JSON.stringify(portfolio))
        }

        this.$router.push(url)
      }
    },
    mounted: function () {
      if (process.browser) {
        window.onscroll = () => {
          console.log(document.documentElement.scrollTop + window.innerHeight + 100)
          let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight + 100 > document.documentElement.offsetHeight

          if (bottomOfWindow && this.params.offset >= 8) {
            this.$store.dispatch('portfolios/getAll', this.params)
          }
        }
      }
    },
    head () {
      return {
        titleTemplate: '%s | Servicios',
        meta: [
          { name: 'og:title', content: 'bar' }
        ]
      }
    },
    computed: {
      portfolios () { return this.$store.state.portfolios.list }
    }
  }
</script>

<style>
.ejemplos  .v-text-field__details {
  display: none;
}
</style>
