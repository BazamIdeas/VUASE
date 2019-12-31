<template>
  <section>
    <AppAboutUsCarousel />
    <v-container fluid grid-list-md class="mt-3">
      <v-layout row wrap>
        <v-flex xs12 offset-md1 md10 class="mb-2">
          <v-layout row wrap>
            <v-flex xs12 md6>
              <!--<h1 class="font-weight-bold mb-5 text-uppercase" style="font-size: 30px; color: #004B7B">QUIÉNES SOMOS</h1>-->
              <AppHeading number="2" title="Nuestra historia" size="display-1" align="left" color="blue-medium"/>
              <p class="body-2" style="margin-top: 10px">
                Líderlogo somos una agencia referente en el sector del diseño. Desde hace 16 años creamos con suma pasión el diseño gráfico, diseño publicitario y desarrollos webs de marcas, negocios y empresas para mejorar su imagen de marca y lograr que vendan más y obtengan más clientes. 
              </p>
              <p class="body-2" >
                Somos conscientes de que el mundo actual está lleno de nuevos emprendedores dispuestos a triunfar, pero sabemos cómo son los comienzos de la mayoría de negocios. Es por ello que desde el principio, adaptamos nuestros precios, haciéndolos accesibles para empresas de nueva formación y para aquellas que quieren crecer.
              </p>
              <p class="body-2" >
                En Líderlogo hemos desarrollado una metodología ágil de tres fases de desarrollo de proyectos. Son simples y eficientes, ya que contamos con un equipo humano de profesionales especializados en el sector del diseño y la creatividad. Un equipo de personas que sienten los valores de la marca como propios, así como la pasión y el compromiso con los que trabajan para cada uno de los clientes que confían en nosotros.
              </p>
              <p class="body-2" >
                Nuestros clientes de Líderlogo siempre cuentan con atención profesional personalizada. Para nosotros nuestros clientes no son números, sino personas. Y es por ello que resolvemos sus necesidades específicas con soluciones de calidad, enfocadas a su negocio y sus propios clientes. ¿Sigues teniendo dudas? Pues sigue leyendo.
              </p>
              <p class="body-2" >
                Nuestros creativos piensan por y para nuestros clientes, facilitándoles no preocuparse por sus logos, banners, material de oficina o eventos, diseños web, etc. Y además, a una velocidad que pocos logran. Y es que en Líderlogo te presentamos la primera propuesta en 24 horas.</p>
               <p class="body-2" >
                 Nuestra empresa aplica procedimientos y normas de calidad que aseguran cada proceso y los servicios de las mismas. Líderlogo, además, somos una empresa honesta y transparente, que en caso de que nuestro cliente no esté satisfecho, le reintegramos el dinero invertido en el trabajo realizado.        
                </p>
                <p class="body-2" >
                  Estamos tan involucrados con lograr el éxito de nuestros clientes, que desarrollamos e invertimos en tecnología de la más actual e innovadora para poder ofrecer todos nuestros servicios desde la comodidad, la confianza y la tranquilidad para ellos. Y eso también incluye ahorrar costes para nuestros clientes, y ganar tiempo para que lo dediquen a captar más clientes y vender más en sus negocios.
                </p>
                <p class="body-2" >
                  En Líderlogo pensamos por ti. Creamos para ti.
                </p>
              
            </v-flex>
            <v-flex xs12 md6>
              <img  alt="Sobre Nosotros" src="/images/pages/dino_about_us.jpg" width="100%">
              <img  alt="Sobre Nosotros" src="images/pages/como-hacer-un-logo.jpg" width="100%">
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex xs12 offset-md2 md8 class="mt-5 text-xs-center">
          <!--<h1 class="display-1 font-weight-bold text-xs-center mb-4" style="color: #303032;">NUESTROS SERVICIOS</h1>-->
          <AppHeading number="2" title="Nuestros Servicios" size="display-1"/>
        </v-flex>
      </v-layout>
    </v-container>
    <AppServicesGrid color="#0088c6"/>
  </section>
</template>

<script>
  export default {
    head () {
      return {
        titleTemplate: this.title + ' | %s',
        meta: [
          { property: 'og:title', content: this.title },
          { content: 'noindex', name: 'robots' }
        ]
      }
    },
    data () {
      return {
        alt: 'Liderlogo',
        description: 'Somos una agencia referente de diseño que trabaja incansablemente, apoyando a pequeñas y medianas empresas, creando su identidad.',
        title: 'Agencia de diseño grafico en españa'
      }
    }
  }
</script>

<style scoped>
  .v-list__tile__content {
    font-weight: 600;
  }

  .service-box-list {
    display: flex;
    flex-flow: column;
    align-items: center;
  }

  .service-name {
    color: #676767;
    font-size: 20px;
    font-weight: 700
  }

  .price {
    font-size: 40px;
    font-weight: 700;
    color: #87C438;
  }

  .service-box-list ul,
  .service-box-list ol {
    padding-left: 17px;
    margin-bottom: 20px;
    list-style-image: url('/images/icons/check-green.png');
  }

  .service-box-list ul li {
    font-weight: 600;
    color: #676767;
    margin-top: 11px;
  }
</style>