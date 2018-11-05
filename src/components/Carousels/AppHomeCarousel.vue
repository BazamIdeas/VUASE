<template>
  <!-- theme 1 -->
  <v-carousel :interval="interval" hide-controls class="main-carousel theme1" v-if="theme == '1'">
    <v-carousel-item transition="none" reverse-transition="none">
      <div class="layers-container">
        <div class="layer" id="hc-layer-1-item-1">
          <h1>DISEÑOS ÚNICOS Y EXITOSOS</h1>
        </div>
        <div class="layer" id="hc-layer-2-item-1">
          <h2>Empresa vanguardista en diseño y comunicación</h2>
        </div>
        <div class="layer" id="hc-layer-3-item-1">
            <v-img class="animate-img" src="images/carousels/home1.png"></v-img>
        </div>
      </div>
    </v-carousel-item>
  </v-carousel>

  <!-- theme 2 -->
  <v-carousel :interval="interval" hide-controls class="main-carousel theme2" v-else-if="theme == '2'">
    <v-carousel-item transition="none" reverse-transition="none">
      <div class="layers-container">
        <div class="layer" id="hc-layer-1-item-1">
          <h1>DISEÑOS ÚNICOS Y EXITOSOS</h1>
        </div>
        <div class="layer" id="hc-layer-2-item-1">
          <h1>Empresa vanguardista en diseño y comunicación</h1>
          <v-btn flat class="btn-simple" style="border: none; background: rgb(184, 0, 0); position: relative; margin-top: 59px; color: white !important; margin-left: 0; border:none; background:#B80000;" to="/nuestros-servicios">CONOCER MÁS</v-btn>
        </div>
        <div class="layer" id="hc-layer-4-item-1">
          <h2>"El diseño es el embajador silencioso de una marca" </h2>
          <h5>- Paul Rand -</h5>
        </div>
        <div class="layer" id="hc-layer-3-item-1">
            <v-img class="animate-img" src="images/carousels/slider-de-home.png"></v-img>
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
      items: Array,
      theme: String
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

  .v-carousel.main-carousel.theme2 {
        height: 100vh;
        min-height: 730px;
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
  div#hc-layer-1-item-1 > * {
    color: #B80000;
    font-weight: 700;
  }

  div#hc-layer-2-item-1 > * {
    color: #676767;
    font-weight: 600;
  }

  /*ITEM-2*/
  div#hc-layer-1-item-2 > * {
    color: #004B7B;
    font-weight: 700;
  }

  div#hc-layer-2-item-2 > * {
    color: #676767;
    font-weight: 600;
  }

  /*ITEM-4 cita*/
  div#hc-layer-4-item-1 > * {
    color: #fff;
    font-weight: 500;
  }

  div#hc-layer-4-item-1 h5 {
      margin-top: 12px;
  }


  @media (max-width: 600px) {
    /*ITEM-1*/
    div#hc-layer-1-item-1 {
      font-size: 28px;
      line-height: 39px;
      top: 60%;
      text-align: center;
    }

    div#hc-layer-2-item-1 {
      font-size: 17px;
      top: 80%;
      line-height: 28px;
      text-align: center;
    }

    div#hc-layer-3-item-1 {
      width: 100%;
      top: 17%;
    }
    /*ITEM-2*/
    div#hc-layer-1-item-2 {
      font-size: 28px;
      line-height: 39px;
      top: 60%;
      text-align: center;
    }

    div#hc-layer-2-item-2 {
      font-size: 17px;
      top: 80%;
      line-height: 28px;
      text-align: center;
    }

    div#hc-layer-3-item-2 {
      width: 100%;
      left: -16%;
      top: 17%;
    }
  }

  @media (min-width: 600px) and (max-width: 960px) {
  
  }

  @media (min-width: 960px) and (max-width: 1264px) {

  }

  @media (min-width: 1264px) and (max-width: 1904px) {
    /*ITEM-1*/
    div#hc-layer-1-item-1 {
      font-size: 64px;
      width: 39%;
      line-height: 90px;
      top: 25%;
      left: 16%;
    }

    div#hc-layer-2-item-1 {
      font-size: 17px;
      width: 28%;
      top: 66%;
      left: 16%;
      line-height: 28px;
    }

    div#hc-layer-3-item-1 {
      width: 49%;
      left: 45.3%;
      top: 13%;
    }

    /*ITEM-2*/
    div#hc-layer-1-item-2 {
      font-size: 64px;
      width: 39%;
      line-height: 90px;
      top: 25%;
      left: 16%;
    }

    div#hc-layer-2-item-2 {
      font-size: 17px;
      width: 28%;
      top: 66%;
      left: 16%;
      line-height: 28px;
    }

    div#hc-layer-3-item-2 {
      width: 55%;
      left: 30.5%;
      top: 4%;
    }


    /* theme 2 */
    /*ITEM-1*/
    .theme2 div#hc-layer-1-item-1 {
      font-size: 44px;
      width: 30%;
      line-height: 56px;
      top: 33%;
      left: 58%;
    }

    .theme2 div#hc-layer-2-item-1 {
      font-size: 14px;
      width: 26%;
      top: 57%;
      left: 58%;
      line-height: 28px;
    }

    .theme2 div#hc-layer-3-item-1 {
      width: 42%;
      left: 14.3%;
      top: 13%;
    }

    /*ITEM-2*/
    .theme2 div#hc-layer-1-item-2 {
      font-size: 64px;
      width: 39%;
      line-height: 90px;
      top: 25%;
      left: 20%;
    }

    .theme2 div#hc-layer-2-item-2 {
      font-size: 17px;
      width: 28%;
      top: 66%;
      left: 16%;
      line-height: 28px;
    }

    .theme2 div#hc-layer-3-item-2 {
      width: 55%;
      left: 30.5%;
      top: 4%;
    }

    /* ITEM 4 */
    .theme2 div#hc-layer-4-item-1 {
        font-size: 10px;
        width: 15%;
        text-align: center;
        line-height: 16px;
        top: 84%;
        left: 18.3%;
        z-index: 99;
    }
  }

  @media (min-width: 1904px) {

  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }

</style>