<template>
  <v-toolbar class="transparent" flat>
    <v-btn v-for="link in links" :key="link.url" nuxt :to="link.url" flat round>
      {{link.title}}
    </v-btn>
  </v-toolbar>
</template>

<script>
  export default {
    name: 'app-header',
    data () {
      return {
        links: [
          { url: '/', title: 'INICIO' },
          { url: '/ejemplos', title: 'EJEMPLOS' },
          { url: '/nuestros-servicios', title: 'NUESTROS SERVICIOS' }
        ]
      }
    }
  }
</script>