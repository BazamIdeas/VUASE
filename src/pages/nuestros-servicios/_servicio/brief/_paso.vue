<template>
  <h1> {{name}} </h1>
</template>

<script>
  export default {
    asyncData ({ params }) {
      // called every time before loading the component
      return { params }
    }
  }
</script>