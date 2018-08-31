export const state = () => ({
  projects: [1, 2, 3, 4]
})

export const mutations = {
  GET_PROJECTS (state, projects) {
    state.projects = projects
  }
}

export const getters = {
  completedProjects: state => {
    return state.projects.filter(project => project)
  }
}

export const actions = {
  async getTodos ({ commit }) {
    commit('GET_PROJECTS', [5, 6, 7])
  }
}
