<template>
  <section>
    <!-- TOP SLIDER -->
    <v-container grid-list-md class="mt-5 mb-5 pt-5 pb-0">
      <v-layout row wrap>
        <AppTopServiceSlider :service="dataService" />
      </v-layout>
    </v-container>

    <!-- CAROUSEL -->
    <AppHeading :number="'1'" size="headline" title="ESTILOS DIFERENTES PARA CADA NECESIDAD" class="mb-3" />
    <AppExamplesSlider :examples="dataService.carousel.items1" init-scroll="75" />
    <AppExamplesSlider :examples="dataService.carousel.items2" init-scroll="170" />

    <!-- SECCION 3 -->  
    <v-container grid-list-md class="mt-3 pb-0">
      <v-layout row wrap>
         <!-- CARACTERISTICAS -->  
        <AppServiceCharacteristics title="¿QUÉ TE OFRECEMOS?" :list="dataService.whatWeOffer" />

        <!-- PROCESO CREATIVO -->  
        <AppCreativeProccess id="como-funciona" title="¿CÓMO FUNCIONA?" :slides=dataService.creativeProcess :steps=dataService.steps />
      
        <!-- QUE TE LLEVAS -->  
        <AppServiceWhatGet id="que-te-ofrecemos" title="¿QUE TE LLEVAS?" :service="dataService" :price="service.price" color="#472210" :percentage="service.percentage" />

        <!-- TESTIMONIOS -->  
        <AppTestimony :list="dataService.testimonies" />

        <!-- PREGUNTAS FRECUENTES -->  
        <AppExpansionPanels title="PREGUNTAS FRECUENTES" :list="dataService.frequentQuestions" />
      </v-layout>
    </v-container>

    <!-- CONTACT FORM -->
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
