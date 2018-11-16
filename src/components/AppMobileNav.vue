<template>
  <v-navigation-drawer v-model="drawer" class="hidden-md-and-up" fixed temporary app>
    <v-list>
      <v-list-tile v-for="(link, i) in links" :key="i" nuxt :to="link.url">
        <v-list-tile-title>{{ link.title }}</v-list-tile-title>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  export default {
    computed: {
      drawer: {
        get: function () {
          return this.$store.state.app.drawer
        },
        set: function (newValue) {
          this.$store.dispatch('toggleDrawer', newValue)
        }
      },
      links () { return this.$store.state.app.links.header },
      countryData () { return this.$store.state.countries.data }
    }
  }
</script>

<style scoped>
  
</style>
