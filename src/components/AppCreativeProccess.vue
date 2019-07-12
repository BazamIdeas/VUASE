<template lang="html">
	<v-flex xs12>
    <v-container fluid class="pa-0 creative-process mt-4">
      <v-layout row wrap>
        <v-flex xs12 class="mb-3 creative-process-title-container">
          <AppHeading :number="'2'" :size="'display-1'" :title="title" class="mb-1" />
        </v-flex>
        <style>
          .creative-process-carousel .v-carousel {
            height: {{ sliderHeight }}px !important;
          }
        </style>
        <v-flex xs12 md8 class="creative-process-carousel mt-2">
          <v-carousel :hide-delimiters="true" :cycle="false" @input="inputSlider">
            <v-carousel-item v-for="(slide,i) in slides" :key="i+'a'">
              <div class="px-5" ref="creativeProcessBody">
                <img width="100%" :src="slide.src" >
              </div>
            </v-carousel-item>
          </v-carousel>
        </v-flex>

        <v-flex xs12 md4 class="pt-3">
          <v-layout row wrap class="process-steps"  v-if="actualStep <= 2">
            <v-flex xs12 md4 class="mb-2 mt-2 creative-process-title-container" v-if="alters.length">
              <AppHeading :number="'3'" size="title" title="LOGO" />
            </v-flex>
            <v-flex xs12 sm12 md12 hidden-sm-and-down v-for="(step, i) in steps" :key="i+'b'" class="px-3" :class="{ 'actual-step': i === actualStep }">
              <v-layout row>
                <v-flex align-center d-flex>
                  <img class="img-process-step mr-2" width="40px" :src="step.icon" :alt="step.alt"/>
                </v-flex>
                <v-flex xs10 sm11 align-center d-flex class="process-step">
                  <AppHeading style="line-height:22px" :title="step.title" :size="''" :number="'3'" :align="'left'" :color="step.color"></AppHeading>
                </v-flex>             
              </v-layout>
              <v-layout row>
                <v-flex xs12>
                  <p class="body-2">{{step.description}}</p>
                </v-flex>
              </v-layout>
            </v-flex>

            <v-flex xs12 sm12 md12 hidden-md-and-up v-for="(step,i) in steps" :key="i+'c'" class="px-3" v-show="i == actualStep">
              <v-layout row>
                <v-flex align-center d-flex>
                  <img class="img-process-step mr-2" width="40px" :src="step.icon" :alt="step.alt"/>
                </v-flex>
                <v-flex xs10 sm11 align-center d-flex class="process-step">
                  <AppHeading style="line-height:22px" :title="step.title" :size="''" :number="'3'" :align="'left'" :color="step.color"></AppHeading>
                </v-flex>             
              </v-layout>
              <v-layout row>
                <v-flex xs12>
                  <p class="body-2">{{step.description}}</p>
                </v-flex>
              </v-layout>
            </v-flex>
          </v-layout>


          
          <v-layout row wrap class="process-steps" v-if="alters.length && actualStep >= 3">
            <v-flex v-if="alters.length && actualStep >= 3" xs12 class="mb-2 creative-process-title-container">
              <AppHeading :number="'3'" size="title" title="WEB" />
            </v-flex>
            <v-flex xs12 sm12 md12 hidden-sm-and-down v-for="(alter,i) in alters" :key="i+'d'" class="px-5" :class="{ 'actual-step': i === actualStep }">
              <v-layout row>
                <v-flex align-center d-flex>
                  <img class="img-process-step mr-2" width="40px" :src="alter.icon" :alt="alter.alt"/>
                </v-flex>
                <v-flex xs10 sm11 align-center d-flex class="process-step">
                  <AppHeading :title="alter.title" :size="''" :number="'3'" :align="'left'" :color="alter.color"></AppHeading>
                </v-flex>             
              </v-layout>
              <v-layout row>
                <v-flex xs12>
                  <p class="body-2">{{alter.description}}</p>
                </v-flex>
              </v-layout>
            </v-flex>

            <v-flex xs12 sm12 md12 hidden-md-and-up v-for="(alter,i) in alters" :key="i+'e'" class="px-5" v-show="i == actualStep">
              <v-layout row>
                <v-flex align-center d-flex>
                  <img class="img-process-step mr-2" width="40px" :src="alter.icon" :alt="alter.alt"/>
                </v-flex>
                <v-flex xs10 sm11 align-center d-flex class="process-step">
                  <AppHeading :title="alter.title" :size="''" :number="'3'" :align="'left'" :color="alter.color"></AppHeading>
                </v-flex>             
              </v-layout>
              <v-layout row>
                <v-flex xs12>
                  <p class="body-2">{{alter.description}}</p>
                </v-flex>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
  </v-flex>
</template>

<script lang="js">
  export default {
    data: () => ({
      sliderHeight: 500,
      actualStep: 0
    }),
    mounted () {
      var thisV = this
      let i = 0
      const intervalID = setInterval(() => {
        let height = thisV.$refs.creativeProcessBody[0].clientHeight
        console.log(height)
        if (height !== null && height > 150) {
          thisV.sliderHeight = height
        }

        if (++i === 5) clearInterval(intervalID)
      }, 2000)
    },
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
    },
    methods: {
      inputSlider (e) {
        this.actualStep = e
      }
    }
  }
</script>

<style scoped lang="css">

.process-step{
  height: 70px;
}

.img-process-step{
  max-width: 100%;
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

.creative-process .process-step > div, .creative-process .process-step > div h3 { 
  margin: 0px !important;
}

.flex.px-3.xs12.sm12.md12.hidden-sm-and-down:not(.actual-step), .flex.px-3.xs12.sm12.md12.hidden-sm-and-down:not(.actual-step) h3 {
    color: rgb(158, 158, 158) !important;
}



@media (min-width: 320px) and (max-width: 480px) {

  .creative-process .creative-process-carousel .v-image__image--cover {
    background-size: 80% auto !important;
  }

  .creative-process-title-container, .creative-process-title-container h2{ 
    margin-bottom: 0px !important;
  }
}

@media (min-width: 481px) and (max-width: 639px) {
  .creative-process .creative-process-carousel .v-image__image--cover {
    background-size: 100% auto !important;
  }

  .creative-process-title-container, .creative-process-title-container h2{ 
    margin-bottom: 0px !important;
  }
}

@media (min-width: 640px) and (max-width: 960px) {
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
