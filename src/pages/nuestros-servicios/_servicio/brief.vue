<template>
  <section>
    <v-container grid-list-md>
      <v-layout row wrap>
        <v-flex xs12 class="my-3 py-4"></v-flex>
        <v-flex xs12 offset-md1 md10 style="position: relative">
          <AppStepProgressBar/>
        </v-flex>
      </v-layout>
    </v-container>
    <v-toolbar fixed style="top: inherit;bottom: 0;">
      <span>Completa los datos</span>
      <v-spacer></v-spacer>
      <div class="hidden-sm-and-down">
        <v-btn color="primary">Continuar</v-btn>
      </div>
    </v-toolbar>
  </section>
</template>

<script>
  export default {
    asyncData ({ params }) {
      // called every time before loading the component
      return { params: params }
    },
    data () {
      return {
        seasons: [
          'Winter',
          'Spring',
          'Summer',
          'Fall'
        ]
      }
    },
    methods: {
      season (val) {
        return this.seasons[val]
      }
    }
  }
</script>

