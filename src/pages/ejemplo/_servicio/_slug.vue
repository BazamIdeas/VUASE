<template>
  <section class="content">
    <v-container grid-list-md>
      <v-layout row wrap class="mt-5">
        <v-flex class="mt-5" xs12 md6 v-if="portfolio.images && portfolio.images.length > 1">
          <img class="mt-3" :src="urlHosting + image.slug" v-for="image in portfolio.images.slice(1, portfolio.images.length)" :key="image.slug" style="max-width:100%; display:block; margin:auto;">
        </v-flex>
        <v-flex xs12 offset-md1 md5 class="mt-5">
          <AppHeading number="2" :title="name" align="center"/>
          <p class="text-xs-justify mt-3" style="font-weight:500;">
            {{portfolio.description}}
          </p>

          <p class="text-xs-justify title" style="font-weight: 600; margin-top: 40px">
            Etiquetas: 
          </p>  
          <p class="text-xs-justify mt-3 pl-2" style="font-weight:500;">
            <v-chip>
              Servicio:
              {{portfolio.service.name}}
            </v-chip>
            <br><br>
            <v-chip>
              Sector:
             {{portfolio.activity.sector.name}}
            </v-chip>
            <br><br>
            <v-chip>
              Actividad:
             {{portfolio.activity.name}}
            </v-chip>
            <br><br>
            <v-chip>
              Ubicación:
             {{portfolio.location.name}} - {{portfolio.location.country.name}}  
            </v-chip>        
          </p>          
        </v-flex>
      </v-layout>
    </v-container>
    <v-container fluid grid-list-md>
      <v-layout row wrap>
        <!-- RELACIONADOS -->
        <AppHeading class="mb-5" number="2" title="EJEMPLOS RELACIONADOS" />
        <v-layout xs12 row wrap class="portfolios mb-5">
          <v-flex v-if="portfolios && portfolios.length" v-for="item in portfolios.slice(0,3)" :key="item.id" xs12 md4 class="pr-2">
            <v-card :to="'/ejemplo/'+ item.service.slug +'/'+ item.slug">
              <v-carousel 
                interval="6000" 
                hide-controls hide-delimiters 
                style="width: 100%; max-height: calc( 80vw / 3 );" class="portfolio-carousel">
                <v-carousel-item style="position:relative;" v-for="(itemImage, i) in item.images.slice(0,1)" :key="itemImage.slug + i" :transition="'slide-x-transition'">
                  <div class="img-portf" :style="'background:url('+urlHosting + itemImage.slug+');'"></div>
                </v-carousel-item>
              </v-carousel>
              <v-flex class="my-0" style="border-top: 1px solid #6a6a6a38;">
                <h2 class="mt-2 mb-1 text-xs-center font-weight-medium">{{item.name}}</h2>
                <p class="text-xs-center caption" style="font-weight: 400;">
                  {{item.service.name}} - 
                  {{item.activity.sector.name}} - 
                  {{item.location.country.name}}
                </p>
              </v-flex>
            </v-card>
          </v-flex>
        </v-layout>

        <v-flex  xs12 class="mb-5">
          <v-layout xs12 row wrap justify-center>
            <v-btn color="#0081c1" dark raised large :to="'/nuestros-servicios/'+ serviceSlug">
              CONOCER MAS SOBRE EL SERVICIO
            </v-btn>
            <v-btn color="rgb(247, 148, 29)" raised dark large="" :to="'/nuestros-servicios/'+ briefUrl">
              INICIAR MI PROYECTO AHORA
            </v-btn>
          </v-layout>
        </v-flex>

        <!-- QUE NECESITAS -->
        <AppHeading class="mb-5" number="2" title="¿Qué necesitas?" subtitle="Deja el diseño de tu imagen en manos de profesionales, que te ofreceran la más amplia gama de opciones" />
        <AppServicesGrid color="#F29F01" class="mb-5"/>

        <v-flex xs12 md5 >
          <img src="/images/pages/muchacho_contacto.png" width="100%">
        </v-flex>
        <v-flex xs12 md6 class="mt-5 xs-mt-0">
          <h2 class="display-2 font-weight-bold mb-4 text-uppercase text-xs-center" style=" color: #434343;">¿TIENES ALGUNA DUDA?</h2>
          <AppContactForm />
        </v-flex>
      </v-layout>
    </v-container>
  </section>
</template>

<script>
  export default {
    async fetch ({ store, params }) {
      await store.dispatch('services/getAll')
      await store.dispatch('portfolios/getAll', params)
    },
    asyncData ({ params }) {
      return {
        name: 'EJEMPLO ' + params.slug.toUpperCase(),
        serviceSlug: params.servicio,
        portfolioSlug: params.slug
      }
    },
    data () {
      return {
        urlHosting: 'http://api.liderlogos.com/v1/images/slug/',
        testimonies: [{
          stars: 5,
          logo: '/images/pages/services-carousel/11.-Black-Bird.png',
          description: '“Excelente en términos generales... Lo recomiendo ampliamente. Gracias a todo el equipo”'
        }, {
          stars: 5,
          logo: '/images/testimonies/papeleria.svg',
          description: '“Ha sido excelente trabajar con ustedes”'
        }]
      }
    },
    computed: {
      service () {
        return this.$store.state.services.list.find(el => el.slug === this.serviceSlug)
      },
      portfolio () {
        return this.$store.state.portfolios.list.find(el => el.slug === this.portfolioSlug)
      },
      portfolios () {
        let portfolios = []
        this.$store.state.portfolios.list.forEach((portfolio, i) => {
          if (portfolio.slug !== this.portfolioSlug) {
            portfolios.push(portfolio)
          }
        })
        return portfolios
      },
      briefUrl () {
        /* TODO: */
        if (this.service === 'diseno-logo-y-pagina-web' || this.service === 'diseno-pagina-web') {
          return 'cotizacion'
        } else {
          return 'brief/disenos'
        }
      }
    },
    validate ({ params, store }) {
      let exists = store.state.app.staticData.services[params.servicio] || false

      if (exists) {
        return true
      }
    }
  }
</script>