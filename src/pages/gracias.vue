<template>
  <section>
    <v-container class="py-5 my-5">
      <v-layout class="py-5">
        <v-flex md6 offset-md3>
          <v-layout>
            <v-flex md12 class="text-xs-center">
              <h2 class="text-xs-center">GRACIAS POR COMPRAR CON NOSOTROS</h2>
              <h2 class="text-xs-center">PRONTO SE CONTACTARA UN ASESOR CON USTED</h2>
              <v-btn class="primary">SEGUIR COMPRANDO</v-btn>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
  </section>
</template>

<script>

export default {
  asyncData (context) {
    // called every time before loading the component
    return { pais: context.res }
  }
  // and more functionality to discover
}
</script>
