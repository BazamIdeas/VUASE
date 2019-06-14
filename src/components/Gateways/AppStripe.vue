<template>
  <div>
    <vue-stripe-checkout
      ref="checkoutRef"
      :image="image"
      :name="name"
      :panelLabel="panelLabel"
      :currency="currency.iso"
      :amount="amount * 100"
      :allow-remember-me="false"
      @done="done"
      @opened="opened"
      @closed="closed"
      @canceled="canceled"
    ></vue-stripe-checkout>
    <v-btn id="stripe-button" @click="checkout" color="#ffc439" class="elevation-0"> 
      <span style="color: #001e31; font-weight: 600 !important;">Pagar Ahora</span>  
    </v-btn>
  </div>
</template>

<script>
  export default {
    props: ['gatewayId', 'currency', 'amount', 'cart', 'coupon'],
    data: () => ({
      name: 'LIDERLOGO',
      image: '/images/stripe.png',
      locale: 'auto',
      panelLabel: 'PAGAR {{amount}}'
    }),
    methods: {
      async checkout () {
        await this.$refs.checkoutRef.open()
      },
      done ({ token, args }) {
        const vueInstance = this
        vueInstance.cart.currency = { id: vueInstance.currency.id }
        vueInstance.$axios.$post('carts', vueInstance.cart).then(function (cart) {
          vueInstance.$storage.set('cart', cart)
          vueInstance.$storage.set('cart_key', cart.cookie)

          let orderObject = {}
          orderObject.payment = { token: token.id }
          orderObject.order = {
            brief_cookie: vueInstance.$storage.get('brief_key'),
            gateways: { id: vueInstance.gatewayId }
          }

          if (vueInstance.coupon) {
            orderObject.order.coupons = [{ id: vueInstance.coupon.id }]
          }

          vueInstance.$axios.$post('orders', orderObject, {
            headers: {
              'Cart-Id': cart.cookie,
              'Authorization': vueInstance.$cookies.get('token_session')
            }
          }).then(function (data) {
            vueInstance.$router.push('/gracias?por=compra')
          }).catch(function (error) {
            if (error) {
              vueInstance.$toast.error('Ha ocurrido un error, intente de nuevo! 2')
            }
          })
        }).catch(function (error) {
          if (error) {
            vueInstance.$toast.error('Ha ocurrido un error, intente de nuevo! 1')
          }
        })
      },
      opened () {
      },
      closed () {
      },
      canceled () {
      }
    }
  }
</script>

<style>
  #stripe-button {
    margin-bottom: 13px;
    color: #001e31;
  }
</style>