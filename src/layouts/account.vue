<template>
  <v-app>
    <v-content>
      <AppHeaderAccount/>
      <nuxt/>
      <AppFooter/>
      <!--<img class="chat-cloud" src="/icons/nube_de_chat.svg" alt="">-->
      <!-- COOKIES ACCEPT -->
<!--       <v-container class="cookies px-0" v-if="!cookieSetted" fluid grid-list-md text-xs-center>
        <v-layout row wrap align-center class="mx-0">
          <v-flex xs12>
            <h2 class="title font-weight-medium mb-2 text-uppercase">AVISO DE COOKIES</h2>
          </v-flex>
          <v-flex offset-xs1 xs10>
            Utilizamos 

            <a style="color: #1976d2;" @click='$router.push("/politica-de-cookies/")' target='_new'>cookies propias</a> 
            y de terceros para obtener datos estadísticos de la navegación de nuestros usuarios y mejorar nuestros servicios. Si acepta o continúa navegando, consideramos que acepta su uso.
            <v-btn @click="acceptUserCookie" class="elevation-0 white--text" style="background-color:#1976d2; line-height: 14px;" wrap>Aceptar</v-btn>
          </v-flex>
        </v-layout>
      </v-container> -->
    </v-content>
  </v-app>
</template>

<script>
  import AppHeaderAccount from '@/components/AppHeaderAccount.vue'
  import AppFooter from '@/components/AppFooter.vue'
  import AppMobileNav from '@/components/AppMobileNav.vue'

  export default {
    data () {
      return {
        cookieSetted: true
      }
    },
    methods: {
      cookies () {
        if (process.browser) {
          if (this.checkCookie('liderlogo_cookie')) {
            if (this.getCookie('liderlogo_cookie') === 'ok') {
              this.cookieSetted = true
              return
            }
          }

          this.setCookie('liderlogo_cookie', 'no', '30')
          this.cookieSetted = false
        }
      }
    },
    components: {
      AppHeaderAccount,
      AppFooter,
      AppMobileNav
    }
  }
</script>

<style scoped>
  div#app {
    background: #fbfbfb;
  }

  .v-carousel.rating-user,
  .v-carousel.profesional-services-slider {
    height: 210px;
    box-shadow: none;
  }

  .v-carousel.profesional-services-slider {
    height: 400px;
  }

  .v-carousel__prev,
  .v-carousel__next {
    position: absolute;
    top: 90%;
    z-index: 1;
    -webkit-transform: translateY(-50%);
    transform: translateY(-42%);
    border: 2px solid grey;
  }

  .v-carousel.profesional-services-slider .v-carousel__prev,
  .v-carousel.profesional-services-slider .v-carousel__next {
    top: 48%;
  }

  .v-carousel.rating-user .v-btn .v-btn__content .v-icon,
  .v-carousel.profesional-services-slider .v-btn .v-btn__content .v-icon {
    color: inherit;
    font-size: 25px !important;
    color: grey
  }

  .v-carousel.rating-user .v-btn:before,
  .v-carousel.profesional-services-slider .v-btn:before {
    opacity: 0;
  }

  .v-carousel.rating-user .v-btn--icon:before,
  .v-carousel.profesional-services-slider .v-btn--icon:before {
    border-radius: 0%;
  }

  .v-carousel.rating-user .v-carousel__prev {
    left: 180px;
  }

  .v-carousel.rating-user .v-carousel__next {
    right: 180px;
  }

  .v-rating .v-icon {
    font-size: 38px;
  }

  .v-rating .v-icon {
    color: #FF9800 !important
  }
</style>