<template>
  <section>
    <AppServicesCarousel/>
    <AppServicesSlider @select-group="setGroup" class="mb-4"/>
    <transition-group appear :name="transitionGroupContent">
      <v-container d-block grid-list-md text-xs-left v-if="groupContent === i" :key="i" v-for="(container, i) in containers">
        <v-layout row wrap v-for="(layout, i) in container.layouts" :key="i" class="mb-5">
          <v-flex 
            :class="{
              'xs6 md7': layout.carousel, 
              'xs4': !layout.carousel && layout.services.length == 3, 
              'xs6': !layout.carousel && layout.services.length == 2
            }" 
            v-for="(service, index) in layout.services" :key="service.slug">
              <AppServiceBox 
                :class="{
                  'bt bb': layout.carousel && !container.noBorder, 
                  'br': !layout.carousel && (index !== layout.services.length - 1) && !container.noBorder
                }"  
                :name="service.name" 
                :currency="service.prices[0].currency.symbol" 
                :price="service.prices[0].value" 
                :description="service.description"
                :list="service.list"
                :icon="service.icon"
                :url="service.slug" 
                start-button 
              />
          </v-flex>
          <v-flex xs6 md5 v-if="layout.carousel">
            <v-carousel 
              interval="8000" 
              hide-controls hide-delimiters 
              style="height: 100%;">
              <v-carousel-item v-for="(item, i) in layout.carousel" :key="i" :transition="'slide-x-transition'">
                <img :src="item.src" alt="" width="100%"/>
              </v-carousel-item>
            </v-carousel>
          </v-flex>
        </v-layout>
      </v-container>
    </transition-group>
  </section>
</template>

<script>
  export default {
    async fetch ({ store }) {
      await store.dispatch('services/getAll')
    },
    data () {
      return {
        groupContent: 0,
        transitionGroupContent: 'slide-x-transition'
      }
    },
    computed: {
      services () { return this.$store.state.services.list },
      getBySlug (slug) { return this.$store.getters.services.getBySlug(slug) },
      containers () {
        return this.$store.state.services.groups
      }
    },
    methods: {
      setGroup: function (index) {
        if (this.groupContent < index) this.transitionGroupContent = 'slide-x-reverse-transition'
        else this.transitionGroupContent = 'slide-x-transition'
        this.groupContent = index
      }
    }
  }
</script>

<style scoped>
  .v-carousel {
    box-shadow: none;
  }
</style>
