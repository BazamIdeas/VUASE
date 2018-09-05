<template>
  <h1> {{name}} </h1>
</template>

<script>
  export default {
    asyncData ({ params }) {
      return { name: 'EJEMPLOS' }
    }
  }
</script>
