<template>
  <v-form id="newslletter-form" @submit.prevent="submit">
    <v-layout row wrap>
      <v-flex offset-xs1 xs10  md6>
        <v-text-field class="newsletter-email" v-model="email" v-validate="'required|email'" name="contact.email" label="Correo electrónico" placeholder="Correo electrónico" solo flat></v-text-field>
      </v-flex>
      <v-flex xs12 md4>
        <v-btn type="submit" class="elevation-0 white--text" style="margin:0px; height: 48px; background-color: #F7941D;">SUSCRIBIRME</v-btn>
      </v-flex>
    </v-layout>
  </v-form>
</template>

<script>
  export default {
    data () {
      return {
        email: ''
      }
    },
    computed: {
      countryData () { return this.$store.state.countries.data }
    },
    methods: {
      submit () {
        console.log('enviado')
        this.$validator.validate().then(result => {
          console.log(result)
          if (result) {
            this.$router.push('/gracias?por=suscripcion')
          }
        })
      }
    }
  }
</script>

<style>
.newsletter-email .v-input__slot{
  background: #c0c0c085 !important;
}

.newsletter-email input{
  color: white !important;
}

.newsletter-email .v-text-field__details {
  display: none;
}
</style>
