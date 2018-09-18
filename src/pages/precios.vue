<template>
  <section>
    <AppPricesCarousel />
    <v-container fluid grid-list-md>
      <v-layout row wrap>
        <v-flex xs12 offset-md2 md8 class="mb-5">
          <v-layout row wrap>
            <v-flex xs12 offset-md6 md6>
              <h1 class="font-weight-bold mb-2 text-uppercase text-xs-center" style="font-size: 30px;">SELECCIONA TU SERVICIO</h1>
              <v-select :items="items" label="Servicios" solo></v-select>
            </v-flex>
            <v-flex xs12 md6>
              <div style="text-align: center">
                <img src="/icons/folletos_y_publicidades_hover.svg" alt="" width="200">
                <p class="service-name mb-0">PACK DE IDENTIDAD VISUAL</p>
                <h1 class="price">$ 127</h1>
              </div>
            </v-flex>
            <v-flex xs12 md6 v-if="list && list.length" class="service-box-list" justify-center>
              <ul :class="{ 'outstanding': outstanding }">
                <li v-for="(item, i) in list" :key="i" class="body-2">Lorem ipsum es un texto de prueba para</li>
                <li class="body-2">Lorem ipsum es un texto de prueba para</li>
                <li class="body-2">Lorem ipsum es un texto de prueba para</li>
                <li class="body-2">Lorem ipsum es un texto de prueba para</li>
              </ul>
              <div>
                <v-btn flat class="px-2" small style="color:#676767">
                  conocer más&nbsp;&nbsp;<v-icon>add_circle_outline</v-icon>
                </v-btn>
                <v-btn flat outline class="px-2" small style="background-color: #87C438 !important; border-color: #87C438; color: white;">comenzar</v-btn>
              </div>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex xs12 offset-md2 md8 class="my-5 text-xs-center">
          <h1 class="display-1 font-weight-bold text-xs-center mb-4" style="color: #303032;">¿NECESITAS UN SERVICIO PROFESIONAL?</h1>
          <v-btn flat outline class="px-2" style="background-color: #303032 !important; border-color: #303032; color: white;">Comencemos</v-btn>
        </v-flex>
        <v-flex xs12 md5>
          <img src="/images/pages/muchacho_contacto.png" alt="" width="100%">
        </v-flex>
        <v-flex md6 class="my-5">
          <h1 class="font-weight-bold mb-4 text-uppercase text-xs-center" style="font-size: 40px;">¿TIENES ALGUNA DUDA?</h1>
          <AppContactForm />
        </v-flex>
      </v-layout>
    </v-container>
  </section>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          { text: 'Logo a medida', field: 'logo-a-medida' },
          { text: 'Folletos', field: 'folleto-y-publicidades' }
        ],
        list: [
          'dasdasdadasdasdadadsasdad'
        ]
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