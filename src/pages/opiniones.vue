<template>
  <section class="content">
    <v-container grid-list-md class="mt-5">
      <v-layout row wrap class="mt-5">
        <v-flex xs12 md5 class="pr-5 pr-xs-0">
          <h1 class="display-1 xs-headline mt-5 mb-5 font-weight-bold text-xs-center text-md-left">Nuestros Clientes Hablan por nosotros</h1>
        </v-flex>
        <v-flex xs12 md7>
          <iframe class="responsive-video" height="350px" src="https://www.youtube.com/embed/Ywm1mGab3Kg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </v-flex>
      </v-layout>
      <v-layout row wrap class="mt-5">
        <v-flex xs12 v-for="(testimony, i) in testimonies.slice(0, limit)" :key="i">
          <v-layout row wrap class="mb-xs-3">
            <v-flex xs12 sm4 md3  offset-lg2  @click="testimony.active = !testimony.active">
                  <div v-lazy-container="{ selector: 'img', loading: 'default.jpeg'}">

              <img :alt="'Testimonio ' + testimony.company"  :data-src="testimony.logo"  class="p-testimony-logo ">
                </div>

            </v-flex>

            <v-flex xs12 sm6 md9 lg5 >
              <v-layout class="mt-4"  d-flex justify-center  row >
                <div class="text-xs-center ">
                  <v-rating class="testimony-rating" :value="testimony.stars" readonly></v-rating>
                </div>
              </v-layout>
              <h3 class="subheading font-weight-medium text-xs-center  mt-3 pb-2 " style="color:rgb(151, 147, 147);">
                {{testimony.description}}
              </h3>
              <h3 class="subheading font-weight-medium text-xs-center  mt-0 pb-2 " style="color:rgb(67, 67, 67);">
                {{testimony.company}}
              </h3>
            </v-flex>
          </v-layout>
        </v-flex>
        <!--<v-flex xs12>
          <v-layout align-center justify-center row> 
              <v-btn class="white--text title font-weight-regular" style="background-color:#004777;">
                VER MÁS
              </v-btn>
          </v-layout>
        </v-flex>-->
      </v-layout>
    </v-container>

    <AppHeading v-show="limit === testimonies.length" class="mb-3" number="2" size="display-1" title="¿Qué necesitas crear?" subtitle="Disfruta del diseño perfecto cualquiera sea tu necesidad. Potencia hoy tu negocio." />
    <AppServicesGrid v-show="limit === testimonies.length" color="#F29F01" class="mb-4 pt-0"/>
  </section>
</template>

