<template lang="html">
  <v-layout row>
    <v-flex xs6 offset-xs1> 
      <v-container grid-list-md fluid class="pa-0 service-options-space mt-4">
          <v-layout row v-if="items" class="first-service-option-row">
            <v-flex class="service-option" v-for="(n, index) in 3" :key="index" xs4 align-center d-flex justify-center>  
              <svg class="service-option-background" viewBox="0 0 100 100"></svg>
              <div class="service-option-container" :class="[selecteds[index] ? 'selected-option' : '']">
                <img @click="selectOptionItem(index, items[index].slug)" :src="items[index].icon"/>
                <h5 @click="selectOptionItem(index, items[index].slug)" class="px-2">{{items[index].title}}</h5>
                <v-btn @click="openOption(items[index])" flat class="ma-0 px-2 know-more" large>
                  conocer más&nbsp;&nbsp;<v-icon>add_circle_outline</v-icon>
                </v-btn>
              </div>
            </v-flex>
          </v-layout>
          <v-layout row v-if="items" class="second-service-option-row">
            <v-flex class="service-option" v-for="(n, index) in 3" :key="index" xs4 align-center d-flex justify-center>  
              <svg class="service-option-background" viewBox="0 0 100 100"></svg>
              <div class="service-option-container" :class="[selecteds[index+3] ? 'selected-option' : '']">
                <img @click="selectOptionItem(index+3, items[index+3].slug)" :src="items[index+3].icon"/>
                <h5 @click="selectOptionItem(index+3, items[index+3].slug)" class="px-2">{{items[index+3].title}}</h5>
                <v-btn @click="openOption(items[index+3])" flat class="ma-0 px-2 know-more" large>
                  conocer más&nbsp;&nbsp;<v-icon>add_circle_outline</v-icon>
                </v-btn>
              </div>
            </v-flex>
          </v-layout>
          <v-layout row v-if="items" class="third-service-option-row">
            <v-flex class="service-option" v-for="(n, index) in 3" :key="index" xs4 align-center d-flex justify-center>  
              <svg class="service-option-background" viewBox="0 0 100 100"></svg>
              <div class="service-option-container" :class="[selecteds[index+6] ? 'selected-option' : '']">
                <img @click="selectOptionItem(index+6, items[index+6].slug)" :src="items[index+6].icon"/>
                <h5 @click="selectOptionItem(index+6, items[index+6].slug)" class="px-2">{{items[index+6].title}}</h5>
                <v-btn @click="openOption(items[index+6])" flat class="ma-0 px-2 know-more" large>
                  conocer más&nbsp;&nbsp;<v-icon>add_circle_outline</v-icon>
                </v-btn>
              </div>
            </v-flex>
          </v-layout>

          <div v-if="pop" class="shadow-pop-service-option">
            <div class="close-shadow-option-service" @click="pop = null">X</div>
            <h2>{{pop.title}}</h2>
            <div class="shadow-pop-service-description">
              {{pop.open.description}}
            </div>
            <v-layout row v-if="items" wrap>
              <v-flex class="item-shadow" v-for="(popItem, index) in pop.open.items" :key="index" xs6>
                  <v-layout row>
                    <v-flex xs2 offset-xs1>
                      <img :src="popItem.icon"/>
                    </v-flex>
                    <v-flex xs9>
                      {{popItem.text}}
                    </v-flex>
                  </v-layout>
              </v-flex>
            </v-layout>
          </div>
      </v-container>
    </v-flex>
    <v-flex xs6>
      <v-layout row wrap d-flex column class="ml-4">
        <v-flex class="ml-2">
            <img :src="img" width="100%"></img>
            <div v-if="!existSelecteds()">
              <h2 class="headline font-weight-bold text-uppercase px-5 text-xs-center" :style="'color:'" >
                SELECCIONE LO QUE DESEA HACER CON SU WEB
              </h2>
            </div>
            <div v-if="existSelecteds()">
              <h2 class="headline font-weight-bold text-uppercase" :style="'color:'">
                PRECIO CERRADO EN:
              </h2>
              <v-layout xs12 row d-flex class="mt-2">
                <v-flex xs4>
                  <h2 style="color:#F7941F;" class="display-1 font-weight-medium"  :style="'color:'">{{price.currency.symbol}} {{finalPrice()}}</h2>
                </v-flex>
                <v-layout xs6 row d-flex>
                  <v-flex xs4 style="border-right:1px solid silver;" class="mr-2">
                    <h3 class="title">50%</h3>
                    <h5 class="body-2">al iniciar</h5>
                  </v-flex>
                  <v-flex xs5>
                    <h3 class="title">50%</h3> 
                    <h5 class="body-2">al finalizar</h5>
                  </v-flex>
                </v-layout>
              </v-layout>
              <v-btn :to="'#'" :style="'background:' + color" dark class="mt-3 ml-0" >INICIAR MI PROYECTO</v-btn>
            </div>         
            
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script lang="js">
  export default {
    props: ['img', 'color', 'price', 'addons'],
    data () {
      let items = [
        {
          icon: '/icons/garantia-de-conformidad.svg',
          title: 'PROMOCIONAR UN SERVICIO O PRODUCTO',
          slug: 'prueba',
          services: ['diseno-y-desarrollo-de-seccion-web', 'pop-publicitario'],
          open: {
            description: 'Es una herramienta sumamente eficiente para obtener nuevos clientes por medio de acciones marketing online. Tiene como principal beneficio lograr nuevos clientes potenciales y/o obtener que se realice una acción determinada que incremente sus ventas e interacción con el mercado.',
            items: [
              {
                icon: '/icons/garantia-de-conformidad.svg',
                text: 'Diseño y desarrollo de sitio web exclusivo y original'
              },
              {
                icon: '/icons/garantia-de-conformidad.svg',
                text: 'Pop Publicitario'
              },
              {
                icon: '/icons/garantia-de-conformidad.svg',
                text: 'Programación sobre wordpress; herramienta ágil para la gestión de contenido'
              },
              {
                icon: '/icons/garantia-de-conformidad.svg',
                text: 'Herramienta SEO para su posicionamiento orgánico en buscadores'
              },
              {
                icon: '/icons/garantia-de-conformidad.svg',
                text: 'Múltiples usuarios y perfiles con diferentes permisos de actualización de contenidos'
              },
              {
                icon: '/icons/garantia-de-conformidad.svg',
                text: 'Integración con más de 50.000 complementos'
              },
              {
                icon: '/icons/garantia-de-conformidad.svg',
                text: 'Manual de usuario'
              }
            ]
          }
        },
        {
          icon: '/icons/garantia-de-conformidad.svg',
          title: 'PRESENTAR MI EMPRESA',
          slug: 'prueba2',
          services: ['diseno-y-desarrollo-de-seccion-web', 'hosting-y-dominio-por-un-ano'],
          open: {
            description: 'Sitio de presencia en Internet ideal para brindar introducción de una pequeña empresa a la web. Diseño exclusivo compuesto por home page de bienvenida, carrousel de 6 imágenes, información introductoria de la actividad, sector de contacto con datos, formulario, mapa interactivo de Google y sector de avisos legales.',
            items: [
              {
                icon: '/icons/garantia-de-conformidad.svg',
                text: 'Diseño y desarrollo de sitio web exclusivo y original (2 secciones)'
              },
              {
                icon: '/icons/garantia-de-conformidad.svg',
                text: 'Hosting y dominio por un año'
              },
              {
                icon: '/icons/garantia-de-conformidad.svg',
                text: 'Programación sobre wordpress; herramienta ágil para la gestión de contenido'
              },
              {
                icon: '/icons/garantia-de-conformidad.svg',
                text: 'Herramienta SEO para su posicionamiento orgánico en buscadores'
              },
              {
                icon: '/icons/garantia-de-conformidad.svg',
                text: 'Múltiples usuarios y perfiles con diferentes permisos de actualización de contenidos'
              },
              {
                icon: '/icons/garantia-de-conformidad.svg',
                text: 'Integración con más de 50.000 complementos'
              },
              {
                icon: '/icons/garantia-de-conformidad.svg',
                text: 'Manual de usuario'
              }
            ]
          }
        },
        {
          icon: '/icons/garantia-de-conformidad.svg',
          title: 'OFRECER MULTIPLES SERVICIOS',
          slug: 'prueba3',
          services: ['diseno-y-desarrollo-de-seccion-web', 'hosting-y-dominio-por-un-ano', 'chat', 'casillas-de-correo', 'seccion-de-noticias-o-publicaciones'],
          open: {
            description: 'Es el sitio web perfecto para PyMes que desean ganar clientes en Internet. Incluye el diseño de hasta 5 secciones, como ser:  reseña de la empresa, sector de contacto, mapa interactivo, galería imágenes o videos, descripción de servicios, noticias, etc.',
            items: [
              {
                icon: '/icons/garantia-de-conformidad.svg',
                text: 'Diseño y desarrollo de sitio web exclusivo y original (5 secciones)'
              },
              {
                icon: '/icons/garantia-de-conformidad.svg',
                text: 'Hosting y dominio por un año'
              },
              {
                icon: '/icons/garantia-de-conformidad.svg',
                text: 'Chat'
              },
              {
                icon: '/icons/garantia-de-conformidad.svg',
                text: 'Casillas de correo'
              },
              {
                icon: '/icons/garantia-de-conformidad.svg',
                text: 'Noticias o Publicaciones'
              },
              {
                icon: '/icons/garantia-de-conformidad.svg',
                text: 'Programación sobre wordpress; herramienta ágil para la gestión de contenido'
              },
              {
                icon: '/icons/garantia-de-conformidad.svg',
                text: 'Herramienta SEO para su posicionamiento orgánico en buscadores'
              },
              {
                icon: '/icons/garantia-de-conformidad.svg',
                text: 'Múltiples usuarios y perfiles con diferentes permisos de actualización de contenidos'
              },
              {
                icon: '/icons/garantia-de-conformidad.svg',
                text: 'Integración con más de 50.000 complementos'
              },
              {
                icon: '/icons/garantia-de-conformidad.svg',
                text: 'Manual de usuario'
              }
            ]
          }
        },
        {
          icon: '/icons/garantia-de-conformidad.svg',
          title: 'DAR A CONOCER MIS PROYECTOS REALIZADOS',
          slug: 'prueba4',
          services: ['diseno-y-desarrollo-de-seccion-web', 'hosting-y-dominio-por-un-ano', 'galeria-de-proyectos'],
          open: {
            description: 'Además de mostrar la información de su empresa o actividad, incluye una galería donde podrá publicar proyectos junto a sus características, atributos y anexarle imágenes. Los mismos pueden ser filtrados según las variables que desee.',
            items: [
              {
                icon: '/icons/garantia-de-conformidad.svg',
                text: 'Diseño y desarrollo de sitio web exclusivo y original (3 secciones)'
              },
              {
                icon: '/icons/garantia-de-conformidad.svg',
                text: 'Hosting y dominio por un año'
              },
              {
                icon: '/icons/garantia-de-conformidad.svg',
                text: 'Galería de proyectos'
              },
              {
                icon: '/icons/garantia-de-conformidad.svg',
                text: 'Programación sobre wordpress; herramienta ágil para la gestión de contenido'
              },
              {
                icon: '/icons/garantia-de-conformidad.svg',
                text: 'Herramienta SEO para su posicionamiento orgánico en buscadores'
              },
              {
                icon: '/icons/garantia-de-conformidad.svg',
                text: 'Múltiples usuarios y perfiles con diferentes permisos de actualización de contenidos'
              },
              {
                icon: '/icons/garantia-de-conformidad.svg',
                text: 'Integración con más de 50.000 complementos'
              },
              {
                icon: '/icons/garantia-de-conformidad.svg',
                text: 'Manual de usuario'
              }
            ]
          }
        },
        {
          icon: '/icons/garantia-de-conformidad.svg',
          title: 'PUBLICAR INMUEBLES PARA ALQUILER O VENTA',
          slug: 'prueba5',
          services: ['diseno-y-desarrollo-de-seccion-web', 'hosting-y-dominio-por-un-ano', 'plataforma-inmobiliaria'],
          open: {
            description: 'Plataforma imprescindible si está en la industria de Bienes Raíces, permite: cargar propiedades junto a sus atributos y características, localización en mapa interactivo, búsqueda personalizada, listado de favoritas, publicar galería de fotos, entre otras funciones.',
            items: [
              {
                icon: '/icons/garantia-de-conformidad.svg',
                text: 'Diseño y desarrollo de sitio web exclusivo y original (5 secciones)'
              },
              {
                icon: '/icons/garantia-de-conformidad.svg',
                text: 'Hosting y dominio por un año'
              },
              {
                icon: '/icons/garantia-de-conformidad.svg',
                text: 'Plataforma inmobiliaria'
              },
              {
                icon: '/icons/garantia-de-conformidad.svg',
                text: 'Programación sobre wordpress; herramienta ágil para la gestión de contenido'
              },
              {
                icon: '/icons/garantia-de-conformidad.svg',
                text: 'Herramienta SEO para su posicionamiento orgánico en buscadores'
              },
              {
                icon: '/icons/garantia-de-conformidad.svg',
                text: 'Múltiples usuarios y perfiles con diferentes permisos de actualización de contenidos'
              },
              {
                icon: '/icons/garantia-de-conformidad.svg',
                text: 'Integración con más de 50.000 complementos'
              },
              {
                icon: '/icons/garantia-de-conformidad.svg',
                text: 'Manual de usuario'
              }
            ]
          }
        },
        {
          icon: '/icons/garantia-de-conformidad.svg',
          title: 'EXHIBIR UN MENÚ DE PLATOS/COMIDAS',
          slug: 'prueba6',
          services: ['diseno-y-desarrollo-de-seccion-web', 'hosting-y-dominio-por-un-ano', 'catalogo-productos'],
          open: {
            description: 'De a conocer su restaurant o bar con un sitio web atractivo y profesional, además podrá agregar y modificar platos al menú cuando desee.',
            items: [
              {
                icon: '/icons/garantia-de-conformidad.svg',
                text: 'Diseño y desarrollo de sitio web exclusivo y original (3 secciones)'
              }, {
                icon: '/icons/garantia-de-conformidad.svg',
                text: 'Hosting y dominio por un año'
              }, {
                icon: '/icons/garantia-de-conformidad.svg',
                text: 'Catálogo'
              }, {
                icon: '/icons/garantia-de-conformidad.svg',
                text: 'Programación sobre wordpress; herramienta ágil para la gestión de contenido'
              }, {
                icon: '/icons/garantia-de-conformidad.svg',
                text: 'Herramienta SEO para su posicionamiento orgánico en buscadores'
              }, {
                icon: '/icons/garantia-de-conformidad.svg',
                text: 'Múltiples usuarios y perfiles con diferentes permisos de actualización de contenidos'
              }, {
                icon: '/icons/garantia-de-conformidad.svg',
                text: 'Integración con más de 50.000 complementos'
              }, {
                icon: '/icons/garantia-de-conformidad.svg',
                text: 'Manual de usuario'
              }
            ]
          }
        },
        {
          icon: '/icons/garantia-de-conformidad.svg',
          title: 'MOSTRAR UN CATÁLOGO DE PRODUCTOS',
          slug: 'prueba7',
          services: ['diseno-y-desarrollo-de-seccion-web', 'hosting-y-dominio-por-un-ano', 'catalogo-productos'],
          open: {
            description: 'Herramienta indispensable para exhibir sus productos en la web, podrá cargar, modificar y agregar categorías, además incluye las secciones básicas como: contacto, reseña de la empresa, slider de imágenes, mapa de ubicación, etc.',
            items: [
              {
                icon: '/icons/garantia-de-conformidad.svg',
                text: 'Diseño y desarrollo de sitio web exclusivo y original (5 secciones)'
              }, {
                icon: '/icons/garantia-de-conformidad.svg',
                text: 'Hosting y dominio por un año'
              }, {
                icon: '/icons/garantia-de-conformidad.svg',
                text: 'Catálogo'
              }, {
                icon: '/icons/garantia-de-conformidad.svg',
                text: 'Programación sobre wordpress; herramienta ágil para la gestión de contenido'
              }, {
                icon: '/icons/garantia-de-conformidad.svg',
                text: 'Herramienta SEO para su posicionamiento orgánico en buscadores'
              }, {
                icon: '/icons/garantia-de-conformidad.svg',
                text: 'Múltiples usuarios y perfiles con diferentes permisos de actualización de contenidos'
              }, {
                icon: '/icons/garantia-de-conformidad.svg',
                text: 'Integración con más de 50.000 complementos'
              }, {
                icon: '/icons/garantia-de-conformidad.svg',
                text: 'Manual de usuario'
              }

            ]
          }
        },
        {
          icon: '/icons/garantia-de-conformidad.svg',
          title: 'VENDER MIS PRODUCTOS ONLINE',
          slug: 'prueba8',
          services: ['diseno-y-desarrollo-de-seccion-web', 'hosting-y-dominio-por-un-ano', 'catalogo-productos', 'ecommerce', 'chat'],
          open: {
            description: 'Es la opción ideal para vender en línea. Todo lo necesario para dar a conocer su negocio con una web Profesional + Diseño y programación de Catálogo de productos, con alta de 100 productos y la posibilidad de creación ilimitada de categorías y subcategorías, carro de compras, posibilidad de configurar distintos impuestos en función de país o el código postal de envío, ficha de productos completas, valoración de productos, integración con medios de pagos (Paypal, Paypal PRO, 2CO, Transferencia Bancaria, Pago contra entrega, etc), cupones de descuento por porcentaje o importe fijo, múltiples monedas.',
            items: [
              {
                icon: '/icons/garantia-de-conformidad.svg',
                text: 'Diseño y desarrollo de sitio web exclusivo y original (5 secciones)'
              },
              {
                icon: '/icons/garantia-de-conformidad.svg',
                text: 'Hosting y dominio por un año'
              },
              {
                icon: '/icons/garantia-de-conformidad.svg',
                text: 'Catálogo'
              },
              {
                icon: '/icons/garantia-de-conformidad.svg',
                text: 'Carro de compras'
              },
              {
                icon: '/icons/garantia-de-conformidad.svg',
                text: 'Chat'
              },
              {
                icon: '/icons/garantia-de-conformidad.svg',
                text: 'Programación sobre wordpress; herramienta ágil para la gestión de contenido'
              },
              {
                icon: '/icons/garantia-de-conformidad.svg',
                text: 'Herramienta SEO para su posicionamiento orgánico en buscadores'
              },
              {
                icon: '/icons/garantia-de-conformidad.svg',
                text: 'Múltiples usuarios y perfiles con diferentes permisos de actualización de contenidos'
              },
              {
                icon: '/icons/garantia-de-conformidad.svg',
                text: 'Integración con más de 50.000 complementos'
              },
              {
                icon: '/icons/garantia-de-conformidad.svg',
                text: 'Manual de usuario'
              }

            ]
          }
        },
        {
          icon: '/icons/garantia-de-conformidad.svg',
          title: 'COMPARTIR INFORMACIÓN Y ARCHIVOS CON MIS CLIENTES',
          slug: 'prueba9',
          services: ['diseno-y-desarrollo-de-seccion-web', 'hosting-y-dominio-por-un-ano', 'catalogo-productos', 'ecommerce', 'chat'],
          open: {
            description: 'descripcion de pop',
            items: [
              {
                icon: '/icons/garantia-de-conformidad.svg',
                text: 'descripcion de item en pop'
              }
            ]
          }
        }
      ]

      return {
        items: items,
        pop: null,
        selecteds: {}
      }
    },
    methods: {
      openOption (itemData) {
        this.pop = itemData
      },
      isEven (items) {
        return ((items.length % 2) === 0)
      },
      selectOptionItem (index, slug) {
        if (this.selecteds[index]) {
          delete this.selecteds[index]
        } else {
          this.selecteds[index] = slug
        }

        let helper = this.selecteds
        this.selecteds = null
        this.selecteds = helper

        let selectedKeys = Object.keys(this.selecteds)

        let selectedSlugs = []
        for (let selectedKey of selectedKeys) {
          selectedSlugs.push(this.selecteds[selectedKey])
        }

        let selectedsString = JSON.stringify(selectedSlugs)

        localStorage.setItem('quoteOptions', selectedsString)
      },
      existSelecteds () {
        let keys = Object.keys(this.selecteds)
        return keys.length
      },
      finalPrice () {
        let priceCount = 0
        let usedAddonsSlugs = []

        for (let addon of this.addons) {
          let addonSlug = addon.slug
          let selectedKeys = Object.keys(this.selecteds)

          for (let selectedKey of selectedKeys) {
            if (usedAddonsSlugs.indexOf(addonSlug) !== -1) {
              continue
            }

            let servicesSelected = this.items[selectedKey].services
            if (servicesSelected.indexOf(addonSlug) === -1) {
              continue
            }

            priceCount += (addon.price.value * addon.percentage) / 100
          }
        }

        return priceCount
      }
    }
  }
