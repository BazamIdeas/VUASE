<template>
  <section>
    <AppAboutUsCarousel />
    <v-container fluid grid-list-md>
      <v-layout row wrap>
        <v-flex xs12 offset-md1 md10 class="mb-5">
          <v-layout row wrap>
            <v-flex xs12 md6>
              <h1 class="font-weight-bold mb-5 text-uppercase" style="font-size: 30px; color: #004B7B">QUIÉNES SOMOS</h1>
              <p class="text-xs-justify" style="font-weight: 500;">
                Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de
                relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la
                imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos
                especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos,
                quedando esencialmente igual al original.
                <br><br>
                Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de
                relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la
                imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos
                especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos,
                quedando esencialmente igual al original.
              </p>
            </v-flex>
            <v-flex xs12 md6>
              <img src="/images/pages/dino_about_us.png" alt="" width="100%">
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex xs12 offset-md2 md8 class="mt-5 text-xs-center">
          <h1 class="display-1 font-weight-bold text-xs-center mb-4" style="color: #303032;">NUESTROS SERVICIOS</h1>
        </v-flex>
      </v-layout>
    </v-container>
    <AppServicesGrid color="#004B7B"/>
    <v-container>
      <v-layout row wrap>
        <v-flex xs12>
          <h1 class="headline font-weight-bold text-xs-center mb-4" style="color: #303032;">COMO TRABAJAMOS</h1>
        </v-flex>
        <v-flex xs12 offset-md2 md8 class="my-5 text-xs-center">
          <iframe width="100%" height="480" src="https://www.youtube.com/embed/f3XlIQ5pmdQ" frameborder="0" allow="autoplay; encrypted-media"
            allowfullscreen></iframe>
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