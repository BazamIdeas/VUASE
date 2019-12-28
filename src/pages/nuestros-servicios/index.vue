<template>
  <section>
    <AppServicesCarousel :alt="alt" id="selector" />
    <AppServicesSlider id="servicios" @select-group="setGroup" class="mb-4" />
    <transition-group appear :name="transitionGroupContent">
      <v-container
        d-block
        grid-list-md
        text-xs-left
        v-if="groupContent === i"
        v-for="(container, i) in containers"
        :key="i"
      >
        <v-layout wrap row v-for="(layout, i) in container.layouts" :key="i" class="mb-5 xs-mb-2">
          <v-flex
            class="xs12 border-container"
            :class="{
              'flex md6': layout.carousel, 
              'md4': !layout.carousel && layout.services.length == 3, 
              'md6': !layout.carousel && layout.services.length == 2,
              'bt': layout.carousel && !container.noBorder,
              'bb': layout.carousel && !container.noBorder && container.layouts.length > 2, 
              'br': !layout.carousel && (index !== layout.services.length - 1) && !container.noBorder
            }"
            v-for="(service, index) in layout.services"
            :key="service.slug"
            v-if="validateService(service)"
          >
            <AppServiceBox
              :id="service.id"
              :name="service.dataService.title"
              :price="service.price"
              :description="service.dataService.shortDescription"
              :list="service.dataService.list"
              :icon="service.dataService.icon"
              :url="service.slug"
              :addon-service="service.dataService.addonService"
              :start-with="service.dataService.startWith"
              :oferta="service.dataService.oferta"
            />
          </v-flex>
          <v-flex flex xs12 offset-md0 md6 v-if="layout.carousel">
            <v-layout align-center justify-center row class="container-carousel">
              <v-flex style="height: 420px;">
                <v-carousel
                  :interval="'3000998'"
                  hide-controls
                  style="height: 100%;"
                  class="nuestro-servicio-carousel"
                >
                  <v-carousel-item
                    v-for="(item, i) in layout.carousel"
                    :key="i"
                    :transition="'slide-x-transition'"
                    reverse="true"
                    reverse-transition="slide-x-reverse-transition"
                  >
                    <svg
                      :alt="alt"
                      class="img-cuadrada"
                      viewBox="0 0 100 100 "
                      :style="'background: url(' +item.src+')'"
                    />
                  </v-carousel-item>
                </v-carousel>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-container>
    </transition-group>
    <!-- QUE NECESITAS -->
    <v-flex>
      <h2
        class="mb-3 display-1 xs-title font-weight-bold text-xs-center"
      >¿Aún no encuentras lo que buscas?</h2>
    </v-flex>
    <v-flex xs12 class="text-xs-center title mb-5 font-weight-medium">
      Vuelve a nuestro
      <a style="color:#1976d2" @click="$vuetify.goTo('#selector')">selector</a>
      o
      <a style="color:#1976d2" target="_new" @click="$router.push('/contacto')">contáctanos</a>
    </v-flex>
  </section>
</template>

<script>
export default {
  props: ["tab"],
  async fetch({ store }) {
    await store.dispatch("services/getAll");
  },
  created() {
    let index = parseInt(this.$router.app._route.query.tab);
    if (index) {
      this.setGroup(index);
    }
  },
  mounted() {
    var scroll = document.getElementById("servicios");
    if (scroll !== null) {
      // console.log(scroll)
      if ("scrollingElement" in document) {
        document.scrollingElement.scrollTop = scroll.getBoundingClientRect().y;
      }
      // Fallback for legacy browsers
      if (navigator.userAgent.indexOf("WebKit") !== -1) {
        document.body.scrollTop = scroll.getBoundingClientRect().y;
      }
      document.documentElement.scrollTop = scroll.getBoundingClientRect().y;
    }
  },
  head() {
    return {
      titleTemplate: this.title + " | %s",
      meta: [
        { property: "og:title", content: this.title },
        { property: "og:description", content: this.description },
        { hid: "description", name: "description", content: this.description }
      ]
    };
  },
  data() {
    return {
      transitionGroupContent: "slide-x-transition",
      groupContent: 0,
      alt: "agencia de diseño grafico",
      description:
        "Diseños exclusivos de Logos, Web, Folletos y Rótulos, tenemos más de 75000 diseños exitosos y te ofrecemos garantía de conformidad. ¡Comienza Ahora!",
      title: "Agencia de diseño gráfico para empresas"
    };
  },
  computed: {
    services() {
      return this.$store.state.services.list;
    },
    getBySlug(slug) {
      return this.$store.getters["services/getBySlug"](slug);
    },
    containers() {
      return this.$store.state.services.groups;
    }
  },
  methods: {
    setGroup: function(index) {
      if (this.groupContent < index)
        this.transitionGroupContent = "slide-x-transition";
      else this.transitionGroupContent = "slide-x-reverse-transition";
      this.groupContent = index;
    },
    validateService(service) {
      if (!service) {
        console.log("el servicio no esta definido");
        return false;
      }

      if (!service.dataService) {
        console.log(service);
        return false;
      }
      return true;
    }
  }
};
</script>

<style scoped>
.v-carousel {
  box-shadow: none;
}

.container-carousel {
  height: 420px;
}

.img-cuadrada {
  background-size: auto 100% !important;
  background-repeat: no-repeat !important;
  background-position: center center !important;
  max-height: 100%;
}
</style>
<style>
.nuestro-servicio-carousel .v-responsive.v-image.v-carousel__item {
  max-height: 30rem;
}
.container-carousel button {
  color: #a5a5a5 !important;
}

.container-carousel .v-carousel {
  overflow: visible;
}

.container-carousel .v-carousel__controls {
  bottom: -8% !important;
}

.border-container {
  position: relative;
}

.border-container.bt:after {
  content: "";
  width: 80%;
  height: 2px;
  background-color: #a5a5a5;
  position: absolute;
  top: 0;
  left: 0;
}

.border-container.bb:before {
  content: "";
  width: 80%;
  height: 2px;
  background-color: #a5a5a5;
  position: absolute;
  bottom: 0;
  left: 0;
}

.border-container.br:before {
  content: "";
  width: 2px;
  height: 100%;
  min-height: 400px;
  background-color: #a5a5a5;
  position: absolute;
  right: 0;
  top: 0;
}

@media (min-width: 320px) and (max-width: 960px) {
  .container-carousel {
    height: auto;
  }
  .border-container.bt:after,
  .border-container.bb:before,
  .border-container.br:before {
    display: none;
  }

  .xs-pt-2 {
    padding-top: 20px !important;
  }

  .xs-mb-2 {
    margin-bottom: 20px !important;
  }

  .xs-title {
    font-size: 20px !important;
  }

  .container-carousel > div {
    height: 360px !important;
  }
}

</style>