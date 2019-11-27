import Vue from 'vue'
import axios from 'axios'
const vueInstance = new Vue()

export const state = () => ({
  data: {
    service: {
      id: null,
      name: null,
      slug: null
    },
    designs: [],
    styles: {},
    colors: [],
    information: {}
  },
  activeStep: 1,
  steps: {
    designs: {
      number: 1,
      next: 'estilos',
      title: '¿Qué diseños te gustan?',
      subtitle: 'Comencemos ayudando a los diseñadores a entender qué estilos prefieres.',
      label: 'Diseños que te gustan'
    },
    styles: {
      prev: 'disenos',
      number: 2,
      next: 'colores',
      title: 'El estilo de tu ',
      subtitle: 'Escoge entre los siguientes estilos para tu proyecto.',
      label: 'Su estilo de marca'
    },
    colors: {
      prev: 'estilos',
      number: 3,
      next: 'informacion',
      title: 'Colores a explorar',
      subtitle: 'Selecciona tres colores a ser explorados por los diseñadores.',
      label: 'Colores'
    },
    information: {
      prev: 'colores',
      number: 4,
      next: 'pago',
      title: 'Briefing',
      subtitle: 'Completa el briefing para que los diseñadores sepan qué estás buscando.',
      label: 'Su brief de diseño'
    },
    pay: {
      prev: 'informacion',
      number: 5,
      title: 'Pago',
      subtitle: 'Completas tus detalles, realiza el pago y nos pondremos manos a la obra.',
      label: 'Método de Pago'
    }
  },
  forms: {
    'logo-empresa': [
      { label: '¿Qué nombre deseas colocar en tu logo?', type: 'text', name: 'logo_name' },
      { label: '¿Tienes un eslogan que deseas agregar en el logo?', type: 'text', name: 'logo_slogan' },
      { label: 'Háblanos de tu negocio: ¿a qué se dedica tu empresa?, ¿quiénes son tus clientes?, ¿cuáles son tus productos y/o servicios?, ¿quiénes son tus competidores?, ¿en qué te diferencias de ellos?', type: 'textarea', name: 'logo_about_us' },
      { label: '¿Qué preferencias e ideas previas tienes para el diseño de tu logo?', type: 'textarea', name: 'logo_preferences_design' },
      { label: '¿Dónde más usarás tu logo?', type: 'checkbox', name: 'logo_applications', options: ['Papelería, Merchandising', 'Folletos', 'Rótulos, Locales, Vehículos, Uniformes', 'Sitio Web', 'Redes Sociales'] },
      { label: '¿Tienes imágenes, bocetos o documentos que puedan ser de ayuda? Por ejemplo, tu logo actual, fotos, ilustraciones, contenido, ideas de diseño, etc.', type: 'file', name: 'logo_files' }
    ],
    'rediseno-de-logo': [
      'logo-empresa'
    ],
    'imagen-corporativa': [
      'logo-empresa',
      'papeleria'
    ],
    'pagina-web': [
      { label: 'Háblanos de tu negocio: ¿a qué se dedica tu empresa?, ¿quiénes son tus clientes?, ¿cuáles son tus productos y/o servicios?, ¿quiénes son tus competidores?, ¿en qué te diferencias de ellos?', type: 'textarea', name: 'website_about_us' },
      { label: 'Si ya cuentas con un sitio web, por favor indícanos cuál es', type: 'text', name: 'website_oldsite' },
      { label: 'Describe cada página o sector de tu sitio web y lo que deseas comunicar en cada una de ellas. Si aún no dispones de esta información podrás hacernosla llegar luego.', type: 'textarea', name: 'website_description' },
      { label: '¿Qué preferencias o ideas previas tienes para el diseño de tu sitio web? Si tienes algún ejemplo puede copiarlo aquí:', type: 'textarea', name: 'website_preferences' },
      { label: '¿Tienes o deseas disponer de redes sociales para colocar en tu sitio web?, ¿cuáles?', type: 'checkbox', name: 'website_social_accounts', options: ['Facebook ', 'Twitter', 'Instagram', 'Google+', 'Youtube', 'Linkedin', 'Flicker', 'Pinterest', 'Otras'] },
      { label: '¿Tienes bocetos, ideas previas u otros documentos que puedan ayudar en tu proyecto?', type: 'file', name: 'website_files' }
    ],
    'logo-y-pagina-web': [
      { label: '¿Qué nombre deseas colocar en tu logo?', type: 'text', name: 'logo_name' },
      { label: '¿Tienes un eslogan que deseas agregar en el logo?', type: 'text', name: 'logo_slogan' },
      { label: 'Háblanos de tu negocio: ¿a qué se dedica tu empresa?, ¿quiénes son tus clientes?, ¿cuáles son tus productos y/o servicios?, ¿quiénes son tus competidores?, ¿en qué te diferencias de ellos?', type: 'textarea', name: 'logo_about_us' },
      { label: '¿Qué preferencias e ideas previas tienes para el diseño de tu logo?', type: 'textarea', name: 'logo_preferences_design' },
      { label: '¿Dónde más usarás tu logo?', type: 'checkbox', name: 'logo_applications', options: ['Papelería, Merchandising', 'Folletos', 'Rótulos, Locales, Vehículos, Uniformes', 'Sitio Web', 'Redes Sociales'] },
      { label: '¿Tienes imágenes, bocetos o documentos que puedan ser de ayuda? Por ejemplo, tu logo actual, fotos, ilustraciones, contenido, ideas de diseño, etc.', type: 'file', name: 'logo_files' },
      { label: 'Si ya cuentas un sitio web, por favor indícanos ¿Cuál es?', type: 'text', name: 'website_oldsite' },
      { label: 'Describe cada página o sector de tu sitio web y lo que deseas comunicar en cada una', type: 'textarea', name: 'website_description' },
      { label: '¿Qué preferencias o ideas previas tienes para el diseño de tu sitio web? Si tienes algún ejemplo puede copiarlo aquí:', type: 'textarea', name: 'website_preferences' },
      { label: '¿Tienes redes sociales para colocar en tu sitio web? ¿Cuáles?', type: 'checkbox', name: 'website_social_accounts', options: ['Facebook ', 'Twitter', 'Instagram', 'Google+', 'Youtube', 'Linkedin', 'Flicker', 'Pinterest', 'Otras'] },
      { label: '¿Tienes bocetos, ideas previas u otros documentos que puedan ayudar en tu proyecto?', type: 'file', name: 'website_files' }
    ],
    'rotulo': [
      { label: 'Háblanos de tu negocio: ¿a qué se dedica tu empresa?, ¿quiénes son tus clientes?, ¿cuáles son tus productos y/o servicios?, ¿quiénes son tus competidores?, ¿en qué te diferencias de ellos?', type: 'textarea', name: 'rolls_about_us' },
      { label: '¿Qué preferencias e ideas previas tienes para el diseño de tu rótulo?', type: 'text', name: 'rolls_preferences' },
      { label: 'Por favor indícanos las medidas de tu rótulo', type: 'text', name: 'rolls_size' },
      { label: '¿Qué información y elemento desea colocar en tu rótulo?', type: 'text', name: 'rolls_content' },
      { label: '¿Tienes bocetos, ideas previas u otros documentos que puedan ayudar en tu proyecto? ', type: 'file', name: 'rolls_files' }
    ],
    'rotulo-vehicular': ['rotulo'],
    'rotulo-local': ['rotulo'],
    'rotulo-banner': ['rotulo'],
    'packaging': ['rotulo'],
    'rotulo-vestimenta-uniforme': ['rotulo'],
    'rotulo-furgoneta-camion': ['rotulo'],
    'diseno-folletos-dipticos-tripticos': [
      { label: 'Háblanos de tu negocio: ¿a qué se dedica tu empresa?, ¿quiénes son tus clientes?, ¿cuáles son tus productos y/o servicios?, ¿quiénes son tus competidores?, ¿en qué te diferencias de ellos?', type: 'textarea', name: 'brochures_about_us' },
      { label: 'Describe los resultados que deseas obtener en tu diptico:', type: 'textarea', name: 'brochures_results' },
      { label: '¿Qué información deseas incluir?', type: 'textarea', name: 'brochures_content' },
      { label: '¿Tienes bocetos, ideas previas u otros documentos que puedan ayudar en tu proyecto?', type: 'file', name: 'brochures_files' }
    ],
    'flyer': [
      { label: 'Háblanos de tu negocio: ¿a qué se dedica tu empresa?, ¿quiénes son tus clientes?, ¿cuáles son tus productos y/o servicios?, ¿quiénes son tus competidores?, ¿en qué te diferencias de ellos?', type: 'textarea', name: 'brochures_about_us' },
      { label: 'Describe los resultados que deseas obtener en tu flyer:', type: 'textarea', name: 'brochures_results' },
      { label: '¿Qué información deseas incluir?', type: 'textarea', name: 'brochures_content' },
      { label: '¿Tienes bocetos, ideas previas u otros documentos que puedan ayudar en tu proyecto?', type: 'file', name: 'brochures_files' }
    ],
    'flyer-dos-caras': [
      { label: 'Háblanos de tu negocio: ¿a qué se dedica tu empresa?, ¿quiénes son tus clientes?, ¿cuáles son tus productos y/o servicios?, ¿quiénes son tus competidores?, ¿en qué te diferencias de ellos?', type: 'textarea', name: 'brochures_about_us' },
      { label: 'Describe los resultados que deseas obtener en tu flyer:', type: 'textarea', name: 'brochures_results' },
      { label: '¿Qué información deseas incluir?', type: 'textarea', name: 'brochures_content' },
      { label: '¿Tienes bocetos, ideas previas u otros documentos que puedan ayudar en tu proyecto?', type: 'file', name: 'brochures_files' }
    ],
    'diptico': ['diseno-folletos-dipticos-tripticos'],
    'tripticos': [
      { label: 'Háblanos de tu negocio: ¿a qué se dedica tu empresa?, ¿quiénes son tus clientes?, ¿cuáles son tus productos y/o servicios?, ¿quiénes son tus competidores?, ¿en qué te diferencias de ellos?', type: 'textarea', name: 'brochures_about_us' },
      { label: 'Describe los resultados que deseas obtener en tus tripticos:', type: 'textarea', name: 'brochures_results' },
      { label: '¿Qué información desea incluir?', type: 'textarea', name: 'brochures_content' },
      { label: '¿Tiene bocetos, ideas previas u otros documentos que puedan ayudar a su proyecto? ', type: 'file', name: 'brochures_files' }
    ],
    'catalogo': [
      { label: 'Háblenos de su negocio, ¿A qué se dedica su Empresa? ¿Quiénes son sus clientes? ¿Cuáles son sus productos y/o servicios?', type: 'textarea', name: 'brochures_about_us' },
      { label: 'Describa los resultados que desea obtener de su catalogo:', type: 'textarea', name: 'brochures_results' },
      { label: 'Cuantas hojas adicionales requiere:', hint: 'El servicio cuenta con 4 paginas, cada paginal adicional es un monto separado.', type: 'number', name: 'catalogue_pages' },
      { label: '¿Qué información desea incluir?', type: 'textarea', name: 'brochures_content' },
      { label: '¿Tiene bocetos, ideas previas u otros documentos que puedan ayudar a su proyecto? ', type: 'file', name: 'brochures_files' }
    ],
    'publicidad': [
      { label: 'Háblenos de su negocio, ¿A qué se dedica su Empresa? ¿Quiénes son sus clientes? ¿Cuáles son sus productos y/o servicios?', type: 'textarea', name: 'brochures_about_us' },
      { label: 'Describa los resultados que desea obtener de su publicidad:', type: 'textarea', name: 'brochures_results' },
      { label: '¿Qué información desea incluir?', type: 'textarea', name: 'brochures_content' },
      { label: '¿Tiene bocetos, ideas previas u otros documentos que puedan ayudar a su proyecto? ', type: 'file', name: 'brochures_files' }
    ],
    'perfil-redes-sociales': [
      { label: 'Háblenos de su negocio, ¿A qué se dedica su Empresa? ¿Quiénes son sus clientes? ¿Cuáles son sus productos y/o servicios?', type: 'textarea', name: 'social_profiles_about_us' },
      { label: '¿En qué red social desea aplicar el diseño de su perfil?', type: 'checkbox', name: 'social_profiles_accounts', options: ['Facebook ', 'Twitter', 'Instagram', 'Google+', 'Youtube', 'Linkedin', 'Flicker', 'Pinterest', 'Otras'] },
      { label: '¿Tiene su logotipo y alguna imagen que le agrada como fondo de portada? ¿O algún ejemplo que le agrade?', type: 'file', name: 'social_profiles_files' }
    ],
    'vectorizacion': [
      { label: 'Adjunte el archivo que desea digitalizar:', type: 'file', name: 'vectorization_files' },
      { label: '¿Dónde más usará su Logo?', type: 'checkbox', name: 'vectorization_aplications', options: ['Papeleria, Merchandising', 'Folletos', 'Rótulos, Locales, Vehículos, Uniformes', 'Sitio Web', 'Redes Sociales'] },
      { type: 'any' }
    ],
    'papeleria': [
      {
        label: 'Escoge cuáles son sus 6 piezas de papelería, merchandising y redes sociales que deseas para tu proyecto.', type: 'select_tags', name: 'stationery_pieces', options: ['Block de notas 11 X 14, 2 CM', 'Bono o Vale', 'Caratula CD(cuadrado) 12cm x 12cm', 'Carpeta A4', 'Credenciales 9x 5cm', 'Diploma', 'Firma de email', 'Fondo de Email(Solo válido para Microsoft Outlook)', 'Fondo de escritorio(Especificar resolución pixel)', 'Hoja Albarán A4(A4 – A5 – Carta)', 'Hoja Carta(A4 – Carta)', 'Hoja Factura(A4 – A5 – Carta)', 'Hoja Presupuesto(A4 – Carta)', 'Hoja Fax(A4 – Carta)', 'Hoja de Presentación Power Point', 'Señalador 7 X 29 CM', 'Etiqueta CD(circular) 12cm x 12cm', 'Recetario(A4 – A5 – Carta)', 'Sello(logo ó logo y datos)', 'Separadores(A4 – Carta)', 'Sobre americano(con ventana ó sin ventana)', 'Sobre A4(Horizontal ó Vertical)', 'Talonario', 'Talonarios(A4 – A5 – Carta)', 'Tarjeta de crédito', 'Tarjeta de cita', 'Tarjeta de invitación', 'Tarjeta de regalo', 'Tarjeta de visita(Horizontal ó Vertical)', 'Tarjetón A5Tickets', 'Facebook', 'Taza', 'Twitter', 'Instagram', 'Bolígrafo', 'Bolsa(Determinar medida)', 'Etiqueta 9 X 5', 'Etiqueta cierre bolsa', 'GorroImán 9 X 5', 'Libreta', 'Manteles individuales', 'Pad mouse', 'Paraguas', 'Pegatina coche', 'Pen Drive', 'Posa Vasos', 'Reloj']
      }
    ],
    'desarrollo-de-app': [
      { label: 'Háblenos de su negocio, ¿A qué se dedica su Empresa? ¿Quiénes son sus clientes? ¿Cuáles son sus productos y/o servicios?', type: 'textarea', name: 'app_about_us' },
      { label: '¿Qué tipo de app necesita?', type: 'checkbox', name: 'app_type', options: ['Android', 'Ios', 'Android + Ios'] },
      { label: '¿Qué diseño quieres que tenga su App?', type: 'checkbox', name: 'app_design', options: ['Interfaz sencilla', 'Interfaz personalizada ', 'Interfaz replicada de la web'] },
      { label: '¿Su App necesita un sistema de login?', type: 'checkbox', name: 'app_login', options: ['Si, con redes sociales', 'Si, con email', 'No', 'No lo sé todavía'] },
      { label: '¿Su App tiene que estar integrada con un sitio web?', type: 'checkbox', name: 'app_integrate', options: ['Si', 'No', 'No lo sé'] },
      { label: '¿Los usuarios tienen sus propios perfiles / cuentas?', type: 'checkbox', name: 'app_perfil', options: ['Si', 'No', 'No lo sé'] },
      { label: '¿Tu app necesita un panel de administración?', type: 'checkbox', name: 'app_admin', options: ['Si', 'No', 'No lo sé'] },
      { label: '¿Tiene bocetos, ideas previas u otros documentos que puedan ayudar a su proyecto? ', type: 'file', name: 'app_files' },
      { label: '¿Existen aplicaciones con funcionalidades similares a la de su proyecto?', type: 'textarea', name: 'app_similar' },
      { label: 'Describa brevemente las características de su aplicación', type: 'textarea', name: 'app_preferences' }
    ],
    'sitio-web-ecommerce': [
      'pagina-web'
    ],
    'presencia-web': [
      'pagina-web'
    ]
  }
})

