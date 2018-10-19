<template>
  <section>
    <v-container grid-list-md class="mt-5 pt-5 pb-0">
      <v-layout row wrap>
        <AppServiceCharacteristics :title="'Prueba'" :list="list" />
      
        <AppServiceWhatGet :title="'¿QUE TE LLEVAS?'" :list="whatYouGet" :service="service" />
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
        ],
        whatYouGet: [
          [{
            title: 'Hola',
            items: ['prueba', 'prueba 2', 'prueba', 'prueba 2', 'prueba', 'prueba 2'],
            icon: '/icons/logo_a_medida_hover.svg'
          }, {
            title: 'Hola',
            items: ['prueba', 'prueba 2', 'prueba', 'prueba 2', 'prueba', 'prueba 2'],
            icon: '/icons/logo_a_medida_hover.svg'
          }],
          [{
            title: 'Hola',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu mi pharetra massa porttitor sollicitudin. Quisque vulputate pellentesque est, id ullamcorper metus elementum nec. Pellentesque quis magna quam.',
            icon: '/icons/logo_a_medida_hover.svg'
          }, {
            title: 'Hola',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu mi pharetra massa porttitor sollicitudin. Quisque vulputate pellentesque est, id ullamcorper metus elementum nec. Pellentesque quis magna quam.',
            icon: '/icons/logo_a_medida_hover.svg'
          }, {
            title: 'Hola',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu mi pharetra massa porttitor sollicitudin. Quisque vulputate pellentesque est, id ullamcorper metus elementum nec. Pellentesque quis magna quam.',
            icon: '/icons/logo_a_medida_hover.svg'
          }]
        ],
        service: {
          img: '../images/pages/mockup-ferreteria-flores.png',
          price: '$ 237',
          percentage: '10%'
        }
      }
    },
    methods: {

    },
    computed: {

    }
    // and more functionality to discover
  }
</script>
