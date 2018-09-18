export const state = () => ({
  groups: [
    { icon: '/icons/logo_a_medida_hover.svg', name: 'Logos e Identidades' },
    { icon: '/icons/app_hover.svg', name: 'Web y App' },
    { icon: '/icons/folletos_y_publicidades_hover.svg', name: 'Folletos y Publicidades' },
    { icon: '/icons/rotulo_hover.svg', name: 'Rotulos' },
    { icon: '/images/services/icono-1.png', name: 'Perfiles de Redes Sociales' }
  ]
})

export const mutations = {
  GET_TODOS (state, todos) {
    state.todos = todos
  }
}

export const getters = {
  completedTodos: state => {
    return state.todos.filter(todo => todo.completed)
  }
}

export const actions = {
  async getTodos ({ commit }) {
    commit('GET_TODOS')
  }
}
