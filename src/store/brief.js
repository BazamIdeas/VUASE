import Vue from 'vue'
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
      subtitle: 'En base a los diseños que has elegido, estos son los estilos que explorarán los diseñadores. No te preocupes, puedes cambiar de estilos después de empezar a recibir diseños.',
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
      { label: '¿Qué nombre desea colocar en su logo?', type: 'text', name: 'logo_name' },
      { label: '¿Tiene un eslogan que desea colocar en el logotipo?', type: 'text', name: 'logo_slogan' },
      { label: 'Háblenos de su negocio, ¿A qué se dedica su Empresa? ¿Quiénes son sus clientes? ¿Cuáles son sus productos y/o servicios?', type: 'textarea', name: 'logo_about_us' },
      { label: '¿Qué preferencias e ideas previas tiene para el diseño de su logo?', type: 'textarea', name: 'logo_preferences_design' },
      { label: '¿Dónde más usará su Logo?', type: 'checkbox', name: 'logo_applications', options: ['Papeleria, Merchandising', 'Folletos', 'Rótulos, Locales, Vehículos, Uniformes', 'Sitio Web', 'Redes Sociales'] },
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
      { label: 'Háblenos de su negocio, ¿A qué se dedica su Empresa? ¿Quiénes son sus clientes? ¿Cuáles son sus productos y/o servicios?', type: 'textarea', name: 'website_about_us' },
      { label: 'Si ya cuenta con un sitio web, por favor indíquenos ¿Cuál es?', type: 'text', name: 'website_oldsite' },
      { label: 'Describa cada página o sector de su sitio web y lo que desee comunicar en cada una', type: 'textarea', name: 'website_description' },
      { label: '¿Qué preferencias o ideas previas tiene para el diseño de su sitio web? Si tiene algún ejemplo puede copiarlo aquí:', type: 'textarea', name: 'website_preferences' },
      { label: '¿Tiene redes sociales para colocar en su sitio web? ¿Cuáles?', type: 'checkbox', name: 'website_social_accounts', options: ['Facebook ', 'Twitter', 'Instagram', 'Google+', 'Youtube', 'Linkedin', 'Flicker', 'Pinterest', 'Otras'] },
      { label: '¿Tiene bocetos, ideas previas u otros documentos que puedan ayudar a su proyecto?', type: 'file', name: 'website_files' }
    ],
    'logo-y-pagina-web': [
      'logo-empresa',
      'pagina-web'
    ],
    'rotulo': [
      { label: 'Háblenos de su negocio, ¿A qué se dedica su Empresa? ¿Quiénes son sus clientes? ¿Cuáles son sus productos y/o servicios?', type: 'textarea', name: 'rolls_about_us' },
      { label: '¿Qué preferencias e ideas previas tiene para el diseño de su rótulo?', type: 'text', name: 'rolls_preferences' },
      { label: 'Por favor indíquenos las medidas de su rótulo', type: 'text', name: 'rolls_size' },
      { label: '¿Qué información y elemento desea colocar en su rótulo?', type: 'text', name: 'rolls_content' },
      { label: '¿Tiene bocetos, ideas previas u otros documentos que puedan ayudar a su proyecto? ', type: 'file', name: 'rolls_files' }
    ],
    'rotulo-vehicular': ['rotulo'],
    'rotulo-local': ['rotulo'],
    'rotulo-banner': ['rotulo'],
    'packaging': ['rotulo'],
    'rotulo-vestimenta-uniforme': ['rotulo'],
    'rotulo-furgoneta-camion': ['rotulo'],
    'diseno-folletos-dipticos-tripticos': [
      { label: 'Háblenos de su negocio, ¿A qué se dedica su Empresa? ¿Quiénes son sus clientes? ¿Cuáles son sus productos y/o servicios?', type: 'textarea', name: 'brochures_about_us' },
      { label: 'Describa los resultados que desea obtener de su diptico:', type: 'textarea', name: 'brochures_results' },
      { label: '¿Qué información desea incluir?', type: 'textarea', name: 'brochures_content' },
      { label: '¿Tiene bocetos, ideas previas u otros documentos que puedan ayudar a su proyecto? ', type: 'file', name: 'brochures_files' }
    ],
    'flyer': [
      { label: 'Háblenos de su negocio, ¿A qué se dedica su Empresa? ¿Quiénes son sus clientes? ¿Cuáles son sus productos y/o servicios?', type: 'textarea', name: 'brochures_about_us' },
      { label: 'Describa los resultados que desea obtener de su flyer:', type: 'textarea', name: 'brochures_results' },
      { label: '¿Qué información desea incluir?', type: 'textarea', name: 'brochures_content' },
      { label: '¿Tiene bocetos, ideas previas u otros documentos que puedan ayudar a su proyecto? ', type: 'file', name: 'brochures_files' }
    ],
    'flyer-dos-caras': [
      { label: 'Háblenos de su negocio, ¿A qué se dedica su Empresa? ¿Quiénes son sus clientes? ¿Cuáles son sus productos y/o servicios?', type: 'textarea', name: 'brochures_about_us' },
      { label: 'Describa los resultados que desea obtener de su flyer:', type: 'textarea', name: 'brochures_results' },
      { label: '¿Qué información desea incluir?', type: 'textarea', name: 'brochures_content' },
      { label: '¿Tiene bocetos, ideas previas u otros documentos que puedan ayudar a su proyecto? ', type: 'file', name: 'brochures_files' }
    ],
    'diptico': ['diseno-folletos-dipticos-tripticos'],
    'tripticos': [
      { label: 'Háblenos de su negocio, ¿A qué se dedica su Empresa? ¿Quiénes son sus clientes? ¿Cuáles son sus productos y/o servicios?', type: 'textarea', name: 'brochures_about_us' },
      { label: 'Describa los resultados que desea obtener de su tripticos:', type: 'textarea', name: 'brochures_results' },
      { label: '¿Qué información desea incluir?', type: 'textarea', name: 'brochures_content' },
      { label: '¿Tiene bocetos, ideas previas u otros documentos que puedan ayudar a su proyecto? ', type: 'file', name: 'brochures_files' }
    ],
    'catalogo': [
      { label: 'Háblenos de su negocio, ¿A qué se dedica su Empresa? ¿Quiénes son sus clientes? ¿Cuáles son sus productos y/o servicios?', type: 'textarea', name: 'brochures_about_us' },
      { label: 'Describa los resultados que desea obtener de su catalogo:', type: 'textarea', name: 'brochures_results' },
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
        label: 'Indique cuáles son sus 6 piezas de papelería, merchandising y redes sociales ', type: 'select_tags', name: 'stationery_pieces', options: ['Block de notas 11 X 14, 2 CM', 'Bono o Vale', 'Caratula CD(cuadrado) 12cm x 12cm', 'Carpeta A4', 'Credenciales 9x 5cm', 'Diploma', 'Firma de email', 'Fondo de Email(Solo válido para Microsoft Outlook)', 'Fondo de escritorio(Especificar resolución pixel)', 'Hoja Albarán A4(A4 – A5 – Carta)', 'Hoja Carta(A4 – Carta)', 'Hoja Factura(A4 – A5 – Carta)', 'Hoja Presupuesto(A4 – Carta)', 'Hoja Fax(A4 – Carta)', 'Hoja de Presentación Power Point', 'Señalador 7 X 29 CM', 'Etiqueta CD(circular) 12cm x 12cm', 'Recetario(A4 – A5 – Carta)', 'Sello(logo ó logo y datos)', 'Separadores(A4 – Carta)', 'Sobre americano(con ventana ó sin ventana)', 'Sobre A4(Horizontal ó Vertical)', 'Talonario', 'Talonarios(A4 – A5 – Carta)', 'Tarjeta de crédito', 'Tarjeta de cita', 'Tarjeta de invitación', 'Tarjeta de regalo', 'Tarjeta de visita(Horizontal ó Vertical)', 'Tarjetón A5Tickets', 'Facebook', 'Taza', 'Twitter', 'Instagram', 'Bolígrafo', 'Bolsa(Determinar medida)', 'Etiqueta 9 X 5', 'Etiqueta cierre bolsa', 'GorroImán 9 X 5', 'Libreta', 'Manteles individuales', 'Pad mouse', 'Paraguas', 'Pegatina coche', 'Pen Drive', 'Posa Vasos', 'Reloj']
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
    'ecommerce': [
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
  async storeBrief ({ commit }) {
    let brief = vueInstance.$storage.get('brief')
    let bodyFormData = new FormData()

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

    let saveBrief, token

    try {
      saveBrief = await this.$axios.$post('briefs', bodyFormData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      token = saveBrief.client.token
    } catch (error) {
      return false
    }

    console.log(token)

    if (token) {
      vueInstance.$cookies.set('token_session', token)
    }

    vueInstance.$storage.set('brief', saveBrief.data)
    vueInstance.$storage.set('brief_key', saveBrief.cookie)
    return true
  }
}
