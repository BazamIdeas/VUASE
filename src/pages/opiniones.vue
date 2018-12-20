<template>
  <section class="content">
    <v-container grid-list-md class="mt-5">
      <v-layout row wrap class="mt-5">
        <v-flex xs12 md5 class="pr-5 pr-xs-0">
          <h1 class="display-1 xs-headline mt-5 mb-5 font-weight-bold text-xs-center text-md-left">NUESTROS CLIENTES HABLAN POR NOSOTROS</h1>
        </v-flex>
        <v-flex xs12 md7>
          <iframe class="responsive-video" height="350px" src="https://www.youtube.com/embed/Ywm1mGab3Kg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </v-flex>
      </v-layout>
      <v-layout row wrap class="mt-5">
        <v-flex xs12 v-for="(testimony, i) in testimonies.slice(0, limit)" :key="i">
          <v-layout row wrap class="mb-xs-3">
            <v-flex xs12 sm4 md3 @click="testimony.active = !testimony.active">
              <img :src="testimony.logo" class="p-testimony-logo">
            </v-flex>

            <v-flex xs12 sm6 md9>
              <v-layout class="mt-4" row d-flex justify-center>
                <div class="text-xs-center">
                  <v-rating class="testimony-rating" :value="testimony.stars" readonly></v-rating>
                </div>
              </v-layout>
              <h3 class="subheading font-weight-medium text-xs-center mt-3 pb-2" style="color:rgb(151, 147, 147);">
                {{testimony.description}}
              </h3>
              <h3 class="subheading font-weight-medium text-xs-center mt-0 pb-2" style="color:rgb(67, 67, 67);">
                {{testimony.company}}
              </h3>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex xs12>
          <v-layout align-center justify-center row> 
              <v-btn @click="limit = limit + 5" class="white--text title font-weight-regular" style="background-color:#004777;">
                VER MAS
              </v-btn>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
  </section>
</template>