</script>

<style scoped lang="css">

  .service-options-space{
    position: relative;
  }

  .service-option{
    position: relative;
  }

  .service-option:nth-child(2){
    border-left: 2px solid #bebebe;
    border-right: 2px solid #bebebe;
  }

  .service-option-background{
    width: 100%;
  }

  .service-option-container{
    position: absolute;
    top: 2.5%;
    left: 2.5%;
    width: 95%;
    height: 95%;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    opacity: 0.5;
    transition: 0.3s ease opacity;
  }

  .service-option-container:hover, .service-option-container.selected-option{
    opacity: 1;
    cursor:pointer;
  }

  .service-option-container:hover h5, .service-option-container.selected-option h5{
    color: black;
  }

  .second-service-option-row .service-option-container:hover,  .second-service-option-row .service-option-container.selected-option{
    border-top: 2px solid #bebebe;
    border-bottom: 2px solid #bebebe;
  }


 

  .second-service-option-row .service-option-container{
    border-top: 2px solid gray;
    border-bottom: 2px solid gray;
  }

  .service-option-container img {
    width: 30%;
    margin-bottom: 20px;
  }

  .service-option-container h5{
    text-align: center;
  }

  .shadow-pop-service-option {
      position: absolute;
      top: 0px;
      left: -30%;
      width: 160%;
      min-height: 120%;
      background: #fefefe;
      box-shadow: 0 14px 28px rgba(157, 157, 157, 0.25), 0 10px 10px rgba(39, 36, 36, 0.22);
      padding: 40px;
      overflow-y: auto;
      z-index: 20;
  }

  .shadow-pop-service-option h2{
    color: #d32228;
    max-width: 80%;
  }
  
  .shadow-pop-service-option .shadow-pop-service-description{
    margin-top: 20px;
    margin-bottom: 40px;
    text-align: justify;
  }

  .close-shadow-option-service{
    position: absolute;
    top: 5%;
    right: 5%;
    color: black;
    /* padding: 10px; */
    border: 2px solid gray;
    border-radius: 50%;
    height: 40px;
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    cursor: pointer;
  }
  
  .item-shadow{
    height: 100px;
    display: flex;
    align-items: center; 
  }



</style>

<style>


  .service-option-container .know-more{
    display: none;
    color: #676767;
    font-size: 10px;
    margin-top: 15px;
  }

  .service-option-container:hover .know-more{
    display: flex;
  }

  .service-option-container .know-more:before{
    background-color: white;
  }


</style>