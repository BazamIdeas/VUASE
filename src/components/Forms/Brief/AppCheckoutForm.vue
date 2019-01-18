<template>
  <v-layout row wrap class="px-2 mt-4 mb-5">
    <v-flex xs2 offset-xs6 md2 offset-md7 class="hidden-xs-only">
      <h1 class="subheading font-weight-bold text-xs-right"> PRECIO </h1>
    </v-flex>
    <v-flex xs4 md3 class="hidden-xs-only">
      <h1 class="subheading font-weight-bold text-xs-right"> PAGO INICIAL {{ service ? '(' + service.percentage + '%)' : '' }} </h1>
    </v-flex>
    <v-flex xs12 md12 class="my-2 hidden-xs-only">
      <div style="height: 2px; background: #004b7b"></div>
    </v-flex>
    <v-flex xs12 md12 v-if="service">
      <v-card class="pa-3 elevation-1">
        <v-layout row wrap>
          <v-flex xs2 md1>
            <img :src="service.dataService.icon" width="100%">
          </v-flex>
          <v-flex xs10 md6>
            <h1 class="headline font-weight-bold mb-1" style="color: #666666"> {{ service.dataService.title }} </h1>
            <p class="caption" style="text-align: justify; color: #666666;" v-if="!subServices.length">
              {{ service.dataService.description }}
            </p>
            <v-layout row wrap v-if="subServices">
              <v-flex md11>
                <v-layout row wrap v-for="sub in subServices" :key="sub.id">
                  <v-flex md12>
                    - {{ sub.name }}
                  </v-flex>
                </v-layout>
              </v-flex>
            </v-layout>
            <v-layout row wrap v-if="stationery">
              <v-flex md11>
                <v-layout row wrap v-for="sub in stationery" :key="sub.id">
                  <v-flex md12>
                    - {{ sub.name }} ({{ sub.quantity }})
                  </v-flex>
                </v-layout>
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex xs8 class="hidden-sm-and-up">
            <h1 class="subheading font-weight-bold text-xs-right"> PRECIO </h1>
          </v-flex>
          <v-flex xs4 class="hidden-sm-and-up">
            <h1 class="subheading font-weight-bold text-xs-right"> PAGO INICIAL {{ service ? '(' + service.percentage + '%)' : '' }} </h1>
          </v-flex>
          <v-flex xs8 md2>
            <h1 class="title font-weight-bold text-xs-right"> 
              <!-- {{ service.price.currency.symbol }} {{ formatNumber(total) }}  -->
              <span v-if="$store.state.services.RightSymbol.indexOf(service.price.currency.iso) === -1">
                {{service.price.currency.symbol}}
                {{formatNumber(total)}}
              </span>
              <span v-if="$store.state.services.RightSymbol.indexOf(service.price.currency.iso) !== -1">
                {{formatNumber(total)}}
                {{service.price.currency.symbol}}
              </span>
            </h1>
          </v-flex>
          <v-flex xs4 md3>
            <h1 class="title font-weight-bold text-xs-right"> 
              <span v-if="$store.state.services.RightSymbol.indexOf(service.price.currency.iso) === -1">
                {{service.price.currency.symbol}}
                {{formatNumber(initial)}}
              </span>
              <span v-if="$store.state.services.RightSymbol.indexOf(service.price.currency.iso) !== -1">
                {{formatNumber(initial)}}
                {{service.price.currency.symbol}}
              </span>
              <!-- {{ service.price.currency.symbol }} {{ formatNumber(initial) }}  -->
            </h1>
          </v-flex>
        </v-layout>
      </v-card>
    </v-flex>
    <v-flex md12 xs12 class="my-2">
      <div style="height: 2px; background: #004b7b"></div>
    </v-flex>
    <!--SUBTOTAL-->
    <v-flex xs12 md12 class="px-3" v-if="service">
      <!--<v-card class="pa-3">-->
        <v-layout row wrap>
          <v-flex xs4 md6>
            <h1 class="title font-weight-medium"> Subtotal </h1>
          </v-flex>
          <v-flex xs4 md3>
            <h1 class="title font-weight-medium text-xs-right"> 
              <!-- {{ service.price.currency.symbol }} {{ formatNumber(total) }}  -->
              <span v-if="$store.state.services.RightSymbol.indexOf(service.price.currency.iso) === -1">
                {{service.price.currency.symbol}}
                {{formatNumber(total)}}
              </span>
              <span v-if="$store.state.services.RightSymbol.indexOf(service.price.currency.iso) !== -1">
                {{formatNumber(total)}}
                {{service.price.currency.symbol}}
              </span>
            </h1>
          </v-flex>
          <v-flex xs4 md3>
            <h1 class="title font-weight-medium t text-xs-right"> 
              <!-- {{ service.price.currency.symbol }} {{ formatNumber(initial) }}  -->
              <span v-if="$store.state.services.RightSymbol.indexOf(service.price.currency.iso) === -1">
                {{service.price.currency.symbol}}
                {{formatNumber(initial)}}
              </span>
              <span v-if="$store.state.services.RightSymbol.indexOf(service.price.currency.iso) !== -1">
                {{formatNumber(initial)}}
                {{service.price.currency.symbol}}
              </span>
            </h1>
          </v-flex>
        </v-layout>
      <!--</v-card>-->
    </v-flex>
    <!--SUBTOTAL-->
    <!--DESCUENTO-->
    <v-flex xs12 md12 class="px-3" v-if="coupon && service">
      <!--<v-card class="pa-3">-->
        <v-layout row wrap>
          <v-flex xs4 md6>
            <h1 class="title font-weight-medium hidden-xs-only"> Descuento ({{ coupon.percentage }}%) </h1>
            <h1 class="title font-weight-medium hidden-sm-and-up"> De..({{ coupon.percentage }}%) </h1>
          </v-flex>
          <v-flex xs4 md3 v-if="coupon">
            <h1 class="title font-weight-medium text-xs-right"> 
              <!-- - {{ service.price.currency.symbol }} 
              {{ formatNumber(discount) }}  -->
              <span v-if="$store.state.services.RightSymbol.indexOf(service.price.currency.iso) === -1">
                - {{service.price.currency.symbol}}
                {{formatNumber(discount)}}
              </span>
              <span v-if="$store.state.services.RightSymbol.indexOf(service.price.currency.iso) !== -1">
                - {{formatNumber(discount)}}
                {{service.price.currency.symbol}}
              </span>
            </h1>
          </v-flex>
          <v-flex xs4 md3 v-if="coupon">
            <h1 class="title font-weight-medium t text-xs-right"> 
              <!-- - {{ service.price.currency.symbol }} 
              {{ formatNumber(initialDiscount) }}  -->
              <span v-if="$store.state.services.RightSymbol.indexOf(service.price.currency.iso) === -1">
                - {{service.price.currency.symbol}}
                {{formatNumber(initialDiscount)}}
              </span>
              <span v-if="$store.state.services.RightSymbol.indexOf(service.price.currency.iso) !== -1">
                - {{formatNumber(initialDiscount)}}
                {{service.price.currency.symbol}}
              </span>
            </h1>
          </v-flex>
        </v-layout>
      <!--</v-card>-->
    </v-flex>
    <!--DESCUENTO-->
    <!--IVA-->
    <v-flex xs12 md12 class="px-3" v-if="service">
      <!--<v-card class="pa-3">-->
        <v-layout row wrap>
          <v-flex xs4 md6>
            <h1 class="title font-weight-medium"> I.V.A ({{ $store.state.countries.data.tax }}%) </h1>
          </v-flex>
          <v-flex xs4 md3>
            <h1 class="title font-weight-medium text-xs-right"> 
              <!-- {{ service.price.currency.symbol }} {{ formatNumber(iva) }} -->
              <span v-if="$store.state.services.RightSymbol.indexOf(service.price.currency.iso) === -1">
                {{service.price.currency.symbol}}
                {{formatNumber(iva)}}
              </span>
              <span v-if="$store.state.services.RightSymbol.indexOf(service.price.currency.iso) !== -1">
                {{formatNumber(iva)}}
                {{service.price.currency.symbol}}
              </span>
             </h1>
          </v-flex>
          <v-flex xs4 md3>
            <h1 class="title font-weight-medium t text-xs-right"> 
              <!-- {{ service.price.currency.symbol }} {{ formatNumber(initialIva) }}  -->
              <span v-if="$store.state.services.RightSymbol.indexOf(service.price.currency.iso) === -1">
                {{service.price.currency.symbol}}
                {{formatNumber(initialIva)}}
              </span>
              <span v-if="$store.state.services.RightSymbol.indexOf(service.price.currency.iso) !== -1">
                {{formatNumber(initialIva)}}
                {{service.price.currency.symbol}}
              </span>
            </h1>
          </v-flex>
        </v-layout>
      <!--</v-card>-->
    </v-flex>
    <!--IVA-->
    <!--TOTAL + IVA-->
    <!--<v-flex md12 class="my-2">
      <div style="height: 2px; background: #004b7b"></div>
    </v-flex>-->
    <v-flex xs12 md12 class="px-3 mt-2" v-if="service">
      <!--<v-card class="pa-3">-->
        <v-layout row wrap>
          <v-flex xs4 md6>
            <h1 class="headline font-weight-bold"> TOTAL </h1>
          </v-flex>
          <v-flex xs4 md3>
            <h1 class="headline font-weight-mediums text-xs-right" v-if="service"> 
              <!-- {{ service.price.currency.symbol }} {{ formatNumber(totalWithTaxs) }}  -->
              <span v-if="$store.state.services.RightSymbol.indexOf(service.price.currency.iso) === -1">
                {{service.price.currency.symbol}}
                {{formatNumber(totalWithTaxs)}}
              </span>
              <span v-if="$store.state.services.RightSymbol.indexOf(service.price.currency.iso) !== -1">
                {{formatNumber(totalWithTaxs)}}
                {{service.price.currency.symbol}}
              </span>
            </h1>
          </v-flex>
          <v-flex xs4 md3>
            <h1 class="headline font-weight-bold t text-xs-right" v-if="service"> 
              <!-- {{ service.price.currency.symbol }} {{ formatNumber(initialWithTaxs) }}  -->
              <span v-if="$store.state.services.RightSymbol.indexOf(service.price.currency.iso) === -1">
                {{service.price.currency.symbol}}
                {{formatNumber(initialWithTaxs)}}
              </span>
              <span v-if="$store.state.services.RightSymbol.indexOf(service.price.currency.iso) !== -1">
                {{formatNumber(initialWithTaxs)}}
                {{service.price.currency.symbol}}
              </span> 
            </h1>
          </v-flex>
        </v-layout>
      <!--</v-card>-->
    </v-flex>
    <!--TOTAL + IVA-->
    <v-flex md12 xs12 class="my-3">
      <div style="height: 1px;"></div>
    </v-flex>
    <v-flex md7 offset-md5>
      <v-layout row wrap>
        <v-flex md5 xs12>
          <v-subheader class="subheading font-weight-bold">Cupón de descuento:</v-subheader>
        </v-flex>
        <v-flex md4 xs7>
          <v-text-field v-model="couponCode" placeholder="Cupón" solo></v-text-field>
        </v-flex>
        <v-flex md3 xs5>
          <v-btn @click="validateCoupon" color="ma-0" :class="{ 'primary': coupon === null, 'success': coupon, 'warning': coupon === false }"  large style="margin-top: 3px !important">Validar</v-btn>
        </v-flex>
      </v-layout>
    </v-flex>
    <v-dialog v-if="service" v-model="pay" persistent :max-width="(gateways.length * 200) + 'px'" :width="(gateways.length * 200) + 'px'">
      <v-card @mouseleave="setGatewayInHover(null)">
        <v-card-title class="title font-weight-bold text-xs-center pb-0">
          <p style="width: 100%;">PAGA CON</p>
        </v-card-title>
        <v-layout row wrap>
          <v-flex v-for="gateway in gateways" :key="gateway.id" @mouseover.enter="setGatewayInHover(gateway)"
          class="text-xs-center">
            <no-ssr v-if="gateway.code ==='01'">
              <AppPaypal :gateway-id="gateway.id" :currency="{ iso: $store.state.countries.data.currency.iso, id: $store.state.countries.data.currency.id }" :amount="initialWithTaxs" :cart="cartObject" :coupon="coupon" />
            </no-ssr>
            <no-ssr v-else-if="gateway.code ==='02'">
              <AppStripe :gateway-id="gateway.id" :currency="{ iso: $store.state.countries.data.currency.iso, id: $store.state.countries.data.currency.id }" :amount="initialWithTaxs" :cart="cartObject" :coupon="coupon" />
            </no-ssr>
            <AppBankTransfer v-else-if="gateway.code ==='03'" label="Banco Santander" :gateway-id="gateway.id" :currency="{ iso: $store.state.countries.data.currency.iso, id: $store.state.countries.data.currency.id }" :amount="initialWithTaxs" :cart="cartObject" :coupon="coupon" />

            <AppBankTransfer v-else-if="gateway.code ==='04'" label="Transferencia Bancaria" :gateway-id="gateway.id" :currency="{ iso: $store.state.countries.data.currency.iso, id: $store.state.countries.data.currency.id }" :amount="initialWithTaxs" :cart="cartObject" :coupon="coupon" />
            
          </v-flex>
        </v-layout>
        <v-layout>
          <v-flex v-if="gateway">
            <div class="font-weight-medium pa-4">
              <p class="mb-0 font-weight-bold">Descripción:</p>
              <p v-html="gateway.description"></p>
              <p class="mb-0 font-weight-bold">Instrucciones:</p>
              <p v-html="gateway.instructions"></p>
            </div>
          </v-flex>
          <v-flex v-if="!gateway">
            <div class="font-weight-medium pa-4">
              <p class="text-xs-center font-weight-bold">Seleccione un metodo de pago</p>
            </div>
          </v-flex>
        </v-layout>
      </v-card>    
    </v-dialog>
    <!--<v-dialog v-model="chargePayMethods" persistent width="210">
      <v-card>
        <v-card-text>
          <div style="width: 100%; height: 186px; display: flex; align-items: center; justify-content: center">
            <v-progress-circular :size="50" color="primary" indeterminate ></v-progress-circular>
          </div>
        </v-card-text>
      </v-card>
    </v-dialog>-->
  </v-layout>
