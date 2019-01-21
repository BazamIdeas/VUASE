<template>
  <button id="stripe-button" @click="checkout"></button>
</template>

<script>
  export default {
    props: ['gatewayId', 'currency', 'amount', 'cart', 'coupon'],
    methods: {
      checkout () {
        const vueInstance = this
        console.log(this.amount * 100)
        this.$checkout.open({
          name: 'LIDERLOGO',
          currency: this.currency.iso,
          amount: this.amount * 100,
          token: (token) => {
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
          }
        })
      }
    }
  }
</script>

<style>
  #stripe-button {
    background-image: url(/images/stripe-logo.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: 150px;
    height: 25px;
    border-radius: 20px;
    margin-bottom: 13px;
  }
</style>