export const state = () => ({
  servicios: [
    { slug: 'logo-empresa', title: 'Logo Para Empresa', description: 'Lorem Ipsum' }
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
