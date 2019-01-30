<template>
  <section>
    <v-container fluid grid-list-md class="mt-5 pt-5 pb-0">
      <v-layout row wrap>
        <v-flex xs12 md5>
          <img src="/images/pages/muchacho_contacto.png" class="img-contacto" :alt="alt" width="100%" style="padding-top: 72px;">
        </v-flex>
        <v-flex xs12 md6 class="my-5">
          <h1 class="font-weight-bold mb-1 text-uppercase text-xs-center" style="font-size: 29px;">¿Necesitas un consejo profesional?</h1>

          <h4 class="font-weight-medium mb-4 text-uppercase text-xs-center theme--light v-label" style="font-size: 12px; line-height: 20px;  padding: 0 30px;">Estamos para asesorarte gratis. Completa el formulario y un experto se pondrá en contacto contigo hoy.</h4>

          <AppContactForm contact-page="true" />
        </v-flex>
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
    async fetch ({ store }) {
      await store.dispatch('services/getAll')
    },
    data () {
      return {
        alt: 'agencia de diseño grafico',
        description: 'Solicite una consulta profesional de diseño. Es gratis y no hay obligación de compra. Tenemos más de 15 años de experiencia diseñando marcas',
        title: 'Agencia de diseño gráfico'
      }
    }
  }
</script>