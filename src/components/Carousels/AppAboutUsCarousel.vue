<template>
  <v-carousel :interval="interval" hide-controls class="main-carousel">
    <v-carousel-item transition="none" reverse-transition="none">
      <div class="layers-container">
        <div class="layer" id="hc-layer-1-item-1">
          <h1>DISEÑAMOS MARCAS EXITOSAS</h1>
          <v-btn flat outline class="px-2 mx-5 mt-4" style="background-color: #004b7b !important; border-color: #004b7b; color: white; line-height: initial;">COMPRUEBALO</v-btn>
        </div>
        <div class="layer" id="hc-layer-3-item-1">
          <v-img class="animate-img" src="images/carousels/about_us1.png"></v-img>
        </div>
      </div>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
  export default {
    props: {
      interval: {
        default: 8000,
        type: Number
      },
      items: Array
    }
  }
</script>

<style scoped>
  .v-carousel {
    box-shadow: none;
  }

  .layers-container {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .layers-container .layer {
    position: absolute;
  }

  @keyframes FadeIn {
    0% {
      opacity: 0;
      transform: scale(.1);
    }

    10% {
      opacity: 1;
      transform: scale(1.05);
    }

    13% {
      transform: scale(1);
    }

    97% {
      opacity: 1;
    }

    100% {
      opacity: 1;
    }
  }

  .animate-img {
    animation: FadeIn 7.9s linear;
    animation-fill-mode: both;
    animation-delay: 0.5s
  }

  /*ITEM-1*/
  div#hc-layer-1-item-1>* {
    color: #004b7b;
    font-weight: 700;
  }

  div#hc-layer-2-item-1>* {
    color: #676767;
    font-weight: 600;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    /*ITEM-1*/
    div#hc-layer-1-item-1 {
      font-size: 35px;
      line-height: 47px;
      top: 55%;
      text-align: center;
    }

    div#hc-layer-3-item-1 {
      width: 100%;
      top: 2%;
    }
  }

  @media (min-width: 481px) and (max-width: 639px) {
    /*ITEM-1*/
    div#hc-layer-1-item-1 {
      font-size: 38px;
      line-height: 55px;
      top: 55%;
      text-align: center;
    }

    div#hc-layer-3-item-1 {
      width: 100%;
      top: 2%;
    }
  }

  @media (min-width: 640px) and (max-width: 960px) {
    .v-carousel.main-carousel {
      height: 55vh;
      min-height: 640px;
    }
    /*ITEM-1*/
    div#hc-layer-1-item-1 {
      font-size: 38px;
      line-height: 55px;
      top: 65%;
      text-align: center;
    }

    div#hc-layer-3-item-1 {
      width: 74%;
      top: 0%;
      left: 13%;
    }
  }

  @media (min-width: 960px) and (max-width: 1264px) {}

  @media (min-width: 1264px) and (max-width: 1904px) {}

  @media (min-width: 1904px) {}

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity .5s;
  }

  .fade-enter,
  .fade-leave-to

  /* .fade-leave-active below version 2.1.8 */
    {
    opacity: 0;
  }
</style>