<template>
  <v-container fluid class="pa-0">
    <v-layout row class="ma-0" style="position:relative">
      <v-flex xs12 class="examples-slider-container pa-0" ref="examplesSliderContainer" :class="{'shadow': shadow}" >
        <div class="examples-slider-scrollable" ref="examplesSliderScrollable" data-scrollable @mouseover="scroll" @mouseout="clearScroll">
          <v-layout row>
            <v-flex @click="go(example.url)" v-for="(example, i) in completeExamples" :key="i" class="example-slider-item" align-content-center @mouseover="hovered = true; inHover = i" @mouseleave="hovered = false; inHover = null">
              <v-img :alt="example.service ? example.service : alt" :src="example.img" :height="itemHeight" :max-height="itemHeight" :width="itemWidth" :max-width="itemWidth" class="mr-3 "></v-img>
              <v-chip v-if="example.tag && inHover !== i" :color="example.color" text-color="white" style="bottom: 20px; position: absolute; font-size: 15px;">{{example.tag}}</v-chip>
              <span class="hidden-box" v-if="hovered && hoverInfo" :style="'background-color:'+example.color+'; color:'+example.textColor">
                <img :src="example.icon" :alt="alt" class="mb-2" width="100" height="80" />
                <h3 class="font-weight-bold title mb-2 text-xs-center" style=" max-width:90%;    white-space: normal; ">{{example.service}}</h3>
                <p v-if="example.description" class="font-weight-medium body-2 mb-2" style=" max-width:90%;    white-space: normal; ">{{example.description}}</p>
                <v-btn :to="'/nuestros-servicios'+example.url" flat class="ma-0 px-2 more-button font-weight-light" dark large>
                  conocer más&nbsp;&nbsp;<v-icon>add_circle_outline</v-icon>
                </v-btn>
              </span>
            </v-flex>
          </v-layout>
        </div>
      </v-flex>

      <img :alt="alt" src="/icons/puntos_de_fondo.svg" class="puntos" v-if="puntos">
    </v-layout>
    <!--<v-layout row class="ma-0 hidden-md-and-up" style="position:relative">
      <v-flex xs12 class="text-xs-right">
        <img src="/images/icons/swipe-left.png" alt="swipe-left" width="40px" style="margin: 20px 20px 0">
      </v-flex>
    </v-layout>-->
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      itemsLimit: undefined,
      completeExamples: {
        default: [],
        type: Array
      },
      inHover: null
    }),
    props: {
      examples: {
        default: [],
        type: Array
      },
      initScroll: {
        default: 10
      },
      itemWidth: {
        default: '300px'
      },
      itemHeight: {
        default: '300px'
      },
      shadow: {
        default: false
      },
      puntos: {
        default: false
      },
      hovered: {
        default: false
      },
      hoverInfo: {
        default: false
      },
      alt: String
    },
    created () {
      this.completeExamples = this.examples

      if (this.$device.isMobile) {
        this.itemsLimit = 2
        this.completeExamples = this.itemsLimit ? this.completeExamples.slice(0, this.itemsLimit) : this.examples
      } else if (this.$device.isTablet) {
        this.itemsLimit = 3
        this.completeExamples = this.itemsLimit ? this.completeExamples.slice(0, this.itemsLimit) : this.examples
      } else {
        this.itemsLimit = 4
        this.completeExamples = this.itemsLimit ? this.completeExamples.slice(0, this.itemsLimit) : this.examples
      }
    },
    mounted () {
      let el = this.$refs.examplesSliderScrollable
      el.scrollLeft += this.initScroll
      this.itemsLimit = undefined
      this.completeExamples = this.examples
    },
    computed: {
      computedObj: function () {
        var arr = this.examples
        return this.itemsLimit ? arr.slice(0, this.itemsLimit) : this.examples
      },
      limit: function () {
        return this.itemsLimit + 3
      }
    },
    methods: {
      scroll (event) {
        if ((typeof window.orientation === 'undefined') || (navigator.userAgent.indexOf('IEMobile') !== -1)) {
          let scrollRight = window.innerWidth * 0.80
          let scrollLeft = window.innerWidth * 0.20

          let el = this.$refs.examplesSliderScrollable

          if (event.pageX > scrollRight) {
            this.intervalScroll = setInterval(() => { el.scrollLeft += 2.2 }, 1)
          } else if (scrollLeft > event.pageX) {
            this.intervalScroll = setInterval(() => { el.scrollLeft -= 1.9 }, 1)
          }
        }
      },
      clearScroll (event) {
        clearInterval(this.intervalScroll)
      },
      go (url) {
        if (!url) return
        this.$router.push('/nuestros-servicios' + url)
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
    cursor: pointer;
  }

  .example-slider-item * {
    cursor: pointer;
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

</style>