<template>
  <section>
    <v-container class="py-5 mt-5">
      <v-layout row class="py-5">
        <v-flex xs12 md4 offset-md1>
          <v-img src="images/mujer-liderlogo.png"></v-img>
        </v-flex>
        <v-flex xs12 md7>
          <v-layout>
            <v-flex md12 class="pt-5 px-3">
              <h2 class="display-1 font-weight-bold mb-4 mt-2">¡GRACIAS POR {{ message }}!</h2>
              <h2 class="title mb-4" v-if="this.por !== 'suscripcion'">PRONTO SE CONTACTARA <br> UN ASESOR DE DISEÑO CON USTED</h2>
              <v-btn class="primary ml-0" nuxt to="/nuestros-servicios">SEGUIR COMPRANDO</v-btn>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
  </section>
</template>

<script>

export default {
  created () {
    this.por = this.$router.currentRoute.query.por

    if (this.por === 'contacto') this.message = 'CONTACTARNOS'
    else if (this.por === 'compra') this.message = 'SU PEDIDO'
    else if (this.por === 'suscripcion') this.message = 'SUSCRIBIRTE'
  },
  data: () => ({
    por: null,
    message: ''
  })
}
</script>
