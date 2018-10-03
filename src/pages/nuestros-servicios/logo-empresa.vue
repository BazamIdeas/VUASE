<template>
  <h1> {{name}} </h1>
</template>

<script>
  export default {
    asyncData (context) {
      // called every time before loading the component
      return { name: 'LOGO EMPRESA' }
    }
    // and more functionality to discover
  }
</script>
