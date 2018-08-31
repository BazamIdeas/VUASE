<template>
  <v-content>
    <section>
      <v-container class="pb-0">
        <v-layout row wrap align-center justify-center class="white--text">
          <v-flex align-center justify-center>
            <h1 class="text--black display-1 mb-2 text-xs-center">PROYECTOS</h1>
          </v-flex>
        </v-layout>
      </v-container>
    </section>

    <section>
      <v-container grid-list-md text-xs-center class="pt-0">
        <v-layout row wrap>
          <v-flex v-if="projects.length" v-for="(project, index) in projects" :key="project" xs12 md3>
            <v-card color="blue-grey lighten-4" class="white--text mx-2 mb-5" transition="scale-transition" origin="center center">
              <v-card-text>
                <div>
                {{project}}
                </div>
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex v-if="!projects.length" xs12 md12>
            <v-card color="blue-grey lighten-4" class="blue--text mx-2 mb-5">
              <v-card-text>
                <div>
                  <h3>NO HAY PROYECTOS</h3>
                </div>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </section>
    <v-footer class="blue darken-2">
      <v-layout row wrap align-center>
        <v-flex xs12>
          <div class="white--text ml-3">
            Echo con
            <v-icon class="red--text">favorite</v-icon>
            por <a class="white--text" href="https://vuetifyjs.com" target="_blank">Daniel Torres</a>
          </div>
        </v-flex>
      </v-layout>
    </v-footer>
  </v-content>
</template>

<script>
  export default {
    mounted () {
      this.$toast.show('Hola en proyectos')
    },
    computed: {
      projects () { return this.$store.state.projects.projects }
    },
    methods: {
    },
    filters: {
    }
  }
</script>