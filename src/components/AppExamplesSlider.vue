<template>
  <v-container grid-list-sm fluid class="pa-0">
    <v-layout row class="ma-0" style="position:relative">
      <v-flex xs12 class="examples-slider-container pa-0" ref="examplesSliderContainer" :class="{'shadow': shadow}" >
        <div class="examples-slider-scrollable" ref="examplesSliderScrollable" data-scrollable @mouseover="scroll" @mouseout="clearScroll">
          <v-layout row d-block>
            <v-flex v-for="(example, i) in examples" :key="i" class="example-slider-item" align-content-center>
              <v-img :src="example.img" :height="itemHeight" :max-height="itemHeight" :width="itemWidth" :max-width="itemWidth" class="mr-3"></v-img>
              <span class="hidden-box" v-if="hovered" :style="'background-color:'+example.color+'; color:'+example.textColor">
                <img :src="example.icon" class="mb-5" width="100" height="80" />
                <h2 class="text-uppercase font-weight-bold headline mb-5">{{example.service}}</h2>
                <v-btn :to="'/nuestros-servicios/'+example.url" flat class="ma-0 px-2 more-button font-weight-light" large>
                  conocer más&nbsp;&nbsp;<v-icon>add_circle_outline</v-icon>
                </v-btn>
              </span>
            </v-flex>
          </v-layout>
        </div>
      </v-flex>
      <img src="/icons/puntos_de_fondo.svg" class="puntos" v-if="puntos">
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
      },
      itemWidth: {
        default: '260'
      },
      itemHeight: {
        default: '260'
      },
      shadow: {
        default: false
      },
      puntos: {
        default: false
      },
      hovered: {
        default: false
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
    z-index: 9;
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
    position:relative;
    transition: all 0.3s;
  }

  .shadow .v-image{
    box-shadow: 0 7px 21px 0 rgba(0,0,0,.1);
  }

  .shadow .v-image:hover{
    box-shadow: 0 14px 42px 0 rgba(0,0,0,.2);
  }

  img.puntos {
    position: absolute;
    width: 400px;
    bottom: -200px;
    left: 100px;
    z-index:1;
  }

  .hidden-box {
    opacity:0;
    position: absolute;
    width: calc(100% - 16px);
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: opacity 0.3s;
  }

  .hidden-box * {
    color:inherit;
  }

  .example-slider-item:hover .hidden-box{
    opacity:1;
  }
</style>