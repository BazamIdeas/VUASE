<template lang="html">
	<v-flex xs12>
    <v-container fluid grid-list-md class="mt-4 pb-0">
      <v-flex xs12 md8 v-if="!justOne">
        <AppHeading number="2" size="display-1" align="center" :title="title" />
      </v-flex>
      <v-layout xs12 row wrap class="what-you-get">
          <v-flex xs12 md4  v-for="(column, i) in service.whatYouGet.columns" :key="i" class="pa-3 column" :class="{'no-border md6': justOne, 'mt-5 ': !justOne}">
            <v-layout  d-flex column>
              <v-flex xs12 v-for="(item, key) in column" :key="key" class="mb-4 pb-2 pt-2">
                <!-- if just one -->
                <v-flex xs12 class="mb-5" v-if="justOne">
                  <h3 class="display-1 font-weight-bold  text-xs-center ">{{title}}</h3>
                </v-flex>
                <v-flex xs12 v-if="item.description && justOne" class="body-2 mb-4 ml-3">
                  <span class="subheading font-weight-medium text-xs-justify" v-html="item.description"></span>
                </v-flex>
                
                <v-flex>
                  <v-layout  xs12 align-center justify-start row fill-height class="mb-2">
                  <v-flex xs3 class="mr-2 ml-0">
                    <img alt="Icono Servicio Liderlogo" :src="item.icon" :height="!justOne ? '70px' : '80px'" :width="!justOne ? '70px' : '80px'">
                  </v-flex>
                  <v-flex class="mr-3">
                    <h3 class="font-weight-bold" color="dark" :class="{'headline mb-3': justOne, 'title-custom mb-0': !justOne}">{{ item.title }}</h3>
                  </v-flex>
                </v-layout>
                </v-flex>
                

                <v-flex xs12 v-if="item.description && !justOne" class="text-xs-justify" :class="{'mb-4': key !== column.length - 1}">
                  <span class="body-1 font-weight-medium" v-html="item.description"></span>
                </v-flex>
                <v-flex xs12 v-if="item.items && item.items.length" class="service-box-list"  :class="{'mb-4': key !== column.length - 1}">
                  <ul>
                    <li v-for="(checkItem, i) in item.items" :key="i" v-html="checkItem" :class="{'subheading ml-3 mb-4': justOne, 'body-1 mb-2': !justOne}" class="font-weight-medium"></li>
                  </ul>
                </v-flex>
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex xs12 :class="{'md6': justOne, 'md4': !justOne}">
            <v-layout row wrap d-flex text-xs-center column class="ml-4 ml-xs-0" :class="{'max': !service.whatYouGet.noMaxWidth}">
              <v-flex class="ml-2">
                  <img alt="Diseño de logo e imagen corporativa" :src="service.whatYouGet.img"  width="100%"></img>
                  <h3 v-if="!service.whatYouGet.notShowPrice" class="headline font-weight-bold text-uppercase" :style="'color:'+service.whatYouGet.color">
                    NUESTRO PRECIO CERRADO PARA TI:
                  </h3>
                  <v-layout xs12 row d-flex class="mt-2 box-price" v-if="!service.whatYouGet.notShowPrice">
                    <v-flex xs6 text-xs-right v-if="finalPercertage > 0"> 
                      <h3 style="color:#F7941F;" class="display-1 font-weight-medium"  :style="'color:'+service.whatYouGet.color">
                        <span v-if="price.currency.display == 'left'">
                          {{price.currency.symbol}}
                          {{price.value}}
                        </span>

                        <span v-if="price.currency.display == 'right'">
                          {{price.value}}
                          {{price.currency.symbol}}
                        </span>
                      </h3>
                    </v-flex>
                    <v-flex xs12 v-if="!finalPercertage > 0"> 
                      <h3 style="color:#F7941F;" class="display-1 font-weight-medium"  :style="'color:'+service.whatYouGet.color">{{price.currency.symbol}} {{price.value}}</h3>
                    </v-flex>
                    <v-layout xs6 row d-flex v-if="finalPercertage > 0">
                      <v-flex xs5 style="border-right:1px solid silver;" class="mr-2">
                        <h3 class="title">{{percentage}}%</h3>
                        <h5 class="body-2">al iniciar</h5>
                      </v-flex>
                      <v-flex xs5>
                        <h4 class="title">{{finalPercertage}}%</h4> 
                        <h6 class="body-2">al finalizar</h6>
                      </v-flex>
                    </v-layout>
                  </v-layout>
                  <v-btn flat round block style="border:none;" :style="'background: #004e7c; color:white !important;'" class="mt-3 ml-0 btn-simple" :to="url">¡QUIERO MI DISEÑO!</v-btn>
              </v-flex>
            </v-layout>
          </v-flex>
			</v-layout>
		</v-container>
  </v-flex>
</template>

<script lang="js">
  export default {
    props: ['title', 'service', 'slug', 'price', 'percentage'],
    mounted () {
    },
    data () {
      return {

      }
    },
    methods: {

    },
    computed: {
      finalPercertage () {
        return 100 - this.percentage
      },
      url () {
        const brief = { service: { id: this.id, name: this.service.title, slug: this.slug, quantity: 1 }, designs: [], styles: {}, colors: [], customColors: '', information: {}, subServices: [] }

        if (this.service.whatYouGet.noCarrito) {
          return this.$router.currentRoute.path + '/brief/estilos#nocarrito'
        }

        if (this.$storage) this.$storage.set('brief', brief)

        if (this.slug === 'logo-y-pagina-web' || this.slug === 'pagina-web') {
          console.log(this.$router.currentRoute.path)
          return this.$router.currentRoute.path + '/cotizacion'
        }

        if (this.slug !== 'catalogo') {
          if (this.slug.includes('logo') || this.slug === 'imagen-corporativa') {
            return this.$router.currentRoute.path + '/brief/disenos'
          }
        }

        return this.$router.currentRoute.path + '/brief/estilos'
      },
      justOne () {
        return this.service.whatYouGet.columns.length === 1
      }
    }
  }
</script>

<style scoped lang="css">
.what-you-get .column > div:not(:last-child) {
    border-bottom: 2px solid silver;
}

.what-you-get > :nth-child(1):not(.no-border) {
    border-right: 2px solid silver;
}

.service-box-list ul, .service-box-list ol {
  padding-left: 17px;
  list-style-image: url('/images/icons/check.png');
}

.title-custom {
    font-size: 16px;
}
.max{
  max-width: 500px;
}

.box-price{
  max-width: 440px;
}

@media (min-width: 320px) and (max-width: 960px) {
  .what-you-get > div {
      border: none !important;
      margin-top: 10px !important;
  }
}
</style>
