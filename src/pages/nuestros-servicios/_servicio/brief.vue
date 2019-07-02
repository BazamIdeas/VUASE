<template>
  <section class="brief" style="margin-top: 100px;">
    <v-container grid-list-md>
      <v-layout row wrap>
        <v-flex xs12 offset-md1 md10 style="position: relative">
          <h1 class="display-1 font-weight-bold mb-2">
            {{ stepData.number == 2 && brief.service ? stepData.title + capitalize( brief.service.name) : stepData.title }} {{ stepData.number == 4 && brief.service ? ' - ' + capitalize( brief.service.name) : ''  }}
          </h1>
          <p> {{ stepData.subtitle }}</p>
        </v-flex>
        <v-flex xs12 offset-md1 md10 style="position: relative">
          <AppStepProgressBar/>
        </v-flex>
        <v-flex xs12 offset-md1 md10 class="mt-3" style="position: relative">
          <AppDesignsForm @changed="changedStep" v-if="stepData.number == 1"/>
          <AppStylesForm @changed="changedStep" v-if="stepData.number == 2"/>
          <AppColorsForm @changed="changedStep" v-if="stepData.number == 3"/>
          <AppBriefingForm :submit="submit" :slug="brief.service.slug" @submitBrief="submitBrief" v-if="stepData.number == 4 && brief.service.slug"/>
          <AppCheckoutForm :slug="brief.service.slug" v-if="stepData.number == 5"/>
        </v-flex>
      </v-layout>
    </v-container>
    <v-toolbar class="brief-bottom-toolbar" fixed style="top: inherit;bottom: 0;">
      <v-layout row wrap class="hidden-sm-and-down">
        <v-flex md12 style="position: relative;" class="px-4">
          <img src="/images/icons/check.svg" width="37px" style="float: left; margin-right: 10px">
          <p class="font-weight-bold" style="margin:0; line-height: 18px;">Devolución del dinero 100% garantizada <br><small style="font-weight: normal !important">Un diseño que te encante o te devolvemos el dinero</small></p>
        </v-flex>
      </v-layout>
      <v-spacer class="hidden-sm-and-down"></v-spacer>
      <v-layout row wrap class="hidden-sm-and-down">
        <v-flex xs12 offset-md7 md5 style="position: relative" class="px-4">
          <v-btn color="blue-grey darken-1" v-if="!changed && stepData.next && stepData.number < 4" @click="nextStep(stepData.next)" block class="elevation-1 white--text">Omitir</v-btn>
          <v-btn color="primary" v-if="changed && stepData.next && stepData.number < 4" @click="nextStep(stepData.next)" block class="elevation-1">Continuar</v-btn>
          <v-btn color="primary" v-if="stepData.number == 4" @click="submit = true" block class="elevation-1">Continuar</v-btn>
          <v-btn color="primary" v-if="stepData.number == 5" @click="setPay" block class="elevation-1">Pagar</v-btn>
        </v-flex>
      </v-layout>
      <v-layout row wrap class="hidden-md-and-up">
        <v-flex xs12 style="position: relative">
          <v-btn color="" v-if="!changed && stepData.next && stepData.number < 4" @click="nextStep(stepData.next)" block large class="elevation-0 white--text blue-grey darken-1" style="margin: 0 !important; border-radius: 0px !important">Omitir</v-btn>
          <v-btn color="primary" v-if="changed && stepData.next && stepData.number < 4" @click="nextStep(stepData.next)" block large class="elevation-0" style="margin: 0 !important; border-radius: 0px !important">Continuar</v-btn>
          <v-btn color="primary" v-if="stepData.number == 4" @click="submit = true" block large class="elevation-0" style="margin: 0 !important; border-radius: 0px !important">Continuar</v-btn>
          <v-btn color="primary" v-if="stepData.number == 5" @click="setPay" block large class="elevation-0" style="margin: 0 !important; border-radius: 0px !important">Pagar</v-btn>
        </v-flex>
        <v-flex xs6 style="position: relative">
          <v-btn :href="'tel:'+countryData.phone" block large class="elevation-0" style="margin: 0 !important; border-radius: 0px !important">
            <v-icon>fa-phone-volume</v-icon> Llámanos
          </v-btn>
        </v-flex>
        <v-flex xs6 style="position: relative">
          <v-btn color="green darken-3" target="_new" href="https://api.whatsapp.com/send?phone=34933961704&text=Hola%20tengo%20una%20consulta" block large class="elevation-0 white--text" style="margin: 0 !important; border-radius: 0px !important">
            <v-icon>fab fa-whatsapp</v-icon>&nbsp; Whatsapp
          </v-btn>
        </v-flex>
      </v-layout>
    </v-toolbar>
  </section>
