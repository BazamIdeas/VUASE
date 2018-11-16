<template>
  <section>
    <!-- TOP SLIDER -->
    <v-container grid-list-md class="mt-5 mb-5 pt-5 pb-0" v-if="dataService.topSlider">
      <v-layout row wrap>
        <AppTopServiceSlider :service="dataService" :slug="service.slug" />
      </v-layout>
    </v-container>

    <!-- CAROUSEL -->
    <AppHeading :number="'1'" v-if="dataService.carousel.items1" size="headline" title="ESTILOS DIFERENTES PARA CADA NECESIDAD" class="mb-5" />
    <AppExamplesSlider item-width="350" item-height="350" v-if="dataService.carousel.items1" :examples="dataService.carousel.items1" init-scroll="75" />
    <!-- <AppExamplesSlider class="mt-2" v-if="dataService.carousel.items2" :examples="dataService.carousel.items2" init-scroll="170" /> -->

    <!-- SECCION 3 -->  
    <v-container grid-list-md class="mt-3 pb-0">
      <v-layout row wrap>
         <!-- CARACTERISTICAS -->  
        <AppServiceCharacteristics id="que-te-ofrecemos" title="¿QUÉ TE OFRECEMOS?" :list="dataService.whatWeOffer" />

        <!-- PROCESO CREATIVO -->  
        <AppCreativeProccess id="como-funciona" title="¿CÓMO FUNCIONA?" :slides=dataService.creativeProcess :steps=dataService.steps />
      
        <!-- QUE TE LLEVAS -->  
        <AppServiceWhatGet v-if="!dataService.hideWhatGet" title="¿QUE TE LLEVAS?" :service="dataService" :price="service.price" :percentage="service.percentage" />

        <AppServiceOptions v-if="dataService.serviceOptions" :addons="addons"  :img="dataService.serviceOptions.img" :color="dataService.serviceOptions.color" :logo="dataService.serviceOptions.logo" :price="service.price"/>
        <!-- PACKS -->
        <AppAddons v-if="dataService.packs" :title="dataService.packs.title" :first="dataService.packs.first" :last="dataService.packs.last" />

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
  asyncData ({ params, store, redirect }) {
    if (!store.state.app.staticData.services[params.servicio]) {
      return redirect('/nuestros-servicios')
    }

    return { serviceSlug: params.servicio }
  },
  computed: {
    dataService () {
      return this.$store.state.app.staticData.services[this.serviceSlug]
    },
    service () {
      return this.$store.state.services.list.find(el => el.slug === this.serviceSlug)
    },
    addons () {
      let addonsServices = []
      let addonsSlugs = [
        'diseno-y-desarrollo-de-seccion-web',
        'hosting-por-un-ano',
        'dominio-por-un-ano',
        'casillas-de-correo',
        'certificado-ssl',
        'chat',
        'pop-publicitario',
        'cotizador',
        'multidioma-automatico',
        'area-privada-para-clientes',
        'plataforma-inmobiliaria',
        'formulario-personalizado',
        'reservaciones-o-citas',
        'area-para-la-gestion-de-archivos',
        'seccion-de-noticias-o-publicaciones',
        'integracion-con-herramientas-de-google',
        'ecommerce',
        'catalogo-productos',
        'galeria-de-proyectos',
        'logo-solo-para-web'
      ]
      let servicesList = this.$store.state.services.list
      for (let serviceItem of servicesList) {
        if (!addonsSlugs.find((addonSlug) => serviceItem.slug === addonSlug)) {
          continue
        }
        addonsServices.push(serviceItem)
      }
      return addonsServices
    }
  }
}
</script>
