<template>
  <v-carousel :interval="interval" height="100%" hide-controls class="main-carousel c-services">
    <v-carousel-item transition="none" reverse-transition="none">
      <div class="layers-container">
        <div class="layer" id="hc-layer-3-item-1">
          <v-img :alt="alt" class="animate-img" src="images/carousels/services1.png"></v-img>
        </div>

        <div class="layer" id="hc-layer-0">   
          <div id="hc-layer-1-item-1">
            <h1>¿QUÉ NECESITAS DISEÑAR?</h1>
          </div>

          <div id="hc-layer-2-item-1" style="z-index: 99;">
            <h2>Deja el diseño de tu imagen, en manos de profesionales, que te ofrecerán la mas amplia gama de opciones</h2>

            <v-layout row wrap align-center justify-center class="mt-5" style="z-index: 99;">
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
                  @change="go()"
                >
                </v-autocomplete>
              </v-flex>
            </v-layout>
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
      serviceSlug: '',
      alt: String
    },
    data () {
      return {
        find: '',
        addons: [
          'presencia-web',
          'galeria-de-proyectos',
          'catalogo-productos',
          'integracion-con-herramientas-de-google',
          'area-para-la-gestion-de-archivos',
          'seccion-de-noticias-o-publicaciones',
          'reservaciones-o-citas',
          'formulario-personalizado',
          'plataforma-inmobiliaria',
          'area-privada-para-clientes',
          'multidioma-automatico',
          'cotizador',
          'pop-publicitario',
          'chat',
          'certificado-ssl',
          'dominio-por-un-ano',
          'hosting-por-un-ano',
          'logo-solo-para-web',
          'diseno-y-desarrollo-de-seccion-web',
          'ecommerce',
          'adicional-papeleria',
          'sitio-web-ecommerce'
        ]
      }
    },
    methods: {
      go () {
        this.$router.push(this.url)
      }
    },
    computed: {
      services () {
        let servicesArray = []
        let services = this.$store.state.services.list

        for (let service of services) {
          if (!this.addons.includes(service.slug)) {
            servicesArray.push(service)
          }
        }

        return servicesArray
      },
      /* TODO: */
      url () {
        if (this.find === 'logo-y-pagina-web' || this.find === 'pagina-web') {
          return this.$router.currentRoute.path + '/' + this.find
        } else {
          return this.$router.currentRoute.path + '/' + this.find
        }
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
    font-weight: 400;
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

 @media (max-width: 480px) {
    .v-carousel.main-carousel {
      min-height: auto;
      height: 560px !important;
    }
 }
  @media (max-width: 960px) {

    .v-carousel.main-carousel {
        height: 600px;
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
      width: 50%;
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
        height: 680px;
        min-height: auto;
    }
  }

  
  @media (min-width: 740px) and (max-width: 820px) {
    .v-carousel.main-carousel {
        height: 730px;
        min-height: auto;
    }
  }

  @media (min-width: 820px) and (max-width: 960px) {
    .v-carousel.main-carousel {
        height: 780px;
        min-height: auto;
    }
  }


  @media (min-width: 960px) {
    .v-carousel.main-carousel {
      height: 600px;
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

    div#hc-layer-3-item-1 {
      width: 45%;
      left: 5%;
      position: absolute;
    }

    div#hc-layer-2-item-1 {
      font-size: 10px;
    }

    div#hc-layer-0 {
      width: 38%;
      margin-right: 5%;
      padding-top: 100px;
      z-index: 9999;
      text-align:center;
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
      height: 750px;
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