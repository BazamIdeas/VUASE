<template>
  <section>
    <v-container grid-list-md>
      <v-layout row wrap>
        <v-flex xs12 class="my-4 py-5"></v-flex>
        <v-flex xs12>
          <AppFilterExamplesForm :params="params"/>
        </v-flex>
        <v-layout xs12 row wrap class="portfolios">
          <v-flex v-if="portfolios && portfolios.length" v-for="portfolio in portfolios" :key="portfolio.id" xs12 md4 class="pr-2">
            <v-card :to="'/ejemplo/'+ portfolio.service.slug +'/'+ portfolio.slug">
              <v-carousel 
                interval="6000" 
                hide-controls hide-delimiters 
                style="width: 100%; max-height: calc( 80vw / 3 );" class="portfolio-carousel">
                <v-carousel-item v-for="(item, i) in portfolio.images.slice(0,1)" :key="i" :transition="'slide-x-transition'">
                  <div class="img-portf" :style="'background:url('+urlHosting + item.slug+');'" />
                </v-carousel-item>
              </v-carousel>
              <v-flex class="my-0" style="border-top: 1px solid #6a6a6a38;">
                <h2 class="mt-2 mb-1 text-xs-center font-weight-medium">{{portfolio.name}}</h2>
                <p class="text-xs-center caption" style="font-weight: 400;">
                  {{portfolio.service.name}} - 
                  {{portfolio.activity.sector.name}} - 
                  {{portfolio.location.country.name}}
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
        offset: 0
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
    mounted: function () {
      if (process.browser) {
        window.onscroll = () => {
          let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight
          this.params.offset = this.portfolios.length

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
