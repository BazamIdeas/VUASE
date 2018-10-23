<template lang="html">
	<v-flex xs12>
    <v-container fluid grid-list-md class="mt-5 pb-0">
      <v-flex xs12 class="mb-5" v-if="!justOne">
        <AppHeading :number="'1'" :size="'display-2'" :title="title" />
      </v-flex>
      <v-layout xs12 row wrap class="what-you-get mb-5">
          <v-flex xs12 md4  v-for="(column, i) in service.whatYouGet.columns" :key="i" class="pa-3 column" :class="{'no-border md6': justOne}">
            <v-layout  d-flex column>
              <v-flex xs12 v-for="(item, key) in column" :key="key" class="mb-4 pb-2 pt-2">
                <!-- if just one -->
                <v-flex xs12 class="mb-5" v-if="justOne">
                  <h2 class="display-1 font-weight-bold text-uppercase">{{title}}</h2>
                </v-flex>
                <v-flex xs12 v-if="item.description && justOne" class="text-xs-justify mb-4">
                  <span class="body-2">{{ item.description }}</span>
                </v-flex>

                <v-layout align-center justify-start row fill-height class="mb-2">
                  <v-img :src="item.icon" :max-width="justOne ? 80 : 40" class="mr-2"></v-img>
                  <h1 class="font-weight-bold mb-0" color="dark" :class="{'display-1': justOne, 'title': !justOne}">{{ item.title }}</h1>
                </v-layout>

                <v-flex xs12 v-if="item.description && !justOne" class="text-xs-justify" :class="{'mb-4': key !== column.length - 1}">
                  <span class="body-2">{{ item.description }}</span>
                </v-flex>
                <v-flex xs12 v-if="item.items && item.items.length" class="service-box-list"  :class="{'mb-4': key !== column.length - 1}">
                  <ul>
                    <li v-for="(checkItem, i) in item.items" :key="i" class="body-2 font-weight-medium mb-2">{{checkItem}}</li>
                  </ul>
                </v-flex>
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex xs12 md4 :class="{'offset-md2': justOne}">
            <v-layout row wrap d-flex column>
              <v-flex class="ml-2">
                  <v-img :max-width="justOne ? '90%' : '100%'" :src="service.whatYouGet.img"></v-img>
                  <h2 class="title font-weight-bold text-uppercase">
                    PRECIO CERRADO EN:
                  </h2>
                  <v-layout xs12 row d-flex>
                    <v-flex xs4>
                      <h2 style="color:#F7941F;" class="display-1">{{price.currency.symbol}} {{price.value}}</h2>
                    </v-flex>
                    <v-layout xs6 row d-flex>
                      <v-flex xs4 style="border-right:1px solid silver;" class="mr-3">
                        <h3 class="title">{{percentage}}%</h3>
                        <h5 class="body-2">al iniciar</h5>
                      </v-flex>
                      <v-flex xs4>
                        <h3 class="title">{{finalPercertage}}%</h3> 
                        <h5 class="body-2">al finalizar</h5>
                      </v-flex>
                    </v-layout>
                  </v-layout>
                  <v-btn color="231F20" dark class="mt-3 ml-0" :to="url">INICIAR MI PROYECTO</v-btn>
              </v-flex>
            </v-layout>
          </v-flex>
			</v-layout>
		</v-container>
  </v-flex>
</template>

<script lang="js">
  export default {
    props: ['title', 'service', 'justOne', 'price', 'percentage'],
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
        return this.$router.currentRoute.path + '/brief'
      }
    }
  }
</script>

<style scoped lang="css">
.what-you-get .column > div:not(:last-child) {
    border-bottom: 1px solid silver;
}

.what-you-get > :nth-child(1):not(.no-border) {
    border-right: 1px solid silver;
}

.service-box-list ul, .service-box-list ol {
  padding-left: 17px;
  list-style-image: url('/images/icons/check.png');
}

[color="dark"]{
	color: #4b4b4b;
}

</style>
