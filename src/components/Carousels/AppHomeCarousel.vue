<template>

  <v-carousel :interval="interval" hide-controls class="main-carousel theme2">
    <v-carousel-item transition="none" reverse-transition="none">
      <div class="layers-container">
        <div class="section">  
          <div id="hc-layer-3-item-1">

            <figure class="picture">
            <img data-src="images/carousels/embajador-de-la-marca.jpg" class=" animate-img lazyload"  :alt="alt">
          </figure>
          </div>

        </div>

        <div class="section">
          <div id="hc-layer-1-item-1">
            <h1>Creatividad y talento <br class="hidden-sm-and-down"> para presentar tu negocio</h1>
          </div>
          <div id="hc-layer-2-item-1">
            <p class="body-2 ">Obtén un diseño que amarás por ser capaz de todo. Diseños
            profesionales, a tu medida, ilimitados y hasta tu
            completa conformidad.</p>
            <v-btn flat class="btn-simple" style="border: none; background: rgb(184, 0, 0); position: relative; margin-top: 59px; color: white !important; margin-left: 0; border:none; background:#2f3292;" to="/nuestros-servicios">CONOCER MÁS</v-btn>
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
      theme: String,
      alt: String
    }
  }
</script>

<style>
  .theme2 .v-carousel__controls {
    display: none;
  }
</style>

<style scoped>
img{
  max-width:100%;
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
  div#hc-layer-1-item-1 > * {
    color: #2f3292;
    font-weight: 700;
  }

  div#hc-layer-2-item-1 > * {
    color: #676767;
    font-weight: 400;
  }


  @media (min-width: 320px) and (max-width: 480px) {

    /* theme 2 */
    .theme2.v-carousel.main-carousel {
      height: auto;
      min-height: 750px;
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
  }

  @media (min-width: 481px) and (max-width: 639px) {

    /* theme 2 */
    .theme2.v-carousel.main-carousel {
      height: auto;
      min-height: 700px;
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
  }

  @media (min-width: 640px) and (max-width: 1023px) {

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
  }

  @media (min-width: 600px) and (max-width: 740px) {
    .v-carousel.main-carousel {
      height: auto;
      min-height: 700px;
    }
  }

  @media (min-width: 740px) and (max-width: 820px) {
    .v-carousel.main-carousel {
        height: auto;
        min-height: 700px;
    }
  }

  @media (min-width: 820px) and (max-width: 960px) {
    .v-carousel.main-carousel {
        height: auto;
        min-height: 700px;
    }
  }

  @media (min-width: 1024px) and (max-width: 1264px) {

    .v-carousel.main-carousel {
      height: 700px;
      min-height: auto;
    }

    .layers-container{
      max-width: 1260px;
    }

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

    /* theme 2 */

    .theme2 .layers-container {
      display: flex;
      margin-top: 10%;
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
  }

  @media (min-width: 1264px) and (max-width: 1904px) {
    /* theme 2 */
    .theme2.v-carousel.main-carousel {
        height: auto;
        min-height: 53vw;
    }

    .theme2 .layers-container {
      display: flex;
      margin-top: 10%;
      margin-left: 10%;
      margin-right: 10%;
      width: 80% !important;
    }

    .theme2 .layers-container > :nth-child(1) {
      width: 50%;
      position: relative;
    }
    .theme2 .layers-container > :nth-child(2) {
      width: 50%;
    }

    /*ITEM-1*/
    .theme2 div#hc-layer-1-item-1 {
      font-size: 28px;
      width: 100%;
      margin-top: 60px;
      line-height: 48px;
    }

    .theme2 div#hc-layer-2-item-1 {
      font-size: 10px;
      width: 80%;
      line-height: 25px;
      letter-spacing: 0.5px;
      margin-top: 20px;
    }

    .theme2 div#hc-layer-3-item-1 {
      width: 80%;
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
      width: 50%;
      position: relative;
    }
    .theme2 .layers-container > :nth-child(2) {
      width: 50%;
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
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }

</style>