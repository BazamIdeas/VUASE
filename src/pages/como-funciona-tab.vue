<template>
  <section class="content">
    <!-- <img src="/images/pages/franja_home.svg" alt="" style="position: absolute; width: 90%;"> -->
    <AppHowWorksCarousel :alt="alt" :interval="interval" theme="2" />
    <v-container grid-list-sm text-xs-center>
      <v-layout row wrap align-center>
      </v-layout>
    </v-container>

    <v-container grid-list-md>
      <v-layout row wrap>
        <v-flex xs12 md4>
            <div :class="{ 'active': active === 1 }" class="step-1 title-step body-2  font-weight-bold">
                <span @click="active = 1">1. Elabora un brief</span>
            </div>
        </v-flex>
        <v-flex xs12 md4>
            <div :class="{ 'active': active === 2 }" class="step-2 title-step body-2  font-weight-bold">
                <span @click="active = 2">2. Recibe diseños ilimitados</span>
            </div>
        </v-flex>
        <v-flex xs12 md4>
            <div :class="{ 'active': active === 3 }" class="step-3 title-step body-2  font-weight-bold">
                <span @click="active = 3">3. Recibe tu proyecto</span>
            </div>
        </v-flex>
        <v-flex xs12 v-show="active === 1">
            <v-layout row wrap class="paso paso-1 py-5">
                <v-flex xs12 md6 class="text-xs-center">
                    <img class="my-5" width="80%" src="images/pages/como-hacer-un-logotipo.png" alt="">
                </v-flex>
                <v-flex xs12 md6>
                    <h2 style="font-size: 50px; line-height: 45px; font-weight: 600;">Elabora <br class="hidden-sm-and-down">un brief</h2>
                    <ul class="service-box-list">
                        <li class="my-3 body-2 font-weight-medium">Simple, ágil e intuitivo.</li>
                        <li class="my-3 body-2 font-weight-medium">Te llevará unos pocos minutos.</li>
                        <li class="my-3 body-2 font-weight-medium">Nos permitirá conocer cuales son tus necesidades, objetivos y preferencias. </li>
                    </ul>
                    <v-expansion-panel :value="0" class="expansion-panel step-1">
                        <!-- SHOW ALL -->
                        <v-expansion-panel-content
                        v-for="(item,i) in step1list"
                        :key="i"
                        class="pt-1 pb-1"
                        >
                        <div slot="header" class="font-weight-bold">{{item.question}}</div>
                        <v-card class="response">
                            <v-card-text class="font-weight-medium" v-html="item.response"></v-card-text>
                        </v-card>
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                    <br>
                    <!-- <div class="boton">
                        <v-btn color="#4c55aa" class="ma-0 px-2">
                            <span style="color: #ffffff">Leer más preguntas frecuentes</span>
                        </v-btn>
                    </div> -->
                </v-flex>
            </v-layout>
        </v-flex>
        <v-flex xs12 v-show="active === 2">
            <v-layout row wrap class="paso paso-2 py-5">
                <v-flex xs12 class="text-xs-center mb-5">
                    <h2 style="font-size: 50px; line-height: 45px; font-weight: 600;">Recibe diseños <br  class="hidden-sm-and-down">ilimitados</h2>
                </v-flex>
                <v-flex xs12 md6>
                    <h2>Conceptos</h2>
                    <ul class="service-box-list">
                        <li class="my-3 body-2 font-weight-medium">Originales</li>
                        <li class="my-3 body-2 font-weight-medium">Llamativos</li>
                        <li class="my-3 body-2 font-weight-medium">Exclusivos</li>
                    </ul>
                    <div class="text-xs-center">
                        <img width="80%" src="images/pages/propuestas-de-logo.png" alt="">
                    </div>
                    <v-expansion-panel :value="0" class="expansion-panel step-2">
                        <!-- SHOW ALL -->
                        <v-expansion-panel-content
                        v-for="(item,i) in step2list.slice(0,2)"
                        :key="i"
                        class="pt-1 pb-1"
                        >
                        <div slot="header" class="font-weight-bold">{{item.question}}</div>
                        <v-card class="response">
                            <v-card-text class="font-weight-medium" v-html="item.response"></v-card-text>
                        </v-card>
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                </v-flex>
                <v-flex xs12 md6>
                    <h2>Perfeccionamientos</h2>
                    <ul class="service-box-list">
                        <li class="my-3 body-2 font-weight-medium">Te presentamos líneas de diseño y perfeccionamientos</li>
                        <li class="my-3 body-2 font-weight-medium">Hasta que estés 100% conforme con tu proyecto.</li>
                        <li class="my-3 body-2 font-weight-medium">Devolución de dinero 100% garantizada.</li>
                    </ul>
                    <div class="text-xs-center">
                        <img width="80%" src="images/pages/hacer-un-logotipo.png" alt="">
                    </div>
                    <v-expansion-panel class="expansion-panel step-2">
                        <!-- SHOW ALL -->
                        <v-expansion-panel-content
                        v-for="(item,i) in step2list.slice(2)"
                        :key="i"
                        class="pt-1 pb-1"
                        >
                        <div slot="header" class="font-weight-bold">{{item.question}}</div>
                        <v-card class="response">
                            <v-card-text class="font-weight-medium" v-html="item.response"></v-card-text>
                        </v-card>
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                </v-flex>
                <v-flex xs12 class="text-xs-center">
                    <!-- <div class="boton">
                         <v-btn color="#c3953f" class="ma-0 px-2">
                            <span style="color: #ffffff">Leer más preguntas frecuentes</span>
                        </v-btn> 
                    </div> -->
                </v-flex>
            </v-layout>
        </v-flex>
        <v-flex xs12 v-show="active === 3">
            <v-layout row wrap class="paso paso-3 py-5">
                <v-flex xs12 md6 class="text-xs-center">
                    <img class="my-5" width="80%" src="images/pages/archivos-de-entrega-logo.png" alt="">
                </v-flex>
                <v-flex xs12 md6>
                    <h2 class="mb-4" style="font-size: 50px; line-height: 45px; font-weight: 600;">Recibe tu <br  class="hidden-sm-and-down">proyecto</h2>
                    <p>Descarga tu proyecto listo para ser utilizado en gran variedad de formatos.</p>
                    <ul class="service-box-list">
                        <li class="my-3 body-2 font-weight-medium">Entrega completa editable para imprenta y uso digital.</li>
                        <li class="my-3 body-2 font-weight-medium">Transferencia completa de derechos de autoría.</li>
                        <li class="my-3 body-2 font-weight-medium">Manuales de uso y edición.</li>
                        <li class="my-3 body-2 font-weight-medium">Servicio post venta gratuito.</li>
                    </ul>
                    <v-expansion-panel :value="0" class="expansion-panel step-3">
                        <!-- SHOW ALL -->
                        <v-expansion-panel-content
                        v-for="(item,i) in step3list"
                        :key="i"
                        class="pt-1 pb-1"
                        >
                        <div slot="header" class="font-weight-bold">{{item.question}}</div>
                        <v-card class="response">
                            <v-card-text class="font-weight-medium" v-html="item.response"></v-card-text>
                        </v-card>
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                    <br>
                   <!--  <div class="boton">
                        <v-btn color="#c3953f" class="ma-0 px-2">
                            <span style="color: #ffffff">Leer más preguntas frecuentes</span>
                        </v-btn>
                    </div> -->
                </v-flex>
            </v-layout>
        </v-flex>
        <v-flex xs12 class="px-4 mb-3">
            <h2 class="why-liderlogo" style="font-size: 40px; line-height: 45px; font-weight: 600;">Entonces, <br class="hidden-sm-and-down"> ¿Por qué LiderLogo <br class="hidden-sm-and-down">debe ser mi proveedor?</h2>
        </v-flex>
        <v-flex xs12 md4 class="text-xs-center py-5">
            <img width="80px" src="/icons/logo-unico-original.svg" alt="">
            <h3 style="color: #4c55aa;">Conceptos Originales</h3>
        </v-flex>
        <v-flex xs12 md4 class="text-xs-center py-5">
            <img width="80px" src="/icons/equipo-interidisciplinario.svg" alt="">
            <h3 style="color: #1d8127">Profesionales Expertos</h3>
        </v-flex>
        <v-flex xs12 md4 class="text-xs-center py-5">
            <img width="80px" src="/icons/16-anios.svg" alt="">
            <h3 style="color: #c3953f;">16 años de experiencia</h3>
        </v-flex>
        <v-flex xs12 md4 class="text-xs-center py-5">
            <img width="80px" src="/icons/atencion-personalizada.svg" alt="">
            <h3 style="color: #4c55aa;">Atención Personalizada</h3>
        </v-flex>
        <v-flex xs12 md4 class="text-xs-center py-5">
            <img width="80px" src="/icons/garantia-de-conformidad.svg" alt="">
            <h3 style="color: #1d8127">Garantia 100%</h3>
        </v-flex>
        <v-flex xs12 md4 class="text-xs-center py-5">
            <img width="80px" src="/icons/propuestas-ilimitadas.svg" alt="">
            <h3 style="color: #c3953f;">Conceptos Ilimitados</h3>
        </v-flex>
      </v-layout>
    </v-container>

    <v-container fluid grid-list-md>
      <v-layout row wrap>
        <!-- TESTIMONIOS -->  
        <AppTestimony :alt="alt" width="mt-5 xs12 offset-md1 md10" :list="testimonies" />

        <v-flex xs12 md5 >
          <img alt="Contacto Liderlogo" class="img-contacto" src="/images/pages/muchacho_contacto.jpg" width="100%">
        </v-flex>
          <AppContactForm />
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
        active: 1,
        name: ' COMO FUNCIONA',
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
        }],
        step1list: [{
          question: '¿Que pueden diseñar?',
          response: 'Prácticamente todo lo que necesites, logos, papelería, rótulos, folletos, redes sociales, sitios webs, apps y mucho más!, visita nuestras categorías de servicios.'
        }, {
          question: '¿Cómo completo el brief?',
          response: 'Selecciona el servicio (link a categoría de servicios) que deseas contratar y sigue unos simples pasos.'
        }, {
          question: '¿Puedo completar mi brief por teléfono o email?',
          response: 'Si, ponte en contacto con nuestros asesores en diseño.'
        }],
        step2list: [{
          question: '¿Cómo recibo los conceptos de diseño y perfeccionamientos?',
          response: 'Te los haremos llegar a tu email, via WhatsApp y también puedes acceder a ellos desde nuestro gestor privado de clientes.'
        }, {
          question: '¿Cuanto tiempo demoran en la realización de conceptos y perfeccionamientos?',
          response: 'Lo normal es 24 hs hábiles, requerimientos muy complejos nos pueden llevar solo un poco más.'
        }, {
          question: '¿Quienes desarrollan mi proyecto?',
          response: 'Nuestro equipo de creativos que está conformado por profesionales con experiencia que trabajan con compromiso en cada proyecto.'
        }, {
          question: '¿Qué sucede si no me agradan los conceptos?',
          response: 'Si no estas conforme con los bocetos iniciales puedes solicitar otras líneas de diseño o el reintegro completo de tu dinero.'
        }],
        step3list: [{
          question: '¿Cómo recibo mi proyecto?',
          response: 'Lo recibes en tu email y tambien lo puedes descargar desde nuestro apartado privado de cliente. Los desarrollos de sitio web se entregan publicados, funcionando con su manual de autogestión.'
        }, {
          question: '¿Que archivos necesito?',
          response: 'En proyectos necesitas archivos para uso digital, utilizarás archivos JPG, GIF o PNG en colores RGB. Si quieres imprimir tu diseño, los que debes usar son los archivos en PDF, Illustrator o EPS en formato de colores CMYK. En proyectos de sitios webs necesitarás acceso al sector de administración y manuales de autogestión.'
        }, {
          question: '¿Donde se guardan mi proyecto?',
          response: 'Además de entregarlo con sus manuales de uso guardamos en nuestro sector privado de clientes una copia de tu trabajo para que puedas acceder a él cuando necesites.'
        }, {
          question: '¿Puedo solicitarles nuevos proyectos de diseño gráfico, publicitario y web?',
          response: 'Si, el mismo equipo de trabajo atenderá todos las necesidades de diseño que se te presenten en un futuro, independientemente de ello todas nuestras entregas de proyectos te brindan total autonomía e independencia para editar o crear los diseños que necesites.'
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
.title-step span{
    cursor: pointer;
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none;
    font-size: 18px;
    text-align: center;
}

.active.title-step span{
    border-bottom: 2px solid;
}

.active.title-step.step-1 {
    color: #4c55aa;
}
.active.title-step.step-2 {
    color: #1d8127;
}
.active.title-step.step-3 {
    color: #c3953f;
}

ul.service-box-list {
    padding-left: 17px;
    list-style-image: url('/images/icons/check.png');
}


  @media (min-width: 320px) and (max-width: 480px) {
    .paso .boton {
        text-align: center;
    }      
    .title-step {
        font-size: 25px;
    }

    .paso h2 {
        font-size: 30px !important;
    }

    h2.why-liderlogo {
        font-size: 30px !important;
        line-height: 31px !important;
        text-align: center;
    }
  }
  @media (min-width: 481px) and (max-width: 639px) {
      .paso .boton {
          text-align: center;
      }
  }
  @media (min-width: 640px) and (max-width: 1023px) {

  }

</style>

<style scoped>
  .expansion-panel {
      box-shadow: unset;
  }

.step-1.expansion-panel .v-expansion-panel__container, .step-1.v-expansion-panel__container:first-child {
    border-top: 2px solid rgba(76, 85, 170, .72) !important;
}

.step-2.expansion-panel .v-expansion-panel__container, .step-2.v-expansion-panel__container:first-child {
    border-top: 2px solid rgba(29, 129, 39, .72) !important;
}

.step-3.expansion-panel .v-expansion-panel__container, .step-3.v-expansion-panel__container:first-child {
    border-top: 2px solid rgba(195, 149, 63, .72) !important;
}

.expansion-panel .v-icon {
    font-size: 35px;
}

.theme--light.v-expansion-panel .v-expansion-panel__container, .v-expansion-panel .response{
    background-color: transparent;
}
</style>