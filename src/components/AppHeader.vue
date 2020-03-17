<template>
<div>
  <div style="text-align: center; padding: 5px; background: #c7c5c1;">
    En LiderLogo 
    <span style="font-weight: 800;">no cerramos,</span> 
    seguimos trabajando para ti y para que 
    <span style="padding: 4px; background: #fdc779; font-weight: 800; font-style: oblique;">tú negocio crezca</span>
  </div>
  <v-toolbar class="transparent" height="100" flat style="position:absolute; z-index: 4;">
    <v-spacer class="hidden-sm-and-down"></v-spacer>
    <v-toolbar-side-icon @click.stop="$store.dispatch('toggleDrawer')" class="hidden-md-and-up menu-burger"></v-toolbar-side-icon>
    <nuxt-link to="/" class="logo-header" style="height: 60px"><img src="~/assets/images/logo.png" height="60" alt="LiderLogo"></nuxt-link>
    <div class="px-4 hidden-sm-and-down">
      <v-menu open-on-hover :close-on-content-click="false" v-for="(link, i) in links" :key="i" offset-y bottom>
        <v-btn slot="activator" class="nav-item mx-0"  nuxt :to="link.url" flat>
          <span class="nav-item-label">{{link.title}}</span>
        </v-btn>
        <v-list v-if="link.sublinks">
          <v-list-group v-for="(submenu, index) in link.sublinks" :key="index">
              <v-list-tile  slot="activator" class="nav-item" style="font-family:Roboto !important">{{ submenu.name }}</v-list-tile >
              <v-list>
                <v-list-tile v-for="(servicios, index) in submenu.links" :key="index">
                  <h5>
                    <nuxt-link  style="font-family:Roboto !important;" :to="servicios.url">{{ servicios.title }}</nuxt-link >
                  </h5>
                </v-list-tile>
              </v-list>
          </v-list-group>
        </v-list>
      </v-menu>
      <!--<v-btn class="nav-item mx-0" v-if="isLoggedIn" nuxt to="/area-de-cliente" flat>
        <span class="nav-item-label">Mi cuenta</span>
      </v-btn>
      <v-btn class="nav-item mx-0" v-if="!isLoggedIn" nuxt to="/area-de-cliente/entrar" flat>
        <span class="nav-item-label">Login</span>
      </v-btn>-->
    </div>
    <v-tooltip right color="white darken-3 light-blue--text text--darken-2" class="hidden-md-and-down">
      <v-btn :href="'tel:'+countryData.phone" slot="activator" fab light small class="elevation-1 ">
        <v-icon>fa-phone-volume</v-icon>
      </v-btn>
      <span>{{ countryData.phone }}</span>
    </v-tooltip>
    <v-tooltip right color="white darken-3 light-blue--text text--darken-2" class="hidden-md-and-down">
      <v-btn target="_new" href="https://api.whatsapp.com/send?phone=34602253467&text=Hola%20tengo%20una%20consulta" slot="activator" fab light small class="elevation-1 ">
        <v-icon>fab fa-whatsapp</v-icon>
      </v-btn>
      <span>602253467</span>
    </v-tooltip>
    <v-spacer class="hidden-sm-and-down"></v-spacer>
  </v-toolbar>
</div>
</template>

<script>
  export default {
    name: 'app-header',
    data: () => ({
      items: [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' }
      ]
    }),
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