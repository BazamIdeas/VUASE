<template>
  <v-container grid-list-sm text-xs-center>
    <v-layout row wrap >
      <v-flex xs12 sm12 lg10 offset-sm1  offset-lg1 >
        <v-layout row wrap class="services-grid">
          <v-flex xs12 md2 class="px-2 xs-no-border" style="border-left: 2px solid #cccccc; border-right: 2px solid #cccccc">
            <v-layout row wrap>
              <v-flex @click="$router.push('/nuestros-servicios/logo-empresa')" xs12  md12 class="pt-2 pb-3 service-icon-box" style="height: 200px; border-bottom: 2px solid #cccccc">
                <img alt="Logo Icono Liderlogo" src="/icons/logo_a_medida.svg" class="out"  width="100" height="80" />
                <img alt="Logo Icono Liderlogo" src="/icons/logo_a_medida_hover.svg" class="in"  width="100" height="80" />
                <h3 class="font-weight-bold">Logotipo</h3>
              </v-flex>
              <v-flex @click="$router.push('/nuestros-servicios/rediseno-de-logo')" xs12  md12 class="pt-2 pb-3 service-icon-box" style="height: 200px;">
                <img alt="Logo Icono Liderlogo" src="/icons/rediseno.svg" class="out"  width="100" height="80" />
                <img alt="Logo Icono Liderlogo" src="/icons/rediseno_hover.svg" class="in"  width="100" height="80" />
                <h3 class="font-weight-bold">Rediseño de logotipo</h3>
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex @click="$router.push('/nuestros-servicios/imagen-corporativa')"  xs12 md2 class="px-2 service-icon-box xs-height-auto" column justify-center style="height: 400px; display: flex; flex-flow: column">
            <img alt="Imagen Corporativa Icono Liderlogo" src="/icons/pack_de_identidad.svg" class="out"  width="100" height="80" />
            <img alt="Imagen Corporativa Liderlogo" src="/icons/pack_de_identidad_hover.svg" class="in"  width="100" height="80" />
            <h3 class="font-weight-bold">Logo, imagen corporativa y logo animado</h3>
            <v-chip color="primary" text-color="white" small >Más visto</v-chip>
          </v-flex>
          <v-flex xs12 md2 class="px-2 xs-no-border " style="border-left: 2px solid #cccccc; border-right: 2px solid #cccccc">
            <v-layout row wrap>
              <v-flex @click="$router.push('/nuestros-servicios/logo-y-pagina-web')"  xs12 md12 class="pt-2 pb-3 service-icon-box" style="height: 200px; border-bottom: 2px solid #cccccc">
                <img alt="Web Icono Liderlogo" src="/icons/logo_mas_web.svg" class="out"  width="100" height="80" />
                <img alt="Web Icono Liderlogo" src="/icons/logo_mas_web_hover.svg" class="in"  width="100" height="80" />
                <h3 class="font-weight-bold">Logotipo y sitio web</h3>
              </v-flex>
              <v-flex @click="$router.push('/nuestros-servicios/pagina-web')"  xs12 md12 class="pt-2 pb-3 service-icon-box" style="height: 200px;">
                <img alt="Web Icono Liderlogo" src="/icons/sitio_web.svg" class="out"  width="100" height="80" />
                <img alt="Web Icono Liderlogo" src="/icons/sitio_web_hover.svg" class="in"  width="100" height="80" />
                <h3 class="font-weight-bold">Sitio Web</h3>
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex xs12 md2 class="px-2 xs-no-border " style=" border-right: 2px solid #cccccc">
            <v-layout row wrap>
              <v-flex @click="$router.push('/nuestros-servicios/sitio-web-ecommerce')"  xs12 md12 class="pt-2 pb-3 service-icon-box" style="height: 200px; border-bottom: 2px solid #cccccc">
                <img alt="Web Icono Liderlogo" src="/icons/ecommerce_silver.svg" class="out"  width="100" height="80" />
                <img alt="Web Icono Liderlogo" src="/icons/ecommerce_hover.svg" class="in"  width="100" height="80" />
                <h3 class="font-weight-bold">Sitio web ecommerce</h3>
              </v-flex>
              <v-flex @click="$router.push('/nuestros-servicios/desarrollo-de-app')"  xs12 md12 class="pt-2 pb-3 service-icon-box" style="height: 200px">
                <img alt="App Icono Liderlogo" src="/icons/app_silver.svg" class="out" width="80" height="80"  />
                <img alt="App Icono Liderlogo" src="/icons/app_hover.svg" class="in" width="80" height="80"  />
                <h3 class="font-weight-bold mt-1">App</h3>
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex xs12 md2 class="px-2 xs-no-border xs-height-auto" style="border-right: 2px solid #cccccc">
            <v-layout row wrap>
              <v-flex @click="$router.push('/nuestros-servicios/rotulo-vehicular')"  xs12 md12 class="pt-2 pb-3 service-icon-box" style="height: 200px; border-bottom: 2px solid #cccccc">
                <img  alt="Folleto Icono Liderlogo" src="/icons/rotulo_silver.svg" class="out"  width="100" height="80" />
                <img  alt="Folleto Icono Liderlogo" src="/icons/rotulo_hover.svg" class="in"  width="100" height="80" />
                <h3 class="font-weight-bold">Diseño de rotulos para vehiculos</h3>
              </v-flex>
              <v-flex @click="$router.push('/nuestros-servicios/rotulo-local')"  xs12 md12 class="pt-2 pb-3 service-icon-box" style="height: 200px">
                <img  alt="Rotulo Servicio Liderlogo" src="/icons/rotulo-locoa-silver.svg" class="out" width="80" height="80"  />
                <img alt="Rotulo Servicio Liderlogo" src="/icons/rotulo-locoa-hover.svg" class="in" width="80" height="80" />
                <h3 class="font-weight-bold  mt-1">Diseño de rótulos para locales</h3>
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex xs12 md2 class="px-2 xs-no-border xs-height-auto" style="border-right: 2px solid #cccccc">
            <v-layout row wrap>
              <v-flex @click="$router.push('/nuestros-servicios/packaging')"  xs12 md12 class="pt-2 pb-3 service-icon-box" style="height: 200px; border-bottom: 2px solid #cccccc">
                <img  alt="Folleto Icono Liderlogo" src="/icons/packaging-silver.svg" class="out"  width="100" height="80" />
                <img  alt="Folleto Icono Liderlogo" src="/icons/packaging-hover.svg" class="in"  width="100" height="80" />
                <h3 class="font-weight-bold">Packaging</h3>
              </v-flex>
              <v-flex @click="$router.push('/nuestros-servicios/diptico')"  xs12 md12 class="pt-2 pb-3 service-icon-box" style="height: 200px">
                <img  alt="Rotulo Servicio Liderlogo" src="/icons/diptico-silver.svg" class="out" width="80" height="80"  />
                <img alt="Rotulo Servicio Liderlogo" src="/icons/diptico-hover.svg" class="in" width="80" height="80" />
                <h3 class="font-weight-bold  mt-1">Dípticos</h3>
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex>
            <v-btn color="mt-5" to="/nuestros-servicios" class="boton-res elevation-0 white--text" :style="'background-color: ' + color" style="line-height: 14px;" wrap>
              Descubre todas las <br>categorias de servicios
            </v-btn>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    props: ['color']
  }
