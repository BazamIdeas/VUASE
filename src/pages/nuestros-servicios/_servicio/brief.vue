<template>
  <section class="brief">
    <v-container grid-list-md>
      <v-layout row wrap>
        <v-flex xs12 class="my-4 py-4"></v-flex>
        <v-flex xs12 offset-md1 md10 style="position: relative">
          <h1 class="display-1 font-weight-bold mb-2">
            {{ stepData.title }} {{ stepData.number == 4 && brief.service ? ' - ' + brief.service.name : '' }}
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
          <AppBriefingForm :submit="submit" :slug="brief.service.slug" @submitBrief="submitBrief" v-if="stepData.number == 4"/>
          <AppCheckoutForm :slug="brief.service.slug" v-if="stepData.number == 5"/>
        </v-flex>
      </v-layout>
    </v-container>
    <v-toolbar fixed style="top: inherit;bottom: 0;">
      <div class="hidden-sm-and-down">
        <v-btn color="primary" v-if="stepData.prev" @click="nextStep(stepData.prev)">Atras</v-btn>
      </div>
      <span>Completa los datos</span>
      <v-spacer></v-spacer>
      <div class="hidden-sm-and-down">
        <v-btn v-if="stepData.next && stepData.number < 4" @click="nextStep(stepData.next)">Omitir</v-btn>
        <v-btn color="primary" v-if="stepData.next && stepData.number < 4" @click="nextStep(stepData.next)">Continuar</v-btn>
        <v-btn color="primary" v-if="stepData.number == 4" @click="submit = true">Continuar</v-btn>
        <v-btn color="primary" v-if="stepData.number == 5" @click="setPay">Pagar</v-btn>
        <!--<v-dialog v-if="stepData.number === 5" v-model="pay" persistent max-width="50%">
          <v-btn slot="activator" color="primary" dark>Pagar</v-btn>
          <v-card>
            <v-card-title class="headline font-weight-bold text-xs-center"><p style="width: 100%;">Métodos de pago</p></v-card-title>
            <v-layout row wrap>
              <v-flex v-for="gateway in gateways" :key="gateway.id" md4 class="text-xs-center"> 
                <AppPaypal v-if="gateway.name === 'Paypal'" :gateway-id="gateway.id"/>
              </v-flex>
            </v-layout>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="red darken-1" flat @click.native="pay = false">Cancelar</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>-->
      </div>
    </v-toolbar>
  </section>
</template>

<script>
  export default {
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
    },
    watch: {
      '$route': function (to, from) {
        this.params = to.params
      }
    },
    computed: {
      brief () { return this.$store.state.brief.data },
      stepData () { return this.$store.getters['brief/getStepByKey'](this.params.paso) }
    },
    methods: {
      async nextStep (pass) {
        await this.$store.dispatch('brief/setStep', this.$store.getters['brief/getStepByKey'](pass).number)
        this.$router.push('/nuestros-servicios/' + this.$store.state.brief.data.service.slug + '/brief/' + pass)
      },
      async submitBrief (data) {
        this.submit = false

        if (!data) return

        var loginOrRegister = await this.$store.dispatch('user/loginOrRegister')

        if (!loginOrRegister) {
          this.$toast.error('Ha ocurrido un error, intente de nuevo!')
          return
        }

        var storeBrief = await this.$store.dispatch('brief/storeBrief')

        if (!storeBrief) {
          this.$toast.error('Ha ocurrido un error, intente de nuevo!')
        }

        this.nextStep(this.stepData.next)
      },
      setPay () { this.$store.commit('cart/SET_PAY') }
    }
  }
</script>

<style>
  .chat-cloud {
      bottom: 46px !important;
      z-index: 999;
  }
  .brief + footer {
    display: none;
  }
</style>

