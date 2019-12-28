<template lang="html">
	<v-flex xs12>
    <v-container fluid class="pa-0">
      <v-layout xs12 row wrap class="top-service-slider">
        <v-flex xs12>

          <style>
            .top-service-slider .v-carousel {
                min-height: {{ heightSlider + 'px'}};
                height: auto;
            }

            @media (min-width: 320px) and (max-width: 960px) {
              .content-text-service-slider{
                padding: 16px;
              }
              .top-service-slider .v-carousel__item > .v-image__image--cover {
                background-position: center top !important;
                background-size: {{service.topSliderBgSize || '90%'}} auto !important;
              }

              .top-service-slider .v-carousel__prev, .top-service-slider .v-carousel__next {
                position: absolute;
                top: {{service.arrowsTop || '30%'}};
              }
            }

            @media (min-width: 960px) {
              .sliderbody-img {
                padding: 0 20px 0 40px;
              }
              .sliderbody-text {
                padding: 30px 60px 0 10px;
              }
              .content-text-service-slider{
                padding-top: 40px;
              }
            }

          </style>
          <v-carousel hide-delimiters>
            <v-carousel-item
              v-for="(item,i) in service.topSlider"
              :key="i">
              <v-layout row wrap class="content-text-service-slider" ref="sliderbody">
                <v-flex xs12 offset-xs0 md7 class="sliderbody-img">
                  <img width="100%" :alt="alt" class="mb-2" :src="item.url">
                </v-flex>
                <v-flex xs12 offset-xs0 md5>
                  <v-layout row wrap class="sliderbody-text">
                    <v-flex xs12 sm4 md1 class="hidden-sm-and-down">
                      <img width="100%" :alt="alt" class="mb-2 mr-2" :src="service.icon">
                    </v-flex>
                    <v-flex xs12 sm8 md11 class="mb-2">
                      <h1 class="font-weight-bold display-1 ml-2" :style="'color:'+item.color">{{titleLanding}}</h1>
                    </v-flex>
                    <v-flex xs12 v-if="service.description" class="mb-2 text-xs-justify">
                      <span class="body-2" v-html="service.description"></span>
                    </v-flex>
                    <v-flex xs12 v-if="service.list" class="service-box-list mb-3">
                      <ul>
                        <li v-for="(checkItem, i) in service.list" :key="i" class="body-1 font-weight-medium mb-2">
                          <v-icon :color="item.color" class="font-weight-bold" style="font-size: 18px">check</v-icon> {{checkItem}}
                          </li>
                        <li class="body-1 font-weight-medium mb-2">
                          <v-icon :color="item.color" class="font-weight-bold" style="font-size: 18px">check</v-icon> 
                          <strong>Nuestro precio no viene con sorpresas. Te damos un precio cerrado de: 
                          <span  v-if="price.currency.display == 'left'">
                                {{price.currency.symbol}}
                                {{price.value}}
                              </span>

                              <span style="color:#F7941F;" class="title font-weight-medium" v-if="price.currency.display == 'right'">
                                {{price.value}}
                                {{price.currency.symbol}}
                              </span>
                              </strong>
                          </li>
                      </ul>
                    </v-flex>
                    <v-container fluid grid-list-md class="pa-0">
                      <v-layout xs12 row wrap>
                        <v-flex xs12 sm5>
                          <v-btn flat class="btn-simple" block @click="$vuetify.goTo('#como-funciona')">¿CÓMO FUNCIONA?</v-btn>
                        </v-flex>
                        <v-flex xs12 sm7>
                          <v-btn flat round class="btn-simple" block style="border:none;" :style="'background: #004e7c; color:white !important;'" :to="comenzarUrl">OBTÉN TU DISEÑO</v-btn>
                        </v-flex>
                        <!--<v-flex xs12>
                          <h3 class="headline text-uppercase font-weight-bold">
                            PRECIO CERRADO:
                              <span :style="'color:'+item.color" class="display-1 font-weight-medium" v-if="price.currency.display == 'left'">
                                {{price.currency.symbol}}
                                {{price.value}}
                              </span>

                              <span style="color:#F7941F;" class="display-1 font-weight-medium" v-if="price.currency.display == 'right'">
                                {{price.value}}
                                {{price.currency.symbol}}
                              </span>
                          </h3>
                        </v-flex>-->
                      </v-layout>
                    </v-container>
                  </v-layout>
                </v-flex>
              </v-layout>
            </v-carousel-item>
          </v-carousel>
        </v-flex>
			</v-layout>
		</v-container>
  </v-flex>
</template>

<script lang="js">
  export default {
    data: () => ({
      heightSlider: 700
    }),
    props: ['id', 'service', 'price', 'slug', 'alt'],
    mounted () {
      this.resizeSlider()
    },
    computed: {
      comenzarUrl () {
        const brief = { service: { id: this.id, name: this.service.title, slug: this.slug, quantity: 1 }, designs: [], styles: {}, colors: [], customColors: '', information: {}, subServices: [] }

        if (this.$storage) this.$storage.set('brief', brief)

        if (this.slug === 'logo-y-pagina-web' || this.slug === 'pagina-web') {
          console.log(this.$router.currentRoute.path)
          return this.$router.currentRoute.path + '/cotizacion'
        } else {
          if (this.slug.includes('logo') || this.slug === 'imagen-corporativa') return this.$router.currentRoute.path + '/brief/disenos'
          return this.$router.currentRoute.path + '/brief/estilos'
        }
      },
      titleLanding () {
        return this.service.titleLanding ? this.service.titleLanding : this.service.title
      }
    },
    methods: {
      resizeSlider () {
        var thisV = this
        setTimeout(() => {
          thisV.heightSlider = thisV.$refs.sliderbody[0].clientHeight
        }, 1500)
      }
    }
  }
</script>

<style>
.top-service-slider .v-carousel{
  box-shadow: unset;
}

.top-service-slider .v-btn--small{
  width:20px !important;
  height: 20px !important;
}

.top-service-slider .v-responsive__sizer, .top-service-slider .v-carousel__item {
  transition: unset !important;
  -webkit-transition: unset !important; 
}

.top-service-slider .v-carousel__prev, .top-service-slider .v-carousel__next {
  position: absolute;
  top: 40%;
  z-index: 1;
  -webkit-transform: translateY(-50%);
  transform: translateY(-42%);
  border: 0px solid transparent;
}

.top-service-slider .v-carousel__item > .v-image__image--cover {
  background-size: 40%;
  background-position: 15% top !important;
}

.top-service-slider div.v-carousel__controls {
  position: absolute;
}

.top-service-slider .v-carousel__controls button {
  margin: 0 !important;
}

.top-service-slider div.v-carousel__controls button, .v-carousel__prev button, .v-carousel__next button{
  color: #004777 !important;
}
.service-box-list ul, .service-box-list ol {
  list-style-type: none;
  padding-left: 0px;
}

.service-box-list li {
  padding-left: 0px;
}

@media (min-width: 600px) and (max-width: 860px) {
  .content-text-service-slider{
    padding: 16px;
  }
}



</style>
