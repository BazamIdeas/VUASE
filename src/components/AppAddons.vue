<template>
  <v-container grid-list-md fluid class="pt-5 mb-3">
    <v-flex xs12 class="mb-5">
      <AppHeading :number="'1'" :size="'display-2'" align="center"  :title="title"/>
    </v-flex>
    <v-layout row py-5>
      <v-flex xs5 offset-xs1 px-3 class="addons-first">
        <div class="addons-image-container">
          <img :src="first.image" class="addons-image"/>
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
          <v-flex xs5 offset-xs1 d-flex justify-end>
            <v-btn :to="first.url+ '/brief'" flat class="ma-0 px-2 addons-start">COMENZAR</v-btn>
          </v-flex>
          <v-flex xs6 v-if="!first.notSecondButton">
            <v-btn :to="first.url" flat class="ma-0 px-2 know-more" large >
              conocer más&nbsp;&nbsp;<v-icon>add_circle_outline</v-icon>
            </v-btn>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex xs5 px-3 class="addons-last">
        <div class="addons-image-container">
          <img :src="last.image" class="addons-image"/>
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
          <v-flex xs5 offset-xs1 d-flex justify-end>
            <v-btn :to="last.url + '/brief'" flat class="ma-0 px-2 addons-start">COMENZAR</v-btn>
          </v-flex>
          <v-flex xs6 v-if="!last.notSecondButton">
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
    height: 120px;
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

</style>
