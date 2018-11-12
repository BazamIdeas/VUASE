<template>
  <section class="cotizacion">
    <v-container grid-list-md>
      <v-layout row wrap>
        <v-flex xs12 class="my-4 py-4"></v-flex>
        <v-flex xs12>
          <AppHeading :number="'1'" size="headline" title="¿QUE QUIERE HACER CON SU WEB?" class="mb-3" />
        </v-flex>
        <v-flex md7 offset-md1>
          <v-layout row wrap>
            <v-flex md4 v-for="pkg in arrayPackages" :key="pkg" class="px-2 mb-2">
              <v-card class="pa-3 package" :class="{ 'selected': pkg === packageSelected }">
                <div class="package-img" style="width: 100%; position: relative; padding-top: 69%;"  :style="{ backgroundImage: 'url(/images/quote/what_to_do/' + pkg + '.svg)' }">
                </div>
                <div class="package-title">
                  <p class="body-2 text-xs-center mb-0">{{ packages[pkg].title }}</p>
                </div>
              </v-card>
            </v-flex>
            <v-flex md12 class="mt-1">
              <p class="headline font-weight-medium section-title" style="border-bottom: 2px solid #004b7b;">Detalles</p>
            </v-flex>
            <v-flex md6 v-for="service in servicesQuote" v-if="service.section === 'details'" :key="service.slug" class="pa-2">
              <v-card class="py-1 service-package" :class="{ 'selected': pkg === packageSelected }">
                <v-layout row wrap>
                  <v-flex xs3 class="service-package-img">
                    <img :src="'/images/quote/services/' + service.slug + '.svg'" height="50">
                  </v-flex>
                  <v-flex xs6 class="service-package-name">
                    <p class="body-2 mb-0" style="line-height: 15px;">{{ service.slug.replace(/-/g,' ') }}</p>
                  </v-flex>
                  <v-flex xs3 class="service-package-img">
                    
                  </v-flex>
                </v-layout>
              </v-card>
            </v-flex>
            <v-flex md12 class="mt-3">
              <p class="headline font-weight-medium section-title" style="border-bottom: 2px solid #004b7b;">Funcionalidades</p>
            </v-flex>
            <v-flex md3 v-for="service in servicesQuote" v-if="service.section === 'functionalities'" :key="service.slug" class="px-2 mb-2">
              <v-card :class="{ 'selected': pkg === packageSelected }">
                <div class="px-3 pt-2">
                  <img :src="'/images/quote/services/' + service.slug + '.svg'">
                </div>
                <v-divider light></v-divider>
                <div class="package-title px-1">
                  <p class="body-2 mb-0 text-xs-center">{{ service.slug.replace(/-/g,' ') }}</p>
                </div>
              </v-card>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex md3 class="px-2">
          <v-card>
            <div class="subheading text-xs-center py-2 font-weight-bold section-title">SERVICIOS INCLUIDOS</div>
            <v-divider light></v-divider>
            <table width="100%">
              <tr>
                <td class="body-1 text-xs-center py-1">Nombre de servicio</td>
                <td class="body-1 text-xs-center py-1"> 000 $</td>
              </tr>
              <tr>
                <td class="body-1 text-xs-center py-1">Nombre de servicio</td>
                <td class="body-1 text-xs-center py-1"> 000 $</td>
              </tr>
              <tr>
                <td class="body-1 text-xs-center py-1">Nombre de servicio</td>
                <td class="body-1 text-xs-center py-1"> 000 $</td>
              </tr>
            </table>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </section>
</template>

