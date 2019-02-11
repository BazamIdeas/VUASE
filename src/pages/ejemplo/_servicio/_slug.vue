<template>
  <section class="content">
    <v-container grid-list-md>
      <v-layout row wrap class="mt-5" v-if="portfolio">
        <!-- CAROUSEL RESPONSIVE -->
        <v-flex style="height: 50vw;" class="mt-5" hidden-md-and-up xs12 v-if="portfolio.images && portfolio.images.length > 1">
          <v-carousel 
            :interval="'3000'" 
            hide-controls hide-delimiters 
            style="height: 100%; width:100%;">
            <v-carousel-item v-for="(item, i) in portfolio.images" :key="i"   :transition="'slide-x-transition'">
              <svg class="img-cuadrada-ejemplos" viewBox="0 0 100 100 " role="img" :aria-label="portfolio.name + ' Imagen'" :alt="portfolio.name + ' Imagen'" :style="'background: url(' + urlHosting + item.slug +')'"></svg>
            </v-carousel-item>
          </v-carousel>
        </v-flex>
            
        <!-- DESKTOP -->
        <v-flex hidden-sm-and-down class="mt-5" xs12 md7 v-if="portfolio.images && portfolio.images.length > 1">
          <img class="mt-3" :alt="portfolio.name + ' Imagen'" :src="urlHosting + image.slug" v-for="(image) in portfolio.images.slice(1, portfolio.images.length)" :key="image.slug" style="max-width:100%; display:block; margin:auto;">
        </v-flex>
        <v-flex xs12 md5 class="pl-3 mt-5 pl-xs-1 mt-xs-0" style="position:relative;">
          <div class="box-sticky">
            <AppHeading number="1" size="headline" :title="portfolio.name" align="center"/>
            <p class="text-xs-justify mt-3" style="font-weight:500;">
              {{portfolio.description}}
            </p>
            <p class="text-xs-justify mt-3" style="font-weight:500;">
              <span class="mr-1 chip-title" v-if= portfolio.service.name >Servicio:</span>
              <!-- @click="$router.push('/ejemplos/' + portfolio.service.slug)" -->
              <v-chip class="cursor-pointer" v-if= portfolio.service.name >
                {{portfolio.service.name}}
              </v-chip>
              <br>
              <!-- <span class="mr-1 chip-title">Actividad:</span>
              <v-chip v-if="portfolio.activity.sector" class="cursor-pointer" @click="$router.push('/ejemplos/' + portfolio.service.slug + '/' + portfolio.activity.sector.slug)">
              {{portfolio.activity.sector.name}}
              </v-chip>
              <br> -->
              <span class="mr-1 chip-title">Actividad:</span>
              <!-- @click="$router.push('/ejemplos/'+ portfolio.service.slug + '/' + portfolio.activity.sector.slug + '/' + portfolio.activity.slug)" -->
              <v-chip class="cursor-pointer">
              {{portfolio.activity.name}}
              </v-chip>
              <br>
              <span class="mr-1 chip-title">País:</span>
              <!-- @click="$router.push('/ejemplos/'+ portfolio.service.slug + '/' + portfolio.activity.sector.slug + '/' + portfolio.location.country.slug)" -->
              <v-chip class="cursor-pointer">
              {{portfolio.location.name}}
              </v-chip>        
            </p>
          </div>          
        </v-flex>
      </v-layout>
    </v-container>
    <v-container grid-list-md class="mt-3">
      <v-layout row wrap>
        <!-- RELACIONADOS -->
        <AppHeading v-if="portfolios && portfolios.length" class="mb-5" size="display-1" number="2" title="EJEMPLOS RELACIONADOS" />
        <v-layout v-if="portfolios && portfolios.length" xs12 row wrap class="portfolios mb-5">
          <v-flex @click="goPortfolio('/ejemplo/'+ item.service.slug +'/'+ item.slug, item)"  v-for="(item) in portfolios.slice(0,3)" :key="item.id" xs12 sm6 md4 class="pr-2">
            <v-card>
              <div class="img-cuadrada-ejemplos-container" >
                  <svg role="img" :aria-label="item.name + ' Imagen'" :alt="item.name + ' Imagen'" class="img-cuadrada-ejemplos" style="border-bottom: 1px solid #6a6a6a38;" viewBox="0 0 100 100 " :style="'background: url('+ urlHosting + item.images[0].slug+')'"></svg>
              </div>
              <v-flex class="my-0">
                <h2 class="mt-2 mb-1 text-xs-center font-weight-medium">{{item.name}}</h2>
                <p class="text-xs-center caption" style="font-weight: 400;">
                  {{item.service.name}} - 
                  {{item.activity.name}}
                </p>
              </v-flex>
            </v-card>
          </v-flex>
        </v-layout>

        <v-flex  xs12 class="my-3">
          <v-layout xs12 row wrap justify-center>
            <v-btn class="arrow-left subheading" color="#0081c1" dark depressed large :to="'/nuestros-servicios/'+ serviceSlug">
              CONOCER MAS SOBRE EL SERVICIO
            </v-btn>
            <v-btn class="arrow-right subheading" color="rgb(247, 148, 29)" depressed dark large="" @click="selectService()">
              INICIAR MI PROYECTO AHORA
            </v-btn>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container fluid grid-list-md>
      <v-layout row wrap>
        <v-flex xs12 md5 >
          <img src="/images/pages/muchacho_contacto.png" width="100%">
        </v-flex>
        <v-flex xs12 md6 class="mt-5 xs-mt-0">
          <h2 class="display-2 font-weight-bold mb-4 text-uppercase text-xs-center" style=" color: #434343;">¿TIENES ALGUNA DUDA?</h2>
          <AppContactForm :page="'ejemplo portfolio ' + portfolio.name" />
        </v-flex>
      </v-layout>
    </v-container>
  </section>
