<template>
  <v-layout row wrap>
    <v-flex md6>
      <v-select :items="services" item-text="text" item-value="field" :value="paramsData.servicio" label="Servicio" @change="redirect($event, 'sectors/getAll', 1)" solo></v-select>
    </v-flex>
    <v-flex md6>
      <v-select :items="sectors" item-text="text" item-value="field" :value="paramsData.sector" label="Sector" :disabled="!(paramsData && paramsData.servicio)" @change="redirect($event, 'sectors/activities/getAll', 2)" solo></v-select>
    </v-flex>
    <v-flex md4>
      <v-select :items="activities" item-text="text" item-value="field" :value="paramsData.actividad" label="Actividad" :disabled="!(paramsData && paramsData.sector)" @change="redirect($event, 'countries/getAll', 3)" solo></v-select>
    </v-flex>
    <v-flex md4>
      <v-select :items="countries" item-text="text" item-value="field" :value="paramsData.pais" label="Pais" :disabled="!(paramsData && paramsData.actividad)" @change="redirect($event, 'countries/locations/getAll', 4)" solo></v-select>
    </v-flex>
    <v-flex md4>
      <v-select :items="locations" item-text="text" item-value="field" :value="paramsData.localidad" label="Localidad" :disabled="!(paramsData && paramsData.pais)" @change="redirect($event, false, 5)" solo></v-select>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    props: {
      params: {
        default: null,
        type: Object
      }
    },
    data () {
      return {
        paramsData: this.params
      }
    },
    watch: {
      '$route': function (to, from) {
        this.paramsData = to.params
        this.$store.dispatch('portfolios/getAll', this.paramsData)
      }
    },
    computed: {
      services () { return this.$store.getters['services/forSelectField'] },
      sectors () { return this.$store.getters['sectors/forSelectField'] },
      activities () { return this.$store.getters['sectors/activities/bySector'](this.paramsData.sector) },
      countries () { return this.$store.getters['countries/forSelectField'] },
      locations () { return this.$store.getters['countries/locations/byCountry'](this.paramsData.pais) }
    },
    methods: {
      redirect (event, action, index) {
        if (event === undefined || event === 'undefined') return
        if (action) this.$store.dispatch(action)
        let route = this.$router.currentRoute.path.split('/').filter(el => el !== '')
        if (route[index]) {
          route.splice(index)
          route[index] = event
          route = '/' + route.join('/')
        } else {
          route.push(event)
          route = '/' + route.join('/')
        }
        this.$router.push(route)
      }
    }
  }
</script>

<style>
  
</style>
