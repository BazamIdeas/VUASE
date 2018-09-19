<template>
  <section>
    <v-container grid-list-md>
      <v-layout row wrap>
        <v-flex xs12 class="my-4 py-5"></v-flex>
        <v-flex xs12>
          <AppFilterExamplesForm :params="params"/>
        </v-flex>
        <v-flex xs12>
          <nuxt-child :key="$route.params.servicio" />
        </v-flex>
        <v-flex xs3 v-for="portfolio in portfolios" :key="portfolio.id">
          {{ portfolio.id }} - {{ portfolio.name }}
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
    async fetch ({ store }) {
      await store.dispatch('portfolios/getAll')
    },
    computed: {
      portfolios () { return this.$store.state.portfolios.list }
    }
  }
</script>
