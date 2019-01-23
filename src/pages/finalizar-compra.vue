<template>
  <h1> {{name}} </h1>
</template>

<script>
  export default {
    head () {
      return {
        titleTemplate: ' Finalizar compra | %s',
        meta: [
          { content: 'noindex', name: 'robots' }
        ]
      }
    },
    asyncData (context) {
      // called every time before loading the component
      return { name: 'FINALIZAR COMPRA' }
    }
    // and more functionality to discover
  }
</script>
