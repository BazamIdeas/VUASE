<template>
  <h1> {{name}} </h1>
</template>

<script>
  export default {
    asyncData (context) {
      // called every time before loading the component
      return { name: 'FINALIZAR COMPRA' }
    }
    // and more functionality to discover
  }
</script>
