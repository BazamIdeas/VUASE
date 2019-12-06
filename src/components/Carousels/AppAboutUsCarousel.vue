<template>
  <v-carousel :interval="interval" height="100%"  hide-controls class="main-carousel mt-5" >
    <v-carousel-item transition="none" reverse-transition="none">
      <div class="layers-container">
        <div class="layer" id="hc-layer-1-item-1">
          <h1>Diseñamos <br> Marcas br Exitosas</h1>
          <v-btn flat outline class="px-2 mt-4" style="background-color: #004b7b !important; border-color: #004b7b; color: white; line-height: initial;">COMPRUEBALO</v-btn>
        </div>
        <div class="layer" id="hc-layer-3-item-1">
          <v-img :alt="alt" class="animate-img" src="images/carousels/about_us1.png"></v-img>
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
  .v-carousel.main-carousel--pro {
      min-height: 420px;
  }

  #hc-layer-3-item-1{
    height: 540px;
  }
/*   .v-window__container {
    height: 440px;
} */
  .v-window-item {
    height: 540px;
}

   .v-window.v-carousel.main-carousel{
      height: 0 !important;
    }
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
    color: #004b7b;;
    font-weight: 700;
  }

  div#hc-layer-2-item-1>* {
    color: #676767;
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

@media (min-height: 300px)
  {
  .v-carousel.main-carousel {
    height: 300px;
    min-height: 400px;
  }
}


  @media (max-width: 600px) {

    /*ITEM-1*/
    div#hc-layer-1-item-1 {
      font-size: 28px;
      line-height: 39px;
      top: 60%;
      text-align: center;
    }

    div#hc-layer-1-item-1 {
      font-size: 23px;
      line-height: 39px;
      top: 49%;
    }

    div#hc-layer-2-item-1 {
      font-size: 17px;
      top: 80%;
      line-height: 28px;
      text-align: center;
    }

    div#hc-layer-2-item-1 {
      font-size: 14px;
      top: 64%;
    }

    div#hc-layer-3-item-1 {
      width: 75%;
      top: 11%;
      left: 14%;
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

    .v-carousel.profesional-services-slider {
      height: 420px;
    }
  }

  @media (min-width: 600px) and (max-width: 960px) {
    /*ITEM-1*/
    div#hc-layer-1-item-1 {
      font-size: 28px;
      line-height: 39px;
      top: 60%;
      text-align: center;
    }

    div#hc-layer-1-item-1 {
      font-size: 21px;
      line-height: 39px;
      top: 28%;
      left: 39%;
    }

    div#hc-layer-2-item-1 {
      font-size: 17px;
      top: 80%;
      line-height: 28px;
      text-align: center;
    }

    div#hc-layer-2-item-1 {
      font-size: 13px;
      top: 53%;
    }

    div#hc-layer-3-item-1 {
        width: 40%;
        top: 12%;
        left: 6%;
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

    .v-carousel.main-carousel {
      height: 420px;
      min-height: 420px;
    }
  }

  @media (min-width: 960px) and (max-width: 1264px) {
        /*ITEM-1*/
    div#hc-layer-1-item-1 {
      font-size: 28px;
      line-height: 39px;
      top: 60%;
      text-align: center;
    }

    div#hc-layer-1-item-1 {
      font-size: 26px;
      line-height: 39px;
      top: 77%;
      left: 17%;
    }

    div#hc-layer-2-item-1 {
      font-size: 17px;
      top: 80%;
      line-height: 28px;
      text-align: center;
    }

    div#hc-layer-2-item-1 {
      font-size: 13px;
      width: 95%;
      top: 85%;
      left: 2.5%;
    }

    div#hc-layer-3-item-1 {
      width: 60%;
      top: 15%;
      left: 20%;
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

    .v-carousel.main-carousel {
      height: 420px;
      min-height: 854px;
    }
  }

  @media (min-width: 1264px){

    /*ITEM-1*/
    div#hc-layer-1-item-1 {
      font-size: 31px;
      width: 44%;
      line-height: 55px;
      top: 32%;
      left: 49%;
    }

    div#hc-layer-2-item-1 {
      font-size: 10px;
      width: 38%;
      top: 45%;
      left: 48.25%;
      line-height: 21px;
      text-align: justify;
    }

    div#hc-layer-3-item-1 {
      width: 48%;
      left: 7%;
      top: 9%;
    }

    /*ITEM-2*/
    div#hc-layer-1-item-2 {
      font-size: 64px;
      width: 39%;
      line-height: 90px;
      top: 25%;
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
  }

  @media (min-width: 1900px) {
   .v-window.v-carousel.main-carousel{
      height: 100% !important;
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