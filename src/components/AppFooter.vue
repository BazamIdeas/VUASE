<template>
  <div style="background: white;">
    <!-- NEWSLWTTER FORM -->
    <v-container grid-list-md text-xs-center class="px-0" style="background: white; border-bottom: 0.5px solid rgba(192, 192, 192, 0.4);" >
      <v-layout row wrap align-center class="mx-0">
        <v-flex xs12 md7>
           <h2 class="title font-weight-medium mb-2">Sé el primero en descubrir nuestras novedades en la Newsletter</h2>
        </v-flex>
        <v-flex xs12 md5>
          <appNewsletterForm />
        </v-flex>
      </v-layout>
    </v-container>
    <v-footer class="white" height="auto">
      <v-container fluid grid-list-md text-xs-center class="px-0">
        <v-layout row wrap align-center class="mx-0">
          <v-flex xs12>
            <v-toolbar class="transparent" flat>
              <v-spacer></v-spacer>
              <nuxt-link to="/"><img height="60" src="~/assets/images/logo.png" alt="LiderLogo"></nuxt-link>
              <div class="px-4 hidden-sm-and-down">
                <v-btn class="nav-item mx-0" v-for="(link, i) in links" :key="i" nuxt :to="link.url" flat>
                  <span class="nav-item-label">{{link.title}}</span>
                </v-btn>
                <v-btn class="nav-item mx-0" nuxt href="https://www.liderlogo.es/blog" flat>
                  <span class="nav-item-label">BLOG</span>
                </v-btn>
                <!--<v-btn class="nav-item mx-0" nuxt to="/area-de-cliente" flat>
                  <span class="nav-item-label">ÁREA DE CLIENTE</span>
                </v-btn>-->
              </div>
              <v-spacer></v-spacer>
            </v-toolbar>
          </v-flex>
          <v-flex xs12 v-for="(link, i) in links" :key="i" class="footer-link hidden-md-and-up">
            <v-btn class="nav-item mx-0" nuxt :to="link.url" flat>
              <span class="nav-item-label">{{link.title}}</span>
            </v-btn>
          </v-flex>
          <v-flex xs12 class="footer-link hidden-md-and-up">
            <v-btn class="nav-item mx-0" nuxt href='https://www.liderlogo.es/blog' flat>
              <span class="nav-item-label">BLOG</span>
            </v-btn>
          </v-flex>
          <!--<v-flex xs12 class="footer-link hidden-md-and-up">
            <v-btn class="nav-item mx-0" nuxt to="/area-de-cliente" flat>
              <span class="nav-item-label">ÁREA DE CLIENTE</span>
            </v-btn>
          </v-flex>-->
          <v-layout row wrap align-center class="mx-0">
            <v-flex xs12 offset-md1 md6 class="xs-order-2">
              <h5 class="font-weight-normal">Copyright © 2019 Todos los Derechos Reservados. Liderlogo ® SOLMAX EUROPE, SLU </h5>
            </v-flex>
            <v-spacer></v-spacer>
            <v-flex xs12 md5>
              <v-btn target="_new" :href="red.url" slot="activator"  color="white" fab small class="elevation-1 ws-float-btn" v-for="(red, i) in redes" :key="i">
                <v-icon>fab {{red.icon}}</v-icon>
              </v-btn>
            </v-flex>
          </v-layout>
        </v-layout>
      </v-container>
    </v-footer>
   </div>
</template>

<script>
  export default {
    computed: {
      links () { return this.$store.state.app.links.footer },
      redes () { return this.$store.state.app.links.redes }
    }
  }
</script>


<style>
 @media (min-width: 320px) and (max-width: 768px) {
    .xs-order-2{
      order:2;
    }
  }
</style>

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