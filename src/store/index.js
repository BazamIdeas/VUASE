export const state = () => ({
  todos: []
})

export const mutations = {
  GET_TODOS (state, todos) {
    state.todos = todos
  },
  ADD_TODO (state, todo) {
    todo.id = state.todos.length + 1
    state.todos.push(todo)
  },
  EDIT_TODO (state, { id, title }) {
    state.todos.map(todo => {
      if (todo.id === id) {
        todo.title = title
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
        todo.completed = !todo.completed
      }
    })
  },
  CLEAR_TODOS (state) {
    state.todos = state.todos.filter(todo => {
      return !todo.completed
    })
  }
}

export const getters = {
  completedTodos: state => {
    return state.todos.filter(todo => todo.completed)
  }
}

export const actions = {
  async getTodos ({ commit }) {
    try {
      const data = await this.$axios.$get('todos', { headers: { 'Content-Type': 'application/json' }, responseEncoding: 'utf8' })
      commit('GET_TODOS', data)
    } catch (err) {
      console.log(err)
    }
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
