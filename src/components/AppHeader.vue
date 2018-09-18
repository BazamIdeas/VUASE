<template>
  <v-toolbar class="transparent" height="100" flat style="position:absolute; z-index: 4;">
    <v-spacer class="hidden-md-and-down"></v-spacer>
    <nuxt-link to="/" style="height: 36px"><img src="~/assets/images/logo.png" height="36" alt="LiderLogo"></nuxt-link>
    <div class="px-4 hidden-md-and-down">
      <v-btn class="nav-item mx-0" v-for="(link, i) in links" :key="i" nuxt :to="link.url" flat>
        <span class="nav-item-label">{{link.title}}</span>
      </v-btn>
    </div>
    <v-tooltip right color="white darken-3 light-green--text text--darken-2" class="hidden-md-and-down">
      <v-btn slot="activator" fab dark small class="elevation-1 ws-float-btn">
        <v-icon>fab fa-whatsapp</v-icon>
      </v-btn>
      <span>+54 9 339 0000 453</span>
    </v-tooltip>
    <v-spacer></v-spacer>
    <v-toolbar-side-icon @click.stop="$store.dispatch('showDrawer')" class="hidden-md-and-up"></v-toolbar-side-icon>
  </v-toolbar>
</template>

<script>
  export default {
    name: 'app-header',
    computed: {
      links () { return this.$store.state.app.links.header }
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

</style>