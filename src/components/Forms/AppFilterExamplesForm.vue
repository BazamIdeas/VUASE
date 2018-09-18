<template>
  <v-layout row wrap>
    <v-flex offset-md1 md2>
      <v-select :items="items" label="Servicio" @change="redirect" solo></v-select>
    </v-flex>
    <v-flex md2>
      <v-select :items="items" label="Sector" :disabled="!(paramsData && paramsData.servicio)" @change="redirect" solo></v-select>
    </v-flex>
    <v-flex md2>
      <v-select :items="items" label="Actividad" :disabled="!(paramsData && paramsData.sector)" @change="redirect" solo></v-select>
    </v-flex>
    <v-flex md2>
      <v-select :items="items" label="Pais" :disabled="!(paramsData && paramsData.actividad)" @change="redirect" solo></v-select>
    </v-flex>
    <v-flex md2>
      <v-select :items="items" label="Localidad" :disabled="!(paramsData && paramsData.pais)" @change="redirect" solo></v-select>
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
        paramsData: this.params,
        items: [
          'logo-empresa'
        ]
      }
    },
    methods: {
      redirect (event) {
        this.$router.push('ejemplos/event')
      }
    },
    watch: {
      '$route': function (to, from) {
        this.paramsData = to.params
      }
    }
  }
</script>

<style>
  
</style>
