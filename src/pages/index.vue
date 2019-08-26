<template>
  <section class="content">
    <!-- <img src="/images/pages/franja_home.svg" alt="" style="position: absolute; width: 90%;"> -->
    <AppHomeCarousel :alt="alt" :interval="3000" theme="2" />
   
    <!-- PORTFAFOLIO -->
    <h2 class="mb-5 text-xs-center display-1 font-weight-bold xs-headline" >
      ¡Logos, Papelería, Webs, Apps y mucho más!
    </h2>

    <AppExamplesSlider  :hover-info="true" :alt="alt" :examples="sliderExamples" hovered="true" shadow="true" puntos="true" item-width="320" item-height="320"  class="mb-5 pb-5" />

    <!-- QUE NECESITAS -->
    <AppHeading class="mb-3" number="2" size="display-1" title="¿Qué necesitas crear?" subtitle="Disfruta del diseño perfecto cualquiera sea tu necesidad. Potencia hoy tu negocio." />
    <AppServicesGrid color="#F29F01" class="mb-4 pt-0"/>
    
    <!-- <AppHomeCreativeProccess title="¿Cómo Funciona?"/> -->
    <v-parallax src="/images/pages/home-5.svg" class="parallax-opacity">
        <v-layout row wrap align-center>
          <AppHeading class="mb-0" number="2" size="display-1" title="¿Qué te ofrecemos?"  />
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
                    Diseños de un día para otro
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
                  <img src="/icons/16-anios.svg" class="icon-home" alt="Experiencia & Especialización">
                  <p class="subheading font-weight-medium text-xs-center dark-blue--text">
                    Experiencia & Especialización
                  </p>
                </v-card>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
    </v-parallax>
    <v-container fluid grid-list-md>
      <v-layout row wrap>
        <!-- TESTIMONIOS -->  
        <AppTestimony :alt="alt" width="mt-5 mb-5 xs12 offset-md1 md10" :list="testimonies" />
        <v-flex xs12 md7>
          <h2 class="font-weight-bold mb-3 text-xs-center xs-text-size-30 hidden-md-and-up" style="font-size: 35px; line-height: 38px; color: #434343; ">Servicios a agencias</h2>
                   <div v-lazy-container="{ selector: 'img', loading: 'default.jpeg'}">       
         <img :alt="alt" data-src="/images/pages/profesional_services.jpg" style="width: 80%; margin: auto; display: block;">
                </div>
        </v-flex>
        <v-flex xs12 md4 class="mt-5 pt-5 mt-xs-0 pt-xs-0 text-xs-center pluma-background" style="position: relative"> 
          <div>
            <h2 class="font-weight-bold mb-4 mt-5 text-xs-center xs-text-size-30 hidden-md-and-down" style="font-size: 35px; line-height: 38px; color: #434343; ">Servicios a agencias</h2>
            <p class="text-xs-center mb-5 font-weight-medum">
              Amplia tu portfolio de servicios rápidamente. Ponemos a disposición de tu empresa todo nuestro conocimiento y servicios con marca blanca. Con nuestra atención especial para agencias y revendedores gana mercado y cautiva clientes desde hoy mismo. </p>
            <v-btn to="/servicios-profesionales" flat outline class="px-4" style="background-color: #703383 !important; border-color: #703383; color: white; ">Quiero conocer más</v-btn>
          </div>
        </v-flex>

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
      </v-layout>
      <v-layout row wrap align-end>
        <v-flex xs12 md5 mt-5>
                  <div v-lazy-container="{ selector: 'img', loading: 'default.jpeg'}">          
          <img alt="Contacto Liderlogo" class="img-contacto" data-src="/images/pages/muchacho_contacto.jpg" width="100%">
                </div>
        </v-flex>
        <v-flex xs12 md6 class="mt-5 xs-mt-0">
          <h2 class="display-2 font-weight-bold mb-3 text-xs-center" style=" color: #434343;">¿Tienes alguna duda?</h2>
          <h4 class="font-weight-medium mb-4 text-xs-center theme--light v-label">Consulta GRATIS a nuestros expertos:</h4>
          <AppContactForm />
        </v-flex>
      </v-layout>
      <AppHeading class="mb-3" number="3" size="display-1" title="En los medios"  />
      <AppExamplesSlider  :hover-info="false" :alt="alt" :examples="medios" hovered="false" shadow="false" puntos="false" item-width="120" item-height="120"  class="mb-0 pb-2" />
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
          stars: 5,
          logo: '/images/testimonies/home/fauna-domestica.jpg',
          company: 'Fauna Doméstica',
          description: '“Profesionales al 100%, como siempre!”'
        }, {
          stars: 4,
          logo: '/images/testimonies/home/finanpay.jpg',
          company: 'Finanpay',
          description: '“La atención recibida por parte de Liderlogo ha sido excelente. Hicieron lo suyo, nuestro proyecto, y están muy encima de ello.”'
        }, {
          stars: 5,
          logo: '/images/testimonies/folletos/la-julia-testimonio.jpg',
          company: 'La Julia',
          description: '“Gracias al equipo por la realización del flyer, el resultado nos encanta! Gran trabajo.”'
        }, {
          stars: 5,
          logo: '/images/testimonies/perfil-redes/nueva-europa.jpg',
          company: 'Nueva Europa',
          description: '“Trato muy cercano, fácil y rápido.”'
        }, {
          stars: 5,
          logo: '/images/testimonies/logo/sanidae.jpg',
          company: 'SANIDAE',
          description: '“En nombre de nuestro equipo queremos agradeceros vuestro magnífico trabajo.Si seguís así seguro que se os augura un gran futuro profesional. Muy agradecido.”'
        }, {
          stars: 5,
          logo: '/images/testimonies/logo/hispanoamericana.jpg',
          company: 'Hispanamericana',
          description: '“Nuestra experiencia fue muy buena, un excelente trato y atención personalizada.”'
        }, {
          stars: 5,
          logo: '/images/testimonies/logo/malarrasa.jpg',
          company: 'Malarrassa',
          description: '“Hemos repetido con su empresa porque nos han presentados trabajos que realmente representan a las marcas y lo hacen de forma rápida, por lo que estamos muy contentos.”'
        }, {
          stars: 5,
          logo: '/images/testimonies/logo/wellcan.jpg',
          company: 'Wellcan',
          description: '“Estoy muy contenta por la libertar y seguridad que da su trabajo por no tener límite en los bocetos ni en el tiempo para el desarrollo del diseño. Elegimos algo mejor de lo que buscábamos como idea previa.”'
        }, {
          stars: 5,
          logo: '/images/testimonies/generales/geoit-1.jpg',
          company: 'Geoit',
          description: '“He quedado muy satisfecho con su trabajo, realmente diseñaron mi rótulo tal cual lo pedí y en los tiempos acordados; gracias por su profesionalismo y paciencia.”'
        }, {
          stars: 5,
          logo: '/images/testimonies/rotulos/selpak - rotulo etiqueta.jpg',
          company: 'Selpak',
          description: 'Tengo el agrado de decir que es una empresa seria y responsable. Me gustó mucho el trabajo (diseño) y la amabilidad de todos sus departamentos que me tocó dialogar. Estoy muy convencido de que la empresa se interesa para poder entregar un buen servicio. Aprovecho de felicitar a sus trabajadores por la dedicación a la empresa.”'
        }],
        medios: [
          {img: '/images/medios/bolsamania.jpg'},
          {img: '/images/medios/capital.jpg'},
          {img: '/images/medios/eleconomista.jpg'},
          {img: '/images/medios/europapress.jpg'},
          {img: '/images/medios/finanzas.jpg'},
          {img: '/images/medios/intereconomia.jpg'}
        ]
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
    transform: translate(-62%, 130px) !important;
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