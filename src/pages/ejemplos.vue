<template>
  <section>
    <v-container grid-list-md class="ejemplos">
      <v-layout row wrap class="custom--alignment">
        <v-flex xs12 class="my-3 py-5 xs-pb-0"></v-flex>
        <v-flex xs12>
          <h1 class="mb-4 px-4">{{h1}}</h1>
        </v-flex>
                <v-flex sm6 md6>
                  <div>
                  <h3>
                      Encuentra aquí los ejemplos de diseño de la actividad que buscas:
                  </h3>

              </div>
                </v-flex>
                <v-flex sm6 md4>
                  <div>
                    
               <v-autocomplete
                label="Todas las actividades"
                :items="computedSectors"
                item-text="text" solo=true item-value="field" :value="text" @change="setSector($event)"> -
              ></v-autocomplete> 
              </div>
            <!--       <v-select :items="sectors" item-text="text" item-value="field" :value="paramsData.sector" label="Sector o Actividad"  @change="redirect($event, 'countries/getAll', 2)" solo></v-select>
            -->   
       </v-flex>
        </v-layout>
          <v-layout xs12 row wrap class="portfolios" v-if="portfolios && portfolios.length">
            <v-flex v-for="(portfolio, key) in portfolios " :key="portfolio.id + key" xs12 sm6 md4 class="pr-2">
              <v-card height="auto" class="mb-4">
                <div class="img-cuadrada-ejemplos-container" >
                <v-carousel
                :cycle= false
                :hide-delimiters = true
                class="img-cuadrada-ejemplos-carousel">
                  <v-carousel-item
                    v-for="(item,i) in portfolio.images" :key="i">
                        <svg role="img" @click="goTo('/ejemplo/' + portfolio.service.slug + '/' + portfolio.slug)" :aria-label="portfolio.name" :alt="portfolio.name" class="img-cuadrada-ejemplos" style="border-bottom: 1px solid #6a6a6a38;" viewBox="0 0 100 100 " v-lazy:background-image="urlHosting + item.slug"></svg>
                  </v-carousel-item>
                </v-carousel>
                </div>
                <v-flex class="my-0">
                <h4 class="mb-1 px-1 text-xs font-weight-bold" @click="goTo('/ejemplo/' + portfolio.service.slug + '/' + portfolio.slug)" :aria-label="portfolio.name">{{portfolio.name}}</h4>

                  <p class="text-xs px-1  mb-1" style="font-weight: 400;">
                    {{portfolio.service.name}}
                  </p>
                    <nuxt-link  v-if="!isMobile" class="caption px-1" :to= "'/ejemplo/' + portfolio.service.slug + '/' + portfolio.slug" style="font-weight: bold; color: #898989;">Conocer más</nuxt-link>
                     <span  v-else></span>
                    </v-flex>
                  <v-flex class="my-0 px-1" v-if="isMobile">
                    
                  <read-more class="text-xs px-1 " more-str="leer más" :text="portfolio.description" link="#" less-str="leer menos" :max-chars="35"></read-more>
                    
                  </v-flex>
              </v-card>
            </v-flex>
          </v-layout>

        <v-flex  xs12 class="my-3" text-xs-center >
          <v-layout xs12 row wrap justify-center align-center >
            <v-btn class="arrow-left subheading" color="#0081c1" dark depressed large :to="'/nuestros-servicios'">
              CONOCER SOBRE EL SERVICIO
            </v-btn>
            <v-btn class="arrow-right subheading" color="rgb(247, 148, 29)" depressed dark large :to="'/ejemplos'">
              
              VER TODOS LOS EJEMPLOS

            </v-btn>
          </v-layout>
        </v-flex>
        <v-flex md8 offset-md2 v-if="descriptionActivity">
          <h2> {{h2}}</h2>
          <p  class="text-xs-justify mt-3" style="font-weight:500;" v-html="descriptionActivity">
          </p>
        </v-flex>
    </v-container>

  </section>
</template>

