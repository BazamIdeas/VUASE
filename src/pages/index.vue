<template>
  <section class="content">
    <!-- <img src="/images/pages/franja_home.svg" alt="" style="position: absolute; width: 90%;"> -->
    <AppHomeCarousel :interval="interval" theme="2" />
    <v-container grid-list-sm text-xs-center>
      <v-layout row wrap align-center>
      </v-layout>
    </v-container>
    
    <!-- PORTFAFOLIO -->
    <AppHeading title="Portafolio" class="mb-5" />
    <AppExamplesSlider :examples="sliderExamples[0]" hovered="true" shadow="true" puntos="true" item-width="440" item-height="440"  class="mb-5 pb-5" />

    <!-- QUE NECESITAS -->
    <AppHeading class="mt-4 pt-5" title="¿Qué necesitas?" subtitle="Deja el diseño de tu imagen en manos de profesionales, que te ofreceran la más amplia gama de opciones" />
    <AppServicesGrid color="#F29F01"/>

    <AppHomeCreativeProccess class="mt-4" title="Proceso Creativo" />

    <v-parallax src="/images/pages/mapa.svg" class="parallax-opacity">
        <v-layout row wrap align-center>
          <v-flex d-flex xs12 offset-md2 md8>
            <v-layout align-center justify-center row wrap>
              <v-flex xs12 md4 class="ll-op">
                <v-card flat class="px-4 my-4 ll-op" color="transparent">
                  <p class="text-xs-center mb-0"><span class="text-uppercase display-3  dark-blue--text font-weight-bold">24</span><span class="display-1 dark-blue--text font-weight-bold">Hrs</span></p>
                  <p class="subheading font-weight-medium text-xs-center dark-blue--text">
                    Conceptos y perfeccionamientos
                  </p>
                </v-card>
              </v-flex>
              <v-flex xs12 md4 class="ll-op">
                <v-card flat class="px-4 my-4 " color="transparent">
                  <p class="text-xs-center mb-0"><span class="text-uppercase display-3  dark-blue--text font-weight-bold">100</span><span class="display-1 dark-blue--text font-weight-bold">%</span></p>
                  <p class="subheading font-weight-medium text-xs-center dark-blue--text">
                    Garantia de conformidad y confidencialidad
                  </p>
                </v-card>
              </v-flex>
              <v-flex xs12 md4 class="ll-op">
                <v-card flat class="px-4 my-4" color="transparent">
                  <p class="text-xs-center mb-0"><span class="text-uppercase display-3  dark-blue--text font-weight-bold">40</span></p>
                  <p class="subheading font-weight-medium text-xs-center dark-blue--text">
                    Lideres de Proyecto brindandote Atención profesional
                  </p>
                </v-card>
              </v-flex>
              <v-flex xs12 md4 class="ll-op">
                <v-card flat class="px-4 my-4" color="transparent">
                  <p class="text-xs-center mb-0"><span class="text-uppercase display-3  dark-blue--text font-weight-bold">22</span></p>
                  <p class="subheading font-weight-medium text-xs-center dark-blue--text">
                    Paises reciben nuestra atención
                  </p>
                </v-card>
              </v-flex>
              <v-flex xs12 md4 class="ll-op">
                <v-card flat class="px-4 my-4" color="transparent">
                  <p class="text-xs-center mb-0"><span class="display-1 dark-blue--text font-weight-bold">+</span><span class="text-uppercase display-3  dark-blue--text font-weight-bold">15</span></p>
                  <p class="subheading font-weight-medium text-xs-center dark-blue--text">
                    Años de Trayectoria internacional
                  </p>
                </v-card>
              </v-flex>
              <v-flex xs12 md4 class="ll-op">
                <v-card flat class="px-4 my-4" color="transparent">
                  <p class="text-xs-center  mb-0"><span class="display-1 dark-blue--text font-weight-bold">+</span><span class="text-uppercase display-3  dark-blue--text font-weight-bold">75.000</span></p>
                  <p class="subheading font-weight-medium text-xs-center dark-blue--text">
                    Creaciones realizadas
                  </p>
                </v-card>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
    </v-parallax>
    <v-container fluid grid-list-md>
      <v-layout row wrap>
        <v-flex xs12 md7>
          <img src="/images/pages/profesional_services.png" alt="" width="100%">
        </v-flex>
        <v-flex xs12 md4 class="mt-5 pt-5 text-xs-center pluma-background" style="position: relative"> 
          <div>
            <h2 class="font-weight-bold mb-4 mt-5 text-uppercase text-xs-center" style="font-size: 35px; line-height: 38px; color: #434343;">SERVICIOS PROFESIONALES</h2>
            <p class="text-xs-center mb-5 font-weight-bold">
              Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.
            </p>
            <v-btn xlink:href="/nuestros-servicios" flat outline class="px-2" style="background-color: #004B7B !important; border-color: #004B7B; color: white;">SABER MÁs</v-btn>
          </div>
        </v-flex>

        <v-flex xs12 offset-md1 md4 class="mt-5 pt-5 text-xs-center" style="position: relative">
          <div>
            <h2 class="font-weight-bold mb-4 mt-5 text-uppercase text-xs-center" style="font-size: 35px; line-height: 38px; color: #434343;">¿QUÉ OPINAN NUESTROS CLIENTES?</h2>
            <v-carousel hide-delimiters class="rating-user">
              <v-carousel-item>
                <div class="text-xs-center">
                  <v-rating :value="3" readonly></v-rating>
                </div>
                <p class="text-xs-center mb-5 px-5 pt-4 font-weight-bold">
                  "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500."
                </p>
              </v-carousel-item>
            </v-carousel>
          </div>
        </v-flex>

        <v-flex xs12 md7>
          <img src="/images/pages/profesional_services.png" :alt="alt" width="100%">
        </v-flex>

        <v-flex xs12 md5>
          <img src="/images/pages/muchacho_contacto.png" :alt="alt" width="100%">
        </v-flex>
        <v-flex xs12 md6 class="mt-5">
          <h2 class="font-weight-bold mb-4 text-uppercase text-xs-center" style="font-size: 40px; color: #434343;">¿TIENES ALGUNA DUDA?</h2>
          <AppContactForm />
        </v-flex>
      </v-layout>
    </v-container>
  </section>
</template>

<script>
  export default {
    head () {
      return {
        titleTemplate: '%s | Inicio',
        meta: [
          { name: 'og:title', content: 'bar' }
        ]
      }
    },
    data () {
      return {
        name: 'INICIO',
        interval: 8000,
        alt: 'Lorem ipsum'
      }
    },
    computed: {
      sliderExamples () { return this.$store.state.portfolios.indexExamples }
    },
    mounted () {
    }
  }
</script>

<style>
  .parallax-opacity .v-parallax__image-container img {
      transform: translate(-50%, -0px) !important;
  }
</style>

<style scoped>
  .service-icon-box h2{
    line-height: 21px;
  }

  .red-btn > .v-btn__content {
    font-weight: 700;
  }

  .parallax-opacity {
    height: 738px !important;
  }

  .parallax-opacity:before {
    content: "";
    width: 100%;
    height: 100%;
    background-color: rgba(249, 249, 249, 0.6);
    position: absolute;
    z-index: 2;
  }

/*   .pluma-background {
    position: relative;
    background-image: url(/icons/pluma_de_fondo.svg);
    background-position: center -50px;
    background-size: 145%;
  } */

  .dark-blue--text{
    color:#014E7B;
  }

  .flex.ll-op {
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }
</style>