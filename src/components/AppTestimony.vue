<template lang="html">
	<v-flex :class="width">
    <v-container fluid grid-list-md>
      <v-layout xs12 row wrap class="testimonies">
        <v-carousel :interval="5000" hide-delimiters>
          <v-carousel-item
            v-for="(item,i) in completeExamples"
            :key="i"
            active-class="active-testimony"
            height="'350'"
            hide-delimiters="true"
            next-icon="arrow_right"
            prev-icon="arrow_left"
          >
            <v-layout row wrap>
              <v-flex class="justify-lg-center  mb-2" xs12 md6 order-xs2 order-md1>
                <h2 class="display-1  xs-subheading font-weight-bold text-xs-center hidden-md-and-down" style="color:#434343; font-size: 33px;">
                  ¿Qué opinan nuestros clientes?
                </h2>
                <v-layout class="mt-4 mt-lg-5 justify-lg-center" row d-flex justify-center>
                  <div class="text-xs-center">
                    <v-rating class="testimony-rating" :value="item.stars" readonly></v-rating>
                  </div>
                </v-layout>
                <h3 class="subheading font-weight-medium text-xs-center mt-3 pb-2">
                  {{item.description}}
                </h3>
                <h3 class="subheading font-weight-medium text-xs-center mt-0 pb-2" style="color:rgb(67, 67, 67);">
                  {{item.company}}
                </h3>
                <v-flex>
                  <a @click="$router.push('/opiniones')" class="text-xs-center font-weight-medium" style="margin:auto; display:block;     color: #ff9800 !important;">
                    VER TODAS LAS OPINIONES
                  </a>
                </v-flex>
              </v-flex>
              <v-flex xs12 md6 class="logo-testimony" order-xs1 order-md2>
                <h2 class="display-1 xs-subheading font-weight-bold text-xs-center pb-4 hidden-md-and-up" style="color:#434343; font-size: 33px;">
                  ¿Qué opinan nuestros clientes?
                </h2>
                <img :alt="alt" class="--puntos" src="/icons/puntos_de_fondo.svg">
                 <img class="lt-img" :src="item.logo" :alt="item.company + ' Testimonio'">
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
      },
      alt: String
    },
    mounted () {
      this.completeExamples = this.list
      this.itemsLimit = undefined
    },
    data: () => ({
      itemsLimit: undefined,
      completeExamples: {
        default: [],
        type: Array
      }
    }),
    created () {
      this.completeExamples = this.list
      this.itemsLimit = 1
      this.completeExamples = this.itemsLimit ? this.completeExamples.slice(0, this.itemsLimit) : this.list
    },
    methods: {

    },
    computed: {
    }
  }
</script>

<style>


.testimonies .v-responsive__sizer, .testimonies .v-carousel__item {
  transition: unset !important;
  -webkit-transition: unset !important; 
}

.testimonies .v-carousel{
  height: 400px;
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



.testimony-rating i.v-icon.v-icon--link.material-icons.theme--dark.accent--text {
    color: silver !important;
}

.logo-testimony {
    position: relative;
    min-height: 360px;
}

.logo-testimony .\--puntos {
    position: absolute;
    width: 600px;
    right: -31%;
    top: -43%;
}

.logo-testimony .lt-img {
    position: absolute;
    width: 53%;
    left: 28%;
    top: 19%;
}

.testimonies .v-window.v-carousel {
    height: 100% !important;
}
.testimonies .v-window.v-carousel {
    height: 100% !important;
}
 .testimonies   .v-image {
    height: 100% !important;
}

.v-carousel__prev, .v-carousel__next {
  border: none !important;
}


@media (min-width: 320px) and (max-width: 640px) {
  .testimonies .v-carousel__prev {
    left: 0px !important;
    top: 33%;
  }
  .testimonies .v-carousel__next {
    left: 90% !important;
    top: 33%;
  }

  .testimonies .v-carousel {
    height: 680px;
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

@media (min-width:1900px){
  .justify-lg-center{
    justify-content: center;
    margin-top: 8%;
  }

  .testimonies .v-carousel {
    height: 600px;
  }
}

</style>
