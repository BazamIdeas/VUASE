export const state = () => ({
  data: {},
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
      title: 'El estilo de tu marca',
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
  }
})

export const mutations = {
  SET_DATA (state, data) {
    state.data = Object.assign(state.data, data)
  },
  SET_STEP (state, data) {
    state.activeStep = data
  }
}

export const getters = {
  getStepByKey: (state) => (key) => {
    let steps = { disenos: 'designs', estilos: 'styles', colores: 'colors', informacion: 'information', pago: 'pay' }
    return state.steps[steps[key]]
  }
}

export const actions = {
  setData ({ commit }, data) {
    commit('SET_DATA', data)
  },
  setStep ({ commit }, data) {
    commit('SET_STEP', data)
  }
}
