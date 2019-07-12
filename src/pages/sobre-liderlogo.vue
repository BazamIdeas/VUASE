<template>
  <section>
    <AppAboutUsCarousel />
    <v-container fluid grid-list-md class="mt-5">
      <v-layout row wrap>
        <v-flex xs12 offset-md1 md10 class="mb-5">
          <v-layout row wrap>
            <v-flex xs12 md6>
              <!--<h1 class="font-weight-bold mb-5 text-uppercase" style="font-size: 30px; color: #004B7B">QUIÉNES SOMOS</h1>-->
              <AppHeading number="2" title="Quienes Somos" size="display-1" align="left" color="blue-medium"/>
              <p class="body-2" style="margin-top: 10px">
                Somos una agencia referente de diseño que desde hace 16 años crea y brinda servicios de  diseño gráfico, diseño publicitario y desarrollos webs de vanguardia de alta calidad a precios accesibles a empresas de nueva formación y a aquellas que desean crecer de diversas envergaduras y actividades.              </p>
              <p class="body-2" >
                Hemos desarrollado una metodología ágil de tres simples y eficientes fases de desarrollo de proyectos y contamos con un equipo de profesionales expertos que trabajan con pasión y compromiso.
              </p>
              <p class="body-2" >
                Nuestros clientes siempre cuentan con atención profesional personalizada que resuelve sus necesidades específicas con soluciones de calidad y hasta su entera conformidad.              </p>
              <p class="body-2" >
                Brindamos respuesta presentando creaciones y perfeccionamientos en 24 hs, aplicamos conocimiento y pragmatismo para el rápido y eficaz desarrollo de cada requerimiento de servicios.              
              </p>
              <p class="body-2" >
                Nuestra empresa aplica procedimientos y normas de calidad que aseguran cada proceso y los servicios de la misma, en caso de no satisfacer las expectativas del cliente reintegramos su dinero sin hacerle preguntas.             
               </p>
               <p class="body-2" >
                  Desarrollamos e invertimos en tecnología para brindarle a nuestros clientes nuestros servicios desde comodidad donde se encuentran ahorrando costes y ganando tiempo al contratar nuestros servicios.               </p>
            </v-flex>
            <v-flex xs12 md6>
              <img  alt="Sobre Nosotros" src="/images/pages/dino_about_us.jpg" width="100%">
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex xs12 offset-md2 md8 class="mt-5 text-xs-center">
          <!--<h1 class="display-1 font-weight-bold text-xs-center mb-4" style="color: #303032;">NUESTROS SERVICIOS</h1>-->
          <AppHeading number="2" title="Nuestros Servicios" size="display-1"/>
        </v-flex>
      </v-layout>
    </v-container>
    <AppServicesGrid color="#0088c6"/>
  </section>
</template>

<script>
  export default {
    data () {
      return {
        alt: 'Liderlogo',
        description: 'Somos una agencia referente de diseño que trabaja incansablemente, apoyando a pequeñas y medianas empresas, creando su identidad.',
        title: 'Agencia de diseño grafico en españa'
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