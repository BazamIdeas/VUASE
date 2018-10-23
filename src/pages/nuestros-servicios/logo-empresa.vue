<template>
  <section>
    <v-container grid-list-md class="mt-5 pt-5 pb-0">
      <v-layout row wrap>
        <AppTopServiceSlider :list="slider" :service="service" />

        <AppServiceCharacteristics title="¿QUE TE OFRECEMOS?" :list="list" />

        <AppCreativeProccess :slides=slides :steps=steps />
      
        <AppServiceWhatGet id="que-te-ofrecemos" title="¿QUE TE LLEVAS?" :list="whatYouGet" :service="service" just-one="true" />

        <AppTestimony :list="testimonies" />

        <AppExpansionPanels title="PREGUNTAS FRECUENTES" :list="frequentQuestions" />
      </v-layout>
    </v-container>

    <v-container fluid class="mt-5 pt-5 pb-0">
      <v-layout xs12 row wrap> 
        <v-flex xs12 md5>
          <img src="/images/pages/muchacho_contacto.png" alt="" width="100%">
        </v-flex>
        <v-flex xs12 md6>
          <h1 class="font-weight-bold mb-4 text-uppercase text-xs-center" style="font-size: 40px; color: #434343;">¿TIENES ALGUNA DUDA?</h1>
          <AppContactForm />
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
        ],
        whatYouGet: [
          [{
            title: 'Hola',
            items: ['prueba', 'prueba 2', 'prueba', 'prueba 2', 'prueba', 'prueba 2'],
            icon: '/icons/logo_a_medida_hover.svg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu mi pharetra massa porttitor sollicitudin. Quisque vulputate pellentesque est, id ullamcorper metus elementum nec. Pellentesque quis magna quam.'
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
        slider: [
          {
            url: '/images/pages/rediseno-acc-group.png',
            color: 'rgb(0, 78, 126)'
          }
        ],
        slides: [
          {
            src: '/images/carousels/creative-process-1.png',
            alt: 'creative-process-1'
          },
          {
            src: '/images/carousels/creative-process-2.png',
            alt: 'creative-process-2'
          },
          {
            src: '/images/carousels/creative-process-3.png',
            alt: 'creative-process-3'
          }
        ],
        steps: [
          {
            title: '1. BRIEF Y SELECTOR',
            color: '#323c9e',
            icon: '/icons/creative-process-1.svg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis diam ut dui commodo finibus. Sed at metus condimentum, mollis justo eget, venenatis metus. In eu mi fringilla, pharetra purus ac, venenatis nisi. ',
            alt: 'brief-y-selector'
          },
          {
            title: '2. CONCEPTOS',
            color: '#1d8127',
            icon: '/icons/creative-process-2.svg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis diam ut dui commodo finibus. Sed at metus condimentum, mollis justo eget, venenatis metus. In eu mi fringilla, pharetra purus ac, venenatis nisi. ',
            alt: 'conceptos'
          },
          {
            title: '3. ENTREGA Y DOCUMENTACIÓN',
            color: '#c3953f',
            icon: '/icons/creative-process-3.svg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis diam ut dui commodo finibus. Sed at metus condimentum, mollis justo eget, venenatis metus. In eu mi fringilla, pharetra purus ac, venenatis nisi. ',
            alt: 'entrega-y-documentacion'
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