<script>
  export default {
    head () {
      return {
        titleTemplate: '%s | Inicio',
        meta: [
          { name: 'og:title', content: 'bar' }
        ]
      }
    },
    data () {
      return {
        alt: 'Lorem ipsum',
        limit: 5,
        testimonies: [
          {
            stars: 5,
            logo: '/images/testimonies/home/hotel-aixo.jpg',
            company: 'Hotel Aixo Suites',
            description: '“La atención de Liderlogo ha sido excelente, lo recomiendo.”'
          }, {
            stars: 4.5,
            logo: '/images/testimonies/home/grupo-hivasa.jpg',
            company: 'Grupo Hivasa',
            description: '“Mi experiencia ha sido muy buena en general, tiempo, costos y respuesta.”'
          }, {
            stars: 5,
            logo: '/images/testimonies/home/arlu.jpg',
            company: 'Arlu',
            description: '"Excelente en términos generales...Lo recomiendo ampliamente. Gracias a todo el equipo.”'
          }, {
            stars: 5,
            logo: '/images/testimonies/home/policia-local-dalior.jpg',
            company: 'Policía Dalaior',
            description: '“Nuestra experiencia con Liderlogo ha sido muy satisfactoria y profesional.”'
          }, {
            stars: 5,
            logo: '/images/testimonies/home/fauna-domestica.jpg',
            company: 'Fauna Doméstica',
            description: '“Profesionales al 100%, como siempre!”'
          },
          {
            stars: 4.5,
            logo: '/images/testimonies/home/finanpay.jpg',
            company: 'Finanpay',
            description: '“La atención recibida por parte de Liderlogo ha sido excelente. Hicieron lo suyo, nuestro proyecto, y están muy encima de ello.”'
          }, {
            stars: 5,
            logo: '/images/testimonies/home/rocabike.jpg',
            company: 'Rocabike',
            description: '“Para ser la primera vez que trabajo con Liderlogo y la experiencia ha resultado excelente.”'
          }, {
            stars: 5,
            logo: '/images/testimonies/home/terra-agro.jpg',
            company: 'Terra Agro',
            description: '“Trabajar con Liderlogo ha sido una experiencia muy buena.”'
          }, {
            stars: 5,
            logo: '/images/testimonies/home/rodriago.jpg',
            company: 'Rodriago SRL Transporte Internacional',
            description: '“Son muy dedicados y preocupados en cumplir su trabajo solicitado hasta el final.” '
          }, {
            stars: 5,
            logo: '/images/testimonies/home/bichitos.jpg',
            company: 'Bichitos Kids',
            description: '“Es la segunda vez que me hacen un logo y estoy super contenta.”'
          }, {
            stars: 5,
            logo: '/images/testimonies/folletos/56.-compubot -min.jpg',
            company: 'Compublot',
            description: '“Los diseños han tenido mucho éxito, era lo que esperábamos.”'
          }, {
            stars: 5,
            logo: '/images/testimonies/folletos/costaserveis-testimonio.jpg',
            company: 'Costaserveis',
            description: '“Su trabajo ha sido muy bueno y las implentaciones aun mejores, estamos realmente conformes.”'
          }, {
            stars: 5,
            logo: '/images/testimonies/folletos/la gateada - flyer -testimonio.jpg',
            company: 'La Gateada',
            description: '“Mi experiencia fue muy positiva. Trabajan con mucha responsabilidad y rapidez.”'
          }, {
            stars: 5,
            logo: '/images/testimonies/folletos/la-julia-testimonio.jpg',
            company: 'La Julia',
            description: '“Gracias al equipo por la realización del flyer, el resultado nos encanta! Gran trabajo.”'
          }, {
            stars: 5,
            logo: '/images/testimonies/folletos/talawin - catalogo.jpg',
            company: 'Talawin',
            description: '“Estoy muy contento porque han sido rápidos, eficientes y sobre todo profesionales. Dieron el la tecla con todos mis requerimientos para todos los servicios que he contratado.”'
          }, {
            stars: 5,
            logo: '/images/testimonies/logo-web/accion-preventiva.jpg',
            company: 'Acción Preventiva',
            description: '“Muy buen servicio y excelente atención”'
          }, {
            stars: 5,
            logo: '/images/testimonies/logo-web/andes.jpg',
            company: 'Andes Facility',
            description: '“Son una empresa responsable y seria que mantiene una relación muy estrecha con el cliente mostrando interés en los proyectos. Ya ha sido cliente en varias oportunidades y me gusta trabajar con su empresa.”'
          }, {
            stars: 5,
            logo: '/images/testimonies/logo-web/olarte.jpg',
            company: 'Olarte Logística',
            description: '“Atención rápida y personalizada.”'
          }, {
            stars: 5,
            logo: '/images/testimonies/logo-web/urano.jpg',
            company: 'Urano Sistema Seguridad',
            description: '“Nos gusta trabajar con Liderlogo por su rapidez, buenos diseños, buena disposición y seriedad, aparte del buen precio.”'
          }, {
            stars: 5,
            logo: '/images/testimonies/web/arquitectura.jpg',
            company: 'Arquitectura Sin Límites',
            description: '“Nuestra experiencia fue excelente!”'
          }, {
            stars: 5,
            logo: '/images/testimonies/web/fauna.jpg',
            company: 'Fauna Doméstica',
            description: '“Profesionales 100%, como siempre.”'
          }, {
            stars: 5,
            logo: '/images/testimonies/web/proyecta.jpg',
            company: 'Proyecta Telecom',
            description: '“La atención personalizada por parte del equipo ha sido muy buena, así como la implicación en el proyecto.”'
          }, {
            stars: 5,
            logo: '/images/testimonies/perfil-redes/mabisat.jpg',
            company: 'Mabisat',
            description: '“Nos ha gustado el trato personal cualificado, la rapidez de los diseños y la calidad de éstos.”'
          }, {
            stars: 5,
            logo: '/images/testimonies/perfil-redes/el-arenon.jpg',
            company: 'Granja El Arenón',
            description: '“Muy buena experiencia. Seguro que realizo más trabajos con vosotros, entendéis lo que el cliente busca.”'
          }, {
            stars: 5,
            logo: '/images/testimonies/perfil-redes/lagrap.jpg',
            company: 'Lagrap',
            description: '“Magnifica experiencia, super recomendables y espero hacer muchos proyectos con ustedes.”'
          }, {
            stars: 5,
            logo: '/images/testimonies/perfil-redes/nueva-europa.jpg',
            company: 'Nueva Europa',
            description: '“Trato muy cercano, fácil y rápido.”'
          }, {
            stars: 5,
            logo: '/images/testimonies/folletos/56.-compubot -min.jpg',
            company: 'Compublot',
            description: '“Los diseños han tenido mucho éxito, era lo que esperábamos.”'
          }, {
            stars: 5,
            logo: '/images/testimonies/folletos/costaserveis-testimonio.jpg',
            company: 'Costaserveis',
            description: '“Su trabajo ha sido muy bueno y las implentaciones aun mejores, estamos realmente conformes.”'
          }, {
            stars: 5,
            logo: '/images/testimonies/folletos/la gateada - flyer -testimonio.jpg',
            company: 'La Gateada',
            description: '“Mi experiencia fue muy positiva. Trabajan con mucha responsabilidad y rapidez.”'
          }, {
            stars: 5,
            logo: '/images/testimonies/folletos/la-julia-testimonio.jpg',
            company: 'La Julia',
            description: '“Gracias al equipo por la realización del flyer, el resultado nos encanta! Gran trabajo.”'
          }, {
            stars: 5,
            logo: '/images/testimonies/folletos/talawin - catalogo.jpg',
            company: 'Talawin',
            description: '“Estoy muy contento porque han sido rápidos, eficientes y sobre todo profesionales. Dieron el la tecla con todos mis requerimientos para todos los servicios que he contratado.”'
          }, {
            stars: 5,
            logo: '/images/testimonies/pack-identidad/baliguors.jpg',
            company: 'Baliquors',
            description: '“Excelente trabajo el de Liderlogo. Comprendieron rápidamente lo que estábamos buscando. Proceso sencillo, expeditivo y eficiente. Muchas gracias!”'
          }, {
            stars: 5,
            logo: '/images/testimonies/pack-identidad/cita-cafe.jpg',
            company: 'Citta Café',
            description: '“La imagen cumplió con las características que amerita nuestro negocio y superó nuestras expectativas.”'
          }, {
            stars: 5,
            logo: '/images/testimonies/pack-identidad/seteg.jpg',
            company: 'Seteg',
            description: '“He tenido muy buena experiencia con Liderlogo. La relación calidad-precio es excelente. Trato personalizado, profesionalidad total.”'
          }, {
            stars: 5,
            logo: '/images/testimonies/pack-identidad/finanpay.jpg',
            company: 'Finanpay',
            description: '“Hicieron lo suyo, nuestro proyecto, y están muy encima de ello.”'
          }, {
            stars: 5,
            logo: '/images/testimonies/logo/sanidae.jpg',
            company: 'SANIDAE',
            description: '“En nombre de nuestro equipo queremos agradeceros vuestro magnífico trabajo.Si seguís así seguro que se os augura un gran futuro profesional. Muy agradecido.”'
          }, {
            stars: 5,
            logo: '/images/testimonies/logo/hispanoamericana.jpg',
            company: 'Hispanamericana',
            description: '“Nuestra experiencia fue muy buena, un excelente trato y atención personalizada.”'
          }, {
            stars: 5,
            logo: '/images/testimonies/logo/malarrasa.jpg',
            company: 'Malarrassa',
            description: '“Hemos repetido con su empresa porque nos han presentados trabajos que realmente representan a las marcas y lo hacen de forma rápida, por lo que estamos muy contentos.”'
          }, {
            stars: 5,
            logo: '/images/testimonies/logo/wellcan.jpg',
            company: 'Wellcan',
            description: '“Estoy muy contenta por la libertar y seguridad que da su trabajo por no tener límite en los bocetos ni en el tiempo para el desarrollo del diseño. Elegimos algo mejor de lo que buscábamos como idea previa.”'
          }, {
            stars: 5,
            logo: '/images/testimonies/logo/la-casa-de-ketty.jpg',
            company: 'La Casa de Ketty',
            description: '“Es el segundo diseño que realizo con ustedes, los volvería a elejir para nuevos proyectos.”'
          }, {
            stars: 5,
            logo: '/images/testimonies/logo/amo.jpg',
            company: 'Amo',
            description: '“El proceso a sido muy rápido y con resultado esperado.”'
          }, {
            stars: 5,
            logo: '/images/testimonies/logo/camaleon.jpg',
            company: 'Camaleón',
            description: '“Hicimos muchos proyectos con su empresa, estamos contentos con los resultados.”'
          }, {
            stars: 5,
            logo: '/images/testimonies/logo/oceanrov.jpg',
            company: 'OceanRov',
            description: '“He quedado muy conforme porque el proceso ha sido muy efectivo; mejor servicio en menor tiempo. Las personas que ven nuestro logo quedan encantadas con el mismo. Pensaría en su empresa para realizar nuevos diseños.”'
          }, {
            stars: 5,
            logo: '/images/testimonies/logo/torneleria-madrilena.jpg',
            company: 'Tonelería Madrileña',
            description: '“Muy profesionales, competentes y rápidos.”'
          }, {
            stars: 5,
            logo: '/images/testimonies/rotulos/ejemplo-etiqueta-lormanic.jpg',
            company: 'Lormanic',
            description: '“Nuestra empresa está muy agradecida con Liderlogo por su compromiso y resultado final.”'
          }, {
            stars: 5,
            logo: '/images/testimonies/rotulos/ejemplo-rotulo-vehicular-geoit.jpg',
            company: 'Geoit',
            description: '“He quedado muy satisfecho con su trabajo, realmente diseñaron mi rótulo tal cual lo pedí y en los tiempos acordados; gracias por su profesionalismo y paciencia.”'
          }, {
            stars: 5,
            logo: '/images/testimonies/rotulos/biokima - rotulo camioneta.jpg',
            company: 'Biokima',
            description: '“Perfecta experiencia, cumpliendo todas las expectativas.”'
          }, {
            stars: 5,
            logo: '/images/testimonies/rotulos/selpak - rotulo etiqueta.jpg',
            company: 'Selpak',
            description: 'Tengo el agrado de decir que es una empresa seria y responsable. Me gustó mucho el trabajo (diseño) y la amabilidad de todos sus departamentos que me tocó dialogar. Estoy muy convencido de que la empresa se interesa para poder entregar un buen servicio. Aprovecho de felicitar a sus trabajadores por la dedicación a la empresa.”'
          }, {
            stars: 5,
            logo: '/images/testimonies/rotulos/ejemplo-rotulo-local-liderplan.jpg',
            company: 'Liderplan',
            description: '“Los rótulos para mi empresa resultaron muy llamativos y le añadió atractivo a mi local. Felicidades por su trabajo.”'
          }
        ]
      }
    }
  }
</script>

<style>
 .p-testimony-logo{ 
   height: 200px;
 }
 .responsive-video{
   width: 100%;
 }
 @media (min-width: 320px) and (max-width: 980px) {
    .p-testimony-logo{ 
      height: auto;
      display: block;
      margin: auto;
      width: 80%;
    }
    .responsive-video{
      width: 90%;
      margin: auto;
      display: block;
    }
    .mb-xs-3{
      margin-bottom: 20px !important;
    }
    .pr-xs-0{
      padding-right: 0 !important;
    }
  }
</style>