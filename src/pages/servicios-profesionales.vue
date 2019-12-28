<template >

  <section class="profesional-services mt-1">
    <div class="hidden-divider hidden-sm-only hidden-xs-only"></div>
    <AppProServicesCarousel />
    <v-container fluid grid-list-md>
      <v-layout row wrap>
        <v-flex xs12 offset-md1 md10 class="mb-1">
          <v-layout row wrap>
            <v-flex xs12 md6 class="pl-5  hidden-sm-only hidden-xs-only" style="background-image: url(/icons/puntos_de_fondo.svg); background-position: -193px 160px; background-size: cover;">
              <img alt="GESTIONAMOS TUS PROYECTOS" src="/images/icons/pro_services_1.png" class="ml-5">
              <AppHeading number="2" title="Gestionamos tus proyectos para que tengas tiempo para ti" size="display-1 xs-headline" align="left" margin="pl-5 mb-2"/>
              <p class="pl-5 body-2">
                El equipo de profesionales de Líderlogo elaboramos y acompañamos paso a paso tus proyectos hasta tu total satisfacción y la de tus clientes. Te ayudamos para que no tengas que pensar ni crear. Déjanos la creatividad, el talento, la experiencia y las herramientas a nosotros. Haz crecer HOY tu negocio. Mañana es tarde.
              </p>
            </v-flex>
            <v-flex
              xs12
              md6
              class="hidden-md-and-up"
              style="background-image: url(/icons/puntos_de_fondo.svg); background-position: -150px 84px; background-size: cover;"
            >
              <img
                alt="GESTIONAMOS TUS PROYECTOS"
                src="/images/icons/pro_services_1.png"
                class="ml-5 mt-5"
              />
              <AppHeading
                number="2"
                title="Gestionamos tus proyectos para que tengas tiempo para ti"
                size="display-1 xs-headline"
                align="left"
                margin="pl-5 mb-2"
              />
              <p
                class="pl-5 body-2">
                El equipo de profesionales de Líderlogo elaboramos y acompañamos paso a paso tus proyectos hasta tu total satisfacción y la de tus clientes. Te ayudamos para que no tengas que pensar ni crear. Déjanos la creatividad, el talento, la experiencia y las herramientas a nosotros. Haz crecer HOY tu negocio. Mañana es tarde.
              </p>
            </v-flex>
            <v-flex xs12 md6>
              <div class="custom-alignment-img">
                <img
                  alt="GESTIONAMOS TUS PROYECTOS"
                  src="/images/pages/objects_pro_services.png"
                  width="100%"
                />
              </div>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex xs12 offset-md2 md8 class="mb-5 mt-5">
          <v-layout row wrap>
            <v-flex xs12 md6 class="hidden-md-and-up" style="background-image: url(/icons/puntos_de_fondo.svg); background-position: -193px 160px; background-size: cover;">
              <img alt="Privacidad Garantizada" src="/images/icons/pro_services_2.png" class="ml-5 mt-2">
              <AppHeading number="2" title="Te garantizamos total privacidad" size="display-1 xs-headline" align="left" margin="pl-5 mb-2"/>
              <p class="pl-5 body-2">
                ¿Quieres que en Líderlogo trabajemos para ti con marca blanca? Es la forma más sencilla y profesional para que presentes los proyectos a tus clientes como si fueran tuyos propios.<br/> Disfruta de todos nuestros servicios y ponlos al servicio de tus clientes, como si fueran tuyos aplicando el margen que tu decidas, no nosotros. Con Líderlogo ganas siempre.
              </p>
            </v-flex>
            <v-flex xs12 md6>
              <img
                alt="Privacidad Garantizada"
                src="/images/pages/private_pro_services.jpg"
                width="100%"
              />
            </v-flex>
            <v-flex xs12 md6 class="pl-5 py-5 text-xs-right  hidden-sm-only hidden-xs-only" style="background-image: url(/icons/puntos_de_fondo.svg); background-position: -193px 160px; background-size: cover;">
              <img alt="Privacidad Garantizada" src="/images/icons/pro_services_2.png" class="ml-5 mt-2">
              <AppHeading number="2" title="Te garantizamos total privacidad" size="display-1 xs-headline" align="right" margin="pl-5 mb-2"/>
              <p class="pl-5 body-2" >
                ¿Quieres que en Líderlogo trabajemos para ti con marca blanca? Es la forma más sencilla y profesional para que presentes los proyectos a tus clientes como si fueran tuyos propios.<br/> Disfruta de todos nuestros servicios y ponlos al servicio de tus clientes, como si fueran tuyos aplicando el margen que tu decidas, no nosotros. Con Líderlogo ganas siempre.
              </p>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex xs12 offset-md1 md10 class="mb-2 mb-xs-0">
          <v-layout row wrap>
            <v-flex xs12 md6 class="pl-5  hidden-sm-only hidden-xs-only" >
              <img alt="Recomendada por perfeccionistas" src="/images/icons/pro_services_3.png" class="ml-5 mt-5">
              <AppHeading number="2" title="Recomendada por profesionales exigentes" size="display-1 xs-headline" align="left" margin="pl-5"/>
            </v-flex>
            <v-flex xs12 md6 class="hidden-md-and-up" >
              <img alt="Recomendada por perfeccionistas" src="/images/icons/pro_services_3.png" class="ml-5 mt-5">
              <AppHeading number="2" title="Recomendada por profesionales exigentes" size="display-1 xs-headline" align="left" margin="pl-5"/>
            </v-flex>
            <v-flex xs12 offset-md1 md10>
              <v-carousel hide-delimiters class="profesional-services-slider">
                <v-carousel-item>
                  <v-container fluid grid-list-md>
                    <v-layout row wrap>
                      <v-flex
                        xs12
                        md6
                        class="px-5"
                        style="display: flex; flex-flow: column;justify-content: center;"
                      >
                        <h2 style="color: #f58220" class="mb-2">LiderLogo es mi mejor opción...</h2>
                        <p>Cuando necesitamos completar proyectos grandes y no contamos con mucho tiempo.</p>
                      </v-flex>
                      <v-flex xs12 md6>
                        <img
                          alt="Recomendada por perfeccionistas"
                          width="100%"
                          src="/images/pages/web_jet_computer_pro_services.png"
                        />
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-carousel-item>
              </v-carousel>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex xs12 offset-md2 md8 class="my-5 text-xs-center hidden-sm-only hidden-xs-only">
          <AppHeading number="2" title="¿Estás preparado para hacer crecer tu negocio ahora?" subtitle="¡Nosotros te ayudamos a conseguirlo!" size="display-1" align="center" margin="pl-5 mb-2"/>
          <v-btn to="/contacto" :large="true" flat outline class="px-2" style="background-color: #d00606 !important; border-color: #B80000; color: white;">¡TE LLAMAMOS!</v-btn>
        </v-flex>
        <v-flex xs12 offset-md2 md8 class="mb-2 text-xs-center  hidden-md-and-up">
          <AppHeading number="2" title="¿Estás preparado para hacer crecer tu negocio ahora?" subtitle="¡Nosotros te ayudamos a conseguirlo!" size="display-1" align="center" margin=" mb-2"/>
          <v-btn to="/contacto" :large="true" flat outline class="px-2" style="background-color: #d00606 !important; border-color: #B80000; color: white;">¡TE LLAMAMOS!</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </section>
