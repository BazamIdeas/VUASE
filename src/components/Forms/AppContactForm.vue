<template>
  <v-form id="contact-form" @submit.prevent="submit">
    <v-layout row wrap>
      <v-flex xs12 sm6 md6>
        <v-text-field v-model="name" v-validate="'required'" name="contact.name" label="Nombre" placeholder="Nombre" :error-messages="errors.collect('contact.name')" solo flat></v-text-field>
      </v-flex>
      <v-flex xs12 sm6 md6>
        <v-text-field v-model="email" v-validate="'required|email'" name="contact.email" label="Correo electrónico" placeholder="Correo electrónico" :error-messages="errors.collect('contact.email')" solo flat></v-text-field>
      </v-flex>
      
      <v-flex xs12 sm6 md6 v-show="for_phone">
        <v-text-field v-model="phone" v-validate="'required'" name="contact.phone" label="Telefono" placeholder="Telefono"
          :error-messages="errors.collect('contact.phone')" solo flat></v-text-field>
      </v-flex>
      <v-flex xs12 sm6 md6 v-show="for_phone">
        <v-select :items="times" v-validate="'required'" name="contact.times" label="Horarios"
          placeholder="Horarios" :error-messages="errors.collect('contact.times')" solo flat></v-select>
      </v-flex>
      <v-flex xs12>
        <v-textarea v-model="message" v-validate="'required'" name="contact.message" label="Mensaje" :error-messages="errors.collect('contact.message')" solo flat></v-textarea>
      </v-flex>
      <v-flex xs12 md2 order-xs3 order-md1>
        <v-btn type="submit" class="elevation-0 white--text" style="background-color: #F7941D;">enviar</v-btn>
      </v-flex>
      <v-flex xs12 md10 order-md2>
        <v-radio-group v-model="for_phone" class="ma-0">
          <v-layout row wrap>
            <v-flex xs12 md6>
              <v-radio key="for_phone_true" :label="'Me gustaria una consulta por telefono'" :value="true" class="mt-0"></v-radio>
            </v-flex>
            <v-flex xs12 md6>
              <v-radio key="for_phone_false" :label="'Me gustaria una consulta por email'" :value="false" class="mt-0"></v-radio>
            </v-flex>
          </v-layout>
        </v-radio-group>
      </v-flex>
      <v-flex order-md3>
        <v-tooltip right color="white darken-3 light-green--text text--darken-2" class="hidden-md-and-down">
          <v-btn slot="activator" fab dark small class="elevation-1 ws-float-btn">
            <v-icon>fab fa-whatsapp</v-icon>
          </v-btn>
          <span>{{ countryData.phone }}</span>
        </v-tooltip>
      </v-flex> 
    </v-layout>
  </v-form>
</template>

<script>
  export default {
    data () {
      return {
        name: '',
        email: '',
        message: '',
        phone: '',
        times: [
          'Hola'
        ],
        for_phone: true
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
            alert('SUCCESS!! :-)')
          }
        })
      }
    }
  }
</script>

<style scoped>
  .ws-float-btn {
    background-color: #87C438 !important;
  }

</style>