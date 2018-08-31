<template>
  <v-content>
    <section>
      <v-container grid-list-md text-xs-center class="pt-0">
        <v-layout row wrap>
          {{name}}
        </v-layout>
      </v-container>
    </section>
  </v-content>
</template>

<script>
  export default {
    data () {
      return {
        name: 'INICIO'
      }
    }
  }
</script>
