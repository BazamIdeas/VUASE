<template>
  <v-container grid-list-sm text-xs-center class="mb-5">
    <v-layout row wrap align-center>
      <v-flex d-flex xs12 offset-md2 md8>
        <v-layout row wrap align-center>
          <v-flex d-flex xs12 md3>
            <v-layout row wrap>
              <v-flex xs6 md12 class="mt-2 mb-3 service-icon-box">
                <img src="/icons/logo_a_medida.svg" height="100" class="mb-2" />
                <h1 class="text-uppercase font-weight-bold">diseño de logos</h1>
              </v-flex>
              <v-flex xs6 md12 class="mt-2 mb-3 service-icon-box">
                <img src="/icons/logo_predisenado.svg" height="100" class="mb-2" />
                <h1 class="text-uppercase font-weight-bold">logo prediseñado</h1>
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex xs12 md3 class="service-icon-box">
            <img src="/icons/pack_de_identidad.svg" height="100" class="mb-2" />
            <h1 class="text-uppercase font-weight-bold">pack de identidad visual corporativa</h1>
          </v-flex>
          <v-flex d-flex xs12 md3>
            <v-layout row wrap>
              <v-flex xs6 md12 class="mt-2 mb-3 service-icon-box">
                <img src="/icons/sitio_web.svg" height="100" class="mb-2" />
                <h1 class="text-uppercase font-weight-bold">sitio web</h1>
              </v-flex>
              <v-flex xs6 md12 class="mt-2 mb-3 service-icon-box">
                <img src="/icons/app.svg" height="100" class="mb-2" />
                <h1 class="text-uppercase font-weight-bold">app</h1>
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex d-flex xs12 md3>
            <v-layout row wrap>
              <v-flex xs6 md12 class="mt-2 mb-3 service-icon-box">
                <img src="/icons/folletos_y_publicidades.svg" height="100" class="mb-2" />
                <h1 class="text-uppercase font-weight-bold">folletos y publicidades</h1>
              </v-flex>
              <v-flex xs6 md12 class="mt-2 mb-3 service-icon-box">
                <img src="/icons/rotulo.svg" height="100" class="mb-2" />
                <h1 class="text-uppercase font-weight-bold">rótulos</h1>
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex>
            <v-btn color="mb-5" class="elevation-0 white--text" :style="'background-color: ' + color">
              Quiero ver más
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