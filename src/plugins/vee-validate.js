import Vue from 'vue'
import VeeValidate from 'vee-validate'

const dictionary = {
  es: {
    messages: {
      required: () => 'Este campo es obligatorio',
      email: () => 'El valor del campo es invalido'
    }
  }
}

Vue.use(VeeValidate, {
  locale: 'es',
  dictionary: dictionary
})
