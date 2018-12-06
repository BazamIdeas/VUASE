<template>
  <div>{{ $store.state.app.authData }}</div>
</template>

<script>
  export default {
    async mounted () {
      await this.$store.dispatch('auth')
      if (!this.isLoggedIn) {
        return this.$router.push('/area-de-cliente/entrar')
      }

      await this.$store.dispatch('setAuthData')
    },
    computed: {
      isLoggedIn () { return this.$store.getters['isLoggedIn'] }
    }
  }
</script>

<style>
</style>