<template>
  <v-toolbar class="transparent" height="100" flat style="position:absolute; z-index: 4;">
    <v-spacer class="hidden-sm-and-down"></v-spacer>
    <div class="logo-header" style="height: 60px"><img src="~/assets/images/logo.png" height="60" alt="LiderLogo"></div>
    <v-spacer class="hidden-sm-and-down"></v-spacer>
    <v-spacer class="hidden-sm-and-down"></v-spacer>
    <v-spacer class="hidden-sm-and-down"></v-spacer>
    <v-tooltip right color="white darken-3 light-blue--text text--darken-2" class="hidden-md-and-down">
      <v-btn :href="'tel:'+countryData.phone" slot="activator" fab light small class="elevation-1 ">
        <v-icon>fa-phone-volume</v-icon>
      </v-btn>
      <span>{{ countryData.phone }}</span>
    </v-tooltip>
    <v-tooltip right color="white darken-3 light-blue--text text--darken-2" class="hidden-md-and-down">
      <v-btn target="_new" href="https://api.whatsapp.com/send?phone=34933961704&text=Hola%20tengo%20una%20consulta" slot="activator" fab light small class="elevation-1 ">
        <v-icon>fab fa-whatsapp</v-icon>
      </v-btn>
      <span>933961704</span>
    </v-tooltip>
    <v-spacer class="hidden-sm-and-down"></v-spacer>
  </v-toolbar>
</template>

<script>
  export default {
    name: 'app-header-brief',
    computed: {
      links () { return this.$store.state.app.links.header },
      countryData () { return this.$store.state.countries.data }
    }
  }
</script>

<style scoped>
  
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

  @media (min-width: 320px) and (max-width: 960px) {
    .logo-header{
      height: 60px;
      width: 50%;
      display: block;
      margin: auto;
    }

    .logo-header img {
      width: 100%;
      max-width: 250px;
      height: auto;
      margin: auto;
      display: block;
    }

    .menu-burger{
      position: absolute;
      top: 25px;
      left: 30px;
    }
  }
</style>