<template lang="html">
	<v-flex xs12>
    <v-container fluid grid-list-md>
      <v-layout xs12 row wrap class="top-service-slider">
        <v-flex xs12>
          <v-carousel>
            <v-carousel-item
              v-for="(item,i) in service.topSlider"
              :key="i"
              :src="item.url"
            >
              <v-layout xs12 row wrap>
                <v-flex xs5 offset-xs7>
                  <v-img width="120px" :src="service.icon"></v-img>
                  <v-flex xs12 class="mb-2">
                    <h2 class="headline font-weight-bold text-uppercase" :style="'color:'+item.color">{{service.title}}</h2>
                  </v-flex>
                  <v-flex xs12 v-if="service.description" class="mb-2 text-xs-justify">
                    <span class="body-2">{{ service.description }}</span>
                  </v-flex>
                  <v-flex xs12 v-if="service.list" class="service-box-list">
                    <ul>
                      <li v-for="(checkItem, i) in service.list" :key="i" class="body-1 font-weight-medium mb-2">{{checkItem}}</li>
                    </ul>
                  </v-flex>
                  <v-layout xs12 row wrap>
                    <v-flex xs5>
                      <v-btn flat class="btn-simple" style="border:none;" :style="'background:'+item.color + '; color:white !important;'" :to="comenzarUrl">COMENZAR</v-btn>
                    </v-flex>
                    <v-flex xs5>
                      <v-btn flat class="btn-simple" block><a href="#que-te-ofrecemos">¿QUÉ TE OFRECEMOS?</a></v-btn>
                      <v-btn flat class="btn-simple" block><a href="#como-funciona">¿CÓMO FUNCIONA?</a></v-btn>
                    </v-flex>
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
    props: ['service'],
    mounted () {
    },
    data () {
      return {
        comenzarUrl: this.$router.currentRoute.path + '/brief'
      }
    },
    methods: {

    },
    computed: {
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

.top-service-slider .v-carousel__prev, .top-service-slider .v-carousel__next{
  display: none;
}

.top-service-slider .v-carousel__item > .v-image__image--cover {
  background-size: 50%;
  background-position: left !important;
}

.top-service-slider div.v-carousel__controls {
  position: absolute;
  left: 15%;
}

.top-service-slider .v-carousel__controls button {
  margin: 0 !important;
}

.top-service-slider div.v-carousel__controls button{
  color: #4b4b4b;
}
.service-box-list ul, .service-box-list ol {
  padding-left: 17px;
  list-style-image: url('/images/icons/check.png');
}

</style>
