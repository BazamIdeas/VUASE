<template>
  <v-app v-resize="hiddenOnResize">
    <AppMobileNav/>
    <v-content>
      <AppHeader/>
      <nuxt/>
      <AppFooter/>
      <img class="chat-cloud" src="/icons/nube_de_chat.svg" alt="">
    </v-content>
  </v-app>
</template>

<script>
  import AppHeader from '@/components/AppHeader.vue'
  import AppFooter from '@/components/AppFooter.vue'
  import AppMobileNav from '@/components/AppMobileNav.vue'

  export default {
    mounted () {
      this.hiddenOnResize()
    },
    methods: {
      hiddenOnResize () {
        if (window.innerWidth > 960) {
          this.$store.dispatch('toggleDrawer', false)
        }
      }
    },
    components: {
      AppHeader,
      AppFooter,
      AppMobileNav
    }
  }
</script>

<style>
  div#app {
    background: #fbfbfb;
  }
  
  .chat-cloud {
    width: 100px;
    position: fixed;
    bottom: -15px;
    left: 90%;
  }
</style>