<script>
  export default {
    mounted: function () {
      if (process.browser) {
        window.onscroll = () => {
          var offsetHeight = document.documentElement.offsetHeight
          var scrollPosition = document.documentElement.scrollTop + window.innerHeight

          // console.log(scrollPosition + 600, offsetHeight)
          var bottomOfWindow = scrollPosition + 600 >= offsetHeight
          // console.log(bottomOfWindow)
          if (bottomOfWindow) {
            if (this.limit !== this.testimonies.length && this.limit + 5 <= this.testimonies.length) {
              this.limit = this.limit + 5
            } else {
              this.limit = this.testimonies.length
            }
          }
        }
      }
    },
    head () {
      return {
        titleTemplate: this.title + ' | %s',
        meta: [
          { property: 'og:title', content: this.title },
          { property: 'og:description', content: this.description },
          { hid: 'description', name: 'description', content: this.description }
        ]
      }
    },
    data () {
      return {
        alt: 'Opiniones de nuestros clientes',
        description: 'Tenemos más de 15 años de experiencia y miles de proyectos culminados, las opiniones de nuestros clientes son nuestro principal aval',
        title: 'Opiniones de nuestros clientes',
        limit: 5,
        testimonies: [
          {
            stars: 5,
            logo: '/images/testimonies/home/hotel-aixo.jpg',
            company: 'Hotel Aixo Suites',
            description: '“La atención de Liderlogo ha sido excelente, lo recomiendo.”'
          }, {
            stars: 4,
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
            stars: 4,
            logo: '/images/testimonies/home/fauna-domestica.jpg',
            company: 'Fauna Doméstica',
            description: '“Profesionales al 100%, como siempre!”'
          },
          {
            stars: 4,
            logo: '/images/testimonies/home/finanpay.jpg',
            company: 'Finanpay',
            description: '“La atención recibida por parte de Liderlogo ha sido excelente. Hicieron lo suyo, nuestro proyecto, y están muy encima de ello.”'
          }, {
            stars: 5,
            logo: '/images/testimonies/home/rocabike.jpg',
            company: 'Rocabike',
            description: '“Para ser la primera vez que trabajo con Liderlogo y la experiencia ha resultado excelente.”'
          }, {
            stars: 3,
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
            logo: '/images/testimonies/generales/Complubot-1.jpg',
            company: 'Compublot',
            description: '“Los diseños han tenido mucho éxito, era lo que esperábamos.”'
          }, {
            stars: 4,
            logo: '/images/testimonies/generales/costaserveis-1.jpg',
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
            logo: '/images/testimonies/perfil-redes/nueva-europa.jpg',
            company: 'Nueva Europa',
            description: '“Trato muy cercano, fácil y rápido.”'
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
            logo: '/images/testimonies/folletos/talawin - catalogo.jpg',
            company: 'Talawin',
            description: '“Estoy muy contento porque han sido rápidos, eficientes y sobre todo profesionales. Dieron el la tecla con todos mis requerimientos para todos los servicios que he contratado.”'
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
            stars: 4,
            logo: '/images/testimonies/web/proyecta.jpg',
            company: 'Proyecta Telecom',
            description: '“La atención personalizada por parte del equipo ha sido muy buena, así como la implicación en el proyecto.”'
          }, {
            stars: 3,
            logo: '/images/testimonies/perfil-redes/mabisat.jpg',
            company: 'Mabisat',
            description: '“Nos ha gustado el trato personal cualificado, la rapidez de los diseños y la calidad de éstos.”'
          }, {
            stars: 5,
            logo: '/images/testimonies/generales/el-arenon-1.jpg',
            company: 'Granja El Arenón',
            description: '“Muy buena experiencia. Seguro que realizo más trabajos con vosotros, entendéis lo que el cliente busca.”'
          }, {
            stars: 5,
            logo: '/images/testimonies/perfil-redes/lagrap.jpg',
            company: 'Lagrap',
            description: '“Magnifica experiencia, super recomendables y espero hacer muchos proyectos con ustedes.”'
          }, {
            stars: 5,
            logo: '/images/testimonies/generales/citta-cafe-1.jpg',
            company: 'Citta Café',
            description: '“La imagen cumplió con las características que amerita nuestro negocio y superó nuestras expectativas.”'
          }, {
            stars: 5,
            logo: '/images/testimonies/pack-identidad/seteg.jpg',
            company: 'Seteg',
            description: '“He tenido muy buena experiencia con Liderlogo. La relación calidad-precio es excelente. Trato personalizado, profesionalidad total.”'
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
            stars: 4,
            logo: '/images/testimonies/logo/amo.jpg',
            company: 'Amo',
            description: '“El proceso a sido muy rápido y con resultado esperado.”'
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
            logo: '/images/testimonies/generales/geoit-1.jpg',
            company: 'Geoit',
            description: '“He quedado muy satisfecho con su trabajo, realmente diseñaron mi rótulo tal cual lo pedí y en los tiempos acordados; gracias por su profesionalismo y paciencia.”'
          }, {
            stars: 5,
            logo: '/images/testimonies/rotulos/biokima - rotulo camioneta.jpg',
            company: 'Biokima',
            description: '“Perfecta experiencia, cumpliendo todas las expectativas.”'
          }, {
            stars: 3,
            logo: '/images/testimonies/rotulos/selpak - rotulo etiqueta.jpg',
            company: 'Selpak',
            description: 'Tengo el agrado de decir que es una empresa seria y responsable. Me gustó mucho el trabajo (diseño) y la amabilidad de todos sus departamentos que me tocó dialogar. Estoy muy convencido de que la empresa se interesa para poder entregar un buen servicio. Aprovecho de felicitar a sus trabajadores por la dedicación a la empresa.”'
          }, {
            stars: 5,
            logo: '/images/testimonies/rotulos/ejemplo-rotulo-local-liderplan.jpg',
            company: 'Liderplan',
            description: '“Los rótulos para mi empresa resultaron muy llamativos y le añadió atractivo a mi local. Felicidades por su trabajo.”'
          },
          {
            stars: 5,
            logo: '/images/testimonies/generales/2U-ibiza-1.jpg',
            company: '2U-ibiza',
            description: '“Ha sido un placer trabajar con profesionales que han respondido a todas mis inquietudes siempre de forma rápida y efectiva, llamándome todas las veces que lo necesité y guiándome para logar un excelente resultado final. Sin dudas recomiendo el servicio.”'
          },
          {
            stars: 5,
            logo: '/images/testimonies/generales/6s-1.jpg',
            company: '6s Ropa Laboral',
            description: '“Todo el proceso ha sido realemente muy bueno, así como el diseño final. ”'
          },
          {
            stars: 4,
            logo: '/images/testimonies/generales/23-Feb-1.jpg',
            company: 'Transportes 23 de febrero',
            description: '“El diseño está muy bien. Tendría en cuenta a la empresa para hacer un nuevo trabajo.  ”'
          },
          {
            stars: 5,
            logo: '/images/testimonies/generales/accion-preventiva-1.jpg',
            company: 'Acción Preventiva',
            description: '“Muy buen servicio y excelente atención.  ”'
          },
          {
            stars: 5,
            logo: '/images/testimonies/generales/admin-prime-1.jpg',
            company: 'Admin Prime',
            description: '“Hemos podido darle una buena correcta aplicación a la imagen corporativa, estamos conformes con el trabajo realizado.  ”'
          },
          {
            stars: 5,
            logo: '/images/testimonies/generales/aedia-1.jpg',
            company: 'AEDIA',
            description: '“Siempre tenemos en cuenta su empresa para realizar nuestros diseños, estamos muy a gusto.   ”'
          },
          {
            stars: 5,
            logo: '/images/testimonies/generales/agricola-marull-1.jpg',
            company: 'Agricola Marul',
            description: '“Sois rápidos, amables y eficientes. Sus opciones de diseño y la calidad han sido muy buenas. Su velocidad de respuesta altísima, es siempre durante el mismo día y siempre con alguna novedad. El trabajo es muy bueno, los diseños son modernos y se adaptan a la empresa.  ”'
          },
          {
            stars: 5,
            logo: '/images/testimonies/generales/ahl-fenix-1.jpg',
            company: 'AHL Fenix',
            description: '“Todo el proceso fue muy bueno, atendieron a todos los ajustes a realizar y cómo aplicar los diseños. Realmente estoy muy conforme y recomendaría el servicio.  ”'
          },
          {
            stars: 5,
            logo: '/images/testimonies/generales/allclean-1.jpg',
            company: 'Allclean',
            description: '“Estamos muy agradecidos.Estaremos en contacto para futuros pedido de logo. Espero que sigan teniendo éxito con vuestro buen trabajo.  ”'
          },
          {
            stars: 5,
            logo: '/images/testimonies/generales/alta-cordillera-1.jpg',
            company: 'Alta Cordillera',
            description: '“Su trabajo ha sido excelente, me gusta mucho como ha quedado mi diseño.    ”'
          },
          {
            stars: 5,
            logo: '/images/testimonies/generales/amilflor-1.jpg',
            company: 'Amiflor',
            description: '“Me he sentido muy seguro porque no presentan límites en los bocetos a realizar y por la relación estrecha de seguimiento que mantienen mediando el proceso de diseño. Son responsables y serios; me ha gustado mucho trabajando con ustedes. ”'
          },
          {
            stars: 5,
            logo: '/images/testimonies/generales/amo-1.jpg',
            company: 'Amo',
            description: '“El proceso a sido muy rápido y con resultado esperado.  ”'
          },
          {
            stars: 4,
            logo: '/images/testimonies/generales/Andes-facility-1.jpg',
            company: 'Andes Facility',
            description: '“Son una empresa responsable y seria que mantiene una relación muy estrecha con el cliente demostrando interés en los proyectos. Ya ha sido cliente en varias oportunidades y me gusta trabajar con su empresa. ”'
          },
          {
            stars: 5,
            logo: '/images/testimonies/generales/aquafrost-1.jpg',
            company: 'Aquafrost',
            description: '“Estamos muy contentos con el trabajo en general y como ha sido el desarrollo del diseño. Pensaremos en LiderLogo de necesitar nuevos servicios de Diseño.  ”'
          },
          {
            stars: 5,
            logo: '/images/testimonies/generales/arete-1.jpg',
            company: 'Areté Ingeniería',
            description: '“Todo el equipo ha quedado muy feliz porque el diseño superó nuestras expectativas. Durante el proceso siempre han sido muy amables y respondieron a todas las modificaciones que deseamos realizar, siempre sumando valor agregado a nuestras propuestas y sorprendiéndonos.  ”'
          },
          {
            stars: 5,
            logo: '/images/testimonies/generales/asturia-1.jpg',
            company: 'Abogados de Asturias',
            description: '“Han cubierto nuestras expectativas y con lo ofrecido en su página web  ”'
          },
          {
            stars: 5,
            logo: '/images/testimonies/generales/babio-1.jpg',
            company: 'Babío Avogados',
            description: '“El trato recibido fue‘exquisito’, por parte de todo el personal, con una excelente atención y servicio. En cuanto a la relación calidad/precio, por las mismas razones expuestas, pues muy buena.  ”'
          },
          {
            stars: 5,
            logo: '/images/testimonies/generales/baliquors-1.jpg',
            company: 'Baliquors',
            description: '“Excelente trabajo el de Liderlogo. Comprendieron rápidamente lo que estábamos buscando. Proceso sencillo, expeditivo y eficiente. Muchas gracias!  ”'
          },
          {
            stars: 5,
            logo: '/images/testimonies/generales/berenguel-1.jpg',
            company: 'Berenguel López Abogados',
            description: '“El trabajo ha sido correcto, estamos conformes.   ”'
          },
          {
            stars: 5,
            logo: '/images/testimonies/generales/bogalli-1.jpg',
            company: 'BOGALLI',
            description: '“Teníamos otra idea en mente, pero supieron mostrarnos conceptos nuevos que la superaron. Todo salió muy bien.   ”'
          },
          {
            stars: 5,
            logo: '/images/testimonies/generales/camaleon-1.jpg',
            company: 'Camaleón',
            description: '“Hicimos muchos proyectos con su empresa, estamos contentos con los resultados. ”'
          },
          {
            stars: 5,
            logo: '/images/testimonies/generales/casa-brandariz-1.jpg',
            company: 'Casa Brandariz',
            description: '“Estoy conforme con el diseño que han realizado y con las implementaciones que pudieron darle.   ”'
          },
          {
            stars: 5,
            logo: '/images/testimonies/generales/CENPA-1.jpg',
            company: 'Centro de investigación del Pacífico',
            description: '“Todo ha quedado a nuestra satisfacción, y nos hemos sentido muy bien atendidos.    ”'
          },
          {
            stars: 4,
            logo: '/images/testimonies/generales/chollo-play-1.jpg',
            company: 'Chollo Play',
            description: '“Estimados señores, estamos muy satisfechos por el proyecto, la profesionalidad tanto en el diseño como en el proceso ha sido muy correcta. No duden que para próximos. Gracias, de nuevo nos encanta nuestro logotipo.proyectos contaremos con ustedes.  ”'
          },
          {
            stars: 5,
            logo: '/images/testimonies/generales/citrola-group-1.jpg',
            company: 'Citrola Group',
            description: '“La imagen cumplió con las características que amerita nuestro negocio y superó nuestras expectativas.  ”'
          },
          {
            stars: 5,
            logo: '/images/testimonies/generales/clmrisk-1.jpg',
            company: 'Clmrisk',
            description: '“La imagen ha cambiado por completo de manera favorable tal como lo esperaba. Excelente trabajo, siempre a disposición del cliente.  ”'
          },
          {
            stars: 5,
            logo: '/images/testimonies/generales/condal&capital-1.jpg',
            company: 'Condal & Capital Gourmet Experience',
            description: '“El diseño ha resultado muy bien y siempre fueron muy amables. Estoy conforme con el servicio.  ”'
          },
          {
            stars: 5,
            logo: '/images/testimonies/generales/controlcement-1.jpg',
            company: 'Controlcement',
            description: '“De manera rápida y sencilla puede obtener el diseño que necesitaba, estoy conforme.   ”'
          },
          {
            stars: 5,
            logo: '/images/testimonies/generales/Damato-1.jpg',
            company: 'IMPORTADORA DAMATO SRL',
            description: '“Los tendría en cuenta para nuevos proyectos;  porque realmente estoy contento con el trabajo creativo realizado para cubrir la necesidad de mi empresa.   ”'
          },
          {
            stars: 5,
            logo: '/images/testimonies/generales/Dario-fajardo-asoc-1.jpg',
            company: 'Dario Fajardo',
            description: '“La atención fue muy buena y el resultado del diseño es el que esperaba.  ”'
          },
          {
            stars: 3,
            logo: '/images/testimonies/generales/divina-tu-1.jpg',
            company: 'DIVINA TU',
            description: '“De manera muy sencilla han logrado un muy lindo logo, muchas gracias.   ”'
          },
          {
            stars: 5,
            logo: '/images/testimonies/generales/dulcedeli-1.jpg',
            company: 'Dulcedeli',
            description: '“Todo el trabajo ha sido excelente, estoy muy conforme. sin dudas 5 estrellas.  ”'
          },
          {
            stars: 5,
            logo: '/images/testimonies/generales/dulces-detalles-1.jpg',
            company: 'Dulces Detalles',
            description: '“Tanto la atención, como el proceso como el diseño han sido de ensueño. Recomiendo totalmente el servicio.  ”'
          },
          {
            stars: 4,
            logo: '/images/testimonies/generales/ecokly-1.jpg',
            company: 'Ecokly',
            description: '“A nivel servicio han sido muy amables, comprometidos, correctos, rápidos y preocupados. En cuanto al proceso han sido muy profesionales y el resultado ha sido el esperado.  ”'
          },
          {
            stars: 5,
            logo: '/images/testimonies/generales/El-mesto-1.jpg',
            company: 'El Mesto',
            description: '“Hemos quedado plenamente satisfechos con su servicio, así como en su diseño. Diseñan logos con una relación calidad/precio bastante buena y actúan con gran rapidez a los comentarios de los clientes. Muchas gracias.  ”'
          },
          {
            stars: 5,
            logo: '/images/testimonies/generales/emaluglass-1.jpg',
            company: 'EIMALUGLASS',
            description: '“Me gustó mucho el diseño, ha sido una muy buena tarea.   ”'
          },
          {
            stars: 5,
            logo: '/images/testimonies/generales/estudios-bowen-1.jpg',
            company: 'Estudios Bowen',
            description: '“Se ha cumplico con mis requerimeintos, estoy satisfecha.  ”'
          },
          {
            stars: 5,
            logo: '/images/testimonies/generales/fanair-1.jpg',
            company: 'Fanair',
            description: '“Lo que más me ha gustado del servicio es la profesionalidad y el cumplimiento por parte de LiderLogo  ”'
          },
          {
            stars: 5,
            logo: '/images/testimonies/generales/fenix-1.jpg',
            company: 'Fenix Obres i Contrates',
            description: '“El diseño está correcto y se implementó de manera favorable.   ”'
          },
          {
            stars: 5,
            logo: '/images/testimonies/generales/flores-1.jpg',
            company: 'Ferreteria Flores',
            description: '“Todo ha quedado muy bien, estoy conforme.  ”'
          },
          {
            stars: 5,
            logo: '/images/testimonies/generales/Fomento-de-inv-1.jpg',
            company: 'Fomento de Inversiones',
            description: '“Estoy muy conforme con el trabajo final, sobre con el apoyo en desarrollo del diseño por parte del equipo creativo. Suelo recomendar a mis propios clientes sus servicios y por supuesto los tendría en cuenta para un nuevo proyecto.  ”'
          },
          {
            stars: 5,
            logo: '/images/testimonies/generales/gamer-system-canarias-1.jpg',
            company: 'Gamer Systems Canarias',
            description: '“Estoy contenta con la atención recibida, he quedado conforme pero a razón precio lo veo un poco caro teniendo en cuenta la situación de crisis por la que atravesamos  ”'
          },
          {
            stars: 4,
            logo: '/images/testimonies/generales/Garcia-y-choza-1.jpg',
            company: 'Garcia y Choza',
            description: '“Ha sido todo un acierto encontrar a Liderlogo, todo facilidades y una profesionalidad 100% recomendable, volveremos a trabajar juntos.  ”'
          },
          {
            stars: 4,
            logo: '/images/testimonies/generales/gesdupla-1.jpg',
            company: 'Gesdupla',
            description: '“Me gustó la agilidad, flexibilidad, servicio personalizado y gran capacidad de captar las ideas para el desarrollo del diseño. La relación atención/ servicio/ calidad/ precio es buena y razonable  ”'
          },
          {
            stars: 5,
            logo: '/images/testimonies/generales/gladiators-1.jpg',
            company: 'Gladiators Gym',
            description: '“Han atendido a todos los cambios que solicité y además me aconsejaron muy bien para poder implementar a la Imagen corporativa, por lo que estoy muy conforme.  ”'
          },
          {
            stars: 5,
            logo: '/images/testimonies/generales/grupo-solnet-1.jpg',
            company: 'Grupo Solnet',
            description: '“Estoy muy conforme con la atención recibida por parte de Liderlogo, y destacó el envío de diferentes plantillas ”'
          },
          {
            stars: 5,
            logo: '/images/testimonies/generales/habitol-1.jpg',
            company: 'Habitol',
            description: '“El trabajo ha ido muy bien, estamos contentos con el resultado de los dos proyectos que hemos hecho con la empresa.  ”'
          },
          {
            stars: 5,
            logo: '/images/testimonies/generales/hotel-montecarlo-1.jpg',
            company: 'Hotel Montecarlo',
            description: '“Se cumplido el cometido. ”'
          },
          {
            stars: 4,
            logo: '/images/testimonies/generales/hygge-1.jpg',
            company: 'Hygge Cocktail Club',
            description: '“Se cumplido el cometido. ”'
          },
          {
            stars: 5,
            logo: '/images/testimonies/generales/hotel-montecarlo-1.jpg',
            company: 'Hotel Montecarlo',
            description: '“Han sido siempre muy atentos y se ha gestionado todo como esperábamos, estamos contentos con el diseño. ”'
          },
          {
            stars: 5,
            logo: '/images/testimonies/generales/ibinatural-1.jpg',
            company: 'Ibinatural',
            description: '“Ha sido un largo proceso, pero respondieron a todos mis requerimientos y el resultado final ha sido muy bueno.”'
          },
          {
            stars: 5,
            logo: '/images/testimonies/generales/imgenium-1.jpg',
            company: 'Imgenium',
            description: '“Cuando tengo un nuevo proyecto recurro a vosotros, han sabido siempre interpretar y mejorar mis ideas. ”'
          },
          {
            stars: 5,
            logo: '/images/testimonies/generales/granja-doña-b-1.jpg',
            company: 'Inversiones agropecuarias granja doña B',
            description: '“Todo ha ido muy bien, les dos 10 puntos. ”'
          },
          {
            stars: 5,
            logo: '/images/testimonies/generales/jose-luis-berzal-1.jpg',
            company: 'José Luis Berzal',
            description: '“Es el segundo proyecto que hago con la empresa y los tendría en cuenta para un nuevo proyecto. Todo ha sido muy bueno, desde la atención al resultado final. ”'
          },
          {
            stars: 5,
            logo: '/images/testimonies/generales/kafeslito-1.jpg',
            company: 'Kafeslito',
            description: '“Es el segundo diseño que realizó con ustedes, los volvería a elegir para nuevos proyectos. ”'
          },
          {
            stars: 5,
            logo: '/images/testimonies/generales/kristpy-and-glazed-1.jpg',
            company: 'Krispy & Glazed',
            description: '“Me gusta mucho el diseño, ha ido muy bien con la decoración de mi local.  ”'
          },
          {
            stars: 5,
            logo: '/images/testimonies/generales/La-colada-en-casa-1.jpg',
            company: 'La Colada en Casa',
            description: '“Todo a sido muy bueno, fácil y efectivo. Contaremos con su empresa para nuevos proyectos. ”'
          },
          {
            stars: 5,
            logo: '/images/testimonies/generales/la-esperanza-1.jpg',
            company: 'Almazara la Esperanza',
            description: '“Estamos muy conformes con el diseño y agradecidos por todo el trabajo realizado y por el trato, siempre atentos y dispuestos a todo cambio posible.  ”'
          },
          {
            stars: 5,
            logo: '/images/testimonies/generales/legend-dogs-1.jpg',
            company: 'LEGEND DOGS',
            description: '“Todo a salido muy bien. ”'
          },
          {
            stars: 3,
            logo: '/images/testimonies/generales/lucaser-1.jpg',
            company: 'LUCASER SOLUTIONS SL',
            description: '“Nos ha gustado mucho el diseño y además ha sido un proceso muy rápido por lo que estamos muy satisfechos.  ”'
          },
          {
            stars: 5,
            logo: '/images/testimonies/generales/m&p-1.jpg',
            company: 'M&P Inversiones de Capital',
            description: '“Desde el minuto 1 cumplieron con lo establecido y tanto mi socio como yo estamos muy contentos con el resultado. Por supuesto los tendremos en cuenta a la hora de ampliar la marca.  ”'
          },
          {
            stars: 5,
            logo: '/images/testimonies/generales/maquiavelo-1.jpg',
            company: 'Maquiavelo',
            description: '“Realmente estoy muy contento con el trabajo, cumplieron con todos los requisitos y las expectativas que tenía. ”'
          },
          {
            stars: 5,
            logo: '/images/testimonies/generales/maremma+-1.jpg',
            company: 'Maremma',
            description: '“El resultado a sido excelente, el diseño es realmente lo que esperaba. ”'
          },
          {
            stars: 5,
            logo: '/images/testimonies/generales/Matias-gutierrez-1.jpg',
            company: 'Matías Gutiérrez Joyería',
            description: '“Todo a sido muy bueno, cumplieron con lo esperado.”'
          },
          {
            stars: 5,
            logo: '/images/testimonies/generales/micolhome-1.jpg',
            company: 'Micolhome',
            description: '“El resultado final fue lo esperado. ”'
          },
          {
            stars: 4,
            logo: '/images/testimonies/generales/milcom-1.jpg',
            company: 'Milcom Informatics SL',
            description: '“Estamos muy contentos con la atención recibida, la capacidad de entendimiento y resolución de requerimientos específicos, la cantidad y variedad de opciones de diseño, la velocidad de respuesta, la calidad de nuestro trabajo y el coste del proyecto. Gracias. ”'
          },
          {
            stars: 5,
            logo: '/images/testimonies/generales/missxy-1.jpg',
            company: 'Missxy',
            description: '“El diseño es lo que esperaba, ha quedado muy bonito y la entrega fue a tiempo. ”'
          },
          {
            stars: 5,
            logo: '/images/testimonies/generales/movedir-1.jpg',
            company: 'MOVEDIR',
            description: '“Estoy contento con el trabajo final de mis dos empresas, el proceso a sido muy bueno. ”'
          },
          {
            stars: 5,
            logo: '/images/testimonies/generales/myfriednpadellys-1.jpg',
            company: 'MYFRIENDPADELLYS',
            description: '“El cambio en el logo ha sido muy bien aceptado, gusta más que antes y es más visible ya que llama la atención de manera positiva. ”'
          },
          {
            stars: 5,
            logo: '/images/testimonies/generales/ok-pisos-1.jpg',
            company: 'Ok Pisos',
            description: '“A quedado perfecto. Si bien tenía una idea, me han ido guiando para perfeccionarla. El proceso ha sido muy rápido y han atendido a todas mis peticiones de ajustes, por lo que estoy muy satisfecho con el servicio. ”'
          },
          {
            stars: 5,
            logo: '/images/testimonies/generales/omkel-1.jpg',
            company: 'Omkel',
            description: '“Han sabido plasmar a la perfección la idea que tenía, realizando un diseño llamativo y moderno. Por lo que estoy muy conforme con resultado. ”'
          },
          {
            stars: 5,
            logo: '/images/testimonies/generales/ondulats-catalans-1.jpg',
            company: 'ONDULATS CATALANS',
            description: '“He quedado muy contento con el servicio porque me han tenido paciencia en el desarrollo, han hechos todas las modificaciones que pedí y estoy conforme con el diseño final. ”'
          }, {
            stars: 5,
            logo: '/images/testimonies/generales/one-seagate-1.jpg',
            company: 'One Seagate',
            description: '“Estuvo bien el proceso, trabajo satisfactorio. ”'
          }, {
            stars: 4,
            logo: '/images/testimonies/generales/orgui-1.jpg',
            company: 'Orgui',
            description: '“Estoy muy conforme con el servicio, todo el proceso a sido realmente muy bueno. ”'
          }, {
            stars: 5,
            logo: '/images/testimonies/generales/ovisan-1.jpg',
            company: 'Ovisan',
            description: '“Son muy profesionales y rápidos, estoy muy conforme. Es el segundo proyecto que realizó con ustedes y sin duda los tendría en cuenta para uno próximo. ”'
          }, {
            stars: 5,
            logo: '/images/testimonies/generales/pilar-diaz-1.jpg',
            company: 'Pilar Díaz Representaciones',
            description: '“Estoy muy satisfecha tanto por el diseño empleado que me parece muy moderno y original, como por la rápida respuesta. El precio me ha parecido muy acertado. Muchas gracias por todo ”'
          }, {
            stars: 5,
            logo: '/images/testimonies/generales/polipostes-1.jpg',
            company: 'Polipostes',
            description: '“Estoy realmente muy contento de como a sido el servicio y del producto final. Sin dudas es recomendable. ”'
          }, {
            stars: 5,
            logo: '/images/testimonies/generales/puerta-del-sol-1.jpg',
            company: 'Puerta del Sol',
            description: '“He tenido en todo momento un trato agradable y bueno. Tienen un buen equipo y muy competitivo, les doy mi enhorabuena ya que en los tiempos que estamos es difícil encontrar personal cualificado, siéntanse orgullosos porque ustedes lo tienen. Contare con Liderlogo para futuros proyectos. ”'
          }, {
            stars: 5,
            logo: '/images/testimonies/generales/punto-smart-1.jpg',
            company: 'Punto Smart',
            description: '“El diseño realmente me ha encantado, supieron plasmar mi idea de la mejor manera. Ya los he recomendado y lo volvería a hacer. ”'
          }, {
            stars: 5,
            logo: '/images/testimonies/generales/puzzles-1.jpg',
            company: 'Puzzles',
            description: '“Estoy muy agradecida, han superado mis expectativas. Quedo muy feliz con el resultado de todo! ”'
          }, {
            stars: 5,
            logo: '/images/testimonies/generales/rentum-realty-1.jpg',
            company: 'Rentum Realty',
            description: '“Todo ha salido como lo acordamos, en efecto estoy muy conforme.  ”'
          }, {
            stars: 5,
            logo: '/images/testimonies/generales/RMM-1.jpg',
            company: 'RMM',
            description: '“Trato excelente y profesional con seguimiento hasta el final del proyecto. ”'
          }, {
            stars: 5,
            logo: '/images/testimonies/generales/Royal-Homes-1.jpg',
            company: 'Royal Homes',
            description: '“Ha sido muy buena experiencia, cumpliendo mis expectativas. ”'
          }, {
            stars: 4,
            logo: '/images/testimonies/generales/Sanvort-1.jpg',
            company: 'SANVORT',
            description: '“Muy buena atencion, rapida y a pesar de que fuimos muy exigentes con las modificaciones solicitadas, siempre la atención fue excelente!!! Muchas gracias. ”'
          }, {
            stars: 5,
            logo: '/images/testimonies/generales/TCI-1.jpg',
            company: 'TCI',
            description: '“Altamente eficaces, respondieron a nuestras necesidades ”'
          }, {
            stars: 4,
            logo: '/images/testimonies/generales/sistole-1.jpg',
            company: 'Sístole',
            description: '“Rescato mucho el feedback que tienen con el cliente, así como también la paciencia y tolerancia a la hora de atender a las especificaciones de diseño. El resultado ha sido óptimo, cumpliendo con lo solicitado. ”'
          }, {
            stars: 5,
            logo: '/images/testimonies/generales/TEcnibi-1.jpg',
            company: 'Tecnibi',
            description: '“Siempre vuelvo a recurrir a vuestra empresa al necesitar un buen diseño, señal de que estoy satisfecho. ”'
          }, {
            stars: 5,
            logo: '/images/testimonies/generales/trastos-1.jpg',
            company: 'TRASTOS ESCUELA INFANTIL',
            description: '“Ha sido una experiencia muy satisfactoria y efectiva llevada a cabo de forma muy rápida. ”'
          }, {
            stars: 5,
            logo: '/images/testimonies/generales/Valkia-1.jpg',
            company: 'Valkia',
            description: '“Estimado Sr. Rodríguez, ante todo permítame expresarle mi felicitación por el excelente trabajo realizado por su empresa en el diseño del trabajo del logo de ‘Valkia Comunicaciones’. Asimismo, le ruego que haga extensiva esta felicitación a las personas que han participado en el Proyecto. ”'
          }, {
            stars: 5,
            logo: '/images/testimonies/generales/Ven-y-veras-1.jpg',
            company: 'Ven y Verás',
            description: '“Mi negocio a quedado muy bien gracias a su diseño, estoy muy contento. ”'
          }, {
            stars: 5,
            logo: '/images/testimonies/generales/Vidafont-1.jpg',
            company: 'Vidafont',
            description: '“En relación a su solicitud, comentarle que no tengo ninguna queja por el trato recibido, todo lo contrario. En general estoy contento y satisfecho con todo. ”'
          }, {
            stars: 5,
            logo: '/images/testimonies/generales/Villora-1.jpg',
            company: 'Villora Sound',
            description: '“Los diseños han estado muy bien y bastante rápidos. Atendieron a todas mis modificaciones y siempre la mejor atención. ”'
          }, {
            stars: 5,
            logo: '/images/testimonies/generales/vital-herb-1.jpg',
            company: 'Vital Herbolarios',
            description: '“Ha sido excelente trabajar con ustedes! ”'
          }, {
            stars: 4,
            logo: '/images/testimonies/generales/vivercitrus-1.jpg',
            company: 'VIVERCITRUS',
            description: '“Estoy muy conforme con el trabajo, la atención y el seguimiento. Ya es el segundo proyecto que hago y siempre pienso en su empresa cuando me surge uno nuevo. ”'
          }, {
            stars: 5,
            logo: '/images/testimonies/generales/teldental-1.jpg',
            company: 'Clinica Teldental',
            description: '“Estoy muy conforme porque atendieron a mis necesidades y pude darle utilidad a las piezas que me sugirieron. ”'
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

  @media (min-width: 1900px){
    .center-lg-start{
      justify-items: start
    }
  }
</style>