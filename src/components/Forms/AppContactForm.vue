
<template>
      <v-layout row wrap align-end>
         <v-flex xs12 md5 mt-5 class="img-contacto-container">
                  <div v-lazy-container="{ selector: 'img', loading: 'default.jpeg'}">          
          <img alt="Contacto Liderlogo" class="img-contacto" data-src="/images/pages/muchacho_contacto.jpg" width="100%">
                </div>
        </v-flex>
      
        <v-flex xs12 md6 class="mt-5 xs-mt-0">
          <h2 class="display-2 font-weight-bold mb-3 text-xs-center" style=" color: #434343;">¿Tienes alguna duda?</h2>
          <h4 class="font-weight-medium mb-4 text-xs-center theme--light v-label">Consulta GRATIS a nuestros expertos:</h4>
  <v-form id="contact-form" @submit.prevent="submit">
    <v-layout row wrap>
      <v-flex xs12 sm6 md6>
        <v-text-field v-model="name" v-validate="'required'" name="contact.name" label="Nombre" placeholder="Nombre" :error-messages="errors.collect('contact.name')" solo flat></v-text-field>
      </v-flex>
      <v-flex xs12 sm6 md6>
        <v-text-field v-model="email" v-validate="'required|email'" name="contact.email" label="Correo electrónico laboral" placeholder="Correo electrónico laboral" :error-messages="errors.collect('contact.email')" solo flat></v-text-field>
      </v-flex>
      <!-- <v-flex xs12>
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
      </v-flex> -->
      
      <v-flex xs12 sm12 md12 v-if="for_phone">
        <v-text-field v-model="phone" v-validate="'required'" name="contact.phone" label="Teléfono" placeholder="Teléfono"
          :error-messages="errors.collect('contact.phone')" solo flat></v-text-field>
      </v-flex>
      <!-- <v-flex xs12 sm6 md6 v-if="for_phone">
        <v-select :items="times" v-model="time" v-validate="'required'" name="contact.times" label="Horarios"
          placeholder="Horarios" :error-messages="errors.collect('contact.times')" solo flat></v-select>
      </v-flex> -->
      <v-flex xs12 :class="{'order-md1': contactPage}">
        <v-textarea v-model="message" v-validate="'required'" name="contact.message" :label="contactPage ? 'Comentanos algo más sobre el servicio que necesitas' : 'Escribe tu consulta o solicitud'" :error-messages="errors.collect('contact.message')" solo flat></v-textarea>
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
                <v-radio key="type_user_false" label="Si" :value="true" class="mt-0"></v-radio>
              </v-flex>
              <v-flex xs12 md6 >
                <v-radio key="type_user_true" label="No" :value="false" class="mt-0"></v-radio>
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
            solo
            flat
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

      <v-flex xs12 md12 order-md1 class="text-xs-right">
        <v-btn type="submit" class="elevation-0 white--text" style="background-color: #F7941D;">enviar</v-btn>
      </v-flex>
      
      <!--<v-flex order-md2 xs12 md12 v-if="countryData">
        <span>O puedes llamarnos al: </span>
        <a style="color:#1976d2" target="_new" :href="'tel:'+ countryData.phone"> +{{countryData.phone}}</a> 
        <span> o escribirnos vía <a style="color:#1976d2" target="_new" href="https://api.whatsapp.com/send?phone=34602253467&text=Hola%20tengo%20una%20consulta">WhatsApp</a> </span>
      </v-flex>-->
    </v-layout>
  </v-form>
        </v-flex>
      </v-layout>


</template>

<script>
  export default {
    props: {
      contactPage: {
        default: false
      },
      page: {
        default: 'inicio'
      }
    },
    data () {
      return {
        name: '',
        email: '',
        message: '',
        phone: '',
        type_user: false,
        category: '',
        offers: false,
        time: '9am a 14hs – Dia de semana',
        times: [
          '9am a 14hs – Dia de semana',
          '14hs a 20hs – Dia de semana'
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
        this.$validator.validate().then(async (result) => {
          if (!result) return
          var contact = {
            name: this.name,
            email: this.email,
            message: this.message,
            page_view: this.category.name || this.page,
            promo: this.offers,
            reseller: this.type_user || false
          }
          if (this.for_phone) {
            contact.phone = this.phone
            contact.schedule = 'horario no especificado'
          }
          /* Adwords Data */
          let utmCampaign = this.$router.currentRoute.query.campaign
          if (utmCampaign) {
            contact.campaign = utmCampaign
          }
          let utmMedium = this.$router.currentRoute.query.medium
          if (utmMedium) {
            contact.medium = utmMedium
          }
          let utmSource = this.$router.currentRoute.query.source
          if (utmSource) {
            contact.source = utmSource
          }
          this.$store.dispatch('user/contactForm', contact).then((res) => {
            console.log(res)
            this.$router.push('/gracias?por=contacto')
          })
          /* if (process.browser) {
             window.grecaptcha.ready(() => {
              let secret = '6Lf1944UAAAAAHmlC7K-rhNxkaSs1_qbLU7hIdaH'
              window.grecaptcha.execute(secret, { action: 'SiteWiew' }).then((token) => {
                let response = {
                  secret: secret,
                  response: token
                }
                this.$axios.post('https://www.google.com/recaptcha/api/siteverify', response).then((res) => {
                  console.log('grecaptcha', res)
                }).catch((err) => {
                  console.log(err)
                })
              })
            })
          } */
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
  .img-contacto{
        max-width: 40rem;
  }
  .img-contacto-container{
    text-align: end;
  }
</style>

