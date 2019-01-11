<template>
  <v-container grid-list-md fluid class="mt-5 mb-3">
    <v-flex xs12 class="mb-2">
      <AppHeading :number="'2'" :size="'display-1'" align="center"  :title="title"/>
    </v-flex>
    <v-layout row wrap py-4>
      <v-flex xs12 offset-xs0 sm5 offset-sm1 px-3 class="addons-first">
        <div class="addons-image-container">
          <img alt="Liderlogo addons" :src="first.image" class="addons-image"/>
        </div>
        <v-layout row>
          <v-flex xs12  class="text-xs-center adddons-title-container">
            <AppHeading :title="first.title" :size="''" :number="'2'" :margin="'ma-0'"></AppHeading>
          </v-flex>
        </v-layout>
        <v-layout row v-if="first.subtitle">
          <v-flex xs12 class="text-xs-center">
            <span class="addons-subtitle mt-0 mb-4">{{first.subtitle}}</span>
          </v-flex>
        </v-layout>
        <v-layout row wrap align-center justify-center>
          <v-flex xs12 sm12 md5 offset-sm1 d-flex justify-end>
            <v-btn :to="first.brief" flat class="ma-0 px-2 addons-start">COMENZAR</v-btn>
          </v-flex>
          <v-flex class="know-more-container" xs12 sm12 md6 v-if="!first.notSecondButton">
            <v-btn :to="first.url" flat class="ma-0 px-2 know-more" large >
              conocer más&nbsp;&nbsp;<v-icon>add_circle_outline</v-icon>
            </v-btn>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex xs12 sm5 px-3 class="addons-last">
        <div class="addons-image-container">
          <img alt="Liderlogo addons" :src="last.image" class="addons-image"/>
        </div>
        <v-layout row>
          <v-flex xs12 class="text-xs-center adddons-title-container">
            <AppHeading :title="last.title" :size="''" :number="'2'"></AppHeading>
          </v-flex>
        </v-layout>
        <v-layout row class="text-xs-center" v-if="last.subtitle">
          <v-flex xs12>
            <span class="addons-subtitle mt-0 mb-4">{{last.subtitle}}</span>
          </v-flex>
        </v-layout>
        <v-layout row wrap align-center justify-center>
          <v-flex xs12 sm12 md5 offset-sm1 d-flex justify-end>
            <v-btn :to="last.brief" flat class="ma-0 px-2 addons-start">COMENZAR</v-btn>
          </v-flex>
          <v-flex class="know-more-container" xs12 sm12 md6 v-if="!last.notSecondButton">
            <v-btn :to="last.url" flat class="ma-0 px-2 know-more" large>
              conocer más&nbsp;&nbsp;<v-icon>add_circle_outline</v-icon>
            </v-btn>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  let defaultService = {
    type: Object,
    default () {
      return {
        image: '',
        title: '',
        subtitle: '',
        url: ''
      }
    }
  }

  export default {
    props: {
      first: defaultService,
      last: defaultService,
      title: String
    }
  }
</script>

<style scoped>
  .addons-image{
    max-width: 100%;
    max-height: 100%;
    display: block;
    margin: auto;
  }
  .addons-subtitle{
    padding: 10px 15px;
    border: 2px solid #d51500;
    color: #d51500;
    font-weight: bold;
    margin: auto;
    display: inline-block;
  }

  .adddons-title-container{
    margin-top: 20px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .addons-first{
    border-right: 1px solid #adadad
  }

  .addons-last{
    border-left: 1px solid #adadad
  }

  .addons-image-container{
    height: 350px;
    display: flex;
    align-items: center;
  }


  @media (min-width: 320px) and (max-width: 480px) {
    .addons-first,.addons-last{
      border: none;
    }
    .addons-first{
      margin-bottom: 50px;
    }

    .addons-image-container {
      height: 250px;
    }
  }

  @media (min-width: 481px) and (max-width: 639px) {
    .addons-first,.addons-last{
      border: none;
    }  
    .addons-first{
      margin-bottom: 50px;
    }

    .addons-image-container {
      height: 250px;
    }
  }

  @media (min-width: 640px) and (max-width: 960px) {

    .addons-image-container {
      height: 250px;
    }
   
  }

  @media (min-width: 960px) and (max-width: 1264px) {

  }

  @media (min-width: 1264px) and (max-width: 1904px) {

  }

  @media (min-width: 1904px) {}

</style>

<style>

.adddons-title-container > div{
  margin: 0px !important;
}

.addons-first .know-more, .addons-last .know-more{
  color: #676767
}

.addons-first .know-more:before, .addons-last .know-more:before{
  background-color: white;
}

.addons-first .addons-start, .addons-last .addons-start{
  color: white;
  background-color: #0065ad;
}


  @media (min-width: 320px) and (max-width: 480px) {
    .addons-first h2, .addons-last h2{
      font-size: 18px
    }

    .addons-first .know-more, .addons-last .know-more{
      text-align: center;
    }
       

  }

  @media (min-width: 481px) and (max-width: 640px) {
    .addons-first h2, .addons-last h2{
      font-size: 16px
    }
    .addons-first .know-more-container, .addons-last .know-more-container {
      text-align: center;
    }
    
  }

  @media (min-width: 641px) and (max-width: 960px) {
    .addons-first h2, .addons-last h2{
      font-size: 18px
    }
  }

  @media (min-width: 960px) and (max-width: 1264px) {

  }

  @media (min-width: 1264px) and (max-width: 1904px) {

  }

  @media (min-width: 1904px) {}



</style>
