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
              <h2 class="title mb-4" v-if="this.por !== 'suscripcion'">En breve uno de nuestros Asesores <br> en Diseño se pondrá en contacto contigo</h2>
              <h3 class="subheading mb-4" v-if="this.por === 'compra'">Recibiras los detalles del pedido en tu correo electronico</h3>
              <v-btn class="primary ml-0" nuxt to="/nuestros-servicios">NUESTROS SERVICIOS</v-btn>
              <v-btn class="primary ml-0"  v-if="this.por === 'compra'" nuxt to="/area-de-cliente">ACCEDER AL ÁREA DE CLIENTE</v-btn>
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

    if (this.por === 'contacto') this.message = 'CONTACTARTE'
    else if (this.por === 'compra') this.message = 'SU PEDIDO'
    else if (this.por === 'suscripcion') this.message = 'SUSCRIBIRTE'
  },
  data: () => ({
    por: null,
    message: ''
  })
}
</script>
