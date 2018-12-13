<template>
  <v-content>
    <v-container fluid fill-height class="py-5 my-4">
      <v-layout align-center justify-center class="py-2">
        <v-flex xs12 sm8 md4 class="py-2">
          <v-card class="elevation-1">
            <v-card-text>
              <p class="text-xs-center font-weight-bold title pb-3 pt-2">ÁREA DE CLIENTE</p>
              <v-form>
                <v-text-field id="email" v-validate="'required'" v-model="email" name="email" label="Correo" type="text" box></v-text-field>
                <v-text-field id="password" v-validate="'required'" v-model="password" name="password" label="Contraseña" type="password" box></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" @click="submit">ENTRAR</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
  export default {
    data () {
      return {
        email: '',
        password: ''
      }
    },
    async created () {
      console.log(this.isLoggedIn)
      if (this.isLoggedIn) {
        return this.$router.push('/area-de-cliente')
      }
    },
    computed: {
      isLoggedIn () { return this.$store.getters['isLoggedIn'] }
    },
    methods: {
      submit () {
        var vue = this
        this.$validator.validate().then(async function (valid) {
          if (valid) {
            let login = await vue.$store.dispatch('user/login', { email: vue.email, password: vue.password })

            if (login) return vue.$router.push('/area-de-cliente/')

            vue.$toast.error('Sus datos son incorrectos!')
          }
        })
      }
    }
  }
</script>

<style>

</style>
