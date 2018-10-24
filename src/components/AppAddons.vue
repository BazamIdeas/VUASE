<template>
  <v-container grid-list-md fluid>
    <v-layout row py-5>
      <v-flex xs4 offset-xs2 px-5 class="addons-first">
        <img :src="first.image" class="addons-image"/>
        <v-layout row>
          <v-flex xs12  class="text-xs-center adddons-title-container">
            <AppHeading :title="first.title" :size="''" :number="'2'" :margin="'ma-0'"></AppHeading>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs12 class="text-xs-center">
            <span class="addons-subtitle mt-0 mb-4">{{first.subtitle}}</span>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs6 d-flex justify-end>
            <v-btn :to="first.startUrl" flat class="ma-0 px-2 addons-start">COMENZAR</v-btn>
          </v-flex>
          <v-flex xs6>
            <v-btn :to="first.moreUrl" flat class="ma-0 px-2 know-more" large >
              conocer más&nbsp;&nbsp;<v-icon>add_circle_outline</v-icon>
            </v-btn>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex xs4 px-5 class="addons-last">
        <img :src="last.image" class="addons-image"/>
        <v-layout row>
          <v-flex xs12 class="text-xs-center adddons-title-container">
            <AppHeading :title="last.title" :size="''" :number="'2'"></AppHeading>
          </v-flex>
        </v-layout>
        <v-layout row class="text-xs-center">
          <v-flex xs12>
            <span class="addons-subtitle mt-0 mb-4">{{last.subtitle}}</span>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs6 d-flex justify-end>
            <v-btn :to="last.startUrl" flat class="ma-0 px-2 addons-start">COMENZAR</v-btn>
          </v-flex>
          <v-flex xs6>
            <v-btn :to="last.moreUrl" flat class="ma-0 px-2 know-more" large>
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
        startUrl: '',
        moreUrl: ''
      }
    }
  }

  export default {
    props: {
      first: defaultService,
      last: defaultService
    }
  }
</script>

<style scoped>
  .addons-image{
    max-width: 100%;
    height: 250px;
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
