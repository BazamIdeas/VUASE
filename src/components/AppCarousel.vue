<template>
  <v-carousel v-if="items && items.length" :interval="interval" hide-controls hide-delimiters>
    <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src" :transition="item.transition ? item.transition : 'slide-x-transition'">
      <div v-if="item.principalText || item.principalText">
        <h1 v-if="item.principalText">{{ item.principalText }}</h1>
        <p v-if="item.secondaryText">{{ item.secondaryText }}</p>
      </div>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
  export default {
    props: {
      interval: {
        default: 2000,
        type: Number
      },
      items: Array
    }
  }
</script>

<style scoped>
  .v-carousel {
    box-shadow: none;
  }
</style>