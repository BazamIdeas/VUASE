<template>
  <v-layout column>
    <v-flex>
      <v-layout row wrap v-if="projects.length">
        <v-flex xs6 md2 v-for="project in projects" :key="project.id">
          <v-tooltip bottom>
            <v-card slot="activator" class="pa-3" style="cursor: pointer">
              <div style="padding-top: 100%; position: relative">
                <img src="icons/conceptos.svg" height="100%" width="100%" style="position:absolute; top: 0">
              </div>
            </v-card>
            <span class="body-2 white--text">{{ project.name }}</span>
          </v-tooltip>
        </v-flex>
      </v-layout>
      <v-layout v-else>
        <v-flex xs12 md6 offset-md3 class="py-5">
          <h2 class="text-xs-center">NO HAY PROYECTOS</h2>
        </v-flex>
      </v-layout>
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
    })
  }
</script>

<style scoped>
  .v-tooltip__content {
    background: #1976d2;
  }
</style>