<template>
  <v-footer class="white" height="auto">
    <v-container fluid grid-list-md text-xs-center class="px-0">
      <v-layout row wrap align-center class="mx-0">
        <v-flex xs12>
          <v-toolbar class="transparent" flat>
            <v-spacer></v-spacer>
            <nuxt-link to="/"><img src="~/assets/images/logo.png" alt="LiderLogo"></nuxt-link>
            <div class="px-4 hidden-md-and-down">
              <v-btn class="nav-item mx-0" v-for="(link, i) in links" :key="i" nuxt :to="link.url" flat>
                <span class="nav-item-label">{{link.title}}</span>
              </v-btn>
            </div>
            <v-spacer></v-spacer>
          </v-toolbar>
        </v-flex>
        <v-flex xs12 v-for="(link, i) in links" :key="i" class="footer-link hidden-md-and-up">
          <v-btn class="nav-item mx-0" nuxt :to="link.url" flat>
            <span class="nav-item-label">{{link.title}}</span>
          </v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </v-footer>
</template>

<script>
  export default {
    computed: {
      links () { return this.$store.state.app.links.footer }
    }
  }
</script>

<style scoped>
  .footer-link {
    border-top: 1px solid #f5f5f5;
  }

  .v-btn:not(.v-btn--floating) {
    color: #676767;
  }

  .v-btn:not(.v-btn--floating) span.nav-item-label {
    font-weight: 600;
  }

  .v-btn--active:before, .v-btn:hover:before, .v-btn:focus:before {
    background-color: transparent;
  }

</style>