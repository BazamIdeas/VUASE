<template>
  <section>
    <v-container fluid grid-list-md class="mt-5 pt-5 pb-0">
      <v-layout row wrap>
        <v-flex xs12 md5>
          <img src="/images/pages/muchacho_contacto.png" alt="" width="100%" style="padding-top: 72px;">
        </v-flex>
        <v-flex xs12 md6 class="my-5" v-if="!formSent">
          <h1 class="font-weight-bold mb-1 text-uppercase text-xs-center" style="font-size: 29px;">¿Necesitas un consejo profesional?</h1>

          <h4 class="font-weight-medium mb-4 text-uppercase text-xs-center theme--light v-label" style="font-size: 12px; line-height: 20px;  padding: 0 30px;
">Estamos para asesorarte gratis. Completa el formulario y un experto se pondrá en contacto contigo hoy.</h4>

          <AppContactForm @sent="formHandler" contact-page="true" />
        </v-flex>

        <v-flex xs12 md6 class="my-5 justify-center align-center" v-else-if="formSent" style="display: flex;
    flex-direction: column;">
          <h1 class="font-weight-bold mb-4 text-uppercase text-xs-center" style="font-size: 35px;">¡Gracias por tu consulta!</h1>

          <h4 class="font-weight-medium mb-4 text-uppercase text-xs-center theme--light v-label" style="font-size: 15px;">Un experto de diseño se comunicará contigo a la brevedad para brindarte nuestro asesoramiento profesional.</h4>

          <v-btn to="/nuestros-servicios" class="elevation-0 white--text" style="background-color:#0081c1">
            conocer mas servicios
          </v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </section>
</template>

<script>
  export default {
    async fetch ({ store }) {
      await store.dispatch('services/getAll')
    },
    data () {
      return {
        formSent: false
      }
    },
    methods: {
      formHandler () {
        /* this.formSent = true */
        if (process.browser) {
          var contact = {}
          contact.email = 'contact@test.com'
          contact.first_name = 'Test'
          contact.last_name = 'Contact'
          contact.company = 'abc corp'
          contact.title = 'lead'
          contact.phone = '+1-541-754-3010'
          contact.website = 'http://www.example.com'
          var address = { 'city': 'new delhi', 'state': 'delhi', 'country': 'india' }
          contact.address = JSON.stringify(address)
          contact.tags = 'tag1, tag2'

          // Custom fields can be added to contact object as
          contact.status = 'incomplete'
          contact.custom_id = 'EN001C'

          var _agile = _agile
          _agile.create_contact(contact, {
            success: function (data) {
              console.log('success', data)
            },
            error: function (data) {
              console.log('error', data)
            }
          })
        }
      }
    }
  }
</script>