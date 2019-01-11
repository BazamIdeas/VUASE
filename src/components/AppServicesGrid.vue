<template>
  <v-container grid-list-sm text-xs-center>
    <v-layout row wrap>
      <v-flex xs12 offset-md2 md8>
        <v-layout row wrap class="services-grid">
          <v-flex xs12 md3 class="px-2 xs-no-border" style="border-left: 2px solid #cccccc; border-right: 2px solid #cccccc">
            <v-layout row wrap>
              <v-flex @click="$router.push('/nuestros-servicios#servicios')" xs12  md12 class="pt-2 pb-3 service-icon-box" style="height: 200px; border-bottom: 2px solid #cccccc">
                <img alt="Logo Icono Liderlogo" src="/icons/logo_a_medida.svg" class="out"  width="100" height="80" />
                <img alt="Logo Icono Liderlogo" src="/icons/logo_a_medida_hover.svg" class="in"  width="100" height="80" />
                <h1 class="text-uppercase font-weight-bold">LOGO</h1>
              </v-flex>
              <v-flex @click="$router.push('/nuestros-servicios?tab=4#servicios')" xs12 md12 class="pt-2 pb-3 service-icon-box" style="height: 200px">
                <img alt="Logo Prediseñado Icono Liderlogo" src="/icons/logo_predisenado.svg" class="out"  width="100" height="80" />
                <img alt="Logo Prediseñado Icono Liderlogo" src="/icons/logo_predisenado_hover.svg" class="in"  width="100" height="80" />
                <h1 class="text-uppercase font-weight-bold">Perfil Redes Sociales</h1>
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex @click="$router.push('/nuestros-servicios#servicios')"  xs12 md3 class="px-2 service-icon-box xs-height-auto" column justify-center style="height: 400px; display: flex; flex-flow: column">
            <img alt="Imagen Corporativa Icono Liderlogo" src="/icons/pack_de_identidad.svg" class="out"  width="100" height="80" />
            <img alt="Imagen Corporativa Liderlogo" src="/icons/pack_de_identidad_hover.svg" class="in"  width="100" height="80" />
            <h1 class="text-uppercase font-weight-bold">Logo, imagen corporativa y logo animado</h1>
          </v-flex>
          <v-flex xs12 md3 class="px-2 xs-no-border " style="border-left: 2px solid #cccccc; border-right: 2px solid #cccccc">
            <v-layout row wrap>
              <v-flex @click="$router.push('/nuestros-servicios?tab=1#servicios')"  xs12 md12 class="pt-2 pb-3 service-icon-box" style="height: 200px; border-bottom: 2px solid #cccccc">
                <img alt="Web Icono Liderlogo" src="/icons/sitio_web.svg" class="out"  width="100" height="80" />
                <img alt="Web Icono Liderlogo" src="/icons/sitio_web_hover.svg" class="in"  width="100" height="80" />
                <h1 class="text-uppercase font-weight-bold">sitio web</h1>
              </v-flex>
              <v-flex @click="$router.push('/nuestros-servicios?tab=1#servicios')"  xs12 md12 class="pt-2 pb-3 service-icon-box" style="height: 200px">
                <img alt="App Icono Liderlogo" src="/icons/app_silver.svg" class="out" width="80" height="80"  />
                <img alt="App Icono Liderlogo" src="/icons/app_hover.svg" class="in" width="80" height="80"  />
                <h1 class="text-uppercase font-weight-bold mt-1">app</h1>
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex xs12 md3 class="px-2 xs-no-border xs-height-auto" style="border-right: 2px solid #cccccc">
            <v-layout row wrap>
              <v-flex @click="$router.push('/nuestros-servicios?tab=2#servicios')"  xs12 md12 class="pt-2 pb-3 service-icon-box" style="height: 200px; border-bottom: 2px solid #cccccc">
                <img  alt="Folleto Icono Liderlogo" src="/icons/folletos_y_publicidades.svg" class="out"  width="100" height="80" />
                <img  alt="Folleto Icono Liderlogo" src="/icons/folletos_y_publicidades_hover.svg" class="in"  width="100" height="80" />
                <h1 class="text-uppercase font-weight-bold">folletos y publicidades</h1>
              </v-flex>
              <v-flex @click="$router.push('/nuestros-servicios?tab=3#servicios')"  xs12 md12 class="pt-2 pb-3 service-icon-box" style="height: 200px">
                <im  alt="Rotulo Servicio Liderlogo" src="/icons/rotulo_silver.svg" class="out" width="80" height="80"  />
                <img alt="Rotulo Servicio Liderlogo" src="/icons/rotulo_hover.svg" class="in" width="80" height="80" />
                <h1 class="text-uppercase font-weight-bold  mt-1">rótulos</h1>
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex>
            <v-btn color="mt-5" to="/nuestros-servicios" class="elevation-0 white--text" :style="'background-color: ' + color" style="line-height: 14px;" wrap>
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

  .services-grid > :nth-child(2).service-icon-box  h1 {
    color: #434343;
  }

  .services-grid:hover > :nth-child(2).service-icon-box  .in {
    display: none;
  }
   .services-grid:hover > :nth-child(2).service-icon-box  .out {
    display: initial
  }
   .services-grid:hover > :nth-child(2).service-icon-box  h1 {
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

  .service-icon-box h1 {
    color: #cccccc;
  }

  .service-icon-box:hover .in {
    display: initial !important;
  }

  .service-icon-box:hover h1 {
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
    .service-icon-box {
      border: none !important;
      height:  auto !important;
      margin-top: 20px;
      margin-bottom: 20px;
    } 

    .service-icon-box .in {
      display: initial;
    }

    .service-icon-box h1 {
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

    .services-grid > :nth-child(2).service-icon-box  h1 {
      color: #434343 !important;
    }
  }
</style>