<template>
  <section>
    <AppServicesCarousel/>
    <AppServicesSlider id="servicios" @select-group="setGroup" class="mb-4"/>
    <transition-group appear :name="transitionGroupContent">
      <v-container d-block grid-list-md text-xs-left v-if="groupContent === i" :key="i" v-for="(container, i) in containers">
        <v-layout justify-center row v-for="(layout, i) in container.layouts" :key="i" class="mb-5">
          <v-flex 
            :class="{
              'flex xs12 md6': layout.carousel, 
              'xs12 md4': !layout.carousel && layout.services.length == 3, 
              'xs12 md6': !layout.carousel && layout.services.length == 2
            }" 
            v-for="(service, index) in layout.services" :key="service.slug">
              <AppServiceBox 
                :class="{
                  'bt': layout.carousel && !container.noBorder,
                  'bb': layout.carousel && !container.noBorder && container.layouts.length > 2, 
                  'br': !layout.carousel && (index !== layout.services.length - 1) && !container.noBorder
                }"
                :id="service.id" 
                :name="service.dataService.title"  
                :price="service.price" 
                :description="service.dataService.shortDescription"
                :list="service.dataService.list"
                :icon="service.dataService.icon"
                :url="service.slug" 
                :addon-service="service.dataService.addonService"
                :start-with="service.dataService.startWith"
              />
          </v-flex>
          <v-layout xs12 md6 align-center justify-center row class="container-carousel mt-0">
              <v-flex xs12 style="height: 100%;" v-if="layout.carousel" >
                <v-carousel 
                  :interval="'3000'" 
                  hide-controls hide-delimiters 
                  style="height: 100%; width:100%;">
                  <v-carousel-item v-for="(item, i) in layout.carousel" :key="i"   :transition="'slide-x-transition'">
                    <svg class="img-cuadrada" viewBox="0 0 100 100 " :style="'background: url(' +item.src+')'"></svg>
                  </v-carousel-item>
                </v-carousel>
              </v-flex>
          </v-layout>
        </v-layout>
      </v-container>
    </transition-group>
  </section>
</template>

<script>
  export default {
    props: ['tab'],
    async fetch ({ store }) {
      await store.dispatch('services/getAll')
    },
    created () {
      let index = parseInt(this.$router.app._route.query.tab)
      if (index) {
        this.setGroup(index)
      }
    },
    head () {
      return {
        titleTemplate: '%s | Servicios',
        meta: [
          { name: 'og:title', content: 'bar' }
        ]
      }
    },
    data () {
      return {
        transitionGroupContent: 'slide-x-transition',
        groupContent: 0
      }
    },
    computed: {
      services () {
        return this.$store.state.services.list
      },
      getBySlug (slug) { return this.$store.getters['services/getBySlug'](slug) },
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

  .container-carousel{
    height: 420px;
  }

  .img-cuadrada {
    background-size: auto 100% !important;
    background-repeat: no-repeat !important;
    background-position: center center !important;
    max-height: 100%;
  }
</style>
