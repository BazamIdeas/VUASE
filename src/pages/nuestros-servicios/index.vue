<template>
  <section>
    <AppServicesCarousel/>
    <AppServicesSlider @select-group="setGroup" class="mb-4"/>
    <transition appear :name="transitionGroupContent">
      <v-container d-block grid-list-md text-xs-left v-if="groupContent == 0" key="0">
        <v-layout row wrap class="mb-5">
          <v-flex xs12 md4>
            <AppServiceBox br outstanding name="Lorem Ipsum" currency="$" price="13.4" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged" :list="['asdad']" start-button />
          </v-flex>
          <v-flex xs12 md4>
            <AppServiceBox br name="Lorem Ipsum" currency="$" price="13.4" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged" start-button />
          </v-flex>
          <v-flex xs12 md4>
            <AppServiceBox name="Lorem Ipsum" currency="$" price="13.4" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged" start-button />
          </v-flex>
        </v-layout>
        <v-layout row wrap class="mb-5">
          <v-flex xs6 md7>
            <AppServiceBox bt bb name="Lorem Ipsum" currency="$" price="13.4" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged" start-button />
          </v-flex>
          <v-flex xs6 md5>
            <v-carousel v-if="carouselItems && carouselItems.length" interval="8000" hide-controls hide-delimiters style="height: 100%;">
              <v-carousel-item v-for="(item, i) in carouselItems" :key="i" :transition="'slide-x-transition'">
                <img :src="item.src" alt="" width="100%"/>
              </v-carousel-item>
            </v-carousel>
          </v-flex>
        </v-layout>
        <v-layout row wrap>
          <v-flex xs12 md6>
            <AppServiceBox br name="Lorem Ipsum" currency="$" price="13.4" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged" start-button />
          </v-flex>
          <v-flex xs12 md6>
            <AppServiceBox name="Lorem Ipsum" currency="$" price="13.4" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged" start-button />
          </v-flex>
        </v-layout>
      </v-container>
      <v-container d-block grid-list-md text-xs-left v-else-if="groupContent == 1" key="1">
        <v-layout row wrap>
          <v-flex xs4>
            <AppServiceBox name="Lorem Ipsum 2" currency="$" price="17.4" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged"
              start-button />
          </v-flex>
        </v-layout>
      </v-container>
      <v-container d-block grid-list-md text-xs-left v-else-if="groupContent == 2" key="2">
        <v-layout row wrap>
          <v-flex xs4>
            <AppServiceBox name="Lorem Ipsum 3" currency="$" price="2537.4" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              start-button />
          </v-flex>
          <v-flex xs4>
            <AppServiceBox name="Lorem Ipsum 3" currency="$" price="2537.4" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              start-button />
          </v-flex>
        </v-layout>
      </v-container>
    </transition>
  </section>
</template>

<script>
  export default {
    asyncData (context) {
      return { name: 'NUESTROS SERVICIOS' }
    },
    data () {
      return {
        groupContent: 0,
        transitionGroupContent: 'slide-x-transition',
        carouselItems: [
          { src: 'images/carousels/servicios_folletos.png' },
          { src: 'images/carousels/servicios_folletos.png' }
        ]
      }
    },
    methods: {
      setGroup: function (index) {
        if (this.groupContent < index) {
          this.transitionGroupContent = 'slide-x-reverse-transition'
        } else {
          this.transitionGroupContent = 'slide-x-transition'
        }
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
