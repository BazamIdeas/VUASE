<template>
  <section>
    <AppPricesCarousel/>
    <v-container fluid grid-list-md class="mt-0 pt-0 mt-xs-0">
      <v-layout row wrap>
        <v-flex xs12 offset-md2 md8 class="mb-1 ">
          <v-layout row wrap>
            <v-flex xs12 >
              <h2 class="font-weight-bold mb-2 text-xs-center" >Selecciona tu servicio</h2>
              <v-select :items="services" @change="getBySlug" label="Seleccionar" v-model="service" solo flat></v-select>
            </v-flex>
            <v-flex xs12 md6 v-if="serviceObject && serviceObject.dataService">
              <div style="text-align: center">
                    <div v-lazy-container="{ selector: 'img', loading: 'default.jpeg'}"> 
                <img :data-src="serviceObject.dataService.icon" :alt="serviceObject.slug + ' Liderlogo'" width="200" style="max-height: 150px">
                   </div>
                <p class="service-name mb-0">{{ serviceObject.dataService.title }}</p>
                <h5 class="subheading my-1" style="font-weight: 600" v-if="serviceObject.startWith" >A PARTIR DE</h5> 
                <h2 class="price" v-if="serviceObject.price.currency.display == 'right'">
                    {{serviceObject.price.currency.symbol + ' ' + serviceObject.price.value}}
                  <!-- {{ serviceObject.price.currency.symbol }} {{ serviceObject.price.value }} -->                
                </h2>
                  <h2 class="price" v-if="serviceObject.price.currency.display == 'left'">
                    {{serviceObject.price.currency.iso == "PYG" ? "₲ " + serviceObject.price.value : serviceObject.price.currency.symbol + ' ' + serviceObject.price.value}}
            
                  <!-- {{ serviceObject.price.currency.symbol }} {{ serviceObject.price.value }} -->

                  
                </h2>
                <span v-if="tax > 0" style="font-weight: 700;">+ IVA </span>
              </div>
            </v-flex>
            <v-flex xs12 md6 v-if="serviceObject && serviceObject.dataService" class="service-box-list">
              <p class="subheading font-weight-medium" v-html="serviceObject.dataService.descriptionPrice "></p>
              <ul>
                <li v-for="(item, i) in serviceObject.dataService.listPrices" :key="i" class="my-2 subheading font-weight-medium">{{item}}</li>
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
        <v-flex xs12 offset-md2 md8 class="my-5 mt-xs-0 pt-xs-0 text-xs-center">
          <AppHeading style="color: #303032;" class="hidden-sm-and-down font-weight-bold text-xs-center mb-4" number="2" size="display-1" title="Si eres una agencia o un revendedor te presentamos nuestro especial para profesionales." />

          <AppHeading style="color: #303032;" class="hidden-md-and-up font-weight-bold text-xs-center mb-4" number="2" size="display-1" title="¿Eres agencia o revendedor?" />

          <v-btn to="/servicios-profesionales" flat outline class="px-2" style="background-color: #303032 !important; border-color: #303032; color: white;">¡QUIERO SABER MÁS!</v-btn>
        </v-flex>
 
          <AppContactForm  />
      </v-layout>
    </v-container>
  </section>
</template>

<script>
  export default {
    head () {
      return {
        titleTemplate: this.title + ' | %s',
        meta: [
          { property: 'og:title', content: this.title },
          { property: 'og:description', content: this.description },
          { hid: 'description', name: 'description', content: this.description }
        ]
      }
    },
    async fetch ({ store }) {
      await store.dispatch('services/getAll')
    },
    data () {
      return {
        alt: 'Precio de diseño grafico ',
        description: 'Precios de diseño de logos o logotipos para empresas. Consulta las tarifas de diseño gráfico que tenemos para ti. Asesoramiento Profesional Gratuito.',
        title: 'Precio de logo e identidad corporativa',
        service: null,
        addons: [
          'galeria-de-proyectos',
          'catalogo-productos',
          'integracion-con-herramientas-de-google',
          'area-para-la-gestion-de-archivos',
          'seccion-de-noticias-o-publicaciones',
          'reservaciones-o-citas',
          'formulario-personalizado',
          'plataforma-inmobiliaria',
          'area-privada-para-clientes',
          'multidioma-automatico',
          'cotizador',
          'pop-publicitario',
          'chat',
          'certificado-ssl',
          'dominio-por-un-ano',
          'hosting-por-un-ano',
          'logo-solo-para-web',
          'diseno-y-desarrollo-de-seccion-web',
          'ecommerce',
          'adicional-papeleria',
          'presencia-web',
          'sitio-web-ecommerce'
        ]
      }
    },
    computed: {
      serviceObject () {
        return this.$store.getters['services/getBySlug'](this.service)
      },
      services () {
        let servicesArray = []
        let services = this.$store.state.services.list

        for (let service of services) {
          if (!this.addons.includes(service.slug)) {
            servicesArray.push({ text: service.name, field: service.slug, value: service.slug })
          }
        }

        return servicesArray
      },
      tax () { return this.$store.state.countries.data.tax },
    },
    methods: {
      async selectService () {
        const brief = { service: { id: this.serviceObject.id, name: this.serviceObject.name, slug: this.serviceObject.slug, quantity: 1 }, designs: [], styles: {}, colors: [], customColors: '', information: {}, subServices: [] }
        var target = null

        if (this.serviceObject.slug === 'logo-y-pagina-web' || this.serviceObject.slug === 'pagina-web') {
          brief.subServices = []
          target = 'cotizacion'
        } else {
          if (this.serviceObject.slug.includes('logo') || this.serviceObject.slug === 'imagen-corporativa') target = 'brief/disenos'
          else target = 'brief/estilos'
        }

        this.$storage.set('brief', brief)
        this.$router.push('/nuestros-servicios/' + this.serviceObject.slug + '/' + target)
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