<template>
  <v-app light>
    <AppHeader/>
    <nuxt/>
    <AppFooter/>
  </v-app>
</template>

<script>
  import AppHeader from '@/components/AppHeader.vue'
  import AppFooter from '@/components/AppFooter.vue'

  export default {
    data () {
      return {
        title: 'LIDERLOGO'
      }
    },
    components: {
      AppHeader,
      AppFooter
    }
  }
</script>