</template>

<script>
  export default {
    layout: 'blank',
    async fetch ({ store }) {
      await store.dispatch('services/getAll')
      await store.dispatch('gateways/getAll')
    },
    asyncData ({ params }) {
      return { params: params }
    },
    data () {
      return {
        submit: false,
        pay: false,
        changed: false
      }
    },
    async mounted () {
      await this.$store.dispatch('brief/setData', this.$storage.get('brief'))
      await this.$store.dispatch('brief/setStep', this.$store.getters['brief/getStepByKey'](this.params.paso).number)

      if (!this.params.paso) {
        if (this.params.servicio.includes('logo') || this.params.servicio === 'imagen-corporativa') {
          this.$router.push(this.$router.currentRoute.path + '/disenos')
        } else {
          this.$router.push(this.$router.currentRoute.path + '/estilos')
        }
      } else if (this.params.paso === 'disenos') {
        if (this.params.servicio.includes('logo') || this.params.servicio === 'imagen-corporativa') {
          this.$router.push('disenos')
        } else {
          this.$router.push('estilos')
        }
      }
    },
    watch: {
      '$route': async function (to, from) {
        this.params = to.params
        await this.$store.dispatch('brief/setStep', this.$store.getters['brief/getStepByKey'](this.params.paso).number)
      }
    },
    computed: {
      countryData () { return this.$store.state.countries.data },
      brief () { return this.$store.state.brief.data },
      stepData () { return this.$store.getters['brief/getStepByKey'](this.params.paso) },
      showBack () {
        if (this.brief.service.slug) {
          if (this.brief.service.slug.includes('logo') || this.brief.service.slug === 'imagen-corporativa') {
            if (this.stepData.prev) return true
            else return false
          } else {
            if (this.stepData.prev) {
              if (this.stepData.prev === 'disenos') return false
              else return true
            } else {
              return false
            }
          }
        }
      }
    },
    methods: {
      async nextStep (pass) {
        await this.$store.dispatch('brief/setStep', this.$store.getters['brief/getStepByKey'](pass).number)
        this.$router.push('/nuestros-servicios/' + this.$store.state.brief.data.service.slug + '/brief/' + pass)
        window.scrollTo(0, 100)
      },
      async submitBrief (data) {
        this.submit = false

        if (!data) return

        /* var loginOrRegister = await this.$store.dispatch('user/loginOrRegister')

        if (!loginOrRegister) {
          this.$toast.error('Ha ocurrido un error, intente de nuevo!')
          return
        } */

        var storeBrief = await this.$store.dispatch('brief/storeBrief')

        if (!storeBrief) {
          this.$toast.error('Ha ocurrido un error, intente de nuevo!')
          return
        }

        if (this.brief.service.slug === 'desarrollo-de-app' || window.location.hash === '#no-carrito') {
          this.$router.push('/gracias')
        } else {
          this.nextStep(this.stepData.next)
        }
      },
      setPay () { this.$store.dispatch('cart/setPay') },

      capitalize (value) {
        if (!value) return ''
        value = value.toString()
        return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()
      },
      changedStep (e) {
        this.changed = e
      }
    }
  }
</script>

<style>
  .chat-cloud {
      bottom: 46px !important;
      z-index: 999;
  }

  .brief-bottom-toolbar .v-toolbar__content {
    padding: 0 !important;
  }
  @media (min-width: 240px) and (max-width: 960px) {
    .brief-bottom-toolbar .v-toolbar__content {
      height: 88px !important;
    }

    section.brief {
      margin-bottom: 80px;
    }
  }
</style>
