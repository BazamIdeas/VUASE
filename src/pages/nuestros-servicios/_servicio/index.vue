<template>
  <section>
    <!-- TOP SLIDER -->
    <v-container fluid class="mt-5 mb-0 pt-3 px-0 pb-0" v-if="dataService.topSlider">
      <v-layout row wrap>
        <AppTopServiceSlider :price="service.price"  :alt="alt" :id="service.id" :service="dataService" :slug="service.slug" />
      </v-layout>
    </v-container>

    <!-- CAROUSEL -->
    <AppHeading :number="'2'" v-if="dataService.carousel && dataService.carousel.items1" :size="'display-1'" title="Estilos y diseños adaptados a tus necesidades" class="mb-5 pt-4" />
    <AppExamplesSlider :alt="alt" item-width="350" item-height="350" v-if="dataService.carousel && dataService.carousel.items1" :examples="dataService.carousel.items1" init-scroll="75" />
    <!-- <AppExamplesSlider class="mt-2" v-if="dataService.carousel.items2" :examples="dataService.carousel.items2" init-scroll="170" /> -->

    <!-- SECCION 3 -->  
    <v-container grid-list-md class="mt-3 pb-0">
      <v-layout row wrap>
         <!-- CARACTERISTICAS -->  
        <AppServiceCharacteristics v-if="dataService.whatWeOffer" id="que-te-ofrecemos" title="¿Qué te ofrecemos para mejorar tu negocio?" :list="dataService.whatWeOffer" />

      </v-layout>
    </v-container>

    <v-container fluid class="mt-3 pb-0">
      <v-layout row wrap>
        <!-- PROCESO CREATIVO -->  
        <AppCreativeProccess class="px-3 " v-if="dataService.creativeProcess" id="como-funciona" title="Descubre como funciona" :slides="dataService.creativeProcess" :steps="dataService.steps" :alters="dataService.alters"  />
      </v-layout>
    </v-container>

    <v-container grid-list-md class="mt-3 pb-0">
      <v-layout row wrap>
        <!-- QUE TE LLEVAS -->  
        <AppServiceWhatGet v-if="!dataService.hideWhatGet" title="¡Mira todo lo que te incluimos!" :service="dataService" :slug="service.slug" :price="service.price" :percentage="service.percentage" />

        <AppServiceOptions v-if="dataService.serviceOptions" :service-slug="serviceSlug" :addons="addons"  :img="dataService.serviceOptions.img" :color="dataService.serviceOptions.color" :logo="dataService.serviceOptions.logo" :price="service.price"/>

        <!-- TESTIMONIOS -->  
        <AppTestimony class="pt-5" :alt="alt" v-if="dataService.testimonies" :list="dataService.testimonies" />

        <!-- PREGUNTAS FRECUENTES -->  
        <AppExpansionPanels title="Preguntas frecuentes" v-if="dataService.frequentQuestions" :list="dataService.frequentQuestions" />

        <!-- PACKS -->
        <AppAddons v-if="dataService.packs" :title="dataService.packs.title" :first="dataService.packs.first" :last="dataService.packs.last" />
      </v-layout>
    </v-container>

    <!-- CONTACT FORM -->
    <v-container fluid class="mt-5 pt-5 pb-0" grid-list-md>
          <AppContactForm :page="service.name" />
    </v-container>
  </section>
</template>

<script>
export default {
  head () {
    return {
      titleTemplate: this.dataService.titleSEO + ' | %s',
      meta: [
        { property: 'og:title', content: this.dataService.titleSEO },
        { property: 'og:description', content: this.dataService.descriptionSEO },
        { hid: 'description', name: 'description', content: this.dataService.descriptionSEO }
      ]
    }
  },
  async fetch ({ store }) {
    await store.dispatch('services/getAll')
  },
  asyncData ({ params, store, redirect }) {
    if (!store.state.app.staticData.services[params.servicio]) {
      return redirect('/nuestros-servicios')
    }

    return { serviceSlug: params.servicio }
  },
  data () {
    return {
      alt: 'agencia de diseño grafico'
    }
  },
  computed: {
    dataService () {
      return this.$store.state.app.staticData.services[this.serviceSlug]
    },
    service () {
      return this.$store.state.services.list.find(el => el.slug === this.serviceSlug)
    },
    addons () {
      return this.$store.getters['services/addons']
    }
  }
}
</script>
