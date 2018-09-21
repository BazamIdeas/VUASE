export const state = () => ({
  data: {},
  activeStep: null,
  steps: {
    quote: {
      packages: {
        1: {
          label: 'Promocionar un servicio o producto',
          includes: ['logo-a-medida'],
          secciones: 1
        },
      },
      amount: 0,
      priority: false
    },
    designs: {
      title: '¿Qué diseños te gustan?',
      subtitle: 'Comencemos ayudando a los diseñadores a entender qué estilos prefieres.',
      label: 'Diseños que te gustan'
    },
    styles: {
      title: 'El estilo de tu marca',
      subtitle: 'En base a los diseños que has elegido, estos son los estilos que explorarán los diseñadores. No te preocupes, puedes cambiar de estilos después de empezar a recibir diseños.',
      label: 'Su estilo de marca'
    },
    colors: {
      title: 'Colores a explorar',
      subtitle: 'Selecciona tres colores a ser explorados por los diseñadores.',
      label: 'Colores'
    },
    infomation: null,
    pay: {}
  },
})

export const mutations = {
}

export const getters = {
  getStepByKey: (state) => (key) => {
    let steps = { cotizacion: 'quote', disenos: 'designs', estilos: 'styles', colores: 'colors', informacion: 'information', pago: 'pago' }
    return state.steps[steps[key]]
  }
}

export const actions = {
}
