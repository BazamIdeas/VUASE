<template>
  <v-layout 
    @mouseover="outstanding = true" 
    @mouseleave="outstanding = false"  
    v-resize="showBorders" 
    row wrap 
    class="service-box-container px-3 pt-5 pb-2 xs-pt-2">
    <v-layout xs12 v-if="name" class="service-box-title" row align-center>
      <img alt="Servicio Liderlogo" :src="icon" height="70" width="70" class="mr-2">
      <v-flex>
        <h2 @click="saveServiceLocalStorage(url)" class="title font-weight-bold" style="cursor:pointer;" :class="{ 'outstanding': outstanding }">{{ name | uppercase }}</h2> 
        <span class="title" :class="{ 'outstanding': outstanding }" style="position: relative; top: 4px; font-weight: 600">
           <h5 class="subheading my-1" style="font-weight: 600" v-if="startWith" :class="{ 'outstanding': outstanding }">{{startWith}}</h5> 
          <span v-if="price.currency.display == 'left'">
           
            {{price.currency.iso == "PYG" ? "₲" : price.currency.symbol}}
            {{price.value}}
            
          </span>

          <span v-if="price.currency.display == 'right'">
            {{price.value}}
            {{price.currency.symbol}}
          </span>
          <span v-if="oferta" style="font-weight: 400; font-size: 14px;">{{oferta}} </span>
        </span> 
        <!-- <v-btn flat small outline :class="{ 'outstanding-button': outstanding }" @click="selectService">
          comenzar
        </v-btn> -->
      </v-flex>
    </v-layout>
    <v-flex xs12 v-if="description" class="service-box-description">
      <br>
      <p class="body-2 font-weight-medium">{{description}}</p>
    </v-flex>
    <v-flex xs12 v-if="list && list.length > 0 && list[0] != ''" class="service-box-list">
      <h4 v-if="url !='perfil-redes-sociales'">Que incluye: </h4>
      <ul :class="{ 'outstanding': outstanding }">
        <li v-for="(item, i) in list" :key="i" class="my-3 body-2 font-weight-medium">{{item}}</li>
      </ul>
    </v-flex>

    <v-flex xs12>
      <v-btn @click="saveServiceLocalStorage(url)" flat class="ma-0 px-2" large :class="{ 'outstanding': outstanding }">
        conocer más&nbsp;&nbsp;<v-icon>add_circle_outline</v-icon>
      </v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    props: {
      id: Number,
      icon: String,
      name: String,
      oferta: String,
      price: Object,
      addonService: Boolean,
      startWith: String,
      currency: {
        default: '$',
        type: String
      },
      description: String,
      list: {
        type: Array,
        default: undefined
      },
      br: {
        default: false,
        type: Boolean
      },
      bb: {
        default: false,
        type: Boolean
      },
      bt: {
        default: false,
        type: Boolean
      },
      url: {
        default: '',
        type: String
      }
    },
    data () {
      return {
        borders: false,
        outstanding: false
      }
    },
    mounted () {
      this.showBorders()
    },
    methods: {
      consoleThis (a) {
        console.log(a)
      },
      showBorders () {
        if (window.innerWidth > 960) {
          this.borders = true
        } else {
          this.borders = false
        }
      },
      saveServiceLocalStorage (slug) {
        let packages = []

        switch (slug) {
          case 'sitio-web-ecommerce':
            packages.push('vender-mis-productos-online')
            break
          case 'presencia-web':
            packages.push('presentar-mi-empresa')
            break
          case 'pagina-web':
            packages.push('ofrecer-multiples-servicios')
            break
          case 'logo-y-pagina-web':
            packages.push('ofrecer-multiples-servicios')
            break
        }

        this.$storage.set('quotePacksOptions', packages)
        this.$storage.set('quoteAddonsOptions', [])

        this.$router.push('/nuestros-servicios/' + slug)
      }
    },
    filters: {
      uppercase (value) {
        return value.toUpperCase()
      }
    }
  }
</script>

<style scoped>

  *, button.v-btn{
    color: #5e5e5e;
    font-weight: 700;
  }

  .outstanding {
    color: #4a6eb4 !important;
  }

  button.v-btn.outstanding-button {
    font-weight: 700;
    color: #4a6eb4 !important;
    border: 1px solid #4a6eb4 !important;
  }

  button.v-btn.v-btn--outline {
    border: 1px solid #5e5e5e;
    font-weight: 700;
  }

  .service-box-list ul, .service-box-list ol {
    padding-left: 17px;
    list-style-image: url('/images/icons/check.png');
  }

  .service-box-list ul.outstanding, .service-box-list ol.outstanding {
    padding-left: 17px;
    list-style-image: url('/images/icons/check-blue.png');
  }

  .flex.service-box-title {
    display: flex;
    align-items: flex-end;
  }
</style>