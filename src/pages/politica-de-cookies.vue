<template>
  <section>
    <v-container fluid grid-list-md class="mt-5">
      <v-layout row wrap>
        <v-flex xs12 offset-md1 md10 class="mb-5">
          <v-layout row wrap>
            <v-flex xs12>
              <AppHeading number="2" title="POLÍTICA DE COOKIES" size="display-1" align="center" class="mt-5 mb-5"/>

              <p class="text-xs-justify" style="font-weight: 400;">
                Una cookie es un pequeño fichero de texto que se almacena en su navegador cuando visita casi cualquier página web. Su utilidad es que la web sea capaz de recordar su visita cuando vuelva a navegar por esa página. Las cookies suelen almacenar información de carácter técnico, preferencias personales, personalización de contenidos, estadísticas de uso, enlaces a redes sociales, acceso a cuentas de usuario, etc. El objetivo de la cookie es adaptar el contenido de la web a su perfil y necesidades, sin cookies los servicios ofrecidos por cualquier página se verían mermados notablemente. Si desea consultar más información sobre qué son las cookies, qué almacenan, cómo eliminarlas, desactivarlas, etc., le rogamos se dirija a este enlace.
              </p>

              <p class="text-xs-justify" style="font-weight: 600; margin-top: 40px;     color: #004D7B !important;">
                Cookies utilizadas en este sitio web
              </p>
              <p class="text-xs-justify" style="font-weight: 400;">
                Siguiendo las directrices de la Agencia Española de Protección de Datos procedemos a detallar el uso de cookies que hace esta web con el fin de informarle con la máxima exactitud posible.

                <br><br>
                Este sitio web utiliza las siguientes <b>cookies propias</b>
                <br><br>
                <ul>
                  <li>
                    Cookies de sesión, para garantizar que los usuarios que escriban comentarios en el blog sean humanos y no aplicaciones automatizadas. De esta forma se combate el spam.
                  </li>
                </ul>

                <br><br>
                Este sitio web utiliza las siguientes <b>cookies de terceros:</b>
                <br><br>
                <ul>
                  <li>
                    Google Analytics: Almacena cookies para poder elaborar estadísticas sobre el tráfico y volumen de visitas de esta web. Al utilizar este sitio web está consintiendo el tratamiento de información acerca de usted por Google. Por tanto, el ejercicio de cualquier derecho en este sentido deberá hacerlo comunicando directamente con Google.
                  </li>
                  <li>
                    Redes sociales: Cada red social utiliza sus propias cookies para que usted pueda pinchar en botones del tipo Me gusta o Compartir.
                  </li>
                </ul>
              </p>

              <p class="text-xs-justify" style="font-weight: 600; margin-top: 40px;     color: #004D7B !important;">
                Desactivación o eliminación de cookies
              </p>
              <p class="text-xs-justify" style="font-weight: 400;">
                En cualquier momento podrá ejercer su derecho de desactivación o eliminación de cookies de este sitio web. Estas acciones se realizan de forma diferente en función del navegador que esté usando. <a style=" color:#1976d2;" @click="$router.push('/mas-informacion-de-las-cookies/#navegadores')">Aquí le dejamos una guía rápida para los navegadores más populares.</a>
              </p>


              <p class="text-xs-justify" style="font-weight: 600; margin-top: 40px;     color: #004D7B !important;">
                Notas adicionales
              </p>
              <p class="text-xs-justify" style="font-weight: 400;">
                <ul>
                  <li>
                    Ni esta web ni sus representantes legales se hacen responsables ni del contenido ni de la veracidad de las políticas de privacidad que puedan tener los terceros mencionados en esta política de cookies.
                  </li>
                  <li>
                    Los navegadores web son las herramientas encargadas de almacenar las cookies y desde este lugar debe efectuar su derecho a eliminación o desactivación de las mismas. Ni esta web ni sus representantes legales pueden garantizar la correcta o incorrecta manipulación de las cookies por parte de los mencionados navegadores.
                  </li>
                  <li>
                    En algunos casos es necesario instalar cookies para que el navegador no olvide su decisión de no aceptación de las mismas.
                  </li>
                  <li>
                    En el caso de las cookies de Google Analytics, esta empresa almacena las cookies en servidores ubicados en Estados Unidos y se compromete a no compartirla con terceros, excepto en los casos en los que sea necesario para el funcionamiento del sistema o cuando la ley obligue a tal efecto. Según Google no guarda su dirección IP. Google Inc. es una compañía adherida al Acuerdo de Puerto Seguro que garantiza que todos los datos transferidos serán tratados con un nivel de protección acorde a la normativa europea. Puede consultar información detallada a este respecto en este enlace. Si desea información sobre el uso que Google da a las cookies le <a href="https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage?hl=es&csw=1" target="_new">adjuntamos este otro enlace.</a>
                  </li>
                  <li>
                    Para cualquier duda o consulta acerca de esta política de cookies no dude en comunicarse con nosotros a través de la sección de contacto.
                  </li>
                </ul>
              </p>
            </v-flex>
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
        titleTemplate: 'Politica de cookies | %s',
        meta: [
          { content: 'noindex', name: 'robots' }
        ]
      }
    },
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