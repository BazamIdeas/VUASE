<template>
  <section>
    <v-container fluid grid-list-md class="mt-5 pt-5 pb-0">
      <v-layout row wrap align-end>
        <v-flex xs12 md5>
          <img src="/images/pages/muchacho_contacto.jpg" class="img-contacto mt-5 mt-xs-0" :alt="alt" width="100%">
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