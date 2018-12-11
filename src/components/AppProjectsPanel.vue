<template>
  <v-layout column>
    <v-flex>
      <v-layout row wrap v-if="projects.length">
        <v-flex xs6 md3 v-for="project in projects" :key="project.id">
          {{project.name}}
        </v-flex>
      </v-layout>
      <v-layout v-else>
        <v-flex xs12 md6 offset-md3 class="py-4">
          <h2 class="text-xs-center">NO HAY PROYECTOS ABIERTOS</h2>
        </v-flex>
      </v-layout>
    </v-flex>
    <v-flex class="text-xs-right" v-if="projects.length">
      <v-pagination v-model="page" :length="pages"></v-pagination>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    props: {
      projects: {
        type: Array,
        default: []
      }
    },
    data: () => ({
      page: 1
    }),
    computed: {
      pages () {
        return this.projects.length / 6
      }
    }
  }
</script>

<style>
  
</style>