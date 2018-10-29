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
        <v-btn v-if="stepData.next" @click="nextStep(stepData.next)">Omitir</v-btn>
        <v-btn color="primary" v-if="stepData.next" @click="nextStep(stepData.next)">Continuar</v-btn>
      </div>
    </v-toolbar>
  </section>
</template>

<script>
  export default {
    asyncData ({ params }) {
      return { params: params }
    },
    async beforeCreate () {
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
      }
    }
  }
</script>

<style>
  .chat-cloud {
      bottom: 46px !important;
  }
  .brief + footer {
    display: none;
  }
</style>

