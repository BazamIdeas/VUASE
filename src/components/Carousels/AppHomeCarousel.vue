<template>

  <v-carousel :interval="interval" hide-controls class="main-carousel theme2">
    <v-carousel-item transition="none" reverse-transition="none">
      <div class="layers-container">
        <div class="section">  
          <div id="hc-layer-3-item-1">
              <v-img class="animate-img" src="images/carousels/slider-de-home.png"></v-img>
          </div>
          <div  id="hc-layer-4-item-1">
            <h2>"El diseño es el embajador silencioso de una marca" </h2>
            <h5>- Paul Rand -</h5>
          </div>
        </div>

        <div class="section">
          <div id="hc-layer-1-item-1">
            <h1>CREATIVIDAD Y TALENTO PARA PRESENTAR TU NEGOCIO</h1>
          </div>
          <div id="hc-layer-2-item-1">
            <h1>Obten un diseño que amaras por ser capaz de todo. Diseños
            profesionales, a tu medida, ilimitados y hasta tu
            completa conformidad.</h1>
            <v-btn flat class="btn-simple" style="border: none; background: rgb(184, 0, 0); position: relative; margin-top: 59px; color: white !important; margin-left: 0; border:none; background:#B80000;" to="/nuestros-servicios">CONOCER MÁS</v-btn>
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
      theme: String
    }
  }
</script>

<style>
  .theme2 .v-carousel__controls {
    display: none;
  }
