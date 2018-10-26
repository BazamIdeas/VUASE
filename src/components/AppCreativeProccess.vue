<template lang="html">
	<v-flex xs12>
    <v-container grid-list-md fluid class="pa-0 creative-process mt-5">
        <v-flex xs12 class="mb-5">
          <AppHeading :number="'1'" :size="'display-1'" :title="title" class="mb-3" />
        </v-flex>
        <v-layout row>
          <v-flex xs12 class="creative-process-carousel">
            <v-carousel :hide-delimiters="true">
              <v-carousel-item v-for="(slide,i) in slides" :key="i" :src="slide.src">
              </v-carousel-item>
            </v-carousel>
          </v-flex>
        </v-layout>
        <v-layout row class="py-5 process-steps">
          <v-flex xs4 v-for="(step,i) in steps" :key="i" class="px-5">
            <v-layout row>
              <v-flex xs2 align-center d-flex>
                <img class="img-process-step" :src="step.icon" :alt="step.alt"/>
              </v-flex>
              <v-flex xs10 align-center d-flex class="process-step">
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
    </v-container>
  </v-flex>
</template>

<script lang="js">
  export default {
    props: {
      steps: {
        type: Array,
        default: []
      },
      slides: {
        type: Array,
        default: []
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

</style>
