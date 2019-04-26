<template>
  <div id="safetypay-button" @click="checkout"> {{ label }} </div>
</template>

<script>
  export default {
    props: ['gatewayId', 'currency', 'amount', 'filter', 'cart', 'coupon', 'label'],
    data: () => ({
      makingRequest: false
    }),
    methods: {
      checkout () {
        if (this.makingRequest) { return }

        this.makingRequest = true

        var vueInstance = this
  
        vueInstance.cart.currency = { id: vueInstance.currency.id }
        vueInstance.$axios.$post('carts', vueInstance.cart).then(function (cart) {
          vueInstance.$storage.set('cart', cart)
          vueInstance.$storage.set('cart_key', cart.cookie)

          let orderObject = {}
          orderObject.payment = { filter: vueInstance.filter }
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
            location.replace(data.redirect)
          }).catch(function (error) {
            vueInstance.makingRequest = false
            if (error) {
              return vueInstance.$toast.error('Ha ocurrido un error, intente de nuevo!')
            }
          })
        }).catch(function (error) {
          if (error) {
            return vueInstance.$toast.error('Ha ocurrido un error, intente de nuevo!')
          }
        })
      }
    }
  }
</script>

<style>
  #safetypay-button {
    background-image: url(/images/bank.jpeg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: 200px;
    height: 25px;
    border-radius: 20px;
    color: white;
    font-size: 8px;
    line-height: 26px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.6px;
    margin: 0px auto 10px;
    cursor: pointer;
  }
</style>
