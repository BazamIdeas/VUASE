<template>
  <v-layout 
    @mouseover="outstanding = true" 
    @mouseleave="outstanding = false"  
    v-resize="showBorders" 
    row wrap 
    class="service-box-container px-3 pt-5 pb-2" 
    :class="{ 'br': br && borders, 'bb': bb && borders, 'bt': bt && borders }">

    <v-flex 
    xs12 
    v-if="name" 
    class="service-box-title" 
    align-content-center>
      <img :src="icon" height="70" width="70" class="mr-2" style="float: left;">
      <div>
        <h1 class="title font-weight-bold" :class="{ 'outstanding': outstanding }">{{ name | uppercase }}</h1> 
        <span class="title" :class="{ 'outstanding': outstanding }" style="position: relative; top: 4px; font-weight: 600">{{ price.currency.symbol }} {{ price.value }}</span> <v-btn flat small outline :class="{ 'outstanding-button': outstanding }" @click="selectService">comenzar</v-btn>
      </div>
    </v-flex>
    <v-flex xs12 v-if="description" class="service-box-description">
      <br>
      <p class="caption font-weight-medium">{{description}}</p>
    </v-flex>
    <v-flex xs12 v-if="list && list.length > 0 && list[0] != ''" class="service-box-list">
      <ul :class="{ 'outstanding': outstanding }">
        <li v-for="(item, i) in list" :key="i" class="caption font-weight-medium">{{item}}</li>
      </ul>
    </v-flex>
    <v-flex xs12 v-if="startButton" class="service-box-more-button">
      <v-btn :to="'/nuestros-servicios/'+url" flat class="ma-0 px-2" large :class="{ 'outstanding': outstanding }">
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
      price: Object,
      currency: {
        default: '$',
        type: String
      },
      description: String,
      list: {
        type: Array,
        default: undefined
      },
      startButton: {
        default: false,
        type: Boolean
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
      showBorders () {
        if (window.innerWidth > 960) {
          this.borders = true
        } else {
          this.borders = false
        }
      },
      async selectService () {
        const brief = { service: { id: this.id, name: this.name, slug: this.url }, designs: [], styles: {}, colors: [], customColors: '', information: {} }
        var target = null

        if (this.url === 'diseno-logo-y-pagina-web' || this.url === 'diseno-pagina-web') {
          brief.subServices = []
          target = 'cotizacion'
        } else {
          target = 'brief/disenos'
        }

        this.$storage.set('brief', brief)
        this.$router.push('/nuestros-servicios/' + this.url + '/' + target)
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

  .layout.service-box-container {
    position: relative;
  }

  .service-box-container.bt:after {
    content: "";
    width: 80%;
    height: 2px;
    background-color: #a5a5a5;
    position: absolute;
    top: 0;
    left: 0;
  }

  .service-box-container.bb:before {
    content: "";
    width: 80%;
    height: 2px;
    background-color: #a5a5a5;
    position: absolute;
    bottom: 0;
    left: 0;
  }

  .service-box-container.br:before {
    content: "";
    width: 2px;
    height: 100%;
    background-color: #a5a5a5;
    position: absolute;
    right: 0;
    top: 0;
  }

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