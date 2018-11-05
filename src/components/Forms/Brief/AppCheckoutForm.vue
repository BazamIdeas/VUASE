<template>
  <v-layout row wrap class="px-2 mt-4 mb-5">
    <v-flex md3 offset-md6>
      <h1 class="heading text-xs-center"> Precio </h1>
    </v-flex>
    <v-flex md3>
      <h1 class="heading text-xs-center"> A pagar para iniciar </h1>
    </v-flex>
    <v-flex md12 class="my-3">
      <div style="height: 1px; background: grey"></div>
    </v-flex>
    <v-flex md5>
      <v-layout row>
        <v-flex md3>
          <v-img src="http://localhost:3000/icons/logo_a_medida_hover.svg"></v-img>
        </v-flex>
        <v-flex xs9>
          <h1 class="headline font-weight-medium mb-1"> LOGO A MEDIDA </h1>
          <p class="caption" style="text-align: justify">
            Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de
            relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la
            imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos
            especimen.
          </p>
        </v-flex>
      </v-layout>
    </v-flex>
    <v-flex md3 offset-md1>
      <h1 class="headline font-weight-medium text-xs-center"> 219 $ </h1>
    </v-flex>
    <v-flex md3>
      <h1 class="headline font-weight-medium text-xs-center"> 50% 109.5 $ </h1>
    </v-flex>
    <v-flex md12 class="my-3">
      <div style="height: 1px; background: grey"></div>
    </v-flex>
    <v-flex md6>
      <h1 class="headline font-weight-medium"> TOTAL + IVA </h1>
    </v-flex>
    <v-flex md3>
      <h1 class="headline font-weight-medium text-xs-center"> 265 $ </h1>
    </v-flex>
    <v-flex md3>
      <h1 class="headline font-weight-medium text-xs-center"> 132.5 $ </h1>
    </v-flex>
    <v-flex md12 class="my-3">
      <div style="height: 1px;"></div>
    </v-flex>
    <v-flex md7 offset-md5>
      <v-layout row>
        <v-flex xs5>
          <v-subheader class="subheading font-weight-medium">Cupón de descuento:</v-subheader>
        </v-flex>
        <v-flex xs4>
          <v-text-field value="ASF436F2F" placeholder="Cupón" solo></v-text-field>
        </v-flex>
        <v-flex xs3>
          <v-btn color="primary ma-0" large style="margin-top: 3px !important">Validar</v-btn>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    props: ['slug'],
    computed: {
      brief () { return this.$store.state.brief.data },
      form () { return this.$store.getters['brief/getFormBySlug'](this.slug) }
    }
  }
</script>

<style>

</style>