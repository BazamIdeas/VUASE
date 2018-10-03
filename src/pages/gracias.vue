<template>
  
<h1>PAIS: {{pais}}</h1>
</template>

<script>

export default {
  asyncData (context) {
    // called every time before loading the component
    return { pais: context.res }
  }
  // and more functionality to discover
}
</script>
