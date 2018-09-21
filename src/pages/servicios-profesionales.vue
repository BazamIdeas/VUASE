<template>
  <section>
    <AppProServicesCarousel />
    <v-container fluid grid-list-md>
      <v-layout row wrap>
        <v-flex xs12 offset-md1 md10 class="mb-5">
          <v-layout row wrap>
            <v-flex xs12 md6 class="pl-5 py-5" style="background-image: url(/icons/puntos_de_fondo.svg); background-position: -193px -480%; background-size: cover;">
              <img src="/images/icons/pro_services_1.png" alt="" class="ml-5 mt-5">
              <h1 class="pl-5 font-weight-bold mb-5 text-uppercase" style="font-size: 40px; line-height: 34px; color: #303032">ATENCION PROFESIONAL</h1>
              <p class="pl-5 text-xs-justify" style="font-weight: 500;">
                Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha
                sido el texto de
                relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se
                dedica a la
                imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de
                textos
                especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos
                electrónicos,
                quedando esencialmente igual al original.
              </p>
            </v-flex>
            <v-flex xs12 md6>
              <img src="/images/pages/objects_pro_services.png" alt="" width="100%">
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex xs12 offset-md1 md10 class="mb-5">
          <v-layout row wrap>
            <v-flex xs12 md6>
              <img src="/images/pages/private_pro_services.jpg" alt="" width="100%">
            </v-flex>
            <v-flex xs12 md6 class="pl-5 py-5 text-xs-right" style="background-image: url(/icons/puntos_de_fondo.svg); background-position: -193px -480%; background-size: cover;">
              <img src="/images/icons/pro_services_2.png" alt="" class="ml-5 mt-5">
              <h1 class="pl-5 font-weight-bold mb-5 text-uppercase text-xs-right" style="font-size: 40px; line-height: 34px; color: #303032">PRIVACIDAD GARANTIZADA</h1>
              <p class="pl-5 text-xs-justify" style="font-weight: 500;">
                Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha
                sido el texto de
                relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se
                dedica a la
                imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de
                textos
                especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos
                electrónicos,
                quedando esencialmente igual al original.
              </p>
            </v-flex>

          </v-layout>
        </v-flex>
        <v-flex xs12 offset-md1 md10 class="mb-5">
          <v-layout row wrap>
            <v-flex xs12 md6 class="pl-5 py-5" style="background-image: url(/icons/puntos_de_fondo.svg); background-position: -193px -480%; background-size: cover;">
              <img src="/images/icons/pro_services_3.png" alt="" class="ml-5 mt-5">
              <h1 class="pl-5 font-weight-bold mb-5 text-uppercase" style="font-size: 40px; line-height: 34px; color: #303032">RECONMENDADOS POR GRANDES</h1>
            </v-flex>
            <v-flex xs12>
              Slider
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex xs12 offset-md2 md8 class="my-5 text-xs-center">
          <h1 class="display-1 font-weight-bold text-xs-center mb-4" style="color: #303032;">¿NECESITAS UN SERVICIO
            PROFESIONAL?</h1>
          <v-btn flat outline class="px-2" style="background-color: #B80000 !important; border-color: #B80000; color: white;">Comencemos</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </section>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          { text: 'Logo a medida', field: 'logo-a-medida' },
          { text: 'Folletos', field: 'folleto-y-publicidades' }
        ],
        list: [
          'dasdasdadasdasdadadsasdad'
        ]
      }
    }
  }
</script>

<style scoped>
  .v-list__tile__content {
    font-weight: 600;
  }

  .service-box-list {
    display: flex;
    flex-flow: column;
    align-items: center;
  }

  .service-name {
    color: #676767;
    font-size: 20px;
    font-weight: 700
  }

  .price {
    font-size: 40px;
    font-weight: 700;
    color: #87C438;
  }

  .service-box-list ul,
  .service-box-list ol {
    padding-left: 17px;
    margin-bottom: 20px;
    list-style-image: url('/images/icons/check-green.png');
  }

  .service-box-list ul li {
    font-weight: 600;
    color: #676767;
    margin-top: 11px;
  }
</style>