<template>
  <v-app>
    <v-content>
      <AppHeaderBrief/>
      <nuxt/>
    </v-content>
  </v-app>
</template>

<script>
  import AppHeaderBrief from '@/components/AppHeaderBrief.vue'

  export default {
    scrollToTop: true,
    components: {
      AppHeaderBrief
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