</template>

<script>
  export default {
    async fetch ({ store, params }) {
      await store.dispatch('portfolios/getAll', params)
      await store.dispatch('portfolios/getRelateds', params)
    },
    asyncData ({ params }) {
      return {
        name: 'EJEMPLO ' + params.slug.toUpperCase(),
        serviceSlug: params.servicio,
        portfolioSlug: params.slug
      }
    },
    methods: {
      async selectService () {
        const brief = { service: { id: this.portfolio.service.id, name: this.portfolio.service.name, slug: this.portfolio.service.slug }, designs: [], styles: {}, colors: [], customColors: '', information: {} }
        var target = null
        // TODO: PENDIENTE
        if (this.serviceSlug === 'logo-y-pagina-web' || this.serviceSlug === 'pagina-web') {
          brief.subServices = []
          target = 'cotizacion'
        } else {
          target = 'brief/disenos'
        }

        this.$storage.set('brief', brief)
        this.$router.push('/nuestros-servicios/' + this.serviceSlug + '/' + target)
      },
      goPortfolio (url, portfolio) {
        if (process.browser) {
          localStorage.setItem('liderlogo_selected_portfolio', JSON.stringify(portfolio))
        }

        this.$router.push(url)
      }
    },
    data () {
      return {
        urlHosting: 'http://api.liderlogos.com/v1/images/slug/'
      }
    },
    head () {
      return {
        titleTemplate: this.portfolio ? this.portfolio.name + ' | %s' : '' || 'Ejemplo | %s',
        meta: [
          { property: 'og:title', content: this.portfolio ? this.portfolio.name : '' || 'Ejemplo' },
          { property: 'og:description', content: this.portfolio ? this.portfolio.description : '' || 'Ejemplo' },
          { hid: 'description', name: 'description', content: this.portfolio ? this.portfolio.description : '' || 'Ejemplo' }
        ]
      }
    },
    computed: {
      portfolio () {
        let p

        if (process.browser) {
          p = localStorage.getItem('liderlogo_selected_portfolio')
        }

        if (p) return JSON.parse(p)

        return this.$store.state.portfolios.list.find(el => el.slug === this.portfolioSlug)
      },
      portfolios () {
        let portfolios = []
        this.$store.state.portfolios.relateds.forEach((portfolio, i) => {
          if (portfolio.slug !== this.portfolioSlug) {
            portfolios.push(portfolio)
          }
        })
        return portfolios
      },
      briefUrl () {
        /* TODO: */
        if (this.service === 'logo-y-pagina-web' || this.service === 'pagina-web') {
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

<style>
  .chip-title{
    font-weight: 600; 
    width: 80px; 
    display: inline-block;
  }

  .box-sticky{
    position: sticky;
    top: 15px;
  }

  .arrow-left, .arrow-right{
    height: 70px;
    width: 400px;
    text-align: center;
    border-radius: 0px !important;
  }

  .arrow-left::after, .arrow-right::after{
    border-top: 35px solid transparent;
    border-bottom: 35px solid transparent;
  }

  .arrow-left::after {
    border-right: 52px solid #0081c1;
    content: '';
    position: absolute;
    left: -52px;
  }

  .arrow-right::after {
    border-left: 52px solid #f7941d;
    content: '';
    position: absolute;
    right: -52px;
  }

  .portfolio-carousel{
    width: 100%; 
    max-height: calc( 80vw / 3 );
  }

@media (min-width: 320px) and (max-width: 980px) {
  
  .arrow-left, .arrow-right{
    width: 80%;
  }

  .arrow-left::after, .arrow-right::after{
    display: none;
  }
}

</style>
