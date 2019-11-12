<template>
  <v-layout row wrap class="custom--alignment">
    <!--  <v-select :items="services" item-text="text" item-value="field" :value="paramsData.servicio" label="Servicio" @change="redirect($event, 'sectors/getAll', 1)" solo></v-select>
    </v-flex>-->
        <v-flex sm6 md6>
      <!-- :disabled="!(paramsData && paramsData.servicio)" -->
      <div>
       <h3>
          Encuentra aquí los ejemplos de diseño de la actividad que buscas:
       </h3>

  </div>
<!--       <v-select :items="sectors" item-text="text" item-value="field" :value="paramsData.sector" label="Sector o Actividad"  @change="redirect($event, 'countries/getAll', 2)" solo></v-select>
 -->    </v-flex>
    <v-flex sm6 md4>
      <!-- :disabled="!(paramsData && paramsData.servicio)" -->
      <div>
        
    <v-autocomplete
      label="Todas las actividades"
      :items="sectors"
      item-text="text" solo=true item-value="field" :value="paramsData.sector" @change="redirect($event, 'countries/getAll', 2, paramsData)"
    ></v-autocomplete>
  </div>
<!--       <v-select :items="sectors" item-text="text" item-value="field" :value="paramsData.sector" label="Sector o Actividad"  @change="redirect($event, 'countries/getAll', 2)" solo></v-select>
 -->    </v-flex>
    <!--<v-flex md4>
      <v-select :items="activities" item-text="text" item-value="field" :value="paramsData.actividad" label="Actividad" :disabled="!(paramsData && paramsData.sector)" @change="redirect($event, 'countries/getAll', 3)" solo></v-select>
    </v-flex>-->
    <!-- <v-flex sm6 md4> -->
      <!-- :disabled="!(paramsData && paramsData.sector)" -->
     <!--  <v-select :items="countries" item-text="text" item-value="field" :value="paramsData.actividad" label="Pais" @change="redirect($event, false, 3)" solo></v-select>
    </v-flex> -->
    <!--<v-flex md4>
      <v-select :items="locations" item-text="text" item-value="field" :value="paramsData.localidad" label="Localidad" :disabled="!(paramsData && paramsData.pais)" @change="redirect($event, false, 5)" solo></v-select>
    </v-flex>-->
  </v-layout>
</template>

<script>
  export default {
    props: {
      params: {
        default: null,
        type: Object
      },
      count: {
        default: 0
      }
    },
    data () {
      return {
        paramsData: this.params
      }
    },
    watch: {
      '$route': function (to, from) {
        this.paramsData = to.params
        window.localStorage.setItem('service', JSON.stringify(this.paramsData))
        this.$store.dispatch('portfolios/getAll', this.paramsData)
      }
    },
    mounted: function () {
      this.$root.$on('inSector', (bool) => {
        if (bool && this.count >= 9) {
          this.$store.dispatch('portfolios/getAll', this.paramsData)
        }
      })
      if (process.browser) {
      /* var lastScrollTop = 0
      window.onscroll = () => {
          var st = window.pageYOffset || document.documentElement.scrollTop
          if (st > lastScrollTop) {
            var offsetHeight = document.documentElement.offsetHeight
            var scrollPosition = document.documentElement.scrollTop + window.innerHeight

            // console.log(scrollPosition + 600, offsetHeight)
            var bottomOfWindow = scrollPosition + 600 >= offsetHeight
            // console.log(bottomOfWindow)
            if (bottomOfWindow && this.count >= 9) {
              this.$store.dispatch('portfolios/getAll', this.paramsData)
            }
          }
          lastScrollTop = st <= 0 ? 0 : st // For Mobile or negative scrolling
        } */
      }
    },
    computed: {
      services () { return this.$store.getters['services/forSelectField'] },
      sectors () { return this.$store.getters['sectors/forSelectField'] },
      // activities () { return this.$store.getters['sectors/activities/bySector'](this.paramsData.sector) },
      countries () { return this.$store.getters['countries/forSelectField'] }
      // locations () { return this.$store.getters['countries/locations/byCountry'](this.paramsData.pais) }
    },
    methods: {
      redirect (event, action, index, sectorData) {
        if (event === undefined || event === 'undefined') return
        /* if (action) this.$store.dispatch(action) */
        let route = this.$router.currentRoute.path.split('/').filter(el => el !== '')
        if (route[index]) {
          route.splice(index)
          route[index] = event
          route = '/' + route.join('/')
          return this.$router.push(route)
        }

        if (index === 2 || index === 3) {
          if (!route[1]) {
            route.push('servicios')
            if (this.$router.currentRoute.query.no_r) return
          }
        }

        if (index === 3 && !route[2]) {
          route.push('sectores')
          if (this.$router.currentRoute.query.no_r) return
        }

        route.push(event)
        route = '/' + route.join('/')
        if (index === 2 || index === 3) {
          route = route + '?no_r'
        }
        window.location.replace('ejemplos/servicios/' + event)
        /* this.$router.replace({path: route, force: true}) */
      }
    }
  }
</script>

<style>
h3{
  font-weight: 400;
}
.custom--alignment{
      display: flex;
    align-items: center;
}
  .v-input__slot {
    padding: .4rem;
  }
</style>
