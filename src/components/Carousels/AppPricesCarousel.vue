<template>
  <v-carousel :interval="interval" height="100%"  hide-controls class="main-carousel">
        <v-carousel-item transition="none" reverse-transition="none">
      <div class="layers-container">
        <div class="layer" id="hc-layer-3-item-1">
          <v-img :alt="alt" class="animate-img" src="images/carousels/prices1.jpg"></v-img>
        </div>

        <div class="layer" id="hc-layer-0">   
          <div id="hc-layer-1-item-1">
            <h1 class="display-1 px-2">Creamos el mejor diseño para ti</h1>
          </div>

          <div id="hc-layer-2-item-1" style="z-index: 99;">
            <h3>GARANTÍA DE SATISFACCIÓN 100%</h3>
          </div>
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
      alt: String
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
    color: #8cc63f;
    font-weight: 700;
  }

  div#hc-layer-2-item-1>* {
    color: #000000;
    font-weight: 600;
  }

  /*ITEM-2*/
  div#hc-layer-1-item-2>* {
    color: #004B7B;
    font-weight: 700;
  }

  div#hc-layer-2-item-2>* {
    color: #676767;
    font-weight: 600;
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

@media (max-width: 480px) {
    .v-carousel.main-carousel {
      min-height: auto;
      height: 400px !important;
    }
 }
  @media (max-width: 960px) {

    .v-carousel.main-carousel {
        height: 500px;
        min-height: auto;
    }

    /*ITEM-1*/
    .layers-container .layer {
      position: initial;
    }

    div#hc-layer-0{
      text-align: center;
      width: 100%;
    }

    div#hc-layer-1-item-1 {
      font-size: 18px;
      line-height: 42px;
    }

    div#hc-layer-2-item-1 {
      font-size: 11px;
      padding: 0 5%;
    }

    div#hc-layer-2-item-1 > div {
      margin-top: 20px !important;
    }

    div#hc-layer-3-item-1 {
      width: 80%;
      margin: auto;
      margin-top: 100px;
    }

    a.boton-buscar {
      min-width: 72px;
    }

    /*ITEM-2*/
    div#hc-layer-1-item-2 {
      font-size: 28px;
      line-height: 39px;
      text-align: center;
    }

    div#hc-layer-2-item-2 {
      font-size: 17px;
      line-height: 28px;
      text-align: center;
    }
  }

  @media (min-width: 600px) and (max-width: 860px) {
    .v-carousel.main-carousel {
        height: 500px;
        min-height: auto;
    }
  }

  
  @media (min-width: 740px) and (max-width: 820px) {
    .v-carousel.main-carousel {
        height: 500px;
        min-height: auto;
    }
  }

  @media (min-width: 820px) and (max-width: 960px) {
    .v-carousel.main-carousel {
        height: 500px;
        min-height: auto;
    }
  }


  @media (min-width: 960px) {
    .v-carousel.main-carousel {
      height: 500px;
      min-height: auto;
    }

    .md-auto{
      width: auto;
      flex: unset;
    }

    .layers-container{
      position: relative;
      width: 100%;
      height: 100%;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: end;
      -ms-flex-pack: end;
      justify-content: flex-end;
      max-width: 1260px;
      margin: auto;
      margin-top: 120px;
    }


    div#hc-layer-0 {
      width: 38%;
      margin-right: 5%;
      padding-top: 100px;
      z-index: 9999;
    }

    /*ITEM-1*/
    div#hc-layer-1-item-1 {
      font-size: 47px;
      width: 100%;
      line-height: 52px;
      top: 56%;
      left: 48%;
    }

    div#hc-layer-2-item-1 {
      font-size: 17px;
      width: 100%;
      top: 80%;
      left: 48.25%;
      line-height: 28px;
    }

    div#hc-layer-3-item-1 {
      width: 49%;
      left: 0%;
      top: 14%;
    }

    /*ITEM-2*/
    div#hc-layer-1-item-2 {
      font-size: 64px;
      width: 39%;
      line-height: 90px;
      top: 35%;
      left: 22%;
    }

    div#hc-layer-2-item-2 {
      font-size: 17px;
      width: 28%;
      top: 66%;
      left: 22.25%;
      line-height: 28px;
    }

    div#hc-layer-3-item-2 {
      width: 55%;
      left: 30.5%;
      top: 4%;
    }

    .layers-container .layer{
      position: initial;
    }

    div#hc-layer-1-item-1{
      font-size: 28px;
    }
  }

  @media (min-width: 1024px) {
    .v-carousel.main-carousel {
      height: 500x;
      min-height: auto;
    }
  }

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