<template>
  <section>
    <AppProServicesCarousel />
    <v-container fluid grid-list-md>
      <v-layout row wrap>
        <v-flex xs12 offset-md1 md10 class="mb-5">
          <v-layout row wrap>
            <v-flex xs12 md6 class="pl-5 py-5 hidden-sm-only hidden-xs-only" style="background-image: url(/icons/puntos_de_fondo.svg); background-position: -193px 160px; background-size: cover;">
              <img alt="GESTIONAMOS TUS PROYECTOS" src="/images/icons/pro_services_1.png" class="ml-5 mt-5">
              <AppHeading number="2" title="GESTIONAMOS TUS PROYECTOS" size="display-1 xs-headline" align="left" margin="pl-5 mb-5"/>
              <p class="pl-5 text-xs-justify" style="font-weight: 500;">
                Nuestro equipo elabora y te acompaña en cada paso de tus proyectos hasta tu entera conformidad y la de tus clientes. Aprovecha nuestra creatividad, talento, experiencia y herramientas. Potencia tu negocio.
              </p>
            </v-flex>
            <v-flex xs12 md6 class="hidden-md-and-up" style="background-image: url(/icons/puntos_de_fondo.svg); background-position: -193px 160px; background-size: cover;">
              <img  alt="GESTIONAMOS TUS PROYECTOS" src="/images/icons/pro_services_1.png" class="ml-5 mt-5">
              <AppHeading number="2" title="GESTIONAMOS TUS PROYECTOS" size="display-1 xs-headline" align="left" margin="pl-5 mb-5"/>
              <p class="pl-5 text-xs-justify" style="font-weight: 500;">
                Nuestro equipo elabora y te acompaña en cada paso de tus proyectos hasta tu entera conformidad y la de tus clientes. Aprovecha nuestra creatividad, talento, experiencia y herramientas. Potencia tu negocio.
              </p>
            </v-flex>
            <v-flex xs12 md6>
              <img alt="GESTIONAMOS TUS PROYECTOS" src="/images/pages/objects_pro_services.png" width="100%">
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex xs12 offset-md1 md10 class="mb-5">
          <v-layout row wrap>
            <v-flex xs12 md6 class="hidden-md-and-up" style="background-image: url(/icons/puntos_de_fondo.svg); background-position: -193px 160px; background-size: cover;">
              <img alt="PRIVACIDAD GARANTIZADA" src="/images/icons/pro_services_2.png" class="ml-5 mt-5">
              <AppHeading number="2" title="PRIVACIDAD GARANTIZADA" size="display-1 xs-headline" align="left" margin="pl-5 mb-5"/>
              <p class="pl-5 text-xs-justify" style="font-weight: 500;">
                Tus proyectos trabajado con marca blanca para que los presentes como propios. Disfruta de todos nuestros servicios y ponlos al servicio de tus clientes. Aplica el margen que tu decidas y gana siempre
              </p>
            </v-flex>
            <v-flex xs12 md6>
              <img alt="PRIVACIDAD GARANTIZADA" src="/images/pages/private_pro_services.jpg" width="100%">
            </v-flex>
            <v-flex xs12 md6 class="pl-5 py-5 text-xs-right  hidden-sm-only hidden-xs-only" style="background-image: url(/icons/puntos_de_fondo.svg); background-position: -193px 160px; background-size: cover;">
              <img alt="PRIVACIDAD GARANTIZADA" src="/images/icons/pro_services_2.png" class="ml-5 mt-5">
              <AppHeading number="2" title="PRIVACIDAD GARANTIZADA" size="display-1 xs-headline" align="right" margin="pl-5 mb-5"/>
              <p class="pl-5 text-xs-justify" style="font-weight: 500;">
                Tus proyectos trabajado con marca blanca para que los presentes como propios. Disfruta de todos nuestros servicios y ponlos al servicio de tus clientes. Aplica el margen que tu decidas y gana siempre
              </p>
            </v-flex>

          </v-layout>
        </v-flex>
        <v-flex xs12 offset-md1 md10 class="mb-5 mb-xs-0">
          <v-layout row wrap>
            <v-flex xs12 md6 class="pl-5 pt-5 hidden-sm-only hidden-xs-only" >
              <img alt="RECOMENDADA POR PERFECCIONISTAS" src="/images/icons/pro_services_3.png" class="ml-5 mt-5">
              <AppHeading number="2" title="RECOMENDADA POR PERFECCIONISTAS" size="display-1 xs-headline" align="left" margin="pl-5"/>
            </v-flex>
            <v-flex xs12 md6 class="hidden-md-and-up" >
              <img alt="RECOMENDADA POR PERFECCIONISTAS" src="/images/icons/pro_services_3.png" class="ml-5 mt-5">
              <AppHeading number="2" title="RECOMENDADA POR PERFECCIONISTAS" size="display-1 xs-headline" align="left" margin="pl-5"/>
            </v-flex>
            <v-flex xs12 offset-md1 md10>
              <v-carousel hide-delimiters class="profesional-services-slider">
                <v-carousel-item>
                  <v-container fluid grid-list-md>
                    <v-layout row wrap>
                      <v-flex xs12 md6 class="px-5" style="display: flex; flex-flow: column;justify-content: center;">
                        <h2 style="color: #f58220" class="mb-2"> LIDERLOGO ES MI MEJOR OPCIÓN... </h2>
                        <p>
                          Cuando necesitamos completar proyectos grandes y no contamos con mucho tiempo.
                        </p>
                      </v-flex>
                      <v-flex xs12 md6>
                        <img alt="RECOMENDADA POR PERFECCIONISTAS" width="100%" src="/images/pages/web_jet_computer_pro_services.png" >
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-carousel-item>
              </v-carousel>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex xs12 offset-md2 md8 class="my-5 text-xs-center hidden-sm-only hidden-xs-only">
          <AppHeading number="2" title="¿Listo para hacer crecer tu negocio? " size="display-1" align="center" margin="pl-5 mb-2"/>
          <v-btn to="/contacto" :large="true" flat outline class="px-2" style="background-color: #d00606 !important; border-color: #B80000; color: white;">Solicita ahora una llamada</v-btn>
        </v-flex>
        <v-flex xs12 offset-md2 md8 class="mb-5 text-xs-center  hidden-md-and-up">
          <AppHeading number="2" title="¿Listo para hacer crecer tu negocio? " size="display-1" align="center" margin=" mb-2"/>
          <v-btn to="/contacto" :large="true" flat outline class="px-2" style="background-color: #d00606 !important; border-color: #B80000; color: white;">Solicita ahora una llamada</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </section>
</template>

<script>
  export default {
    head () {
      return {
        titleTemplate: this.title + ' | %s',
        meta: [
          { property: 'og:title', content: this.title },
          { property: 'og:description', content: this.description },
          { hid: 'description', name: 'description', content: this.description }
        ]
      }
    },
    data () {
      return {
        items: [
          { text: 'Logo a medida', field: 'logo-a-medida' },
          { text: 'Folletos', field: 'folleto-y-publicidades' }
        ],
        list: [
          'dasdasdadasdasdadadsasdad'
        ],
        alt: 'subcontratación de diseño gráfico',
        description: 'Servicio de subcontratación de diseño gráfico y web. Ahorre tiempo y gane dinero confiando enLiderlogo. Garantia de conformidad y confidencialidad.',
        title: 'Servicio de subcontratación de diseño gráfico'
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

  .profesional-services-slider{
    margin-top: 0px;
  }

  @media (max-width: 600px) {
    .v-carousel.profesional-services-slider {
      height: 560px;
    }
  }
</style>