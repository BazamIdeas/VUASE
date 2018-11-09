<template>
  <v-layout row wrap class="px-2 mt-4 mb-5">
    <v-flex md3 offset-md6>
      <h1 class="heading text-xs-center"> Precio </h1>
    </v-flex>
    <v-flex md3>
      <h1 class="heading text-xs-center"> A pagar para iniciar (50%) </h1>
    </v-flex>
    <v-flex md12 class="my-3">
      <div style="height: 1px; background: grey"></div>
    </v-flex>
    <v-flex md5>
      <v-layout row>
        <v-flex md3>
          <v-img :src="service.icon"></v-img>
        </v-flex>
        <v-flex xs9 v-if="service">
          <h1 class="headline font-weight-medium mb-1"> {{ service.name }} </h1>
          <p class="caption" style="text-align: justify" v-if="!brief.subServices">
            {{ service.description }}
          </p>
        </v-flex>
      </v-layout>
    </v-flex>
    <v-flex md3 offset-md1>
      <h1 class="headline font-weight-medium text-xs-center"> {{ service.price.currency.symbol }} {{ total }} </h1>
    </v-flex>
    <v-flex md3>
      <h1 class="headline font-weight-medium text-xs-center"> {{ service.price.currency.symbol }} {{ total / 2 }} </h1>
    </v-flex>
    <v-flex md12 class="my-3">
      <div style="height: 1px; background: grey"></div>
    </v-flex>
    <v-flex md6>
      <h1 class="headline font-weight-medium"> TOTAL + IVA </h1>
    </v-flex>
    <v-flex md3>
      <h1 class="headline font-weight-medium text-xs-center"> {{ service.price.currency.symbol }} {{ total }} </h1>
    </v-flex>
    <v-flex md3>
      <h1 class="headline font-weight-medium text-xs-center"> 132.5 $ </h1>
    </v-flex>
    <v-flex md12 class="my-3">
      <div style="height: 1px;"></div>
    </v-flex>
    <v-flex md7 offset-md5>
      <v-layout row>
        <v-flex xs5>
          <v-subheader class="subheading font-weight-medium">Cupón de descuento:</v-subheader>
        </v-flex>
        <v-flex xs4>
          <v-text-field value="ASF436F2F" placeholder="Cupón" solo></v-text-field>
        </v-flex>
        <v-flex xs3>
          <v-btn color="primary ma-0" large style="margin-top: 3px !important">Validar</v-btn>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    props: ['slug'],
    computed: {
      brief () { return this.$store.state.brief.data },
      service () { return this.$store.getters['services/getBySlug'](this.brief.service.slug) },
      subServices () {
        const services = []

        if (this.brief.subServices) return services

        for (let subService in this.brief.subServices) {
          let service = this.$store.getters['services/getBySlug'](subService.slug)
          if (service) services.push(service)
        }

        return services
      },
      total () {
        let total = 0

        if (this.brief.subServices) {
          for (let subService in this.brief.subServices) {
            let service = this.$store.getters['services/getBySlug'](subService.slug)
            if (service) total += service.price.value
          }
        } else {
          total += this.service.price.value
        }

        return total
      }
    }
  }
</script>

<style>

</style>