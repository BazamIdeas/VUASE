<template>
  <section>
    <AppAboutUsCarousel />
    <v-container fluid grid-list-md class="mt-5">
      <v-layout row wrap>
        <v-flex xs12 offset-md1 md10 class="mb-5">
          <v-layout row wrap>
            <v-flex xs12 md6>
              <!--<h1 class="font-weight-bold mb-5 text-uppercase" style="font-size: 30px; color: #004B7B">QUIÉNES SOMOS</h1>-->
              <AppHeading number="2" title="QUIÉNES SOMOS" size="display-1" align="left" ccolor="blue-medium"/>
              <p class="text-xs-justify" style="font-weight: 600; margin-top: 40px">
                Somos una agencia referente de diseño que trabaja incansablemente, apoyando a pequeñas y medianas empresas, creando su identidad.
              </p>
              <p class="text-xs-justify" style="font-weight: 600;">
                Creemos en los emprendedores y atendemos como propio cada proyecto.
              </p>
              <p class="text-xs-justify" style="font-weight: 600;">
                Nuestra trayectoria internacional de más de 14 años presencia en 22 países, +75000 creaciones, Nuestra garantía de conformidad 100% y nuestros competitivos precios cerrados hacen que todos los días nuevos clientes confíen en Liderlogo.
              </p>
              <p class="text-xs-justify" style="font-weight: 600;">
                Vamos en direccón a un mundo mejor, sustentado por nuestros diseños ecólogicos, con cada proyecto que nos confian, brindamos más posibilidades donando un libro a un niño carenciado. Conocemos la importancia de nuestro trabajo y sabemos cómo hacerlo.
              </p>
            </v-flex>
            <v-flex xs12 md6>
              <img  alt="Sobre Nosotros" src="/images/pages/dino_about_us.png" width="100%">
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex xs12 offset-md2 md8 class="mt-5 text-xs-center">
          <!--<h1 class="display-1 font-weight-bold text-xs-center mb-4" style="color: #303032;">NUESTROS SERVICIOS</h1>-->
          <AppHeading number="2" title="NUESTROS SERVICIOS" size="display-1"/>
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