export const state = () => ({
  todos: [
    { id: 1, body: 'Comprar comida', done: false },
    { id: 2, body: 'Comprar televisor', done: false },
    { id: 3, body: 'Comprar cama', done: false },
    { id: 4, body: 'Comprar algo mas', done: false }
  ]
})

export const mutations = {
  GET_TODO (state, todo) {
    state.body = todo
  },
  ADD_TODO (state, todo) {
    todo.id = state.todos.length + 1
    state.todos.push(todo)
  },
  EDIT_TODO (state, { id, body }) {
    state.todos.map(todo => {
      if (todo.id === id) {
        todo.body = body
      }
    })
  },
  REMOVE_TODO (state, id) {
    state.todos = state.todos.filter(todo => {
      return todo.id !== id
    })
  },
  COMPLETE_TODO (state, id) {
    state.todos.map(todo => {
      if (todo.id === id) {
        todo.done = !todo.done
      }
    })
  },
  CLEAR_TODOS (state) {
    state.todos = state.todos.filter(todo => {
      return !todo.done
    })
  }
}

export const actions = {
  getTodo ({ commit }, todo) {
    commit('GET_TODO', todo)
  },
  addTodo ({ commit }, todo) {
    commit('ADD_TODO', todo)
  },
  editTodo ({ commit }, playload) {
    commit('EDIT_TODO', playload)
  },
  removeTodo ({ commit }, id) {
    commit('REMOVE_TODO', id)
  },
  completeTodo ({ commit }, id) {
    commit('COMPLETE_TODO', id)
  },
  clearTodos ({ commit }) {
    commit('CLEAR_TODOS')
  }
}
