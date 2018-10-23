<template>
  <section>
    <v-container grid-list-md class="mt-5 pt-5 pb-0">
      <v-layout row wrap>
        <AppTopServiceSlider :service="dataService" />

        <AppServiceCharacteristics title="¿QUE TE OFRECEMOS?" :list="dataService.whatWeOffer" />

        <AppCreativeProccess :slides=dataService.creativeProcess :steps=dataService.steps />
      
        <AppServiceWhatGet id="que-te-ofrecemos" title="¿QUE TE LLEVAS?" :service="dataService" :price="service.price" :percentage="service.percentage" just-one="true" />

        <AppTestimony :list="dataService.testimonies" />

        <AppExpansionPanels title="PREGUNTAS FRECUENTES" :list="dataService.frequentQuestions" />
      </v-layout>
    </v-container>

    <v-container fluid class="mt-5 pt-5 pb-0">
      <v-layout xs12 row wrap> 
        <v-flex xs12 md5>
          <img src="/images/pages/muchacho_contacto.png" alt="" width="100%">
        </v-flex>
        <v-flex xs12 md6>
          <h1 class="font-weight-bold mb-4 text-uppercase text-xs-center" style="font-size: 40px; color: #434343;">¿TIENES ALGUNA DUDA?</h1>
          <AppContactForm />
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
  asyncData ({ params }) {
    return { serviceSlug: params.servicio }
  },
  computed: {
    dataService () {
      return this.$store.state.app.staticData.services[this.serviceSlug]
    },
    service () {
      return this.$store.state.services.list.find(el => el.slug === this.serviceSlug)
    }
  }
}
</script>
