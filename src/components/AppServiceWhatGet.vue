<template lang="html">
	<v-flex xs12>
    <v-container fluid grid-list-md class="mt-4 pb-0">
      <v-flex xs8 v-if="!justOne">
        <AppHeading number="1" size="display-2" align="center" :title="title" />
      </v-flex>
      <v-layout xs12 row wrap class="what-you-get">
          <v-flex xs12 md4  v-for="(column, i) in service.whatYouGet.columns" :key="i" class="pa-3 column" :class="{'no-border md6': justOne, 'mt-5 ': !justOne}">
            <v-layout  d-flex column>
              <v-flex xs12 v-for="(item, key) in column" :key="key" class="mb-4 pb-2 pt-2">
                <!-- if just one -->
                <v-flex xs12 class="mb-5" v-if="justOne">
                  <h2 class="display-2 font-weight-bold  text-xs-center text-uppercase">{{title}}</h2>
                </v-flex>
                <v-flex xs12 v-if="item.description && justOne" class="text-xs-justify mb-4 ml-3">
                  <span class="subheading font-weight-medium text-xs-justify" v-html="item.description"></span>
                </v-flex>
                
                <v-flex>
                  <v-layout  xs12 align-center justify-start row fill-height class="mb-2">
                  <v-flex xs3 class="mr-2 ml-0">
                    <img alt="Icono Servicio Liderlogo" :src="item.icon" :height="!justOne ? '70px' : '110px'" :width="!justOne ? '70px' : '110px'">
                  </v-flex>
                  <v-flex class="mr-3">
                    <h2 class="font-weight-bold" color="dark" :class="{'headline mb-3': justOne, 'title-custom mb-0': !justOne}">{{ item.title }}</h2>
                  </v-flex>
                </v-layout>
                </v-flex>
                

                <v-flex xs12 v-if="item.description && !justOne" class="text-xs-justify" :class="{'mb-4': key !== column.length - 1}">
                  <span class="caption font-weight-medium" v-html="item.description"></span>
                </v-flex>
                <v-flex xs12 v-if="item.items && item.items.length" class="service-box-list"  :class="{'mb-4': key !== column.length - 1}">
                  <ul>
                    <li v-for="(checkItem, i) in item.items" :key="i" v-html="checkItem" :class="{'subheading ml-3 mb-4': justOne, 'caption mb-2': !justOne}" class="font-weight-medium"></li>
                  </ul>
                </v-flex>
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex xs12 :class="{'md6': justOne, 'md4': !justOne}">
            <v-layout row wrap d-flex text-xs-center column class="ml-4" :class="{'max': !service.whatYouGet.noMaxWidth}">
              <v-flex class="ml-2">
                  <img alt="Que te llevas Liderlogo" :src="service.whatYouGet.img"  width="100%"></img>
                  <h3 v-if="!service.whatYouGet.notShowPrice" class="headline font-weight-bold text-uppercase" :style="'color:'+service.whatYouGet.color">
                    PRECIO CERRADO EN:
                  </h3>
                  <v-layout xs12 row d-flex class="mt-2 box-price" v-if="!service.whatYouGet.notShowPrice">
                    <v-flex xs6 text-xs-right v-if="finalPercertage > 0"> 
                      <h3 style="color:#F7941F;" class="display-1 font-weight-medium"  :style="'color:'+service.whatYouGet.color">
                        <span v-if="$store.state.services.RightSymbol.indexOf(price.currency.iso) === -1">
                          {{price.currency.symbol}}
                          {{price.value}}
                        </span>

                        <span v-if="$store.state.services.RightSymbol.indexOf(price.currency.iso) !== -1">
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
                  <v-btn :style="'background:'+service.whatYouGet.color" dark class="mt-3 ml-0" :to="url">INICIAR MI PROYECTO</v-btn>
              </v-flex>
            </v-layout>
          </v-flex>
			</v-layout>
		</v-container>
  </v-flex>
</template>

<script lang="js">
  export default {
    props: ['title', 'service', 'price', 'percentage'],
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
        if (this.service.whatYouGet.noCarrito) {
          return this.$router.currentRoute.path + '/brief/estilos#nocarrito'
        }
        return this.$router.currentRoute.path + '/brief'
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
</style>
