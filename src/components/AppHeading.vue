<template>
  <v-container grid-list-md v-if="title" class="pa-0 mt-4">
    <v-layout row wrap>
      <v-flex xs12>
        <h1 :class="'font-weight-bold mb-2 text-uppercase text-xs-' + align + ' ' + size">{{ title }}</h1>
      </v-flex>
      <v-flex v-if="subtitle" :offset-md3="align === 'center'" :offset-md8="align === 'right'" xs12 md6>
        <p :class="'body-2 font-weight-regular text-xs-' + align">
          {{ subtitle }}
        </p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    props: {
      title: String,
      subtitle: String,
      align: {
        default: 'center',
        type: String
      },
      size: {
        default: 'display-2',
        type: String
      }
    }
  }
</script>

<style scoped>
  h1 {
    color: #434343;
  }
  p {
    font-weight: 600;
    color: #B9B9B9;
  }
</style>