</style>

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


  @media (min-width: 320px) and (max-width: 480px) {

    /* theme 2 */
    .theme2.v-carousel.main-carousel {
      height: auto;
      min-height: 170vw;
    }

    .theme2 .layers-container {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      margin-top: 25%;
      margin-left: 10%;
      margin-right: 10%;
      width: 80% !important;
      flex-wrap: wrap;
      align-items: center;
      height: auto;
    }

    .theme2 .layers-container > :nth-child(1) {
      width: 100%;
      position: relative;
    }
    .theme2 .layers-container > :nth-child(2) {
      width: 100%;
    }

    /*ITEM-1*/
    .theme2 div#hc-layer-1-item-1 {
      font-size: 15px;
      width: 100%;
      margin-top: 20px;
      line-height: 30px;
    }

    .theme2 div#hc-layer-2-item-1 {
      font-size: 11px;
      width: 100%;
      line-height: 19px;
      margin-top: 10px;
    }

    .theme2 div#hc-layer-2-item-1 a {
        margin-top: 30px !important;
    }

    .theme2 div#hc-layer-3-item-1 {
      width: 90%;
    }

    /*ITEM-2*/
    .theme2 div#hc-layer-1-item-2 {
      font-size: 64px;
      width: 39%;
      line-height: 90px;
    }

    .theme2 div#hc-layer-2-item-2 {
      font-size: 17px;
      width: 28%;
      line-height: 28px;
    }

    .theme2 div#hc-layer-3-item-2 {
      width: 55%;
    }

    /* ITEM 4 */
    .theme2 div#hc-layer-4-item-1 {
      display: none;
    }
  }

  @media (min-width: 481px) and (max-width: 639px) {

    /* theme 2 */
    .theme2.v-carousel.main-carousel {
      height: auto;
      min-height: 130vw;
    }

    .theme2 .layers-container {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      margin-top: 18%;
      margin-left: 10%;
      margin-right: 10%;
      width: 80% !important;
      flex-wrap: wrap;
      align-items: center;
      height: auto;
    }

    .theme2 .layers-container > :nth-child(1) {
      width: 80%;
      position: relative;
    }
    .theme2 .layers-container > :nth-child(2) {
      width: 100%;
    }

    /*ITEM-1*/
    .theme2 div#hc-layer-1-item-1 {
      font-size: 26px;
      width: 100%;
      margin-top: 20px;
      line-height: 41px;
    }

    .theme2 div#hc-layer-2-item-1 {
      font-size: 11px;
      width: 100%;
      line-height: 19px;
      margin-top: 10px;
    }

    .theme2 div#hc-layer-2-item-1 a {
        margin-top: 30px !important;
    }

    .theme2 div#hc-layer-3-item-1 {
      width: 90%;
    }

    /*ITEM-2*/
    .theme2 div#hc-layer-1-item-2 {
      font-size: 64px;
      width: 39%;
      line-height: 90px;
    }

    .theme2 div#hc-layer-2-item-2 {
      font-size: 17px;
      width: 28%;
      line-height: 28px;
    }

    .theme2 div#hc-layer-3-item-2 {
      width: 55%;
    }

    /* ITEM 4 */
    .theme2 div#hc-layer-4-item-1 {
      display: none;
    }

    div.v-carousel__controls {
        display: none;
    }
  }

  @media (min-width: 640px) and (max-width: 960px) {

    .v-carousel.main-carousel {
        height: 100vh;
        min-height: 500px;
    }

    .theme2 .layers-container {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      margin-top: 14%;
      margin-left: 10%;
      margin-right: 10%;
      width: 80% !important;
    }

    .theme2 .layers-container > :nth-child(1) {
      width: 60%;
      position: relative;
    }
    .theme2 .layers-container > :nth-child(2) {
      width: 45%;
    }

    /*ITEM-1*/
    .theme2 div#hc-layer-1-item-1 {
      font-size: 18px;
      width: 100%;
      margin-top: 20px;
      line-height: 41px;
    }

    .theme2 div#hc-layer-2-item-1 {
      font-size: 11px;
      width: 100%;
      line-height: 19px;
      margin-top: 10px;
    }

    .theme2 div#hc-layer-2-item-1 a {
        margin-top: 30px !important;
    }

    .theme2 div#hc-layer-3-item-1 {
      width: 90%;
    }

    /*ITEM-2*/
    .theme2 div#hc-layer-1-item-2 {
      font-size: 64px;
      width: 39%;
      line-height: 90px;
    }

    .theme2 div#hc-layer-2-item-2 {
      font-size: 17px;
      width: 28%;
      line-height: 28px;
    }

    .theme2 div#hc-layer-3-item-2 {
      width: 55%;
    }

    /* ITEM 4 */
    .theme2 div#hc-layer-4-item-1 {
      display: none;
    }
  }

  @media (min-width: 960px) and (max-width: 1264px) {
    /* theme 2 */
    /*ITEM-1*/
    .theme2 div#hc-layer-1-item-1 {
      font-size: 28px;
      width: 35%;
      line-height: 44px;
      left: 57%;
      top: 23%;
      text-align: left;
    }

    .theme2 div#hc-layer-2-item-1 {
      font-size: 12px;
      width: 38%;
      top: 43%;
      left: 57%;
      line-height: 28px;
      text-align: left;
    }

    .theme2 div#hc-layer-3-item-1 {
      width: 46%;
      left: 5%;
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

    .theme2 div#hc-layer-2-item-1 a{
      margin-top: 23px !important;
    }

    /* ITEM 4 */
    .theme2 div#hc-layer-4-item-1 {
      display: none;
    }

    div.v-carousel__controls {
        display: none;
    }

    /* theme 2 */
    .theme2.v-carousel.main-carousel {
        height: auto;
        min-height: 53vw;
    }

    .theme2 .layers-container {
      display: flex;
      margin-top: 8%;
      margin-left: 10%;
      margin-right: 10%;
      width: 80% !important;
    }

    .theme2 .layers-container > :nth-child(1) {
      width: 60%;
      position: relative;
    }
    .theme2 .layers-container > :nth-child(2) {
      width: 45%;
    }

    /*ITEM-1*/
    .theme2 div#hc-layer-1-item-1 {
      font-size: 35px;
      width: 100%;
      margin-top: 50px;
      line-height: 56px;
    }

    .theme2 div#hc-layer-2-item-1 {
      font-size: 14px;
      width: 100%;
      line-height: 28px;
      margin-top: 10px;
    }

    .theme2 div#hc-layer-3-item-1 {
      width: 90%;
    }

    /*ITEM-2*/
    .theme2 div#hc-layer-1-item-2 {
      font-size: 64px;
      width: 39%;
      line-height: 90px;
    }

    .theme2 div#hc-layer-2-item-2 {
      font-size: 17px;
      width: 28%;
      line-height: 28px;
    }

    .theme2 div#hc-layer-3-item-2 {
      width: 55%;
    }

    /* ITEM 4 */
    .theme2 div#hc-layer-4-item-1 {
      font-size: 10px;
      width: 33%;
      text-align: center;
      line-height: 16px;
      z-index: 99;
      position: absolute;
      margin-top: -20%;
      left: 8%;
    }
  }

  @media (min-width: 1264px) and (max-width: 1904px) {
    /* theme 2 */
    .theme2.v-carousel.main-carousel {
        height: auto;
        min-height: 53vw;
    }

    .theme2 .layers-container {
      display: flex;
      margin-top: 8%;
      margin-left: 10%;
      margin-right: 10%;
      width: 80% !important;
    }

    .theme2 .layers-container > :nth-child(1) {
      width: 60%;
      position: relative;
    }
    .theme2 .layers-container > :nth-child(2) {
      width: 45%;
    }

    /*ITEM-1*/
    .theme2 div#hc-layer-1-item-1 {
      font-size: 35px;
      width: 100%;
      margin-top: 50px;
      line-height: 56px;
    }

    .theme2 div#hc-layer-2-item-1 {
      font-size: 14px;
      width: 100%;
      line-height: 28px;
      margin-top: 10px;
    }

    .theme2 div#hc-layer-3-item-1 {
      width: 90%;
    }

    /*ITEM-2*/
    .theme2 div#hc-layer-1-item-2 {
      font-size: 64px;
      width: 39%;
      line-height: 90px;
    }

    .theme2 div#hc-layer-2-item-2 {
      font-size: 17px;
      width: 28%;
      line-height: 28px;
    }

    .theme2 div#hc-layer-3-item-2 {
      width: 55%;
    }

    /* ITEM 4 */
    .theme2 div#hc-layer-4-item-1 {
      font-size: 10px;
      width: 33%;
      text-align: center;
      line-height: 16px;
      z-index: 99;
      position: absolute;
      margin-top: -20%;
      left: 8%;
    }
  }

  @media (min-width: 1904px) {

    /* theme 2 */
    .theme2.v-carousel.main-carousel {
        height: auto;
        min-height: 53vw;
    }

    .theme2 .layers-container {
      display: flex;
      margin-top: 8%;
      margin-left: 10%;
      margin-right: 10%;
      width: 80% !important;
    }

    .theme2 .layers-container > :nth-child(1) {
      width: 60%;
      position: relative;
    }
    .theme2 .layers-container > :nth-child(2) {
      width: 45%;
    }

    /*ITEM-1*/
    .theme2 div#hc-layer-1-item-1 {
      font-size: 44px;
      width: 100%;
      margin-top: 50px;
      line-height: 56px;
    }

    .theme2 div#hc-layer-2-item-1 {
      font-size: 14px;
      width: 100%;
      line-height: 28px;
      margin-top: 10px;
    }

    .theme2 div#hc-layer-3-item-1 {
      width: 90%;
    }

    /*ITEM-2*/
    .theme2 div#hc-layer-1-item-2 {
      font-size: 64px;
      width: 39%;
      line-height: 90px;
    }

    .theme2 div#hc-layer-2-item-2 {
      font-size: 17px;
      width: 28%;
      line-height: 28px;
    }

    .theme2 div#hc-layer-3-item-2 {
      width: 55%;
    }

    /* ITEM 4 */
    .theme2 div#hc-layer-4-item-1 {
      font-size: 10px;
      width: 33%;
      text-align: center;
      line-height: 16px;
      z-index: 99;
      position: absolute;
      margin-top: -20%;
      left: 8%;
    }
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }

</style>