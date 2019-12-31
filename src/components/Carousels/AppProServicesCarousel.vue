 
<template>
  <v-flex lg12 offset-lg1>
      <v-carousel :interval="interval" height="100%"  hide-controls class="main-carousel --pro">
    <v-carousel-item transition="fade-transition" reverse-transition="fade-transition">
      <div class="layers-container">
        <div class="layer"  id="hc-layer-3-item-1">
          <v-img :alt="alt" class="animate-img" src="images/carousels/pro_services1.jpg" ></v-img>
        </div>
        <div class="layer" id="hc-layer-1-item-1">
          <h1>Nuestros Servicios para Agencias como la tuya</h1>
        </div>
        <div class="layer layer-up" id="hc-layer-2-item-1">
          <p class="body-2 mt-5 pt-4">Si quieres ganar más sin incluir más personal en tu plantilla por falta de recursos, en Líderlogo tenemos la solución a tus problemas. Ayudamos a tu agencia de diseño gráfico para que puedas ampliar tus servicios con todas las facilidades.</p>
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
  @media  (max-width: 480px) {


    div#hc-layer-1-item-1 {
      font-size: 23px;
      line-height: 39px;
      top: 50%;
      text-align: center;
    }
    div#hc-layer-2-item-1 {
      font-size: 12px;
      top: 60%;
      line-height: 28px;
      text-align: center;
    }
    div#hc-layer-3-item-1 {
      width: 90%;
      top: 11%;
      left: 5%;
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
      height: 560px;
    }
  }
  @media (min-width: 481px) and (max-width: 600px){
    .v-carousel.main-carousel {
        height: 700px !important;
        min-height: auto;
    }
    div#hc-layer-3-item-1 {
      width: 85%;
      top: 11%;
      left: 5%;
    }
    div#hc-layer-1-item-1 {
      font-size: 23px;
      line-height: 39px;
      top: 65%;
      text-align: center;
    }
    div#hc-layer-2-item-1 {
      font-size: 12px;
      top: 78%;
      line-height: 28px;
      text-align: center;
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
      height: 560px;
    }
  }
  @media (min-width: 480px) and (max-width: 960px) {
    .v-carousel.main-carousel.--pro .layers-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    }
    .v-carousel.main-carousel.--pro .layers-container > div {
      position: initial;
    }
    .v-carousel.main-carousel.--pro .layers-container > :nth-child(1) {
        order: 2;
    }
    .v-carousel.main-carousel.--pro .layers-container > :nth-child(2) {
      order: 3;
    }
    .v-carousel.main-carousel.--pro .layers-container > :nth-child(3) {
      order: 1;
    }
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
        width: 65%;
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
      min-height: 545px;
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
      min-height: 854px;
    }
  }
  @media (min-width: 1264px) and (max-width: 1904px) {
    /*ITEM-1*/
    div#hc-layer-1-item-1 {
      font-size: 36px;
      width: 39%;
      line-height: 55px;
      top: 23%;
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

    @media (max-width: 348px) {
        .v-carousel.main-carousel.--pro h1{
          font-size: 1.7rem;
          margin-left: 2rem;
        }
      .v-carousel.main-carousel.--pro .body-2{
                margin-left: 1.5rem;
      }
    }
    @media (min-width: 349px) and (max-width: 480px) {
          .v-carousel.main-carousel.--pro #hc-layer-1-item-1 {
             margin-left: 2rem;
              font-size: 1.4rem;
          }
          .v-carousel.main-carousel.--pro .v-window-item {
            height: 600px !important;
        }
      }
    @media (max-width: 450px) {
          .v-carousel.main-carousel.--pro {
        margin-top: 5rem;
        min-height: unset;
      }
    }
  
    @media  (min-width: 480px) and (max-width: 500){
     div#hc-layer-1-item-1 {
      top: 50% !important;
    }
    div#hc-layer-2-item-1 {
      position: relative;
      top: 60% !important;
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
  @media (min-width: 600px) and (max-width: 860px) {
    .v-carousel.main-carousel {
        height: 680px;
        min-height: auto;
    }
  }
  
  @media (min-width: 740px) and (max-width: 820px) {
    .v-carousel.main-carousel {
        height: 780px;
        min-height: auto;
    }
  }
  @media (min-width: 820px) and (max-width: 960px) {
    .v-carousel.main-carousel {
        height: 850px;
        min-height: auto;
    }
  }
  .v-carousel.main-carousel.--pro .v-window-item{
        height: 500px;
  }
  .v-carousel.main-carousel.--pro  {
    min-height: auto; 
}
</style>

<style >
 .v-carousel.main-carousel.--pro .v-carousel__controls, div.v-carousel__controls {
  display: none !important;
}
</style>