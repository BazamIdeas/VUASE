<template>
  <v-app light>
    <v-toolbar class="white" dense>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <nuxt-link to="/">Home</nuxt-link>
      <nuxt-link to="/proyectos">Proyectos</nuxt-link>
    </v-toolbar>
    <nuxt/>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        title: 'TODO'
      }
    }
  }
</script>