</script>

<style>
  .services-grid > :nth-child(2).service-icon-box  .in {
    display: initial;
  }

  .services-grid > :nth-child(2).service-icon-box  .out {
    display: none;
  }

  .services-grid > :nth-child(2).service-icon-box  h3 {
    color: #434343;
  }

  .services-grid:hover > :nth-child(2).service-icon-box  .in {
    display: none;
  }
   .services-grid:hover > :nth-child(2).service-icon-box  .out {
    display: initial
  }
   .services-grid:hover > :nth-child(2).service-icon-box  h3 {
    color: #cccccc;
  }

  .service-icon-box {
    cursor: pointer;
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .service-icon-box .in {
    display: none;
  }

  .service-icon-box h3 {
    color: #cccccc;
  }

  .service-icon-box:hover .in {
    display: initial !important;
  }

  .service-icon-box:hover h3 {
    color: #434343 !important;
  }

  .service-icon-box:hover .out {
    display: none !important;
  }

  @media (max-width: 1024px) {
    img.puntos {
        display: none;
    }
  }

  @media (min-width: 320px) and (max-width: 960px) {
    .service-icon-box img {
      width: 115px;
      height: 115px;
    }
    .boton-res{
      font-size: 18px;
      line-height: 21px !important;
      height: 60px;
    } 
    .service-icon-box {
      border: none !important;
      height:  auto !important;
      margin-top: 20px;
      margin-bottom: 20px;
    } 

    .service-icon-box .in {
      display: initial;
    }

    .service-icon-box h3 {
      color: #434343;
    }

    .service-icon-box .out {
      display: none;
    }

    .services-grid > :nth-child(2).service-icon-box  .in {
      display: initial !important;
    }

    .services-grid > :nth-child(2).service-icon-box  .out {
      display: none !important;
    }

    .services-grid > :nth-child(2).service-icon-box  h3 {
      color: #434343 !important;
    }
  }
</style>