<template>
  <v-container grid-list-sm text-xs-center class="mb-5">
    <v-layout row wrap>
      <v-flex xs12 offset-md2 md8>
        <v-layout row wrap>
          <v-flex xs12 md3 class="px-2" style="border-left: 2px solid #cccccc; border-right: 2px solid #cccccc">
            <v-layout row wrap>
              <v-flex xs6 md12 class="pt-2 pb-3 service-icon-box" style="height: 200px; border-bottom: 2px solid #cccccc">
                <img src="/icons/logo_a_medida.svg" height="100" class="mb-2" />
                <h1 class="text-uppercase font-weight-bold">diseño de logos</h1>
              </v-flex>
              <v-flex xs6 md12 class="pt-2 pb-3 service-icon-box" style="height: 200px">
                <img src="/icons/logo_predisenado.svg" height="100" class="mb-2" />
                <h1 class="text-uppercase font-weight-bold">logo prediseñado</h1>
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex xs12 md3 class="px-2 service-icon-box" column justify-center style="height: 400px; display: flex; flex-flow: column">
            <img src="/icons/pack_de_identidad.svg" height="100" class="mb-2" />
            <h1 class="text-uppercase font-weight-bold">pack de identidad visual corporativa</h1>
          </v-flex>
          <v-flex xs12 md3 class="px-2" style="border-left: 2px solid #cccccc; border-right: 2px solid #cccccc">
            <v-layout row wrap>
              <v-flex xs6 md12 class="pt-2 pb-3 service-icon-box" style="height: 200px; border-bottom: 2px solid #cccccc">
                <img src="/icons/sitio_web.svg" height="100" class="mb-2" />
                <h1 class="text-uppercase font-weight-bold">sitio web</h1>
              </v-flex>
              <v-flex xs6 md12 class="pt-2 pb-3 service-icon-box" style="height: 200px">
                <img src="/icons/app.svg" height="100" class="mb-2" />
                <h1 class="text-uppercase font-weight-bold">app</h1>
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex xs12 md3 class="px-2" style="border-right: 2px solid #cccccc">
            <v-layout row wrap>
              <v-flex xs6 md12 class="pt-2 pb-3 service-icon-box" style="height: 200px; border-bottom: 2px solid #cccccc">
                <img src="/icons/folletos_y_publicidades.svg" height="100" class="mb-2" />
                <h1 class="text-uppercase font-weight-bold">folletos y publicidades</h1>
              </v-flex>
              <v-flex xs6 md12 class="pt-2 pb-3 service-icon-box" style="height: 200px">
                <img src="/icons/rotulo.svg" height="100" class="mb-2" />
                <h1 class="text-uppercase font-weight-bold">rótulos</h1>
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex>
            <v-btn color="my-5" class="elevation-0 white--text" :style="'background-color: ' + color">
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