<template>
  <section>
    <v-container grid-list-md>
      <v-layout row wrap>
        <v-flex xs12 class="my-4 py-5"></v-flex>
        <v-flex xs12>
          <h1 class="text-xs-center">Pagina de error</h1>
        </v-flex>
      </v-layout>
    </v-container>
  </section>
</template>

<script>
  export default {
    props: ['error']
  }
</script>

<style>
</style>