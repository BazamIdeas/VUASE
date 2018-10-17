<template>
  <v-carousel :interval="interval" hide-controls class="main-carousel">
    <v-carousel-item transition="none" reverse-transition="none">
      <div class="layers-container">
        <div class="layer" id="hc-layer-1-item-1">
          <h1>¿QUÉ NECESITAS?</h1>
        </div>
        <div class="layer" id="hc-layer-2-item-1">
          <h1>Deja el diseño de tu imagen, en manos de profesionales, que te ofrecerán la mas amplia gama de opciones</h1>

          <div class="input-search mt-4">
            <input
              v-model="find"
              placeholder="Logo, pagina web, rotulo..."
              required
            >
            <v-icon>search</v-icon>
          </div>
        </div>
        <div class="layer" id="hc-layer-3-item-1">
          <v-img class="animate-img" src="images/carousels/services1.png"></v-img>
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
      find: ''
    }
  }
</script>

<style scoped>
  /* input-search */
  .input-search {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .input-search input{
    border: 1px solid silver;
    padding: 12px;
    font-size: 20px !important;
  }
  .input-search input::placeholder {
    color: #c1c0c0 !important;
  }
  .input-search.mt-4 i {
    width: 50px;
    height: 50px;
    color: white;
    background: #4167b1;
    font-size: 40px;
  }
  
  .v-carousel {
    box-shadow: none;
  }

  .v-carousel.main-carousel {
      height: 114vh;
      min-height: 640px;
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
    color: #4167b1;
    font-weight: 700;
  }

  div#hc-layer-2-item-1>* {
    color: #bbbbbb;
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
      font-size: 28px;
      width: 39%;
      line-height: 90px;
      top: 25%;
      left: 57%;
    }

    div#hc-layer-2-item-1 {
      font-size: 10px;
      width: 34%;
      top: 39%;
      left: 55.25%;
      line-height: 19px;
      text-align: center;
    }

    div#hc-layer-3-item-1 {
      width: 70%;
      left: -12%;
      top: 2%;
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