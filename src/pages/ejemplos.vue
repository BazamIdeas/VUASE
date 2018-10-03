<template>
  <section>
    <v-container grid-list-md>
      <v-layout row wrap>
        <v-flex xs12 class="my-4 py-5"></v-flex>
        <v-flex xs12>
          <AppFilterExamplesForm :params="params"/>
        </v-flex>
        <v-flex v-if="portfolios.length" xs3 v-for="portfolio in portfolios" :key="portfolio.id">
          {{ portfolio.id }} - {{ portfolio.name }}
        </v-flex>
        <v-flex v-if="!portfolios.length">
          <h1 class="text-xs-center">No se encontraron portfolios</h1>
        </v-flex>
      </v-layout>
    </v-container>
  </section>
</template>

<script>
  export default {
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
    computed: {
      portfolios () { return this.$store.state.portfolios.list }
    }
  }
</script>
