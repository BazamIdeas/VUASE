<template>
  <section class="brief">
    <v-container grid-list-md>
      <v-layout row wrap>
        <v-flex xs12 offset-md1 md10 style="position: relative">
          <h1 class="display-1 font-weight-bold mb-2">
            {{ stepData.number == 2 && brief.service ? stepData.title + capitalize( brief.service.name) : stepData.title }} {{ stepData.number == 4 && brief.service ? ' - ' + brief.service.name : ''  }}
          </h1>
          <p> {{ stepData.subtitle }}</p>
        </v-flex>
        <v-flex xs12 offset-md1 md10 style="position: relative">
          <AppStepProgressBar/>
        </v-flex>
        <v-flex xs12 offset-md1 md10 class="mt-3" style="position: relative">
          <AppDesignsForm v-if="stepData.number == 1"/>
          <AppStylesForm v-if="stepData.number == 2"/>
          <AppColorsForm v-if="stepData.number == 3"/>
          <AppBriefingForm :submit="submit" :slug="brief.service.slug" @submitBrief="submitBrief" v-if="stepData.number == 4 && brief.service.slug"/>
          <AppCheckoutForm :slug="brief.service.slug" v-if="stepData.number == 5"/>
        </v-flex>
      </v-layout>
    </v-container>
    <v-toolbar fixed style="top: inherit;bottom: 0;">
      <div class="">
        <v-btn color="primary" v-if="showBack" @click="nextStep(stepData.prev)">Atras</v-btn>
      </div>
      <span>Completa los datos</span>
      <v-spacer></v-spacer>
      <div class="">
        <v-btn v-if="stepData.next && stepData.number < 4" @click="nextStep(stepData.next)">Omitir</v-btn>
        <v-btn color="primary" v-if="stepData.next && stepData.number < 4" @click="nextStep(stepData.next)">Continuar</v-btn>
        <v-btn color="primary" v-if="stepData.number == 4" @click="submit = true">Continuar</v-btn>
        <v-btn color="primary" v-if="stepData.number == 5" @click="setPay">Pagar</v-btn>
      </div>
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
        pay: false
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
      '$route': function (to, from) {
        this.params = to.params
      }
    },
    computed: {
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
        window.scrollTo(0, 0)
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
      }
    }
  }
</script>

<style>
  .chat-cloud {
      bottom: 46px !important;
      z-index: 999;
  }
</style>

