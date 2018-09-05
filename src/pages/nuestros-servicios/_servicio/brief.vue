<template>
  <h1> {{name}} </h1>
</template>

<script>
  export default {
    asyncData ({ params }) {
      // called every time before loading the component
      return { name: 'BRIEF - ' + params.servicio.toUpperCase() }
    },
    validate ({ params }) {
      const servicios = [
        'logo-empresa'
      ]
      return servicios.indexOf(params.servicio) !== -1
    }
  }
</script>