<script>
  export default {
    data () {
      return {
        urlHosting: 'https://api.liderlogo.com/v1/images/slug/',
        alt: 'Ejemplos de nuestros trabajos profesionales',
        h1: 'Descubre algunos de nuestros trabajos para marcas triunfadoras',
        h2: false,
        description: 'Ejemplos de logos, imagen corporativa y páginas web, tenemos más de 15 años de experiencia diseñando marcas',
        title: 'Ejemplos de nuestros trabajos profesionales',
        descriptionActivity: false,
        isMobile: this.$device.isMobile
      }
    },
    watch: {
      'params': function (to, from) {
        // console.log(to)
      }
    },
    asyncData ({ params }) {
      return { params: params }
    },
    async fetch ({ store, params }) {
      /* if (params.servicio) await store.dispatch('sectors/getAll')
      if (params.sector) await store.dispatch('sectors/activities/getAll')
      if (params.actividad) await store.dispatch('countries/getAll')
      if (params.pais) await store.dispatch('countries/locations/getAll') */
      await store.dispatch('services/getAll')
      await store.dispatch('sectors/getAll')
      // await store.dispatch('sectors/activities/getAll')
      await store.dispatch('countries/getAll')
      // await store.dispatch('countries/locations/getAll')
      await store.dispatch('portfolios/getAll', params)
    },

    created () {
      this.inicializar()
    },
    mounted () {
      this.scroll()
    },
    methods: {
      async setSector (event) {
        let data = {
          'servicio': 'servicios',
          'sector': event,
          'offset': 0
        }
        this.params = data
        if (event === 'sectores') {
          history.replaceState({}, null, '')
          /* window.location.replace('ejemplos') */
          this.$router.replace('ejemplos')
          this.$router.go()
          await this.$store.dispatch('portfolios/getAll')
        } else {
          history.replaceState({}, 'ejemplos', '/ejemplos/servicios/' + event)
          await this.$store.dispatch('portfolios/getAll', this.params)
        }
        this.inicializar()
      },
      goTo (url) {
        if (url === 'ejemplos ') {

        } else {
          this.$router.push({
            path: url
          })
        }
      },
      goPortfolio (url, portfolio) {
        if (process.browser) {
          localStorage.setItem('liderlogo_selected_portfolio', JSON.stringify(portfolio))
        }

        this.$router.push(url)
      },
      parsePortfolio (portfolio) {
        let parsed = ''

        if (portfolio.description) {
          parsed = portfolio.description.length > 25 ? portfolio.description.substring(0, 25) + '...' : portfolio.description
        }
        return parsed
      },
      scroll () {
        if (process.browser) {
          let lastScroll
          window.onscroll = () => {
            let { top } = document.querySelector('.arrow-left').getBoundingClientRect()
            var st = window.pageYOffset || document.documentElement.scrollTop
            if (st > lastScroll) {
              if (top > 60 && top < 600) {
                this.$store.dispatch('portfolios/getAll', this.params)
              }
            }
            lastScroll = st <= 0 ? 0 : st
          }
        }
      },
      inicializar () {
        const list = this.$store.state.portfolios.list
        if (this.params.sector && list.length > 0) {
          this.title = list[0].activity.name
          this.meta_title = list[0].activity.meta_title
          this.meta_description = list[0].activity.meta_description
          this.h1 = 'Diseño de logo de ' + list[0].activity.name
          this.description = list[0].activity.description && list[0].activity.description.length > 0 ? list[0].activity.description.substring(0, 160) : this.description
          this.descriptionActivity = list[0].activity.description
          this.h2 = 'Ejemplos de logo para ' + list[0].activity.name
        }
      }
    },
    head () {
      return {
        titleTemplate: this.title + ' | %s',
        meta: [
          { property: 'og:title', content: this.meta_title ? this.meta_title : this.title },
          { property: 'og:description', content: this.meta_description ? this.meta_description : this.description },
          { hid: 'description', name: 'description', content: this.meta_description ? this.meta_description : this.description }
        ]
      }
    },
    computed: {
      computedSectors(){
        const lower=this.sectors.map(el => {
          el.text = el.text.toLowerCase()
          return el;
        })
         return lower.sort((a,b)=>{
          console.log(Object.keys(a)[0])
          return (a.text > b.text) - 0.5;
        });
      },
      sectors () { return this.$store.getters['sectors/forSelectField'] },
      portfolios () {
        if (this.$store.state.portfolios.list) {
          return this.$store.state.portfolios.list.filter(function (e) {
            return ![
              'Alquimia Expediciones - Tours y recorridos de montaña',
              'Corpeluva - Corporación educativa',
              'Geoit - Consultaría de Negocios geográficos',
              'Maremma - Heladería artesanal y cafetería.',
              'Sergio Hedrera - Fotógrafo',
              'Team Plus Interiorismo - Interiorismo Reformas y diseño de interiores'
            ].includes(e.name)
          })
        }
        return false
      }
    }
  }
</script>

<style>
.custom--alignment{
      display: flex;
    align-items: center;
}
h3{
  font-weight: 400;
}
 h4 {
    cursor: pointer;
}
.img-cuadrada-ejemplos {
  cursor: pointer;
}
  @media all and (max-width: 480px){
      .img-cuadrada-ejemplos{
        background-size: cover !important; 
        
  }
    .img-cuadrada-ejemplos-container{
    height:24rem !important;width:100%;
  }

    }
    @media all and (max-width: 950px){
      .img-cuadrada-ejemplos-carousel {
          height: 370px !important;
      }
    }
    @media all and  (min-width: 950px) and (max-width: 1260px){
      .img-cuadrada-ejemplos-carousel {
          height: 292px !important;
      }
    }
    @media all and  (min-width: 1260px) and (max-width: 1900px){
      .img-cuadrada-ejemplos-carousel {
          height: 27rem !important;
      }
    }


    @media all and (min-width: 1900px){
      .img-cuadrada-ejemplos{
        background-size: cover !important;       
           }
      }
      

   .img-cuadrada-ejemplos-carousel{
   height: 370px;
  }

.ejemplos  .v-text-field__details {
  display: none;
}

.pointer{
  cursor: pointer;
}

  .arrow-left, .arrow-right{
    height: 70px;
    width: 81%;
    max-width: 400px;
    text-align: center;
    border-radius: 0px !important;
    font-size: 13px !important;
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

  .v-carousel__prev, .v-carousel__next{
  border:none;
  top: 40%;
}
  .v-carousel__prev i, .v-carousel__next i{
    color:white;
  }
</style>
