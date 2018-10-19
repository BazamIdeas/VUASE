<template>
  <section>
    <v-container grid-list-md class="mt-5 pt-5 pb-0">
      <v-layout row wrap>
        <v-flex xs12>
          <AppCreativeProccess :slides=slides :steps=steps />.
        </v-flex>
      </v-layout>
    </v-container>
  </section>
</template>

<script>
export default {
  name: 'pack-de-identidad',
  props: [],
  mounted () {},
  data () {
    return {
      slides: [
        {
          src:
            'https://www.lenovo.com/medias/lenovo-laptop-legion-y720-15-hero.png?context=bWFzdGVyfGltYWdlc3w4Mzg2OXxpbWFnZS9wbmd8aW1hZ2VzL2hjOC9oYjEvOTM1OTcwMjA2NTE4Mi5wbmd8OGRjZGEyODA5OTRmMTk0YzE2MDczZjdkZjhkZmQ4ODEzYjZiZmE3NGZiODFiZjM3YzQ3Yjg3NjRiNjNjY2ViZg'
        }
      ],
      steps: [
        {
          title: 'prueba',
          color: 'black',
          icon: 'X',
          description: 'lorem ipsum'
        },
        {
          title: 'prueba 2',
          color: 'white',
          icon: 'X',
          description: 'lorem ipsum'
        },
        {
          title: 'prueba 3',
          color: 'red',
          icon: 'X',
          description: 'lorem ipsum'
        }
      ]
    }
  },
  methods: {},
  computed: {}
}
</script>

<style scoped>
</style>