<template lang="html">
	<v-flex xs12>
    <v-container fluid grid-list-md class="mt-5">
      <v-layout xs12 row wrap class="testimonies">
        <v-carousel>
          <v-carousel-item
            v-for="(item,i) in list"
            :key="i"
            active-class="active-testimony"
            transition="fade"
            height="'350'"
            hide-delimiters="true"
            next-icon="arrow_right"
            prev-icon="arrow_left"
          >
            <v-layout row>
              <v-flex xs6 class="pt-5">
                <h2 class="display-1 font-weight-bold text-uppercase text-xs-center" style="color:#434343;">
                  ¿QUE OPINAN <br>
                  NUESTROS CLIENTES?
                </h2>
                <v-layout class="mt-4" row d-flex justify-center>
                  <v-img width="32px" max-width="32px" class="mr-2" :src="'/icons/star.svg'" v-for="(n, i) in item.stars" :key="i"></v-img>
                </v-layout>
                <h3 class="subheading font-weight-medium text-xs-center mt-3 px-5 pb-2" style="color:rgb(151, 147, 147);">
                  {{item.description}}
                </h3>
              </v-flex>
              <v-flex xs6 class="logo-testimony">
                <div class="lt-img" :style="'background-image:url(/images/testimonies/'+item.logo">.</div>
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
    props: ['list'],
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

.logo-testimony {
    background-image: url(/icons/puntos_de_fondo.svg);
    background-position: right;
    background-size: 80%;
}

.lt-img {
    background-size: contain;
    background-repeat: no-repeat;
    color: transparent;
    width: 200px;
    height: 200px;
    margin-left: 22%;
    margin-top: 12%;
}
</style>
