<template>
  <h1> {{name}} </h1>
</template>

<script>
  export default {
    asyncData ({ params }) {
      return { name: 'EJEMPLOS - ' + params.servicio.toUpperCase() + ' - ' + params.sector.toUpperCase() + ' - ' + params.actividad.toUpperCase() }
    },
    validate ({ params }) {
      const servicios = ['logo-empresa']
      const sectores = ['alimentos-y-bebidas']
      const actividades = ['restaurantes']
      return servicios.indexOf(params.servicio) !== -1 && sectores.indexOf(params.sector) !== -1 && actividades.indexOf(params.actividad) !== -1
    }
  }
</script>