<template>
  <div style="margin: 10px 0">
    <div id="paypal-button"></div>
  </div>
</template>

<script>
  if (process.browser) {
    var paypal = require('paypal-checkout')
  }

  export default {
    props: ['gatewayId', 'currency', 'amount', 'cart', 'coupon'],
    mounted () {
      var vueInstance = this
      paypal.Button.render({
        // Configure environment
        env: 'production',
        client: {
          sandbox: 'AVpLm3Mj781_AAa4M5gArCwllQ2LIv5WT6qccHJOjdbOMFOz_6fQmItQQbCWvXeeG3TS1qBA6a8_8NoV',
          production: 'AdgoodBb2HMzSaotggLuqwFKaPvto7pc3_WwtMuKBsOeWJW4rr5FupoyR2SOl_k5dgVFccmJHFeo-NGV'
        },
        // Customize button (optional)
        locale: 'es_ES',
        style: {
          size: 'medium',
          color: 'gold',
          shape: 'rect',
          tagline: false,
          label: 'paypal'
        },
        // Set up a payment
        payment: function (data, actions) {
          return actions.payment.create({
            transactions: [{
              amount: {
                total: vueInstance.amount.toFixed(2),
                currency: vueInstance.currency.iso
              }
            }]
          })
        },
        // Execute the payment
        onAuthorize: function (data, actions) {
          vueInstance.cart.currency = { id: vueInstance.currency.id }
          vueInstance.$axios.$post('carts', vueInstance.cart).then(function (cart) {
            vueInstance.$storage.set('cart', cart)
            vueInstance.$storage.set('cart_key', cart.cookie)

            let orderObject = {}
            orderObject.payment = { id: data.paymentID, payer_id: data.payerID }
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
      }, '#paypal-button')
    }
  }
</script>