<template>
  <h1> {{name}} </h1>
</template>

<script>
  export default {
    asyncData ({ params }) {
      return { name: 'EJEMPLOS - ' + params.servicio.toUpperCase() + ' - ' + params.servicio.toUpperCase() }
    },
    validate ({ params }) {
      const servicios = ['logo-empresa']
      const sectores = ['alimentos-y-bebidas']
      return servicios.indexOf(params.servicio) !== -1 && sectores.indexOf(params.sector) !== -1
    }
  }
</script>