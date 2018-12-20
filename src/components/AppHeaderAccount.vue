<template>
  <v-toolbar class="transparent" height="100" flat style="position:absolute; z-index: 4;">
    <v-spacer class="hidden-md-and-down"></v-spacer>
    <nuxt-link to="/" style="height: 60px"><img src="~/assets/images/logo.png" height="60" alt="LiderLogo"></nuxt-link>
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
    <div class="px-4 hidden-md-and-down">
      <v-btn class="nav-item m-0" nuxt exact to="/area-de-cliente" flat>
        <span class="nav-item-label">Pedidos</span>
      </v-btn>
      <v-btn class="nav-item m-0" nuxt to="/area-de-cliente/proyectos" flat>
        <span class="nav-item-label">Proyectos</span>
      </v-btn>
      <v-menu offset-y open-on-hover v-if="isLoggedIn">
        <v-btn slot="activator" class="nav-item mx-0" color="primary" nuxt>
          <span class="nav-item-label" style="color: white">Hola, {{ authData.name }}</span>
        </v-btn>
        <v-list>
          <v-list-tile @click="logout">
            <v-list-tile-title>Salir</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
    </div>
    <!--<v-tooltip right color="white darken-3 light-blue--text text--darken-2" class="hidden-md-and-down">
      <v-btn :href="'tel:'+countryData.phone" slot="activator" fab light small class="elevation-1 ">
        <v-icon>fa-phone-volume</v-icon>
      </v-btn>
      <span>{{ countryData.phone }}</span>
    </v-tooltip>
    <v-tooltip right color="white darken-3 light-blue--text text--darken-2" class="hidden-md-and-down">
      <v-btn target="_new" href="https://api.whatsapp.com/send?phone=34933961704&text=Hola%20tengo%20una%20consulta" slot="activator" fab light small class="elevation-1 ">
        <v-icon>fab fa-whatsapp</v-icon>
      </v-btn>
      <span>{{ countryData.phone }}</span>
    </v-tooltip>-->
    <v-spacer></v-spacer>
    <v-toolbar-side-icon @click.stop="$store.dispatch('toggleDrawer')" class="hidden-md-and-up"></v-toolbar-side-icon>
  </v-toolbar>
</template>

<script>
  export default {
    name: 'app-header',
    computed: {
      isLoggedIn () { return this.$store.getters['isLoggedIn'] },
      authData () { return this.$store.state.app.authData }
    },
    methods: {
      logout () {
        this.$store.commit('SET_TOKEN', null)
        this.$cookies.remove('session_token')
        this.$router.push('/')
      }
    }
  }
</script>

<style scoped>
  .nav-item-label {
    text-transform: capitalize;
  }
  .v-btn--active:before, .v-btn:hover:before, .v-btn:focus:before {
    background-color: transparent;
  }

  .ws-float-btn {
    background-color: #87C438 !important;
  }

  .v-btn:not(.v-btn--floating) {
    color: #676767;
  }

  .v-btn:not(.v-btn--floating) span.nav-item-label {
    font-weight: 600;
  }

  .v-btn--active {
    color: #004b7b !important;
  }

  .v-list__tile {
    height: 30px;
  }

</style>