<template>
	<v-flex xs12>
    <v-container fluid grid-list-md class="mt-5 pt-5 pb-0">
      <v-flex xs12 class="mb-5">
        <h2 class="display-1 font-weight-bold text-uppercase text-xs-center">{{title}}</h2>
      </v-flex>
      <v-expansion-panel class="expansion-panel">
        <!-- SHOW ONLY 4 -->
        <v-expansion-panel-content v-if="showLess"
          v-for="(item,i) in list.slice(0, 4)"
          :key="i"
          class="pt-1 pb-1"
        >
          <div slot="header" class="font-weight-bold">{{item.question}}</div>
          <v-card>
            <v-card-text class="grey lighten-3 font-weight-medium">{{item.response}}</v-card-text>
          </v-card>
        </v-expansion-panel-content>

        <!-- SHOW ALL -->
        <v-expansion-panel-content v-if="!showLess"
          v-for="(item,i) in list"
          :key="i"
          class="pt-1 pb-1"
        >
          <div slot="header" class="font-weight-bold">{{item.question}}</div>
          <v-card>
            <v-card-text class="grey lighten-3 font-weight-medium">{{item.response}}</v-card-text>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-layout row d-flex justify-center>
        <v-flex xs2>
          <v-btn flat class="btn-simple" @click="showLess = !showLess">VER MAS</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </v-flex>
</template>

<script lang="js">
  export default {
    props: ['list', 'title'],
    data () {
      return {
        showLess: true
      }
    }
  }
</script>

<style scoped lang="css">
  .expansion-panel {
      box-shadow: unset;
  }

  .expansion-panel .v-expansion-panel__container {
    border-top: 2px solid rgba(0, 0, 0, .12);
  }

  .expansion-panel .v-icon {
    font-size: 35px;
  }

  .btn-simple{
    border: 1px solid silver;
    color: #a09d9d;
  }
  .btn-simple:hover{
    color: black;
  }
</style>
