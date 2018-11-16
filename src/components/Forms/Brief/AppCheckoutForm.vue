<template>
  <v-layout row wrap class="px-2 mt-4 mb-5">
    <v-flex md2 offset-md7>
      <h1 class="subheading font-weight-bold text-xs-right"> PRECIO </h1>
    </v-flex>
    <v-flex md3>
      <h1 class="subheading font-weight-bold text-xs-right"> PAGO INICIAL {{ service ? '(' + service.percentage + '%)' : '' }} </h1>
    </v-flex>
    <v-flex md12 class="my-2">
      <div style="height: 2px; background: #004b7b"></div>
    </v-flex>
    <v-flex md12 v-if="service">
      <v-card class="pa-3 elevation-1">
        <v-layout row wrap>
          <v-flex md1>
            <img :src="service.icon" width="100%">
          </v-flex>
          <v-flex xs6>
            <h1 class="headline font-weight-bold mb-1" style="color: #666666"> {{ service.dataService.title }} </h1>
            <p class="caption" style="text-align: justify; color: #666666;" v-if="!brief.subServices">
              {{ service.dataService.description }}
            </p>
          </v-flex>
          <v-flex md2>
            <h1 class="title font-weight-bold text-xs-right"> {{ service.price.currency.symbol }} {{ formatNumber(total) }} </h1>
          </v-flex>
          <v-flex md3>
            <h1 class="title font-weight-bold text-xs-right"> {{ service.price.currency.symbol }} {{ formatNumber(initial) }} </h1>
          </v-flex>
        </v-layout>
      </v-card>
    </v-flex>
    <v-flex md12 class="my-2">
      <div style="height: 2px; background: #004b7b"></div>
    </v-flex>
    <!--SUBTOTAL-->
    <v-flex md12 class="px-3" v-if="service">
      <!--<v-card class="pa-3">-->
        <v-layout row wrap>
          <v-flex md6>
            <h1 class="title font-weight-medium"> Subtotal </h1>
          </v-flex>
          <v-flex md3>
            <h1 class="title font-weight-medium text-xs-right"> {{ service.price.currency.symbol }} {{ formatNumber(total) }} </h1>
          </v-flex>
          <v-flex md3>
            <h1 class="title font-weight-medium t text-xs-right"> {{ service.price.currency.symbol }} {{ formatNumber(initial) }} </h1>
          </v-flex>
        </v-layout>
      <!--</v-card>-->
    </v-flex>
    <!--SUBTOTAL-->
    <!--DESCUENTO-->
    <v-flex md12 class="px-3" v-if="coupon && service">
      <!--<v-card class="pa-3">-->
        <v-layout row wrap>
          <v-flex md6>
            <h1 class="title font-weight-medium"> Descuento ({{ coupon.percentage }}%) </h1>
          </v-flex>
          <v-flex md3 v-if="coupon">
            <h1 class="title font-weight-medium text-xs-right"> - {{ service.price.currency.symbol }} {{ formatNumber(discount) }} </h1>
          </v-flex>
          <v-flex md3 v-if="coupon">
            <h1 class="title font-weight-medium t text-xs-right"> - {{ service.price.currency.symbol }} {{ formatNumber(initialDiscount) }} </h1>
          </v-flex>
        </v-layout>
      <!--</v-card>-->
    </v-flex>
    <!--DESCUENTO-->
    <!--IVA-->
    <v-flex md12 class="px-3" v-if="service">
      <!--<v-card class="pa-3">-->
        <v-layout row wrap>
          <v-flex md6>
            <h1 class="title font-weight-medium"> I.V.A ({{ $store.state.countries.data.tax }}%) </h1>
          </v-flex>
          <v-flex md3>
            <h1 class="title font-weight-medium text-xs-right"> {{ service.price.currency.symbol }} {{ formatNumber(iva) }} </h1>
          </v-flex>
          <v-flex md3>
            <h1 class="title font-weight-medium t text-xs-right"> {{ service.price.currency.symbol }} {{ formatNumber(initialIva) }} </h1>
          </v-flex>
        </v-layout>
      <!--</v-card>-->
    </v-flex>
    <!--IVA-->
    <!--TOTAL + IVA-->
    <!--<v-flex md12 class="my-2">
      <div style="height: 2px; background: #004b7b"></div>
    </v-flex>-->
    <v-flex md12 class="px-3 mt-2" v-if="service">
      <!--<v-card class="pa-3">-->
        <v-layout row wrap>
          <v-flex md6>
            <h1 class="headline font-weight-bold"> TOTAL </h1>
          </v-flex>
          <v-flex md3>
            <h1 class="headline font-weight-mediums text-xs-right" v-if="service"> {{ service.price.currency.symbol }} {{ formatNumber(totalWithTaxs) }} </h1>
          </v-flex>
          <v-flex md3>
            <h1 class="headline font-weight-bold t text-xs-right" v-if="service"> {{ service.price.currency.symbol }} {{ formatNumber(initialWithTaxs) }}  </h1>
          </v-flex>
        </v-layout>
      <!--</v-card>-->
    </v-flex>
    <!--TOTAL + IVA-->
    <v-flex md12 class="my-3">
      <div style="height: 1px;"></div>
    </v-flex>
    <v-flex md7 offset-md5>
      <v-layout row>
        <v-flex xs5>
          <v-subheader class="subheading font-weight-bold">Cupón de descuento:</v-subheader>
        </v-flex>
        <v-flex xs4>
          <v-text-field v-model="couponCode" placeholder="Cupón" solo></v-text-field>
        </v-flex>
        <v-flex xs3>
          <v-btn @click="validateCoupon" color="ma-0" :class="{ 'primary': coupon === null, 'success': coupon, 'warning': coupon === false }"  large style="margin-top: 3px !important">Validar</v-btn>
        </v-flex>
      </v-layout>
    </v-flex>
    <v-dialog v-if="service" v-model="pay" :class="{ 'hidden': chargePayMethods }" persistent max-width="200px">
      <v-card>
        <v-card-title class="title font-weight-bold text-xs-center pb-0">
          <p style="width: 100%;">PAGA CON</p>
        </v-card-title>
        <v-layout column wrap>
          <v-flex v-for="gateway in gateways" :key="gateway.id" v-if="checkCurrencies(gateway.currencies)" class="text-xs-center">
            <no-ssr v-if="gateway.name ==='Paypal'">
              <AppPaypal :gateway-id="gateway.id" :currency="{ iso: $store.state.countries.data.currency.iso, id: $store.state.countries.data.currency.id }" :amount="initialWithTaxs" :cart="cartObject" :coupon="coupon" />
            </no-ssr>
            <no-ssr v-if="gateway.name ==='Stripe'">
              <AppStripe :gateway-id="gateway.id" :currency="{ iso: $store.state.countries.data.currency.iso, id: $store.state.countries.data.currency.id }" :amount="initialWithTaxs" :cart="cartObject" :coupon="coupon" />
            </no-ssr>
            <AppBankTransfer v-if="gateway.name ==='Transferencia Bancaria'" :gateway-id="gateway.id" :currency="{ iso: $store.state.countries.data.currency.iso, id: $store.state.countries.data.currency.id }" :amount="initialWithTaxs" :cart="cartObject" :coupon="coupon" />
          </v-flex>
        </v-layout>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red darken-1" small flat @click.native="setPay">Cancelar</v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>    
    </v-dialog>
    <v-dialog v-model="chargePayMethods" persistent width="210">
      <v-card>
        <v-card-text>
          <div style="width: 100%; height: 186px; display: flex; align-items: center; justify-content: center">
            <v-progress-circular :size="50" color="primary" indeterminate ></v-progress-circular>
          </div>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
  export default {
    props: ['slug'],
    data () {
      return {
        couponCode: '',
        validCoupon: null,
        coupon: null
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
        let gateways = this.$store.state.gateways.list.concat([{ id: 3, name: 'Transferencia Bancaria' }])
        return gateways
      },
      service () { return this.$store.getters['services/getBySlug'](this.brief.service.slug) },
      subServices () {
        const services = []

        if (this.brief.subServices) return services

        for (let subService in this.brief.subServices) {
          let service = this.$store.getters['services/getBySlug'](subService.slug)
          if (service) services.push(service)
        }

        return services
      },
      total () {
        let total = 0

        if (this.brief.subServices) {
          for (let subService in this.brief.subServices) {
            let service = this.$store.getters['services/getBySlug'](subService.slug)
            if (service) total += service.price.value
          }
        } else {
          total += this.service.price.value
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
          for (let subService in this.brief.subServices) {
            let service = this.$store.getters['services/getBySlug'](subService.slug)
            if (service) cartObject.services.push({ id: service.id, quantity: 1 })
          }
        } else {
          cartObject.services.push({ id: this.service.id, quantity: 1 })
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