export const mutations = {
  SET_DATA (state, data) {
    vueInstance.$storage.set('brief', data)
    state.data = Object.assign(state.data, data)
  },
  SET_STEP (state, data) {
    state.activeStep = data
  }
}

export const getters = {
  getStepByKey: (state) => (key) => {
    let steps = { disenos: 'designs', estilos: 'styles', colores: 'colors', customColors: '', informacion: 'information', pago: 'pay' }
    return state.steps[steps[key]] || {}
  },
  getFormBySlug: (state) => (slug) => {
    var form = state.forms[slug]

    if (form && form.length < 3) {
      var forms = []

      form.forEach(x => {
        forms = forms.concat(state.forms[x])
      })

      return forms
    }

    return form
  }
}

export const actions = {
  setData ({ commit }, data) {
    commit('SET_DATA', data)
  },
  setStep ({ commit }, data) {
    commit('SET_STEP', data)
  },
  async getByID ({ commit }, id) {
    try {
      let brief = await this.$axios.$get('briefs/' + id)
      return brief
    } catch (error) {
      return false
    }
  },
  async storeBrief ({ commit, rootState }) {
    let brief = vueInstance.$storage.get('brief')
    let bodyFormData = new FormData()
    if (rootState.brief.data.information.logo_files) {
      brief.information.logo_files.value = rootState.brief.data.information.logo_files.value
    }

    bodyFormData.append('data', JSON.stringify(brief))
    bodyFormData.append('client', JSON.stringify({
      email: brief.information.email.value,
      name: brief.information.names.value,
      company: brief.information.company.value,
      phone: brief.information.phone.value,
      password: brief.information.phone.value
    }))

    for (let key in brief.information) {
      if (key.includes('files')) {
        if (brief.information[key].value) {
          bodyFormData.append('files', brief.information[key].value)
        }
      }
    }
    let location, saveBrief, token
    const ip = this.$cookies.get('liderlogo_client_ip')

    try {
      location = await axios.get('https://ipapi.co/' + ip + '/json/')

      saveBrief = await this.$axios.$post('briefs', bodyFormData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Location-Name': `${location.data.country}, ${location.data.city}, ${location.data.region}${location.data.postal ? ', CP:' + location.data.postal + ', ' : ', '}${'IP: ' + ip}`
        }
      })
      token = saveBrief.client.token
    } catch (error) {
      return false
    }

    if (token) {
      vueInstance.$cookies.set('token_session', token)
    }

    vueInstance.$storage.set('brief', saveBrief.data)
    vueInstance.$storage.set('brief_key', saveBrief.cookie)
    return true
  }
}
