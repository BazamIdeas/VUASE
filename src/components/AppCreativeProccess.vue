<template lang="html">
	<v-flex xs12>
    <v-container fluid class="pa-0 creative-process mt-4">
        <v-flex xs12 class="mb-5 creative-process-title-container">
          <AppHeading :number="'2'" :size="'display-1'" :title="title" class="mb-1" />
        </v-flex>
        <v-layout row>
          <v-flex xs12 class="creative-process-carousel">
            <v-carousel :hide-delimiters="true" :cycle="false">
              <v-carousel-item v-for="(slide,i) in slides" :key="i" :src="slide.src">
              </v-carousel-item>
            </v-carousel>
          </v-flex>
        </v-layout>

        <v-flex xs12 class="mb-2 mt-2 creative-process-title-container" v-if="alters.length">
          <AppHeading :number="'2'" size="title" title="LOGO" />
        </v-flex>

        <v-layout row wrap class="process-steps" :class="{ 'pt-5' : alters.length == 0}" >
          <v-flex xs12 sm10 offset-sm1 md4 offset-md0  v-for="(step,i) in steps" :key="i" class="px-4">
            <v-layout row>
              <v-flex align-center d-flex>
                <img class="img-process-step mr-2" width="40px" :src="step.icon" :alt="step.alt"/>
              </v-flex>
              <v-flex xs10 sm11 align-center d-flex class="process-step">
                <AppHeading :title="step.title" :size="''" :number="'2'" :align="'left'" :color="step.color"></AppHeading>
              </v-flex>             
            </v-layout>
            <v-layout row>
              <v-flex xs12>
                <p class="text-xs-justify">{{step.description}}</p>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>


        <v-flex v-if="alters.length" xs12 class="mb-2 creative-process-title-container">
          <AppHeading :number="'2'" size="title" title="WEB" />
        </v-flex>

        <v-layout row wrap class="process-steps" v-if="alters.length">
          <v-flex xs12 sm10 offset-sm1 md4 offset-md0  v-for="(alter,i) in alters" :key="i" class="px-5">
            <v-layout row>
              <v-flex align-center d-flex>
                <img class="img-process-step mr-2" width="40px" :src="alter.icon" :alt="alter.alt"/>
              </v-flex>
              <v-flex xs10 sm11 align-center d-flex class="process-step">
                <AppHeading :title="alter.title" :size="''" :number="'2'" :align="'left'" :color="alter.color"></AppHeading>
              </v-flex>             
            </v-layout>
            <v-layout row>
              <v-flex xs12>
                <p class="text-xs-justify">{{alter.description}}</p>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
    </v-container>
  </v-flex>
</template>

<script lang="js">
  export default {
    props: {
      steps: {
        type: Array,
        default: () => { return [] }
      },
      alters: {
        type: Array,
        default: () => { return [] }
      },
      slides: {
        type: Array,
        default: () => { return [] }
      },
      title: String
    }
  }
</script>

<style scoped lang="css">

.process-step{
  height: 100px;
}

.img-process-step{
  max-width: 100%;
}

.process-steps > div:nth-child(2){
  border-left: 3px solid #d8d8d8;
  border-right: 3px solid #d8d8d8;
}

.process-steps + .process-steps {
  border-top: 3px solid #d8d8d8;
}

@media (min-width: 320px) and (max-width: 480px) {

  .process-steps > div {
    padding-left: 15px !important;
    padding-right: 15px !important;
  }

  .process-steps > div:nth-child(2){
    border-left: none;
    border-right: none;
  }

}

@media (min-width: 481px) and (max-width: 639px) {
  .process-steps > div {
    padding-left: 15px !important;
    padding-right: 15px !important;
  }

  .process-steps > div:nth-child(2){
    border-left: none;
    border-right: none;
  }
}

@media (min-width: 640px) and (max-width: 960px) {
  .process-steps > div {
    padding-left: 15px !important;
    padding-right: 15px !important;
  }

  .process-steps > div:nth-child(2){
    border-left: none;
    border-right: none;
  }
}

@media (min-width: 960px) and (max-width: 1264px) {

}

@media (min-width: 1264px) and (max-width: 1904px) {

}

@media (min-width: 1904px) {}




</style>


<style lang="css">
.creative-process .creative-process-carousel .v-image__image--cover {
    background-size: auto !important; 
}

.creative-process .v-carousel__controls{
  display:none;
}

.creative-process .creative-process-carousel .v-carousel__prev, .creative-process .v-carousel__next {
  top: 50% !important;
  border: none !important;
}

.creative-process .creative-process-carousel .theme--dark.v-btn {
  color: #9e9e9e !important;
}

.creative-process .creative-process-carousel .v-carousel, .creative-process-carousel .v-carousel{
  -webkit-box-shadow: none;  
  box-shadow: none;  
}

.creative-process .process-step > div, .creative-process .process-step > div h2 { 
  margin: 0px !important;
}



@media (min-width: 320px) and (max-width: 480px) {

  .creative-process .creative-process-carousel .v-carousel {
    height: 300px !important;
  }
  .creative-process .creative-process-carousel .v-image__image--cover {
    background-size: 100% auto !important;
  }

  .creative-process .creative-process-carousel .v-carousel__item { 
  }

  .creative-process-title-container, .creative-process-title-container h2{ 
    margin-bottom: 0px !important;
  }
}

@media (min-width: 481px) and (max-width: 639px) {
  .creative-process .creative-process-carousel .v-carousel {
    height: 300px !important;
  }
  .creative-process .creative-process-carousel .v-image__image--cover {
    background-size: 100% auto !important;
  }
  .creative-process .creative-process-carousel .v-carousel__item {
  }

  .creative-process-title-container, .creative-process-title-container h2{ 
    margin-bottom: 0px !important;
  }
}

@media (min-width: 640px) and (max-width: 960px) {
  .creative-process .creative-process-carousel .v-carousel {
    height: 500px !important;
  }
  .creative-process .creative-process-carousel .v-image__image {
    background-size: 100% auto !important;
  }

  .creative-process-title-container, .creative-process-title-container h2{ 
    margin-bottom: 0px !important;
  }
}

@media (min-width: 960px) and (max-width: 1264px) {

}

@media (min-width: 1264px) and (max-width: 1904px) {

}

@media (min-width: 1904px) {}



</style>
