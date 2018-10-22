<template>
  <section>
    <v-container grid-list-md class="mt-5 pt-5 pb-0">
      <v-layout row wrap>
        <AppTopServiceSlider :list="slider" :service="service" />

        <AppServiceCharacteristics :title="'Prueba'" :list="list" />
      
        <AppServiceWhatGet :title="'¿QUE TE LLEVAS?'" :list="whatYouGet" :service="service" />

        <AppExpansionPanels :title="'PREGUNTAS FRECUENTES'" :list="frequentQuestions" />

        <AppTestimony :list="testimonies" />
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
        frequentQuestions: this.$store.state.app.staticData.frequentQuestions,
        testimonies: [{
          stars: 4,
          logo: 'papeleria.svg',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu mi pharetra massa porttitor sollicitudin.'
        }],
        service: {
          img: '../images/pages/mockup-ferreteria-flores.png',
          icon: '/icons/logo_a_medida_hover.svg',
          price: '$ 237',
          percentage: 10,
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu mi pharetra massa porttitor sollicitudin.',
          characteristics: ['Prueba 1', 'Prueba 2', 'Prueba 3', 'Prueba 4'],
          title: 'LOGO PARA EMPRESA'
        },
        slider: ['/images/pages/rediseno-acc-group.png']
      }
    },
    methods: {

    },
    computed: {

    }
    // and more functionality to discover
  }
</script>
