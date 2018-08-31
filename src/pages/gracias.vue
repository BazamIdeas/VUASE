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
    asyncData (context) {
      // called every time before loading the component
      return { name: 'GRACIAS' }
    }
    // and more functionality to discover
  }
</script>
