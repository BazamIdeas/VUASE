<template>
  <v-container grid-list-sm fluid class="pa-0">
    <v-layout row class="ma-0">
      <v-flex xs12 class="examples-slider-container pa-0" ref="examplesSliderContainer">
        <div class="examples-slider-scrollable" ref="examplesSliderScrollable" data-scrollable @mouseover="scroll" @mouseout="clearScroll">
          <v-layout row d-block>
            <v-flex v-for="(example, i) in examples" :key="i" class="example-slider-item" align-content-center>
              <v-img :src="example.img" width="260" max-width="260" class="mr-3"></v-img>
            </v-flex>
          </v-layout>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    props: {
      examples: {
        default: [],
        type: Array
      },
      initScroll: {
        default: 0
      }
    },
    mounted () {
      let el = this.$refs.examplesSliderScrollable
      el.scrollLeft += this.initScroll
    },
    methods: {
      scroll (event) {
        let scrollRight = window.innerWidth * 0.80
        let scrollLeft = window.innerWidth * 0.20

        let el = this.$refs.examplesSliderScrollable

        if (event.pageX > scrollRight) {
          this.intervalScroll = setInterval(() => { el.scrollLeft += 2.2 }, 1)
        } else if (scrollLeft > event.pageX) {
          this.intervalScroll = setInterval(() => { el.scrollLeft -= 1.9 }, 1)
        }
      },
      clearScroll (event) {
        clearInterval(this.intervalScroll)
      }
    }
  }
</script>

<style scoped>
  .examples-slider-container {
    overflow: hidden;
    position: relative;
    padding: 0;
  }

  [data-scrollable] {
    white-space: nowrap;
    overflow-x: auto;
    overflow-y: hidden;
    position: relative;
    bottom: -20px;
    margin-top: -20px;
  }

  .example-slider-item {
    margin: 4px 0px;
    padding: 0px 0px !important;
    display: inline-block;
  }
</style>