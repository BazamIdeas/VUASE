<template lang="html">
	 <v-carousel>
    <v-carousel-item
      v-for="(slide,i) in slides"
      :key="i"
      :src="slide.src"
    ></v-carousel-item>
  </v-carousel>
</template>

<script lang="js">
  export default {
    props: {
      steps: {
        type: Array,
        default: []
      },
      slides: {
        type: Array,
        default: []
      }
    }
  }
</script>

<style scoped lang="css">
</style>