</template>

<script>
export default {
  head() {
    return {
      titleTemplate: this.title + " | %s",
      meta: [
        { property: "og:title", content: this.title },
        { property: "og:description", content: this.description },
        { hid: "description", name: "description", content: this.description }
      ]
    };
  },
  data() {
    return {
      items: [
        { text: "Logo a medida", field: "logo-a-medida" },
        { text: "Folletos", field: "folleto-y-publicidades" }
      ],
      list: ["dasdasdadasdasdadadsasdad"],
      alt: "subcontratación de diseño gráfico",
      description:
        "Servicio de subcontratación de diseño gráfico y web. Ahorre tiempo y gane dinero confiando enLiderlogo. Garantia de conformidad y confidencialidad.",
      title: "Servicio de subcontratación de diseño gráfico"
    };
  }
};
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
  font-weight: 700;
}

.price {
  font-size: 40px;
  font-weight: 700;
  color: #87c438;
}

.service-box-list ul,
.service-box-list ol {
  padding-left: 17px;
  margin-bottom: 20px;
  list-style-image: url("/images/icons/check-green.png");
}

.service-box-list ul li {
  font-weight: 600;
  color: #676767;
  margin-top: 11px;
}

.profesional-services-slider {
  margin-top: 0px;
}
.profesional-services-slider.v-window__container {
  min-height: 500px;
  height: 500px;
}

@media (max-width: 600px) {
  .v-carousel.profesional-services-slider {
    height: 560px;
  }
}
@media (min-width: 960px) and (max-width: 1768px) {
  /*       .profesional-services .custom-alignment img {
        height: 13rem;
      } */
  .profesional-services .custom-alignment {
    align-items: center;
  }
}
</style>

<style>
.profesional-services  .hidden-divider{
  height: 4rem;
}
.profesional-services-slider {
  margin-top: -3rem !important;
}
.reduce-10-rem {
  margin-top: -10rem !important;
}
@media (min-width: 1200px) {
  .reduce-space {
    margin-top: -4rem !important;
  }
  .profesional-services-body {
    margin-top: -6rem !important;
  }
}
@media (max-width: 348px) {
  .v-carousel.main-carousel.--pro h1 {
    font-size: 1.7rem;
    margin-left: 2rem;
  }
  .profesional-services-body h2 {
    font-size: 1.7rem !important;
  }
}
</style>