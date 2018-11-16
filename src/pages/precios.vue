<template>
  <section>
    <AppPricesCarousel/>
    <v-container fluid grid-list-md class="mt-5">
      <v-layout row wrap>
        <v-flex xs12 offset-md2 md8 class="mb-5">
          <v-layout row wrap>
            <v-flex xs12 offset-md6 md6>
              <h1 class="font-weight-bold mb-2 text-uppercase text-xs-center" style="font-size: 30px;">SELECCIONA TU SERVICIO</h1>
              <v-select :items="services" @change="getBySlug" v-model="service" solo></v-select>
            </v-flex>
            <v-flex xs12 md6 v-if="serviceObject">
              <div style="text-align: center">
                <img :src="serviceObject.icon" alt="" width="200">
                <p class="service-name mb-0">{{ serviceObject.title }}</p>
                <h1 class="price">{{ serviceObject.price.currency.symbol }} {{ serviceObject.price.value }}</h1>
              </div>
            </v-flex>
            <v-flex xs12 md6 v-if="serviceObject" class="service-box-list">
              <p class="caption font-weight-medium">{{ serviceObject.description }}</p>
              <ul>
                <li v-for="(item, i) in serviceObject.list" :key="i" class="my-2 caption font-weight-medium">{{item}}</li>
              </ul>
              <div>
                <v-btn flat :to="'/nuestros-servicios/'+serviceObject.slug" class="px-2" small style="color:#676767">
                  conocer más&nbsp;&nbsp;<v-icon>add_circle_outline</v-icon>
                </v-btn>
                <v-btn flat @click="selectService" outline class="px-2" small style="background-color: #87C438 !important; border-color: #87C438; color: white;">comenzar</v-btn>
              </div>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex xs12 offset-md2 md8 class="my-5 text-xs-center">
          <h1 class="display-1 font-weight-bold text-xs-center mb-4" style="color: #303032;">¿Eres agencia o revendedor? Descubre nuestro especial para profesionales del sector.</h1>
          <v-btn flat outline class="px-2" style="background-color: #303032 !important; border-color: #303032; color: white;">CONOCER MAS</v-btn>
        </v-flex>
        <v-flex xs12 md5>
          <img src="/images/pages/muchacho_contacto.png" alt="" width="100%">
        </v-flex>
        <v-flex md6 class="my-5">
          <h1 class="font-weight-bold mb-3 text-uppercase text-xs-center" style="font-size: 40px;">¿TIENES ALGUNA DUDA?</h1>
          <h4 class="font-weight-medium mb-4 text-uppercase text-xs-center theme--light v-label">Consulta GRATIS a nuestros expertos:</h4>
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
    mounted () {
      let vue = this
      setTimeout(() => {
        vue.serviceObject = this.$store.getters['services/getBySlug'](this.service)
      }, 3000)
    },
    data () {
      return {
        service: 'logo-a-medida',
        serviceObject: null
      }
    },
    computed: {
      services () {
        let servicesArray = []
        let services = this.$store.state.services.list

        for (let service of services) {
          servicesArray.push({ text: service.name, field: service.slug, value: service.slug })
        }

        return servicesArray
      }
    },
    methods: {
      async selectService () {
        const brief = { service: { id: this.serviceObject.id, name: this.serviceObject.name, slug: this.serviceObject.slug }, designs: [], styles: {}, colors: [], customColors: '', information: {} }
        var target = null

        if (this.serviceObject.url === 'diseno-logo-y-pagina-web' || this.serviceObject.url === 'diseno-pagina-web') {
          brief.subServices = []
          target = 'cotizacion'
        } else {
          target = 'brief/disenos'
        }

        this.$storage.set('brief', brief)
        this.$router.push('/nuestros-servicios/' + this.serviceObject.slug + '/' + target)
      },
      getBySlug () {
        this.serviceObject = this.$store.getters['services/getBySlug'](this.service)
      }
    }
  }
</script>

<style scoped>
  .v-list__tile__content {
    font-weight: 600;
  }

  .service-box-list {
    display: flex;
    flex-flow: column;
    align-items: center;
  }

  .service-name {
    color: #676767;
    font-size: 20px;
    font-weight: 700
  }

  .price {
    font-size: 40px;
    font-weight: 700;
    color: #87C438;
  }

  .service-box-list ul, .service-box-list ol {
    padding-left: 17px;
    margin-bottom: 20px;
    list-style-image: url('/images/icons/check-green.png');
  }

  .service-box-list ul li {
    font-weight: 600;
    color:#676767;
    margin-top: 11px;
  }
</style>