<template>
  <v-app v-resize="hiddenOnResize">
    <AppMobileNav/>
    <v-content>
      <AppHeader/>
      <nuxt/>
      <AppFooter/>
      <img class="chat-cloud" src="/icons/nube_de_chat.svg" alt="">
    </v-content>
  </v-app>
</template>

<script>
  import AppHeader from '@/components/AppHeader.vue'
  import AppFooter from '@/components/AppFooter.vue'
  import AppMobileNav from '@/components/AppMobileNav.vue'

  export default {
    mounted () {
      this.hiddenOnResize()
    },
    methods: {
      hiddenOnResize () {
        if (window.innerWidth > 960) {
          this.$store.dispatch('toggleDrawer', false)
        }
      }
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
  }

  .v-carousel.rating-user {
    height: 210px;
    box-shadow: none;
  }

  .v-carousel__prev, .v-carousel__next {
    position: absolute;
    top: 90%;
    z-index: 1;
    -webkit-transform: translateY(-50%);
    transform: translateY(-42%);
    border: 2px solid grey;
  }

  .v-carousel.rating-user .v-btn .v-btn__content .v-icon {
    color: inherit;
    font-size: 25px !important;
    color: grey
  }

  .v-carousel.rating-user .v-btn:before {
    opacity: 0;
  }

  .v-carousel.rating-user .v-btn--icon:before {
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