</template>

<script>
  export default {
    props: ['slug'],
    data () {
      return {
        couponCode: '',
        validCoupon: null,
        coupon: null,
        gateway: null
      }
    },
    watch: {
      chargePayMethods (val) {
        if (!val) return
        setTimeout(() => (this.$store.commit('cart/OVER_LOADING')), 2000)
      }
    },
    computed: {
      brief () { return this.$store.state.brief.data },
      pay () { return this.$store.state.cart.pay },
      chargePayMethods () { return this.$store.state.cart.chargePayMethods },
      gateways () {
        let gateways = []
        let ga = this.$store.state.gateways.list

        for (let g of ga) {
          if (this.checkCurrencies(g.currencies)) {
            gateways.push(g)
          }
        }
        return gateways
      },
      service () { return this.$store.getters['services/getBySlug'](this.brief.service.slug) },
      subServices () {
        const services = []

        if (!this.brief.subServices) return services

        for (let subService of this.brief.subServices) {
          let subServices = this.$store.getters['services/addons']
          for (let sub of subServices) {
            if (subService.slug === sub.slug) {
              services.push(sub)
            }
          }
        }

        return services
      },
      stationery () {
        const services = []

        if (!this.brief.subServices) return services

        for (let subService of this.brief.subServices) {
          let subServices = this.$store.state.services.list
          for (let sub of subServices) {
            if (subService.slug === sub.slug) {
              sub.quantity = subService.quantity
              services.push(sub)
            }
          }
        }

        return services
      },
      total () {
        let total = 0

        if (this.subServices.length) {
          for (let subService of this.subServices) {
            if (subService) {
              if (subService.slug === 'diseno-y-desarrollo-de-seccion-web') {
                for (let ss of this.brief.subServices) {
                  if (ss.sections) total += subService.price.value * ss.sections
                }
              } else {
                total += subService.price.value
              }
            }
          }
        } else {
          total += this.service.price.value

          if (this.stationery) {
            for (let sta of this.stationery) {
              total += sta.price.value * sta.quantity
            }
          }
        }

        return total
      },
      initial () { return this.total * (this.service.percentage / 100) },
      discount () {
        let discount = 0

        if (this.coupon) {
          discount = this.total * (this.coupon.percentage / 100)
        }

        return discount
      },
      initialDiscount () {
        let initialDiscount = 0

        if (this.coupon) {
          initialDiscount = this.initial * (this.coupon.percentage / 100)
        }

        return initialDiscount
      },
      iva () { return (this.total - this.discount) * this.tax },
      initialIva () { return (this.initial - this.discount) * this.tax },
      totalWithTaxs () { return (this.total - this.discount) * (this.tax + 1) },
      initialWithTaxs () { return (this.initial - this.initialDiscount) * (this.tax + 1) },
      tax () { return this.$store.state.countries.data.tax / 100 },
      cartObject () {
        let cartObject = { services: [] }

        if (this.brief.subServices) {
          for (let subService of this.brief.subServices) {
            cartObject.services.push({ id: subService.id, quantity: subService.quantity || 1 })
          }
        } else {
          cartObject.services.push({ id: this.service.id, quantity: this.service.quantity || 1 })
        }

        return cartObject
      }
    },
    methods: {
      validateCoupon: async function () {
        let coupon

        console.log(this.couponCode.length)
        if (!this.couponCode.length) return

        try {
          coupon = await this.$axios.$get('/coupons/value/' + this.couponCode)
        } catch (error) {
          console.log(error)
        }

        if (coupon && coupon.status) {
          this.coupon = coupon
        } else {
          this.coupon = false
        }
      },
      formatNumber (number) {
        let format = parseFloat(number).toFixed(2).replace('.', ',')
        let formatSplited = format.split(',')

        if (formatSplited[1] === '00') return formatSplited[0]

        return format
      },
      checkCurrencies (currencies) {
        if (!currencies) return true
        let iso = this.$store.state.countries.data.currency.iso
        let currenciesArray = []

        for (let currency of currencies) {
          currenciesArray.push(currency.iso)
        }

        return currenciesArray.includes(iso)
      },
      setPay () {
        this.$store.dispatch('cart/setPay')
      },
      setGatewayInHover (gateway) {
        this.gateway = gateway
      }
    },
    beforeDestroy () {
      if (this.pay) this.setPay()
    }
  }
</script>

<style>
  .v-dialog.hidden {
    visibility: hidden;
  }
</style>