<template>
  <section>
    <AppServicesCarousel id="selector" />
    <AppServicesSlider id="servicios" @select-group="setGroup" class="mb-4"/>
    <transition-group appear :name="transitionGroupContent">
      <v-container d-block grid-list-md text-xs-left v-if="groupContent === i" :key="i" v-for="(container, i) in containers">
        <v-layout justify-center wrap row v-for="(layout, i) in container.layouts" :key="i" class="mb-5 xs-mb-2">
          <v-flex 
            class="xs12 border-container"
            :class="{
              'flex md6': layout.carousel, 
              'md4': !layout.carousel && layout.services.length == 3, 
              'md6': !layout.carousel && layout.services.length == 2,
              'bt': layout.carousel && !container.noBorder,
              'bb': layout.carousel && !container.noBorder && container.layouts.length > 2, 
              'br': !layout.carousel && (index !== layout.services.length - 1) && !container.noBorder
            }" 
            v-for="(service, index) in layout.services" :key="service.slug" v-if="validateService(service)">
              <AppServiceBox
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
          <v-flex xs12 md6 v-if="layout.carousel" class="hidden-sm-and-down">
            <v-layout align-center justify-center row class="container-carousel">
              <v-flex style="height: 420px;">
                <v-carousel 
                  :interval="'3000'" 
                  hide-controls  
                  style="height: 100%;">
                  <v-carousel-item v-for="(item, i) in layout.carousel" :key="i"   :transition="'slide-x-transition'">
                    <svg class="img-cuadrada" viewBox="0 0 100 100 " :style="'background: url(' +item.src+')'"></svg>
                  </v-carousel-item>
                </v-carousel>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-container>
    </transition-group>
    <!-- QUE NECESITAS -->
    <v-flex>
      <h2 class="mb-3 display-1 xs-title font-weight-bold text-xs-center">¿AÚN NO ENCUENTRAS LO QUE BUSCAS?</h2>
    </v-flex>
    <v-flex xs12 class="text-xs-center title mb-5 font-weight-medium">
    Vuelve a nuestro
    <a style="color:#1976d2" @click="$vuetify.goTo('#selector')">selector</a> 
    o
    <a style="color:#1976d2" target="_new" @click="$router.push('/contacto')">
      contáctanos
    </a>
  </v-flex> 
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
      },
      validateService (service) {
        if (!service) {
          console.log('el servicio no esta definido')
          return false
        }

        if (!service.dataService) {
          console.log('la data del servicio no esta definida')
          return false
        }
        return true
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
<style>
  .container-carousel button {
    color: #a5a5a5 !important;
  }

  .container-carousel .v-carousel {
    overflow: visible;
  }

 .container-carousel .v-carousel__controls {
      bottom: -8% !important;
  }

  .border-container {
    position: relative;
  }

  .border-container.bt:after {
    content: "";
    width: 80%;
    height: 2px;
    background-color: #a5a5a5;
    position: absolute;
    top: 0;
    left: 0;
  }

  .border-container.bb:before {
    content: "";
    width: 80%;
    height: 2px;
    background-color: #a5a5a5;
    position: absolute;
    bottom: 0;
    left: 0;
  }

  .border-container.br:before {
    content: "";
    width: 2px;
    height: 100%;
    min-height: 400px;
    background-color: #a5a5a5;
    position: absolute;
    right: 0;
    top: 0;
  }

  @media (min-width: 320px) and (max-width: 960px) {
    .container-carousel{
      height: auto;
    }
    .border-container.bt:after, .border-container.bb:before, .border-container.br:before {
        display: none;
    }

    .xs-pt-2{
      padding-top:20px !important;
    }

    .xs-mb-2{
      margin-bottom:20px !important;
    }

    .xs-title{
      font-size:20px !important;
    }
  }
</style>
