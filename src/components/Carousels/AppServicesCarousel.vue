<template>
  <v-carousel :interval="interval" hide-controls class="main-carousel">
    <v-carousel-item transition="none" reverse-transition="none">
      <div class="layers-container">
        <div class="layer" id="hc-layer-1-item-1">
          <h1>¿QUÉ NECESITAS?</h1>
        </div>
        <div class="layer" id="hc-layer-2-item-1">
          <h2>Deja el diseño de tu imagen, en manos de profesionales, que te ofrecerán la mas amplia gama de opciones</h2>

          <v-layout row wrap align-center justify-center class="mt-5">
            <v-flex xs9>
              <v-autocomplete
                v-model="find"
                :items="services"
                label="Logo, pagina web, rotulo..."
                persistent-hint
                browser-autocomplete
                hide-no-data
                hide-selected
                item-text="name"
                item-value="slug"
                class="input-search"
                light
              >
              </v-autocomplete>
            </v-flex>
            <v-flex>
              <v-slide-x-reverse-transition slot="append-outer" mode="out-in" >
                <v-btn :to="url+'/'+ find +'/brief'" class="boton-buscar">
                  <v-icon>search</v-icon>
                </v-btn>
              </v-slide-x-reverse-transition>
            </v-flex>
          </v-layout>
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
    },
    computed: {
      services () { return this.$store.state.services.list },
      url () {
        return this.$router.currentRoute.path
      }
    }
  }
</script>

<style>
  /* input-search */
  .boton-buscar {
    width: 50px;
    height: 50px;
    margin: 0;
    background: #4167b1 !important;
    box-shadow: none !important;
  }
  
  boton-buscar i {
    color: white;
    font-size: 40px;
  }

  .input-search .v-input__append-inner {
    display: none !important;
  }

  .input-search .v-input__slot {
      margin-bottom: 0;
      border:1px solid silver;
  }
  
  .input-search .v-input__slot:before, .input-search .v-input__slot:after{
    display: none;
  }

  .input-search .v-select__slot{
    padding: 8px;
  }

  .input-search .v-input__control, .input-search{
    margin: 0px;
  }


  .v-input.input-search * {
    color: #202020 !important;
  }

  .input-search .v-input--is-label-active label, .input-search .v-label--active {
      display: none;
  }

  .v-input.input-search label {
    left: 8px !important;
    margin-top: 8px;
  }
</style>

<style scoped>  
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
      width: 70%;
      left: -2%;
      top: 20%;
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
      left: -2%;
      top: 20%;
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