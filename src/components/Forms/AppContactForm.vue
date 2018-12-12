<template>
  <v-form id="contact-form" @submit.prevent="submit">
    <v-layout row wrap>
      <v-flex xs12 sm6 md6>
        <v-text-field v-model="name" v-validate="'required'" name="contact.name" label="Nombre" placeholder="Nombre" :error-messages="errors.collect('contact.name')" solo flat></v-text-field>
      </v-flex>
      <v-flex xs12 sm6 md6>
        <v-text-field v-model="email" v-validate="'required|email'" name="contact.email" label="Correo electrónico" placeholder="Correo electrónico" :error-messages="errors.collect('contact.email')" solo flat></v-text-field>
      </v-flex>
      <v-flex xs12>
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
      
      <v-flex xs12 sm6 md6 v-if="for_phone">
        <v-text-field v-model="phone" v-validate="'required'" name="contact.phone" label="Telefono" placeholder="Telefono"
          :error-messages="errors.collect('contact.phone')" solo flat></v-text-field>
      </v-flex>
      <v-flex xs12 sm6 md6 v-if="for_phone">
        <v-select :items="times" v-model="time" v-validate="'required'" name="contact.times" label="Horarios"
          placeholder="Horarios" :error-messages="errors.collect('contact.times')" solo flat></v-select>
      </v-flex>
      <v-flex xs12 :class="{'order-md1': contactPage}">
        <v-textarea v-model="message" v-validate="'required'" name="contact.message" :label="contactPage ? 'Comentanos algo más sobre el servicio que necesitas' : 'Mensaje'" :error-messages="errors.collect('contact.message')" solo flat></v-textarea>
      </v-flex>

      <!-- if contact page -->
      <v-layout row wrap v-if="contactPage">
        <!-- agencia || revendedor -->
        <v-flex xs12 class="no-messages">
          <v-radio-group row v-model="type_user" class="ma-0">
            <v-flex xs12 md8 class="v-label theme--light font-weight-medium">
              ¿Es tu empresa una agencia o revendedor?
            </v-flex>
            <v-layout xs12 md4 row wrap justify-center class="mt-2 mb-0">
              <v-flex xs12 md6>
                <v-radio key="type_user_false" label="Si" value="agencia" class="mt-0"></v-radio>
              </v-flex>
              <v-flex xs12 md6 >
                <v-radio key="type_user_true" label="No" value="revendedor" class="mt-0"></v-radio>
              </v-flex>
            </v-layout>
          </v-radio-group>
        </v-flex>

        <!-- servicios -->
        <v-layout row xs12 class="no-messages">
          <v-flex xs12 md8 class="pl-3 v-label theme--light font-weight-medium d-flex align-center">
            Elige una categoría de diseño
          </v-flex>
          <v-flex xs12 md4>
            <v-select
            v-validate="'required'"
            :items="services"
            item-value="name"
            item-text="name"
            v-model="category"
            label="Seleccione:"
            :error-messages="errors.collect('select')"
            data-vv-name="select"
            required
          ></v-select>
          </v-flex>
        </v-layout>
        <!-- Promociones -->
        <v-flex xs12 md10 order-md2>
          <v-checkbox
            v-model="offers"
            label="Ademas deseo conocer más sobre paquetes promocionales"
            required
          ></v-checkbox>
        </v-flex>
      </v-layout>

      <v-flex xs12 md2 order-xs3 order-md1>
        <v-btn type="submit" class="elevation-0 white--text" style="background-color: #F7941D;">enviar</v-btn>
      </v-flex>
      
      <v-flex order-md2 xs12 md10 v-if="countryData">
        O puedes llamarnos al: 
        <a style="color:#1976d2" target="_new" :href="'tel:'+ countryData.phone"> +{{countryData.phone}}</a> 
        o escribirnos vía WhatsApp  
        <a style="color:#1976d2" target="_new" href="https://api.whatsapp.com/send?phone=34933961704&text=Hola%20tengo%20una%20consulta">
          +34933961704
        </a>
      </v-flex> 
    </v-layout>
  </v-form>
</template>

<script>
  export default {
    props: {
      contactPage: {
        default: false
      }
    },
    data () {
      return {
        name: '',
        email: '',
        message: '',
        phone: '',
        type_user: 'revendedor',
        category: '',
        offers: false,
        time: '9am a 14hs – Dia de semana',
        times: [
          '9am a 14hs – Dia de semana',
          '14hs a 20hs – Dia de semana',
          '9am a 14hs – Fin de semana'
        ],
        for_phone: true
      }
    },
    computed: {
      countryData () { return this.$store.state.countries.data },
      services () {
        return this.$store.state.services.list
      }
    },
    methods: {
      submit () {
        this.$validator.validate().then(result => {
          console.log(result)
          if (result) {
            this.$emit('sent')
            this.$router.push('/gracias?por=contacto')
          }
        })
      }
    }
  }
</script>

<style>
  .no-messages .v-messages{
    display: none;
  }

  .v-radio label {
    font-size: 14px !important;
  }
</style>
<style scoped>
  .ws-float-btn {
    background-color: #87C438 !important;
  }
</style>