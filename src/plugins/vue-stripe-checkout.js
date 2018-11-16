import Vue from 'vue'
import VueStripeCheckout from 'vue-stripe-checkout'

const options = {
  key: 'pk_test_ODlU80cwnJ5Xr2an9L1XZByL',
  image: '/images/stripe.png',
  locale: 'auto',
  panelLabel: 'PAGAR {{amount}}'
}

Vue.use(VueStripeCheckout, options)
