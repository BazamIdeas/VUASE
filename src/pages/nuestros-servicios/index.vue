<template>
  <h1> {{name}} </h1>
</template>

<script>
  export default {
    asyncData (context) {
      // called every time before loading the component
      return { name: 'NUESTROS SERVICIOS' }
    }
    // and more functionality to discover
  }
</script>
