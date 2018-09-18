<template>
  <section class="content">
    <img src="/images/pages/franja_home.svg" alt="" style="position: absolute; width: 90%;">
    <AppHomeCarousel :interval="interval" />
    <v-container grid-list-sm text-xs-center class="mb-5">
      <v-layout row wrap align-center>
        <v-flex d-flex xs12 class="py-4 my-5 hidden-md-and-down">
        </v-flex>
      </v-layout>
    </v-container>
    <AppHeading title="¿Qué necesitas?" subtitle="Deja el diseño de tu imagen en manos de profesionales, que te ofreceran la más amplia gama de opciones" />
    <AppServicesGrid color="#B80000"/>
    <AppExamplesSlider :examples="examplesItems1" init-scroll="75" />
    <AppExamplesSlider :examples="examplesItems2" init-scroll="170" />
    <AppHeading title="Proceso Creativo" />
    <v-parallax src="/images/pages/statistics_home.jpg" class="parallax-opacity">
        <v-layout row wrap align-center>
          <v-flex d-flex xs12 offset-md2 md8>
            <v-layout align-center justify-center row wrap>
              <v-flex xs12 md4>
                <v-card flat class="pa-4 my-4" color="transparent">
                  <h1 class="display-2 font-weight-bold text-uppercase text-xs-center white--text">24Hrs</h1>
                  <p class="body-2 font-weight-regular text-xs-center white--text">
                    Conceptos y perfeccionamientos
                  </p>
                </v-card>
              </v-flex>
              <v-flex xs12 md4>
                <v-card flat class="pa-4 my-4" color="transparent">
                  <h1 class="display-2 font-weight-bold text-uppercase text-xs-center white--text">24Hrs</h1>
                  <p class="body-2 font-weight-regular text-xs-center white--text">
                    Conceptos y perfeccionamientos
                  </p>
                </v-card>
              </v-flex>
              <v-flex xs12 md4>
                <v-card flat class="pa-4 my-4" color="transparent">
                  <h1 class="display-2 font-weight-bold text-uppercase text-xs-center white--text">24Hrs</h1>
                  <p class="body-2 font-weight-regular text-xs-center white--text">
                    Conceptos y perfeccionamientos
                  </p>
                </v-card>
              </v-flex>
              <v-flex xs12 md4>
                <v-card flat class="pa-4 my-4" color="transparent">
                  <h1 class="display-2 font-weight-bold text-uppercase text-xs-center white--text">24Hrs</h1>
                  <p class="body-2 font-weight-regular text-xs-center white--text">
                    Conceptos y perfeccionamientos
                  </p>
                </v-card>
              </v-flex>
              <v-flex xs12 md4>
                <v-card flat class="pa-4 my-4" color="transparent">
                  <h1 class="display-2 font-weight-bold text-uppercase text-xs-center white--text">24Hrs</h1>
                  <p class="body-2 font-weight-regular text-xs-center white--text">
                    Conceptos y perfeccionamientos
                  </p>
                </v-card>
              </v-flex>
              <v-flex xs12 md4>
                <v-card flat class="pa-4 my-4" color="transparent">
                  <h1 class="display-2 font-weight-bold text-uppercase text-xs-center white--text">24Hrs</h1>
                  <p class="body-2 font-weight-regular text-xs-center white--text">
                    Conceptos y perfeccionamientos
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
            <h1 class="font-weight-bold mb-4 mt-5 text-uppercase text-xs-center" style="font-size: 35px; line-height: 38px">SERVICIOS PROFESIONALES</h1>
            <p class="text-xs-center mb-5" style="font-weight: 500;">
              Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.
            </p>
            <v-btn flat outline class="px-2" style="background-color: #004B7B !important; border-color: #004B7B; color: white;">SABER MÁs</v-btn>
          </div>
        </v-flex>

        <v-flex xs12 offset-md1 md4 class="mt-5 pt-5 text-xs-center" style="position: relative">
          <div>
            <h1 class="font-weight-bold mb-4 mt-5 text-uppercase text-xs-center" style="font-size: 35px; line-height: 38px">¿QUÉ OPINAN NUESTROS CLIENTES?</h1>
            <p class="text-xs-center mb-5" style="font-weight: 500;">
              Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto
              de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la
              imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos
              especimen.
            </p>
            <v-btn flat outline class="px-2" style="background-color: #004B7B !important; border-color: #004B7B; color: white;">SABER
              MÁs</v-btn>
          </div>
        </v-flex>

        <v-flex xs12 md7>
          <img src="/images/pages/profesional_services.png" alt="" width="100%">
        </v-flex>

        <v-flex xs12 md5>
          <img src="/images/pages/muchacho_contacto.png" alt="" width="100%">
        </v-flex>
        <v-flex xs12 md6 class="mt-5">
          <h1 class="font-weight-bold mb-4 text-uppercase text-xs-center" style="font-size: 40px;">¿TIENES ALGUNA DUDA?</h1>
          <AppContactForm />
        </v-flex>
      </v-layout>
    </v-container>
  </section>
</template>

<script>
  export default {
    data () {
      return {
        name: 'INICIO',
        interval: 8000,
        carouselItems: [
          { src: 'https://www.liderlogo.com/wp-content/uploads/Botella-Jugos-Andrés-compressor.png' },
          { src: 'https://www.liderlogo.com/wp-content/uploads/2017/08/Taza-Arlu-compressor.png' }
        ],
        examplesItems1: [
          { img: '/images/examples/1.png' },
          { img: '/images/examples/2.png' },
          { img: '/images/examples/3.png' },
          { img: '/images/examples/4.png' },
          { img: '/images/examples/1.png' },
          { img: '/images/examples/2.png' },
          { img: '/images/examples/3.png' },
          { img: '/images/examples/4.png' },
          { img: '/images/examples/1.png' },
          { img: '/images/examples/2.png' },
          { img: '/images/examples/3.png' },
          { img: '/images/examples/4.png' },
          { img: '/images/examples/1.png' }
        ],
        examplesItems2: [
          { img: '/images/examples/5.png' },
          { img: '/images/examples/6.png' },
          { img: '/images/examples/7.png' },
          { img: '/images/examples/8.png' },
          { img: '/images/examples/5.png' },
          { img: '/images/examples/6.png' },
          { img: '/images/examples/7.png' },
          { img: '/images/examples/8.png' },
          { img: '/images/examples/5.png' },
          { img: '/images/examples/6.png' },
          { img: '/images/examples/7.png' },
          { img: '/images/examples/8.png' }
        ]
      }
    },
    mounted () {
      this.$store.dispatch('getTodos')
    }
  }
</script>

<style scoped>
  .service-icon-box h1{
    line-height: 21px;
  }

  .red-btn > .v-btn__content {
    font-weight: 700;
  }

  .parallax-opacity:before {
    content: "";
    width: 100%;
    height: 100%;
    background-color: #0000009c;
    position: absolute;
    z-index: 2;
  }

  .pluma-background {
    position: relative;
    background-image: url(/icons/pluma_de_fondo.svg);
    background-position: center -50px;
    background-size: 145%;
  }

</style>
