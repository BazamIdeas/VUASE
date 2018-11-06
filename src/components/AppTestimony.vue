<template lang="html">
	<v-flex :class="width">
    <v-container fluid grid-list-md>
      <v-layout xs12 row wrap class="testimonies">
        <v-carousel>
          <v-carousel-item
            v-for="(item,i) in list"
            :key="i"
            active-class="active-testimony"
            height="'350'"
            hide-delimiters="true"
            next-icon="arrow_right"
            prev-icon="arrow_left"
          >
            <v-layout row wrap>
              <v-flex xs12 md6 class="pt-5">
                <h2 class="display-1 xs-subheading font-weight-bold text-uppercase text-xs-center" style="color:#434343;">
                  ¿QUE OPINAN <br class="hidden-xs-and-down">
                  NUESTROS CLIENTES?
                </h2>
                <v-layout class="mt-4" row d-flex justify-center>
                  <div class="text-xs-center">
                    <v-rating class="testimony-rating" :value="item.stars" readonly></v-rating>
                  </div>
                </v-layout>
                <h3 class="subheading font-weight-medium text-xs-center mt-3 px-5 xs-px-0 pb-2" style="color:rgb(151, 147, 147);">
                  {{item.description}}
                </h3>
              </v-flex>
              <v-flex xs12 md6 class="logo-testimony">
                <img class="--puntos" src="/icons/puntos_de_fondo.svg">
                <img class="lt-img" :src="item.logo">
              </v-flex>
            </v-layout>
          </v-carousel-item>
        </v-carousel>
			</v-layout>
		</v-container>
  </v-flex>
</template>

<script lang="js">
  export default {
    props: {
      list: {
        type: Array,
        default: undefined
      },
      width: {
        default: 'xs12'
      }
    },
    mounted () {
    },
    data () {
      return {

      }
    },
    methods: {

    },
    computed: {
    }
  }
</script>

<style>
@media (min-width: 320px) and (max-width: 640px) {
  .testimonies .v-carousel__prev, .testimonies .v-carousel__next {
    display: none;
  }
  .testimonies .v-carousel {
    height: 650px !important;
  }
   .testimonies .logo-testimony .lt-img {
      position: initial;
      max-width: 95%;
      width: auto;
      margin: auto;
      display: block;
  }
  .logo-testimony .\--puntos {
    display: none;
  }
  .logo-testimony {
      position: relative;
      min-height: 200px;
  }
  .logo-testimony .lt-img {
      position: initial;
      max-width: 95%;
      margin: auto;
      display: block;
  }
}


.testimonies .v-responsive__sizer, .testimonies .v-carousel__item {
  transition: unset !important;
  -webkit-transition: unset !important; 
}

.testimonies .v-carousel{
  height: 350px;
  box-shadow: unset;
}

.testimonies .v-carousel__prev {
  left: 20% !important;
}

.testimonies .v-carousel__prev, .testimonies .v-carousel__next {
  border: 2px solid silver;
}

.testimonies .v-carousel__next {
  left: 25% !important;
  right: unset !important;
}

.testimonies .v-carousel__prev .v-icon, .testimonies .v-carousel__next .v-icon{
  color: silver !important;
  font-size: 32px !important;
}

.testimonies div.v-carousel__controls {
  display: none;
}

.testimony-rating i.v-icon.v-icon--link.material-icons.theme--dark.accent--text {
    color: silver !important;
}

.logo-testimony {
    position: relative;
    min-height: 360px;
}

  .logo-testimony .--puntos {
      position: absolute;
      width: 500px;
      right: -15%;
      top: -28%;
  }

  .logo-testimony .lt-img {
      position: absolute;
      width: 40%;
      left: 34%;
      top: 31%;
  }
</style>
