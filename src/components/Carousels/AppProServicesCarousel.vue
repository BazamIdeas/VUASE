 
<template>
  <v-flex lg12 >
      <v-carousel :interval="interval" height="100%"  hide-delimiters hide-controls class="main-carousel --pro">
    <v-carousel-item transition="fade-transition" reverse-transition="fade-transition">
      <div class="layers-container">
        <div class="layer"  id="hc-layer-3-item-1">
          <v-img :alt="alt" class="animate-img" src="images/carousels/pro_services1.jpg" ></v-img>
        </div>
        <div class="layer" id="hc-layer-1-item-1">
          <h1 class="display-1 px-2 mx-0">Nuestros Servicios para Agencias como la tuya</h1>
        </div>
        <div class="layer layer-up" id="hc-layer-2-item-1">
          <p class="body-3 px-2">Si quieres ganar más sin incluir más personal en tu plantilla por falta de recursos, en Líderlogo tenemos la solución a tus problemas. Ayudamos a tu agencia de diseño gráfico para que puedas ampliar tus servicios con todas las facilidades.</p>
          <v-btn to="/contacto" flat outline class="px-2 mx-0 mt-4" style="background-color: #B80000 !important; border-color: #B80000; color: white;">¡TE LLAMAMOS!</v-btn>
        </div>
      </div>
    </v-carousel-item>
  </v-carousel>
  </v-flex>
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
.layer-up{ 
  z-index: 5;
}
  img{
    max-width:100%;
  }
  img[lazy=loading] {
    filter: blur(10px);
    transition: filter 0.7s;
  }
/*   .v-carousel.main-carousel--pro {
      min-height: 680px;
  } */
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
    font-weight: 400;
  }
  /*ITEM-2*/
  div#hc-layer-1-item-2>* {
    color: #004B7B;
    font-weight: 700;
  }
  div#hc-layer-2-item-2>* {
    color: #676767;
    font-weight: 400;
  }

  .v-carousel.main-carousel {
    height: 300px;
    min-height: 630px;
  }


  @media (max-width: 321px)
  {

  div#hc-layer-1-item-1 {
      top: 42%;
      text-align: center;
    }

  div#hc-layer-3-item-1 {
      width: 100%;
      top: 11%;
    }

    div#hc-layer-2-item-1 {
      font-size: 17px;
      top: 70%;
      line-height: 28px;
      text-align: center;
    }
}


  @media (min-width: 321px) and (max-width: 600px) {

    .v-carousel.main-carousel {
    height: 300px;
    min-height: 640px;
  }

    div#hc-layer-1-item-1 {
      top: 50%;
      text-align: center;
    }

  div#hc-layer-3-item-1 {
      width: 100%;
      top: 11%;
    }

    div#hc-layer-2-item-1 {
      font-size: 17px;
      top: 70%;
      line-height: 28px;
      text-align: center;
    }
    
  }

  @media (min-width: 600px) and (max-width: 960px) {
    
    .v-carousel.main-carousel {
    height: 300px;
    min-height: 500px;
  }

  div#hc-layer-3-item-1 {
      width: 65%;
      top: 21%;
    }

    div#hc-layer-1-item-1 {
      top: 15%;
      left: 55%;
    }

    div#hc-layer-2-item-1 {
      font-size: 17px;
      top: 42%;
      left: 55%;
      line-height: 28px;
    }
  }

  @media (min-width: 960px) and (max-width: 1366px) {

    .v-carousel.main-carousel {
    height: 300px;
    min-height: 500px;
  }

  div#hc-layer-3-item-1 {
      width: 65%;
      top: 21%;
    }

    div#hc-layer-1-item-1 {
      top: 25%;
      left: 55%;
    }

    div#hc-layer-2-item-1 {
      font-size: 17px;
      top: 42%;
      left: 55%;
      line-height: 28px;
    }
  }

  @media (min-width: 1366px) and (max-width: 1440px){

    .v-carousel.main-carousel {
    height: 300px;
    min-height: 550px;
  }

  div#hc-layer-3-item-1 {
      width: 65%;
      top: 15%;
    }

    div#hc-layer-1-item-1 {
      top: 25%;
      left: 55%;
      width: 40%;
    }

    div#hc-layer-2-item-1 {
      font-size: 17px;
      top: 42%;
      left: 55%;
      line-height: 28px;
      width: 40%;
    }
  }

    @media (min-width: 1440px){

    .v-carousel.main-carousel {
    height: 300px;
    min-height: 750px;
  }

  div#hc-layer-3-item-1 {
      width: 65%;
      top: 10%;
    }

    div#hc-layer-1-item-1 {
      top: 25%;
      left: 55%;
      width: 30%;
    }

    div#hc-layer-2-item-1 {
      font-size: 17px;
      top: 42%;
      left: 55%;
      line-height: 28px;
      width: 30%;
    }
  }
 
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter,
  .fade-leave-to
  {
    opacity: 0;
  }

</style>
