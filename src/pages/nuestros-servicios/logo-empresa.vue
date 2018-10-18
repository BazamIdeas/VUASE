<template>
  <section>
    <v-container grid-list-md class="mt-5 pt-5 pb-0">
      <v-layout row wrap>
        <v-flex xs12>
          <AppServiceCharacteristics :title="'Prueba'" :list="list" />.
        </v-flex>
      </v-layout>
    </v-container>
  </section>
</template>

<script>
  export default {
    asyncData (context) {
      // called every time before loading the component
      return { name: 'LOGO EMPRESA' }
    },
    mounted () {

    },
    data () {
      return {
        list: [
          {
            title: 'Hola',
            description: 'Descripción',
            icon: '/icons/logo_a_medida_hover.svg'
          }, {
            title: 'Hola',
            description: 'Descripción',
            icon: '/icons/logo_a_medida_hover.svg'
          }, {
            title: 'Hola',
            description: 'Descripción',
            icon: '/icons/logo_a_medida_hover.svg'
          }, {
            title: 'Hola',
            description: 'Descripción',
            icon: '/icons/logo_a_medida_hover.svg'
          }, {
            title: 'Hola',
            description: 'Descripción',
            icon: '/icons/logo_a_medida_hover.svg'
          }, {
            title: 'Hola',
            description: 'Descripción',
            icon: '/icons/logo_a_medida_hover.svg'
          }
        ]
      }
    },
    methods: {

    },
    computed: {

    }
    // and more functionality to discover
  }
</script>
