<template>
  <v-container grid-list-md fluid class="pa-0">
    <v-layout row>
      <v-flex xs12 class="service-slider-container" ref="serviceSliderContainer">
        <div class="service-slider-scrollable" ref="serviceSliderScrollable" data-scrollable @mouseover="scroll" @mouseout="clearScroll">
          <v-layout row>
            <v-flex v-for="(group, i) in groupsServices" :key="i" class="service-slider-item" align-content-center>
              <v-btn flat class="ma-0 service-slider-item-button" :class="{ 'selected': i === selected }" @click="selectGroup(i, $event)" large>
                <img alt="Icono Servicio Liderlogo" v-if="group.icon" :src="group.icon" height="40" width="50">
                <span class=" ml-3 " >{{ group.name }}</span>
              </v-btn>
            </v-flex>
          </v-layout>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        selected: 0
      }
    },
    created () {
      let index = parseInt(this.$router.app._route.query.tab)
      if (index) {
        this.selectGroup(index)
      }
    },
    computed: {
      groupsServices () {
        return this.$store.state.services.groups
      }
    },
    methods: {
      scroll (event) {
        let scrollRight = window.innerWidth * 0.80
        let scrollLeft = window.innerWidth * 0.20

        let el = this.$refs.serviceSliderScrollable

        if (event.pageX > scrollRight) {
          this.intervalScroll = setInterval(() => { el.scrollLeft += 2.2 }, 1)
        } else if (scrollLeft > event.pageX) {
          this.intervalScroll = setInterval(() => { el.scrollLeft -= 1.9 }, 1)
        }
      },
      clearScroll (event) {
        clearInterval(this.intervalScroll)
      },
      selectGroup (index, event) {
        this.selected = index
        this.$emit('select-group', index)
      }
    },
    filters: {
      uppercase (value) {
        return value.toUpperCase()
      }
    }
  }
</script>

<style scoped>
  .service-slider-container {
    overflow: hidden;
    position: relative;
    background: #f2f2f2;
  }

  [data-scrollable] {
    white-space: nowrap;
    overflow-x: auto;
    overflow-y: hidden;
    position: relative;
    bottom: -20px;
    margin-top: -20px;
  }

  .service-slider-item {
    margin: 20px 0px;
    padding: 0px 0px !important;
    display: inline-flex;
    max-width: unset;
  }

  .service-slider-item:not(:first-child) {
    border-left: 2px solid #C5C5C5
  }

  .service-slider-item-button {
    font-weight: 600;
    font-size: 20px;
    letter-spacing: -1px;
    color: #5F5F5F;
    position: relative;
  }

  .service-slider-item-button.selected {
    color: #0081c1;
  }

  .v-btn--active:before,
  .v-btn:hover:before,
  .v-btn:focus:before {
    background-color: transparent;
  }

  @media (min-width: 320px) and (max-width: 960px) {
    .service-slider-scrollable {
      bottom: unset;
    }

    .service-slider-item {
      margin: 40px 0px 20px 0px;
    }
  }
</style>