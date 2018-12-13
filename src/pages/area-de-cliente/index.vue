<template>
  <section>
    <v-container fluid grid-list-md class="mt-5 pt-5 pb-0">
      <v-layout row wrap>
        <v-flex xs12 offset-md1 md10 class="mt-5 mb-5">
          <v-layout row wrap>
            <v-flex xs12>
              <h2>PEDIDOS</h2>
              <div style="height: 2px; width: 100%; background-color: rgba(0, 0, 0, .87);"></div>
              <v-container fluid class="pa-2">
                <v-data-table :headers="headers" :items="orders" item-key="id" class="elevation-1" files-per-page-text="Numero de filas" :pagination.sync="pagination">
                  <template slot="items" slot-scope="props">
                    <tr @click="props.expanded = !props.expanded">
                      <td>#{{ props.item.id }}</td>
                      <td class="text-xs-left">{{ props.item.price }}</td>
                      <td class="text-xs-left">{{ props.item.initialPrice }}</td>
                      <td class="text-xs-left">{{ props.item.status  }}</td>
                      <td class="text-xs-left">{{ props.item.gateway }}</td>
                    </tr>
                  </template>
                  <template slot="expand" slot-scope="props">
                    <v-card flat>
                      <v-card-text>
                        <div class="font-weight-medium pa-4">
                          <p class="title font-weight-bold">Pasarela seleccionada: {{ props.item.gateway }}</p>
                          <p class="mb-0 font-weight-bold">Descripción:</p>
                          <p v-html="props.item.gatewayDescription"></p>
                          <p class="mb-0 font-weight-bold">Instrucciones:</p>
                          <p v-html="props.item.gatewayInstructions"></p>
                        </div>
                      </v-card-text>
                    </v-card>
                  </template>
                </v-data-table>
              </v-container>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
  </section>
</template>

<script>
  export default {
    layout: 'account',
    async created () {
      if (!this.isLoggedIn) {
        return this.$router.push('/area-de-cliente/entrar')
      }
      this.$store.dispatch('user/getOrders')
    },
    data: () => ({
      headers: [
        {
          text: 'Referencia',
          align: 'left',
          sortable: false,
          value: 'id'
        },
        { text: 'Precio', value: 'price' },
        { text: 'Pago inicial', value: 'initialPrice' },
        { text: 'Estatus', value: 'status' },
        { text: 'Medio de Pago', value: 'gateway' }
      ],
      pagination: { sortBy: 'id', descending: true }
    }),
    computed: {
      isLoggedIn () { return this.$store.getters['isLoggedIn'] },
      authData () { return this.$store.state.app.authData },
      orders () {
        let orders = []

        for (let i = this.$store.state.user.orders.length - 1; i > 0; i--) {
          let order = this.$store.state.user.orders[i]
          let tax = order.countries.tax > 0 ? (order.country.tax / 100) + 1 : 0
          let discount = order.final_discount || 0
          let initialDiscount = order.initial_discount || 0

          let price = order.final_value - discount
          let initialPrice = order.initial_value - initialDiscount

          if (tax > 0) {
            price = price * tax
            price = price + ' incl IVA'
            initialPrice = initialPrice * tax
            initialPrice = initialPrice + ' incl IVA'
          }

          let status
          if (order.status === 'COMPLETED') status = 'Completado'
          if (order.status === 'PENDING') status = 'Pendiente'

          orders.push({
            id: order.id,
            price: price,
            initialPrice: initialPrice,
            status: status,
            gateway: order.gateways.name,
            gatewayDescription: order.gateways.description,
            gatewayInstructions: order.gateways.instructions
          })
        }

        return orders
      }
    },
    methods: {
      projects (closed) {
        let openProjects = []
        if (this.authData.projects) {
          openProjects = this.authData.projects.filter(val => val.closed === closed)
        }
        return openProjects
      }
    }
  }
</script>

<style>
</style>