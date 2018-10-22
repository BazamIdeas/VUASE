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
  methods: {},
  computed: {}
}
</script>

<style scoped>
</style>