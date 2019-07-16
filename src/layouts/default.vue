<template>
  <v-app v-resize="hiddenOnResize">
    <!--<v-container class="px-0 py-1 amber darken-3" v-if="!alertSetted" fluid grid-list-md text-xs-center>
      <v-layout row align-center class="mx-1">
        <v-flex xs4>
        </v-flex>
        <v-flex xs4 class="font-weight-bold white--text">
          No cerramos por vacaciones
        </v-flex>
        <v-flex xs4 class="font-weight-bold white--text text-xs-right">
          <v-icon @click="alertDismiss" style="cursor: pointer;">cancel</v-icon>
        </v-flex>
      </v-layout>
    </v-container>-->
    <AppMobileNav/>
    <v-content>
      <AppHeader/>
      <nuxt/>
      <AppFooter/>
      <!--<img class="chat-cloud" src="/icons/nube_de_chat.svg" alt="">-->
      <!-- COOKIES ACCEPT -->
      <v-container class="cookies px-0 py-1" v-if="!cookieSetted" fluid grid-list-md text-xs-center>
        <v-layout row align-center class="mx-1">
          <v-flex>
            Utilizamos 

            <a style="color: #1976d2;" @click='$router.push("/politica-de-cookies/")' target='_new'>cookies propias</a> 
            y de terceros para obtener datos estadísticos de la navegación de nuestros usuarios y mejorar nuestros servicios.
            <v-btn @click="acceptUserCookie" small class="elevation-0 white--text" style="background-color:#1976d2; line-height: 14px;" wrap>Aceptar</v-btn>
          </v-flex>
        </v-layout>
      </v-container>
      <v-toolbar class="brief-bottom-toolbar hidden-md-and-up" fixed style="z-index: 400; top: inherit;bottom: 0;">
        <v-layout row wrap>
          <v-flex xs6 style="position: relative">
            <v-btn :href="'tel:'+countryData.phone" block large class="elevation-0" style="margin: 0 !important; border-radius: 0px !important">
              <v-icon>fa-phone-volume</v-icon> Llámanos
            </v-btn>
          </v-flex>
          <v-flex xs6 style="position: relative">
            <v-btn color="green darken-3" target="_new" href="https://api.whatsapp.com/send?phone=34933961704&text=Hola%20tengo%20una%20consulta" block large class="elevation-0 white--text" style="margin: 0 !important; border-radius: 0px !important">
              <v-icon>fab fa-whatsapp</v-icon>&nbsp; Whatsapp
            </v-btn>
          </v-flex>
        </v-layout>
      </v-toolbar>
    </v-content>
  </v-app>
</template>

<script>
  import AppHeader from '@/components/AppHeader.vue'
  import AppFooter from '@/components/AppFooter.vue'
  import AppMobileNav from '@/components/AppMobileNav.vue'

  export default {
    scrollToTop: true,
    watch: {
      $route (to, from) {
        if (to.path !== '/nuestros-servicios') {
          if ('scrollingElement' in document) {
            document.scrollingElement.scrollTop = 0
          }
          // Fallback for legacy browsers
          if (navigator.userAgent.indexOf('WebKit') !== -1) {
            document.body.scrollTop = 0
          }
          if (process.client) {
            document.documentElement.scrollTop = 0
          }
        }
      }
    },
    mounted () {
      this.hiddenOnResize()
      this.cookies()
      this.alert()
    },
    data () {
      return {
        cookieSetted: true,
        alertSetted: true
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
      },
      alert () {
        if (process.browser) {
          if (this.checkCookie('liderlogo_alert')) {
            if (this.getCookie('liderlogo_alert') === 'ok') {
              this.cookieSetted = true
              return
            }
          }

          this.setCookie('liderlogo_alert', 'no', '30')
          this.alertSetted = false
        }
      },
      hiddenOnResize () {
        if (window.innerWidth > 960) {
          this.$store.dispatch('toggleDrawer', false)
        }
      },
      acceptUserCookie () {
        this.setCookie('liderlogo_cookie', 'ok', '30')
        this.cookieSetted = true
      },
      alertDismiss () {
        this.setCookie('liderlogo_alert', 'ok', '30')
        this.alertSetted = true
      },
      getCookie (cname) {
        var name = cname + '='
        var decodedCookie = decodeURIComponent(document.cookie)
        var ca = decodedCookie.split(';')
        var length = ca.length
        for (var i = 0; i < length; i++) {
          var c = ca[i]
          while (c.charAt(0) === ' ') {
            c = c.substring(1)
          }
          if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length)
          }
        }
        return ''
      },
      setCookie (cname, cvalue, exdays) {
        var d = new Date()
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000))
        var expires = 'expires=' + d.toUTCString()
        document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/'
      },
      checkCookie (cookieName) {
        var cookie = this.getCookie(cookieName)
        if (cookie !== '') {
          return true
        }
        return false
      }
    },
    computed: {
      countryData () { return this.$store.state.countries.data }
    },
    components: {
      AppHeader,
      AppFooter,
      AppMobileNav
    }
  }
</script>

<style>
  div#app {
    background: #fbfbfb;
  }
  
  .chat-cloud {
    width: 100px;
    position: fixed;
    bottom: -15px;
    left: 90%;
    z-index: 999;
  }

  .v-carousel.rating-user, .v-carousel.profesional-services-slider {
    height: 210px;
    box-shadow: none;
  }

  .v-carousel.profesional-services-slider {
    height: 400px;
  }

  .v-carousel__prev, .v-carousel__next {
    position: absolute;
    top: 90%;
    z-index: 1;
    -webkit-transform: translateY(-50%);
    transform: translateY(-42%);
    border: 2px solid grey;
  }

  .v-carousel.profesional-services-slider .v-carousel__prev, .v-carousel.profesional-services-slider  .v-carousel__next {
    top: 48%;
  }

  .v-carousel.rating-user .v-btn .v-btn__content .v-icon, .v-carousel.profesional-services-slider .v-btn .v-btn__content .v-icon{
    color: inherit;
    font-size: 25px !important;
    color: grey
  }

  .v-carousel.rating-user .v-btn:before, .v-carousel.profesional-services-slider .v-btn:before {
    opacity: 0;
  }

  .v-carousel.rating-user .v-btn--icon:before, .v-carousel.profesional-services-slider .v-btn--icon:before {
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

  .cookies{
    background: white;
    border-bottom: 0.5px solid rgba(192, 192, 192, 0.4);
    position: fixed;
    z-index: 1000;
    bottom: 0;
  }

  .brief-bottom-toolbar .v-toolbar__content {
    padding: 0 !important;
  }

  @media (min-width: 240px) and (max-width: 960px) {
    .brief-bottom-toolbar .v-toolbar__content {
      height: 44px !important;
    }

    section.brief {
      margin-bottom: 80px;
    }
  }
</style>

