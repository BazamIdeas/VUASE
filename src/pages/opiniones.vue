<template>
  <section class="content">
    <v-container grid-list-md class="mt-5">
      <v-layout row wrap class="mt-5">
        <v-flex xs12 md5 class="pr-5 pr-xs-0">
          <h1 class="display-1 xs-headline mt-5 mb-5 font-weight-bold text-xs-center text-md-left">NUESTROS CLIENTES HABLAN POR NOSOTROS</h1>
        </v-flex>
        <v-flex xs12 md7>
          <iframe class="responsive-video" height="350px" src="https://www.youtube.com/embed/Ywm1mGab3Kg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </v-flex>
      </v-layout>
      <v-layout row wrap class="mt-5">
        <v-flex xs12 v-for="(testimony, i) in testimonies" :key="i">
          <v-layout row wrap class="mb-xs-3">
            <v-flex xs12 sm4 md3 @click="testimony.active = !testimony.active">
              <img :src="testimony.logo" class="p-testimony-logo">
            </v-flex>

            <v-flex xs12 sm6 md9>
              <v-layout class="mt-4" row d-flex justify-center>
                <div class="text-xs-center">
                  <v-rating class="testimony-rating" :value="testimony.stars" readonly></v-rating>
                </div>
              </v-layout>
              <h3 class="subheading font-weight-medium text-xs-center mt-3 pb-2" style="color:rgb(151, 147, 147);">
                {{testimony.description}}
              </h3>
              <h3 class="subheading font-weight-medium text-xs-center mt-0 pb-2" style="color:rgb(67, 67, 67);">
                {{testimony.company}}
              </h3>
            </v-flex>
          </v-layout>
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
        alt: 'Lorem ipsum',
        testimonies: [{
          stars: 5,
          logo: '/images/testimonies/home/hotel-aixo.jpg',
          company: 'Hotel Aixo Suites',
          description: '“La atención de Liderlogo ha sido excelente, lo recomiendo.”'
        }, {
          stars: 4.5,
          logo: '/images/testimonies/home/grupo-hivasa.jpg',
          company: 'Grupo Hivasa',
          description: '“Mi experiencia ha sido muy buena en general, tiempo, costos y respuesta.”'
        }, {
          stars: 5,
          logo: '/images/testimonies/home/arlu.jpg',
          company: 'Arlu',
          description: '"Excelente en términos generales...Lo recomiendo ampliamente. Gracias a todo el equipo.”'
        }, {
          stars: 5,
          logo: '/images/testimonies/home/policia-local-dalior.jpg',
          company: 'Policía Dalaior',
          description: '“Nuestra experiencia con Liderlogo ha sido muy satisfactoria y profesional.”'
        }, {
          stars: 5,
          logo: '/images/testimonies/home/fauna-domestica.jpg',
          company: 'Fauna Doméstica',
          description: '“Profesionales al 100%, como siempre!”'
        },
        {
          stars: 4.5,
          logo: '/images/testimonies/home/finanpay.jpg',
          company: 'Finanpay',
          description: '“La atención recibida por parte de Liderlogo ha sido excelente. Hicieron lo suyo, nuestro proyecto, y están muy encima de ello.”'
        }, {
          stars: 5,
          logo: '/images/testimonies/home/rocabike.jpg',
          company: 'Rocabike',
          description: '“Para ser la primera vez que trabajo con Liderlogo y la experiencia ha resultado excelente.”'
        }, {
          stars: 5,
          logo: '/images/testimonies/home/terra-agro.jpg',
          company: 'Terra Agro',
          description: '“Trabajar con Liderlogo ha sido una experiencia muy buena.”'
        }, {
          stars: 5,
          logo: '/images/testimonies/home/rodriago.jpg',
          company: 'Rodriago SRL Transporte Internacional',
          description: '“Son muy dedicados y preocupados en cumplir su trabajo solicitado hasta el final.” '
        }, {
          stars: 5,
          logo: '/images/testimonies/home/bichitos.jpg',
          company: 'Bichitos Kids',
          description: '“Es la segunda vez que me hacen un logo y estoy super contenta.”'
        }]
      }
    },
    mounted () {
    }
  }
</script>

<style>
 .p-testimony-logo{ 
   height: 200px;
 }

 .responsive-video{
   width: 100%;
 }

 @media (min-width: 320px) and (max-width: 980px) {
    .p-testimony-logo{ 
      height: auto;
      display: block;
      margin: auto;
      width: 80%;
    }

    .responsive-video{
      width: 90%;
      margin: auto;
      display: block;
    }

    .mb-xs-3{
      margin-bottom: 20px !important;
    }

    .pr-xs-0{
      padding-right: 0 !important;
    }
  }
</style>
