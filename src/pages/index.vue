<template>
  <section class="content">
    <!-- <img src="/images/pages/franja_home.svg" alt="" style="position: absolute; width: 90%;"> -->
    <AppHomeCarousel :alt="alt" :interval="interval" theme="2" />
    <v-container grid-list-sm text-xs-center>
      <v-layout row wrap align-center>
      </v-layout>
    </v-container>
    
    <!-- PORTFAFOLIO -->
    <h2 class="mb-5 text-xs-center display-1 font-weight-bold xs-headline" >
      LOGOS, PAPELERIA, WEBS, APPS y ¡MUCHO MAS!
    </h2>

    <AppExamplesSlider :alt="alt" :examples="sliderExamples" hovered="true" shadow="true" puntos="true" item-width="350" item-height="350"  class="mb-5 pb-5" />

    <!-- QUE NECESITAS -->
    <AppHeading class="mb-3" number="2" size="display-1" title="¿QUE NECESITAS CREAR?" subtitle="Disfruta del diseño perfecto cualquiera sea tu necesidad. Potencia hoy tu negocio" />
    <AppServicesGrid color="#F29F01" class="mb-5"/>
    
    <AppHomeCreativeProccess title="¿CÓMO FUNCIONA?"/>

    <v-parallax src="/images/pages/home-5.svg" class="parallax-opacity">
        <v-layout row wrap align-center>
          <v-flex d-flex xs12 offset-md2 md8>
            <v-layout align-center justify-center row wrap>
              <v-flex xs12 md4 class="ll-op">
                <v-card flat class="px-4 my-4 text-xs-center" color="transparent">
                  <img src="/icons/logo-unico-original.svg" class="icon-home" alt="Diseños profesionales a la medida">
                  <p class="subheading font-weight-medium text-xs-center dark-blue--text">
                    Diseños profesionales a la medida
                  </p>
                </v-card>
              </v-flex>
              <v-flex xs12 md4 class="ll-op">
                <v-card flat class="px-4 my-4 ll-op text-xs-center" color="transparent">
                  <img src="/icons/atencion-personalizada-2.svg" class="icon-home" alt="Atención profesional personalizada">
                  <p class="subheading font-weight-medium text-xs-center dark-blue--text">
                    Atención profesional personalizada
                  </p>
                </v-card>
              </v-flex>
              <v-flex xs12 md4 class="ll-op"> 
                <v-card flat class="px-4 my-4 text-xs-center" color="transparent">
                  <img src="/icons/un-dia-para-el-otro.svg" class="icon-home" alt="Diseños de un dia para otro">
                  <p class="subheading font-weight-medium text-xs-center dark-blue--text">
                    Diseños de un dia para otro
                  </p>
                </v-card>
              </v-flex>
              <v-flex xs12 md4 class="ll-op">
                <v-card flat class="px-4 my-4 text-xs-center" color="transparent">
                  <img src="/icons/propuestas-ilimitadas.svg" class="icon-home" alt="Propuestas ilimitadas">
                  <p class="subheading font-weight-medium text-xs-center dark-blue--text">
                    Propuestas ilimitadas
                  </p>
                </v-card>
              </v-flex>
              <v-flex xs12 md4 class="ll-op">
                <v-card flat class="px-4 my-4 text-xs-center" color="transparent">
                  <img src="/icons/garantia-de-conformidad.svg" class="icon-home" alt="Garantía de conformidad">
                  <p class="subheading font-weight-medium text-xs-center dark-blue--text">
                    Garantía de conformidad
                  </p>
                </v-card>
              </v-flex>
              
              <v-flex xs12 md4 class="ll-op">
                <v-card flat class="px-4 my-4 text-xs-center" color="transparent">
                  <img src="/icons/15-anios.svg" class="icon-home" alt="Trayectoria Internacional">
                  <p class="subheading font-weight-medium text-xs-center dark-blue--text">
                    Trayectoria Internacional
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
          <img :alt="alt" src="/images/pages/profesional_services.png" style="width: 75%;
    margin: auto;
    display: block;">
        </v-flex>
        <v-flex xs12 md4 class="mt-5 pt-5 mt-xs-0 pt-xs-0 text-xs-center pluma-background" style="position: relative"> 
          <div>
            <h2 class="font-weight-bold mb-4 mt-5  text-uppercase text-xs-center xs-text-size-30" style="font-size: 35px; line-height: 38px; color: #434343;">SERVICIOS A PROFESIONALES</h2>
            <p class="text-xs-center mb-5 font-weight-medum">
              Amplia tu portfolio de servicios rapidamente. Ponemos a disposicion de tu empresa todo nuestro conocimiento y servicios con marca blanca. Con nuestra atencion especial para agencias y revendedores gana mercado y cautiva clientes desde hoy mismo.
            </p>
            <v-btn to="/servicios-profesionales" flat outline class="px-4" style="background-color: #703383 !important; border-color: #703383; color: white;">Quiero conocer mas</v-btn>
          </div>
        </v-flex>

        <!-- TESTIMONIOS -->  
        <AppTestimony :alt="alt" width="mt-5 xs12 offset-md1 md10" :list="testimonies" />

        <!-- <v-flex xs12 offset-md1 md4 class="mt-5 pt-5 text-xs-center" style="position: relative">
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
        </v-flex> -->

        <!-- <v-flex xs12 md7>
          <img src="/images/pages/profesional_services.png" :alt="alt" width="100%">
        </v-flex> -->

        <v-flex xs12 md5 >
          <img alt="Contacto Liderlogo" class="img-contacto" src="/images/pages/muchacho_contacto.png" width="100%">
        </v-flex>
        <v-flex xs12 md6 class="mt-5 xs-mt-0">
          <h2 class="display-2 font-weight-bold mb-3 text-uppercase text-xs-center" style=" color: #434343;">¿TIENES ALGUNA DUDA?</h2>
          <h4 class="font-weight-medium mb-4 text-uppercase text-xs-center theme--light v-label">Consulta GRATIS a nuestros expertos:</h4>
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
        name: 'INICIO',
        interval: 8000,
        alt: 'Diseño de logos e imagen corporativa para empresas',
        description: 'Diseño de logos para empresas y profesionales, papelería, imagen corporativa y páginas web. Diseños ilimitados y Garantía 100%. ¡Haz crecer tu negocio!',
        title: 'Diseño de logos e imagen corporativa para empresas',
        testimonies: [{
          stars: 5,
          logo: '/images/testimonies/home/hotel-aixo.jpg',
          company: 'Hotel Aixo Suites',
          description: '“La atención de Liderlogo ha sido excelente, lo recomiendo.”'
        }, {
          stars: 4,
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
          stars: 4,
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
    computed: {
      sliderExamples () { return this.$store.state.portfolios.indexExamples }
    },
    mounted () {
    }
  }
</script>

<style>
  .parallax-opacity .v-parallax__image-container img {
    transform: translate(-62%, 27px) !important;
  }


  @media (min-width: 320px) and (max-width: 980px) {
    .xs-no-border{
      border:none !important;
    }
  }

  @media (min-width: 320px) and (max-width: 640px) {
    .pt-xs-0 {
      padding-top: 0 !important;
    }

    .xs-mt-0{
      margin-top:0 !important;
    }

    .xs-height-auto{
      height: auto !important;
    }

    .xs-px-0{
      padding-left: 0 !important;
      padding-right: 0 !important;
    }
    
    .xs-text-size-30{
      font-size: 30px !important;
    }
  }
</style>

<style scoped>
  .service-icon-box h2{
    line-height: 21px;
  }

  .icon-home{
    max-width: 100px;
  }

  .red-btn > .v-btn__content {
    font-weight: 700;
  }

  .parallax-opacity {
    height: 775px !important;
  }

  @media (min-width: 320px) and (max-width: 980px) {
    .parallax-opacity { height: 1300px !important; }
  }


/*   .parallax-opacity:before {
    content: "";
    width: 100%;
    height: 100%;
    background-color: rgba(249, 249, 249, 0.6);
    position: absolute;
    z-index: 2;
  } */

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