<script>
  export default {
    data () {
      return {
        packageSelected: 'promocionar-un-servicio-o-producto',
        packages: {
          'promocionar-un-servicio-o-producto': {
            title: 'Promocionar un servicio o producto',
            description: 'Es una herramienta sumamente eficiente para obtener nuevos clientes por medio de acciones marketing online. Tiene como principal beneficio lograr nuevos clientes potenciales y/o obtener que se realice una acción determinada que incremente sus ventas e interacción con el mercado.',
            sections: 1,
            services: ['diseno-y-desarrollo-de-seccion-web', 'pop-publicitario']
          },
          'presentar-mi-empresa': {
            title: 'Presentar mi empresa',
            description: 'Sitio de presencia en Internet ideal para brindar introducción de una pequeña empresa a la web. Diseño exclusivo compuesto por home page de bienvenida, carrousel de 6 imágenes, información introductoria de la actividad, sector de contacto con datos, formulario, mapa interactivo de Google y sector de avisos legales.',
            sections: 2,
            services: ['diseno-y-desarrollo-de-seccion-web', 'hosting-y-dominio-por-un-ano']
          },
          'ofrecer-multiples-servicios': {
            title: 'Ofrecer múltiples servicios',
            description: 'Es el sitio web perfecto para PyMes que desean ganar clientes en Internet. Incluye el diseño de hasta 5 secciones, como ser: reseña de la empresa, sector de contacto, mapa interactivo, galería imágenes o videos, descripción de servicios, noticias, etc.',
            sections: 5,
            services: ['diseno-y-desarrollo-de-seccion-web', 'hosting-y-dominio-por-un-ano', 'chat', 'casillas-de-correo', 'seccion-de-noticias-o-publicaciones']
          },
          'dar-a-conocer-mis-proyectos-realizados': {
            title: 'Dar a conocer mis proyectos realizados',
            description: 'Además de mostrar la información de su empresa o actividad, incluye una galería donde podrá publicar proyectos junto a sus características, atributos y anexarle imágenes. Los mismos pueden ser filtrados según las variables que desee.',
            sections: 3,
            services: ['diseno-y-desarrollo-de-seccion-web', 'hosting-y-dominio-por-un-ano', 'galeria-de-proyectos']
          },
          'publicar-inmuebles-para-alquiler-o-venta': {
            title: 'Publicar inmuebles para alquilar o venta',
            description: 'Plataforma imprescindible si está en la industria de Bienes Raíces, permite: cargar propiedades junto a sus atributos y características, localización en mapa interactivo, búsqueda personalizada, listado de favoritas, publicar galería de fotos, entre otras funciones.',
            sections: 5,
            services: ['diseno-y-desarrollo-de-seccion-web', 'hosting-y-dominio-por-un-ano', 'plataforma-inmobiliaria']
          },
          'exhibir-un-menu-de-platos-o-comidas': {
            title: 'Exhibir un menú de platos / comidas',
            description: 'De a conocer su restaurant o bar con un sitio web atractivo y profesional, además podrá agregar y modificar platos al menú cuando desee.',
            sections: 3,
            services: ['diseno-y-desarrollo-de-seccion-web', 'hosting-y-dominio-por-un-ano', 'catalogo']
          },
          'mostrar-un-catalogo-de-productos': {
            title: 'Mostrar un catálogo de productos',
            description: 'Herramienta indispensable para exhibir sus productos en la web, podrá cargar, modificar y agregar categorías, además incluye las secciones básicas como: contacto, reseña de la empresa, slider de imágenes, mapa de ubicación, etc.',
            sections: 5,
            services: ['diseno-y-desarrollo-de-seccion-web', 'hosting-y-dominio-por-un-ano', 'catalogo']
          },
          'vender-mis-productos-online': {
            title: 'Vender mis productos online',
            description: 'Es la opción ideal para vender en línea. Todo lo necesario para dar a conocer su negocio con una web Profesional + Diseño y programación de Catálogo de productos, con alta de 100 productos y la posibilidad de creación ilimitada de categorías y subcategorías, carro de compras, posibilidad de configurar distintos impuestos en función de país o el código postal de envío, ficha de productos completas, valoración de productos, integración con medios de pagos(Paypal, Paypal PRO, 2CO, Transferencia Bancaria, Pago contra entrega, etc), cupones de descuento por porcentaje o importe fijo, múltiples monedas.',
            sections: 5,
            services: ['diseno-y-desarrollo-de-seccion-web', 'hosting-y-dominio-por-un-ano', 'catalogo', 'ecommerce', 'chat']
          },
          'compartir-informacion': {
            title: 'Compartir informacion y archivos con mis clientes',
            description: 'Es la opción ideal para vender en línea.',
            sections: 2,
            services: ['diseno-y-desarrollo-de-seccion-web', 'hosting-y-dominio-por-un-ano', 'catalogo', 'ecommerce', 'chat']
          }
        },
        servicesQuote: [
          { slug: 'diseno-y-desarrollo-de-seccion-web', selected: false, section: 'details' },
          { slug: 'hosting-por-un-ano', selected: false, section: 'details' },
          { slug: 'dominio-por-un-ano', selected: false, section: 'details' },
          { slug: 'casillas-de-correo', selected: false, section: 'details' },
          { slug: 'certificado-ssl', selected: false, section: 'details' },
          { slug: 'chat', selected: false, section: 'functionalities' },
          { slug: 'pop-publicitario', selected: false, section: 'functionalities' },
          { slug: 'cotizador', selected: false, section: 'functionalities' },
          { slug: 'multidioma-automatico', selected: false, section: 'functionalities' },
          { slug: 'area-privada-para-clientes', selected: false, section: 'functionalities' },
          { slug: 'plataforma-inmobiliaria', selected: false, section: 'functionalities' },
          { slug: 'formulario-personalizado', selected: false, section: 'functionalities' },
          { slug: 'reservaciones-o-citas', selected: false, section: 'functionalities' },
          { slug: 'area-para-la-gestión-de-archivos', selected: false, section: 'functionalities' },
          { slug: 'seccion-de-noticias-o-publicaciones', selected: false, section: 'functionalities' },
          { slug: 'integracion-con-herramientas-de-google', selected: false, section: 'functionalities' },
          { slug: 'ecommerce', selected: false, section: 'functionalities' },
          { slug: 'catalogo', selected: false, section: 'functionalities' },
          { slug: 'galeria-de-proyectos', selected: false, section: 'functionalities' }
        ]
      }
    },
    computed: {
      arrayPackages () { return Object.keys(this.packages) }
    }
  }
</script>

<style>
  .package {
    display: flex;
    flex-flow: column;
    justify-content: center;
    cursor: pointer;
  }
  
  .package-img {
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
  }

  .package-title {
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 15px;
  }

  .package.selected {
    background-color: #004b7b;
  }

  .package.selected .package-title p {
    color: #ffffff;
  }

  .service-package {
    border: 2px solid grey;
  }
  
  .service-package-name, .service-package-img {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  .section-title {
    color: #004b7b;
  }
</style>