<template>
  <section>
    <v-container fluid grid-list-md class="mt-5 pt-5 pb-0">
      <v-layout row wrap>
        <v-flex xs12 offset-md1 md10 class="mt-5 mb-5">
          <v-layout row wrap>
            <v-flex xs12>

            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex xs12 offset-md1 md10 class="mt-5 mb-5">
          <v-layout row wrap>
            <v-flex xs12>
              <h2>PROYECTOS CULMINADOS</h2>
              <div style="height: 2px; width: 100%; background-color: rgba(0, 0, 0, .87);"></div>
              <v-container fluid class="pa-2">
                <AppProjectsPanel :projects="projects(true)" />
              </v-container>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
  </section>
</template>

<script>
  export default {
    layout: 'account',
    async created () {
      if (!this.isLoggedIn) {
        return this.$router.push('/area-de-cliente/entrar')
      }
    },
    computed: {
      isLoggedIn () { return this.$store.getters['isLoggedIn'] },
      authData () { return this.$store.state.app.authData }
    },
    methods: {
      projects (closed) {
        let openProjects = []
        if (this.authData.projects) {
          openProjects = this.authData.projects.filter(val => val.closed === closed)
        }
        return openProjects
      }
    }
  }
</script>

<style>
</style>