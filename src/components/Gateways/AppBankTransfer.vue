<template>
  <div> 
    <img @click="checkout" :src="'/icons/bank.png'" width="200px" style="margin: 10px 0; cursor: pointer">
  </div>
</template>

<script>
  export default {
    props: ['gatewayId', 'currency', 'amount', 'cart', 'coupon', 'label'],
    methods: {
      checkout () {
        var vueInstance = this
  
        vueInstance.cart.currency = { id: vueInstance.currency.id }
        vueInstance.$axios.$post('carts', vueInstance.cart).then(function (cart) {
          vueInstance.$storage.set('cart', cart)
          vueInstance.$storage.set('cart_key', cart.cookie)

          let orderObject = {}
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
              return vueInstance.$toast.error('Ha ocurrido un error, intente de nuevo! 2')
            }
          })
        }).catch(function (error) {
          if (error) {
            return vueInstance.$toast.error('Ha ocurrido un error, intente de nuevo! 1')
          }
        })
      }
    }
  }
</script>

<style>
  #bank-button {
    color: #001e31;
    line-height: 26px;
    font-weight: 600 !important;
    text-transform: uppercase;
    letter-spacing: 0.6px;
    margin: 0px auto 10px;
    cursor: pointer;
  }
</style>
