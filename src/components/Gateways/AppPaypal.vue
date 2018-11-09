<template>
  <div id="paypal-button"></div>
</template>

<script>
  if (process.browser) {
    var paypal = require('paypal-checkout')
  }

  export default {
    props: ['gatewayId', 'currency', 'amount', 'cart', 'order'],
    mounted () {
      console.log(this.cart)
      console.log(this.order)

      var vue = this
      paypal.Button.render({
        // Configure environment
        env: 'sandbox',
        client: {
          sandbox: 'AVpLm3Mj781_AAa4M5gArCwllQ2LIv5WT6qccHJOjdbOMFOz_6fQmItQQbCWvXeeG3TS1qBA6a8_8NoV'
        },
        // Customize button (optional)
        locale: 'es_ES',
        style: {
          size: 'small',
          color: 'gold',
          shape: 'pill'
        },
        // Set up a payment
        payment: function (data, actions) {
          return actions.payment.create({
            transactions: [{
              amount: {
                total: vue.amount,
                currency: vue.currency
              }
            }]
          })
        },
        // Execute the payment
        onAuthorize: function (data, actions) {
          return actions.payment.get().then(function (paymentDetails) {
            vue.$axios.$post('cart', {}).then(function (data) {

            }).catch(function (error) {
              if (error) { alert('error') }
              alert(paymentDetails.id)
              // guardar cart y order
              vue.$router.push('/gracias')
            })
          })
        }
      }, '#paypal-button')
    }
  }
</script>