<template>
  <v-navigation-drawer v-model="drawer" class="hidden-md-and-up" fixed temporary app>
    <v-list>
      <v-list-tile>
        <v-list-tile-title>Inicio</v-list-tile-title>
      </v-list-tile>
    
      <v-list-group value="true">
        <v-list-tile slot="activator">
          <v-list-tile-title>Servicios</v-list-tile-title>
        </v-list-tile>
    
        <v-list-group no-action sub-group value="true">
          <v-list-tile slot="activator">
            <v-list-tile-title>Rotulos</v-list-tile-title>
          </v-list-tile>
    
          <v-list-tile @click="">
            <v-list-tile-title v-text="'Rotulo Vehicular'"></v-list-tile-title>
          </v-list-tile>
          <v-list-tile @click="">
            <v-list-tile-title v-text="'Rotulo Local'"></v-list-tile-title>
          </v-list-tile>
        </v-list-group>
      </v-list-group>
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
      }
    }
  }
</script>

<style scoped>
  .v-list__group:before, .v-list__group:after {
    left: 2.5%;
    width: 95%;
  }
  
  .v-list__tile__title {
    color: #6b6b6d;
    font-weight: 600;
  }
</style>
