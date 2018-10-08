<template>
  <v-carousel :interval="interval" hide-controls class="main-carousel">
    <v-carousel-item transition="none" reverse-transition="none">
      <div class="layers-container">
        <div class="layer" id="hc-layer-1-item-1">
          <h1>¿SERVICIOS PROFESIONALES?</h1>
        </div>
        <div class="layer" id="hc-layer-2-item-1">
          <h1>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen</h1>
          <v-btn flat outline class="px-2 mx-0 mt-4" style="background-color: #B80000 !important; border-color: #B80000; color: white;">CONTÁCTANOS</v-btn>
        </div>
        <div class="layer" id="hc-layer-3-item-1">
          <v-img class="animate-img" src="images/carousels/pro_services1.png"></v-img>
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
    color: #B80000;
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

  @media (min-width: 600px) and (max-width: 960px) {}

  @media (min-width: 960px) and (max-width: 1264px) {}

  @media (min-width: 1264px) and (max-width: 1904px) {

    /*ITEM-1*/
    div#hc-layer-1-item-1 {
      font-size: 36px;
      width: 39%;
      line-height: 55px;
      top: 27%;
      left: 48%;
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
      left: 3%;
      top: 17%;
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