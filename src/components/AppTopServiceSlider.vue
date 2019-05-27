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
                padding: 0 60px 0 60px;
              }
              .content-text-service-slider{
                padding-top: 40px;
              }
            }

          </style>
          <v-carousel hide-delimiters>
            <v-carousel-item
              v-for="(item,i) in service.topSlider"
              :key="i"
            >
              <v-layout row wrap class="content-text-service-slider" ref="sliderbody">
                <v-flex xs12 offset-xs0 md5 offset-md1 class="sliderbody-img">
                  <img width="100%" :alt="alt" class="mb-2" :src="item.url">
                </v-flex>
                <v-flex xs12 offset-xs0 md5>
                  <v-layout row wrap>
                    <v-flex xs12 sm4 md12 class="hidden-sm-and-down">
                      <img width="80px" :alt="alt" class="mb-2" :src="service.icon">
                    </v-flex>
                    <v-flex xs12 sm8 md12 class="mb-2">
                      <h2 class="headline font-weight-bold text-uppercase" :style="'color:'+item.color">{{service.title}}</h2>
                    </v-flex>
                    <v-flex xs12 v-if="service.description" class="mb-2 text-xs-justify">
                      <span class="body-2" v-html="service.description"></span>
                    </v-flex>
                    <v-flex xs12 v-if="service.list" class="service-box-list hidden-sm-and-down">
                      <ul>
                        <li v-for="(checkItem, i) in service.list" :key="i" class="body-1 font-weight-medium mb-2">
                          <v-icon :color="item.color" class="mr-3 font-weight-bold">check</v-icon> {{checkItem}}
                          </li>
                      </ul>
                    </v-flex>
                    <v-layout xs12 row wrap>
                      <v-flex xs12 sm4>
                        <v-btn flat class="btn-simple ml-0" style="border:none;" :style="'background:'+item.color + '; color:white !important;'" :to="comenzarUrl">COMENZAR</v-btn>
                      </v-flex>
                      <v-flex xs12 sm6 class="hidden-sm-and-down">
                        <v-btn flat class="btn-simple" block @click="$vuetify.goTo('#que-te-ofrecemos')">¿QUÉ TE OFRECEMOS?</v-btn>
                        <v-btn flat class="btn-simple" block @click="$vuetify.goTo('#como-funciona')">¿CÓMO FUNCIONA?</v-btn>
                      </v-flex>
                    </v-layout>
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
      heightSlider: 0
    }),
    props: ['id', 'service', 'slug', 'alt'],
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
      }
    },
    methods: {
      resizeSlider () {
        var thisV = this
        setTimeout(() => {
          thisV.heightSlider = thisV.$refs.sliderbody[0].clientHeight
        }, 100)
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
